"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DishCategories() {
  const [categories, setCategories] = useState<any[]>([]);
  const [value, setValue] = useState("");


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

  const createCategory = async (value: string) => {
    try {
      const response = await fetch("http://localhost:2000/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName: value }),
      });

      if (response.ok) {
        // Clear the input
        setValue("");
        // Fetch the updated list instead of trying to update it manually
        await getCategories();
      } else {
        alert("Failed to add category");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      alert("An error occurred");
    }
  };
  const handleAddCategory = () => {
    if (value.trim() === "") {
      alert("Category name missing");
      return;
    }
    createCategory(value);
  };

  return (
    <div className="w-full">
      <div className=" bg-white rounded-xl mb-[20px] p-[20px]">
        <h1 className="text-[24px] font-bold "> Dishes Category</h1>
        <div className="flex flex-wrap gap-3">
          {categories?.map((category) => (
            <div className="border-[1px] border-[#e4e4e7] rounded-[16px] px-4 py-1 text-[14px]" key={category._id}>{category.categoryName}</div>
          ))}
          <Dialog>

            <DialogTrigger className="w-[30px] h-[30px] rounded-[15px] bg-[#EF4444] text-white p-0">
              +
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-[24px]">
                  Add a new category
                </DialogTitle>
              </DialogHeader>

              <div className="flex gap-[24px] mb-[24px]">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label
                    className="text-black font-bold"
                    htmlFor="categoryName"
                  >
                    Category name
                  </Label>
                  <Input type="text" name="categoryName" id="categoryName" value={value}
                    onChange={(e) => setValue(e.target.value)} />
                </div>
              </div>
              <div className="text-end">
                <Button type="button" onClick={handleAddCategory}>Add category</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
