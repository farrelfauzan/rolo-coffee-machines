"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { priceFmt } from "@/lib/utils";

type IFooterProps = {
  id?: number;
  title?: string;
  price?: number;
  selectedImage?: string;
  salePrice?: number;
  totalPrice?: number;
};

const Footer = ({
  id,
  title,
  price,
  selectedImage,
  salePrice,
  totalPrice,
}: IFooterProps) => {
  const { addItem, items } = useCartStore();

  const addToCart = () => {
    const currentUnit =
      items.find((item) => item.id === id && item.imageUri === selectedImage)
        ?.unit ?? 0;

    const findType = selectedImage?.toLowerCase().includes("black")
      ? "Truffle Black"
      : "Stainless Steel";

    addItem({
      id: id || 0,
      title: title || "",
      price: price || 0,
      imageUri: selectedImage || "",
      unit: currentUnit + 1,
      type: findType,
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between gap-4 p-6">
        <Link href="../" className="flex items-center gap-2 text-[#475069]">
          <Button
            variant="outline"
            className="gap-2 bg-[#F0F0F0] border-none shadow-none"
          >
            <ChevronLeft className="size-4" /> Back
          </Button>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          {salePrice ? (
            <>
              <div className="text-2xl font-medium text-[#375737]">
                {priceFmt(salePrice ?? 0)}
              </div>

              <Button
                className="bg-[#748067] hover:bg-[#286f2c] text-white cursor-pointer"
                onClick={addToCart}
              >
                Add to Cart
                <ChevronRight className="size-4" />
              </Button>
            </>
          ) : (
            <>
              <div className="text-2xl font-medium text-[#375737]">
                Total {priceFmt(totalPrice ?? 0)}
              </div>
              <Button className="bg-[#748067] hover:bg-[#286f2c] text-white cursor-pointer">
                Check Out
                <ChevronRight className="size-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
