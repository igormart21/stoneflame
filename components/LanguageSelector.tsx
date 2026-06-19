"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage, type Lang } from "@/lib/i18n/LanguageContext";

function FlagUS({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden="true">
      <rect width="28" height="20" rx="2" fill="#fff" />
      {[...Array(7)].map((_, i) => (
        <rect key={i} y={i * (20 / 13) * 2} width="28" height={20 / 13} fill="#B22234" />
      ))}
      <rect width="12" height={20 / 13 * 7} fill="#3C3B6E" />
      <g fill="#fff">
        {[...Array(4)].map((_, r) =>
          [...Array(5)].map((_, c) => (
            <circle key={`${r}-${c}`} cx={1.4 + c * 2.4} cy={1.4 + r * 2.5} r="0.5" />
          ))
        )}
      </g>
    </svg>
  );
}

function FlagBR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 20" className={className} aria-hidden="true">
      <rect width="28" height="20" rx="2" fill="#009C3B" />
      <path d="M14 2.5 L25.5 10 L14 17.5 L2.5 10 Z" fill="#FFDF00" />
      <circle cx="14" cy="10" r="4.2" fill="#002776" />
      <path d="M10 9.2 A4.6 4.6 0 0 1 18 9.6" stroke="#fff" strokeWidth="0.9" fill="none" />
    </svg>
  );
}

const options: { code: Lang; label: string; short: string; Flag: typeof FlagUS }[] = [
  { code: "en", label: "English", short: "EN", Flag: FlagUS },
  { code: "pt", label: "Português", short: "PT", Flag: FlagBR },
];

export default function LanguageSelector({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = options.find((o) => o.code === lang) ?? options[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        data-cursor="hover"
        aria-label="Language"
        className={`flex items-center gap-1.5 transition-colors duration-250 ${
          variant === "mobile"
            ? "px-3 py-2"
            : "px-2.5 py-1.5 hover:bg-stone-border/40 rounded-sm"
        }`}
      >
        <current.Flag className="w-6 h-[1.05rem] rounded-[2px] shadow-sm" />
        <span className="font-body text-xs font-medium text-stone-dark tracking-wide">{current.short}</span>
        <svg viewBox="0 0 12 12" className={`w-3 h-3 text-stone transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-2 min-w-[150px] bg-bg border border-stone-border rounded-sm shadow-lg overflow-hidden z-50"
          >
            {options.map((o) => (
              <button
                key={o.code}
                onClick={() => {
                  setLang(o.code);
                  setOpen(false);
                }}
                data-cursor="hover"
                className={`flex items-center gap-2.5 w-full px-3.5 py-2.5 text-left transition-colors ${
                  o.code === lang ? "bg-copper/[0.07]" : "hover:bg-bg-secondary"
                }`}
              >
                <o.Flag className="w-6 h-[1.05rem] rounded-[2px] shadow-sm flex-shrink-0" />
                <span className={`font-body text-sm ${o.code === lang ? "text-copper font-medium" : "text-stone-dark"}`}>
                  {o.label}
                </span>
                {o.code === lang && (
                  <svg viewBox="0 0 16 16" className="w-4 h-4 ml-auto text-copper">
                    <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
