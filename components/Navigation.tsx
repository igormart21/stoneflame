"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/utils";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Our Story", href: "#story" },
  { label: "Craft", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(250,250,247,0.96)" : "rgba(250,250,247,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid #EDE7DC" : "1px solid transparent",
        }}
      >
        <div className="container-xl flex items-center justify-between h-16 md:h-[4.5rem]">

          {/* Logo */}
          <a href="#" className="flex items-center" data-cursor="hover">
            <Image
              src="/logotipo-stoneflame.svg"
              alt="STONEFLAME"
              width={160}
              height={50}
              priority
              className="h-9 md:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-cursor="hover"
                className="relative font-body text-sm text-stone hover:text-stone-dark transition-colors duration-250 group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-bronze group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="font-body text-xs tracking-widest uppercase px-5 py-2.5 bg-vulcanic text-offwhite hover:bg-bronze transition-colors duration-300"
              style={{ letterSpacing: "0.15em" }}
            >
              Order Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            data-cursor="hover"
            className="md:hidden p-2 flex flex-col gap-1.5"
            aria-label="Menu"
          >
            <span className={`block w-5 h-px bg-stone-dark transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-3.5 h-px bg-stone-dark transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-stone-dark transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-bg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {/* Logo no menu mobile */}
            <div className="mb-10">
              <Image
                src="/logotipo-stoneflame.svg"
                alt="STONEFLAME"
                width={200}
                height={64}
                className="h-12 w-auto object-contain"
              />
            </div>

            <nav className="flex flex-col items-center gap-7">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl text-stone-dark hover:text-bronze transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 font-body text-sm tracking-widest uppercase px-8 py-3 bg-vulcanic text-offwhite"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Order Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
