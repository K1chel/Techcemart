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
  gradient: string;
  iconColor: string;
}

export const PRODUCT_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "books",
    title: "Books",
    icon: BookAIcon,
    gradient: "card_category_gradient_1",
    iconColor: "#e54271",
  },
  {
    id: 2,
    name: "course",
    title: "Course",
    icon: GraduationCapIcon,
    gradient: "card_category_gradient_2",
    iconColor: "#9757df",
  },
  {
    id: 3,
    name: "workshop",
    title: "Workshop",
    icon: PencilRulerIcon,
    gradient: "card_category_gradient_3",
    iconColor: "#b17fe9",
  },
  {
    id: 4,
    name: "starterkit",
    title: "Starter Kit",
    icon: FolderKanbanIcon,
    gradient: "card_category_gradient_4",
    iconColor: "#559cec",
  },
  {
    id: 5,
    name: "codingchallenge",
    title: "Coding Challenge",
    icon: Code2Icon,
    gradient: "card_category_gradient_5",
    iconColor: "#2162b2",
  },
  {
    id: 6,
    name: "other",
    title: "Other",
    icon: EllipsisIcon,
    gradient: "card_category_gradient_6",
    iconColor: "#2fa65a",
  },
] as const;
