import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research Inventions: Preparing for a Patent Consultation",
  description:
    "A consultation-preparation guide for researchers: the publishing-vs-filing tension, the academic disclosure trap list, institutional IP offices, and what to ask a qualified patent professional. General information — not legal advice.",
  alternates: alternatesFor("/guides/researchers", "en"),
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

export default function ResearchersGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Topic Guide
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Research Inventions: Preparing for a Patent Consultation
      </h1>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          This guide contains general information based on public sources. It
          is not legal advice, it does not describe disclosure rules or their
          exceptions in any country, and it is pending review by qualified
          professionals. Always confirm anything important with your
          institution and a qualified patent professional.
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
            Researchers live under a unique pressure: the same result that
            could become an invention is also the next paper, poster, or
            thesis chapter — and the clock runs on both. This guide helps
            researchers organize a potential invention and, just as
            importantly, organize the <em>timing</em> questions before
            speaking with an IP office or a qualified patent professional.
          </p>
          <p>This guide is written for:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>university researchers, postdocs, and graduate students</li>
            <li>principal investigators managing a lab&apos;s output</li>
            <li>corporate R&amp;D researchers</li>
            <li>
              builders of research tools — instruments, methods, software, and
              datasets used in research
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="2"
          title="What This Guide Helps With — and Does Not Do"
        >
          <p>
            It helps you describe your result as an invention, record what has
            been disclosed, understand who to talk to first, and bring the
            right questions. It deliberately does <strong>not</strong>:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              describe disclosure rules, exceptions, or grace periods in any
              country — including whether any apply to you
            </li>
            <li>define who legally counts as an inventor</li>
            <li>interpret your employment or funding agreements</li>
            <li>provide legal advice of any kind</li>
          </ul>
        </GuideSection>

        <GuideSection
          number="3"
          title="The Researcher's Tension: Publishing vs. Filing"
        >
          <p>
            In many countries, publicly disclosing an invention before filing
            can affect what options remain available. For researchers this is
            not an occasional risk but a structural one: publishing is the
            job. Some jurisdictions have limited exceptions under specific
            conditions — this guide deliberately does not describe them,
            because whether any apply to your situation is exactly the
            question to put to a professional <em>early</em>.
          </p>
          <p>What you can do now:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              raise the question <strong>before</strong> the next submission,
              not after — the most valuable consultation is the one that
              happens before a deadline forces the order of events
            </li>
            <li>
              map your upcoming disclosure dates: submission deadlines,
              conference dates, preprint plans, thesis deposit dates
            </li>
            <li>
              keep a record of everything already disclosed (see the next
              section)
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="4"
          title="The Disclosure Trap List for Researchers"
        >
          <p>
            Academic work discloses through more channels than most people
            track. Record every instance — what was shown, when, where, and to
            whom — of:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>journal papers and conference proceedings</li>
            <li>preprints (arXiv, bioRxiv, SSRN, and similar)</li>
            <li>
              conference abstracts, posters, and talks — including abstracts
              published online before the event
            </li>
            <li>
              theses and dissertations, including deposit in institutional
              repositories
            </li>
            <li>seminars, workshops, and invited talks outside your lab</li>
            <li>lab websites, project pages, and group blogs</li>
            <li>released datasets, code repositories, and demo notebooks</li>
            <li>
              grant and funding applications — record them too, and let a
              professional judge what they mean
            </li>
          </ul>
          <p>
            Record even disclosures you believe were private, internal, or
            under confidentiality — the judgment about what matters belongs to
            a professional, and surprises found later cost more than facts
            shared early.
          </p>
        </GuideSection>

        <GuideSection
          number="5"
          title="Your Institution Probably Has Rules — Start There"
        >
          <p>
            If you are employed by a university, institute, or company, your
            employer very likely has rules about inventions made by its
            researchers — often including an obligation to report them
            internally before anything else happens. Universities typically
            have a technology transfer office (TLO) or IP office; companies
            have IP departments.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              find out what your institution&apos;s process is before taking
              any external step
            </li>
            <li>
              this guide complements that internal step — it does not replace
              it. The same structured brief you would bring to a patent
              professional makes your TLO conversation faster and better too
            </li>
            <li>
              if you are unsure whether your idea &quot;counts,&quot;
              reporting and asking is usually the safer order than deciding
              alone
            </li>
          </ul>
        </GuideSection>

        <GuideSection number="6" title="Authorship Is Not Inventorship">
          <p>
            The author list of the paper and the contributors to an invention
            are different questions answered by different rules. This guide
            does not define who counts as an inventor — that determination
            involves legal judgment. What you can prepare:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              a factual record of who contributed what: who conceived which
              part, who built what, who ran what
            </li>
            <li>
              the affiliations and funding behind each contributor — students,
              visiting researchers, and collaborators included
            </li>
          </ul>
          <p>
            Bring the facts; let the professional and your institution draw
            the lines.
          </p>
        </GuideSection>

        <GuideSection
          number="7"
          title="Collaborations, Funding, and Materials"
        >
          <p>
            Research inventions are usually born inside a web of agreements.
            Gather what you know about:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>joint research agreements and industry partnerships</li>
            <li>
              grant and sponsored-research terms that may address results and
              inventions
            </li>
            <li>material transfer agreements (MTAs) for anything you received</li>
            <li>
              visiting researchers and cross-institution contributors on the
              project
            </li>
          </ul>
          <p>
            You do not need to interpret these documents — collect them and
            bring the list.
          </p>
        </GuideSection>

        <GuideSection
          number="8"
          title="Describing a Research Result as an Invention"
        >
          <p>
            A paper explains a contribution to knowledge; a consultation needs
            something slightly different — what the result <em>does</em> and
            for whom:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              the problem it solves outside the paper&apos;s narrative — who,
              beyond your field, has this problem?
            </li>
            <li>
              the mechanism, step by step, in plain language — method,
              instrument, software, or material
            </li>
            <li>
              what is different from the closest existing approaches — cite
              what you know honestly, the way you would in related work
            </li>
            <li>
              measurable advantages: accuracy, speed, cost, yield — your own
              benchmarks are exactly the right material
            </li>
            <li>
              your lab records: notebooks and dated files showing when ideas
              and results emerged — researchers usually keep better records
              than any other kind of inventor; bring them
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="9"
          title="Questions to Ask During the First Consultation"
        >
          <ul className="list-disc space-y-2 pl-6">
            <li>
              I plan to submit/present on [date] — what does that timing mean
              for my options, and what order of events would you recommend?
            </li>
            <li>
              What, if anything, should I hold back from upcoming talks or
              papers while we work together?
            </li>
            <li>
              Given my institution and funding, who needs to be involved in
              any decision?
            </li>
            <li>
              What are realistic options for a research tool or method like
              mine — and is the patent route even the right fit?
            </li>
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
              Disclosure rules, exceptions, or grace periods in any country
            </li>
            <li>Whether your result is patentable</li>
            <li>Who legally qualifies as an inventor</li>
            <li>Interpretation of your employment, grant, or MTA terms</li>
            <li>How to draft claims or application documents</li>
            <li>Recommendations of specific professionals or firms</li>
          </ul>
          <p>
            For all of the above, consult your institution and a qualified
            patent professional.
          </p>
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
            <li>
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                TODO: Add university TLO / technology-transfer association
                source
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
            application drafting, or filing services. Always consult your
            institution and a qualified patent professional for legal advice
            and filing decisions.
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
          href="/guides/software-ai"
          className="font-medium text-blue-700 hover:text-blue-800"
        >
          Software &amp; AI invention preparation
        </Link>{" "}
        ·{" "}
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
          Turn your result into a structured brief
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          The invention brief organizes what this guide asks for — problem,
          mechanism, what exists, disclosure history, and your questions — in
          a form your TLO or patent professional can work from. See{" "}
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
