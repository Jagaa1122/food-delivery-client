"use client";
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
import { useState, useEffect } from "react";

interface DishCategoryProps {
  categoryName: string;
}

export default function DishCategory({ categoryName }: DishCategoryProps) {
  const [file, setFile] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<any>(null);

  const onFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className="bg-white rounded-xl p-[20px] mb-6">
      <h1>{categoryName}</h1>
      <div>
        <div className=" flex justify-center items-center flex-col rounded-lg border-2 border-dashed border-[#EF4444] w-[25%] h-[241px]">
          <Dialog>
            <DialogTrigger className="w-[40px] h-[40px] rounded-[20px] bg-[#EF4444] text-white p-0">
              +
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle className="mb-[24px]">
                  Add new Dish to Appitizers
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
                <div className=" flex flex-col  mt-1 mb-5">
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

          <p>Add a new dish to the Appitizers</p>
        </div>
      </div>
    </div>
  );
}
