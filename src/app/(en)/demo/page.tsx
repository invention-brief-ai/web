import type { Metadata } from "next";
import Link from "next/link";
import { BriefDemo } from "@/components/brief-demo";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demo — How a Brief Is Built",
  description:
    "A read-only walkthrough of how Invention Brief AI turns guided questions into a structured invention brief. Uses a fixed example; collects no input.",
  alternates: alternatesFor("/demo", "en"),
};

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Demo
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        How a brief is built
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        Invention Brief AI will guide you through a short series of questions
        and organize your answers into a structured invention brief. The
        walkthrough below shows each step using a fixed example invention — a
        folding bicycle lock — so you can see exactly what the process looks
        like before the tool launches.
      </p>

      <div className="mt-10">
        <BriefDemo locale="en" />
      </div>

      <p className="mt-6 text-sm leading-6 text-slate-500">
        The finished brief is a preparation document for your consultation with
        a qualified patent professional — not legal advice, not a patentability
        opinion, and not a filing document.
      </p>

      <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900">
          Prefer to prepare on paper today?
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          The first-consultation checklist and the downloadable brief worksheet
          cover the same ground — print them and start organizing now.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/checklist"
            className="inline-block rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Open the checklist
          </Link>
          <Link
            href="/#waitlist"
            className="inline-block rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-white"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </div>
  );
}
