import ContactDetails from "@/components/contact-details";
import DownloadApp from "@/components/download-app";
import FooterMenu from "@/components/footer-menu";
import {NewsLetter} from "@/components/news-letter-collection";
import PopularTag from "@/components/popular-tag";
import LinkButton from "@/components/ui/link-button";
import Typography from "@/components/ui/typography";
import WrapperMain from "@/components/wrapper-main";
import React from "react";

const topCategoryData = [
  {name: "Computer & Laptop", link: "Computer & Laptop"},
  {name: "Smartphone", link: "Computer & Laptop"},
  {name: "Headphone", link: "Computer & Laptop"},
  {name: "Accessories", link: "Computer & Laptop"},
  {name: "Camera & Photo", link: "Computer & Laptop"},
  {name: "Tv & Homes", link: "Computer & Laptop"},
];
const quickLinksData = [
  {name: "Shop product", link: "/shop"},
  {name: "Shopping cart", link: "/cart"},
  {name: "Whislist", link: "/whislist"},
  {name: "Compare", link: "/compare"},
  {name: "Track Order", link: "/track"},
  {name: "Customer Help", link: "/customer"},
  {name: "About Us", link: "/about"},
];

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <div>
      <NewsLetter />
      <div className="bg-gray-900 py-18 border-b border-gray-800">
        <WrapperMain className="flex items-start gap-6 justify-between">
          <ContactDetails />
          <div>
            <FooterMenu
              data={topCategoryData}
              title="Top Category"
              name={(item) => item.name}
              link={(item) => item.link}
            />
            <LinkButton href="shop" className="text-warning-500 py-1.5">
              Browser all product
            </LinkButton>
          </div>
          <FooterMenu
            data={quickLinksData}
            title="quick links"
            name={(item) => item.name}
            link={(item) => item.link}
          />
          <DownloadApp />
          <PopularTag />
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
