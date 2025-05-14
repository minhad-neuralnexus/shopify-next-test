import shopify from "@/lib/shopify";

// auth
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const shop = searchParams.get("shop");

  return shopify.auth.begin({
    shop: shopify.utils.sanitizeShop(shop, true),
    callbackPath: "/api/auth/callback",
    isOnline: true,
    rawRequest: req,
    hostName: "eb3b-2405-201-601c-583b-b08c-ec91-4768-41cd.ngrok-free.app",
  });
}
