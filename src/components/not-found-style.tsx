import Image from "next/image";
import React from "react";
import Typography from "./ui/typography";
import Button from "./ui/button";
import {VscHome} from "react-icons/vsc";
import {IoArrowBackOutline} from "react-icons/io5";
import WrapperMain from "./wrapper-main";

const NotFoundStyle = () => {
  return (
    <WrapperMain className="flex flex-col items-center justify-center pb-31">
      <Image
        src={"/404-not-found.svg"}
        alt="not found"
        width={500}
        height={500}
        priority
      />
      <div className="flex flex-col gap-6 items-center justify-center sm:w-134 text-center">
        <Typography variant={"h1"} weight={700}>
          404, Page not founds
        </Typography>
        <Typography variant={"m"} className="text-gray-700">
          Something went wrong. It’s look that your requested could not be
          found. It’s look like the link is broken or the page is removed.
        </Typography>
        <div className="flex items-center flex-wrap justify-center gap-4">
          <Button iconLeft={<IoArrowBackOutline />}>GO BACK</Button>
          <Button iconLeft={<VscHome />} variant={"ghost"}>
            GO TO HOME
          </Button>
        </div>
      </div>
    </WrapperMain>
  );
};

export default NotFoundStyle;
