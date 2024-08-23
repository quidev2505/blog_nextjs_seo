import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold mb-5 text-blue-400">
          Page not found - 404
        </h1>
        <Link
          href="/"
          className="rounded-full p-5 bg-gray-700 text-white font-bold text-2xl"
        >
          <div className="flex gap-10 justify-center h-4 items-center">
            Go to dashboard
            <svg
              className="h-10 w-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
