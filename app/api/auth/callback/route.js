import shopify from "../../../../lib/shopify";

export async function GET(request) {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop");
  const host = url.searchParams.get("host");

  if (!shop || !host) {
    return new Response("Missing required parameters", { status: 400 });
  }

  const callback = await shopify.auth.callback({
    rawRequest: request,
  });

  console.log(callback);

  // return Response.redirect(`/?shop=${shop}&host=${host}`, 302);
}
