"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { getProductWhatsAppLink } from "@/lib/utils";
import { useCart } from "@/lib/context/CartContext";
import { products } from "@/lib/data/products";
import Link from "next/link";

function Stars({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: total }).map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" className="w-3 h-3"
          fill={i < count ? "#C67C3B" : "#E8E0D5"}>
          <path d="M6 0.5L7.35 4.15H11.27L8.19 6.41L9.54 10.07L6.46 7.81L3.38 10.07L4.73 6.41L1.65 4.15H5.57L6 0.5Z"/>
        </svg>
      ))}
    </div>
  );
}

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

interface ProductCardProps {
  p: typeof products[0];
  index: number;
}

function ProductCard({ p, index }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      slug: p.slug,
      name: p.name,
      priceVal: p.priceVal,
      priceStr: p.price,
      capacity: p.capacity,
      index: index,
      image: p.images?.[0],
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-card rounded-sm overflow-hidden group"
      style={{
        boxShadow: hovered
          ? "0 8px 32px rgba(26,18,8,0.12), 0 2px 8px rgba(26,18,8,0.06)"
          : "0 1px 4px rgba(26,18,8,0.06), 0 2px 12px rgba(26,18,8,0.04)",
        transition: "box-shadow 0.35s ease",
      }}
      data-cursor="hover"
    >
      {/* Image area */}
      <Link href={`/product/${p.slug}`} className="block relative overflow-hidden aspect-square" style={{ background: p.bg }}>
        {/* Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="font-body text-xs px-2.5 py-1 bg-white text-stone-dark font-medium"
            style={{ fontSize: "0.68rem", letterSpacing: "0.1em", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
            {p.badge}
          </span>
        </div>

        {/* Product visual */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: hovered ? 1.05 : 1, y: hovered ? -4 : 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {p.images && p.images.length > 0 ? (
            <div className="w-full h-full relative">
              <Image
                src={p.images[0]}
                alt={p.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ) : (
            silhouettes[index]
          )}
        </motion.div>

        {/* Bottom copper glow on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${p.accent}22, transparent)` }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />

        {/* Add to Cart quick-add — always visible on touch, hover-reveal on desktop */}
        <button
          onClick={handleAddToCart}
          data-cursor="hover"
          className="absolute bottom-3 left-3 right-3 py-2.5 text-center font-body text-xs tracking-widest uppercase bg-vulcanic text-offwhite border-none cursor-pointer z-10 transition-all duration-250 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0"
          style={{ letterSpacing: "0.15em", fontSize: "0.68rem" }}
        >
          Add to Cart
        </button>
      </Link>

      {/* Info */}
      <div className="p-4 md:p-5">
        <div className="flex items-center gap-2 mb-2">
          <Stars count={p.rating}/>
          <span className="font-body text-xs text-stone" style={{ fontSize: "0.7rem" }}>({p.reviews})</span>
        </div>

        <Link href={`/product/${p.slug}`} className="block group">
          <h3 className="font-display text-base md:text-xl text-stone-dark leading-tight mb-1 group-hover:text-bronze transition-colors duration-300">
            {p.name}
          </h3>
        </Link>

        <p className="font-body text-xs text-stone mb-3 leading-relaxed" style={{ fontSize: "0.75rem" }}>
          {p.tagline}
        </p>

        <p className="font-body text-xs text-stone/60 mb-4" style={{ fontSize: "0.7rem", letterSpacing: "0.05em" }}>
          {p.capacity}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-stone-border">
          <span className="font-display text-lg font-medium" style={{
            background: "linear-gradient(135deg,#A36D3A,#C67C3B)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            {p.price}
          </span>
          <Link
            href={`/product/${p.slug}`}
            data-cursor="hover"
            className="font-body text-xs tracking-wider uppercase px-4 py-2 border border-bronze text-bronze hover:bg-bronze hover:text-white transition-all duration-250 text-center"
            style={{ fontSize: "0.68rem", letterSpacing: "0.12em" }}
          >
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

interface ProductCatalogProps {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

export default function ProductCatalog({ activeCategory, setActiveCategory }: ProductCatalogProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true });
  const pathname = usePathname();
  const isProductsPage = pathname === "/products";

  // Filter products based on category
  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  // Track original index for each product to map the correct SVG silhouette
  const filteredWithIndex = filteredProducts.map((p) => {
    const originalIndex = products.findIndex((op) => op.slug === p.slug);
    return { product: p, originalIndex };
  });

  return (
    <section id="collection" className="bg-bg section-padding">
      <div className="container-xl">
        {/* Header — exactly like the reference image */}
        <div ref={headerRef} className="mb-10 md:mb-12">
          <motion.p
            className="font-body text-xs text-stone/60 mb-2"
            style={{ letterSpacing: "0.05em" }}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
          >
            STONEFLAME Artisanal
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            >
              <div className="flex items-baseline gap-3">
                <h2 className="font-display font-light text-4xl md:text-5xl text-stone-dark leading-none">
                  Bestselling
                </h2>
                <span className="font-body text-sm text-stone/50 tracking-widest">×</span>
                <h2 className="font-display font-light text-4xl md:text-5xl text-bronze leading-none">
                  Pieces
                </h2>
              </div>
            </motion.div>

            {!isProductsPage ? (
              <motion.a
                href="/products"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="flex items-center gap-2 font-body text-sm text-stone hover:text-bronze transition-colors duration-250"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              >
                View all pieces
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            ) : (
              <motion.button
                onClick={() => {
                  setActiveCategory(null);
                  const element = document.getElementById("collection");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                data-cursor="hover"
                className="flex items-center gap-2 font-body text-sm text-stone hover:text-bronze transition-colors duration-250"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              >
                View all pieces
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            )}
          </div>

          {/* Divider */}
          <div className="mt-6 h-px" style={{ background: "linear-gradient(90deg,#C67C3B,#EDE7DC,transparent)" }}/>
        </div>

        {/* Dynamic fallbacks when no items match the active category */}
        {filteredWithIndex.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-bg-secondary border border-stone-border/40 rounded-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-stone/40 mb-4">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" strokeLinecap="round"/>
            </svg>
            <h3 className="font-display text-2xl text-stone-dark mb-2">No pieces found in this category</h3>
            <p className="font-body text-sm text-stone mb-6 max-w-md">
              We are currently crafting new items for this collection. Please check our other collections or click below to view all items.
            </p>
            <button
              onClick={() => setActiveCategory(null)}
              data-cursor="hover"
              className="font-body text-xs font-semibold tracking-widest uppercase px-6 py-3 bg-bronze text-white hover:bg-bronze/90 transition-colors rounded-xs shadow-md"
            >
              Show all pieces
            </button>
          </div>
        ) : (
          /* Grid — 2 cols on mobile, 3 on md, 4 on xl — just like the reference */
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {filteredWithIndex.map(({ product, originalIndex }) => (
              <ProductCard key={product.slug} p={product} index={originalIndex}/>
            ))}

            {/* Interactive secondary card */}
            {activeCategory ? (
              <motion.button
                onClick={() => setActiveCategory(null)}
                data-cursor="hover"
                initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-center justify-center bg-bg-secondary rounded-sm min-h-[220px] md:min-h-[320px] gap-4 group cursor-pointer w-full text-center"
                style={{ border: "1px dashed #EDE7DC" }}
              >
                <div className="w-12 h-12 rounded-full border border-bronze/40 flex items-center justify-center group-hover:bg-bronze group-hover:border-bronze transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-bronze group-hover:text-white transition-colors">
                    <path d="M4 4h16v16H4z M9 9l6 6M15 9l-6 6" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-center p-2">
                  <p className="font-display text-lg text-stone-dark group-hover:text-bronze transition-colors">Clear Filter</p>
                  <p className="font-body text-xs text-stone mt-1">Show all {products.length} products</p>
                </div>
              </motion.button>
            ) : !isProductsPage ? (
              <motion.a
                href="/products"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-center justify-center bg-bg-secondary rounded-sm min-h-[320px] gap-4 group"
                style={{ border: "1px dashed #EDE7DC" }}
              >
                <div className="w-12 h-12 rounded-full border border-bronze/40 flex items-center justify-center group-hover:bg-bronze group-hover:border-bronze transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-bronze group-hover:text-white transition-colors">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-center p-2">
                  <p className="font-display text-lg text-stone-dark group-hover:text-bronze transition-colors">View All</p>
                  <p className="font-body text-xs text-stone mt-1">in new tab</p>
                </div>
              </motion.a>
            ) : (
              <motion.a
                href={getProductWhatsAppLink("custom design request")}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-center justify-center bg-bg-secondary rounded-sm min-h-[320px] gap-4 group"
                style={{ border: "1px dashed #EDE7DC" }}
              >
                <div className="w-12 h-12 rounded-full border border-bronze/40 flex items-center justify-center group-hover:bg-bronze group-hover:border-bronze transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-bronze group-hover:text-white transition-colors">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-center p-2">
                  <p className="font-display text-lg text-stone-dark group-hover:text-bronze transition-colors">Custom Size?</p>
                  <p className="font-body text-xs text-stone mt-1">Order via WhatsApp</p>
                </div>
              </motion.a>
            )}
          </div>
        )}

        {/* Bottom note */}
        <motion.p
          className="mt-10 text-center font-body text-xs text-stone"
          style={{ letterSpacing: "0.06em" }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
        >
          All pieces come with a signed certificate of authenticity · Orders via WhatsApp only
        </motion.p>
      </div>
    </section>
  );
}
