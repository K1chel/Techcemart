import { type Product as ProductType } from "@prisma/client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  product: ProductType;
};

export const ProductCard = ({ product }: Props) => {
  const { category, createdAt, images, name, price, sellCount, summary, id } =
    product;

  return (
    <div className="w-full h-full flex flex-col gap-y-3">
      {images.length > 1 ? (
        <Carousel>
          <CarouselContent>
            {images.map((image, idx) => (
              <CarouselItem key={idx}>
                <div className="relative xl:h-[280px] h-[250px]">
                  <Image
                    alt="Product image"
                    src={image}
                    fill
                    className="object-cover w-full rounded-lg bg-slate-200"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>
      ) : (
        <div className="relative xl:h-[280px] h-[250px]">
          <Image
            alt="Product image"
            src={images[0]}
            fill
            className="object-cover w-full rounded-lg bg-slate-200"
          />
        </div>
      )}
      <div className="flex items-center justify-between flex-1 px-0.5">
        <span className="flex-1 truncate font-medium text-base md:text-lg">
          {name}
        </span>
        <button className="px-1.5 py-0.5 rounded-lg border-2 bg-primary/50 border-primary text-slate-100 text-sm md:text-base">
          ${price}
        </button>
      </div>
      <hr />
      <span className="line-clamp-3 text-xs md:text-sm text-slate-600 tracking-wide">
        {summary}
      </span>
      <Link href={`/product/${id}`}>
        <Button className="w-full font-medium">View Product</Button>
      </Link>
    </div>
  );
};
