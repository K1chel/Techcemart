import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/current-user";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  params: {
    returnId: string;
  };
};

const ReturnIdPage = async ({ params: { returnId } }: Props) => {
  const user = await currentUser();

  if (!user) return null;

  const isConnected = !!user.stripeConnectedAccount;

  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      {isConnected ? (
        <CheckCircleIcon className="text-green-500 size-14" />
      ) : (
        <XCircleIcon className="text-red-500 size-14" />
      )}
      <div className="flex flex-col gap-y-3 items-center justify-center text-center">
        <h2 className="text-3xl font-semibold">
          {isConnected ? "Connected" : "Not Connected"}
        </h2>
        <p className="text-base font-medium text-center text-muted-foreground">
          {isConnected
            ? "You have successfully connected to Stripe. You can now manage your billing information. Click the button below to go back to billing. Now you can create a products and start selling."
            : "You have not connected to Stripe yet. Click the button below to connect to Stripe. Once you connect, you can manage your billing information, and you can create a products and start selling."}
        </p>
      </div>
      <Link href="/billing" className="w-full px-3">
        <Button className="w-full" size="lg">
          Go Back to Billing
        </Button>
      </Link>
    </div>
  );
};

export default ReturnIdPage;
