"use client";

import { Product } from "@prisma/client";
import Image from "next/image";

import { formatDate } from "@/lib/utils";
import { JSONContent } from "@tiptap/react";
import { ProductDescription } from "./product-description";
import { SubmitButton } from "./submit-button";

type Props = {
  product: Product;
};

export const ProductFullCard = ({ product }: Props) => {
  const { category, createdAt, description, images, name, price, summary } =
    product;

  return (
    <div className="flex flex-col gap-y-3 w-full">
      <div className="flex lg:flex-row flex-col w-full gap-x-10">
        <div className="flex flex-1">
          <div className="aspect-w-4 aspect-h-2 bg-zinc-200 overflow-hidden w-full h-full rounded-lg border">
            <Image
              src={images[0]}
              alt="Product Image"
              fill
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-[0.8] flex-col gap-y-3 py-1.5 px-4 mt-3 lg:mt-0">
          <span className="text-center text-xl lg:text-2xl font-semibold">
            {name}
          </span>
          <div className="flex-1">
            <span className="text-sm lg:text-base font-medium text-zinc-800 tracking-tight">
              {summary}
            </span>
          </div>
          <div className="flex flex-col gap-y-1 w-full">
            <div className="flex items-center gap-x-2 font-medium text-zinc-600 text-sm">
              <span>Price:</span>
              <span>${price}</span>
            </div>
            <div className="flex items-center gap-x-2 font-medium text-zinc-600 text-sm">
              <span>Category:</span>
              <span>{category}</span>
            </div>
            <div className="flex items-center gap-x-2 font-medium text-zinc-600 text-sm">
              <span>Created:</span>
              <span>{formatDate(createdAt)}</span>
            </div>
            <SubmitButton
              title="Buy Now"
              pendingTitle="Redirecting to payment page"
              className="mt-2"
            />
          </div>
        </div>
      </div>
      <div className="px-4 w-full flex flex-col gap-y-4 my-3">
        <hr className="w-full" />
        <ProductDescription content={description as JSONContent} />
      </div>
    </div>
  );
};
