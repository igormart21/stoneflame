import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "18475236194";
export const WHATSAPP_BASE_MESSAGE =
  "Hello, I would like more information about this StoneFlame cookware.";

export function getWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? WHATSAPP_BASE_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getProductWhatsAppLink(productName: string) {
  const msg = `Hello, I am interested in the StoneFlame *${productName}*. Could you please provide more information?`;
  return getWhatsAppLink(msg);
}
