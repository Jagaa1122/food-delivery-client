"use client";
import { useState, useEffect } from "react";
import { AddCategory } from "./AddCategory";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toggle } from "@/components/ui/toggle";

export default function DishCategories() {
  const [categories, setCategories] = useState<FoodCategory[] | null>(null);
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [saveID, setSaveID] = useState<string>("");

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

  const createCategory = async (category: string) => {
    try {
      await fetch("http://localhost:2000/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName: category }),
      });

      getCategories();
    } catch (error) {
      console.error("Error adding category:", error);
      alert("An error occurred");
    }
  };
  const deleteCategory = async (categoryId: string) => {
    try {
      await fetch(`http://localhost:2000/category/${categoryId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName: categoryId }),
      });
      getCategories();
    } catch (error) {
      console.log("Error", error);
      alert("Error in deleteCategory");
    }
  };
  const updateCategory = async (categoryId: string, categoryName: string) => {
    try {
      await fetch(`http://localhost:2000/category/${categoryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName: categoryName }),
      });
      getCategories();
    } catch (error) {
      console.log("Error", error);
      alert("Error in updateCategory");
    }
  };

  const EditHandleClick = (id: string) => {
    setOpen(true);
    setIsEdit(true);
    setSaveID(id);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <Avatar className="self-end">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className=" bg-white rounded-xl mb-[20px] p-[20px]">
        <h1 className="text-[24px] font-bold "> Dishes Category</h1>
        <div className="flex flex-wrap gap-3">
          {categories?.map((category) => {
            return (
              <ContextMenu key={category._id}>
                <ContextMenuTrigger>
                  <Toggle
                    variant={"outline"}
                    className="py-2 px-4 rounded-full "
                  >
                    {category.categoryName}
                  </Toggle>
                </ContextMenuTrigger>
                <ContextMenuContent className="mt-5 ">
                  <ContextMenuItem
                    onClick={() => EditHandleClick(category._id)}
                    className="cursor-pointer "
                  >
                    Edit
                  </ContextMenuItem>
                  <ContextMenuItem
                    className="cursor-pointer "
                    onClick={() => deleteCategory(category._id)}
                  >
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            );
          })}

          <AddCategory
            createCategories={createCategory}
            updateCategory={updateCategory}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            saveID={saveID}
            setOpen={setOpen}
            open={open}
          />
        </div>
      </div>
    </div>
  );
}
