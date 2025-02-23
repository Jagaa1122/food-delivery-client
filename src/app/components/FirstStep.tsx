import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/Footer";
import { Carousel } from "@/components/ui/carousel";
import { CarouselSize } from "../_components/Carousel";
import FoodCard from "../_components/Foodcard";
import { FoodDetail } from "../_components/Food-detail";

export function FirstStep() {
  return (
    <div>
      <div className=" bg-[#18181B] flex justify-between items-center  p-[20px] sticky top-0  z-50 ">
        <Link href={`http://localhost:3000/`}>
          <Image
            alt={"logo"}
            width={100}
            height={100}
            src={"/Logo Container.svg"}
          />
        </Link>
        <div className="flex gap-2">
          <Link href="http://localhost:3000/login">
            <Button className="delivery-address-btn bg-white w-[100px] h-[36px] rounded-[18px] p-0">
              <div className="text-black text-[12px]">Sign up</div>
            </Button>
          </Link>

          <Button className="account-btn bg-[#ef4444] w-[100px] h-[36px] rounded-[18px] p-0">
            <div className="text-white text-[12px]">Log in</div>
          </Button>
        </div>
      </div>

      <div className="hero-image">
        <Image
          className="w-full"
          alt={"logo"}
          width={2880}
          height={1140}
          src={
            "https://res.cloudinary.com/dslllxkue/image/upload/v1739972449/BG_2_onzcgy.png"
          }
        />
      </div>
      <div className="bg-[#71717A] w-full">
      <div className="bg-[#71717A] p-5 flex flex-col items-start w-[1120px] m-auto mb-5">
        <h1 className="text-white  font-bold mb-4">Categories</h1>
        <CarouselSize />
      </div>
      <div className="bg-[#71717A]  flex flex-col items-start w-[1120px] m-auto">
        <p className="text-white mb-4 font-bold px-5">Appetizers</p>

        <div className="flex gap-4 flex-wrap justify-center bg-[#71717A]">

          {Array.from(Array(6)).map((_: any, index: any) => {
            return (<div key={index} className="">
              <FoodCard/>
            </div>
            )
          })}

        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
}
