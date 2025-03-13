"use client";
import React, { ReactNode, useEffect, useState } from "react";
import DishCategory from "../_components/DishCategory";
import DishCategories from "../_components/DishCategories";


const Page = () => {

  const [categories, setCategories] = useState<any[]>([]);
  const getCategories = async () => {
    const data = await fetch("http://localhost:2000/category");
    const jsonData = await data.json();
    setCategories(jsonData.data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="flex-grow bg-[#F4F4F5] p-[20px]">
      <DishCategories />

      {categories?.map((category) => (
        <DishCategory key={category._id} categoryName = {category.categoryName} />
      ))}

    </div>
  );
};

export default Page;
