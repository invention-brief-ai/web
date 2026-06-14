import type { Metadata } from "next";
import Link from "next/link";
import { BriefDemo } from "@/components/brief-demo";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "デモ — ブリーフができるまで",
  description:
    "Invention Brief AIがガイド付きの質問から発明相談ブリーフを組み立てる流れを、固定のサンプルで紹介する読み取り専用デモ。入力の受付・送信・保存は行いません。",
  alternates: alternatesFor("/demo", "ja"),
};

export default function DemoPageJa() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold tracking-wide text-blue-700">デモ</p>
      <h1 className="mt-2 text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
        発明相談ブリーフができるまで
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        Invention Brief
        AIは、いくつかのガイド付き質問に沿って回答を整理し、構造化された「発明相談ブリーフ」にまとめるツールです。ローカルワークスペースで今すぐお使いいただけます。以下のデモでは、固定のサンプル発明(折りたたみ式の自転車ロック)を使って、各ステップの流れをご覧いただけます。
      </p>

      <div className="mt-10">
        <BriefDemo locale="ja" />
      </div>

      <p className="mt-6 text-sm leading-6 text-slate-500">
        完成したブリーフは、弁理士などの専門家に相談するための準備文書です。法的助言や特許性の判断ではなく、出願書類でもありません。
      </p>

      <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900">
          今日から紙で準備を始めたい方へ
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          初回相談チェックリストとダウンロード可能なブリーフ・ワークシートは、このデモと同じ項目をカバーしています。印刷して、今日から整理を始められます。
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/ja/checklist"
            className="inline-block rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            チェックリストを開く
          </Link>
          <Link
            href="/ja/workspace"
            prefetch={false}
            className="inline-block rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-white"
          >
            ワークスペースを開く
          </Link>
        </div>
      </div>
    </div>
  );
}
