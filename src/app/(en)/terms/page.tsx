import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using Invention Brief AI — a consultation-preparation tool, not a law firm.",
  alternates: alternatesFor("/terms", "en"),
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Terms of Use
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          These terms are a plain-language summary for an early-stage project
          and are still being reviewed by a qualified professional. They are not
          legal advice. If anything here seems to conflict with the{" "}
          <Link
            href="/disclaimer"
            prefetch={false}
            className="font-semibold underline"
          >
            Disclaimer
          </Link>{" "}
          or{" "}
          <Link
            href="/privacy"
            prefetch={false}
            className="font-semibold underline"
          >
            Privacy Policy
          </Link>
          , please read them together and contact us with any questions.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Using This Site
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            By using Invention Brief AI, you agree to these terms and to the
            Disclaimer and Privacy Policy. This is an independent, early-stage
            project; the site and its Local Workspace are provided for your own
            preparation use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            What This Service Is — and Is Not
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Invention Brief AI helps you organize and structure your own ideas
            before consulting a qualified patent professional. It does not
            provide legal advice, patentability opinions, claim drafting, patent
            application drafting, or filing services, and using it does not
            create an attorney–client or other professional relationship. See
            the Disclaimer for the full statement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Your Content and the Local Workspace
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Anything you enter in the Local Workspace is stored only on your own
            device, in your browser (IndexedDB). We do not receive, store, or
            have access to it. You are responsible for your own drafts —
            including keeping your own copies using the export options, and
            understanding that clearing your browser data deletes them. Do not
            enter confidential invention details into off-device surfaces such
            as the waitlist or contact email. You keep all rights to your
            content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">No Warranty</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The site, its guides, and the Local Workspace are provided
            &quot;as is&quot; and &quot;as available&quot;, without warranties
            of any kind. Guides and other content are general information that
            may be incomplete or out of date and are not a substitute for advice
            from a qualified professional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Limitation of Liability
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            To the maximum extent permitted by law, Invention Brief AI and the
            people behind it are not liable for any loss arising from your use of
            the site or from decisions you make based on it. Decisions about
            protecting your invention should always be made with a qualified
            patent professional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Changes to These Terms
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            These terms may be updated as the project develops. Material changes
            will be reflected on this page with a new &quot;last updated&quot;
            date; continued use after a change means you accept the updated
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Questions about these terms? Email{" "}
            <a
              href="mailto:inventionbriefai@gmail.com"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              inventionbriefai@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
