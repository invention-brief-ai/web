import type { Metadata } from "next";
import { WorkspaceApp } from "@/components/workspace/workspace-app";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Local Workspace",
  description:
    "Organize your invention idea before a patent consultation in a private, on-device workspace. Everything stays in your browser — nothing is uploaded or sent anywhere.",
  alternates: alternatesFor("/workspace", "en"),
};

export default function WorkspacePage() {
  return <WorkspaceApp locale="en" />;
}
