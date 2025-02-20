"use client";
import { useState } from "react";
import { Header } from "./_components/Header";
import Footer from "./_components/Footer";
import Image from "next/image";
import { FirstStep } from "./components/FirstStep";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="">
      {/* <Header />
      <div className="hero-image">
        <Image  className="w-full" 
        alt={"logo"} width={2880} height={1140} 
        src={"https://res.cloudinary.com/dslllxkue/image/upload/v1739972449/BG_2_onzcgy.png"} />

      </div>
      <Footer /> */}
      <FirstStep />
    </div>
  );
}
