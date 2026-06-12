import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "First Patent Consultation Checklist",
  description:
    "A printable checklist of what to prepare before your first consultation with a qualified patent professional. General information — not legal advice.",
  alternates: alternatesFor("/checklist", "en"),
};

const groups = [
  {
    title: "Your invention, in plain language",
    items: [
      "A one-paragraph summary of the invention anyone can understand",
      "The problem it solves, and who has that problem",
      "How the solution works, step by step",
      "Which parts are essential, and which are optional variations",
    ],
  },
  {
    title: "Evidence and materials",
    items: [
      "Sketches, diagrams, or photos",
      "A simple prototype, if one exists",
      "Notes on when and how the idea was developed",
    ],
  },
  {
    title: "What already exists",
    items: [
      "The closest products, services, or methods you know about",
      "How your invention differs from each of them",
      "Your own earlier work that is related",
    ],
  },
  {
    title: "Disclosure record",
    items: [
      "Every public disclosure so far: demos, talks, articles, social media posts, sales, crowdfunding",
      "For each one: what was shown, when, where, and to whom",
      "Planned disclosures you can still postpone until after the consultation",
    ],
  },
  {
    title: "People and context",
    items: [
      "Everyone who contributed to the invention",
      "Employment or collaboration context that might be relevant",
    ],
  },
  {
    title: "Goals and constraints",
    items: [
      "Target markets and countries you care about",
      "Rough timeline",
      "Budget range you are comfortable discussing",
    ],
  },
  {
    title: "Questions to ask the professional",
    items: [
      "What additional information do you need from me?",
      "What are the realistic options for an invention like mine?",
      "What should I avoid doing while we work together?",
      "What should I document going forward?",
      "How are fees structured, and what cost range should I expect?",
      "How should we handle confidentiality between us?",
    ],
  },
];

export default function ChecklistPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 print:hidden">
        Preparation
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        First Patent Consultation Checklist
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        What to gather before your first conversation with a qualified patent
        professional. Print this page and check items off as you prepare — the
        more boxes you can tick, the more of the consultation can be spent on
        the professional&apos;s guidance instead of basic information
        gathering.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
        <PrintButton label="Print this checklist" />
        <a
          href="/downloads/invention-brief-worksheet.en.md"
          download
          className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
        >
          Download the brief worksheet (Markdown)
        </a>
      </div>

      <div className="mt-10 space-y-8">
        {groups.map((group) => (
          <section key={group.title}>
            <h2 className="text-xl font-semibold text-slate-900">
              {group.title}
            </h2>
            <ul className="mt-3 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-slate-600">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-4 w-4 shrink-0 rounded border border-slate-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm leading-6 text-slate-600">
          This checklist is general information for consultation preparation —
          not legal advice, and not a complete list for every situation. A
          qualified patent professional may ask for more or different
          information.{" "}
          <Link
            href="/disclaimer"
            className="font-medium text-blue-700 hover:text-blue-800 print:hidden"
          >
            Read the full disclaimer →
          </Link>
        </p>
      </div>

      <div className="mt-8 print:hidden">
        <p className="text-sm leading-6 text-slate-600">
          Preparing for a consultation in Japan? See the{" "}
          <Link
            href="/guides/japan"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            Japan Patent Consultation Guide
          </Link>
          , or walk through{" "}
          <Link
            href="/demo"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            how a brief is built
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
