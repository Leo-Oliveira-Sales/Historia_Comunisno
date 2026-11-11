import React from 'react';
import { DossierTopic } from '../types/dossier';
import { Check, Copy } from 'lucide-react';

interface DossierResearchViewProps {
  topic: DossierTopic;
  researchDossierText: string;
  copyResearchDossier: () => void;
  copiedCitation: string | null;
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

export const DossierResearchView: React.FC<DossierResearchViewProps> = ({
  topic,
  researchDossierText,
  copyResearchDossier,
  copiedCitation,
  getFontSizeClass,
}) => {
  return (
    <article className="space-y-6 w-full box-border overflow-hidden">
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block">
              DOSSIÊ ACADÊMICO DE PESQUISA · REGISTRO Nº {topic.categoryNumber}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100">
              Dossiê Acadêmico de Pesquisa
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
  );
};
