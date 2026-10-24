import React, { useState } from 'react';
import { DossierTopic } from '../types/dossier';
import { ACADEMIC_ESSAYS } from '../data/academicEssaysDatabase';
import { CHRONOLOGIES_BY_TOPIC, DETAILED_EPISODES_BY_TOPIC } from '../data/detailedHistoricalEpisodes';
import { getCanonicalEditorialDossier } from '../data/canonicalEditorialDatabase';
import { playStampSound, playTypewriterClack } from '../utils/audio';
import { 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  Bookmark, 
  BookmarkCheck, 
  FileText, 
  BookMarked, 
  ShieldCheck, 
  Users, 
  Building2,
  GraduationCap,
  Clock,
  BookOpen,
  Share2,
  Quote,
  Sparkles,
  Archive,
  AlignLeft,
  Calendar,
  MapPin,
  Flame,
  ScrollText,
  CheckCircle2,
  ListOrdered,
  Scale,
  Award,
  AlertTriangle,
  History,
  Layers,
  FileSpreadsheet
} from 'lucide-react';

interface DossierModalProps {
  topic: DossierTopic;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (topicId: number) => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({
  topic,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  const [activeTab, setActiveTab] = useState<'canonical' | 'essay' | 'stories' | 'documents' | 'context' | 'citations'>('canonical');
  const [activeCanonicalSection, setActiveCanonicalSection] = useState<number>(1);
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');

  const essay = ACADEMIC_ESSAYS[topic.id];
  const chronologies = CHRONOLOGIES_BY_TOPIC[topic.id] || [];
  const detailedEpisodes = DETAILED_EPISODES_BY_TOPIC[topic.id] || [];
  const canonicalDossier = getCanonicalEditorialDossier(topic.id);


  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    playTypewriterClack();
    setCopiedCitation(label);
    setTimeout(() => setCopiedCitation(null), 2500);
  };

  const copyFullEssay = () => {
    if (!essay) return;
    let fullText = `==========================================================\n`;
    fullText += `${essay.title.toUpperCase()}\n`;
    fullText += `${essay.subtitle}\n`;
    fullText += `${essay.authorCatedra}\n`;
    fullText += `Referência: Dossiê Soviético - Registro nº ${topic.categoryNumber}\n`;
    fullText += `==========================================================\n\n`;

    if (essay.epigraph) {
      fullText += `EPÍGRAFE:\n"${essay.epigraph.text}"\n— ${essay.epigraph.author}, ${essay.epigraph.work}\n\n`;
    }

    fullText += `I. SÍNTESE GERAL E ANTECEDENTES ESTRUTURAIS\n${essay.narrativeOverview}\n\n`;
    fullText += `II. A HISTÓRIA DOS ACONTECIMENTOS: NARRATIVA CRONOLÓGICA DETALHADA\n${essay.historicalDevelopment}\n\n`;

    if (chronologies.length > 0) {
      fullText += `CRONOLOGIA PASSO A PASSO DOS FATOS:\n`;
      chronologies.forEach((c) => {
        fullText += `- [${c.date}] ${c.event}: ${c.significance}\n`;
      });
      fullText += `\n`;
    }

    if (detailedEpisodes.length > 0) {
      fullText += `CRÔNICAS HISTÓRICAS E RELATOS DOCUMENTADOS:\n`;
      detailedEpisodes.forEach((ep, i) => {
        fullText += `[Episódio ${i + 1}] ${ep.title} (${ep.location})\n${ep.narrative}\nCitação: "${ep.eyewitnessOrDocQuote}" — ${ep.quoteAuthor}\n\n`;
      });
    }

    fullText += `III. MECANISMOS INSTITUCIONAIS, DECRETOS E APARATO COERCITIVO\n${essay.institutionalAndStateMechanisms}\n\n`;
    fullText += `IV. DEBATE HISTORIOGRÁFICO E CONFRONTO CRÍTICO DE FONTES\n${essay.historiographicalDebate}\n\n`;

    fullText += `V. CITAÇÕES DOS PRINCIPAIS PESQUISADORES NO TEXTO:\n`;
    essay.scholarlyQuotes.forEach((sq, i) => {
      fullText += `[${i + 1}] ${sq.author} (${sq.year}, ${sq.pageOrDoc}):\n"${sq.quote}"\nAnálise: ${sq.historicalAnalysis}\n\n`;
    });

    fullText += `VI. FUNDOS ARQUIVÍSTICOS E DOCUMENTAÇÃO PROBATÓRIA:\n`;
    essay.archivalCorpus.forEach((arc) => {
      fullText += `- ${arc.archiveName} | ${arc.fondCode}\n  ${arc.description}\n`;
    });
    fullText += `\n`;

    fullText += `VII. CONCLUSÃO E BALANÇO HISTÓRICO\n${essay.concludingAssessment}\n\n`;

    fullText += `VIII. REFERÊNCIAS BIBLIOGRÁFICAS:\n`;
    essay.bibliographicReferences.forEach((ref) => {
      fullText += `- ${ref}\n`;
    });

    copyToClipboard(fullText, 'full_essay');
  };

  const copyCanonicalDossier = () => {
    if (!canonicalDossier) return;
    let text = `==========================================================\n`;
    text += `PADRÃO EDITORIAL OBRIGATÓRIO (8 SEÇÕES CANÔNICAS)\n`;
    text += `${canonicalDossier.identificacao.nomeAcontecimento.toUpperCase()}\n`;
    text += `Data: ${canonicalDossier.identificacao.dataELocalizacao.dataExata}\n`;
    text += `Local: ${canonicalDossier.identificacao.dataELocalizacao.localizacaoPrecisa}\n`;
    text += `Registro Oficial nº ${topic.categoryNumber} · Período: ${topic.periodLabel}\n`;
    text += `==========================================================\n\n`;

    // 1. Identificação
    text += `1. IDENTIFICAÇÃO\n`;
    text += `- Nome do Acontecimento: ${canonicalDossier.identificacao.nomeAcontecimento}\n`;
    text += `- Data e Localização: ${canonicalDossier.identificacao.dataELocalizacao.dataExata} (${canonicalDossier.identificacao.dataELocalizacao.localizacaoPrecisa})\n`;
    if (canonicalDossier.identificacao.dataELocalizacao.calendarioNotas) {
      text += `  Notas de Calendário: ${canonicalDossier.identificacao.dataELocalizacao.calendarioNotas}\n`;
    }
    if (canonicalDossier.identificacao.dataELocalizacao.teatroOperacoes) {
      text += `  Teatro de Operações: ${canonicalDossier.identificacao.dataELocalizacao.teatroOperacoes}\n`;
    }
    text += `- Governo e Responsáveis:\n`;
    text += `  Regime: ${canonicalDossier.identificacao.governoEResponsaveis.regimeVigente}\n`;
    text += `  Chefes de Estado e Governo: ${canonicalDossier.identificacao.governoEResponsaveis.chefesDeEstadoEGoverno.join(', ')}\n`;
    text += `  Órgãos Executores Diretos: ${canonicalDossier.identificacao.governoEResponsaveis.orgaosExecutoresDiretos.join(', ')}\n`;
    text += `  Comandos Operacionais: ${canonicalDossier.identificacao.governoEResponsaveis.responsaveisOperacionais.join(', ')}\n\n`;

    // 2. Contexto Histórico
    text += `2. CONTEXTO HISTÓRICO\n`;
    text += `a) Situação Anterior:\n${canonicalDossier.contextoHistorico.situacaoAnterior}\n\n`;
    text += `b) Causas Políticas:\n${canonicalDossier.contextoHistorico.causasPoliticas}\n\n`;
    text += `c) Causas Econômicas:\n${canonicalDossier.contextoHistorico.causasEconomicas}\n\n`;
    text += `d) Causas Sociais:\n${canonicalDossier.contextoHistorico.causasSociais}\n\n`;

    // 3. Narrativa Cronológica
    text += `3. NARRATIVA CRONOLÓGICA (FATOS EM ORDEM ESTRITA)\n`;
    text += `Síntese Geral: ${canonicalDossier.narrativaCronologica.sinteseNarrativaGeral}\n\n`;
    canonicalDossier.narrativaCronologica.acontecimentosEmOrdem.forEach((item, idx) => {
      text += `[${item.dataExata}] ${item.acontecimento}\n`;
      text += `  Personagens e Instituições: ${item.personagensEInstituicoes}\n`;
      text += `  Decisões Tomadas: ${item.decisoesTomadas}\n\n`;
    });

    // 4. Documentos e Evidências
    text += `4. DOCUMENTOS E EVIDÊNCIAS\n`;
    text += `a) Documentos Originais Certificados:\n`;
    canonicalDossier.documentosEEvidencias.documentosOriginais.forEach(doc => {
      text += `- ${doc.titulo}\n  Fundo Arquivístico: ${doc.fundoArquivistico} (${doc.instituicaoGuarda})\n  Conteúdo: ${doc.descricaoConteudo}\n  Status: ${doc.autenticidadeEStatus}\n\n`;
    });
    text += `b) Registros e Fotografias:\n`;
    canonicalDossier.documentosEEvidencias.fotografiasERegistros.forEach(reg => {
      text += `- ${reg.registroOuFoto} | Acervo: ${reg.acervoOrigem} (${reg.anoEIdentificador})\n  Significado: ${reg.significadoProbatório}\n\n`;
    });
    text += `c) Testemunhos Documentados:\n`;
    canonicalDossier.documentosEEvidencias.testemunhos.forEach(t => {
      text += `- ${t.testemunha} (${t.funcaoOrigem}):\n  "${t.trechoDepoimento}"\n  Ref: ${t.referenciaVerificada}\n\n`;
    });
    text += `d) Decretos e Correspondências:\n`;
    canonicalDossier.documentosEEvidencias.decretosECorrespondencias.forEach(dec => {
      text += `- ${dec.codigoOuNumero} (${dec.dataEmissao}) - ${dec.orgaoEmissor}\n  Teor: ${dec.teorDispositivo}\n  Arquivo: ${dec.localizacaoArquivo}\n\n`;
    });

    // 5. Responsabilidades e Consequências
    text += `5. RESPONSABILIDADES E CONSEQUÊNCIAS\n`;
    text += `a) Responsáveis Políticos e Institucionais:\n`;
    canonicalDossier.responsabilidadesEConsequencias.responsaveisPoliticosEInstitucionais.forEach(resp => {
      text += `- ${resp.agenteOuOrgao} (${resp.funcaoCargo}): ${resp.responsabilidadeEspecifica}\n`;
    });
    text += `\nb) Vítimas e Impactos:\n`;
    text += `- Estimativas Quantitativas: ${canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.estimativasQuantitativas}\n`;
    text += `- Impacto Demográfico e Humano: ${canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.impactosDemograficosEHumanos}\n`;
    text += `- Impacto Econômico: ${canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.impactosEconomicos}\n\n`;
    text += `c) Consequências Imediatas:\n${canonicalDossier.responsabilidadesEConsequencias.consequenciasImediatas}\n\n`;
    text += `d) Consequências a Longo Prazo:\n${canonicalDossier.responsabilidadesEConsequencias.consequenciasLongoPrazo}\n\n`;

    // 6. Debate Historiográfico
    text += `6. DEBATE HISTORIOGRÁFICO\n`;
    canonicalDossier.debateHistoriografico.interpretacoesDiferentes.forEach(inter => {
      text += `[${inter.correnteEscola}]\n`;
      text += `  Autores: ${inter.principaisAutores.join(', ')}\n`;
      text += `  Tese Central: ${inter.teseCentral}\n`;
      text += `  Antítese / Limitações: ${inter.antiteseCritica}\n\n`;
    });
    text += `Consensos Acadêmicos:\n${canonicalDossier.debateHistoriografico.consensosAcademicos}\n\n`;
    text += `Controvérsias e Limitações das Fontes:\n${canonicalDossier.debateHistoriografico.controversiasELimitacoesDasFontes}\n\n`;

    // 7. Citações Verificadas
    text += `7. CITAÇÕES VERIFICADAS\n`;
    canonicalDossier.citacoesVerificadas.forEach((cit, idx) => {
      text += `[${idx + 1}] "${cit.trechoLiteral}"\n`;
      text += `  Autor: ${cit.autor} | Obra: ${cit.obra}\n`;
      text += `  Edição: ${cit.edicaoEditoraAno} | Página: ${cit.paginaExata}\n`;
      text += `  Análise Contextual: ${cit.analiseContextual}\n\n`;
    });

    // 8. Bibliografia
    text += `8. BIBLIOGRAFIA\n`;
    canonicalDossier.bibliografia.forEach(b => {
      text += `- [${b.tipoFonte}] ABNT: ${b.entradaAbnt}\n  Chicago: ${b.entradaChicago}\n`;
      if (b.isbnOuReferencia) text += `  Identificador: ${b.isbnOuReferencia}\n`;
    });

    copyToClipboard(text, 'canonical_full');
  };


  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-sm leading-relaxed';
      case 'lg':
        return 'text-lg leading-loose';
      case 'base':
      default:
        return 'text-base leading-relaxed';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/90 backdrop-blur-sm overflow-hidden">
      <div 
        className="bg-[#18181c] border-0 sm:border sm:border-stone-700/80 rounded-none sm:rounded-xl w-full max-w-5xl h-[100dvh] sm:h-[92vh] sm:max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Archival Folder Header */}
        <div className="bg-[#121215] border-b border-stone-800 p-3 sm:p-5 lg:p-6 flex items-start justify-between gap-2.5 sm:gap-3 shrink-0">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              <span className="dossier-stamp-red text-[9px] sm:text-xs">DESCLASSIFICADO</span>
              <span className="dossier-stamp-amber text-[9px] sm:text-xs hidden xs:inline">ENSAIO ACADÊMICO</span>
              <span className="text-[10px] sm:text-xs font-mono text-stone-400 truncate max-w-[200px] xs:max-w-none">
                REGISTRO Nº {topic.categoryNumber} · {topic.periodLabel}
              </span>
            </div>

            <h2 className="text-base sm:text-xl lg:text-2xl font-display font-bold text-stone-100 tracking-tight leading-snug break-words">
              {topic.title}
            </h2>

            <p className="text-xs sm:text-sm text-stone-400 font-serif line-clamp-1 sm:line-clamp-none">
              {topic.tagline}
            </p>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => {
                playStampSound();
                onToggleSave(topic.id);
              }}
              className={`p-2 min-h-[44px] min-w-[44px] rounded-lg border transition-colors flex items-center justify-center gap-1.5 text-xs font-medium ${
                isSaved
                  ? 'bg-amber-950/60 border-amber-600/60 text-amber-300'
                  : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:bg-stone-700'
              }`}
              title={isSaved ? 'Remover do Caderno' : 'Salvar no Caderno de Pesquisa'}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 text-amber-400" /> : <Bookmark className="w-4 h-4" />}
              <span className="hidden sm:inline">{isSaved ? 'Salvo' : 'Salvar Dossiê'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 min-h-[44px] min-w-[44px] text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Fechar Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Controls with Horizontal Scroll for Mobile */}
        <div className="flex items-center justify-between px-2 sm:px-6 pt-2 sm:pt-3 border-b border-stone-800 bg-[#151518] overflow-x-auto no-scrollbar touch-pan-x shrink-0">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('canonical');
              }}
              className={`px-3 sm:px-4 py-2 min-h-[40px] text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 sm:gap-2 border-b-2 shrink-0 ${
                activeTab === 'canonical'
                  ? 'bg-[#18181c] text-amber-400 border-amber-500 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200 border-transparent'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="sm:hidden">8 Seções Canônicas</span>
              <span className="hidden sm:inline">Padrão Editorial Canônico (8 Seções)</span>
              <span className="px-1.5 py-0.5 text-[9px] bg-amber-500/20 text-amber-300 rounded font-mono border border-amber-500/30 shrink-0">
                Obrigatório
              </span>
            </button>

            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('essay');
              }}
              className={`px-3 sm:px-4 py-2 min-h-[40px] text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 sm:gap-2 border-b-2 shrink-0 ${
                activeTab === 'essay'
                  ? 'bg-[#18181c] text-amber-400 border-amber-500'
                  : 'text-stone-400 hover:text-stone-200 border-transparent'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 shrink-0" />
              <span className="sm:hidden">Ensaio</span>
              <span className="hidden sm:inline">Ensaio Acadêmico Completo</span>
            </button>

            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('stories');
              }}
              className={`px-3 sm:px-4 py-2 min-h-[40px] text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 sm:gap-2 border-b-2 shrink-0 ${
                activeTab === 'stories'
                  ? 'bg-[#18181c] text-amber-400 border-amber-500'
                  : 'text-stone-400 hover:text-stone-200 border-transparent'
              }`}
            >
              <ScrollText className="w-3.5 h-3.5 shrink-0" />
              <span className="sm:hidden">Crônicas ({detailedEpisodes.length})</span>
              <span className="hidden sm:inline">Crônicas & Histórias Detalhadas ({detailedEpisodes.length})</span>
            </button>

            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('documents');
              }}
              className={`px-3 sm:px-4 py-2 min-h-[40px] text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 sm:gap-2 border-b-2 shrink-0 ${
                activeTab === 'documents'
                  ? 'bg-[#18181c] text-amber-400 border-amber-500'
                  : 'text-stone-400 hover:text-stone-200 border-transparent'
              }`}
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span className="sm:hidden">Documentos ({topic.primarySources.length})</span>
              <span className="hidden sm:inline">Documentos Oficiais ({topic.primarySources.length})</span>
            </button>

            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('context');
              }}
              className={`px-3 sm:px-4 py-2 min-h-[40px] text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 sm:gap-2 border-b-2 shrink-0 ${
                activeTab === 'context'
                  ? 'bg-[#18181c] text-amber-400 border-amber-500'
                  : 'text-stone-400 hover:text-stone-200 border-transparent'
              }`}
            >
              <BookMarked className="w-3.5 h-3.5 shrink-0" />
              <span className="sm:hidden">Síntese</span>
              <span className="hidden sm:inline">Síntese & Atores</span>
            </button>

            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('citations');
              }}
              className={`px-3 sm:px-4 py-2 min-h-[40px] text-xs font-semibold rounded-t-lg transition-colors flex items-center gap-1.5 sm:gap-2 border-b-2 shrink-0 ${
                activeTab === 'citations'
                  ? 'bg-[#18181c] text-amber-400 border-amber-500'
                  : 'text-stone-400 hover:text-stone-200 border-transparent'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="sm:hidden">Citações</span>
              <span className="hidden sm:inline">Citações (ABNT / Chicago)</span>
            </button>
          </div>

          {/* Reading Controls for Desktop (Font size selector & Copy full text) */}
          <div className="hidden sm:flex items-center gap-2 pb-1 shrink-0">
            <div className="flex items-center bg-stone-900 border border-stone-800 rounded px-1 py-0.5 text-[11px] font-mono text-stone-400">
              <span className="mr-1 text-[10px] text-stone-500">Fonte:</span>
              <button
                onClick={() => setFontSize('sm')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'sm' ? 'bg-stone-800 text-amber-400 font-bold' : 'hover:text-stone-200'}`}
                title="Fonte Menor"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'base' ? 'bg-stone-800 text-amber-400 font-bold' : 'hover:text-stone-200'}`}
                title="Fonte Padrão"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'lg' ? 'bg-stone-800 text-amber-400 font-bold' : 'hover:text-stone-200'}`}
                title="Fonte Maior"
              >
                A+
              </button>
            </div>

            {activeTab === 'canonical' && (
              <button
                onClick={copyCanonicalDossier}
                className="px-2.5 py-1 bg-amber-950/40 hover:bg-amber-900/60 text-amber-300 text-xs font-mono rounded border border-amber-700/60 flex items-center gap-1.5 transition-colors"
                title="Copiar dossiê no padrão canônico integral de 8 seções"
              >
                {copiedCitation === 'canonical_full' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>8 Seções Copiadas!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                    <span>Copiar Padrão Editorial (8 Seções)</span>
                  </>
                )}
              </button>
            )}

            {activeTab === 'essay' && (
              <button
                onClick={copyFullEssay}
                className="px-2.5 py-1 bg-stone-900 hover:bg-stone-800 text-amber-400 text-xs font-mono rounded border border-stone-800 flex items-center gap-1.5 transition-colors"
                title="Copiar texto acadêmico completo com referências para citação"
              >
                {copiedCitation === 'full_essay' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ensaio Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Ensaio Completo</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Reading Controls Bar (Font Size & Copy on Phone) */}
        <div className="sm:hidden flex items-center justify-between px-3 py-1.5 bg-[#121215] border-b border-stone-800 text-xs shrink-0">
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-stone-400">
            <span className="text-[10px] text-stone-500">Texto:</span>
            <div className="inline-flex rounded border border-stone-800 bg-stone-900 p-0.5">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-0.5 rounded min-w-[28px] min-h-[26px] ${fontSize === 'sm' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-stone-400'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-0.5 rounded min-w-[28px] min-h-[26px] ${fontSize === 'base' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-stone-400'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-0.5 rounded min-w-[28px] min-h-[26px] ${fontSize === 'lg' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-stone-400'}`}
              >
                A+
              </button>
            </div>
          </div>

          {activeTab === 'canonical' && (
            <button
              onClick={copyCanonicalDossier}
              className="px-2.5 py-1 min-h-[30px] bg-amber-950/60 text-amber-300 text-[11px] font-mono rounded border border-amber-700/60 flex items-center gap-1.5 active:scale-95 transition-transform"
            >
              {copiedCitation === 'canonical_full' ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>8 Seções Copiadas!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-amber-400" />
                  <span>Copiar 8 Seções</span>
                </>
              )}
            </button>
          )}

          {activeTab === 'essay' && (
            <button
              onClick={copyFullEssay}
              className="px-2.5 py-1 min-h-[30px] bg-stone-900 text-amber-300 text-[11px] font-mono rounded border border-stone-800 flex items-center gap-1.5 active:scale-95 transition-transform"
            >
              {copiedCitation === 'full_essay' ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Ensaio Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-amber-400" />
                  <span>Copiar Ensaio</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-3 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-[#18181c] overscroll-contain">
          
          {/* TAB: CANONICAL EDITORIAL STANDARD (8 MANDATORY SECTIONS) */}
          {activeTab === 'canonical' && canonicalDossier && (
            <article className="space-y-8 max-w-4xl mx-auto">
              {/* Compliance & Audit Banner */}
              <div className="bg-[#121215] border border-amber-600/40 p-4 sm:p-5 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500/10 border-l border-b border-amber-500/30 px-3 py-1 rounded-bl text-[10px] font-mono text-amber-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AUDITORIA ACADÊMICA CONFORME · 8 CRITÉRIOS</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-950/60 border border-amber-600/40 rounded-lg text-amber-400 shrink-0 mt-0.5">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-serif font-bold text-stone-100 flex items-center gap-2">
                      <span>Padrão Editorial Canônico Obrigatório</span>
                      <span className="text-xs font-mono font-normal text-amber-400/90 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/60">
                        8 Seções Normativas
                      </span>
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed font-sans">
                      Estrutura historiográfica padronizada em conformidade com as diretrizes editoriais acadêmicas: cronologia corrigida com datas exatas, fundos arquivísticos certificados (RGASPI, GARF, AP RF, Yale Avalon, Wilson Center), debate historiográfico tripartite e citações literais verificadas com indicação de página e edição.
                    </p>

                    {/* Criteria Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-mono">
                      <div className="bg-stone-900/90 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>1. Identificação</span>
                      </div>
                      <div className="bg-stone-900/90 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>2. Contexto Histórico</span>
                      </div>
                      <div className="bg-stone-900/90 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>3. Cronologia Exata</span>
                      </div>
                      <div className="bg-stone-900/90 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>4. Arquivos & Provas</span>
                      </div>
                      <div className="bg-stone-900/90 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>5. Responsabilidades</span>
                      </div>
                      <div className="bg-stone-900/90 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>6. Historiografia Tripla</span>
                      </div>
                      <div className="bg-stone-900/90 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>7. Citações c/ Página</span>
                      </div>
                      <div className="bg-stone-900/90 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>8. Bibliografia ABNT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Jump Bar between the 8 Sections */}
              <div className="sticky top-0 z-20 bg-[#151518]/95 backdrop-blur-md p-1.5 sm:p-2 rounded-lg border border-stone-800 flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar shadow-md touch-pan-x">
                <span className="text-[11px] font-mono text-stone-500 mr-1 shrink-0 uppercase tracking-wider hidden md:inline">
                  Ir para:
                </span>
                {[
                  { num: 1, label: '1. Identificação', shortLabel: '1. Id.', target: 'section-1' },
                  { num: 2, label: '2. Contexto', shortLabel: '2. Contexto', target: 'section-2' },
                  { num: 3, label: '3. Cronologia', shortLabel: '3. Crono.', target: 'section-3' },
                  { num: 4, label: '4. Documentos', shortLabel: '4. Docs', target: 'section-4' },
                  { num: 5, label: '5. Responsabilidades', shortLabel: '5. Respon.', target: 'section-5' },
                  { num: 6, label: '6. Historiografia', shortLabel: '6. Hist.', target: 'section-6' },
                  { num: 7, label: '7. Citações', shortLabel: '7. Citações', target: 'section-7' },
                  { num: 8, label: '8. Bibliografia', shortLabel: '8. Biblio.', target: 'section-8' },
                ].map((sec) => (
                  <button
                    key={sec.num}
                    onClick={() => {
                      playTypewriterClack();
                      setActiveCanonicalSection(sec.num);
                      const el = document.getElementById(sec.target);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`px-2.5 py-1.5 min-h-[34px] text-xs font-mono rounded shrink-0 transition-colors flex items-center justify-center ${
                      activeCanonicalSection === sec.num
                        ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50 font-bold'
                        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                    }`}
                  >
                    <span className="sm:hidden">{sec.shortLabel}</span>
                    <span className="hidden sm:inline">{sec.label}</span>
                  </button>
                ))}
              </div>

              {/* ======================================================= */}
              {/* SEÇÃO 1: IDENTIFICAÇÃO */}
              {/* ======================================================= */}
              <section id="section-1" className="scroll-mt-20 bg-[#121215] border border-stone-800 rounded-xl p-3.5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      1
                    </span>
                    <h4 className="text-sm sm:text-base md:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      Identificação do Acontecimento
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      const text = `1. IDENTIFICAÇÃO:\nNome: ${canonicalDossier.identificacao.nomeAcontecimento}\nData: ${canonicalDossier.identificacao.dataELocalizacao.dataExata}\nLocal: ${canonicalDossier.identificacao.dataELocalizacao.localizacaoPrecisa}\nRegime: ${canonicalDossier.identificacao.governoEResponsaveis.regimeVigente}\nLíderes: ${canonicalDossier.identificacao.governoEResponsaveis.chefesDeEstadoEGoverno.join(', ')}`;
                      copyToClipboard(text, 'sec1');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[32px] px-2 py-1 rounded bg-stone-900/60 sm:bg-transparent"
                    title="Copiar Seção 1"
                  >
                    {copiedCitation === 'sec1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">
                      Nome Oficial do Acontecimento
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-300 mt-1">
                      {canonicalDossier.identificacao.nomeAcontecimento}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Data e Localização */}
                    <div className="bg-stone-900/70 border border-stone-800/80 p-3.5 rounded-lg space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400">
                        <Calendar className="w-4 h-4 text-amber-500" />
                        <span className="font-semibold">Data e Localização Precisa</span>
                      </div>
                      <div className="text-xs text-stone-200 font-sans leading-relaxed">
                        <strong className="text-stone-100">Datação Exata:</strong> {canonicalDossier.identificacao.dataELocalizacao.dataExata}
                      </div>
                      {canonicalDossier.identificacao.dataELocalizacao.calendarioNotas && (
                        <div className="text-[11px] font-mono text-stone-400 bg-stone-950/80 p-2 rounded border border-stone-800/60">
                          {canonicalDossier.identificacao.dataELocalizacao.calendarioNotas}
                        </div>
                      )}
                      <div className="text-xs text-stone-300 font-sans">
                        <strong className="text-stone-100">Localização Geográfica:</strong> {canonicalDossier.identificacao.dataELocalizacao.localizacaoPrecisa}
                      </div>
                      {canonicalDossier.identificacao.dataELocalizacao.teatroOperacoes && (
                        <div className="text-xs text-stone-400">
                          <strong className="text-stone-300">Teatro de Operações:</strong> {canonicalDossier.identificacao.dataELocalizacao.teatroOperacoes}
                        </div>
                      )}
                    </div>

                    {/* Governo e Responsáveis */}
                    <div className="bg-stone-900/70 border border-stone-800/80 p-3.5 rounded-lg space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400">
                        <Building2 className="w-4 h-4 text-amber-500" />
                        <span className="font-semibold">Governo e Responsáveis</span>
                      </div>
                      <div className="text-xs text-stone-200 font-sans">
                        <strong className="text-stone-100">Regime Vigente:</strong> {canonicalDossier.identificacao.governoEResponsaveis.regimeVigente}
                      </div>
                      <div className="text-xs text-stone-300 font-sans">
                        <strong className="text-stone-100">Chefes de Estado e Governo:</strong>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {canonicalDossier.identificacao.governoEResponsaveis.chefesDeEstadoEGoverno.map((lider, i) => (
                            <span key={i} className="px-2 py-0.5 bg-stone-800 border border-stone-700 text-stone-200 rounded text-[11px]">
                              {lider}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-stone-300 font-sans pt-1">
                        <strong className="text-stone-100">Órgãos Executores Diretos:</strong>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {canonicalDossier.identificacao.governoEResponsaveis.orgaosExecutoresDiretos.map((org, i) => (
                            <span key={i} className="px-2 py-0.5 bg-red-950/40 border border-red-700/50 text-red-200 rounded text-[11px]">
                              {org}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ======================================================= */}
              {/* SEÇÃO 2: CONTEXTO HISTÓRICO */}
              {/* ======================================================= */}
              <section id="section-2" className="scroll-mt-20 bg-[#121215] border border-stone-800 rounded-xl p-3.5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      2
                    </span>
                    <h4 className="text-sm sm:text-base md:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      Contexto Histórico
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      const text = `2. CONTEXTO HISTÓRICO:\nSituação Anterior:\n${canonicalDossier.contextoHistorico.situacaoAnterior}\nCausas Políticas:\n${canonicalDossier.contextoHistorico.causasPoliticas}\nCausas Econômicas:\n${canonicalDossier.contextoHistorico.causasEconomicas}\nCausas Sociais:\n${canonicalDossier.contextoHistorico.causasSociais}`;
                      copyToClipboard(text, 'sec2');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[32px] px-2 py-1 rounded bg-stone-900/60 sm:bg-transparent"
                    title="Copiar Seção 2"
                  >
                    {copiedCitation === 'sec2' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Situação Anterior */}
                  <div className="bg-stone-900/60 border border-stone-800 p-4 rounded-lg">
                    <h5 className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-2">
                      Situação Anterior Estrutural
                    </h5>
                    <p className={`text-stone-300 font-serif leading-relaxed ${getFontSizeClass()}`}>
                      {canonicalDossier.contextoHistorico.situacaoAnterior}
                    </p>
                  </div>

                  {/* Grid de Causas Políticas, Econômicas e Sociais */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-stone-900/80 border border-stone-800 p-3.5 rounded-lg space-y-1.5">
                      <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider font-semibold block">
                        Causas Políticas
                      </span>
                      <p className="text-xs text-stone-300 font-sans leading-relaxed">
                        {canonicalDossier.contextoHistorico.causasPoliticas}
                      </p>
                    </div>

                    <div className="bg-stone-900/80 border border-stone-800 p-3.5 rounded-lg space-y-1.5">
                      <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold block">
                        Causas Econômicas
                      </span>
                      <p className="text-xs text-stone-300 font-sans leading-relaxed">
                        {canonicalDossier.contextoHistorico.causasEconomicas}
                      </p>
                    </div>

                    <div className="bg-stone-900/80 border border-stone-800 p-3.5 rounded-lg space-y-1.5">
                      <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold block">
                        Causas Sociais
                      </span>
                      <p className="text-xs text-stone-300 font-sans leading-relaxed">
                        {canonicalDossier.contextoHistorico.causasSociais}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ======================================================= */}
              {/* SEÇÃO 3: NARRATIVA CRONOLÓGICA */}
              {/* ======================================================= */}
              <section id="section-3" className="scroll-mt-20 bg-[#121215] border border-stone-800 rounded-xl p-3.5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      3
                    </span>
                    <h4 className="text-sm sm:text-base md:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      Narrativa Cronológica (Datas e Decisões)
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      let text = `3. NARRATIVA CRONOLÓGICA:\n${canonicalDossier.narrativaCronologica.sinteseNarrativaGeral}\n\n`;
                      canonicalDossier.narrativaCronologica.acontecimentosEmOrdem.forEach(i => {
                        text += `[${i.dataExata}] ${i.acontecimento}\nPersonagens: ${i.personagensEInstituicoes}\nDecisões: ${i.decisoesTomadas}\n\n`;
                      });
                      copyToClipboard(text, 'sec3');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[32px] px-2 py-1 rounded bg-stone-900/60 sm:bg-transparent"
                    title="Copiar Seção 3"
                  >
                    {copiedCitation === 'sec3' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="bg-stone-900/60 border border-stone-800 p-3.5 rounded-lg text-xs text-stone-300 leading-relaxed font-sans">
                    <strong className="text-amber-400 font-mono">Síntese do Desenvolvimento dos Fatos:</strong> {canonicalDossier.narrativaCronologica.sinteseNarrativaGeral}
                  </div>

                  {/* Tabela Cronológica Estruturada */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">
                      Acontecimentos em Estrita Ordem Cronológica ({canonicalDossier.narrativaCronologica.acontecimentosEmOrdem.length} Marcos Verificados):
                    </span>

                    <div className="space-y-3">
                      {canonicalDossier.narrativaCronologica.acontecimentosEmOrdem.map((item, idx) => (
                        <div key={idx} className="bg-stone-900/80 border border-stone-800/90 rounded-lg p-4 space-y-2 hover:border-amber-700/50 transition-colors">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800/60 pb-2">
                            <span className="px-2.5 py-0.5 bg-amber-950/70 text-amber-300 font-mono text-xs font-semibold rounded border border-amber-600/40">
                              {item.dataExata}
                            </span>
                            <span className="text-[11px] font-mono text-stone-400">
                              Marco #{idx + 1}
                            </span>
                          </div>

                          <h5 className="text-sm sm:text-base font-serif font-bold text-stone-100">
                            {item.acontecimento}
                          </h5>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                            <div className="text-stone-300 bg-stone-950/50 p-2.5 rounded border border-stone-800/60">
                              <span className="text-[10px] font-mono text-amber-400 uppercase block font-semibold mb-0.5">
                                Personagens e Instituições
                              </span>
                              {item.personagensEInstituicoes}
                            </div>
                            <div className="text-stone-300 bg-stone-950/50 p-2.5 rounded border border-stone-800/60">
                              <span className="text-[10px] font-mono text-red-400 uppercase block font-semibold mb-0.5">
                                Decisões Tomadas
                              </span>
                              {item.decisoesTomadas}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* ======================================================= */}
              {/* SEÇÃO 4: DOCUMENTOS E EVIDÊNCIAS */}
              {/* ======================================================= */}
              <section id="section-4" className="scroll-mt-20 bg-[#121215] border border-stone-800 rounded-xl p-3.5 sm:p-6 space-y-5 sm:space-y-6">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      4
                    </span>
                    <h4 className="text-sm sm:text-base md:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      Documentos e Evidências Arquivísticas
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      let text = `4. DOCUMENTOS E EVIDÊNCIAS:\nDocumentos Originais:\n`;
                      canonicalDossier.documentosEEvidencias.documentosOriginais.forEach(d => {
                        text += `- ${d.titulo} (${d.fundoArquivistico})\n${d.descricaoConteudo}\n`;
                      });
                      copyToClipboard(text, 'sec4');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[32px] px-2 py-1 rounded bg-stone-900/60 sm:bg-transparent"
                    title="Copiar Seção 4"
                  >
                    {copiedCitation === 'sec4' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                {/* 4.1 Documentos Originais com Fundos Verificados */}
                <div className="space-y-3">
                  <h5 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Archive className="w-4 h-4 text-amber-500" />
                    <span>Documentos Originais e Fundos de Arquivo (RGASPI / GARF / AP RF / NARA)</span>
                  </h5>
                  <div className="space-y-3">
                    {canonicalDossier.documentosEEvidencias.documentosOriginais.map((doc, idx) => (
                      <div key={idx} className="bg-stone-900/70 border border-stone-800 p-4 rounded-lg space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h6 className="text-sm font-serif font-bold text-stone-100">
                            {doc.titulo}
                          </h6>
                          <span className="px-2 py-0.5 bg-emerald-950/60 text-emerald-300 font-mono text-[10px] rounded border border-emerald-600/40">
                            {doc.autenticidadeEStatus}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-amber-400/90 bg-stone-950 px-2.5 py-1.5 rounded border border-stone-800">
                          {doc.fundoArquivistico} · {doc.instituicaoGuarda}
                        </div>
                        <p className="text-xs text-stone-300 font-sans leading-relaxed">
                          {doc.descricaoConteudo}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4.2 Fotografias e Registros Visuais */}
                {canonicalDossier.documentosEEvidencias.fotografiasERegistros.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h5 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <FileSpreadsheet className="w-4 h-4 text-amber-500" />
                      <span>Fotografias e Registros Probatórios</span>
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {canonicalDossier.documentosEEvidencias.fotografiasERegistros.map((foto, idx) => (
                        <div key={idx} className="bg-stone-900/60 border border-stone-800 p-3.5 rounded-lg space-y-1.5">
                          <span className="text-xs font-serif font-semibold text-stone-200 block">
                            {foto.registroOuFoto}
                          </span>
                          <span className="text-[11px] font-mono text-stone-400 block">
                            Acervo: {foto.acervoOrigem} ({foto.anoEIdentificador})
                          </span>
                          <p className="text-xs text-stone-300 font-sans">
                            <strong className="text-amber-400 font-mono text-[10px] uppercase">Significado Probatório:</strong> {foto.significadoProbatório}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4.3 Testemunhos Documentados */}
                {canonicalDossier.documentosEEvidencias.testemunhos.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h5 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Quote className="w-4 h-4 text-amber-500" />
                      <span>Testemunhos Oculares com Procedência Verificada</span>
                    </h5>
                    <div className="space-y-3">
                      {canonicalDossier.documentosEEvidencias.testemunhos.map((t, idx) => (
                        <div key={idx} className="bg-stone-900/70 border-l-2 border-amber-600 p-3.5 rounded-r-lg space-y-2">
                          <p className="text-xs sm:text-sm font-serif italic text-stone-200 leading-relaxed">
                            "{t.trechoDepoimento}"
                          </p>
                          <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono text-stone-400 border-t border-stone-800/60 pt-1.5">
                            <span className="text-amber-400 font-semibold">{t.testemunha} ({t.funcaoOrigem})</span>
                            <span className="text-stone-500">{t.referenciaVerificada}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4.4 Decretos e Correspondências */}
                {canonicalDossier.documentosEEvidencias.decretosECorrespondencias.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h5 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-amber-500" />
                      <span>Decretos, Ordens e Correspondências Oficiais</span>
                    </h5>
                    <div className="space-y-2.5">
                      {canonicalDossier.documentosEEvidencias.decretosECorrespondencias.map((dec, idx) => (
                        <div key={idx} className="bg-stone-900/60 border border-stone-800 p-3 rounded-lg space-y-1 text-xs">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <strong className="text-amber-300 font-mono">{dec.codigoOuNumero}</strong>
                            <span className="text-stone-400 font-mono text-[11px]">{dec.dataEmissao} · {dec.orgaoEmissor}</span>
                          </div>
                          <p className="text-stone-300 font-sans">{dec.teorDispositivo}</p>
                          <div className="text-[10px] font-mono text-stone-500 pt-1">
                            Arquivo: {dec.localizacaoArquivo}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* ======================================================= */}
              {/* SEÇÃO 5: RESPONSABILIDADES E CONSEQUÊNCIAS */}
              {/* ======================================================= */}
              <section id="section-5" className="scroll-mt-20 bg-[#121215] border border-stone-800 rounded-xl p-3.5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      5
                    </span>
                    <h4 className="text-sm sm:text-base md:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      Responsabilidades e Consequências
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      let text = `5. RESPONSABILIDADES E CONSEQUÊNCIAS:\nResponsáveis:\n`;
                      canonicalDossier.responsabilidadesEConsequencias.responsaveisPoliticosEInstitucionais.forEach(r => {
                        text += `- ${r.agenteOuOrgao} (${r.funcaoCargo}): ${r.responsabilidadeEspecifica}\n`;
                      });
                      text += `Vítimas: ${canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.estimativasQuantitativas}\nConsequências Imediatas: ${canonicalDossier.responsabilidadesEConsequencias.consequenciasImediatas}`;
                      copyToClipboard(text, 'sec5');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[32px] px-2 py-1 rounded bg-stone-900/60 sm:bg-transparent"
                    title="Copiar Seção 5"
                  >
                    {copiedCitation === 'sec5' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Responsáveis Políticos */}
                  <div className="space-y-2.5">
                    <h5 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                      Responsáveis Políticos e Institucionais
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {canonicalDossier.responsabilidadesEConsequencias.responsaveisPoliticosEInstitucionais.map((resp, idx) => (
                        <div key={idx} className="bg-stone-900/80 border border-stone-800 p-3.5 rounded-lg space-y-1">
                          <span className="text-sm font-serif font-bold text-red-300 block">
                            {resp.agenteOuOrgao}
                          </span>
                          <span className="text-[11px] font-mono text-stone-400 block">
                            {resp.funcaoCargo}
                          </span>
                          <p className="text-xs text-stone-300 font-sans leading-relaxed pt-1">
                            {resp.responsabilidadeEspecifica}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vítimas e Impactos */}
                  <div className="bg-red-950/20 border border-red-800/40 p-4 rounded-lg space-y-3">
                    <h5 className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span>Vítimas e Impactos Quantificados</span>
                    </h5>
                    <div className="text-sm font-serif font-semibold text-stone-100 leading-snug">
                      {canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.estimativasQuantitativas}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1 border-t border-stone-800/60">
                      <div>
                        <strong className="text-stone-300 font-mono text-[10px] uppercase block mb-0.5">Impacto Demográfico e Humano:</strong>
                        <p className="text-stone-300 font-sans">{canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.impactosDemograficosEHumanos}</p>
                      </div>
                      <div>
                        <strong className="text-stone-300 font-mono text-[10px] uppercase block mb-0.5">Impacto Econômico:</strong>
                        <p className="text-stone-300 font-sans">{canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.impactosEconomicos}</p>
                      </div>
                    </div>
                  </div>

                  {/* Consequências Imediatas e Longo Prazo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-stone-900/70 border border-stone-800 p-3.5 rounded-lg space-y-1">
                      <strong className="text-amber-400 font-mono text-[11px] uppercase block">Consequências Imediatas:</strong>
                      <p className="text-stone-300 font-sans leading-relaxed">{canonicalDossier.responsabilidadesEConsequencias.consequenciasImediatas}</p>
                    </div>
                    <div className="bg-stone-900/70 border border-stone-800 p-3.5 rounded-lg space-y-1">
                      <strong className="text-amber-400 font-mono text-[11px] uppercase block">Consequências a Longo Prazo:</strong>
                      <p className="text-stone-300 font-sans leading-relaxed">{canonicalDossier.responsabilidadesEConsequencias.consequenciasLongoPrazo}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ======================================================= */}
              {/* SEÇÃO 6: DEBATE HISTORIOGRÁFICO */}
              {/* ======================================================= */}
              <section id="section-6" className="scroll-mt-20 bg-[#121215] border border-stone-800 rounded-xl p-3.5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      6
                    </span>
                    <h4 className="text-sm sm:text-base md:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      Debate Historiográfico Tripartite
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      let text = `6. DEBATE HISTORIOGRÁFICO:\n`;
                      canonicalDossier.debateHistoriografico.interpretacoesDiferentes.forEach(d => {
                        text += `[${d.correnteEscola}] (${d.principaisAutores.join(', ')})\nTese: ${d.teseCentral}\nAntítese: ${d.antiteseCritica}\n\n`;
                      });
                      text += `Consensos: ${canonicalDossier.debateHistoriografico.consensosAcademicos}`;
                      copyToClipboard(text, 'sec6');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[32px] px-2 py-1 rounded bg-stone-900/60 sm:bg-transparent"
                    title="Copiar Seção 6"
                  >
                    {copiedCitation === 'sec6' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Correntes Historiográficas Confrontadas */}
                  <div className="space-y-3">
                    {canonicalDossier.debateHistoriografico.interpretacoesDiferentes.map((escola, idx) => (
                      <div key={idx} className="bg-stone-900/80 border border-stone-800 p-4 rounded-lg space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800/60 pb-2">
                          <h5 className="text-sm font-serif font-bold text-amber-300">
                            {escola.correnteEscola}
                          </h5>
                          <span className="text-xs font-mono text-stone-400">
                            Autores: {escola.principaisAutores.join(', ')}
                          </span>
                        </div>
                        <div className="text-xs space-y-2 pt-1 font-sans">
                          <div>
                            <strong className="text-emerald-400 font-mono text-[10px] uppercase block mb-0.5">Tese Historiográfica Central:</strong>
                            <p className="text-stone-200 leading-relaxed">{escola.teseCentral}</p>
                          </div>
                          <div>
                            <strong className="text-amber-400 font-mono text-[10px] uppercase block mb-0.5">Antítese e Limitações Críticas:</strong>
                            <p className="text-stone-300 leading-relaxed">{escola.antiteseCritica}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Consensos e Limitações de Fontes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="bg-stone-900/60 border border-stone-800 p-3.5 rounded-lg space-y-1">
                      <strong className="text-emerald-400 font-mono text-[11px] uppercase block">Consensos Acadêmicos Estabelecidos:</strong>
                      <p className="text-stone-300 font-sans leading-relaxed">{canonicalDossier.debateHistoriografico.consensosAcademicos}</p>
                    </div>
                    <div className="bg-stone-900/60 border border-stone-800 p-3.5 rounded-lg space-y-1">
                      <strong className="text-amber-400 font-mono text-[11px] uppercase block">Controvérsias e Limitações das Fontes:</strong>
                      <p className="text-stone-300 font-sans leading-relaxed">{canonicalDossier.debateHistoriografico.controversiasELimitacoesDasFontes}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ======================================================= */}
              {/* SEÇÃO 7: CITAÇÕES VERIFICADAS */}
              {/* ======================================================= */}
              <section id="section-7" className="scroll-mt-20 bg-[#121215] border border-stone-800 rounded-xl p-3.5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      7
                    </span>
                    <h4 className="text-sm sm:text-base md:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      Citações Literais Verificadas (com Página e Edição)
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      let text = `7. CITAÇÕES VERIFICADAS:\n`;
                      canonicalDossier.citacoesVerificadas.forEach(c => {
                        text += `"${c.trechoLiteral}"\n— ${c.autor}, ${c.obra} (${c.edicaoEditoraAno}, ${c.paginaExata})\n\n`;
                      });
                      copyToClipboard(text, 'sec7');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[32px] px-2 py-1 rounded bg-stone-900/60 sm:bg-transparent"
                    title="Copiar Seção 7"
                  >
                    {copiedCitation === 'sec7' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {canonicalDossier.citacoesVerificadas.map((cit, idx) => (
                    <div key={idx} className="bg-stone-900/80 border border-stone-800 rounded-lg p-3.5 sm:p-4 space-y-3">
                      <div className="flex items-start gap-2.5 sm:gap-3">
                        <Quote className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                        <blockquote className="text-xs sm:text-sm font-serif italic text-stone-100 leading-relaxed">
                          "{cit.trechoLiteral}"
                        </blockquote>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-stone-800 pt-2 text-xs font-mono">
                        <div className="space-y-0.5">
                          <span className="text-amber-400 font-bold">{cit.autor}</span>
                          <span className="text-stone-400 block text-[11px]">{cit.obra} · {cit.edicaoEditoraAno}</span>
                        </div>
                        <span className="px-2.5 py-1 bg-amber-950/70 text-amber-300 font-mono text-xs font-bold rounded border border-amber-700/60">
                          {cit.paginaExata}
                        </span>
                      </div>

                      <div className="bg-stone-950/60 p-2.5 rounded border border-stone-800/60 text-xs text-stone-300 font-sans">
                        <strong className="text-stone-400 font-mono text-[10px] uppercase block mb-0.5">Análise Crítica Contextual:</strong>
                        {cit.analiseContextual}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ======================================================= */}
              {/* SEÇÃO 8: BIBLIOGRAFIA */}
              {/* ======================================================= */}
              <section id="section-8" className="scroll-mt-20 bg-[#121215] border border-stone-800 rounded-xl p-3.5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      8
                    </span>
                    <h4 className="text-sm sm:text-base md:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      Bibliografia Acadêmica Completa
                    </h4>
                  </div>
                  <button
                    onClick={() => {
                      let text = `8. BIBLIOGRAFIA:\n`;
                      canonicalDossier.bibliografia.forEach(b => {
                        text += `- ABNT: ${b.entradaAbnt}\n  Chicago: ${b.entradaChicago}\n\n`;
                      });
                      copyToClipboard(text, 'sec8');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[32px] px-2 py-1 rounded bg-stone-900/60 sm:bg-transparent"
                    title="Copiar Seção 8"
                  >
                    {copiedCitation === 'sec8' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {canonicalDossier.bibliografia.map((ref, idx) => (
                    <div key={idx} className="bg-stone-900/70 border border-stone-800 p-3.5 rounded-lg space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 border-b border-stone-800/60 pb-1.5">
                        <span className="px-2 py-0.5 bg-stone-800 text-amber-400 rounded">
                          {ref.tipoFonte}
                        </span>
                        {ref.isbnOuReferencia && (
                          <span className="text-stone-500">{ref.isbnOuReferencia}</span>
                        )}
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <div>
                          <span className="text-[10px] font-mono text-stone-500 uppercase block">Norma ABNT:</span>
                          <p className="font-mono text-stone-200 select-all">{ref.entradaAbnt}</p>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-stone-500 uppercase block">Chicago Manual of Style:</span>
                          <p className="font-mono text-stone-400 select-all">{ref.entradaChicago}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </article>
          )}

          {/* TAB 0: COMPLETE ACADEMIC ESSAY (DISSATIVE TEXT & CITATIONS) */}
          {activeTab === 'essay' && essay && (
            <article className="space-y-8 max-w-4xl mx-auto">
              {/* Essay Sub-Header with Metadata & Metrics */}
              <div className="bg-[#121215] border border-stone-800 p-4 sm:p-5 rounded-lg space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-400 border-b border-stone-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-300 font-medium">{essay.authorCatedra}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-500" />
                      <span>~{essay.estimatedReadingMinutes} min de leitura</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <AlignLeft className="w-3.5 h-3.5 text-stone-500" />
                      <span>{essay.wordCount} palavras</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 leading-snug">
                    {essay.title}
                  </h3>
                  <p className="text-sm font-serif italic text-amber-400/90 mt-1">
                    {essay.subtitle}
                  </p>
                </div>

                {/* Mobile Copy Button */}
                <div className="sm:hidden pt-2 border-t border-stone-800">
                  <button
                    onClick={copyFullEssay}
                    className="w-full py-2 bg-stone-900 text-amber-400 text-xs font-mono rounded border border-stone-800 flex items-center justify-center gap-1.5"
                  >
                    {copiedCitation === 'full_essay' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Ensaio Acadêmico Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Ensaio Completo com Bibliografia</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Epigraph */}
              {essay.epigraph && (
                <div className="border-l-4 border-amber-600/80 pl-4 sm:pl-6 py-2 my-4 bg-stone-900/40 rounded-r-lg">
                  <blockquote className="font-serif italic text-stone-300 text-base sm:text-lg leading-relaxed">
                    "{essay.epigraph.text}"
                  </blockquote>
                  <cite className="block text-xs font-mono text-amber-400 mt-2 not-italic">
                    — {essay.epigraph.author}, <span className="text-stone-400">{essay.epigraph.work}</span>
                  </cite>
                </div>
              )}

              {/* SECTION I: PANORAMA & ANTECEDENTES */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção I
                  </span>
                  <span className="text-stone-600">/</span>
                  <h4 className="text-sm sm:text-base font-serif font-semibold text-stone-200">
                    Síntese Geral e Antecedentes Estruturais
                  </h4>
                </div>
                <div className={`font-serif text-stone-300 text-justify ${getFontSizeClass()} whitespace-pre-line leading-relaxed space-y-4`}>
                  {essay.narrativeOverview}
                </div>
              </section>

              {/* SECTION II: HISTORICAL DEVELOPMENT (THE NARRATIVE OF WHAT HAPPENED) */}
              <section className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                      Seção II
                    </span>
                    <span className="text-stone-600">/</span>
                    <h4 className="text-sm sm:text-base font-serif font-semibold text-stone-200">
                      A História dos Acontecimentos: Narrativa Cronológica Minuciosa
                    </h4>
                  </div>
                  {detailedEpisodes.length > 0 && (
                    <button
                      onClick={() => {
                        playTypewriterClack();
                        setActiveTab('stories');
                      }}
                      className="text-[11px] font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline"
                    >
                      <ScrollText className="w-3.5 h-3.5" />
                      <span>Ver Crônicas na Íntegra ({detailedEpisodes.length})</span>
                    </button>
                  )}
                </div>

                {/* Linha do tempo dos marcos históricos */}
                {chronologies.length > 0 && (
                  <div className="bg-[#121215] border border-stone-800 rounded-lg p-3.5 sm:p-4 my-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 mb-3 uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Marcos Históricos Decisivos do Período</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {chronologies.map((c, idx) => (
                        <div key={idx} className="bg-[#17171c] p-2.5 rounded border border-stone-800/80 text-xs">
                          <span className="font-mono text-amber-500 font-bold block text-[10px]">{c.date}</span>
                          <span className="font-serif font-semibold text-stone-200 block text-xs mt-0.5">{c.event}</span>
                          <p className="font-serif text-stone-400 text-[11px] mt-1 line-clamp-2">{c.significance}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className={`font-serif text-stone-300 text-justify ${getFontSizeClass()} whitespace-pre-line leading-relaxed space-y-4`}>
                  {essay.historicalDevelopment}
                </div>

                {/* Destaque das Crônicas e Episódios Documentados */}
                {detailedEpisodes.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-stone-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-amber-500" />
                        Episódios & Relatos Documentados em Destaque:
                      </span>
                      <button
                        onClick={() => {
                          playTypewriterClack();
                          setActiveTab('stories');
                        }}
                        className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1"
                      >
                        Abrir Modo Narrativo Completo →
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {detailedEpisodes.map((ep, idx) => (
                        <div key={idx} className="bg-[#121215] border border-amber-900/40 rounded-lg p-3.5 space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono">
                            <span className="font-bold text-amber-300">{ep.title}</span>
                            <span className="text-[11px] text-stone-400 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-red-400" />
                              {ep.location}
                            </span>
                          </div>
                          <p className="text-xs font-serif text-stone-300 line-clamp-3 italic">
                            "{ep.eyewitnessOrDocQuote}"
                          </p>
                          <div className="text-[10px] font-mono text-amber-500/90 text-right">
                            — {ep.quoteAuthor}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* SECTION III: INSTITUTIONAL MECHANISMS & FORCE APPARATUS */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção III
                  </span>
                  <span className="text-stone-600">/</span>
                  <h4 className="text-sm sm:text-base font-serif font-semibold text-stone-200">
                    Mecanismos Institucionais, Decretos e Aparato Coercitivo
                  </h4>
                </div>
                <div className={`font-serif text-stone-300 text-justify ${getFontSizeClass()} whitespace-pre-line leading-relaxed space-y-4`}>
                  {essay.institutionalAndStateMechanisms}
                </div>
              </section>

              {/* SECTION IV: HISTORIOGRAPHICAL DEBATE */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção IV
                  </span>
                  <span className="text-stone-600">/</span>
                  <h4 className="text-sm sm:text-base font-serif font-semibold text-stone-200">
                    Debate Historiográfico e Confronto Crítico de Fontes
                  </h4>
                </div>
                <div className={`font-serif text-stone-300 text-justify ${getFontSizeClass()} whitespace-pre-line leading-relaxed space-y-4`}>
                  {essay.historiographicalDebate}
                </div>
              </section>

              {/* SECTION V: SCHOLARLY IN-TEXT QUOTES & ANALYSIS */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção V
                  </span>
                  <span className="text-stone-600">/</span>
                  <h4 className="text-sm sm:text-base font-serif font-semibold text-stone-200">
                    Citações dos Principais Pesquisadores no Texto & Análise Crítica
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {essay.scholarlyQuotes.map((sq, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#131316] border border-stone-700/80 rounded-lg p-4 sm:p-5 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800/80 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-amber-950/80 border border-amber-600/60 text-amber-400 font-mono text-[11px] flex items-center justify-center font-bold">
                            {idx + 1}
                          </span>
                          <span className="font-mono text-sm font-bold text-amber-400">
                            {sq.author}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-stone-400">
                          {sq.work} ({sq.year}, {sq.pageOrDoc})
                        </span>
                      </div>

                      <div className="bg-[#0e0e10] p-3.5 rounded border border-stone-800/80 relative">
                        <Quote className="w-4 h-4 text-stone-600 absolute top-2 right-2" />
                        <p className="font-serif italic text-stone-200 text-sm sm:text-base leading-relaxed pr-6">
                          "{sq.quote}"
                        </p>
                      </div>

                      <div className="text-xs font-serif text-stone-400 leading-relaxed">
                        <span className="font-mono text-stone-300 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                          Análise Historiográfica:
                        </span>
                        {sq.historicalAnalysis}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION VI: ARCHIVAL CORPUS */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção VI
                  </span>
                  <span className="text-stone-600">/</span>
                  <h4 className="text-sm sm:text-base font-serif font-semibold text-stone-200">
                    Fundos Arquivísticos e Documentação Probatória
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {essay.archivalCorpus.map((arc, idx) => (
                    <div key={idx} className="bg-[#141417] p-3.5 rounded-lg border border-stone-800 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-stone-200">
                        <Archive className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{arc.archiveName}</span>
                      </div>
                      <div className="text-[11px] font-mono text-amber-500/90">
                        {arc.fondCode}
                      </div>
                      <p className="text-xs font-serif text-stone-400 leading-relaxed">
                        {arc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION VII: CONCLUDING HISTORICAL ASSESSMENT */}
              <section className="space-y-3">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção VII
                  </span>
                  <span className="text-stone-600">/</span>
                  <h4 className="text-sm sm:text-base font-serif font-semibold text-stone-200">
                    Conclusão e Balanço Histórico
                  </h4>
                </div>
                <div className={`font-serif text-stone-300 text-justify ${getFontSizeClass()} whitespace-pre-line leading-relaxed space-y-4`}>
                  {essay.concludingAssessment}
                </div>
              </section>

              {/* SECTION VIII: FORMATTED ACADEMIC BIBLIOGRAPHY */}
              <section className="space-y-3 pt-4 border-t border-stone-800">
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <h4 className="text-sm font-mono uppercase tracking-wider text-stone-300">
                      Referências Bibliográficas Acadêmicas
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-stone-500">Formato ABNT</span>
                </div>

                <div className="bg-[#121215] border border-stone-800 rounded-lg p-4 space-y-2">
                  {essay.bibliographicReferences.map((ref, idx) => (
                    <div key={idx} className="text-xs font-mono text-stone-300 leading-relaxed pb-2 border-b border-stone-900 last:border-none last:pb-0">
                      {ref}
                    </div>
                  ))}
                </div>
              </section>
            </article>
          )}

          {/* TAB: CRÔNICAS & HISTÓRIAS DETALHADAS (CHRONICLES & DETAILED EYEWITNESS EPISODES) */}
          {activeTab === 'stories' && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Header Context Banner */}
              <div className="bg-[#121215] border border-stone-800 p-4 sm:p-5 rounded-lg space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 font-bold uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Crônicas de Fatos Reais & Testemunhos Oculares</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-100">
                  A História dos Acontecimentos: Registro Minucioso e Relatos Vivos
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 font-serif leading-relaxed">
                  Narrativas circunstanciadas dos episódios mais dramáticos e decisivos deste dossiê, reconstituídas a partir de memórias de sobreviventes, transcrições forenses e despachos desclassificados dos arquivos do Kremlin (RGASPI, GARF e Arquivo Presidencial).
                </p>
              </div>

              {/* Step-by-Step Chronology */}
              {chronologies.length > 0 && (
                <div className="bg-[#141417] border border-stone-800 rounded-lg p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-amber-400" />
                      <h4 className="text-sm font-mono font-bold uppercase text-stone-200">
                        Cronologia Passo a Passo dos Fatos
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-stone-500">{chronologies.length} Marcos Verificados</span>
                  </div>

                  <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-800">
                    {chronologies.map((item, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-stone-900 group-hover:scale-125 transition-transform" />
                        <div className="bg-[#101012] p-3 rounded border border-stone-800/80 space-y-1">
                          <span className="text-[11px] font-mono font-bold text-amber-400">
                            {item.date}
                          </span>
                          <h5 className="text-xs sm:text-sm font-semibold text-stone-100 font-serif">
                            {item.event}
                          </h5>
                          <p className="text-xs font-serif text-stone-400 leading-relaxed">
                            {item.significance}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Historical Episodes */}
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <div className="flex items-center gap-2">
                    <ScrollText className="w-4 h-4 text-amber-400" />
                    <h4 className="text-sm font-mono font-bold uppercase text-stone-200">
                      Episódios & Relatos Documentados na Íntegra ({detailedEpisodes.length})
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-stone-500">Fontes Primárias & Memórias</span>
                </div>

                {detailedEpisodes.map((ep, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#141417] border border-stone-700/80 rounded-xl p-5 sm:p-6 space-y-4 shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800/80 pb-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono text-amber-500">
                          <span className="px-2 py-0.5 rounded bg-amber-950/70 border border-amber-800/50 text-[10px] font-bold">
                            EPISÓDIO {idx + 1}
                          </span>
                          <span className="flex items-center gap-1 text-stone-400">
                            <MapPin className="w-3 h-3 text-red-400" />
                            {ep.location}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-serif font-bold text-stone-100 leading-snug">
                          {ep.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => copyToClipboard(`${ep.title}\nLocal: ${ep.location}\n\n${ep.narrative}\n\nCitação: "${ep.eyewitnessOrDocQuote}" — ${ep.quoteAuthor}`, `ep_${idx}`)}
                        className="px-2.5 py-1 bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-amber-400 text-xs font-mono rounded border border-stone-800 flex items-center gap-1 self-start sm:self-auto transition-colors"
                        title="Copiar relato com citação"
                      >
                        {copiedCitation === `ep_${idx}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar Relato</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Full Narrative Text */}
                    <div className="font-serif text-stone-200 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-3 text-justify">
                      {ep.narrative}
                    </div>

                    {/* Highlighted Eyewitness / Archival Quote Card */}
                    <div className="bg-[#0c0c0e] border-l-4 border-amber-500 p-4 rounded-r-lg space-y-2 mt-4">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-500 font-bold uppercase tracking-wider">
                        <Quote className="w-3.5 h-3.5" />
                        <span>Testemunho Ocular / Registro Documental Original:</span>
                      </div>
                      <p className="font-serif italic text-stone-200 text-sm sm:text-base leading-relaxed">
                        "{ep.eyewitnessOrDocQuote}"
                      </p>
                      <div className="text-xs font-mono text-stone-400 not-italic pt-1 border-t border-stone-800/60">
                        — <span className="text-amber-300 font-semibold">{ep.quoteAuthor}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PRIMARY HISTORICAL DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="space-y-6">
              <div className="p-3 bg-stone-900/60 border border-stone-800 rounded-lg text-xs text-stone-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Todos os documentos transcritos abaixo pertencem a acervos públicos, arquivos de Estado desclassificados (RGASPI, GARF, AP RF) ou coleções diplomáticas reconhecidas (Yale Avalon, GHDI, USHMM, Cambridge).
                </span>
              </div>

              {topic.primarySources.map((source, index) => (
                <div
                  key={index}
                  className="bg-[#141417] border border-stone-700/70 rounded-lg p-5 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-amber-500">
                        <span>{source.documentType}</span>
                        <span aria-hidden="true">·</span>
                        <span>Ano: {source.year}</span>
                      </div>
                      <h3 className="text-base font-semibold text-stone-100 mt-0.5">
                        {source.title}
                      </h3>
                    </div>

                    <div className="text-xs font-mono text-stone-400 bg-stone-900 px-2.5 py-1 rounded border border-stone-800 shrink-0 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-stone-500" />
                      <span>{source.institution}</span>
                    </div>
                  </div>

                  {/* Transcrição Documental */}
                  <div className="bg-[#0f0f11] p-4 rounded border border-stone-800 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block">
                      Transcrição / Tradução do Documento:
                    </span>
                    <p className="text-stone-200 font-serif text-sm sm:text-base leading-relaxed italic">
                      "{source.transcriptionPt}"
                    </p>
                  </div>

                  {/* Código de Arquivo & Botão de Cópia */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs">
                    <div className="font-mono text-stone-400">
                      <span className="text-stone-500">Ref. Arquivo: </span>
                      <span className="text-stone-300">{source.archiveReference}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyToClipboard(source.abntCitation, `doc_${index}_abnt`)}
                        className="px-2.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded border border-stone-700 text-xs flex items-center gap-1.5 transition-colors"
                      >
                        {copiedCitation === `doc_${index}_abnt` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar Citação ABNT</span>
                          </>
                        )}
                      </button>

                      {source.url && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-400 rounded border border-stone-700 text-xs flex items-center gap-1.5 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Consultar Acervo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: HISTORICAL CONTEXT & ANALYSIS */}
          {activeTab === 'context' && (
            <div className="space-y-6">
              {topic.quote && (
                <div className="p-4 bg-stone-900/80 border-y border-stone-800 rounded-md">
                  <p className="font-serif italic text-base sm:text-lg text-stone-200">
                    "{topic.quote.text}"
                  </p>
                  <p className="text-xs font-mono text-amber-400 mt-2">
                    — {topic.quote.author} ({topic.quote.context})
                  </p>
                </div>
              )}

              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 mb-2">
                  Contexto Histórico & Antecedentes
                </h3>
                <p className="text-stone-300 font-serif text-base leading-relaxed">
                  {topic.historicalContext}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 mb-2">
                  Consenso Historiográfico Acadêmico
                </h3>
                <p className="text-stone-300 font-serif text-base leading-relaxed">
                  {topic.academicConsensus}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 mb-2">
                  Impacto Histórico & Desdobramentos
                </h3>
                <p className="text-stone-300 font-serif text-base leading-relaxed">
                  {topic.historicalImpact}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-800">
                <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-stone-400 mb-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>Atores-Chave Envolvidos</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {topic.keyActors.map((actor, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-stone-800 text-stone-200 px-2 py-0.5 rounded"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-stone-400 mb-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>Historiadores & Pesquisadores de Referência</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {topic.historiansInvolved?.map((hist, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-amber-950/40 text-amber-300 border border-amber-800/50 px-2 py-0.5 rounded font-mono"
                      >
                        {hist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Monographs from 23 books list */}
              <div className="pt-4 border-t border-stone-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                  <BookMarked className="w-4 h-4" />
                  <span>Monografias Acadêmicas Recomendadas para este Tema</span>
                </h4>
                <div className="space-y-2.5">
                  {topic.historiansInvolved?.map((hName, idx) => (
                    <div key={idx} className="p-3 bg-[#121215] border border-stone-800 rounded text-xs font-serif text-stone-300">
                      <span className="font-mono text-amber-400 font-bold block text-[11px] mb-0.5">{hName}</span>
                      <span>Consulte o acervo de obras correspondentes na aba "Acervos & Monografias" para transcrições e fontes.</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ACADEMIC CITATIONS */}
          {activeTab === 'citations' && (
            <div className="space-y-6">
              <p className="text-xs text-stone-400">
                Utilize as referências formatadas abaixo para inclusão direta em artigos científicos, trabalhos acadêmicos e monografias.
              </p>

              {topic.primarySources.map((source, index) => (
                <div key={index} className="bg-[#141417] p-5 rounded-lg border border-stone-800 space-y-4">
                  <h4 className="text-sm font-semibold text-stone-200 font-mono">
                    Fonte {index + 1}: {source.title}
                  </h4>

                  {/* ABNT Format */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-stone-400">Formato ABNT:</span>
                      <button
                        onClick={() => copyToClipboard(source.abntCitation, `abnt_${index}`)}
                        className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1"
                      >
                        {copiedCitation === `abnt_${index}` ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar ABNT</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="p-3 bg-stone-950 font-mono text-xs text-stone-300 rounded border border-stone-800 select-all">
                      {source.abntCitation}
                    </div>
                  </div>

                  {/* Chicago Manual of Style */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-stone-400">Formato Chicago Manual of Style:</span>
                      <button
                        onClick={() => copyToClipboard(source.chicagoCitation, `chicago_${index}`)}
                        className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1"
                      >
                        {copiedCitation === `chicago_${index}` ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar Chicago</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="p-3 bg-stone-950 font-mono text-xs text-stone-300 rounded border border-stone-800 select-all">
                      {source.chicagoCitation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#121215] border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <div className="font-mono flex items-center gap-2">
            <span>Dossiê Soviético · Cátedra Historiográfica</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline text-stone-500">Yale, RGASPI, GARF, LoC, GHDI, USHMM</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium rounded-lg transition-colors"
          >
            Fechar Dossiê
          </button>
        </div>
      </div>
    </div>
  );
};
