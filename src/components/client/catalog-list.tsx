"use client";

import { useCatalogStore } from "@/lib/store/catalog";
import CatalogCard from "../server/catalogue";
import { useEffect, useMemo } from "react";
import { catalogItems } from "@/data";

type Props = {
  query?: string;
};

const CatalogList = () => {
  useCatalogStore((s) => s.query);
  const items = useCatalogStore((s) => s.items);
  const addItems = useCatalogStore((s) => s.addItems);
  const getFilteredItems = useCatalogStore((s) => s.getFilteredItems);

  useEffect(() => {
    if (!items.length) {
      addItems(catalogItems);
    }
  }, [addItems, items.length]);

  const displayItems = getFilteredItems();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {displayItems.map((item) => (
        <CatalogCard
          key={item.id}
          id={item.id}
          imageUri={item.imageUri}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default CatalogList;
