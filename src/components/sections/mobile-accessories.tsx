"use client";
import React, {useEffect} from "react";
import WrapperMain from "../wrapper-main";
import Typography from "../ui/typography";
import LinkButton from "../ui/link-button";
import {ProductTypes} from "@/@types/product-types";
import {getProducts} from "@/service/products";
import ProductCard from "../product-card";
import Skeleton from "../ui/skeleton";
import {motion} from "motion/react";

const MobileAccessories = () => {
  const [product, setProduct] = React.useState<ProductTypes[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const getProductCategory = async () => {
      try {
        const data = await getProducts();
        setProduct(data.products);
      } catch {
        console.log("failed get product");
      } finally {
        setIsLoading(false);
      }
    };
    getProductCategory();
  }, []);

  const filteredProduct = product?.filter(
    (item) => item.category === "mobile-accessories",
  );

  if (isLoading) {
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <WrapperMain className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <Skeleton className="w-20 h-2" />
            <Skeleton className="w-20 h-2" />
          </div>
          <Skeleton className="h-10" />
        </WrapperMain>
      </motion.div>
    );
  }
  return (
    <section>
      <WrapperMain className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Typography variant={"h3"} weight={600}>
            Mobile Accessories
          </Typography>
          <LinkButton href="shop" variant={"secondary"}>
            Browser all product
          </LinkButton>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {filteredProduct.slice(0, 5).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </WrapperMain>
    </section>
  );
};

export default MobileAccessories;
