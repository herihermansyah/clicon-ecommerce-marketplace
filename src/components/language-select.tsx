"use client";
import React from "react";
import Image from "next/image";
import {MdKeyboardArrowUp} from "react-icons/md";
import Typography from "./ui/typography";
import {FiCheck} from "react-icons/fi";
import {cn} from "@/lib/utils";

type Language = {
  code: "Eng" | "Ru";
  label: string;
  flag: string;
};

const languages: Language[] = [
  {code: "Eng", label: "English", flag: "/eng.svg"},
  {code: "Ru", label: "Rusian", flag: "/rusia.svg"},
];

const LanguageSelect = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language | null>(languages[0]);

  const handleSelect = (lang: Language) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 cursor-pointer text-[14px] text-gray-00"
      >
        <Typography variant={"m"} weight={500} className="text-gray-00">
          {selectedLanguage?.code}
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
          {languages.map((items) => {
            const isSelected = selectedLanguage?.code === items.code;
            return (
              <div
                key={items.code}
                className="flex items-center justify-between"
              >
                <button
                  onClick={() => handleSelect(items)}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Image
                    src={items.flag}
                    alt={items.label}
                    width={20}
                    height={20}
                  />
                  <Typography
                    variant={"m"}
                    weight={500}
                    className={`text-gray-600 ${isSelected && "text-gray-900"}`}
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
    </div>
  );
};

export default LanguageSelect;
