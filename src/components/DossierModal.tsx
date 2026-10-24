import React, { useState } from 'react';
import { DossierTopic } from '../types/dossier';
import { ACADEMIC_ESSAYS } from '../data/academicEssaysDatabase';
import { ACADEMIC_CHAPTERS } from '../data/academicChaptersDatabase';
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
  Sparkles,
  BookOpenCheck
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
  const [activeTab, setActiveTab] = useState<'chapter' | 'canonical' | 'essay' | 'stories' | 'documents' | 'context' | 'citations'>('chapter');
  const [activeCanonicalSection, setActiveCanonicalSection] = useState<number | string>(1);
  const [copiedCitation, setCopiedCitation] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [isMobileIndexOpen, setIsMobileIndexOpen] = useState<boolean>(false);

  const essay = ACADEMIC_ESSAYS[topic.id];
  const chapter = ACADEMIC_CHAPTERS[topic.id];
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

    if (canonicalDossier) {
      text += `--- PADRÃO EDITORIAL CANÔNICO (8 SEÇÕES) ---\n`;
      text += `1. IDENTIFICAÇÃO:\n${canonicalDossier.identificacao.nomeAcontecimento}\nData: ${canonicalDossier.identificacao.dataELocalizacao.dataExata}\nLocal: ${canonicalDossier.identificacao.dataELocalizacao.localizacaoPrecisa}\nRegime: ${canonicalDossier.identificacao.governoEResponsaveis.regimeVigente}\n\n`;
      text += `2. CONTEXTO HISTÓRICO:\n${canonicalDossier.contextoHistorico.situacaoAnterior}\nCausas Políticas: ${canonicalDossier.contextoHistorico.causasPoliticas}\nCausas Econômicas: ${canonicalDossier.contextoHistorico.causasEconomicas}\nCausas Sociais: ${canonicalDossier.contextoHistorico.causasSociais}\n\n`;
      text += `3. NARRATIVA CRONOLÓGICA:\n${canonicalDossier.narrativaCronologica.sinteseNarrativaGeral}\n`;
      canonicalDossier.narrativaCronologica.acontecimentosEmOrdem.forEach(e => {
        text += `- ${e.dataExata}: ${e.acontecimento} (${e.decisoesTomadas})\n`;
      });
      text += `\n4. DOCUMENTOS E PROVAS:\n`;
      canonicalDossier.documentosEEvidencias.documentosOriginais.forEach(d => {
        text += `• ${d.titulo} [${d.fundoArquivistico} / ${d.instituicaoGuarda}]\n  ${d.descricaoConteudo}\n`;
      });
      text += `\n5. RESPONSABILIDADES E VÍTIMAS:\n${canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.estimativasQuantitativas}\nConsequências Imediatas: ${canonicalDossier.responsabilidadesEConsequencias.consequenciasImediatas}\nConsequências a Longo Prazo: ${canonicalDossier.responsabilidadesEConsequencias.consequenciasLongoPrazo}\n\n`;
      text += `6. DEBATE HISTORIOGRÁFICO:\nConsenso: ${canonicalDossier.debateHistoriografico.consensosAcademicos}\nControvérsias e Limitações: ${canonicalDossier.debateHistoriografico.controversiasELimitacoesDasFontes}\n\n`;
      text += `7. CITAÇÕES VERIFICADAS:\n`;
      canonicalDossier.citacoesVerificadas.forEach(c => {
        text += `"${c.trechoLiteral}"\n— ${c.autor}, ${c.obra} (${c.edicaoEditoraAno}, ${c.paginaExata})\nAnálise: ${c.analiseContextual}\n\n`;
      });
      text += `8. BIBLIOGRAFIA DE REFERÊNCIA:\n`;
      canonicalDossier.bibliografia.forEach(b => {
        text += `• ${b.entradaAbnt} (${b.isbnOuReferencia || b.tipoFonte})\n`;
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
    fullText += `==========================================================\n\n`;
    fullText += `I. SÍNTESE GERAL\n${essay.narrativeOverview}\n\n`;
    fullText += `II. DESENVOLVIMENTO HISTÓRICO\n${essay.historicalDevelopment}\n\n`;
    fullText += `III. MECANISMOS INSTITUCIONAIS\n${essay.institutionalAndStateMechanisms}\n\n`;
    fullText += `IV. DEBATE HISTORIOGRÁFICO\n${essay.historiographicalDebate}\n\n`;
    fullText += `V. CONCLUSÃO\n${essay.concludingAssessment}\n\n`;
    copyToClipboard(fullText, 'full_essay');
  };

  const copyCanonicalDossier = () => {
    if (!canonicalDossier) return;
    let text = `==========================================================\n`;
    text += `PADRÃO EDITORIAL OBRIGATÓRIO (8 SEÇÕES CANÔNICAS)\n`;
    text += `${canonicalDossier.identificacao.nomeAcontecimento.toUpperCase()}\n`;
    text += `==========================================================\n\n`;
    text += `1. IDENTIFICAÇÃO:\n${canonicalDossier.identificacao.nomeAcontecimento}\nData: ${canonicalDossier.identificacao.dataELocalizacao.dataExata}\nLocal: ${canonicalDossier.identificacao.dataELocalizacao.localizacaoPrecisa}\nRegime: ${canonicalDossier.identificacao.governoEResponsaveis.regimeVigente}\n\n`;
    text += `2. CONTEXTO HISTÓRICO:\n${canonicalDossier.contextoHistorico.situacaoAnterior}\nCausas Políticas: ${canonicalDossier.contextoHistorico.causasPoliticas}\nCausas Econômicas: ${canonicalDossier.contextoHistorico.causasEconomicas}\nCausas Sociais: ${canonicalDossier.contextoHistorico.causasSociais}\n\n`;
    text += `3. NARRATIVA CRONOLÓGICA:\n${canonicalDossier.narrativaCronologica.sinteseNarrativaGeral}\n`;
    canonicalDossier.narrativaCronologica.acontecimentosEmOrdem.forEach(e => {
      text += `- ${e.dataExata}: ${e.acontecimento} (${e.decisoesTomadas})\n`;
    });
    text += `\n4. DOCUMENTOS E PROVAS:\n`;
    canonicalDossier.documentosEEvidencias.documentosOriginais.forEach(d => {
      text += `• ${d.titulo} [${d.fundoArquivistico} / ${d.instituicaoGuarda}]\n  ${d.descricaoConteudo}\n`;
    });
    text += `\n5. RESPONSABILIDADES E VÍTIMAS:\n${canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.estimativasQuantitativas}\nConsequências Imediatas: ${canonicalDossier.responsabilidadesEConsequencias.consequenciasImediatas}\nConsequências a Longo Prazo: ${canonicalDossier.responsabilidadesEConsequencias.consequenciasLongoPrazo}\n\n`;
    text += `6. DEBATE HISTORIOGRÁFICO:\nConsenso: ${canonicalDossier.debateHistoriografico.consensosAcademicos}\nControvérsias e Limitações: ${canonicalDossier.debateHistoriografico.controversiasELimitacoesDasFontes}\n\n`;
    text += `7. CITAÇÕES VERIFICADAS:\n`;
    canonicalDossier.citacoesVerificadas.forEach(c => {
      text += `"${c.trechoLiteral}"\n— ${c.autor}, ${c.obra} (${c.edicaoEditoraAno}, ${c.paginaExata})\nAnálise: ${c.analiseContextual}\n\n`;
    });
    text += `8. BIBLIOGRAFIA DE REFERÊNCIA:\n`;
    canonicalDossier.bibliografia.forEach(b => {
      text += `• ${b.entradaAbnt} (${b.isbnOuReferencia || b.tipoFonte})\n`;
    });
    copyToClipboard(text, 'canonical_full');
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
    } else if (activeTab === 'canonical') {
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
        label: `Doc ${i + 1}: ${src.title.substring(0, 18)}...`,
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
              <span>Capítulo Acadêmico do Livro</span>
            </button>
          )}

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

          {/* TAB: CANONICAL EDITORIAL STANDARD (8 MANDATORY SECTIONS) */}
          {activeTab === 'canonical' && canonicalDossier && (
            <article className="space-y-6 sm:space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <div className="bg-[#161619] border border-amber-600/40 p-4 sm:p-6 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-amber-500/10 border-l border-b border-amber-500/30 px-3.5 py-1.5 rounded-bl text-[11px] font-mono text-amber-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>AUDITORIA ACADÊMICA CONFORME · 8 CRITÉRIOS</span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-950/60 border border-amber-600/40 rounded-xl text-amber-400 shrink-0 mt-0.5">
                    <Award className="w-7 h-7" />
                  </div>
                  <div className="space-y-2.5">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-100 flex items-center gap-2">
                      <span>Padrão Editorial Canônico Obrigatório</span>
                      <span className="text-xs font-mono font-normal text-amber-400/90 bg-amber-950/50 px-2.5 py-1 rounded border border-amber-800/60">
                        8 Seções Normativas
                      </span>
                    </h3>
                    <p className={`text-stone-300 leading-relaxed font-sans ${getFontSizeClass('body')}`}>
                      Estrutura historiográfica padronizada em conformidade com as diretrizes editoriais acadêmicas: cronologia corrigida com datas exatas, fundos arquivísticos certificados, debate historiográfico tripartite e citações literais verificadas.
                    </p>
                  </div>
                </div>
              </div>

              {/* SEÇÃO 1: IDENTIFICAÇÃO */}
              <section id="section-1" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">1</span>
                    <h2 className="text-base font-serif font-bold text-stone-100 uppercase">Identificação do Acontecimento</h2>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>{canonicalDossier.identificacao.nomeAcontecimento}</h3>
                  <p className={`text-stone-300 ${getFontSizeClass('body')}`}><strong>Data:</strong> {canonicalDossier.identificacao.dataELocalizacao.dataExata} ({canonicalDossier.identificacao.dataELocalizacao.localizacaoPrecisa})</p>
                </div>
              </section>

              {/* SEÇÃO 2: CONTEXTO HISTÓRICO */}
              <section id="section-2" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">2</span>
                    <h2 className="text-base font-serif font-bold text-stone-100 uppercase">Contexto Histórico</h2>
                  </div>
                </div>
                <p className={`text-stone-300 font-serif leading-relaxed ${getFontSizeClass('body')}`}>{canonicalDossier.contextoHistorico.situacaoAnterior}</p>
              </section>

              {/* SEÇÃO 3: NARRATIVA CRONOLÓGICA */}
              <section id="section-3" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">3</span>
                    <h2 className="text-base font-serif font-bold text-stone-100 uppercase">Narrativa Cronológica</h2>
                  </div>
                </div>
                <p className={`text-stone-300 font-serif leading-relaxed ${getFontSizeClass('body')}`}>{canonicalDossier.narrativaCronologica.sinteseNarrativaGeral}</p>
              </section>

              <section id="section-4" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4">
                <h2 className="text-base font-serif font-bold text-stone-100 uppercase border-b border-stone-800 pb-3">4. Documentos e Evidências</h2>
                <p className={`text-stone-300 ${getFontSizeClass('body')}`}>Acervo arquivístico certificado (RGASPI, GARF, Library of Congress, Yale Avalon).</p>
              </section>

              <section id="section-5" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4">
                <h2 className="text-base font-serif font-bold text-stone-100 uppercase border-b border-stone-800 pb-3">5. Responsabilidades e Consequências</h2>
                <p className={`text-stone-300 ${getFontSizeClass('body')}`}>{canonicalDossier.responsabilidadesEConsequencias.vitimasEImpactos.estimativasQuantitativas}</p>
              </section>

              <section id="section-6" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4">
                <h2 className="text-base font-serif font-bold text-stone-100 uppercase border-b border-stone-800 pb-3">6. Debate Historiográfico</h2>
                <p className={`text-stone-300 ${getFontSizeClass('body')}`}>{canonicalDossier.debateHistoriografico.consensosAcademicos}</p>
              </section>

              <section id="section-7" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4">
                <h2 className="text-base font-serif font-bold text-stone-100 uppercase border-b border-stone-800 pb-3">7. Citações Verificadas</h2>
                <p className={`text-stone-300 ${getFontSizeClass('body')}`}>{canonicalDossier.citacoesVerificadas[0]?.trechoLiteral}</p>
              </section>

              <section id="section-8" className="scroll-mt-24 bg-[#161619] border border-stone-800 rounded-xl p-4 sm:p-6 space-y-4">
                <h2 className="text-base font-serif font-bold text-stone-100 uppercase border-b border-stone-800 pb-3">8. Bibliografia ABNT</h2>
                <div className={`font-mono text-stone-300 space-y-2 ${getFontSizeClass('body')}`}>
                  {canonicalDossier.bibliografia.map((b, i) => <p key={i}>- {b.entradaAbnt}</p>)}
                </div>
              </section>
            </article>
          )}

          {/* TAB: ESSAY */}
          {activeTab === 'essay' && essay && (
            <article className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <div className="bg-[#161619] border border-stone-800 p-5 rounded-xl space-y-3">
                <h2 className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}>{essay.title}</h2>
                <p className="text-amber-400 font-serif italic text-sm">{essay.subtitle}</p>
              </div>
              <div className={`font-serif text-stone-300 text-justify whitespace-pre-line leading-relaxed ${getFontSizeClass('body')}`}>
                {essay.narrativeOverview}
              </div>
            </article>
          )}

          {/* TAB: STORIES */}
          {activeTab === 'stories' && (
            <div className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
              {detailedEpisodes.map((ep, idx) => (
                <div key={idx} className="bg-[#161619] p-5 rounded-xl border border-stone-800 space-y-3">
                  <h3 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>{ep.title}</h3>
                  <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>{ep.narrative}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB: DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
              {topic.primarySources.map((source, index) => (
                <div key={index} id={`doc-source-${index}`} className="bg-[#161619] p-5 rounded-xl border border-stone-800 space-y-3">
                  <h3 className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}>{source.title}</h3>
                  <p className={`font-serif italic text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>"{source.transcriptionPt}"</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB: CONTEXT */}
          {activeTab === 'context' && (
            <div className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <div className="bg-[#161619] p-5 rounded-xl border border-stone-800 space-y-3">
                <h3 className="text-amber-400 font-mono uppercase text-xs font-bold">Contexto Histórico</h3>
                <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>{topic.historicalContext}</p>
              </div>
            </div>
          )}

          {/* TAB: CITATIONS */}
          {activeTab === 'citations' && (
            <div id="citations-list" className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
              <div className="bg-[#161619] p-5 rounded-xl border border-stone-800 space-y-3">
                <h3 className="text-amber-400 font-mono uppercase text-xs font-bold">Referências & Bibliografia</h3>
                {chapter?.bibliographicReferences.map((ref, idx) => (
                  <p key={idx} className={`font-mono text-stone-300 ${getFontSizeClass('body')}`}>{ref}</p>
                ))}
              </div>
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
