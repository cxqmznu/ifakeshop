import { NextRequest, NextResponse } from 'next/server';
import { getStore, ensureStoreInitialized } from '@/lib/productStore';

const collections = [
  { id: 'trending-worldwide', name: 'Trending Worldwide', description: 'Most popular products across the globe right now', image: 'https://picsum.photos/seed/trending/1200/600', type: 'trending' },
  { id: 'luxury-picks', name: 'Luxury Picks', description: 'The finest luxury items curated for you', image: 'https://picsum.photos/seed/luxury/1200/600', type: 'luxury' },
  { id: 'hidden-gems', name: 'Hidden Gems', description: 'Undiscovered treasures waiting to be found', image: 'https://picsum.photos/seed/gems/1200/600', type: 'hidden_gems' },
  { id: 'new-arrivals', name: 'New Arrivals', description: 'The latest additions to our universe', image: 'https://picsum.photos/seed/new/1200/600', type: 'new_arrivals' },
];

export async function GET(request: NextRequest) {
  ensureStoreInitialized();
  const store = getStore();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const collection = collections.find(c => c.id === id);
    if (!collection) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    let products = [...store.products];
    if (id === 'luxury-picks') products = products.filter(p => p.price > 10000).sort((a, b) => b.price - a.price);
    else if (id === 'hidden-gems') products = products.filter(p => p.popularity < 100).sort((a, b) => a.popularity - b.popularity);
    else if (id === 'new-arrivals') products = products.filter(p => p.releaseYear >= 2025).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    else products = products.sort((a, b) => b.popularity - a.popularity);

    return NextResponse.json({ ...collection, products: products.slice(0, 50).map(formatProduct) });
  }

  return NextResponse.json({ collections: collections.map(c => ({ ...c, productCount: store.products.length })) });
}

function formatProduct(p: any) {
  let specs = {}, colors: string[] = [], sizes: string[] = [], tags: string[] = [], features: string[] = [];
  try { specs = JSON.parse(p.specifications || '{}'); } catch {}
  try { colors = JSON.parse(p.colors || '[]'); } catch {}
  try { sizes = JSON.parse(p.sizes || '[]'); } catch {}
  try { tags = JSON.parse(p.tags || '[]'); } catch {}
  try { features = JSON.parse(p.features || '[]'); } catch {}

  return {
    ...p, specifications: specs, colors, sizes, tags, features,
    images: Array.from({ length: 5 }, (_, i) => 'https://picsum.photos/seed/' + p.id + '-' + i + '/800/800'),
  };
}
