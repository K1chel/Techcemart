"use client";

import { XCircleIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const PaymentCancel = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6">
      <XCircleIcon className="text-red-500 size-14" />
      <div className="flex flex-col gap-y-3 items-center justify-center text-center">
        <h2 className="text-3xl font-semibold">Payment Cancelled</h2>
        <p className="text-base font-medium text-center text-muted-foreground">
          Your payment has been cancelled, also you have not been charged. If
          there was an issue with your payment, please try again. For any
          further assistance, please contact our support team.
        </p>
      </div>
      <Link href="/" className="w-full px-3">
        <Button className="w-full" size="lg">
          Go Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default PaymentCancel;
