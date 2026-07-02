import React from "react";
import WrapperMain from "../wrapper-main";
import BannerCompounded from "../banner-compounded";

const bannerHero = [
  {
    id: 1,
    title: "Xbox Consoles",
    image:
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?q=80&w=1200&auto=format&fit=crop",
    description:
      "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
    tagLine: "THE BEST PLACE TO PLAY",
    ctaText: "SHOP NOW",
    ctaLink: "/products/xbox",
  },
  {
    id: 2,
    title: "PlayStation 5",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop",
    description:
      "Experience lightning-fast loading with an ultra-high speed SSD and breathtaking immersion.",
    tagLine: "PLAY HAS NO LIMITS",
    ctaText: "SHOP NOW",
    ctaLink: "/products/xbox",
  },
  {
    id: 3,
    title: "Nintendo Switch",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop",
    description:
      "Play at home or on the go. Grab the OLED Model today and get a free digital game.",
    tagLine: "PLAY ANYTIME, ANYWHERE",
    ctaText: "SHOP NOW",
    ctaLink: "/products/xbox",
  },
];

const HeroSection = () => {
  return (
    <div>
      <WrapperMain className="flex items-start gap-6">
        <BannerCompounded data={bannerHero} />
      </WrapperMain>
    </div>
  );
};

export default HeroSection;
