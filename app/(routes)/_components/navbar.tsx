import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { NavbarWrapper } from "./navbar-wrapper";
import { UserMenu } from "./user-menu";

export const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <NavbarWrapper className="flex h-20 items-center justify-between">
      <Link href="/" className="flex items-center hover:opacity-80 transition">
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
      <div className="flex items-center gap-x-20">
        <div className="hidden lg:flex items-center gap-x-3">
          <p>item-1</p>
          <p>item-2</p>
          <p>item-3</p>
        </div>
        {user ? (
          <div className="flex items-center gap-x-2">
            <UserMenu />
            <div className="block lg:hidden">
              <MobileMenu />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <LoginLink>
              <Button size="sm">Login</Button>
            </LoginLink>
            <RegisterLink>
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
