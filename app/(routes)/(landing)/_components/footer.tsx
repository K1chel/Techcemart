import { Montserrat } from "next/font/google";
import Image from "next/image";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
import { LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const Footer = () => {
  return (
    <footer className="w-full relative border-t border-slate-200 py-10 z-50">
      <MaxWidthWrapper className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 gap-y-5 w-full">
          <div className="lg:flex hidden flex-col items-center gap-y-5 w-full max-w-lg">
            <div className="flex items-center gap-x-3">
              <Image
                src="/logo/logo-dark.jpg"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-lg drop-shadow-md"
              />
              <span
                className={cn(
                  "text-xl font-semibold text-primary",
                  montserrat.className
                )}
              >
                Techcemart
              </span>
            </div>
            <p className="lg:text-lg åtext-base text-muted-foreground text-center">
              New way to learn, sell all modercn tech stuff online, build with
              Love ❤️
            </p>
            <p className="text-sm text-muted-foreground/75">
              {new Date().getFullYear()} &copy; Techcemart.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full lg:place-content-start place-items-center gap-y-10">
            <div className="flex flex-col w-full gap-y-5 items-center justify-center">
              <span
                className={cn(
                  "text-lg font-semibold text-primary",
                  montserrat.className
                )}
              >
                Company
              </span>
              <div className="flex flex-col gap-y-3">
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all">
                  About Us
                </p>
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all">
                  Blog
                </p>
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all">
                  Awards
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-5 items-center justify-center">
              <span
                className={cn(
                  "text-lg font-semibold text-primary",
                  montserrat.className
                )}
              >
                Services
              </span>
              <div className="flex flex-col gap-y-3">
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all">
                  Sell
                </p>
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all">
                  Buy
                </p>
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all">
                  Learn
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-5 items-center justify-center">
              <span
                className={cn(
                  "text-lg font-semibold text-primary",
                  montserrat.className
                )}
              >
                Recources
              </span>
              <div className="flex flex-col gap-y-3">
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all">
                  Github
                </p>
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all">
                  Documentation
                </p>
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all">
                  Social
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-5 items-center justify-center">
              <span
                className={cn(
                  "text-lg font-semibold text-primary",
                  montserrat.className
                )}
              >
                Get in touch
              </span>
              <div className="flex flex-col gap-y-3">
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all flex items-center gap-x-1">
                  <MailIcon className="size-4" />
                  Contact Us
                </p>
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all flex items-center gap-x-1">
                  <LinkedinIcon className="size-4" />
                  Linkedin
                </p>
                <p className="text-sm text-muted-foreground font-normal cursor-pointer hover:underline transition-all flex items-center gap-x-1">
                  <TwitterIcon className="size-4" />
                  Twitter
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden flex-col items-center gap-y-5 w-full max-w-lg py-5">
            <div className="flex items-center gap-x-3">
              <Image
                src="/logo/logo-dark.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg drop-shadow-md"
              />
              <span
                className={cn(
                  "text-lg font-semibold text-primary",
                  montserrat.className
                )}
              >
                Techcemart
              </span>
            </div>
            <p className="lg:text-lg text-base text-muted-foreground text-center">
              New way to learn, sell all modercn tech stuff online, build with
              Love ❤️
            </p>
            <p className="text-sm text-muted-foreground/75">
              {new Date().getFullYear()} &copy; Techcemart.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
