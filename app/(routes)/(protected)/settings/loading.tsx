import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SettingsLoader = () => {
  return (
    <div className="w-full h-full py-12">
      <MaxWidthWrapper>
        <Card>
          <CardHeader>
            <Skeleton className="h-7 w-[200px]" />
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
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="flex flex-col gap-y-2">
                <Skeleton className="h-6 w-[100px]" />
                <Skeleton className="h-10 w-full" />
              </div>
              <Skeleton className="h-8 w-[180px]" />
            </div>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default SettingsLoader;
