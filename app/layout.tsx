import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { cn } from "@/lib/utils";

const Robot = Roboto_Mono({ subsets: ["latin"], variable: "--font-caption", });
//const Comfort = Comfortaa({ subsets: ["latin"], variable: "--caption-caption" });

export const metadata: Metadata = {
  title: "Gwendal Benard Student",
  description: "Full stack student developpers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          Robot.variable,
          "font-sans h-full bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
