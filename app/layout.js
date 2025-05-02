"use client";

import "@shopify/polaris/build/esm/styles.css";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import Head from "next/head";
import { createContext, useMemo } from "react";
import createApp from "@shopify/app-bridge";

// Create and export context if needed later
export const AppBridgeContext = createContext(null);

export default function RootLayout({ children }) {
  if (typeof window === "undefined") return null;

  const host = new URLSearchParams(window.location.search).get("host");

  const config = useMemo(() => {
    return {
      apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY,
      host,
      forceRedirect: true,
    };
  }, [host]);

  const app = useMemo(() => createApp(config), [config]);

  return (
    <html lang="en">
      <Head>
        <meta name="shopify-api-key" content={config.apiKey} />
        <script
          async
          src="https://cdn.shopify.com/shopifycloud/app-bridge.js"
        ></script>
      </Head>
      <body>
        <AppBridgeContext.Provider value={app}>
          <PolarisProvider i18n={enTranslations}>{children}</PolarisProvider>
        </AppBridgeContext.Provider>
      </body>
    </html>
  );
}
