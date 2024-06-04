import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const BillingLoader = () => {
  return (
    <div className="w-full h-full py-12">
      <MaxWidthWrapper>
        <Card>
          <CardHeader>
            <Skeleton className="h-10 w-[240px]" />
            <Skeleton className="h-5 w-[540px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-[235px]" />
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default BillingLoader;
