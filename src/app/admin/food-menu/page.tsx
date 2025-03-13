"use client";
import React, { ReactNode, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import WrapperComponent from "./P";

// const WrapperComponent = ({ children }: { children: ReactNode }) => {
//   const [categories, setCategories] = useState<
//     { categoryName: string; _id: string }[] | null
//   >(null);
//   const getCategories = async () => {
//     const data = await fetch("http://localhost:2000/category");
//     const jsonData = await data.json();
//     setCategories(jsonData.categories);
//     console.log({ jsonData });
//   };
//   useEffect(() => {
//     getCategories();
//   }, []);
//   return (
//     <div>
//       <div className=" bg-white rounded-xl mb-[20px] p-[20px]">
//         <h1 className="text-[24px] font-medium"> Dishes Category</h1>
//         <div>
//           {categories?.map((category) => (
//             <div key={category._id}>{category.categoryName}</div>
//           ))}
//         </div>
//       </div>
//       {children}
//     </div>
//   );
// };

const Page = () => {
  return (
    <div className="flex-grow bg-[#F4F4F5] p-[20px]">
      <WrapperComponent />
      {/* <div className="bg-white rounded-xl p-[20px]">
        <h1>Appitizers</h1>
        <div>
          <div className=" flex justify-center items-center flex-col rounded-lg border-2 border-dashed border-[#EF4444] w-[25%] h-[241px]">
            <Dialog>
              <DialogTrigger>
                <Button className="w-[40px] h-[40px] rounded-[20px] bg-[#EF4444] text-white p-0">
                  +
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="mb-[24px]">
                    Add new Dish to Appitizers
                  </DialogTitle>
                  <DialogDescription>
                    <div className="flex gap-[24px] mb-[24px]">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label
                          className="text-black font-bold"
                          htmlFor="foodname"
                        >
                          Food name
                        </Label>
                        <Input type="text" id="foodname" placeholder="" />
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label
                          className="text-black font-bold"
                          htmlFor="foodprice"
                        >
                          Food price
                        </Label>
                        <Input type="text" id="foodprice" placeholder="" />
                      </div>
                    </div>

                    <div className="grid w-full items-center gap-1.5 mb-[24px]">
                      <Label
                        className="text-black font-bold"
                        htmlFor="ingridients"
                      >
                        Ingridients
                      </Label>
                      <Textarea id="ingridients" />
                    </div>
                    <div className="grid w-full items-center gap-1.5 mb-[24px]">
                      <Label
                        className="text-black font-bold"
                        htmlFor="foodimage"
                      >
                        Food image
                      </Label>
                      <Label
                        className="flex flex-col gap-2 justify-center items-center h-[140px] bg-[#f5f5f5]"
                        htmlFor="foodimage"
                      >
                        <Image
                          className="w-[36px] h-[29px]"
                          width={16}
                          height={16}
                          alt="logo"
                          src="/Frame.svg"
                        />
                        Choose a file or drag & drop it here
                      </Label>
                      <Input
                        className="hidden"
                        type="file"
                        id="foodimage"
                        placeholder=""
                      />
                    </div>
                    <div className="text-end">
                      <Button>Add dish</Button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <p>Add a new dish to the Appitizers</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Page;
