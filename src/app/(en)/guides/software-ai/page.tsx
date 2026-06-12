import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software & AI Inventions: Preparing for a Patent Consultation",
  description:
    "A consultation-preparation guide for developers, AI/SaaS builders, and startups: how to describe a software or AI invention, developer-specific disclosure traps, and what to ask a qualified patent professional. General information — not legal advice.",
  alternates: alternatesFor("/guides/software-ai", "en"),
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

export default function SoftwareAiGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Topic Guide
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Software &amp; AI Inventions: Preparing for a Patent Consultation
      </h1>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          This guide contains general information based on public sources. It
          is not legal advice, it says nothing about whether software or AI
          inventions can be patented anywhere, and it is pending review by
          qualified professionals. Always confirm anything important with a
          qualified patent professional.
        </p>
        <p className="mt-3">
          <code className="rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-900">
            TODO: Expert review needed before relying on this page for
            user-facing legal-adjacent guidance.
          </code>
        </p>
      </div>

      <div className="mt-12 space-y-12">
        <GuideSection number="1" title="Purpose of This Guide">
          <p>
            Software and AI builders face a specific preparation problem:
            their inventions are easy to demo but hard to describe in the way
            a patent professional needs. This guide helps you organize a
            software, SaaS, or AI-related idea before a first consultation.
          </p>
          <p>This guide is written for:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>software developers and individual builders</li>
            <li>AI/ML engineers and AI/SaaS startup teams</li>
            <li>researchers whose work involves software or models</li>
            <li>
              anyone unsure whether their software idea is even worth a
              consultation — preparing well is the fastest way to find out
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="2"
          title="What This Guide Helps With — and Does Not Do"
        >
          <p>
            It helps you describe your system clearly, record what you have
            published, and arrive at a consultation with the right questions.
            It deliberately does <strong>not</strong>:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              say anything about whether software or AI inventions are
              patentable — in Japan, the US, Europe, or anywhere else
            </li>
            <li>explain eligibility rules or examination standards</li>
            <li>help draft claims or application documents</li>
            <li>provide legal advice of any kind</li>
          </ul>
        </GuideSection>

        <GuideSection
          number="3"
          title="Describe the Mechanism, Not Just the Idea"
        >
          <p>
            The most common gap in software consultations: describing the goal
            instead of the mechanism. &quot;We use AI to optimize
            deliveries&quot; states an outcome. A professional needs to
            understand <em>how</em>:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>What goes in (inputs, data, events)?</li>
            <li>
              What happens, step by step, between input and output — and which
              of those steps you actually built?
            </li>
            <li>What comes out, and what concretely improves?</li>
          </ul>
          <p>
            A useful self-test: could a developer who has never seen your
            product re-explain the processing flow after reading your
            description? If not, keep refining it before the meeting.
          </p>
        </GuideSection>

        <GuideSection number="4" title="How to Describe a Software or AI System">
          <p>Bring or prepare:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              a simple architecture sketch — components and how data flows
              between them (a hand drawing is fine)
            </li>
            <li>a step-by-step walkthrough of one concrete use case</li>
            <li>
              which parts are essential to the idea, and which are
              implementation choices that could be swapped
            </li>
            <li>
              alternative ways to achieve the same result, if you know any
            </li>
            <li>
              measurable effects where you have them — speed, accuracy, cost,
              resource usage — numbers make differences concrete
            </li>
          </ul>
          <p>
            Plain language is enough. How the invention would be expressed in
            any formal document is your professional&apos;s job, not yours.
          </p>
        </GuideSection>

        <GuideSection number="5" title="AI-Specific Points to Organize">
          <p>For AI/ML-related ideas, professionals will usually want a clear
            map of the pipeline:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>What you built vs. what you use.</strong> Which parts
              rely on existing models, APIs, or libraries, and which parts —
              pre-processing, fine-tuning, inference-time logic,
              post-processing, orchestration — are your own work?
            </li>
            <li>
              <strong>Data.</strong> What data is involved, where it comes
              from, and any constraints you know about (licenses, customer
              agreements). Record this; a professional advises on what it
              means.
            </li>
            <li>
              <strong>The pipeline.</strong> Training/fine-tuning steps,
              inference flow, and what happens before and after the model
              call.
            </li>
            <li>
              <strong>Versioning.</strong> Systems iterate weekly — note which
              version of the system you are describing, and keep dated records
              as it evolves.
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="6"
          title="Public Disclosure: A Developer-Specific Trap List"
        >
          <p>
            In many countries, publicly disclosing an invention before filing
            can affect what options remain available. Developers disclose in
            more ways than most inventors — record every instance of:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>public GitHub/GitLab repositories — including old commits, READMEs, and docs</li>
            <li>tech blog posts (Qiita, Zenn, Medium, dev.to, company blogs)</li>
            <li>conference talks, meetup LTs, hackathons, demo days</li>
            <li>app store or web releases, public betas, waitlist demos</li>
            <li>papers and preprints (arXiv and similar)</li>
            <li>Product Hunt, Show HN, social media threads with technical detail</li>
            <li>pitch events and accelerator demo days</li>
          </ul>
          <p>
            For each: what was shown, when, where, and to whom. Record even
            things you believe were private or limited — let the professional
            judge what matters. And be cautious about <em>new</em> posts,
            talks, or releases until you have spoken with one; this guide
            deliberately does not describe the rules, because they are exactly
            what to ask about, as early as possible.
          </p>
        </GuideSection>

        <GuideSection
          number="7"
          title="Employment, Client Contracts, and Open Source"
        >
          <p>
            Software is usually built inside a web of agreements. Before the
            consultation, gather what you know about:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              your employment context — many employment agreements address
              inventions made by employees, including side projects
            </li>
            <li>
              client or contract work — who owns what you built under
              contract
            </li>
            <li>
              open-source licenses in your stack, and any related code you
              have published under open-source licenses yourself
            </li>
            <li>co-developers and their contexts</li>
          </ul>
          <p>
            You do not need to interpret any of this — bring the facts and the
            documents, and let the professional assess them.
          </p>
        </GuideSection>

        <GuideSection
          number="8"
          title="Countries Differ — Decide Which Markets Matter"
        >
          <p>
            How software-related inventions are treated differs between
            jurisdictions, and this guide deliberately does not describe those
            rules. What you can prepare: a clear view of which countries and
            markets matter to your business and roughly when — that decides
            which jurisdictions are even worth discussing, and it is one of
            the first things a professional will ask.
          </p>
        </GuideSection>

        <GuideSection
          number="9"
          title="Questions to Ask During the First Consultation"
        >
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Given my situation, what protection options exist — and is the
              patent route even the right fit for this idea?
            </li>
            <li>
              What should I avoid doing while we work together — launches,
              blog posts, talks, making a repo public?
            </li>
            <li>
              We ship updates constantly. How do iterations affect what we
              are discussing, and what should I document as the product
              evolves?
            </li>
            <li>Which countries make sense to discuss for my market?</li>
            <li>
              How are fees structured, and what cost range should I expect?
            </li>
            <li>How should we handle confidentiality between us?</li>
          </ul>
        </GuideSection>

        <GuideSection number="10" title="What This Guide Does Not Cover">
          <ul className="list-disc space-y-2 pl-6">
            <li>Legal advice of any kind</li>
            <li>
              Whether software or AI inventions are patentable in any country
            </li>
            <li>Eligibility rules or examination standards</li>
            <li>How to draft claims or application documents</li>
            <li>Review of your code, repositories, or licenses</li>
            <li>Recommendations of specific professionals or firms</li>
          </ul>
          <p>For all of the above, consult a qualified patent professional.</p>
        </GuideSection>

        <GuideSection number="11" title="Official Information">
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
                TODO: Add official USPTO source
              </code>
            </li>
            <li>
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                TODO: Add official EPO source
              </code>
            </li>
          </ul>
          <p className="text-sm text-slate-500">
            No citations are listed yet because we will not link sources that
            have not been verified.
          </p>
        </GuideSection>

        <GuideSection number="12" title="Disclaimer">
          <p>
            This guide is general information based on public sources. It is
            not legal advice, it may not reflect recent changes, and it does
            not address your specific situation. Invention Brief AI does not
            provide legal advice, patentability opinions, claim drafting,
            application drafting, or filing services. Always consult a
            qualified patent professional for legal advice and filing
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

      <p className="mt-12 text-sm leading-6 text-slate-600">
        Related guides:{" "}
        <Link
          href="/guides/japan"
          className="font-medium text-blue-700 hover:text-blue-800"
        >
          Japan consultation guide
        </Link>{" "}
        ·{" "}
        <Link
          href="/checklist"
          className="font-medium text-blue-700 hover:text-blue-800"
        >
          first-consultation checklist
        </Link>
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900">
          Turn your system into a structured brief
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          The invention brief organizes exactly what this guide asks for —
          problem, mechanism, what exists, disclosure history, and your
          questions. See{" "}
          <Link
            href="/demo"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            how a brief is built
          </Link>{" "}
          or join the waitlist below.
        </p>
        <Link
          href="/#waitlist"
          className="mt-4 inline-block rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
        >
          Join the Waitlist
        </Link>
      </div>
    </div>
  );
}
