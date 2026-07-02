"use client";
import React from "react";
import {MdKeyboardArrowUp} from "react-icons/md";
import Typography from "./ui/typography";
import {FiCheck} from "react-icons/fi";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";

type Currency = {
  code: "IDR" | "USD";
  label: string;
};

const Currencies: Currency[] = [
  {code: "USD", label: "Dollar(USD)"},
  {code: "IDR", label: "Rupiah(IDR)"},
];

const CurrencySelect = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCurrency, setSelectedCurrency] =
    React.useState<Currency | null>(Currencies[0]);

  const handleSelect = (currency: Currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };
  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className="relative"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 cursor-pointer text-[14px] text-gray-00"
      >
        <Typography variant={"m"} weight={500} className="text-gray-00">
          {selectedCurrency?.code}
        </Typography>
        <span
          className={`${isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-500 ease-in-out`}
        >
          <MdKeyboardArrowUp size={20} />
        </span>
      </button>
      {/* dropdown */}
      {isOpen && (
        <div
          className={cn(
            "w-45 p-2 bg-gray-00 shadow-dropdown rounded-[3px] flex flex-col gap-2",
            "absolute top-7",
          )}
        >
          {Currencies.map((items) => {
            const isSelected = selectedCurrency?.code === items.code;
            return (
              <div
                key={items.code}
                className="flex items-center justify-between"
              >
                <button
                  onClick={() => handleSelect(items)}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Typography
                    variant={"m"}
                    weight={500}
                    className={`text-gray-600 ${isSelected && "text-primary-500"}`}
                  >
                    {items.label}
                  </Typography>
                </button>
                {isSelected && (
                  <FiCheck size={16} className="text-primary-500" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default CurrencySelect;
