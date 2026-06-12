import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "What Invention Brief AI is, what it is not, how it differs from asking a general AI chatbot, and how this prototype handles your information.",
  alternates: alternatesFor("/faq", "en"),
};

const faqs = [
  {
    question: "What is Invention Brief AI?",
    answer:
      "A consultation-preparation tool. It helps inventors organize their ideas into a structured invention brief before speaking with a qualified patent professional, so the first consultation is focused and productive. It is currently a static prototype — the brief builder is not live yet.",
  },
  {
    question: "Is this legal advice?",
    answer:
      "No. Invention Brief AI is not a law firm and does not provide legal advice, patentability opinions, claim drafting, patent application drafting, or filing services. Using it does not create an attorney–client relationship. For legal advice and filing decisions, consult a qualified patent attorney or patent agent in your jurisdiction.",
  },
  {
    question: "Can you tell me whether my invention is patentable?",
    answer:
      "No. Whether an invention can be patented is a legal judgment that only a qualified patent professional can help you with. Nothing this service produces is an assessment of patentability or an encouragement to file or not to file.",
  },
  {
    question: "How is this different from asking a general AI chatbot?",
    answer:
      "Three ways. First, structure: the output is a brief in the format patent professionals actually want to see, with country-specific preparation guidance. Second, boundaries: the tool is built to stay clearly on the preparation side of the line and never drift into legal advice or patentability claims. Third, handling of your information: this prototype collects and stores nothing, and the planned brief builder is being designed so your idea is processed on your own device rather than sent to a server.",
  },
  {
    question: "Is my idea safe on this site?",
    answer:
      "The current prototype has no forms that send or store data — nothing you type anywhere on this site is transmitted or saved. Even so, you should not enter confidential invention details into this or any service until appropriate privacy and confidentiality terms are in place. Keep unpublished details for the qualified professional you choose to work with.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The site and its guides are free. The brief builder is not launched yet, and pricing has not been decided. Joining the waitlist costs nothing — and the waitlist form itself is not live yet either; this is an early-stage prototype.",
  },
  {
    question: "Do you recommend or introduce patent attorneys?",
    answer:
      "Not currently. The service does not recommend specific professionals or firms, and choosing whom to consult is entirely up to you. Carefully designed support for finding professionals may be explored in the future.",
  },
  {
    question: "Which countries does it cover?",
    answer:
      "The Japan guide is available now in English and Japanese. Guides for the United States and Europe are planned. The site itself is fully bilingual (English / 日本語) — use the language toggle in the header.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        Short answers about what Invention Brief AI is — and just as
        importantly, what it is not.
      </p>

      <div className="mt-10 space-y-8">
        {faqs.map((faq) => (
          <section key={faq.question}>
            <h2 className="text-xl font-semibold text-slate-900">
              {faq.question}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm leading-6 text-slate-600">
          Still have a question? See the{" "}
          <Link
            href="/disclaimer"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            full disclaimer
          </Link>
          , the{" "}
          <Link
            href="/about"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            about page
          </Link>
          , or start with the{" "}
          <Link
            href="/checklist"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            first-consultation checklist
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
