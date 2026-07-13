import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, getProductHandles } from "@/lib/shopify/products";
import ProductDetail from "./ProductDetail";

export const revalidate = 60;

/** Pre-render every Shopify product; new handles are rendered on demand. */
export async function generateStaticParams() {
  const handles = await getProductHandles();
  return handles.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Produto não encontrado | STONEFLAME" };

  return {
    title: `${product.name} | STONEFLAME`,
    description: product.tagline || product.description.slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.tagline || product.description.slice(0, 160),
      images: product.images[0] ? [{ url: product.images[0] }] : undefined,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
