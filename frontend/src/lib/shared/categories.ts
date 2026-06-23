import { Category, Subcategory } from './types';

export const categories: Category[] = [
  {
    id: 'technology',
    name: 'Technology',
    slug: 'technology',
    description: 'Cutting-edge gadgets, computers, and smart devices',
    icon: '💻',
    image: '/images/categories/tech.jpg',
    subcategories: [
      { id: 'smartphones', name: 'Smartphones', slug: 'smartphones', description: 'Latest phones from top brands', image: '/images/categories/smartphones.jpg', productCount: 50000 },
      { id: 'laptops', name: 'Laptops', slug: 'laptops', description: 'Notebooks, ultrabooks, gaming laptops', image: '/images/categories/laptops.jpg', productCount: 40000 },
      { id: 'tablets', name: 'Tablets', slug: 'tablets', description: 'Tablets and 2-in-1 devices', image: '/images/categories/tablets.jpg', productCount: 20000 },
      { id: 'smartwatches', name: 'Smartwatches', slug: 'smartwatches', description: 'Wearable technology', image: '/images/categories/smartwatches.jpg', productCount: 15000 },
      { id: 'gaming-pcs', name: 'Gaming PCs', slug: 'gaming-pcs', description: 'High-performance gaming rigs', image: '/images/categories/gaming-pcs.jpg', productCount: 25000 },
      { id: 'monitors', name: 'Monitors', slug: 'monitors', description: 'Displays for work and play', image: '/images/categories/monitors.jpg', productCount: 20000 },
      { id: 'cameras', name: 'Cameras', slug: 'cameras', description: 'DSLR, mirrorless, action cams', image: '/images/categories/cameras.jpg', productCount: 30000 },
      { id: 'drones', name: 'Drones', slug: 'drones', description: 'Consumer and pro drones', image: '/images/categories/drones.jpg', productCount: 10000 },
      { id: 'headphones', name: 'Headphones', slug: 'headphones', description: 'Audio for every lifestyle', image: '/images/categories/headphones.jpg', productCount: 35000 },
      { id: 'smart-home', name: 'Smart Home Devices', slug: 'smart-home', description: 'Connected home automation', image: '/images/categories/smart-home.jpg', productCount: 25000 },
      { id: 'tvs', name: 'TVs', slug: 'tvs', description: 'Televisions and home theater', image: '/images/categories/tvs.jpg', productCount: 15000 },
      { id: 'consoles', name: 'Consoles', slug: 'consoles', description: 'Gaming consoles and accessories', image: '/images/categories/consoles.jpg', productCount: 10000 },
      { id: 'accessories', name: 'Accessories', slug: 'tech-accessories', description: 'Cables, cases, chargers, and more', image: '/images/categories/accessories.jpg', productCount: 40000 },
    ],
    productCount: 335000,
  },
  {
    id: 'automotive',
    name: 'Automotive',
    slug: 'automotive',
    description: 'The finest vehicles on land',
    icon: '🚗',
    image: '/images/categories/auto.jpg',
    subcategories: [
      { id: 'hypercars', name: 'Hypercars', slug: 'hypercars', description: 'The ultimate performance machines', image: '/images/categories/hypercars.jpg', productCount: 5000 },
      { id: 'supercars', name: 'Supercars', slug: 'supercars', description: 'Exotic high-performance automobiles', image: '/images/categories/supercars.jpg', productCount: 8000 },
      { id: 'sports-cars', name: 'Sports Cars', slug: 'sports-cars', description: 'Sporty and agile vehicles', image: '/images/categories/sports-cars.jpg', productCount: 15000 },
      { id: 'sedans', name: 'Sedans', slug: 'sedans', description: 'Luxury and executive sedans', image: '/images/categories/sedans.jpg', productCount: 20000 },
      { id: 'suvs', name: 'SUVs', slug: 'suvs', description: 'Sport utility vehicles', image: '/images/categories/suvs.jpg', productCount: 20000 },
      { id: 'motorcycles', name: 'Motorcycles', slug: 'motorcycles', description: 'Two-wheeled freedom', image: '/images/categories/motorcycles.jpg', productCount: 15000 },
      { id: 'evs', name: 'EVs', slug: 'evs', description: 'Electric vehicles of the future', image: '/images/categories/evs.jpg', productCount: 12000 },
      { id: 'classic-cars', name: 'Classic Cars', slug: 'classic-cars', description: 'Timeless automotive icons', image: '/images/categories/classic-cars.jpg', productCount: 10000 },
      { id: 'race-cars', name: 'Race Cars', slug: 'race-cars', description: 'Purpose-built track monsters', image: '/images/categories/race-cars.jpg', productCount: 5000 },
      { id: 'trucks', name: 'Trucks', slug: 'trucks', description: 'Heavy-duty pickup trucks', image: '/images/categories/trucks.jpg', productCount: 15000 },
    ],
    productCount: 125000,
  },
  {
    id: 'aviation',
    name: 'Aviation',
    slug: 'aviation',
    description: 'Aircraft and aerospace vehicles',
    icon: '✈️',
    image: '/images/categories/aviation.jpg',
    subcategories: [
      { id: 'private-jets', name: 'Private Jets', slug: 'private-jets', description: 'Luxury business aircraft', image: '/images/categories/private-jets.jpg', productCount: 3000 },
      { id: 'helicopters', name: 'Helicopters', slug: 'helicopters', description: 'Rotorcraft for every mission', image: '/images/categories/helicopters.jpg', productCount: 2000 },
      { id: 'evtol', name: 'eVTOL Aircraft', slug: 'evtol', description: 'Electric vertical takeoff and landing', image: '/images/categories/evtol.jpg', productCount: 1000 },
      { id: 'spacecraft', name: 'Spacecraft', slug: 'spacecraft', description: 'Vehicles for space exploration', image: '/images/categories/spacecraft.jpg', productCount: 500 },
    ],
    productCount: 6500,
  },
  {
    id: 'marine',
    name: 'Marine',
    slug: 'marine',
    description: 'Luxury watercraft and vessels',
    icon: '🚢',
    image: '/images/categories/marine.jpg',
    subcategories: [
      { id: 'yachts', name: 'Yachts', slug: 'yachts', description: 'Superyachts and motor yachts', image: '/images/categories/yachts.jpg', productCount: 5000 },
      { id: 'boats', name: 'Boats', slug: 'boats', description: 'Powerboats, sailboats, and more', image: '/images/categories/boats.jpg', productCount: 8000 },
      { id: 'submarines', name: 'Submarines', slug: 'submarines', description: 'Personal and luxury submersibles', image: '/images/categories/submarines.jpg', productCount: 500 },
      { id: 'watercraft', name: 'Watercraft', slug: 'watercraft', description: 'Jet skis, hovercraft, and more', image: '/images/categories/watercraft.jpg', productCount: 3000 },
    ],
    productCount: 16500,
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    slug: 'real-estate',
    description: 'Extraordinary properties worldwide',
    icon: '🏠',
    image: '/images/categories/realestate.jpg',
    subcategories: [
      { id: 'mansions', name: 'Mansions', slug: 'mansions', description: 'Grand estate homes', image: '/images/categories/mansions.jpg', productCount: 10000 },
      { id: 'villas', name: 'Villas', slug: 'villas', description: 'Luxury vacation homes', image: '/images/categories/villas.jpg', productCount: 15000 },
      { id: 'apartments', name: 'Apartments', slug: 'apartments', description: 'Premium urban living', image: '/images/categories/apartments.jpg', productCount: 20000 },
      { id: 'islands', name: 'Islands', slug: 'islands', description: 'Private islands for sale', image: '/images/categories/islands.jpg', productCount: 2000 },
      { id: 'resorts', name: 'Resorts', slug: 'resorts', description: 'Hospitality and resort properties', image: '/images/categories/resorts.jpg', productCount: 5000 },
      { id: 'castles', name: 'Castles', slug: 'castles', description: 'Historic castles and palaces', image: '/images/categories/castles.jpg', productCount: 2000 },
      { id: 'commercial', name: 'Commercial Buildings', slug: 'commercial', description: 'Office towers and commercial spaces', image: '/images/categories/commercial.jpg', productCount: 10000 },
    ],
    productCount: 64000,
  },
  {
    id: 'fashion',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Designer clothing and accessories',
    icon: '👔',
    image: '/images/categories/fashion.jpg',
    subcategories: [
      { id: 'mens-fashion', name: "Men's Fashion", slug: 'mens-fashion', description: 'Designer menswear', image: '/images/categories/mens-fashion.jpg', productCount: 40000 },
      { id: 'womens-fashion', name: "Women's Fashion", slug: 'womens-fashion', description: 'Designer womenswear', image: '/images/categories/womens-fashion.jpg', productCount: 50000 },
      { id: 'kids-fashion', name: "Children's Fashion", slug: 'kids-fashion', description: 'Kids designer clothing', image: '/images/categories/kids-fashion.jpg', productCount: 20000 },
      { id: 'shoes', name: 'Shoes', slug: 'shoes', description: 'Footwear for every occasion', image: '/images/categories/shoes.jpg', productCount: 35000 },
      { id: 'bags', name: 'Bags', slug: 'bags', description: 'Handbags, backpacks, luggage', image: '/images/categories/bags.jpg', productCount: 25000 },
      { id: 'jewelry', name: 'Jewelry', slug: 'jewelry', description: 'Fine jewelry and precious gems', image: '/images/categories/jewelry.jpg', productCount: 30000 },
      { id: 'watches', name: 'Watches', slug: 'watches', description: 'Luxury timepieces', image: '/images/categories/watches.jpg', productCount: 20000 },
      { id: 'fashion-accessories', name: 'Accessories', slug: 'fashion-accessories', description: 'Belts, scarves, hats, and more', image: '/images/categories/fashion-accessories.jpg', productCount: 20000 },
    ],
    productCount: 240000,
  },
  {
    id: 'home',
    name: 'Home',
    slug: 'home',
    description: 'Everything for your living space',
    icon: '🏡',
    image: '/images/categories/home.jpg',
    subcategories: [
      { id: 'furniture', name: 'Furniture', slug: 'furniture', description: 'Designer furniture pieces', image: '/images/categories/furniture.jpg', productCount: 30000 },
      { id: 'decor', name: 'Decor', slug: 'decor', description: 'Home decoration and accessories', image: '/images/categories/decor.jpg', productCount: 25000 },
      { id: 'appliances', name: 'Appliances', slug: 'appliances', description: 'Smart home appliances', image: '/images/categories/appliances.jpg', productCount: 15000 },
      { id: 'lighting', name: 'Lighting', slug: 'lighting', description: 'Designer lighting solutions', image: '/images/categories/lighting.jpg', productCount: 15000 },
      { id: 'kitchen', name: 'Kitchen', slug: 'kitchen', description: 'Premium kitchenware', image: '/images/categories/kitchen.jpg', productCount: 20000 },
      { id: 'garden', name: 'Garden', slug: 'garden', description: 'Outdoor living and garden', image: '/images/categories/garden.jpg', productCount: 15000 },
    ],
    productCount: 120000,
  },
  {
    id: 'sports',
    name: 'Sports',
    slug: 'sports',
    description: 'Equipment for athletes and adventurers',
    icon: '⚽',
    image: '/images/categories/sports.jpg',
    subcategories: [
      { id: 'fitness', name: 'Fitness Equipment', slug: 'fitness', description: 'Gym and home fitness gear', image: '/images/categories/fitness.jpg', productCount: 20000 },
      { id: 'cycling', name: 'Cycling', slug: 'cycling', description: 'Bicycles and cycling gear', image: '/images/categories/cycling.jpg', productCount: 15000 },
      { id: 'running', name: 'Running', slug: 'running', description: 'Running shoes and gear', image: '/images/categories/running.jpg', productCount: 10000 },
      { id: 'outdoor', name: 'Outdoor', slug: 'outdoor', description: 'Camping and outdoor gear', image: '/images/categories/outdoor.jpg', productCount: 20000 },
      { id: 'adventure', name: 'Adventure', slug: 'adventure', description: 'Extreme sports equipment', image: '/images/categories/adventure.jpg', productCount: 10000 },
      { id: 'team-sports', name: 'Team Sports', slug: 'team-sports', description: 'Equipment for team athletics', image: '/images/categories/team-sports.jpg', productCount: 15000 },
    ],
    productCount: 90000,
  },
  {
    id: 'travel',
    name: 'Travel',
    slug: 'travel',
    description: 'Extraordinary experiences and destinations',
    icon: '🌍',
    image: '/images/categories/travel.jpg',
    subcategories: [
      { id: 'hotels', name: 'Hotels', slug: 'hotels', description: 'Luxury hotels and resorts', image: '/images/categories/hotels.jpg', productCount: 15000 },
      { id: 'travel-resorts', name: 'Resorts', slug: 'travel-resorts', description: 'All-inclusive resort stays', image: '/images/categories/travel-resorts.jpg', productCount: 8000 },
      { id: 'experiences', name: 'Experiences', slug: 'experiences', description: 'Unique experiences and adventures', image: '/images/categories/experiences.jpg', productCount: 15000 },
      { id: 'cruises', name: 'Cruises', slug: 'cruises', description: 'Luxury cruise packages', image: '/images/categories/cruises.jpg', productCount: 5000 },
      { id: 'expeditions', name: 'Expeditions', slug: 'expeditions', description: 'Adventure expeditions', image: '/images/categories/expeditions.jpg', productCount: 3000 },
    ],
    productCount: 46000,
  },
  {
    id: 'books',
    name: 'Books',
    slug: 'books',
    description: 'Books, magazines, and publications',
    icon: '📚',
    image: '/images/categories/books.jpg',
    subcategories: [
      { id: 'fiction', name: 'Fiction', slug: 'fiction', description: 'Novels and fiction books', image: '/images/categories/fiction.jpg', productCount: 30000 },
      { id: 'non-fiction', name: 'Non-fiction', slug: 'non-fiction', description: 'Informational and educational', image: '/images/categories/non-fiction.jpg', productCount: 25000 },
      { id: 'academic', name: 'Academic', slug: 'academic', description: 'Textbooks and scholarly works', image: '/images/categories/academic.jpg', productCount: 15000 },
      { id: 'comics', name: 'Comics', slug: 'comics', description: 'Comic books and graphic novels', image: '/images/categories/comics.jpg', productCount: 15000 },
      { id: 'magazines', name: 'Magazines', slug: 'magazines', description: 'Periodicals and magazines', image: '/images/categories/magazines.jpg', productCount: 10000 },
    ],
    productCount: 95000,
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    slug: 'entertainment',
    description: 'Music, movies, games, and collectibles',
    icon: '🎮',
    image: '/images/categories/entertainment.jpg',
    subcategories: [
      { id: 'music', name: 'Music', slug: 'music', description: 'Albums, instruments, and audio', image: '/images/categories/music.jpg', productCount: 30000 },
      { id: 'movies', name: 'Movies', slug: 'movies', description: 'Films and box sets', image: '/images/categories/movies.jpg', productCount: 20000 },
      { id: 'games', name: 'Games', slug: 'games', description: 'Video games and board games', image: '/images/categories/games.jpg', productCount: 25000 },
      { id: 'collectibles', name: 'Collectibles', slug: 'collectibles', description: 'Rare collectibles and memorabilia', image: '/images/categories/collectibles.jpg', productCount: 15000 },
      { id: 'art', name: 'Art', slug: 'art', description: 'Fine art and sculptures', image: '/images/categories/art.jpg', productCount: 10000 },
    ],
    productCount: 100000,
  },
  {
    id: 'health-beauty',
    name: 'Health & Beauty',
    slug: 'health-beauty',
    description: 'Premium skincare and wellness',
    icon: '💄',
    image: '/images/categories/health.jpg',
    subcategories: [
      { id: 'skincare', name: 'Skincare', slug: 'skincare', description: 'Luxury skincare products', image: '/images/categories/skincare.jpg', productCount: 20000 },
      { id: 'grooming', name: 'Grooming', slug: 'grooming', description: 'Men\'s grooming essentials', image: '/images/categories/grooming.jpg', productCount: 10000 },
      { id: 'cosmetics', name: 'Cosmetics', slug: 'cosmetics', description: 'Premium makeup and cosmetics', image: '/images/categories/cosmetics.jpg', productCount: 15000 },
      { id: 'wellness', name: 'Wellness Products', slug: 'wellness', description: 'Health and wellness essentials', image: '/images/categories/wellness.jpg', productCount: 10000 },
    ],
    productCount: 55000,
  },
  {
    id: 'food-grocery',
    name: 'Food & Grocery',
    slug: 'food-grocery',
    description: 'Gourmet foods and beverages',
    icon: '🍽️',
    image: '/images/categories/food.jpg',
    subcategories: [
      { id: 'beverages', name: 'Beverages', slug: 'beverages', description: 'Fine wines, spirits, and drinks', image: '/images/categories/beverages.jpg', productCount: 15000 },
      { id: 'snacks', name: 'Snacks', slug: 'snacks', description: 'Premium snacks and confectionery', image: '/images/categories/snacks.jpg', productCount: 10000 },
      { id: 'gourmet-foods', name: 'Gourmet Foods', slug: 'gourmet-foods', description: 'Fine dining ingredients', image: '/images/categories/gourmet-foods.jpg', productCount: 10000 },
      { id: 'international-foods', name: 'International Foods', slug: 'international-foods', description: 'Cuisine from around the world', image: '/images/categories/international-foods.jpg', productCount: 10000 },
    ],
    productCount: 45000,
  },
  {
    id: 'pets',
    name: 'Pets',
    slug: 'pets',
    description: 'Everything for your furry friends',
    icon: '🐾',
    image: '/images/categories/pets.jpg',
    subcategories: [
      { id: 'pet-supplies', name: 'Pet Supplies', slug: 'pet-supplies', description: 'Food, beds, and essentials', image: '/images/categories/pet-supplies.jpg', productCount: 15000 },
      { id: 'pet-accessories', name: 'Accessories', slug: 'pet-accessories', description: 'Collars, leashes, and fashion', image: '/images/categories/pet-accessories.jpg', productCount: 8000 },
      { id: 'pet-toys', name: 'Toys', slug: 'pet-toys', description: 'Interactive and fun pet toys', image: '/images/categories/pet-toys.jpg', productCount: 7000 },
    ],
    productCount: 30000,
  },
  {
    id: 'office-business',
    name: 'Office & Business',
    slug: 'office-business',
    description: 'Professional office solutions',
    icon: '🏢',
    image: '/images/categories/office.jpg',
    subcategories: [
      { id: 'office-equipment', name: 'Office Equipment', slug: 'office-equipment', description: 'Printers, scanners, and tech', image: '/images/categories/office-equipment.jpg', productCount: 10000 },
      { id: 'office-furniture', name: 'Furniture', slug: 'office-furniture', description: 'Ergonomic office furniture', image: '/images/categories/office-furniture.jpg', productCount: 8000 },
      { id: 'productivity-tools', name: 'Productivity Tools', slug: 'productivity-tools', description: 'Software and organization tools', image: '/images/categories/productivity-tools.jpg', productCount: 5000 },
    ],
    productCount: 23000,
  },
  {
    id: 'education',
    name: 'Education',
    slug: 'education',
    description: 'Courses, kits, and scientific equipment',
    icon: '🎓',
    image: '/images/categories/education.jpg',
    subcategories: [
      { id: 'courses', name: 'Courses', slug: 'courses', description: 'Online and in-person courses', image: '/images/categories/courses.jpg', productCount: 15000 },
      { id: 'learning-kits', name: 'Learning Kits', slug: 'learning-kits', description: 'STEM and educational kits', image: '/images/categories/learning-kits.jpg', productCount: 8000 },
      { id: 'scientific-equipment', name: 'Scientific Equipment', slug: 'scientific-equipment', description: 'Lab equipment and tools', image: '/images/categories/scientific-equipment.jpg', productCount: 5000 },
    ],
    productCount: 28000,
  },
  {
    id: 'special-collections',
    name: 'Special Collections',
    slug: 'special-collections',
    description: 'Rare, limited, and extraordinary items',
    icon: '✨',
    image: '/images/categories/special.jpg',
    subcategories: [
      { id: 'rare-items', name: 'Rare Items', slug: 'rare-items', description: 'Exceedingly rare finds', image: '/images/categories/rare-items.jpg', productCount: 2000 },
      { id: 'limited-editions', name: 'Limited Editions', slug: 'limited-editions', description: 'Limited release products', image: '/images/categories/limited-editions.jpg', productCount: 3000 },
      { id: 'historical-artifacts', name: 'Historical Artifacts', slug: 'historical-artifacts', description: 'Pieces of history', image: '/images/categories/historical-artifacts.jpg', productCount: 1000 },
      { id: 'fantasy-collections', name: 'Fantasy Collections', slug: 'fantasy-collections', description: 'From imagination to reality', image: '/images/categories/fantasy-collections.jpg', productCount: 2000 },
      { id: 'concept-products', name: 'Concept Products', slug: 'concept-products', description: 'Future design concepts', image: '/images/categories/concept-products.jpg', productCount: 1500 },
      { id: 'future-tech', name: 'Future Technology', slug: 'future-tech', description: 'Tomorrow\'s technology today', image: '/images/categories/future-tech.jpg', productCount: 1000 },
    ],
    productCount: 10500,
  },
];

export const categoryMap = new Map<string, Category>();
categories.forEach(cat => {
  categoryMap.set(cat.slug, cat);
  categoryMap.set(cat.id, cat);
});

export const subcategoryMap = new Map<string, Subcategory>();
categories.forEach(cat => {
  cat.subcategories.forEach(sub => {
    subcategoryMap.set(sub.slug, sub);
    subcategoryMap.set(sub.id, sub);
  });
});

export function getCategory(slug: string): Category | undefined {
  return categoryMap.get(slug);
}

export function getSubcategory(slug: string): Subcategory | undefined {
  return subcategoryMap.get(slug);
}

export function getAllSubcategorySlugs(): string[] {
  return categories.flatMap(cat => cat.subcategories.map(sub => sub.slug));
}
