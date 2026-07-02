"use client"
import Image from "next/image";
import React from "react";
import Typography from "./ui/typography";
import {motion} from "motion/react";

const ContactDetails = () => {
  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className="flex flex-col gap-6 w-78"
    >
      <Image src={"/logo-primary.svg"} alt="logo" width={177} height={148} />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Typography variant={"s"} className="text-gray-500">
            Customer Supports:
          </Typography>
          <Typography variant={"l"} className="text-gray-00">
            (629) 555-0129
          </Typography>
        </div>
        <Typography variant={"m"} className="text-gray-300 w-62">
          4517 Washington Ave. Manchester, Kentucky 39495
        </Typography>
        <Typography variant={"m"} className="text-gray-00">
          info@kinbo.com
        </Typography>
      </div>
    </motion.div>
  );
};

export default ContactDetails;
