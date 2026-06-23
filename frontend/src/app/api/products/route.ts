import { NextRequest, NextResponse } from 'next/server';
import { getStore, ensureStoreInitialized } from '@/lib/productStore';

const PRODUCTS_PER_PAGE = 50;

export async function GET(request: NextRequest) {
  ensureStoreInitialized();
  const store = getStore();
  const { searchParams } = new URL(request.url);

  const id = searchParams.get('id');
  if (id) {
    const product = store.products.find(p => p.id === id);
    if (!product) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(formatProduct(product));
  }

  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || String(PRODUCTS_PER_PAGE));
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');
  const brand = searchParams.get('brand');
  const sort = searchParams.get('sort') || 'popularity';
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const query = searchParams.get('query');

  let filtered = [...store.products];

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.toLowerCase().includes(q)
    );
  }

  if (category) filtered = filtered.filter(p => p.category === category);
  if (subcategory) filtered = filtered.filter(p => p.subcategory === subcategory);
  if (brand) filtered = filtered.filter(p => p.brand.toLowerCase().includes(brand.toLowerCase()));
  if (minPrice) filtered = filtered.filter(p => p.price >= parseFloat(minPrice));
  if (maxPrice) filtered = filtered.filter(p => p.price <= parseFloat(maxPrice));

  if (sort === 'price_asc') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price_desc') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (sort === 'newest') filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  else filtered.sort((a, b) => b.popularity - a.popularity);

  const totalCount = filtered.length;
  const start = (page - 1) * limit;
  const paged = filtered.slice(start, start + limit);

  return NextResponse.json({
    products: paged.map(formatProduct),
    totalCount,
    page,
    totalPages: Math.ceil(totalCount / limit),
  });
}

function formatProduct(p: any) {
  let specs = {}, colors: string[] = [], sizes: string[] = [], tags: string[] = [], features: string[] = [];
  try { specs = JSON.parse(p.specifications || '{}'); } catch {}
  try { colors = JSON.parse(p.colors || '[]'); } catch {}
  try { sizes = JSON.parse(p.sizes || '[]'); } catch {}
  try { tags = JSON.parse(p.tags || '[]'); } catch {}
  try { features = JSON.parse(p.features || '[]'); } catch {}

  return {
    ...p,
    specifications: specs,
    colors, sizes, tags, features,
    images: Array.from({ length: 5 }, (_, i) => 'https://picsum.photos/seed/' + p.id + '-' + i + '/800/800'),
  };
}
