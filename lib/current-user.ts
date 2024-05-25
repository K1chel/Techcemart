import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { db } from "@/lib/prisma";

export const currentUser = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  const currentUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!currentUser) return null;

  return currentUser;
};
