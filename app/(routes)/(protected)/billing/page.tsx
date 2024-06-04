import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { currentUser } from "@/lib/current-user";
import { BillingForm } from "./_components/billing-form";

const BillingPage = async () => {
  noStore();
  const user = await currentUser();

  if (!user) redirect("/");

  const isStripeConnected = !!user.stripeConnectedAccount;

  return (
    <div className="w-full h-full py-12">
      <MaxWidthWrapper>
        <BillingForm isStripeConnected={isStripeConnected} />
      </MaxWidthWrapper>
    </div>
  );
};

export default BillingPage;
