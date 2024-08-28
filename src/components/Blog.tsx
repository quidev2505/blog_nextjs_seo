"use client";
import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { CategoryContext } from "@/context/CategoryContext";

const Blog = ({ blogs }: any) => {
  const { category } = useContext(CategoryContext);

  const filteredBlogs =
    category !== "all"
      ? blogs.results.filter(
          (blogItem: any) => blogItem?.category[0] === category
        )
      : blogs.results;
  console.log("Gia tri: ");
  console.log(filteredBlogs);

  return (
    <div>
      {filteredBlogs?.length === 0 && (
        <div className="flex flex-col justify-center h-[250px] mt-10 text-center">
          <h2 className="text-3xl text-blue-400 font-bold">
            Don&apos;t have any article about this categories
          </h2>
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredBlogs &&
            filteredBlogs?.map((blog: any) => (
              <div key={blog.article_id} className="w-full">
                <BlogCard blog={blog} className="h-full" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
