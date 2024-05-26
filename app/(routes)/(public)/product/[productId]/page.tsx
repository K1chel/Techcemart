import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ProductFullCard } from "@/components/product-full-card";
import { db } from "@/lib/prisma";

type Props = {
  params: {
    productId: string;
  };
};

const ProductIdPage = async ({ params }: Props) => {
  const { productId } = params;

  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product)
    return (
      <MaxWidthWrapper className="flex items-center justify-center flex-col h-full">
        <span>404</span>
        <span>Product not found</span>
      </MaxWidthWrapper>
    );

  return (
    <MaxWidthWrapper className="py-12">
      <ProductFullCard product={product} />
    </MaxWidthWrapper>
  );
};

export default ProductIdPage;
