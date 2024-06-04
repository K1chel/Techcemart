"use client";

import { CheckCircleIcon } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
  const { user } = useKindeBrowserClient();
  const redirectURL = user ? `/my-purchases` : "/";

  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      <CheckCircleIcon className="text-green-500 size-14" />
      <div className="flex flex-col gap-y-3 items-center justify-center text-center">
        <h2 className="text-3xl font-semibold">Payment Successful!</h2>
        <p className="text-base font-medium text-center text-muted-foreground">
          Thank you for your purchase. Your transaction has been completed, and
          a product was sent to your email. You may log into your account to
          view details of this transaction.
        </p>
      </div>
      <Link href={redirectURL} className="w-full px-3">
        <Button className="w-full" size="lg">
          {user ? "View My Purchases" : "Go Back to Home"}
        </Button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
