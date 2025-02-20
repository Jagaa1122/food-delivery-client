import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Arrays = [
  { num: "Appetizers" },
  { num: "Salads" },
  { num: "Pizzas" },
  { num: "Lunch favorites" },
  { num: "Main dishes" },
  { num: "Fish & Sea foods" },
  { num: "Side dish" },
  { num: "Brunch" },
  { num: "Desserts" },
  { num: "Tsuiwan" },
  { num: "Budaatai huurga" },
  { num: "Guriltai shul" },
  { num: "Gedesen huushuur" },
  { num: "Buuz" },
  { num: "Huitsai" },
];
export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[95%]"
    >
      <CarouselContent>
        {Arrays.map((item, index) => (
          <CarouselItem key={index} className="basis-1/9">
            <div className="h-9 w-full flex justify-center px-7 items-center text-white bg-black rounded-full">
              {item.num}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
