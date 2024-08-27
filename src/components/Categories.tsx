"use client";
import React from "react";
import Category from "./Category";

const Categories = ({ categories }: any) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-3">
      {categories?.map((category: any) => (
        <div
          key={category}
          className="flex items-center justify-center p-2 bg-blue-400 rounded-lg shadow-md  hover:bg-blue-600 transition-colors duration-200"
        >
          <Category
            cat={category}
            className="text-white text-sm sm:text-base truncate"
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
