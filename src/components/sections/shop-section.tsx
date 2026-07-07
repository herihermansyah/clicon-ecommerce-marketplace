"use client";
import React from "react";
import {useSearchParams} from "next/navigation";
import {ProductTypes} from "@/@types/product-types";
import {searchProduct} from "@/service/products";
import Typography from "../ui/typography";
import ProductCard from "../product-card";

const ShopSection = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [products, setProducts] = React.useState<ProductTypes[]>([]);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await searchProduct(searchQuery);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [searchQuery]);

  const filterProducts = products.filter((item) => {
    const keywords = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(keywords) ||
      item.description.toLowerCase().includes(keywords)
    );
  });
  return (
    <section className="flex flex-col gap-6">
      {searchQuery && (
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
          <Typography variant={"m"} weight={500} className="text-gray-600">
            search : {searchQuery}
          </Typography>
          <Typography variant={"m"} weight={500} className="text-gray-600">
            {filterProducts.length} : Result
          </Typography>
        </div>
      )}

      <div className="grid grid-cols-4 gap-4">
        {filterProducts.length > 0 ? (
          filterProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <div>data tida ada</div>
        )}
      </div>
    </section>
  );
};

export default ShopSection;
