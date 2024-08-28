import Image from "next/image";
import Link from "next/link";
import React from "react";
import imgNotFound from "../../public/imgNotFound.svg";

const BlogCard = ({ blog }: any) => {
  const contentDescription = blog.description
  const truncateBlogDesc =
    contentDescription?.length > 80
      ? contentDescription.substring(0, 80) + "..."
      : contentDescription;

  const imageUrl = blog.image_url ?? imgNotFound;

  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer">
      <Link href={`/blog/${blog.article_id}`}>
        <div className="w-full relative pt-[100%]">
          <Image
            src={imageUrl}
            alt="image_blog"
            fill
            style={{ objectFit: "cover" }}
            className="top-0 left-0 object-cover rounded-2xl"
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {blog.title}
          </h2>
          <p className="text-gray-600">
            {truncateBlogDesc ?? "Description for news"}
          </p>
          <p className="text-red-600 font-semibold text-[13px] mt-2">
            POST {blog.pubDate}
          </p>
          <div className="rounded-lg bg-gray-500 inline-block float-left p-2 leading-3 mt-1 text-white">
            {blog.category[0]}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
