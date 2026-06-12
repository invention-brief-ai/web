import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Invention Brief AI — 弁理士に相談する前の発明アイデア整理ツール",
    template: "%s | Invention Brief AI",
  },
  description:
    "Invention Brief AIは、発明者が弁理士などの専門家に相談する前に、自分のアイデアを整理するための相談準備ツールです。法的助言を提供するものではありません。",
};

export default function JapaneseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="font-ja flex min-h-full flex-col">
        <SiteHeader locale="ja" />
        <main className="flex-1">{children}</main>
        <SiteFooter locale="ja" />
      </body>
    </html>
  );
}
