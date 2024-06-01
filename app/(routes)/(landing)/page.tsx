import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Hero } from "./_components/hero";
import { Categories } from "./_components/categories";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-y-5 overflow-hidden">
      <div id="features" className="relative lg:py-24 py-10 bg-slate-100">
        <div className="absolute top-0 z-30 inset-x-0 h-[60px] bg-gradient-to-b from-white to-transparent" />
        <MaxWidthWrapper>
          <Hero />
        </MaxWidthWrapper>
      </div>
      <div className="relative">
        <div
          className="absolute lg:w-[386px] lg:h-[348px] w-[140px] h-[126px] rotate-[77deg] shrink-0 lg:-left-20 lg:-top-32 -top-10"
          style={{
            filter: "blur(57.083919525146484px)",
            background:
              "linear-gradient(139deg, rgba(216, 27, 96, 0.39) -9.29%, rgba(132, 255, 255, 0.39) 50.77%, rgba(49, 27, 146, 0.39) 91.92%)",
          }}
        ></div>
      </div>
      <div id="categories" className="py-14">
        <MaxWidthWrapper>
          <Categories />
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
