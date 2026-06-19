import { products } from "@/lib/data/products";
import ProductDetail from "./ProductDetail";

// Pre-generate a static page for every product (required for `output: export`).
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage() {
  return <ProductDetail />;
}
