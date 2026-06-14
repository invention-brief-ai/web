import type { Metadata } from "next";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "Invention Brief AIのプライバシーポリシー(端末内で動作するローカルワークスペースを含む)。",
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
          本ページは暫定版です。個人情報や発明に関するデータを運営者が収集する前に、正式なプライバシーポリシーを公開します。現時点では、入力した内容が端末の外に出ることはありません。ローカルワークスペースは下書きをお使いのブラウザ内にのみ保存し、運営者が受け取るのは、以下に説明するCookie不使用の集計訪問数のみです。
        </p>
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            入力した情報がどこに保存されるか
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            本サイトには、バックエンドのアカウント機能、決済、サーバー側のデータベース、発明内容の受付はありません。入力した内容を運営者や第三者に送信することもありません。次の2つを区別してご理解ください。
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-6 leading-7 text-slate-600">
            <li>
              <strong className="text-slate-900">ローカルワークスペース</strong>
              （ミラーモード、ブリーフモード、および作成した下書き）は、入力した内容をお使いのブラウザ内の端末ストレージ（IndexedDB）にのみ保存します。下書きがアップロードされたり送信されたりすることはなく、入力した端末内にとどまります。ブラウザでこのサイトのデータを消去すると下書きも削除されます。ワークスペースのページではアクセス解析を完全に無効にしています。
            </li>
            <li>
              <strong className="text-slate-900">β版案内フォームや連絡先</strong>
              など、他の箇所に表示される入力欄は、まだバックエンドに接続されていません。β版案内フォームは何も送信・保存しない見た目のプレビューであり、連絡先アドレスはお使いのメールアプリを開くだけです。
            </li>
          </ul>
          <p className="mt-3 leading-7 text-slate-600">
            運営者に届くのは、次のセクションで説明する集計されたCookie不使用の訪問数のみです。
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
              発明内容は一切関係しません。アクセス解析は情報提供ページでのみ動作し、ローカルワークスペースでは無効化されているため、下書きがこの集計に含まれることはありません。
            </li>
          </ul>
          <p className="mt-3 leading-7 text-slate-600">
            これは、下記の原則でいう「匿名化された統計情報」のレイヤーに当たります。現在使用しているデータレイヤーはこれだけです。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            機密情報は端末内にとどめてください
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            ローカルワークスペースはお使いの端末内にとどまるため、ご自身のプライベートなメモとして利用できます。一方で、端末の外に出るもの（たとえばβ版案内フォーム、連絡先メール、その他運営者へのメッセージ）には、未公開の発明の詳細、営業秘密、その他の機微な情報を入力しないでください。端末の外に送る情報は機密でなくなる可能性があるものとして扱い、未公開の詳細は、適切な秘密保持のもとで資格を有する専門家にのみ共有してください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            今後のバージョンで守る原則
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            将来サーバー側のデータ機能を追加する場合（現時点ではワークスペースの内容はすべて端末内にとどまります）、更新後のポリシーは次の原則に従います。情報は3つの種類に明確に区別します。
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
            将来的にサーバー側のフォームやデータ保存機能を追加する場合には、データ収集前にプライバシーポリシーを更新します。更新版では、収集する情報とその目的、発明内容の保護方法、保存期間と削除、第三者の処理事業者、利用者の権利などを定める予定です。
          </p>
        </section>
      </div>
    </div>
  );
}
