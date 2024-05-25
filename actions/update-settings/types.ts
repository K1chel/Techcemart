import * as z from "zod";

export const UpdateSettingsSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name required at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name required at least 2 characters" }),
});

export type UpdateSettingsState = {
  status: "error" | "success" | "undefined";
  errors?: {
    [key: string]: string[];
  };
  message?: string | null;
};
