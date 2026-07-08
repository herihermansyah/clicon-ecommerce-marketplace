import {ProductDetail} from "@/components/sections/product-detail";
import {singleProduct} from "@/service/products";
import React from "react";

interface PageProps {
  params: Promise<{slug: string}>;
}

const page = async ({params}: PageProps) => {
  const slug = (await params).slug;
  const parts = slug.split("-");
  const id = parts[parts.length - 1];
  const product = await singleProduct(id);

  return <ProductDetail product={product} />;
};

export default page;
