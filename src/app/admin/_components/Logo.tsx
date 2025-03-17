"use client"

import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Settings, Truck } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();
  
  return (
    <div className="">
      <div className="flex gap-4 p-5">
        <Image
          className="w-[36px] h-[29px] self-center"
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
      </div>
      
      <div className="flex flex-col mt-2 gap-3 p-4">
        <Link 
          href="/admin/food-menu"
          className={`h-10 w-full rounded-full py-2 px-6 flex content-center justify-start gap-[10px] ${
            pathname === "/admin/food-menu" 
              ? "bg-black text-white" 
              : "hover:bg-gray-200"
          }`}
        >
          <LayoutDashboard size={16} className="self-center"/>
          Food menu
        </Link>
        
        <Link 
          href="/admin/orders"
          className={`h-10 w-full rounded-full py-2 px-6 flex justify-start gap-[10px] ${
            pathname === "/admin/orders" 
              ? "bg-black text-white" 
              : "hover:bg-gray-200"
          }`}
        >
          <Truck size={16} className="self-center"/>
          Orders
        </Link>

        <Link 
          href="/admin/settings"
          className={`h-10 w-full rounded-full py-2 px-6 flex justify-start gap-[10px] ${
            pathname === "/admin/settings" 
              ? "bg-black text-white" 
              : "hover:bg-gray-200"
          }`}
        >
          <Settings size={16} className="self-center"/>
          Settings
        </Link>
      </div>
    </div>
  );
}