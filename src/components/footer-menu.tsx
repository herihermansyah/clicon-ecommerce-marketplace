import React from "react";
import Typography from "./ui/typography";
import Link from "next/link";

interface FooterMenuType {
  name: string;
  link: string;
}

type FooterMenuProps<T extends FooterMenuType> = {
  data: T[];
  title?: string;
  name: (item: T) => string;
  link: (item: T) => string;
};

const FooterMenu = <T extends FooterMenuType>({
  data,
  title,
  name,
  link,
}: FooterMenuProps<T>) => {
  return (
    <div className="flex flex-col gap-4.5 w-50">
      <Typography variant={"m"} weight={500} className="text-gray-00 uppercase">
        {title}
      </Typography>
      <div>
        {data.map((item, index) => (
          <Link
            key={index}
            href={link(item)}
            className="flex items-center gap-2 group"
          >
            <div className="w-6 h-0.5 bg-warning-500 hidden group-hover:block" />
            <Typography
              variant={"s"}
              weight={500}
              className="text-gray-400 py-1.5 hover:text-gray-00"
            >
              {name(item)}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterMenu;
