"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { PRODUCT_CATEGORIES } from "@/constants/category";

export const ProductCategories = () => {
  const router = useRouter();

  const onRedirect = (href: string) => router.push(`/products/${href}`);

  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[630px] lg:shadow-none ml-28 2xl:ml-0 overflow-hidden">
      <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-6 lg:col-span-4">
        <div>
          <h2 className="mb-1 text-xl font-semibold text-white">Products</h2>
          <p className="mb-6 text-sm text-zinc-400">
            Browse our wide range of products.
          </p>
        </div>
        <Link
          href="/products"
          className="flex items-center gap-1 text-xs text-indigo-300 hover:underline group"
        >
          See all products
          <ArrowRightIcon className="size-4 group-hover:translate-x-2 transition" />
        </Link>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
        {PRODUCT_CATEGORIES.map((category) => (
          <Card
            key={category.id}
            onClick={() => onRedirect(category.name)}
            className="hover:bg-secondary cursor-pointer transition"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2 font-medium transition lg:text-sm text-xs">
                <category.icon className="size-5" />
                <span className="text-xs">{category.title}</span>
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
