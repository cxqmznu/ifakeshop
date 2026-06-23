import { NextRequest, NextResponse } from 'next/server';
import { getStore, ensureStoreInitialized } from '@/lib/productStore';

export async function GET(request: NextRequest) {
  ensureStoreInitialized();
  const store = getStore();
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';
  const limit = parseInt(searchParams.get('limit') || '10');
  const suggestionsOnly = searchParams.get('suggestions') === 'true';

  if (!q) {
    return NextResponse.json({ products: [], suggestions: [] });
  }

  if (suggestionsOnly) {
    const matchedNames = store.products
      .filter(p => p.name.toLowerCase().includes(q))
      .slice(0, limit)
      .map(p => p.name);
    return NextResponse.json({ suggestions: matchedNames });
  }

  const results = store.products
    .filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q)
    )
    .slice(0, limit)
    .map(formatProduct);

  return NextResponse.json({ products: results, totalCount: results.length });
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
    specifications: specs, colors, sizes, tags, features,
    images: Array.from({ length: 5 }, (_, i) => 'https://picsum.photos/seed/' + p.id + '-' + i + '/800/800'),
  };
}
