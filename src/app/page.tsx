import CatalogList from "@/components/client/catalog-list";
import React from "react";

export default function Home() {

  return (
    <React.Fragment>
      <h1 className="font-medium text-2xl text-[#1C1C1E]">Breville</h1>
      <CatalogList />
    </React.Fragment>
  )
}