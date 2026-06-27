import {cn} from "@/lib/utils";
import {cva, VariantProps} from "class-variance-authority";
import React, {forwardRef} from "react";
import {PiChecks} from "react-icons/pi";
import {PiWarning} from "react-icons/pi";
import {CgDanger} from "react-icons/cg";

interface InputType {
  className?: string;
  children?: React.ReactNode;
}

// ======================= field group state ======================= //

const FieldGroup = forwardRef<HTMLDivElement, InputType>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn("flex flex-col gap-2", className)}
      >
        {children}
      </div>
    );
  },
);

FieldGroup.displayName = "FieldGroup";

// ======================= field state ======================= //

const Field = forwardRef<HTMLDivElement, InputType>(
  ({className, children}, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col gap-1", className)}>
        {children}
      </div>
    );
  },
);

Field.displayName = "Field";

// ======================= field label state ======================= //

const FieldLabel = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & InputType
>(({children, className, ...props}, ref) => {
  return (
    <label
      ref={ref}
      {...props}
      className={cn(
        "text-[14px] text-gray-900 leading-5 font-medium",
        className,
      )}
    >
      {children}
    </label>
  );
});

FieldLabel.displayName = "FieldLabel";

// ======================= input state ======================= //

const inputVariants = cva(
  "relative flex items-center border w-69 h-11 rounded-[2px] overflow-hidden",
  {
    variants: {
      state: {
        normal:
          "border-gray-100 focus:border-primary-500 focus-within:border-primary-500 bg-gray-00",
        success: "border-success-500 bg-success-50 text-success-500",
        warning: "border-warning-500 bg-warning-50 text-warning-500",
        danger: "border-danger-500 bg-danger-50 text-danger-500",
      },
    },
    defaultVariants: {
      state: "normal",
    },
  },
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({className, state = "normal", iconLeft, iconRight, ...props}, ref) => {
    const renderStateIcon = () => {
      switch (state) {
        case "success":
          return <PiChecks className="text-success-500 text-[20px]" />;
        case "danger":
          return <PiWarning className="text-danger-500 text-[20px]" />;
        case "warning":
          return <CgDanger className="text-warning-500 text-[20px]" />;
      }
    };
    return (
      <div className={cn(inputVariants({state, className}), "")}>
        {iconLeft && <span className="ml-4 -mr-2.5">{iconLeft}</span>}
        <input
          ref={ref}
          {...props}
          type="text"
          className="w-full h-full px-4 outline-none bg-transparent text-gray-700 focus:text-gray-900 placeholder:text-gray-500"
        />
        {iconRight && state === "normal" && (
          <span className="mr-4">{iconRight}</span>
        )}
        {state !== "normal" && (
          <span className="mr-4">{renderStateIcon()}</span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export {Input, Field, FieldLabel, FieldGroup};
