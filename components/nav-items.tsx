import { NavItem } from "./nav-item";

import { NAV_LINKS } from "@/constants";

export const NavItems = () => {
  return (
    <div className="flex items-center gap-6">
      {NAV_LINKS.map((link) => (
        <NavItem key={link.href} href={link.href} Content={link.component}>
          {link.name}
        </NavItem>
      ))}
    </div>
  );
};
