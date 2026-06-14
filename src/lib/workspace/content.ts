// All UI strings for the Local Workspace, EN/JA. No AI is involved in Tier 1 —
// "Mirror" is guided self-reflection (structured questions), not a model.
// Wording stays legal-safe: preparation only, "known similar approaches you
// already know" (not "prior art"), never "draft your patent" (G6).

import type { BriefFieldKey } from "./types";

type MirrorStep = { field: BriefFieldKey; question: string; hint: string };

export type WorkspaceStrings = {
  appName: string;
  tagline: string;
  localNotice: string;
  tabs: { mirror: string; brief: string; list: string };
  fieldLabels: Record<BriefFieldKey, string>;
  fieldHelp: Record<BriefFieldKey, string>;
  fieldPlaceholder: string;
  mirror: {
    title: string;
    intro: string;
    steps: MirrorStep[];
    stepWord: string;
    ofWord: string;
    prev: string;
    next: string;
    finish: string;
    finishedTitle: string;
    finishedBody: string;
    restart: string;
    openInBrief: string;
  };
  brief: { title: string; intro: string; untitled: string };
  list: {
    title: string;
    intro: string;
    empty: string;
    newBrief: string;
    open: string;
    duplicate: string;
    delete: string;
    deleteConfirm: string;
    lastEdited: string;
    exportAll: string;
    importFile: string;
    importDone: string;
    importEmpty: string;
  };
  actions: {
    exportMd: string;
    exportJson: string;
    print: string;
    save: string;
    saved: string;
    back: string;
  };
  meta: { mdTitle: string; mdDisclaimer: string };
};

export const workspaceContent: Record<"en" | "ja", WorkspaceStrings> = {
  en: {
    appName: "Local Workspace",
    tagline:
      "Organize your idea before a consultation. Everything stays on your device.",
    localNotice:
      "Everything you type here is saved only in this browser, on this device. Nothing is uploaded or sent anywhere. Clearing your browser data deletes it — so export anything you want to keep.",
    tabs: { mirror: "Mirror", brief: "Brief", list: "My drafts" },
    fieldLabels: {
      title: "Working title",
      summary: "One-paragraph summary",
      problem: "Problem",
      mechanism: "How it works",
      effects: "Effects / advantages",
      useCases: "Use cases",
      knownSimilar: "Known similar approaches",
      disclosure: "Disclosure history",
      uncertainties: "Open questions / uncertainties",
      questions: "Questions for a professional",
    },
    fieldHelp: {
      title: "A short name, just for your own reference.",
      summary:
        "Describe the idea in plain language, as if to a friend outside your field.",
      problem:
        "Who has the problem, in what situation, and why current options fall short.",
      mechanism:
        "The main parts or steps and how they work together — which are essential, which optional.",
      effects: "What measurably improves, and for whom.",
      useCases: "Where, when, and by whom it would be used.",
      knownSimilar:
        "The closest products or methods you already know of, and how yours differs.",
      disclosure:
        "Anything public so far — demos, posts, talks, sales — with what, when, where, and to whom.",
      uncertainties: "Open questions, weak spots, things not yet tested.",
      questions:
        "What to ask in a consultation — options, what to avoid, costs, next steps.",
    },
    fieldPlaceholder: "Write in your own words…",
    mirror: {
      title: "Mirror: think it through",
      intro:
        "A few guided questions to help you discover the structure of your own idea. Your answers fill in your brief as you go. No AI, no network — just you and the questions.",
      steps: [
        {
          field: "problem",
          question: "What problem does your idea solve, and for whom?",
          hint: "Be concrete: who has it, in what situation, and why current options fall short.",
        },
        {
          field: "mechanism",
          question:
            "How does it work? Walk through it step by step, in your own words.",
          hint: "Plain language is enough — name the parts and how they fit together.",
        },
        {
          field: "effects",
          question: "What gets better, and by how much?",
          hint: "Speed, cost, accuracy, effort — numbers make the difference concrete.",
        },
        {
          field: "knownSimilar",
          question:
            "What is the closest thing you already know of, and how is yours different?",
          hint: "Honest comparison beats “nothing like this exists.”",
        },
        {
          field: "uncertainties",
          question: "What are you still unsure about?",
          hint: "Open questions, weak spots, things you haven't tested — naming them is progress.",
        },
        {
          field: "questions",
          question:
            "What do you want to ask a qualified patent professional?",
          hint: "Write the questions now, while they're fresh.",
        },
      ],
      stepWord: "Step",
      ofWord: "of",
      prev: "← Back",
      next: "Next →",
      finish: "Finish",
      finishedTitle: "Your reflection is saved",
      finishedBody:
        "These answers are now part of your draft. Open it in Brief to fill in the rest — summary, use cases, disclosure history — and export it for your consultation.",
      restart: "Review from the start",
      openInBrief: "Open in Brief →",
    },
    brief: {
      title: "Brief: the full picture",
      intro:
        "The structured draft you bring to a consultation. Edit any field; changes save to this browser automatically.",
      untitled: "Untitled draft",
    },
    list: {
      title: "My drafts",
      intro:
        "Your drafts, stored only in this browser. Export anything you want to keep before clearing browser data.",
      empty: "No drafts yet. Start one in Mirror or Brief.",
      newBrief: "New draft",
      open: "Open",
      duplicate: "Duplicate",
      delete: "Delete",
      deleteConfirm: "Delete this draft? This cannot be undone.",
      lastEdited: "Last edited",
      exportAll: "Export all (JSON backup)",
      importFile: "Import JSON backup",
      importDone: "drafts imported.",
      importEmpty: "No valid drafts found in that file.",
    },
    actions: {
      exportMd: "Export Markdown",
      exportJson: "Export JSON",
      print: "Print / Save as PDF",
      save: "Save",
      saved: "Saved",
      back: "← All drafts",
    },
    meta: {
      mdTitle: "Invention Brief (draft)",
      mdDisclaimer:
        "Invention Brief AI is a consultation-preparation tool. It does not provide legal advice, patentability opinions, claim drafting, patent application drafting, or patent filing services. Always consult a qualified patent professional for legal advice and filing decisions.",
    },
  },
  ja: {
    appName: "ローカルワークスペース",
    tagline:
      "相談の前にアイデアを整理する。すべてはお使いの端末内にとどまります。",
    localNotice:
      "ここで入力した内容は、この端末のこのブラウザ内にのみ保存されます。どこにもアップロード・送信されません。ブラウザのデータを消去すると削除されます — 残したいものは書き出してください。",
    tabs: { mirror: "ミラー", brief: "ブリーフ", list: "下書き一覧" },
    fieldLabels: {
      title: "仮のタイトル",
      summary: "概要(1段落)",
      problem: "課題",
      mechanism: "仕組み(解決手段)",
      effects: "効果",
      useCases: "利用場面",
      knownSimilar: "既存の類似手法(知っている範囲)",
      disclosure: "公開の経緯",
      uncertainties: "未解決の点・不確かな点",
      questions: "専門家に確認したいこと",
    },
    fieldHelp: {
      title: "参照用の短い名前。",
      summary: "分野外の友人に説明するつもりで、平易な言葉で。",
      problem: "誰が、どんな場面で課題に直面し、既存の方法のどこが不十分か。",
      mechanism:
        "主な構成要素や手順と、それらの連携。本質的な部分と任意の部分。",
      effects: "何が、誰にとって、どれだけ良くなるか。",
      useCases: "どこで、いつ、誰が使うか。",
      knownSimilar: "知っている範囲で最も近い製品・方法と、その違い。",
      disclosure:
        "これまでの公開 — デモ、投稿、発表、販売 — を、何を・いつ・どこで・誰に。",
      uncertainties: "未解決の疑問、弱点、未検証の点。",
      questions: "相談で聞くこと — 選択肢、避けるべきこと、費用、次のステップ。",
    },
    fieldPlaceholder: "自分の言葉で書いてください…",
    mirror: {
      title: "ミラー:考えを整理する",
      intro:
        "自分のアイデアの構造を見つけるための、いくつかのガイド付き質問です。回答はそのまま下書きに反映されます。AIもネットワークも使いません — あなたと質問だけ。",
      steps: [
        {
          field: "problem",
          question: "あなたのアイデアは、誰のどんな課題を解決しますか?",
          hint: "具体的に:誰が、どんな場面で、なぜ既存の方法では不十分か。",
        },
        {
          field: "mechanism",
          question:
            "どのように機能しますか?自分の言葉で、順を追って説明してください。",
          hint: "専門用語は不要です。構成要素と、それらがどう連携するかを。",
        },
        {
          field: "effects",
          question: "何が、どれだけ良くなりますか?",
          hint: "速度、コスト、精度、手間 — 数字があると違いが伝わります。",
        },
        {
          field: "knownSimilar",
          question:
            "いちばん近い既存のものは何で、自分のものはどこが違いますか?",
          hint: "「こんなものは存在しない」より、正直な比較を。",
        },
        {
          field: "uncertainties",
          question: "まだ確信が持てないことは何ですか?",
          hint: "未解決の疑問、弱点、未検証の点 — 言語化すること自体が前進です。",
        },
        {
          field: "questions",
          question: "弁理士などの専門家に何を確認したいですか?",
          hint: "思いついた今のうちに、質問を書き出しましょう。",
        },
      ],
      stepWord: "ステップ",
      ofWord: "/",
      prev: "← 戻る",
      next: "次へ →",
      finish: "完了",
      finishedTitle: "整理した内容を保存しました",
      finishedBody:
        "これらの回答は下書きの一部になりました。ブリーフで開いて、概要・利用場面・公開の経緯など残りを埋め、相談用に書き出してください。",
      restart: "最初から見直す",
      openInBrief: "ブリーフで開く →",
    },
    brief: {
      title: "ブリーフ:全体像",
      intro:
        "相談に持っていく構造化された下書きです。どの項目も編集でき、変更はこのブラウザに自動保存されます。",
      untitled: "無題の下書き",
    },
    list: {
      title: "下書き一覧",
      intro:
        "このブラウザ内にのみ保存された下書きです。ブラウザのデータを消去する前に、残したいものは書き出してください。",
      empty: "まだ下書きはありません。ミラーかブリーフから始めましょう。",
      newBrief: "新しい下書き",
      open: "開く",
      duplicate: "複製",
      delete: "削除",
      deleteConfirm: "この下書きを削除しますか?元に戻せません。",
      lastEdited: "最終編集",
      exportAll: "すべて書き出す(JSONバックアップ)",
      importFile: "JSONバックアップを読み込む",
      importDone: "件の下書きを読み込みました。",
      importEmpty: "そのファイルに有効な下書きが見つかりませんでした。",
    },
    actions: {
      exportMd: "Markdownで書き出す",
      exportJson: "JSONで書き出す",
      print: "印刷 / PDFで保存",
      save: "保存",
      saved: "保存済み",
      back: "← 下書き一覧",
    },
    meta: {
      mdTitle: "発明相談ブリーフ(下書き)",
      mdDisclaimer:
        "Invention Brief AIは相談準備ツールです。法的助言、特許性判断、請求項作成、出願書類作成、特許出願手続の代理を提供するものではありません。出願や権利化に関する判断は、必ず弁理士などの資格を有する専門家にご相談ください。",
    },
  },
};
