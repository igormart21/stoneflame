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

// Canonical site URL — used for SEO metadata and structured data.
const SITE_URL = "https://stoneflame.com.br";
const SITE_TITLE = "STONEFLAME | Panelas de Pedra-Sabão Artesanais";
const SITE_DESCRIPTION =
  "Panelas de pedra-sabão artesanais premium para uma cozinha mais saudável, autêntica e durável. Pedra 100% natural, feita à mão.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "panela de pedra",
    "panela de pedra-sabão",
    "panela de pedra sabão",
    "panelas artesanais",
    "panela de pressão de pedra",
    "pedra-sabão",
    "panela mineira",
    "cozinha saudável",
  ],
  authors: [{ name: "STONEFLAME" }],
  creator: "STONEFLAME",
  publisher: "STONEFLAME",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "STONEFLAME",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "STONEFLAME — Panelas de Pedra-Sabão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
  metadataBase: new URL(SITE_URL),
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
                "Panelas de pedra-sabão artesanais para uma cozinha mais saudável, autêntica e durável.",
              url: SITE_URL,
              telephone: "+5511997115117",
              priceRange: "$$$",
              servesCuisine: "Panelas Artesanais",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Coleção de Panelas de Pedra-Sabão",
                itemListElement: [
                  {
                    "@type": "Product",
                    name: "Panela de Pedra-Sabão",
                    description: "Panela de pedra-sabão artesanal para uma cozinha saudável",
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
