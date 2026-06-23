# iFakeShop

The world's largest fictional shopping universe — built with Next.js 14.

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
iFakeShop/
├── frontend/          # Next.js 14 App Router
│   ├── src/
│   │   ├── app/       # Pages: /, /product/[id], /category/[slug], /search, /cart, /wishlist
│   │   │   └── api/   # REST endpoints: /api/products, /api/search, /api/collections
│   │   ├── components/  # Navbar, Footer, ProductCard, ProductGrid, SearchBar
│   │   ├── store/       # Zustand: useCart, useWishlist, usePreferences
│   │   └── lib/         # currencies, api helpers, product generator
├── shared/src/         # Shared: types, categories (16 cat / 80+ sub), constants (15 currencies, 11 locales)
└── backend/            # Prisma schema + seed scripts
```

## Build

```bash
cd frontend && npm run build
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: iFakeShop - fictional shopping universe"
git branch -M main
git remote add origin https://github.com/cxqmznu/ifakeshop.git
git push -u origin main
```
