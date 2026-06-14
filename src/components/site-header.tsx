import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";

const content = {
  en: {
    navLinks: [
      { href: "/#what-it-does", label: "What It Does" },
      { href: "/#how-it-works", label: "How It Works" },
      { href: "/guides/japan", label: "Japan Guide" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
    cta: { href: "/workspace", label: "Open Workspace" },
    home: "/",
  },
  ja: {
    navLinks: [
      { href: "/ja#what-it-does", label: "できること" },
      { href: "/ja#how-it-works", label: "利用の流れ" },
      { href: "/ja/guides/japan", label: "日本向けガイド" },
      { href: "/ja/disclaimer", label: "免責事項" },
    ],
    cta: { href: "/ja/workspace", label: "ワークスペース" },
    home: "/ja",
  },
} as const;

export function SiteHeader({ locale }: { locale: "en" | "ja" }) {
  const t = content[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur print:hidden">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href={t.home} prefetch={false} className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 text-sm font-bold text-white">
            IB
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Invention Brief AI
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {t.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={t.cta.href}
              prefetch={false}
              className="rounded-full bg-blue-700 px-4 py-2 text-white transition-colors hover:bg-blue-800"
            >
              {t.cta.label}
            </Link>
          </nav>
          <LanguageToggle locale={locale} />
        </div>
      </div>
    </header>
  );
}
