import { db } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const productId = params.id;
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const userToUpdate = await db.user.findUnique({
    where: { id: user.id },
  });

  if (!userToUpdate) {
    return new NextResponse("User not found", { status: 404 });
  }

  const productToUpdate = await db.product.findUnique({
    where: { id: productId },
  });

  if (!productToUpdate) {
    return new NextResponse("Product not found", { status: 404 });
  }

  const data = await db.purchase.create({
    data: {
      user: { connect: { id: userToUpdate.id } },
      product: { connect: { id: productToUpdate.id } },
    },
  });

  await db.product.update({
    where: {
      id: productToUpdate.id,
    },
    data: {
      sellCount: {
        increment: 1,
      },
    },
  });

  return redirect("/payment/success");
}
