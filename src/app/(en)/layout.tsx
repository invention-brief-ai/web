import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnalyticsGate } from "@/components/analytics-gate";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Invention Brief AI — Prepare for Your Patent Consultation",
    template: "%s | Invention Brief AI",
  },
  description:
    "Organize your invention into a clear, structured brief before you speak with a qualified patent professional. Consultation preparation — not legal advice.",
  openGraph: {
    siteName: "Invention Brief AI",
    type: "website",
    locale: "en_US",
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader locale="en" />
        <main className="flex-1">{children}</main>
        <SiteFooter locale="en" />
        <AnalyticsGate />
      </body>
    </html>
  );
}
