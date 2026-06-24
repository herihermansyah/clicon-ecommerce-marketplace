import {cn} from "@/lib/utils";
import {cva, VariantProps} from "class-variance-authority";
import Link from "next/link";
import React, {forwardRef} from "react";
import {HiOutlineArrowRight} from "react-icons/hi";

const linkButtonVariants = cva(
  "flex items-center gap-2 text-[14px] font-medium w-fit leading-5 transition-transform duration-500 ease-in-out pb-1 border-b-2 border-b-transparent",
  {
    variants: {
      color: {
        gray: "hover:border-b-gray-900 text-gray-900 hover:border-b-2",
        primary:
          "hover:border-b-primary-600 text-primary-500 hover:text-primary-600 hover:border-b-2",
        secondary:
          "hover:border-b-secondary-600 text-secondary-500 hover:text-secondary-600 hover:border-b-2",
        success:
          "hover:border-b-success-600 text-success-500 hover:text-success-600 hover:border-b-2",
        warning:
          "hover:border-b-warning-600 text-warning-500 hover:text-warning-600 hover:border-b-2",
        danger:
          "hover:border-b-danger-600 text-danger-500 hover:text-danger-600 hover:border-b-2",
      },
    },
    defaultVariants: {
      color: "gray",
    },
  },
);

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkButtonVariants> & {
    href: string;
  };

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({children, className, href, color, ...props}, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        {...props}
        className={cn(linkButtonVariants({color, className}), "")}
      >
        <span>{children}</span>
        <span>
          <HiOutlineArrowRight size={20} />
        </span>
      </Link>
    );
  },
);

LinkButton.displayName = "LinkButton";

export default LinkButton;
