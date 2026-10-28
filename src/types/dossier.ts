export type { AppTheme } from '../utils/theme';

export type HistoricalPeriod = 
  | 'todos'
  | '1905-1917' // Revolução Russa e queda czarista
  | '1917-1924' // Governo de Lenin e Guerra Civil
  | '1924-1953' // Governo de Stalin e Grande Terror
  | '1953-1964' // Desestalinização e Kruschev
  | '1964-1982' // Era Brejnev e Estagnação
  | '1985-1991' // Era Gorbachev e Dissolução
  | 'internacional'; // Bloco e Guerra Fria

export type PrimarySourceDocumentType = 
  | 'Tratado Diplomático' 
  | 'Protocolo Secreto' 
  | 'Decreto / Ordem' 
  | 'Telegrama Oficial' 
  | 'Relatório de Inteligência' 
  | 'Documento Nazista-Soviético' 
  | 'Estudo Acadêmico Pari' 
  | 'Telegrama de Comando' 
  | 'Relatório Administrativo Militar' 
  | 'Resolução Política / Registros Militares' 
  | 'Ordem Operacional Secreta' 
  | 'Resolução Política de Cúpula' 
  | 'Listas Nominais de Condenação' 
  | 'Circular Secreta Partidária' 
  | string;

export interface PrimarySource {
  title: string;
  institution: string; // Ex: Library of Congress, Wilson Center, Yale Avalon, NARA, Bundesarchiv, GHDI, Hoover Institution, Yale Annals of Communism
  documentType: PrimarySourceDocumentType;
  year: string;
  archiveReference: string; // Ex: NARA Record Group 242, Yale Avalon Doc #1939-08-23, LoC Revelations Box 4
  url?: string;
  excerptOriginal?: string; // Trecho original
  transcriptionPt: string; // Tradução / transcrição contextualizada
  abntCitation: string;
  chicagoCitation: string;
  relatedHistorians?: string[]; // Ex: ['Anne Applebaum', 'Oleg Khlevniuk']
}

export interface HistorianProfile {
  id: string;
  name: string;
  institution: string;
  expertise: string;
  keyWork: string;
  year: string;
  contribution: string;
  dossierTopicIds: number[];
  quote: string;
}

export interface HistoricalArchiveRepository {
  id: string;
  name: string;
  institution: string;
  focus: string;
  description: string;
  notableCollections: string[];
  url: string;
  relatedTopicIds: number[];
}

export interface DossierTopic {
  id: number;
  categoryNumber: string; // Ex: '01', '02', ..., '20'
  title: string;
  category: string;
  period: HistoricalPeriod;
  periodLabel: string;
  tagline: string;
  summary: string;
  mainSubjects: string[];
  historicalContext: string;
  academicConsensus: string;
  keyActors: string[];
  historiansInvolved: string[]; // Nomes dos pesquisadores de referência
  primarySources: PrimarySource[];
  historicalImpact: string;
  quote?: {
    text: string;
    author: string;
    context: string;
  };
}

export interface ScholarlyCitation {
  author: string;
  work: string;
  year: string;
  pageOrDoc?: string;
  quote: string;
  historicalAnalysis: string;
}

export interface ChronologyMilestone {
  date: string;
  event: string;
  significance: string;
}

export interface DetailedHistoricalEpisode {
  title: string;
  location: string;
  narrative: string;
  eyewitnessOrDocQuote?: string;
  quoteAuthor?: string;
}

export interface AcademicEssay {
  topicId: number;
  title: string;
  subtitle: string;
  authorCatedra: string;
  estimatedReadingMinutes: number;
  wordCount: number;
  epigraph?: {
    text: string;
    author: string;
    work: string;
  };
  narrativeOverview: string; // I. Síntese Geral e Antecedentes Estruturais
  historicalDevelopment: string; // II. O Que Aconteceu: Narrativa Cronológica e Dinâmica dos Eventos
  detailedChronology?: ChronologyMilestone[]; // Cronologia Passo a Passo com Datas e Eventos
  detailedEpisodes?: DetailedHistoricalEpisode[]; // Episódios e Relatos Históricos em Detalhes
  institutionalAndStateMechanisms: string; // III. Mecanismos Institucionais, Decretos e Aparato Coercitivo
  historiographicalDebate: string; // IV. Debate Historiográfico e Confronto Crítico de Fontes
  scholarlyQuotes: ScholarlyCitation[]; // Citações no texto dos principais estudiosos com análise
  archivalCorpus: {
    archiveName: string;
    fondCode: string;
    description: string;
  }[]; // V. Fundos Arquivísticos e Documentação Probatória
  concludingAssessment: string; // VI. Conclusão e Balanço Histórico
  bibliographicReferences: string[]; // Referências Bibliográficas Acadêmicas
}

export interface ResearchNote {
  topicId: number;
  savedAt: string;
  userNotes?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  topicId: number;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceDoc: string;
  historianRef?: string;
}

export interface HistoricalCuriosity {
  id: number;
  shortLabel: string; // Rótulo compacto para o setor da roleta
  title: string;
  category: 'Cotidiano Bizarro' | 'Diplomacia Secreta' | 'Repressão & KGB' | 'Propaganda & Culto' | 'Ciência & Espionagem' | 'Guerra & Fomes';
  periodLabel: string;
  year: string;
  teaser: string;
  fullStory: string; // A narrativa histórica completa da curiosidade
  shockFact: string; // O dado ou fato mais estarrecedor comprovado em arquivo
  archivalSource: string;
  historianReference: string;
  relatedTopicId: number; // Link direto para o Dossiê Temático completo correspondente
}

// ============================================================================
// PADRÃO EDITORIAL OBRIGATÓRIO (7 SEÇÕES CANÔNICAS)
// ============================================================================

export interface CanonicalIdentificacao {
  nomeAcontecimento: string;
  dataELocalizacao: {
    dataExata: string;
    calendarioNotas?: string; // Ex: Notação Calendário Juliano (Velho Estilo) vs Gregoriano (Novo Estilo)
    localizacaoPrecisa: string;
    teatroOperacoes?: string;
  };
  governoEResponsaveis: {
    regimeVigente: string;
    chefesDeEstadoEGoverno: string[];
    orgaosExecutoresDiretos: string[];
    responsaveisOperacionais: string[];
  };
}

export interface CanonicalContextoHistorico {
  situacaoAnterior: string;
  causasPoliticas: string;
  causasEconomicas: string;
  causasSociais: string;
}

export interface CanonicalCronologiaItem {
  dataExata: string;
  acontecimento: string;
  personagensEInstituicoes: string;
  decisoesTomadas: string;
}

export interface CanonicalNarrativaCronologica {
  acontecimentosEmOrdem: CanonicalCronologiaItem[];
  sinteseNarrativaGeral: string;
}

export interface CanonicalDocumentoOriginal {
  titulo: string;
  fundoArquivistico: string; // Ex: RGASPI f. 17, op. 162, d. 27
  instituicaoGuarda: string;
  descricaoConteudo: string;
  autenticidadeEStatus: string;
}

export interface CanonicalRegistroVisual {
  registroOuFoto: string;
  acervoOrigem: string;
  anoEIdentificador: string;
  significadoProbatório: string;
}

export interface CanonicalTestemunho {
  testemunha: string;
  funcaoOrigem: string;
  trechoDepoimento: string;
  referenciaVerificada: string;
}

export interface CanonicalDecretoCorrespondencia {
  codigoOuNumero: string;
  dataEmissao: string;
  orgaoEmissor: string;
  teorDispositivo: string;
  localizacaoArquivo: string;
}

export interface CanonicalDocumentosEvidencias {
  documentosOriginais: CanonicalDocumentoOriginal[];
  fotografiasERegistros: CanonicalRegistroVisual[];
  testemunhos: CanonicalTestemunho[];
  decretosECorrespondencias: CanonicalDecretoCorrespondencia[];
}

export interface CanonicalResponsavelInstitucional {
  agenteOuOrgao: string;
  funcaoCargo: string;
  responsabilidadeEspecifica: string;
}

export interface CanonicalResponsabilidadesConsequencias {
  responsaveisPoliticosEInstitucionais: CanonicalResponsavelInstitucional[];
  vitimasEImpactos: {
    estimativasQuantitativas: string;
    impactosDemograficosEHumanos: string;
    impactosEconomicos: string;
  };
  consequenciasImediatas: string;
  consequenciasLongoPrazo: string;
}

export interface CanonicalCorrenteHistoriografica {
  correnteEscola: string; // Ex: "Escola Totalitária", "Escola Revisionista / Social", "Escola Pós-Abertura dos Arquivos (1991+)"
  principaisAutores: string[];
  teseCentral: string;
  antiteseCritica: string;
}

export interface CanonicalDebateHistoriografico {
  interpretacoesDiferentes: CanonicalCorrenteHistoriografica[];
  consensosAcademicos: string;
  controversiasELimitacoesDasFontes: string; // Ex: Acesso a arquivos confidenciais do FSB, expurgos de documentos, desinformação
}

export interface CanonicalCitacaoVerificada {
  trechoLiteral: string;
  autor: string;
  obra: string;
  edicaoEditoraAno: string;
  paginaExata: string;
  analiseContextual: string;
}

export type CanonicalTipoFonte = 
  | 'Monografia' 
  | 'Coletânea Documental' 
  | 'Artigo Periódico' 
  | 'Fundo Arquivístico' 
  | 'Capítulo de Livro' 
  | 'Artigo Científico' 
  | string;

export interface CanonicalReferenciaBibliografica {
  entradaAbnt: string;
  entradaChicago: string;
  tipoFonte: CanonicalTipoFonte;
  isbnOuReferencia?: string;
}

export interface StandardEditorialDossier {
  topicId: number;
  // 1. Identificação
  identificacao: CanonicalIdentificacao;
  // 2. Contexto histórico
  contextoHistorico: CanonicalContextoHistorico;
  // 3. Narrativa cronológica
  narrativaCronologica: CanonicalNarrativaCronologica;
  // 4. Documentos e evidências
  documentosEEvidencias: CanonicalDocumentosEvidencias;
  // 5. Responsabilidades e consequências
  responsabilidadesEConsequencias: CanonicalResponsabilidadesConsequencias;
  // 6. Debate historiográfico
  debateHistoriografico: CanonicalDebateHistoriografico;
  // 7. Citações verificadas
  citacoesVerificadas: CanonicalCitacaoVerificada[];
  // 8. Bibliografia
  bibliografia: CanonicalReferenciaBibliografica[];
}

