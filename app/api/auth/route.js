import shopify from "../../../lib/shopify";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const shop = searchParams.get("shop");
  if (!shop) {
    return new Response("Missing shop parameter", { status: 400 });
  }
  //   const authRoute = await shopify.auth.begin(
  //     request,
  //     {
  //       returnUrl: `/api/auth/callback`,
  //       isOnline: true,
  //     },
  //     shop
  //   );

  return await shopify.auth.begin({
    shop: shop,
    isOnline: false,
    rawRequest: request,
    callbackPath: "/api/auth/callback",
  });
}
