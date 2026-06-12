import type { MetadataRoute } from "next";
import { jaPathFor, sitePaths, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths.flatMap((enPath) => {
    const en = enPath === "/" ? siteUrl : `${siteUrl}${enPath}`;
    const ja = `${siteUrl}${jaPathFor(enPath)}`;
    const alternates = { languages: { en, ja } };
    return [
      { url: en, alternates },
      { url: ja, alternates },
    ];
  });
}
