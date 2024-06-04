"use server";

import { db } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createStripeDashboardLink(formData: FormData) {
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

  const accountLink = await stripe.accountLinks.create({
    account: data?.connectedAccountId as string,
    refresh_url: process.env.NEXT_PUBLIC_APP_URL + "/billing",
    return_url:
      process.env.NEXT_PUBLIC_APP_URL + `/return/${data.connectedAccountId}`,
    type: "account_onboarding",
  });

  return redirect(accountLink.url);
}
