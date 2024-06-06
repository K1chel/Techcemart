import Link from "next/link";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ProductCard } from "@/components/product-card";
import { ProductsCardWrapper } from "@/components/product-cards-wrapper";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/prisma";

type Props = {
  params: {
    userId: string;
  };
};

const MyProductsPage = async ({ params }: Props) => {
  noStore();
  const user = await currentUser();

  const data = await db.user.findUnique({
    where: {
      id: params.userId,
    },
  });

  if (!user || !data) return notFound();

  if (user.id !== data.id) return <p>Not owner of this page</p>; // TODO: notFound()

  const products = await db.product.findMany({
    where: {
      userId: data.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!products.length)
    return (
      <MaxWidthWrapper className="flex flex-col items-center justify-center h-full max-w-xl mx-auto gap-y-1">
        <h3 className="text-lg lg:text-xl font-semibold text-center text-muted-foreground">
          You have not created any products yet. Click the button below to
          create your first product.
        </h3>
        <Button asChild size="sm" variant="link">
          <Link href="/create-product">Create a product</Link>
        </Button>
      </MaxWidthWrapper>
    );

  return (
    <div className="flex flex-col py-12 w-full h-full">
      <MaxWidthWrapper>
        <div className="py-3 flex flex-col">
          <h1 className="text-3xl md:text-5xl font-semibold">My Products</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Here you can see all the products you have created. You can also add
            product, edit or delete them.
          </p>
        </div>
        <hr />
        <ProductsCardWrapper>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} showSellCount />
          ))}
        </ProductsCardWrapper>
      </MaxWidthWrapper>
    </div>
  );
};

export default MyProductsPage;
