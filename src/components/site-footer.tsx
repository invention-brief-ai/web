import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Important Disclaimer
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Invention Brief AI is not a law firm and does not provide legal
            advice. We do not draft patent applications, determine
            patentability, or file patents on your behalf. Using this service
            does not create an attorney–client relationship. Invention Brief AI
            is a consultation-preparation tool that helps you organize your
            ideas before speaking with a qualified patent professional. Always
            consult a qualified patent attorney or patent agent in your
            jurisdiction for legal advice.
          </p>
          <Link
            href="/disclaimer"
            className="mt-3 inline-block text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Read the full disclaimer →
          </Link>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Invention Brief AI. All rights reserved.</p>
          <nav className="flex gap-6">
            <Link href="/disclaimer" className="hover:text-slate-900">
              Disclaimer
            </Link>
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy Policy
            </Link>
            <Link href="/guides/japan" className="hover:text-slate-900">
              Japan Guide
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
