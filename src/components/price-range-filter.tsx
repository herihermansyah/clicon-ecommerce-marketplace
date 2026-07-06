import React from "react";
import Typography from "./ui/typography";

const PriceRangeFilter = () => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant={"m"} weight={500}>
        PRICE RANGE
      </Typography>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <input type="range" className="w-full" />
          <div className="flex items-center gap-3">
            <button className="border border-gray-100 rounded-[3px] cursor-pointer text-[14px] leading-6 w-full text-gray-500">
              Min price
            </button>
            <button className="border border-gray-100 rounded-[3px] cursor-pointer text-[14px] leading-6 w-full text-gray-500">
              Max price
            </button>
          </div>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
