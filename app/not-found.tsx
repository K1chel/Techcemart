import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600">Page not found</p>
      <Link href="/">
        <Button className="group font-semibold" size="lg">
          <ArrowLeftIcon className="mr-1.5 size-4 group-hover:-translate-x-1.5 transition" />
          Back home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
