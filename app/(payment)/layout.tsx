import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const PaymentLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex items-center gap-y-3 justify-center  px-4 md:px-8 lg:px-12 bg-zinc-100">
      <div className="flex flex-col gap-y-2 max-w-xl w-full">
        <Link href="/">
          <Button variant="link" className="group">
            <ArrowLeftIcon className="size-4 group-hover:-translate-x-1.5 transition-transform mr-2" />
            <span>Back home</span>
          </Button>
        </Link>
        <main className="border  py-6 px-4 rounded-xl relative shadow-lg bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PaymentLayout;
