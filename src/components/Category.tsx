"use client";
import { CategoryContext } from "@/context/CategoryContext";
import React, { useContext } from "react";

const Category = ({ cat }: any) => {
  const { category, changeCategory } = useContext(CategoryContext);

  const handleChange = () => {
    changeCategory(cat);
  };

  return (
    <div
      onClick={handleChange}
      className="w-full h-full bg-transparent z-40 text-center"
    >
      <div
        className={`
      ${
        cat === category
          ? "text-black bg-white border-2"
          : "bg-orange text-white border-2"
      } p-4 rounded-lg shadow-md font-bold cursor-pointer`}
      >
        {cat}
      </div>
    </div>
  );
};

export default Category;
