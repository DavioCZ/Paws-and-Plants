import type { Plant as PrismaPlant, Guide as PrismaGuide, Ritual as PrismaRitual, Product as PrismaProduct, Variant as PrismaVariant, PlantTag, RitualStep, ProductImage } from '@prisma/client';

export type Plant = PrismaPlant & {
  tags: PlantTag[];
};

export type Guide = PrismaGuide;

export type Ritual = PrismaRitual & {
  steps: RitualStep[];
};

export type Product = PrismaProduct & {
  images: ProductImage[];
  variants: Variant[];
};

export type Variant = PrismaVariant;

export type CartItem = {
  variantId: string;
  productId: string;
  title: string;
  sku: string;
  color: string;
  size: string | null;
  priceCzk: number;
  image: string; // URL of the first product image
  quantity: number;
};

export type Filters = {
  safety?: string[];
  light?: string[];
  difficulty?: string[];
  collection?: string[];
  color?: string[];
  technique?: string[];
};
