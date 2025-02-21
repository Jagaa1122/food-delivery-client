import Image from "next/image";
import { CarouselSize } from "../_components/Carousel";

export default function Home() {
  return (
    <div className="bg-slate-400 w-[800px] ">
      <CarouselSize />
    </div>
  );
}
