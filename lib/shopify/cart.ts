import { shopifyFetch } from "./client";
import {
  CART_CREATE,
  CART_GET,
  CART_LINES_ADD,
  CART_LINES_REMOVE,
  CART_LINES_UPDATE,
} from "./queries";
import type { Cart } from "./types";

const COUNTRY = process.env.NEXT_PUBLIC_SHOPIFY_COUNTRY ?? "BR";
const LANGUAGE = process.env.NEXT_PUBLIC_SHOPIFY_LANGUAGE ?? "PT";

const ctx = { country: COUNTRY, language: LANGUAGE };
/** Cart data must never be cached — it is per-user and changes constantly. */
const NO_STORE = { noStore: true };

interface RawCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: { amount: string; currencyCode: string };
    totalAmount: { amount: string; currencyCode: string };
  };
  lines: {
    nodes: {
      id: string;
      quantity: number;
      cost: { totalAmount: { amount: string; currencyCode: string } };
      merchandise: {
        id: string;
        title: string;
        availableForSale: boolean;
        quantityAvailable: number | null;
        price: { amount: string; currencyCode: string };
        image: { url: string; altText: string | null } | null;
        product: { handle: string; title: string };
      };
    }[];
  };
}

function mapCart(c: RawCart): Cart {
  return {
    id: c.id,
    checkoutUrl: c.checkoutUrl,
    totalQuantity: c.totalQuantity,
    subtotal: Number(c.cost.subtotalAmount.amount),
    total: Number(c.cost.totalAmount.amount),
    currencyCode: c.cost.totalAmount.currencyCode,
    lines: c.lines.nodes.map((l) => ({
      id: l.id,
      quantity: l.quantity,
      variantId: l.merchandise.id,
      handle: l.merchandise.product.handle,
      title: l.merchandise.product.title,
      price: Number(l.merchandise.price.amount),
      currencyCode: l.merchandise.price.currencyCode,
      lineTotal: Number(l.cost.totalAmount.amount),
      image: l.merchandise.image?.url ?? null,
      availableForSale: l.merchandise.availableForSale,
      quantityAvailable: l.merchandise.quantityAvailable,
    })),
  };
}

/** Surfaces Shopify's userErrors (e.g. "out of stock") instead of failing silently. */
function unwrap(
  payload: { cart: RawCart | null; userErrors: { message: string }[] } | undefined,
  action: string
): Cart {
  if (payload?.userErrors?.length) {
    throw new Error(`${action}: ${payload.userErrors.map((e) => e.message).join("; ")}`);
  }
  if (!payload?.cart) throw new Error(`${action}: Shopify returned no cart.`);
  return mapCart(payload.cart);
}

export async function createCart(
  lines: { merchandiseId: string; quantity: number }[] = []
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartCreate: { cart: RawCart | null; userErrors: { message: string }[] };
  }>(CART_CREATE, { lines, ...ctx }, NO_STORE);
  return unwrap(data.cartCreate, "cartCreate");
}

/** Returns null when the cart expired or was already completed. */
export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: RawCart | null }>(
    CART_GET,
    { id: cartId, ...ctx },
    NO_STORE
  );
  return data.cart ? mapCart(data.cart) : null;
}

export async function addCartLines(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesAdd: { cart: RawCart | null; userErrors: { message: string }[] };
  }>(CART_LINES_ADD, { cartId, lines, ...ctx }, NO_STORE);
  return unwrap(data.cartLinesAdd, "cartLinesAdd");
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesUpdate: { cart: RawCart | null; userErrors: { message: string }[] };
  }>(CART_LINES_UPDATE, { cartId, lines: [{ id: lineId, quantity }], ...ctx }, NO_STORE);
  return unwrap(data.cartLinesUpdate, "cartLinesUpdate");
}

export async function removeCartLine(cartId: string, lineId: string): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesRemove: { cart: RawCart | null; userErrors: { message: string }[] };
  }>(CART_LINES_REMOVE, { cartId, lineIds: [lineId], ...ctx }, NO_STORE);
  return unwrap(data.cartLinesRemove, "cartLinesRemove");
}
