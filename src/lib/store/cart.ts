import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: number;
  imageUri: string;
  title: string;
  unit: number;
  price: number;
  type: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

export const useCartStore = create<
  CartState & {
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
  }
>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item) =>
        set((state) => {
          const items = [...state.items, item];
          const total = items.reduce((sum, i) => sum + i.price, 0);
          return { items, total };
        }),
      removeItem: (id) =>
        set((state) => {
          const items = state.items.filter((item) => item.id !== id);
          const total = items.reduce((sum, i) => sum + i.price, 0);
          return { items, total };
        }),
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: "cart-store",
    }
  )
);
