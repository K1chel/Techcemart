import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
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
    dbUser = await db.user.create({
      data: {
        id: user.id,
        email: user.email as string,
        firstName: user.given_name || "First Name",
        lastName: user.family_name || "Last Name",
        profileImage: `https://avatar.vercel.sh/${user.given_name}`,
        connectedAccountId: "123456789",
      },
    });
  }

  return NextResponse.redirect(process.env.NEXT_PUBLIC_APP_URL!);
}
