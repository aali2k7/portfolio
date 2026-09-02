import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F4F4F0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} — Full-Stack Developer & Product Builder`,
  description: `${siteConfig.philosophy.hero} Portfolio of ${siteConfig.name}, Full-Stack Developer, Product Builder, and Security Researcher based in ${siteConfig.location.city}, ${siteConfig.location.country}.`,
  authors: [{ name: siteConfig.name, url: siteConfig.socials.github }],
  keywords: [
    "Aali Rahman",
    "Full-Stack Developer",
    "Product Builder",
    "Problem Solver",
    "Security Researcher",
    "Next.js",
    "React",
    "AI Engineering",
    "Priora",
    "Woxsen University",
    "Hyderabad",
  ],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aalirahman.com",
    title: `${siteConfig.name} — Full-Stack Developer & Product Builder`,
    description: siteConfig.philosophy.hero,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Full-Stack Developer & Product Builder`,
    description: siteConfig.philosophy.hero,
    creator: "@aali_ciao",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} ${spaceMono.variable} scroll-smooth antialiased selection:bg-black selection:text-white`}
      style={
        {
          "--accent": siteConfig.accentColor,
        } as React.CSSProperties
      }
    >
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-body antialiased overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
