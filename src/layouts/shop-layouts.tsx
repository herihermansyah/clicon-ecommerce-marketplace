import CategoryFilter from "@/components/category-filter";
import PopularBrandFilter from "@/components/popular-brand-filter";
import PopularTag from "@/components/popular-tag";
import PriceRangeFilter from "@/components/price-range-filter";
import WrapperMain from "@/components/wrapper-main";
import React from "react";

const ShopLayouts = ({children}: {children: React.ReactNode}) => {
  return (
    <WrapperMain className="flex gap-6 items-start my-10">
      <aside className="w-78 flex flex-col gap-10">
        <CategoryFilter />
        <PriceRangeFilter />
        <PopularTag fontColor="text-gray-900 uppercase" />
        <PopularBrandFilter />
      </aside>
      <main className="grow">{children}</main>
    </WrapperMain>
  );
};

export default ShopLayouts;
