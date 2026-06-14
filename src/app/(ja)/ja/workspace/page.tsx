import type { Metadata } from "next";
import { WorkspaceApp } from "@/components/workspace/workspace-app";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "ローカルワークスペース",
  description:
    "特許相談の前に、発明アイデアを端末内のプライベートなワークスペースで整理します。すべてはブラウザ内にとどまり、どこにもアップロード・送信されません。",
  alternates: alternatesFor("/workspace", "ja"),
};

export default function WorkspacePageJa() {
  return <WorkspaceApp locale="ja" />;
}
