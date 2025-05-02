import shopify from "../../../lib/shopify";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const shop = searchParams.get("shop");

  if (!shop) {
    return new Response("Missing shop parameter", { status: 400 });
  }

  return await shopify.auth.begin({
    shop,
    isOnline: false,
    rawRequest: request,
    callbackPath: "/api/auth/callback",
  });
}
