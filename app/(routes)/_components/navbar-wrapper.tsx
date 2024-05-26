"use client";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const NavbarWrapper = ({ children, className }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current && st > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollTop.current = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-30 backdrop-blur-md transition duration-500 bg-zinc-100/60",
        isScrolled && "border-b bg-zinc-100/60"
      )}
    >
      <MaxWidthWrapper
        className={cn(
          "h-20 transition-all duration-500",
          className,
          isScrolled && "h-14"
        )}
      >
        {children}
      </MaxWidthWrapper>
    </nav>
  );
};
