import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { cn } from "@/lib/utils";

const Robot = Roboto_Mono({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "Gwendal Bénard - Full Stack Developer",
  description: "Full Stack Developer portfolio - Python, Go, Swift",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
