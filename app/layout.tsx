import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/context/CartContext";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import CartDrawer from "@/components/CartDrawer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STONEFLAME | Handcrafted Stone Cookware",
  description:
    "Premium handcrafted stone cookware for fire cooking, BBQ, and authentic culinary experiences. 100% natural stone, made by hand.",
  keywords: [
    "stone cookware",
    "rustic cookware",
    "handmade cookware",
    "outdoor cooking",
    "fire cooking pot",
    "stone pot",
    "artisanal cookware",
    "volcanic stone pan",
  ],
  authors: [{ name: "STONEFLAME" }],
  creator: "STONEFLAME",
  publisher: "STONEFLAME",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stoneflame.com",
    siteName: "STONEFLAME",
    title: "STONEFLAME | Handcrafted Stone Cookware",
    description:
      "Premium handcrafted stone cookware for fire cooking, BBQ, and authentic culinary experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "STONEFLAME Stone Cookware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STONEFLAME | Handcrafted Stone Cookware",
    description:
      "Premium handcrafted stone cookware for fire cooking and authentic culinary experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://stoneflame.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "STONEFLAME",
              description:
                "Premium handcrafted stone cookware for fire cooking and authentic culinary experiences.",
              url: "https://stoneflame.com",
              telephone: "+5511997115117",
              priceRange: "$$$",
              servesCuisine: "Artisanal Cookware",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Stone Cookware Collection",
                itemListElement: [
                  {
                    "@type": "Product",
                    name: "Volcanic Stone Pot",
                    description: "Handcrafted volcanic stone pot for fire cooking",
                    brand: { "@type": "Brand", name: "STONEFLAME" },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <CartProvider>
            {children}
            <CartDrawer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
