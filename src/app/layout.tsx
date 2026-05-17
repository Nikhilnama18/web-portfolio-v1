import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LiquidNav from "@/components/LiquidNav";
import Spotlight from "@/components/Spotlight";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Nama | Portfolio",
  description: "Web Developer Portfolio of Nikhil Nama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative selection:bg-gold-500/30 selection:text-gold-400">
        <Spotlight />
        {children}
        
        {/* Floating Bottom Navigation */}
        <LiquidNav />
      </body>
    </html>
  );
}
