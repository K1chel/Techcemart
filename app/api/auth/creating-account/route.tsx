import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { unstable_noStore as noStore } from "next/cache";

import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("User not found");
  }

  let dbUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    const account = await stripe.accounts.create({
      email: user.email as string,
      controller: {
        losses: {
          payments: "application",
        },
        fees: {
          payer: "application",
        },
        stripe_dashboard: {
          type: "express",
        },
      },
    });

    dbUser = await db.user.create({
      data: {
        id: user.id,
        email: user.email as string,
        firstName: user.given_name || "First Name",
        lastName: user.family_name || "Last Name",
        profileImage: `https://avatar.vercel.sh/${user.given_name}`,
        connectedAccountId: account.id,
      },
    });
  }

  return NextResponse.redirect(process.env.NEXT_PUBLIC_APP_URL!);
}
