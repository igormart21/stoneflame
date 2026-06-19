"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LoadingScreen } from "@/components/ClientOnlyComponents";
import { getWhatsAppLink } from "@/lib/utils";

const pillars = [
  {
    num: "01",
    tag: "Mission",
    sub: "Missão",
    body:
      "To select and offer superior quality soapstone cookware, ensuring reliability, functionality, and a user experience that enhances the flavor of food.",
    accent: "#A36D3A",
    bg: "radial-gradient(ellipse at 40% 60%, rgba(43,33,24,0.95) 0%, #1a0c04 100%)",
    glow: "rgba(163,109,58,0.4)",
  },
  {
    num: "02",
    tag: "Vision",
    sub: "Visão",
    body:
      "To be recognized as a leading supplier of soapstone cookware, standing out for our careful product selection, transparency, and commitment to the customer.",
    accent: "#C67C3B",
    bg: "radial-gradient(ellipse at 60% 50%, rgba(139,37,0,0.5) 0%, rgba(43,33,24,0.9) 45%, #1a0c04 100%)",
    glow: "rgba(198,124,59,0.5)",
  },
];

const values = [
  "Responsible supplier selection",
  "Quality and durability of the products",
  "Transparency and trust",
  "Respect for tradition and natural materials",
  "Focus on customer experience and satisfaction",
];

function PillarTile({ p, index }: { p: typeof pillars[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative overflow-hidden group"
      style={{ minHeight: 300 }}
      data-cursor="hover"
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: p.bg }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.55' numOctaves='4' seed='${index + 3}' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0.3'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "cover",
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{ background: `radial-gradient(ellipse at 50% 75%, ${p.glow} 0%, transparent 60%)` }}
        />
      </div>

      {/* Watermark numeral */}
      <div
        className="absolute bottom-4 right-5 font-display font-light pointer-events-none select-none"
        style={{ fontSize: "5rem", color: "rgba(198,124,59,0.07)", lineHeight: 1 }}
      >
        {["I", "II"][index]}
      </div>

      {/* Content */}
      <div className="relative z-10 p-7 md:p-9 h-full flex flex-col justify-between" style={{ minHeight: 300 }}>
        <div className="flex items-center justify-between">
          <span
            className="font-body text-xs tracking-widest uppercase"
            style={{ color: p.accent, letterSpacing: "0.2em", fontSize: "0.68rem" }}
          >
            {p.num} · {p.tag}
          </span>
          <div className="w-6 h-px" style={{ background: p.accent, opacity: 0.6 }} />
        </div>

        <div>
          <h3 className="font-display font-light text-3xl md:text-4xl text-offwhite mb-1 leading-tight">
            {p.tag}
          </h3>
          <p className="font-display italic text-lg mb-4" style={{ color: `${p.accent}aa` }}>
            {p.sub}
          </p>
          <p className="font-body text-sm text-offwhite/60 leading-relaxed max-w-sm" style={{ fontSize: "0.84rem" }}>
            {p.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInView(introRef, { once: true });
  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-8%" });

  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main className="pt-20 min-h-screen bg-bg">
        {/* ── Intro ── */}
        <section id="about" className="section-padding">
          <div className="container-xl">
            <div ref={introRef} className="mb-10 md:mb-12">
              <motion.p
                className="font-body text-xs text-stone/60 mb-2"
                initial={{ opacity: 0 }}
                animate={introInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                style={{ letterSpacing: "0.05em" }}
              >
                Our Company
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
              >
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h1 className="font-display font-light text-4xl md:text-5xl text-stone-dark leading-none">About</h1>
                  <span className="font-body text-sm text-stone/50 tracking-widest">×</span>
                  <h1 className="font-display font-light text-4xl md:text-5xl text-bronze leading-none italic">Stone Flame</h1>
                </div>
              </motion.div>
              <div className="mt-6 h-px" style={{ background: "linear-gradient(90deg,#C67C3B,#EDE7DC,transparent)" }} />
            </div>

            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 18 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="font-display font-light text-xl md:text-2xl text-stone-dark leading-relaxed mb-6">
                Stone Flame is a company specializing in the resale of soapstone cookware.
              </p>
              <p className="font-body text-base text-stone leading-relaxed" style={{ fontSize: "0.95rem" }}>
                We choose our suppliers with attention to quality standards, durability, and thermal
                performance. Our role is to connect traditional and functional products to customers
                seeking a healthier, more authentic, and reliable cooking experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section id="mission" className="section-padding pt-0">
          <div className="container-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {pillars.map((p, i) => (
                <PillarTile key={p.tag} p={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section id="values" className="section-padding pt-0">
          <div className="container-xl" ref={valuesRef}>
            <motion.p
              className="font-body text-xs text-stone/60 mb-2"
              initial={{ opacity: 0 }}
              animate={valuesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              style={{ letterSpacing: "0.05em" }}
            >
              What guides us
            </motion.p>
            <motion.div
              className="flex items-baseline gap-3 flex-wrap mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="font-display font-light text-3xl md:text-4xl text-stone-dark leading-none">Our</h2>
              <span className="font-body text-sm text-stone/50 tracking-widest">×</span>
              <h2 className="font-display font-light text-3xl md:text-4xl text-bronze leading-none italic">Values</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v}
                  className="group flex items-center gap-4 bg-card p-5 rounded-sm border border-stone-border hover:border-copper/30 transition-all duration-300"
                  style={{ boxShadow: "0 1px 4px rgba(26,18,8,0.03)" }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-copper text-bg font-display text-sm transition-colors duration-300 group-hover:bg-ember-mid"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-sm text-stone-dark" style={{ fontSize: "0.9rem" }}>
                    {v}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-14 text-center"
              initial={{ opacity: 0 }}
              animate={valuesInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-display font-light text-2xl md:text-3xl text-stone-dark mb-3">
                Cook with <span className="italic text-bronze">stone &amp; fire</span>
              </h3>
              <p className="font-body text-sm text-stone mb-7 max-w-sm mx-auto leading-relaxed">
                Have a question about our cookware? Talk to us directly — every order starts with a conversation.
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-3 font-body text-xs tracking-widest uppercase px-10 py-4 bg-vulcanic text-offwhite hover:bg-bronze transition-colors duration-300"
                style={{ letterSpacing: "0.18em" }}
              >
                Start a Conversation
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
