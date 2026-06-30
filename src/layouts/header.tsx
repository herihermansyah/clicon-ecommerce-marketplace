import CategoryMegaMenu from "@/components/category-mega-menu";
import CurrencySelect from "@/components/currency-select";
import LanguageSelect from "@/components/language-select";
import Logo from "@/components/logo";
import SearchBar from "@/components/search-bar";
import SocialMedia from "@/components/social-media";
import Typography from "@/components/ui/typography";
import {UserControlCompunded} from "@/components/user-control";
import WrapperMain from "@/components/wrapper-main";
import React from "react";

const Header = () => {
  return (
    <div>
      {/* welcome , social media, languange and currency */}
      <div className="bg-secondary-700 py-3 border-b border-gray-600">
        <WrapperMain className="flex items-center justify-between ">
          <Typography variant={"s"} className="text-gray-00">
            Welcome to Clicon online eCommerce store.{" "}
          </Typography>
          <div className="flex items-center gap-6">
            <SocialMedia />
            <div className="w-px h-7 bg-gray-500" />
            <div className="flex items-center gap-6">
              <LanguageSelect />
              <CurrencySelect />
            </div>
          </div>
        </WrapperMain>
      </div>
      {/* logo, search, and user control */}
      <div className="bg-secondary-700 py-5">
        <WrapperMain className="flex items-center justify-between">
          <Logo />
          <SearchBar />
          <UserControlCompunded />
        </WrapperMain>
      </div>
      {/* menu all categories and sub categories */}
      <div>
        <div>
          <WrapperMain className="py-4">
            <CategoryMegaMenu />
          </WrapperMain>
        </div>
      </div>
    </div>
  );
};

export default Header;
