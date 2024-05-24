import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { db } from "@/lib/prisma";

export const currentUser = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  const currentUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!currentUser) {
    throw new Error("User not found");
  }

  return { user: currentUser };
};
