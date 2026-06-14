// Minimal promise-based IndexedDB store for local briefs (G3).
// No external dependency, no network. All data stays in the browser; clearing
// browser data deletes it. See PLAN_MODES_AND_ACCOUNTS.md.

import { type Brief, coerceBrief } from "./types";

const DB_NAME = "invention-brief-ai";
const DB_VERSION = 1;
const STORE = "briefs";

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof indexedDB !== "undefined";
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function tx(
  db: IDBDatabase,
  mode: IDBTransactionMode,
): IDBObjectStore {
  return db.transaction(STORE, mode).objectStore(STORE);
}

export async function listBriefs(): Promise<Brief[]> {
  if (!isBrowser()) return [];
  const db = await openDb();
  try {
    const briefs = await new Promise<Brief[]>((resolve, reject) => {
      const request = tx(db, "readonly").getAll();
      request.onsuccess = () => resolve(request.result as Brief[]);
      request.onerror = () => reject(request.error);
    });
    return briefs
      .map(coerceBrief)
      .filter((b): b is Brief => b !== null)
      .sort((a, b) => b.updatedAt - a.updatedAt);
  } finally {
    db.close();
  }
}

export async function saveBrief(brief: Brief): Promise<void> {
  if (!isBrowser()) return;
  const clean = coerceBrief(brief);
  if (!clean) return;
  const db = await openDb();
  try {
    await new Promise<void>((resolve, reject) => {
      const request = tx(db, "readwrite").put(clean);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } finally {
    db.close();
  }
}

export async function deleteBrief(id: string): Promise<void> {
  if (!isBrowser()) return;
  const db = await openDb();
  try {
    await new Promise<void>((resolve, reject) => {
      const request = tx(db, "readwrite").delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } finally {
    db.close();
  }
}

export async function clearAll(): Promise<void> {
  if (!isBrowser()) return;
  const db = await openDb();
  try {
    await new Promise<void>((resolve, reject) => {
      const request = tx(db, "readwrite").clear();
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } finally {
    db.close();
  }
}
