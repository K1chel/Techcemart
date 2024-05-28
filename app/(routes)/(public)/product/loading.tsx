import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

const ProductIdLoader = () => {
  return (
    <MaxWidthWrapper className="py-12">
      <div className="flex flex-col gap-y-3 w-full">
        <div className="flex lg:flex-row flex-col w-full gap-x-10">
          <div className="flex flex-1">
            <div className="aspect-w-4 aspect-h-2 bg-zinc-200 overflow-hidden w-full h-full rounded-lg border">
              <Skeleton className="rounded-lg w-full h-full" />
            </div>
          </div>
          <div className="flex flex-[0.8] flex-col gap-y-3 py-1.5 px-4 mt-3 lg:mt-0">
            <div className="flex items-center justify-center">
              <Skeleton className="text-center w-[370px] h-9" />
            </div>
            <div className="flex-1 space-y-1.5">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
            </div>
            <div className="flex flex-col gap-y-1 w-full">
              <div className="flex items-center gap-x-2 font-medium text-zinc-600 text-sm">
                <Skeleton className="w-[140px] h-6" />
                <Skeleton className="w-[70px] h-6" />
              </div>
              <div className="flex items-center gap-x-2 font-medium text-zinc-600 text-sm">
                <Skeleton className="w-[140px] h-6" />
                <Skeleton className="w-[70px] h-6" />
              </div>
              <div className="flex items-center gap-x-2 font-medium text-zinc-600 text-sm">
                <Skeleton className="w-[140px] h-6" />
                <Skeleton className="w-[70px] h-6" />
              </div>
              <Skeleton className="w-full h-9 mt-2" />
            </div>
          </div>
        </div>
        <div className="px-4 w-full flex flex-col gap-y-4 my-3">
          <Skeleton className="w-full h-px" />
          <Skeleton className="w-full h-7" />
          <Skeleton className="w-full h-7" />
          <Skeleton className="w-full h-7" />
          <Skeleton className="w-full h-7" />
          <Skeleton className="w-full h-7" />
          <Skeleton className="w-full h-7" />
          <Skeleton className="w-full h-7" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductIdLoader;
