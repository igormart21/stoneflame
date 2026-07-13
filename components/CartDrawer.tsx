"use client";

import { useCart } from "@/lib/context/CartContext";
import { useT } from "@/lib/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingCart, Loader2 } from "lucide-react";
import Image from "next/image";

function formatMoney(amount: number, currencyCode: string) {
  const locale = currencyCode === "BRL" ? "pt-BR" : "en-US";
  return new Intl.NumberFormat(locale, { style: "currency", currency: currencyCode }).format(amount);
}

export default function CartDrawer() {
  const {
    cart,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    checkout,
    cartTotal,
    currencyCode,
    loading,
    error,
  } = useCart();
  const t = useT();

  const lines = cart?.lines ?? [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs"
          />

          {/* Drawer Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[440px] flex flex-col shadow-2xl border-l border-white/10"
            style={{
              background: "rgba(26, 18, 8, 0.96)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-copper" />
                <h2 className="font-display text-2xl text-offwhite font-light">
                  {t("cart.title")}
                </h2>
                {loading && <Loader2 className="w-4 h-4 text-copper animate-spin" />}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                data-cursor="hover"
                className="p-2 -mr-2 text-stone-light hover:text-offwhite transition-colors"
                aria-label={t("cart.close")}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {error && (
              <div className="mx-6 mt-4 p-3 rounded-sm bg-red-500/10 border border-red-500/30">
                <p className="font-body text-xs text-red-300">{error}</p>
              </div>
            )}

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
              {lines.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-65 py-12">
                  <ShoppingCart className="w-12 h-12 text-stone-light/40 mb-4" />
                  <p className="font-display text-xl text-offwhite">{t("cart.empty")}</p>
                  <p className="font-body text-xs text-stone-light mt-1">{t("cart.emptySub")}</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-6 font-body text-xs uppercase tracking-widest px-6 py-3 border border-copper text-copper hover:bg-copper hover:text-white transition-all duration-300"
                  >
                    {t("cart.continue")}
                  </button>
                </div>
              ) : (
                lines.map((line) => (
                  <div
                    key={line.id}
                    className="flex gap-4 p-4 border border-white/10 rounded-sm bg-white/[0.02] relative group"
                  >
                    {/* Product image (served from Shopify's CDN) */}
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-sm bg-[#F5F0E8]/90 relative"
                      style={{ border: "1px solid rgba(198,124,59,0.15)" }}
                    >
                      {line.image && (
                        <Image
                          src={line.image}
                          alt={line.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      )}
                    </div>

                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-display text-base text-offwhite leading-tight line-clamp-2">
                            {line.title}
                          </h3>
                          <button
                            onClick={() => removeFromCart(line.id)}
                            disabled={loading}
                            className="p-1 -mt-1 text-stone-light hover:text-red-400 transition-colors disabled:opacity-40"
                            aria-label={t("cart.remove")}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        {!line.availableForSale && (
                          <p className="font-body text-[10px] text-red-400 mt-1">
                            Fora de estoque
                          </p>
                        )}
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex items-end justify-between mt-2">
                        <div className="flex items-center border border-white/10 rounded-sm bg-black/20">
                          <button
                            onClick={() => updateQuantity(line.id, line.quantity - 1)}
                            disabled={loading}
                            className="p-1.5 text-stone-light hover:text-offwhite transition-colors disabled:opacity-40"
                            aria-label={t("cart.decrease")}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 font-body text-sm text-offwhite select-none">
                            {line.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(line.id, line.quantity + 1)}
                            disabled={loading}
                            className="p-1.5 text-stone-light hover:text-offwhite transition-colors disabled:opacity-40"
                            aria-label={t("cart.increase")}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span
                            className="font-display text-sm text-copper font-medium"
                            style={{
                              background: "linear-gradient(135deg,#A36D3A,#C67C3B)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          >
                            {formatMoney(line.lineTotal, line.currencyCode)}
                          </span>
                          {line.quantity > 1 && (
                            <p className="font-body text-[9px] text-stone-light mt-0.5">
                              ({formatMoney(line.price, line.currencyCode)} {t("cart.each")})
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {lines.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-black/40 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between font-body text-xs text-stone-light">
                    <span>{t("cart.subtotal")}</span>
                    <span>{formatMoney(cart?.subtotal ?? 0, currencyCode)}</span>
                  </div>
                  <div className="flex justify-between font-body text-xs text-stone-light">
                    <span>{t("cart.shipping")}</span>
                    <span className="text-copper">{t("cart.shippingValue")}</span>
                  </div>
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex justify-between items-baseline">
                    <span className="font-display text-lg text-offwhite font-light">
                      {t("cart.total")}
                    </span>
                    <span
                      className="font-display text-2xl text-copper font-medium"
                      style={{
                        background: "linear-gradient(135deg,#A36D3A,#C67C3B,#FF9A4A)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {formatMoney(cartTotal, currencyCode)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={checkout}
                  disabled={loading}
                  data-cursor="hover"
                  className="w-full py-4 bg-copper text-offwhite hover:bg-copper/95 transition-all duration-300 font-body text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ShoppingCart className="w-4 h-4" />
                  )}
                  {t("cart.checkout")}
                </button>
                <p className="text-[10px] text-center text-stone-light">
                  {t("cart.checkoutNote")}
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
