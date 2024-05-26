import { Skeleton } from "@/components/ui/skeleton";

export const ProductLoader = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-3">
      <div className="relative xl:h-[280px] h-[250px]">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="flex items-center justify-between flex-1 px-0.5">
        <Skeleton className="w-1/2 h-8" />
        <Skeleton className="w-10 h-8 rounded-lg" />
      </div>
      <div className="w-full space-y-1">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>
      <Skeleton className="w-full h-10 rounded-lg" />
    </div>
  );
};
