"use client";

import { useState } from "react";
import type { Brief, BriefFieldKey } from "@/lib/workspace/types";
import type { WorkspaceStrings } from "@/lib/workspace/content";

export function MirrorMode({
  brief,
  t,
  onChange,
  onFinish,
}: {
  brief: Brief;
  t: WorkspaceStrings;
  onChange: (field: BriefFieldKey, value: string) => void;
  onFinish: () => void;
}) {
  const steps = t.mirror.steps;
  const [index, setIndex] = useState(0);
  const finished = index >= steps.length;

  if (finished) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          {t.mirror.finishedTitle}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {t.mirror.finishedBody}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onFinish}
            className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            {t.mirror.openInBrief}
          </button>
          <button
            type="button"
            onClick={() => setIndex(0)}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            {t.mirror.restart}
          </button>
        </div>
      </div>
    );
  }

  const step = steps[index];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <p className="text-sm leading-6 text-slate-600">{t.mirror.intro}</p>

      <div className="mt-5 flex items-center gap-2" aria-hidden>
        {steps.map((s, i) => (
          <span
            key={s.field}
            className={`h-1.5 flex-1 rounded-full ${
              i <= index ? "bg-blue-700" : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-slate-400">
        {t.mirror.stepWord} {index + 1} {t.mirror.ofWord} {steps.length}
      </p>
      <h2 className="mt-2 text-lg font-semibold text-slate-900">
        {step.question}
      </h2>
      <textarea
        value={brief.fields[step.field]}
        onChange={(e) => onChange(step.field, e.target.value)}
        placeholder={t.fieldPlaceholder}
        rows={6}
        className="mt-4 w-full rounded-lg border border-slate-300 p-3 text-sm leading-6 text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <p className="mt-2 text-xs leading-5 text-slate-500">{step.hint}</p>

      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors enabled:hover:border-slate-400 enabled:hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {t.mirror.prev}
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => i + 1)}
          className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
        >
          {index === steps.length - 1 ? t.mirror.finish : t.mirror.next}
        </button>
      </div>
    </div>
  );
}
