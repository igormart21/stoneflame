"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useLocalizedProducts, localizePrice } from "@/lib/data/useProducts";
import { useT } from "@/lib/i18n/LanguageContext";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

// Normalize for accent-insensitive matching
const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const t = useT();
  const products = useLocalizedProducts();

  // Focus input & lock scroll when opening; reset query when closing
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return [];
    const terms = q.split(/\s+/);

    return products
      .map((p) => {
        const haystack = normalize(
          [p.name, p.tagline, p.capacity, p.category, p.description, ...(p.includes || [])].join(" ")
        );
        const nameNorm = normalize(p.name);
        // Every term must be found somewhere
        const matchesAll = terms.every((t) => haystack.includes(t));
        if (!matchesAll) return null;
        // Score: name matches rank higher
        let score = 0;
        terms.forEach((t) => {
          if (nameNorm.includes(t)) score += 3;
          if (normalize(p.category).includes(t)) score += 2;
          if (normalize(p.capacity).includes(t)) score += 1;
        });
        return { product: p, score };
      })
      .filter((r): r is { product: (typeof products)[number]; score: number } => r !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.product);
  }, [query, products]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-24 md:pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-vulcanic/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-2xl bg-bg rounded-sm shadow-2xl overflow-hidden border border-stone-border/40"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Input row */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-border/40">
              <Search className="w-5 h-5 text-copper flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("search.placeholder")}
                className="flex-1 bg-transparent outline-none font-body text-base text-stone-dark placeholder:text-stone/50"
              />
              <button
                onClick={onClose}
                aria-label={t("search.close")}
                className="p-1 text-stone hover:text-stone-dark transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query.trim() === "" ? (
                <p className="px-5 py-8 text-center font-body text-sm text-stone/60">
                  {t("search.empty")}
                </p>
              ) : results.length === 0 ? (
                <p className="px-5 py-8 text-center font-body text-sm text-stone/60">
                  {t("search.noResults")} &ldquo;{query}&rdquo;.
                </p>
              ) : (
                <ul className="divide-y divide-stone-border/30">
                  {results.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/product/${p.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-4 px-5 py-3 hover:bg-bg-secondary transition-colors group"
                      >
                        <div
                          className="w-14 h-14 flex-shrink-0 relative rounded-sm overflow-hidden"
                          style={{ background: p.bg }}
                        >
                          {p.images?.[0] && (
                            <Image
                              src={p.images[0]}
                              alt={p.name}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-display text-sm text-stone-dark leading-tight group-hover:text-bronze transition-colors truncate">
                            {p.name}
                          </p>
                          <p className="font-body text-[11px] text-stone/60 truncate">
                            {p.capacity}
                          </p>
                        </div>
                        <span className="font-body text-sm text-copper font-medium flex-shrink-0">
                          {localizePrice(p.price, t("common.from"))}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
