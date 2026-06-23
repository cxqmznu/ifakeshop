'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistState {
  items: string[];
  toggleItem: (id: string) => void;
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearAll: () => void;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      toggleItem: (id) => {
        const items = get().items;
        if (items.includes(id)) {
          set({ items: items.filter(i => i !== id) });
        } else {
          set({ items: [...items, id] });
        }
      },
      addItem: (id) => {
        if (!get().items.includes(id)) {
          set({ items: [...get().items, id] });
        }
      },
      removeItem: (id) => set({ items: get().items.filter(i => i !== id) }),
      isInWishlist: (id) => get().items.includes(id),
      clearAll: () => set({ items: [] }),
    }),
    { name: 'ifakeshop-wishlist' }
  )
);
