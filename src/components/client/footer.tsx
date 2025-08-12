"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { priceFmt } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useFormStore } from "@/lib/store/form";

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
  const router = useRouter();
  const pathName = usePathname();

  const { triggerSubmit, isFormValid, isLoading } = useFormStore();

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
        <Button
          variant="outline"
          className="gap-2 bg-[#F0F0F0] border-none shadow-none"
          onClick={() => router.back()}
        >
          <ChevronLeft className="size-4" /> Back
        </Button>
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
              {pathName === "/customer-detail" ? (
                <Button
                  className="bg-[#748067] hover:bg-[#286f2c] text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  onClick={() => {
                    triggerSubmit();
                  }}
                  disabled={!isFormValid || isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 mr-2 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Make Payment
                      <ChevronRight className="size-4" />
                    </>
                  )}
                </Button>
              ) : (
                <Link href="/customer-detail">
                  <Button className="bg-[#748067] hover:bg-[#286f2c] text-white cursor-pointer">
                    Check Out
                    <ChevronRight className="size-4" />
                  </Button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
