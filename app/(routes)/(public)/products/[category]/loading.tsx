import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ProductsCardWrapper } from "@/components/product-cards-wrapper";
import { ProductLoader } from "@/components/product-loader";
import { Skeleton } from "@/components/ui/skeleton";
import { PRODUCT_CATEGORIES } from "@/constants/category";

const ProductsCategoryLoader = () => {
  return (
    <div className="w-full h-full py-12">
      <MaxWidthWrapper>
        <div className="w-full flex items-center gap-x-3 justify-center overflow-x-auto">
          <Skeleton className="px-2.5 py-1.5 rounded-lg text-sm font-semibold">
            <button className="opacity-0">All</button>
          </Skeleton>
          {PRODUCT_CATEGORIES.map((c) => (
            <Skeleton
              key={c.id}
              className="px-2.5 py-1.5 rounded-lg text-sm font-semibold shrink-0"
            >
              <button className="opacity-0">{c.title}</button>
            </Skeleton>
          ))}
        </div>
        <ProductsCardWrapper>
          {[...Array(6)].map((_, i) => (
            <ProductLoader key={i} />
          ))}
        </ProductsCardWrapper>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProductsCategoryLoader;
