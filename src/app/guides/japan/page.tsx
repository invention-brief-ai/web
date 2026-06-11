import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Japan Consultation Guide",
  description:
    "What to expect when preparing for a patent consultation in Japan. Educational preview — not legal advice.",
};

export default function JapanGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Country Guide
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        <span aria-hidden>🇯🇵</span> Preparing for a Patent Consultation in
        Japan
      </h1>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          This guide is a placeholder preview. The full guide is in
          preparation. The information below is general and educational — it is
          not legal advice. Always confirm details with a qualified patent
          professional in Japan.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Who You Will Meet
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            In Japan, patent matters are typically handled by a{" "}
            <strong>benrishi</strong> (弁理士), a licensed patent attorney
            qualified to represent clients before the Japan Patent Office
            (JPO). Some matters may also involve a <strong>bengoshi</strong>{" "}
            (attorney-at-law). The full guide will explain how these roles
            differ and how to find a qualified professional.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            What a First Consultation Usually Covers
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
            <li>A clear description of the problem your invention solves</li>
            <li>How your solution works and what makes it different</li>
            <li>Similar products or approaches you already know about</li>
            <li>Whether the invention has been shown or described publicly</li>
            <li>Your goals — markets, timeline, and budget considerations</li>
          </ul>
          <p className="mt-3 leading-7 text-slate-600">
            An organized invention brief lets you cover these points
            efficiently, so the professional can spend the meeting on guidance
            rather than information gathering.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Topics the Full Guide Will Cover
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
            <li>Common terminology you will hear in a Japanese consultation</li>
            <li>What documents and materials are useful to bring</li>
            <li>How consultations are typically structured and billed</li>
            <li>Questions worth asking your benrishi in the first meeting</li>
            <li>Why early disclosure questions matter in Japan</li>
          </ul>
        </section>
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900">
          Want the full guide when it launches?
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Join the waitlist and we will notify you when the complete Japan
          consultation guide is available.
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
