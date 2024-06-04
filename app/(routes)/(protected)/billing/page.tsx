import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { currentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";
import { BillingForm } from "./_components/billing-form";

const BillingPage = async () => {
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
