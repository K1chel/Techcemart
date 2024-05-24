"use client";

import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMedia } from "react-use";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";

export const MobileMenu = () => {
  const isMobile = useMedia("(max-width: 1024px)");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="rounded-b-xl">
        <div className="mt-7 flex flex-col gap-y-3">
          <Link href="/">
            <span>Techcemart</span>
          </Link>
          {NAV_LINKS.map((link) => {
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
        </div>
      </SheetContent>
    </Sheet>
  );
};
