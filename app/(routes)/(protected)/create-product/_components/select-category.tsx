"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { PRODUCT_CATEGORIES } from "@/constants/category";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";

type Props = {
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
};

export const SelectedCategory = ({
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
      {PRODUCT_CATEGORIES.map((category) => (
        <Card
          key={category.id}
          className={cn(
            "hover:shadow-md transition cursor-pointer group border-2 text-muted-foreground hover:text-zinc-900",
            selectedCategory === category.name && "border-primary text-zinc-900"
          )}
          onClick={() => setSelectedCategory(category.name)}
        >
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-x-2 font-medium transition lg:text-sm text-xs">
              <category.icon className="size-5 lg:size-6" />
              <span>{category.title}</span>
            </CardTitle>
            {selectedCategory === category.name && (
              <button
                className="absolute -top-3 -right-3 p-0.5 bg-red-500 rounded-full text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCategory(null);
                }}
              >
                <XIcon className="size-4" />
              </button>
            )}
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};
