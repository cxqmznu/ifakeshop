import { PrismaClient } from '@prisma/client';
import { generateProductBatch } from './generator.js';
import { categories } from '../../shared/src/index.js';

const prisma = new PrismaClient();

async function seed(totalProducts: number = 1000000) {
  console.log('Starting seed...');
  console.log(`Target: ${totalProducts.toLocaleString()} products`);

  const batchSize = 5000;
  const batches = Math.ceil(totalProducts / batchSize);

  for (let batch = 0; batch < batches; batch++) {
    const start = batch * batchSize;
    const count = Math.min(batchSize, totalProducts - start);
    const products = generateProductBatch(start, count);

    for (const product of products) {
      await prisma.product.create({ data: product });
    }

    const inserted = (batch + 1) * batchSize;
    console.log(`Seeded ${Math.min(inserted, totalProducts).toLocaleString()}/${totalProducts.toLocaleString()} products`);
  }

  console.log('Creating collections...');
  const allProducts = await prisma.product.findMany({ take: 1000 });

  const collections = [
    {
      id: 'trending-worldwide',
      name: 'Trending Worldwide',
      description: 'Most popular products across the globe',
      image: '/images/collections/trending.jpg',
      productIds: JSON.stringify(allProducts.slice(0, 50).map(p => p.id)),
      type: 'trending',
    },
    {
      id: 'luxury-picks',
      name: 'Luxury Picks',
      description: 'The finest luxury items available',
      image: '/images/collections/luxury.jpg',
      productIds: JSON.stringify(allProducts.filter(p => p.price > 10000).slice(0, 50).map(p => p.id)),
      type: 'luxury',
    },
    {
      id: 'hidden-gems',
      name: 'Hidden Gems',
      description: 'Undiscovered treasures waiting for you',
      image: '/images/collections/gems.jpg',
      productIds: JSON.stringify(allProducts.filter(p => p.popularity < 100).slice(0, 50).map(p => p.id)),
      type: 'hidden_gems',
    },
    {
      id: 'fantasy-collection',
      name: 'Fantasy Collection',
      description: 'Items from the realm of imagination',
      image: '/images/collections/fantasy.jpg',
      productIds: JSON.stringify(allProducts.filter(p => p.isFantasy).slice(0, 50).map(p => p.id)),
      type: 'fantasy',
    },
    {
      id: 'new-arrivals',
      name: 'New Arrivals',
      description: 'The latest additions to our universe',
      image: '/images/collections/new.jpg',
      productIds: JSON.stringify(allProducts.filter(p => p.releaseYear === 2026).slice(0, 50).map(p => p.id)),
      type: 'new_arrivals',
    },
  ];

  for (const collection of collections) {
    await prisma.collection.upsert({
      where: { id: collection.id },
      update: collection,
      create: collection,
    });
  }

  console.log('Seed complete!');
  console.log(`Total products: ${(await prisma.product.count()).toLocaleString()}`);
}

const total = parseInt(process.argv[2] || '10000', 10);

seed(total)
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
