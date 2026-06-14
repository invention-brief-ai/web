import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "利用規約",
  description:
    "Invention Brief AIの利用規約。本サービスは相談準備ツールであり、法律事務所ではありません。",
  alternates: alternatesFor("/terms", "ja"),
};

export default function TermsPageJa() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        利用規約
      </h1>
      <p className="mt-4 text-sm text-slate-500">最終更新:2026年6月</p>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          本利用規約は、早期段階のプロジェクトに関する平易な要約であり、現在も専門家によるレビューを進めています。法的助言ではありません。
          <Link
            href="/ja/disclaimer"
            prefetch={false}
            className="font-semibold underline"
          >
            免責事項
          </Link>
          や
          <Link
            href="/ja/privacy"
            prefetch={false}
            className="font-semibold underline"
          >
            プライバシーポリシー
          </Link>
          と内容が異なるように見える場合は、あわせてお読みのうえ、ご不明な点はお問い合わせください。
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            本サイトのご利用について
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Invention Brief
            AIをご利用いただくことで、本利用規約、ならびに免責事項およびプライバシーポリシーに同意したものとみなされます。本プロジェクトは個人運営の早期段階のものであり、本サイトおよびローカルワークスペースは、ご自身の準備のために提供されます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            本サービスの位置づけ
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Invention Brief
            AIは、弁理士などの専門家に相談する前に、ご自身のアイデアを整理・構造化することを支援します。法的助言、特許性の判断、請求項の作成、出願書類の作成、出願手続の代理は提供せず、利用によって委任関係その他の専門的関係が生じることはありません。詳細は免責事項をご覧ください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            利用者のコンテンツとローカルワークスペース
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            ローカルワークスペースに入力した内容は、お使いの端末のブラウザ内(IndexedDB)にのみ保存されます。運営者がこれを受信・保存したり、アクセスしたりすることはありません。下書きの管理(書き出し機能による控えの保存を含む)は利用者ご自身の責任で行ってください。ブラウザのデータを消去すると下書きは削除されます。β版案内フォームや連絡先メールなど、端末の外に出る経路に機密の発明内容を入力しないでください。コンテンツに関する権利はすべて利用者に帰属します。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">無保証</h2>
          <p className="mt-3 leading-7 text-slate-600">
            本サイト、各ガイド、およびローカルワークスペースは、現状有姿(as
            is)かつ提供可能な範囲で提供され、いかなる保証も行いません。ガイド等の内容は一般的な情報であり、不完全であったり最新でない場合があり、専門家の助言に代わるものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">責任の制限</h2>
          <p className="mt-3 leading-7 text-slate-600">
            法令が認める最大限の範囲で、Invention Brief
            AIおよびその運営者は、本サイトの利用、または本サイトに基づく判断から生じるいかなる損害についても責任を負いません。発明の保護に関する判断は、必ず資格を有する専門家とともに行ってください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">規約の変更</h2>
          <p className="mt-3 leading-7 text-slate-600">
            本利用規約は、プロジェクトの進展に応じて更新されることがあります。重要な変更は本ページに反映し、「最終更新」の日付を更新します。変更後に利用を継続した場合、更新後の規約に同意したものとみなされます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            お問い合わせ
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            本規約に関するお問い合わせは、{" "}
            <a
              href="mailto:inventionbriefai@gmail.com"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              inventionbriefai@gmail.com
            </a>{" "}
            までメールでご連絡ください。
          </p>
        </section>
      </div>
    </div>
  );
}
