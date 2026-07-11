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
import {IoIosGitCompare, IoMdArrowBack, IoMdArrowForward} from "react-icons/io";
import "swiper/css";
import Button from "../ui/button";
import {LuShoppingCart} from "react-icons/lu";
import {FiMinus} from "react-icons/fi";
import {GoPlus} from "react-icons/go";
import {GrFavorite} from "react-icons/gr";
import {Card, CardContent, CardHeader} from "../ui/card";
import {motion} from "motion/react";
import {useCartStore} from "@/store/use-cart-store";

interface ProductDetailProps {
  product: ProductTypes;
}

const ProductDetail = ({product}: ProductDetailProps) => {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}}>
      <div className="flex flex-col gap-10 xl:grid xl:grid-cols-2 xl:gap-14 pb-18">
        <ProductImage product={product} />
        <div className="flex flex-col gap-6">
          <ProductHeader product={product} />
          <ProductCTA product={product} />
        </div>
      </div>
      <ProductInformation product={product} />
    </motion.section>
  );
};

const ProductImage = ({product}: ProductDetailProps) => {
  const [selectedThumbnails, setSelectedThumbnails] = React.useState<string>(
    product.thumbnail,
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="relative border h-116 border-gray-100 rounded-md p-4 overflow-hidden">
        <Image
          src={selectedThumbnails || "/"}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority
        />
      </div>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          640: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
        }}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        modules={[Navigation]}
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
                "sm:w-24 sm:h-24",
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

const ProductCTA = ({product}: ProductDetailProps) => {
  const {addToCart} = useCartStore();
  return (
    <div className="flex flex-col gap-6 border-b border-gray-100 pb-6">
      {/* quantity and cta */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* quantity */}
        <div className="flex items-center gap-9.5 px-5 py-4 border border-gray-100 rounded-md">
          <button className="cursor-pointer">
            <FiMinus />
          </button>
          <Typography variant={"m"} className="text-gray-700">
            01
          </Typography>
          <button className="cursor-pointer">
            <GoPlus />
          </button>
        </div>
        <Button
          onClick={() => addToCart({newProduct: product})}
          size={"large"}
          iconRight={<LuShoppingCart />}
          className="w-77.5 items-center justify-center"
        >
          ADD TO CART
        </Button>
        <Button
          size={"large"}
          variant={"outline"}
          className="whitespace-nowrap"
        >
          BUY NOW
        </Button>
      </div>
      {/* add whislist and compare */}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-1.5 text-gray-700 cursor-pointer">
          <span>
            <GrFavorite size={18} />
          </span>
          <Typography variant={"s"} className="text-gray-700">
            Add to Wishlist
          </Typography>
        </button>
        <button className="flex items-center gap-1.5 text-gray-700 cursor-pointer">
          <span>
            <IoIosGitCompare size={18} />
          </span>
          <Typography variant={"s"} className="text-gray-700">
            Add to Compare
          </Typography>
        </button>
      </div>
    </div>
  );
};

type Information =
  | "Description"
  | "Additional Information"
  | "Specification"
  | "Review";

const ProductInformation = ({product}: ProductDetailProps) => {
  const [selectedInformation, setSelectedInformation] =
    React.useState<Information>("Description");

  const selectHeader: {name: Information}[] = [
    {name: "Description"},
    {name: "Additional Information"},
    {name: "Specification"},
    {name: "Review"},
  ];
  return (
    <Card className="p-0">
      <CardHeader className="flex flex-row flex-wrap items-center justify-center border-b border-gray-100">
        {selectHeader.map((item) => (
          <button
            key={item.name}
            className={cn(
              "text-[14px] cursor-pointer uppercase font-medium leading-5 text-gray-600",
              "px-5 py-4.5",
              selectedInformation === item.name
                ? "border-b-4 border-primary-500 text-gray-900"
                : "",
            )}
            onClick={() => setSelectedInformation(item.name)}
          >
            {item.name}
          </button>
        ))}
      </CardHeader>
      <CardContent className="p-10">
        {/* description */}
        {selectedInformation === "Description" && (
          <div className="flex flex-col gap-3">
            <Typography variant={"m"} weight={600}>
              Description
            </Typography>
            <Typography variant={"s"} className="text-gray-600">
              {product.description}
            </Typography>
          </div>
        )}
        {/* additional information */}
        {selectedInformation === "Additional Information" && (
          <div className="flex flex-col gap-3">
            <Typography variant={"m"} weight={600}>
              Additional Information
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Typography variant={"s"} className="text-gray-600">
                  Tags :
                </Typography>
                {product.tags.map((item, i) => (
                  <Badge variant={"secondary"} key={i}>
                    {item}
                  </Badge>
                ))}
              </div>
              <Typography variant={"s"} className="text-gray-600">
                Stock : {product.stock}
              </Typography>
              <Typography variant={"s"} className="text-gray-600">
                Warranty information : {product.warrantyInformation}
              </Typography>
              <Typography variant={"s"} className="text-gray-600">
                Shipping Information : {product.shippingInformation}
              </Typography>
              <Typography variant={"s"} className="text-gray-600">
                Return Policy : {product.returnPolicy}
              </Typography>
              <Typography variant={"s"} className="text-gray-600">
                Minimum Order : {product.minimumOrderQuantity}
              </Typography>
            </div>
          </div>
        )}
        {/* specification */}
        {selectedInformation === "Specification" && (
          <div className="flex flex-col gap-3">
            <Typography variant={"m"} weight={600}>
              Specification
            </Typography>
            <div className="flex flex-col gap-4">
              <Typography variant={"s"} className="text-gray-600">
                Weight: {product.dimensions.width}
              </Typography>
              <Typography variant={"s"} className="text-gray-600">
                Width: {product.dimensions.width}
              </Typography>
              <Typography variant={"s"} className="text-gray-600">
                Height: {product.dimensions.height}
              </Typography>
              <Typography variant={"s"} className="text-gray-600">
                Depth: {product.dimensions.depth}
              </Typography>
            </div>
          </div>
        )}
        {/* review */}
        {selectedInformation === "Review" && (
          <div className="flex flex-col gap-3">
            <Typography variant={"m"} weight={600}>
              Review
            </Typography>
            <div>
              <div className="flex flex-col gap-4 divide-y divide-gray-100">
                {product.reviews.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1 py-5">
                    <Typography variant={"s"} weight={600}>
                      Name : {item.reviewerName}
                    </Typography>
                    <Typography variant={"s"} className="text-gray-600">
                      Email : {item.reviewerEmail}
                    </Typography>
                    <div className="flex items-center gap-0.5">
                      {Array.from({length: 5}).map((_, i) =>
                        i < Math.round(product.rating) ? (
                          <FaStar
                            key={i}
                            className="text-[14px] text-primary-500"
                          />
                        ) : (
                          <FaRegStar
                            key={i}
                            className="text-[14px] text-gray-500"
                          />
                        ),
                      )}
                    </div>
                    <Typography variant={"s"} className="text-gray-600">
                      Comment : {item.comment}
                    </Typography>
                    <Typography variant={"s"} className="text-gray-600">
                      Date : {item.date}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export {ProductDetail};
