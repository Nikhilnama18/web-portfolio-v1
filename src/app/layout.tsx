import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LiquidNav from "@/components/LiquidNav";
import Spotlight from "@/components/Spotlight";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://nikhil-nama.vercel.app"
  ),
  title: "Nikhil Nama | Software Engineer",
  description:
    "Software Engineer building full-stack applications with thoughtful user experiences and reliable backend systems.",
  applicationName: "Nikhil Nama Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Nikhil Nama",
    description: "Software Engineer building full-stack applications.",
    siteName: "Nikhil Nama Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nikhil Nama - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Nama",
    description: "Software Engineer building full-stack applications.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col relative selection:bg-gold-500/30 selection:text-gold-400"
        suppressHydrationWarning
      >
        <ScrollToTop />
        <Spotlight />
        {children}
        
        {/* Floating Bottom Navigation */}
        <LiquidNav />
        <Analytics />
      </body>
    </html>
  );
}
