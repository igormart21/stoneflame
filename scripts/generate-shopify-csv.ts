/**
 * Generates a Shopify product-import CSV from lib/data/products.ts.
 *
 * Usage:
 *   npx tsx scripts/generate-shopify-csv.ts [--image-base <url>] [--qty <n>] [--out <file>]
 *
 * Image URLs default to the public GitHub raw host, which Shopify's importer
 * can fetch (the repository must be public).
 */
import { writeFileSync } from "node:fs";
import { products } from "../lib/data/products";
import { productsPt } from "../lib/data/productsPt";

const args = process.argv.slice(2);
const getArg = (name: string, fallback: string) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const IMAGE_BASE = getArg(
  "image-base",
  "https://raw.githubusercontent.com/igormart21/stoneflame/main/public"
);
const DEFAULT_QTY = getArg("qty", "10");
const OUT = getArg("out", "shopify-products.csv");
/** USD → BRL multiplier. The site currently shows PT prices at priceVal * 5. */
const RATE = Number(getArg("rate", "5"));

/** Portuguese product content (store is BR/PT). Falls back to English if missing. */
function localized(p: (typeof products)[number]) {
  return { ...p, ...(productsPt[p.slug] ?? {}) };
}

/** Shopify's product CSV columns (order matters for the importer). */
const COLUMNS = [
  "Handle",
  "Title",
  "Body (HTML)",
  "Vendor",
  "Type",
  "Tags",
  "Published",
  "Option1 Name",
  "Option1 Value",
  "Variant SKU",
  "Variant Inventory Tracker",
  "Variant Inventory Qty",
  "Variant Inventory Policy",
  "Variant Fulfillment Service",
  "Variant Price",
  "Variant Requires Shipping",
  "Variant Taxable",
  "Image Src",
  "Image Position",
  "Image Alt Text",
  "Gift Card",
  "SEO Title",
  "SEO Description",
  "Status",
];

/** RFC-4180 escaping: wrap in quotes and double any inner quotes. */
function esc(value: string | number | boolean = ""): string {
  const s = String(value);
  return `"${s.replace(/"/g, '""')}"`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Builds the rich (Portuguese) product description shown on the Shopify product page. */
function buildBodyHtml(p: ReturnType<typeof localized>): string {
  const parts: string[] = [];
  parts.push(`<p>${escapeHtml(p.description)}</p>`);

  if (p.includes?.length) {
    parts.push("<h3>O que está incluso</h3><ul>");
    p.includes.forEach((i) => parts.push(`<li>${escapeHtml(i)}</li>`));
    parts.push("</ul>");
  }
  if (p.benefits?.length) {
    parts.push("<h3>Por que pedra-sabão</h3><ul>");
    p.benefits.forEach((b) => parts.push(`<li>${escapeHtml(b)}</li>`));
    parts.push("</ul>");
  }
  if (p.capacity) {
    parts.push(`<p><strong>Especificações:</strong> ${escapeHtml(p.capacity)}</p>`);
  }
  if (p.warranty) {
    parts.push(`<p><strong>Garantia:</strong> ${escapeHtml(p.warranty)}</p>`);
  }
  if (p.dimensionsNote) {
    parts.push(`<p><em>${escapeHtml(p.dimensionsNote)}</em></p>`);
  }
  return parts.join("");
}

const imageUrl = (path: string) =>
  `${IMAGE_BASE}${path.split("/").map(encodeURIComponent).join("/")}`;

const sku = (slug: string) => slug.toUpperCase().replace(/-/g, "_");

const rows: string[] = [COLUMNS.map(esc).join(",")];

for (const base of products) {
  const p = localized(base);
  const images = p.images ?? [];
  const bodyHtml = buildBodyHtml(p);
  const priceBrl = (base.priceVal * RATE).toFixed(2);
  const tags = [p.category, p.badge, "pedra-sabao", "artesanal"]
    .filter(Boolean)
    .join(", ");

  // Row 1: the full product + its first image.
  rows.push(
    [
      esc(p.slug),
      esc(p.name),
      esc(bodyHtml),
      esc("Stoneflame"),
      esc(p.category),
      esc(tags),
      esc("TRUE"),
      esc("Title"),
      esc("Default Title"),
      esc(sku(base.slug)),
      esc("shopify"),
      esc(DEFAULT_QTY),
      esc("deny"),
      esc("manual"),
      esc(priceBrl),
      esc("TRUE"),
      esc("TRUE"),
      esc(images[0] ? imageUrl(images[0]) : ""),
      esc(images[0] ? 1 : ""),
      esc(p.name),
      esc("FALSE"),
      esc(p.name),
      esc(p.tagline),
      esc("active"),
    ].join(",")
  );

  // Extra images: handle + image columns only (Shopify attaches them to the product).
  images.slice(1).forEach((img, idx) => {
    const row = COLUMNS.map((col) => {
      if (col === "Handle") return esc(p.slug);
      if (col === "Image Src") return esc(imageUrl(img));
      if (col === "Image Position") return esc(idx + 2);
      if (col === "Image Alt Text") return esc(p.name);
      return esc("");
    });
    rows.push(row.join(","));
  });
}

writeFileSync(OUT, rows.join("\n") + "\n", "utf8");

const totalImages = products.reduce((n, p) => n + (p.images?.length ?? 0), 0);
const missingPt = products.filter((p) => !productsPt[p.slug]).map((p) => p.slug);

console.log(`✓ Wrote ${OUT}`);
console.log(`  Products: ${products.length}`);
console.log(`  Images:   ${totalImages}`);
console.log(`  Rows:     ${rows.length - 1}`);
console.log(`  Image base: ${IMAGE_BASE}`);
  console.log(`  Currency:   BRL (priceVal x ${RATE})`);
if (missingPt.length) {
  console.log(`  ⚠ Missing PT translation: ${missingPt.join(", ")}`);
}
