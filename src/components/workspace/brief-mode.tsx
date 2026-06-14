"use client";

import {
  BRIEF_FIELDS,
  type Brief,
  type BriefFieldKey,
} from "@/lib/workspace/types";
import type { WorkspaceStrings } from "@/lib/workspace/content";
import {
  briefToMarkdown,
  downloadText,
  safeFilename,
  workspaceToJson,
} from "@/lib/workspace/export";

const BODY_FIELDS = BRIEF_FIELDS.filter((f) => f !== "title");

export function BriefMode({
  brief,
  t,
  onChange,
  onBack,
}: {
  brief: Brief;
  t: WorkspaceStrings;
  onChange: (field: BriefFieldKey, value: string) => void;
  onBack: () => void;
}) {
  const meta = { title: t.meta.mdTitle, disclaimer: t.meta.mdDisclaimer };
  const filenameBase = safeFilename(brief.fields.title, t.meta.mdTitle);

  function exportMarkdown() {
    downloadText(
      `${filenameBase}.md`,
      briefToMarkdown(brief, t.fieldLabels, meta),
      "text/markdown;charset=utf-8",
    );
  }

  function exportJson() {
    downloadText(
      `${filenameBase}.json`,
      workspaceToJson([brief], Date.now()),
      "application/json",
    );
  }

  function printBrief() {
    if (typeof window !== "undefined") window.print();
  }

  return (
    <div>
      {/* Editable form — screen only */}
      <div className="print:hidden">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            {t.actions.back}
          </button>
          <span className="text-xs text-slate-400">{t.actions.saved}</span>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">{t.brief.intro}</p>

        <label className="mt-6 block">
          <span className="text-sm font-semibold text-slate-900">
            {t.fieldLabels.title}
          </span>
          <input
            type="text"
            value={brief.fields.title}
            onChange={(e) => onChange("title", e.target.value)}
            placeholder={t.brief.untitled}
            className="mt-1 w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </label>

        <div className="mt-5 space-y-5">
          {BODY_FIELDS.map((field) => (
            <label key={field} className="block">
              <span className="text-sm font-semibold text-slate-900">
                {t.fieldLabels[field]}
              </span>
              <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                {t.fieldHelp[field]}
              </span>
              <textarea
                value={brief.fields[field]}
                onChange={(e) => onChange(field, e.target.value)}
                placeholder={t.fieldPlaceholder}
                rows={4}
                className="mt-2 w-full rounded-lg border border-slate-300 p-3 text-sm leading-6 text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </label>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={exportMarkdown}
            className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            {t.actions.exportMd}
          </button>
          <button
            type="button"
            onClick={exportJson}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            {t.actions.exportJson}
          </button>
          <button
            type="button"
            onClick={printBrief}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            {t.actions.print}
          </button>
        </div>
      </div>

      {/* Clean printable view — print only */}
      <div className="hidden print:block">
        <h1 className="text-2xl font-bold text-black">
          {brief.fields.title.trim() || t.meta.mdTitle}
        </h1>
        <div className="mt-4 space-y-4">
          {BODY_FIELDS.map((field) => (
            <section key={field}>
              <h2 className="text-base font-semibold text-black">
                {t.fieldLabels[field]}
              </h2>
              <p className="mt-1 whitespace-pre-wrap text-sm text-black">
                {brief.fields[field].trim() || "—"}
              </p>
            </section>
          ))}
        </div>
        <p className="mt-6 border-t border-slate-300 pt-3 text-xs text-black">
          {t.meta.mdDisclaimer}
        </p>
      </div>
    </div>
  );
}
