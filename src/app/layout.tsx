"use client";

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { initLenis } from "@/lib/smooth-scroll";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CommandPalette from "@/components/CommandPalette";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#0a0a0f] text-[#f1f5f9] selection:bg-indigo-500/30 selection:text-white">
        <TooltipProvider>
          <ScrollProgress />
          <CommandPalette />
          {children}
          <Analytics />
          <SpeedInsights />
        </TooltipProvider>
      </body>
    </html>
  );
}
