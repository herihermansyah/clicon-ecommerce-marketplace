"use client";
import React from "react";
import Typography from "./ui/typography";
import Link from "next/link";
import {motion} from "motion/react";
import {cn} from "@/lib/utils";

const popularTagData = [
  {name: "Game", link: "game"},
  {name: "Iphone", link: "iphone"},
  {name: "TV", link: "tv"},
  {name: "Asus", link: "asus"},
  {name: "Macbook", link: "macbook"},
  {name: "SSD", link: "ssd"},
  {name: "Powerbank", link: "powerbank"},
];

interface PopularTagProps {
  fontColor?: string;
}

const PopularTag = ({fontColor}: PopularTagProps) => {
  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className="flex flex-col gap-4.5 w-78"
    >
      <Typography
        variant={"m"}
        weight={500}
        className={cn("text-gray-00 uppercase", fontColor)}
      >
        popular tag
      </Typography>
      <div className="flex items-center gap-2 flex-wrap">
        {popularTagData.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex items-center gap-2 border border-gray-800 hover:bg-gray-800 hover:border-gray-00 hover:rounded-[3px]"
          >
            <Typography
              variant={"s"}
              weight={500}
              className="text-gray-400 py-1.5 px-3 hover:text-gray-00"
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default PopularTag;
