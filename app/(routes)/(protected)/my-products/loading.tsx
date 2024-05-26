import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ProductLoader } from "@/components/product-loader";
import { Skeleton } from "@/components/ui/skeleton";

const MyProductsLoader = () => {
  return (
    <MaxWidthWrapper className="h-full w-full py-12">
      <div className="py-3 flex flex-col gap-y-2">
        <Skeleton className="w-[285px] h-12" />
        <Skeleton className="w-[450px] h-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 mt-5">
        {[...Array(6)].map((_, i) => (
          <ProductLoader key={i} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default MyProductsLoader;
