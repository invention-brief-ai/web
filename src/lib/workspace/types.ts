// Tier 1 "Local Workspace" data model.
// One Brief object is shared by Mirror Mode (guided reflection) and
// Brief Mode (structured editor). Everything here lives only in the user's
// browser (IndexedDB) — see PLAN_MODES_AND_ACCOUNTS.md gates G1–G7.

export const BRIEF_FIELDS = [
  "title",
  "summary",
  "problem",
  "mechanism",
  "effects",
  "useCases",
  "knownSimilar",
  "disclosure",
  "uncertainties",
  "questions",
] as const;

export type BriefFieldKey = (typeof BRIEF_FIELDS)[number];

export type Brief = {
  id: string;
  createdAt: number;
  updatedAt: number;
  fields: Record<BriefFieldKey, string>;
};

export const SCHEMA_VERSION = 1;

// Shape of an exported/imported workspace file. Used for JSON backup so the
// user controls their own data (G4: export only — no server, no share links).
export type WorkspaceExport = {
  app: "invention-brief-ai";
  kind: "local-workspace";
  schemaVersion: number;
  exportedAt: number;
  briefs: Brief[];
};

export function emptyFields(): Record<BriefFieldKey, string> {
  return BRIEF_FIELDS.reduce(
    (acc, key) => {
      acc[key] = "";
      return acc;
    },
    {} as Record<BriefFieldKey, string>,
  );
}

// Generates an id without leaking anything to the network. Uses the Web Crypto
// API when available, falling back to a local-only random string.
export function newId(): string {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return `b_${Math.random().toString(36).slice(2)}${Math.random()
    .toString(36)
    .slice(2)}`;
}

export function createBrief(now: number = Date.now()): Brief {
  return {
    id: newId(),
    createdAt: now,
    updatedAt: now,
    fields: emptyFields(),
  };
}

// Defensive validation of anything read from storage or an imported file.
// Every stored field is treated as untrusted (G5).
export function isBrief(value: unknown): value is Brief {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  if (typeof v.id !== "string") return false;
  if (typeof v.createdAt !== "number" || typeof v.updatedAt !== "number")
    return false;
  if (typeof v.fields !== "object" || v.fields === null) return false;
  const fields = v.fields as Record<string, unknown>;
  return BRIEF_FIELDS.every((key) => typeof fields[key] === "string");
}

export function coerceBrief(value: unknown): Brief | null {
  if (!isBrief(value)) return null;
  const v = value as Brief;
  // Rebuild from a known field whitelist so unknown keys never survive import.
  const fields = emptyFields();
  for (const key of BRIEF_FIELDS) fields[key] = String(v.fields[key] ?? "");
  return {
    id: String(v.id),
    createdAt: Number(v.createdAt),
    updatedAt: Number(v.updatedAt),
    fields,
  };
}
