'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePreferences } from '@/store/usePreferences';
import { cn } from '@/lib/utils';
import { categories } from '@shared/categories';

const trendingSearches = [
  'Hypercar', 'Private Jet', 'Luxury Yacht', 'Diamond Ring',
  'iPhone', 'Gaming PC', 'Electric SUV', 'Smart Watch',
  'Designer Bag', 'Private Island',
];

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<{ type: string; text: string; href: string; icon?: string }[]>([]);
  const router = useRouter();
  const { recentSearches, addRecentSearch } = usePreferences();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setFocused(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const getSuggestions = useCallback((q: string) => {
    if (!q.trim()) {
      const items: any[] = recentSearches.slice(0, 3).map(s => ({ type: 'recent', text: s, href: `/search?q=${encodeURIComponent(s)}`, icon: '🕐' }));
      items.push(...trendingSearches.slice(0, 5).map(s => ({ type: 'trending', text: s, href: `/search?q=${encodeURIComponent(s)}`, icon: '🔥' })));
      setSuggestions(items);
      return;
    }

    const ql = q.toLowerCase();
    const results: any[] = [];
    categories.filter(c => c.name.toLowerCase().includes(ql)).slice(0, 3).forEach(c => {
      results.push({ type: 'category', text: c.name, href: `/category/${c.slug}`, icon: c.icon });
    });
    trendingSearches.filter(s => s.toLowerCase().includes(ql)).slice(0, 5).forEach(t => {
      results.push({ type: 'trending', text: t, href: `/search?q=${encodeURIComponent(t)}`, icon: '🔥' });
    });
    if (results.length === 0) {
      results.push({ type: 'search', text: `Search "${q}"`, href: `/search?q=${encodeURIComponent(q)}`, icon: '→' });
    }
    setSuggestions(results.slice(0, 8));
  }, [recentSearches]);

  useEffect(() => { getSuggestions(query); }, [query, getSuggestions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      addRecentSearch(query.trim());
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setFocused(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSubmit}>
        <div className={cn(
          'relative flex items-center transition-all duration-200 rounded-full border',
          focused ? 'border-foreground' : 'border-border bg-muted'
        )}>
          <svg className="w-3.5 h-3.5 text-muted-foreground ml-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            placeholder="Search products..."
            className="flex-1 bg-transparent px-2.5 py-2 text-sm outline-none text-foreground placeholder:text-muted-foreground"
            autoComplete="off"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} className="mr-1 p-1 rounded-full hover:bg-muted text-muted-foreground">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </form>

      {focused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background rounded-2xl shadow-lg border border-border p-2 animate-scale-in origin-top z-50">
          {suggestions.map((s, i) => (
            <Link
              key={s.text + i}
              href={s.href}
              onClick={() => { addRecentSearch(s.text); setFocused(false); }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <span className="text-base">{s.icon || '•'}</span>
              <span>{s.text}</span>
            </Link>
          ))}
          {query.trim() && (
            <div className="border-t border-border mt-1 pt-1">
              <button
                onClick={() => { addRecentSearch(query.trim()); router.push(`/search?q=${encodeURIComponent(query.trim())}`); setFocused(false); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-foreground hover:bg-muted transition-colors"
              >
                <span>→</span>
                <span>Search all &ldquo;{query}&rdquo;</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
