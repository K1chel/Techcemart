"use client";

import { useRouter } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { PRODUCT_CATEGORIES } from "@/constants/category";

export const MobileCategoriesAccordion = () => {
  const router = useRouter();

  const onRedirect = (href: string) => router.push(`/products/${href}`);

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="category">
        <AccordionTrigger className="w-full py-2.5 text-sm px-2 hover:bg-secondary rounded-lg">
          Categories
        </AccordionTrigger>
        <AccordionContent className="py-2 flex flex-col gap-y-1">
          {PRODUCT_CATEGORIES.map((category) => (
            <Button
              key={category.id}
              size="sm"
              variant="ghost"
              className="justify-start"
              onClick={() => onRedirect(category.name)}
            >
              {category.title}
            </Button>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
