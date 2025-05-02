import shopify from "../../../lib/shopify";

export async function GET(request) {
  const callback = await shopify.auth.callback(request);

  return new Response("", {
    status: 200,
    headers: {
      Location: "/",
    },
  });
}
