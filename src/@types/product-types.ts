export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // Bisa menggunakan string untuk format ISO Date
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string; // Dibuat opsional (?) karena beberapa produk anonim biasanya tidak punya brand
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: "In Stock" | "Low Stock" | "Out of Stock" | string; // Menggunakan literal type agar lebih aman
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

// Interface untuk wrapper response API jika kamu membutuhkannya
export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
