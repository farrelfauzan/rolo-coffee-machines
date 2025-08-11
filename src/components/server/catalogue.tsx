import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type ICatalogCardProps = {
  id: number;
  imageUri: string;
  title: string;
  description: string;
  price: number;
};

const CatalogCard = ({
  id,
  imageUri,
  title,
  description,
  price,
}: ICatalogCardProps) => {
  return (
    <Link href={`/product/${id}`} >
      <Card className="cursor-pointer py-4 border-none shadow-none">
        <CardContent className="p-0 ">
          <Image
            src={imageUri}
            alt={title}
            width={270}
            height={270}
            className="w-full object-cover mb-4 rounded-lg border border-[#BABFCE] bg-white"
          />
          <div className="flex flex-col px-0">
            <div className="mb-2 flex flex-row justify-between items-center">
              <h2 className="text-xl font-medium">{title}</h2>
              <span className="text-lg font-medium">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                }).format(price)}
              </span>
            </div>
            <p className="text-gray-600 font-light">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CatalogCard;
