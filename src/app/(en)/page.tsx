import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatItDoesSection />
      <WhatItDoesNotDoSection />
      <HowItWorksSection />
      <WhoItIsForSection />
      <CountryGuideSection />
      <BriefPreviewSection />
      <WaitlistSection />
    </>
  );
}

/* 1. Hero */
function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
        <p className="mx-auto mb-6 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-800">
          Consultation preparation for inventors
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Walk into your patent consultation prepared.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Invention Brief AI helps inventors organize their ideas before
          speaking with a qualified patent professional — so your first
          consultation is focused, efficient, and productive.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#waitlist"
            className="rounded-full bg-blue-700 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Join the Waitlist
          </Link>
          <Link
            href="#how-it-works"
            className="rounded-full border border-slate-300 px-8 py-3 text-base font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            See How It Works
          </Link>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Not legal advice. No patentability opinions. No filing services. We
          help you prepare — a qualified patent professional advises.
        </p>
      </div>
    </section>
  );
}

/* 2. What this service does */
function WhatItDoesSection() {
  const items = [
    {
      title: "Structured invention briefs",
      description:
        "Turn scattered notes, sketches, and ideas into one organized document that describes your invention clearly.",
    },
    {
      title: "Guided questions",
      description:
        "Answer step-by-step prompts covering the problem, your solution, key features, and what you already know about similar approaches.",
    },
    {
      title: "Consultation checklists",
      description:
        "Know what patent professionals typically ask in a first meeting, and arrive with answers already written down.",
    },
    {
      title: "Country-specific preparation guides",
      description:
        "Learn what to expect from a consultation in your country — terminology, typical process, and what to bring.",
    },
  ];

  return (
    <section id="what-it-does" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What this service does"
          title="We help you organize, so professionals can advise"
          description="Everything Invention Brief AI does is focused on one goal: making you well-prepared for a conversation with a qualified patent professional."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 3. What this service does not do */
function WhatItDoesNotDoSection() {
  const items = [
    {
      title: "We do not provide legal advice",
      description:
        "Nothing in this service is legal advice, and using it does not create an attorney–client relationship.",
    },
    {
      title: "We do not draft claims or applications",
      description:
        "An invention brief is a preparation document for your consultation — it is not a patent claim, application, or any official filing document.",
    },
    {
      title: "We do not determine patentability",
      description:
        "Whether your invention can be patented is a legal judgment. We do not offer patentability opinions of any kind.",
    },
    {
      title: "We do not file patents for you",
      description:
        "We do not represent users before any patent office. Filing is handled by you and the patent professional you choose to work with.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What this service does not do"
          title="Clear boundaries, by design"
          description="Invention Brief AI complements — it never replaces — patent attorneys, patent agents, and other qualified professionals. We stay firmly on the preparation side of that line."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6"
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-700"
              >
                ✕
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4. How it works */
function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Describe your invention",
      description:
        "Answer guided questions about the problem you solve, how your solution works, and what makes it different.",
    },
    {
      number: "2",
      title: "Get an organized brief",
      description:
        "Your answers are structured into a clean invention brief — problem, solution, key features, and open questions.",
    },
    {
      number: "3",
      title: "Review your country guide",
      description:
        "Read a short preparation guide for your country so you know what to expect from a first consultation.",
    },
    {
      number: "4",
      title: "Meet a qualified professional",
      description:
        "Bring your brief to the patent attorney or agent of your choice and spend the meeting on what matters.",
    },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From rough idea to a focused consultation"
          description="Four simple steps to arrive at your first meeting organized and ready."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 5. Who it is for */
function WhoItIsForSection() {
  const audiences = [
    {
      title: "Independent inventors",
      description:
        "You have an idea you believe in and want to make the most of every minute — and every dollar — of professional time.",
    },
    {
      title: "Startup founders",
      description:
        "You are moving fast and need your invention documented clearly before you sit down with counsel.",
    },
    {
      title: "Researchers & engineers",
      description:
        "You know your technology deeply and want help translating it into a brief a patent professional can work from.",
    },
    {
      title: "First-time inventors",
      description:
        "You have never spoken with a patent professional before and want to walk in knowing what to expect.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Who it is for"
          title="Built for inventors at the starting line"
          description="If you are preparing for your first conversation with a patent professional, this is for you."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. Country guide preview */
function CountryGuideSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Country guides"
          title="Know what to expect, wherever you are"
          description="Short, practical guides on how patent consultations typically work in each country — terminology, process, and what to bring."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Link
            href="/guides/japan"
            className="group rounded-xl border border-blue-200 bg-blue-50 p-6 transition-shadow hover:shadow-md"
          >
            <span className="text-3xl" aria-hidden>
              🇯🇵
            </span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              Japan
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Preparing for a consultation with a benrishi (patent attorney) in
              Japan.
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-blue-700 group-hover:text-blue-800">
              Read the guide →
            </span>
          </Link>
          <div className="rounded-xl border border-slate-200 bg-white p-6 opacity-70">
            <span className="text-3xl" aria-hidden>
              🇺🇸
            </span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              United States
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Preparing for a consultation with a US patent attorney or agent.
            </p>
            <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
              Coming soon
            </span>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 opacity-70">
            <span className="text-3xl" aria-hidden>
              🇪🇺
            </span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              Europe
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Preparing for a consultation with a European patent attorney.
            </p>
            <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 7. Invention brief preview */
function BriefPreviewSection() {
  const briefSections = [
    {
      heading: "1. Problem Statement",
      body: "Existing bicycle locks are heavy and slow to operate, discouraging short-trip riders from securing their bikes.",
    },
    {
      heading: "2. Proposed Solution",
      body: "A lightweight folding lock using a layered composite band that coils into a holster mounted under the saddle.",
    },
    {
      heading: "3. Key Features",
      body: "• Coiling composite band (under 400 g)\n• One-handed release mechanism\n• Integrated mounting holster",
    },
    {
      heading: "4. Known Similar Approaches",
      body: "Folding-plate locks and textile-band locks exist; this design differs in band structure and the holster integration.",
    },
    {
      heading: "5. Questions for My Patent Professional",
      body: "• Is the band structure the strongest angle to discuss?\n• What should I document before any public demo?",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Invention brief preview"
          title="What your brief looks like"
          description="A sample of the structured document you bring to your consultation. Your professional gets the full picture in minutes, not hours."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Invention Brief — Sample
                </p>
                <h3 className="mt-1 font-semibold text-slate-900">
                  Compact Coiling Bicycle Lock
                </h3>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                Example
              </span>
            </div>
            <dl className="divide-y divide-slate-100 px-6">
              {briefSections.map((section) => (
                <div key={section.heading} className="py-4">
                  <dt className="text-sm font-semibold text-slate-900">
                    {section.heading}
                  </dt>
                  <dd className="mt-1 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {section.body}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-slate-200 px-6 py-4 text-xs text-slate-500">
              This is an illustrative example, not legal documentation. Your
              brief is a starting point for discussion with a qualified patent
              professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 8. Waitlist call-to-action */
function WaitlistSection() {
  return (
    <section id="waitlist" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-blue-900 px-6 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Be first in line when we launch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-blue-100">
            Join the waitlist and we will let you know the moment Invention
            Brief AI is ready for your first brief.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            aria-label="Waitlist signup (preview)"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full border-0 bg-white px-5 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="button"
              className="shrink-0 rounded-full bg-white px-6 py-3 font-semibold text-blue-900 transition-colors hover:bg-blue-50"
            >
              Join Waitlist
            </button>
          </form>
          <p className="mt-4 text-sm text-blue-200">
            This is a static prototype — the waitlist is not live yet.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Shared section heading */
function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}
