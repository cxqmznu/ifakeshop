export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  brand: string;
  price: number;
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
  showcaseImages: string[];
  popularity: number;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  subcategories: Subcategory[];
  productCount: number;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo: string;
  country: string;
  foundedYear: number;
  productCount: number;
  isLuxury: boolean;
  isFantasy: boolean;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
  images: string[];
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  productIds: string[];
  type: 'trending' | 'luxury' | 'hidden_gems' | 'fantasy' | 'new_arrivals';
}

export interface SearchResult {
  products: Product[];
  totalCount: number;
  facets: SearchFacets;
  suggestions: string[];
}

export interface SearchFacets {
  categories: FacetItem[];
  brands: FacetItem[];
  priceRanges: FacetItem[];
  colors: FacetItem[];
}

export interface FacetItem {
  value: string;
  count: number;
}

export interface Locale {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  flag: string;
  rate: number;
  locale: string;
}

export interface UserPreferences {
  currency: string;
  locale: string;
  recentSearches: string[];
  recentlyViewed: string[];
  wishlist: string[];
}

export interface AnalyticsEvent {
  type: 'view' | 'search' | 'add_to_cart' | 'save' | 'compare' | 'share';
  productId?: string;
  category?: string;
  query?: string;
  timestamp: string;
}

export interface CountryInfo {
  code: string;
  name: string;
  currency: string;
  locale: string;
  languages: string[];
  timezone: string;
  dateFormat: string;
  numberFormat: string;
}
