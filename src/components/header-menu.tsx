"use client";
import React from "react";
import {PiMapPinLineLight} from "react-icons/pi";
import {IoIosGitCompare} from "react-icons/io";
import {CgHeadset} from "react-icons/cg";
import {IoIosHelpCircleOutline} from "react-icons/io";
import Link from "next/link";
import Typography from "./ui/typography";
import {usePathname} from "next/navigation";

interface HeaderMenuType {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const headerMenu: HeaderMenuType[] = [
  {
    name: "track order",
    link: "/trackorder",
    icon: <PiMapPinLineLight />,
  },
  {
    name: "compare",
    link: "/compare",
    icon: <IoIosGitCompare />,
  },
  {
    name: "customer support",
    link: "/customersupport",
    icon: <CgHeadset />,
  },
  {
    name: "need help",
    link: "/needhelp",
    icon: <IoIosHelpCircleOutline />,
  },
];

const HeaderMenu = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-6">
      {headerMenu.map((item) => {
        const isActive = pathname.startsWith(item.link);
        return (
          <Link
            className={`flex items-center gap-1.5 ${isActive ? "text-primary-500" : "text-gray-600"}`}
            key={item.link}
            href={item.link}
          >
            <span className="text-[24px]">{item.icon}</span>
            <Typography
              variant={"s"}
              className={`capitalize text-gray-600 ${isActive ? "text-primary-500" : "text-gray-600"}`}
            >
              {item.name}
            </Typography>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
