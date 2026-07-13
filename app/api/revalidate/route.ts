import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import crypto from "node:crypto";
import { PRODUCTS_TAG } from "@/lib/shopify/products";

/**
 * Shopify webhook endpoint. Point products/create, products/update and
 * products/delete here so the site reflects Shopify changes immediately
 * instead of waiting for the 60s ISR window.
 */
export const runtime = "nodejs";

// Trimmed: pasting the secret into a dashboard often carries a stray
// space or newline, which would silently break every signature check.
const SECRET = process.env.SHOPIFY_REVALIDATION_SECRET?.trim();

/** Shopify signs each webhook with HMAC-SHA256 over the raw body. */
function isValidSignature(rawBody: string, signature: string | null): boolean {
  if (!SECRET || !signature) return false;
  const digest = crypto.createHmac("sha256", SECRET).update(rawBody, "utf8").digest("base64");
  const a = Buffer.from(digest);
  const b = Buffer.from(signature.trim());
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

/**
 * Diagnostics only — never returns the secret itself, just whether one is
 * configured and its length, which is enough to spot a bad paste.
 */
export async function GET() {
  return NextResponse.json({
    secretConfigured: Boolean(SECRET),
    secretLength: SECRET?.length ?? 0,
  });
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-shopify-hmac-sha256");

  if (!isValidSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  // expire: 0 → purge the cached Shopify data immediately
  revalidateTag(PRODUCTS_TAG, { expire: 0 });

  const topic = req.headers.get("x-shopify-topic") ?? "unknown";
  return NextResponse.json({ revalidated: true, topic, now: Date.now() });
}
