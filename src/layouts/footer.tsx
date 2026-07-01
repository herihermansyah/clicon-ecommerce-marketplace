import ContactDetails from "@/components/contact-details";
import {NewsLetter} from "@/components/news-letter-collection";
import Typography from "@/components/ui/typography";
import WrapperMain from "@/components/wrapper-main";
import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div>
      <NewsLetter />
      <div className="bg-gray-900 py-18 border-b border-gray-800">
        <WrapperMain>
          <ContactDetails />
        </WrapperMain>
      </div>
      <div className="flex items-center justify-center bg-gray-900">
        <Typography variant={"s"} className="text-gray-300 py-6">
          Kinbo - eCommerce Template &copy; {fullYear}. Design by Templatecookie
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
