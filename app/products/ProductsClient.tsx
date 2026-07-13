"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCategories from "@/components/sections/ProductCategories";
import ProductCatalog from "@/components/sections/ProductCatalog";
import Footer from "@/components/Footer";
import { LoadingScreen, WhatsAppButton } from "@/components/ClientOnlyComponents";
import type { SiteProduct } from "@/lib/shopify/types";

export default function ProductsClient({ products }: { products: SiteProduct[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main className="pt-20 min-h-screen bg-bg">
        <ProductCategories
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ProductCatalog
          products={products}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
