import { NextResponse } from "next/server";
import shopify from "@/lib/shopify";

// callback
export async function GET(req) {
  try {
    const session = await shopify.auth.callback({
      rawRequest: req,
    });

    const redirectUrl = `https://eb3b-2405-201-601c-583b-b08c-ec91-4768-41cd.ngrok-free.app/?shop=${session.session.shop}`;

    return Response.redirect(redirectUrl, 302);
  } catch (error) {
    console.log(error);
    return Response.redirect(redirectUrl, 302);
  }
}
