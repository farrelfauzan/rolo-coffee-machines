import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-10">
      <div className="container mx-auto flex items-center gap-6 py-4 px-4 justify-between w-full">
        <Link
          href="/"
          className="select-none font-bold tracking-[0.6em] text-xl text-foreground"
        >
          <Image
            src="/images/logo/image.png"
            alt="ROLO"
            width={120}
            height={20}
            className="mr-2"
          />
        </Link>

        <div className="flex items-center gap-3">
          <div className="relative flex-1 min-w-2xl">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#BABFCE]" />
            <Input
              placeholder="Search"
              className="pl-9 placeholder:text-[#BABFCE] shadow-none"
              aria-label="Search"
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
            className="min-w-28 px-2.5 bg-[#F0F0F0] font-medium border-0 text-[#5F5F5F] cursor-pointer text-sm font-sans"
            type="button"
            variant="outline"
          >
            Your Cart
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
