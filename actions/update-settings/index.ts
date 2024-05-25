"use server";

import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/prisma";

import { UpdateSettingsSchema, UpdateSettingsState } from "./types";
import { revalidatePath } from "next/cache";

export async function updateSettings(prevState: any, formData: FormData) {
  const user = await currentUser();
  let state: UpdateSettingsState;

  if (!user) {
    throw new Error("Unauthorized");
  }

  const validatedFields = UpdateSettingsSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  });

  if (!validatedFields.success) {
    state = {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
    return state;
  }

  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      firstName: validatedFields.data.firstName,
      lastName: validatedFields.data.lastName,
    },
  });

  state = {
    status: "success",
    message: "Settings updated successfully",
  };

  revalidatePath("/settings");
  revalidatePath("/");
  return state;
}
