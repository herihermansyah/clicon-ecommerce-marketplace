import ShopLayouts from "@/layouts/shop-layouts";
import React from "react";

const layout = ({children}: {children: React.ReactNode}) => {
  return <ShopLayouts>{children}</ShopLayouts>;
};

export default layout;
