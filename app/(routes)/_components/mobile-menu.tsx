"use client";

import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMedia } from "react-use";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MOBILE_NAV_LINKS } from "@/constants";
import { MobileCategoriesAccordion } from "./mobile-categories-accordion";
import Image from "next/image";

export const MobileMenu = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMedia("(max-width: 1024px)");
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  if (!isMounted) return null;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="rounded-b-xl">
        <div className="mt-7 flex flex-col gap-y-2.5">
          <Link href="/" className="px-3 flex items-center gap-x-1.5">
            <Image
              src="/logo/logo-dark.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold">Techcemart</span>
          </Link>
          <hr className="my-2" />
          {MOBILE_NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <Button
                  className="w-full justify-start"
                  variant={isActive ? "secondary" : "ghost"}
                >
                  {link.name}
                </Button>
              </Link>
            );
          })}
          <MobileCategoriesAccordion />
        </div>
      </SheetContent>
    </Sheet>
  );
};
