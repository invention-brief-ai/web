import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Invention Brief AIプロトタイプのプライバシーポリシー。",
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
          本ページは暫定版です。データ収集を開始する前に、正式なプライバシーポリシーを公開します。
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            現在の状態:静的プロトタイプ
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            現在のプロトタイプでは、アカウント登録、決済、データベース保存、詳細な発明内容の受付は実装していません。本サイトは静的なページのみで構成されており、アクセス解析やトラッキングスクリプト、動作するフォームはありません。ホームページに表示されているβ版案内フォームは見た目のプレビューであり、入力内容が送信・保存されることはありません。
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
