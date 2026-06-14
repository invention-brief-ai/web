"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  type Brief,
  type BriefFieldKey,
  createBrief,
} from "@/lib/workspace/types";
import {
  listBriefs,
  saveBrief,
  deleteBrief as removeBrief,
} from "@/lib/workspace/store";
import { workspaceContent } from "@/lib/workspace/content";
import { MirrorMode } from "./mirror-mode";
import { BriefMode } from "./brief-mode";
import { DraftsList } from "./drafts-list";

type Tab = "mirror" | "brief" | "list";

export function WorkspaceApp({ locale }: { locale: "en" | "ja" }) {
  const t = workspaceContent[locale];
  const [briefs, setBriefs] = useState<Brief[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("list");
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());
  const pending = useRef<Map<string, Brief>>(new Map());

  // Persist any debounced-but-not-yet-written edits. Called on unmount, tab
  // hide, and pagehide so a recent keystroke is never lost on navigation or
  // tab close. Saves stay on-device (IndexedDB) — nothing is uploaded.
  const flushAll = useCallback(() => {
    const tmap = timers.current;
    const pmap = pending.current;
    tmap.forEach((timer) => clearTimeout(timer));
    tmap.clear();
    pmap.forEach((brief) => void saveBrief(brief));
    pmap.clear();
  }, []);

  useEffect(() => {
    let alive = true;
    void listBriefs().then((list) => {
      if (alive) setBriefs(list);
    });
    const onVisibility = () => {
      if (document.visibilityState === "hidden") flushAll();
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", flushAll);
    return () => {
      alive = false;
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", flushAll);
      flushAll();
    };
  }, [flushAll]);

  const active = briefs.find((b) => b.id === activeId) ?? null;

  function scheduleSave(brief: Brief) {
    const map = timers.current;
    pending.current.set(brief.id, brief);
    const existing = map.get(brief.id);
    if (existing) clearTimeout(existing);
    map.set(
      brief.id,
      setTimeout(() => {
        void saveBrief(brief);
        map.delete(brief.id);
        pending.current.delete(brief.id);
      }, 400),
    );
  }

  function flush(brief: Brief) {
    const map = timers.current;
    const existing = map.get(brief.id);
    if (existing) {
      clearTimeout(existing);
      map.delete(brief.id);
    }
    pending.current.delete(brief.id);
    void saveBrief(brief);
  }

  function updateField(id: string, field: BriefFieldKey, value: string) {
    setBriefs((prev) => {
      let updated: Brief | null = null;
      const next = prev.map((b) => {
        if (b.id !== id) return b;
        updated = {
          ...b,
          fields: { ...b.fields, [field]: value },
          updatedAt: Date.now(),
        };
        return updated;
      });
      if (updated) scheduleSave(updated);
      return next;
    });
  }

  function newDraft(goTo: Tab) {
    const b = createBrief();
    setBriefs((prev) => [b, ...prev]);
    void saveBrief(b);
    setActiveId(b.id);
    setTab(goTo);
  }

  function go(next: Tab) {
    if (active) flush(active);
    if ((next === "mirror" || next === "brief") && !active) {
      newDraft(next);
      return;
    }
    setTab(next);
  }

  function openDraft(id: string) {
    setActiveId(id);
    setTab("brief");
  }

  function duplicate(id: string) {
    const src = briefs.find((b) => b.id === id);
    if (!src) return;
    const copy = createBrief();
    copy.fields = { ...src.fields };
    setBriefs((prev) => [copy, ...prev]);
    void saveBrief(copy);
  }

  function remove(id: string) {
    void removeBrief(id);
    setBriefs((prev) => prev.filter((b) => b.id !== id));
    if (activeId === id) {
      setActiveId(null);
      setTab("list");
    }
  }

  function addImported(imported: Brief[]) {
    // Fresh ids so an import never overwrites existing local drafts.
    const reIded = imported.map((b) => {
      const fresh = createBrief();
      fresh.fields = { ...b.fields };
      fresh.createdAt = b.createdAt;
      return fresh;
    });
    reIded.forEach((b) => void saveBrief(b));
    setBriefs((prev) => [...reIded, ...prev]);
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: "mirror", label: t.tabs.mirror },
    { key: "brief", label: t.tabs.brief },
    { key: "list", label: t.tabs.list },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <header className="print:hidden">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {t.appName}
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">{t.tagline}</p>
        <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-4">
          <p className="text-xs leading-5 text-blue-900">{t.localNotice}</p>
        </div>
      </header>

      <nav className="mt-6 flex gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 print:hidden">
        {tabs.map((tabItem) => (
          <button
            key={tabItem.key}
            type="button"
            onClick={() => go(tabItem.key)}
            aria-current={tab === tabItem.key ? "page" : undefined}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              tab === tabItem.key
                ? "bg-blue-700 text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {tabItem.label}
          </button>
        ))}
      </nav>

      <div className="mt-8">
        {tab === "list" && (
          <DraftsList
            briefs={briefs}
            t={t}
            locale={locale}
            onOpen={openDraft}
            onNew={() => newDraft("brief")}
            onDuplicate={duplicate}
            onDelete={remove}
            onImport={addImported}
          />
        )}
        {tab === "mirror" && active && (
          <MirrorMode
            brief={active}
            t={t}
            onChange={(field, value) => updateField(active.id, field, value)}
            onFinish={() => go("brief")}
          />
        )}
        {tab === "brief" && active && (
          <BriefMode
            brief={active}
            t={t}
            onChange={(field, value) => updateField(active.id, field, value)}
            onBack={() => go("list")}
          />
        )}
      </div>
    </div>
  );
}
