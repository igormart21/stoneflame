import { getProducts } from "@/lib/shopify/products";
import HomeClient from "./HomeClient";

// ISR: re-fetch from Shopify at most once a minute. The revalidation webhook
// busts this instantly when a product changes.
export const revalidate = 60;

export default async function Home() {
  const products = await getProducts();
  return <HomeClient products={products} />;
}
