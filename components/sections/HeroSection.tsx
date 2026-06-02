"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import EmberParticles from "@/components/EmberParticles";
import { getWhatsAppLink } from "@/lib/utils";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.6 });
    tl.fromTo(".hero-pre",   { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(".hero-h1",    { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.95, ease: "power3.out" }, "-=0.2")
      .fromTo(".hero-sub",   { opacity: 0 },         { opacity: 1, duration: 0.7 }, "-=0.4")
      .fromTo(".hero-btn",   { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, "-=0.3")
      .fromTo(".hero-trust", { opacity: 0 },         { opacity: 1, duration: 0.6 }, "-=0.2")
      .fromTo(".hero-img",   { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.8")
      .fromTo(".hero-card",  { opacity: 0, x: 16 }, { opacity: 1, x: 0, duration: 0.6 }, "-=0.3");
    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Background ──────────────────────────────── */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 70% 60%, rgba(43,33,24,0.6) 0%, transparent 50%),
            radial-gradient(ellipse at 15% 85%, rgba(139,37,0,0.4) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 100%, rgba(198,124,59,0.22) 0%, transparent 50%),
            linear-gradient(155deg, #1a0c04 0%, #2B2118 45%, #1a0c04 80%, #0f0806 100%)
          `,
        }}/>
        {/* stone grain */}
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0.3'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "400px",
        }}/>
      </motion.div>

      {/* Embers */}
      <EmberParticles density={48}/>

      {/* ── Grid layout ─────────────────────────────── */}
      <div className="relative z-10 w-full h-full min-h-[100svh] grid grid-cols-1 lg:grid-cols-2">

        {/* ── LEFT: Text — vertically centered ──────── */}
        <div className="flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0">
          <div className="container-xl w-full lg:pr-8 xl:pr-12 lg:pl-16 xl:pl-24">

            {/* Tag */}
            <div className="hero-pre opacity-0 flex items-center gap-3 mb-7">
              <div style={{ width: 40, height: 1, background: "linear-gradient(90deg,#A36D3A,#C67C3B)" }}/>
              <span className="font-body text-xs uppercase text-copper" style={{ letterSpacing: "0.26em" }}>
                Volcanic Stone · Handcrafted
              </span>
            </div>

            {/* Headline */}
            <div className="hero-h1 opacity-0 mb-6">
              <h1 className="font-display font-light leading-[0.92] text-offwhite"
                style={{ fontSize: "clamp(3.4rem, 6.5vw, 6.5rem)" }}>
                Handcrafted<br/>
                <span style={{
                  background: "linear-gradient(135deg,#A36D3A 0%,#C67C3B 40%,#FF9A4A 70%,#C67C3B 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  Stone Cookware
                </span>
              </h1>
            </div>

            {/* Sub */}
            <p className="hero-sub opacity-0 font-body text-base md:text-lg leading-relaxed mb-9 max-w-sm"
              style={{ color: "rgba(245,242,237,0.65)" }}>
              Authentic stone cookware crafted for unforgettable cooking experiences — fire, charcoal &amp; wood stove.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="#collection" data-cursor="hover"
                className="hero-btn opacity-0 font-body text-xs tracking-widest uppercase px-8 py-4 bg-offwhite text-vulcanic hover:bg-copper hover:text-offwhite transition-all duration-300 text-center"
                style={{ letterSpacing: "0.18em" }}>
                Explore Collection
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" data-cursor="hover"
                className="hero-btn opacity-0 font-body text-xs tracking-widest uppercase px-8 py-4 text-center border transition-all duration-300"
                style={{ letterSpacing: "0.18em", borderColor: "rgba(245,242,237,0.3)", color: "rgba(245,242,237,0.8)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C67C3B"; (e.currentTarget as HTMLElement).style.color = "#C67C3B"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,242,237,0.3)"; (e.currentTarget as HTMLElement).style.color = "rgba(245,242,237,0.8)"; }}>
                Order via WhatsApp →
              </a>
            </div>

            {/* Trust */}
            <div className="hero-trust opacity-0 flex flex-wrap gap-5">
              {["100% Handmade", "Natural Stone", "Lifetime Durability"].map(b => (
                <div key={b} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-copper opacity-70"/>
                  <span className="font-body text-xs uppercase tracking-wider"
                    style={{ color: "rgba(245,242,237,0.4)", fontSize: "0.68rem", letterSpacing: "0.14em" }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Product image ───────────────────── */}
        <div className="relative flex items-center justify-center overflow-hidden" style={{ paddingTop: "5rem" }}>

          {/* Glow puddle on the floor */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: "90%", height: "260px",
              background: "radial-gradient(ellipse at 50% 100%, rgba(198,124,59,0.5) 0%, rgba(163,109,58,0.2) 35%, transparent 65%)",
              filter: "blur(24px)",
              zIndex: 0,
            }}/>

          {/* Ambient ring glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse at 50% 60%, rgba(198,124,59,0.1) 0%, transparent 60%)",
            zIndex: 0,
          }}/>

          {/* Product — float + parallax */}
          <motion.div
            className="hero-img opacity-0 relative z-10"
            style={{ y: imgY, marginTop: "-8%", marginRight: "20%" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/hero-bg.png"
              alt="STONEFLAME Stone Cookware Collection"
              width={600}
              height={600}
              priority
              className="w-64 sm:w-72 md:w-80 lg:w-[380px] xl:w-[440px] 2xl:w-[500px] h-auto object-contain"
              style={{
                filter: "drop-shadow(0 32px 56px rgba(198,124,59,0.4)) drop-shadow(0 8px 20px rgba(0,0,0,0.6))",
              }}
            />
          </motion.div>

          {/* Floating info card */}
          <motion.div
            className="hero-card opacity-0 absolute top-1/4 z-20"
            style={{ right: "calc(20% + 1.5rem)" }}
          >
            <div className="px-5 py-4" style={{
              background: "rgba(15,8,6,0.82)",
              border: "1px solid rgba(198,124,59,0.3)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}>
              <p className="font-body text-xs uppercase text-copper/60 mb-1" style={{ letterSpacing: "0.2em", fontSize: "0.6rem" }}>
                The Collection
              </p>
              <p className="font-display text-lg text-offwhite leading-tight mb-3">Stone Cookware</p>
              <div className="h-px w-full mb-3" style={{ background: "linear-gradient(90deg,#A36D3A,#C67C3B)" }}/>
              <div className="flex items-center justify-between gap-6">
                <p className="font-display text-base" style={{
                  background: "linear-gradient(135deg,#A36D3A,#C67C3B)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>From $160</p>
                <a href="#collection" data-cursor="hover"
                  className="font-body text-xs uppercase tracking-wider text-copper hover:text-offwhite transition-colors"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.15em" }}>
                  View →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, #FAFAF7 0%, rgba(250,250,247,0.6) 50%, transparent 100%)" }}/>
    </section>
  );
}
