import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "初回特許相談チェックリスト",
  description:
    "弁理士などの専門家への初回相談の前に準備しておきたいことを、印刷して使えるチェックリストにまとめました。一般的な情報であり、法的助言ではありません。",
  alternates: alternatesFor("/checklist", "ja"),
};

const groups = [
  {
    title: "発明を平易な言葉で",
    items: [
      "誰にでも伝わる、発明の概要1段落",
      "解決したい課題と、その課題を抱えている人",
      "解決手段が機能する仕組み(順を追って)",
      "どの部分が本質的で、どの部分が変更可能か",
    ],
  },
  {
    title: "資料・記録",
    items: [
      "スケッチ、図面、写真",
      "試作品(あれば)",
      "アイデアを思いついた経緯・開発の記録",
    ],
  },
  {
    title: "既存のものとの関係",
    items: [
      "知っている範囲で最も近い製品・サービス・方法",
      "それぞれと自分の発明との違い",
      "関連する自分自身の過去の成果物",
    ],
  },
  {
    title: "公開の記録",
    items: [
      "これまでの公開すべて:デモ、発表、記事、SNS投稿、販売、クラウドファンディングなど",
      "それぞれについて:何を、いつ、どこで、誰に",
      "相談後まで延期できる、今後の公開予定",
    ],
  },
  {
    title: "関係者と背景",
    items: [
      "発明に関与したすべての人",
      "関係し得る雇用・共同開発などの背景",
    ],
  },
  {
    title: "目標と制約",
    items: [
      "想定する市場・国",
      "おおまかなスケジュール",
      "相談できる予算感",
    ],
  },
  {
    title: "専門家に聞いておきたい質問",
    items: [
      "こちらから追加で提供すべき情報はありますか?",
      "このような発明の場合、現実的にどのような選択肢がありますか?",
      "相談を進める間、避けるべきことはありますか?",
      "今後、どのような記録を残しておくべきですか?",
      "費用の体系と、想定すべき費用感を教えてください。",
      "相談内容の秘密保持はどのように扱われますか?",
    ],
  },
];

export default function ChecklistPageJa() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold tracking-wide text-blue-700 print:hidden">
        相談準備
      </p>
      <h1 className="mt-2 text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
        初回特許相談チェックリスト
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        弁理士などの専門家への初回相談の前に、集めておきたい情報のチェックリストです。このページを印刷して、準備が整った項目から印を付けてください。チェックが多いほど、相談時間を「状況の説明」ではなく「専門家からの助言」に使えます。
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
        <PrintButton label="このチェックリストを印刷" />
        <a
          href="/downloads/invention-brief-worksheet.ja.md"
          download
          className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
        >
          ブリーフ・ワークシートをダウンロード(Markdown)
        </a>
      </div>

      <div className="mt-10 space-y-8">
        {groups.map((group) => (
          <section key={group.title}>
            <h2 className="text-xl font-semibold text-slate-900">
              {group.title}
            </h2>
            <ul className="mt-3 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-slate-600">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-4 w-4 shrink-0 rounded border border-slate-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm leading-6 text-slate-600">
          本チェックリストは相談準備のための一般的な情報であり、法的助言ではありません。また、すべての状況を網羅するものでもありません。専門家から、これ以外の情報を求められる場合があります。{" "}
          <Link
            href="/ja/disclaimer"
            className="font-medium text-blue-700 hover:text-blue-800 print:hidden"
          >
            免責事項の全文を読む →
          </Link>
        </p>
      </div>

      <div className="mt-8 print:hidden">
        <p className="text-sm leading-6 text-slate-600">
          日本での相談を準備中の方は{" "}
          <Link
            href="/ja/guides/japan"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            日本向け準備ガイド
          </Link>
          へ。ブリーフが組み上がる流れは{" "}
          <Link
            href="/ja/demo"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            デモ
          </Link>
          でご覧いただけます。
        </p>
      </div>
    </div>
  );
}
