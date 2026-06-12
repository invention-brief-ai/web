import type { Metadata } from "next";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "免責事項",
  description:
    "Invention Brief AIは相談準備ツールであり、法律事務所・特許事務所ではありません。免責事項の全文はこちら。",
  alternates: alternatesFor("/disclaimer", "ja"),
};

export default function DisclaimerPageJa() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        免責事項
      </h1>
      <p className="mt-4 text-sm text-slate-500">最終更新:2026年6月</p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm leading-6 text-slate-700">
          要約:Invention Brief
          AIは相談準備ツールです。弁理士などの専門家に相談する前に、自分のアイデアを整理するためのものであり、法的助言の提供源でも、その代替でもありません。
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            法律事務所・特許事務所ではありません
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Invention Brief
            AIは法律事務所または特許事務所ではありません。本サービスに関わるいかなる者も、利用者の弁護士、弁理士、または法的代理人として行動するものではなく、本サービスの利用によって委任関係その他の専門的助言関係が生じることはありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            法的助言は提供しません
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            本サービスは法的助言を提供するものではありません。本サービスが提供するコンテンツ、ツール、ガイド、文書はすべて、整理を目的とした一般的な情報であり、資格を有する弁理士・弁護士による助言の代わりとして利用することはできません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            特許性の判断は行いません
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            本サービスは特許性の判断を行うものではありません。発明相談ブリーフ、ガイド、その他いかなる出力も、発明が特許になり得るかどうかの評価ではなく、出願を勧める(または勧めない)ものとして解釈されるべきではありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            請求項・出願書類は作成しません
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            本サービスは、請求項または正式な出願書類を作成するものではありません。発明相談ブリーフは相談準備のための文書であり、出願書類ではなく、出願書類として使用してはなりません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            特許庁等への手続代理は行いません
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            本サービスは、特許庁その他の機関に対する出願・手続の代理を行うものではありません。日本の特許庁、米国特許商標庁(USPTO)、欧州特許庁(EPO)を含むいかなる機関に対しても、手続の代理や提出を行いません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            専門家への相談について
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            出願可否、出願戦略、権利化可能性については、弁理士などの資格を有する専門家に相談してください。発明の保護に関する判断は、必ず資格を有する専門家とともに行ってください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            機密情報の入力について(重要)
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            適切な利用規約・プライバシー・秘密保持体制が整うまでは、未公開の機密情報や詳細な発明内容を入力しないでください。現在のプロトタイプには秘密保持の枠組みがありません。また、多くの国では出願前の公開がその後の選択肢に影響し得るため、公開に関する疑問はできるだけ早く専門家にご相談ください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            国別ガイドについて
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            国別ガイドは、公開情報に基づく一般的な情報を教育目的で提供するものです。最新の変更を反映していない可能性があり、個別の状況に対する法的な指針ではありません。最新の要件は、必ず該当国の資格を有する専門家にご確認ください。
          </p>
        </section>
      </div>
    </div>
  );
}
