/**
 * Creates the product metafield definitions (with Storefront API read access)
 * and fills their values for every product, straight through the Admin API.
 *
 * This replaces the CSV import, which silently ignores metafield columns when
 * the definition key or type does not match exactly.
 *
 * Requires an Admin API token with `write_products` (and `read_products`):
 *   SHOPIFY_ADMIN_TOKEN=shpat_... npx tsx scripts/set-shopify-metafields.ts
 */
import { products } from "../lib/data/products";
import { productsPt } from "../lib/data/productsPt";

const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? "fcc3f6-xe.myshopify.com";
const TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
const API_VERSION = "2025-10";

if (!TOKEN) {
  console.error("✗ Missing SHOPIFY_ADMIN_TOKEN (Admin API token with write_products).");
  process.exit(1);
}

const endpoint = `https://${DOMAIN}/admin/api/${API_VERSION}/graphql.json`;

async function admin<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": TOKEN as string,
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = (await res.json()) as { data?: T; errors?: { message: string }[] };
  if (json.errors?.length) throw new Error(json.errors.map((e) => e.message).join("; "));
  if (!json.data) throw new Error("No data returned by the Admin API.");
  return json.data;
}

/** The seven fields the product page renders, mirrored into Shopify. */
const DEFINITIONS = [
  { name: "Tagline", key: "tagline", type: "single_line_text_field" },
  { name: "Capacidade", key: "capacity", type: "single_line_text_field" },
  { name: "Badge", key: "badge", type: "single_line_text_field" },
  { name: "Inclui", key: "includes", type: "list.single_line_text_field" },
  { name: "Benefícios", key: "benefits", type: "list.single_line_text_field" },
  { name: "Garantia", key: "warranty", type: "multi_line_text_field" },
  { name: "Nota de dimensões", key: "dimensions_note", type: "multi_line_text_field" },
];

const DEFINITION_CREATE = /* GraphQL */ `
  mutation CreateDefinition($definition: MetafieldDefinitionInput!) {
    metafieldDefinitionCreate(definition: $definition) {
      createdDefinition {
        id
        key
      }
      userErrors {
        field
        message
        code
      }
    }
  }
`;

const GET_PRODUCTS = /* GraphQL */ `
  query GetProducts($cursor: String) {
    products(first: 100, after: $cursor) {
      nodes {
        id
        handle
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

const METAFIELDS_SET = /* GraphQL */ `
  mutation SetMetafields($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
      }
      userErrors {
        field
        message
      }
    }
  }
`;

async function ensureDefinitions() {
  console.log("→ Creating metafield definitions (with Storefront API access)...");
  for (const d of DEFINITIONS) {
    const data = await admin<{
      metafieldDefinitionCreate: {
        createdDefinition: { key: string } | null;
        userErrors: { message: string; code: string }[];
      };
    }>(DEFINITION_CREATE, {
      definition: {
        name: d.name,
        namespace: "custom",
        key: d.key,
        type: d.type,
        ownerType: "PRODUCT",
        // This is what the CSV path kept getting wrong: without it the
        // Storefront API returns null for every metafield.
        access: { storefront: "PUBLIC_READ" },
      },
    });

    const { createdDefinition, userErrors } = data.metafieldDefinitionCreate;
    if (createdDefinition) {
      console.log(`  ✓ created custom.${d.key}`);
    } else if (userErrors.some((e) => e.code === "TAKEN")) {
      console.log(`  · custom.${d.key} already exists (leaving as is)`);
    } else {
      console.log(`  ✗ custom.${d.key}: ${userErrors.map((e) => e.message).join("; ")}`);
    }
  }
}

async function fetchProductIds(): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  let cursor: string | null = null;
  do {
    const data: {
      products: {
        nodes: { id: string; handle: string }[];
        pageInfo: { hasNextPage: boolean; endCursor: string };
      };
    } = await admin(GET_PRODUCTS, { cursor });
    data.products.nodes.forEach((n) => map.set(n.handle, n.id));
    cursor = data.products.pageInfo.hasNextPage ? data.products.pageInfo.endCursor : null;
  } while (cursor);
  return map;
}

async function setValues(ids: Map<string, string>) {
  console.log("\n→ Writing metafield values...");
  let ok = 0;
  let skipped = 0;

  for (const base of products) {
    const ownerId = ids.get(base.slug);
    if (!ownerId) {
      console.log(`  ⚠ ${base.slug}: not found in Shopify — skipped`);
      skipped++;
      continue;
    }

    const p = { ...base, ...(productsPt[base.slug] ?? {}) };
    const metafields = [
      { key: "tagline", type: "single_line_text_field", value: p.tagline },
      { key: "capacity", type: "single_line_text_field", value: p.capacity },
      { key: "badge", type: "single_line_text_field", value: p.badge },
      { key: "includes", type: "list.single_line_text_field", value: JSON.stringify(p.includes ?? []) },
      { key: "benefits", type: "list.single_line_text_field", value: JSON.stringify(p.benefits ?? []) },
      { key: "warranty", type: "multi_line_text_field", value: p.warranty },
      { key: "dimensions_note", type: "multi_line_text_field", value: p.dimensionsNote },
    ]
      .filter((m) => m.value)
      .map((m) => ({ ownerId, namespace: "custom", ...m }));

    const data = await admin<{
      metafieldsSet: { metafields: { key: string }[]; userErrors: { message: string }[] };
    }>(METAFIELDS_SET, { metafields });

    const errs = data.metafieldsSet.userErrors;
    if (errs.length) {
      console.log(`  ✗ ${base.slug}: ${errs.map((e) => e.message).join("; ")}`);
    } else {
      console.log(`  ✓ ${base.slug} (${data.metafieldsSet.metafields.length} campos)`);
      ok++;
    }
  }

  console.log(`\n✓ Done: ${ok} products updated, ${skipped} skipped.`);
}

async function main() {
  await ensureDefinitions();
  const ids = await fetchProductIds();
  console.log(`\n→ Found ${ids.size} products in Shopify.`);
  await setValues(ids);
}

main().catch((e) => {
  console.error("✗ Failed:", e.message);
  process.exit(1);
});
