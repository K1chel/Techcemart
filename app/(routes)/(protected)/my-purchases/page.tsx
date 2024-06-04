import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { db } from "@/lib/prisma";
import { ProductCard } from "@/components/product-card";
import { ProductsCardWrapper } from "@/components/product-cards-wrapper";
import Link from "next/link";

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

  if (!purchases.length)
    return (
      <div className="w-full h-full py-12">
        <MaxWidthWrapper>
          <div className="flex items-center justify-center flex-col gap-y-2 mt-20">
            <h3 className="lg:text-4xl text-2xl text-zinc-900 font-bold">
              No Purchases Yet
            </h3>
            <div className="max-w-md mx-auto text-center">
              You haven&apos;t purchased any products yet. Go to the{" "}
              <Link
                href="/products/all"
                className="text-primary underline underline-offset-4"
              >
                products
              </Link>{" "}
              to check all available products.
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    );
  return (
    <div className="w-full h-full py-12">
      <MaxWidthWrapper>
        <div className="py-3 flex flex-col gap-y-2">
          <h3 className="lg:text-4xl text-2xl text-zinc-900 font-bold">
            Your Purchases
          </h3>
          <p className="text-sm lg:text-base font-normal text-muted-foreground">
            Here are all the products you have purchased from our store. Enjoy
            them! You can resend the download link if you lost it.
          </p>
        </div>
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
