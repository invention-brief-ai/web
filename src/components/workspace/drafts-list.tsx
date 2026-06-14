"use client";

import { useRef, useState, type ChangeEvent } from "react";
import type { Brief } from "@/lib/workspace/types";
import type { WorkspaceStrings } from "@/lib/workspace/content";
import {
  downloadText,
  parseWorkspaceJson,
  workspaceToJson,
} from "@/lib/workspace/export";

export function DraftsList({
  briefs,
  t,
  locale,
  onOpen,
  onNew,
  onDuplicate,
  onDelete,
  onImport,
}: {
  briefs: Brief[];
  t: WorkspaceStrings;
  locale: "en" | "ja";
  onOpen: (id: string) => void;
  onNew: () => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
  onImport: (briefs: Brief[]) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const formatter = new Intl.DateTimeFormat(locale === "ja" ? "ja-JP" : "en", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  function exportAll() {
    if (briefs.length === 0) return;
    downloadText(
      "invention-briefs-backup.json",
      workspaceToJson(briefs, Date.now()),
      "application/json",
    );
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const parsed = parseWorkspaceJson(String(reader.result ?? ""));
      if (parsed.length === 0) {
        setMessage(t.list.importEmpty);
      } else {
        onImport(parsed);
        setMessage(`${parsed.length} ${t.list.importDone}`);
      }
    };
    reader.readAsText(file);
  }

  function confirmDelete(id: string) {
    if (typeof window !== "undefined" && window.confirm(t.list.deleteConfirm)) {
      onDelete(id);
    }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-900">{t.list.title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{t.list.intro}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onNew}
          className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
        >
          {t.list.newBrief}
        </button>
        <button
          type="button"
          onClick={exportAll}
          disabled={briefs.length === 0}
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors enabled:hover:border-slate-400 enabled:hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {t.list.exportAll}
        </button>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
        >
          {t.list.importFile}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          onChange={handleFile}
          className="hidden"
        />
      </div>

      {message && (
        <p className="mt-3 text-sm text-slate-600" role="status">
          {message}
        </p>
      )}

      {briefs.length === 0 ? (
        <p className="mt-8 rounded-lg border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">
          {t.list.empty}
        </p>
      ) : (
        <ul className="mt-6 space-y-3">
          {briefs.map((brief) => {
            const title = brief.fields.title.trim() || t.brief.untitled;
            const preview = brief.fields.problem.trim();
            return (
              <li
                key={brief.id}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onOpen(brief.id)}
                    className="min-w-0 flex-1 text-left"
                  >
                    <span className="block truncate font-semibold text-slate-900">
                      {title}
                    </span>
                    {preview && (
                      <span className="mt-1 block truncate text-sm text-slate-500">
                        {preview}
                      </span>
                    )}
                    <span className="mt-1 block text-xs text-slate-400">
                      {t.list.lastEdited}: {formatter.format(brief.updatedAt)}
                    </span>
                  </button>
                </div>
                <div className="mt-3 flex gap-4 text-sm">
                  <button
                    type="button"
                    onClick={() => onOpen(brief.id)}
                    className="font-medium text-blue-700 hover:text-blue-800"
                  >
                    {t.list.open}
                  </button>
                  <button
                    type="button"
                    onClick={() => onDuplicate(brief.id)}
                    className="font-medium text-slate-600 hover:text-slate-900"
                  >
                    {t.list.duplicate}
                  </button>
                  <button
                    type="button"
                    onClick={() => confirmDelete(brief.id)}
                    className="font-medium text-rose-600 hover:text-rose-700"
                  >
                    {t.list.delete}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
