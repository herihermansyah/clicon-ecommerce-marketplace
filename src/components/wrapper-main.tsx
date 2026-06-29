import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";

interface WrapperMainProps {
  className?: string;
  children?: React.ReactNode;
}

const WrapperMain = forwardRef<HTMLDivElement, WrapperMainProps>(
  ({className, children}, ref) => {
    return (
      <div
        ref={ref}
        className={cn("container mx-auto 2xl:w-main px-4 2xl:px-0", className)}
      >
        {children}
      </div>
    );
  },
);

WrapperMain.displayName = "WrapperMain";

export default WrapperMain;
