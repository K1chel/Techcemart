import { AboutUs } from "@/components/nav-components/about-us";
import { ProductCategories } from "@/components/nav-components/product-categories";

export interface MobileNavLink {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  component?: any;
}

export const MOBILE_NAV_LINKS = [
  {
    name: "Home",
    href: "/",
  },
];

export const NAV_LINKS = [
  {
    name: "About Us",
    href: "/",
    component: AboutUs,
  },
  {
    name: "Categories",
    href: "/products",
    component: ProductCategories,
  },
];
