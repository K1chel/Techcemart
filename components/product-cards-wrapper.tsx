import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ProductsCardWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 mt-5",
        className
      )}
    >
      {children}
    </div>
  );
};
