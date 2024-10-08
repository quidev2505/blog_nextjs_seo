import NotFound from "@/app/not-found";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { cache } from "react";
import imgNotFound from "../../../../public/imgNotFound.svg";

const fetchBlog = cache(async (article_id: string) => {
  try {
    const res = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${process.env.NEXT_PUBLIC_API_KEYS}&id=${article_id}`
    );
    if (res.status === 404) {
      NotFound();
    }
    const response = res.json();
    return response;
  } catch (e) {
    console.log(e);
  }
});

export async function generateMetadata(
  {
    params,
  }: {
    params: { id: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = await fetchBlog(params.id);
  const previousImages = (await parent).openGraph?.images || [];
  const title = blog.results[0]?.title;
  const description = blog.results[0]?.description;
  const imageUrl = blog.results[0]?.image_url;

  return {
    title: title,
    description: description,
    openGraph: {
      images: [imageUrl, ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  const res = await fetch(
    `https://newsdata.io/api/1/latest?apikey=${process.env.NEXT_PUBLIC_API_KEYS}&country=us&category=sports,health,entertainment,technology`
  );
  const response = await res.json();
  return response.results.map(({ article_id }: any) => ({
    id: article_id,
  }));
}

const page = async ({ params }: any) => {
  const blog = await fetchBlog(params.id);
  const imageUrl = blog.results[0]?.image_url ?? imgNotFound;
  const description = blog.results[0]?.description;
  return (
    <div className="mx-auto p-2">
      <Link href="/">
        <p className="bg-yellow-500 inline-block rounded-md p-4 text-white font-bold leading-1">
          Back
        </p>
      </Link>
      <div className="w-full relative pt-[40%]">
        <Image
          src={imageUrl}
          alt="image_blog"
          fill
          style={{ objectFit: "contain" }}
          className="top-0 left-0 object-cover rounded-2xl"
        />
      </div>

      <div className="mt-4">
        <h1 className="md:text-3xl font-semibold">{blog.results[0]?.title}</h1>
        {Array(7)
          .fill(0)
          .map((item) => (
            <p className="text-gray-500 mt-2" key={item}>
              {description}
            </p>
          ))}
        <div className="italic font-bold my-3">
          Link: &nbsp;
          <Link href="image_blog_news" className="text-blue-500">
            &nbsp;{blog.results[0]?.link}
          </Link>
        </div>
        <p className="text-red-600 mt-2 font-bold">
          Author: {blog.results[0]?.creator?.[0]}
        </p>
        <div className="mt-4 flex items-center text-gray-400">
          <span>&copy; Published on {blog.results[0]?.pubDate}</span>
        </div>
      </div>
    </div>
  );
};

export default page;
