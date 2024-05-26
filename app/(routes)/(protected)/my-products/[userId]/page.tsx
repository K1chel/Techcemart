import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ProductCard } from "@/components/product-card";
import { currentUser } from "@/lib/current-user";
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";

type Props = {
  params: {
    userId: string;
  };
};

const MyProductsPage = async ({ params }: Props) => {
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
      <MaxWidthWrapper className="flex flex-col items-center justify-center h-full">
        <h1>No products found</h1>
        {/* TODO: REDIRECT TO CREATE PRODUCT */}
        <p>CREATE ONE</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 mt-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MyProductsPage;
