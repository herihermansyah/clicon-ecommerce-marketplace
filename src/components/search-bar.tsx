"use client"
import React from "react";
import {Input} from "./ui/input";
import {FiSearch} from "react-icons/fi";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({className}: SearchBarProps) => {
  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className={cn(className)}
    >
      <Input
        iconRight={<FiSearch size={20} />}
        placeholder="Search for anything..."
        className="lg:w-161.5"
      />
    </motion.div>
  );
};

export default SearchBar;
