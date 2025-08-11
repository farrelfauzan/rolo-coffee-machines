import CatalogCard from "@/components/server/catalogue";
import { catalogItems } from "@/data";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <h1 className="font-medium text-2xl text-[#1C1C1E]">Breville</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {
          catalogItems.map((item) => (
            <CatalogCard 
              key={item.id}
              id={item.id}
              imageUri={item.imageUri}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))
        }
      </div>
    </React.Fragment>
  )
}