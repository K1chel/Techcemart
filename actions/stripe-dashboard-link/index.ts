"use server";

import { db } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function getStripeDashboardLink() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  const data = await db.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      connectedAccountId: true,
    },
  });

  if (!data) {
    throw new Error("Something went wrong");
  }

  const loginLink = await stripe.accounts.createLoginLink(
    data.connectedAccountId as string
  );

  return redirect(loginLink.url);
}
