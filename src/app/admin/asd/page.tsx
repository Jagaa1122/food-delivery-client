import { UploadCloudinary } from "@/app/_components/CloudinaryUpload";
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";

const WrapperComponent = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className=" bg-white rounded-xl mb-[20px] p-[20px]">
                <p className=" "> Dishes Category</p>
            </div>
            {children}
        </div>
    );
};

const Page = () => {
    return (
        <div className="flex-grow bg-[#F4F4F5] p-[20px]">
            <WrapperComponent>
                <div className="bg-white rounded-xl p-[20px]">
                    <h1>Appitizers</h1>
                    <div>
                        <div className=" flex justify-center items-center flex-col rounded-lg border-2 border-dashed border-[#EF4444] w-[25%] h-[241px]">
                            <label
                                htmlFor="file-upload"
                                className="w-[40px] h-[40px] flex justify-center items-center rounded-[20px] bg-[#EF4444] cursor-pointer text-white"
                            >
                                +
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                accept="image/*"
                            />
                            <p>Add a new dish to the Appitizers</p>

                        </div>
                    </div>
                </div>
            </WrapperComponent>
        </div>
    )
}

export default Page;