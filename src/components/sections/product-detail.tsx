"use client";
import React from "react";
import {ProductTypes} from "@/@types/product-types";
import Image from "next/image";
import Typography from "../ui/typography";
import {cn} from "@/lib/utils";
import {FaRegStar, FaStar} from "react-icons/fa";
import Badge from "../ui/badge";
import {SwiperSlide, Swiper} from "swiper/react";
import {Navigation} from "swiper/modules";
import IconButton from "../ui/icon-button";
import {IoMdArrowBack, IoMdArrowForward} from "react-icons/io";
import "swiper/css";

interface ProductDetailProps {
  product: ProductTypes;
}

const ProductDetail = ({product}: ProductDetailProps) => {
  return (
    <section className="grid grid-cols-2 gap-14">
      {/* images */}
      <ProductImage product={product} />
      <ProductHeader product={product} />
    </section>
  );
};

const ProductImage = ({product}: ProductDetailProps) => {
  const [selectedThumbnails, setSelectedThumbnails] = React.useState<string>(
    product.images[1],
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="relative border h-116 border-gray-100 rounded-md p-4 overflow-hidden">
        <Image
          src={selectedThumbnails}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority
        />
      </div>
      <Swiper
        slidesPerView={6}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        modules={[Navigation]}
        spaceBetween={8}
        className="w-full relative"
      >
        {product.images.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => setSelectedThumbnails(item)}
              className={cn(
                "border border-gray-100 p-2 cursor-pointer rounded-md overflow-hidden",
                selectedThumbnails === item && "border-2 border-primary-500",
                "active:scale-95",
                "transition-all duration-100 ease-in-out",
                "w-24 h-24",
              )}
            >
              <Image src={item} alt={product.title} width={100} height={100} />
            </div>
          </SwiperSlide>
        ))}
        {/* navigation */}
        <div>
          <IconButton
            shape={"circle"}
            className="absolute z-10 top-1/2 -translate-y-1/2 left-0 prev-button"
          >
            <IoMdArrowBack size={24} />
          </IconButton>
          <IconButton
            shape={"circle"}
            className="absolute z-10 top-1/2 -translate-y-1/2 right-0 next-button"
          >
            <IoMdArrowForward size={24} />
          </IconButton>
        </div>
      </Swiper>
    </div>
  );
};

const ProductHeader = ({product}: ProductDetailProps) => {
  const fixedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="flex flex-col gap-6 border-b border-gray-100 pb-6 h-fit">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {/* rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {Array.from({length: 5}).map((_, i) =>
                i < Math.round(product.rating) ? (
                  <FaStar key={i} className="text-[14px] text-primary-500" />
                ) : (
                  <FaRegStar key={i} className="text-[14px] text-gray-500" />
                ),
              )}
            </div>
            <Typography variant={"s"} weight={600}>
              {product.rating} Star Rating
            </Typography>
          </div>
          {/* title */}
          <Typography variant={"xl"} weight={400}>
            {product.title}
          </Typography>
        </div>
        {/* sku , brand, availability, category */}
        <div className="grid grid-cols-2 gap-2">
          <Typography variant={"s"} weight={600}>
            <span className="font-normal text-gray-600">Sku:</span>{" "}
            {product.sku}
          </Typography>
          <Typography variant={"s"} weight={600}>
            <span className="font-normal text-gray-600">Brand:</span>{" "}
            {product.brand}
          </Typography>
          <Typography variant={"s"} weight={600}>
            <span className="font-normal text-gray-600">Availability:</span>{" "}
            <span className="text-success-500">
              {product.availabilityStatus}
            </span>
          </Typography>
          <Typography variant={"s"} weight={600}>
            <span className="font-normal text-gray-600">Category:</span>{" "}
            {product.category}
          </Typography>
        </div>
      </div>
      {/* price */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <Typography
            variant={"h3"}
            weight={600}
            className="text-secondary-500"
          >
            {fixedPrice}
          </Typography>
          <Typography variant={"l"} className="line-through text-gray-500">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
        </div>
        <Badge variant={"warning"} className="uppercase px-2.5 py-1.25">
          <Typography variant={"s"} weight={600}>
            {product.discountPercentage}% OFF
          </Typography>
        </Badge>
      </div>
    </div>
  );
};

export {ProductDetail, ProductImage};
