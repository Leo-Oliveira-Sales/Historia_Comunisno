import React, { useState } from 'react';
import { DossierTopic } from '../types/dossier';
import { ACADEMIC_ESSAYS } from '../data/academicEssaysDatabase';
import { CHRONOLOGIES_BY_TOPIC, DETAILED_EPISODES_BY_TOPIC } from '../data/detailedHistoricalEpisodes';
import { getCanonicalEditorialDossier } from '../data/canonicalEditorialDatabase';
import { playStampSound, playTypewriterClack } from '../utils/audio';
import { 
  X, 
  ArrowLeft,
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
  Quote,
  Archive,
  AlignLeft,
  Calendar,
  MapPin,
  Flame,
  ScrollText,
  CheckCircle2,
  Award,
  AlertTriangle,
  FileSpreadsheet,
  Menu,
  ChevronDown,
  Sparkles
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
  const [isMobileIndexOpen, setIsMobileIndexOpen] = useState<boolean>(false);

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

  const getFontSizeClass = (type: 'body' | 'heading' | 'quote' = 'body') => {
    switch (fontSize) {
      case 'sm':
        return type === 'heading' 
          ? 'text-base sm:text-lg' 
          : type === 'quote' 
          ? 'text-xs sm:text-sm' 
          : 'text-xs sm:text-sm leading-relaxed';
      case 'lg':
        return type === 'heading' 
          ? 'text-lg sm:text-xl lg:text-2xl' 
          : type === 'quote' 
          ? 'text-sm sm:text-base' 
          : 'text-base sm:text-lg leading-loose';
      case 'base':
      default:
        return type === 'heading' 
          ? 'text-base sm:text-lg lg:text-xl' 
          : type === 'quote' 
          ? 'text-xs sm:text-sm' 
          : 'text-sm sm:text-base leading-relaxed';
    }
  };

  const copyCompleteDossier = () => {
    let text = `==========================================================\n`;
    text += `DOSSIÊ SOVIÉTICO - DOSSIÊ COMPLETO DE PESQUISA ACADÊMICA\n`;
    text += `Registro Oficial nº ${topic.categoryNumber} · Período: ${topic.periodLabel}\n`;
    text += `Título: ${topic.title.toUpperCase()}\n`;
    text += `Tagline: ${topic.tagline}\n`;
    text += `==========================================================\n\n`;

    if (canonicalDossier) {
      text += `--- I. PADRÃO EDITORIAL CANÔNICO (8 SEÇÕES) ---\n`;
      text += `1. Identificação: ${canonicalDossier.identificacao.nomeAcontecimento} (${canonicalDossier.identificacao.dataELocalizacao.dataExata}, ${canonicalDossier.identificacao.dataELocalizacao.localizacaoPrecisa})\n`;
      text += `Regime: ${canonicalDossier.identificacao.governoEResponsaveis.regimeVigente}\n`;
      text += `Líderes: ${canonicalDossier.identificacao.governoEResponsaveis.chefesDeEstadoEGoverno.join(', ')}\n\n`;
      text += `2. Contexto Histórico:\n${canonicalDossier.contextoHistorico.situacaoAnterior}\n\n`;
      text += `3. Narrativa Cronológica:\n${canonicalDossier.narrativaCronologica.sinteseNarrativaGeral}\n\n`;
      text += `4. Documentos Originais:\n`;
      canonicalDossier.documentosEEvidencias.documentosOriginais.forEach(d => {
        text += `- ${d.titulo} (${d.fundoArquivistico}): ${d.descricaoConteudo}\n`;
      });
      text += `\n5. Responsabilidades e Vítimas:\n${canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.estimativasQuantitativas}\n\n`;
      text += `6. Debate Historiográfico:\n${canonicalDossier.debateHistoriografico.consensosAcademicos}\n\n`;
      text += `7. Citações Verificadas:\n`;
      canonicalDossier.citacoesVerificadas.forEach(c => {
        text += `"${c.trechoLiteral}" — ${c.autor}, ${c.obra} (${c.paginaExata})\n`;
      });
      text += `\n8. Bibliografia:\n`;
      canonicalDossier.bibliografia.forEach(b => {
        text += `- ${b.entradaAbnt}\n`;
      });
      text += `\n`;
    }

    if (essay) {
      text += `--- II. ENSAIO ACADÊMICO COMPLETO (${essay.authorCatedra}) ---\n`;
      text += `${essay.title}\n${essay.subtitle}\n\n`;
      text += `Síntese:\n${essay.narrativeOverview}\n\n`;
      text += `Desenvolvimento Histórico:\n${essay.historicalDevelopment}\n\n`;
      text += `Mecanismos Institucionais:\n${essay.institutionalAndStateMechanisms}\n\n`;
      text += `Debate Historiográfico:\n${essay.historiographicalDebate}\n\n`;
      text += `Conclusão:\n${essay.concludingAssessment}\n\n`;
    }

    if (detailedEpisodes.length > 0) {
      text += `--- III. CRÔNICAS E RELATOS DOCUMENTADOS (${detailedEpisodes.length}) ---\n`;
      detailedEpisodes.forEach((ep, i) => {
        text += `[${i + 1}] ${ep.title} (${ep.location})\n${ep.narrative}\nCitação: "${ep.eyewitnessOrDocQuote}" — ${ep.quoteAuthor}\n\n`;
      });
    }

    if (topic.primarySources.length > 0) {
      text += `--- IV. FONTES PRIMÁRIAS E TRANSCRIÇÕES ---\n`;
      topic.primarySources.forEach((src, i) => {
        text += `[Fonte ${i + 1}] ${src.title} (${src.year}, ${src.institution})\nTranscrição: "${src.transcriptionPt}"\nABNT: ${src.abntCitation}\n\n`;
      });
    }

    copyToClipboard(text, 'complete_master_dossier');
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

    text += `1. IDENTIFICAÇÃO\n`;
    text += `- Nome do Acontecimento: ${canonicalDossier.identificacao.nomeAcontecimento}\n`;
    text += `- Data e Localização: ${canonicalDossier.identificacao.dataELocalizacao.dataExata} (${canonicalDossier.identificacao.dataELocalizacao.localizacaoPrecisa})\n`;
    text += `- Regime: ${canonicalDossier.identificacao.governoEResponsaveis.regimeVigente}\n`;
    text += `- Líderes: ${canonicalDossier.identificacao.governoEResponsaveis.chefesDeEstadoEGoverno.join(', ')}\n\n`;

    text += `2. CONTEXTO HISTÓRICO\n`;
    text += `${canonicalDossier.contextoHistorico.situacaoAnterior}\n\n`;

    text += `3. NARRATIVA CRONOLÓGICA\n`;
    text += `${canonicalDossier.narrativaCronologica.sinteseNarrativaGeral}\n\n`;

    text += `4. DOCUMENTOS E EVIDÊNCIAS\n`;
    canonicalDossier.documentosEEvidencias.documentosOriginais.forEach(doc => {
      text += `- ${doc.titulo} (${doc.fundoArquivistico}): ${doc.descricaoConteudo}\n`;
    });
    text += `\n`;

    text += `5. RESPONSABILIDADES E CONSEQUÊNCIAS\n`;
    text += `${canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.estimativasQuantitativas}\n\n`;

    text += `6. DEBATE HISTORIOGRÁFICO\n`;
    text += `${canonicalDossier.debateHistoriografico.consensosAcademicos}\n\n`;

    text += `7. CITAÇÕES VERIFICADAS\n`;
    canonicalDossier.citacoesVerificadas.forEach((cit, idx) => {
      text += `[${idx + 1}] "${cit.trechoLiteral}" — ${cit.autor}, ${cit.obra} (${cit.paginaExata})\n`;
    });
    text += `\n`;

    text += `8. BIBLIOGRAFIA\n`;
    canonicalDossier.bibliografia.forEach(b => {
      text += `- ${b.entradaAbnt}\n`;
    });

    copyToClipboard(text, 'canonical_full');
  };

  const getSidebarSections = () => {
    if (activeTab === 'canonical') {
      return [
        { num: 1, label: '1. Identificação', target: 'section-1' },
        { num: 2, label: '2. Contexto Histórico', target: 'section-2' },
        { num: 3, label: '3. Narrativa Cronológica', target: 'section-3' },
        { num: 4, label: '4. Documentos & Provas', target: 'section-4' },
        { num: 5, label: '5. Responsabilidades', target: 'section-5' },
        { num: 6, label: '6. Debate Historiográfico', target: 'section-6' },
        { num: 7, label: '7. Citações Verificadas', target: 'section-7' },
        { num: 8, label: '8. Bibliografia ABNT', target: 'section-8' },
      ];
    } else if (activeTab === 'essay') {
      return [
        { num: 1, label: 'I. Síntese e Antecedentes', target: 'essay-sec-1' },
        { num: 2, label: 'II. História & Marcos', target: 'essay-sec-2' },
        { num: 3, label: 'III. Mecanismos e Decretos', target: 'essay-sec-3' },
        { num: 4, label: 'IV. Debate Historiográfico', target: 'essay-sec-4' },
        { num: 5, label: 'V. Citações de Pesquisadores', target: 'essay-sec-5' },
        { num: 6, label: 'VI. Fundos Arquivísticos', target: 'essay-sec-6' },
        { num: 7, label: 'VII. Conclusão Histórica', target: 'essay-sec-7' },
        { num: 8, label: 'VIII. Bibliografia', target: 'essay-sec-8' },
      ];
    } else if (activeTab === 'stories') {
      return [
        { num: 1, label: 'Cronologia Passo a Passo', target: 'stories-crono' },
        { num: 2, label: `Crônicas Oculares (${detailedEpisodes.length})`, target: 'stories-episodes' },
      ];
    } else if (activeTab === 'documents') {
      return topic.primarySources.map((src, i) => ({
        num: i + 1,
        label: `Doc ${i + 1}: ${src.title.substring(0, 20)}...`,
        target: `doc-source-${i}`
      }));
    } else if (activeTab === 'context') {
      return [
        { num: 1, label: 'Contexto e Antecedentes', target: 'ctx-1' },
        { num: 2, label: 'Consenso Historiográfico', target: 'ctx-2' },
        { num: 3, label: 'Impacto & Desdobramentos', target: 'ctx-3' },
        { num: 4, label: 'Atores & Historiadores', target: 'ctx-4' },
      ];
    } else {
      return [
        { num: 1, label: 'Referências ABNT / Chicago', target: 'citations-list' }
      ];
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#121214] flex flex-col overflow-hidden text-[#EBE6DF] max-w-[100vw] box-border animate-in fade-in duration-200">
      
      {/* 1. ARCHIVAL FULL-PAGE TOP HEADER */}
      <div className="bg-[#161619] border-b border-stone-800 px-3 sm:px-6 py-3 flex items-center justify-between gap-2 shrink-0 shadow-md overflow-hidden">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <button
            onClick={() => {
              playStampSound();
              onClose();
            }}
            className="px-2.5 py-2 min-h-[40px] min-w-[40px] bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 rounded-lg border border-stone-700 flex items-center justify-center gap-1.5 transition-colors shrink-0"
            title="Voltar à Grade de Dossiês"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline text-xs font-mono font-medium">Voltar</span>
          </button>

          <div className="space-y-0.5 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="dossier-stamp-red text-[8px] sm:text-[10px]">DESCLASSIFICADO</span>
              <span className="text-[9px] sm:text-xs font-mono text-stone-400 truncate">
                REGISTRO Nº {topic.categoryNumber}
              </span>
            </div>

            <h1 className="text-sm sm:text-lg lg:text-xl font-display font-bold text-stone-100 tracking-tight truncate max-w-full">
              {topic.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={copyCompleteDossier}
            className="px-2.5 py-2 min-h-[38px] bg-amber-900/60 hover:bg-amber-800/80 text-amber-200 text-xs font-mono rounded-lg border border-amber-600/60 hidden xl:flex items-center gap-1.5 transition-colors"
            title="Copiar Dossiê Completo (Master)"
          >
            {copiedCitation === 'complete_master_dossier' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Copiar Completo</span>
              </>
            )}
          </button>

          <button
            onClick={() => setIsMobileIndexOpen(!isMobileIndexOpen)}
            className="lg:hidden p-2 min-h-[40px] min-w-[40px] bg-stone-800 hover:bg-stone-700 text-amber-400 rounded-lg border border-stone-700 flex items-center justify-center"
            title="Abrir Índice Lateral"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              playStampSound();
              onToggleSave(topic.id);
            }}
            className={`p-2 min-h-[40px] min-w-[40px] rounded-lg border transition-colors flex items-center justify-center gap-1 text-xs font-medium ${
              isSaved
                ? 'bg-amber-950/60 border-amber-600/60 text-amber-300'
                : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700'
            }`}
            title={isSaved ? 'Remover do Caderno' : 'Salvar no Caderno de Pesquisa'}
          >
            {isSaved ? <BookmarkCheck className="w-4 h-4 text-amber-400" /> : <Bookmark className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 min-h-[40px] min-w-[40px] text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg border border-stone-700 transition-colors flex items-center justify-center"
            aria-label="Fechar Dossiê"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 2. TAB NAVIGATION CONTROLS */}
      <div className="bg-[#141417] border-b border-stone-800 px-3 sm:px-6 py-2 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar shrink-0 touch-pan-x">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <button
            onClick={() => {
              playTypewriterClack();
              setActiveTab('canonical');
            }}
            className={`px-3 py-2 min-h-[38px] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 border shrink-0 ${
              activeTab === 'canonical'
                ? 'bg-amber-950/50 text-amber-300 border-amber-600/60 shadow-sm font-bold'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Padrão Canônico (8 Seções)</span>
          </button>

          <button
            onClick={() => {
              playTypewriterClack();
              setActiveTab('essay');
            }}
            className={`px-3 py-2 min-h-[38px] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 border shrink-0 ${
              activeTab === 'essay'
                ? 'bg-amber-950/50 text-amber-300 border-amber-600/60 font-bold'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 shrink-0" />
            <span>Ensaio Acadêmico</span>
          </button>

          <button
            onClick={() => {
              playTypewriterClack();
              setActiveTab('stories');
            }}
            className={`px-3 py-2 min-h-[38px] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 border shrink-0 ${
              activeTab === 'stories'
                ? 'bg-amber-950/50 text-amber-300 border-amber-600/60 font-bold'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
            }`}
          >
            <ScrollText className="w-3.5 h-3.5 shrink-0" />
            <span>Crônicas ({detailedEpisodes.length})</span>
          </button>

          <button
            onClick={() => {
              playTypewriterClack();
              setActiveTab('documents');
            }}
            className={`px-3 py-2 min-h-[38px] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 border shrink-0 ${
              activeTab === 'documents'
                ? 'bg-amber-950/50 text-amber-300 border-amber-600/60 font-bold'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span>Documentos ({topic.primarySources.length})</span>
          </button>

          <button
            onClick={() => {
              playTypewriterClack();
              setActiveTab('context');
            }}
            className={`px-3 py-2 min-h-[38px] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 border shrink-0 ${
              activeTab === 'context'
                ? 'bg-amber-950/50 text-amber-300 border-amber-600/60 font-bold'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5 shrink-0" />
            <span>Síntese</span>
          </button>

          <button
            onClick={() => {
              playTypewriterClack();
              setActiveTab('citations');
            }}
            className={`px-3 py-2 min-h-[38px] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 border shrink-0 ${
              activeTab === 'citations'
                ? 'bg-amber-950/50 text-amber-300 border-amber-600/60 font-bold'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>Citações</span>
          </button>
        </div>

        {/* Font Size Selector & Copy Actions on Desktop */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <div className="flex items-center bg-stone-900 border border-stone-800 rounded-lg px-2 py-1 text-xs font-mono text-stone-400">
            <span className="mr-1.5 text-stone-500 font-bold">Fonte:</span>
            <button
              onClick={() => {
                playTypewriterClack();
                setFontSize('sm');
              }}
              className={`px-2 py-0.5 rounded font-bold ${fontSize === 'sm' ? 'bg-amber-600 text-white' : 'text-stone-400 hover:text-stone-200'}`}
            >
              A-
            </button>
            <button
              onClick={() => {
                playTypewriterClack();
                setFontSize('base');
              }}
              className={`px-2 py-0.5 rounded font-bold ${fontSize === 'base' ? 'bg-amber-600 text-white' : 'text-stone-400 hover:text-stone-200'}`}
            >
              A
            </button>
            <button
              onClick={() => {
                playTypewriterClack();
                setFontSize('lg');
              }}
              className={`px-2 py-0.5 rounded font-bold ${fontSize === 'lg' ? 'bg-amber-600 text-white' : 'text-stone-400 hover:text-stone-200'}`}
            >
              A+
            </button>
          </div>

          <button
            onClick={copyCompleteDossier}
            className="px-2.5 py-1.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/70 flex items-center gap-1 transition-colors"
          >
            {copiedCitation === 'complete_master_dossier' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Copiar Completo</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3. MOBILE READING CONTROLS & COPY BAR */}
      <div className="lg:hidden flex items-center justify-between px-3 py-2 bg-[#121215] border-b border-stone-800 text-xs shrink-0 gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 font-mono text-xs text-stone-400 shrink-0">
          <span className="text-stone-300 font-bold">Fonte:</span>
          <div className="inline-flex rounded border border-stone-800 bg-stone-900 p-0.5">
            <button
              onClick={() => {
                playTypewriterClack();
                setFontSize('sm');
              }}
              className={`px-2 py-0.5 rounded font-bold ${fontSize === 'sm' ? 'bg-amber-600 text-white' : 'text-stone-400'}`}
            >
              A-
            </button>
            <button
              onClick={() => {
                playTypewriterClack();
                setFontSize('base');
              }}
              className={`px-2 py-0.5 rounded font-bold ${fontSize === 'base' ? 'bg-amber-600 text-white' : 'text-stone-400'}`}
            >
              A
            </button>
            <button
              onClick={() => {
                playTypewriterClack();
                setFontSize('lg');
              }}
              className={`px-2 py-0.5 rounded font-bold ${fontSize === 'lg' ? 'bg-amber-600 text-white' : 'text-stone-400'}`}
            >
              A+
            </button>
          </div>
        </div>

        <button
          onClick={copyCompleteDossier}
          className="px-2.5 py-1.5 bg-amber-950/80 text-amber-300 text-xs font-mono rounded border border-amber-700/60 flex items-center gap-1 active:scale-95 shrink-0"
        >
          {copiedCitation === 'complete_master_dossier' ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span>Copiado!</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Copiar Dossiê Completo</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Index Dropdown Drawer */}
      {isMobileIndexOpen && (
        <div className="lg:hidden bg-[#16161a] border-b border-stone-800 p-3 space-y-2 animate-in slide-in-from-top duration-200 z-30 shadow-xl max-w-full overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-amber-400 font-bold pb-2 border-b border-stone-800">
            <span>Índice Rápido do Dossiê</span>
            <button onClick={() => setIsMobileIndexOpen(false)} className="text-stone-400 hover:text-stone-100 p-1">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-1.5 max-h-60 overflow-y-auto">
            {getSidebarSections().map((sec) => (
              <button
                key={sec.num}
                onClick={() => {
                  playTypewriterClack();
                  setActiveCanonicalSection(sec.num);
                  setIsMobileIndexOpen(false);
                  const el = document.getElementById(sec.target);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-left px-3 py-2 text-xs font-mono rounded bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 flex items-center justify-between truncate"
              >
                <span className="truncate">{sec.label}</span>
                <ChevronDown className="w-3.5 h-3.5 text-amber-500 shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 4. MAIN FULL-PAGE LAYOUT WITH SIDEBAR INDEX & SIDE SCROLLBAR */}
      <div className="flex-1 flex overflow-hidden relative max-w-full">
        
        {/* DESKTOP SIDEBAR INDEX (TABLE OF CONTENTS WITH SIDE SCROLLBAR) */}
        <aside className="hidden lg:flex flex-col w-64 xl:w-72 bg-[#151518] border-r border-stone-800 p-4 overflow-y-auto shrink-0 space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-stone-800 text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
            <BookOpen className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="truncate">Índice do Dossiê</span>
          </div>

          <div className="space-y-1">
            {getSidebarSections().map((sec) => (
              <button
                key={sec.num}
                onClick={() => {
                  playTypewriterClack();
                  setActiveCanonicalSection(sec.num);
                  const el = document.getElementById(sec.target);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`w-full text-left px-3 py-2 text-xs font-mono rounded-lg transition-all flex items-center justify-between ${
                  activeCanonicalSection === sec.num
                    ? 'bg-amber-950/60 text-amber-300 border border-amber-600/50 font-bold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900 border border-transparent'
                }`}
              >
                <span className="truncate pr-1">{sec.label}</span>
                <span className="text-[10px] text-stone-500 font-mono shrink-0">#{sec.num}</span>
              </button>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-stone-800/80 text-[11px] font-mono text-stone-500 space-y-1">
            <div className="text-amber-400/90 font-semibold">Cátedra Historiográfica</div>
            <p className="text-stone-400 font-sans leading-relaxed text-[11px]">
              Documentos validados conforme padrões internacionais.
            </p>
          </div>
        </aside>

        {/* MAIN CONTENT AREA (WITH SIDE SCROLLBAR / BARRA DE ROLAR LATERAL) */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-6 lg:p-10 space-y-8 bg-[#121214] overscroll-contain max-w-full box-border">
          
          {/* TAB: CANONICAL EDITORIAL STANDARD (8 MANDATORY SECTIONS) */}
          {activeTab === 'canonical' && canonicalDossier && (
            <article className="space-y-6 sm:space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <div className="bg-[#161619] border border-amber-600/40 p-4 sm:p-6 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500/10 border-l border-b border-amber-500/30 px-3 py-1 rounded-bl text-[10px] font-mono text-amber-300 hidden sm:flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AUDITORIA ACADÊMICA CONFORME · 8 CRITÉRIOS</span>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-amber-950/60 border border-amber-600/40 rounded-xl text-amber-400 shrink-0">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="space-y-2 min-w-0 flex-1">
                    <h3 className="text-base sm:text-xl font-serif font-bold text-stone-100 flex flex-wrap items-center gap-2">
                      <span>Padrão Editorial Canônico Obrigatório</span>
                      <span className="text-[11px] font-mono font-normal text-amber-400/90 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/60">
                        8 Seções
                      </span>
                    </h3>
                    <p className={`text-stone-300 leading-relaxed font-sans ${getFontSizeClass('body')}`}>
                      Estrutura historiográfica padronizada em conformidade com as diretrizes editoriais acadêmicas: cronologia corrigida com datas exatas, fundos arquivísticos certificados (RGASPI, GARF, AP RF, Yale Avalon, Wilson Center), debate historiográfico tripartite e citações literais verificadas com indicação de página e edição.
                    </p>

                    <div className="grid grid-cols-2 xs:grid-cols-4 gap-1.5 sm:gap-2 pt-2 text-[10px] sm:text-[11px] font-mono">
                      <div className="bg-stone-900 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1 truncate">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">1. Identificação</span>
                      </div>
                      <div className="bg-stone-900 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1 truncate">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">2. Contexto</span>
                      </div>
                      <div className="bg-stone-900 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1 truncate">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">3. Cronologia</span>
                      </div>
                      <div className="bg-stone-900 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1 truncate">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">4. Arquivos</span>
                      </div>
                      <div className="bg-stone-900 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1 truncate">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">5. Responsabilidades</span>
                      </div>
                      <div className="bg-stone-900 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1 truncate">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">6. Historiografia</span>
                      </div>
                      <div className="bg-stone-900 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1 truncate">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">7. Citações</span>
                      </div>
                      <div className="bg-stone-900 border border-stone-800 p-2 rounded text-stone-300 flex items-center gap-1 truncate">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">8. Bibliografia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEÇÃO 1: IDENTIFICAÇÃO */}
              <section id="section-1" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4 max-w-full overflow-hidden">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      1
                    </span>
                    <h2 className="text-sm sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide truncate">
                      Identificação do Acontecimento
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      const text = `1. IDENTIFICAÇÃO:\nNome: ${canonicalDossier.identificacao.nomeAcontecimento}\nData: ${canonicalDossier.identificacao.dataELocalizacao.dataExata}\nLocal: ${canonicalDossier.identificacao.dataELocalizacao.localizacaoPrecisa}\nRegime: ${canonicalDossier.identificacao.governoEResponsaveis.regimeVigente}\nLíderes: ${canonicalDossier.identificacao.governoEResponsaveis.chefesDeEstadoEGoverno.join(', ')}`;
                      copyToClipboard(text, 'sec1');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[36px] px-2.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 shrink-0"
                  >
                    {copiedCitation === 'sec1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4 max-w-full overflow-hidden">
                  <div>
                    <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block">
                      Nome Oficial do Acontecimento
                    </span>
                    <h3 className={`font-serif font-bold text-amber-300 mt-1 break-words ${getFontSizeClass('heading')}`}>
                      {canonicalDossier.identificacao.nomeAcontecimento}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-2">
                    <div className="bg-stone-900/80 border border-stone-800 p-3.5 sm:p-4 rounded-xl space-y-2.5 max-w-full overflow-hidden">
                      <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                        <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                        <span className="font-semibold truncate">Data e Localização Precisa</span>
                      </div>
                      <div className={`text-stone-200 font-sans leading-relaxed break-words ${getFontSizeClass('body')}`}>
                        <strong className="text-stone-100">Datação Exata:</strong> {canonicalDossier.identificacao.dataELocalizacao.dataExata}
                      </div>
                      {canonicalDossier.identificacao.dataELocalizacao.calendarioNotas && (
                        <div className={`text-stone-400 bg-stone-950 p-2.5 rounded border border-stone-800 break-words ${getFontSizeClass('body')}`}>
                          {canonicalDossier.identificacao.dataELocalizacao.calendarioNotas}
                        </div>
                      )}
                      <div className={`text-stone-300 font-sans break-words ${getFontSizeClass('body')}`}>
                        <strong className="text-stone-100">Localização Geográfica:</strong> {canonicalDossier.identificacao.dataELocalizacao.localizacaoPrecisa}
                      </div>
                      {canonicalDossier.identificacao.dataELocalizacao.teatroOperacoes && (
                        <div className={`text-stone-400 break-words ${getFontSizeClass('body')}`}>
                          <strong className="text-stone-300">Teatro de Operações:</strong> {canonicalDossier.identificacao.dataELocalizacao.teatroOperacoes}
                        </div>
                      )}
                    </div>

                    <div className="bg-stone-900/80 border border-stone-800 p-3.5 sm:p-4 rounded-xl space-y-2.5 max-w-full overflow-hidden">
                      <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                        <Building2 className="w-4 h-4 text-amber-500 shrink-0" />
                        <span className="font-semibold truncate">Governo e Responsáveis</span>
                      </div>
                      <div className={`text-stone-200 font-sans break-words ${getFontSizeClass('body')}`}>
                        <strong className="text-stone-100">Regime Vigente:</strong> {canonicalDossier.identificacao.governoEResponsaveis.regimeVigente}
                      </div>
                      <div className={`text-stone-300 font-sans ${getFontSizeClass('body')}`}>
                        <strong className="text-stone-100 block mb-1">Chefes de Estado e Governo:</strong>
                        <div className="flex flex-wrap gap-1.5">
                          {canonicalDossier.identificacao.governoEResponsaveis.chefesDeEstadoEGoverno.map((lider, i) => (
                            <span key={i} className="px-2 py-0.5 bg-stone-800 border border-stone-700 text-stone-200 rounded text-xs font-sans break-words">
                              {lider}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className={`text-stone-300 font-sans pt-1 ${getFontSizeClass('body')}`}>
                        <strong className="text-stone-100 block mb-1">Órgãos Executores Diretos:</strong>
                        <div className="flex flex-wrap gap-1.5">
                          {canonicalDossier.identificacao.governoEResponsaveis.orgaosExecutoresDiretos.map((org, i) => (
                            <span key={i} className="px-2 py-0.5 bg-red-950/40 border border-red-700/50 text-red-200 rounded text-xs font-sans break-words">
                              {org}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SEÇÃO 2: CONTEXTO HISTÓRICO */}
              <section id="section-2" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4 max-w-full overflow-hidden">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      2
                    </span>
                    <h2 className="text-sm sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide truncate">
                      Contexto Histórico
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      const text = `2. CONTEXTO HISTÓRICO:\nSituação Anterior:\n${canonicalDossier.contextoHistorico.situacaoAnterior}\nCausas Políticas:\n${canonicalDossier.contextoHistorico.causasPoliticas}\nCausas Econômicas:\n${canonicalDossier.contextoHistorico.causasEconomicas}\nCausas Sociais:\n${canonicalDossier.contextoHistorico.causasSociais}`;
                      copyToClipboard(text, 'sec2');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[36px] px-2.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 shrink-0"
                  >
                    {copiedCitation === 'sec2' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4 max-w-full overflow-hidden">
                  <div className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl max-w-full overflow-hidden">
                    <h3 className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-2">
                      Situação Anterior Estrutural
                    </h3>
                    <p className={`text-stone-300 font-serif leading-relaxed break-words ${getFontSizeClass('body')}`}>
                      {canonicalDossier.contextoHistorico.situacaoAnterior}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-stone-900/80 border border-stone-800 p-3.5 sm:p-4 rounded-xl space-y-2 max-w-full overflow-hidden">
                      <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold block">
                        Causas Políticas
                      </span>
                      <p className={`text-stone-300 font-sans leading-relaxed break-words ${getFontSizeClass('body')}`}>
                        {canonicalDossier.contextoHistorico.causasPoliticas}
                      </p>
                    </div>

                    <div className="bg-stone-900/80 border border-stone-800 p-3.5 sm:p-4 rounded-xl space-y-2 max-w-full overflow-hidden">
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold block">
                        Causas Econômicas
                      </span>
                      <p className={`text-stone-300 font-sans leading-relaxed break-words ${getFontSizeClass('body')}`}>
                        {canonicalDossier.contextoHistorico.causasEconomicas}
                      </p>
                    </div>

                    <div className="bg-stone-900/80 border border-stone-800 p-3.5 sm:p-4 rounded-xl space-y-2 max-w-full overflow-hidden">
                      <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold block">
                        Causas Sociais
                      </span>
                      <p className={`text-stone-300 font-sans leading-relaxed break-words ${getFontSizeClass('body')}`}>
                        {canonicalDossier.contextoHistorico.causasSociais}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SEÇÃO 3: NARRATIVA CRONOLÓGICA */}
              <section id="section-3" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4 max-w-full overflow-hidden">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      3
                    </span>
                    <h2 className="text-sm sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide truncate">
                      Narrativa Cronológica
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      let text = `3. NARRATIVA CRONOLÓGICA:\n${canonicalDossier.narrativaCronologica.sinteseNarrativaGeral}\n\n`;
                      canonicalDossier.narrativaCronologica.acontecimentosEmOrdem.forEach(i => {
                        text += `[${i.dataExata}] ${i.acontecimento}\nPersonagens: ${i.personagensEInstituicoes}\nDecisões: ${i.decisoesTomadas}\n\n`;
                      });
                      copyToClipboard(text, 'sec3');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[36px] px-2.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 shrink-0"
                  >
                    {copiedCitation === 'sec3' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4 max-w-full overflow-hidden">
                  <div className={`bg-stone-900/80 border border-stone-800 p-4 rounded-xl text-stone-300 leading-relaxed font-sans break-words ${getFontSizeClass('body')}`}>
                    <strong className="text-amber-400 font-mono block mb-1">Síntese do Desenvolvimento dos Fatos:</strong> 
                    {canonicalDossier.narrativaCronologica.sinteseNarrativaGeral}
                  </div>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block">
                      Acontecimentos em Estrita Ordem Cronológica ({canonicalDossier.narrativaCronologica.acontecimentosEmOrdem.length} Marcos Verificados):
                    </span>

                    <div className="space-y-3">
                      {canonicalDossier.narrativaCronologica.acontecimentosEmOrdem.map((item, idx) => (
                        <div key={idx} className="bg-stone-900/90 border border-stone-800 rounded-xl p-4 sm:p-5 space-y-2.5 hover:border-amber-700/50 transition-colors max-w-full overflow-hidden">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-2">
                            <span className="px-2.5 py-1 bg-amber-950/80 text-amber-300 font-mono text-xs font-semibold rounded-lg border border-amber-600/40">
                              {item.dataExata}
                            </span>
                            <span className="text-xs font-mono text-stone-400">
                              Marco #{idx + 1}
                            </span>
                          </div>

                          <h3 className={`font-serif font-bold text-stone-100 break-words ${getFontSizeClass('heading')}`}>
                            {item.acontecimento}
                          </h3>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            <div className={`text-stone-300 bg-stone-950 p-3 rounded-lg border border-stone-800 break-words ${getFontSizeClass('body')}`}>
                              <span className="text-[11px] font-mono text-amber-400 uppercase block font-semibold mb-1">
                                Personagens e Instituições
                              </span>
                              {item.personagensEInstituicoes}
                            </div>
                            <div className={`text-stone-300 bg-stone-950 p-3 rounded-lg border border-stone-800 break-words ${getFontSizeClass('body')}`}>
                              <span className="text-[11px] font-mono text-red-400 uppercase block font-semibold mb-1">
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

              {/* SEÇÃO 4: DOCUMENTOS E EVIDÊNCIAS */}
              <section id="section-4" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-5 max-w-full overflow-hidden">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      4
                    </span>
                    <h2 className="text-sm sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide truncate">
                      Documentos e Evidências
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      let text = `4. DOCUMENTOS E EVIDÊNCIAS:\nDocumentos Originais:\n`;
                      canonicalDossier.documentosEEvidencias.documentosOriginais.forEach(d => {
                        text += `- ${d.titulo} (${d.fundoArquivistico})\n${d.descricaoConteudo}\n`;
                      });
                      copyToClipboard(text, 'sec4');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[36px] px-2.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 shrink-0"
                  >
                    {copiedCitation === 'sec4' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <Archive className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="truncate">Documentos Originais e Fundos de Arquivo</span>
                  </h3>
                  <div className="space-y-3">
                    {canonicalDossier.documentosEEvidencias.documentosOriginais.map((doc, idx) => (
                      <div key={idx} className="bg-stone-900/80 border border-stone-800 p-4 sm:p-5 rounded-xl space-y-2.5 max-w-full overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className={`font-serif font-bold text-stone-100 break-words ${getFontSizeClass('heading')}`}>
                            {doc.titulo}
                          </h4>
                          <span className="px-2.5 py-1 bg-emerald-950/70 text-emerald-300 font-mono text-xs rounded-lg border border-emerald-600/40 shrink-0">
                            {doc.autenticidadeEStatus}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-amber-400/90 bg-stone-950 px-3 py-2 rounded-lg border border-stone-800 break-words">
                          {doc.fundoArquivistico} · {doc.instituicaoGuarda}
                        </div>
                        <p className={`text-stone-300 font-sans leading-relaxed break-words ${getFontSizeClass('body')}`}>
                          {doc.descricaoConteudo}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {canonicalDossier.documentosEEvidencias.fotografiasERegistros.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Fotografias e Registros Probatórios</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {canonicalDossier.documentosEEvidencias.fotografiasERegistros.map((foto, idx) => (
                        <div key={idx} className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl space-y-2 max-w-full overflow-hidden">
                          <span className={`font-serif font-semibold text-stone-200 block break-words ${getFontSizeClass('body')}`}>
                            {foto.registroOuFoto}
                          </span>
                          <span className="text-xs font-mono text-stone-400 block truncate">
                            Acervo: {foto.acervoOrigem} ({foto.anoEIdentificador})
                          </span>
                          <p className={`text-stone-300 font-sans break-words ${getFontSizeClass('body')}`}>
                            <strong className="text-amber-400 font-mono text-[10px] uppercase block mb-0.5">Significado Probatório:</strong> {foto.significadoProbatório}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {canonicalDossier.documentosEEvidencias.testemunhos.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                      <Quote className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Testemunhos Oculares Verificados</span>
                    </h3>
                    <div className="space-y-3">
                      {canonicalDossier.documentosEEvidencias.testemunhos.map((t, idx) => (
                        <div key={idx} className="bg-stone-900/90 border-l-4 border-amber-600 p-4 rounded-r-xl space-y-2.5 max-w-full overflow-hidden">
                          <blockquote className={`font-serif italic text-stone-200 leading-relaxed break-words ${getFontSizeClass('quote')}`}>
                            "{t.trechoDepoimento}"
                          </blockquote>
                          <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-mono text-stone-400 border-t border-stone-800 pt-2">
                            <span className="text-amber-400 font-semibold truncate">{t.testemunha} ({t.funcaoOrigem})</span>
                            <span className="text-stone-500 shrink-0">{t.referenciaVerificada}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {canonicalDossier.documentosEEvidencias.decretosECorrespondencias.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Decretos e Correspondências</span>
                    </h3>
                    <div className="space-y-3">
                      {canonicalDossier.documentosEEvidencias.decretosECorrespondencias.map((dec, idx) => (
                        <div key={idx} className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl space-y-1.5 max-w-full overflow-hidden">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <strong className="text-amber-300 font-mono text-xs">{dec.codigoOuNumero}</strong>
                            <span className="text-stone-400 font-mono text-xs">{dec.dataEmissao} · {dec.orgaoEmissor}</span>
                          </div>
                          <p className={`text-stone-300 font-sans break-words ${getFontSizeClass('body')}`}>{dec.teorDispositivo}</p>
                          <div className="text-[11px] font-mono text-stone-500 pt-1">
                            Arquivo: {dec.localizacaoArquivo}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* SEÇÃO 5: RESPONSABILIDADES E CONSEQUÊNCIAS */}
              <section id="section-5" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4 max-w-full overflow-hidden">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      5
                    </span>
                    <h2 className="text-sm sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide truncate">
                      Responsabilidades e Consequências
                    </h2>
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
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[36px] px-2.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 shrink-0"
                  >
                    {copiedCitation === 'sec5' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4 max-w-full overflow-hidden">
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                      Responsáveis Políticos e Institucionais
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {canonicalDossier.responsabilidadesEConsequencias.responsaveisPoliticosEInstitucionais.map((resp, idx) => (
                        <div key={idx} className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl space-y-1.5 max-w-full overflow-hidden">
                          <span className={`font-serif font-bold text-red-300 block break-words ${getFontSizeClass('heading')}`}>
                            {resp.agenteOuOrgao}
                          </span>
                          <span className="text-xs font-mono text-stone-400 block truncate">
                            {resp.funcaoCargo}
                          </span>
                          <p className={`text-stone-300 font-sans leading-relaxed pt-1 break-words ${getFontSizeClass('body')}`}>
                            {resp.responsabilidadeEspecifica}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-red-950/20 border border-red-800/40 p-4 sm:p-5 rounded-xl space-y-3 max-w-full overflow-hidden">
                    <h3 className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>Vítimas e Impactos Quantificados</span>
                    </h3>
                    <div className={`font-serif font-semibold text-stone-100 leading-snug break-words ${getFontSizeClass('heading')}`}>
                      {canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.estimativasQuantitativas}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-800">
                      <div>
                        <strong className="text-stone-300 font-mono text-xs uppercase block mb-1">Impacto Demográfico e Humano:</strong>
                        <p className={`text-stone-300 font-sans leading-relaxed break-words ${getFontSizeClass('body')}`}>{canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.impactosDemograficosEHumanos}</p>
                      </div>
                      <div>
                        <strong className="text-stone-300 font-mono text-xs uppercase block mb-1">Impacto Econômico:</strong>
                        <p className={`text-stone-300 font-sans leading-relaxed break-words ${getFontSizeClass('body')}`}>{canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.impactosEconomicos}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl space-y-1.5 max-w-full overflow-hidden">
                      <strong className="text-amber-400 font-mono text-xs uppercase block">Consequências Imediatas:</strong>
                      <p className={`text-stone-300 font-sans leading-relaxed break-words ${getFontSizeClass('body')}`}>{canonicalDossier.responsabilidadesEConsequencias.consequenciasImediatas}</p>
                    </div>
                    <div className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl space-y-1.5 max-w-full overflow-hidden">
                      <strong className="text-amber-400 font-mono text-xs uppercase block">Consequências a Longo Prazo:</strong>
                      <p className={`text-stone-300 font-sans leading-relaxed break-words ${getFontSizeClass('body')}`}>{canonicalDossier.responsabilidadesEConsequencias.consequenciasLongoPrazo}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SEÇÃO 6: DEBATE HISTORIOGRÁFICO */}
              <section id="section-6" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4 max-w-full overflow-hidden">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      6
                    </span>
                    <h2 className="text-sm sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide truncate">
                      Debate Historiográfico Tripartite
                    </h2>
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
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[36px] px-2.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 shrink-0"
                  >
                    {copiedCitation === 'sec6' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4 max-w-full overflow-hidden">
                  <div className="space-y-3">
                    {canonicalDossier.debateHistoriografico.interpretacoesDiferentes.map((escola, idx) => (
                      <div key={idx} className="bg-stone-900/90 border border-stone-800 p-4 sm:p-5 rounded-xl space-y-2.5 max-w-full overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-2">
                          <h3 className={`font-serif font-bold text-amber-300 break-words ${getFontSizeClass('heading')}`}>
                            {escola.correnteEscola}
                          </h3>
                          <span className="text-xs font-mono text-stone-400 truncate max-w-full">
                            Autores: {escola.principaisAutores.join(', ')}
                          </span>
                        </div>
                        <div className="space-y-2.5 pt-1 font-sans">
                          <div>
                            <strong className="text-emerald-400 font-mono text-xs uppercase block mb-1">Tese Historiográfica Central:</strong>
                            <p className={`text-stone-200 leading-relaxed break-words ${getFontSizeClass('body')}`}>{escola.teseCentral}</p>
                          </div>
                          <div>
                            <strong className="text-amber-400 font-mono text-xs uppercase block mb-1">Antítese e Limitações Críticas:</strong>
                            <p className={`text-stone-300 leading-relaxed break-words ${getFontSizeClass('body')}`}>{escola.antiteseCritica}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl space-y-1.5 max-w-full overflow-hidden">
                      <strong className="text-emerald-400 font-mono text-xs uppercase block">Consensos Acadêmicos Estabelecidos:</strong>
                      <p className={`text-stone-300 font-sans leading-relaxed break-words ${getFontSizeClass('body')}`}>{canonicalDossier.debateHistoriografico.consensosAcademicos}</p>
                    </div>
                    <div className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl space-y-1.5 max-w-full overflow-hidden">
                      <strong className="text-amber-400 font-mono text-xs uppercase block">Controvérsias e Limitações das Fontes:</strong>
                      <p className={`text-stone-300 font-sans leading-relaxed break-words ${getFontSizeClass('body')}`}>{canonicalDossier.debateHistoriografico.controversiasELimitacoesDasFontes}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SEÇÃO 7: CITAÇÕES VERIFICADAS */}
              <section id="section-7" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4 max-w-full overflow-hidden">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      7
                    </span>
                    <h2 className="text-sm sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide truncate">
                      Citações Verificadas
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      let text = `7. CITAÇÕES VERIFICADAS:\n`;
                      canonicalDossier.citacoesVerificadas.forEach(c => {
                        text += `"${c.trechoLiteral}"\n— ${c.autor}, ${c.obra} (${c.paginaExata})\n\n`;
                      });
                      copyToClipboard(text, 'sec7');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[36px] px-2.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 shrink-0"
                  >
                    {copiedCitation === 'sec7' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-4 max-w-full overflow-hidden">
                  {canonicalDossier.citacoesVerificadas.map((cit, idx) => (
                    <div key={idx} className="bg-stone-900/90 border border-stone-800 rounded-xl p-4 sm:p-5 space-y-3 max-w-full overflow-hidden">
                      <div className="flex items-start gap-3">
                        <Quote className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                        <blockquote className={`font-serif italic text-stone-100 leading-relaxed break-words ${getFontSizeClass('quote')}`}>
                          "{cit.trechoLiteral}"
                        </blockquote>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-stone-800 pt-2 text-xs font-mono">
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <span className="text-amber-400 font-bold block truncate">{cit.autor}</span>
                          <span className="text-stone-400 block text-xs truncate">{cit.obra} · {cit.edicaoEditoraAno}</span>
                        </div>
                        <span className="px-2.5 py-1 bg-amber-950/80 text-amber-300 font-mono text-xs font-bold rounded-lg border border-amber-700/60 shrink-0">
                          {cit.paginaExata}
                        </span>
                      </div>

                      <div className={`bg-stone-950 p-3 rounded-lg border border-stone-800 text-stone-300 font-sans break-words ${getFontSizeClass('body')}`}>
                        <strong className="text-stone-400 font-mono text-xs uppercase block mb-1">Análise Crítica Contextual:</strong>
                        {cit.analiseContextual}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SEÇÃO 8: BIBLIOGRAFIA */}
              <section id="section-8" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4 max-w-full overflow-hidden">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between border-b border-stone-800 pb-3 gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      8
                    </span>
                    <h2 className="text-sm sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide truncate">
                      Bibliografia Acadêmica
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      let text = `8. BIBLIOGRAFIA:\n`;
                      canonicalDossier.bibliografia.forEach(b => {
                        text += `- ABNT: ${b.entradaAbnt}\n  Chicago: ${b.entradaChicago}\n\n`;
                      });
                      copyToClipboard(text, 'sec8');
                    }}
                    className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1 font-mono self-start xs:self-auto min-h-[36px] px-2.5 py-1.5 rounded-lg bg-stone-900 border border-stone-800 shrink-0"
                  >
                    {copiedCitation === 'sec8' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>Copiar Seção</span>
                  </button>
                </div>

                <div className="space-y-3 max-w-full overflow-hidden">
                  {canonicalDossier.bibliografia.map((ref, idx) => (
                    <div key={idx} className="bg-stone-900/80 border border-stone-800 p-4 rounded-xl space-y-2.5 max-w-full overflow-hidden">
                      <div className="flex items-center justify-between text-xs font-mono text-stone-400 border-b border-stone-800 pb-2">
                        <span className="px-2.5 py-1 bg-stone-800 text-amber-400 rounded-lg">
                          {ref.tipoFonte}
                        </span>
                        {ref.isbnOuReferencia && (
                          <span className="text-stone-500 truncate max-w-[150px] sm:max-w-xs">{ref.isbnOuReferencia}</span>
                        )}
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm font-mono overflow-x-auto">
                        <div>
                          <span className="text-xs font-mono text-stone-500 uppercase block mb-0.5">Norma ABNT:</span>
                          <p className={`text-stone-200 select-all leading-relaxed break-all sm:break-words ${getFontSizeClass('body')}`}>{ref.entradaAbnt}</p>
                        </div>
                        <div>
                          <span className="text-xs font-mono text-stone-500 uppercase block mb-0.5">Chicago Manual of Style:</span>
                          <p className={`text-stone-400 select-all leading-relaxed break-all sm:break-words ${getFontSizeClass('body')}`}>{ref.entradaChicago}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </article>
          )}

          {/* TAB: COMPLETE ACADEMIC ESSAY */}
          {activeTab === 'essay' && essay && (
            <article className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <div id="essay-sec-1" className="bg-[#161619] border border-stone-800 p-4 sm:p-6 rounded-xl space-y-4 max-w-full overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-400 border-b border-stone-800 pb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-stone-300 font-medium truncate">{essay.authorCatedra}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-stone-500 shrink-0" />
                      <span>~{essay.estimatedReadingMinutes} min</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <AlignLeft className="w-3 h-3 text-stone-500 shrink-0" />
                      <span>{essay.wordCount} pal.</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className={`font-serif font-bold text-stone-100 leading-snug break-words ${getFontSizeClass('heading')}`}>
                    {essay.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-serif italic text-amber-400/90 mt-1.5 break-words">
                    {essay.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-800">
                  <button
                    onClick={copyFullEssay}
                    className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-400 text-xs font-mono rounded-lg border border-stone-800 flex items-center justify-center gap-2"
                  >
                    {copiedCitation === 'full_essay' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Ensaio Acadêmico Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copiar Ensaio Completo com Bibliografia</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {essay.epigraph && (
                <div className="border-l-4 border-amber-600/80 pl-4 py-3 my-4 bg-stone-900/50 rounded-r-xl max-w-full overflow-hidden">
                  <blockquote className={`font-serif italic text-stone-300 leading-relaxed break-words ${getFontSizeClass('quote')}`}>
                    "{essay.epigraph.text}"
                  </blockquote>
                  <cite className="block text-xs font-mono text-amber-400 mt-2 not-italic truncate">
                    — {essay.epigraph.author}, <span className="text-stone-400">{essay.epigraph.work}</span>
                  </cite>
                </div>
              )}

              <section className="space-y-3 max-w-full overflow-hidden">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção I
                  </span>
                  <span className="text-stone-600">/</span>
                  <h3 className="text-xs sm:text-base font-serif font-semibold text-stone-200 truncate">
                    Síntese Geral e Antecedentes Estruturais
                  </h3>
                </div>
                <div className={`font-serif text-stone-300 text-justify ${getFontSizeClass('body')} whitespace-pre-line leading-relaxed space-y-4 break-words`}>
                  {essay.narrativeOverview}
                </div>
              </section>

              <section id="essay-sec-2" className="space-y-4 max-w-full overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest shrink-0">
                      Seção II
                    </span>
                    <span className="text-stone-600">/</span>
                    <h3 className="text-xs sm:text-base font-serif font-semibold text-stone-200 truncate">
                      A História dos Acontecimentos
                    </h3>
                  </div>
                  {detailedEpisodes.length > 0 && (
                    <button
                      onClick={() => {
                        playTypewriterClack();
                        setActiveTab('stories');
                      }}
                      className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline shrink-0"
                    >
                      <ScrollText className="w-3.5 h-3.5" />
                      <span>Crônicas ({detailedEpisodes.length})</span>
                    </button>
                  )}
                </div>

                {chronologies.length > 0 && (
                  <div className="bg-[#161619] border border-stone-800 rounded-xl p-4 my-2 max-w-full overflow-hidden">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-3 uppercase tracking-wider">
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>Marcos Históricos Decisivos</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {chronologies.map((c, idx) => (
                        <div key={idx} className="bg-stone-900 p-3 rounded-lg border border-stone-800 max-w-full overflow-hidden">
                          <span className="font-mono text-amber-500 font-bold block text-xs mb-1">{c.date}</span>
                          <span className={`font-serif font-semibold text-stone-200 block break-words ${getFontSizeClass('body')}`}>{c.event}</span>
                          <p className={`font-serif text-stone-400 mt-1 leading-relaxed break-words ${getFontSizeClass('body')}`}>{c.significance}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className={`font-serif text-stone-300 text-justify ${getFontSizeClass('body')} whitespace-pre-line leading-relaxed space-y-4 break-words`}>
                  {essay.historicalDevelopment}
                </div>
              </section>

              <section id="essay-sec-3" className="space-y-3 max-w-full overflow-hidden">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção III
                  </span>
                  <span className="text-stone-600">/</span>
                  <h3 className="text-xs sm:text-base font-serif font-semibold text-stone-200 truncate">
                    Mecanismos Institucionais e Coercitivos
                  </h3>
                </div>
                <div className={`font-serif text-stone-300 text-justify ${getFontSizeClass('body')} whitespace-pre-line leading-relaxed space-y-4 break-words`}>
                  {essay.institutionalAndStateMechanisms}
                </div>
              </section>

              <section id="essay-sec-4" className="space-y-3 max-w-full overflow-hidden">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção IV
                  </span>
                  <span className="text-stone-600">/</span>
                  <h3 className="text-xs sm:text-base font-serif font-semibold text-stone-200 truncate">
                    Debate Historiográfico e Fontes
                  </h3>
                </div>
                <div className={`font-serif text-stone-300 text-justify ${getFontSizeClass('body')} whitespace-pre-line leading-relaxed space-y-4 break-words`}>
                  {essay.historiographicalDebate}
                </div>
              </section>

              <section id="essay-sec-5" className="space-y-4 max-w-full overflow-hidden">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção V
                  </span>
                  <span className="text-stone-600">/</span>
                  <h3 className="text-xs sm:text-base font-serif font-semibold text-stone-200 truncate">
                    Citações de Pesquisadores
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {essay.scholarlyQuotes.map((sq, idx) => (
                    <div key={idx} className="bg-[#161619] border border-stone-700/80 rounded-xl p-4 sm:p-5 space-y-3 max-w-full overflow-hidden">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-2.5">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="w-6 h-6 rounded-full bg-amber-950/80 border border-amber-600/60 text-amber-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">
                            {idx + 1}
                          </span>
                          <span className="font-mono text-sm font-bold text-amber-400 truncate">
                            {sq.author}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-stone-400 truncate max-w-full">
                          {sq.work} ({sq.year}, {sq.pageOrDoc})
                        </span>
                      </div>

                      <div className="bg-[#111114] p-4 rounded-xl border border-stone-800 relative max-w-full overflow-hidden">
                        <Quote className="w-4 h-4 text-stone-600 absolute top-3 right-3" />
                        <blockquote className={`font-serif italic text-stone-200 leading-relaxed pr-6 break-words ${getFontSizeClass('quote')}`}>
                          "{sq.quote}"
                        </blockquote>
                      </div>

                      <div className={`font-serif text-stone-300 leading-relaxed break-words ${getFontSizeClass('body')}`}>
                        <span className="font-mono text-amber-400 font-semibold uppercase text-xs tracking-wider block mb-1">
                          Análise Historiográfica:
                        </span>
                        {sq.historicalAnalysis}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="essay-sec-6" className="space-y-3 max-w-full overflow-hidden">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção VI
                  </span>
                  <span className="text-stone-600">/</span>
                  <h3 className="text-xs sm:text-base font-serif font-semibold text-stone-200 truncate">
                    Fundos Arquivísticos
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {essay.archivalCorpus.map((arc, idx) => (
                    <div key={idx} className="bg-[#161619] p-4 rounded-xl border border-stone-800 space-y-2 max-w-full overflow-hidden">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-200">
                        <Archive className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="truncate">{arc.archiveName}</span>
                      </div>
                      <div className="text-xs font-mono text-amber-500 font-bold truncate">
                        {arc.fondCode}
                      </div>
                      <p className={`font-serif text-stone-400 leading-relaxed break-words ${getFontSizeClass('body')}`}>
                        {arc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="essay-sec-7" className="space-y-3 max-w-full overflow-hidden">
                <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                    Seção VII
                  </span>
                  <span className="text-stone-600">/</span>
                  <h3 className="text-xs sm:text-base font-serif font-semibold text-stone-200 truncate">
                    Conclusão e Balanço Histórico
                  </h3>
                </div>
                <div className={`font-serif text-stone-300 text-justify ${getFontSizeClass('body')} whitespace-pre-line leading-relaxed space-y-4 break-words`}>
                  {essay.concludingAssessment}
                </div>
              </section>

              <section id="essay-sec-8" className="space-y-3 pt-4 border-t border-stone-800 max-w-full overflow-hidden">
                <div className="flex items-center justify-between pb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                    <h3 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-stone-300 font-bold truncate">
                      Referências Bibliográficas
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-stone-500 shrink-0">ABNT</span>
                </div>

                <div className="bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-5 space-y-2.5 max-w-full overflow-hidden">
                  {essay.bibliographicReferences.map((ref, idx) => (
                    <div key={idx} className={`font-mono text-stone-300 leading-relaxed pb-2.5 border-b border-stone-800 last:border-none last:pb-0 break-all sm:break-words ${getFontSizeClass('body')}`}>
                      {ref}
                    </div>
                  ))}
                </div>
              </section>
            </article>
          )}

          {/* TAB: STORIES & CHRONICLES */}
          {activeTab === 'stories' && (
            <div className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <div id="stories-crono" className="bg-[#161619] border border-stone-800 p-4 sm:p-5 rounded-xl space-y-3 max-w-full overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 font-bold uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Crônicas de Fatos Reais & Testemunhos</span>
                </div>
                <h3 className="text-base sm:text-xl font-serif font-bold text-stone-100 break-words">
                  A História dos Acontecimentos: Registro Minucioso
                </h3>
                <p className={`text-stone-400 font-serif leading-relaxed break-words ${getFontSizeClass('body')}`}>
                  Narrativas circunstanciadas dos episódios mais dramáticos e decisivos deste dossiê, reconstituídas a partir de memórias de sobreviventes, transcrições forenses e despachos desclassificados dos arquivos do Kremlin.
                </p>
              </div>

              {chronologies.length > 0 && (
                <div className="bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-5 space-y-4 max-w-full overflow-hidden">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                      <h4 className="text-xs sm:text-sm font-mono font-bold uppercase text-stone-200 truncate">
                        Cronologia Passo a Passo
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-stone-500 shrink-0">{chronologies.length} Marcos</span>
                  </div>

                  <div className="relative pl-5 sm:pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-800 max-w-full overflow-hidden">
                    {chronologies.map((item, idx) => (
                      <div key={idx} className="relative group max-w-full overflow-hidden">
                        <div className="absolute -left-5 sm:-left-6 top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500 border-2 border-stone-900 group-hover:scale-125 transition-transform" />
                        <div className="bg-stone-900 p-3.5 rounded-lg border border-stone-800 space-y-1 max-w-full overflow-hidden">
                          <span className="text-xs font-mono font-bold text-amber-400">
                            {item.date}
                          </span>
                          <h5 className={`font-semibold text-stone-100 font-serif break-words ${getFontSizeClass('heading')}`}>
                            {item.event}
                          </h5>
                          <p className={`font-serif text-stone-400 leading-relaxed break-words ${getFontSizeClass('body')}`}>
                            {item.significance}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div id="stories-episodes" className="space-y-5 max-w-full overflow-hidden">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <ScrollText className="w-4 h-4 text-amber-400 shrink-0" />
                    <h4 className="text-xs sm:text-sm font-mono font-bold uppercase text-stone-200 truncate">
                      Episódios & Relatos ({detailedEpisodes.length})
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-stone-500 shrink-0">Fontes Primárias</span>
                </div>

                {detailedEpisodes.map((ep, idx) => (
                  <div key={idx} className="bg-[#161619] border border-stone-700/80 rounded-xl p-4 sm:p-6 space-y-4 shadow-lg max-w-full overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-xs font-mono text-amber-500">
                          <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/60 text-[10px] font-bold shrink-0">
                            EPISÓDIO {idx + 1}
                          </span>
                          <span className="flex items-center gap-1 text-stone-400 truncate">
                            <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                            <span className="truncate">{ep.location}</span>
                          </span>
                        </div>
                        <h4 className={`font-serif font-bold text-stone-100 leading-snug break-words ${getFontSizeClass('heading')}`}>
                          {ep.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => copyToClipboard(`${ep.title}\nLocal: ${ep.location}\n\n${ep.narrative}\n\nCitação: "${ep.eyewitnessOrDocQuote}" — ${ep.quoteAuthor}`, `ep_${idx}`)}
                        className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-amber-400 text-xs font-mono rounded-lg border border-stone-800 flex items-center gap-1.5 transition-colors self-start sm:self-auto shrink-0"
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

                    <div className={`font-serif text-stone-200 leading-relaxed whitespace-pre-line space-y-3 text-justify break-words ${getFontSizeClass('body')}`}>
                      {ep.narrative}
                    </div>

                    <div className="bg-[#0e0e11] border-l-4 border-amber-500 p-4 rounded-r-xl space-y-2 mt-4 max-w-full overflow-hidden">
                      <div className="flex items-center gap-2 text-xs font-mono text-amber-500 font-bold uppercase tracking-wider">
                        <Quote className="w-4 h-4 shrink-0" />
                        <span className="truncate">Testemunho Ocular / Registro Original:</span>
                      </div>
                      <blockquote className={`font-serif italic text-stone-200 leading-relaxed break-words ${getFontSizeClass('quote')}`}>
                        "{ep.eyewitnessOrDocQuote}"
                      </blockquote>
                      <div className="text-xs font-mono text-stone-400 not-italic pt-1.5 border-t border-stone-800 truncate">
                        — <span className="text-amber-300 font-semibold">{ep.quoteAuthor}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <div className="p-4 bg-stone-900 border border-stone-800 rounded-xl text-xs sm:text-sm text-stone-300 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  Todos os documentos transcritos abaixo pertencem a acervos públicos, arquivos de Estado desclassificados (RGASPI, GARF, AP RF) ou coleções diplomáticas reconhecidas.
                </span>
              </div>

              {topic.primarySources.map((source, index) => (
                <div
                  key={index}
                  id={`doc-source-${index}`}
                  className="bg-[#161619] border border-stone-700/70 rounded-xl p-4 sm:p-6 space-y-4 shadow-lg max-w-full overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-xs font-mono text-amber-500">
                        <span className="font-bold shrink-0">Doc #{index + 1} · {source.documentType}</span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">Ano: {source.year}</span>
                      </div>
                      <h3 className={`font-serif font-bold text-stone-100 mt-1 break-words ${getFontSizeClass('heading')}`}>
                        {source.title}
                      </h3>
                    </div>

                    <div className="text-xs font-mono text-stone-400 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800 shrink-0 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                      <span className="truncate max-w-[160px] sm:max-w-xs">{source.institution}</span>
                    </div>
                  </div>

                  <div className="bg-[#111114] p-4 sm:p-5 rounded-xl border border-stone-800 space-y-2 max-w-full overflow-hidden">
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block font-semibold">
                      Transcrição / Tradução do Documento:
                    </span>
                    <blockquote className={`font-serif italic text-stone-200 leading-relaxed break-words ${getFontSizeClass('quote')}`}>
                      "{source.transcriptionPt}"
                    </blockquote>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs sm:text-sm">
                    <div className="font-mono text-stone-400 truncate max-w-full">
                      <span className="text-stone-500">Ref. Arquivo: </span>
                      <span className="text-stone-300 break-all">{source.archiveReference}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => copyToClipboard(source.abntCitation, `doc_${index}_abnt`)}
                        className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg border border-stone-700 text-xs font-mono flex items-center gap-1.5 transition-colors"
                      >
                        {copiedCitation === `doc_${index}_abnt` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar ABNT</span>
                          </>
                        )}
                      </button>

                      {source.url && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-400 rounded-lg border border-stone-700 text-xs font-mono flex items-center gap-1.5 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Consultar</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: CONTEXT */}
          {activeTab === 'context' && (
            <div className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
              {topic.quote && (
                <div id="ctx-1" className="p-4 sm:p-5 bg-[#161619] border-y border-stone-800 rounded-xl shadow-lg max-w-full overflow-hidden">
                  <blockquote className={`font-serif italic text-stone-200 leading-relaxed break-words ${getFontSizeClass('quote')}`}>
                    "{topic.quote.text}"
                  </blockquote>
                  <p className="text-xs font-mono text-amber-400 mt-2 font-semibold truncate">
                    — {topic.quote.author} ({topic.quote.context})
                  </p>
                </div>
              )}

              <div id="ctx-2" className="bg-[#161619] p-4 sm:p-5 rounded-xl border border-stone-800 space-y-2 max-w-full overflow-hidden">
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  Contexto Histórico & Antecedentes
                </h3>
                <p className={`text-stone-300 font-serif leading-relaxed break-words ${getFontSizeClass('body')}`}>
                  {topic.historicalContext}
                </p>
              </div>

              <div className="bg-[#161619] p-4 sm:p-5 rounded-xl border border-stone-800 space-y-2 max-w-full overflow-hidden">
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  Consenso Historiográfico Acadêmico
                </h3>
                <p className={`text-stone-300 font-serif leading-relaxed break-words ${getFontSizeClass('body')}`}>
                  {topic.academicConsensus}
                </p>
              </div>

              <div id="ctx-3" className="bg-[#161619] p-4 sm:p-5 rounded-xl border border-stone-800 space-y-2 max-w-full overflow-hidden">
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  Impacto Histórico & Desdobramentos
                </h3>
                <p className={`text-stone-300 font-serif leading-relaxed break-words ${getFontSizeClass('body')}`}>
                  {topic.historicalImpact}
                </p>
              </div>

              <div id="ctx-4" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#161619] p-4 sm:p-5 rounded-xl border border-stone-800 space-y-3 max-w-full overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-stone-400 font-bold">
                    <Users className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Atores-Chave Envolvidos</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {topic.keyActors.map((actor, idx) => (
                      <span key={idx} className="text-xs bg-stone-900 text-stone-200 px-2.5 py-1 rounded-lg border border-stone-800 break-words">
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#161619] p-4 sm:p-5 rounded-xl border border-stone-800 space-y-3 max-w-full overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-stone-400 font-bold">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Historiadores & Pesquisadores</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {topic.historiansInvolved?.map((hist, idx) => (
                      <span key={idx} className="text-xs bg-amber-950/50 text-amber-300 border border-amber-800/50 px-2.5 py-1 rounded-lg font-mono break-words">
                        {hist}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: CITATIONS */}
          {activeTab === 'citations' && (
            <div id="citations-list" className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <p className={`text-stone-400 font-serif break-words ${getFontSizeClass('body')}`}>
                Utilize as referências formatadas abaixo para inclusão direta em artigos científicos e trabalhos acadêmicos.
              </p>

              {topic.primarySources.map((source, index) => (
                <div key={index} className="bg-[#161619] p-4 sm:p-6 rounded-xl border border-stone-800 space-y-4 shadow-lg max-w-full overflow-hidden">
                  <h3 className={`font-semibold text-stone-200 font-mono break-words ${getFontSizeClass('heading')}`}>
                    Fonte {index + 1}: {source.title}
                  </h3>

                  <div className="space-y-2 max-w-full overflow-hidden">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-stone-400">Formato ABNT:</span>
                      <button
                        onClick={() => copyToClipboard(source.abntCitation, `abnt_${index}`)}
                        className="text-amber-400 hover:text-amber-300 font-mono flex items-center gap-1 shrink-0"
                      >
                        {copiedCitation === `abnt_${index}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className={`p-3.5 bg-stone-950 font-mono text-stone-300 rounded-lg border border-stone-800 select-all leading-relaxed break-all sm:break-words ${getFontSizeClass('body')}`}>
                      {source.abntCitation}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 max-w-full overflow-hidden">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-stone-400">Formato Chicago:</span>
                      <button
                        onClick={() => copyToClipboard(source.chicagoCitation, `chicago_${index}`)}
                        className="text-amber-400 hover:text-amber-300 font-mono flex items-center gap-1 shrink-0"
                      >
                        {copiedCitation === `chicago_${index}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className={`p-3.5 bg-stone-950 font-mono text-stone-300 rounded-lg border border-stone-800 select-all leading-relaxed break-all sm:break-words ${getFontSizeClass('body')}`}>
                      {source.chicagoCitation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </main>
      </div>

      {/* 5. FULL-PAGE BOTTOM BAR */}
      <div className="bg-[#161619] border-t border-stone-800 px-3 sm:px-6 py-3 flex items-center justify-between text-xs text-stone-400 shrink-0 shadow-lg overflow-hidden">
        <div className="font-mono flex items-center gap-2 truncate min-w-0 flex-1 pr-2">
          <span className="truncate">Dossiê Soviético · Cátedra Historiográfica</span>
        </div>

        <button
          onClick={onClose}
          className="px-3.5 py-2 min-h-[38px] bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 font-medium rounded-lg border border-stone-700 transition-colors shrink-0"
        >
          Fechar
        </button>
      </div>

    </div>
  );
};
