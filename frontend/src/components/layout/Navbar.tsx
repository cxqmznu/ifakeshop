'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePreferences } from '@/store/usePreferences';
import { useCart } from '@/store/useCart';
import { useWishlist } from '@/store/useWishlist';
import { currencies, locales } from '@/lib/currencies';
import { categories } from '@shared/categories';
import { SearchBar } from '@/components/ui/SearchBar';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [localeOpen, setLocaleOpen] = useState(false);
  const { currency, setCurrency, locale, setLocale } = usePreferences();
  const cartTotal = useCart(s => s.totalItems());
  const wishlistCount = useWishlist(s => s.items.length);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentCurrency = currencies.find(c => c.code === currency);
  const currentLocale = locales.find(l => l.code === locale);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-medium text-lg tracking-tight">iFakeShop</span>
          </Link>

          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/category/all" className="btn-ghost text-sm">Categories</Link>

            <div className="relative">
              <button onClick={() => setCurrencyOpen(!currencyOpen)} className="btn-ghost text-sm">
                <span>{currentCurrency?.flag}</span>
                <span>{currency}</span>
              </button>
              {currencyOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-background rounded-2xl shadow-lg border border-border p-2 animate-scale-in origin-top-right max-h-72 overflow-y-auto z-50">
                  {currencies.map(c => (
                    <button
                      key={c.code}
                      onClick={() => { setCurrency(c.code); setCurrencyOpen(false); }}
                      className={cn(
                        'w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors',
                        currency === c.code ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                    >
                      <span>{c.flag}</span>
                      <span>{c.code}</span>
                      <span className="ml-auto text-muted-foreground">{c.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href="/wishlist" className="btn-ghost relative text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-foreground text-background text-[9px] font-bold rounded-full flex items-center justify-center">{wishlistCount}</span>
              )}
            </Link>

            <Link href="/cart" className="btn-ghost relative text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {cartTotal > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-foreground text-background text-[9px] font-bold rounded-full flex items-center justify-center">{cartTotal}</span>
              )}
            </Link>
          </nav>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden btn-ghost">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-background border-b border-border animate-slide-down">
          <div className="container-custom py-4 space-y-4">
            <SearchBar />
            <div className="grid grid-cols-2 gap-1">
              {categories.slice(0, 8).map(cat => (
                <Link key={cat.id} href={`/category/${cat.slug}`} className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-muted text-sm" onClick={() => setMobileMenu(false)}>
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
