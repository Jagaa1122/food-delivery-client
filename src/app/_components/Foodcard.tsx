import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FoodDetail } from "./Food-detail";

export default function Foodcard (){
    return <div className="flex flex-col gap-2 p-4 rounded-xl w-[350px]  bg-slate-300">
        <div className="relative">
        <Image className="rounded-lg w-full"
                   alt={"foodmenu"}
                   width={300}
                   height={300}
                   src="https://res.cloudinary.com/dslllxkue/image/upload/v1739798835/cld-sample-4.jpg"
                 />
               <FoodDetail/>

        </div>
         
                 <div className="flex justify-between">
                    <h1 className="text-[#ef4444]">Finger food</h1>
                    <p >$12.99</p>
                 </div>
                 <p>
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, provident! Expedita, a 

                 </p>
    </div>
}
  