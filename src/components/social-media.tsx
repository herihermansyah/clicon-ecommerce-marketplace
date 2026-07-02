"use client"
import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaPinterestP,
  FaReddit,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Typography from "./ui/typography";
import {motion} from "motion/react";

const socialMediaData = [
  {name: "twitter", icon: <FaTwitter size={16} />, link: "/twitter.com"},
  {name: "facebook", icon: <FaFacebook size={16} />, link: "/twitter.com"},
  {name: "pinterest", icon: <FaPinterestP size={16} />, link: "/twitter.com"},
  {name: "reddit", icon: <FaReddit size={16} />, link: "/twitter.com"},
  {name: "youtube", icon: <FaYoutube size={16} />, link: "/twitter.com"},
  {name: "instagram", icon: <FaInstagram size={16} />, link: "/twitter.com"},
];

const SocialMedia = () => {
  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className="flex items-center gap-3"
    >
      <Typography variant={"s"} className="text-gray-00">
        Follow us:
      </Typography>
      {socialMediaData.map((item) => (
        <div key={item.name} className="text-gray-00">
          <Link href={item.link}>{item.icon}</Link>
        </div>
      ))}
    </motion.div>
  );
};

export default SocialMedia;
