"use client";
import React, {useEffect} from "react";
import WrapperMain from "../wrapper-main";
import Typography from "../ui/typography";
import {ProductTypes} from "@/@types/product-types";
import {getProducts} from "@/service/products";
import ProductCard from "../product-card";
import Skeleton from "../ui/skeleton";
import {motion} from "motion/react";

const ProductMultiList = () => {
  const [product, setProduct] = React.useState<ProductTypes[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProduct(data.products);
      } catch {
        console.log("failed get product");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  //   filtered product list mockup
  const flashSale = product
    .filter((item) => item.category === "smartphones")
    .slice(0, 3);
  const bestSellers = product
    .filter((item) => item.category === "laptops")
    .slice(0, 3);
  const topRated = product
    .filter((item) => item.category === "mobile-accessories")
    .slice(0, 3);
  const newArrival = product
    .filter((item) => item.category === "tablets")
    .slice(0, 3);

  if (isLoading) {
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <WrapperMain className="flex flex-col gap-6">
          <Skeleton className="h-5" />
          <Skeleton className="h-70" />
        </WrapperMain>
      </motion.div>
    );
  }
  return (
    <section>
      <WrapperMain className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <ProductList data={flashSale} title="FLASH SALE TODAY" />
        <ProductList data={bestSellers} title="BEST SELLERS" />
        <ProductList data={topRated} title="TOP RATED" />
        <ProductList data={newArrival} title="NEW ARRIVAL" />
      </WrapperMain>
    </section>
  );
};

interface ProductListProps {
  data: ProductTypes[];
  title?: string;
}
const ProductList = ({data, title}: ProductListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant={"m"} weight={600}>
        {title}
      </Typography>
      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <ProductCard variant={"secondary"} key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductMultiList;
