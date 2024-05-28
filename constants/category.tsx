import { ReactNode } from "react";
import {
  BookAIcon,
  GraduationCapIcon,
  PencilRulerIcon,
  Code2Icon,
  EllipsisIcon,
  LucideIcon,
  FolderKanbanIcon,
} from "lucide-react";

export interface Category {
  name: string;
  title: string;
  icon: LucideIcon;
  id: number;
}

export const PRODUCT_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "books",
    title: "Books",
    icon: BookAIcon,
  },
  {
    id: 2,
    name: "course",
    title: "Course",
    icon: GraduationCapIcon,
  },
  {
    id: 3,
    name: "workshop",
    title: "Workshop",
    icon: PencilRulerIcon,
  },
  {
    id: 4,
    name: "starterkit",
    title: "Starter Kit",
    icon: FolderKanbanIcon,
  },
  {
    id: 5,
    name: "codingchallenge",
    title: "Coding Challenge",
    icon: Code2Icon,
  },
  {
    id: 6,
    name: "other",
    title: "Other",
    icon: EllipsisIcon,
  },
] as const;
