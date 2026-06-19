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

export function getCartWhatsAppLink(cartItems: any[], cartTotal: number, lang?: string) {
  const isPt = lang === "pt";
  const rate = isPt ? 5.0 : 1.0;
  const symbol = isPt ? "R$" : "$";
  
  let message = isPt 
    ? `Olá Stoneflame! Gostaria de fazer um pedido:\n\n`
    : `Hello Stoneflame! I would like to place an order:\n\n`;
  
  cartItems.forEach((item) => {
    const convertedPrice = item.priceVal * rate;
    const convertedSubtotal = convertedPrice * item.quantity;
    message += `• *${item.quantity}x ${item.name}* (${item.capacity})\n`;
    message += isPt
      ? `  Preço: ${symbol}${convertedPrice.toFixed(0)} cada — Subtotal: ${symbol}${convertedSubtotal.toFixed(0)}\n\n`
      : `  Price: ${symbol}${convertedPrice.toFixed(0)} each — Subtotal: ${symbol}${convertedSubtotal.toFixed(0)}\n\n`;
  });
  
  const convertedTotal = cartTotal * rate;
  message += isPt
    ? `*Valor Total do Pedido:* ${symbol}${convertedTotal.toFixed(0)}\n\n`
    : `*Total Order Value:* ${symbol}${convertedTotal.toFixed(0)}\n\n`;
    
  message += isPt
    ? `Por favor, me informe como proceder com o pagamento e frete. Obrigado!`
    : `Please let me know how to proceed with payment and shipping. Thank you!`;
  
  return getWhatsAppLink(message, lang);
}
