import "@shopify/shopify-api/adapters/web-api";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";

import { MemorySessionStorage } from "@shopify/shopify-app-session-storage-memory";

const shopify = shopifyApi({
  apiKey: "3cd4c8cc30f03b3c7dc9156d85486352",
  apiSecretKey: "c3c4c58d9f153b3ed485cd930e3913ac",
  scopes: ["read_products"],
  hostName: "eb3b-2405-201-601c-583b-b08c-ec91-4768-41cd.ngrok-free.app",
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: true,
  sessionStorage: new MemorySessionStorage(),
});

export default shopify;
