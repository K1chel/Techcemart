import { LucideIcon } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

import { PRODUCT_CATEGORIES } from "@/constants/category";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
});

export const Categories = () => {
  return (
    <div className="flex flex-col lg:gap-y-20 gap-y-10 w-full">
      <h2
        className={cn(
          "text-center font-semibold lg:text-6xl md:text-4xl text-2xl",
          montserrat.className
        )}
      >
        Browse All Product Categories
      </h2>
      <div className="flex items-center justify-center">
        <Image
          src="/landing/separator-purple.svg"
          alt="separator"
          width={100}
          height={5}
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-10">
        {PRODUCT_CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            icon={category.icon}
            gradient={category.gradient}
            iconColor={category.iconColor}
          />
        ))}
      </div>
    </div>
  );
};

type CategoryCardProps = {
  title: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
};

const CategoryCard = ({
  gradient,
  icon: Icon,
  title,
  iconColor,
}: CategoryCardProps) => {
  return (
    <div
      className={`rounded-xl lg:py-10 py-7 shadow-lg ${gradient} flex flex-col items-center`}
    >
      <Icon className="lg:size-20 size-10" style={{ color: iconColor }} />
      <h3
        className={cn(
          "font-bold text-center lg:text-2xl md:text-lg text-base",
          montserrat.className
        )}
      >
        {title}
      </h3>
    </div>
  );
};
