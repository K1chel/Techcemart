import type { Metadata } from "next";
import Script from 'next/script';
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { Analytics } from "@vercel/analytics/react";

import { ourFileRouter } from "@/app/api/uploadthing/core";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Script 
          strategy="afterInteractive"
          data-website-id="679ba6595be335c7ce44f06d"
          data-domain="techcemart.com"
          src="https://datafa.st/js/script.js"
        />
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <Analytics />
        {children}
        <Toaster richColors theme="light" />
      </body>
    </html>
  );
}
