import { create } from "zustand";

export type CatalogItem = {
  id: number;
  imageUri: string;
  title: string;
  description: string;
  price: number;
};

type CatalogState = {
  items: CatalogItem[];
  query: string;
  addItem: (item: CatalogItem) => void;
  addItems: (items: CatalogItem[]) => void;
  setQuery: (query: string) => void;
  getFilteredItems: () => CatalogItem[];
};

const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

export const useCatalogStore = create<CatalogState>((set, get) => ({
  items: [],
  query: "",
  addItem: (item) =>
    set((state) =>
      state.items.some((i) => i.id === item.id)
        ? state
        : { items: [...state.items, item] }
    ),
  addItems: (incoming) =>
    set((state) => {
      const byId = (() => {
        const store: Record<number, CatalogItem> = {};
        return {
          set(id: number, item: CatalogItem) {
            store[id] = item;
          },
          has(id: number) {
            return Object.prototype.hasOwnProperty.call(store, id);
          },
          values() {
            return Object.values(store);
          },
        };
      })();
      for (const it of state.items) byId.set(it.id, it);
      for (const it of incoming) if (!byId.has(it.id)) byId.set(it.id, it);
      return { items: Array.from(byId.values()) };
    }),
  setQuery: (query) => set({ query }),
  getFilteredItems: () => {
    const { query, items } = get();
    const q = normalize(query);
    if (!q) return items;
    return items
      .map((it) => {
        const searchText = normalize(`${it.title} ${it.description}`);
        const title = normalize(it.title);
        const score =
          (searchText.includes(q) ? 1 : 0) + (title.includes(q) ? 1 : 0);
        return { it, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.it);
  },
}));
