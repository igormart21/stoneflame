"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, type Dict } from "./translations";

export type Lang = "en" | "pt";

export const EXCHANGE_RATE = 5.0;

export function formatCurrency(value: number, lang: Lang, isAlreadyConverted = false, forceDecimals = false): string {
  const converted = isAlreadyConverted ? value : (lang === "pt" ? value * EXCHANGE_RATE : value);
  return new Intl.NumberFormat(lang === "pt" ? "pt-BR" : "en-US", {
    style: "currency",
    currency: lang === "pt" ? "BRL" : "USD",
    minimumFractionDigits: forceDecimals ? 2 : (converted % 1 === 0 ? 0 : 2),
    maximumFractionDigits: 2,
  }).format(converted);
}

export function getFormattedPrice(p: { price: string; priceVal: number }, lang: Lang, fromWord: string): string {
  const hasFrom = p.price.toLowerCase().includes("from");
  const formatted = formatCurrency(p.priceVal, lang);
  if (hasFrom) {
    return `${fromWord} ${formatted}`;
  }
  return formatted;
}

interface LanguageContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

function lookup(obj: unknown, path: string[]): unknown {
  return path.reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  // Resolve language after mount (avoids hydration mismatch):
  // 1) ?lang= query param, 2) saved preference
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("lang");
    const stored = localStorage.getItem("stoneflame_lang");
    let resolved: Lang = "pt";

    if (param === "en" || param === "pt") resolved = param;
    else if (stored === "en" || stored === "pt") resolved = stored;

    setLangState(resolved);
    localStorage.setItem("stoneflame_lang", resolved);
    document.documentElement.lang = resolved === "pt" ? "pt-BR" : "en";
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem("stoneflame_lang", next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  }, []);

  const t = useCallback(
    (key: string) => {
      const path = key.split(".");
      const value = lookup(translations[lang], path);
      if (typeof value === "string") return value;
      // Fallback to English, then to the raw key
      const fallback = lookup(translations.en, path);
      return typeof fallback === "string" ? fallback : key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

/** Convenience hook returning just the translate function. */
export function useT() {
  return useLanguage().t;
}

/** Returns the full dictionary for the active language (for arrays/structured data). */
export function useDict(): Dict {
  const { lang } = useLanguage();
  return translations[lang];
}
