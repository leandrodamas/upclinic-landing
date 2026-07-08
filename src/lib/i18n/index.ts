// i18n leve para a landing (SvelteKit) — detecção por navegador + seletor manual.
// Fallback automático para pt-BR: qualquer chave ausente cai no português (nada quebra).
import { writable, derived } from 'svelte/store';
import { pt } from './pt';
import { en } from './en';
import { es } from './es';

export type Locale = 'pt' | 'en' | 'es';
export const SUPPORTED: Locale[] = ['pt', 'en', 'es'];

const dictionaries: Record<Locale, any> = { pt, en, es };

export const LANGS: { code: Locale; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' }
];

const STORAGE_KEY = 'upclinic_lang';

export const locale = writable<Locale>('pt');

export function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'pt';
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch {}
  const nav = (navigator.language || navigator.languages?.[0] || 'pt').toLowerCase();
  if (nav.startsWith('pt')) return 'pt';
  if (nav.startsWith('es')) return 'es';
  if (nav.startsWith('en')) return 'en';
  // Idiomas sem tradução dedicada → inglês (mercado internacional)
  return 'en';
}

export function initLocale(): void {
  const l = detectLocale();
  locale.set(l);
  if (typeof document !== 'undefined') document.documentElement.lang = l;
}

export function setLocale(l: Locale): void {
  locale.set(l);
  try {
    if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, l);
  } catch {}
  if (typeof document !== 'undefined') document.documentElement.lang = l;
}

function resolve(obj: any, key: string): any {
  return key.split('.').reduce((o, k) => (o != null && o[k] != null ? o[k] : undefined), obj);
}

// $t('a.b.c') → string | array | qualquer valor do dicionário, com fallback para pt.
export const t = derived(locale, ($locale) => (key: string): any => {
  const val = resolve(dictionaries[$locale], key);
  if (val !== undefined) return val;
  const fallback = resolve(dictionaries.pt, key);
  return fallback !== undefined ? fallback : key;
});
