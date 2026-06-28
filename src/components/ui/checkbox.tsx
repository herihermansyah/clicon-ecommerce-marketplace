import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";
import {FaCheck} from "react-icons/fa6";

interface ChecboxType extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, ChecboxType>(
  ({className, id, label, disabled, ...props}, ref) => {
    const inputId = id || label?.replace(/\s+/g, "_").toLowerCase();

    const checkboxStyle = {
      base: "w-5 h-5 flex items-center justify-center rounded-xs cursor-pointer bg-gray-00 [&>svg]:scale-0",
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
          ref={ref}
          {...props}
          id={inputId}
          type="checkbox"
          className="peer sr-only"
          disabled={disabled}
        />
        <div className={cn(...Object.values(checkboxStyle), className)}>
          <FaCheck size={14} className="text-gray-00" />
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

Checkbox.displayName = "Checkbox";

export default Checkbox;
