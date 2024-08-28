"use client";
import { useState, useEffect, useCallback } from "react";
import Categories from "@/components/Categories";
import SearchInfo from "@/components/SearchInfo";
import dynamic from "next/dynamic";

const Blog = dynamic(() => import("@/components/Blog"));

const fetchBlogs = async (keyword = "") => {
  console.log("Fetching blogs with keyword:", keyword); // Debugging log
  try {
    const res = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${
        process.env.NEXT_PUBLIC_API_KEYS
      }&country=us&category=sports,health,entertainment,technology${
        keyword ? `&q=${keyword}` : ""
      }`
    );
    const response = await res.json();
    return response;
  } catch (e) {
    console.error("Error fetching blogs:", e);
    return null;
  }
};

export default function Home() {
  const categories = ["all", "sports", "health", "entertainment", "technology"];
  const [keyword, setKeyword] = useState("");
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogsMemoized = useCallback(fetchBlogs, []);

  useEffect(() => {
    console.log("useEffect running"); // Debugging log
    if (isLoading) {
      fetchBlogsMemoized().then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
    }
  }, [fetchBlogsMemoized, isLoading]);

  const handleSearchInfo = useCallback(
    async (info: string) => {
      setIsLoading(true);
      const newBlogs = await fetchBlogsMemoized(info);
      setBlogs(newBlogs);
      setIsLoading(false);
    },
    [fetchBlogsMemoized]
  );

  return (
    <div>
      <Categories categories={categories} className="my-10" />
      <SearchInfo
        keyword={keyword}
        setKeyword={setKeyword}
        onhandleSearch={handleSearchInfo}
      />
      {isLoading ? <p>Loading...</p> : blogs && <Blog blogs={blogs} />}
    </div>
  );
}
