"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "800"],
});

export const Hero = () => {
  const { user } = useKindeBrowserClient();

  const isLoggedIn = !!user;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 place-items-center">
      <div className="flex flex-col lg:gap-y-10 gap-5">
        <h1
          className={cn(
            "lg:text-6xl text-4xl font-extrabold lg:leading-normal text-center lg:text-start bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-transparent bg-clip-text",
            poppins.className
          )}
        >
          Learn, Create, Share, Earn with us.
        </h1>
        <p
          className={cn(
            "lg:text-3xl text-base text-center lg:text-start text-muted-foreground font-[500] lg:leading-[48px]",
            poppins.className
          )}
        >
          Join a community of creators and learners to explore, create, share
          and earn.
        </p>
        <div className="flex items-center gap-x-10 flex-col lg:flex-row gap-y-4">
          <Link href="/products/all" className="flex w-full">
            <button className="w-full lg:h-[65px] h-[45px] flex justify-center items-center rounded-full border border-transparent lg:text-lg font-medium bg-primary text-white hover:bg-primary/75 transition">
              Explore
            </button>
          </Link>
          {isLoggedIn ? (
            <Link href="/create-product" className="w-full flex lg:hidden">
              <button className="w-full lg:h-[65px] h-[45px] flex lg:hidden justify-center items-center rounded-full border font-medium lg:text-lg border-black">
                Create
              </button>
            </Link>
          ) : (
            <LoginLink className="w-full flex lg:hidden">
              <button className="w-full lg:h-[65px] h-[45px] flex lg:hidden justify-center items-center rounded-full border font-medium lg:text-lg border-black">
                Create
              </button>
            </LoginLink>
          )}
          {isLoggedIn ? (
            <Link href="/create-product" className="w-full hidden lg:flex ">
              <button className="group relative font-medium lg:text-lg lg:h-[65px] h-[45px] w-full text-slate-900  hover:text-primary hidden lg:flex items-center justify-center border-2 hover:border-transparent duration-500 border-primary/50 hover:bg-slate-100/50 active:scale-90 transition-all">
                <span>Create</span>
                <span className="absolute left-0 top-0 h-[3px] w-0 bg-primary transition-all duration-100 group-hover:w-full" />
                <span className="absolute right-0 top-0 h-0 w-[3px] bg-primary transition-all delay-100 duration-100 group-hover:h-full" />
                <span className="absolute bottom-0 right-0 h-[3px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />
                <span className="absolute bottom-0 left-0 h-0 w-[3px] bg-primary transition-all delay-300 duration-100 group-hover:h-full" />
              </button>
            </Link>
          ) : (
            <LoginLink className="w-full hidden lg:flex">
              <button className="group relative font-medium lg:text-lg lg:h-[65px] h-[45px] w-full text-slate-900  hover:text-primary hidden lg:flex items-center justify-center border-2 hover:border-transparent duration-500 border-primary/50 hover:bg-slate-100/50 active:scale-90 transition-all">
                <span>Create</span>
                <span className="absolute left-0 top-0 h-[3px] w-0 bg-primary transition-all duration-100 group-hover:w-full" />
                <span className="absolute right-0 top-0 h-0 w-[3px] bg-primary transition-all delay-100 duration-100 group-hover:h-full" />
                <span className="absolute bottom-0 right-0 h-[3px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />
                <span className="absolute bottom-0 left-0 h-0 w-[3px] bg-primary transition-all delay-300 duration-100 group-hover:h-full" />
              </button>
            </LoginLink>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 lg:gap-x-8 lg:gap-y-7 gap-x-5 gap-y-3">
        <HeroCard
          cardClassName="lg:-ml-3 lg:-mt-3"
          imageSrc="/landing/hero/hero-image-card-1.jpg"
          shadowColor="linear-gradient(167deg, #FF4081 -40.26%, #F8BBD0 75.8%)"
        />
        <HeroCard
          cardClassName="lg:-mt-10 border-blue-600"
          imageSrc="/landing/hero/hero-image-card-2.jpg"
          shadowColor="linear-gradient(158deg, #651FFF 9.95%, #00BCD4 92.81%)"
        />
        <HeroCard
          cardClassName="lg:-ml-10 border-blue-600"
          imageSrc="/landing/hero/hero-image-card-3.jpg"
          shadowColor="linear-gradient(158deg, #651FFF 9.95%, #00BCD4 92.81%)"
        />
        <HeroCard
          cardClassName="lg:-mt-3 lg:-ml-5"
          imageSrc="/landing/hero/hero-image-card-4.jpg"
          shadowColor="linear-gradient(158deg, #651FFF 9.95%, #00BCD4 92.81%)"
        />
      </div>
    </div>
  );
};

type HeroCardProps = {
  cardClassName?: string;
  imageClassName?: string;
  imageSrc: string;
  shadowColor?: string;
};

const HeroCard = ({
  cardClassName,
  imageClassName,
  imageSrc,
  shadowColor,
}: HeroCardProps) => (
  <span
    className={cn(
      "lg:w-[236px] lg:h-[317px] w-[185px] h-[278px] shrink-0 rounded-lg border-primary relative",
      cardClassName
    )}
  >
    <Image
      src={imageSrc}
      alt="hero image card"
      fill
      className={cn(
        "rounded-lg object-cover w-full h-full lg:rotate-[14deg] rotate-[7deg] z-30",
        imageClassName
      )}
    />
    <div
      className={cn(
        "absolute z-10 lg:w-[317px] lg:h-[304px] w-[240px] h-[250px] rotate-[30deg] shrink-0"
      )}
      style={{
        borderRadius: "414px",
        opacity: 0.6251,
        background: shadowColor,
        filter: "blur(51.64735412597656px)",
      }}
    />
  </span>
);
