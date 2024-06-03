import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { db } from "@/lib/prisma";
import { ProductCard } from "@/components/product-card";
import { ProductsCardWrapper } from "@/components/product-cards-wrapper";

const MyPurcahsesPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) redirect("/404");

  const purchases = await db.purchase.findMany({
    where: {
      userId: user.id,
    },
    include: {
      product: true,
    },
  });

  if (!purchases) return <div>No purchases</div>;

  return (
    <div className="w-full h-full py-12">
      <MaxWidthWrapper>
        <ProductsCardWrapper>
          {purchases.map((purcahse) => (
            <ProductCard
              key={purcahse.id}
              product={purcahse.product}
              timeStamps={purcahse.createdAt}
              isPurchased
            />
          ))}
        </ProductsCardWrapper>
      </MaxWidthWrapper>
    </div>
  );
};

export default MyPurcahsesPage;
