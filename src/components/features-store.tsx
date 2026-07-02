"use client";
import React from "react";
import {BsBox} from "react-icons/bs";
import {TfiCup} from "react-icons/tfi";
import {GoCreditCard} from "react-icons/go";
import {TfiHeadphone} from "react-icons/tfi";
import Typography from "./ui/typography";
import {motion} from "motion/react";

const featuresStoreType = [
  {
    id: 1,
    title: "fasted delivery",
    desc: "Delivery in 24/H",
    icon: <BsBox size={40} />,
  },
  {
    id: 2,
    title: "24 Hours Return",
    desc: "100% money-back guarantee",
    icon: <TfiCup size={40} />,
  },
  {
    id: 3,
    title: "Secure Payment",
    desc: "Your money is safe",
    icon: <GoCreditCard size={40} />,
  },
  {
    id: 4,
    title: "Support 24/7",
    desc: "Live contact/message",
    icon: <TfiHeadphone size={40} />,
  },
];

const FeaturesStore = () => {
  return (
    <motion.div
      initial={{y: -150, scale: 0, opacity: 0}}
      animate={{y: 0, scale: 1, opacity: 1}}
      className="hidden lg:block p-4 border border-gray-100 rounded-md"
    >
      <div className="grid grid-cols-4 divide-x divide-gray-100">
        {featuresStoreType.map((item) => (
          <div
            key={item.id}
            className="flex flex-wrap items-start justify-center gap-4 p-4"
          >
            <div className="text-gray-500">{item.icon}</div>
            <div className="flex flex-col gap-1">
              <Typography variant={"s"} weight={600} className="uppercase">
                {item.title}
              </Typography>
              <Typography variant={"s"} className="text-gray-600">
                {item.desc}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturesStore;
