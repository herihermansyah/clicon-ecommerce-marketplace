import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";

interface CardType {
  className?: string;
  children?: React.ReactNode;
}

// ======================= card ======================= //

const Card = forwardRef<HTMLDivElement, CardType>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full rounded-[3px] p-4",
          "border border-gray-100 bg-gray-00",
          "flex flex-col gap-6",
          "group hover:shadow-dropdown",
          "relative",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

// ======================= card content ======================= //

const CardContent = forwardRef<HTMLDivElement, CardType>(
  ({className, children, ...props}, ref) => {
    return (
      <div ref={ref} className={cn("w-full h-full", className)} {...props}>
        {children}
      </div>
    );
  },
);

CardContent.displayName = "CardContent";

// ======================= card header ======================= //

const CardHeader = forwardRef<HTMLDivElement, CardType>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CardHeader.displayName = "CardHeader";

// ======================= card footer ======================= //

const CardFooter = forwardRef<HTMLDivElement, CardType>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CardFooter.displayName = "CardFooter";

// ======================= card title ======================= //

const CardTitle = forwardRef<HTMLDivElement, CardType>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-gray-900 text-[14px] line-clamp-2", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

CardTitle.displayName = "CardTitle";

export {Card, CardContent, CardHeader, CardFooter, CardTitle};
