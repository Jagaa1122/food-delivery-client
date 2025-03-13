"use client";
import { useState, useEffect } from "react";

export default function WrapperComponent() {
  const [categories, setCategories] = useState<
    { categoryName: string; _id: string }[] | null
  >(null);
  const getCategories = async () => {
    const data = await fetch("http://localhost:2000/category");
    const jsonData = await data.json();
    setCategories(jsonData.data);
    console.log({ jsonData });
  };
  useEffect(() => {
    getCategories();
  }, []);
  console.log("jghjghj", categories);

  return (
    <div className="w-full">
      <div className=" bg-white rounded-xl mb-[20px] p-[20px]">
        <h1 className="text-[24px] font-medium"> Dishes Category</h1>
        <div className="flex gap-3">
          {categories?.map((category) => (
            <div key={category._id}>{category.categoryName}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
