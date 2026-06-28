import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";
import {GoDotFill} from "react-icons/go";

interface SwitchType extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Switch = forwardRef<HTMLInputElement, SwitchType>(
  ({className, id, label, disabled, ...props}, ref) => {
    const inputId = id || label?.replace(/\s+/g, "_").toLowerCase();

    return (
      <label
        htmlFor={inputId}
        className={cn(
          !disabled && "group",
          "flex items-center gap-2 select-none",
          disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        )}
      >
        <div className="w-9 h-5 relative">
          <input
            ref={ref}
            disabled={disabled}
            id={inputId}
            {...props}
            type="checkbox"
            className="peer sr-only"
          />

          {/* Track / background */}
          <div
            className={cn(
              "w-full h-full bg-gray-00 border border-gray-100 rounded-full",
              "group-hover:border-primary-500 group-hover:border-2",
              "peer-checked:bg-primary-500 peer-checked:border-primary-500",
              className,
            )}
          />

          {/* Knob / Switch */}
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 -left-0.5",
              "transition-all duration-100 ease-in-out pointer-events-none",
              "peer-checked:translate-x-4.25",
              "text-gray-100",
              "group-hover:text-primary-500",
              "peer-checked:text-gray-00",
            )}
          >
            <GoDotFill size={24} className="transition-colors duration-100" />
          </div>
        </div>

        {/* Teks Label */}
        {label && (
          <span
            className={cn(
              "text-[14px] font-medium transition-colors duration-300",
              disabled ? "text-gray-500" : "text-gray-900",
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);

Switch.displayName = "Switch";

export default Switch;
