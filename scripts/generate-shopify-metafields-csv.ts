/**
 * Generates a Shopify CSV that fills the product metafields (custom.*) for the
 * existing catalog, so every field on the product page becomes editable in
 * Shopify instead of living in the code.
 *
 * Import it with "Overwrite any current products that have the same handle"
 * checked — only Handle/Title and the metafield columns are present, so no
 * other product data is touched.
 *
 * Usage: npx tsx scripts/generate-shopify-metafields-csv.ts
 */
import { writeFileSync } from "node:fs";
import { products } from "../lib/data/products";
import { productsPt } from "../lib/data/productsPt";

const OUT = "shopify-metafields.csv";


/** Column headers must carry the metafield type Shopify should create/expect. */
/**
 * Header names copied verbatim from Shopify's own product export. The importer
 * only recognises this exact shape — "Metafield: custom.key [type]" is silently
 * ignored. Note `capacidade`: that definition ended up with a Portuguese key.
 */
const COLUMNS = [
  "Handle",
  "Title",
  // Shopify reads each row as a variant update and rejects the file without
  // the option columns ("Product options input is required when updating variants").
  "Option1 Name",
  "Option1 Value",
  "Tagline (product.metafields.custom.tagline)",
  "Capacidade (product.metafields.custom.capacidade)",
  "Badge (product.metafields.custom.badge)",
  "Inclui (product.metafields.custom.includes)",
  "Benefícios (product.metafields.custom.benefits)",
  "Garantia (product.metafields.custom.warranty)",
  "Nota de dimensões (product.metafields.custom.dimensions_note)",
];

function esc(value: string | number = ""): string {
  return `"${String(value).replace(/"/g, '""')}"`;
}

/** Shopify expects list metafields as a JSON array string. */
const list = (items: string[] = []) => JSON.stringify(items);

const rows: string[] = [COLUMNS.map(esc).join(",")];

for (const base of products) {
  const p = { ...base, ...(productsPt[base.slug] ?? {}) };
  rows.push(
    [
      esc(base.slug),
      esc(p.name),
      esc("Title"),
      esc("Default Title"),
      esc(p.tagline),
      esc(p.capacity),
      esc(p.badge),
      esc(list(p.includes)),
      esc(list(p.benefits)),
      esc(p.warranty),
      esc(p.dimensionsNote),
    ].join(",")
  );
}

writeFileSync(OUT, rows.join("\n") + "\n", "utf8");
console.log(`✓ Wrote ${OUT}`);
console.log(`  Products: ${products.length}`);
console.log(`  Metafields per product: ${COLUMNS.length - 2}`);
