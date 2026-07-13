/** Raw shapes returned by the Storefront API. */

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width: number | null;
  height: number | null;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  sku: string | null;
  availableForSale: boolean;
  quantityAvailable: number | null;
  price: Money;
  compareAtPrice: Money | null;
}

interface Metafield {
  value: string;
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  tags: string[];
  availableForSale: boolean;
  priceRange: { minVariantPrice: Money };
  compareAtPriceRange: { minVariantPrice: Money };
  featuredImage: ShopifyImage | null;
  images: { nodes: ShopifyImage[] };
  variants: { nodes: ShopifyVariant[] };
  tagline: Metafield | null;
  capacity: Metafield | null;
  badge: Metafield | null;
  includes: Metafield | null;
  benefits: Metafield | null;
  warranty: Metafield | null;
  dimensionsNote: Metafield | null;
}

/** The normalized product the UI consumes. */
export interface SiteProduct {
  slug: string;
  name: string;
  tagline: string;
  capacity: string;
  /** Formatted for display, e.g. "R$ 3.245,00" */
  price: string;
  priceVal: number;
  currencyCode: string;
  compareAtPrice: string | null;
  badge: string;
  rating: number;
  reviews: number;
  accent: string;
  bg: string;
  description: string;
  descriptionHtml: string;
  includes: string[];
  benefits: string[];
  warranty: string;
  dimensionsNote: string;
  category: string;
  images: string[];
  /** Needed to add the item to a Shopify cart. */
  variantId: string;
  availableForSale: boolean;
  quantityAvailable: number | null;
}

export interface CartLine {
  id: string;
  quantity: number;
  variantId: string;
  handle: string;
  title: string;
  price: number;
  currencyCode: string;
  lineTotal: number;
  image: string | null;
  availableForSale: boolean;
  quantityAvailable: number | null;
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  subtotal: number;
  total: number;
  currencyCode: string;
  lines: CartLine[];
}
