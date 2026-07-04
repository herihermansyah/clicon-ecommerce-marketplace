"use client";
import React, {useEffect} from "react";
import Typography from "../ui/typography";
import LinkButton from "../ui/link-button";
import WrapperMain from "../wrapper-main";
import {ProductTypes} from "@/@types/product-types";
import {getProducts} from "@/service/products";
import ProductCard from "../product-card";
import Skeleton from "../ui/skeleton";
import {motion} from "motion/react";

const BestDeals = () => {
  const [product, setProduct] = React.useState<ProductTypes[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts();
        setProduct(data.products);
      } catch {
        console.log("failed get product");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (isLoading) {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="py-18"
      >
        <WrapperMain className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-30" />
          </div>
          <Skeleton className="h-180" />
        </WrapperMain>
      </motion.div>
    );
  }
  return (
    <section className="py-18">
      <WrapperMain className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Typography variant={"h3"} weight={600}>
            Beast Deals
          </Typography>
          <LinkButton variant={"secondary"} href="/shop">
            Browser All Product
          </LinkButton>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {product.slice(0, 10).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </WrapperMain>
    </section>
  );
};

export default BestDeals;
