import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "研究成果の発明のための相談準備ガイド",
  description:
    "研究者のための相談準備ガイド。論文発表と出願のジレンマ、研究者が見落としがちな公開の例、所属機関の知財部門・TLO、専門家に確認すべき質問。一般的な情報であり、法的助言ではありません。",
  alternates: alternatesFor("/guides/researchers", "ja"),
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

export default function ResearchersGuidePageJa() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold tracking-wide text-blue-700">
        テーマ別ガイド
      </p>
      <h1 className="mt-2 text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
        研究成果の発明のための相談準備ガイド
      </h1>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">
          本ガイドは公開情報に基づく一般的な情報です。法的助言ではなく、どの国の公開に関するルールやその例外についても説明しません。また、専門家によるレビューを予定している段階です。重要な事項は、必ず所属機関と、弁理士などの資格を有する専門家にご確認ください。
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
            研究者は特有のプレッシャーの中にいます。発明になり得る同じ成果が、次の論文・ポスター・学位論文の章でもあり、そのどちらにも締め切りが迫ってきます。本ガイドは、研究者が発明になり得る成果を整理し、同じくらい重要な「タイミング」の問いを、知財部門や弁理士などの専門家に相談する前に整理するためのものです。
          </p>
          <p>本ガイドは、次のような方を想定しています。</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>大学の研究者、ポスドク、大学院生</li>
            <li>研究室の成果を管理する研究代表者(PI)</li>
            <li>企業の研究開発に携わる研究者</li>
            <li>
              研究ツールの開発者 — 研究で用いる装置、手法、ソフトウェア、データセットなど
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="2"
          title="このガイドができること・できないこと"
        >
          <p>
            本ガイドは、成果を発明として説明し、公開した内容を記録し、まず誰に相談すべきかを理解し、適切な質問を持って臨めるよう支援します。次のことは、あえて行いません。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              どの国についても、公開に関するルール・例外・新規性喪失の例外措置を説明すること
              — それがあなたに当てはまるかどうかを含めて
            </li>
            <li>誰が法的に発明者に当たるかを定めること</li>
            <li>雇用契約や研究資金の契約を解釈すること</li>
            <li>あらゆる種類の法的助言</li>
          </ul>
        </GuideSection>

        <GuideSection
          number="3"
          title="研究者のジレンマ:論文発表と出願"
        >
          <p>
            多くの国では、出願前に発明を公開すると、その後に取り得る選択肢に影響が及ぶ可能性があります。研究者にとってこれは、たまにあるリスクではなく構造的なものです。公開すること自体が仕事だからです。一定の条件のもとで例外的な扱いが認められる国もありますが、本ガイドではあえてその内容に立ち入りません。あなたの状況に何か当てはまるかどうかこそ、<em>早い段階で</em>専門家に確認すべき問いだからです。
          </p>
          <p>いま自分でできること:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              次の投稿の<strong>前に</strong>問いを立てること。後ではありません。最も価値ある相談は、締め切りに出来事の順番を決められてしまう前に行うものです
            </li>
            <li>
              今後の公開予定日を洗い出すこと:投稿締め切り、学会の日程、プレプリントの予定、学位論文の提出日など
            </li>
            <li>
              すでに公開したものをすべて記録しておくこと(次のセクション)
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="4"
          title="研究者が見落としがちな「公開」の例"
        >
          <p>
            学術活動は、多くの人が把握しているより多くの経路で「公開」しています。それぞれについて、何を・いつ・どこで・誰に、を記録してください。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>学術論文、学会の予稿(プロシーディングス)</li>
            <li>プレプリント(arXiv、bioRxiv、SSRN など)</li>
            <li>
              学会の要旨、ポスター、口頭発表 — 開催前にオンライン公開される要旨も含めて
            </li>
            <li>
              学位論文(機関リポジトリへの登録を含む)
            </li>
            <li>研究室外でのセミナー、ワークショップ、招待講演</li>
            <li>研究室サイト、プロジェクトページ、グループのブログ</li>
            <li>
              公開したデータセット、コードリポジトリ、デモ用ノートブック
            </li>
            <li>
              研究費・助成金の申請書 — これも記録し、その意味の判断は専門家に委ねましょう
            </li>
          </ul>
          <p>
            非公開・内部限り・秘密保持のもとだったと思う公開も含めて記録してください。何が重要かの判断は専門家に委ねるべきであり、後から判明する事実は、早い段階で伝えた事実よりも高くつくのが通例です。
          </p>
        </GuideSection>

        <GuideSection
          number="5"
          title="所属機関にはおそらく規程がある — まずそこから"
        >
          <p>
            大学・研究機関・企業に所属している場合、所属先には、その研究者がした発明に関する規程がほぼ確実にあります。多くの場合、ほかの何かをする前に、まず内部で発明を届け出る義務が含まれます。大学には通常、技術移転機関(TLO)や知財部門があり、企業には知的財産部があります。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              外部に向けた行動をとる前に、所属機関の手続を確認してください
            </li>
            <li>
              本ガイドはその内部手続を補完するものであり、置き換えるものではありません。専門家に持参するのと同じ構造化されたブリーフは、TLOとの相談もより速く、より良いものにします
            </li>
            <li>
              自分のアイデアが「対象になるか」分からない場合は、一人で判断するより、届け出て尋ねる順番のほうが通常は安全です
            </li>
          </ul>
        </GuideSection>

        <GuideSection number="6" title="著者であることと発明者であることは別">
          <p>
            論文の著者リストと、発明への貢献者は、別のルールで答えが決まる別の問いです。本ガイドは、誰が発明者に当たるかを定めません。その判断には法的な評価が伴います。準備できるのは次のことです。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              誰が何に貢献したかの事実の記録:どの部分を誰が着想し、誰が作り、誰が実行したか
            </li>
            <li>
              各貢献者の所属と資金の背景 — 学生、客員研究者、共同研究者も含めて
            </li>
          </ul>
          <p>
            事実を持参し、線引きは専門家と所属機関に委ねましょう。
          </p>
        </GuideSection>

        <GuideSection
          number="7"
          title="共同研究・資金・研究材料"
        >
          <p>
            研究成果の発明は、通常さまざまな契約関係の中で生まれます。把握している範囲で、次を集めておきましょう。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>共同研究契約、産学連携・企業との提携</li>
            <li>
              成果や発明について定める可能性のある、研究費・受託研究の条件
            </li>
            <li>
              受け取ったものに関する材料移転契約(MTA)
            </li>
            <li>
              プロジェクトに関わる客員研究者や、機関をまたぐ貢献者
            </li>
          </ul>
          <p>
            これらの書類を自分で解釈する必要はありません。集めて、一覧を持参しましょう。
          </p>
        </GuideSection>

        <GuideSection
          number="8"
          title="研究成果を「発明」として説明する"
        >
          <p>
            論文は知識への貢献を説明しますが、相談で必要なのは少し違うもの — その成果が<em>何をするか</em>、そして誰のためか、です。
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              論文の物語から離れて、それが解決する課題 — あなたの分野の外で、誰がその課題を抱えていますか?
            </li>
            <li>
              仕組みを、平易な言葉で順を追って — 手法、装置、ソフトウェア、または材料
            </li>
            <li>
              最も近い既存のアプローチとの違い — 関連研究で書くように、知っていることを正直に挙げましょう
            </li>
            <li>
              測定できる優位性:精度、速度、コスト、収率など — あなた自身のベンチマークは、まさに最適な材料です
            </li>
            <li>
              実験記録:アイデアや成果がいつ生まれたかを示す、日付入りのノートやファイル — 研究者は他のどの種類の発明者よりも良い記録を残しているのが通例です。ぜひ持参してください
            </li>
          </ul>
        </GuideSection>

        <GuideSection
          number="9"
          title="初回相談で聞いておきたい質問"
        >
          <ul className="list-disc space-y-2 pl-6">
            <li>
              [日付]に投稿・発表する予定です。そのタイミングは選択肢にどう影響しますか?
              どのような出来事の順番を勧めますか?
            </li>
            <li>
              相談を進める間、今後の発表や論文で控えておくべきことはありますか?
            </li>
            <li>
              自分の所属機関と資金の状況をふまえると、判断には誰が関わる必要がありますか?
            </li>
            <li>
              私のような研究ツールや手法の場合、現実的にどのような選択肢がありますか?
              そもそも特許という手段は合っていますか?
            </li>
            <li>費用の体系と、想定すべき費用感を教えてください。</li>
            <li>相談内容の秘密保持はどのように扱われますか?</li>
          </ul>
        </GuideSection>

        <GuideSection number="10" title="このガイドで扱わないこと">
          <ul className="list-disc space-y-2 pl-6">
            <li>あらゆる種類の法的助言</li>
            <li>
              どの国についても、公開に関するルール・例外・新規性喪失の例外措置
            </li>
            <li>あなたの成果が特許になり得るかどうか</li>
            <li>誰が法的に発明者に当たるか</li>
            <li>雇用・研究費・MTAの条件の解釈</li>
            <li>請求項や出願書類の書き方</li>
            <li>特定の専門家・事務所の紹介や推薦</li>
          </ul>
          <p>
            上記はいずれも、所属機関と、弁理士などの資格を有する専門家にご相談ください。
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
            <li>
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">
                TODO: Add university TLO / technology-transfer association
                source(大学TLO・技術移転関連)
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
            AIは、法的助言、特許性判断、請求項作成、出願書類作成、出願手続の代理を提供しません。出願や権利化に関する判断は、必ず所属機関と、資格を有する専門家にご相談ください。
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
          href="/ja/guides/software-ai"
          className="font-medium text-blue-700 hover:text-blue-800"
        >
          ソフトウェア・AI発明の相談準備
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
          研究成果を「発明相談ブリーフ」に整理する
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          発明相談ブリーフは、本ガイドで挙げた項目 —
          課題、仕組み、既存のもの、公開の経緯、確認したい質問 —
          を、TLOや専門家が使える形に整理するものです。
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
