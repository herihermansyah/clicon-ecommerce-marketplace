import CategorySwiper from "@/components/category-swiper";
import BestDeals from "@/components/sections/best-deals";
import HeroSection from "@/components/sections/hero-section";
import React from "react";

function page() {
  return (
    <div className="my-6">
      <HeroSection />
      <BestDeals />
      <CategorySwiper />
    </div>
  );
}

export default page;
