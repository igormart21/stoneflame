"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/utils";
import { useCart } from "@/lib/context/CartContext";
import { ShoppingCart, Search } from "lucide-react";
import SearchModal from "@/components/SearchModal";

const links = [
  { label: "Collection", href: "/#collection" },
  { label: "Our Story", href: "/#story" },
  { label: "Craft", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, setIsOpen } = useCart();

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
          <Link
            href="/"
            className="flex items-center"
            data-cursor="hover"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/logotipo-stoneflame.svg"
              alt="STONEFLAME"
              width={160}
              height={50}
              priority
              className="h-9 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-cursor="hover"
                className="relative font-body text-sm text-stone hover:text-stone-dark transition-colors duration-250 group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-bronze group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Search + Cart Button (Desktop) */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              data-cursor="hover"
              className="p-2.5 text-stone hover:text-copper transition-colors duration-250 flex items-center justify-center hover:scale-105 active:scale-95 transform"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              data-cursor="hover"
              className="relative p-2.5 text-stone hover:text-copper transition-colors duration-250 flex items-center justify-center hover:scale-105 active:scale-95 transform"
              aria-label="Open Cart"
            >
              <ShoppingCart className="w-5.5 h-5.5 text-stone hover:text-copper transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-copper text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Search, Cart & Hamburger (Mobile) */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              data-cursor="hover"
              className="p-2.5 text-stone hover:text-copper transition-colors duration-250 flex items-center justify-center"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              data-cursor="hover"
              className="relative p-2.5 text-stone hover:text-copper transition-colors duration-250 flex items-center justify-center"
              aria-label="Open Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-copper text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setOpen(!open)}
              data-cursor="hover"
              className="p-2 flex flex-col gap-1.5"
              aria-label="Menu"
            >
              <span className={`block w-5 h-px bg-stone-dark transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-3.5 h-px bg-stone-dark transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-stone-dark transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Smart product search */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

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
              <Link
                href="/"
                onClick={(e) => {
                  setOpen(false);
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <Image
                  src="/logotipo-stoneflame.svg"
                  alt="STONEFLAME"
                  width={200}
                  height={64}
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>

            <nav className="flex flex-col items-center gap-7">
              {links.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl text-stone-dark hover:text-bronze transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 font-body text-sm tracking-widest uppercase px-8 py-3 bg-vulcanic text-offwhite"
              >
                Order Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
