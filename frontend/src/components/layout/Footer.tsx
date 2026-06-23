'use client';

import Link from 'next/link';
import { categories } from '@shared/categories';
import { usePreferences } from '@/store/usePreferences';

export function Footer() {
  const { currency } = usePreferences();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="font-medium text-lg tracking-tight">iFakeShop</Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The world&apos;s largest fictional shopping universe. Explore millions of products 
              across every category imaginable. For entertainment purposes only.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground">Explore</h4>
            <ul className="space-y-2">
              {categories.slice(0, 5).map(cat => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground">Collections</h4>
            <ul className="space-y-2">
              {['Trending', 'Luxury Picks', 'Hidden Gems', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link href="/search" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-foreground">Info</h4>
            <ul className="space-y-2">
              {['About', 'Privacy', 'Terms', 'Contact'].map(item => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} iFakeShop. Fictional platform for entertainment.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Prices in {currency}</span>
            <span>Estimated Luxury Market Value</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
