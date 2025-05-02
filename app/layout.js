"use client";
import "@shopify/polaris/build/esm/styles.css";
import Head from "next/head";

export default function RootLayout({ children }) {
  const config = {
    apiKey: process.env.SHOPIFY_API_KEY,
    host: process.env.SHOPIFY_HOST,
    forceRedirect: true,
  };

  return (
    <html lang="en">
      <Head>
        <meta name="shopify-api-key" content={process.env.SHOPIFY_API_KEY} />
        <script
          async
          src="https://cdn.shopify.com/shopifycloud/app-bridge.js"
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}
