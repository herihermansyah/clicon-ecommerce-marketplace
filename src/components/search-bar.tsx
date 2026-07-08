"use client";
import React from "react";
import {Input} from "./ui/input";
import {FiSearch} from "react-icons/fi";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";
import {ProductTypes} from "@/@types/product-types";
import ProductCard from "./product-card";
import {searchProduct} from "@/service/products";
import {useRouter} from "next/navigation";
import Typography from "./ui/typography";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({className}: SearchBarProps) => {
  const [query, setQuery] = React.useState("");
  const [debouncedQuery, setDebouncedQuery] = React.useState("");
  const [product, setProduct] = React.useState<ProductTypes[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await searchProduct(debouncedQuery);
        setProduct(data.products || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [debouncedQuery]);

  const filteredProduct = product.filter((item) => {
    const keyword = debouncedQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword)
    );
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setIsOpen(false);
      router.push(`/shop?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <motion.div
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      className="relative"
    >
      <form onSubmit={handleSubmit}>
        <Input
          iconRight={<FiSearch size={20} />}
          value={query}
          onChange={handleChange}
          placeholder="Search for anything..."
          className={cn("lg:w-161.5", className)}
        />
      </form>
      {isOpen && debouncedQuery.trim() !== "" && (
        <div className="absolute w-full top-15 h-100 bg-gray-50 rounded-sm overflow-y-scroll">
          <div className="grid grid-cols-1 gap-2 p-4">
            {filteredProduct.length > 0 ? (
              filteredProduct.map((item) => (
                <motion.div
                  initial={{scale: 0, opacity: 0}}
                  animate={{scale: 1, opacity: 1}}
                  key={item.id}
                >
                  <ProductCard variant={"secondary"} product={item} />
                </motion.div>
              ))
            ) : (
              <div className="flex flex-col gap-2 justify-center text-center mt-10">
                <Typography variant={"s"}>No products found.</Typography>
                <Typography variant={"l"}>-{query}-</Typography>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SearchBar;
