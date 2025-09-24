import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { CartItem } from '@/types';

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (variantId: string) => void;
  updateItemQuantity: (variantId: string, quantity: number) => void;
  total: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.variantId === item.variantId);
          if (existingItem) {
            // Increment quantity
            return {
              items: state.items.map((i) =>
                i.variantId === item.variantId
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          // Add new item
          return { items: [...state.items, { ...item, quantity: 1 }] };
        }),
      removeItem: (variantId) =>
        set((state) => ({
          items: state.items.filter((item) => item.variantId !== variantId),
        })),
      updateItemQuantity: (variantId, quantity) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.variantId === variantId ? { ...item, quantity } : item
            )
            .filter((item) => item.quantity > 0), // Remove if quantity is 0
        })),
      total: () =>
        get().items.reduce((acc, item) => acc + item.priceCzk * item.quantity, 0),
    }),
    {
      name: 'cart-storage', // name of the item in the storage (must be unique)
    }
  )
);
