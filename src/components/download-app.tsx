"use client"
import React from "react";
import {FaGooglePlay} from "react-icons/fa";
import {FaApple} from "react-icons/fa";
import Typography from "./ui/typography";
import {motion} from "motion/react";

interface DownloadAppType {
  icon: React.ReactNode;
  name: string;
}

const downloadAppData: DownloadAppType[] = [
  {icon: <FaGooglePlay size={32} />, name: "Google Play"},
  {icon: <FaApple size={32} />, name: "Apple Store"},
];

const DownloadApp = () => {
  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className="flex flex-col gap-4.5 w-50"
    >
      <Typography variant={"m"} weight={500} className="text-gray-00 uppercase">
        download app
      </Typography>
      <div className="flex flex-col gap-3">
        {downloadAppData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-center gap-4 w-44 h-17.25 bg-gray-800 rounded-[3px]"
          >
            <span className="text-gray-00">{item.icon}</span>
            <div className="flex flex-col gap-1">
              <Typography variant={"xs"} className="text-gray-00">
                Get in now
              </Typography>
              <Typography variant={"s"} weight={600} className="text-gray-00">
                {item.name}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DownloadApp;
