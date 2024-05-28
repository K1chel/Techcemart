import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { Category } from "@/constants/category";

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

export function categoryToLocalString(category: Category["name"]): string {
  let result;

  switch (category) {
    case "books": {
      result = "Books";
      break;
    }
    case "course": {
      result = "Course";
      break;
    }
    case "workshop": {
      result = "Workshop";
      break;
    }
    case "starterkit": {
      result = "Starter Kit";
      break;
    }
    case "codingchallenge": {
      result = "Coding Challenge";
      break;
    }
    case "other": {
      result = "Other";
      break;
    }
    default: {
      result = "Other";
    }
  }

  return result;
}
