import Image from "next/image";
import { Product } from "@prisma/client";

import { db } from "@/lib/prisma";
import Link from "next/link";

export const MostRecent = async () => {
  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!products) return null;

  return (
    <div className="flex flex-col text-white py-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-10">
        <div className="flex justify-center w-full">
          <h3 className="font-bold lg:text-6xl text-3xl">
            Most Recent Products
            <div className="flex lg:justify-start justify-center">
              <Image
                src="/landing/separator-gray.svg"
                alt="separator"
                width={120}
                height={5}
                className="mt-4"
              />
            </div>
          </h3>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-full rounded-lg">
            <ProductCard product={products[0]} />
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="lg:grid hidden grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-7 mt-7">
        {products.slice(1, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Mobile */}
      <div className="grid lg:hidden grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-7 mt-7">
        {products.slice(1, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  if (!product) return null;

  return (
    <Link
      href={`/product/${product.id}`}
      className="bg-white shadow-lg text-zinc-800 rounded-lg w-full flex flex-col"
    >
      <Image
        src={product.images[0]}
        alt={product.name}
        width={300}
        height={340}
        className="object-cover w-full rounded-lg rounded-b-none max-h-[340px] h-full"
      />
      <div className="flex items-center justify-between border-t px-4 py-2">
        <span className="max-w-[50%] w-full truncate font-medium">
          {product.name}
        </span>
        <span className="px-2 py-1 bg-primary text-white rounded-lg">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
};
