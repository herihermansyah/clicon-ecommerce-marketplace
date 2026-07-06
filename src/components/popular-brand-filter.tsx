import React from "react";
import Typography from "./ui/typography";
import Checkbox from "./ui/checkbox";

const categoryData = [
  {name: "Dell", brand: "dell"},
  {name: "Asus", brand: "asus"},
  {name: "Hp", brand: "hp"},
  {name: "Axio", brand: "axio"},
  {name: "Apple", brand: "apple"},
  {name: "Xiaomi", brand: "xiaomi"},
  {name: "Huawei", brand: "huawei"},
  {name: "Oppo", brand: "oppo"},
  {name: "Techno", brand: "techno"},
  {name: "Samsung", brand: "samsung"},
  {name: "Sony", brand: "sony"},
];

const PopularBrandFilter = () => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant={"m"} weight={500}>
        popular Brands
      </Typography>
      <div className="grid grid-cols-2 gap-3">
        {categoryData.map((item) => (
          <div key={item.name}>
            <Checkbox label={item.name} id={item.brand} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBrandFilter;
