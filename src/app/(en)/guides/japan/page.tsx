import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Japan Patent Consultation Guide for First-Time Inventors",
  description:
    "A pre-consultation preparation guide for first-time inventors in Japan. General information based on public sources — not legal advice.",
  alternates: alternatesFor("/guides/japan", "en"),
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

export default function JapanGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Country Guide
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        <span aria-hidden>🇯🇵</span> Japan Patent Consultation Guide for
        First-Time Inventors
      </h1>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          This guide contains general information based on public sources. It
          is not legal advice, and it is pending review by qualified
          professionals. Always confirm anything important with a qualified
          patent professional in Japan.
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
            This guide helps first-time inventors prepare for an initial
            consultation with a qualified patent professional in Japan —
            typically a <strong>benrishi</strong> (弁理士, patent attorney)
            licensed to represent clients before the Japan Patent Office
            (JPO). A well-prepared consultation lets the professional spend
            time on guidance instead of basic information gathering.
          </p>
          <p>This guide is written for:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>first-time inventors preparing for an initial consultation</li>
            <li>software developers and AI/SaaS builders</li>
            <li>startup founders</li>
            <li>researchers</li>
            <li>
              anyone still deciding whether to speak with a patent professional
              at all
            </li>
          </ul>
          <p>
            It covers preparation only: what to organize, what to bring, and
            what to ask. It does not tell you whether to file, what to file,
            or how — those are decisions to make together with your patent
            professional.
          </p>
        </GuideSection>

        <GuideSection
          number="2"
          title="What to Prepare Before Speaking with a Patent Professional"
        >
          <p>A simple pre-consultation checklist:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>A one-paragraph summary of your invention in plain language</li>
            <li>A description of the problem it solves and who has that problem</li>
            <li>An explanation of how your solution works</li>
            <li>Sketches, diagrams, photos, or a simple prototype if you have one</li>
            <li>A list of similar products or methods you already know about</li>
            <li>Notes on when and how you developed the idea</li>
            <li>
              A record of any public disclosure: demos, sales, articles,
              presentations, social media posts, crowdfunding pages
            </li>
            <li>Your goals: target markets, rough timeline, and budget range</li>
          </ul>
          <p>
            An invention brief — like the one this service helps you build —
            organizes most of these points into a single document.
          </p>
        </GuideSection>

        <GuideSection
          number="3"
          title="How to Describe the Problem Your Invention Solves"
        >
          <p>Be concrete. A useful problem description answers:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Who experiences the problem, and in what situation?</li>
            <li>How do people deal with it today?</li>
            <li>Why are the current approaches not good enough?</li>
          </ul>
          <p>
            Example: instead of “bike locks are inconvenient,” try “riders
            making short stops skip locking because current locks are heavy
            and slow to operate, which leads to theft.”
          </p>
        </GuideSection>

        <GuideSection number="4" title="How to Describe the Technical Solution">
          <p>
            Explain how your invention works, step by step, in your own words.
            You do not need legal or technical jargon — your patent
            professional will decide how to express the invention in any
            formal documents.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>What are the main components or steps?</li>
            <li>How do they work together?</li>
            <li>
              Which parts are essential, and which are optional variations?
            </li>
            <li>Are there alternative ways to achieve the same result?</li>
          </ul>
        </GuideSection>

        <GuideSection
          number="5"
          title="How to Describe Differences from Existing Products or Methods"
        >
          <p>
            List the closest existing products, services, or methods you know
            about, and state honestly how your invention differs. Avoid
            claiming “nothing like this exists” — it is more useful to say
            “the closest thing I know is X, and mine differs in these ways.”
          </p>
          <p>
            You are not expected to perform a professional search. Sharing
            what you already know helps the professional plan what to
            investigate.
          </p>
        </GuideSection>

        <GuideSection number="6" title="Why Public Disclosure May Matter">
          <p>
            In Japan, as in many countries, publicly disclosing an invention
            before filing can affect what options remain available. Limited
            exceptions may apply in some situations, but they depend on
            specific conditions and procedures.
          </p>
          <p>
            This guide deliberately does not describe those rules in detail —
            they are exactly the kind of thing to ask a qualified patent
            professional about, as early as possible. What you can do now:
            keep a record of every disclosure (what, when, where, to whom),
            and be cautious about new disclosures until you have spoken with a
            professional.
          </p>
        </GuideSection>

        <GuideSection number="7" title="What to Tell a Patent Professional">
          <p>Be complete and honest. In particular:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Everything you know about public disclosure, even if you think
              it might be a problem
            </li>
            <li>Similar technology you are aware of, including your own earlier work</li>
            <li>
              Who contributed to the invention, and any employment or
              collaboration context that might be relevant
            </li>
            <li>Your business goals, timeline, and budget constraints</li>
          </ul>
          <p>
            Professionals can only give good guidance based on what you share.
            Surprises discovered later are usually more costly than facts
            disclosed early.
          </p>
        </GuideSection>

        <GuideSection
          number="8"
          title="Questions to Ask During the First Consultation"
        >
          <ul className="list-disc space-y-2 pl-6">
            <li>What additional information do you need from me?</li>
            <li>What are the realistic options for an invention like mine?</li>
            <li>What should I avoid doing while we work together (demos, publications, sales)?</li>
            <li>What should I document going forward?</li>
            <li>How are fees structured, and what cost range should I expect?</li>
            <li>What are the typical next steps and timelines?</li>
            <li>How should we handle confidentiality between us?</li>
          </ul>
        </GuideSection>

        <GuideSection number="9" title="What This Guide Does Not Cover">
          <ul className="list-disc space-y-2 pl-6">
            <li>Legal advice of any kind</li>
            <li>Whether your invention is patentable</li>
            <li>How to draft claims or application documents</li>
            <li>Filing procedures, fees, or legal deadlines</li>
            <li>Recommendations of specific professionals or firms</li>
          </ul>
          <p>
            For all of the above, consult a qualified patent professional.
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
            application drafting, or filing services. Always consult a
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

      <p className="mt-12 text-sm leading-6 text-slate-600">
        Related guide:{" "}
        <Link
          href="/guides/japan-self-filing"
          className="font-medium text-blue-700 hover:text-blue-800"
        >
          Considering filing a patent yourself in Japan? →
        </Link>
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900">
          Prepare your own invention brief
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Join the waitlist and we will let you know when Invention Brief AI
          is ready to help you organize your idea before your consultation.
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
