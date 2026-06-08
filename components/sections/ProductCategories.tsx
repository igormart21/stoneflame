"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const categories = [
  {
    slug: "frying-pans",
    enName: "Frying Pans",
    ptName: "Frigideiras",
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-copper transition-colors" fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="45" cy="54" rx="26" ry="10" />
        <path d="M69 51 L92 32" strokeLinecap="round" strokeWidth="1.5" />
        <ellipse cx="45" cy="52" rx="22" ry="8" strokeDasharray="3 2" opacity="0.6" />
      </svg>
    ),
  },
  {
    slug: "pots",
    enName: "Artisanal Pots",
    ptName: "Panelas",
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-copper transition-colors" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M25 45h50v25c0 8-12 12-25 12S25 78 25 70V45z" />
        <ellipse cx="50" cy="45" rx="25" ry="8" fill="rgba(198,124,59,0.04)" />
        <path d="M16 48h9M75 48h9" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M40 37c0 0 5-5 10-5s10 5 10 5" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: "sets",
    enName: "Cookware Sets",
    ptName: "Jogos de Panelas",
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-copper transition-colors" fill="none" stroke="currentColor" strokeWidth="1.2">
        {/* Back Pot */}
        <path d="M38 38h38v18c0 4-8 6.5-19 6.5S38 60 38 56V38z" opacity="0.4" />
        <ellipse cx="57" cy="38" rx="19" ry="5" opacity="0.4" />
        {/* Front Pot */}
        <path d="M20 52h38v20c0 5-8 8.5-19 8.5S20 77 20 72V52z" />
        <ellipse cx="39" cy="52" rx="19" ry="5.5" fill="rgba(198,124,59,0.04)" />
        <path d="M12 54h8M58 54h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "pressure-cookers",
    enName: "Pressure Cookers",
    ptName: "Panelas de Pressão",
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-copper transition-colors" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M30 52h40v20c0 6-9 9.5-20 9.5S30 78 30 72V52z" />
        <ellipse cx="50" cy="52" rx="20" ry="5" />
        {/* Lid and Valve */}
        <path d="M32 48h36v3.5c0 0-8-4.5-18-4.5S32 51.5 32 51.5v-3.5z" />
        <path d="M50 47v-7" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M46 40h8" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M23 48h7" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: "grills",
    enName: "Grills & Fondues",
    ptName: "Formas e Grelhas",
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-copper transition-colors" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="25" y="35" width="50" height="38" rx="3" />
        <path d="M31 35v38M37 35v38M43 35v38M49 35v38M55 35v38M61 35v38M67 35v38" opacity="0.3" />
        <path d="M19 54h6M75 54h6" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    slug: "tableware",
    enName: "Tableware",
    ptName: "Mesa",
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-copper transition-colors" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="50" cy="50" r="28" />
        <circle cx="50" cy="50" r="21" strokeDasharray="3 2" opacity="0.5" />
        {/* Fork & Knife */}
        <path d="M15 36v28M15 36h3M18 36v12" opacity="0.3" strokeLinecap="round" />
        <path d="M83 34v32 M80 34h3v10" opacity="0.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

interface ProductCategoriesProps {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

export default function ProductCategories({ activeCategory, setActiveCategory }: ProductCategoriesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-5% 0px" });

  return (
    <section 
      id="categories" 
      ref={containerRef}
      className="bg-bg py-16 border-b border-stone-border/30 relative"
    >
      <div className="container-xl">
        {/* Title */}
        <div className="mb-10 text-center md:text-left">
          <motion.p
            className="font-body text-xs text-stone/60 mb-2 uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Stoneflame Collections
          </motion.p>
          <motion.h2
            className="font-display font-light text-3xl md:text-4xl text-stone-dark"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Shop by Category
          </motion.h2>
          <div className="mt-4 h-px w-24 mx-auto md:mx-0" style={{ background: "linear-gradient(90deg,#C67C3B,#EDE7DC)" }} />
        </div>

        {/* Grid Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((cat, index) => {
            const isActive = activeCategory === cat.slug;
            return (
              <motion.button
                key={cat.enName}
                onClick={() => {
                  setActiveCategory(isActive ? null : cat.slug);
                  const element = document.getElementById("collection");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                data-cursor="hover"
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                className={`group flex flex-col items-center justify-center p-6 rounded-sm hover:scale-[1.03] transition-all duration-300 w-full text-center border ${
                  isActive 
                    ? "border-copper bg-copper/[0.04]" 
                    : "border-stone-border bg-card hover:border-copper/30"
                }`}
                style={{
                  boxShadow: isActive
                    ? "0 8px 24px rgba(198,124,59,0.08), 0 2px 8px rgba(198,124,59,0.04)"
                    : "0 1px 4px rgba(26,18,8,0.03), 0 2px 10px rgba(26,18,8,0.02)",
                }}
              >
                {/* Icon Area */}
                <div 
                  className={`w-20 h-20 flex items-center justify-center rounded-full mb-4 bg-bg-secondary transition-colors duration-300 ${
                    isActive ? "bg-copper/10 text-copper" : "group-hover:bg-copper/5"
                  }`}
                  style={{ border: "1px solid rgba(198,124,59,0.08)" }}
                >
                  {cat.icon}
                </div>

                {/* Names */}
                <div className="text-center">
                  <span className={`block font-display text-base md:text-lg transition-colors duration-300 ${
                    isActive ? "text-copper" : "text-stone-dark group-hover:text-copper"
                  }`}>
                    {cat.enName}
                  </span>
                  <span className={`block font-body text-[10px] uppercase tracking-widest mt-1 transition-colors ${
                    isActive ? "text-copper/80" : "text-stone-light/70"
                  }`}>
                    {cat.ptName}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
