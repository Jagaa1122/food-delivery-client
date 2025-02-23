import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
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
        <Button className="delivery-address-btn bg-white w-[240px] h-[36px] rounded-[18px] p-0">
          <Image
            alt={"locationIcon"}
            width={20}
            height={20}
            src={"/locationIcon.svg"}
            className="w-[16px] h-[16px]"
          />
          <div className="text-[#71717a] text-[12px]">
            {" "}
            <span className="text-[#ef4444]">Delivery address:</span> Add
            Location
          </div>
          <ChevronRight className="text-[#71717a]" />
        </Button>
        <Button className="cart-btn bg-[#f5f5f5] w-[36px] h-[36px] rounded-[18px] p-0">
          <Image
            alt={"shoppingCartIcon"}
            width={20}
            height={20}
            src={"/shoppingcart.svg"}
            className="w-[16px] h-[16px]"
          />
        </Button>
        <Button className="account-btn bg-[#ef4444] w-[36px] h-[36px] rounded-[18px] p-0">
          <Image
            alt={"userIcon"}
            width={20}
            height={20}
            src={"/user.svg"}
            className="w-[16px] h-[16px]"
          />
        </Button>
      </div>
    </div>
  );
}
