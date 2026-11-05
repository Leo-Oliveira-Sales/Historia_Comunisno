export type CollectionId = 'colecao-1' | 'colecao-2' | 'colecao-3';

export type CollectionStatus = 'concluido' | 'ativo' | 'em_breve';

export interface CollectionMeta {
  id: CollectionId;
  romanNumeral: 'I' | 'II' | 'III';
  title: string;
  shortTitle: string;
  themeCategory: string;
  subtitle: string;
  description: string;
  chapterCount: number;
  status: CollectionStatus;
  badgeLabel: string;
  chronologyRange: string;
  accentColor: string; // Tailwind color class or hex
  tags: string[];
}
