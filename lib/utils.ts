import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "5511997115117";
export const WHATSAPP_BASE_MESSAGE_EN =
  "Hello, I would like more information about this StoneFlame cookware.";
export const WHATSAPP_BASE_MESSAGE_PT =
  "Olá, gostaria de mais informações sobre as panelas de pedra StoneFlame.";

export function getWhatsAppLink(message?: string, lang?: string) {
  const defaultMsg = lang === "pt" ? WHATSAPP_BASE_MESSAGE_PT : WHATSAPP_BASE_MESSAGE_EN;
  const text = encodeURIComponent(message ?? defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getProductWhatsAppLink(productName: string, lang?: string) {
  const msg = lang === "pt"
    ? `Olá, tenho interesse no StoneFlame *${productName}*. Poderia me passar mais informações?`
    : `Hello, I am interested in the StoneFlame *${productName}*. Could you please provide more information?`;
  return getWhatsAppLink(msg, lang);
}

// Checkout now happens on Shopify (see lib/shopify/cart.ts). WhatsApp is kept
// for customer support only.
