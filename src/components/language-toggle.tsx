"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Switches between the English page and its Japanese counterpart.
 * Routes mirror each other 1:1 (`/x` <-> `/ja/x`), so the target is
 * derived from the current pathname.
 */
export function LanguageToggle({ locale }: { locale: "en" | "ja" }) {
  const pathname = usePathname() ?? "/";
  const target =
    locale === "en"
      ? pathname === "/"
        ? "/ja"
        : `/ja${pathname}`
      : pathname.replace(/^\/ja/, "") || "/";

  return (
    <Link
      href={target}
      lang={locale === "en" ? "ja" : "en"}
      className="rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
    >
      {locale === "en" ? "日本語" : "English"}
    </Link>
  );
}
