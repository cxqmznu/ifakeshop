'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { detectUserCurrency, detectUserLocale } from '@/lib/currencies';

interface PreferencesState {
  currency: string;
  locale: string;
  setCurrency: (code: string) => void;
  setLocale: (code: string) => void;
  recentSearches: string[];
  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;
  recentlyViewed: string[];
  addRecentlyViewed: (id: string) => void;
}

export const usePreferences = create<PreferencesState>()(
  persist(
    (set, get) => ({
      currency: 'USD',
      locale: 'en',
      setCurrency: (code) => set({ currency: code }),
      setLocale: (code) => set({ locale: code }),
      recentSearches: [],
      addRecentSearch: (query) => {
        const searches = get().recentSearches.filter(s => s !== query);
        set({ recentSearches: [query, ...searches].slice(0, 10) });
      },
      clearRecentSearches: () => set({ recentSearches: [] }),
      recentlyViewed: [],
      addRecentlyViewed: (id) => {
        const viewed = get().recentlyViewed.filter(v => v !== id);
        set({ recentlyViewed: [id, ...viewed].slice(0, 50) });
      },
    }),
    {
      name: 'ifakeshop-preferences',
      partialize: (state) => ({
        currency: state.currency,
        locale: state.locale,
        recentSearches: state.recentSearches,
        recentlyViewed: state.recentlyViewed,
      }),
    }
  )
);
