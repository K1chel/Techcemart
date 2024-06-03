"use server";

import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { db } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export async function buyProduct(formData: FormData) {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/api/auth/login");
  }

  const id = formData.get("id") as string;

  if (!id) {
    throw new Error("Product ID is required");
  }

  const data = await db.product.findUnique({
    where: {
      id,
    },
    select: {
      name: true,
      summary: true,
      price: true,
      images: true,
    },
  });

  if (!data) {
    throw new Error("Product not found");
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: Math.round(data.price * 100),
          product_data: {
            name: data.name,
            description: data.summary,
            images: data.images,
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/payment/success/${id}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
  });

  return redirect(session.url as string);
}
