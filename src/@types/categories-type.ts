export type Brands = {
  brand: string;
  name: string;
  url?: string;
};

export type Categories = {
  category: string;
  name: string;
  image?: string;
  subCategories: Brands[];
};