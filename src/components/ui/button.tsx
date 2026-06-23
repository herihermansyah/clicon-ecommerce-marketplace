import React, {forwardRef} from "react";
import {cva, type VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer flex items-center rounded-[3px] transition-all duration-500 ease-in-out font-bold disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        none: "",
        filled: "",
        outline: "ring-2 bg-gray-00",
        ghost: "ring-2 bg-gray-00",
      },
      color: {
        none: "text-gray-900 disabled:text-gray-500",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        danger: "",
      },
      size: {
        small: "text-[14px] px-6 h-12 gap-2",
        large: "text-[16px] px-8 h-14 gap-3",
      },
    },
    compoundVariants: [
      // primary variant
      {
        variant: "filled",
        color: "primary",
        className:
          "bg-primary-500 hover:bg-primary-600 text-gray-00 disabled:bg-primary-200",
      },
      {
        variant: "outline",
        color: "primary",
        className:
          "ring-primary-500 text-primary-500 hover:ring-primary-600 hover:bg-primary-50 disabled:ring-primary-200 disabled:text-primary-200 disabled:bg-gray-00",
      },
      {
        variant: "ghost",
        color: "primary",
        className:
          "ring-primary-100 text-primary-500 hover:ring-primary-500 disabled:text-primary-200 disabled:ring-primary-200",
      },
      //   secondary variant
      {
        variant: "filled",
        color: "secondary",
        className:
          "bg-secondary-500 text-gray-00 hover:bg-secondary-600 disabled:bg-secondary-200",
      },
      {
        variant: "outline",
        color: "secondary",
        className:
          "ring-secondary-500 text-secondary-500 hover:bg-secondary-50 hover:ring-secondary-600 hover:text-secondary-600 disabled:ring-secondary-200 disabled:text-secondary-200",
      },
      {
        variant: "ghost",
        color: "secondary",
        className:
          "ring-secondary-100 text-secondary-500 hover:ring-secondary-500 disabled:text-secondary-200 disabled:ring-secondary-200",
      },
      //   success variant
      {
        variant: "filled",
        color: "success",
        className:
          "bg-success-500 text-gray-00 hover:bg-success-600 disabled:bg-success-200",
      },
      {
        variant: "outline",
        color: "success",
        className:
          "ring-success-500 text-success-500 hover:bg-success-50 hover:ring-success-600 hover:text-success-600 disabled:ring-success-200 disabled:text-success-200",
      },
      {
        variant: "ghost",
        color: "success",
        className:
          "ring-success-100 text-success-500 hover:ring-success-500 disabled:text-success-200 disabled:ring-success-200",
      },
      //   waning variant
      {
        variant: "filled",
        color: "warning",
        className:
          "bg-warning-500 text-gray-00 hover:bg-warning-600 disabled:bg-warning-200",
      },
      {
        variant: "outline",
        color: "warning",
        className:
          "ring-warning-500 text-warning-500 hover:bg-warning-50 hover:ring-warning-600 hover:text-warning-600 disabled:ring-warning-200 disabled:text-warning-200",
      },
      {
        variant: "ghost",
        color: "warning",
        className:
          "ring-warning-100 text-warning-500 hover:ring-warning-500 disabled:text-warning-200 disabled:ring-warning-200",
      },
      //   danger variant
      {
        variant: "filled",
        color: "danger",
        className:
          "bg-danger-500 text-gray-00 hover:bg-danger-600 disabled:bg-danger-200",
      },
      {
        variant: "outline",
        color: "danger",
        className:
          "ring-danger-500 text-danger-500 hover:bg-danger-50 hover:ring-danger-600 hover:text-danger-600 disabled:ring-danger-200 disabled:text-danger-200",
      },
      {
        variant: "ghost",
        color: "danger",
        className:
          "ring-danger-100 text-danger-500 hover:ring-danger-500 disabled:text-danger-200 disabled:ring-danger-200",
      },
    ],
    defaultVariants: {
      size: "small",
      color: "primary",
      variant: "filled",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {className, children, variant, size, color, iconLeft, iconRight, ...props},
    ref,
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({variant, size, color, className}))}
      >
        {iconLeft && (
          <span
            className={`${size === "large" ? "text-[24px]" : "text-[20px]"}`}
          >
            {iconLeft}
          </span>
        )}
        <span>{children}</span>
        {iconRight && (
          <span
            className={`${size === "large" ? "text-[24px]" : "text-[20px]"}`}
          >
            {iconRight}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
