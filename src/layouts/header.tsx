"use client";
import CategoryMegaMenu from "@/components/category-mega-menu";
import CurrencySelect from "@/components/currency-select";
import HeaderMenu from "@/components/header-menu";
import LanguageSelect from "@/components/language-select";
import Logo from "@/components/logo";
import SearchBar from "@/components/search-bar";
import SocialMedia from "@/components/social-media";
import IconButton from "@/components/ui/icon-button";
import Typography from "@/components/ui/typography";
import {UserControlCompunded} from "@/components/user-control";
import WrapperMain from "@/components/wrapper-main";
import {PiPhoneCallLight} from "react-icons/pi";
import {MdOutlineMenu} from "react-icons/md";
import {MdClose} from "react-icons/md";
import React from "react";
import {cn} from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      {/* welcome , social media, languange and currency */}
      <div className="bg-secondary-700 py-3 border-b border-gray-600">
        <WrapperMain className="flex items-center justify-between whitespace-nowrap flex-col md:flex-row gap-2">
          <Typography variant={"s"} className="text-gray-00">
            Welcome to Clicon online eCommerce store.{" "}
          </Typography>
          <div className="flex items-center gap-2 md:gap-6 flex-wrap justify-center">
            <SocialMedia />
            <div className="w-px h-7 bg-gray-500 hidden sm:block" />
            <div className="flex items-center gap-6">
              <LanguageSelect />
              <CurrencySelect />
            </div>
          </div>
        </WrapperMain>
      </div>
      {/* logo, search, and user control and menu toggle mobile */}
      <div className="bg-secondary-700 py-5 relative z-50">
        <WrapperMain className="flex items-center justify-between">
          <Logo />
          <SearchBar className="hidden lg:block" />
          <UserControlCompunded className="hidden lg:flex" />
          <div
            className={cn(
              "absolute left-1/2 -translate-x-1/2 -translate-y-90 -z-2",
              "flex flex-col gap-5 items-center",
              "bg-secondary-700 pt-10 pb-5 w-full",
              "transition-all duration-500 ease-in-out",
              "lg:hidden",
              isOpen && "translate-y-61",
            )}
          >
            <SearchBar />
            <UserControlCompunded />
            <div className="flex items-center flex-col gap-5 whitespace-nowrap">
              <CategoryMegaMenu />
              <HeaderMenu defaultColor="text-gray-00" />
            </div>
          </div>
          <IconButton
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 block lg:hidden"
          >
            {isOpen ? <MdClose size={25} /> : <MdOutlineMenu size={25} />}
          </IconButton>
        </WrapperMain>
      </div>
      {/* menu all categories and sub categories */}
      <div className="border-b border-gray-100 bg-gray-00 hidden lg:block">
        <WrapperMain className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-6 whitespace-nowrap">
            <CategoryMegaMenu />
            <HeaderMenu />
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[28px] text-gray-900">
              <PiPhoneCallLight />
            </span>
            <Typography variant={"l"}>+1-202-555-0104</Typography>
          </div>
        </WrapperMain>
      </div>
    </div>
  );
};

export default Header;
