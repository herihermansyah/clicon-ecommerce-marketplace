"use client";
import React from "react";
import Typography from "./ui/typography";
import {CategoryType} from "@/@types/categories-type";
import {getCategory} from "@/service/category";
import Radio from "./ui/radio";

const CategoryFilter = () => {
  const [category, setCategory] = React.useState<CategoryType[]>([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategory();
        setCategory(data);
      } catch {
        console.log("failed get category");
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <Typography variant={"m"} weight={500}>
        CATEGORY
      </Typography>
      <div className="flex flex-col gap-3">
        {category.slice(0, 12).map((item) => (
          <div key={item.slug}>
            <Radio label={item.name} id={item.slug} name="category" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
