"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function EmbedPage() {
  const searchParams = useSearchParams();
  const shop = searchParams.get("shop");
  const host = searchParams.get("host");

  useEffect(() => {
    if (shop && host) {
      const apiKey = process.env.NEXT_PUBLIC_SHOPIFY_API_KEY;
      const redirectUrl = `https://${shop}/admin/apps/${apiKey}?shop=${shop}&host=${host}`;
      window.location.assign(redirectUrl);
    }
  }, [shop, host]);

  return <p>Redirecting into Shopify Admin...</p>;
}
