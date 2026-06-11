import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Invention Brief AI is a consultation-preparation tool, not a law firm. Read the full disclaimer.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Disclaimer
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            No Legal Advice
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Invention Brief AI is not a law firm and does not provide legal
            advice. All content, tools, guides, and documents produced by or
            through this service are for informational and organizational
            purposes only. Nothing on this website or in any invention brief
            constitutes legal advice, and nothing here should be relied upon as
            a substitute for advice from a qualified patent attorney or patent
            agent licensed in your jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            No Attorney–Client Relationship
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Using Invention Brief AI does not create an attorney–client
            relationship, an agent–client relationship, or any other
            professional advisory relationship between you and Invention Brief
            AI or anyone associated with it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            What This Service Does Not Do
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
            <li>We do not draft patent applications, claims, or any filing documents.</li>
            <li>We do not assess, determine, or offer opinions on patentability.</li>
            <li>We do not perform legal prior-art searches or freedom-to-operate analyses.</li>
            <li>We do not file patents or interact with any patent office on your behalf.</li>
            <li>We do not recommend, endorse, or guarantee any particular patent professional.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            What This Service Is
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Invention Brief AI is a consultation-preparation and
            invention-organization tool. It helps you describe and structure
            your own ideas so that your meetings with a qualified patent
            professional are more focused and productive. Decisions about
            patent strategy, filings, and legal protection should always be
            made together with a qualified patent professional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Confidentiality Reminder
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            In many jurisdictions, publicly disclosing an invention before
            filing can affect your options. Be thoughtful about where and with
            whom you share invention details, and discuss disclosure questions
            with a qualified patent professional as early as possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Country Guides
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Country guides describe general consultation practices and
            terminology for educational purposes only. They may not reflect
            recent changes and are not legal guidance for any specific
            situation. Always verify current requirements with a qualified
            patent professional in the relevant jurisdiction.
          </p>
        </section>
      </div>
    </div>
  );
}
