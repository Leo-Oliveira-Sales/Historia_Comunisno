export type AppTheme = 'preto' | 'branco' | 'bege';

export interface ThemeOption {
  id: AppTheme;
  label: string;
  shortLabel: string;
  description: string;
  accentColor: string;
  bgPreview: string;
  borderPreview: string;
  textPreview: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'preto',
    label: 'Preto (Arquivo Noturno)',
    shortLabel: 'Preto',
    description: 'Estética de arquivo noturno em obsidian e carvão escuro',
    accentColor: '#f59e0b',
    bgPreview: '#121214',
    borderPreview: '#2e2e38',
    textPreview: '#f5f5f4',
  },
  {
    id: 'branco',
    label: 'Branco & Cinza (Sombras Elevadas)',
    shortLabel: 'Branco',
    description: 'Mescla de branco e cinzas claros com sombras acentuadas em cards e botões',
    accentColor: '#0f172a',
    bgPreview: '#edf1f7',
    borderPreview: '#cbd5e1',
    textPreview: '#0f172a',
  },
  {
    id: 'bege',
    label: 'Bege Vintage (Livro Antigo)',
    shortLabel: 'Vintage',
    description: 'Estilo de documento e encadernação antiga com papel envelhecido e tinta sépia',
    accentColor: '#881919',
    bgPreview: '#f2ecd9',
    borderPreview: '#c4af87',
    textPreview: '#24180d',
  },
];

const THEME_STORAGE_KEY = 'dossier_sovietico_theme';

export function getSavedTheme(): AppTheme {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'preto' || saved === 'branco' || saved === 'bege') {
      return saved;
    }
  } catch {
    // ignore
  }
  return 'preto';
}

export function saveTheme(theme: AppTheme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

export function applyTheme(theme: AppTheme): void {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.remove('theme-preto', 'theme-branco', 'theme-bege');
    root.classList.add(`theme-${theme}`);
  }
}
