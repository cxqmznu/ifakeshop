'use client';

import { Suspense, useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/product/ProductGrid';
import { categories } from '@shared/categories';
import { generateProducts } from '@/lib/generateProducts';
import { cn } from '@/lib/utils';

function CategoryContent() {
  const { slug } = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSub, setActiveSub] = useState(searchParams.get('sub') || 'all');
  const [sortBy, setSortBy] = useState('popularity');

  const category = categories.find(c => c.slug === slug);

  useEffect(() => {
    const all = generateProducts(400);
    setProducts(all.filter(p => p.category === slug));
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    let result = [...products];
    if (activeSub !== 'all') result = result.filter(p => p.subcategory === activeSub);
    if (sortBy === 'price_asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price_desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'newest') result.sort((a, b) => b.releaseYear - a.releaseYear);
    else result.sort((a, b) => b.popularity - a.popularity);
    setFiltered(result);
  }, [products, activeSub, sortBy]);

  if (!category && slug !== 'all') {
    return <div className="pt-32 text-center"><h1 className="text-2xl font-medium mb-4">Category Not Found</h1><Link href="/" className="btn-primary">Return Home</Link></div>;
  }

  return (
    <>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          {category && <span className="text-3xl">{category.icon}</span>}
          <h1 className="text-3xl md:text-4xl font-medium">{category?.name || 'All Categories'}</h1>
        </div>
        {category && <p className="text-sm text-muted-foreground">{category.description}</p>}
      </div>

      {category && (
        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => setActiveSub('all')} className={cn('px-4 py-1.5 rounded-full text-sm border transition-all', activeSub === 'all' ? 'bg-foreground text-background border-foreground' : 'border-border text-muted-foreground hover:text-foreground hover:bg-muted')}>
            All
          </button>
          {category.subcategories.map(sub => (
            <button key={sub.id} onClick={() => setActiveSub(sub.slug)} className={cn('px-4 py-1.5 rounded-full text-sm border transition-all', activeSub === sub.slug ? 'bg-foreground text-background border-foreground' : 'border-border text-muted-foreground hover:text-foreground hover:bg-muted')}>
              {sub.name}
            </button>
          ))}
        </div>
      )}

      {slug === 'all' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {categories.map(cat => (
            <Link key={cat.id} href={`/category/${cat.slug}`} className="card card-hover flex items-center gap-4 p-5 hover:bg-muted/50">
              <span className="text-2xl">{cat.icon}</span>
              <div>
                <div className="text-sm font-medium">{cat.name}</div>
                <div className="text-xs text-muted-foreground">{cat.productCount.toLocaleString()}</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {slug !== 'all' && (
        <>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">{filtered.length} products</p>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="text-sm bg-muted border-0 rounded-full px-3 py-1.5 outline-none">
              <option value="popularity">Most Popular</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="card overflow-hidden"><div className="aspect-square skeleton" /><div className="p-4 space-y-2"><div className="h-3 w-16 skeleton rounded" /><div className="h-4 w-full skeleton rounded" /></div></div>
              ))}
            </div>
          ) : <ProductGrid products={filtered} />}
        </>
      )}

      <div className="mt-12 p-6 rounded-2xl bg-muted text-center">
        <p className="text-xs text-muted-foreground">Fictional listings for entertainment purposes only.</p>
      </div>
    </>
  );
}

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <Suspense fallback={<div className="flex items-center justify-center py-20"><span className="text-muted-foreground">Loading...</span></div>}>
            <CategoryContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
