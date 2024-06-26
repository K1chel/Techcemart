import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

type Props = {
  title: string;
  pendingTitle: string;
  className?: string;
  disabled?: boolean;
};

export const SubmitButton = ({
  title,
  className,
  pendingTitle,
  disabled,
}: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      className={cn("", className)}
    >
      {pending ? (
        <>
          <Loader2Icon className="size-5 text-white animate-spin mr-1.5" />
          {pendingTitle}
        </>
      ) : (
        <span>{title}</span>
      )}
    </Button>
  );
};
