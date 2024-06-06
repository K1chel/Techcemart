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
  showSellCount?: boolean;
};

export const ProductCard = ({
  product,
  timeStamps,
  isPurchased,
  showSellCount,
}: Props) => {
  const { images, name, price, summary, id } = product;

  return (
    <div className="w-full h-full flex flex-col gap-y-3 bg-slate-100">
      {images.length > 1 ? (
        <Carousel>
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem
                key={index}
                className="relative xl:h-[280px] h-[250px] w-full"
              >
                <Link
                  href={`/product/${id}`}
                  className="relative xl:h-[280px] h-[250px]"
                >
                  <Image
                    alt="Product image"
                    src={img}
                    width={280}
                    height={280}
                    className="object-cover w-full rounded-lg bg-slate-200 p-1 border border-slate-900/10 bg-slate-900/5 h-full"
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
            className="object-cover w-full rounded-lg bg-slate-200 p-1 border border-slate-900/10 bg-slate-900/5"
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
      {showSellCount && (
        <div className="border-t pt-1.5 flex items-center justify-between text-xs lg:text-sm text-muted-foreground font-medium px-1.5">
          <span>Sell count:</span>
          <span>{product.sellCount}</span>
        </div>
      )}
      {timeStamps && (
        <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-1.5">
          <span>Purchased on</span>
          <span>{formatDate(timeStamps)}</span>
        </div>
      )}
      {isPurchased ? (
        // TODO: action to send email with current product zip file
        <Button>Send email with product</Button>
      ) : (
        <Link href={`/product/${id}`}>
          <Button className="w-full font-medium">View Product</Button>
        </Link>
      )}
    </div>
  );
};
