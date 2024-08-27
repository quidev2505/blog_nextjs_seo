import Categories from "@/components/Categories";
import dynamic from "next/dynamic";
import { cache } from "react";

const Blog = dynamic(() => import("@/components/Blog"));

const fetchBlogs = cache(async () => {
  try {
    const res = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${process.env.API_KEYS}&country=us&category=sports,health,entertainment,technology`
    );
    const response = res.json();
    return response;
  } catch (e) {
    console.log(e);
  }
});

export default async function Home() {
  const categories = ["all", "sports", "health", "entertainment", "technology"];
  let blogs = await fetchBlogs();
  return (
    <div>
      <Categories categories={categories} className="my-10" />
      <Blog blogs={blogs} />
    </div>
  );
}
