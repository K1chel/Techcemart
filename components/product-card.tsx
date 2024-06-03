import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type Product as ProductType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/utils";

type Props = {
  product: ProductType;
  timeStamps?: Date;
  isPurchased?: boolean;
};

export const ProductCard = ({ product, timeStamps, isPurchased }: Props) => {
  const { images, name, price, summary, id } = product;

  return (
    <div className="w-full h-full flex flex-col gap-y-3 bg-slate-100">
      {images.length > 1 ? (
        <Carousel>
          <CarouselContent>
            {images.map((image, idx) => (
              <CarouselItem key={idx}>
                <Link
                  href={`/product/${id}`}
                  className="relative xl:h-[280px] h-[250px]"
                >
                  <Image
                    alt="Product image"
                    src={image}
                    fill
                    className="object-cover w-full rounded-lg bg-slate-200"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>
      ) : (
        <Link
          href={`/product/${id}`}
          className="relative xl:h-[280px] h-[250px]"
        >
          <Image
            alt="Product image"
            src={images[0]}
            fill
            className="object-cover w-full rounded-lg bg-slate-200"
          />
        </Link>
      )}
      <div className="flex items-center justify-between flex-1 px-0.5">
        <Link
          href={`/product/${id}`}
          className="flex-1 truncate font-medium text-base md:text-lg"
        >
          {name}
        </Link>
        <button className="px-1.5 py-0.5 rounded-lg border-2 bg-primary/50 border-primary text-slate-100 text-sm md:text-base">
          ${price.toFixed(2)}
        </button>
      </div>
      <hr />
      <span className="line-clamp-3 text-xs md:text-sm text-slate-600 tracking-wide">
        {summary}
      </span>
      {timeStamps && (
        <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-1.5">
          <span>Purchased on</span>
          <span>{formatDate(timeStamps)}</span>
        </div>
      )}
      {isPurchased ? (
        <Button>Send email with product</Button>
      ) : (
        <Link href={`/product/${id}`}>
          <Button className="w-full font-medium">View Product</Button>
        </Link>
      )}
    </div>
  );
};
