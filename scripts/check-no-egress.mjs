#!/usr/bin/env node
// Blocking no-network-egress gate for the Local Workspace (privacy gate G2).
//
// The Local Workspace is a privacy-first, on-device tool: invention drafts are
// kept in the browser (IndexedDB) and must NEVER leave the device. This check
// fails (exit 1) if any workspace source file references a network-egress
// primitive or loads an external resource, so a regression can't ship silently.
//
// Run directly:        node scripts/check-no-egress.mjs
// Or via npm:          npm run check:egress
//
// Note: analytics is disabled on the workspace routes separately, by
// src/components/analytics-gate.tsx (which legitimately references the Vercel
// Analytics component and is therefore not part of the scanned set).

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

// The workspace feature surface: the on-device tool + its two route wrappers.
const ROOTS = [
  "src/lib/workspace",
  "src/components/workspace",
  "src/app/(en)/workspace",
  "src/app/(ja)/ja/workspace",
];

const EXTS = new Set([".ts", ".tsx", ".js", ".jsx"]);

// Network-egress / external-resource primitives that must not appear in
// workspace source. Matched by call/usage shape to avoid bare-word false
// positives. (Blob URLs, IndexedDB, FileReader, and window.print are local-only
// and intentionally allowed.)
const FORBIDDEN = [
  { re: /\bfetch\s*\(/, label: "fetch()" },
  { re: /\bXMLHttpRequest\b/, label: "XMLHttpRequest" },
  { re: /\bsendBeacon\b/, label: "navigator.sendBeacon()" },
  { re: /\bWebSocket\b/, label: "WebSocket" },
  { re: /\bEventSource\b/, label: "EventSource (SSE)" },
  { re: /\bimportScripts\s*\(/, label: "importScripts()" },
  { re: /\bnew\s+Image\s*\(/, label: "new Image() (tracking pixel)" },
  { re: /<img\b/, label: "<img> tag" },
  { re: /<script\b/, label: "<script> tag" },
  { re: /<iframe\b/, label: "<iframe> tag" },
  { re: /<link\b/, label: "<link> tag" },
  { re: /https?:\/\//, label: "external URL (http/https)" },
];

function walk(dir) {
  let files = [];
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return files; // a root may be absent in some checkouts; skip it
  }
  for (const name of entries) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      files = files.concat(walk(full));
    } else if (EXTS.has(extname(name))) {
      files.push(full);
    }
  }
  return files;
}

const violations = [];
let scanned = 0;

for (const root of ROOTS) {
  for (const file of walk(root)) {
    scanned++;
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      for (const { re, label } of FORBIDDEN) {
        if (re.test(line)) {
          violations.push({ file, line: i + 1, label, text: line.trim() });
        }
      }
    });
  }
}

if (violations.length > 0) {
  console.error(
    "\n✗ No-egress gate FAILED: workspace source must not make network " +
      "calls or load external resources.\n",
  );
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}  [${v.label}]  ${v.text}`);
  }
  console.error(
    `\n${violations.length} violation(s) across ${scanned} workspace file(s).\n`,
  );
  process.exit(1);
}

console.log(
  `✓ No-egress gate passed: ${scanned} workspace file(s) scanned, ` +
    "no network-egress primitives found.",
);
