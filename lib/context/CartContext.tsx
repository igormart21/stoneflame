"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  createCart,
  getCart,
  addCartLines,
  updateCartLine,
  removeCartLine,
} from "@/lib/shopify/cart";
import type { Cart } from "@/lib/shopify/types";

const CART_ID_KEY = "stoneflame_shopify_cart_id";

interface CartContextProps {
  cart: Cart | null;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  /** Adds a Shopify variant to the cart (creates the cart on first add). */
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  /** Skips the cart: buys this item alone, straight to Shopify checkout. */
  buyNow: (variantId: string, quantity?: number) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
  /** Sends the customer to Shopify's hosted checkout. */
  checkout: () => void;
  cartCount: number;
  cartTotal: number;
  currencyCode: string;
  loading: boolean;
  error: string | null;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Restore the Shopify cart from its saved id. Shopify carts expire (and are
  // consumed on checkout), so a missing cart just means "start fresh".
  useEffect(() => {
    const id = localStorage.getItem(CART_ID_KEY);
    if (!id) return;
    getCart(id)
      .then((c) => {
        if (c) setCart(c);
        else localStorage.removeItem(CART_ID_KEY);
      })
      .catch(() => localStorage.removeItem(CART_ID_KEY));
  }, []);

  const persist = useCallback((c: Cart) => {
    setCart(c);
    localStorage.setItem(CART_ID_KEY, c.id);
  }, []);

  /** Wraps a cart mutation with loading/error handling. */
  const run = useCallback(
    async (fn: () => Promise<Cart>) => {
      setLoading(true);
      setError(null);
      try {
        persist(await fn());
      } catch (e) {
        setError(e instanceof Error ? e.message : "Erro no carrinho");
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [persist]
  );

  const addToCart = useCallback(
    async (variantId: string, quantity = 1) => {
      const lines = [{ merchandiseId: variantId, quantity }];
      await run(async () => {
        const existingId = cart?.id ?? localStorage.getItem(CART_ID_KEY);
        if (existingId) {
          try {
            return await addCartLines(existingId, lines);
          } catch {
            // The stored cart expired or was completed — start a new one.
            localStorage.removeItem(CART_ID_KEY);
          }
        }
        return createCart(lines);
      });
      setIsOpen(true);
    },
    [cart, run]
  );

  /**
   * Buy Now creates a throwaway cart holding only this item and sends the
   * customer straight to checkout, leaving whatever is in their cart untouched.
   */
  const buyNow = useCallback(async (variantId: string, quantity = 1) => {
    setLoading(true);
    setError(null);
    try {
      const fresh = await createCart([{ merchandiseId: variantId, quantity }]);
      window.location.href = fresh.checkoutUrl;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro ao iniciar a compra");
      setLoading(false);
    }
    // On success we leave `loading` on — the page is navigating away.
  }, []);

  const updateQuantity = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;
      if (quantity <= 0) {
        await run(() => removeCartLine(cart.id, lineId));
        return;
      }
      await run(() => updateCartLine(cart.id, lineId, quantity));
    },
    [cart, run]
  );

  const removeFromCart = useCallback(
    async (lineId: string) => {
      if (!cart) return;
      await run(() => removeCartLine(cart.id, lineId));
    },
    [cart, run]
  );

  const checkout = useCallback(() => {
    if (cart?.checkoutUrl) window.location.href = cart.checkoutUrl;
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        setIsOpen,
        addToCart,
        buyNow,
        updateQuantity,
        removeFromCart,
        checkout,
        cartCount: cart?.totalQuantity ?? 0,
        cartTotal: cart?.total ?? 0,
        currencyCode: cart?.currencyCode ?? "BRL",
        loading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
