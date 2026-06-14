import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "Invention Brief AIとは何か、何ではないのか。一般的なAIチャットボットとの違いや、サイトと端末内のローカルワークスペースでの情報の扱いについてまとめました。",
  alternates: alternatesFor("/faq", "ja"),
};

const faqs = [
  {
    question: "Invention Brief AIとは何ですか?",
    answer:
      "プライバシーを最優先にした、発明の思考整理ワークスペースです。弁理士などの専門家に相談する前に、「何が課題か」「どのような仕組みか」「既存の方法と何が違うか」「何を確認すべきか」を言語化・構造化し、初回相談を実りあるものにします。ローカルワークスペースは今すぐ利用でき、アカウント不要・AIなしで、すべてブラウザ内で動作します。AIによる補助は今後の予定です。",
  },
  {
    question: "これは法的助言ですか?",
    answer:
      "いいえ。Invention Brief AIは法律事務所・特許事務所ではなく、法的助言、特許性判断、請求項作成、出願書類作成、出願手続の代理を提供しません。本サービスの利用によって委任関係が生じることもありません。出願や権利化に関する判断は、必ず資格を有する専門家にご相談ください。",
  },
  {
    question: "自分の発明が特許になるか教えてもらえますか?",
    answer:
      "いいえ。発明が特許になり得るかどうかは、資格を有する専門家とともに検討すべき法的な事項です。本サービスの出力はいずれも、特許性の評価や、出願を勧める・勧めないという判断ではありません。",
  },
  {
    question: "一般的なAIチャットボットに聞くのと何が違いますか?",
    answer:
      "主に3点です。第一に「構造」:出力は、専門家が実際に見たい形式のブリーフであり、国別の準備ガイドと連動しています。第二に「境界線」:本ツールは準備支援に徹し、法的助言や特許性の判断に踏み込まない設計です。第三に「情報の扱い」:ローカルワークスペースは下書きをお使いの端末内に保存し、アップロードしません。サイトが収集するのはCookie不使用の集計訪問統計のみです。",
  },
  {
    question: "このサイトにアイデアを入力しても安全ですか?",
    answer:
      "ローカルワークスペースは、下書きをお使いの端末内(ブラウザ内)にのみ保存し、アップロードしません。ブラウザのデータを消去すると下書きも削除され、ワークスペースではアクセス解析も無効です。サイトが収集するのは匿名の集計ページビュー統計のみです(Cookie不使用・個人の追跡なし。詳細はプライバシーページへ)。一方で、秘密保持の枠組みがない経路、たとえばβ版案内フォームや連絡先メールなどを通じて、機密の発明内容を端末の外に送らないでください。未公開の詳細は、自分で選んだ専門家にだけ伝えるのが安全です。",
  },
  {
    question: "料金はかかりますか?",
    answer:
      "サイト・ガイド・ローカルワークスペースは無料です。AIによる補助機能は今後の予定で、その料金体系は未定です。β版案内への登録も無料の予定ですが、登録フォーム自体まだ稼働していません。早期段階のプロジェクトであることをご了承ください。",
  },
  {
    question: "弁理士の紹介・推薦はしてもらえますか?",
    answer:
      "現在は行っていません。本サービスは特定の専門家や事務所を推薦せず、誰に相談するかはすべてご自身の選択です。専門家探しの支援については、将来、慎重に設計したうえで検討する可能性があります。",
  },
  {
    question: "どの国に対応していますか?",
    answer:
      "現在、日本向けガイドを日本語と英語で公開しています。米国・欧州向けガイドも準備中です。サイト全体が日英二言語に対応しており、ヘッダーの言語切り替えからご利用いただけます。",
  },
];

export default function FaqPageJa() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
        よくある質問
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        Invention Brief
        AIが「何であるか」、そして同じくらい大切な「何ではないか」を短くまとめました。
      </p>

      <div className="mt-10 space-y-8">
        {faqs.map((faq) => (
          <section key={faq.question}>
            <h2 className="text-xl font-semibold text-slate-900">
              {faq.question}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm leading-6 text-slate-600">
          他に確認したいことがある場合は、{" "}
          <Link
            href="/ja/disclaimer"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            免責事項の全文
          </Link>
          や{" "}
          <Link
            href="/ja/about"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            運営者情報
          </Link>
          をご覧ください。準備を始めるなら{" "}
          <Link
            href="/ja/checklist"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            初回相談チェックリスト
          </Link>
          からどうぞ。
        </p>
      </div>
    </div>
  );
}
