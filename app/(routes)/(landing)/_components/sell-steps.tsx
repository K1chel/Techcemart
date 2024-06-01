import Image from "next/image";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const SellSteps = () => {
  return (
    <div className="w-full flex flex-col lg:gap-y-20 gap-y-10 py-14 max-w-screen-xl mx-auto">
      <div className="flex flex-col">
        <h3
          className="text-center font-extrabold lg:text-7xl text-4xl"
          style={{
            opacity: 0.1485,
            background:
              "linear-gradientSrc(158deg, #651FFF 9.95%, #00BCD4 92.81%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SELL PRODUCTS
        </h3>
        <p className="text-center lg:text-3xl text-xl font-extrabold lg:-mt-8 -mt-3 max-w-2xl mx-auto">
          3 simple steps to create and sale your Product
        </p>
      </div>
      <div className="flex items-center gap-x-10 w-full flex-col gap-y-5 lg:flex-row justify-center">
        <SellStepsCard
          title="Create Account"
          description="Create an accont to be able to sell your products"
          gradientSrc="/landing/sell-step/sell-step-gradient-1.svg"
          image="/landing/sell-step/sell-step-1.png"
        />
        <Image
          src="/landing/separator-purple.svg"
          alt="separator-purple"
          width={75}
          height={10}
          className="rotate-[90deg] lg:rotate-0 mt-5 lg:mt-0"
        />
        <SellStepsCard
          className="mt-5 lg:mt-0"
          title="Upload Product"
          description="Upload your product and set the price"
          gradientSrc="/landing/sell-step/sell-step-gradient-2.svg"
          image="/landing/sell-step/sell-step-2.png"
        />
        <Image
          src="/landing/separator-purple.svg"
          alt="separator-purple"
          width={75}
          height={10}
          className="rotate-[90deg] lg:rotate-0 mt-5 lg:mt-0"
        />
        <SellStepsCard
          className="mt-5 lg:mt-0"
          title="Start Selling"
          description="Start selling your product and make money"
          gradientSrc="/landing/sell-step/sell-step-gradient-3.svg"
          image="/landing/sell-step/sell-step-3.png"
        />
      </div>
    </div>
  );
};

type SellStepsCardProps = {
  className?: string;
  gradientSrc: string;
  title: string;
  description: string;
  image: string;
};

const SellStepsCard = ({
  description,
  gradientSrc,
  image,
  title,
  className,
}: SellStepsCardProps) => {
  return (
    <div
      className={cn(
        "size-52 lg:size-60 flex flex-col justify-between items-center pb-3 gap-y-5 rounded-lg relative",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 z-1">
        <Image
          src={gradientSrc}
          alt="gradient"
          width={320}
          height={320}
          className="w-full"
        />
      </div>
      <div className="flex items-center justify-start z-30">
        <Image
          src={image}
          alt={title}
          width={145}
          height={145}
          className="lg:-mt-10 w-[100px] h-[100px] lg:w-[145px] lg:h-[145px] mt-0 object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 items-center justify-center">
        <h4
          className={cn("text-base lg:text-lg font-bold", montserrat.className)}
        >
          {title}
        </h4>
        <p
          className={cn(
            "text-sm text-muted-foreground text-center font-medium",
            montserrat.className
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
