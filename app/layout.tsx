import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { cn } from "@/lib/utils";

const Robot = Roboto_Mono({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "Gwendal Bénard - Full Stack Developer",
  description: "Full Stack Developer passionate about Swift, Python, and Go. Specialized in iOS apps, web servers, and AI projects.",
  authors: [{ name: "Gwendal Bénard" }],
  openGraph: {
    title: "Gwendal Bénard - Full Stack Developer",
    description: "Full Stack Developer passionate about Swift, Python, and Go. Specialized in iOS apps, web servers, and AI projects.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Gwendal Bénard - Full Stack Developer" }],
  },
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
