# PLAN_2.md — Invention Brief AI v0.2

## Goal

Update the current Next.js prototype to **v0.2**.

Main goals:

1. Polish the current English homepage and static pages.
2. Add Japanese-language pages.
3. Expand the Japan guide in a legally safe way.
4. Keep the project static-only.
5. Preserve the core positioning: consultation preparation, not legal advice or patent filing.

## Core product positioning

Use this core message:

> Invention Brief AI helps inventors organize their ideas before speaking with a qualified patent professional.

Japanese equivalent:

> Invention Brief AIは、発明者が弁理士などの専門家に相談する前に、自分のアイデアを整理するための相談準備ツールです。

## Strict legal-safe boundaries

Do not say or imply:

* We provide legal advice.
* We determine patentability.
* We draft patent claims.
* We draft official patent application documents.
* We file patents for users.
* We replace patent attorneys, patent agents, or patent professionals.
* Users can rely on this service instead of consulting a qualified professional.

Use safer wording:

* consultation preparation
* invention brief
* idea organization
* pre-consultation checklist
* questions to ask a qualified patent professional
* general information based on public sources
* not legal advice

## Technical scope

Keep this version static-only.

Do not add:

* backend
* login
* database
* payment
* Stripe
* Supabase
* OpenAI API
* attorney database
* real waitlist storage
* real invention intake
* environment variables
* analytics
* tracking scripts

No `.env` file should be created.

## Current pages to keep

Keep and polish:

* `/`
* `/disclaimer`
* `/privacy`
* `/guides/japan`

## New Japanese pages to add

Add Japanese routes:

* `/ja`
* `/ja/disclaimer`
* `/ja/privacy`
* `/ja/guides/japan`

Add navigation links between English and Japanese pages.

Suggested language toggle:

* English
* 日本語

## Japanese homepage content

Create a Japanese homepage that mirrors the English concept but is naturally localized, not just literal translation.

Suggested hero headline:

> 弁理士に相談する前に、発明アイデアを整理する。

Suggested subheadline:

> Invention Brief AIは、初めて特許相談を考える発明者・開発者・研究者が、専門家に相談する前にアイデアを構造化するための準備ツールです。

Suggested CTA:

> β版の案内を受け取る

or

> 相談準備の流れを見る

Add a short caution near the CTA:

> 法的助言、特許性判断、出願書類作成を提供するものではありません。

## Japanese homepage sections

Include these sections:

1. Hero
2. どのような課題を解決するか
3. このサービスでできること
4. このサービスでできないこと
5. 利用の流れ
6. 想定ユーザー
7. 発明相談ブリーフの例
8. 国別ガイドのプレビュー
9. β版案内
10. 免責フッター

## Japanese "What this service does" section

Use content like:

* アイデアを「課題」「解決手段」「効果」「利用場面」に分けて整理する
* 弁理士などの専門家に相談する前のメモ作成を支援する
* 相談時に確認すべき質問を整理する
* 国別制度に関する一般情報ページへの導線を提供する
* 日本語・英語での相談準備を将来的に支援する

## Japanese "What this service does not do" section

Clearly state:

* 法的助言は提供しません
* 特許性の判断は行いません
* 請求項や正式な出願書類は作成しません
* 特許庁への手続代理は行いません
* 弁理士などの専門家の代替ではありません

## Japan guide page

Expand `/guides/japan` and create `/ja/guides/japan`.

The Japan guide should be a general pre-consultation guide for first-time inventors.

English title:

> Japan Patent Consultation Guide for First-Time Inventors

Japanese title:

> 初めて特許相談をする人のための日本向け準備ガイド

The page should explain:

1. Purpose of the guide
2. What to prepare before speaking with a patent professional
3. How to describe the problem your invention solves
4. How to describe the technical solution
5. How to describe differences from existing products or methods
6. Why public disclosure may matter
7. What to tell a patent professional
8. Questions to ask during the first consultation
9. What this guide does not cover
10. Official information links placeholder
11. Disclaimer

## Important content rule for Japan guide

Do not present detailed legal conclusions unless clearly framed as general information.

Avoid precise legal claims unless they are clearly marked as TODO for human review.

Do not invent official citations.

For official resources, use placeholders like:

* TODO: Add official JPO source
* TODO: Add INPIT/J-PlatPat source
* TODO: Add Japan Patent Attorneys Association source

The guide should be useful but cautious.

## Disclaimer page

Improve `/disclaimer` and add `/ja/disclaimer`.

The disclaimer should clearly say:

English:

* Invention Brief AI is not a law firm.
* The service does not provide legal advice.
* The service does not provide patentability opinions.
* The service does not draft patent claims or official filing documents.
* The service does not represent users before any patent office.
* Users should consult a qualified patent professional for legal advice and filing decisions.
* Users should not submit confidential invention details unless and until appropriate privacy and confidentiality terms are in place.

Japanese:

* Invention Brief AIは法律事務所または特許事務所ではありません。
* 法的助言を提供するものではありません。
* 特許性の判断を行うものではありません。
* 請求項または正式な出願書類を作成するものではありません。
* 特許庁その他の機関に対する手続代理を行うものではありません。
* 出願可否、出願戦略、権利化可能性については、弁理士などの資格を有する専門家に相談してください。
* 適切な利用規約・プライバシー・秘密保持体制が整うまでは、未公開の機密情報や詳細な発明内容を入力しないでください。

## Privacy page

Improve `/privacy` and add `/ja/privacy`.

For now, say this is a prototype and does not intentionally collect detailed invention data.

English:

* This prototype does not currently provide real account registration, payment, database storage, or invention intake.
* Users should not submit confidential invention details through this prototype.
* If forms are added later, the privacy policy will be updated before collecting data.

Japanese:

* 現在のプロトタイプでは、アカウント登録、決済、データベース保存、詳細な発明内容の受付は実装していません。
* 本プロトタイプを通じて、未公開の発明内容や機密情報を送信しないでください。
* 将来的にフォームやデータ保存機能を追加する場合には、データ収集前にプライバシーポリシーを更新します。

## Design direction

Keep the design:

* clean
* professional
* calm
* trustworthy
* international
* beginner-friendly

Do not make it look like an aggressive legal-tech sales page.

## Navigation

Header should include:

English pages:

* What It Does
* How It Works
* Japan Guide
* Disclaimer
* 日本語

Japanese pages:

* できること
* 利用の流れ
* 日本向けガイド
* 免責事項
* English

## Footer

English footer:

> Invention Brief AI is a consultation-preparation tool. It does not provide legal advice, patentability opinions, claim drafting, patent application drafting, or patent filing services.

Japanese footer:

> Invention Brief AIは相談準備ツールです。法的助言、特許性判断、請求項作成、出願書類作成、特許出願手続の代理を提供するものではありません。

## README.md

Update or create `README.md`.

Include:

* project name
* prototype purpose
* legal-safe positioning
* tech stack
* local development command
* build command
* current scope
* not implemented yet

## TODO.md

Update or create `TODO.md`.

Include:

* polish domain and branding
* add official source citations
* review legal wording with qualified professionals
* add non-sensitive waitlist later
* design invention brief questionnaire later
* add English/Japanese content review
* consider custom domain later

## Quality check

After implementation, run:

```bash
npm run build
```

If there is a lint command available, run:

```bash
npm run lint
```

Fix any build or lint errors.

## Final report

After completion, summarize:

1. Files changed
2. New pages added
3. Commands run
4. Build result
5. Remaining TODOs

