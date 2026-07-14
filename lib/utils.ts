import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "5511997115117";

// The store is Brazil-only, so every WhatsApp message goes out in Portuguese.
export const WHATSAPP_BASE_MESSAGE =
  "Olá, gostaria de mais informações sobre as panelas de pedra StoneFlame.";

export function getWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? WHATSAPP_BASE_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getProductWhatsAppLink(productName: string) {
  return getWhatsAppLink(
    `Olá, tenho interesse no *${productName}*. Poderia me passar mais informações?`
  );
}

// Checkout now happens on Shopify (see lib/shopify/cart.ts). WhatsApp is kept
// for customer support only.
