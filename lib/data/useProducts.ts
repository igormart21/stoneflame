"use client";

import { products, type Product } from "./products";
import { productsPt } from "./productsPt";
import { useLanguage, type Lang } from "@/lib/i18n/LanguageContext";

/** Localizes the "From $X" price prefix without touching the number. */
export function localizePrice(price: string, fromWord: string): string {
  return price.replace(/^From\b/, fromWord);
}

/** Merges the Portuguese translation (if any) over the base English product. */
export function localizeProduct(p: Product, lang: Lang): Product {
  if (lang !== "pt") return p;
  const tr = productsPt[p.slug];
  return tr ? { ...p, ...tr } : p;
}

/** All products localized to the active language (order preserved). */
export function useLocalizedProducts(): Product[] {
  const { lang } = useLanguage();
  return products.map((p) => localizeProduct(p, lang));
}

/** A single product (by slug) localized to the active language. */
export function useLocalizedProduct(slug: string): { product: Product | undefined; index: number } {
  const { lang } = useLanguage();
  const index = products.findIndex((p) => p.slug === slug);
  const base = products[index];
  return { product: base ? localizeProduct(base, lang) : undefined, index };
}
