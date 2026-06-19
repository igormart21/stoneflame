"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLocalizedProduct } from "@/lib/data/useProducts";
import { useCart } from "@/lib/context/CartContext";
import { useT, useLanguage, formatCurrency } from "@/lib/i18n/LanguageContext";
import { ChevronLeft, Plus, Minus, Shield, Sparkles, Heart, Star, Truck, Award, ShoppingBag } from "lucide-react";

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

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const { addToCart } = useCart();
  const t = useT();
  const { lang } = useLanguage();

  const { product, index: productIndex } = useLocalizedProduct(slug);

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"details" | "benefits" | "warranty">("details");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center">
        <h1 className="font-display text-3xl mb-4">{t("product.notFound")}</h1>
        <button
          onClick={() => router.push("/")}
          className="font-body text-xs uppercase tracking-widest px-6 py-3 bg-vulcanic text-offwhite"
        >
          {t("product.backHome")}
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add multiple quantities by loop or modify addToCart to accept quantity.
    // In our CartContext addToCart adds 1. Let's repeat adding based on chosen quantity.
    for (let i = 0; i < quantity; i++) {
      addToCart({
        slug: product.slug,
        name: product.name,
        priceVal: product.priceVal,
        priceStr: product.price,
        capacity: product.capacity,
        index: productIndex,
        image: product.images?.[0],
      });
    }
    // Optional: reset page quantity to 1 after adding.
    setQuantity(1);
  };

  const formattedInstallments = formatCurrency(product.priceVal / 4, lang, false, true);
  const monthlyPlan = formatCurrency(product.priceVal / 12, lang, false, true);

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
                  /* Floating image simulation with parallax effect for silhouettes */
                  <motion.div 
                    className="w-full h-full max-w-[340px] md:max-w-[420px] flex items-center justify-center p-12 md:p-16"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {silhouettes[productIndex]}
                  </motion.div>
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
                    {formatCurrency(product.priceVal, lang)}
                  </span>
                  <span className="font-body text-xs text-stone-light">{lang === "pt" ? "BRL" : "USD"}</span>
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
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="p-3.5 text-stone hover:text-copper transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add To Cart */}
                <button
                  onClick={handleAddToCart}
                  data-cursor="hover"
                  className="flex-1 py-4 bg-copper text-offwhite hover:bg-copper/95 transition-all duration-300 font-body text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-3 shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" /> {t("product.addToCart")}
                </button>
              </div>

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
    </>
  );
}
