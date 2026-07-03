"use client";
import React, {useEffect} from "react";
import WrapperMain from "./wrapper-main";
import {CategoryType} from "@/@types/categories-type";
import {getCategory} from "@/service/category";
import Image from "next/image";
import Link from "next/link";
import Typography from "./ui/typography";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Navigation} from "swiper/modules";
import "swiper/css";
import {IoMdArrowForward} from "react-icons/io";
import {IoMdArrowBack} from "react-icons/io";
import IconButton from "./ui/icon-button";
import {motion} from "motion/react";
import Skeleton from "./ui/skeleton";

const categoryImageMapping: Record<string, string> = {
  beauty:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300&auto=format&fit=crop",
  fragrances:
    "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=300&auto=format&fit=crop",
  furniture:
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=300&auto=format&fit=crop",
  groceries:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=300&auto=format&fit=crop",
  "home-decoration":
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=300&auto=format&fit=crop",
  "kitchen-accessories":
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=300&auto=format&fit=crop",
  laptops:
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "mens-shirts":
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=300&auto=format&fit=crop",
  "mens-shoes":
    "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=300&auto=format&fit=crop",
  "mens-watches":
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=300&auto=format&fit=crop",
  "mobile-accessories":
    "https://images.unsplash.com/photo-1566793474285-2decf0fc182a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  motorcycle:
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=300&auto=format&fit=crop",
  "skin-care":
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=300&auto=format&fit=crop",
  smartphones:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=300&auto=format&fit=crop",
  "sports-accessories":
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=300&auto=format&fit=crop",
  sunglasses:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=300&auto=format&fit=crop",
  tablets:
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=300&auto=format&fit=crop",
  tops: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop",
  vehicle:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=300&auto=format&fit=crop",
  "womens-bags":
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&auto=format&fit=crop",
  "womens-dresses":
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=300&auto=format&fit=crop",
  "womens-jewellery":
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=300&auto=format&fit=crop",
  "womens-shoes":
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=300&auto=format&fit=crop",
  "womens-watches":
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=300&auto=format&fit=crop",
};

const defaultImage =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300&auto=format&fit=crop";

const CategorySwiper = () => {
  const [category, setCategory] = React.useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategory();
        setCategory(data);
      } catch {
        console.log("failed get category");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (isLoading)
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <WrapperMain>
          <div className="flex items-center justify-center flex-col gap-1">
            <Skeleton className="h-5" />
            <Skeleton className="h-10" />
            <Skeleton className="h-22" />
          </div>
        </WrapperMain>
      </motion.div>
    );
  return (
    <WrapperMain className="flex flex-col items-center gap-10 relative">
      <Typography variant={"h1"} weight={600}>
        Shop With Categories
      </Typography>
      {/* content */}
      <Swiper
        loop={true}
        breakpoints={{
          240: {
            slidesPerView: 1,
          },
          368: {
            slidesPerView: 2,
          },
          568: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        mousewheel={{forceToAxis: true}}
        modules={[Mousewheel, Navigation]}
        spaceBetween={18}
        className="w-full"
      >
        {category.map((item) => {
          const imageUrl = categoryImageMapping[item.slug] || defaultImage;
          return (
            <SwiperSlide key={item.name}>
              <Link
                href={item.slug}
                className="flex flex-col items-center gap-4 bg-gray-00 border border-gray-100 rounded-sm px-6 py-3 overflow-hidden"
              >
                <div className="w-37 h-37 overflow-hidden relative">
                  <Image
                    src={imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <Typography
                  variant={"m"}
                  weight={500}
                  className="whitespace-nowrap"
                >
                  {item.name}
                </Typography>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* navigation */}
      <div>
        <IconButton
          shape={"circle"}
          className="absolute z-10 top-1/2 -translate-y-1/5 left-2 prev-button"
        >
          <IoMdArrowBack size={24} />
        </IconButton>
        <IconButton
          shape={"circle"}
          className="absolute z-10 top-1/2 -translate-y-1/5 right-2 next-button"
        >
          <IoMdArrowForward size={24} />
        </IconButton>
      </div>
    </WrapperMain>
  );
};

export default CategorySwiper;
