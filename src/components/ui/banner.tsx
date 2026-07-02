import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";

interface BannerType {
  className?: string;
  children?: React.ReactNode;
}

const Banner = forwardRef<HTMLDivElement, BannerType>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn("relative p-5 rounded-md overflow-hidden", className)}
      >
        {children}
      </div>
    );
  },
);

Banner.displayName = "Banner";

const BannerContent = forwardRef<HTMLDivElement, BannerType>(
  ({className, children, ...props}, ref) => {
    return (
      <div ref={ref} {...props} className={cn(className)}>
        {children}
      </div>
    );
  },
);

BannerContent.displayName = "BannerContent";

export {Banner, BannerContent};
