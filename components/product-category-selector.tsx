"use client";

import { CategoryType } from "@prisma/client";
import { useRouter } from "next/navigation";

import { PRODUCT_CATEGORIES } from "@/constants/category";
import { cn } from "@/lib/utils";

type Props = {
  category: CategoryType | string;
};

export const ProductCategorySelector = ({ category }: Props) => {
  const router = useRouter();

  const onRedirect = (category: string) => router.push(`/products/${category}`);

  const selectedCategory =
    category === "all"
      ? "All"
      : PRODUCT_CATEGORIES.find((c) => c.name === category)?.title;

  return (
    <div className="w-full flex items-center gap-x-3 justify-center overflow-x-auto">
      <button
        onClick={() => onRedirect("all")}
        className={cn(
          "px-2.5 py-1.5 bg-slate-200/50 hover:bg-slate-300/75 rounded-lg text-sm font-semibold transition-all",
          selectedCategory === "All" && "bg-slate-300/75 hover:bg-slate-300/75"
        )}
      >
        All
      </button>
      {PRODUCT_CATEGORIES.map((c) => (
        <button
          key={c.id}
          className={cn(
            "px-2.5 py-1.5 bg-slate-200/50 hover:bg-slate-300/75 rounded-lg text-sm font-semibold transition-all shrink-0",
            selectedCategory === c.title &&
              "bg-slate-300/75 hover:bg-slate-300/75"
          )}
          onClick={() => onRedirect(c.name)}
        >
          {c.title}
        </button>
      ))}
    </div>
  );
};
