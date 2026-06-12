import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "運営者情報",
  description:
    "Invention Brief AIの運営形態、プロジェクトの現状、連絡先について。",
  alternates: alternatesFor("/about", "ja"),
};

export default function AboutPageJa() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
        運営者情報
      </h1>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            Invention Brief AIについて
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Invention Brief
            AIは、発明者が弁理士などの専門家に相談する前に、自分のアイデアを整理するための相談準備ツールです。現在は早期段階のプロトタイプであり、このサイトは日英二言語の情報ページと、公開予定のブリーフ作成機能のプレビューで構成されています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">運営形態</h2>
          <p className="mt-3 leading-7 text-slate-600">
            個人運営の早期段階プロジェクトです。現時点で法人ではなく、法律事務所・特許事務所・特許庁・行政機関のいずれでもありません。本サイトを通じて、運営者があなたの代理人として行動することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">現在の状況</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
            <li>
              静的なプロトタイプです(アカウント、決済、入力内容の収集はありません。データはCookie不使用の匿名訪問統計のみ)
            </li>
            <li>ブリーフ作成機能とβ版案内の登録は、まだ稼働していません</li>
            <li>
              各ガイドは一般的な情報であり、専門家によるレビューを予定している段階です
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">連絡先</h2>
          <p className="mt-3 leading-7 text-slate-600">
            ご質問・ご意見はこちらへ:{" "}
            <a
              href="mailto:inventionbriefai@gmail.com"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              inventionbriefai@gmail.com
            </a>
          </p>
          <p className="mt-3 leading-7 text-slate-600">
            メールでも、未公開の発明内容や機密情報は送らないでください。本プロジェクトには秘密保持の体制がまだなく、未公開の詳細は、自分で選んだ弁理士などの専門家にだけ伝えるのが安全です。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">関連ページ</h2>
          <p className="mt-3 leading-7 text-slate-600">
            <Link
              href="/ja/disclaimer"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              免責事項
            </Link>
            、
            <Link
              href="/ja/privacy"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              プライバシー
            </Link>
            、
            <Link
              href="/ja/faq"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              よくある質問
            </Link>
            もあわせてご覧ください。
          </p>
        </section>
      </div>
    </div>
  );
}
