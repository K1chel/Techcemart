import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Circle, CirclePlusIcon, LogOutIcon, SettingsIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/user-avatar";
import Link from "next/link";

export const UserMenu = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <UserAvatar
          src={user.picture || `https://avatar.vercel.sh/${user.given_name}`}
          username={user.given_name || "User"}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px] p-0 m-0">
        <DropdownMenuItem className="cursor-pointer rounded-none" asChild>
          <Link href="/create-product">
            <CirclePlusIcon className="size-4 mr-3" />
            <span className="font-medium">Create product</span>
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
