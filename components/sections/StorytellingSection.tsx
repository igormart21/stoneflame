"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { getWhatsAppLink } from "@/lib/utils";

const categories = [
  {
    num: "01",
    tag: "Origin",
    title: "The Stone",
    sub: "A Pedra",
    body: "Selected from volcanic formations shaped by millennia. Not all stone qualifies — only the most resilient makes a StoneFlame piece.",
    cta: "Explore",
    accent: "#A36D3A",
    bg: "radial-gradient(ellipse at 40% 60%, rgba(43,33,24,0.95) 0%, #1a0c04 100%)",
    glow: "rgba(90,90,90,0.4)",
  },
  {
    num: "02",
    tag: "Craft",
    title: "The Artistry",
    sub: "O Artesanato",
    body: "Every curve is carved by hand over 30+ hours. No molds, no machines. The imperfections are signatures of the artisan.",
    cta: "Our Process",
    accent: "#C67C3B",
    bg: "radial-gradient(ellipse at 60% 50%, rgba(43,33,24,0.9) 0%, #1a0c04 100%)",
    glow: "rgba(163,109,58,0.45)",
  },
  {
    num: "03",
    tag: "Element",
    title: "The Fire",
    sub: "O Fogo",
    body: "Stone has coexisted with fire since the beginning. Our cookware retains heat with a patience metal cannot match.",
    cta: "Shop Fire Pieces",
    accent: "#FF9A4A",
    bg: "radial-gradient(ellipse at 50% 70%, rgba(139,37,0,0.6) 0%, rgba(43,33,24,0.9) 40%, #1a0c04 100%)",
    glow: "rgba(198,124,59,0.55)",
  },
  {
    num: "04",
    tag: "Experience",
    title: "The Ritual",
    sub: "A Experiência",
    body: "A meal cooked in stone carries memory. The mineral notes, the caramelization, the ceremony of fire — this is not just cooking.",
    cta: "Find Your Piece",
    accent: "#C67C3B",
    bg: "radial-gradient(ellipse at 30% 50%, rgba(43,33,24,0.95) 0%, #1a0c04 100%)",
    glow: "rgba(163,109,58,0.4)",
  },
];

function CategoryTile({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const isHref = cat.cta === "Shop Fire Pieces" ? "#collection"
    : cat.cta === "Find Your Piece" ? "#quiz" : "#story";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative overflow-hidden group"
      style={{ minHeight: 340 }}
      data-cursor="hover"
    >
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ background: cat.bg, y: bgY }}>
        {/* texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.55' numOctaves='4' seed='${index + 2}' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0.3'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
        }}/>
        {/* glow */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{ background: `radial-gradient(ellipse at 50% 75%, ${cat.glow} 0%, transparent 60%)` }}/>
      </motion.div>

      {/* Roman numeral watermark */}
      <div className="absolute bottom-4 right-4 font-display font-light pointer-events-none select-none"
        style={{ fontSize: "5rem", color: "rgba(198,124,59,0.07)", lineHeight: 1 }}>
        {["I", "II", "III", "IV"][index]}
      </div>

      {/* Content */}
      <div className="relative z-10 p-7 md:p-8 h-full flex flex-col justify-between" style={{ minHeight: 340 }}>
        {/* Top */}
        <div className="flex items-center justify-between">
          <span className="font-body text-xs tracking-widest uppercase"
            style={{ color: cat.accent, letterSpacing: "0.2em", fontSize: "0.68rem" }}>
            {cat.num} · {cat.tag}
          </span>
          <div className="w-6 h-px" style={{ background: cat.accent, opacity: 0.6 }}/>
        </div>

        {/* Bottom */}
        <div>
          <motion.h3
            className="font-display font-light text-3xl md:text-4xl text-offwhite mb-1 leading-tight"
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.08 + 0.2 }}
          >
            {cat.title}
          </motion.h3>
          <p className="font-display italic text-lg mb-4" style={{ color: `${cat.accent}aa` }}>
            {cat.sub}
          </p>
          <p className="font-body text-sm text-offwhite/55 leading-relaxed mb-5 max-w-xs"
            style={{ fontSize: "0.8rem" }}>
            {cat.body}
          </p>
          <a href={isHref} data-cursor="hover"
            className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase transition-all duration-300"
            style={{ color: cat.accent, letterSpacing: "0.16em", fontSize: "0.7rem" }}>
            {cat.cta}
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function StorytellingSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="story" className="bg-bg section-padding">
      <div className="container-xl">

        {/* Header — same style as reference "Explore our thoughtful categories" */}
        <div ref={headerRef} className="mb-10 md:mb-12">
          <motion.p className="font-body text-xs text-stone/60 mb-2"
            initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ duration:0.5 }}
            style={{ letterSpacing:"0.05em" }}>
            The Story Behind Every Piece
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.div
              initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.7, ease:[0.25,0.46,0.45,0.94], delay:0.1 }}
            >
              <div className="flex items-baseline gap-3 flex-wrap">
                <h2 className="font-display font-light text-4xl md:text-5xl text-stone-dark leading-none">
                  Explore our
                </h2>
                <span className="font-body text-sm text-stone/50 tracking-widest">×</span>
                <h2 className="font-display font-light text-4xl md:text-5xl text-bronze leading-none italic">
                  Collection
                </h2>
              </div>
            </motion.div>
            <motion.a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"
              data-cursor="hover"
              className="flex items-center gap-2 font-body text-sm text-stone hover:text-bronze transition-colors duration-250"
              initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ delay:0.3 }}>
              All stories
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>
          <div className="mt-6 h-px" style={{ background:"linear-gradient(90deg,#C67C3B,#EDE7DC,transparent)" }}/>
        </div>

        {/* Category grid — 2×2 like reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {categories.map((c, i) => (
            <CategoryTile key={c.num} cat={c} index={i}/>
          ))}
        </div>
      </div>
    </section>
  );
}
