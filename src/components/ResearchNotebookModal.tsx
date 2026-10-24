import React, { useState } from 'react';
import { DossierTopic } from '../types/dossier';
import { ACADEMIC_ESSAYS } from '../data/academicEssaysDatabase';
import { playStampSound, playTypewriterClack } from '../utils/audio';
import { 
  X, 
  Trash2, 
  Download, 
  Bookmark, 
  BookOpen, 
  FileText, 
  Check, 
  Copy 
} from 'lucide-react';

interface ResearchNotebookModalProps {
  topics: DossierTopic[];
  savedTopicIds: number[];
  onToggleSave: (topicId: number) => void;
  onSelectTopic: (topic: DossierTopic) => void;
  onClose: () => void;
}

export const ResearchNotebookModal: React.FC<ResearchNotebookModalProps> = ({
  topics,
  savedTopicIds,
  onToggleSave,
  onSelectTopic,
  onClose,
}) => {
  const [personalNotes, setPersonalNotes] = useState<{ [id: number]: string }>(() => {
    try {
      const stored = localStorage.getItem('dossier_user_notes');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });
  const [copiedAll, setCopiedAll] = useState(false);

  const savedTopics = topics.filter((t) => savedTopicIds.includes(t.id));

  const handleUpdateNote = (id: number, text: string) => {
    const updated = { ...personalNotes, [id]: text };
    setPersonalNotes(updated);
    try {
      localStorage.setItem('dossier_user_notes', JSON.stringify(updated));
    } catch {
      // fallback
    }
  };

  const generateReportText = () => {
    let report = `====================================================\n`;
    report += `DOSSIÊ SOVIÉTICO - RELATÓRIO ACADÊMICO DE PESQUISA\n`;
    report += `Data de Exportação: ${new Date().toLocaleDateString('pt-BR')}\n`;
    report += `Total de Dossiês Catalogados: ${savedTopics.length}\n`;
    report += `====================================================\n\n`;

    savedTopics.forEach((t, idx) => {
      report += `[${idx + 1}] Nº ${t.categoryNumber} - ${t.title}\n`;
      report += `Período: ${t.periodLabel}\n`;
      report += `Categoria: ${t.category}\n`;
      report += `Resumo Historiográfico:\n${t.summary}\n\n`;

      if (t.quote) {
        report += `Citação Documental:\n"${t.quote.text}" — ${t.quote.author} (${t.quote.context})\n\n`;
      }

      const essay = ACADEMIC_ESSAYS[t.id];
      if (essay) {
        report += `ENSAIO ACADÊMICO DISSERTATIVO INTEGRAL:\n`;
        report += `Título: ${essay.title} - ${essay.subtitle}\n`;
        report += `Cátedra: ${essay.authorCatedra}\n\n`;
        report += `I. Panorama e Antecedentes:\n${essay.narrativeOverview}\n\n`;
        report += `II. Narrativa dos Acontecimentos:\n${essay.historicalDevelopment}\n\n`;
        report += `III. Mecanismos Institucionais & Força:\n${essay.institutionalAndStateMechanisms}\n\n`;
        report += `IV. Debate Historiográfico:\n${essay.historiographicalDebate}\n\n`;
        report += `V. Citações dos Pesquisadores de Referência:\n`;
        essay.scholarlyQuotes.forEach((sq, i) => {
          report += `  [${i + 1}] ${sq.author} (${sq.year}, ${sq.pageOrDoc}): "${sq.quote}"\n      Análise: ${sq.historicalAnalysis}\n`;
        });
        report += `\nVI. Conclusão Historiográfica:\n${essay.concludingAssessment}\n\n`;
      }

      report += `Fontes Primárias & Tratados:\n`;
      t.primarySources.forEach((s) => {
        report += `  * ${s.title} (${s.year}) - ${s.institution}\n`;
        report += `    Referência: ${s.archiveReference}\n`;
        report += `    Transcrição: "${s.transcriptionPt}"\n`;
        report += `    Citação ABNT: ${s.abntCitation}\n\n`;
      });

      if (personalNotes[t.id]) {
        report += `Anotações Pessoais do Pesquisador:\n${personalNotes[t.id]}\n\n`;
      }

      report += `----------------------------------------------------\n\n`;
    });

    return report;
  };

  const handleDownloadReport = () => {
    const text = generateReportText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dossie_sovietico_relatorio_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    playStampSound();
  };

  const handleCopyReport = () => {
    const text = generateReportText();
    navigator.clipboard.writeText(text);
    playTypewriterClack();
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/90 backdrop-blur-sm overflow-hidden">
      <div 
        className="bg-[#18181c] border-0 sm:border sm:border-stone-700/80 rounded-none sm:rounded-xl w-full max-w-3xl h-[100dvh] sm:h-auto sm:max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#121215] border-b border-stone-800 p-3.5 sm:p-6 flex items-center justify-between gap-2.5 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <Bookmark className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="min-w-0">
              <h2 className="text-base sm:text-xl font-display font-bold text-stone-100 truncate">
                Meu Caderno de Pesquisa Acadêmica
              </h2>
              <p className="text-xs text-stone-400 font-mono">
                {savedTopics.length} dossiê(s) salvo(s) para estudo e citação
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800 flex items-center justify-center shrink-0 transition-colors"
            aria-label="Fechar Caderno"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3.5 sm:p-6 overflow-y-auto flex-1 space-y-4 bg-[#18181c] overscroll-contain">
          {savedTopics.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Bookmark className="w-12 h-12 text-stone-600 mx-auto" />
              <h3 className="text-base font-semibold text-stone-300">
                Seu caderno de pesquisa está vazio
              </h3>
              <p className="text-xs text-stone-500 font-serif max-w-sm mx-auto">
                Ao explorar os 20 tópicos na grade ou pela roleta, clique no botão de salvar para compilar suas fontes, transcrições e anotações.
              </p>
            </div>
          ) : (
            savedTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-[#141417] border border-stone-800 rounded-lg p-4 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 font-bold">
                      Nº {topic.categoryNumber} · {topic.periodLabel}
                    </span>
                    <h3 className="text-base font-semibold text-stone-100 mt-0.5">
                      {topic.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectTopic(topic);
                      }}
                      className="px-2.5 py-1 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 rounded flex items-center gap-1 border border-stone-700"
                      title="Abrir este dossiê"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>Abrir</span>
                    </button>

                    <button
                      onClick={() => onToggleSave(topic.id)}
                      className="p-1 text-stone-500 hover:text-red-400 rounded"
                      title="Remover do caderno"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Primary Sources Summary */}
                <div className="text-xs font-mono text-stone-400 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-stone-500" />
                  <span>{topic.primarySources.length} Fontes Catalogadas: {topic.primarySources.map(s => s.institution).join(', ')}</span>
                </div>

                {/* Personal Study Notes Textarea */}
                <div className="pt-2">
                  <label className="text-[11px] font-mono uppercase text-stone-400 block mb-1">
                    Minhas Anotações de Estudo:
                  </label>
                  <textarea
                    rows={2}
                    value={personalNotes[topic.id] || ''}
                    onChange={(e) => handleUpdateNote(topic.id, e.target.value)}
                    placeholder="Adicione observações, questões de pesquisa ou anotações para sua tese..."
                    className="w-full p-2.5 bg-[#0e0e11] border border-stone-800 rounded text-xs text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition-colors resize-y font-serif"
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {savedTopics.length > 0 && (
          <div className="p-3 sm:p-4 bg-[#121215] border-t border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 text-xs shrink-0">
            <span className="font-mono text-stone-400 text-[11px] text-center sm:text-left">
              Formato de exportação padrão ABNT / Chicago
            </span>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyReport}
                className="flex-1 sm:flex-none px-3.5 py-2 min-h-[42px] bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 rounded-lg font-medium flex items-center justify-center gap-1.5 border border-stone-700 transition-all text-xs"
              >
                {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAll ? 'Copiado!' : 'Copiar Tudo'}</span>
              </button>

              <button
                onClick={handleDownloadReport}
                className="flex-1 sm:flex-none px-4 py-2 min-h-[42px] bg-amber-500 hover:bg-amber-400 active:scale-95 text-stone-950 font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all shadow text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Exportar (.txt)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
