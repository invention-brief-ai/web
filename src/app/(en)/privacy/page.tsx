import type { Metadata } from "next";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Invention Brief AI prototype.",
  alternates: alternatesFor("/privacy", "en"),
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          This page is a placeholder. A full privacy policy will be published
          before any data collection begins.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Current Status: Static Prototype
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            This prototype does not currently provide real account
            registration, payment, database storage, or invention intake. The
            site is a set of static pages: there are no analytics, no tracking
            scripts, and no working forms. The waitlist form shown on the home
            page is a visual preview and does not submit or store anything.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Do Not Submit Confidential Details
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Users should not submit confidential invention details through
            this prototype. Until appropriate privacy and confidentiality
            terms are in place, do not enter unpublished invention details,
            trade secrets, or other sensitive information anywhere on this
            site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Standing Principles for Future Versions
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            When data features are added, the updated policy will follow these
            standing principles, which distinguish three kinds of information:
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-6 leading-7 text-slate-600">
            <li>
              <strong className="text-slate-900">
                Confidential invention content
              </strong>{" "}
              (technical mechanisms, unpublished ideas, detailed
              implementations, diagrams) will by default never be used for
              ads, sponsored targeting, AI model training, professional
              matching, analytics, resale, or lead generation. Any exception
              would require your explicit, separate, informed consent.
            </li>
            <li>
              <strong className="text-slate-900">
                Non-confidential, user-selected metadata
              </strong>{" "}
              (such as a country of interest, preferred language, or a broad
              technology category you choose yourself) may support navigation
              or, in the future, clearly labeled professional-discovery
              features — only where disclosed and consented to.
            </li>
            <li>
              <strong className="text-slate-900">
                Aggregated, anonymized usage statistics
              </strong>{" "}
              (such as how many users are interested in a given country) may
              inform internal planning, only where properly anonymized.
            </li>
          </ul>
          <p className="mt-3 leading-7 text-slate-600">
            The default assumption, now and later: your invention content is
            private and under your control.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            When This Will Change
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            If forms or data storage are added later, this privacy policy will
            be updated before any data is collected. The updated policy will
            cover what is collected and why, how invention details are
            protected, retention and deletion, any third-party processors, and
            your rights.
          </p>
        </section>
      </div>
    </div>
  );
}
