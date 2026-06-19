"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, type Dict } from "./translations";

export type Lang = "en" | "pt";

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
  const [lang, setLangState] = useState<Lang>("en");

  // Resolve language after mount (avoids hydration mismatch):
  // 1) ?lang= query param, 2) saved preference, 3) browser language.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("lang");
    const stored = localStorage.getItem("stoneflame_lang");
    let resolved: Lang | null = null;

    if (param === "en" || param === "pt") resolved = param;
    else if (stored === "en" || stored === "pt") resolved = stored;
    else if (navigator.language?.toLowerCase().startsWith("pt")) resolved = "pt";

    if (resolved) {
      setLangState(resolved);
      localStorage.setItem("stoneflame_lang", resolved);
      document.documentElement.lang = resolved === "pt" ? "pt-BR" : "en";
    }
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
