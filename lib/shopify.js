import { shopifyApi, ApiVersion } from "@shopify/shopify-api";

const shopify = shopifyApi({
  apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY,
  apiSecretKey: process.env.NEXT_PUBLIC_SHOPIFY_API_SECRET,
  scopes: process.env.NEXT_PUBLIC_SHOPIFY_API_SCOPES.split(","),
  hostName: process.env.NEXT_PUBLIC_SHOPIFY_API_HOST,
  apiVersion: ApiVersion.April25,
  isEmbeddedApp: true,
});

export default shopify;
