import {ProductTypes} from "@/@types/product-types";
import ProductCard from "@/components/product-card";
import SearchBar from "@/components/search-bar";
import {getProducts} from "@/service/products";
import React from "react";

const page = async () => {
  const data = await getProducts();
  const result: ProductTypes[] = data.products;
  return (
    <div className="flex flex-col gap-6">
      <SearchBar />
      <div className="grid grid-cols-4 gap-4">
        {result.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
