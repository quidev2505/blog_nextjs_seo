import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About page",
  description: "This is about page",
};

const About = async () => {
  return (
    <div className="flex flex-col px-3 h-[370px]">
      <h2 className="text-4xl text-blue-400 mb-4 font-bold">About Page</h2>
      <div className="text-justify">
        <h2 className="font-bold">Our Blog: Blog Latest News</h2>
        <p>
          Stay informed with our Blog Latest News section, your go-to source for
          up-to-the-minute updates and trending topics. We curate a diverse
          range of articles covering everything from industry insights and
          technological breakthroughs to lifestyle tips and cultural phenomena.
          Our team of expert writers delivers fresh, engaging content daily,
          ensuring you&apos;re always in the loop. Whether you&apos;re seeking
          professional advice, entertainment news, or thought-provoking
          commentary, our latest blog posts offer something for every reader.
          Don&apos;t miss out on the conversations shaping our world – bookmark
          our Blog Latest News page and join our community of informed, curious
          minds.
          <p className="font-semibold text-red-400">
            Join our community of tech-savvy readers and stay ahead in the
            fast-paced world of news
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
