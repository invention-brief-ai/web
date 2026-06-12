import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "本人出願を考えている方へ",
  description:
    "弁理士に依頼せず自分で特許出願(本人出願)を考えている方のための、中立的な判断・準備ガイド。トレードオフ、専門家の判断が重要になる場面、準備の方法。一般的な情報であり、法的助言ではありません。",
  alternates: alternatesFor("/guides/japan-self-filing", "ja"),
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

export default function JapanSelfFilingGuidePageJa() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold tracking-wide text-blue-700">
        国別ガイド — 日本
      </p>
      <h1 className="mt-2 text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
        本人出願を考えている方へ
      </h1>
      <p className="mt-3 text-sm text-slate-500">
        自分で特許出願するかどうかを判断し、準備するためのガイド
      </p>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          本ガイドは公開情報に基づく一般的な情報です。法的助言ではなく、出願する・しないを勧めるものでもありません。また、専門家によるレビューを予定している段階です。重要な事項は、必ず公的な情報源と、弁理士などの資格を有する専門家にご確認ください。
        </p>
        <p className="mt-3">
          <code className="rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-900">
            TODO: Expert review needed before relying on this page for
            user-facing legal-adjacent guidance.
          </code>
        </p>
      </div>

      <div className="mt-12 space-y-12">
        <GuideSection number="1" title="このガイドの対象">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              費用などの理由から、弁理士に依頼せず日本で特許出願することを検討している個人・小規模事業者
            </li>
            <li>
              どちらに決めるにせよ、まずトレードオフを正直に理解したい方
            </li>
            <li>
              すでに本人出願を進めていて、途中から専門家に依頼すべきか迷っている方
            </li>
          </ul>
        </GuideSection>

        <GuideSection number="2" title="このガイドができること・できないこと">
          <p>
            本ガイドは、十分な情報に基づいて判断し、どちらの道を選んでもしっかり準備できるよう支援するものです。次のことは、あえて行いません。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>出願する・しないを勧めること</li>
            <li>
              請求項、明細書、その他の出願書類の書き方を指南すること
            </li>
            <li>作成した書類のチェック・レビュー</li>
            <li>あらゆる種類の法的助言</li>
          </ul>
          <p>
            一言でいえば:出願のお手伝いはしません。「決めること」と「準備すること」を支援します — どちらの道を選んでも。
          </p>
        </GuideSection>

        <GuideSection number="3" title="本人出願のおおまかな流れ">
          <p>
            日本では、代理人を立てずに出願人自身が特許庁に出願すること(本人出願)は制度上可能です。特許庁が定める手続には、おおまかに次のようなステップがあります。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>既存の公報・出願の調査(先行技術調査)</li>
            <li>明細書・請求項を含む出願書類の作成</li>
            <li>特許庁への出願と所定の手数料の納付</li>
            <li>
              法定の期間内の出願審査請求と、拒絶理由通知への応答
            </li>
            <li>登録となった場合の登録料の納付</li>
          </ul>
          <p>
            本ガイドは、意図的にこの概観までにとどめます。現行の手続、様式、料金、期限は公的な情報源で定められており(第10節)、検証が済むまで本ページでは詳細を記載しません。
          </p>
        </GuideSection>

        <GuideSection number="4" title="正直に考えたいトレードオフ">
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>費用と時間。</strong>
              本人出願は専門家への報酬を節約できますが、相当な学習時間と執筆時間が必要です。また、どちらの道でも特許庁への料金はかかります。
            </li>
            <li>
              <strong>「登録されるか」だけでなく「権利の質」。</strong>
              特許の実用的な価値は、請求項の書き方に大きく依存します。自分で作成した出願は、たとえ登録されても、本来あり得たより狭い・弱い権利になる可能性があります。
            </li>
            <li>
              <strong>手続上の期限は容赦がありません。</strong>
              法定期限を逃すと、発明の中身に関係なく出願が終わってしまうことがあります。
            </li>
            <li>
              <strong>料金の減免制度が存在する場合があります。</strong>
              対象や条件は変わり得るため、費用を見積もる前に公的な情報源(第10節)で最新の要件をご確認ください。
            </li>
            <li>
              <strong>示唆的な事実:</strong>
              本人出願の詳しい解説を公開している特許事務所でさえ、「費用が許せば専門家への依頼を」と勧めています。
            </li>
          </ul>
        </GuideSection>

        <GuideSection number="5" title="専門家の判断が特に重要になる場面">
          <p>
            本ガイドからひとつだけ持ち帰るなら、これです。専門家の知見が結果を最も左右するのは、次の場面です。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>請求項の範囲</strong> —
              特許が実際に何を保護するかは、請求項がほぼ決めます
            </li>
            <li>
              <strong>先行技術の評価</strong> —
              見つけた文献が自分の出願にとって何を意味するかの判断
            </li>
            <li>
              <strong>出願戦略</strong> —
              何を、いつ出願するか。事業にとって外国出願が重要かどうか
            </li>
            <li>
              <strong>拒絶理由通知への応答</strong> —
              期限のある中での主張と補正
            </li>
          </ul>
        </GuideSection>

        <GuideSection number="6" title="中間の選択肢:決める前に一度相談する">
          <p>
            「すべて専門家に依頼する」か「完全に一人でやる」かの二択ではありません。決める前に一度だけ初回相談を受けるという選択肢は、かかっているものの大きさに比べれば通常は高くありません。また、公的に運営される支援窓口も存在します(対象・条件は異なります — 第10節)。
          </p>
          <p>
            構造化された発明相談ブリーフを持参すれば、短い相談でも、最も重要な問い — 現実的な選択肢、おおまかな費用感、本人出願を選んだ場合に自分が引き受けることになるもの — への答えが得られます。
          </p>
        </GuideSection>

        <GuideSection
          number="7"
          title="本人出願する場合:後から専門家に引き継げる記録を"
        >
          <p>
            本人出願した方の多くが、途中から — 多くは拒絶理由通知が届いた時点で —
            専門家への依頼を決めます。その切り替えは普通のことであり、備えておくことが自分を守ります。次の記録を整理して残してください。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>提出したすべての書類と日付、特許庁とのすべてのやり取り</li>
            <li>見つけた先行技術と、どのように調査したか</li>
            <li>公開の経緯(何を、いつ、どこで、誰に)</li>
            <li>書類上の選択について、その理由</li>
          </ul>
          <p>
            記録が整っているほど、専門家が途中から引き継ぐ作業は速く、費用も抑えられます。
          </p>
        </GuideSection>

        <GuideSection number="8" title="どちらの道でも:ブリーフを準備する">
          <p>
            専門家に相談する場合も、一人で進める場合も、役立つ準備は同じです。課題、解決手段、既存のもの、公開の経緯、そして目標を明確に言語化しておくことです。
          </p>
          <p>
            まずは
            <Link
              href="/ja/checklist"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              初回相談チェックリスト
            </Link>
            から始めるか、
            <a
              href="/downloads/invention-brief-worksheet.ja.md"
              download
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              ブリーフ・ワークシート
            </a>
            をダウンロードしてください。ブリーフが組み上がる流れは
            <Link
              href="/ja/demo"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              デモ
            </Link>
            でご覧いただけます。
          </p>
        </GuideSection>

        <GuideSection number="9" title="このガイドで扱わないこと">
          <ul className="list-disc space-y-2 pl-6">
            <li>あらゆる種類の法的助言</li>
            <li>発明が特許になり得るかどうかの判断</li>
            <li>請求項・明細書・出願書類の書き方</li>
            <li>現行の料金、様式、期限の詳細</li>
            <li>作成した書類のレビュー</li>
            <li>特定の専門家・事務所の紹介や推薦</li>
          </ul>
          <p>
            上記はいずれも、公的な情報源と、弁理士などの資格を有する専門家にご確認ください。
          </p>
        </GuideSection>

        <GuideSection number="10" title="公的な情報源(準備中)">
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
                TODO: Add INPIT/J-PlatPat source
              </code>
            </li>
            <li>
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                TODO: Add Japan Patent Attorneys Association source(日本弁理士会)
              </code>
            </li>
          </ul>
          <p className="text-sm text-slate-500">
            検証していない情報源へのリンクは掲載しない方針のため、現時点では未掲載です。
          </p>
        </GuideSection>

        <GuideSection number="11" title="免責事項">
          <p>
            本ガイドは公開情報に基づく一般的な情報です。法的助言ではなく、最新の変更を反映していない可能性があり、個別の状況に対応するものでもありません。Invention
            Brief
            AIは、法的助言、特許性判断、請求項作成、出願書類作成、書類のレビュー、出願手続の代理を提供せず、出願する・しないを勧めることもありません。出願や権利化に関する判断は、必ず日本の資格を有する専門家にご相談ください。
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

      <div className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900">
          専門家への相談を準備する方へ
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          メインのガイドはこちら:{" "}
          <Link
            href="/ja/guides/japan"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            初めて特許相談をする人のための日本向け準備ガイド →
          </Link>
        </p>
      </div>
    </div>
  );
}
