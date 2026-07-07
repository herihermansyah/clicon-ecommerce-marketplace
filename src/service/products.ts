import {api} from "./api";

export const getProducts = async () => {
  const response = await api.get("products?limit=0");
  return response.data;
};
export const searchProduct = async (query: string) => {
  if (!query.trim()) return {products: []};
  const response = await api.get(
    `products/search?q=${encodeURIComponent(query)}`,
  );
  return response.data;
};
