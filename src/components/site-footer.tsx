import Link from "next/link";

const content = {
  en: {
    heading: "Important Disclaimer",
    body: "Invention Brief AI is a consultation-preparation tool. It does not provide legal advice, patentability opinions, claim drafting, patent application drafting, or patent filing services. Using this service does not create an attorney–client relationship. Always consult a qualified patent professional for legal advice and filing decisions.",
    fullDisclaimer: "Read the full disclaimer →",
    copyright: "© 2026 Invention Brief AI. All rights reserved.",
    links: [
      { href: "/workspace", label: "Local Workspace" },
      { href: "/disclaimer", label: "Disclaimer" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Use" },
      { href: "/guides/japan", label: "Japan Guide" },
      { href: "/checklist", label: "Checklist" },
      { href: "/demo", label: "Demo" },
      { href: "/faq", label: "FAQ" },
      { href: "/about", label: "About" },
      { href: "/ja", label: "日本語", lang: "ja" },
    ],
    disclaimerHref: "/disclaimer",
  },
  ja: {
    heading: "重要なお知らせ(免責)",
    body: "Invention Brief AIは相談準備ツールです。法的助言、特許性判断、請求項作成、出願書類作成、特許出願手続の代理を提供するものではありません。本サービスの利用によって、弁理士・弁護士との委任関係が生じることはありません。出願や権利化に関する判断は、必ず弁理士などの資格を有する専門家にご相談ください。",
    fullDisclaimer: "免責事項の全文を読む →",
    copyright: "© 2026 Invention Brief AI. All rights reserved.",
    links: [
      { href: "/ja/workspace", label: "ローカルワークスペース" },
      { href: "/ja/disclaimer", label: "免責事項" },
      { href: "/ja/privacy", label: "プライバシーポリシー" },
      { href: "/ja/terms", label: "利用規約" },
      { href: "/ja/guides/japan", label: "日本向けガイド" },
      { href: "/ja/checklist", label: "チェックリスト" },
      { href: "/ja/demo", label: "デモ" },
      { href: "/ja/faq", label: "よくある質問" },
      { href: "/ja/about", label: "運営者情報" },
      { href: "/", label: "English", lang: "en" },
    ],
    disclaimerHref: "/ja/disclaimer",
  },
} as const;

export function SiteFooter({ locale }: { locale: "en" | "ja" }) {
  const t = content[locale];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 print:hidden">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            {t.heading}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t.body}</p>
          <Link
            href={t.disclaimerHref}
            prefetch={false}
            className="mt-3 inline-block text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            {t.fullDisclaimer}
          </Link>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>{t.copyright}</p>
          <nav className="flex flex-wrap justify-center gap-6">
            {t.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                lang={"lang" in link ? link.lang : undefined}
                className="hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
