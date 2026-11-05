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
    chapterCount: 12,
    status: 'concluido',
    badgeLabel: '12 Capítulos Concluídos',
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
  },
  {
    id: 'colecao-4',
    romanNumeral: 'IV',
    title: 'História da Ditadura Militar BR',
    shortTitle: 'Ditadura Militar BR',
    themeCategory: 'História do Brasil Contemporâneo, Regimes Militares e Memória',
    subtitle: 'O Golpe de 1964, Atos Institucionais, Repressão, Resistência, Abertura e Anistia (1964–1985)',
    description: 'Coleção futura planejada para investigação exaustiva da Ditadura Militar no Brasil, órgãos de segurança (DOI-CODI, SNI), movimentos de resistência, produção cultural e processo de redemocratização.',
    chapterCount: 15,
    status: 'em_breve',
    badgeLabel: 'Em Breve (Futuro)',
    chronologyRange: '1964 – 1985',
    accentColor: '#15803D', // Emerald/Green
    tags: ['Golpe de 1964', 'Atos Institucionais', 'DOI-CODI', 'Resistência', 'Anistia', 'Redemocratização']
  }
];

export const getCollectionById = (id: CollectionId): CollectionMeta => {
  return COLLECTIONS_REGISTRY.find(c => c.id === id) || COLLECTIONS_REGISTRY[0];
};
