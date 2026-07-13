import { shopifyFetch } from "./client";
import { GET_PRODUCTS, GET_PRODUCT_BY_HANDLE, GET_PRODUCT_HANDLES } from "./queries";
import type { ShopifyProduct, SiteProduct } from "./types";
import { products as localProducts } from "@/lib/data/products";
import { productsPt } from "@/lib/data/productsPt";

const COUNTRY = process.env.NEXT_PUBLIC_SHOPIFY_COUNTRY ?? "BR";
const LANGUAGE = process.env.NEXT_PUBLIC_SHOPIFY_LANGUAGE ?? "PT";

/** Cache tag so the Shopify webhook can revalidate product data on demand. */
export const PRODUCTS_TAG = "shopify-products";

/**
 * Fields Shopify has no native concept of (card accent colour, star rating) are
 * taken from the local catalog, keyed by handle. Everything commerce-related —
 * price, stock, images, title, description — comes from Shopify.
 */
function localFallback(handle: string) {
  const base = localProducts.find((p) => p.slug === handle);
  if (!base) return null;
  return { ...base, ...(productsPt[handle] ?? {}) };
}

function formatMoney(amount: number, currencyCode: string): string {
  const locale = currencyCode === "BRL" ? "pt-BR" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
}

/** Metafields may store lists as JSON arrays or newline-separated text. */
function parseList(value: string | undefined, fallback: string[]): string[] {
  if (!value) return fallback;
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.map(String);
  } catch {
    // not JSON — fall through to newline splitting
  }
  const lines = value.split("\n").map((l) => l.trim()).filter(Boolean);
  return lines.length ? lines : fallback;
}

export function mapProduct(p: ShopifyProduct): SiteProduct {
  const local = localFallback(p.handle);
  const variant = p.variants.nodes[0];

  const priceVal = Number(variant?.price.amount ?? p.priceRange.minVariantPrice.amount);
  const currencyCode = variant?.price.currencyCode ?? p.priceRange.minVariantPrice.currencyCode;

  const compareAtRaw = variant?.compareAtPrice?.amount;
  const compareAtVal = compareAtRaw ? Number(compareAtRaw) : 0;

  const images = p.images.nodes.map((i) => i.url);

  return {
    slug: p.handle,
    name: p.title,
    tagline: p.tagline?.value ?? local?.tagline ?? "",
    capacity: p.capacity?.value ?? local?.capacity ?? "",
    price: formatMoney(priceVal, currencyCode),
    priceVal,
    currencyCode,
    compareAtPrice:
      compareAtVal > priceVal ? formatMoney(compareAtVal, currencyCode) : null,
    badge: p.badge?.value ?? local?.badge ?? "",
    // Presentational only — Shopify has no native rating/review count.
    rating: local?.rating ?? 5,
    reviews: local?.reviews ?? 0,
    accent: local?.accent ?? "#C67C3B",
    bg: local?.bg ?? "#F5F0E8",
    description: p.description,
    descriptionHtml: p.descriptionHtml,
    includes: parseList(p.includes?.value, local?.includes ?? []),
    benefits: parseList(p.benefits?.value, local?.benefits ?? []),
    warranty: p.warranty?.value ?? local?.warranty ?? "",
    dimensionsNote: p.dimensionsNote?.value ?? local?.dimensionsNote ?? "",
    category: p.productType || local?.category || "",
    images: images.length ? images : (local?.images ?? []),
    variantId: variant?.id ?? "",
    // Live stock straight from Shopify.
    availableForSale: variant?.availableForSale ?? p.availableForSale,
    quantityAvailable: variant?.quantityAvailable ?? null,
  };
}

/** All products, cached with ISR and tagged for webhook revalidation. */
export async function getProducts(first = 100): Promise<SiteProduct[]> {
  const data = await shopifyFetch<{ products: { nodes: ShopifyProduct[] } }>(
    GET_PRODUCTS,
    { first, country: COUNTRY, language: LANGUAGE },
    { revalidate: 60, tags: [PRODUCTS_TAG] }
  );
  return data.products.nodes.map(mapProduct);
}

export async function getProduct(handle: string): Promise<SiteProduct | null> {
  const data = await shopifyFetch<{ product: ShopifyProduct | null }>(
    GET_PRODUCT_BY_HANDLE,
    { handle, country: COUNTRY, language: LANGUAGE },
    { revalidate: 60, tags: [PRODUCTS_TAG] }
  );
  return data.product ? mapProduct(data.product) : null;
}

/** Used by generateStaticParams to pre-render every product page. */
export async function getProductHandles(first = 250): Promise<string[]> {
  const data = await shopifyFetch<{ products: { nodes: { handle: string }[] } }>(
    GET_PRODUCT_HANDLES,
    { first },
    { revalidate: 60, tags: [PRODUCTS_TAG] }
  );
  return data.products.nodes.map((n) => n.handle);
}
