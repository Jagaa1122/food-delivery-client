import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Settings, Truck } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex flex-col gap-3">
      <Image
        className="w-[36px] h-[29px]"
        width={36}
        height={29}
        alt="logo"
        src="/menu.svg"
      />
      <div className="">
        <h2 className="text-black text-[18px] font-[600]">
          Nom<span className="text-black">Nom</span>
        </h2>
        <p className="text-[12px]">Swift delivery</p>
      </div>
      <div className="flex flex-col mt-10 gap-6">
        <Link href="/admin/food-menu">
          <div>
            <Toggle className="h-10 w-[165px] rounded-full py-2 px-6 flex justify-start gap-[10px] ">
              <LayoutDashboard />
              Food menu
            </Toggle>
          </div>
        </Link>
        <Link href={"/admin/orders"}>
          <div>
            <Toggle className="h-10 w-full flex py-2 px-6 justify-start gap-[10px] rounded-full">
              <Truck />
              Orders
            </Toggle>
          </div>
        </Link>

        <Link href={"/admin/settings"}>
          <div>
            <Toggle className="h-10 w-full py-2 px-6 flex justify-start gap-[10px] rounded-full">
              <Settings />
              Settings
            </Toggle>
          </div>
        </Link>
      </div>
    </div>
  );
}
