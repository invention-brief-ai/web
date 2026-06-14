import type { Metadata } from "next";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Invention Brief AI, including the on-device Local Workspace.",
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
          before any personal or invention-related data is ever collected by
          us. Today nothing you type leaves your device: the Local Workspace
          saves drafts only in your own browser, and the only data we receive
          is the cookieless, aggregated visit count described below.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Where Your Information Lives
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            This site has no backend account system, payment, server-side
            database, or invention intake. It does not send what you type to us
            or to anyone else. Two parts are worth distinguishing:
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-6 leading-7 text-slate-600">
            <li>
              <strong className="text-slate-900">The Local Workspace</strong>{" "}
              (Mirror mode, Brief mode, and your draft briefs) saves your work
              only inside your own browser, using on-device storage
              (IndexedDB). Your drafts are never uploaded or transmitted — they
              stay on the device you typed them on, and clearing your
              browser&apos;s data for this site deletes them. Analytics is
              turned off entirely on the workspace pages.
            </li>
            <li>
              <strong className="text-slate-900">
                The waitlist and contact prompts
              </strong>{" "}
              shown elsewhere are not connected to any backend yet: the
              waitlist is a visual preview that submits and stores nothing, and
              the contact address simply opens your own email app.
            </li>
          </ul>
          <p className="mt-3 leading-7 text-slate-600">
            The only data that reaches us is the aggregated, cookieless visit
            count described in the next section.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Aggregated Visit Statistics (Vercel Web Analytics)
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            This site uses Vercel Web Analytics, a cookieless measurement
            tool provided by Vercel (our hosting provider), to count page
            views in aggregate — for example, how many visitors read a given
            guide. We use these numbers only to decide what content to improve
            and write next.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
            <li>No cookies are used, and there is no cross-site tracking.</li>
            <li>
              Visitors are not individually identified to us; Vercel processes
              visits using an anonymized, short-lived identifier.
            </li>
            <li>
              No invention content is involved. Analytics runs only on the
              informational pages and is disabled on the Local Workspace, so
              your drafts are never part of these counts.
            </li>
          </ul>
          <p className="mt-3 leading-7 text-slate-600">
            This is the &quot;aggregated, anonymized usage statistics&quot;
            layer described in the standing principles below — the only data
            layer in use today.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Keep Confidential Details On Your Device
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Because the Local Workspace stays on your own device, you can use
            it for your private notes. What you should not do is put
            unpublished invention details, trade secrets, or other sensitive
            information into anything that leaves your device — for example the
            waitlist, the contact email, or other messages to us. Treat
            anything you send off your device as potentially non-confidential,
            and share unpublished details only with a qualified patent
            professional under appropriate confidentiality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Standing Principles for Future Versions
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            If server-side data features are ever added (today everything in
            the workspace stays on your device), the updated policy will follow
            these standing principles, which distinguish three kinds of
            information:
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
            If server-side forms or data storage are added later, this privacy
            policy will be updated before any data is collected. The updated
            policy will cover what is collected and why, how invention details
            are protected, retention and deletion, any third-party processors,
            and your rights.
          </p>
        </section>
      </div>
    </div>
  );
}
