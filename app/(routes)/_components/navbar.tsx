import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/current-user";
import { MobileMenu } from "./mobile-menu";
import { NavbarWrapper } from "./navbar-wrapper";
import { UserMenu } from "./user-menu";
import { NavItems } from "@/components/nav-items";

export const Navbar = async () => {
  const user = await currentUser();

  return (
    <NavbarWrapper className="flex h-20 items-center justify-between">
      <div className="lg:flex lg:items-center lg:gap-x-20">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition"
        >
          <Image
            src="/logo/logo-dark.jpg"
            alt="Techcemart"
            width={40}
            height={40}
            className="rounded-md block lg:hidden shadow-xl"
          />
          <span className="text-xl font-semibold hidden lg:block">
            Techcemart
          </span>
        </Link>
        <div className="hidden lg:block">
          <NavItems />
        </div>
      </div>
      <div>
        {user ? (
          <div className="flex items-center gap-x-2">
            <UserMenu />
            <div className="block lg:hidden">
              <MobileMenu />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <LoginLink className="hidden lg:block">
              <Button size="sm">Login</Button>
            </LoginLink>
            <RegisterLink className="hidden lg:block">
              <Button size="sm" variant="outline">
                Register
              </Button>
            </RegisterLink>
            <div className="block lg:hidden">
              <MobileMenu />
            </div>
          </div>
        )}
      </div>
    </NavbarWrapper>
  );
};
