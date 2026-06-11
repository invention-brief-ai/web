import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Invention Brief AI.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          This page is a placeholder. A full privacy policy will be published
          before the service launches.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
          <p className="mt-3 leading-7 text-slate-600">
            This website is currently a static prototype. It does not collect
            personal information, does not use accounts or logins, and does not
            process payments. The waitlist form shown on the home page is a
            visual preview and does not submit or store any data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            What the Full Policy Will Cover
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
            <li>What information we collect and why</li>
            <li>How invention details you enter are stored and protected</li>
            <li>How long data is retained and how to request deletion</li>
            <li>Third-party services and data processors, if any</li>
            <li>Your rights and how to contact us</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            A Note on Invention Confidentiality
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            We understand that invention details are sensitive. Protecting the
            confidentiality of what you share will be a core commitment of the
            full privacy policy.
          </p>
        </section>
      </div>
    </div>
  );
}
