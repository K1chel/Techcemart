"use server";

import { CategoryType } from "@prisma/client";

import { currentUser } from "@/lib/current-user";
import { CreateProductState, productSchema } from "./types";
import { db } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createProduct(prevState: any, formData: FormData) {
  const { user } = await currentUser();
  let state: CreateProductState;

  if (!user) {
    throw new Error("Unauthorized");
  }

  const validatedFields = productSchema.safeParse({
    name: formData.get("name"),
    price: Number(formData.get("price")),
    summary: formData.get("summary"),
    description: formData.get("description"),
    images: JSON.parse(formData.get("images") as string),
    productFile: formData.get("productFile"),
    category: formData.get("category"),
  });

  if (!validatedFields.success) {
    state = {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors in the form",
    };

    return state;
  }

  const data = await db.product.create({
    data: {
      name: validatedFields.data.name,
      price: validatedFields.data.price,
      summary: validatedFields.data.summary,
      description: JSON.parse(validatedFields.data.description),
      images: validatedFields.data.images,
      productFile: validatedFields.data.productFile,
      category: validatedFields.data.category as CategoryType,
      sellCount: 0,
      userId: user.id,
    },
  });

  return redirect(`/product/${data.id}`);
}
