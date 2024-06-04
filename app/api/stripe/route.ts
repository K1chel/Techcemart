import { headers } from "next/headers";
import { Resend } from "resend";

import { stripe } from "@/lib/stripe";
import ProductLinkEmail from "@/components/emails/product-link-email";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.text();

  const signature = headers().get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: unknown) {
    return new Response("Webhook error", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      const link = session.metadata?.link;

      const { data, error } = await resend.emails.send({
        from: "TECHCEMART <onboarding@resend.dev>",
        // TODO: Change this to the email of the user who purchased the product
        to: ["email@email.com"],
        subject: "Your Product from TECHCEMART",
        react: ProductLinkEmail({
          link: link as string,
        }),
      });

      console.log({ data });
      console.log({ error });

      break;
    }
    default: {
      console.log("unhandled event");
    }
  }

  return new Response(null, { status: 200 });
}
