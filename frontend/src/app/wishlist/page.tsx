'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/product/ProductCard';
import { useWishlist } from '@/store/useWishlist';
import { generateProducts } from '@/lib/generateProducts';

export default function WishlistPage() {
  const { items, clearAll } = useWishlist();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (items.length === 0) return;
    const all = generateProducts(500);
    setProducts(all.filter(p => items.includes(p.id)));
  }, [items]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-medium">Collection</h1>
              <p className="text-sm text-muted-foreground mt-1">{items.length} saved</p>
            </div>
            {items.length > 0 && <button onClick={clearAll} className="btn-ghost text-sm">Clear</button>}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl mb-4 opacity-30">♡</div>
              <h2 className="text-lg font-medium mb-2">Your collection is empty</h2>
              <p className="text-sm text-muted-foreground mb-6">Save products you love</p>
              <Link href="/" className="btn-primary">Discover</Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
