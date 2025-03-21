"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon, Plus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { z } from "zod";

const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const uploadImage = async (file: File | null) => {
  if (!file) {
    return null;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await res.json();
    return result.secure_url;
  } catch (error: unknown) {
    return { error: "failed to upload image" };
  }
};

const formSchema = z.object({
  foodName: z.string().min(2, {
    message: "Food name minimum 2 letter required",
  }),
  price: z
    .string({
      message: "Price is required",
    })
    .min(1, "Please price is required"),
  ingredients: z.string().min(2, "Ingredients must contain at least 2 text"),
  category: z.string(),
  image: z.string().nonempty("Zuragaa oruulna uu !"),
});

const Page = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [dishes, setDishes] = useState<Food[]>([]);
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [isEditCategory, setIsEditCategory] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      price: "",
      ingredients: "",
      category: "",
      image: "",
    },
  });

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    createDish(values);
    createCategory();
    setOpen(false);
    form.reset();
  }

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
  // // Fetch dishes
  const getDishes = async () => {
    try {
      const response = await fetch("http://localhost:2000/food");
      const jsonData = await response.json();
      console.log("dish bn", jsonData);
      setDishes(jsonData.getfood);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getDishes();
  }, []);
  // // Create new dish
  const createDish = async (value: Food) => {
    const imageUrl = await uploadImage(file);
    try {
      await fetch("http://localhost:2000/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FoodName: value.foodName,
          price: value.price,
          image: imageUrl,
          ingredients: value.ingredients,
          category: value.category,
        }),
      });

      await getDishes();
    } catch (error) {
      console.error("Error adding food:", error);
    }
  };

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
    const filee = event.target.files[0];
    if (!filee) {
      return;
    }
    setFile(filee);

    console.log("yu ve?", file);

    const temImageUrl = URL.createObjectURL(file);
    setPreviewUrl(temImageUrl);
    form.setValue("image", "uploaded");
  };
  const deleteImage = () => {
    setPreviewUrl(null);
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
              <Toggle
                key={category._id}
                variant="outline"
                className="py-2 px-4 rounded-full"
              >
                {category.categoryName}
              </Toggle>
            ))}

            {/* Add New Category Button */}
            <Dialog
              open={categoryDialogOpen}
              onOpenChange={setCategoryDialogOpen}
            >
              <DialogTrigger asChild>
                <Toggle
                  variant="outline"
                  className="py-2 px-4 rounded-full cursor-pointer bg-[#EF4444] text-white"
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
                  <DialogTitle>
                    {isEditCategory ? "Edit Category" : "Add New Category"}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label
                    className="text-black font-bold"
                    htmlFor="categoryName"
                  >
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
                  <Button
                    onClick={isEditCategory ? updateCategory : createCategory}
                  >
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
              {/* <div className="flex justify-center items-center flex-col rounded-lg border-2 border-dashed border-[#EF4444] w-[25%] h-[241px]"> */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-[290px] h-[260px] px-4 py-2 rounded-[20px] flex flex-col justify-center items-center gap-6 border-dashed border-[1px] border-[#ef4444] cursor-pointer">
                    <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#ef4444]">
                      +
                    </div>
                    <p>Add new Dish to {category.categoryName}</p>
                  </div>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader hidden></DialogHeader>
                  <DialogTitle hidden></DialogTitle>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-[460px]  flex flex-col items-start gap-6  "
                    >
                      <div className="flex gap-6 items-start ">
                        <div className="flex flex-col gap-2 items-start h-[60px] w-full ">
                          <h4 className="text-[14px] font-[500] leading-[14px] ">
                            Food name
                          </h4>
                          <FormField
                            control={form.control}
                            name="foodName"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    placeholder="Type food name"
                                    className="w-full "
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-start h-[60px] w-full ">
                          <h4 className="text-[14px] font-[500] leading-[14px] ">
                            Food price
                          </h4>
                          <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    placeholder="Enter price..."
                                    className="w-full "
                                    {...field}
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="w-full h-[60px] flex flex-col gap-[8px] ">
                        <p className="text-[14px] leading-[14px] font-[500] ">
                          Ingredients
                        </p>
                        <FormField
                          control={form.control}
                          name="ingredients"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="List ingredients..."
                                  className="w-full py-2 px-3 "
                                  {...field}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="h-[160px] w-full flex flex-col gap-2 ">
                        <h4 className="text-[14px] font-[500] leading-[14px] ">
                          Food image
                        </h4>
                        <FormField
                          control={form.control}
                          name="image"
                          render={({ field: { onChange, value, ...rest } }) => (
                            <FormItem>
                              <FormControl>
                                {previewUrl ? (
                                  <div className="w-full h-full relative ">
                                    <div className="h-[138px]">
                                      <Image
                                        alt="file-input"
                                        src={previewUrl}
                                        width={1000}
                                        height={1000}
                                        className={
                                          "size-full object-cover rounded-md border border-dashed border-blue-500/20 bg-blue-500/5 bg-cover bg-no-repeat bg-center"
                                        }
                                      />
                                    </div>
                                    <Button
                                      onClick={deleteImage}
                                      className="absolute top-2 right-2 rounded-full w-9 h-9  "
                                    >
                                      <X />
                                    </Button>
                                  </div>
                                ) : (
                                  <label
                                    htmlFor="file-input"
                                    className={`flex flex-col h-[138px] items-center justify-center cursor-pointer gap-2 p-4  rounded-md border border-dashed border-blue-500/20 bg-blue-500/5 `}
                                  >
                                    <div className="p-2 bg-[#fff] rounded-full">
                                      <ImageIcon className=" w-4 h-4 " />{" "}
                                    </div>
                                    Choose a file or drag & drop it here
                                    <Input
                                      id="file-input"
                                      type="file"
                                      {...rest}
                                      onChange={onFileUpload}
                                      className="hidden"
                                    />
                                  </label>
                                )}
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="w-full pt-6 flex items-center justify-end ">
                        <Button type="submit">Add Dish</Button>
                      </div>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>

              {/* <p>Add a new dish to {category.categoryName}</p> */}
              {/* </div> */}

              <div>
                {dishes
                  ?.filter((dish) => dish.category === category._id)
                  .map((dish, index) => {
                    return (
                      <div
                        className="w-[250px] h-[200px] bg-slate-500"
                        key={index}
                      >
                        <img src={dish.image} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
