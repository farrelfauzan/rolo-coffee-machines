// app/api/webhook/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const rawBody = await req.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  console.log("✅ Received event:", event.type);

  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("PaymentIntent succeeded:", paymentIntent);
      break;
    }

    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("Checkout session completed:", session.id);
      // ✅ Mark order as paid or await payment_intent.succeeded
      break;
    }

    case "payment_intent.payment_failed": {
      const failedIntent = event.data.object as Stripe.PaymentIntent;
      console.warn(`❌ Payment failed for: ${failedIntent.id}`);
      // ❌ Update order as failed
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}
