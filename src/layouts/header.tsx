import Logo from "@/components/logo";
import SearchBar from "@/components/search-bar";
import {UserControlCompunded} from "@/components/user-control";
import WrapperMain from "@/components/wrapper-main";
import React from "react";

const Header = () => {
  return (
    <div className="bg-secondary-700 py-5">
      <WrapperMain className="flex items-center justify-between">
        <Logo />
        <SearchBar />
        <UserControlCompunded />
      </WrapperMain>
    </div>
  );
};

export default Header;
