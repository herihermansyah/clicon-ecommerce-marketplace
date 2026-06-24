import {cn} from "@/lib/utils";
import {cva, VariantProps} from "class-variance-authority";
import React, {forwardRef} from "react";

const iconButtonVariants = cva(
  "p-3 transition-all duration-500 ease-in-out cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        filled: "text-gray-00",
        outline: "ring-2 bg-gray-00",
        ghost: "ring-2 bg-gray-00",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-xs",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        danger: "",
      },
    },
    compoundVariants: [
      // primary variant
      {
        variant: "filled",
        color: "primary",
        className:
          "bg-primary-500 hover:bg-primary-600 disabled:bg-primary-200",
      },
      {
        variant: "outline",
        color: "primary",
        className:
          "ring-primary-500 text-primary-500 hover:ring-primary-600 hover:bg-primary-50 hover:text-primary-600 disabled:ring-primary-200 disabled:text-primary-200 disabled:bg-gray-00",
      },
      {
        variant: "ghost",
        color: "primary",
        className:
          "ring-primary-100 text-primary-500 hover:ring-primary-500 hover:text-primary-500 disabled:text-primary-200 disabled:ring-primary-200",
      },
      //   secondary variant
      {
        variant: "filled",
        color: "secondary",
        className:
          "bg-secondary-500 hover:bg-secondary-600 disabled:bg-secondary-200",
      },
      {
        variant: "outline",
        color: "secondary",
        className:
          "ring-secondary-500 text-secondary-500 hover:ring-secondary-600 hover:bg-secondary-50 hover:text-secondary-600 disabled:ring-secondary-200 disabled:text-secondary-200 disabled:bg-gray-00",
      },
      {
        variant: "ghost",
        color: "secondary",
        className:
          "ring-secondary-100 text-secondary-500 hover:ring-secondary-500 hover:text-secondary-500 disabled:text-secondary-200 disabled:ring-secondary-200",
      },
      //   success variant
      {
        variant: "filled",
        color: "success",
        className:
          "bg-success-500 hover:bg-success-600 disabled:bg-success-200",
      },
      {
        variant: "outline",
        color: "success",
        className:
          "ring-success-500 text-success-500 hover:ring-success-600 hover:bg-success-50 hover:text-success-600 disabled:ring-success-200 disabled:text-success-200 disabled:bg-gray-00",
      },
      {
        variant: "ghost",
        color: "success",
        className:
          "ring-success-100 text-success-500 hover:ring-success-500 hover:text-success-500 disabled:text-success-200 disabled:ring-success-200",
      },
      //   warning variant
      {
        variant: "filled",
        color: "warning",
        className:
          "bg-warning-500 hover:bg-warning-600 disabled:bg-warning-200",
      },
      {
        variant: "outline",
        color: "warning",
        className:
          "ring-warning-500 text-warning-500 hover:ring-warning-600 hover:bg-warning-50 hover:text-warning-600 disabled:ring-warning-200 disabled:text-warning-200 disabled:bg-gray-00",
      },
      {
        variant: "ghost",
        color: "warning",
        className:
          "ring-warning-100 text-warning-500 hover:ring-warning-500 hover:text-warning-500 disabled:text-warning-200 disabled:ring-warning-200",
      },
      //   danger variant
      {
        variant: "filled",
        color: "danger",
        className: "bg-danger-500 hover:bg-danger-600 disabled:bg-danger-200",
      },
      {
        variant: "outline",
        color: "danger",
        className:
          "ring-danger-500 text-danger-500 hover:ring-danger-600 hover:bg-danger-50 hover:text-danger-600 disabled:ring-danger-200 disabled:text-danger-200 disabled:bg-gray-00",
      },
      {
        variant: "ghost",
        color: "danger",
        className:
          "ring-danger-100 text-danger-500 hover:ring-danger-500 hover:text-danger-500 disabled:text-danger-200 disabled:ring-danger-200",
      },
      //   default variant
      {
        variant: "filled",
        color: "default",
        className: "bg-gray-900 hover:bg-gray-700 disabled:bg-gray-200",
      },
      {
        variant: "outline",
        color: "default",
        className:
          "ring-gray-900 text-gray-900 hover:ring-gray-700 hover:bg-gray-50 hover:text-gray-700 disabled:ring-gray-200 disabled:text-gray-200 disabled:bg-gray-00",
      },
      {
        variant: "ghost",
        color: "default",
        className:
          "ring-gray-100 text-gray-900 hover:ring-gray-900 hover:text-gray-900 disabled:text-gray-200 disabled:ring-gray-200",
      },
    ],
    defaultVariants: {
      shape: "square",
      color: "primary",
      variant: "filled",
    },
  },
);

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof iconButtonVariants>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({children, className, variant, color, shape, ...props}, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          iconButtonVariants({variant, color, shape, className}),
          "",
        )}
      >
        {children}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;
