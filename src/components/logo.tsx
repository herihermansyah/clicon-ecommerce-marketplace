"use client"
import Image from "next/image";
import React from "react";
import {motion} from "motion/react";

const Logo = () => {
  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className="min-w-44.25 h-min-[48px]"
    >
      <Image src="/logo.svg" alt="logo" width={177} height={48} priority />
    </motion.div>
  );
};

export default Logo;
