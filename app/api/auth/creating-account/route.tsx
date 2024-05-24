import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("User not found");
  }

  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.email as string,
        firstName: user.given_name || "First Name",
        lastName: user.family_name || "Last Name",
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        connectedAccountId: "123456789",
      },
    });
  }

  return NextResponse.redirect(process.env.NEXT_PUBLIC_APP_URL!);
}
