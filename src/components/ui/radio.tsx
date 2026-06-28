import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";
import {GoDotFill} from "react-icons/go";

interface RadioType extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioType>(
  ({className, disabled, label, id, ...props}, ref) => {
    const inputId = id || label?.replace(/\s+/g, "_").toLowerCase();

    const checkboxStyle = {
      base: "w-5 h-5 flex items-center justify-center rounded-full cursor-pointer bg-gray-00 [&>svg]:scale-0",
      border: "border-gray-200 border",
      hover:
        "peer-[:not(:disabled)]:hover:border-primary-500 peer-[:not(:disabled)]:hover:border-2",
      checked:
        "peer-checked:bg-primary-500 peer-checked:border-primary-500 peer-checked:[&>svg]:scale-100",
      disabled:
        "peer-disabled:border-gray-200 peer-disabled:bg-gray-50 peer-disabled:cursor-not-allowed",
    };
    return (
      <label htmlFor={inputId} className="flex items-center gap-2">
        <input
          id={inputId}
          ref={ref}
          {...props}
          disabled={disabled}
          type="radio"
          className="peer sr-only"
        />
        <div className={cn(...Object.values(checkboxStyle), className)}>
          <GoDotFill size={14} className="text-gray-00" />
        </div>
        {label && (
          <span
            className={`text-[14px] font-medium ${disabled ? "cursor-not-allowed text-gray-500" : "text-gray-900"}`}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);

Radio.displayName = "Radio";

export default Radio;
