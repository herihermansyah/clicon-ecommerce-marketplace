import React from "react";
import Typography from "./ui/typography";
import {Input} from "./ui/input";
import Button from "./ui/button";
import {IoMdArrowForward} from "react-icons/io";
import Image from "next/image";

interface SupportTech {
  id: number;
  image: string;
  name: string;
}

const supportTech: SupportTech[] = [
  {id: 1, image: "/google.svg", name: "google"},
  {id: 2, image: "/amazon.svg", name: "amazon"},
  {id: 3, image: "/philips.svg", name: "philips"},
  {id: 4, image: "/toshiba.svg", name: "toshiba"},
  {id: 5, image: "/samsung.svg", name: "samsung"},
];

const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center bg-secondary-700 py-18">
      <div className="flex flex-col gap-3 items-center justify-center">
        <Typography variant={"h1"} weight={600} className="text-gray-00">
          Subscribe to our newsletter
        </Typography>
        <Typography variant={"m"} className="text-gray-400 w-134 text-center">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </Typography>
      </div>
      <div className="relative">
        <Input placeholder="Email Address" className="w-156 h-18" />
        <Button
          iconRight={<IoMdArrowForward />}
          className="absolute top-1/2 -translate-y-1/2 right-3"
        >
          SUBRCRIBE
        </Button>
      </div>
      <div className="flex items-center gap-12 border-t border-gray-600">
        {supportTech.map((item) => (
          <div
            key={item.id}
            className="w-18 h-18 flex items-center justify-center"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={72}
              height={72}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export {NewsLetter};
