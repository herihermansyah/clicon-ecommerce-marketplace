"use client";
import {cn} from "@/lib/utils";
import React from "react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import Typography from "./ui/typography";
import ProductCard from "./product-card";
import {ProductTypes} from "@/@types/product-types";
import { Categories } from "@/@types/categories-type";


const categoryData: Categories[] = [
  {
    category: "laptops",
    name: "Laptops",
    subCategories: [
      {name: "Dell", brand: "dell"},
      {name: "Asus", brand: "asus"},
      {name: "Hp", brand: "hp"},
      {name: "Axio", brand: "axio"},
    ],
  },
  {
    category: "mobile-accessories",
    name: "Mobile Accessories",
    subCategories: [
      {name: "Ugreen", brand: "ugreen"},
      {name: "Uneed", brand: "uneed"},
    ],
  },
  {
    category: "smartphones",
    name: "Smartphones",
    subCategories: [
      {name: "Apple", brand: "apple"},
      {name: "Xiaomi", brand: "xiaomi"},
      {name: "Huawei", brand: "huawei"},
      {name: "Oppo", brand: "oppo"},
      {name: "Techno", brand: "techno"},
      {name: "Samsung", brand: "samsung"},
      {name: "Sony", brand: "sony"},
    ],
  },
  {
    category: "tablets",
    name: "Tablets",
    subCategories: [
      {name: "Xiaomi", brand: "xiaomi"},
      {name: "Huawei", brand: "huawei"},
      {name: "Oppo", brand: "oppo"},
      {name: "Samsung", brand: "samsung"},
    ],
  },
];

const productMockData = Array.from({length: 3}).map(
  (_, i) =>
    ({
      id: i + 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      discountPercentage: 10.48,
      rating: 2.56,
      stock: 99,
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
      reviews: [
        {
          rating: 3,
          comment: "Would not recommend!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Eleanor Collins",
          reviewerEmail: "eleanor.collins@x.dummyjson.com",
        },
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Lucas Gordon",
          reviewerEmail: "lucas.gordon@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2025-04-30T09:41:02.053Z",
          reviewerName: "Eleanor Collins",
          reviewerEmail: "eleanor.collins@x.dummyjson.com",
        },
      ],
      brand: "apple",
      availabilityStatus: "In Stock",
    }) as ProductTypes,
);

// ======================== Category Mega Menu ========================

const CategoryMegaMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] =
    React.useState<Categories | null>(null);
  const [selectedBrand, setSelectedBrand] = React.useState<string | null>(null);

  const toggleMenu = () => {
    if (isOpen) {
      setSelectedCategory(null);
      setSelectedBrand(null);
    }
    setIsOpen(!isOpen);
  };

  const handleSelecCategory = (category: Categories) => {
    setSelectedCategory(category);
    setSelectedBrand(null);
  };

  const filteredProducts = productMockData.filter((product) => {
    if (!selectedBrand) return true;
    return product.brand?.toLowerCase() === selectedBrand.toLowerCase();
  });
  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className={cn(
          "flex items-center gap-2 bg-gray-50 px-6 py-3.5 cursor-pointer rounded-xs",
          "font-medium text-[14px] leading-5 text-gray-900",
          "hover:bg-primary-500 hover:text-gray-00",
          "transition-all duration-300 ease-in-out",
          "w-fit",
          isOpen && "bg-primary-500 text-gray-00",
        )}
      >
        <span>All Category</span>
        <span
          className={`${isOpen && "rotate-180"} transition-all duration-500 ease-in-out`}
        >
          <MdOutlineKeyboardArrowDown size={20} />
        </span>
      </button>

      {/* main category dropdown */}
      {isOpen && (
        <MainCategory
          categories={categoryData}
          selectedCategory={selectedCategory}
          onSelectedCategory={handleSelecCategory}
        />
      )}

      {/* sub brand category dropdown */}
      {isOpen && selectedCategory && (
        <SubBrandCategory
          selectedCategory={selectedCategory}
          selectedBrand={selectedBrand}
          onSelectedBrand={setSelectedBrand}
          filterProduct={filteredProducts}
        />
      )}
    </div>
  );
};

// ======================== Main Category ========================
interface MainCategoryProps {
  categories: Categories[];
  selectedCategory: Categories | null;
  onSelectedCategory: (Category: Categories) => void;
}
const MainCategory = ({
  categories,
  selectedCategory,
  onSelectedCategory,
}: MainCategoryProps) => {
  return (
    <div
      className={cn(
        "w-60 border bg-gray-00 border-gray-100 rounded-[3px] shadow-dropdown py-3",
        "absolute top-15",
      )}
    >
      {categories.map((category) => {
        const isSelected = selectedCategory?.category === category.category;
        return (
          <button
            onMouseEnter={() => {
              onSelectedCategory(category);
            }}
            onClick={() => {
              onSelectedCategory(category);
            }}
            key={category.category}
            className={cn(
              "flex items-center justify-between h-9 cursor-pointer w-full px-3 rounded-[3px]",
              "text-[14px] leading-5 text-gray-600",
              isSelected && "bg-gray-50 text-gray-900",
            )}
          >
            <span>{category.name}</span>
            {isSelected && <MdOutlineKeyboardArrowRight size={20} />}
          </button>
        );
      })}
    </div>
  );
};

// ======================== Sub Brand Category ========================
interface SubBrandCategoryProps {
  selectedCategory: Categories;
  selectedBrand: string | null;
  onSelectedBrand: (brand: string) => void;
  filterProduct: ProductTypes[];
}
const SubBrandCategory = ({
  selectedBrand,
  selectedCategory,
  onSelectedBrand,
  filterProduct,
}: SubBrandCategoryProps) => {
  return (
    <div
      className={cn(
        "p-5 border bg-gray-00 border-gray-100 rounded-[3px] shadow-dropdown",
        "absolute top-15 left-62.75",
        "flex gap-5",
      )}
    >
      {/* brand name */}
      <div className={cn("w-41", "flex flex-col items-start")}>
        {selectedCategory.subCategories.map((item) => {
          const isSelectedBrand = selectedBrand === item.brand;
          return (
            <button
              onClick={() => onSelectedBrand(item.brand)}
              onMouseEnter={() => onSelectedBrand(item.brand)}
              key={item.brand}
              className={cn(
                "cursor-pointer",
                "text-[14px] leading-5 text-gray-600 h-9",
                "w-full flex items-center px-3 ",
                isSelectedBrand && "bg-gray-50 text-gray-900",
              )}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      {/* product brand list  */}
      <ProductBrandList
        selectedCategory={selectedCategory}
        filterProduct={filterProduct}
      />
    </div>
  );
};

// ======================== Product Brand List ========================
interface ProductBrandList {
  selectedCategory: Categories;
  filterProduct: ProductTypes[];
}
const ProductBrandList = ({
  selectedCategory,
  filterProduct,
}: ProductBrandList) => {
  return (
    <div className="flex flex-col gap-3">
      <Typography variant={"m"} weight={600}>
        FEATURED {selectedCategory.name.toUpperCase()}
      </Typography>
      <div className="flex flex-col gap-3">
        {filterProduct.length > 0 ? (
          filterProduct.map((item) => (
            <ProductCard variant={"secondary"} key={item.id} product={item} />
          ))
        ) : (
          <p className="text-xs text-gray-400 italic px-2">
            No products found for this brand.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryMegaMenu;
