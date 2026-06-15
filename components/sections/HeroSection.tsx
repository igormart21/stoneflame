"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import EmberParticles from "@/components/EmberParticles";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    desktop: "/banner-hero.png",
    mobile: "/banner-hero-mobile.png",
  },
  {
    desktop: "/banner-hero-2.png",
    mobile: "/banner-hero-2-mobile.png",
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Autoplay functionality: resets whenever the slide changes manually
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000); // 6 seconds auto-transition
    return () => clearInterval(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <section
      id="hero"
      className="w-full relative mt-16 md:mt-[4.5rem] bg-bg overflow-hidden group/hero"
    >
      {/* ── Slider Container ────────────────────────── */}
      <div className="w-full relative aspect-[864/1821] md:aspect-[1794/876] z-0 overflow-hidden select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Desktop Banner Image */}
            <Image
              src={banners[current].desktop}
              alt={`STONEFLAME E-Commerce Collection Banner ${current + 1}`}
              fill
              priority
              className="hidden md:block object-cover"
              sizes="100vw"
            />
            {/* Mobile Banner Image */}
            <Image
              src={banners[current].mobile}
              alt={`STONEFLAME E-Commerce Collection Banner ${current + 1} Mobile`}
              fill
              priority
              className="block md:hidden object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none" />

        {/* ── NAVIGATION CONTROLS (Arrows) ────────────── */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          data-cursor="hover"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/60 border border-white/10 text-white backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover/hero:opacity-100 transition-all duration-300 transform active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          data-cursor="hover"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/60 border border-white/10 text-white backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover/hero:opacity-100 transition-all duration-300 transform active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* ── PAGINATION CONTROLS (Dots) ──────────────── */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              data-cursor="hover"
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-6 bg-copper"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Embers for brand identity */}
      <EmberParticles density={16}/>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, #FAFAF7 0%, transparent 100%)" }} />
    </section>
  );
}
