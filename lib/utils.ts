import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }
  const formattedDate = format(date, "dd MMMM yyyy");

  return formattedDate;
}
