import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Card } from "@/components/ui/card";

const SettingsLoader = () => {
  return (
    <div className="w-full h-full py-12">
      <MaxWidthWrapper>
        <Card>
          <p>loading...</p>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};

export default SettingsLoader;
