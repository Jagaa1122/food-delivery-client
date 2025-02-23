import { UploadCloudinary } from "@/app/_components/CloudinaryUpload";
import { Button } from "@/components/ui/button";
import React,{ ReactNode } from "react";

const WrapperComponent = ({children}: {children: ReactNode}) => {
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
                            <Button className="w-[40px] h-[40px] rounded-[20px] p-0 bg-[#EF4444]">+</Button>
                            <p>Add a new dish to the Appitizers</p>
                            
                        </div>
                    </div>
                </div>
            </WrapperComponent>
        </div>
    )
}

export default Page;