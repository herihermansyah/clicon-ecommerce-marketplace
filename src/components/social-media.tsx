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
    <div className="flex items-center gap-3">
      <Typography variant={"s"} className="text-gray-00">
        Follow us:
      </Typography>
      {socialMediaData.map((item) => (
        <div key={item.name} className="text-gray-00">
          <Link href={item.link}>{item.icon}</Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
