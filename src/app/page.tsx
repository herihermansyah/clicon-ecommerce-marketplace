import CategorySwiper from "@/components/category-swiper";
import BestDeals from "@/components/sections/best-deals";
import HeroSection from "@/components/sections/hero-section";
import MobileAccessories from "@/components/sections/mobile-accessories";
import ProductMultiList from "@/components/sections/product-multi-list";
import PromoBanner from "@/components/sections/promo-banner";
import React from "react";

function page() {
  return (
    <div className="my-6">
      <HeroSection />
      <BestDeals />
      <CategorySwiper />
      <MobileAccessories />
      <PromoBanner />
      <ProductMultiList />
    </div>
  );
}

export default page;
