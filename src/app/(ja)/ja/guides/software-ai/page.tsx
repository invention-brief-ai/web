import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "ソフトウェア・AI発明のための相談準備ガイド",
  description:
    "開発者・AI/SaaSビルダー・スタートアップのための相談準備ガイド。ソフトウェアやAIの発明の説明のしかた、開発者が見落としがちな公開の例、専門家に確認すべき質問。一般的な情報であり、法的助言ではありません。",
  alternates: alternatesFor("/guides/software-ai", "ja"),
};

function GuideSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-20">
      <h2 className="flex items-baseline gap-3 text-xl font-semibold text-slate-900">
        <span className="text-blue-700">{number}.</span>
        {title}
      </h2>
      <div className="mt-3 space-y-3 leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export default function SoftwareAiGuidePageJa() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold tracking-wide text-blue-700">
        テーマ別ガイド
      </p>
      <h1 className="mt-2 text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
        ソフトウェア・AI発明のための相談準備ガイド
      </h1>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          本ガイドは公開情報に基づく一般的な情報です。法的助言ではなく、ソフトウェアやAIの発明がどの国で特許になり得るかについては一切述べません。また、専門家によるレビューを予定している段階です。重要な事項は、必ず弁理士などの資格を有する専門家にご確認ください。
        </p>
        <p className="mt-3">
          <code className="rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-900">
            TODO: Expert review needed before relying on this page for
            user-facing legal-adjacent guidance.
          </code>
        </p>
      </div>

      <div className="mt-12 space-y-12">
        <GuideSection number="1" title="このガイドの目的">
          <p>
            ソフトウェアやAIを開発する人には、特有の準備の課題があります。作ったものはデモで簡単に見せられるのに、専門家が必要とする形で「説明」するのは難しいのです。本ガイドは、ソフトウェア・SaaS・AI関連のアイデアを初回相談前に整理するためのものです。
          </p>
          <p>本ガイドは、次のような方を想定しています。</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>ソフトウェア開発者・個人開発者</li>
            <li>AI/MLエンジニア、AI/SaaSスタートアップのチーム</li>
            <li>ソフトウェアやモデルを扱う研究者</li>
            <li>
              そもそも相談する価値があるか迷っている方 —
              きちんと準備することが、それを知る最短の方法です
            </li>
          </ul>
        </GuideSection>

        <GuideSection number="2" title="このガイドができること・できないこと">
          <p>
            本ガイドは、システムを明確に説明し、公開の記録を整理し、適切な質問を持って相談に臨めるよう支援します。次のことは、あえて行いません。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              ソフトウェアやAIの発明が特許になり得るかどうかについて述べること
              — 日本でも、米国でも、欧州でも、どの国についても
            </li>
            <li>特許の対象適格性や審査基準の解説</li>
            <li>請求項や出願書類の作成支援</li>
            <li>あらゆる種類の法的助言</li>
          </ul>
        </GuideSection>

        <GuideSection
          number="3"
          title="「アイデア」ではなく「仕組み」を説明する"
        >
          <p>
            ソフトウェア関連の相談で最も多いギャップは、「仕組み」ではなく「目的」を説明してしまうことです。「AIで配送を最適化します」は結果の説明であり、専門家が知りたいのは<em>どうやって</em>かです。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>何が入力されますか?(データ、イベントなど)</li>
            <li>
              入力から出力までの間に、段階を追って何が起きますか?
              そのうち、実際に自分たちが作った部分はどこですか?
            </li>
            <li>何が出力され、何が具体的に良くなりますか?</li>
          </ul>
          <p>
            セルフチェックの方法:あなたの製品を見たことのない開発者が、説明文を読んだだけで処理の流れを再現して説明できるでしょうか?
            できないと感じたら、相談前にもう一歩具体化しましょう。
          </p>
        </GuideSection>

        <GuideSection
          number="4"
          title="ソフトウェア/AIシステムの説明のしかた"
        >
          <p>用意しておきたいもの:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              簡単なアーキテクチャ図 —
              構成要素と、その間のデータの流れ(手描きで十分です)
            </li>
            <li>具体的なユースケース1つの、段階を追った説明</li>
            <li>
              アイデアにとって本質的な部分と、差し替え可能な実装上の選択の区別
            </li>
            <li>同じ結果を得る別の方法(知っている範囲で)</li>
            <li>
              測定できる効果 — 速度、精度、コスト、リソース使用量など。数字は違いを具体的にします
            </li>
          </ul>
          <p>
            平易な言葉で十分です。正式な書類でどう表現するかは、専門家の仕事であってあなたの仕事ではありません。
          </p>
        </GuideSection>

        <GuideSection number="5" title="AI特有の整理ポイント">
          <p>
            AI/ML関連のアイデアでは、パイプライン全体の明確な地図が求められることが多いです。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>自分で作った部分と、利用している部分。</strong>
              既存のモデル・API・ライブラリに依存する部分はどこで、前処理、ファインチューニング、推論時のロジック、後処理、オーケストレーションなど、自分たちの成果はどこですか?
            </li>
            <li>
              <strong>データ。</strong>
              どのようなデータを、どこから得ているか。把握している制約(ライセンス、顧客との契約など)。まずは記録すること — その意味の評価は専門家の役割です。
            </li>
            <li>
              <strong>パイプライン。</strong>
              学習・ファインチューニングの手順、推論の流れ、モデル呼び出しの前後で起きること。
            </li>
            <li>
              <strong>バージョン管理。</strong>
              システムは毎週変わります。どのバージョンについて説明しているかを明記し、進化の記録を日付付きで残しましょう。
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="6"
          title="開発者が見落としがちな「公開」の例"
        >
          <p>
            多くの国では、出願前に発明を公開すると、その後に取り得る選択肢に影響が及ぶ可能性があります。開発者は、ほかの発明者よりも多くの経路で「公開」しています。次のすべてを記録してください。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              公開GitHub/GitLabリポジトリ — 古いコミット、README、ドキュメントも含めて
            </li>
            <li>技術ブログ(Qiita、Zenn、Medium、dev.to、会社ブログ)</li>
            <li>カンファレンス発表、勉強会のLT、ハッカソン、デモデイ</li>
            <li>アプリストア・Webでのリリース、公開ベータ、デモ公開</li>
            <li>論文・プレプリント(arXivなど)</li>
            <li>Product Hunt、SNSでの技術的な詳細を含む投稿</li>
            <li>ピッチイベント、アクセラレーターのデモデイ</li>
          </ul>
          <p>
            それぞれについて:何を、いつ、どこで、誰に。「限定公開だったはず」と思うものも含めて記録し、何が重要かの判断は専門家に委ねましょう。そして、専門家に相談するまでは<em>新たな</em>投稿・発表・リリースに慎重に。本ガイドがルールの詳細に立ち入らないのは、まさにそれが、できるだけ早く専門家に確認すべき事項だからです。
          </p>
        </GuideSection>

        <GuideSection
          number="7"
          title="雇用・受託契約・オープンソースの背景"
        >
          <p>
            ソフトウェアは通常、さまざまな契約関係の中で作られます。相談前に、把握している範囲で次を整理してください。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              雇用関係 —
              従業員の発明(副業・個人プロジェクトを含む)について定める雇用契約や社内規程は珍しくありません
            </li>
            <li>受託・客先案件 — 契約のもとで作ったものは誰のものか</li>
            <li>
              技術スタックに含まれるオープンソースのライセンスと、自分が関連コードをOSSとして公開していないか
            </li>
            <li>共同開発者と、それぞれの背景</li>
          </ul>
          <p>
            これらを自分で解釈する必要はありません。事実と書類を持参し、評価は専門家に任せましょう。
          </p>
        </GuideSection>

        <GuideSection
          number="8"
          title="国による違い — どの市場が重要かを決める"
        >
          <p>
            ソフトウェア関連の発明の扱いは国・地域によって異なりますが、本ガイドではあえてその内容に立ち入りません。準備できるのは、自分の事業にとってどの国・市場が、いつ頃重要になるかを明確にしておくことです。それが、どの国について相談する価値があるかを決めますし、専門家が最初に尋ねることのひとつでもあります。
          </p>
        </GuideSection>

        <GuideSection number="9" title="初回相談で聞いておきたい質問">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              この状況では、どのような保護の選択肢がありますか?
              そもそも特許という手段は、このアイデアに合っていますか?
            </li>
            <li>
              相談を進める間、避けるべきことはありますか?(リリース、ブログ記事、発表、リポジトリの公開など)
            </li>
            <li>
              更新を頻繁に出しています。イテレーションは相談内容にどう影響しますか?
              製品の進化にあわせて、何を記録しておくべきですか?
            </li>
            <li>自分の市場の場合、どの国について検討する意味がありますか?</li>
            <li>費用の体系と、想定すべき費用感を教えてください。</li>
            <li>相談内容の秘密保持はどのように扱われますか?</li>
          </ul>
        </GuideSection>

        <GuideSection number="10" title="このガイドで扱わないこと">
          <ul className="list-disc space-y-2 pl-6">
            <li>あらゆる種類の法的助言</li>
            <li>
              ソフトウェアやAIの発明が、どの国であれ特許になり得るかどうか
            </li>
            <li>特許の対象適格性や審査基準</li>
            <li>請求項や出願書類の書き方</li>
            <li>コード・リポジトリ・ライセンスのレビュー</li>
            <li>特定の専門家・事務所の紹介や推薦</li>
          </ul>
          <p>
            上記はいずれも、弁理士などの資格を有する専門家にご相談ください。
          </p>
        </GuideSection>

        <GuideSection number="11" title="公的な情報源(準備中)">
          <p>
            公的な情報源へのリンクは、人によるレビューを経たうえで追加する予定です。追加予定:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-slate-500">
            <li>
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                TODO: Add official JPO source(特許庁)
              </code>
            </li>
            <li>
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                TODO: Add official USPTO source
              </code>
            </li>
            <li>
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                TODO: Add official EPO source
              </code>
            </li>
          </ul>
          <p className="text-sm text-slate-500">
            検証していない情報源へのリンクは掲載しない方針のため、現時点では未掲載です。
          </p>
        </GuideSection>

        <GuideSection number="12" title="免責事項">
          <p>
            本ガイドは公開情報に基づく一般的な情報です。法的助言ではなく、最新の変更を反映していない可能性があり、個別の状況に対応するものでもありません。Invention
            Brief
            AIは、法的助言、特許性判断、請求項作成、出願書類作成、出願手続の代理を提供しません。出願や権利化に関する判断は、必ず資格を有する専門家にご相談ください。
          </p>
          <p>
            <Link
              href="/ja/disclaimer"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              免責事項の全文を読む →
            </Link>
          </p>
        </GuideSection>
      </div>

      <p className="mt-12 text-sm leading-6 text-slate-600">
        関連ガイド:{" "}
        <Link
          href="/ja/guides/researchers"
          className="font-medium text-blue-700 hover:text-blue-800"
        >
          研究成果の発明の相談準備
        </Link>{" "}
        ·{" "}
        <Link
          href="/ja/guides/japan"
          className="font-medium text-blue-700 hover:text-blue-800"
        >
          日本向け準備ガイド
        </Link>{" "}
        ·{" "}
        <Link
          href="/ja/checklist"
          className="font-medium text-blue-700 hover:text-blue-800"
        >
          初回相談チェックリスト
        </Link>
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900">
          システムを「発明相談ブリーフ」に整理する
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          発明相談ブリーフは、本ガイドで挙げた項目 —
          課題、仕組み、既存のもの、公開の経緯、確認したい質問 —
          をまさに1つの文書に整理するものです。
          <Link
            href="/ja/demo"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            デモ
          </Link>
          で流れをご覧いただけます。
        </p>
        <Link
          href="/ja#waitlist"
          className="mt-4 inline-block rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
        >
          β版の案内を受け取る
        </Link>
      </div>
    </div>
  );
}
