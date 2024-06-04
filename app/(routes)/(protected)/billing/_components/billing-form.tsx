"use client";

import { createStripeDashboardLink } from "@/actions/create-stripe-dashboard-link";
import { getStripeDashboardLink } from "@/actions/stripe-dashboard-link";
import { SubmitButton } from "@/components/submit-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  isStripeConnected: boolean;
};

export const BillingForm = ({ isStripeConnected }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Information</CardTitle>
        <CardDescription>
          Here you can manage your billing information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isStripeConnected ? (
          <form action={getStripeDashboardLink}>
            <SubmitButton
              title="View Stripe Dashboard"
              pendingTitle="Redirecting to Stripe..."
            />
          </form>
        ) : (
          <form action={createStripeDashboardLink}>
            <SubmitButton
              title="Connect to Stripe Dashboard"
              pendingTitle="Redirecting to Stripe..."
            />
          </form>
        )}
      </CardContent>
    </Card>
  );
};
