import type { Metadata } from "next";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Invention Brief AIプロトタイプのプライバシーポリシー。",
  alternates: alternatesFor("/privacy", "ja"),
};

export default function PrivacyPageJa() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        プライバシーポリシー
      </h1>
      <p className="mt-4 text-sm text-slate-500">最終更新:2026年6月</p>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          本ページは暫定版です。個人情報や発明に関するデータの収集を開始する前に、正式なプライバシーポリシーを公開します。現時点で行っているのは、以下に説明するCookie不使用の集計訪問統計のみです。
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            現在の状態:静的プロトタイプ
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            現在のプロトタイプでは、アカウント登録、決済、データベース保存、詳細な発明内容の受付は実装していません。本サイトは静的なページのみで構成されており、動作するフォームはありません。サイト上のどこに入力しても、内容が送信・保存されることはありません。ホームページに表示されているβ版案内フォームは見た目のプレビューです。収集しているのは、次のセクションで説明する集計された訪問統計のみです。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            集計された訪問統計(Vercel Web Analytics)
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            本サイトは、ホスティング事業者であるVercelが提供するCookie不使用の計測ツール「Vercel
            Web
            Analytics」を使用して、ページの閲覧数を集計しています(例:どのガイドが何回読まれたか)。これらの数値は、どのコンテンツを改善し、次に何を書くかを判断するためだけに使用します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
            <li>Cookieは使用せず、サイトをまたいだトラッキングも行いません。</li>
            <li>
              運営者が個々の訪問者を特定することはありません。Vercelは匿名化された短期間のみ有効な識別子で訪問を処理します。
            </li>
            <li>
              発明内容は一切関係しません。本サイトには動作するフォームがないため、入力内容が収集されることはありません。
            </li>
          </ul>
          <p className="mt-3 leading-7 text-slate-600">
            これは、下記の原則でいう「匿名化された統計情報」のレイヤーに当たります。現在使用しているデータレイヤーはこれだけです。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            機密情報を送信しないでください
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            本プロトタイプを通じて、未公開の発明内容や機密情報を送信しないでください。適切なプライバシー・秘密保持の体制が整うまでは、未公開の発明の詳細、営業秘密、その他の機微な情報を本サイトのどこにも入力しないようお願いします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            今後のバージョンで守る原則
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            将来データに関する機能を追加する際、更新後のポリシーは次の原則に従います。情報は3つの種類に明確に区別します。
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-6 leading-7 text-slate-600">
            <li>
              <strong className="text-slate-900">
                機密性のある発明内容
              </strong>
              (技術的な仕組み、未公開のアイデア、詳細な実装、図面など)は、広告、スポンサーターゲティング、AIモデルの学習、専門家マッチング、アクセス解析、第三者への提供、リード獲得のために、初期設定では一切使用しません。例外には、明示的で個別の、十分な説明に基づく同意が必要です。
            </li>
            <li>
              <strong className="text-slate-900">
                ユーザー自身が選択する非機密のメタデータ
              </strong>
              (関心のある国、希望する言語、自分で選ぶ大まかな技術分野など)は、内容の開示と同意がある場合に限り、サイト内のナビゲーションや、将来的には「スポンサー」と明確に表示された専門家検索機能などに利用される可能性があります。
            </li>
            <li>
              <strong className="text-slate-900">
                匿名化された統計情報
              </strong>
              (例:特定の国に関心を持つ利用者の数)は、適切に匿名化されている場合に限り、内部の計画立案に利用されることがあります。
            </li>
          </ul>
          <p className="mt-3 leading-7 text-slate-600">
            現在も将来も、基本となる前提は変わりません:発明に関する内容はプライベートであり、ユーザー自身の管理下にあります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            今後の変更について
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            将来的にフォームやデータ保存機能を追加する場合には、データ収集前にプライバシーポリシーを更新します。更新版では、収集する情報とその目的、発明内容の保護方法、保存期間と削除、第三者の処理事業者、利用者の権利などを定める予定です。
          </p>
        </section>
      </div>
    </div>
  );
}
