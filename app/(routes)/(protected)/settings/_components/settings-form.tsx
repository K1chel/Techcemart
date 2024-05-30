"use client";

import { User } from "@prisma/client";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { updateSettings } from "@/actions/update-settings/index";
import { SubmitButton } from "@/components/submit-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UpdateSettingsState } from "@/actions/update-settings/types";
import { ErrorMessage } from "@/components/error-message";

type Props = {
  user: User;
};

export const SettingsForm = ({ user }: Props) => {
  const initialState: UpdateSettingsState = {
    message: "",
    status: "undefined",
  };
  const [state, formAction] = useFormState(updateSettings, initialState);
  const [initialFirstName, setInitialFirstName] = useState(user.firstName);
  const [initialLastName, setInitialLastName] = useState(user.lastName);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  useEffect(() => {
    if (state?.status === "error") {
      toast.error(state.message);
    } else if (state?.status === "success") {
      toast.success(state.message);
    }
  }, [state]);

  const isNameChanged =
    firstName !== initialFirstName || lastName !== initialLastName;

  return (
    <form className="py-12" action={formAction}>
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>
            Update your personal information and settings. This information will
            be used to personalize your experience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            <div className="flex flex-col gap-y-2">
              <Label>First Name</Label>
              <Input
                name="firstName"
                type="text"
                placeholder="John"
                required
                defaultValue={user.firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <ErrorMessage error={state?.errors?.["firstName"]?.[0]} />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Last Name</Label>
              <Input
                name="lastName"
                type="text"
                placeholder="Doe"
                required
                defaultValue={user.lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <ErrorMessage error={state?.errors?.["lastName"]?.[0]} />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Email</Label>
              <Input
                name="firstName"
                type="text"
                disabled
                defaultValue={user.email}
              />
            </div>
            <SubmitButton
              title="Save Changes"
              pendingTitle="Saving Changes..."
              disabled={!isNameChanged}
            />
          </div>
        </CardContent>
      </Card>
    </form>
  );
};
