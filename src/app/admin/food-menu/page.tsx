"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react"; 

const Page = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [dishes, setDishes] = useState<any[]>([]);
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [isEditCategory, setIsEditCategory] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [file, setFile] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<any>(null);

  // Fetch categories
  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:2000/category");
      const jsonData = await response.json();
      setCategories(jsonData.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

// // Fetch dishes
// const getDishes = async () => {
//   try {
//     const response = await fetch("http://localhost:2000/getFood");
//     const jsonData = await response.json();
//     setDishes(jsonData.data);
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//   }
// };

// useEffect(() => {
//   getDishes();
// }, []);



  // Create new category
  const createCategory = async () => {
    try {
      await fetch("http://localhost:2000/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName }),
      });
      setCategoryName("");
      setCategoryDialogOpen(false);
      await getCategories();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  // // Create new dish
  // const createDish = async () => {
  //   try {
  //     await fetch("http://localhost:2000/addFood", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ categoryName }),
  //     });
  //     await getDishes();
  //   } catch (error) {
  //     console.error("Error adding food:", error);
  //   }
  // };

  // Update category
  const updateCategory = async () => {
    try {
      await fetch(`http://localhost:2000/category/${currentCategoryId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName }),
      });
      setCategoryName("");
      setCurrentCategoryId("");
      setIsEditCategory(false);
      setCategoryDialogOpen(false);
      await getCategories();
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  // Delete category
  const deleteCategory = async (categoryId: string) => {
    try {
      await fetch(`http://localhost:2000/category/${categoryId}`, {
        method: "DELETE",
      });
      await getCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  // Handle edit click
  const handleEditCategory = (category: any) => {
    setIsEditCategory(true);
    setCurrentCategoryId(category._id);
    setCategoryName(category.categoryName);
    setCategoryDialogOpen(true);
  };

  // Handle dish image upload
  const onFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex-grow bg-[#F4F4F5] p-[20px]">
      <div className="w-full flex flex-col gap-6">
        <Avatar className="self-end">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="bg-white rounded-xl mb-[20px] p-[20px]">
          <h1 className="text-[24px] font-bold">Dishes Category</h1>
          <div className="flex flex-wrap gap-3">
            {categories?.map((category) => (
              <Toggle key={category._id} variant="outline" className="py-2 px-4 rounded-full">
                {category.categoryName}
              </Toggle>
            ))}

            {/* Add New Category Button */}
            <Dialog open={categoryDialogOpen} onOpenChange={setCategoryDialogOpen}>
              <DialogTrigger asChild>
                <Toggle 
                  variant="outline" 
                  className="py-2 px-4 rounded-full cursor-pointer"
                  onClick={() => {
                    setIsEditCategory(false);
                    setCategoryName("");
                  }}
                >
                  +
                </Toggle>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{isEditCategory ? "Edit Category" : "Add New Category"}</DialogTitle>
                </DialogHeader>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="text-black font-bold" htmlFor="categoryName">
                    Category Name
                  </Label>
                  <Input 
                    type="text" 
                    id="categoryName" 
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </div>
                <div className="text-end">
                  <Button onClick={isEditCategory ? updateCategory : createCategory}>
                    {isEditCategory ? "Update" : "Add"} Category
                  </Button>
                </div>
              </DialogContent>
            </Dialog>



          </div>
        </div>

        {/* Dish Categories Display */}
        {categories?.map((category) => (
          <div key={category._id} className="bg-white rounded-xl p-[20px] mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-semibold">{category.categoryName}</h1>
              <div className="flex gap-2">
                <Button 
                  onClick={() => handleEditCategory(category)} 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button 
                  onClick={() => deleteCategory(category._id)} 
                  variant="ghost" 
                  size="icon"
                  className="h-8 w-8 text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>


            </div>
            
            <div className="flex gap-3">
              <div className="flex justify-center items-center flex-col rounded-lg border-2 border-dashed border-[#EF4444] w-[25%] h-[241px]">
                <Dialog>
                  <DialogTrigger className="w-[40px] h-[40px] rounded-[20px] bg-[#EF4444] text-white p-0">
                    +
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="mb-[24px]">
                        Add new Dish to {category.categoryName}
                      </DialogTitle>
                      <DialogDescription></DialogDescription>
                    </DialogHeader>

                    <div className="flex gap-[24px] mb-[24px]">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label className="text-black font-bold" htmlFor="foodname">
                          Food name
                        </Label>
                        <Input type="text" id="foodname" placeholder="" />
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label className="text-black font-bold" htmlFor="foodprice">
                          Food price
                        </Label>
                        <Input type="text" id="foodprice" placeholder="" />
                      </div>
                    </div>

                    <div className="grid w-full items-center gap-1.5 mb-[24px]">
                      <Label className="text-black font-bold" htmlFor="ingridients">
                        Ingridients
                      </Label>
                      <Textarea id="ingridients" />
                    </div>
                    <div>
                      <div className="mt-1 flex gap-1">
                        <label
                          htmlFor="file-input"
                          className="text-[14px] font-semibold ml-2 flex flex-col"
                        >
                          Food image
                        </label>
                      </div>
                      <div className="flex flex-col mt-1 mb-5">
                        <label
                          htmlFor="file-input"
                          className="bg-gray-100 rounded-xl w-full h-[150px] flex flex-col justify-center items-center cursor-pointer border-[1px] border-gray"
                        >
                          <input
                            hidden
                            type="file"
                            id="file-input"
                            onChange={onFileUpload}
                          />

                          {!imageUrl ? (
                            <div className="flex flex-col justify-center items-center gap-2">
                              <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M9.5 2.5V9.5H2.5V2.5H9.5ZM9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM7.07 5.93L5.57 7.865L4.5 6.57L3 8.5H9L7.07 5.93Z"
                                    fill="#202124"
                                  />
                                </svg>
                              </div>
                              <span>Choose a file or drag & drop it here</span>
                            </div>
                          ) : (
                            <div className="flex flex-col justify-center items-center h-[150px] w-full gap-2">
                              <Image
                                src={imageUrl}
                                alt="Uploaded"
                                width={1000}
                                height={1000}
                                className="object-cover size-full rounded-lg bg-cover bg-no-repeat bg-center"
                              />
                            </div>
                          )}
                        </label>
                      </div>
                    </div>
                    <div className="text-end">
                      <Button>Add dish</Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <p>Add a new dish to {category.categoryName}</p>
              </div>


            <div>hool</div>



            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;