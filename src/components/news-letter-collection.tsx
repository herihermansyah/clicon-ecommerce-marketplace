"use client"
import React from "react";
import Typography from "./ui/typography";
import {Input} from "./ui/input";
import Button from "./ui/button";
import {IoMdArrowForward} from "react-icons/io";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";

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

interface NewsLetterProps {
  className?: string;
}

const NewsLetter = ({className}: NewsLetterProps) => {
  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className={cn(
        "flex flex-col gap-8 items-center justify-center bg-secondary-700 py-18",
        className,
      )}
    >
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
    </motion.div>
  );
};

export {NewsLetter};
