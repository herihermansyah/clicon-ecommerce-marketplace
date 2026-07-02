"use client";
import React from "react";
import {LuShoppingCart} from "react-icons/lu";
import {GrFavorite} from "react-icons/gr";
import {PiUserBold} from "react-icons/pi";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";

interface UserType {
  className?: string;
}

const UserControlCompunded = ({className}: UserType) => {
  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className={cn("flex items-center gap-6", className)}
    >
      <CartControl />
      <FavoriteControl />
      <UserControl />
    </motion.div>
  );
};

const CartControl = ({className}: UserType) => {
  return (
    <button className={cn("text-gray-00 cursor-pointer", className)}>
      <LuShoppingCart size={25} />
    </button>
  );
};

const FavoriteControl = ({className}: UserType) => {
  return (
    <button className={cn("text-gray-00 cursor-pointer", className)}>
      <GrFavorite size={25} />
    </button>
  );
};

const UserControl = ({className}: UserType) => {
  return (
    <button className={cn("text-gray-00 cursor-pointer", className)}>
      <PiUserBold size={25} />
    </button>
  );
};

export {UserControl, UserControlCompunded, CartControl, FavoriteControl};
