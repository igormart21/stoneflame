"use client";

import { useCart } from "@/lib/context/CartContext";
import { useT, useLanguage, formatCurrency } from "@/lib/i18n/LanguageContext";
import { getCartWhatsAppLink } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingCart } from "lucide-react";
import Image from "next/image";

const silhouettes = [
  // 0 – Grand Pot
  <svg key={0} viewBox="0 0 180 160" fill="none" className="w-full h-full">
    <ellipse cx="90" cy="148" rx="62" ry="9" fill="rgba(163,109,58,0.12)"/>
    <path d="M35 88V120C35 136 58 148 90 148C122 148 145 136 145 120V88C145 72 122 60 90 60C58 60 35 72 35 88Z" fill="#2B2118" stroke="#A36D3A" strokeWidth="1.2"/>
    <ellipse cx="90" cy="88" rx="55" ry="20" fill="#1a0c04" stroke="#A36D3A" strokeWidth="1.2"/>
    <ellipse cx="90" cy="86" rx="46" ry="16" fill="rgba(43,33,24,0.7)"/>
    <path d="M65 60V47C65 45 75 44 90 44C105 44 115 45 115 47V60" stroke="#A36D3A" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="90" cy="47" rx="16" ry="4" fill="#2B2118" stroke="#A36D3A" strokeWidth="1"/>
    <circle cx="90" cy="44" r="3.5" fill="#2B2118" stroke="#C67C3B" strokeWidth="1"/>
  </svg>,
  // 1 – Dutch Oven
  <svg key={1} viewBox="0 0 180 160" fill="none" className="w-full h-full">
    <ellipse cx="90" cy="150" rx="58" ry="8" fill="rgba(163,109,58,0.12)"/>
    <path d="M38 92V118C38 132 60 142 90 142C120 142 142 132 142 118V92C142 78 120 68 90 68C60 68 38 78 38 92Z" fill="#2B2118" stroke="#A36D3A" strokeWidth="1.2"/>
    <ellipse cx="90" cy="92" rx="52" ry="18" fill="#1a0c04" stroke="#A36D3A" strokeWidth="1.2"/>
    <ellipse cx="90" cy="90" rx="43" ry="14" fill="rgba(43,33,24,0.6)"/>
    <circle cx="90" cy="74" r="7" fill="#2B2118" stroke="#C67C3B" strokeWidth="1.2"/>
  </svg>,
  // 2 – Skillet
  <svg key={2} viewBox="0 0 210 130" fill="none" className="w-full h-full">
    <ellipse cx="95" cy="118" rx="65" ry="9" fill="rgba(163,109,58,0.12)"/>
    <ellipse cx="95" cy="88" rx="65" ry="25" fill="#2B2118" stroke="#A36D3A" strokeWidth="1.2"/>
    <ellipse cx="95" cy="86" rx="55" ry="20" fill="#1a0c04" stroke="#A36D3A" strokeWidth="0.8"/>
    <path d="M160 88H196C198 88 198 92 196 92H160" fill="#2B2118" stroke="#A36D3A" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
  // 3 – Wok
  <svg key={3} viewBox="0 0 180 160" fill="none" className="w-full h-full">
    <ellipse cx="90" cy="150" rx="68" ry="9" fill="rgba(163,109,58,0.12)"/>
    <path d="M22 98C22 68 52 42 90 42C128 42 158 68 158 98C158 118 135 135 90 135C45 135 22 118 22 98Z" fill="#2B2118" stroke="#A36D3A" strokeWidth="1.2"/>
    <ellipse cx="90" cy="98" rx="40" ry="14" fill="rgba(198,124,59,0.06)"/>
  </svg>,
  // 4 – Mini Cocotte
  <svg key={4} viewBox="0 0 140 160" fill="none" className="w-full h-full">
    <ellipse cx="70" cy="148" rx="40" ry="7" fill="rgba(163,109,58,0.12)"/>
    <path d="M28 82V106C28 120 46 132 70 132C94 132 112 120 112 106V82C112 68 94 56 70 56C46 56 28 68 28 82Z" fill="#2B2118" stroke="#A36D3A" strokeWidth="1.2"/>
    <ellipse cx="70" cy="82" rx="42" ry="16" fill="#1a0c04" stroke="#A36D3A" strokeWidth="1.2"/>
    <circle cx="70" cy="66" r="6" fill="#2B2118" stroke="#C67C3B" strokeWidth="1.2"/>
  </svg>,
  // 5 – Grand Brasier
  <svg key={5} viewBox="0 0 210 140" fill="none" className="w-full h-full">
    <ellipse cx="105" cy="130" rx="80" ry="9" fill="rgba(163,109,58,0.12)"/>
    <path d="M26 82V108C26 122 60 134 105 134C150 134 184 122 184 108V82C184 68 150 56 105 56C60 56 26 68 26 82Z" fill="#2B2118" stroke="#A36D3A" strokeWidth="1.2"/>
    <ellipse cx="105" cy="82" rx="79" ry="25" fill="#1a0c04" stroke="#A36D3A" strokeWidth="1.2"/>
    <ellipse cx="105" cy="80" rx="66" ry="20" fill="rgba(43,33,24,0.6)"/>
  </svg>,
];

export default function CartDrawer() {
  const {
    cart,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartCount,
  } = useCart();
  const t = useT();
  const { lang } = useLanguage();

  const handleCheckout = () => {
    const link = getCartWhatsAppLink(cart, cartTotal, lang);
    window.open(link, "_blank");
  };

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

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-65 py-12">
                  <ShoppingCart className="w-12 h-12 text-stone-light/40 mb-4" />
                  <p className="font-display text-xl text-offwhite">
                    {t("cart.empty")}
                  </p>
                  <p className="font-body text-xs text-stone-light mt-1">
                    {t("cart.emptySub")}
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-6 font-body text-xs uppercase tracking-widest px-6 py-3 border border-copper text-copper hover:bg-copper hover:text-white transition-all duration-300"
                  >
                    {t("cart.continue")}
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.slug}
                    className="flex gap-4 p-4 border border-white/10 rounded-sm bg-white/[0.02] relative group"
                  >
                    {/* Product Image Box */}
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-sm bg-[#F5F0E8]/90 relative"
                      style={{ border: "1px solid rgba(198,124,59,0.15)" }}
                    >
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-2">
                          {silhouettes[item.index]}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-display text-base text-offwhite leading-tight truncate">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeFromCart(item.slug)}
                            className="p-1 -mt-1 text-stone-light hover:text-red-400 transition-colors"
                            aria-label={t("cart.remove")}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p
                          className="font-body text-[10px] text-stone-light mt-0.5"
                          style={{ letterSpacing: "0.05em" }}
                        >
                          {item.capacity}
                        </p>
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex items-end justify-between mt-2">
                        {/* Selector */}
                        <div className="flex items-center border border-white/10 rounded-sm bg-black/20">
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.quantity - 1)
                            }
                            className="p-1.5 text-stone-light hover:text-offwhite transition-colors"
                            aria-label={t("cart.decrease")}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 font-body text-sm text-offwhite select-none">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.slug, item.quantity + 1)
                            }
                            className="p-1.5 text-stone-light hover:text-offwhite transition-colors"
                            aria-label={t("cart.increase")}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span
                            className="font-display text-sm text-copper font-medium"
                            style={{
                              background:
                                "linear-gradient(135deg,#A36D3A,#C67C3B)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          >
                            {formatCurrency(item.priceVal * item.quantity, lang)}
                          </span>
                          {item.quantity > 1 && (
                            <p className="font-body text-[9px] text-stone-light mt-0.5">
                              ({formatCurrency(item.priceVal, lang)} {t("cart.each")})
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
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-black/40 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between font-body text-xs text-stone-light">
                    <span>{t("cart.subtotal")}</span>
                    <span>{formatCurrency(cartTotal, lang)}</span>
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
                        background:
                          "linear-gradient(135deg,#A36D3A,#C67C3B,#FF9A4A)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {formatCurrency(cartTotal, lang)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  data-cursor="hover"
                  className="w-full py-4 bg-copper text-offwhite hover:bg-copper/95 transition-all duration-300 font-body text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingCart className="w-4 h-4" /> {t("cart.checkout")}
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
