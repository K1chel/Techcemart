import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

import { CreateProductForm } from "./_components/create-product-form";

const CreateProductPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return notFound();

  return (
    <div className="w-full h-full py-12">
      <CreateProductForm />
    </div>
  );
};

export default CreateProductPage;
