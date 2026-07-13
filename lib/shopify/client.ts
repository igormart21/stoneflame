/**
 * Minimal Shopify Storefront API (GraphQL) client.
 *
 * The Storefront token is public by design (read-only products + cart), so it is
 * safe to expose to the browser via NEXT_PUBLIC_*.
 */

const DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;
const API_VERSION = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION ?? "2025-10";

export const SHOPIFY_CONFIGURED = Boolean(DOMAIN && TOKEN);

const endpoint = () => `https://${DOMAIN}/api/${API_VERSION}/graphql.json`;

export class ShopifyError extends Error {}

interface RequestOptions {
  /** ISR: seconds before the cached response is considered stale. */
  revalidate?: number;
  /** Cache tags so a webhook can revalidate on demand. */
  tags?: string[];
  /** Skip the cache entirely (used for cart mutations). */
  noStore?: boolean;
}

export async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
  options: RequestOptions = {}
): Promise<T> {
  if (!SHOPIFY_CONFIGURED) {
    throw new ShopifyError(
      "Shopify is not configured. Set NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN."
    );
  }

  const { revalidate, tags, noStore } = options;

  const res = await fetch(endpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN as string,
    },
    body: JSON.stringify({ query, variables }),
    ...(noStore
      ? { cache: "no-store" as const }
      : { next: { revalidate: revalidate ?? 60, ...(tags ? { tags } : {}) } }),
  });

  if (!res.ok) {
    throw new ShopifyError(`Shopify request failed: ${res.status} ${res.statusText}`);
  }

  const json = (await res.json()) as {
    data?: T;
    errors?: { message: string }[];
  };

  if (json.errors?.length) {
    throw new ShopifyError(json.errors.map((e) => e.message).join("; "));
  }
  if (!json.data) {
    throw new ShopifyError("Shopify returned no data.");
  }

  return json.data;
}
