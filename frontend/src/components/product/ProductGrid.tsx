'use client';

import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: any[];
  loading?: boolean;
}

export function ProductGrid({ products, loading = false }: ProductGridProps) {
  return (
    <div>
      {products.length === 0 && !loading ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4 opacity-30">○</div>
          <h3 className="text-lg font-medium mb-1">No products found</h3>
          <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
          {loading && Array.from({ length: 8 }).map((_, i) => (
            <div key={'skeleton-' + i} className="card overflow-hidden">
              <div className="aspect-square skeleton" />
              <div className="p-4 space-y-2">
                <div className="h-3 w-16 skeleton rounded" />
                <div className="h-4 w-full skeleton rounded" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
