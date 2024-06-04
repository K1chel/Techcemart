import { notFound, redirect } from "next/navigation";

import { currentUser } from "@/lib/current-user";
import { CreateProductForm } from "./_components/create-product-form";

const CreateProductPage = async () => {
  const user = await currentUser();

  if (!user) return notFound();

  if (!!!user.stripeConnectedAccount) return redirect("/billing");

  return (
    <div className="w-full h-full py-12">
      <CreateProductForm />
    </div>
  );
};

export default CreateProductPage;
