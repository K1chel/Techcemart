import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const MaxWidthWrapper = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-screen-2xl mx-auto w-full container", className)}>
      {children}
    </div>
  );
};
