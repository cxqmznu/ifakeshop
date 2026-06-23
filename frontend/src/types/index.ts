export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  brand: string;
  price: number;
  msrp: number;
  currency: string;
  images: string[];
  videos: string[];
  specifications: Record<string, string>;
  colors: string[];
  sizes: string[];
  rating: number;
  reviewCount: number;
  releaseYear: number;
  inStock: boolean;
  isLimitedEdition: boolean;
  isRare: boolean;
  isFantasy: boolean;
  isFutureTech: boolean;
  tags: string[];
  features: string[];
  popularity: number;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}
