import Image from "next/image";
import React from "react";
import Typography from "./ui/typography";

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6">
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
    </div>
  );
};

export default ContactDetails;
