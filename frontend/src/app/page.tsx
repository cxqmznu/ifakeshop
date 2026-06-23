'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/product/ProductCard';
import { categories } from '@shared/categories';
import { formatPrice, detectUserCurrency } from '@/lib/currencies';
import { usePreferences } from '@/store/usePreferences';
import { countries } from '@shared/constants';
import { generateProducts } from '@/lib/generateProducts';

const TRENDING_COUNT = 10;
const LUXURY_COUNT = 6;

export default function HomePage() {
  const { currency, setCurrency } = usePreferences();
  const [trending, setTrending] = useState<any[]>([]);
  const [luxury, setLuxury] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const country = detectUserCurrency();
    const info = countries.find(c => c.currency === country);
    if (info) setCurrency(info.currency);
  }, [setCurrency]);

  useEffect(() => {
    const all = generateProducts(300);
    setTrending([...all].sort((a, b) => b.popularity - a.popularity).slice(0, TRENDING_COUNT));
    setLuxury([...all].filter(p => p.price > 10000).sort((a, b) => b.price - a.price).slice(0, LUXURY_COUNT));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-light tracking-tight text-muted-foreground animate-pulse">iFakeShop</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="min-h-[80vh] flex items-center border-b border-border">
          <div className="container-custom w-full py-24 md:py-32">
            <div className="max-w-3xl">
              <p className="text-sm text-muted-foreground mb-6 tracking-wider uppercase">The Universe of Everything</p>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight leading-[0.9] text-balance">
                Explore{' '}
                <span className="italic">1,000,000+</span>
                {' '}Products
              </h1>
              <p className="text-lg text-muted-foreground mt-8 max-w-xl leading-relaxed">
                A fictional shopping experience built for inspiration and discovery. 
                Across every category imaginable.
              </p>
              <div className="flex gap-3 mt-10">
                <Link href="/search" className="btn-primary">
                  Start Exploring
                </Link>
                <Link href="/category/all" className="btn-outline">
                  Browse Categories
                </Link>
              </div>
              <div className="flex gap-8 mt-12 text-sm text-muted-foreground">
                <span>1M+ Products</span>
                <span>16 Categories</span>
                <span>80+ Subcategories</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 border-b border-border">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="section-title">Categories</h2>
              <p className="section-subtitle">Discover products across 16 major categories</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  className="card card-hover flex items-center gap-4 p-5 hover:bg-muted/50"
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <div className="font-medium text-sm">{cat.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{cat.productCount.toLocaleString()}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trending */}
        <section className="py-24 border-b border-border">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="section-title">Trending Worldwide</h2>
              <p className="section-subtitle">Most popular products across the globe right now</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {trending.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-24 border-b border-border">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="section-title">Collections</h2>
              <p className="section-subtitle">Curated selections for every taste</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Luxury Picks', desc: 'The finest money can buy', icon: '👑', href: '/search?collection=luxury' },
                { name: 'Hidden Gems', desc: 'Undiscovered treasures', icon: '💎', href: '/search?collection=hidden' },
                { name: 'Future Tech', desc: "Tomorrow's innovations", icon: '🚀', href: '/search?collection=future' },
                { name: 'Fantasy', desc: 'From imagination', icon: '✨', href: '/search?collection=fantasy' },
              ].map((col) => (
                <Link
                  key={col.name}
                  href={col.href}
                  className="card card-hover p-8 flex flex-col items-start gap-3 hover:bg-muted/50"
                >
                  <span className="text-3xl">{col.icon}</span>
                  <div>
                    <h3 className="font-medium">{col.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{col.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury */}
        {luxury.length > 0 && (
          <section className="py-24 border-b border-border">
            <div className="container-custom">
              <div className="mb-12 flex items-end justify-between">
                <div>
                  <h2 className="section-title">Luxury Picks</h2>
                  <p className="section-subtitle">The finest items from around the world</p>
                </div>
                <Link href="/search?sort=price_desc" className="btn-ghost text-sm hidden sm:flex">View All</Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {luxury.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Stats */}
        <section className="py-24 border-b border-border">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { value: '1,000,000+', label: 'Products' },
                { value: '16', label: 'Categories' },
                { value: '80+', label: 'Subcategories' },
                { value: '∞', label: 'Inspiration' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl font-light text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-balance">
              Ready to explore the universe?
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-md mx-auto">
              A fictional shopping experience for entertainment and inspiration.
            </p>
            <Link href="/search" className="btn-primary mt-10 inline-flex">
              Start Exploring Now
            </Link>
            <p className="text-xs text-muted-foreground mt-6">
              For entertainment purposes. No actual purchases or deliveries.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
