import React from "react";
import {Input} from "./ui/input";
import {FiSearch} from "react-icons/fi";

const SearchBar = () => {
  return (
    <div>
      <Input
        iconRight={<FiSearch size={20} />}
        placeholder="Search for anything..."
        className="w-161.5"
      />
    </div>
  );
};

export default SearchBar;
