"use client";
import React from "react";
import {PiMapPinLineLight} from "react-icons/pi";
import {IoIosGitCompare} from "react-icons/io";
import {CgHeadset} from "react-icons/cg";
import {IoIosHelpCircleOutline} from "react-icons/io";
import Link from "next/link";
import Typography from "./ui/typography";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";

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

interface HeaderMenuProps {
  defaultColor?: string;
}

const HeaderMenu = ({defaultColor}: HeaderMenuProps) => {
  const pathname = usePathname();
  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className="flex flex-col lg:flex-row items-center gap-6"
    >
      {headerMenu.map((item) => {
        const isActive = pathname.startsWith(item.link);
        return (
          <Link
            className={cn(
              `flex items-center gap-1.5`,
              isActive ? "text-primary-500" : `text-gray-600 ${defaultColor}`,
            )}
            key={item.link}
            href={item.link}
          >
            <span className="text-[24px]">{item.icon}</span>
            <Typography
              variant={"s"}
              className={cn(
                `capitalize`,
                isActive ? "text-primary-500" : `text-gray-600 ${defaultColor}`,
              )}
            >
              {item.name}
            </Typography>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default HeaderMenu;
