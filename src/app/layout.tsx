import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/client/header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Rolo Coffee Machines",
  description: "Shop the best coffee machines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main className="container mx-auto p-4 font-sans">{children}</main>
      </body>
    </html>
  );
}
