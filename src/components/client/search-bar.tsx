"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useCartStore } from "@/lib/store/cart";
import { useCatalogStore } from "@/lib/store/catalog";

const SearchBar = () => {
  const { items } = useCartStore();
  const { setQuery } = useCatalogStore();

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-1 min-w-2xl">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#BABFCE]" />
        <Input
          placeholder="Search"
          className="pl-9 placeholder:text-[#BABFCE] shadow-none"
          aria-label="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <Button
        variant="outline"
        className="min-w-24 border border-[#BABFCE] text-sm font-sans"
        disabled
      >
        Filters
      </Button>
    <Button
      className={`min-w-28 px-2.5 font-medium border-0 cursor-pointer text-sm font-sans ${
        items.length > 0
        ? "bg-[#375737] text-white"
        : "bg-[#F0F0F0] text-[#5F5F5F]"
      }`}
      type="button"
      variant="outline"
    >
      Your Cart
    </Button>
    </div>
  );
};

export default SearchBar;
