import shopify from "../../../lib/shopify";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const shop = searchParams.get("shop");

  console.log("INISDE AUTH");
  if (!shop) {
    return new Response("Missing shop parameter", { status: 400 });
  }

  await shopify.auth.begin({
    shop,
    isOnline: true,
    rawRequest: request,
    callbackPath: "/api/auth/callback",
  });
}
