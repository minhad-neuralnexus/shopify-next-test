// app/layout.js
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Your Shopify Embedded App",
  description: "Powered by Next.js and Shopify App Bridge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="shopify-api-key"
          content="3cd4c8cc30f03b3c7dc9156d85486352"
        />
        <Script
          src="https://cdn.shopify.com/shopifycloud/app-bridge.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
