import {api} from "./api";

export const getCategory = async () => {
  const response = await api.get("products/categories");
  return response.data;
};
