"use client";

import { useState } from "react";

type Step = {
  label: string;
  question: string;
  hint: string;
  example: string;
};

const content = {
  en: {
    notice:
      "This is a read-only walkthrough using a fixed example invention (a bicycle lock). Nothing on this page accepts, sends, or stores your input.",
    questionHeading: "What the builder will ask",
    exampleHeading: "Example answer (pre-written)",
    hintHeading: "Why this matters",
    prev: "← Previous",
    next: "Next →",
    restart: "Start over",
    finalHeading: "The result: one organized brief",
    finalBody:
      "Step by step, the answers above become a structured invention brief — the document shown in the sample on the homepage. You bring it to the qualified patent professional of your choice, and the consultation starts from a shared, organized picture instead of scattered notes.",
    stepLabel: (current: number, total: number) => `Step ${current} of ${total}`,
    steps: [
      {
        label: "Problem",
        question:
          "Who has the problem, in what situation, and why are today's options not good enough?",
        hint: "A concrete problem statement is the foundation professionals build on. Vague problems lead to vague conversations.",
        example:
          "Existing bicycle locks are heavy and slow to operate, discouraging short-trip riders from securing their bikes.",
      },
      {
        label: "Solution",
        question:
          "How does your invention solve that problem? Describe it step by step, in your own words.",
        hint: "Plain language is enough — your patent professional decides how to express the invention formally.",
        example:
          "A lightweight folding lock using a layered composite band that coils into a holster mounted under the saddle.",
      },
      {
        label: "Key features",
        question:
          "Which features are essential, and which are optional variations?",
        hint: "Separating essential from optional helps the professional see where the core of the invention lies.",
        example:
          "Coiling composite band (under 400 g) / one-handed release mechanism / integrated mounting holster.",
      },
      {
        label: "Known similar approaches",
        question:
          "What is the closest existing product or method you know, and how is yours different?",
        hint: "Honest comparison beats claiming nothing similar exists — it tells the professional what to investigate.",
        example:
          "Folding-plate locks and textile-band locks exist; this design differs in band structure and the holster integration.",
      },
      {
        label: "Questions for the professional",
        question:
          "What do you want to ask in the consultation — about options, disclosure, costs, or next steps?",
        hint: "Writing questions down in advance prevents the meeting from ending before the important ones are asked.",
        example:
          "Is the band structure the strongest angle to discuss? What should I document before any public demo?",
      },
    ] as Step[],
  },
  ja: {
    notice:
      "これは固定のサンプル発明(自転車ロック)を使った読み取り専用のデモです。このページは入力を受け付けず、送信・保存も行いません。",
    questionHeading: "ビルダーが尋ねる質問",
    exampleHeading: "回答の例(あらかじめ用意したもの)",
    hintHeading: "なぜ重要か",
    prev: "← 前へ",
    next: "次へ →",
    restart: "最初から見る",
    finalHeading: "完成形:1つに整理されたブリーフ",
    finalBody:
      "上記の回答が、ホームページのサンプルのような構造化された「発明相談ブリーフ」にまとまります。これを自分で選んだ弁理士などの専門家に持参すれば、散らばったメモではなく、整理された全体像から相談を始められます。",
    stepLabel: (current: number, total: number) =>
      `ステップ ${current} / ${total}`,
    steps: [
      {
        label: "課題",
        question:
          "誰が、どのような場面でその課題に直面し、既存の対処法のどこが不十分ですか?",
        hint: "具体的な課題の説明は、専門家が検討を組み立てる土台になります。曖昧な課題からは曖昧な相談しか生まれません。",
        example:
          "既存の自転車用ロックは重く、施錠・解錠に手間がかかるため、短時間の駐輪では施錠されないことが多い。",
      },
      {
        label: "解決手段",
        question:
          "発明はその課題をどのように解決しますか? 自分の言葉で、順を追って説明してください。",
        hint: "平易な言葉で十分です。正式な書類でどう表現するかは専門家が判断します。",
        example:
          "多層複合素材のバンドをコイル状に巻き取り、サドル下のホルスターに収納できる軽量折りたたみロック。",
      },
      {
        label: "効果",
        question: "その解決手段によって、どのような効果が得られますか?",
        hint: "「何がどれだけ良くなるか」を分けて書くと、発明の中心がどこにあるかが伝わりやすくなります。",
        example:
          "重量400g未満で携帯の負担を軽減。片手で素早く施錠・解錠が可能。収納場所に迷わない一体型ホルスター。",
      },
      {
        label: "利用場面",
        question: "どのような場面・利用者を想定していますか?",
        hint: "利用場面が明確だと、専門家は事業の方向性に合わせた論点を立てやすくなります。",
        example:
          "コンビニ・駅前などでの短時間駐輪。通勤・通学で毎日自転車を使う利用者を想定。",
      },
      {
        label: "専門家に確認したいこと",
        question:
          "相談の場で確認したいことは何ですか?(選択肢、公開の扱い、費用、次のステップなど)",
        hint: "質問を事前に書き出しておくと、大事なことを聞きそびれたまま相談が終わるのを防げます。",
        example:
          "どの部分を中心に相談を進めるべきか。公開デモの前に記録しておくべきことは何か。",
      },
    ] as Step[],
  },
} as const;

export function BriefDemo({ locale }: { locale: "en" | "ja" }) {
  const t = content[locale];
  const totalSteps = t.steps.length;
  // step in [0, totalSteps]; the last index shows the wrap-up panel
  const [step, setStep] = useState(0);
  const isFinal = step === totalSteps;
  const current = isFinal ? null : t.steps[step];

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-amber-50 px-6 py-3">
        <p className="text-xs leading-5 text-amber-900">{t.notice}</p>
      </div>

      <div className="flex items-center gap-2 px-6 pt-5" aria-hidden>
        {[...Array(totalSteps + 1)].map((_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full ${
              i <= step ? "bg-blue-700" : "bg-slate-200"
            }`}
          />
        ))}
      </div>

      <div className="px-6 py-6">
        {current ? (
          <>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              {t.stepLabel(step + 1, totalSteps)} — {current.label}
            </p>
            <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-800">
                {t.questionHeading}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-800">
                {current.question}
              </p>
            </div>
            <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t.exampleHeading}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {current.example}
              </p>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              <span className="font-semibold">{t.hintHeading}: </span>
              {current.hint}
            </p>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-slate-900">
              {t.finalHeading}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {t.finalBody}
            </p>
            <dl className="mt-4 divide-y divide-slate-100 rounded-lg border border-slate-200">
              {t.steps.map((s, i) => (
                <div key={s.label} className="px-4 py-3">
                  <dt className="text-xs font-semibold text-slate-900">
                    {i + 1}. {s.label}
                  </dt>
                  <dd className="mt-1 text-xs leading-5 text-slate-600">
                    {s.example}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
        <button
          type="button"
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors enabled:hover:border-slate-400 enabled:hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {t.prev}
        </button>
        {isFinal ? (
          <button
            type="button"
            onClick={() => setStep(0)}
            className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            {t.restart}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setStep(Math.min(totalSteps, step + 1))}
            className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            {t.next}
          </button>
        )}
      </div>
    </div>
  );
}
