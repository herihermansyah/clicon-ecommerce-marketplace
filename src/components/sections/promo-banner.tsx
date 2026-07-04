import React from "react";
import WrapperMain from "../wrapper-main";
import BannerCompounded from "../banner-compounded";
const bannerPromo1 = [
  {
    id: 1,
    title: "Mobile Accessories",
    image:
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
    tagLine: "THE BEST PLACE TO PLAY",
    ctaText: "SHOP NOW",
    ctaLink: "/products/xbox",
  },
];

const PromoBanner = () => {
  return (
    <section className="py-12">
      <WrapperMain className="flex flex-col gap-6">
        <BannerCompounded data={bannerPromo1} />
      </WrapperMain>
    </section>
  );
};

export default PromoBanner;
