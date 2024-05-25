import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CreateProductLoading = () => {
  return (
    <div className="w-full h-full py-12">
      <MaxWidthWrapper>
        <Card className="cursor-not-allowed">
          <CardHeader>
            <Skeleton className="h-7 w-[250px]" />
            <Skeleton className="h-5 w-[300px]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              <div className="flex flex-col gap-y-2">
                <Skeleton className="h-6 w-[100px]" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="flex flex-col gap-y-2">
                <Skeleton className="h-6 w-[100px]" />
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
                  {[...Array(6)].map((_, idx) => (
                    <Skeleton key={idx} className="w-full h-16" />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <Skeleton className="h-6 w-[100px]" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="flex flex-col gap-y-2">
                <Skeleton className="h-6 w-[100px]" />
                <Skeleton className="h-24 w-full" />
              </div>
              <div className="flex flex-col gap-y-2">
                <Skeleton className="h-6 w-[100px]" />
                <div className="flex items-center flex-wrap gap-x-4 gap-y-2">
                  {[...Array(6)].map((_, idx) => (
                    <Skeleton key={idx} className="size-10" />
                  ))}
                </div>
                <Skeleton className="w-full h-36" />
              </div>
              <div className="flex flex-col gap-y-2">
                <Skeleton className="h-6 w-[100px]" />
                <Skeleton className="h-40 w-full" />
              </div>
              <div className="flex flex-col gap-y-2">
                <Skeleton className="h-6 w-[100px]" />
                <Skeleton className="h-40 w-full" />
              </div>
              <Skeleton className="h-10 w-[200px]" />
            </div>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default CreateProductLoading;
