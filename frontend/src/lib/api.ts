export interface SearchParams {
  query?: string;
  category?: string;
  subcategory?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
  limit?: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

async function fetchApi<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${BASE_URL}/api${endpoint}`, typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) url.searchParams.set(key, value);
    });
  }
  
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function getProducts(params: SearchParams) {
  return fetchApi<any>('/products', {
    ...(params.query && { query: params.query }),
    ...(params.category && { category: params.category }),
    ...(params.subcategory && { subcategory: params.subcategory }),
    ...(params.brand && { brand: params.brand }),
    ...(params.minPrice !== undefined && { minPrice: String(params.minPrice) }),
    ...(params.maxPrice !== undefined && { maxPrice: String(params.maxPrice) }),
    ...(params.sort && { sort: params.sort }),
    ...(params.page && { page: String(params.page) }),
    ...(params.limit && { limit: String(params.limit) }),
  });
}

export async function getProduct(id: string) {
  return fetchApi<any>(`/products?id=${id}`);
}

export async function searchProducts(query: string, limit: number = 10) {
  return fetchApi<any>('/search', { q: query, limit: String(limit) });
}

export async function getSearchSuggestions(query: string) {
  return fetchApi<any>('/search', { q: query, suggestions: 'true' });
}

export async function getCollections() {
  return fetchApi<any>('/collections');
}

export async function getCollection(id: string) {
  return fetchApi<any>(`/collections?id=${id}`);
}

export async function getTrendingProducts() {
  return fetchApi<any>('/products', { sort: 'popularity', limit: '20' });
}

export async function getCategoryProducts(category: string, limit: number = 50) {
  return fetchApi<any>('/products', { category, limit: String(limit) });
}
