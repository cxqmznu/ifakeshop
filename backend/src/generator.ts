import { categories, brandNames, colors } from '../../shared/src/index.js';

const adjectives = [
  'Ultimate', 'Premium', 'Luxury', 'Elite', 'Supreme', 'Pro', 'Master', 'Apex',
  'Nova', 'Quantum', 'Infinite', 'Essential', 'Classic', 'Modern', 'Advanced',
  'Exclusive', 'Signature', 'Artisan', 'Imperial', 'Royal', 'Golden', 'Platinum',
  'Phantom', 'Shadow', 'Cosmic', 'Stellar', 'Velocity', 'Fusion', 'Summit',
];

const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const rand = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
const clamp = (val: number, min: number, max: number): number => Math.max(min, Math.min(max, val));

const categoryImageSeeds: Record<string, string[]> = {
  technology: ['tech-device', 'tech-gadget', 'tech-workspace', 'tech-display'],
  smartphones: ['phone-front', 'phone-display', 'phone-camera'],
  laptops: ['laptop-open', 'laptop-angle', 'laptop-keyboard'],
  automotive: ['car-front', 'car-angle', 'car-side', 'car-interior'],
  hypercars: ['hypercar-front', 'hypercar-angle', 'hypercar-side'],
  supercars: ['supercar-front', 'supercar-angle', 'supercar-side'],
  aviation: ['jet-front', 'jet-side', 'jet-cockpit'],
  marine: ['yacht-side', 'yacht-deck', 'yacht-aerial'],
  'real-estate': ['house-front', 'house-living', 'house-exterior'],
  mansions: ['mansion-front', 'mansion-pool', 'mansion-interior'],
  fashion: ['fashion-model', 'fashion-detail', 'fashion-look'],
  home: ['home-living', 'home-decor', 'home-kitchen'],
  sports: ['sports-action', 'sports-equipment', 'sports-training'],
  travel: ['travel-beach', 'travel-hotel', 'travel-mountain'],
  books: ['books-stack', 'books-open', 'books-library'],
  entertainment: ['entertainment-music', 'entertainment-games'],
  jewelry: ['jewelry-ring', 'jewelry-necklace', 'jewelry-display'],
  watches: ['watch-face', 'watch-angle', 'watch-strap'],
  food: ['food-plate', 'food-ingredients', 'food-presentation'],
};

function getImages(productId: string, category: string, subcategory: string): string {
  const seeds = categoryImageSeeds[subcategory] || categoryImageSeeds[category] || ['product-default'];
  const images = [];
  for (let i = 0; i < 5; i++) {
    images.push('https://picsum.photos/seed/' + pick(seeds) + '-' + productId + '-' + i + '/800/800');
  }
  return JSON.stringify(images);
}

const productTypes: Record<string, string[]> = {};
categories.forEach(cat => {
  cat.subcategories.forEach(sub => {
    const items: string[] = [];
    const slug = sub.slug;
    if (slug === 'smartphones') items.push('Phone', 'Smartphone', 'Handset');
    else if (slug === 'laptops') items.push('Laptop', 'Notebook', 'Ultrabook');
    else if (slug === 'hypercars') items.push('Hypercar', 'Hypersport');
    else if (slug === 'supercars') items.push('Supercar', 'Exotic Car');
    else if (slug === 'yachts') items.push('Yacht', 'Motor Yacht');
    else if (slug === 'private-jets') items.push('Private Jet', 'Business Jet');
    else if (slug === 'mansions') items.push('Mansion', 'Estate', 'Manor');
    else if (slug === 'watches') items.push('Watch', 'Timepiece');
    else if (slug === 'jewelry') items.push('Ring', 'Necklace', 'Bracelet');
    else if (slug === 'furniture') items.push('Sofa', 'Chair', 'Table', 'Bed');
    else if (slug === 'art') items.push('Painting', 'Sculpture', 'Artwork');
    else if (slug === 'collectibles') items.push('Collectible', 'Figurine', 'Statue');
    else items.push('Product', 'Item', 'Model', 'Edition');
    productTypes[slug] = items;
  });
});

const priceRanges: Record<string, [number, number]> = {
  smartphones: [699, 2499], laptops: [899, 8999], tablets: [329, 2499],
  smartwatches: [249, 1999], 'gaming-pcs': [1499, 15000], monitors: [199, 5999],
  cameras: [399, 12999], drones: [299, 7999], headphones: [49, 3999],
  'smart-home': [29, 1499], tvs: [299, 29999], consoles: [299, 1499],
  hypercars: [2000000, 20000000], supercars: [200000, 3000000],
  'sports-cars': [40000, 300000], sedans: [30000, 200000], suvs: [35000, 300000],
  motorcycles: [5000, 150000], evs: [30000, 250000], 'classic-cars': [50000, 5000000],
  'race-cars': [250000, 5000000], trucks: [35000, 150000],
  'private-jets': [3000000, 75000000], helicopters: [250000, 15000000],
  evtol: [1000000, 5000000], spacecraft: [10000000, 100000000],
  yachts: [500000, 150000000], boats: [15000, 500000], submarines: [500000, 25000000],
  watercraft: [5000, 100000], mansions: [1000000, 100000000], villas: [300000, 15000000],
  apartments: [150000, 20000000], islands: [1000000, 50000000],
  resorts: [5000000, 100000000], castles: [2000000, 50000000], commercial: [500000, 100000000],
  'mens-fashion': [29, 15000], 'womens-fashion': [29, 15000], shoes: [49, 5000],
  bags: [49, 50000], jewelry: [99, 500000], watches: [199, 500000],
  furniture: [99, 50000], decor: [15, 5000], appliances: [99, 15000],
  fitness: [19, 15000], cycling: [199, 25000],
  hotels: [149, 5000], experiences: [49, 50000], cruises: [999, 50000],
  fiction: [9, 99], art: [99, 5000000], collectibles: [19, 50000],
  'rare-items': [99, 1000000], 'limited-editions': [49, 500000],
  'historical-artifacts': [99, 5000000], 'fantasy-collections': [29, 999999],
  'future-tech': [99, 99999],
};

function generateProduct(index: number): any {
  const cat = pick(categories);
  const sub = pick(cat.subcategories);
  const brand = pick(brandNames);
  const adj = pick(adjectives);
  const types = productTypes[sub.slug] || ['Product'];
  const name = `${adj} ${brand} ${pick(types)}`;
  const id = 'IFS-' + String(index).padStart(8, '0');
  const [low, high] = priceRanges[sub.slug] || [10, 500];
  const price = rand(low, high);
  const msrp = Math.round(price * (1 + Math.random() * 0.3));
  const year = rand(2020, 2026);
  const rating = clamp(Number((3.5 + Math.random() * 1.5).toFixed(1)), 1, 5);

  return {
    id,
    name,
    description: `Experience the ${name}. Crafted with precision and visionary design, this ${sub.slug.replace('-', ' ')} represents the pinnacle of modern innovation.`,
    category: cat.slug,
    subcategory: sub.slug,
    brand,
    price,
    msrp,
    currency: 'USD',
    imageIndex: 0,
    images: getImages(id, cat.slug, sub.slug),
    specifications: '{}',
    colors: JSON.stringify(['Midnight Black', 'Starlight White']),
    sizes: '[]',
    rating,
    reviewCount: rand(0, 5000),
    releaseYear: year,
    inStock: Math.random() > 0.05,
    isLimitedEdition: Math.random() < 0.08,
    isRare: Math.random() < 0.05,
    isFantasy: sub.slug === 'fantasy-collections' || Math.random() < 0.03,
    isFutureTech: sub.slug === 'future-tech' || Math.random() < 0.02,
    tags: JSON.stringify([sub.slug.replace('-', ' '), 'popular', 'featured']),
    features: JSON.stringify(['Premium build quality', 'Industry-leading warranty']),
    popularity: rand(1, 10000),
    createdAt: new Date(Date.now() - rand(0, 365 * 3) * 86400000).toISOString(),
  };
}

export function generateProducts(count: number): any[] {
  const products: any[] = [];
  console.log(`Generating ${count.toLocaleString()} products...`);
  for (let i = 0; i < count; i++) {
    products.push(generateProduct(i));
    if ((i + 1) % 10000 === 0) console.log(`Generated ${(i + 1).toLocaleString()}...`);
  }
  return products;
}

export function generateProductBatch(startIndex: number, batchSize: number): any[] {
  const products: any[] = [];
  for (let i = 0; i < batchSize; i++) {
    products.push(generateProduct(startIndex + i));
  }
  return products;
}
