export type AppFontSize = 'normal' | 'medio' | 'grande' | 'extra-grande';

export interface FontSizeOption {
  id: AppFontSize;
  label: string;
  shortLabel: string;
  scalePercent: string;
}

export const FONT_SIZE_OPTIONS: FontSizeOption[] = [
  { id: 'normal', label: 'Texto Normal (100%)', shortLabel: 'A', scalePercent: '100%' },
  { id: 'medio', label: 'Texto Médio (115%)', shortLabel: 'A+', scalePercent: '115%' },
  { id: 'grande', label: 'Texto Grande (130%)', shortLabel: 'A++', scalePercent: '130%' },
  { id: 'extra-grande', label: 'Texto Extra (145%)', shortLabel: 'A+++', scalePercent: '145%' },
];

const FONT_SIZE_STORAGE_KEY = 'dossier_sovietico_font_size';

export function getSavedFontSize(): AppFontSize {
  try {
    const saved = localStorage.getItem(FONT_SIZE_STORAGE_KEY);
    if (saved === 'normal' || saved === 'medio' || saved === 'grande' || saved === 'extra-grande') {
      return saved;
    }
  } catch {
    // ignore
  }
  return 'normal';
}

export function saveFontSize(size: AppFontSize): void {
  try {
    localStorage.setItem(FONT_SIZE_STORAGE_KEY, size);
  } catch {
    // ignore
  }
}

export function applyFontSize(size: AppFontSize): void {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    root.setAttribute('data-font-size', size);
  }
}
