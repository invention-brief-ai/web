import type { Metadata } from "next";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Invention Brief AI is a consultation-preparation tool, not a law firm. Read the full disclaimer.",
  alternates: alternatesFor("/disclaimer", "en"),
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Disclaimer
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm leading-6 text-slate-700">
          In short: Invention Brief AI is a consultation-preparation tool. It
          helps you organize your ideas before speaking with a qualified
          patent professional. It is not a source of legal advice, and it is
          not a substitute for one.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Not a Law Firm
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Invention Brief AI is not a law firm and is not a patent firm. No
            one associated with this service acts as your attorney, patent
            agent, or legal representative. Using this service does not create
            an attorney–client relationship or any other professional advisory
            relationship.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            No Legal Advice
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            The service does not provide legal advice. All content, tools,
            guides, and documents produced by or through this service are
            general information for organizational purposes only, and should
            not be relied upon as a substitute for advice from a qualified
            patent attorney or patent agent licensed in your jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            No Patentability Opinions
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            The service does not provide patentability opinions. Nothing in an
            invention brief, guide, or any other output is an assessment of
            whether your invention can be patented, and no output should be
            read as encouragement to file or not to file.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            No Drafting of Claims or Filing Documents
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            The service does not draft patent claims or official patent
            application documents. An invention brief is a preparation
            document for your consultation — it is not, and must not be used
            as, a filing document.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            No Representation Before Patent Offices
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            The service does not represent users before the Japan Patent
            Office, the USPTO, the EPO, or any other patent office or
            government agency, and does not handle filings or official
            procedures of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Consult a Qualified Professional
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            For legal advice, patentability questions, filing strategy, and
            filing decisions, consult a qualified patent attorney or patent
            agent in the relevant jurisdiction. Decisions about protecting
            your invention should always be made with a qualified
            professional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Confidentiality Warning
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            The Local Workspace keeps your drafts on your own device, so you
            can use it for private notes. What you should not do is send
            confidential invention details off your device through surfaces
            that have no confidentiality framework, such as the waitlist or the
            contact email. Using this service does not create any
            confidentiality or attorney–client relationship. Note also that in
            many jurisdictions, public disclosure of an invention before filing
            can affect your options — discuss any disclosure questions with a
            qualified patent professional as early as possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Country Guides
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Country guides contain general information based on public
            sources, provided for educational purposes only. They may not
            reflect recent changes and are not legal guidance for any specific
            situation. Always verify current requirements with a qualified
            patent professional in the relevant jurisdiction.
          </p>
        </section>
      </div>
    </div>
  );
}
