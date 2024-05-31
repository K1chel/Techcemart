import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Hero } from "./_components/hero";
import { Categories } from "./_components/categories";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-y-5 overflow-hidden">
      <div id="features" className="relative lg:py-24 py-10">
        <MaxWidthWrapper>
          <Hero />
        </MaxWidthWrapper>
      </div>
      <div id="categories">
        <MaxWidthWrapper>
          <Categories />
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
