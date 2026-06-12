import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "About This Project",
  description:
    "Who operates Invention Brief AI, what stage the project is at, and how to get in touch.",
  alternates: alternatesFor("/about", "en"),
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        About This Project
      </h1>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            What Invention Brief AI Is
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Invention Brief AI is a consultation-preparation tool: it helps
            inventors organize their ideas before speaking with a qualified
            patent professional. The project is currently an early-stage
            prototype — the pages you see here are a bilingual knowledge base
            and a preview of the planned brief builder.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Who Operates It
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            This is an independent, early-stage project. It is not a company
            yet, and it is not a law firm, patent firm, patent office, or
            government agency. No one associated with the project acts as your
            attorney or representative through this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Current Status
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
            <li>Static prototype — no accounts, payments, or data collection</li>
            <li>The brief builder and waitlist are not live yet</li>
            <li>
              Guides are general information pending review by qualified
              professionals
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Questions and feedback are welcome:{" "}
            <a
              href="mailto:inventionbriefai@gmail.com"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              inventionbriefai@gmail.com
            </a>
          </p>
          <p className="mt-3 leading-7 text-slate-600">
            Please do not send confidential invention details by email — this
            project has no confidentiality framework in place, and unpublished
            details should be shared only with the qualified patent
            professional you choose to work with.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">Learn More</h2>
          <p className="mt-3 leading-7 text-slate-600">
            See the{" "}
            <Link
              href="/disclaimer"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              disclaimer
            </Link>
            , the{" "}
            <Link
              href="/privacy"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              privacy page
            </Link>
            , and the{" "}
            <Link
              href="/faq"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              FAQ
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
