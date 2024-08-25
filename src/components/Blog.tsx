"use client";
import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import { CategoryContext } from "@/context/CategoryContext";

const Blog = ({ blogs }: any) => {
  const { category } = useContext(CategoryContext);

  const filteredBlogs =
    category !== ""
      ? blogs.results.filter(
          (blogItem: any) => blogItem?.category[0] === category
        )
      : blogs?.results;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredBlogs &&
          filteredBlogs?.map((blog: any) => (
            <div key={blog.article_id} className="w-full">
              <BlogCard blog={blog} className="h-full" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
