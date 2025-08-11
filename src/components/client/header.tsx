"use client";

import Link from "next/link";
import Image from "next/image";
import SearchBar from "./search-bar";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  console.log("Current Pathname:", pathname);

  if (pathname === "/cart") {
    return null;
  }

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

        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
