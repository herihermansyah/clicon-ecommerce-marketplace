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
import {ProductTypes} from "@/@types/product-types";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";
import Typography from "./ui/typography";
import Link from "next/link";
import {useCartStore} from "@/store/use-cart-store";

const productVariants = cva("", {
  variants: {
    variant: {
      primary: "flex-col p-4",
      secondary: "flex-row p-3 items-center",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ProductCardProps extends VariantProps<typeof productVariants> {
  product: ProductTypes;
}

const ProductCard = ({product, variant}: ProductCardProps) => {
  const {addToCart} = useCartStore();
  // discount price
  const fixedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  // conditional variants
  const isPrimary = variant === "primary" || !variant;

  return (
    <Card
      key={product.id}
      className={cn(productVariants({variant}), "overflow-hidden")}
    >
      <CardContent
        className={cn(
          "relative cursor-pointer group",
          isPrimary ? "" : "w-auto",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden group-hover:bg-black/20 transition-all duration-500 ease-in-out",
            isPrimary ? "h-43 w-full" : "h-20 w-20",
          )}
        >
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        {/* button action */}
        {isPrimary && (
          <div className="hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:flex items-center gap-2">
            <IconButton
              shape={"circle"}
              variant={"filled"}
              className="bg-gray-00 hover:bg-primary-500 text-gray-900 hover:text-gray-00"
            >
              <GrFavorite size={24} />
            </IconButton>
            <IconButton
              onClick={() => addToCart({newProduct: product})}
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
        )}

        {/* badge */}
        {isPrimary && (
          <Badge className="absolute -left-1 -top-1" variant={"warning"}>
            {product.availabilityStatus}
          </Badge>
        )}
      </CardContent>
      <CardFooter className="w-49">
        {/* rating */}
        {isPrimary && (
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
        )}
        {/* title */}
        <Link
          href={`/shop/${product.category}-${product.brand}-${product.title}-${product.id}`}
        >
          <Typography variant={"s"} className="line-clamp-1">
            {product.title}
          </Typography>
        </Link>
        {/* price */}
        <div className="flex items-center gap-1">
          <Typography
            variant={"s"}
            weight={600}
            className="text-gray-400 line-through"
          >
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
          <Typography variant={"s"} weight={600} className="text-secondary-500">
            {fixedPrice}
          </Typography>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
