'use client';

import Link from 'next/link';
import { useWishlist } from '@/store/useWishlist';
import { formatPrice } from '@/lib/currencies';
import { usePreferences } from '@/store/usePreferences';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    msrp?: number;
    rating?: number;
    category?: string;
    brand?: string;
    images?: string[];
    isLimitedEdition?: boolean;
    isRare?: boolean;
  };
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { currency } = usePreferences();
  const { isInWishlist, toggleItem } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const imgUrl = product.images?.[0] || `https://picsum.photos/seed/${product.id}/600/600`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        <div className="card overflow-hidden card-hover h-full flex flex-col">
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={imgUrl}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />

            {product.isLimitedEdition && (
              <span className="absolute top-3 left-3 text-[10px] px-2 py-0.5 rounded-full bg-foreground/80 text-background">
                Limited
              </span>
            )}

            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleItem(product.id); }}
              className={cn(
                'absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200',
                inWishlist ? 'bg-foreground text-background' : 'bg-background/80 text-muted-foreground opacity-0 group-hover:opacity-100 hover:bg-foreground hover:text-background'
              )}
            >
              <svg className="w-3.5 h-3.5" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">{product.brand || product.category}</span>
            <h3 className="text-sm font-medium mt-1 leading-snug line-clamp-2 group-hover:opacity-70 transition-opacity">
              {product.name}
            </h3>
            <div className="mt-auto pt-3 flex items-center justify-between">
              <div>
                <span className="text-sm font-medium">{formatPrice(product.price, currency)}</span>
                {product.msrp && product.msrp > product.price && (
                  <span className="ml-2 text-xs text-muted-foreground line-through">{formatPrice(product.msrp, currency)}</span>
                )}
              </div>
              {product.rating && (
                <div className="flex items-center gap-1">
                  <span className="text-amber-500 text-xs">★</span>
                  <span className="text-xs text-muted-foreground">{product.rating.toFixed(1)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
