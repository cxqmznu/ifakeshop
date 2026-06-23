const categories = [
  { slug: 'technology', subcategories: ['smartphones', 'laptops', 'tablets', 'smartwatches', 'gaming-pcs', 'monitors', 'cameras', 'drones', 'headphones', 'smart-home', 'tvs', 'consoles', 'tech-accessories'] },
  { slug: 'automotive', subcategories: ['hypercars', 'supercars', 'sports-cars', 'sedans', 'suvs', 'motorcycles', 'evs', 'classic-cars', 'race-cars', 'trucks'] },
  { slug: 'aviation', subcategories: ['private-jets', 'helicopters', 'evtol', 'spacecraft'] },
  { slug: 'marine', subcategories: ['yachts', 'boats', 'submarines', 'watercraft'] },
  { slug: 'real-estate', subcategories: ['mansions', 'villas', 'apartments', 'islands', 'resorts', 'castles', 'commercial'] },
  { slug: 'fashion', subcategories: ['mens-fashion', 'womens-fashion', 'kids-fashion', 'shoes', 'bags', 'jewelry', 'watches', 'fashion-accessories'] },
  { slug: 'home', subcategories: ['furniture', 'decor', 'appliances', 'lighting', 'kitchen', 'garden'] },
  { slug: 'sports', subcategories: ['fitness', 'cycling', 'running', 'outdoor', 'adventure', 'team-sports'] },
  { slug: 'travel', subcategories: ['hotels', 'travel-resorts', 'experiences', 'cruises', 'expeditions'] },
  { slug: 'books', subcategories: ['fiction', 'non-fiction', 'academic', 'comics', 'magazines'] },
  { slug: 'entertainment', subcategories: ['music', 'movies', 'games', 'collectibles', 'art'] },
  { slug: 'health-beauty', subcategories: ['skincare', 'grooming', 'cosmetics', 'wellness'] },
  { slug: 'food-grocery', subcategories: ['beverages', 'snacks', 'gourmet-foods', 'international-foods'] },
  { slug: 'pets', subcategories: ['pet-supplies', 'pet-accessories', 'pet-toys'] },
  { slug: 'office-business', subcategories: ['office-equipment', 'office-furniture', 'productivity-tools'] },
  { slug: 'education', subcategories: ['courses', 'learning-kits', 'scientific-equipment'] },
  { slug: 'special-collections', subcategories: ['rare-items', 'limited-editions', 'historical-artifacts', 'fantasy-collections', 'concept-products', 'future-tech'] },
];

const brandsBySub: Record<string, { brand: string; models: string[] }[]> = {
  smartphones: [
    { brand: 'Apple', models: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16', 'iPhone 16 Plus', 'iPhone 15 Pro Max'] },
    { brand: 'Samsung', models: ['Galaxy S25 Ultra', 'Galaxy S25+', 'Galaxy S25', 'Galaxy S24 Ultra', 'Galaxy Z Fold 6'] },
    { brand: 'Google', models: ['Pixel 9 Pro XL', 'Pixel 9 Pro', 'Pixel 9', 'Pixel 8a'] },
    { brand: 'OnePlus', models: ['OnePlus 13', 'OnePlus 13R', 'OnePlus Open'] },
    { brand: 'Xiaomi', models: ['Xiaomi 15 Pro', 'Xiaomi 14 Ultra', 'Redmi Note 14 Pro+'] },
  ],
  laptops: [
    { brand: 'Apple', models: ['MacBook Pro 16"', 'MacBook Pro 14"', 'MacBook Air 15"', 'MacBook Air 13"'] },
    { brand: 'Dell', models: ['XPS 16', 'XPS 15', 'XPS 14', 'Inspiron 16 Plus'] },
    { brand: 'Lenovo', models: ['ThinkPad X1 Carbon Gen 12', 'ThinkPad T14s', 'Legion Pro 7i', 'Yoga 9i'] },
    { brand: 'HP', models: ['Spectre x360 16', 'Envy 16', 'Pavilion Plus 14', 'Dragonfly Pro'] },
    { brand: 'ASUS', models: ['ROG Zephyrus G16', 'ZenBook 14 OLED', 'ProArt P16', 'Vivobook S 16'] },
    { brand: 'Microsoft', models: ['Surface Laptop 7', 'Surface Pro 10', 'Surface Laptop Studio 2'] },
  ],
  tablets: [
    { brand: 'Apple', models: ['iPad Pro M4 13"', 'iPad Pro M4 11"', 'iPad Air M3', 'iPad 10th Gen', 'iPad mini 7'] },
    { brand: 'Samsung', models: ['Galaxy Tab S10 Ultra', 'Galaxy Tab S10+', 'Galaxy Tab S9 FE'] },
    { brand: 'Microsoft', models: ['Surface Pro 10', 'Surface Go 4'] },
  ],
  smartwatches: [
    { brand: 'Apple', models: ['Apple Watch Ultra 3', 'Apple Watch Series 10', 'Apple Watch SE 3'] },
    { brand: 'Samsung', models: ['Galaxy Watch Ultra', 'Galaxy Watch 7', 'Galaxy Watch FE'] },
    { brand: 'Google', models: ['Pixel Watch 3', 'Pixel Watch 2'] },
    { brand: 'Garmin', models: ['Fenix 8', 'Epix Pro Gen 2', 'Venu 4'] },
  ],
  headphones: [
    { brand: 'Apple', models: ['AirPods Pro 3', 'AirPods 4', 'AirPods Max 2'] },
    { brand: 'Sony', models: ['WH-1000XM6', 'WF-1000XM6', 'WH-CH720N'] },
    { brand: 'Bose', models: ['QuietComfort Ultra Earbuds', 'QuietComfort Ultra Headphones', 'Bose 700'] },
    { brand: 'Sennheiser', models: ['Momentum 4 Wireless', 'IE 900'] },
    { brand: 'Beats', models: ['Beats Studio Pro', 'Powerbeats Pro 2', 'Beats Fit Pro'] },
  ],
  tvs: [
    { brand: 'Samsung', models: ['Neo QLED 8K QN900D', 'OLED S95D', 'Neo QLED 4K QN90D'] },
    { brand: 'LG', models: ['OLED G4', 'OLED C4', 'QNED 85 4K'] },
    { brand: 'Sony', models: ['BRAVIA XR A95L', 'BRAVIA X90L', 'BRAVIA 7 Mini LED'] },
    { brand: 'TCL', models: ['QM8 QLED 4K', 'QM7 QLED 4K'] },
    { brand: 'Hisense', models: ['U8N Mini-LED', 'U7N QLED'] },
  ],
  cameras: [
    { brand: 'Sony', models: ['A1 II', 'A7R V', 'A7 IV', 'ZV-E1', 'ZV-1 II'] },
    { brand: 'Canon', models: ['EOS R5 Mark II', 'EOS R6 Mark II', 'EOS R8', 'EOS R100'] },
    { brand: 'Nikon', models: ['Z8', 'Z6 III', 'Z9', 'Zf'] },
    { brand: 'Fujifilm', models: ['X-T6', 'X100VI', 'GFX 100S II'] },
    { brand: 'GoPro', models: ['HERO13 Black', 'HERO12 Black', 'HERO11 Black Mini'] },
  ],
  drones: [
    { brand: 'DJI', models: ['Mavic 4 Pro', 'Mavic Air 3', 'Mini 4 Pro', 'Avata 2', 'Phantom 5'] },
    { brand: 'Autel', models: ['Evo Lite+', 'Evo Nano+'] },
  ],
  monitors: [
    { brand: 'Apple', models: ['Pro Display XDR 2', 'Studio Display'] },
    { brand: 'Samsung', models: ['Odyssey OLED G9', 'Odyssey OLED G8', 'ViewFinity S9'] },
    { brand: 'LG', models: ['UltraFine 32OLED', 'UltraGear 45 OLED', 'UltraWide 49WL'] },
    { brand: 'Dell', models: ['UltraSharp 32 6K', 'Alienware AW3225QF', 'S2722QC'] },
    { brand: 'ASUS', models: ['ProArt PA32UCXR', 'ROG Swift OLED PG32UCDM'] },
  ],
  'gaming-pcs': [
    { brand: 'Alienware', models: ['Aurora R16', 'Area-51 Threadripper'] },
    { brand: 'ASUS ROG', models: ['ROG Strix G22CH', 'ROG Strix GA35'] },
    { brand: 'Corsair', models: ['Vengeance i7400', 'One i500'] },
    { brand: 'MSI', models: ['MEG Aegis Ti5', 'Infinite A'] },
    { brand: 'Razer', models: ['Razer Tomahawk NZXT C65', 'Razer Blade 18'] },
  ],
  hypercars: [
    { brand: 'Bugatti', models: ['Tourbillon', 'Mistral', 'Chiron Super Sport', 'Bolide'] },
    { brand: 'Koenigsegg', models: ['Jesko Absolut', 'Gemera', 'Regera'] },
    { brand: 'Rimac', models: ['Nevera R', 'Nevera'] },
    { brand: 'Pininfarina', models: ['Battista Targamerica', 'Battista'] },
    { brand: 'Hennessey', models: ['Venom F5', 'Venom F5 Roadster'] },
  ],
  supercars: [
    { brand: 'Ferrari', models: ['SF90 Stradale', '296 GTB', '812 Competizione', 'F80', 'Roma Spider'] },
    { brand: 'Lamborghini', models: ['Revuelto', 'Huracán Sterrato', 'Urus Performante', 'Temerario'] },
    { brand: 'McLaren', models: ['750S', 'Artura', 'Solus GT', 'W1'] },
    { brand: 'Porsche', models: ['911 Turbo S', '911 GT3 RS', '718 Cayman GT4 RS', 'Carrera GT'] },
    { brand: 'Aston Martin', models: ['Valkyrie', 'Vanquish', 'DB12 Volante', 'Valhalla'] },
  ],
  'sports-cars': [
    { brand: 'Porsche', models: ['718 Cayman GTS', 'Boxster GTS', '911 Carrera'] },
    { brand: 'Chevrolet', models: ['Corvette Z06', 'Camaro ZL1', 'Corvette E-Ray'] },
    { brand: 'Nissan', models: ['GT-R R35', 'Z Nismo'] },
    { brand: 'Toyota', models: ['GR Supra', 'GR86', 'GR Corolla'] },
    { brand: 'Mazda', models: ['MX-5 Miata RF', 'MX-5 Miata'] },
    { brand: 'BMW', models: ['M4 Competition', 'M2', 'Z4 M40i'] },
  ],
  sedans: [
    { brand: 'Mercedes-Benz', models: ['S-Class', 'E-Class', 'C-Class', 'EQE Sedan', 'EQS Sedan'] },
    { brand: 'BMW', models: ['7 Series', '5 Series', '3 Series', 'i7', 'i5'] },
    { brand: 'Audi', models: ['A8 L', 'A6', 'A4', 'e-tron GT'] },
    { brand: 'Lexus', models: ['LS 500h', 'ES 350', 'IS 500'] },
    { brand: 'Genesis', models: ['G90', 'G80', 'G70'] },
    { brand: 'Tesla', models: ['Model S Plaid', 'Model 3 Performance', 'Model 3'] },
  ],
  suvs: [
    { brand: 'Rolls-Royce', models: ['Cullinan Series II', 'Spectre'] },
    { brand: 'Bentley', models: ['Bentayga', 'Bentayga EWB'] },
    { brand: 'Mercedes-Benz', models: ['G-Class', 'GLS', 'GLE', 'EQS SUV'] },
    { brand: 'BMW', models: ['XM', 'X7', 'X5', 'iX'] },
    { brand: 'Audi', models: ['Q8 e-tron', 'Q7', 'SQ7'] },
    { brand: 'Porsche', models: ['Cayenne Turbo GT', 'Macan Electric'] },
    { brand: 'Tesla', models: ['Model X Plaid', 'Cybertruck', 'Model Y Performance'] },
    { brand: 'Land Rover', models: ['Range Rover', 'Range Rover Sport', 'Defender 110'] },
  ],
  evs: [
    { brand: 'Tesla', models: ['Model S Plaid', 'Model 3', 'Model X', 'Model Y', 'Cybertruck', 'Roadster'] },
    { brand: 'Rivian', models: ['R1S', 'R1T', 'R2'] },
    { brand: 'Lucid', models: ['Air Grand Touring', 'Air Pure', 'Gravity'] },
    { brand: 'Polestar', models: ['Polestar 4', 'Polestar 3', 'Polestar 2'] },
    { brand: 'Hyundai', models: ['IONIQ 6', 'IONIQ 5 N', 'Kona Electric'] },
    { brand: 'Kia', models: ['EV9', 'EV6 GT', 'EV5'] },
  ],
  motorcycles: [
    { brand: 'Harley-Davidson', models: ['Street Glide', 'Road Glide', 'Low Rider ST', 'Pan America 1250'] },
    { brand: 'Ducati', models: ['Panigale V4 R', 'Streetfighter V4', 'Monster SP', 'Multistrada V4'] },
    { brand: 'BMW', models: ['S 1000 RR', 'M 1000 R', 'K 1600 GTL', 'R 1300 GS'] },
    { brand: 'Kawasaki', models: ['Ninja H2R', 'Ninja ZX-10RR', 'Z900'] },
    { brand: 'Yamaha', models: ['YZF-R1M', 'MT-10 SP', 'YZF-R7'] },
  ],
  yachts: [
    { brand: 'Azimut', models: ['Grande 44M', 'Magellano 60', 'Fly 72', 'Fly 68'] },
    { brand: 'Ferretti', models: ['Custom Line 140', 'Ferretti 920', 'Infynito 90'] },
    { brand: 'Sunseeker', models: ['Superhawk 55', 'Predator 65', 'Manhattan 68', '100 Yacht'] },
    { brand: 'Princess', models: ['Y95', 'X95', 'V78', 'S72'] },
    { brand: 'Beneteau', models: ['Swift Trawler 54', 'Gran Turismo 45', 'Oceanis Yacht 60'] },
  ],
  'private-jets': [
    { brand: 'Gulfstream', models: ['G800', 'G700', 'G650ER', 'G600', 'G500'] },
    { brand: 'Bombardier', models: ['Global 8000', 'Global 7500', 'Global 6500', 'Challenger 3500'] },
    { brand: 'Dassault', models: ['Falcon 10X', 'Falcon 6X', 'Falcon 2000LXS'] },
    { brand: 'Cessna', models: ['Citation Longitude', 'Citation CJ4 Gen2', 'Citation M2 Gen2'] },
    { brand: 'Embraer', models: ['Praetor 600', 'Praetor 500', 'Phenom 300E'] },
  ],
  mansions: [
    { brand: 'Christies Estates', models: ['Beverly Hills Estate', 'Bel Air Mansion', 'Malibu Beachfront', 'Palm Beach Estate'] },
    { brand: 'Sothebys Realty', models: ['Manhattan Penthouse', 'Hamptons Estate', 'Aspen Chalet', 'French Riviera Villa'] },
    { brand: 'Knight Frank', models: ['Mayfair Townhouse', 'Kensington Palace', 'St. Moritz Chalet', 'Lake Como Villa'] },
  ],
  watches: [
    { brand: 'Rolex', models: ['Submariner Date', 'Daytona', 'Datejust 41', 'GMT-Master II', 'Day-Date 40', 'Explorer II'] },
    { brand: 'Omega', models: ['Speedmaster Moonwatch', 'Seamaster Aqua Terra', 'Constellation', 'Planet Ocean 6000M'] },
    { brand: 'Patek Philippe', models: ['Nautilus 5712', 'Aquanaut 5167', 'Calatrava', 'Grand Complications'] },
    { brand: 'Audemars Piguet', models: ['Royal Oak Offshore', 'Royal Oak Jumbo', 'Code 11.59'] },
    { brand: 'Tag Heuer', models: ['Carrera Chronograph', 'Aquaracer Professional 300'] },
    { brand: 'Cartier', models: ['Tank Louis Cartier', 'Santos de Cartier', 'Ballon Bleu'] },
    { brand: 'IWC', models: ['Big Ingenieur', 'Portugieser Chronograph', 'Pilot Mark XX'] },
  ],
  jewelry: [
    { brand: 'Cartier', models: ['Love Bracelet', 'Trinity Ring', 'Panthère de Cartier'] },
    { brand: 'Tiffany & Co.', models: ['Tiffany Setting Ring', 'HardWear Bracelet', 'Elsa Peretti Bone Cuff'] },
    { brand: 'Bvlgari', models: ['Serpenti Bracelet', 'B.Zero1 Ring', 'Divas Dream Necklace'] },
    { brand: 'Van Cleef & Arpels', models: ['Alhambra Bracelet', 'Perlée Ring', 'Between the Finger Ring'] },
    { brand: 'Chopard', models: ['Happy Diamonds', 'Happy Hearts', 'Imperiale'] },
  ],
  'mens-fashion': [
    { brand: 'Gucci', models: ['Suit Jacket', 'Wool Blazer', 'Silk Tie Set', 'Leather Loafers', 'GG Belt'] },
    { brand: 'Prada', models: ['Wool Overcoat', 'Tropical Suit', 'Re-Nylon Jacket', 'Leather Derbys'] },
    { brand: 'Saint Laurent', models: ['Le Smoking Jacket', 'Wool Trousers', 'Chelsea Boots', 'Leather Biker Jacket'] },
    { brand: 'Brunello Cucinelli', models: ['Cashmere Blazer', 'Linen Shirt', 'Chino Pants', 'Suede Loafers'] },
    { brand: 'Tom Ford', models: ['Single-Breasted Suit', 'Black Label Tuxedo', 'Overshirt', 'Jodhpur Boots'] },
  ],
  'womens-fashion': [
    { brand: 'Chanel', models: ['Tweed Jacket', 'Little Black Dress', 'Flap Bag', 'Camelia Brooch'] },
    { brand: 'Dior', models: ['Bar Jacket', 'Lady Dior Bag', 'Saddle Bag', 'JAdior Slingbacks'] },
    { brand: 'Louis Vuitton', models: ['Capucines Bag', 'Twist Bag', 'LV Trainer Sneaker', 'Silk Scarf'] },
    { brand: 'Valentino', models: ['Rockstud Heels', 'Gown Dress', 'VLogo Belt'] },
    { brand: 'Hermès', models: ['Kelly Bag', 'Birkin Bag', 'Oran Sandals', 'Carré Scarf'] },
  ],
  bags: [
    { brand: 'Hermès', models: ['Birkin 25', 'Birkin 30', 'Kelly 28', 'Kelly 32', 'Constance 18'] },
    { brand: 'Louis Vuitton', models: ['Neverfull MM', 'Speedy Bandouliere', 'Petite Malle', 'Dauphine'] },
    { brand: 'Chanel', models: ['Classic Flap Medium', '2.55 Reissue', 'Boy Chanel', 'Chanel 19'] },
    { brand: 'Gucci', models: ['GG Marmont', 'Dionysus', 'Jackie 1961', 'Horsebit 1955'] },
    { brand: 'Prada', models: ['Galleria Saffiano', 'Re-Edition 2000', 'Symbole'] },
  ],
  shoes: [
    { brand: 'Nike', models: ['Air Jordan 1 Retro', 'Air Max DN', 'Pegasus Premium', 'Air Force 1'] },
    { brand: 'Adidas', models: ['Ultraboost Light', 'Samba OG', 'Gazelle Indoor', 'Forum Low'] },
    { brand: 'Gucci', models: ['Ace Sneaker', 'Princetown Slipper', 'Horsebit Loafer'] },
    { brand: 'Manolo Blahnik', models: ['Hangisi Pump', 'Campari Pump', 'BB Pump'] },
    { brand: 'Christian Louboutin', models: ['So Kate Pump', 'Pigalle Follies', 'Hot Chick Boots'] },
  ],
  furniture: [
    { brand: 'Herman Miller', models: ['Eames Lounge Chair', 'Aeron Chair', 'Embody Chair', 'Marshmallow Sofa'] },
    { brand: 'Knoll', models: ['Barcelona Chair', 'Wassily Chair', 'Bertoia Side Chair', 'Saarinen Tulip Table'] },
    { brand: 'Vitra', models: ['Panton Chair', 'Eames DSW', 'Basculant Chair'] },
    { brand: 'Cassina', models: ['LC4 Chaise Lounge', 'LC2 Armchair', 'Superleggera Chair'] },
  ],
  decor: [
    { brand: 'IKEA', models: ['POÄNG Armchair', 'KALLAX Shelf', 'BILLY Bookcase', 'MALM Bed'] },
    { brand: 'Tom Dixon', models: ['Melt Pendant', 'Beat Light', 'S-Chair', 'Brew Table'] },
    { brand: 'Flos', models: ['Arco Floor Lamp', 'IC Lights', 'Snoopy Table Lamp'] },
  ],
  fitness: [
    { brand: 'Peloton', models: ['Bike+', 'Tread+', 'Row', 'Guide'] },
    { brand: 'NordicTrack', models: ['Commercial 2450', 'S22i Studio Cycle', 'RW900 Rower'] },
    { brand: 'Bowflex', models: ['XTREME 2 SE', 'Revolution XP', 'Adjustable Dumbbells 552'] },
    { brand: 'Tonal', models: ['Tonal Home Gym', 'Tonal Smart Accessories'] },
  ],
};

function getBrandData(subcategory: string): { brand: string; model: string } {
  const entries = brandsBySub[subcategory];
  if (entries && entries.length > 0) {
    const entry = pick(entries);
    return { brand: entry.brand, model: pick(entry.models) };
  }
  const fallbackBrands = ['Apple', 'Samsung', 'Sony', 'LG', 'Google'];
  return { brand: pick(fallbackBrands), model: pick(['Pro', 'Ultra', 'Max', 'Standard Edition']) };
}

const priceRanges: Record<string, [number, number]> = {
  smartphones: [699, 2499], laptops: [899, 8999], tablets: [329, 2499],
  smartwatches: [249, 1999], 'gaming-pcs': [1499, 15000], monitors: [199, 5999],
  cameras: [399, 12999], drones: [299, 7999], headphones: [49, 3999],
  'smart-home': [29, 1499], tvs: [299, 29999], consoles: [299, 1499],
  hypercars: [2000000, 20000000], supercars: [200000, 3000000],
  'sports-cars': [40000, 300000], sedans: [30000, 200000], suvs: [35000, 300000],
  motorcycles: [5000, 150000], evs: [30000, 250000], yachts: [500000, 150000000],
  'private-jets': [3000000, 75000000],
  mansions: [1000000, 100000000], villas: [300000, 15000000], apartments: [150000, 20000000],
  islands: [1000000, 50000000], castles: [2000000, 50000000],
  jewelry: [99, 500000], watches: [199, 500000],
  'rare-items': [99, 1000000], 'historical-artifacts': [99, 5000000],
};

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

function pid(index: number) {
  return 'IFS-' + String(index).padStart(8, '0');
}

const imageKeywords: Record<string, string[]> = {
  smartphones: ['iphone-16-pro', 'samsung-galaxy-s25', 'google-pixel-9', 'oneplus-13'],
  laptops: ['macbook-pro-m4', 'dell-xps-16', 'thinkpad-x1', 'rog-zephyrus-g16'],
  tablets: ['ipad-pro-m4', 'galaxy-tab-s10', 'surface-pro-10', 'ipad-air'],
  smartwatches: ['apple-watch-ultra', 'galaxy-watch-7', 'pixel-watch-3'],
  headphones: ['airpods-pro', 'sony-wh1000xm6', 'bose-qc-ultra', 'beats-studio-pro'],
  tvs: ['samsung-oled-s95', 'lg-oled-g4', 'sony-bravia-xr', 'tcl-qm8-qled'],
  cameras: ['sony-a7r5', 'canon-eos-r5', 'nikon-z8', 'fujifilm-xt6', 'gopro-hero13'],
  drones: ['dji-mavic-4', 'dji-mini-4-pro', 'autel-evo-lite', 'dji-avata-2'],
  monitors: ['pro-display-xdr', 'odyssey-oled-g9', 'ultrafine-32-oled', 'alienware-aw3225'],
  'gaming-pcs': ['alienware-aurora', 'rog-strix', 'corsair-vengeance', 'msi-meg-aegis'],
  hypercars: ['bugatti-tourbillon', 'koenigsegg-jesko', 'rimac-nevera', 'pininfarina-battista'],
  supercars: ['ferrari-sf90', 'lamborghini-revuelto', 'mclaren-750s', 'porsche-911-turbo-s'],
  'sports-cars': ['porsche-718-cayman', 'corvette-z06', 'nissan-gtr', 'toyota-supra', 'bmw-m4'],
  sedans: ['mercedes-s-class', 'bmw-7-series', 'audi-a8', 'tesla-model-s'],
  suvs: ['rolls-royce-cullinan', 'bentley-bentayga', 'range-rover', 'porsche-cayenne'],
  evs: ['tesla-cybertruck', 'rivian-r1s', 'lucid-air', 'polestar-4', 'hyundai-ioniq-6'],
  motorcycles: ['harley-street-glide', 'ducati-panigale-v4', 'bmw-s1000rr', 'kawasaki-ninja-h2'],
  yachts: ['azimut-grande-44', 'ferretti-920', 'sunseeker-predator-65', 'princess-y95'],
  'private-jets': ['gulfstream-g800', 'bombardier-global-7500', 'dassault-falcon-10x', 'cessna-citation-longitude'],
  mansions: ['beverly-hills-estate', 'bel-air-mansion', 'malibu-beachfront', 'hamptons-estate'],
  watches: ['rolex-submariner', 'omega-speedmaster', 'patek-nautilus', 'audemars-royal-oak', 'cartier-tank'],
  jewelry: ['cartier-love-bracelet', 'tiffany-setting-ring', 'bvlgari-serpenti', 'van-cleef-alhambra'],
  'mens-fashion': ['gucci-suit', 'prada-overcoat', 'saint-laurent-jacket', 'tom-ford-tuxedo'],
  'womens-fashion': ['chanel-tweed-jacket', 'dior-bar-jacket', 'louis-vuitton-capucines', 'hermes-kelly'],
  bags: ['hermes-birkin', 'louis-vuitton-neverfull', 'chanel-classic-flap', 'gucci-marmont'],
  shoes: ['nike-air-jordan', 'adidas-ultraboost', 'gucci-ace-sneaker', 'manolo-blahnik-hangisi'],
  furniture: ['herman-miller-eames', 'knoll-barcelona', 'vitra-panton-chair', 'cassina-lc4'],
  decor: ['ikea-poang', 'tom-dixon-melt', 'flos-arco-lamp', 'artemide-tolomeo'],
  fitness: ['peloton-bike-plus', 'nordictrack-2450', 'bowflex-xtreme', 'tonal-home-gym'],
};

function getImagesForProduct(productId: string, category: string, subcategory: string): string[] {
  const keywords = imageKeywords[subcategory] || imageKeywords[category] || ['product', 'item'];
  const count = rand(4, 6);
  const images: string[] = [];
  for (let i = 0; i < count; i++) {
    const seed = pick(keywords) + '-' + productId + '-' + i;
    images.push('https://picsum.photos/seed/' + seed + '/800/800');
  }
  return images;
}

export function generateProducts(count: number) {
  const products: any[] = [];

  for (let i = 0; i < count; i++) {
    const cat = pick(categories);
    const subcat = pick(cat.subcategories);
    const { brand, model } = getBrandData(subcat);
    const name = brand + ' ' + model;

    const range = priceRanges[subcat] || [10, 500];
    const price = rand(range[0], range[1]);
    const msrp = Math.round(price * (1 + Math.random() * 0.3));

    const id = pid(i);
    const rating = Number((3.5 + Math.random() * 1.5).toFixed(1));
    const year = rand(2020, 2026);

    const features = [
      model.includes('Pro') || model.includes('Ultra') ? 'Professional-grade performance' :
      model.includes('Max') ? 'Maximum performance configuration' :
      model.includes('Sport') ? 'Performance-oriented tuning' :
      model.includes('Limited') || model.includes('Edition') ? 'Exclusive limited edition design' :
      'Premium build quality and materials',
      model.includes('Platinum') || model.includes('Gold') ? 'Rare precious materials and finishes' :
      brand === 'Apple' ? 'Seamless ecosystem integration' :
      brand === 'Samsung' || brand === 'Sony' || brand === 'LG' ? 'Leading-edge display technology' :
      'Industry-leading craftsmanship and design',
      model.includes('Turbo') || model.includes('Sport') || model.includes('GT') || model.includes('S') && model.includes('Model') ? 'High-performance engineering' :
      'Comprehensive manufacturer warranty included',
    ];

    products.push({
      id,
      name,
      description: `The ${name} by ${brand}. ${cat.slug.charAt(0).toUpperCase() + cat.slug.slice(1)} reimagined — combining visionary design with uncompromising quality. This ${subcat.replace('-', ' ')} represents the pinnacle of its class.`,
      category: cat.slug,
      subcategory: subcat,
      brand,
      price,
      msrp,
      currency: 'USD',
      rating: Math.min(5, Math.max(1, rating)),
      reviewCount: rand(0, 5000),
      releaseYear: year,
      inStock: Math.random() > 0.05,
      isLimitedEdition: Math.random() < 0.08,
      isRare: Math.random() < 0.05,
      isFantasy: subcat === 'fantasy-collections' || Math.random() < 0.03,
      isFutureTech: subcat === 'future-tech' || Math.random() < 0.02,
      popularity: rand(1, 10000),
      tags: [subcat.replace('-', ' '), brand.toLowerCase(), 'popular', 'featured'],
      colors: ['Midnight Black', 'Starlight White'],
      sizes: [],
      specifications: {},
      features,
      images: getImagesForProduct(id, cat.slug, subcat),
      createdAt: new Date(Date.now() - rand(0, 365 * 3) * 86400000).toISOString(),
    });
  }

  return products;
}

export function generateProductsFromBackend(data: any[]): any[] {
  return data.map((p: any) => ({
    ...p,
    specifications: typeof p.specifications === 'string' ? safeParse(p.specifications) : p.specifications,
    colors: typeof p.colors === 'string' ? safeParse(p.colors, []) : p.colors,
    sizes: typeof p.sizes === 'string' ? safeParse(p.sizes, []) : p.sizes,
    tags: typeof p.tags === 'string' ? safeParse(p.tags, []) : p.tags,
    features: typeof p.features === 'string' ? safeParse(p.features, []) : p.features,
    images: typeof p.images === 'string' ? safeParse(p.images, []) : (p.images || []),
  }));
}

function safeParse(str: string, fallback: any = {}) {
  try { return JSON.parse(str); } catch { return fallback; }
}
