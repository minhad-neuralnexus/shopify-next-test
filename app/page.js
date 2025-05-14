"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const host = params.get("host");
    const apiKey = "3cd4c8cc30f03b3c7dc9156d85486352";

    if (window.appBridge && host) {
      const app = window.appBridge.default.createApp({
        apiKey,
        host,
      });

      const redirect = window.appBridge.actions.Redirect.create(app);
      redirect.dispatch(
        window.appBridge.actions.Redirect.Action.ADMIN_PATH,
        "/products"
      );
    }
  }, []);

  const handleClick = () => {
    console.log("req");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Shopify App with Script Embed</h1>
      <p>App Bridge loaded from Shopify CDN!</p>
      <button
        className="px-3 py-2 bg-blue-500 text-white"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
}
