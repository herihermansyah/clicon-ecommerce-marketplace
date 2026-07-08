"use client";
import CategoryFilter from "@/components/category-filter";
import PopularBrandFilter from "@/components/popular-brand-filter";
import PopularTag from "@/components/popular-tag";
import PriceRangeFilter from "@/components/price-range-filter";
import WrapperMain from "@/components/wrapper-main";
import {useParams} from "next/navigation";
import React from "react";

const ShopLayouts = ({children}: {children: React.ReactNode}) => {
  const params = useParams();
  const isActive = !!params.slug;
  return (
    <WrapperMain className="flex gap-6 items-start my-10">
      {!isActive && (
        <aside className="w-78 flex flex-col gap-10">
          <CategoryFilter />
          <PriceRangeFilter />
          <PopularTag fontColor="text-gray-900 uppercase" />
          <PopularBrandFilter />
        </aside>
      )}
      <main className="grow">{children}</main>
    </WrapperMain>
  );
};

export default ShopLayouts;
