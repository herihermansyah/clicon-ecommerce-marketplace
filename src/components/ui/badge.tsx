import {cn} from "@/lib/utils";
import {cva, VariantProps} from "class-variance-authority";
import React, {forwardRef} from "react";

const badgeVariants = cva(
  "text-gray-00 w-fit text-[12px] font-semibold leading-4 px-2.5 py-1.25 rounded-xs uppercase",
  {
    variants: {
      variant: {
        primary: "bg-gray-500",
        danger: "bg-danger-500",
        warning: "bg-warning-500",
        success: "bg-success-500",
        secondary: "bg-secondary-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({children, className, variant, ...props}, ref) => {
    return (
      <span
        ref={ref}
        {...props}
        className={cn(badgeVariants({variant, className}))}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
