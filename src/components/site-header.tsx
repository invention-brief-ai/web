import Link from "next/link";

const navLinks = [
  { href: "/#what-it-does", label: "What It Does" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/guides/japan", label: "Japan Guide" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 text-sm font-bold text-white">
            IB
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Invention Brief AI
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="rounded-full bg-blue-700 px-4 py-2 text-white transition-colors hover:bg-blue-800"
          >
            Join Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
