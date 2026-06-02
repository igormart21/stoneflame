"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { getProductWhatsAppLink } from "@/lib/utils";

const products = [
  {
    slug: "vulcanic-grand-pot",
    name: "Vulcanic Grand Pot",
    tagline: "The centerpiece of fire cooking",
    capacity: "6L · Open Fire · Wood Stove",
    price: "From $480",
    badge: "Bestseller",
    rating: 5,
    reviews: 38,
    accent: "#C67C3B",
    bg: "#F9F4EE",
  },
  {
    slug: "stone-dutch-oven",
    name: "Stone Dutch Oven",
    tagline: "Centuries of technique in one vessel",
    capacity: "4L · Charcoal · Wood Stove",
    price: "From $360",
    badge: "Popular",
    rating: 5,
    reviews: 54,
    accent: "#A36D3A",
    bg: "#F5F0E8",
  },
  {
    slug: "artisan-skillet",
    name: "Artisan Stone Skillet",
    tagline: "Sear like nothing else",
    capacity: "28cm · Direct Flame · BBQ",
    price: "From $240",
    badge: "New",
    rating: 4,
    reviews: 22,
    accent: "#8B5E2A",
    bg: "#F2EDE4",
  },
  {
    slug: "volcanic-wok",
    name: "Volcanic Stone Wok",
    tagline: "High heat. Ancient technique",
    capacity: "5L · Open Fire · Gas Wok",
    price: "From $420",
    badge: "Limited",
    rating: 5,
    reviews: 17,
    accent: "#C67C3B",
    bg: "#FAF5EF",
  },
  {
    slug: "mini-cocotte",
    name: "Stone Mini Cocotte",
    tagline: "Individual. Intimate. Unforgettable",
    capacity: "600ml · Oven · BBQ",
    price: "From $160",
    badge: "Gift Idea",
    rating: 5,
    reviews: 41,
    accent: "#A36D3A",
    bg: "#F5F0E8",
  },
  {
    slug: "grand-brasier",
    name: "Grand Stone Brasier",
    tagline: "For the fearless entertainer",
    capacity: "8L · Pit Fire · Outdoor",
    price: "From $580",
    badge: "Masterwork",
    rating: 5,
    reviews: 12,
    accent: "#8B5E2A",
    bg: "#F2EDE4",
  },
];

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

function ProductCard({ p, index }: { p: typeof products[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.25,0.46,0.45,0.94] }}
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
      <div className="relative overflow-hidden" style={{ background: p.bg, height: 220 }}>

        {/* Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="font-body text-xs px-2.5 py-1 bg-white text-stone-dark font-medium"
            style={{ fontSize:"0.68rem", letterSpacing:"0.1em", boxShadow:"0 1px 4px rgba(0,0,0,0.08)" }}>
            {p.badge}
          </span>
        </div>

        {/* Product visual */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-8"
          animate={{ scale: hovered ? 1.05 : 1, y: hovered ? -4 : 0 }}
          transition={{ duration: 0.45, ease: [0.25,0.46,0.45,0.94] }}
        >
          {silhouettes[index]}
        </motion.div>

        {/* Bottom copper glow on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background:`linear-gradient(to top, ${p.accent}22, transparent)` }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />

        {/* WhatsApp quick-add */}
        <motion.a
          href={getProductWhatsAppLink(p.name)} target="_blank" rel="noopener noreferrer"
          data-cursor="hover"
          className="absolute bottom-3 left-3 right-3 py-2.5 text-center font-body text-xs tracking-widest uppercase bg-vulcanic text-offwhite"
          style={{ letterSpacing:"0.15em", fontSize:"0.68rem" }}
          initial={{ opacity:0, y:8 }} animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration:0.25 }}
        >
          Order via WhatsApp
        </motion.a>
      </div>

      {/* Info */}
      <div className="p-4 md:p-5">
        <div className="flex items-center gap-2 mb-2">
          <Stars count={p.rating}/>
          <span className="font-body text-xs text-stone" style={{ fontSize:"0.7rem" }}>({p.reviews})</span>
        </div>

        <h3 className="font-display text-xl text-stone-dark leading-tight mb-1 group-hover:text-bronze transition-colors duration-300">
          {p.name}
        </h3>

        <p className="font-body text-xs text-stone mb-3 leading-relaxed" style={{ fontSize:"0.75rem" }}>
          {p.tagline}
        </p>

        <p className="font-body text-xs text-stone/60 mb-4" style={{ fontSize:"0.7rem", letterSpacing:"0.05em" }}>
          {p.capacity}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-stone-border">
          <span className="font-display text-lg font-medium" style={{
            background:"linear-gradient(135deg,#A36D3A,#C67C3B)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>
            {p.price}
          </span>
          <a href={getProductWhatsAppLink(p.name)} target="_blank" rel="noopener noreferrer"
            data-cursor="hover"
            className="font-body text-xs tracking-wider uppercase px-3 py-1.5 border border-bronze text-bronze hover:bg-bronze hover:text-white transition-all duration-250"
            style={{ fontSize:"0.68rem", letterSpacing:"0.12em" }}>
            Inquire
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductCatalog() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="collection" className="bg-bg section-padding">
      <div className="container-xl">

        {/* Header — exactly like the reference image */}
        <div ref={headerRef} className="mb-10 md:mb-12">
          <motion.p
            className="font-body text-xs text-stone/60 mb-2"
            style={{ letterSpacing:"0.05em" }}
            initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ duration:0.5 }}
          >
            STONEFLAME Artisanal
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.div
              initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.7, ease:[0.25,0.46,0.45,0.94], delay:0.1 }}
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

            <motion.a
              href={getProductWhatsAppLink("full collection")} target="_blank" rel="noopener noreferrer"
              data-cursor="hover"
              className="flex items-center gap-2 font-body text-sm text-stone hover:text-bronze transition-colors duration-250"
              initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ delay:0.3 }}
            >
              View all pieces
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>

          {/* Divider */}
          <div className="mt-6 h-px" style={{ background:"linear-gradient(90deg,#C67C3B,#EDE7DC,transparent)" }}/>
        </div>

        {/* Grid — 2 cols on mobile, 3 on md, 4 on xl — just like the reference */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {products.map((p, i) => (
            <ProductCard key={p.slug} p={p} index={i}/>
          ))}

          {/* "View all" card — matches the reference's +N card pattern */}
          <motion.a
            href={getProductWhatsAppLink("full collection")} target="_blank" rel="noopener noreferrer"
            data-cursor="hover"
            initial={{ opacity:0, y:32 }} animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.6, delay:0.5 }}
            className="hidden xl:flex flex-col items-center justify-center bg-bg-secondary rounded-sm min-h-[320px] gap-4 group"
            style={{ border:"1px dashed #EDE7DC" }}
          >
            <div className="w-12 h-12 rounded-full border border-bronze/40 flex items-center justify-center group-hover:bg-bronze group-hover:border-bronze transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-bronze group-hover:text-white transition-colors">
                <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="font-display text-lg text-stone-dark group-hover:text-bronze transition-colors">View All</p>
              <p className="font-body text-xs text-stone mt-1">via WhatsApp</p>
            </div>
          </motion.a>
        </div>

        {/* Bottom note */}
        <motion.p
          className="mt-10 text-center font-body text-xs text-stone"
          style={{ letterSpacing:"0.06em" }}
          initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ delay:0.7 }}
        >
          All pieces come with a signed certificate of authenticity · Orders via WhatsApp only
        </motion.p>
      </div>
    </section>
  );
}
