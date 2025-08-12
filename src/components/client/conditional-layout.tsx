"use client";

import { usePathname } from "next/navigation";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const ConditionalLayout = ({ children }: ConditionalLayoutProps) => {
  const pathname = usePathname();
  
  const fullWidthRoutes = [
    "/payment"
  ];
  
  const isFullWidth = fullWidthRoutes.includes(pathname);
  
  if (isFullWidth) {
    return <main className="font-sans">{children}</main>;
  }
  
  return <main className="container mx-auto p-4 font-sans">{children}</main>;
};

export default ConditionalLayout;
