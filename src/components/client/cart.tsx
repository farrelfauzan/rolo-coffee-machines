"use client";

import { useCartStore } from "@/lib/store/cart";
import { Button } from "../ui/button";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import Footer from "./footer";

const CartList = () => {
  const { items, total, removeItem } = useCartStore();

  const priceFmt = (v: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(v);

    
  const groupedItems = items.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id && i.type === item.type);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += item.price;
    } else {
      acc.push({
        ...item,
        quantity: 1,
        totalPrice: item.price
      });
    }
    return acc;
  }, [] as Array<typeof items[0] & { quantity: number; totalPrice: number }>);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <div className="flex flex-col items-center gap-4">
          <ShoppingBag className="w-16 h-16 text-gray-300" />
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500">
              Add some coffee machines to get started
            </p>
          </div>
        </div>
        <Link href="/">
          <Button className="bg-[#375737] hover:bg-[#2d4529] text-white px-8 py-3">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-w-2xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 px-8">
        <h1 className="text-2xl font-medium text-[#1C1C1E]">Your Cart</h1>
        <span className="text-[#8E93A7]">{items.length} items</span>
      </div>

      {/* Cart Items */}
      <ScrollArea className="space-y-6 h-[calc(100vh-40rem)] px-8">
        {groupedItems.map((item, index) => (
          <div key={index + 1} className="flex items-center gap-6 py-6 border-b border-gray-100">
            {/* Product Image */}
            <div className="w-20 h-20 flex-shrink-0">
              <Image
                src={item.imageUri}
                alt={item.title}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Product Details */}
            <div className="flex-1">
              <h3 className="font-medium text-[#1C1C1E] text-[16px]  mb-1">{item.title}</h3>
              <span className="text-[16px] font-light text-[#5F5F5F]">
                {item.type}
              </span>
            </div>
            
            {/* Price and Quantity */}
            <div className="text-right flex-1">
              <div className="font-semibold text-[#1C1C1E] mb-1">
                {priceFmt(item.totalPrice)}
              </div>
              <div className="text-[#8E93A7] text-sm">{item.quantity} unit{item.quantity > 1 ? 's' : ''}</div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <Footer
        totalPrice={total}
      />
    </div>
  );
};

export default CartList;
