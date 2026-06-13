import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "初めて特許相談をする人のための日本向け準備ガイド",
  description:
    "初めて弁理士などの専門家に相談する発明者のための準備ガイド。公開情報に基づく一般情報であり、法的助言ではありません。",
  alternates: alternatesFor("/guides/japan", "ja"),
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

export default function JapanGuidePageJa() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold tracking-wide text-blue-700">
        国別ガイド
      </p>
      <h1 className="mt-2 text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
        <span aria-hidden>🇯🇵</span>{" "}
        初めて特許相談をする人のための日本向け準備ガイド
      </h1>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          本ガイドは公開情報に基づく一般的な情報であり、法的助言ではありません。また、専門家によるレビューを予定している段階です。重要な事項は、必ず弁理士などの資格を有する専門家にご確認ください。
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
            本ガイドは、初めて特許相談を考えている発明者が、
            <strong>弁理士</strong>
            (特許庁に対する手続の代理資格を持つ専門家)などへの初回相談を準備するためのものです。準備が整っていれば、限られた相談時間を「状況の説明」ではなく「専門家からの助言」に使うことができます。
          </p>
          <p>本ガイドは、次のような方を想定しています。</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>初めての特許相談を準備している発明者</li>
            <li>ソフトウェア開発者・AI/SaaS開発者</li>
            <li>スタートアップ創業者</li>
            <li>研究者</li>
            <li>そもそも専門家に相談すべきかどうか迷っている方</li>
          </ul>
          <p>
            扱うのは「準備」だけです。出願すべきか、何をどう出願するかは、専門家とともに判断する事項であり、本ガイドの範囲外です。
          </p>
        </GuideSection>

        <GuideSection number="2" title="相談前に準備しておきたいもの">
          <p>相談前のチェックリストの例:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>発明の概要を平易な言葉でまとめた1段落の説明</li>
            <li>解決したい課題と、その課題を抱えている人の説明</li>
            <li>解決手段がどのように機能するかの説明</li>
            <li>スケッチ、図面、写真、試作品(あれば)</li>
            <li>知っている範囲での類似製品・類似手法のリスト</li>
            <li>アイデアを思いついた経緯・開発の記録</li>
            <li>
              公開の記録:デモ、販売、記事、発表、SNS投稿、クラウドファンディングなど
            </li>
            <li>目標:想定する市場、おおまかなスケジュール、予算感</li>
          </ul>
          <p>
            発明相談ブリーフ(本サービスが作成を支援する文書)は、これらの大部分をひとつの文書に整理するものです。
          </p>
        </GuideSection>

        <GuideSection number="3" title="「課題」の伝え方">
          <p>具体的に伝えることが大切です。良い課題の説明は、次の問いに答えています。</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>誰が、どのような場面でその課題に直面しますか?</li>
            <li>現在はどのように対処されていますか?</li>
            <li>既存の対処法のどこが不十分ですか?</li>
          </ul>
          <p>
            例:「自転車のロックは不便」ではなく、「短時間の駐輪では、既存のロックが重く操作に時間がかかるため施錠されないことが多く、盗難につながっている」のように伝えます。
          </p>
        </GuideSection>

        <GuideSection number="4" title="「解決手段」の伝え方">
          <p>
            発明がどのように機能するかを、自分の言葉で順を追って説明してください。法律用語や専門用語は不要です。正式な書類でどう表現するかは、専門家が判断します。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>主な構成要素や手順は何ですか?</li>
            <li>それらはどのように連携しますか?</li>
            <li>どの部分が本質的で、どの部分は変更可能ですか?</li>
            <li>同じ結果を得る別の方法はありますか?</li>
          </ul>
        </GuideSection>

        <GuideSection number="5" title="既存の製品・方法との違いの伝え方">
          <p>
            知っている範囲で最も近い製品・サービス・方法を挙げ、自分の発明との違いを正直に説明してください。「こんなものは世の中にない」と言い切るより、「いちばん近いのはXで、自分のものはこの点が違う」と伝える方が、はるかに有益です。
          </p>
          <p>
            専門的な調査を自分で行う必要はありません。知っていることを共有すれば、専門家が何を調べるべきかを判断する材料になります。
          </p>
        </GuideSection>

        <GuideSection number="6" title="公開(発表・販売)がなぜ重要になり得るか">
          <p>
            日本を含む多くの国では、出願前に発明を公開すると、その後に取り得る選択肢に影響が及ぶ可能性があります。一定の条件のもとで例外的な扱いが認められる場合もありますが、適用には具体的な条件や手続が関わります。
          </p>
          <p>
            本ガイドでは、あえてその詳細には立ち入りません。まさにこうした点こそ、できるだけ早い段階で専門家に確認すべき事項だからです。いま自分でできることは、(1)これまでの公開(内容・日時・場所・相手)を記録しておくこと、(2)専門家に相談するまで新たな公開に慎重になること、の2点です。
          </p>
        </GuideSection>

        <GuideSection number="7" title="専門家に伝えるべきこと">
          <p>漏れなく、正直に伝えることが重要です。特に:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              公開に関して知っているすべてのこと(不利かもしれないと思う内容も含めて)
            </li>
            <li>把握している類似技術(自分自身の過去の成果物を含む)</li>
            <li>
              発明に関与した人、および関係し得る雇用・共同開発などの背景
            </li>
            <li>事業上の目標、スケジュール、予算の制約</li>
          </ul>
          <p>
            専門家の助言の質は、共有された情報の質に依存します。後から判明する事実は、早い段階で伝えた事実よりも高くつくのが通例です。
          </p>
        </GuideSection>

        <GuideSection number="8" title="初回相談で聞いておきたい質問">
          <ul className="list-disc space-y-2 pl-6">
            <li>こちらから追加で提供すべき情報はありますか?</li>
            <li>このような発明の場合、現実的にどのような選択肢がありますか?</li>
            <li>
              相談を進める間、避けるべきことはありますか?(デモ、発表、販売など)
            </li>
            <li>今後、どのような記録を残しておくべきですか?</li>
            <li>費用の体系と、想定すべき費用感を教えてください。</li>
            <li>一般的な次のステップとスケジュール感を教えてください。</li>
            <li>相談内容の秘密保持はどのように扱われますか?</li>
          </ul>
        </GuideSection>

        <GuideSection number="9" title="このガイドで扱わないこと">
          <ul className="list-disc space-y-2 pl-6">
            <li>あらゆる種類の法的助言</li>
            <li>発明が特許になり得るかどうかの判断</li>
            <li>請求項や出願書類の書き方</li>
            <li>出願手続、費用、法律上の期限の詳細</li>
            <li>特定の専門家・事務所の紹介や推薦</li>
          </ul>
          <p>
            上記はいずれも、弁理士などの資格を有する専門家にご相談ください。
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
            AIは、法的助言、特許性判断、請求項作成、出願書類作成、出願手続の代理を提供しません。出願や権利化に関する判断は、必ず日本の資格を有する専門家にご相談ください。
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
          href="/ja/guides/japan-self-filing"
          className="font-medium text-blue-700 hover:text-blue-800"
        >
          本人出願を考えている方へ
        </Link>{" "}
        ·{" "}
        <Link
          href="/ja/guides/software-ai"
          className="font-medium text-blue-700 hover:text-blue-800"
        >
          ソフトウェア・AI発明の相談準備
        </Link>{" "}
        ·{" "}
        <Link
          href="/ja/guides/researchers"
          className="font-medium text-blue-700 hover:text-blue-800"
        >
          研究成果の発明の相談準備
        </Link>
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900">
          自分の発明相談ブリーフを準備する
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          β版が利用可能になり次第ご案内します。相談前のアイデア整理に、Invention
          Brief AIをお役立てください。
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
