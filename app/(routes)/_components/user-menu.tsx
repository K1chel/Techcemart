import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  CirclePlusIcon,
  CrownIcon,
  LogOutIcon,
  SettingsIcon,
  TicketCheckIcon,
} from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/user-avatar";
import { currentUser } from "@/lib/current-user";

export const UserMenu = async () => {
  const user = await currentUser();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <UserAvatar
          src={user.profileImage}
          username={user.firstName || "User"}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[250px] p-0 m-0">
        <DropdownMenuItem className="rounded-none flex flex-col items-start">
          <div className="flex items-center gap-x-1 text-sm font-medium line-clamp-1">
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
          </div>
          <span className="text-xs text-muted-foreground">{user.email}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem className="cursor-pointer rounded-none" asChild>
          <Link href="/create-product">
            <CirclePlusIcon className="size-4 mr-3" />
            <span className="font-medium">Create product</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem className="cursor-pointer rounded-none" asChild>
          <Link href={`/my-products/${user.id}`}>
            <CrownIcon className="size-4 mr-3" />
            <span className="font-medium">My Products</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem className="cursor-pointer rounded-none" asChild>
          <Link href="/my-purchases">
            <TicketCheckIcon className="size-4 mr-3" />
            <span className="font-medium">My Purchases</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem className="cursor-pointer rounded-none" asChild>
          <Link href="/settings">
            <SettingsIcon className="size-4 mr-3" />
            <span className="font-medium">Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0" />

        <LogoutLink>
          <DropdownMenuItem className="cursor-pointer rounded-none">
            <LogOutIcon className="size-4 mr-3 text-red-500" />
            <span className="text-red-500 font-medium">Log out</span>
          </DropdownMenuItem>
        </LogoutLink>
        <DropdownMenuSeparator className="m-0" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
