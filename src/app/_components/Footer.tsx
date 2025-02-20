import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-primary w-full h-[775px] flex flex-col items-center justify-start gap-40 py-16">
      <div className="flex gap-10 h-[100px] w-[100vw] justify-center items-center text-[25px] bg-[#ef4444] text-white">
        <p>Fresh fast delivered</p>
        <p>Fresh fast delivered</p>
        <p>Fresh fast delivered</p>
        <p>Fresh fast delivered</p>
        <p>Fresh fast delivered</p>
        <p>Fresh fast delivered</p>
      </div>
      <div className="flex gap-40 w-full justify-center items-start text-white">
        <div>
          <Image
            alt={"logo"}
            width={88}
            height={93}
            src={"/Logo Container 1.svg"}
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[16px] font-normal normal text-[#71717a]">
            NOMNOM
          </h1>
          <div className="flex flex-col gap-2">
            <p>Home</p>
            <p>Contant us</p>
            <p>Delivery zone</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[16px] font-normal normal text-[#71717a]">
            MENU
          </h1>
          <div className="flex flex-col gap-2">
            <p>Appetizers</p>
            <p>Salads</p>
            <p>Pizzas</p>
            <p>Lunch favorites</p>
            <p>Main dishes</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1></h1>
          <div className="mt-[25px] flex flex-col gap-2">
            <p>Side dish</p>
            <p>Brunch</p>
            <p>Desserts</p>
            <p>Beverages</p>
            <p>Fish & Sea foods</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-[16px] font-normal normal text-[#71717a]">
            FOLLOW US
          </h1>
          <div className=" flex gap-4 cursor-pointer ">
            <Image
              alt={"fblogo"}
              width={30}
              height={30}
              src={"/Facebook.svg"}
            />
            <Image
              alt={"Iglogo"}
              width={30}
              height={30}
              src={"/Instagram.svg"}
            />
          </div>
        </div>
      </div>
      <div className="flex w-[90%] flex-col gap-5 items-start justify-start">
        <div className="w-full m-auto h-[0.5px] bg-[#71717a]"></div>
        <div className="flex gap-12 text-[#71717a] text-[14px] font-normal">
          <p>Copy right 2024 © Nomnom LLC</p>
          <p>Privacy policy </p>
          <p>Terms and conditoin</p>
          <p>Cookie policy</p>
        </div>
      </div>
    </div>
  );
}
