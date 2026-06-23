'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/product/ProductGrid';
import { usePreferences } from '@/store/usePreferences';
import { generateProducts } from '@/lib/generateProducts';
import { categories } from '@shared/categories';

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addRecentSearch } = usePreferences();

  const query = searchParams.get('q') || '';
  const collection = searchParams.get('collection') || '';

  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('popularity');
  const [searchInput, setSearchInput] = useState(query);

  useEffect(() => {
    setSearchInput(query);
    setLoading(true);
    let all = generateProducts(300);

    if (collection === 'luxury') all = all.filter(p => p.price > 10000).sort((a, b) => b.price - a.price);
    else if (collection === 'hidden') all = all.filter(p => p.popularity < 500).sort((a, b) => a.popularity - b.popularity);
    else if (collection === 'future') all = all.filter(p => p.isFutureTech || p.releaseYear >= 2026);
    else if (collection === 'fantasy') all = all.filter(p => p.isFantasy);

    if (query) {
      const q = query.toLowerCase();
      all = all.filter(p =>
        p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) || p.category.includes(q) || p.subcategory.includes(q)
      );
    }
    setProducts(all);
    setLoading(false);
  }, [query, collection]);

  useEffect(() => {
    const result = [...products];
    if (sortBy === 'price_asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price_desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'newest') result.sort((a, b) => b.releaseYear - a.releaseYear);
    else result.sort((a, b) => b.popularity - a.popularity);
    setFiltered(result);
  }, [products, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) { addRecentSearch(searchInput.trim()); router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`); }
  };

  return (
    <>
      <div className="mb-8">
        {collection ? (
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-medium capitalize">
              {collection === 'luxury' ? 'Luxury Picks' : collection === 'hidden' ? 'Hidden Gems' : collection === 'future' ? 'Future Tech' : collection === 'fantasy' ? 'Fantasy Collection' : collection}
            </h1>
            <p className="text-muted-foreground mt-2">{filtered.length.toLocaleString()} products</p>
          </div>
        ) : (
          <form onSubmit={handleSearch} className="max-w-xl">
            <div className="relative">
              <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder="Search products..." className="w-full px-4 py-3 text-sm bg-muted rounded-full border border-border focus:border-foreground focus:bg-background outline-none transition-all" autoFocus />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-1.5 px-4 text-xs">Search</button>
            </div>
            {query && <p className="text-sm text-muted-foreground mt-3">{filtered.length.toLocaleString()} results for &ldquo;{query}&rdquo;</p>}
          </form>
        )}
      </div>

      {query && (
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-border text-xs">
            {query}
            <button onClick={() => router.push('/search')} className="hover:text-foreground">×</button>
          </span>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">{filtered.length} products</p>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="text-sm bg-muted border-0 rounded-full px-3 py-1.5 outline-none focus:ring-1 focus:ring-foreground">
          <option value="popularity">Most Popular</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {!query && !collection && (
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-3">Browse categories:</p>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <Link key={cat.id} href={`/category/${cat.slug}`} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-border text-sm hover:bg-muted transition-colors">
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <ProductGrid products={filtered} loading={loading} />

      <div className="mt-12 p-6 rounded-2xl bg-muted text-center">
        <p className="text-xs text-muted-foreground">Fictional listings for entertainment purposes only.</p>
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <Suspense fallback={<div className="flex items-center justify-center py-20"><span className="text-muted-foreground">Loading...</span></div>}>
            <SearchContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
