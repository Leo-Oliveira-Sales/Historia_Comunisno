import React, { useState } from 'react';
import { DossierTopic } from '../types/dossier';
import { ACADEMIC_ESSAYS } from '../data/academicEssaysDatabase';
import { ACADEMIC_CHAPTERS } from '../data/academicChaptersDatabase';
import { IDEOLOGIAS_CHAPTERS } from '../data/collections/collection_ideologias_chapters';
import { CHRONOLOGIES_BY_TOPIC, DETAILED_EPISODES_BY_TOPIC } from '../data/detailedHistoricalEpisodes';
import { getCanonicalEditorialDossier } from '../data/canonicalEditorialDatabase';
import { RESEARCH_DOSSIERS } from '../data/researchDossiersDatabase';
import { IDEOLOGIAS_RESEARCH_DOSSIERS } from '../data/collections/collection_ideologias_dossiers';
import { 
  TOPIC_CITATIONS_DATABASE, 
  TopicCitationEntry, 
  TopicHistoriographicalSynthesis, 
  TopicReferenceCategory 
} from '../data/citationsDatabase';
import { ADVANCED_INVESTIGATIONS_DATABASE } from '../data/advancedInvestigationDatabase';
import { MARKET_LAWS_CHAPTERS } from '../data/marketLawsDatabase';
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
  AlertTriangle,
  FileSpreadsheet,
  Menu,
  ChevronDown,
  Sparkles,
  BookOpenCheck,
  Moon,
  Sun
} from 'lucide-react';
import { AppTheme } from '../utils/theme';

interface DossierModalProps {
  topic: DossierTopic;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (topicId: number) => void;
  theme?: AppTheme;
  onSelectTheme?: (theme: AppTheme) => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({
  topic,
  onClose,
  isSaved,
  onToggleSave,
  theme = 'preto',
  onSelectTheme,
}) => {
  const essay = ACADEMIC_ESSAYS[topic.id];
  const chapter = ACADEMIC_CHAPTERS[topic.id] || IDEOLOGIAS_CHAPTERS[topic.id];
  const [activeTab, setActiveTab] = useState<'chapter' | 'researchDossier' | 'essay' | 'stories' | 'documents' | 'context' | 'citations' | 'advancedInvestigation' | 'marketLaws'>(chapter ? 'chapter' : 'researchDossier');
  const [activeSection, setActiveSection] = useState<number | string>(1);
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [isMobileIndexOpen, setIsMobileIndexOpen] = useState<boolean>(false);

  const chronologies = CHRONOLOGIES_BY_TOPIC[topic.id] || [];
  const detailedEpisodes = DETAILED_EPISODES_BY_TOPIC[topic.id] || [];
  const canonicalDossier = getCanonicalEditorialDossier(topic.id);
  const researchDossierText = RESEARCH_DOSSIERS[topic.id] || IDEOLOGIAS_RESEARCH_DOSSIERS[topic.id];
  const advancedInvestigation = ADVANCED_INVESTIGATIONS_DATABASE[topic.id];
  const marketLaws = (topic.id === 103 || topic.id === 105) ? MARKET_LAWS_CHAPTERS[topic.id] : undefined;

  // Numeração sequencial organizada das abas
  let tabIdx = 1;
  const chapterTabNum = chapter ? tabIdx++ : null;
  const essayTabNum = tabIdx++;
  const storiesTabNum = tabIdx++;
  const docsTabNum = tabIdx++;
  const contextTabNum = tabIdx++;
  const citationsTabNum = tabIdx++;
  const advTabNum = advancedInvestigation ? tabIdx++ : null;
  const researchTabNum = researchDossierText ? tabIdx++ : null;
  const marketTabNum = marketLaws ? tabIdx++ : null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    playTypewriterClack();
    setCopiedCitation(label);
    setTimeout(() => setCopiedCitation(null), 2500);
  };

  const copyMarketLaws = () => {
    if (!marketLaws) return;
    let text = `==========================================================\n`;
    text += `${marketLaws.title.toUpperCase()}\n`;
    text += `${marketLaws.subtitle}\n`;
    text += `${marketLaws.authorCatedra}\n`;
    text += `==========================================================\n\n`;
    text += `INTRODUÇÃO:\n${marketLaws.introduction}\n\n`;
    marketLaws.sections.forEach(s => {
      text += `${s.number}. ${s.title.toUpperCase()}\n${s.content}\n\n`;
    });
    text += `CONCLUSÃO:\n${marketLaws.conclusion}\n\n`;
    text += `REFERÊNCIAS BIBLIOGRÁFICAS:\n`;
    marketLaws.bibliographicReferences.forEach(ref => {
      text += `- ${ref}\n`;
    });
    copyToClipboard(text, 'market_laws');
  };

  const copyResearchDossier = () => {
    if (!researchDossierText) return;
    copyToClipboard(researchDossierText, 'research_dossier');
  };

  const copyAdvancedInvestigation = () => {
    if (!advancedInvestigation) return;
    copyToClipboard(advancedInvestigation.rawText, 'advanced_investigation');
  };

  // PROTOCOLO DE AUDITORIA DOCUMENTAL E BIBLIOGRÁFICA — RESOLUÇÃO DOS 3 BLOCOS
  const getCitationsTabData = () => {
    const customData = TOPIC_CITATIONS_DATABASE[topic.id];

    // Bloco I: Citações literais verificadas
    let citations: TopicCitationEntry[] = [];
    if (customData?.citations && customData.citations.length > 0) {
      citations = customData.citations;
    } else if (canonicalDossier?.citacoesVerificadas && canonicalDossier.citacoesVerificadas.length > 0) {
      citations = canonicalDossier.citacoesVerificadas.map((cv, idx) => ({
        number: idx + 1,
        author: cv.autor,
        category: 'Historiografia Especializada / Citação Verificada',
        quoteText: cv.trechoLiteral,
        source: `${cv.obra}. ${cv.edicaoEditoraAno || ''}. ${cv.paginaExata || ''}`.trim(),
        analise: cv.analiseContextual,
      }));
    } else if (topic.primarySources && topic.primarySources.length > 0) {
      citations = topic.primarySources.map((src, idx) => ({
        number: idx + 1,
        author: src.documentType || 'Fonte Documental Primária',
        category: 'Documento Primário / Acervo Desclassificado',
        quoteText: src.transcriptionPt,
        source: src.abntCitation || `${src.title}. ${src.year || ''} — Acervo: ${src.institution} (${src.archiveReference})`,
        analise: src.excerptOriginal ? `Trecho Original: ${src.excerptOriginal}` : undefined,
      }));
    }

    // Bloco II: Sínteses historiográficas e análises interpretativas
    let syntheses: TopicHistoriographicalSynthesis[] = [];
    if (customData?.syntheses && customData.syntheses.length > 0) {
      syntheses = customData.syntheses;
    } else if (canonicalDossier?.debateHistoriografico?.interpretacoesDiferentes) {
      syntheses = canonicalDossier.debateHistoriografico.interpretacoesDiferentes.map((interp, idx) => ({
        number: idx + 1,
        authorOrSchool: `${interp.correnteEscola}${interp.principaisAutores?.length ? ` (${interp.principaisAutores.join(', ')})` : ''}`,
        synthesisText: interp.teseCentral,
        supportingReference: interp.antiteseCritica ? `Contraponto / Crítica: ${interp.antiteseCritica}` : '',
      }));
    }

    // Bloco III: Referências bibliográficas consolidadas
    let referenceCategories: TopicReferenceCategory[] | undefined = customData?.referenceCategories;
    let consolidatedReferences: string[] = customData?.consolidatedReferences || [];

    if (!referenceCategories && (!consolidatedReferences || consolidatedReferences.length === 0)) {
      if (canonicalDossier?.bibliografia && canonicalDossier.bibliografia.length > 0) {
        const hasCategories = canonicalDossier.bibliografia.some(b => b.entradaAbnt.startsWith('A. ') || b.entradaAbnt.startsWith('B. '));
        if (hasCategories) {
          const cats: TopicReferenceCategory[] = [];
          let currentCat: TopicReferenceCategory | null = null;
          canonicalDossier.bibliografia.forEach(b => {
            if (b.entradaAbnt.startsWith('A. ') || b.entradaAbnt.startsWith('B. ') || b.entradaAbnt.startsWith('C. ')) {
              currentCat = { category: b.entradaAbnt, items: [] };
              cats.push(currentCat);
            } else if (currentCat) {
              currentCat.items.push(b.entradaAbnt);
            } else {
              consolidatedReferences.push(b.entradaAbnt);
            }
          });
          if (cats.length > 0) referenceCategories = cats;
        } else {
          consolidatedReferences = canonicalDossier.bibliografia.map(b => b.entradaAbnt);
        }
      } else if (chapter?.bibliographicReferences && chapter.bibliographicReferences.length > 0) {
        consolidatedReferences = chapter.bibliographicReferences;
      }
    }

    return {
      title: customData?.title || `Protocolo de Auditoria Documental e Bibliográfica — Registro nº ${topic.categoryNumber}`,
      citations,
      syntheses,
      methodologicalNote: customData?.methodologicalNote,
      referenceCategories,
      consolidatedReferences,
      consensosAcademicos: canonicalDossier?.debateHistoriografico?.consensosAcademicos,
      controversiasELimitacoesDasFontes: canonicalDossier?.debateHistoriografico?.controversiasELimitacoesDasFontes,
    };
  };

  const copyCitationsTab = () => {
    const data = getCitationsTabData();
    let text = `==========================================================\n`;
    text += `${data.title.toUpperCase()}\n`;
    text += `${topic.title}\n`;
    text += `==========================================================\n\n`;

    text += `I. CITAÇÕES LITERAIS VERIFICADAS\n\n`;
    data.citations.forEach(c => {
      text += `[${c.number}] ${c.author} (${c.category})\n`;
      text += `"${c.quoteText}"\n`;
      text += `Fonte: ${c.source}\n`;
      if (c.analise) text += `Contexto: ${c.analise}\n`;
      text += `\n`;
    });

    if (data.methodologicalNote) {
      text += `NOTA METODOLÓGICA SOBRE AS FONTES:\n${data.methodologicalNote}\n\n`;
    }

    text += `II. SÍNTESES HISTORIOGRÁFICAS E ANÁLISES INTERPRETATIVAS\n\n`;
    data.syntheses.forEach(s => {
      text += `• ${s.authorOrSchool}:\n`;
      text += `  ${s.synthesisText}\n`;
      if (s.supportingReference) text += `  ${s.supportingReference}\n`;
      text += `\n`;
    });

    if (data.consensosAcademicos) {
      text += `Consenso Acadêmico:\n${data.consensosAcademicos}\n\n`;
    }
    if (data.controversiasELimitacoesDasFontes) {
      text += `Limitações Documentais e das Fontes:\n${data.controversiasELimitacoesDasFontes}\n\n`;
    }

    text += `III. REFERÊNCIAS BIBLIOGRÁFICAS CONSOLIDADAS (NORMAS ABNT / CHICAGO)\n\n`;
    if (data.referenceCategories && data.referenceCategories.length > 0) {
      data.referenceCategories.forEach(cat => {
        text += `${cat.category}\n`;
        cat.items.forEach(item => {
          text += `- ${item}\n`;
        });
        text += `\n`;
      });
    } else {
      data.consolidatedReferences.forEach(ref => {
        text += `• ${ref}\n`;
      });
    }

    copyToClipboard(text, 'citations_tab_audit');
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

  const copyAcademicChapter = () => {
    if (!chapter) return;
    let text = `==========================================================\n`;
    text += `${chapter.title.toUpperCase()}\n`;
    text += `${chapter.subtitle}\n`;
    text += `${chapter.authorCatedra}\n`;
    text += `==========================================================\n\n`;
    text += `INTRODUÇÃO:\n${chapter.introduction}\n\n`;
    chapter.sections.forEach(s => {
      text += `${s.number}. ${s.title.toUpperCase()}\n`;
      if (s.content) text += `${s.content}\n\n`;
      if (s.subsections) {
        s.subsections.forEach(sub => {
          text += `${sub.number} ${sub.title}\n${sub.content}\n\n`;
        });
      }
    });
    text += `CONCLUSÃO:\n${chapter.conclusion}\n\n`;
    text += `REFERÊNCIAS BIBLIOGRÁFICAS:\n`;
    chapter.bibliographicReferences.forEach(ref => {
      text += `- ${ref}\n`;
    });
    copyToClipboard(text, 'academic_chapter_full');
  };

  const copyCompleteDossier = () => {
    let text = `==========================================================\n`;
    text += `DOSSIÊ SOVIÉTICO - DOSSIÊ COMPLETO DE PESQUISA ACADÊMICA\n`;
    text += `Registro Oficial nº ${topic.categoryNumber} · Período: ${topic.periodLabel}\n`;
    text += `Título: ${topic.title.toUpperCase()}\n`;
    text += `==========================================================\n\n`;

    if (chapter) {
      text += `--- CAPÍTULO ACADÊMICO ---\n`;
      text += `${chapter.title}\n\n${chapter.introduction}\n\n`;
      chapter.sections.forEach(s => {
        text += `${s.number}. ${s.title}\n`;
        if (s.content) text += `${s.content}\n\n`;
        if (s.subsections) {
          s.subsections.forEach(sub => {
            text += `${sub.number} ${sub.title}\n${sub.content}\n\n`;
          });
        }
      });
      text += `Conclusão:\n${chapter.conclusion}\n\n`;
    }



    copyToClipboard(text, 'complete_master_dossier');
  };

  const copyFullEssay = () => {
    if (!essay) return;
    let fullText = `==========================================================\n`;
    fullText += `${essay.title.toUpperCase()}\n`;
    fullText += `${essay.subtitle}\n`;
    fullText += `${essay.authorCatedra}\n`;
    fullText += `==========================================================\n\n`;
    if (essay.epigraph) {
      fullText += `EPÍGRAFE:\n"${essay.epigraph.text}"\n— ${essay.epigraph.author}, ${essay.epigraph.work}\n\n`;
    }
    fullText += `I. SÍNTESE GERAL E ANTECEDENTES\n${essay.narrativeOverview}\n\n`;
    fullText += `II. DESENVOLVIMENTO HISTÓRICO E MARCOS\n${essay.historicalDevelopment}\n\n`;
    fullText += `III. MECANISMOS INSTITUCIONAIS E DECRETOS\n${essay.institutionalAndStateMechanisms}\n\n`;
    fullText += `IV. DEBATE HISTORIOGRÁFICO\n${essay.historiographicalDebate}\n\n`;
    if (essay.scholarlyQuotes && essay.scholarlyQuotes.length > 0) {
      fullText += `V. CITAÇÕES DE PESQUISADORES E ANÁLISES:\n`;
      essay.scholarlyQuotes.forEach(sq => {
        fullText += `• "${sq.quote}" — ${sq.author} (${sq.work}, ${sq.year}, ${sq.pageOrDoc})\n  Análise: ${sq.historicalAnalysis}\n\n`;
      });
    }
    if (essay.archivalCorpus && essay.archivalCorpus.length > 0) {
      fullText += `VI. FUNDOS ARQUIVÍSTICOS E FONTES PRIMÁRIAS:\n`;
      essay.archivalCorpus.forEach(ac => {
        fullText += `• ${ac.archiveName} [${ac.fondCode}]: ${ac.description}\n`;
      });
      fullText += `\n`;
    }
    fullText += `VII. CONCLUSÃO HISTÓRICA E BALANÇO\n${essay.concludingAssessment}\n\n`;
    if (essay.bibliographicReferences && essay.bibliographicReferences.length > 0) {
      fullText += `VIII. REFERÊNCIAS BIBLIOGRÁFICAS:\n`;
      essay.bibliographicReferences.forEach(ref => {
        fullText += `• ${ref}\n`;
      });
    }
    copyToClipboard(fullText, 'full_essay');
  };

  const getSidebarSections = () => {
    if (activeTab === 'chapter') {
      if (!chapter) return [{ num: 0, label: 'Introdução', target: 'chapter-intro' }];
      const list: { num: number | string; label: string; target: string }[] = [{ num: 0, label: 'Introdução', target: 'chapter-intro' }];
      chapter.sections.forEach(s => {
        if (s.subsections && s.subsections.length > 0) {
          s.subsections.forEach(sub => {
            list.push({ num: sub.number, label: `${sub.number} ${sub.title.substring(0, 16)}...`, target: `chapter-sec-${sub.number.replace('.', '-')}` });
          });
        } else {
          list.push({ num: s.number, label: `${s.number}. ${s.title.substring(0, 16)}...`, target: `chapter-sec-${s.number}` });
        }
      });
      list.push({ num: 98, label: 'Conclusão', target: 'chapter-conclusion' });
      list.push({ num: 99, label: 'Referências', target: 'chapter-refs' });
      return list;
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
        label: `Doc ${i + 1}: ${src.title.substring(0, 18)}...`,
        target: `doc-source-${i}`
      }));
    } else if (activeTab === 'researchDossier') {
      return [
        { num: 1, label: '1. Identificação', target: 'res-1' },
        { num: 2, label: '2. Contexto Histórico', target: 'res-2' },
        { num: 3, label: '3. Narrativa Cronológica', target: 'res-3' },
        { num: 4, label: '4. Documentos e Provas', target: 'res-4' },
        { num: 5, label: '5. Responsabilidades', target: 'res-5' },
        { num: 6, label: '6. Debate Historiográfico', target: 'res-6' },
        { num: 7, label: '7. Citações & Afirmações', target: 'res-7' },
        { num: 8, label: '8. Bibliografia', target: 'res-8' },
      ];
    } else if (activeTab === 'citations') {
      return [
        { num: 'I', label: 'I. Citações Literais', target: 'cit-block-1' },
        { num: 'II', label: 'II. Sínteses & Análises', target: 'cit-block-2' },
        { num: 'III', label: 'III. Bibliografia Consolidada', target: 'cit-block-3' },
      ];
    } else if (activeTab === 'advancedInvestigation') {
      return [
        { num: 'Q1', label: '1. Iluminismo & Causa Direta', target: 'adv-sec-1' },
        { num: 'Q2', label: '2. Interesses da Burguesia', target: 'adv-sec-2' },
        { num: 'Q3', label: '3. Crise Financeira & Monarquia', target: 'adv-sec-3' },
        { num: 'Q4', label: '4. Absolutismo na Prática', target: 'adv-sec-4' },
        { num: 'Q5', label: '5. Livros, Panfletos & Opinião', target: 'adv-sec-5' },
        { num: 'Q6', label: '6. Direitos Naturais & Escravidão', target: 'adv-sec-6' },
        { num: 'Q7', label: '7. Hobsbawm vs. Furet', target: 'adv-sec-7' },
        { num: 'Q8', label: '8. Ruptura & Continuidade', target: 'adv-sec-8' },
        { num: 'C', label: 'Conclusão Geral', target: 'adv-sec-conclusion' },
      ];
    } else if (activeTab === 'marketLaws') {
      if (!marketLaws) return [];
      const list: { num: number | string; label: string; target: string }[] = [{ num: 0, label: 'Introdução', target: 'market-intro' }];
      marketLaws.sections.forEach(s => {
        list.push({ num: s.number, label: `${s.number}. ${s.title.substring(0, 16)}...`, target: `market-sec-${s.number}` });
      });
      list.push({ num: 98, label: 'Conclusão', target: 'market-conclusion' });
      list.push({ num: 99, label: 'Referências', target: 'market-refs' });
      return list;
    } else if (activeTab === 'context') {
      return [
        { num: 1, label: 'Contexto Histórico', target: 'context-historical' },
        { num: 2, label: 'Síntese Executiva', target: 'context-summary' },
        { num: 3, label: 'Ementa Temática', target: 'context-subjects' },
        { num: 4, label: 'Consenso Historiográfico', target: 'context-consensus' },
        { num: 5, label: 'Atores Centrais', target: 'context-actors' },
        { num: 6, label: 'Especialistas', target: 'context-historians' },
      ];
    } else {
      return [
        { num: 'I', label: 'I. Citações Literais', target: 'cit-block-1' },
        { num: 'II', label: 'II. Sínteses & Análises', target: 'cit-block-2' },
        { num: 'III', label: 'III. Bibliografia Consolidada', target: 'cit-block-3' },
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

          {onSelectTheme && (
            <div className="flex items-center bg-stone-900/90 border border-stone-700/80 p-0.5 rounded-lg shadow-inner">
              <button
                onClick={() => {
                  playTypewriterClack();
                  onSelectTheme('preto');
                }}
                className={`p-1.5 rounded min-h-[34px] min-w-[34px] flex items-center justify-center transition-colors ${
                  theme === 'preto'
                    ? 'bg-stone-800 text-amber-400 font-bold border border-stone-600 shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Tema Preto (Arquivo Noturno)"
                aria-label="Tema Preto"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  playTypewriterClack();
                  onSelectTheme('branco');
                }}
                className={`p-1.5 rounded min-h-[34px] min-w-[34px] flex items-center justify-center transition-colors ${
                  theme === 'branco'
                    ? 'bg-stone-800 text-amber-400 font-bold border border-stone-600 shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Tema Branco (Papel Acadêmico)"
                aria-label="Tema Branco"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  playTypewriterClack();
                  onSelectTheme('bege');
                }}
                className={`p-1.5 rounded min-h-[34px] min-w-[34px] flex items-center justify-center transition-colors ${
                  theme === 'bege'
                    ? 'bg-stone-800 text-amber-400 font-bold border border-stone-600 shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Tema Bege (Pergaminho Histórico)"
                aria-label="Tema Bege"
              >
                <ScrollText className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

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
      {/* MOBILE MODE: 2 DISTINCT NAVIGATION ROWS */}
      <div className="sm:hidden bg-[#141417] border-b border-stone-800 px-2 py-2 space-y-1.5 shrink-0">
        {/* Row 1: Capítulo, Ensaio, Crônicas, Documentos */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar touch-pan-x">
          {chapter && (
            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('chapter');
              }}
              className={`px-2.5 py-1.5 min-h-[36px] text-[11px] font-semibold rounded-lg transition-colors flex items-center gap-1 border shrink-0 ${
                activeTab === 'chapter'
                  ? 'bg-amber-950/60 text-amber-300 border-amber-500 shadow-sm font-bold'
                  : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
              }`}
            >
              <BookOpenCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{chapterTabNum}. Capítulo Acadêmico</span>
            </button>
          )}

          <button
            onClick={() => {
              playTypewriterClack();
              setActiveTab('essay');
            }}
            className={`px-2.5 py-1.5 min-h-[36px] text-[11px] font-semibold rounded-lg transition-colors flex items-center gap-1 border shrink-0 ${
              activeTab === 'essay'
                ? 'bg-amber-950/50 text-amber-300 border-amber-600/60 font-bold'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 shrink-0" />
            <span>{essayTabNum}. Ensaio</span>
          </button>

          <button
            onClick={() => {
              playTypewriterClack();
              setActiveTab('stories');
            }}
            className={`px-2.5 py-1.5 min-h-[36px] text-[11px] font-semibold rounded-lg transition-colors flex items-center gap-1 border shrink-0 ${
              activeTab === 'stories'
                ? 'bg-amber-950/50 text-amber-300 border-amber-600/60 font-bold'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
            }`}
          >
            <ScrollText className="w-3.5 h-3.5 shrink-0" />
            <span>{storiesTabNum}. Crônicas</span>
          </button>

          <button
            onClick={() => {
              playTypewriterClack();
              setActiveTab('documents');
            }}
            className={`px-2.5 py-1.5 min-h-[36px] text-[11px] font-semibold rounded-lg transition-colors flex items-center gap-1 border shrink-0 ${
              activeTab === 'documents'
                ? 'bg-amber-950/50 text-amber-300 border-amber-600/60 font-bold'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span>{docsTabNum}. Documentos</span>
          </button>
        </div>

        {/* Row 2: Síntese, Citações, Dossiê Acadêmico de Pesquisa (LAST TAB) */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar touch-pan-x">
          <button
            onClick={() => {
              playTypewriterClack();
              setActiveTab('context');
            }}
            className={`px-2.5 py-1.5 min-h-[36px] text-[11px] font-semibold rounded-lg transition-colors flex items-center gap-1 border shrink-0 ${
              activeTab === 'context'
                ? 'bg-amber-950/50 text-amber-300 border-amber-600/60 font-bold'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5 shrink-0" />
            <span>{contextTabNum}. Síntese</span>
          </button>

          <button
            onClick={() => {
              playTypewriterClack();
              setActiveTab('citations');
            }}
            className={`px-2.5 py-1.5 min-h-[36px] text-[11px] font-semibold rounded-lg transition-colors flex items-center gap-1 border shrink-0 ${
              activeTab === 'citations'
                ? 'bg-amber-950/50 text-amber-300 border-amber-600/60 font-bold'
                : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>{citationsTabNum}. Citações</span>
          </button>

          {advancedInvestigation && (
            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('advancedInvestigation');
              }}
              className={`px-2.5 py-1.5 min-h-[36px] text-[11px] font-bold rounded-lg transition-all flex items-center gap-1 border shrink-0 ${
                activeTab === 'advancedInvestigation'
                  ? 'tab-research-dossier-active'
                  : 'tab-research-dossier-inactive'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>{advTabNum}. Investigação Avançada</span>
            </button>
          )}

          {researchDossierText && (
            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('researchDossier');
              }}
              className={`px-2.5 py-1.5 min-h-[36px] text-[11px] font-bold rounded-lg transition-all flex items-center gap-1 border shrink-0 ${
                activeTab === 'researchDossier'
                  ? 'tab-research-dossier-active'
                  : 'tab-research-dossier-inactive'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5 shrink-0" />
              <span>{researchTabNum}. Dossiê Pesquisa</span>
            </button>
          )}

          {marketLaws && (
            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('marketLaws');
              }}
              className={`px-2.5 py-1.5 min-h-[36px] text-[11px] font-bold rounded-lg transition-all flex items-center gap-1 border shrink-0 ${
                activeTab === 'marketLaws'
                  ? 'bg-amber-500 text-stone-950 border-amber-300 font-extrabold shadow-md'
                  : 'bg-amber-950/40 text-amber-300 hover:bg-amber-900/50 border-amber-700/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-400" />
              <span>{marketTabNum}. {topic.id === 105 ? 'A Virada Epistemológica' : 'As Leis de Mercado'}</span>
            </button>
          )}
        </div>
      </div>

      {/* TABLET / DESKTOP MODE: SINGLE ROW TAB NAVIGATION */}
      <div className="hidden sm:flex bg-[#141417] border-b border-stone-800 px-3 sm:px-6 py-2 items-center justify-between gap-3 overflow-x-auto no-scrollbar shrink-0 touch-pan-x">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          {/* 1. Capítulo Acadêmico do Livro */}
          {chapter && (
            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('chapter');
              }}
              className={`px-3 py-2 min-h-[38px] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 border shrink-0 ${
                activeTab === 'chapter'
                  ? 'bg-amber-950/60 text-amber-300 border-amber-500 shadow-sm font-bold'
                  : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
              }`}
            >
              <BookOpenCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{chapterTabNum}. Capítulo Acadêmico do Livro</span>
            </button>
          )}

          {/* 2. Ensaio Acadêmico */}
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
            <span>{essayTabNum}. Ensaio Acadêmico</span>
          </button>

          {/* 3. Crônicas */}
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
            <span>{storiesTabNum}. Crônicas</span>
          </button>

          {/* 4. Documentos */}
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
            <span>{docsTabNum}. Documentos</span>
          </button>

          {/* 5. Síntese */}
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
            <span>{contextTabNum}. Síntese</span>
          </button>

          {/* 6. Citações */}
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
            <span>{citationsTabNum}. Citações</span>
          </button>

          {/* 6.5 INVESTIGAÇÃO AVANÇADA (Aba especial para temas com investigação) */}
          {advancedInvestigation && (
            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('advancedInvestigation');
              }}
              className={`px-3 py-2 min-h-[38px] text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 border shrink-0 ${
                activeTab === 'advancedInvestigation'
                  ? 'tab-research-dossier-active'
                  : 'tab-research-dossier-inactive'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>{advTabNum}. Investigação Avançada</span>
            </button>
          )}

          {/* Dossiê Acadêmico de Pesquisa (ELEVADO 2 TONS) */}
          {researchDossierText && (
            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('researchDossier');
              }}
              className={`px-3 py-2 min-h-[38px] text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 border shrink-0 ${
                activeTab === 'researchDossier'
                  ? 'tab-research-dossier-active'
                  : 'tab-research-dossier-inactive'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5 shrink-0" />
              <span>{researchTabNum}. Dossiê Acadêmico de Pesquisa</span>
            </button>
          )}

          {/* ABA ADICIONAL EXCLUSIVA (ÚLTIMA ABA EM N 03 E N 05) */}
          {marketLaws && (
            <button
              onClick={() => {
                playTypewriterClack();
                setActiveTab('marketLaws');
              }}
              className={`px-3 py-2 min-h-[38px] text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 border shrink-0 shadow-sm ${
                activeTab === 'marketLaws'
                  ? 'bg-amber-500 text-stone-950 border-amber-300 font-extrabold shadow-amber-500/20'
                  : 'bg-amber-950/40 text-amber-300 hover:bg-amber-900/50 hover:text-amber-100 border-amber-600/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-400" />
              <span>{marketTabNum}. {topic.id === 105 ? 'A Virada Epistemológica' : 'As Leis de Mercado'}</span>
            </button>
          )}
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
                  setActiveSection(sec.num);
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
                  setActiveSection(sec.num);
                  const el = document.getElementById(sec.target);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`w-full text-left px-3 py-2 text-xs font-mono rounded-lg transition-all flex items-center justify-between ${
                  activeSection === sec.num
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
          
          {/* TAB: ACADEMIC CHAPTER (BOOK CHAPTER TEXT) */}
          {activeTab === 'chapter' && chapter && (
            <article className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
              {/* Chapter Header Banner */}
              <div id="chapter-intro" className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 bg-amber-500/10 border-l border-b border-amber-500/30 px-3.5 py-1.5 rounded-bl text-[11px] font-mono text-amber-300 flex items-center gap-1.5">
                  <BookOpenCheck className="w-4 h-4 text-amber-400" />
                  <span>CAPÍTULO ACADÊMICO INTEGRAL</span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">
                    {chapter.authorCatedra}
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 leading-snug break-words">
                    {chapter.title}
                  </h2>
                  <p className="text-sm font-serif italic text-amber-300/90 break-words">
                    {chapter.subtitle}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={copyAcademicChapter}
                    className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors"
                  >
                    {copiedCitation === 'academic_chapter_full' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Capítulo Acadêmico Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-400" />
                        <span>Copiar Capítulo Acadêmico na Íntegra</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Introduction Text */}
                <div className="pt-4 border-t border-stone-800 space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                    Introdução
                  </h3>
                  {chapter.introduction.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx} className={`text-stone-300 font-serif text-justify break-words ${getFontSizeClass('body')}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Sections with Subsections */}
              {chapter.sections.map((sec) => (
                <section key={sec.number} id={`chapter-sec-${sec.number}`} className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-5 sm:p-7 space-y-5 shadow-md max-w-full overflow-hidden">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                    <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/60 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      {sec.number}
                    </span>
                    <h3 className={`font-serif font-bold text-stone-100 uppercase tracking-wide break-words ${getFontSizeClass('heading')}`}>
                      {sec.number}. {sec.title}
                    </h3>
                  </div>

                  {sec.content && (
                    <div className="space-y-4">
                      {sec.content.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx} className={`text-stone-300 font-serif text-justify break-words ${getFontSizeClass('body')}`}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {sec.subsections && sec.subsections.map((sub) => (
                    <div key={sub.number} id={`chapter-sec-${sub.number.replace('.', '-')}`} className="space-y-3 pt-3 border-t border-stone-800/60">
                      <h4 className={`font-serif font-bold text-amber-300 break-words ${getFontSizeClass('heading')}`}>
                        {sub.number} {sub.title}
                      </h4>
                      <div className="space-y-3">
                        {sub.content.split('\n\n').map((paragraph, pIdx) => (
                          <p key={pIdx} className={`text-stone-300 font-serif text-justify break-words ${getFontSizeClass('body')}`}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              ))}

              {/* Conclusion Section */}
              <section id="chapter-conclusion" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-5 sm:p-7 space-y-4 shadow-md max-w-full overflow-hidden">
                <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                  <span className="w-8 h-8 rounded-full bg-emerald-950/90 border border-emerald-600/60 text-emerald-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    §
                  </span>
                  <h3 className={`font-serif font-bold text-amber-300 uppercase tracking-wide break-words ${getFontSizeClass('heading')}`}>
                    Conclusão
                  </h3>
                </div>

                <div className="space-y-4">
                  {chapter.conclusion.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx} className={`text-stone-300 font-serif text-justify break-words ${getFontSizeClass('body')}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* References Section */}
              <section id="chapter-refs" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-5 sm:p-7 space-y-4 shadow-md max-w-full overflow-hidden">
                <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                  <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
                  <h3 className={`font-mono font-bold text-stone-100 uppercase tracking-wide break-words text-sm sm:text-base`}>
                    Referências Bibliográficas
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  {chapter.bibliographicReferences.map((ref, idx) => (
                    <div key={idx} className={`bg-stone-900 p-3.5 rounded-lg border border-stone-800 font-mono text-stone-300 select-all leading-relaxed break-all sm:break-words ${getFontSizeClass('body')}`}>
                      {ref}
                    </div>
                  ))}
                </div>
              </section>
            </article>
          )}



          {/* TAB: ESSAY (ENSAIO ACADÊMICO COMPLETO EM 8 SEÇÕES) */}
          {activeTab === 'essay' && essay && (
            <article className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
              {/* Header Banner */}
              <div className="bg-[#161619] border border-amber-600/50 p-5 sm:p-7 rounded-2xl shadow-xl space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                        ENSAIO HISTÓRICO ACADÊMICO
                      </span>
                      <span className="text-[10px] font-mono text-stone-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {essay.estimatedReadingMinutes} min · {essay.wordCount} palavras
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100">
                      {essay.title}
                    </h2>
                    <p className="text-amber-400 font-serif italic text-sm sm:text-base">
                      {essay.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={copyFullEssay}
                    className="px-3.5 py-2 min-h-[38px] bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
                    title="Copiar ensaio acadêmico completo com referências"
                  >
                    {copiedCitation === 'full_essay' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Ensaio Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-400" />
                        <span>Copiar Ensaio Completo</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                  <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{essay.authorCatedra}</span>
                </div>
              </div>

              {/* Epigraph Card */}
              {essay.epigraph && (
                <div className="bg-[#121214] border-l-4 border-amber-500 p-5 rounded-r-xl space-y-2 shadow-inner">
                  <p className="font-serif italic text-stone-300 text-base sm:text-lg leading-relaxed">
                    "{essay.epigraph.text}"
                  </p>
                  <p className="text-xs font-mono text-amber-400 text-right">
                    — {essay.epigraph.author}, <span className="text-stone-400">{essay.epigraph.work}</span>
                  </p>
                </div>
              )}

              {/* Section 1: Síntese e Antecedentes */}
              <section id="essay-sec-1" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                  <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    I
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                    I. Síntese Geral e Antecedentes Estruturais
                  </h3>
                </div>
                <div className={`font-serif text-stone-300 text-justify whitespace-pre-line leading-relaxed ${getFontSizeClass('body')}`}>
                  {essay.narrativeOverview}
                </div>
              </section>

              {/* Section 2: Desenvolvimento Histórico */}
              <section id="essay-sec-2" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                  <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    II
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                    II. Desenvolvimento Histórico e Marcos Cronológicos
                  </h3>
                </div>
                <div className={`font-serif text-stone-300 text-justify whitespace-pre-line leading-relaxed space-y-4 ${getFontSizeClass('body')}`}>
                  {essay.historicalDevelopment}
                </div>
              </section>

              {/* Section 3: Mecanismos Institucionais */}
              <section id="essay-sec-3" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                  <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    III
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                    III. Mecanismos Institucionais e Jurídicos do Estado
                  </h3>
                </div>
                <div className={`font-serif text-stone-300 text-justify whitespace-pre-line leading-relaxed ${getFontSizeClass('body')}`}>
                  {essay.institutionalAndStateMechanisms}
                </div>
              </section>

              {/* Section 4: Debate Historiográfico */}
              <section id="essay-sec-4" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                  <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    IV
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                    IV. Debate Historiográfico e Correntes Críticas
                  </h3>
                </div>
                <div className={`font-serif text-stone-300 text-justify whitespace-pre-line leading-relaxed space-y-4 ${getFontSizeClass('body')}`}>
                  {essay.historiographicalDebate}
                </div>
              </section>

              {/* Section 5: Citações de Pesquisadores */}
              {essay.scholarlyQuotes && essay.scholarlyQuotes.length > 0 && (
                <section id="essay-sec-5" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                    <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      V
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      V. Citações de Pesquisadores e Análise Documental
                    </h3>
                  </div>

                  <div className="space-y-4 pt-1">
                    {essay.scholarlyQuotes.map((sq, sqIdx) => (
                      <div key={sqIdx} className="bg-[#121214] p-4 sm:p-5 rounded-lg border border-stone-800/80 space-y-3">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="text-xs font-mono font-bold text-amber-400">
                            {sq.author} ({sq.year})
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                            {sq.work} · {sq.pageOrDoc}
                          </span>
                        </div>
                        <blockquote className="font-serif italic text-stone-200 border-l-2 border-amber-500/70 pl-3 leading-relaxed">
                          "{sq.quote}"
                        </blockquote>
                        <p className="text-xs font-mono text-stone-400 leading-relaxed bg-stone-900/60 p-2.5 rounded border border-stone-800">
                          <strong className="text-amber-400">Análise Historiográfica:</strong> {sq.historicalAnalysis}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 6: Fundos Arquivísticos */}
              {essay.archivalCorpus && essay.archivalCorpus.length > 0 && (
                <section id="essay-sec-6" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                    <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      VI
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      VI. Fundos Arquivísticos e Acervo Primário
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    {essay.archivalCorpus.map((ac, acIdx) => (
                      <div key={acIdx} className="bg-[#121214] p-4 rounded-lg border border-stone-800/80 space-y-2">
                        <div className="flex items-center gap-2 text-amber-400">
                          <Archive className="w-4 h-4 shrink-0" />
                          <h4 className="font-mono font-bold text-xs text-stone-100">
                            {ac.archiveName}
                          </h4>
                        </div>
                        <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/40 text-amber-300 border border-amber-800/50 font-semibold">
                          {ac.fondCode}
                        </span>
                        <p className="text-xs font-serif text-stone-300 leading-relaxed">
                          {ac.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Section 7: Conclusão Histórica */}
              <section id="essay-sec-7" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                  <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    VII
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                    VII. Avaliação Conclusiva e Balanço Histórico
                  </h3>
                </div>
                <div className={`font-serif text-stone-300 text-justify whitespace-pre-line leading-relaxed ${getFontSizeClass('body')}`}>
                  {essay.concludingAssessment}
                </div>
              </section>

              {/* Section 8: Bibliografia */}
              {essay.bibliographicReferences && essay.bibliographicReferences.length > 0 && (
                <section id="essay-sec-8" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                    <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
                    <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      VIII. Referências Bibliográficas Consolidadas
                    </h3>
                  </div>

                  <div className="space-y-2 pt-1 font-mono text-xs text-stone-300">
                    {essay.bibliographicReferences.map((ref, rIdx) => (
                      <div key={rIdx} className="bg-[#121214] p-3 rounded border border-stone-800/70 select-all leading-relaxed">
                        • {ref}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </article>
          )}

          {/* TAB: STORIES (CRÔNICAS HISTÓRICAS E CRONOLOGIA COMPLETA) */}
          {activeTab === 'stories' && (
            <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
              {/* Top Banner */}
              <div className="bg-[#161619] border border-amber-600/50 p-5 sm:p-6 rounded-2xl shadow-xl space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold inline-block">
                  REGISTROS NARRATIVOS E CRONOLÓGICOS
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100">
                  Crônicas Históricas e Cronologia dos Acontecimentos
                </h2>
                <p className="text-xs sm:text-sm font-serif text-stone-300 leading-relaxed">
                  Reconstituição dos momentos decisivos que transformaram as mentalidades e desestabilizaram as instituições do Antigo Regime, com testemunhos e marcos datados.
                </p>
              </div>

              {/* Subsection: Passo a Passo Cronológico */}
              {chronologies && chronologies.length > 0 && (
                <section id="stories-crono" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-5 shadow-md">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                    <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                        Passo a Passo Cronológico (1715–1789)
                      </h3>
                      <p className="text-xs text-stone-400 font-mono">
                        Linha do tempo documentada dos antecedentes políticos, econômicos e intelectuais
                      </p>
                    </div>
                  </div>

                  <div className="relative border-l-2 border-stone-800 ml-4 pl-6 space-y-6 pt-2">
                    {chronologies.map((item, cIdx) => (
                      <div key={cIdx} className="relative group">
                        <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-950 border-2 border-amber-500 group-hover:scale-125 transition-transform" />
                        <div className="bg-[#121214] p-4 rounded-lg border border-stone-800/80 space-y-1.5 hover:border-stone-700 transition-colors">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/40">
                              {item.date}
                            </span>
                          </div>
                          <h4 className="font-serif font-bold text-sm sm:text-base text-stone-100 pt-1">
                            {item.event}
                          </h4>
                          <p className="font-serif text-xs sm:text-sm text-stone-300 leading-relaxed">
                            {item.significance}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Subsection: Crônicas Oculares e Episódios */}
              {detailedEpisodes && detailedEpisodes.length > 0 && (
                <section id="stories-episodes" className="scroll-mt-24 space-y-5">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-2">
                    <ScrollText className="w-5 h-5 text-amber-400 shrink-0" />
                    <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                      Crônicas e Episódios Históricos Documentados ({detailedEpisodes.length})
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {detailedEpisodes.map((ep, idx) => (
                      <article key={idx} className="bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                        <div className="flex items-start justify-between gap-3 flex-wrap border-b border-stone-800/80 pb-3">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                              CRÔNICA Nº {idx + 1}
                            </span>
                            <h3 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>
                              {ep.title}
                            </h3>
                          </div>
                          {ep.location && (
                            <div className="flex items-center gap-1.5 text-xs font-mono text-stone-400 bg-stone-900 px-2.5 py-1 rounded border border-stone-800 shrink-0">
                              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>{ep.location}</span>
                            </div>
                          )}
                        </div>

                        <div className="space-y-3">
                          {ep.narrative.split('\n\n').map((paragraph, pIdx) => (
                            <p key={pIdx} className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {ep.eyewitnessOrDocQuote && (
                          <div className="bg-[#121214] p-4 rounded-lg border-l-4 border-amber-500/80 space-y-2 mt-4 shadow-inner">
                            <p className="font-serif italic text-stone-200 text-xs sm:text-sm leading-relaxed">
                              "{ep.eyewitnessOrDocQuote}"
                            </p>
                            {ep.quoteAuthor && (
                              <p className="text-[11px] font-mono text-amber-400 text-right">
                                — {ep.quoteAuthor}
                              </p>
                            )}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}

          {/* TAB: DOCUMENTS (ACERVO DOCUMENTAL E FONTES PRIMÁRIAS COMPLETAS) */}
          {activeTab === 'documents' && (
            <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
              {/* Top Banner */}
              <div className="bg-[#161619] border border-amber-600/50 p-5 sm:p-6 rounded-2xl shadow-xl space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold inline-block">
                  ACERVO PRIMÁRIO E ARQUIVÍSTICO
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100">
                  Fontes Primárias Verificadas e Documentos Históricos
                </h2>
                <p className="text-xs sm:text-sm font-serif text-stone-300 leading-relaxed">
                  Compilação comentada dos tratados, verbetes, remontrances parlamentares e cadernos de queixas que moldaram a contestação do Antigo Regime.
                </p>
              </div>

              <div className="space-y-6">
                {topic.primarySources.map((source, index) => (
                  <article key={index} id={`doc-source-${index}`} className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                    <div className="flex items-start justify-between gap-3 flex-wrap border-b border-stone-800 pb-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-700/50 font-bold">
                            DOC. {index + 1}
                          </span>
                          {source.year && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-900 text-stone-300 border border-stone-800">
                              Ano: {source.year}
                            </span>
                          )}
                          {source.documentType && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-900 text-stone-300 border border-stone-800">
                              {source.documentType}
                            </span>
                          )}
                        </div>
                        <h3 className={`font-serif font-bold text-stone-100 pt-1 ${getFontSizeClass('heading')}`}>
                          {source.title}
                        </h3>
                      </div>

                      <div className="text-right text-xs font-mono text-stone-400 space-y-0.5 shrink-0">
                        <div className="flex items-center gap-1.5 justify-end">
                          <Building2 className="w-3.5 h-3.5 text-amber-400" />
                          <span className="text-stone-300 font-semibold">{source.institution}</span>
                        </div>
                        <div className="text-[10px] text-stone-400">
                          Cota: <span className="text-amber-300 font-mono">{source.archiveReference}</span>
                        </div>
                      </div>
                    </div>

                    {/* Portuguese Transcription */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                        Transcrição em Língua Portuguesa:
                      </span>
                      <blockquote className={`font-serif italic text-stone-200 border-l-2 border-amber-500 pl-4 py-1 leading-relaxed bg-[#121214] p-3 rounded-r-lg ${getFontSizeClass('body')}`}>
                        "{source.transcriptionPt}"
                      </blockquote>
                    </div>

                    {/* Original Language Transcription if exists */}
                    {source.transcriptionOrig && (
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold block">
                          Texto Original (Francês / Idioma da Época):
                        </span>
                        <blockquote className="font-serif italic text-stone-300 border-l-2 border-stone-700 pl-4 py-1 leading-relaxed bg-stone-950/60 p-3 rounded-r-lg text-xs sm:text-sm">
                          "{source.transcriptionOrig}"
                        </blockquote>
                      </div>
                    )}

                    {/* Historical Relevance */}
                    {source.historicalRelevance && (
                      <div className="bg-stone-900/60 p-3.5 rounded-lg border border-stone-800 space-y-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                          Relevância Histórica e Jurídica:
                        </span>
                        <p className="text-xs sm:text-sm font-serif text-stone-300 leading-relaxed">
                          {source.historicalRelevance}
                        </p>
                      </div>
                    )}

                    {/* Related Historians */}
                    {source.relatedHistorians && source.relatedHistorians.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap text-xs font-mono text-stone-400 pt-1">
                        <span className="text-stone-400 font-semibold">Historiadores Vinculados:</span>
                        {source.relatedHistorians.map((hist, hIdx) => (
                          <span key={hIdx} className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-stone-300 text-[11px]">
                            {hist}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Standardized Citation Box */}
                    {(source.abntCitation || source.chicagoCitation) && (
                      <div className="pt-2 border-t border-stone-800/80 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                          <span className="font-semibold text-amber-400">Citação Normatizada:</span>
                          <button
                            onClick={() => copyToClipboard(source.abntCitation || source.chicagoCitation || '', `doc_cit_${index}`)}
                            className="flex items-center gap-1 text-[10px] hover:text-amber-300 transition-colors bg-stone-900 px-2 py-0.5 rounded border border-stone-800"
                          >
                            {copiedCitation === `doc_cit_${index}` ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span>Copiado!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copiar ABNT</span>
                              </>
                            )}
                          </button>
                        </div>
                        {source.abntCitation && (
                          <div className="text-[11px] font-mono text-stone-300 bg-stone-950 p-2.5 rounded border border-stone-800/70 select-all leading-relaxed">
                            {source.abntCitation}
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* TAB: CONTEXT (SÍNTESE HISTÓRICA E QUADRO CONCEITUAL) */}
          {activeTab === 'context' && (
            <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
              {/* Header Banner */}
              <div className="bg-[#161619] border border-amber-600/50 p-5 sm:p-7 rounded-2xl shadow-xl space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                    SÍNTESE ESTRUTURAL E QUADRO CONCEITUAL
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">
                    Registro nº {topic.categoryNumber} · {topic.periodLabel}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100">
                  {topic.title}
                </h2>
                <p className="font-serif italic text-amber-400 text-sm sm:text-base">
                  {topic.tagline}
                </p>
              </div>

              {topic.id === 104 ? (
                <div className="bg-[#161619] border border-stone-800 p-6 sm:p-9 rounded-xl space-y-8 shadow-xl">
                  {/* Header */}
                  <div className="border-b border-stone-800 pb-5 space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-stone-100">SÍNTESE HISTÓRICA E CONCEITUAL</h3>
                    <p className="font-serif italic text-amber-400 text-base">Socialismo utópico e anarquismo (1800–1880)</p>
                  </div>

                  {/* 1. CONTEXTO HISTÓRICO */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      1. Contexto Histórico
                    </h4>
                    <p className="font-serif text-stone-300 text-justify leading-relaxed">
                      O século XIX foi marcado pela expansão da Revolução Industrial, pelo crescimento das cidades, pela consolidação do capitalismo e pela formação do proletariado industrial.
                    </p>
                    <p className="font-serif text-stone-300 text-justify leading-relaxed">
                      As condições de trabalho e a desigualdade econômica estimularam o desenvolvimento de correntes que questionavam a organização da sociedade. Entre elas, destacaram-se o socialismo utópico e o anarquismo.
                    </p>
                  </div>

                  {/* 2. SOCIALISMO UTÓPICO */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      2. Socialismo Utópico
                    </h4>
                    <p className="font-serif text-stone-300 text-justify leading-relaxed">
                      O socialismo utópico defendia a reorganização da sociedade por meio da cooperação, da associação e de instituições consideradas mais justas.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="bg-[#121214] p-4.5 rounded-lg border border-stone-800 space-y-2">
                        <h5 className="font-serif font-bold text-amber-300 text-base">Henri de Saint-Simon (1760–1825)</h5>
                        <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-stone-300">
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Valorização da indústria e da ciência.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Organização racional da produção.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica aos privilégios aristocráticos.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Preocupação com as classes mais pobres.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Administração especializada da sociedade.</li>
                        </ul>
                      </div>
                      <div className="bg-[#121214] p-4.5 rounded-lg border border-stone-800 space-y-2">
                        <h5 className="font-serif font-bold text-amber-300 text-base">Charles Fourier (1772–1837)</h5>
                        <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-stone-300">
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica à sociedade comercial.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Atração passional.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Organização comunitária.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Projeto dos falanstérios.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica à posição social das mulheres.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Trabalho organizado segundo as inclinações humanas.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 3. ANARQUISMO */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      3. Anarquismo
                    </h4>
                    <p className="font-serif text-stone-300 text-justify leading-relaxed">
                      O anarquismo critica a autoridade coercitiva e a concentração do poder estatal. Defende diferentes formas de organização baseadas na autonomia, na associação voluntária e na descentralização.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="bg-[#121214] p-4.5 rounded-lg border border-stone-800 space-y-2">
                        <h5 className="font-serif font-bold text-amber-300 text-base">Pierre-Joseph Proudhon (1809–1865)</h5>
                        <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-stone-300">
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica à propriedade capitalista.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Distinção entre posse e propriedade.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Mutualismo.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Federalismo.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Associações de produtores.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Reciprocidade econômica.</li>
                        </ul>
                      </div>
                      <div className="bg-[#121214] p-4.5 rounded-lg border border-stone-800 space-y-2">
                        <h5 className="font-serif font-bold text-amber-300 text-base">Mikhail Bakunin (1814–1876)</h5>
                        <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-stone-300">
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica ao Estado.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Revolução social.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Coletivismo.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Federalismo.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Autonomia das organizações populares.</li>
                          <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica à formação de novas elites políticas.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 4. QUADRO COMPARATIVO */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      4. Quadro Comparativo
                    </h4>
                    <div className="overflow-x-auto rounded-lg border border-stone-800">
                      <table className="w-full text-left font-serif text-xs sm:text-sm border-collapse">
                        <thead>
                          <tr className="bg-stone-900 border-b border-stone-800 text-amber-300 font-mono text-xs">
                            <th className="p-3 border-r border-stone-800">Autor</th>
                            <th className="p-3 border-r border-stone-800">Principal preocupação</th>
                            <th className="p-3">Proposta central</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-800 text-stone-200">
                          <tr className="bg-[#121214] hover:bg-stone-900/50">
                            <td className="p-3 font-bold text-amber-300 border-r border-stone-800">Saint-Simon</td>
                            <td className="p-3 border-r border-stone-800">Organização da sociedade industrial</td>
                            <td className="p-3">Administração racional da produção</td>
                          </tr>
                          <tr className="bg-[#161619] hover:bg-stone-900/50">
                            <td className="p-3 font-bold text-amber-300 border-r border-stone-800">Fourier</td>
                            <td className="p-3 border-r border-stone-800">Relações sociais e trabalho</td>
                            <td className="p-3">Comunidades associativas e falanstérios</td>
                          </tr>
                          <tr className="bg-[#121214] hover:bg-stone-900/50">
                            <td className="p-3 font-bold text-amber-300 border-r border-stone-800">Proudhon</td>
                            <td className="p-3 border-r border-stone-800">Propriedade e concentração econômica</td>
                            <td className="p-3">Mutualismo e federalismo</td>
                          </tr>
                          <tr className="bg-[#161619] hover:bg-stone-900/50">
                            <td className="p-3 font-bold text-amber-300 border-r border-stone-800">Bakunin</td>
                            <td className="p-3 border-r border-stone-800">Estado e autoridade política</td>
                            <td className="p-3">Revolução social e federalismo libertário</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 5. CONCEITOS FUNDAMENTAIS */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      5. Conceitos Fundamentais
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { term: 'Socialismo utópico', desc: 'conjunto de propostas socialistas iniciais que buscavam reorganizar a sociedade por meio de projetos associativos e cooperativos.' },
                        { term: 'Anarquismo', desc: 'tradição política que questiona a autoridade coercitiva e a concentração estatal, defendendo formas autônomas de organização.' },
                        { term: 'Mutualismo', desc: 'sistema de relações econômicas baseado na reciprocidade, no crédito mútuo e na associação entre produtores.' },
                        { term: 'Federalismo', desc: 'organização política baseada na autonomia de unidades associadas e na coordenação por pactos.' },
                        { term: 'Falanstério', desc: 'comunidade produtiva imaginada por Fourier, que integraria atividades agrícolas, industriais e sociais.' },
                        { term: 'Coletivismo', desc: 'concepção segundo a qual os meios de produção devem ser organizados coletivamente.' },
                        { term: 'Proletariado', desc: 'classe de trabalhadores que depende predominantemente da venda de sua força de trabalho.' },
                        { term: 'Questão social', desc: 'conjunto de problemas relacionados à pobreza, às desigualdades e às condições de vida e trabalho na sociedade industrial.' },
                      ].map((c, cIdx) => (
                        <div key={cIdx} className="bg-[#121214] p-3.5 rounded-lg border border-stone-800">
                          <strong className="text-amber-300 font-serif font-bold">{c.term}:</strong>{' '}
                          <span className="font-serif text-stone-300 text-xs sm:text-sm">{c.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 6. DIFERENÇAS ENTRE SOCIALISMO UTÓPICO E ANARQUISMO */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      6. Diferenças entre Socialismo Utópico e Anarquismo
                    </h4>
                    <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3 font-serif text-stone-300 text-justify text-xs sm:text-sm leading-relaxed">
                      <p>O socialismo utópico inicial concentrou-se na elaboração de modelos de reorganização social.</p>
                      <p>O anarquismo desenvolveu uma crítica mais sistemática à autoridade política e à centralização estatal.</p>
                      <p className="italic text-amber-200/90 pt-1 border-t border-stone-800/80">
                        Essa diferença não é absoluta: os primeiros socialistas também criticaram hierarquias, enquanto os anarquistas também elaboraram projetos econômicos e comunitários.
                      </p>
                    </div>
                  </div>

                  {/* 7. MARXISMO E ANARQUISMO */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      7. Marxismo e Anarquismo
                    </h4>
                    <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3 font-serif text-stone-300 text-justify text-xs sm:text-sm leading-relaxed">
                      <p>A principal divergência histórica envolveu o papel do Estado e a organização da revolução.</p>
                      <p>Marx defendia a organização política dos trabalhadores e a transformação do poder político.</p>
                      <p>Bakunin temia que a concentração estatal produzisse uma nova classe dirigente.</p>
                      <p className="text-amber-300 font-semibold pt-1 border-t border-stone-800/80">
                        A ruptura entre essas correntes tornou-se particularmente importante na Associação Internacional dos Trabalhadores e no Congresso de Haia de 1872.
                      </p>
                    </div>
                  </div>

                  {/* 8. CRONOLOGIA ESSENCIAL */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      8. Cronologia Essencial
                    </h4>
                    <div className="space-y-2">
                      {[
                        { year: '1793', event: 'Godwin publica Political Justice' },
                        { year: '1808', event: 'Fourier publica Théorie des quatre mouvements' },
                        { year: '1816–1818', event: 'Saint-Simon publica L\'Industrie' },
                        { year: '1825', event: 'Saint-Simon publica Nouveau Christianisme' },
                        { year: '1829', event: 'Fourier publica Le Nouveau Monde industriel et sociétaire' },
                        { year: '1840', event: 'Proudhon publica O que é a propriedade?' },
                        { year: '1846', event: 'Proudhon publica Filosofia da Miséria' },
                        { year: '1848', event: 'Publicação do Manifesto do Partido Comunista' },
                        { year: '1864', event: 'Fundação da Associação Internacional dos Trabalhadores' },
                        { year: '1871', event: 'Comuna de Paris' },
                        { year: '1872', event: 'Congresso de Haia e ruptura entre marxistas e bakuninistas' },
                        { year: '1873', event: 'Bakunin publica Estatismo e Anarquia' },
                        { year: '1876', event: 'Morte de Bakunin' },
                        { year: '1880', event: 'Engels publica Do Socialismo Utópico ao Socialismo Científico' },
                      ].map((item, iIdx) => (
                        <div key={iIdx} className="bg-[#121214] p-3 rounded-lg border border-stone-800/80 flex items-center gap-3">
                          <span className="px-2.5 py-1 rounded bg-amber-950/80 border border-amber-700/60 font-mono text-xs font-bold text-amber-300 shrink-0">
                            {item.year}
                          </span>
                          <span className="font-serif text-xs sm:text-sm text-stone-200">
                            {item.event}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 9. LEGADO HISTÓRICO */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      9. Legado Histórico
                    </h4>
                    <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2">
                      <p className="font-serif text-xs sm:text-sm text-stone-400 font-mono pb-1">
                        As correntes estudadas contribuíram para:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-serif text-xs sm:text-sm text-stone-200">
                        {[
                          'desenvolvimento do movimento operário;',
                          'expansão do cooperativismo;',
                          'crítica à exploração econômica;',
                          'debates sobre propriedade;',
                          'defesa da autonomia dos trabalhadores;',
                          'federalismo e descentralização;',
                          'crítica à burocracia e à concentração do poder;',
                          'formação das tradições socialistas e anarquistas posteriores.'
                        ].map((leg, lIdx) => (
                          <div key={lIdx} className="flex items-start gap-2 bg-stone-900/60 p-2.5 rounded border border-stone-800">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{leg}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 10. IDEIA CENTRAL DO CAPÍTULO */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      10. Ideia Central do Capítulo
                    </h4>
                    <div className="bg-amber-950/30 border border-amber-600/50 p-6 rounded-xl space-y-3">
                      <p className="font-serif text-stone-200 text-justify leading-relaxed text-sm sm:text-base">
                        O socialismo utópico e o anarquismo representam diferentes tentativas de responder aos problemas produzidos pela sociedade industrial do século XIX.
                      </p>
                      <p className="font-serif text-stone-200 text-justify leading-relaxed text-sm sm:text-base">
                        Enquanto Saint-Simon e Fourier enfatizaram a reorganização cooperativa da sociedade, Proudhon e Bakunin desenvolveram críticas mais diretas à propriedade e à autoridade estatal.
                      </p>
                      <div className="border-t border-amber-700/50 pt-3 mt-3">
                        <p className="font-serif italic text-amber-300 text-base sm:text-lg font-semibold text-center">
                          "Como construir uma sociedade mais igualitária sem eliminar a liberdade e a autonomia dos indivíduos?"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : topic.id === 105 ? (
                <div className="bg-[#161619] border border-stone-800 p-6 sm:p-9 rounded-xl space-y-8 shadow-xl">
                  {/* Header */}
                  <div className="border-b border-stone-800 pb-5 space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-stone-100">SÍNTESE ACADÊMICA</h3>
                    <p className="font-serif italic text-amber-400 text-base">Materialismo histórico e crítica da economia política</p>
                  </div>

                  {/* 1. Conceitos fundamentais */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      1. Conceitos fundamentais
                    </h4>
                    <div className="grid grid-cols-1 gap-3 pt-1">
                      {[
                        { term: 'Materialismo histórico', desc: 'interpretação da história que parte das condições materiais de existência e das relações sociais de produção.' },
                        { term: 'Materialismo dialético', desc: 'tradição filosófica que interpreta a realidade material por meio de processos, relações e contradições.' },
                        { term: 'Infraestrutura', desc: 'estrutura econômica constituída pelas forças produtivas e pelas relações de produção.' },
                        { term: 'Superestrutura', desc: 'instituições jurídicas, políticas e formas de consciência relacionadas à organização material da sociedade.' },
                        { term: 'Ideologia', desc: 'conjunto de representações, valores e ideias que interpretam, justificam ou ocultam relações sociais.' },
                        { term: 'Alienação', desc: 'separação do trabalhador em relação ao produto, ao processo e ao controle de sua atividade produtiva.' },
                        { term: 'Mais-valia', desc: 'diferença entre o valor produzido pelo trabalhador e o valor correspondente à sua força de trabalho, segundo a teoria marxista.' },
                        { term: 'Fetichismo da mercadoria', desc: 'forma pela qual relações sociais de produção aparecem como relações entre coisas.' },
                        { term: 'Luta de classes', desc: 'conflito entre grupos sociais com posições distintas nas relações de produção.' },
                        { term: 'Hegemonia', desc: 'capacidade de exercer direção política, intelectual e moral, construindo consentimento e alianças.' },
                        { term: 'Guerra de posição', desc: 'estratégia de disputa prolongada pela direção política e cultural da sociedade civil, em contraste com o ataque frontal ao aparelho estatal.' },
                        { term: 'Indústria cultural', desc: 'conceito desenvolvido pela Escola de Frankfurt para analisar a produção industrializada e padronizada de bens culturais.' },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#121214] p-4 rounded-lg border border-stone-800">
                          <strong className="text-amber-300 font-serif font-bold">{item.term}:</strong>{' '}
                          <span className="font-serif text-stone-300 text-sm">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. Esquema do materialismo histórico clássico */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      2. Esquema do materialismo histórico clássico
                    </h4>
                    <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 text-center space-y-2 font-mono text-xs sm:text-sm text-stone-300">
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Condições materiais de existência</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Forças produtivas</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Relações de produção</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Estrutura econômica</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Instituições jurídicas e políticas</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Formas de consciência social</div>
                      <p className="font-serif text-xs italic text-stone-400 pt-3 text-justify">
                        Esse esquema representa uma relação de condicionamento histórico, não uma sequência mecânica e automática.
                      </p>
                    </div>
                  </div>

                  {/* 3. Esquema da crítica da economia política */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      3. Esquema da crítica da economia política
                    </h4>
                    <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 text-center space-y-2 font-mono text-xs sm:text-sm text-stone-300">
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Mercadoria</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Valor</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Dinheiro</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Capital</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Força de trabalho</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Mais-valia</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Acumulação</div>
                      <div className="text-amber-400 font-bold">↓</div>
                      <div className="p-2 bg-stone-900 rounded border border-stone-800">Reprodução das relações capitalistas</div>
                    </div>
                  </div>

                  {/* 4. Linha de continuidade intelectual */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      4. Linha de continuidade intelectual
                    </h4>
                    <div className="space-y-3">
                      {[
                        { author: 'Marx e Engels — século XIX', desc: 'Materialismo histórico, ideologia, relações de produção e crítica da economia política.' },
                        { author: 'Antonio Gramsci — primeira metade do século XX', desc: 'Hegemonia, sociedade civil, consentimento e guerra de posição.' },
                        { author: 'Escola de Frankfurt — século XX', desc: 'Indústria cultural, racionalidade instrumental, autoritarismo, comunicação e crítica da sociedade de massas.' },
                        { author: 'Leszek Kołakowski — segunda metade do século XX', desc: 'Crítica histórica e filosófica do marxismo, especialmente de sua transformação em doutrina política autoritária.' },
                      ].map((step, sIdx) => (
                        <div key={sIdx} className="bg-[#121214] p-4 rounded-lg border border-stone-800 space-y-1.5">
                          <h5 className="font-serif font-bold text-amber-300 text-sm">{step.author}</h5>
                          <p className="font-serif text-stone-300 text-xs sm:text-sm">{step.desc}</p>
                          {sIdx < 3 && <div className="text-center text-amber-500 font-bold pt-1">↓</div>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5. Atenção às diferenças */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      5. Atenção às diferenças
                    </h4>
                    <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5">
                      {[
                        'Marx e Engels não escreveram uma teoria idêntica à de Gramsci.',
                        'Gramsci não reduziu a política à ocupação de instituições culturais.',
                        'A Escola de Frankfurt não abandonou completamente a crítica da economia política.',
                        'Kołakowski não foi simplesmente um representante da Escola de Frankfurt.',
                        'O conceito de hegemonia não significa controle absoluto das mentes.',
                        'A teoria marxista da ideologia não é idêntica às teorias contemporâneas de comunicação e psicologia.',
                      ].map((diff, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5">
                          <span className="text-amber-400 font-bold">•</span>
                          <span className="font-serif text-stone-300 text-xs sm:text-sm">{diff}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 6. Questões para revisão */}
                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
                      6. Questões para revisão
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Qual é a diferença entre materialismo histórico e idealismo?',
                        'O que Marx entende por alienação?',
                        'Como funciona a relação entre infraestrutura e superestrutura?',
                        'O que significa fetichismo da mercadoria?',
                        'Qual é a importância da mais-valia?',
                        'Como Gramsci desenvolveu o conceito de hegemonia?',
                        'O que significa guerra de posição?',
                        'Qual é a importância da indústria cultural?',
                        'Qual foi a crítica de Kołakowski ao marxismo?',
                        'Por que a relação entre economia e cultura se tornou um problema central no marxismo do século XX?',
                      ].map((q, qIdx) => (
                        <div key={qIdx} className="bg-[#121214] p-3.5 rounded-lg border border-stone-800 flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-amber-950 text-amber-300 font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                            {qIdx + 1}
                          </span>
                          <span className="font-serif text-xs sm:text-sm text-stone-200 leading-relaxed">
                            {q}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* 1. Contexto Histórico Estrutural */}
                  <section id="context-historical" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-3 shadow-md">
                    <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
                      <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        1
                      </span>
                      <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                        Contexto Histórico Estrutural
                      </h3>
                    </div>
                    <p className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                      {topic.historicalContext}
                    </p>
                  </section>

                  {/* 2. Síntese Executiva do Período */}
                  <section id="context-summary" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-3 shadow-md">
                    <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
                      <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        2
                      </span>
                      <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                        Síntese Executiva e Panorama Geral
                      </h3>
                    </div>
                    <p className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                      {topic.summary}
                    </p>
                  </section>

                  {/* 3. Ementa Temática e Tópicos Cardeais */}
                  {topic.mainSubjects && topic.mainSubjects.length > 0 && (
                    <section id="context-subjects" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                      <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
                        <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                          3
                        </span>
                        <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                          Ementa Temática e Tópicos Cardeais
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 gap-2.5 pt-1">
                        {topic.mainSubjects.map((subj, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-3 bg-[#121214] p-3.5 rounded-lg border border-stone-800/80">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span className="font-serif text-xs sm:text-sm text-stone-200 leading-relaxed">
                              {subj}
                            </span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* 4. Consenso Historiográfico Consolidado */}
                  {topic.academicConsensus && (
                    <section id="context-consensus" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-3 shadow-md">
                      <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
                        <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                        <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                          Consenso Historiográfico Consolidado
                        </h3>
                      </div>
                      <div className="bg-amber-950/20 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <p className={`font-serif text-stone-200 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                          {topic.academicConsensus}
                        </p>
                      </div>
                    </section>
                  )}

                  {/* 5. Atores Históricos Centrais */}
                  {topic.keyActors && topic.keyActors.length > 0 && (
                    <section id="context-actors" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                      <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
                        <Users className="w-5 h-5 text-amber-400 shrink-0" />
                        <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                          Atores Históricos Centrais e Atuação Institucional
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {topic.keyActors.map((actor, aIdx) => (
                          <div key={aIdx} className="bg-[#121214] p-3.5 rounded-lg border border-stone-800 flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-300 font-mono text-xs flex items-center justify-center font-bold shrink-0">
                              {aIdx + 1}
                            </span>
                            <span className="font-mono text-xs text-stone-200 font-semibold">
                              {actor}
                            </span>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* 6. Especialistas e Historiadores de Referência */}
                  {topic.historiansInvolved && topic.historiansInvolved.length > 0 && (
                    <section id="context-historians" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
                      <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
                        <GraduationCap className="w-5 h-5 text-amber-400 shrink-0" />
                        <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                          Especialistas e Historiadores de Referência
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap pt-1">
                        {topic.historiansInvolved.map((hist, hIdx) => (
                          <span key={hIdx} className="px-3 py-1.5 rounded-lg bg-[#121214] border border-stone-800 text-stone-300 font-mono text-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                            {hist}
                          </span>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Historical Impact & Emblematic Quote Card */}
                  {topic.quote && (
                    <div className="bg-[#121214] border border-amber-600/40 p-5 rounded-xl space-y-2.5 shadow-inner">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                        CITAÇÃO EMBLEMÁTICA DA CÁTEDRA
                      </span>
                      <blockquote className="font-serif italic text-stone-200 text-base sm:text-lg leading-relaxed">
                        "{topic.quote.text}"
                      </blockquote>
                      <p className="text-xs font-mono text-stone-400 text-right">
                        — <span className="text-amber-300 font-semibold">{topic.quote.author}</span>, {topic.quote.context}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* TAB: CITATIONS (PROTOCOLO DE AUDITORIA DOCUMENTAL E BIBLIOGRÁFICA — 3 BLOCOS) */}
          {activeTab === 'citations' && (() => {
            const citData = getCitationsTabData();
            return (
              <div className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
                
                {/* PROTOCOL HEADER BANNER */}
                <div className="bg-[#161619] border border-amber-600/50 p-4 sm:p-6 rounded-xl shadow-lg relative overflow-hidden space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                          PROTOCOLO DE AUDITORIA DOCUMENTAL E BIBLIOGRÁFICA
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">
                          3 BLOCOS NORMATIVOS
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100">
                        {citData.title}
                      </h2>
                    </div>

                    <button
                      onClick={copyCitationsTab}
                      className="px-3.5 py-2 min-h-[38px] bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
                      title="Copiar os 3 blocos de citações e bibliografia formatados"
                    >
                      {copiedCitation === 'citations_tab_audit' ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Audit Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-amber-400" />
                          <span>Copiar Citações & Bibliografia</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className={`text-stone-300 leading-relaxed font-sans ${getFontSizeClass('body')}`}>
                    Classificação tripartite em conformidade com as diretrizes acadêmicas de rigor historiográfico: 
                    <strong className="text-amber-300 font-semibold"> (I) Citações Literais Verificadas</strong> com reprodução <em>ipsis litteris</em> e acervo comprovado; 
                    <strong className="text-amber-300 font-semibold"> (II) Sínteses Historiográficas</strong> sem aspas indevidas com atribuição de correntes e teses; e 
                    <strong className="text-amber-300 font-semibold"> (III) Referências Consolidadas</strong> padronizadas em ABNT/Chicago sem duplicidades.
                  </p>
                </div>

                {/* BLOCO I: CITAÇÕES LITERAIS VERIFICADAS */}
                <section id="cit-block-1" className="scroll-mt-24 bg-[#161619] p-5 sm:p-6 rounded-xl border border-stone-800 space-y-4 shadow-md">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                    <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      I
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                        I. Citações Literais Verificadas
                      </h3>
                      <p className="text-xs text-stone-400 font-mono">
                        Reprodução fiel da fonte primária ou historiográfica com localização arquivística ou editorial comprovada
                      </p>
                    </div>
                  </div>

                  {citData.citations && citData.citations.length > 0 ? (
                    <div className="space-y-4 pt-1">
                      {citData.citations.map((c) => (
                        <div key={c.number} className="bg-[#121214] p-4 rounded-lg border border-stone-800/80 space-y-2.5">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                              <span className="w-5 h-5 rounded-full bg-amber-950 text-amber-300 text-[10px] flex items-center justify-center border border-amber-700/60 font-bold">
                                {c.number}
                              </span>
                              {c.author}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                              {c.category}
                            </span>
                          </div>

                          <blockquote className={`font-serif italic text-stone-200 border-l-2 border-amber-500 pl-3.5 my-2.5 leading-relaxed ${getFontSizeClass('quote')}`}>
                            "{c.quoteText}"
                          </blockquote>

                          <div className="pt-1.5 border-t border-stone-800/60 flex flex-col gap-1 text-xs font-mono text-stone-400">
                            <div>
                              <strong className="text-stone-300">Fonte & Localização:</strong> {c.source}
                            </div>
                            {c.analise && (
                              <div className="font-serif italic text-stone-400 text-xs pt-1">
                                <strong className="text-amber-400/90 not-italic font-mono">Contexto:</strong> {c.analise}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-stone-400 font-serif italic text-sm">
                      Nenhuma citação literal adicional cadastrada para este tópico.
                    </p>
                  )}

                  {citData.methodologicalNote && (
                    <div className="bg-amber-950/20 border border-amber-600/30 rounded-lg p-3.5 sm:p-4 text-xs font-serif text-amber-200/90 leading-relaxed space-y-1.5 mt-4">
                      <strong className="text-amber-300 font-bold block font-mono text-[11px] uppercase tracking-wide flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        Nota metodológica sobre a verificação das fontes:
                      </strong>
                      <p className="text-stone-300 text-justify leading-relaxed">
                        {citData.methodologicalNote}
                      </p>
                    </div>
                  )}
                </section>

                {/* BLOCO II: SÍNTESES HISTORIOGRÁFICAS E ANÁLISES INTERPRETATIVAS */}
                <section id="cit-block-2" className="scroll-mt-24 bg-[#161619] p-5 sm:p-6 rounded-xl border border-stone-800 space-y-4 shadow-md">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                    <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      II
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                        II. Sínteses Historiográficas e Análises Interpretativas
                      </h3>
                      <p className="text-xs text-stone-400 font-mono">
                        Apresentação das teses centrais, consensos e controvérsias sem aspas indevidas · Atribuição autoral
                      </p>
                    </div>
                  </div>

                  {citData.syntheses && citData.syntheses.length > 0 ? (
                    <div className="space-y-3.5 pt-1">
                      {citData.syntheses.map((s) => (
                        <div key={s.number} className="bg-[#121214] p-4 rounded-lg border border-stone-800/80 space-y-2">
                          <h4 className="text-xs sm:text-sm font-mono font-bold text-amber-400 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-amber-950 text-amber-300 text-[10px] flex items-center justify-center border border-amber-700/60 font-bold">
                              {s.number}
                            </span>
                            {s.authorOrSchool}
                          </h4>
                          <p className={`font-serif text-stone-300 text-justify leading-relaxed pl-6 ${getFontSizeClass('body')}`}>
                            {s.synthesisText}
                          </p>
                          {s.supportingReference && (
                            <p className="text-xs font-mono text-stone-400 pl-6 border-l border-stone-800 ml-6 mt-1">
                              {s.supportingReference}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-stone-400 font-serif italic text-sm">
                      Sínteses historiográficas em conformidade com o debate acadêmico.
                    </p>
                  )}

                  {citData.consensosAcademicos && (
                    <div className="bg-stone-900/80 border border-stone-800 rounded-lg p-3.5 sm:p-4 space-y-1.5 mt-3">
                      <strong className="text-xs font-mono uppercase text-emerald-400 font-bold block">
                        Consensos Historiográficos Consolidados:
                      </strong>
                      <p className={`font-serif text-stone-300 leading-relaxed text-justify ${getFontSizeClass('body')}`}>
                        {citData.consensosAcademicos}
                      </p>
                    </div>
                  )}

                  {citData.controversiasELimitacoesDasFontes && (
                    <div className="bg-stone-900/80 border border-stone-800 rounded-lg p-3.5 sm:p-4 space-y-1.5 mt-2">
                      <strong className="text-xs font-mono uppercase text-amber-400 font-bold block">
                        Limitações Documentais e das Fontes:
                      </strong>
                      <p className={`font-serif text-stone-300 leading-relaxed text-justify ${getFontSizeClass('body')}`}>
                        {citData.controversiasELimitacoesDasFontes}
                      </p>
                    </div>
                  )}
                </section>

                {/* BLOCO III: REFERÊNCIAS BIBLIOGRÁFICAS CONSOLIDADAS */}
                <section id="cit-block-3" className="scroll-mt-24 bg-[#161619] p-5 sm:p-6 rounded-xl border border-stone-800 space-y-4 shadow-md">
                  <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                    <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                      III
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                        III. Referências Bibliográficas Consolidadas
                      </h3>
                      <p className="text-xs text-stone-400 font-mono">
                        Padronização rigorosa segundo normas ABNT / Chicago sem duplicidades
                      </p>
                    </div>
                  </div>

                  {citData.referenceCategories && citData.referenceCategories.length > 0 ? (
                    <div className="space-y-5 pt-1">
                      {citData.referenceCategories.map((cat, cIdx) => (
                        <div key={cIdx} className="space-y-2.5">
                          <h4 className="text-xs sm:text-sm font-mono font-bold text-amber-400 uppercase tracking-wide border-b border-stone-800/80 pb-1.5">
                            {cat.category}
                          </h4>
                          <div className="space-y-2 font-mono text-xs text-stone-300 pl-3 border-l-2 border-stone-800">
                            {cat.items.map((item, iIdx) => (
                              <p key={iIdx} className="leading-relaxed select-all">
                                - {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : citData.consolidatedReferences && citData.consolidatedReferences.length > 0 ? (
                    <div className="space-y-2 font-mono text-xs text-stone-300 select-all leading-relaxed pt-1">
                      {citData.consolidatedReferences.map((ref, idx) => (
                        <p key={idx} className="bg-stone-900/60 p-2 rounded border border-stone-800/60">
                          • {ref}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-stone-400 font-serif italic text-sm">
                      Referências em conferência documental.
                    </p>
                  )}
                </section>

              </div>
            );
          })()}

          {/* TAB: ADVANCED INVESTIGATION (INVESTIGAÇÃO AVANÇADA) */}
          {activeTab === 'advancedInvestigation' && advancedInvestigation && (
            <article className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <div className="bg-[#161619] border border-amber-500/70 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6">
                
                {/* Header Banner */}
                <div className="flex items-center justify-between flex-wrap gap-3 border-b border-amber-600/40 pb-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-mono text-[10px] sm:text-xs font-black tracking-wider uppercase rounded shadow-sm">
                        INVESTIGAÇÃO AVANÇADA
                      </span>
                      <span className="text-xs font-mono text-stone-400">
                        Capítulo {topic.categoryNumber} · {topic.periodLabel}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 tracking-tight">
                      {advancedInvestigation.subtitle}
                    </h2>
                  </div>

                  <button
                    onClick={copyAdvancedInvestigation}
                    className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0 shadow-md"
                  >
                    {copiedCitation === 'advanced_investigation' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Texto Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-400" />
                        <span>Copiar Investigação Completa</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Question Quick Jump Menu */}
                <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 sm:p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>8 Questões Historiográficas em Análise:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif">
                    {advancedInvestigation.questionsSummary.map((q, qIdx) => (
                      <a
                        key={qIdx}
                        href={`#adv-sec-${qIdx + 1}`}
                        className="p-2 rounded bg-stone-950/60 hover:bg-stone-800/80 border border-stone-800/70 text-stone-300 hover:text-amber-300 transition-colors flex items-start gap-2"
                      >
                        <span className="font-mono font-bold text-amber-500 shrink-0">{qIdx + 1}.</span>
                        <span className="leading-snug line-clamp-2">{q}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Parsed & Styled Markdown Content */}
                <div className="space-y-8 pt-2 font-serif text-stone-300">
                  {advancedInvestigation.rawText.split('\n\n').map((paragraph, pIdx) => {
                    const trimmed = paragraph.trim();
                    if (!trimmed) return null;

                    // Skip Title headers already in top banner
                    if (trimmed.startsWith('# INVESTIGAÇÃO AVANÇADA') || trimmed.startsWith('## Iluminismo, Antigo Regime')) {
                      return null;
                    }

                    if (trimmed.startsWith('### QUESTÕES PARA INVESTIGAÇÃO AVANÇADA')) {
                      return null; // Handled by Quick Jump Menu
                    }

                    // Section Questions Anchor Mapping
                    const qMatch = trimmed.match(/^###\s+(\d+)\.\s*(.*)/);
                    if (qMatch) {
                      const qNum = qMatch[1];
                      const qTitle = qMatch[2];
                      return (
                        <div key={pIdx} id={`adv-sec-${qNum}`} className={`scroll-mt-24 pt-6 border-t ${qNum === '1' ? 'border-amber-600/40' : 'border-stone-800'}`}>
                          <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-400 tracking-wide mb-3 flex items-start gap-2">
                            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded font-mono text-xs border border-amber-500/40 mt-1 shrink-0">Q{qNum}</span>
                            <span>{qTitle}</span>
                          </h3>
                        </div>
                      );
                    }

                    if (trimmed.startsWith('# CONCLUSÃO GERAL')) {
                      return (
                        <div key={pIdx} id="adv-sec-conclusion" className="scroll-mt-24 pt-8 border-t-2 border-amber-600/60 mt-8 space-y-3 bg-amber-950/20 p-6 rounded-xl border">
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-300 uppercase tracking-wide flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span>{trimmed.replace('# ', '')}</span>
                          </h2>
                        </div>
                      );
                    }

                    if (trimmed.startsWith('### REFERÊNCIAS FUNDAMENTAIS') || trimmed.startsWith('Referências fundamentais')) {
                      return (
                        <div key={pIdx} className="pt-6 border-t border-stone-800 space-y-4">
                          <h3 className="text-base sm:text-lg font-mono font-bold text-amber-400 uppercase tracking-wide">
                            REFERÊNCIAS FUNDAMENTAIS PARA APROFUNDAR AS QUESTÕES
                          </h3>
                          <div className="overflow-x-auto rounded-xl border border-stone-800">
                            <table className="w-full text-left text-xs font-serif">
                              <thead className="bg-stone-900 border-b border-stone-800 text-stone-200">
                                <tr>
                                  <th className="p-3 font-mono font-bold text-amber-400">Autor e Obra</th>
                                  <th className="p-3 font-mono font-bold text-amber-400">Questões Especialmente Relacionadas</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-stone-800/80 bg-stone-950/40">
                                {advancedInvestigation.fundamentalReferences.map((ref, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-stone-900/40 transition-colors">
                                    <td className="p-3 text-stone-200 font-semibold">{ref.authorAndWork}</td>
                                    <td className="p-3 font-mono text-amber-300 font-bold">{ref.relatedQuestions}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      );
                    }

                    if (trimmed.startsWith('#### ')) {
                      return (
                        <h4 key={pIdx} className="text-base sm:text-lg font-serif font-bold text-stone-100 mt-4 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          <span>{trimmed.replace('#### ', '')}</span>
                        </h4>
                      );
                    }

                    if (trimmed.startsWith('---')) {
                      return <hr key={pIdx} className="border-stone-800/80 my-4" />;
                    }

                    // Markdown Table Parsing (e.g. Hobsbawm vs Furet comparison table)
                    if (trimmed.includes('|') && trimmed.includes('\n|')) {
                      const tableLines = trimmed.split('\n').filter(l => l.trim().startsWith('|'));
                      if (tableLines.length >= 2) {
                        const headerCols = tableLines[0].split('|').map(c => c.trim()).filter(Boolean);
                        const bodyRows = tableLines.slice(2).map(row => row.split('|').map(c => c.trim()).filter(Boolean));
                        return (
                          <div key={pIdx} className="overflow-x-auto rounded-xl border border-stone-800 my-4 shadow-inner">
                            <table className="w-full text-left text-xs font-serif">
                              <thead className="bg-stone-900 border-b border-stone-800 text-stone-200">
                                <tr>
                                  {headerCols.map((h, hIdx) => (
                                    <th key={hIdx} className="p-3 font-mono font-bold text-amber-400">
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-stone-800/80 bg-stone-950/40">
                                {bodyRows.map((row, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-stone-900/40 transition-colors">
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className={`p-3 leading-relaxed ${cIdx === 0 ? 'font-bold text-stone-200 font-mono text-[11px]' : 'text-stone-300'}`}
                                        dangerouslySetInnerHTML={{
                                          __html: cell
                                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-300 font-bold">$1</strong>')
                                            .replace(/\*(.*?)\*/g, '<em class="text-stone-200">$1</em>')
                                        }}
                                      />
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      }
                    }

                    // Highlight Conclusão
                    if (trimmed.startsWith('**Conclusão:**') || trimmed.startsWith('Conclusão:')) {
                      return (
                        <div key={pIdx} className="bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-r-lg my-3 shadow-sm">
                          <p className={`text-stone-200 font-serif leading-relaxed ${getFontSizeClass('body')}`}
                            dangerouslySetInnerHTML={{
                              __html: trimmed
                                .replace(/\*\*Conclusão:\*\*/g, '<strong class="text-amber-400 font-bold uppercase font-mono tracking-wider mr-1">Conclusão:</strong>')
                                .replace(/Conclusão:/g, '<strong class="text-amber-400 font-bold uppercase font-mono tracking-wider mr-1">Conclusão:</strong>')
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-100 font-bold">$1</strong>')
                            }}
                          />
                        </div>
                      );
                    }

                    // Highlight Interpretação historiográfica
                    if (trimmed.startsWith('**Interpretação historiográfica**') || trimmed.startsWith('**Interpretação histórica**')) {
                      return (
                        <div key={pIdx} className="pt-2">
                          <span className="text-xs font-mono font-bold text-amber-400/90 uppercase tracking-wider block mb-1">
                            {trimmed.replace(/\*\*/g, '')}
                          </span>
                        </div>
                      );
                    }

                    // Regular paragraphs
                    return (
                      <p key={pIdx} className={`text-stone-300 font-serif text-justify leading-relaxed ${getFontSizeClass('body')}`}
                        dangerouslySetInnerHTML={{
                          __html: trimmed
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-100 font-bold">$1</strong>')
                            .replace(/\*(.*?)\*/g, '<em class="text-amber-200/90">$1</em>')
                        }}
                      />
                    );
                  })}
                </div>

              </div>
            </article>
          )}

          {/* TAB: AS LEIS DE MERCADO SÃO ABSOLUTAS? (CAPÍTULO IX) */}
          {activeTab === 'marketLaws' && marketLaws && (
            <article className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <div className="bg-[#161619] border border-amber-500/70 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6">
                
                {/* Header Banner */}
                <div className="flex items-center justify-between flex-wrap gap-3 border-b border-amber-600/40 pb-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-mono text-[10px] sm:text-xs font-black tracking-wider uppercase rounded shadow-sm">
                        ESTUDO MONOGRÁFICO ESPECIAL
                      </span>
                      <span className="text-xs font-mono text-stone-400">
                        Capítulo {topic.categoryNumber} · {topic.periodLabel}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 tracking-tight">
                      {marketLaws.title}
                    </h2>
                    <p className="text-sm sm:text-base font-serif italic text-amber-300/90">
                      {marketLaws.subtitle}
                    </p>
                    <p className="text-xs font-mono text-stone-400">
                      {marketLaws.authorCatedra}
                    </p>
                  </div>

                  <button
                    onClick={copyMarketLaws}
                    className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0 shadow-md"
                  >
                    {copiedCitation === 'market_laws' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Texto Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-400" />
                        <span>Copiar Capítulo Completo</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Section Quick Jump Menu */}
                <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 sm:p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Sumário dos {marketLaws.sections.length} Eixos Analíticos:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif">
                    {marketLaws.sections.map(s => (
                      <a
                        key={s.number}
                        href={`#market-sec-${s.number}`}
                        className="p-2 rounded bg-stone-950/60 hover:bg-stone-800/80 border border-stone-800/70 text-stone-300 hover:text-amber-300 transition-colors flex items-start gap-2"
                      >
                        <span className="font-mono font-bold text-amber-500 shrink-0">{s.number}.</span>
                        <span className="leading-snug line-clamp-2">{s.title}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Section Content */}
                {marketLaws.rawMarkdown ? (
                  <div className="space-y-6 pt-2 font-serif text-stone-300 leading-relaxed">
                    {marketLaws.rawMarkdown.split('\n\n').map((paragraph, pIdx) => {
                      const trimmed = paragraph.trim();
                      if (!trimmed) return null;
                      if (trimmed.startsWith('# CAPÍTULO EXTRA') || trimmed.startsWith('# A VIRADA EPISTEMOLÓGICA DO MARXISMO') || trimmed.startsWith('## Da infraestrutura')) {
                        return null;
                      }
                      if (trimmed === '---') {
                        return <hr key={pIdx} className="border-stone-800 my-6" />;
                      }
                      if (trimmed.startsWith('## ')) {
                        const h2Text = trimmed.replace('## ', '');
                        const secNumMatch = h2Text.match(/^(\d+)\.\s*(.*)/);
                        const anchorId = secNumMatch ? `market-sec-${secNumMatch[1]}` : undefined;
                        return (
                          <div key={pIdx} id={anchorId} className="scroll-mt-24 pt-6 border-t border-stone-800">
                            <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-400 tracking-wide mb-3 flex items-start gap-2">
                              <span>{h2Text}</span>
                            </h2>
                          </div>
                        );
                      }
                      if (trimmed.startsWith('### ')) {
                        return (
                          <h3 key={pIdx} className="text-base sm:text-lg font-serif font-semibold text-amber-200 mt-6 mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                            <span>{trimmed.replace('### ', '')}</span>
                          </h3>
                        );
                      }
                      if (trimmed.startsWith('- ')) {
                        const listItems = trimmed.split('\n').map(item => item.replace(/^- /, '').trim());
                        return (
                          <ul key={pIdx} className="list-disc list-inside space-y-2 pl-2 text-stone-300 font-serif my-3">
                            {listItems.map((li, liIdx) => (
                              <li key={liIdx} className="leading-relaxed">{li}</li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={pIdx} className="text-stone-300 text-sm sm:text-base leading-relaxed">
                          {trimmed.split(/(\*\*.*?\*\*)/g).map((part, bIdx) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={bIdx} className="font-bold text-stone-100">{part.slice(2, -2)}</strong>;
                            }
                            return part;
                          })}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  <>
                    {/* Introdução */}
                    <div id="market-intro" className="space-y-4 pt-2">
                      <h3 className="text-sm font-mono uppercase tracking-widest text-amber-400 font-bold border-l-2 border-amber-500 pl-3">
                        Introdução
                      </h3>
                      <div className="font-serif text-stone-300 text-sm sm:text-base leading-relaxed space-y-3 whitespace-pre-line">
                        {marketLaws.introduction}
                      </div>
                    </div>

                    {/* As Seções */}
                    <div className="space-y-8 pt-4">
                      {marketLaws.sections.map(sec => (
                        <div key={sec.number} id={`market-sec-${sec.number}`} className="space-y-3 border-t border-stone-800/80 pt-6">
                          <div className="flex items-center gap-2.5">
                            <span className="px-2 py-0.5 bg-amber-950 border border-amber-700/60 text-amber-300 font-mono text-xs font-bold rounded">
                              {sec.number}
                            </span>
                            <h4 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-stone-100">
                              {sec.title}
                            </h4>
                          </div>
                          {sec.content && (
                            <div className="font-serif text-stone-300 text-sm sm:text-base leading-relaxed space-y-3 whitespace-pre-line pl-1">
                              {sec.content}
                            </div>
                          )}

                          {/* Subseções se existirem */}
                          {sec.subsections && sec.subsections.length > 0 && (
                            <div className="space-y-4 pl-3 sm:pl-5 border-l-2 border-stone-800 mt-4">
                              {sec.subsections.map(sub => (
                                <div key={sub.number} className="space-y-2">
                                  <h5 className="text-sm sm:text-base font-serif font-semibold text-amber-200/90 flex items-center gap-2">
                                    <span className="font-mono text-xs text-amber-500 font-bold">{sub.number}</span>
                                    <span>{sub.title.startsWith(sub.number) ? sub.title.replace(sub.number, '').trim() : sub.title}</span>
                                  </h5>
                                  <div className="font-serif text-stone-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line pl-1">
                                    {sub.content}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Conclusão */}
                    {marketLaws.conclusion && (
                      <div id="market-conclusion" className="space-y-3 border-t-2 border-amber-600/40 pt-6">
                        <h3 className="text-sm font-mono uppercase tracking-widest text-amber-400 font-bold border-l-2 border-amber-500 pl-3">
                          Conclusão
                        </h3>
                        <div className="font-serif text-stone-300 text-sm sm:text-base leading-relaxed space-y-3 whitespace-pre-line bg-amber-950/20 border border-amber-700/30 p-5 rounded-xl">
                          {marketLaws.conclusion}
                        </div>
                      </div>
                    )}

                    {/* Referências Bibliográficas */}
                    {marketLaws.bibliographicReferences && marketLaws.bibliographicReferences.length > 0 && (
                      <div id="market-refs" className="space-y-3 border-t border-stone-800 pt-6">
                        <h3 className="text-sm font-mono uppercase tracking-widest text-stone-400 font-bold">
                          Referências Bibliográficas
                        </h3>
                        <ul className="space-y-2 text-xs font-mono text-stone-400">
                          {marketLaws.bibliographicReferences.map((ref, rIdx) => (
                            <li key={rIdx} className="border-l border-amber-600/40 pl-3">
                              {ref}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

              </div>
            </article>
          )}

          {/* TAB: RESEARCH DOSSIER */}
          {activeTab === 'researchDossier' && researchDossierText && (
            <article className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block">
                      DOSSIÊ ACADÊMICO DE PESQUISA · REGISTRO Nº {topic.categoryNumber}
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100">
                      {topic.title}
                    </h2>
                  </div>

                  <button
                    onClick={copyResearchDossier}
                    className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
                  >
                    {copiedCitation === 'research_dossier' ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Dossiê Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-amber-400" />
                        <span>Copiar Dossiê Completo</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-6 pt-2 font-serif text-stone-300">
                  {researchDossierText.split('\n\n').map((paragraph, pIdx) => {
                    const trimmed = paragraph.trim();
                    if (!trimmed) return null;

                    if (trimmed.startsWith('# ')) {
                      return (
                        <h1 key={pIdx} className="text-xl sm:text-2xl font-serif font-bold text-amber-300 border-b border-amber-600/40 pb-3 mt-4 mb-2">
                          {trimmed.replace('# ', '')}
                        </h1>
                      );
                    }

                    if (trimmed.startsWith('## 1. ') || trimmed.startsWith('## 1.')) {
                      return (
                        <div key={pIdx} id="res-1" className="scroll-mt-24 pt-4 border-t border-stone-800">
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-400 uppercase tracking-wide mb-3">
                            {trimmed.replace('## ', '')}
                          </h2>
                        </div>
                      );
                    }

                    if (trimmed.startsWith('## 2. ') || trimmed.startsWith('## 2.')) {
                      return (
                        <div key={pIdx} id="res-2" className="scroll-mt-24 pt-4 border-t border-stone-800">
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-400 uppercase tracking-wide mb-3">
                            {trimmed.replace('## ', '')}
                          </h2>
                        </div>
                      );
                    }

                    if (trimmed.startsWith('## 3. ') || trimmed.startsWith('## 3.')) {
                      return (
                        <div key={pIdx} id="res-3" className="scroll-mt-24 pt-4 border-t border-stone-800">
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-400 uppercase tracking-wide mb-3">
                            {trimmed.replace('## ', '')}
                          </h2>
                        </div>
                      );
                    }

                    if (trimmed.startsWith('## 4. ') || trimmed.startsWith('## 4.')) {
                      return (
                        <div key={pIdx} id="res-4" className="scroll-mt-24 pt-4 border-t border-stone-800">
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-400 uppercase tracking-wide mb-3">
                            {trimmed.replace('## ', '')}
                          </h2>
                        </div>
                      );
                    }

                    if (trimmed.startsWith('## 5. ') || trimmed.startsWith('## 5.')) {
                      return (
                        <div key={pIdx} id="res-5" className="scroll-mt-24 pt-4 border-t border-stone-800">
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-400 uppercase tracking-wide mb-3">
                            {trimmed.replace('## ', '')}
                          </h2>
                        </div>
                      );
                    }

                    if (trimmed.startsWith('## 6. ') || trimmed.startsWith('## 6.')) {
                      return (
                        <div key={pIdx} id="res-6" className="scroll-mt-24 pt-4 border-t border-stone-800">
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-400 uppercase tracking-wide mb-3">
                            {trimmed.replace('## ', '')}
                          </h2>
                        </div>
                      );
                    }

                    if (trimmed.startsWith('## 7. ') || trimmed.startsWith('## 7.')) {
                      return (
                        <div key={pIdx} id="res-7" className="scroll-mt-24 pt-4 border-t border-stone-800">
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-400 uppercase tracking-wide mb-3">
                            {trimmed.replace('## ', '')}
                          </h2>
                        </div>
                      );
                    }

                    if (trimmed.startsWith('## 8. ') || trimmed.startsWith('## 8.')) {
                      return (
                        <div key={pIdx} id="res-8" className="scroll-mt-24 pt-4 border-t border-stone-800">
                          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-400 uppercase tracking-wide mb-3">
                            {trimmed.replace('## ', '')}
                          </h2>
                        </div>
                      );
                    }

                    if (trimmed.startsWith('## ')) {
                      return (
                        <h2 key={pIdx} className="text-lg sm:text-xl font-serif font-bold text-amber-400 uppercase tracking-wide pt-3 border-t border-stone-800 mb-2">
                          {trimmed.replace('## ', '')}
                        </h2>
                      );
                    }

                    if (trimmed.startsWith('### ')) {
                      return (
                        <h3 key={pIdx} className="text-base sm:text-lg font-serif font-bold text-stone-100 mt-3 mb-1">
                          {trimmed.replace('### ', '')}
                        </h3>
                      );
                    }

                    if (trimmed.startsWith('---')) {
                      return <hr key={pIdx} className="border-stone-800 my-4" />;
                    }

                    const lines = trimmed.split('\n');
                    return (
                      <div key={pIdx} className="space-y-2">
                        {lines.map((line, lIdx) => {
                          const lTrimmed = line.trim();
                          if (!lTrimmed) return null;

                          if (lTrimmed.startsWith('* ') || lTrimmed.startsWith('- ')) {
                            const itemText = lTrimmed.replace(/^[\*\-]\s+/, '');
                            return (
                              <div key={lIdx} className={`ml-4 flex items-start gap-2 ${getFontSizeClass('body')}`}>
                                <span className="text-amber-500 font-bold font-mono">•</span>
                                <span className="text-stone-300 font-serif leading-relaxed"
                                  dangerouslySetInnerHTML={{
                                    __html: itemText
                                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-300 font-bold">$1</strong>')
                                      .replace(/\*(.*?)\*/g, '<em class="text-stone-200">$1</em>')
                                  }}
                                />
                              </div>
                            );
                          }

                          return (
                            <p key={lIdx} className={`text-stone-300 font-serif text-justify leading-relaxed ${getFontSizeClass('body')}`}
                              dangerouslySetInnerHTML={{
                                __html: lTrimmed
                                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-100 font-bold">$1</strong>')
                                  .replace(/\*(.*?)\*/g, '<em class="text-amber-200/90">$1</em>')
                              }}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
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
