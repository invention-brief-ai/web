"use client";

import { Analytics } from "@vercel/analytics/next";
import { usePathname } from "next/navigation";

// Renders Vercel Web Analytics everywhere EXCEPT the Local Workspace routes
// (G2). The workspace handles invention content; even though no content ever
// reaches a URL or title (G7), analytics is kept off those routes entirely as
// defense in depth. The no-egress acceptance test enforces this.
export function AnalyticsGate() {
  const pathname = usePathname() ?? "";
  const isWorkspace =
    pathname === "/workspace" ||
    pathname.startsWith("/workspace/") ||
    pathname === "/ja/workspace" ||
    pathname.startsWith("/ja/workspace/");
  if (isWorkspace) return null;
  return <Analytics />;
}
