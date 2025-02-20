import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import Footer from "../_components/Footer";
import { Carousel } from "@/components/ui/carousel";
import { CarouselSize } from "../_components/Carousel";

export function FirstStep() {
  return (
    <div>
      <div className=" bg-[#18181B] flex justify-between items-center  p-[20px] sticky top-0  z-50 ">
        <Link href={`http://localhost:3001/`}>
          <Image
            alt={"logo"}
            width={100}
            height={100}
            src={"/Logo Container.svg"}
          />
        </Link>
        <div className="flex gap-2">
          <Button className="delivery-address-btn bg-white w-[100px] h-[36px] rounded-[18px] p-0">
            <div className="text-black text-[12px]">Sign up</div>
          </Button>

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
      <div>
        <h1>Categories</h1>
        <CarouselSize />
      </div>
      <Footer />
    </div>
  );
}
