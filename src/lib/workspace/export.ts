// Local export/import for the workspace. Markdown + JSON only, generated and
// downloaded entirely in the browser via Blob URLs — no server, no share
// links (G4). Import is validated field-by-field (G5).

import {
  BRIEF_FIELDS,
  type Brief,
  type BriefFieldKey,
  type WorkspaceExport,
  SCHEMA_VERSION,
  coerceBrief,
} from "./types";

export function briefToMarkdown(
  brief: Brief,
  labels: Record<BriefFieldKey, string>,
  meta: { title: string; disclaimer: string },
): string {
  const heading = brief.fields.title.trim() || meta.title;
  const lines: string[] = [`# ${heading}`, ""];
  for (const key of BRIEF_FIELDS) {
    if (key === "title") continue;
    const value = brief.fields[key].trim();
    lines.push(`## ${labels[key]}`, "", value.length > 0 ? value : "—", "");
  }
  lines.push("---", "", meta.disclaimer, "");
  return lines.join("\n");
}

export function workspaceToJson(briefs: Brief[], exportedAt: number): string {
  const payload: WorkspaceExport = {
    app: "invention-brief-ai",
    kind: "local-workspace",
    schemaVersion: SCHEMA_VERSION,
    exportedAt,
    briefs,
  };
  return JSON.stringify(payload, null, 2);
}

// Parses an imported workspace file. Returns only valid briefs; never throws
// on malformed input — unknown shapes yield an empty list.
export function parseWorkspaceJson(text: string): Brief[] {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    return [];
  }
  if (typeof data !== "object" || data === null) return [];
  const briefs = (data as { briefs?: unknown }).briefs;
  if (!Array.isArray(briefs)) return [];
  return briefs
    .map(coerceBrief)
    .filter((b): b is Brief => b !== null);
}

// Triggers a client-side file download from in-memory text. Uses a Blob URL,
// which never touches the network.
export function downloadText(
  filename: string,
  text: string,
  mime: string,
): void {
  if (typeof document === "undefined") return;
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// A filesystem-safe slug derived from the brief title, for the download name.
// Stays local; never used in a URL the browser requests or analytics captures.
export function safeFilename(base: string, fallback: string): string {
  const cleaned = base
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .slice(0, 60);
  return cleaned.length > 0 ? cleaned : fallback;
}
