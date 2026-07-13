"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { WhatsAppButton } from "@/components/ClientOnlyComponents";
import { useCart } from "@/lib/context/CartContext";
import { useT } from "@/lib/i18n/LanguageContext";
import { getProductWhatsAppLink } from "@/lib/utils";
import type { SiteProduct } from "@/lib/shopify/types";
import { ChevronLeft, Plus, Minus, Shield, Sparkles, Star, Truck, Award, ShoppingBag, Loader2, MessageCircle } from "lucide-react";



export default function ProductDetail({ product }: { product: SiteProduct }) {
  const router = useRouter();
  const { addToCart, loading } = useCart();
  const t = useT();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"details" | "benefits" | "warranty">("details");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const soldOut = !product.availableForSale;
  /** Shopify caps the line at the stock it has; don't let the user exceed it. */
  const maxQty = product.quantityAvailable ?? 99;

  const handleAddToCart = async () => {
    if (soldOut || !product.variantId) return;
    await addToCart(product.variantId, quantity);
    setQuantity(1);
  };

  const money = (v: number) =>
    new Intl.NumberFormat(product.currencyCode === "BRL" ? "pt-BR" : "en-US", {
      style: "currency",
      currency: product.currencyCode,
    }).format(v);

  const formattedInstallments = money(product.priceVal / 4);
  const monthlyPlan = money(product.priceVal / 12);

  return (
    <>
      <Navigation />
      
      <main className="bg-bg min-h-screen pt-28 pb-16 md:pt-36">
        <div className="container-xl">
          
          {/* Back button */}
          <button 
            onClick={() => router.push("/")}
            data-cursor="hover"
            className="flex items-center gap-2 font-body text-xs text-stone hover:text-copper transition-colors duration-250 mb-8 uppercase tracking-widest"
          >
            <ChevronLeft className="w-4 h-4" /> {t("product.backCollection")}
          </button>

          {/* Product grid split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT: Image Gallery */}
            <div className="lg:col-span-6 flex flex-col items-center w-full">
              <div 
                className="w-full relative aspect-square rounded-sm flex items-center justify-center select-none shadow-sm border border-stone-border/40 overflow-hidden"
                style={{ background: product.bg }}
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-body text-[10px] uppercase tracking-widest bg-white text-stone-dark px-3 py-1 font-semibold shadow-xs">
                    {product.badge}
                  </span>
                </div>
                
                {product.images && product.images.length > 0 ? (
                  <div className="w-full h-full relative p-6">
                    <Image
                      src={product.images[activeImageIndex]}
                      alt={product.name}
                      fill
                      priority
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone/30 font-display text-xl">
                    {product.name}
                  </div>
                )}
              </div>

              {/* Thumbnails Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 w-full mt-3 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-stone/20 justify-start md:justify-center">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      data-cursor="hover"
                      className={`relative w-20 h-20 flex-shrink-0 border rounded-sm overflow-hidden bg-white transition-all duration-200 ${
                        activeImageIndex === idx 
                          ? "border-copper shadow-md scale-95" 
                          : "border-stone-border/60 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-contain p-1"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Badges details underneath the image */}
              <div className="grid grid-cols-3 gap-3 w-full mt-4">
                <div className="flex flex-col items-center justify-center p-4 bg-card border border-stone-border/40 rounded-sm text-center">
                  <Truck className="w-5 h-5 text-copper mb-2" />
                  <span className="font-body text-[10px] font-semibold text-stone-dark uppercase tracking-wider">{t("product.secureShipping")}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-card border border-stone-border/40 rounded-sm text-center">
                  <Award className="w-5 h-5 text-copper mb-2" />
                  <span className="font-body text-[10px] font-semibold text-stone-dark uppercase tracking-wider">{t("product.artisanalCure")}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-card border border-stone-border/40 rounded-sm text-center">
                  <Shield className="w-5 h-5 text-copper mb-2" />
                  <span className="font-body text-[10px] font-semibold text-stone-dark uppercase tracking-wider">{t("product.naturalStone")}</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Product Buy Box */}
            <div className="lg:col-span-6 space-y-6 lg:pl-4">
              
              {/* Product Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3.5 h-3.5 ${i < product.rating ? "text-copper fill-copper" : "text-stone-border"}`} 
                      />
                    ))}
                  </div>
                  <span className="font-body text-xs text-stone">({product.reviews} {t("product.reviews")})</span>
                </div>

                <h1 className="font-display font-light text-4xl md:text-5xl text-stone-dark leading-tight">
                  {product.name}
                </h1>
                
                <p className="font-body text-stone-light/80 italic text-sm md:text-base leading-relaxed">
                  "{product.tagline}"
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-stone-border/40 w-full" />

              {/* Price & Installments Info */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span 
                    className="font-display text-3xl md:text-4xl text-copper font-medium"
                    style={{
                      background: "linear-gradient(135deg,#A36D3A,#C67C3B,#FF9A4A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {product.price}
                  </span>
                  <span className="font-body text-xs text-stone-light">{product.currencyCode}</span>
                  {product.compareAtPrice && (
                    <span className="font-body text-sm text-stone-light line-through">
                      {product.compareAtPrice}
                    </span>
                  )}
                </div>

                {/* Live stock straight from Shopify */}
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${soldOut ? "bg-red-500" : "bg-green-600"}`}
                  />
                  <span className="font-body text-xs text-stone">
                    {soldOut
                      ? t("product.soldOut")
                      : product.quantityAvailable != null && product.quantityAvailable <= 5
                        ? t("product.lowStock").replace("{n}", String(product.quantityAvailable))
                        : t("product.inStock")}
                  </span>
                </div>

                <div className="space-y-1.5 pl-1.5 border-l-2 border-copper/30">
                  <p className="font-body text-xs text-stone leading-relaxed">
                    {t("product.shippingNote")}
                  </p>
                  <p
                    className="font-body text-xs text-stone-light leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: t("product.installments")
                        .replace("{a}", `<strong class="text-stone-dark">${formattedInstallments}</strong>`)
                        .replace("{b}", `<strong class="text-stone-dark">${monthlyPlan}</strong>`),
                    }}
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-stone-border/40 w-full" />

              {/* Quantity Selector and CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                {/* Selector */}
                <div className="flex items-center border border-stone-border rounded-sm bg-card justify-between sm:justify-start">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="p-3.5 text-stone hover:text-copper transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-body text-sm text-stone-dark font-medium select-none text-center min-w-[50px]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => Math.min(maxQty, prev + 1))}
                    disabled={quantity >= maxQty}
                    className="p-3.5 text-stone hover:text-copper transition-colors disabled:opacity-30"
                    aria-label={t("product.increase")}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add To Cart */}
                <button
                  onClick={handleAddToCart}
                  disabled={soldOut || loading}
                  data-cursor="hover"
                  className={`flex-1 py-4 transition-all duration-300 font-body text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-3 shadow-lg ${
                    soldOut
                      ? "bg-stone/60 text-offwhite cursor-not-allowed"
                      : "bg-copper text-offwhite hover:bg-copper/95 disabled:opacity-60"
                  }`}
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ShoppingBag className="w-4 h-4" />
                  )}
                  {soldOut ? t("product.soldOut") : t("product.addToCart")}
                </button>
              </div>

              {/* Support CTA — highest-intent moment: the customer is deciding */}
              <a
                href={getProductWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="flex items-center justify-center gap-2.5 w-full py-3 border border-stone-border rounded-sm text-stone hover:border-[#25D366] hover:text-[#128C7E] transition-all duration-300 font-body text-xs"
              >
                <MessageCircle className="w-4 h-4" />
                {t("product.supportCta")}
              </a>

              {/* Details and Tabs section */}
              <div className="pt-4 space-y-4">
                {/* Tab buttons */}
                <div className="flex border-b border-stone-border/40 gap-6">
                  {([
                    { id: "details", label: t("product.tabDetails") },
                    { id: "benefits", label: t("product.tabBenefits") },
                    { id: "warranty", label: t("product.tabWarranty") }
                  ] as const).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-2.5 font-body text-xs uppercase tracking-wider transition-all border-b-2 relative ${
                        activeTab === tab.id 
                          ? "text-copper border-copper font-semibold" 
                          : "text-stone border-transparent hover:text-stone-dark"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab contents */}
                <div className="pt-2 text-stone text-xs md:text-sm font-body leading-relaxed space-y-3 min-h-[160px]">
                  {activeTab === "details" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="space-y-4"
                    >
                      <p className="text-stone-light font-light leading-relaxed">
                        {product.description}
                      </p>
                      <div>
                        <strong className="block font-semibold text-stone-dark mb-2 uppercase tracking-wide text-[10px] text-copper">{t("product.includes")}</strong>
                        <ul className="list-disc list-inside space-y-1 text-stone-light">
                          {product.includes.map((inc, i) => (
                            <li key={i}>{inc}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "benefits" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <strong className="block font-semibold text-stone-dark mb-1 uppercase tracking-wide text-[10px] text-copper">{t("product.benefitsTitle")}</strong>
                      <ul className="space-y-2.5">
                        {product.benefits.map((ben, i) => (
                          <li key={i} className="flex gap-2.5 items-start text-stone-light">
                            <Sparkles className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === "warranty" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4 text-stone-light"
                    >
                      <div>
                        <strong className="block font-semibold text-stone-dark mb-1 uppercase tracking-wide text-[10px] text-copper">{t("product.warrantyTitle")}</strong>
                        <p>{product.warranty}</p>
                      </div>
                      <div className="p-4 bg-bg-secondary rounded-sm border border-stone-border/30">
                        <strong className="block font-semibold text-stone-dark mb-1 uppercase tracking-wide text-[10px]">{t("product.processNote")}</strong>
                        <p className="text-[11px] italic leading-relaxed">
                          {product.dimensionsNote}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
