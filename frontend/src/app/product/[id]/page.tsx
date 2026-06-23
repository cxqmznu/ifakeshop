'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/product/ProductCard';
import { usePreferences } from '@/store/usePreferences';
import { useWishlist } from '@/store/useWishlist';
import { useCart } from '@/store/useCart';
import { formatPrice } from '@/lib/currencies';
import { generateProducts } from '@/lib/generateProducts';
import { categories } from '@shared/categories';
import { cn } from '@/lib/utils';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { currency } = usePreferences();
  const { isInWishlist, toggleItem } = useWishlist();
  const { addItem } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [similar, setSimilar] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const all = generateProducts(200);
    const found = all.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setSimilar(all.filter(p => p.subcategory === found.subcategory && p.id !== id).slice(0, 6));
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom pt-32">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="aspect-square skeleton rounded-2xl" />
            <div className="space-y-4">
              <div className="h-4 w-24 skeleton rounded" />
              <div className="h-8 w-3/4 skeleton rounded" />
              <div className="h-4 w-full skeleton rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-custom pt-32 text-center">
          <h1 className="text-2xl font-medium mb-2">Product Not Found</h1>
          <Link href="/" className="btn-primary">Return Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const catInfo = categories.find(c => c.slug === product.category);
  const subcatInfo = catInfo?.subcategories.find((s: any) => s.slug === product.subcategory);
  const inWishlist = isInWishlist(product.id);
  const images = product.images || Array.from({ length: 5 }, (_, i) => 'https://picsum.photos/seed/' + product.id + '-' + i + '/800/800');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href={`/category/${product.category}`} className="hover:text-foreground">{catInfo?.name || product.category}</Link>
            {subcatInfo && <><span>/</span><span>{subcatInfo.name}</span></>}
            <span>/</span>
            <span className="text-foreground truncate max-w-xs">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
                <img src={images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                {images.map((img: string, i: number) => (
                  <button key={i} onClick={() => setSelectedImage(i)} className={cn('w-16 h-16 rounded-xl overflow-hidden shrink-0 border transition-all', selectedImage === i ? 'border-foreground' : 'border-border opacity-60 hover:opacity-100')}>
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">{product.brand}</span>
                  {product.isLimitedEdition && <span className="text-[10px] px-2 py-0.5 rounded-full bg-foreground/10 border border-border">Limited</span>}
                </div>
                <h1 className="text-3xl md:text-4xl font-medium leading-tight">{product.name}</h1>
              </div>

              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <span>{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))} {product.rating.toFixed(1)}</span>
                <span>{product.releaseYear}</span>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-medium">{formatPrice(product.price, currency)}</span>
                  {product.msrp > product.price && <span className="text-sm text-muted-foreground line-through">{formatPrice(product.msrp, currency)}</span>}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Estimated Luxury Market Value</p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={() => addItem({ productId: product.id, name: product.name, price: product.price, image: images[0] })}
                  className="btn-primary"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  Add to Cart
                </button>
                <button onClick={() => toggleItem(product.id)} className={cn('btn-outline', inWishlist && 'bg-foreground text-background border-foreground')}>
                  <svg className="w-4 h-4" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  {inWishlist ? 'Saved' : 'Save'}
                </button>
                <button
                  onClick={async () => { try { await navigator.share({ title: product.name, url: window.location.href }); } catch { navigator.clipboard.writeText(window.location.href); } }}
                  className="btn-ghost text-sm"
                >
                  Share
                </button>
              </div>

              {Object.keys(product.specifications || {}).length > 0 && (
                <div className="border-t border-border pt-6">
                  <h2 className="text-sm font-medium mb-4">Specifications</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="p-3 rounded-xl bg-muted">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{key}</span>
                        <span className="text-sm mt-0.5 block">{value as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(product.features?.length > 0) && (
                <div className="border-t border-border pt-6 mt-6">
                  <h2 className="text-sm font-medium mb-4">Features</h2>
                  <ul className="space-y-1.5">
                    {product.features.map((f: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-0.5">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {similar.length > 0 && (
            <section className="mt-16 pt-12 border-t border-border">
              <h2 className="text-xl font-medium mb-8">Similar Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {similar.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            </section>
          )}

          <div className="mt-12 p-6 rounded-2xl bg-muted text-center">
            <p className="text-xs text-muted-foreground">Fictional listing for entertainment only. Estimated luxury market values shown.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
