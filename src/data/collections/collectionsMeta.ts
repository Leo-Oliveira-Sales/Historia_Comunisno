import { CollectionMeta, CollectionId } from '../../types/collection';

export const COLLECTIONS_REGISTRY: CollectionMeta[] = [
  {
    id: 'colecao-1',
    romanNumeral: 'I',
    title: 'História da União Soviética',
    shortTitle: 'União Soviética URSS',
    themeCategory: 'Historiografia Soviética e Documentos Primários',
    subtitle: 'Revolução Russa, Lenin, Stalin, Sociedade Soviética, Guerra Fria e Colapso (1905–1991)',
    description: 'Acervo acadêmico integral com 19 capítulos exaustivos, documentos diplomáticos primários, tratados desclassificados e debate historiográfico de arquivos de Moscou e Washington.',
    chapterCount: 19,
    status: 'concluido',
    badgeLabel: '19 Capítulos Concluídos',
    chronologyRange: '1905 – 1991',
    accentColor: '#DC2626', // Red
    tags: ['Lenin', 'Stalin', 'Grande Terror', 'Guerra Fria', 'Gulag', 'Arquivos Secretos']
  },
  {
    id: 'colecao-2',
    romanNumeral: 'II',
    title: 'História das Ideologias Políticas',
    shortTitle: 'Ideologias Políticas',
    themeCategory: 'Pensamento Político, Filosofia e Regimes',
    subtitle: 'Iluminismo, Liberalismo, Socialismo, Comunismo, Anarquismo, Fascismo, Nazismo e Social-Democracia',
    description: 'Investigação profunda das matrizes ideológicas modernas com 11 capítulos didáticos e catálogo rigoroso dos 40 maiores especialistas e pesquisadores de referência mundial.',
    chapterCount: 11,
    status: 'ativo',
    badgeLabel: '11 Capítulos Didáticos',
    chronologyRange: 'Século XVIII – Contemporaneidade',
    accentColor: '#D97706', // Amber
    tags: ['Iluminismo', 'Liberalismo', 'Marxismo', 'Anarquismo', 'Fascismo', 'Nazismo', 'Social-Democracia', '40 Especialistas']
  },
  {
    id: 'colecao-3',
    romanNumeral: 'III',
    title: 'História das Guerras Mundiais',
    shortTitle: 'Guerras Mundiais',
    themeCategory: 'Conflitos Bélicos, Geopolítica e Destruição Total',
    subtitle: 'Primeira e Segunda Guerras Mundiais: Origens, Frentes de Batalha, Mobilização e Holocausto (1914–1945)',
    description: 'Coleção futura planejada para análise detalhada dos dois grandes conflitos globais, diplomacia de crise, campanhas militares e reorganização geopolítica do século XX.',
    chapterCount: 10,
    status: 'em_breve',
    badgeLabel: 'Em Breve (Futuro)',
    chronologyRange: '1914 – 1945',
    accentColor: '#4B5563', // Slate/Gray
    tags: ['Primeira Guerra', 'Segunda Guerra', 'Geopolítica Militar', 'Batalhas', 'Diplomacia Global']
  }
];

export const getCollectionById = (id: CollectionId): CollectionMeta => {
  return COLLECTIONS_REGISTRY.find(c => c.id === id) || COLLECTIONS_REGISTRY[0];
};
