import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});

interface CartItem {
  id: number;
  title: string;
  unit: number;
  price: number;
  type: string;
}

export async function POST(req: Request) {
  try {
    const { items }: { items: CartItem[] } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.title },
          unit_amount: Math.round(item.price * 100), // cents
        },
        quantity: item.unit,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
