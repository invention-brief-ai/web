import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Considering Filing a Patent Yourself in Japan?",
  description:
    "A neutral decision-and-preparation guide for inventors considering self-filing (本人出願) in Japan. Trade-offs, where professional judgment matters, and how to prepare — general information, not legal advice.",
  alternates: alternatesFor("/guides/japan-self-filing", "en"),
};

function GuideSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-20">
      <h2 className="flex items-baseline gap-3 text-xl font-semibold text-slate-900">
        <span className="text-blue-700">{number}.</span>
        {title}
      </h2>
      <div className="mt-3 space-y-3 leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export default function JapanSelfFilingGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Country Guide — Japan
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Considering Filing a Patent Yourself in Japan?
      </h1>
      <p className="mt-3 text-sm text-slate-500">
        A decision-and-preparation guide about self-filing (本人出願,{" "}
        <em>honnin shutsugan</em>)
      </p>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          This guide contains general information based on public sources. It
          is not legal advice, it does not recommend filing or not filing, and
          it is pending review by qualified professionals. Always confirm
          anything important with official sources and a qualified patent
          professional in Japan.
        </p>
        <p className="mt-3">
          <code className="rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-900">
            TODO: Expert review needed before relying on this page for
            user-facing legal-adjacent guidance.
          </code>
        </p>
      </div>

      <div className="mt-12 space-y-12">
        <GuideSection number="1" title="Who This Guide Is For">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Individuals and small businesses considering filing a patent
              application in Japan without a patent professional, often for
              cost reasons
            </li>
            <li>
              People who want to understand the trade-offs honestly before
              deciding either way
            </li>
            <li>
              People already partway through a self-filed application who are
              wondering whether to bring in a professional
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="2"
          title="What This Guide Does — and Does Not Do"
        >
          <p>
            This guide helps you make an informed decision and prepare well,
            whichever route you choose. It deliberately does <strong>not</strong>:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>recommend that you file or do not file</li>
            <li>
              provide instructions for drafting claims, descriptions, or any
              application documents
            </li>
            <li>review or check documents you have written</li>
            <li>provide legal advice of any kind</li>
          </ul>
          <p>
            In short: we don&apos;t help you file — we help you decide and
            prepare, whichever route you choose.
          </p>
        </GuideSection>

        <GuideSection
          number="3"
          title="What Self-Filing Involves (a High-Level View)"
        >
          <p>
            Self-filing is legally possible in Japan: an applicant may file
            with the Japan Patent Office (JPO) without a representative. At a
            high level, the process defined by the JPO involves steps such as:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>searching existing publications and applications (prior art)</li>
            <li>
              preparing the application documents, including the description
              and the claims
            </li>
            <li>filing with the JPO and paying official fees</li>
            <li>
              requesting examination within a statutory time limit, and
              responding to any office actions (rejection notices)
            </li>
            <li>paying registration fees if granted</li>
          </ul>
          <p>
            This guide intentionally stops at this overview. The current
            procedures, forms, fees, and deadlines are defined by official
            sources — see section 10 — and this page will not restate them
            until they have been verified.
          </p>
        </GuideSection>

        <GuideSection number="4" title="Trade-Offs to Weigh Honestly">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Cost vs. time.</strong> Self-filing saves professional
              fees but requires significant learning and writing time, and
              official fees still apply either way.
            </li>
            <li>
              <strong>The quality of the rights, not just getting a grant.</strong>{" "}
              A patent&apos;s practical value depends heavily on how the claims
              are written. A self-drafted application can result in rights
              that are narrower or weaker than they could have been — even if
              it is granted.
            </li>
            <li>
              <strong>Procedural deadlines are unforgiving.</strong> Missing a
              statutory deadline can end the application regardless of the
              invention&apos;s merit.
            </li>
            <li>
              <strong>Fee-reduction programs may exist</strong> for certain
              applicants — confirm current eligibility with official sources
              (section 10) before assuming costs.
            </li>
            <li>
              <strong>A telling signal:</strong> even patent firms that publish
              detailed self-filing guides recommend using a professional when
              the budget allows.
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="5"
          title="Where Professional Judgment Matters Most"
        >
          <p>
            If you take one thing from this guide: the steps where
            professional expertise changes outcomes the most are
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>claim scope</strong> — the claims largely determine what
              the patent actually protects
            </li>
            <li>
              <strong>evaluating prior art</strong> — judging what found
              documents mean for your application
            </li>
            <li>
              <strong>filing strategy</strong> — what to file, when, and
              whether other countries matter for your business
            </li>
            <li>
              <strong>responding to office actions</strong> — arguments and
              amendments under time pressure
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="6"
          title="A Middle Path: Consult Before You Decide"
        >
          <p>
            Choosing between &quot;full professional engagement&quot; and
            &quot;fully alone&quot; is not the only option. A single initial
            consultation — before deciding — is usually inexpensive relative
            to what is at stake, and public support services exist (support
            desks operated with public funding; eligibility varies — see
            section 10).
          </p>
          <p>
            If you bring a structured invention brief to that conversation,
            even a short consultation can answer your most important
            questions: realistic options, rough costs, and what you would be
            taking on if you self-file.
          </p>
        </GuideSection>

        <GuideSection
          number="7"
          title="If You Self-File: Keep Records a Professional Could Take Over"
        >
          <p>
            Many self-filers later decide to bring in a professional partway
            through — often when an office action arrives. That switch is
            normal, and being prepared for it protects you. Keep organized
            records of:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>everything filed, with dates, and all JPO communications</li>
            <li>the prior art you found and how you searched</li>
            <li>your disclosure history (what, when, where, to whom)</li>
            <li>the reasoning behind choices you made in the documents</li>
          </ul>
          <p>
            The better your records, the faster and cheaper it is for a
            professional to take over mid-course.
          </p>
        </GuideSection>

        <GuideSection number="8" title="Either Way: Prepare a Structured Brief">
          <p>
            Whether you consult a professional or proceed alone, the same
            preparation helps: a clear statement of the problem, the solution,
            what already exists, your disclosure history, and your goals.
          </p>
          <p>
            Start with the{" "}
            <Link
              href="/checklist"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              first-consultation checklist
            </Link>
            , download the{" "}
            <a
              href="/downloads/invention-brief-worksheet.en.md"
              download
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              brief worksheet
            </a>
            , or see{" "}
            <Link
              href="/demo"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              how a brief is built
            </Link>
            .
          </p>
        </GuideSection>

        <GuideSection number="9" title="What This Guide Does Not Cover">
          <ul className="list-disc space-y-2 pl-6">
            <li>Legal advice of any kind</li>
            <li>Whether your invention is patentable</li>
            <li>How to draft claims, descriptions, or any filing documents</li>
            <li>Current fees, forms, or deadline specifics</li>
            <li>Review of documents you have prepared</li>
            <li>Recommendations of specific professionals or firms</li>
          </ul>
          <p>
            For all of the above, consult official sources and a qualified
            patent professional.
          </p>
        </GuideSection>

        <GuideSection number="10" title="Official Information">
          <p>
            Official sources will be added here after human review. Planned
            references:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-slate-500">
            <li>
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                TODO: Add official JPO source
              </code>
            </li>
            <li>
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                TODO: Add INPIT/J-PlatPat source
              </code>
            </li>
            <li>
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                TODO: Add Japan Patent Attorneys Association source
              </code>
            </li>
          </ul>
          <p className="text-sm text-slate-500">
            No citations are listed yet because we will not link sources that
            have not been verified.
          </p>
        </GuideSection>

        <GuideSection number="11" title="Disclaimer">
          <p>
            This guide is general information based on public sources. It is
            not legal advice, it may not reflect recent changes, and it does
            not address your specific situation. Invention Brief AI does not
            provide legal advice, patentability opinions, claim drafting,
            application drafting, document review, or filing services — and it
            does not recommend filing or not filing. Always consult a
            qualified patent professional in Japan for legal advice and filing
            decisions.
          </p>
          <p>
            <Link
              href="/disclaimer"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              Read the full disclaimer →
            </Link>
          </p>
        </GuideSection>
      </div>

      <div className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900">
          Preparing for a consultation instead?
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          See the main guide:{" "}
          <Link
            href="/guides/japan"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            Japan Patent Consultation Guide for First-Time Inventors →
          </Link>
        </p>
      </div>
    </div>
  );
}
