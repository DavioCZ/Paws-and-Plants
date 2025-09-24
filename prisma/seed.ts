import { PrismaClient, Safety, Light, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // Seed Plants
  const plants = [
    {
      slug: 'calathea-orbifolia',
      name: 'Calathea Orbifolia',
      latinName: 'Calathea orbifolia',
      safety: Safety.SAFE,
      light: Light.INDIRECT,
      watering: 'Keep soil consistently moist, but not waterlogged.',
      difficulty: Difficulty.MEDIUM,
      petNotes: 'A classic pet-safe choice, non-toxic to both cats and dogs.',
      contentMdx: '## Calathea Orbifolia\n\nA beautiful plant with large, round, striped leaves. It enjoys humidity and indirect light.',
      tags: ['safe for cats', 'safe for dogs', 'statement leaf'],
    },
    {
      slug: 'parlor-palm',
      name: 'Parlor Palm',
      latinName: 'Chamaedorea elegans',
      safety: Safety.SAFE,
      light: Light.SHADE,
      watering: 'Water when the top inch of soil is dry. Tolerant to lower light.',
      difficulty: Difficulty.EASY,
      petNotes: 'Graceful and non-toxic, making it a perfect green companion for your furry friends.',
      contentMdx: '## Parlor Palm\n\nAn elegant and popular houseplant that is very easy to care for.',
      tags: ['safe for cats', 'safe for dogs', 'low light'],
    },
    {
      slug: 'watermelon-peperomia',
      name: 'Watermelon Peperomia',
      latinName: 'Peperomia argyreia',
      safety: Safety.SAFE,
      light: Light.INDIRECT,
      watering: 'Allow soil to dry out between waterings.',
      difficulty: Difficulty.EASY,
      petNotes: 'Its charming watermelon-patterned leaves are completely safe for pets.',
      contentMdx: '## Watermelon Peperomia\n\nCompact and stylish, this plant is a favorite for its unique foliage.',
      tags: ['safe for cats', 'safe for dogs', 'compact'],
    },
    {
      slug: 'chinese-money-plant',
      name: 'Chinese Money Plant',
      latinName: 'Pilea peperomioides',
      safety: Safety.SAFE,
      light: Light.BRIGHT,
      watering: 'Water thoroughly when soil is dry. Rotates towards the light.',
      difficulty: Difficulty.EASY,
      petNotes: 'Known for bringing good fortune and being perfectly safe for curious pets.',
      contentMdx: '## Chinese Money Plant\n\nFamous for its coin-shaped leaves and ease of propagation.',
      tags: ['safe for cats', 'safe for dogs', 'easy to propagate'],
    },
    {
      slug: 'nerve-plant',
      name: 'Nerve Plant',
      latinName: 'Fittonia albivenis',
      safety: Safety.SAFE,
      light: Light.INDIRECT,
      watering: 'Loves high humidity and consistently moist soil. Prone to fainting when thirsty!',
      difficulty: Difficulty.MEDIUM,
      petNotes: 'Its intricate leaf patterns are stunning and completely harmless to pets.',
      contentMdx: '## Nerve Plant\n\nA dramatic plant with beautifully veined leaves, perfect for terrariums.',
      tags: ['safe for cats', 'safe for dogs', 'high humidity'],
    },
  ];

  for (const plant of plants) {
    await prisma.plant.upsert({
      where: { slug: plant.slug },
      update: {},
      create: {
        ...plant,
        tags: {
          create: plant.tags.map((tag) => ({ name: tag })),
        },
      },
    });
  }

  // Seed Guides
  const guides = [
    {
      slug: 'watering-by-light',
      title: 'Watering According to Light',
      summary: 'Learn how light conditions affect your plant watering schedule.',
      contentMdx: '## Watering by Light\n\nPlants in brighter light dry out faster. It\'s that simple. Here\'s a breakdown...',
    },
    {
      slug: 'repotting-without-stress',
      title: 'Repotting Without Stress',
      summary: 'A step-by-step guide to repotting your plants without causing shock.',
      contentMdx: '## Repotting Without Stress\n\nFollow these simple steps to give your plant a new home.',
    },
  ];

  for (const guide of guides) {
    await prisma.guide.upsert({
      where: { slug: guide.slug },
      update: {},
      create: guide,
    });
  }

  // Seed Rituals
  const ritual = {
    slug: 'evening-reset',
    title: 'Evening Reset',
    timeOfDay: 'evening',
    breath: '4-6',
    contentMdx: '## Evening Reset\n\nA short ritual to disconnect from the day and prepare for a restful night.',
    steps: [
      { text: 'Find a comfortable seat near a plant.', order: 1 },
      { text: 'Close your eyes and take three deep breaths.', order: 2 },
      { text: 'Gently touch a leaf and notice its texture.', order: 3 },
      { text: 'Think of one good thing that happened today.', order: 4 },
      { text: 'Open your eyes and thank your plant.', order: 5 },
    ],
  };

  await prisma.ritual.upsert({
    where: { slug: ritual.slug },
    update: {},
    create: {
      slug: ritual.slug,
      title: ritual.title,
      timeOfDay: ritual.timeOfDay,
      breath: ritual.breath,
      contentMdx: ritual.contentMdx,
      steps: {
        create: ritual.steps,
      },
    },
  });

  // Seed Products
  const products = [
    // Hats
    {
      slug: 'dachshund-monstera-hat',
      title: 'Dachshund & Monstera Hat',
      category: 'hats',
      collection: 'Dog & Monstera',
      technique: 'embroidery',
      images: ['/placeholders/hat1.svg'],
      variants: [
        { sku: 'PP-HAT-CLASSIC-DACH-EMB-CREAM', color: 'Cream', size: 'OSFA', priceCzk: 69000, stock: 50 },
      ],
    },
    {
      slug: 'corgi-leaf-hat',
      title: 'Corgi Leaf Hat',
      category: 'hats',
      collection: 'Dog & Monstera',
      technique: 'embroidery',
      images: ['/placeholders/hat2.svg'],
      variants: [
        { sku: 'PP-HAT-CLASSIC-CORGI-EMB-SAGE', color: 'Sage', size: 'OSFA', priceCzk: 69000, stock: 40 },
      ],
    },
    {
      slug: 'labrador-calm-hat',
      title: 'Labrador Calm Hat',
      category: 'hats',
      collection: 'Zen Walk',
      technique: 'embroidery',
      images: ['/placeholders/hat3.svg'],
      variants: [
        { sku: 'PP-HAT-CLASSIC-LAB-EMB-BLUSH', color: 'Blush', size: 'OSFA', priceCzk: 69000, stock: 30 },
      ],
    },
    {
      slug: 'paw-heart-hat',
      title: 'Paw-Heart Hat',
      category: 'hats',
      collection: 'Essentials',
      technique: 'patch',
      images: ['/placeholders/hat4.svg'],
      variants: [
        { sku: 'PP-HAT-CLASSIC-PAW-PAT-CREAM', color: 'Cream', size: 'OSFA', priceCzk: 65000, stock: 60 },
      ],
    },
    {
      slug: 'leaf-outline-hat',
      title: 'Leaf Outline Hat',
      category: 'hats',
      collection: 'Essentials',
      technique: 'embroidery',
      images: ['/placeholders/hat5.svg'],
      variants: [
        { sku: 'PP-HAT-CLASSIC-LEAF-EMB-SAGE', color: 'Sage', size: 'OSFA', priceCzk: 65000, stock: 70 },
      ],
    },
    // Beanies
    {
      slug: 'zen-paw-beanie',
      title: 'Zen Paw Beanie',
      category: 'beanies',
      collection: 'Zen Walk',
      technique: 'patch',
      images: ['/placeholders/beanie1.svg'],
      variants: [
        { sku: 'PP-BEA-KNIT-ZENPAW-PAT-INK', color: 'Ink', size: 'OSFA', priceCzk: 59000, stock: 45 },
      ],
    },
    {
      slug: 'leaf-tag-beanie',
      title: 'Leaf Tag Beanie',
      category: 'beanies',
      collection: 'Essentials',
      technique: 'patch',
      images: ['/placeholders/beanie2.svg'],
      variants: [
        { sku: 'PP-BEA-KNIT-LEAF-PAT-SAGE', color: 'Sage', size: 'OSFA', priceCzk: 59000, stock: 55 },
      ],
    },
    {
      slug: 'dog-plant-beanie',
      title: 'Dog & Plant Beanie',
      category: 'beanies',
      collection: 'Dog & Monstera',
      technique: 'embroidery',
      images: ['/placeholders/beanie3.svg'],
      variants: [
        { sku: 'PP-BEA-KNIT-DOGPLANT-EMB-CREAM', color: 'Cream', size: 'OSFA', priceCzk: 62000, stock: 35 },
      ],
    },
    // Accessories
    {
      slug: 'repot-day-tote',
      title: 'Repot Day Tote',
      category: 'totes',
      collection: 'Essentials',
      technique: 'print',
      images: ['/placeholders/tote1.svg'],
      variants: [
        { sku: 'PP-TOTE-CANVAS-REPOT-PRT-CREAM', color: 'Cream', size: 'OSFA', priceCzk: 45000, stock: 100 },
      ],
    },
    {
      slug: 'walk-water-tote',
      title: 'Walk & Water Tote',
      category: 'totes',
      collection: 'Zen Walk',
      technique: 'print',
      images: ['/placeholders/tote2.svg'],
      variants: [
        { sku: 'PP-TOTE-CANVAS-WALK-PRT-SAGE', color: 'Sage', size: 'OSFA', priceCzk: 45000, stock: 80 },
      ],
    },
    {
      slug: 'sticker-set',
      title: 'Paws & Plants Sticker Set',
      category: 'stickers',
      collection: 'Essentials',
      technique: 'print',
      images: ['/placeholders/stickers.svg'],
      variants: [
        { sku: 'PP-STK-VINYL-SET-MULTI', color: 'Multi', size: 'OSFA', priceCzk: 15000, stock: 200 },
      ],
    },
    {
      slug: 'calm-art-print',
      title: 'Calm Art Print',
      category: 'prints',
      collection: 'Zen Walk',
      technique: 'print',
      images: ['/placeholders/print1.svg'],
      variants: [
        { sku: 'PP-PRT-PAPER-CALM-PRT-MULTI', color: 'Multi', size: 'A4', priceCzk: 35000, stock: 60 },
      ],
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        slug: product.slug,
        title: product.title,
        category: product.category,
        collection: product.collection,
        technique: product.technique,
        images: {
          create: product.images.map((url) => ({ url })),
        },
        variants: {
          create: product.variants,
        },
      },
    });
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
