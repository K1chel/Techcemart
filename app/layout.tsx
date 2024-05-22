import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techcemart",
  description:
    "Techcemart is a markeplace for tech products. Buy and sell tech products online. We have a wide range of tech products available for sale.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo/logo-light.jpg",
        href: "/logo/logo-light.jpg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo/logo-dark.jpg",
        href: "/logo/logo-dark.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
