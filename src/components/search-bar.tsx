import React from "react";
import {Input} from "./ui/input";
import {FiSearch} from "react-icons/fi";
import {cn} from "@/lib/utils";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({className}: SearchBarProps) => {
  return (
    <div className={cn(className)}>
      <Input
        iconRight={<FiSearch size={20} />}
        placeholder="Search for anything..."
        className="lg:w-161.5"
      />
    </div>
  );
};

export default SearchBar;
