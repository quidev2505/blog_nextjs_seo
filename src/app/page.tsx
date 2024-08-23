import Categories from "@/components/Categories";
import { CategoryProvider } from "@/context/CategoryContext";
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
  const categories = ["sports", "health", "entertainment", "technology"];
  const blogs = await fetchBlogs();
  return (
    <CategoryProvider>
      <Categories categories={categories} />
      <Blog blogs={blogs} />
    </CategoryProvider>
  );
}
