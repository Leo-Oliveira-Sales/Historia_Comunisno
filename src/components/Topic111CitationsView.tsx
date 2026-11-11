import React, { useState } from 'react';
import { 
  Quote, 
  BookOpen, 
  FileText, 
  Check, 
  Copy, 
  ExternalLink, 
  BookmarkCheck, 
  Layers,
  Search
} from 'lucide-react';
import citationsData from '../data/topic111_citations_data.json';
import { playTypewriterClack } from '../utils/audio';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

export const Topic111CitationsView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedPart, setSelectedPart] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const copyFullContent = () => {
    playTypewriterClack();
    navigator.clipboard.writeText(citationsData.raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const copySnippet = (text: string) => {
    playTypewriterClack();
    navigator.clipboard.writeText(text);
  };

  const filteredParts = citationsData.parts.map(part => {
    if (selectedPart !== 'all' && part.id !== selectedPart) {
      return null;
    }
    if (!searchQuery.trim()) {
      return part;
    }
    const q = searchQuery.toLowerCase();
    const matchesIntro = part.intro.toLowerCase().includes(q);
    const matchedSecs = part.secs.filter(s => 
      s.num.includes(q) || 
      s.title.toLowerCase().includes(q) || 
      s.content.toLowerCase().includes(q)
    );
    if (matchesIntro || matchedSecs.length > 0) {
      return { ...part, secs: matchedSecs };
    }
    return null;
  }).filter(Boolean) as typeof citationsData.parts;

  const renderContentBlock = (text: string) => {
    const blocks = text.split('\n\n');

    return (
      <div className="space-y-4">
        {blocks.map((block, bIdx) => {
          const trimmed = block.trim();
          if (!trimmed) return null;

          // Subsection Heading (### 1.1 ...)
          if (trimmed.startsWith('### ')) {
            const headingText = trimmed.replace(/^###\s+/, '');
            return (
              <div key={bIdx} className="pt-4 border-t border-stone-800/80">
                <h4 className={`font-serif font-bold text-amber-300 flex items-center gap-2 ${getFontSizeClass('heading')}`}>
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
                  {headingText}
                </h4>
              </div>
            );
          }

          // Blockquote (> ...)
          if (trimmed.startsWith('> ')) {
            const quoteText = trimmed.replace(/^>\s+/, '').replace(/^“|”$/g, '');
            return (
              <div key={bIdx} className="bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-r-xl my-3 shadow-inner">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className={`font-serif italic text-amber-200 font-medium leading-relaxed ${getFontSizeClass('quote')}`}>
                    “{quoteText}”
                  </p>
                </div>
              </div>
            );
          }

          // Bullet List (- Item)
          if (trimmed.startsWith('- ')) {
            const listItems = trimmed.split('\n').map(l => l.replace(/^[\s-]+\s*/, '').trim()).filter(Boolean);
            return (
              <ul key={bIdx} className="space-y-2 pl-2 my-2">
                {listItems.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2.5 text-stone-300 font-serif text-sm sm:text-base leading-relaxed">
                    <span className="text-amber-500 font-bold shrink-0 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          }

          // Single Link / URL line
          if (trimmed.startsWith('https://')) {
            return (
              <div key={bIdx} className="pt-1 pb-2">
                <a 
                  href={trimmed} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800 hover:border-amber-600/50 transition-colors break-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  <span>{trimmed}</span>
                </a>
              </div>
            );
          }

          // Standard paragraph (with bold metadata highlighting)
          const lines = trimmed.split('\n');
          return (
            <p key={bIdx} className={`text-stone-300 font-serif text-justify leading-relaxed ${getFontSizeClass('body')}`}>
              {lines.map((line, lIdx) => {
                const parts = line.split(/(\*\*[^*]+\*\*:?)/g);
                return (
                  <React.Fragment key={lIdx}>
                    {lIdx > 0 && <br />}
                    {parts.map((p, pIdx) => {
                      if (p.startsWith('**') && p.endsWith('**')) {
                        const clean = p.slice(2, -2);
                        return <strong key={pIdx} className="text-amber-300 font-serif font-bold">{clean}</strong>;
                      }
                      if (p.startsWith('**') && p.includes('**:')) {
                        const clean = p.replace(/^\*\*/, '').replace(/\*\*:$/, '');
                        return <strong key={pIdx} className="text-amber-300 font-serif font-bold">{clean}:</strong>;
                      }
                      if (p.startsWith('https://')) {
                        return (
                          <a 
                            key={pIdx}
                            href={p} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-amber-400 underline hover:text-amber-300 break-all"
                          >
                            {p}
                          </a>
                        );
                      }
                      return p;
                    })}
                  </React.Fragment>
                );
              })}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <article className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold flex items-center gap-1.5">
                <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                REGISTRO INTEGRAL DE CITAÇÕES E DOCUMENTOS
              </span>
              <span className="text-xs font-mono text-stone-400">
                {citationsData.authorCatedra}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100">
              {citationsData.title}
            </h2>
            <h3 className="text-sm sm:text-base font-serif italic text-amber-300/90">
              {citationsData.subtitle}
            </h3>
            <p className="text-xs font-mono text-stone-400 pt-1">
              <span className="text-amber-400 font-bold">Recorte temático:</span> {citationsData.thematicScope}
            </p>
          </div>

          <button
            onClick={copyFullContent}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0 shadow-md"
            title="Copiar acervo documental e citações na íntegra"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Acervo Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Registro Integral</span>
              </>
            )}
          </button>
        </div>

        {/* SEARCH AND PART FILTERS */}
        <div className="pt-2 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filtrar por autor, país, documento ou trecho..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121214] border border-stone-800 rounded-lg pl-9 pr-4 py-2 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500/60 font-serif"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
            <button
              onClick={() => { playTypewriterClack(); setSelectedPart('all'); }}
              className={`px-3 py-1.5 text-xs rounded-lg border font-mono transition-colors shrink-0 ${
                selectedPart === 'all'
                  ? 'bg-amber-500 text-stone-950 font-bold border-amber-400'
                  : 'bg-stone-900/80 text-stone-400 border-stone-800 hover:text-stone-200'
              }`}
            >
              Todas as Partes (36 seções)
            </button>
            {citationsData.parts.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => { playTypewriterClack(); setSelectedPart(p.id); }}
                className={`px-3 py-1.5 text-xs rounded-lg border font-mono transition-colors shrink-0 ${
                  selectedPart === p.id
                    ? 'bg-amber-500 text-stone-950 font-bold border-amber-400'
                    : 'bg-stone-900/80 text-stone-400 border-stone-800 hover:text-stone-200'
                }`}
              >
                Parte {idx + 1} ({p.secs.length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RENDER PARTS AND SECTIONS */}
      <div className="space-y-8">
        {filteredParts.map((part) => (
          <section key={part.id} className="space-y-6">
            {/* Part Title Header */}
            <div className="bg-stone-900/90 border-l-4 border-amber-500 px-5 py-4 rounded-r-xl shadow-md space-y-2">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <h3 className="font-serif font-bold text-amber-300 text-base sm:text-lg tracking-wide uppercase">
                  {part.title}
                </h3>
              </div>
              {part.intro && (
                <div className="text-xs sm:text-sm text-stone-300 font-serif italic border-t border-stone-800/80 pt-2 space-y-2 leading-relaxed">
                  {part.intro.split('\n\n').map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Sections in this part */}
            <div className="space-y-6">
              {part.secs.map((sec) => (
                <div 
                  key={sec.num} 
                  id={`cit-sec-${sec.num}`} 
                  className="bg-[#161619] border border-stone-800 rounded-xl p-5 sm:p-7 shadow-md space-y-4 relative hover:border-stone-700/80 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 border-b border-stone-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                        {sec.num}
                      </span>
                      <h4 className={`font-serif font-bold text-stone-100 uppercase tracking-wide ${getFontSizeClass('heading')}`}>
                        {sec.num}. {sec.title}
                      </h4>
                    </div>

                    <button
                      onClick={() => copySnippet(`## ${sec.num}. ${sec.title}\n\n${sec.content}`)}
                      className="p-1.5 text-stone-400 hover:text-amber-300 hover:bg-stone-900 rounded border border-transparent hover:border-stone-800 transition-colors shrink-0"
                      title="Copiar esta seção"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="pt-1">
                    {renderContentBlock(sec.content)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {filteredParts.length === 0 && (
          <div className="bg-[#161619] border border-stone-800 p-8 rounded-xl text-center text-stone-400 font-serif">
            Nenhuma citação ou documento encontrado para a pesquisa "{searchQuery}".
          </div>
        )}
      </div>
    </article>
  );
};
