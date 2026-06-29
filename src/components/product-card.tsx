import React from "react";
import {Card, CardContent, CardFooter} from "./ui/card";
import Image from "next/image";
import {FaStar} from "react-icons/fa";
import {FaRegStar} from "react-icons/fa";
import {GrFavorite} from "react-icons/gr";
import {LuShoppingCart} from "react-icons/lu";
import {IoEyeOutline} from "react-icons/io5";
import IconButton from "./ui/icon-button";
import Badge from "./ui/badge";
import {Product} from "@/@types/product-types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {
  // discount price
  const fixedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);
  return (
    <Card key={product.id}>
      <CardContent className="relative cursor-pointer group">
        <div className="h-43 w-full overflow-hidden group-hover:bg-black/20 transition-all duration-500 ease-in-out">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        {/* button action */}
        <div className="hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:flex items-center gap-2">
          <IconButton
            shape={"circle"}
            variant={"filled"}
            className="bg-gray-00 hover:bg-primary-500 text-gray-900 hover:text-gray-00"
          >
            <GrFavorite size={24} />
          </IconButton>
          <IconButton
            shape={"circle"}
            variant={"filled"}
            className="bg-gray-00 hover:bg-primary-500 text-gray-900 hover:text-gray-00"
          >
            <LuShoppingCart size={24} />
          </IconButton>
          <IconButton
            shape={"circle"}
            variant={"filled"}
            className="bg-gray-00 hover:bg-primary-500 text-gray-900 hover:text-gray-00"
          >
            <IoEyeOutline size={24} />
          </IconButton>
        </div>
        {/* badge */}
        <Badge className="absolute -left-1 -top-1" variant={"warning"}>
          {product.availabilityStatus}
        </Badge>
      </CardContent>
      <CardFooter>
        {/* rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {Array.from({length: 5}).map((_, i) =>
              i < Math.round(product.rating) ? (
                <FaStar key={i} className="text-[14px] text-primary-500" />
              ) : (
                <FaRegStar key={i} className="text-[14px] text-gray-500" />
              ),
            )}
          </div>
          <div className="text-gray-500 text-[12px] leading-4">
            ({product.reviews.length})
          </div>
        </div>
        {/* title */}
        <h2 className="text-[14px] text-gray-900 leading-5">{product.title}</h2>
        {/* price */}
        <div className="flex items-center gap-1">
          <h5 className="text-[14px] text-gray-400 leading-5 font-semibold line-through">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h5>
          <h5 className="text-[14px] text-secondary-500 leading-5 font-semibold">
            {fixedPrice}
          </h5>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
