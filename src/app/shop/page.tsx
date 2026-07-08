import ShopSection from "@/components/sections/shop-section";
import React, {Suspense} from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopSection />
    </Suspense>
  );
};

export default page;
