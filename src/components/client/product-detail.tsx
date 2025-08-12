"use client";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "./footer";
import { priceFmt } from "@/lib/utils";

type ProductDetailProps = {
  id: number;
  imageUri: string;
  title: string;
  description: string;
  price: number;
  info: string;
  whatIsInTheBox: string[];
  morePhotos: string[];
};

const ProductDetail = ({
  id,
  imageUri,
  title,
  description,
  price,
  info,
  whatIsInTheBox,
  morePhotos,
}: ProductDetailProps) => {
  const salePrice = price;
  const originalPrice = Math.round(price * 1.25);
  const photos = [imageUri, ...morePhotos];

  const [selectedImage, setSelectedImage] = useState(imageUri);

  return (
    <div className="pb-28">
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left: Gallery */}
        <div className="lg:col-span-5">
          <div className="flex aspect-[4/3] w-full items-center justify-center">
            <Image src={selectedImage} alt={title} width={400} height={400} />
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto justify-center">
            {photos.map((src, i) => (
              <div
                key={i}
                className={`relative size-20 shrink-0 rounded-md border ${
                  src === selectedImage ? "border-[#375737] border-2" : ""
                }`}
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`${title} ${i + 1}`}
                  fill
                  className="object-contain p-1"
                />
              </div>
            ))}
          </div>
        </div>

        <ScrollArea className="lg:col-span-7 flex flex-col px-6 max-h-[calc(100vh-200px)] pb-16">
          <div className="text-[16px] text-[#BABFCE]">
            Machines & Equipment {">>"} Breville
          </div>
          <h1 className="mt-2 text-[32px] font-medium text-[#1C1C1E]">
            {title}
          </h1>
          <p className="mt-2 text-[#475069] font-light text-[16px]">
            {description}
          </p>

          <div className="mt-4 flex items-baseline gap-4 justify-between">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl text-[#BABFCE] line-through">
                {priceFmt(originalPrice)}
              </span>
              <span className="text-2xl text-[#375737] font-medium">
                {priceFmt(salePrice)}
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-[16px] text-[#375737] font-normal">
                20% off, limited time offer
              </span>
            </div>
          </div>

          {id === 1 && (
            <>
              <hr className="my-6 border-[#E5E7EB]" />
              <div className="py-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium mb-2 text-[16px] text-[#5F5F5F]">
                    Colour
                  </span>
                  <span className="text-[#BABFCE] text-[16px] font-medium">
                    Stainless Steel
                  </span>
                </div>
                <div className="flex gap-3">
                  <Button
                    aria-label="Stainless Steel"
                    className="size-8 rounded-md border cursor-pointer"
                    style={{
                      background: "linear-gradient(180deg,#dcdcdc,#b9b9b9)",
                    }}
                    onClick={() => {
                      const img =
                        "/images/coffee-machine/barista-express/barista-express-1-steel.png";

                      if (selectedImage !== img) {
                        setSelectedImage(img);
                      }
                    }}
                  />
                  <Button
                    aria-label="Black"
                    className="size-8 rounded-md border bg-[#1F2A37] cursor-pointer"
                    onClick={() => {
                      const img =
                        "/images/coffee-machine/barista-express/barista-express-2-steel-black.png";

                      if (selectedImage !== img) {
                        setSelectedImage(img);
                      }
                    }}
                  />
                </div>
              </div>
            </>
          )}

          <hr className="my-6 border-[#E5E7EB]" />

          <div className="space-y-6 text-[#475069] text-[14px]">
            {(() => {
              const normalized = info.replace(/([a-z])\.([A-Z])/g, "$1. $2");
              const byDoubleNewline = normalized
                .split(/\n\s*\n/)
                .filter(Boolean);
              let paragraphs: string[];
              if (byDoubleNewline.length >= 3) {
                paragraphs = byDoubleNewline.slice(0, 3);
              } else {
                const sentences = normalized
                  .split(/(?<=\.)\s+/)
                  .filter(Boolean);
                if (sentences.length <= 3) {
                  paragraphs = sentences;
                } else {
                  const size = Math.ceil(sentences.length / 3);
                  paragraphs = [
                    sentences.slice(0, size).join(" "),
                    sentences.slice(size, size * 2).join(" "),
                    sentences.slice(size * 2).join(" "),
                  ];
                }
              }
              return paragraphs.map((p, i) => <p key={i}>{p}</p>);
            })()}
            <h2 className="text-[16px] font-semibold mb-2 text-[#5F5F5F]">
              What's in the box
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {whatIsInTheBox.map((item, idx) => (
                <li key={idx} className="text-[14px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </div>

      {/* Bottom action bar */}
      <Footer
        salePrice={salePrice}
        id={id}
        title={title}
        price={price}
        selectedImage={selectedImage}
      />
      {/* <div className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <div className="text-2xl font-medium text-[#375737]">
              {priceFmt(salePrice)}
            </div>
            <Button className="bg-[#748067] hover:bg-[#286f2c] text-white cursor-pointer" onClick={addToCart}>
              Add to Cart
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetail;
