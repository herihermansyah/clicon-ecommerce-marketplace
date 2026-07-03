import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({className, ...props}, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn("bg-gray-200 h-1 w-full animate-pulse", className)}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";

export default Skeleton;
