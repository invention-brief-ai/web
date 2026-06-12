import type { Metadata } from "next";

// TODO: replace with the custom domain once one is connected (see TODO.md).
export const siteUrl = "https://web-tan-delta-17.vercel.app";

// English paths of all mirrored EN/JA page pairs ("/x" <-> "/ja/x").
export const sitePaths = [
  "/",
  "/about",
  "/checklist",
  "/demo",
  "/disclaimer",
  "/faq",
  "/guides/japan",
  "/guides/japan-self-filing",
  "/privacy",
] as const;

export function jaPathFor(enPath: string): string {
  return enPath === "/" ? "/ja" : `/ja${enPath}`;
}

export function alternatesFor(
  enPath: string,
  locale: "en" | "ja",
): Metadata["alternates"] {
  const jaPath = jaPathFor(enPath);
  return {
    canonical: locale === "en" ? enPath : jaPath,
    languages: {
      en: enPath,
      ja: jaPath,
      "x-default": enPath,
    },
  };
}
