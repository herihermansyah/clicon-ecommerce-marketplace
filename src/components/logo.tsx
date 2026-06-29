import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="min-w-44.25 h-min-[48px]">
      <Image src="/logo.svg" alt="logo" width={177} height={48} priority />
    </div>
  );
};

export default Logo;
