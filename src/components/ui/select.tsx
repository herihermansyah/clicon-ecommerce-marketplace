"use client";
import {cn} from "@/lib/utils";
import React, {createContext, useContext} from "react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

const buttonStyle = {
  base: "flex items-center justify-between bg-white border border-gray-100 text-gray-500 cursor-pointer w-full h-11 px-4 py-3 rounded-sm",
  hover: "hover:text-gray-900",
  transition: "transition-all duration-300 ease-in-out",
};

interface SelectContextType {
  selectedValue: string;
  onChange: (value: string, label: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SelectContext = createContext<SelectContextType | undefined>(undefined);

interface SelectProps {
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Select = ({
  className,
  children,
  placeholder = "Select...",
  value,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // state internal if not control by parent
  const [internalValue, setInternalValue] = React.useState("");
  const [displayLabel, setDisplayLabel] = React.useState(placeholder);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleSelect = (newValue: string, newLabel: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
      setDisplayLabel(newLabel);
    } else {
      setDisplayLabel(newLabel);
    }
    if (onChange) {
      onChange(newValue);
    }
    setIsOpen(false);
  };
  return (
    <SelectContext.Provider
      value={{
        selectedValue: currentValue,
        onChange: handleSelect,
        isOpen,
        setIsOpen,
      }}
    >
      <div className="relative w-60">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            buttonStyle.base,
            buttonStyle.transition,
            buttonStyle.hover,
            className,
          )}
        >
          <span>{displayLabel}</span>
          <MdOutlineKeyboardArrowDown
            className={cn(
              "text-[24px] transition-all duration-500 ease-in-out",
              isOpen && "rotate-180",
            )}
          />
        </button>
        {/* container dropdown menu */}
        {isOpen && (
          <div className="absolute top-11 w-full border border-gray-100 bg-gray-00 rounded-xs">
            <ul className="flex flex-col">{children}</ul>
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
};

interface OptionProps {
  value: string;
  children: string;
  className?: string;
}

const Option = ({children, className, value}: OptionProps) => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("option must be used  within a select component");
  }
  const isSelected = context.selectedValue === value;
  return (
    <li
      onClick={() => context.onChange(value, children)}
      className={cn(
        "px-4 flex items-center cursor-pointer h-11 bg-gray-00 text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-[14px] hover:font-medium",
        isSelected && "text-gray-900 bg-gray-50",
        className,
      )}
    >
      {children}
    </li>
  );
};

export {Select, Option};
