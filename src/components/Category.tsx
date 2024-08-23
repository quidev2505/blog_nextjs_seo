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
      className={`
      ${
        cat === category
          ? "text-black bg-white border-2"
          : "bg-[#5b9bea] text-white"
      } p-4 rounded-lg shadow-md font-bold cursor-pointer`}
    >
      {cat}
    </div>
  );
};

export default Category;
