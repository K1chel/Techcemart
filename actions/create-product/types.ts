import * as z from "zod";

export type CreateProductState = {
  status: "error" | "success" | "undefined";
  errors?: {
    [key: string]: string[];
  };
  message?: string | null;
};

export const productSchema = z.object({
  name: z.string().min(5, { message: "Name must be at least 5 characters" }),
  price: z.number().min(1, { message: "Price must be at least $1" }),
  summary: z
    .string()
    .min(10, { message: "Summary must be at least 10 characters" })
    .max(250, { message: "Summary must be at most 250 characters" }),
  description: z.string().min(30, { message: "Describe more your product" }),
  images: z.array(z.string({ message: "This field require at least 1 image" })),
  productFile: z.string({ message: "This field require a file" }),
  category: z.string({ message: "Please select a category" }),
});
