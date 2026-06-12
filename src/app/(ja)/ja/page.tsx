import type { Metadata } from "next";
import Link from "next/link";
import { alternatesFor } from "@/lib/site";

export const metadata: Metadata = {
  alternates: alternatesFor("/", "ja"),
};

export default function HomeJa() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ThinkingPartnerSection />
      <WhatItDoesSection />
      <WhatItDoesNotDoSection />
      <HowItWorksSection />
      <WhoItIsForSection />
      <BriefPreviewSection />
      <CountryGuideSection />
      <WaitlistSection />
    </>
  );
}

/* 1. Hero */
function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
        <p className="mx-auto mb-6 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-800">
          プライバシー第一の発明整理ワークスペース
        </p>
        <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-snug tracking-tight text-slate-900 sm:text-5xl sm:leading-snug">
          弁理士に相談する前に、
          <br className="hidden sm:block" />
          発明アイデアを整理する。
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Invention Brief
          AIは、初めて特許相談を考える発明者・開発者・研究者が、専門家に相談する前にアイデアを構造化するための準備ツールです。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#waitlist"
            className="rounded-full bg-blue-700 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-800"
          >
            β版の案内を受け取る
          </Link>
          <Link
            href="#how-it-works"
            className="rounded-full border border-slate-300 px-8 py-3 text-base font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            相談準備の流れを見る
          </Link>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          法的助言、特許性判断、出願書類作成を提供するものではありません。
        </p>
      </div>
    </section>
  );
}

/* 2. どのような課題を解決するか */
function ProblemSection() {
  const problems = [
    {
      title: "何から話せばよいか分からない",
      description:
        "初めての特許相談では、発明のどの部分を、どの順番で説明すればよいのか迷いがちです。準備がないと、限られた相談時間が説明だけで終わってしまいます。",
    },
    {
      title: "アイデアが頭の中やメモに散らばっている",
      description:
        "ノート、スケッチ、チャットのログ──情報が散在したままでは、専門家も全体像をつかむのに時間がかかります。",
    },
    {
      title: "相談前に何を確認すべきか分からない",
      description:
        "公開の有無、似ている既存製品、開発の経緯など、相談時によく聞かれるポイントを事前に知っておくだけで、相談の質は大きく変わります。",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="どのような課題を解決するか"
          title="「準備不足の相談」をなくしたい"
          description="特許相談の時間は貴重です。Invention Brief AIは、相談の前段階にある「整理」の課題に取り組みます。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 3. AIを壁打ち相手に */
function ThinkingPartnerSection() {
  const plannedModes = [
    {
      name: "ミラーモード",
      description:
        "ガイド付きの問いかけを通じて、課題、仕組み、考えられる代替案、既存の手法、まだ確信が持てない点を言語化します。",
    },
    {
      name: "ブリーフモード",
      description:
        "整理した内容を、概要、技術要素、差別化になり得る点、公開の経緯、専門家への質問からなる相談ブリーフにまとめます。",
    },
    {
      name: "プライベートワークスペース",
      description:
        "自分の管理下で下書きし、MarkdownやPDFに書き出せます。自分で選んだとき以外、何も共有されません。",
    },
  ];

  return (
    <section className="border-y border-blue-100 bg-blue-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="書く前に、考える"
          title="AIを「壁打ち相手」として使い、発明アイデアを整理する"
          description="いきなり出願書類を書くのではなく、まずは「何が課題なのか」「どのように解決しているのか」「既存の方法と何が違うのか」「専門家に何を確認すべきか」を整理します。"
        />
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-slate-600">
          一般的なAIツールは文章作成に役立ちます。Invention Brief
          AIは、特許相談前に必要となる「課題」「解決手段」「仕組み」「公開状況」「専門家に確認すべき質問」を整理する流れに特化します。
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {plannedModes.map((mode) => (
            <div
              key={mode.name}
              className="rounded-xl border border-blue-100 bg-white p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {mode.name}
                </h3>
                <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                  構想中
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {mode.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-blue-100 bg-white p-6">
          <h3 className="text-sm font-semibold tracking-wide text-slate-900">
            プライバシーが最優先
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
            <li>
              発明に関する内容はユーザー自身の管理下に置く — これが、今後のすべての設計の前提です。
            </li>
            <li>
              機密性のある発明内容を、明示的で個別の同意なく、広告、マッチング、アクセス解析、AIモデルの学習に使うことはありません。
            </li>
            <li>
              現在のプロトタイプが収集するのは、Cookie不使用の匿名の訪問統計のみで、入力内容は一切収集しません。現状の詳細は
              <Link
                href="/ja/privacy"
                className="font-medium text-blue-700 hover:text-blue-800"
              >
                プライバシーページ
              </Link>
              をご覧ください。
            </li>
          </ul>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
          法的助言、特許性判断、請求項作成、出願書類作成、特許出願手続の代理を提供するものではありません。
        </p>
      </div>
    </section>
  );
}

/* 4. このサービスでできること */
function WhatItDoesSection() {
  const items = [
    {
      title: "アイデアの構造化",
      description:
        "アイデアを「課題」「解決手段」「効果」「利用場面」に分けて整理し、ひとつの発明相談ブリーフにまとめます。",
    },
    {
      title: "相談前のメモ作成支援",
      description:
        "弁理士などの専門家に相談する前のメモ作成を、ガイド付きの質問でサポートします。",
    },
    {
      title: "相談時の質問リスト",
      description:
        "初回相談で確認すべき質問を事前に整理し、聞き漏らしを防ぎます。",
    },
    {
      title: "国別の一般情報ガイド",
      description:
        "国別制度に関する一般情報ページへの導線を提供します。まずは日本向けガイドから公開予定です。",
    },
    {
      title: "日英二言語での準備(将来)",
      description:
        "日本語・英語での相談準備を将来的に支援することを目指しています。",
    },
  ];

  return (
    <section id="what-it-does" className="scroll-mt-16 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="このサービスでできること"
          title="「整理」に特化したサポート"
          description="すべての機能は、専門家との相談を実りあるものにするための「準備」に焦点を当てています。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. このサービスでできないこと */
function WhatItDoesNotDoSection() {
  const items = [
    {
      title: "法的助言は提供しません",
      description:
        "本サービスの内容はすべて一般的な情報・整理支援であり、法的助言ではありません。",
    },
    {
      title: "特許性の判断は行いません",
      description:
        "発明が特許になり得るかどうかの判断は、資格を有する専門家に相談すべき法的な事項です。",
    },
    {
      title: "請求項や正式な出願書類は作成しません",
      description:
        "発明相談ブリーフは相談準備のためのメモであり、請求項や出願書類ではありません。",
    },
    {
      title: "特許庁への手続代理は行いません",
      description:
        "特許庁その他の機関に対する出願・手続の代理は一切行いません。",
    },
    {
      title: "弁理士などの専門家の代替ではありません",
      description:
        "本サービスは専門家への相談を置き換えるものではなく、相談の準備を支援するものです。",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="このサービスでできないこと"
          title="あえて明確にしている境界線"
          description="特許に関する判断は、専門家の知見が必要な領域です。本サービスは「準備」の側に徹します。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6"
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-bold text-rose-700"
              >
                ✕
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. 利用の流れ */
function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "アイデアを書き出す",
      description:
        "ガイド付きの質問に沿って、解決したい課題、解決手段、期待する効果、利用場面を書き出します。",
    },
    {
      number: "2",
      title: "ブリーフとして整理",
      description:
        "回答が構造化された「発明相談ブリーフ」にまとまります。散らばっていた情報がひとつの文書になります。",
    },
    {
      number: "3",
      title: "国別ガイドで予習",
      description:
        "日本向け準備ガイドで、初回相談の一般的な流れや、よく聞かれるポイントを予習します。",
    },
    {
      number: "4",
      title: "専門家に相談",
      description:
        "ブリーフを持って、自分で選んだ弁理士などの専門家に相談します。判断や手続は専門家とともに。",
    },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-16 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="利用の流れ"
          title="アイデアの整理から相談まで、4つのステップ"
          description="準備が整っていれば、相談時間を「説明」ではなく「専門家の助言」に使えます。"
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-center text-sm">
          <Link
            href="/ja/checklist"
            className="font-medium text-blue-700 hover:text-blue-800"
          >
            紙で準備したい方へ:初回相談チェックリストを印刷する →
          </Link>
        </p>
      </div>
    </section>
  );
}

/* 7. 想定ユーザー */
function WhoItIsForSection() {
  const audiences = [
    {
      title: "個人発明家",
      description:
        "温めてきたアイデアを形にしたい方。限られた相談時間と費用を最大限に活かせます。",
    },
    {
      title: "スタートアップ創業者",
      description:
        "スピード感を保ちながら、専門家との打ち合わせ前に発明を明確に文書化したい方。",
    },
    {
      title: "研究者・エンジニア",
      description:
        "技術には詳しいが、それを相談用の資料に落とし込む部分で支援がほしい方。",
    },
    {
      title: "初めて相談する方",
      description:
        "弁理士に相談するのが初めてで、何を準備し、何を聞かれるのかを知っておきたい方。",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="想定ユーザー"
          title="「最初の相談」を控えたすべての発明者へ"
          description="専門家への最初の相談を準備中なら、Invention Brief AIはそのためのツールです。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8. 発明相談ブリーフの例 */
function BriefPreviewSection() {
  const briefSections = [
    {
      heading: "1. 課題",
      body: "既存の自転車用ロックは重く、施錠・解錠に手間がかかるため、短時間の駐輪では施錠されないことが多い。",
    },
    {
      heading: "2. 解決手段",
      body: "多層複合素材のバンドをコイル状に巻き取り、サドル下のホルスターに収納できる軽量折りたたみロック。",
    },
    {
      heading: "3. 効果",
      body: "・重量400g未満で携帯の負担を軽減\n・片手で素早く施錠・解錠が可能\n・収納場所に迷わない一体型ホルスター",
    },
    {
      heading: "4. 利用場面",
      body: "コンビニ・駅前などでの短時間駐輪。通勤・通学で毎日自転車を使う利用者を想定。",
    },
    {
      heading: "5. 専門家に確認したいこと",
      body: "・どの部分を中心に相談を進めるべきか\n・公開デモの前に記録しておくべきことは何か",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="発明相談ブリーフの例"
          title="相談に持っていく「整理されたメモ」"
          description="課題・解決手段・効果・利用場面に分けて整理することで、専門家が短時間で全体像を把握できます。"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  発明相談ブリーフ — サンプル
                </p>
                <h3 className="mt-1 font-semibold text-slate-900">
                  コイル収納式の軽量自転車ロック
                </h3>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                例
              </span>
            </div>
            <dl className="divide-y divide-slate-100 px-6">
              {briefSections.map((section) => (
                <div key={section.heading} className="py-4">
                  <dt className="text-sm font-semibold text-slate-900">
                    {section.heading}
                  </dt>
                  <dd className="mt-1 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {section.body}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-slate-200 px-6 py-4 text-xs text-slate-500">
              これは説明用のサンプルであり、法的な文書ではありません。ブリーフは、弁理士などの専門家と相談を始めるための「たたき台」です。
            </p>
          </div>
          <p className="mt-6 text-center text-sm">
            <Link
              href="/ja/demo"
              className="font-medium text-blue-700 hover:text-blue-800"
            >
              ブリーフができるまでの流れをデモで見る →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

/* 9. 国別ガイドのプレビュー */
function CountryGuideSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="国別ガイドのプレビュー"
          title="国ごとの「相談の進み方」を知る"
          description="相談の一般的な流れ、用語、持参すると役立つ資料など、公開情報に基づく一般情報をまとめたガイドです。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Link
            href="/ja/guides/japan"
            className="group rounded-xl border border-blue-200 bg-blue-50 p-6 transition-shadow hover:shadow-md"
          >
            <span className="text-3xl" aria-hidden>
              🇯🇵
            </span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">日本</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              初めて特許相談をする人のための日本向け準備ガイド。
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-blue-700 group-hover:text-blue-800">
              ガイドを読む →
            </span>
          </Link>
          <div className="rounded-xl border border-slate-200 bg-white p-6 opacity-70">
            <span className="text-3xl" aria-hidden>
              🇺🇸
            </span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              アメリカ
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              米国の専門家への相談準備ガイド。
            </p>
            <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
              準備中
            </span>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 opacity-70">
            <span className="text-3xl" aria-hidden>
              🇪🇺
            </span>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              ヨーロッパ
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              欧州の専門家への相談準備ガイド。
            </p>
            <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
              準備中
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 10. β版案内 */
function WaitlistSection() {
  return (
    <section id="waitlist" className="scroll-mt-16 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-blue-900 px-6 py-16 text-center sm:px-16">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            β版の公開をお知らせします
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-blue-100">
            Invention Brief
            AIのβ版が利用可能になり次第、ご案内をお届けする予定です。
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            aria-label="β版案内の登録(プレビュー)"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              メールアドレス
            </label>
            <input
              id="waitlist-email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full border-0 bg-white px-5 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="button"
              className="shrink-0 rounded-full bg-white px-6 py-3 font-semibold text-blue-900 transition-colors hover:bg-blue-50"
            >
              β版の案内を受け取る
            </button>
          </form>
          <p className="mt-4 text-sm text-blue-200">
            現在は静的なプロトタイプのため、登録機能はまだ稼働していません。入力された内容は送信・保存されません。
          </p>
          <p className="mt-2 text-sm text-blue-200">
            法的助言、特許性判断、出願書類作成を提供するものではありません。
          </p>
        </div>
      </div>
    </section>
  );
}

/* 共通の見出し */
function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-wide text-blue-700">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}
