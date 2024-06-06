import { CategoryType, Product } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ProductCategorySelector } from "@/components/product-category-selector";
import { db } from "@/lib/prisma";
import { ProductCard } from "@/components/product-card";
import { ProductsCardWrapper } from "@/components/product-cards-wrapper";
import ProductsCategoryLoader from "./loading";

type Props = {
  params: {
    category: string;
  };
};

const ProductsCategoryPage = async ({ params: { category } }: Props) => {
  noStore();
  let data;

  if (category === "all") {
    data = await db.product.findMany();
  } else {
    data = await db.product.findMany({
      where: {
        category: category as CategoryType,
      },
    });
  }

  return (
    <div className="w-full h-full py-12">
      <MaxWidthWrapper className="space-y-10">
        <ProductCategorySelector category={category} />
        {!!data.length ? (
          <ProductsCardWrapper>
            {data.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductsCardWrapper>
        ) : (
          <div className="flex flex-col gap-y-3 pt-20 w-full">
            <h3 className="text-lg lg:text-xl font-semibold text-center text-muted-foreground">
              No products found in this category.
            </h3>
            <p className="text-center text-muted-foreground">
              Please check back later or try a different category.
            </p>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default ProductsCategoryPage;
