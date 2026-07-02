"use client";
import React from "react";
import {Banner, BannerContent} from "./ui/banner";
import Typography from "./ui/typography";
import Button from "./ui/button";
import Image from "next/image";
import {IoMdArrowForward} from "react-icons/io";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRouter} from "next/navigation";
import {Mousewheel, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {BannerType} from "@/@types/banner-types";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {motion} from "motion/react";

export const bannerVariants = cva(
  "bg-gray-50 p-2 lg:p-14 w-full transition-all",
  {
    variants: {
      variant: {
        primary: "block",
        secondary: "relative",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  },
);

export interface BannerHeroProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  data: BannerType[];
}

const BannerCompounded = ({
  variant = "secondary",
  data,
  className,
  ...props
}: BannerHeroProps) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
    >
      <Banner className={cn(bannerVariants({variant}), className)} {...props}>
        {variant === "secondary" ? (
          <Swiper
            loop={true}
            pagination={{clickable: true}}
            slidesPerView={1}
            mousewheel={{forceToAxis: true}}
            modules={[Mousewheel, Pagination]}
          >
            {data?.map((item) => (
              <SwiperSlide key={item.id} className="w-full">
                <RenderContent router={router} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          data.length > 0 && <RenderContent router={router} item={data[0]} />
        )}
      </Banner>
    </motion.div>
  );
};

interface RenderContentProps {
  item: BannerType;
  router: AppRouterInstance;
  tagLineClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  imageClass?: string;
}

const RenderContent = ({
  item,
  router,
  tagLineClass,
  titleClass,
  descriptionClass,
  imageClass,
}: RenderContentProps) => (
  <BannerContent>
    <div className="flex items-center justify-between">
      {/* discovery */}
      <div className="flex flex-col gap-6 items-start">
        <div className="flex flex-col gap-4 w-89">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-secondary-600" />
              <Typography
                variant={"s"}
                weight={600}
                className={cn("uppercase text-secondary-600", tagLineClass)}
              >
                {item.tagLine}
              </Typography>
            </div>
            <Typography
              variant={"h1"}
              weight={600}
              className={cn("text-[48px] leading-13", titleClass)}
            >
              {item.title}
            </Typography>
          </div>
          <Typography
            variant={"l"}
            className={cn("text-gray-700", descriptionClass)}
          >
            {item.description}
          </Typography>
        </div>
        <Button
          onClick={() => router.push(item.ctaLink)}
          size={"large"}
          iconRight={<IoMdArrowForward />}
        >
          {item.ctaText}
        </Button>
      </div>
      {/* image */}
      <div className={cn("rounded-xl overflow-hidden w-91 h-102", imageClass)}>
        <Image
          src={item.image}
          alt={item.title}
          width={368}
          height={408}
          priority
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </BannerContent>
);
export default BannerCompounded;
