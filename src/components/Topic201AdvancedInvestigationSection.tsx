import React, { useMemo, useState } from 'react';
import {
  Copy,
  Check,
  Search,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import { RAW_ADVANCED_INVESTIGATION_201 } from '../data/advanced/advanced_guerras_mundiais_01';

interface Props {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

interface SubSectionBlock {
  heading: string;
  blocks: string[];
}

interface InvestigationItem {
  id: string;
  code: string;
  question: string;
  subsections: SubSectionBlock[];
  referencesHeading?: string;
  references: string[];
}

interface ParsedAdvanced201 {
  headerLines: string[];
  presentationHeading: string;
  presentationBlocks: string[];
  investigations: InvestigationItem[];
  synthesisHeading: string;
  synthesisParagraphs: string[];
  closingLine: string;
}

function parseAdvancedInvestigation201(raw: string): ParsedAdvanced201 {
  const normalized = raw.replace(/\r\n/g, '\n');
  const chunks = normalized.split(/^={10,}$/m);

  const headerLines = (chunks[1] || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const presentationRaw = (chunks[2] || '').trim();
  const presentationParts = presentationRaw.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
  const presentationHeading = presentationParts[0] || 'APRESENTAÇÃO';
  const presentationBlocks = presentationParts.slice(1);

  const investigations: InvestigationItem[] = [];

  for (let i = 3; i <= 17; i += 2) {
    const titleLines = (chunks[i] || '')
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const code = titleLines[0] || '';
    const question = titleLines.slice(1).join(' ');
    const body = (chunks[i + 1] || '').trim();

    let mainBody = body;
    let referencesHeading: string | undefined;
    let references: string[] = [];

    const refIdx = body.lastIndexOf('\nREFERÊNCIAS:\n');
    if (refIdx !== -1) {
      mainBody = body.slice(0, refIdx).trim();
      const refLines = body
        .slice(refIdx + 1)
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean);
      referencesHeading = refLines[0];
      references = refLines.slice(1);
    }

    const secChunks = mainBody
      .split(/\n(?=\d+\.\s+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ])/)
      .map((s) => s.trim())
      .filter(Boolean);

    const subsections: SubSectionBlock[] = secChunks.map((sec) => {
      const nl = sec.indexOf('\n');
      const heading = nl === -1 ? sec : sec.slice(0, nl).trim();
      const rest = nl === -1 ? '' : sec.slice(nl + 1).trim();
      const blocks = rest
        ? rest
            .split(/\n{2,}/)
            .map((b) => b.trim())
            .filter(Boolean)
        : [];
      return { heading, blocks };
    });

    investigations.push({
      id: `adv-sec-${investigations.length + 1}`,
      code,
      question,
      subsections,
      referencesHeading,
      references,
    });
  }

  const synthesisHeading = (chunks[19] || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)[0] || 'SÍNTESE FINAL DA INVESTIGAÇÃO AVANÇADA';

  const synthesisParagraphs = (chunks[20] || '')
    .trim()
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  const closingLine = (chunks[21] || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)[0] || '';

  return {
    headerLines,
    presentationHeading,
    presentationBlocks,
    investigations,
    synthesisHeading,
    synthesisParagraphs,
    closingLine,
  };
}

export const Topic201AdvancedInvestigationSection: React.FC<Props> = ({
  getFontSizeClass,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const parsed = useMemo(
    () => parseAdvancedInvestigation201(RAW_ADVANCED_INVESTIGATION_201),
    []
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_ADVANCED_INVESTIGATION_201);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const renderContentBlock = (block: string, bIdx: number) => {
    const lines = block
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) return null;

    if (lines.every((l) => l.startsWith('- '))) {
      return (
        <ul
          key={bIdx}
          className={`space-y-1.5 pl-4 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
        >
          {lines.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }

    if (lines.length > 1 && lines[0].endsWith(':') && lines.slice(1).every((l) => l.startsWith('- '))) {
      return (
        <div key={bIdx} className="space-y-2">
          <p className={`font-serif font-semibold text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}>
            {lines[0]}
          </p>
          <ul
            className={`space-y-1.5 pl-4 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
          >
            {lines.slice(1).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }

    if (lines.length >= 2 && lines[0].endsWith(':')) {
      return (
        <div
          key={bIdx}
          className="bg-[#121214] p-4 rounded-lg border border-stone-800 space-y-1.5"
        >
          <h4 className="font-mono font-bold text-amber-300 text-xs sm:text-sm tracking-wide">
            {lines[0]}
          </h4>
          {lines.slice(1).map((textLine, tIdx) => (
            <p
              key={tIdx}
              className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}
            >
              {textLine}
            </p>
          ))}
        </div>
      );
    }

    return (
      <div key={bIdx} className="space-y-2">
        {lines.map((line, lIdx) => (
          <p
            key={lIdx}
            className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}
          >
            {line}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div
      id="essay-advanced-investigation-master"
      className="scroll-mt-24 pt-6 border-t-2 border-stone-800 space-y-8"
    >
      {/* DIVIDER BADGE: INVESTIGAÇÃO AVANÇADA */}
      <div className="flex items-center gap-4 py-2">
        <div className="h-px bg-stone-700 flex-1" />
        <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-400 font-bold bg-[#161619] px-4 py-1.5 rounded-full border border-amber-600/40 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          INVESTIGAÇÃO AVANÇADA
        </span>
        <div className="h-px bg-stone-700 flex-1" />
      </div>

      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-800 pb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                {parsed.headerLines[2]}
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                {parsed.headerLines[3]}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              {parsed.headerLines[0]}
            </h2>
            <p className="text-amber-400 font-serif font-bold text-sm sm:text-base tracking-wide">
              {parsed.headerLines[1]}
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar texto integral de Investigação Avançada"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Texto Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Investigação Avançada na Íntegra</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* APRESENTAÇÃO */}
      <section
        id="adv-apresentacao"
        className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <Compass className="w-5 h-5 text-amber-400 shrink-0" />
          <h3
            className={`font-serif font-bold text-amber-300 uppercase tracking-wide ${getFontSizeClass('heading')}`}
          >
            {parsed.presentationHeading}
          </h3>
        </div>
        <div className="space-y-4">
          {parsed.presentationBlocks.map((block, bIdx) =>
            renderContentBlock(block, bIdx)
          )}
        </div>
      </section>

      {/* INVESTIGAÇÕES 01 A 08 */}
      <div className="space-y-6">
        {parsed.investigations.map((inv, invIdx) => (
          <article
            key={inv.id}
            id={inv.id}
            className="scroll-mt-24 bg-[#161619] border border-stone-800 p-5 sm:p-7 rounded-xl shadow-md space-y-6"
          >
            {/* INVESTIGATION TITLE HEADER */}
            <div className="bg-[#121214] border border-amber-600/40 p-4 sm:p-5 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                <Search className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{inv.code}</span>
              </div>
              <h3
                className={`font-serif font-bold text-stone-100 leading-snug ${getFontSizeClass('heading')}`}
              >
                {inv.question}
              </h3>
            </div>

            {/* SUBSECTIONS */}
            <div className="space-y-5">
              {inv.subsections.map((sub, subIdx) => {
                const isConclusion = sub.heading.includes('CONCLUSÃO');
                return (
                  <div
                    key={subIdx}
                    className={`space-y-3 ${
                      subIdx > 0 ? 'pt-4 border-t border-stone-800/80' : ''
                    } ${
                      isConclusion
                        ? 'bg-[#121214] p-4 sm:p-5 rounded-lg border border-amber-600/30'
                        : ''
                    }`}
                  >
                    <h4
                      className={`font-serif font-bold uppercase tracking-wide ${
                        isConclusion ? 'text-amber-300' : 'text-stone-100'
                      } ${getFontSizeClass('heading')}`}
                    >
                      {sub.heading}
                    </h4>
                    <div className="space-y-3.5">
                      {sub.blocks.map((block, bIdx) =>
                        renderContentBlock(block, bIdx)
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* REFERÊNCIAS */}
            {inv.referencesHeading && inv.references.length > 0 && (
              <div className="bg-[#121214] p-4 rounded-lg border border-stone-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{inv.referencesHeading}</span>
                </div>
                <ul className="space-y-1 font-mono text-xs text-stone-300 leading-relaxed">
                  {inv.references.map((refLine, rIdx) => (
                    <li key={`${invIdx}-ref-${rIdx}`}>{refLine}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* SÍNTESE FINAL DA INVESTIGAÇÃO AVANÇADA */}
      <section
        id="adv-sintese"
        className="scroll-mt-24 bg-[#161619] border border-amber-600/40 p-5 sm:p-7 rounded-xl shadow-md space-y-4"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <h3
            className={`font-serif font-bold text-amber-300 uppercase tracking-wide ${getFontSizeClass('heading')}`}
          >
            {parsed.synthesisHeading}
          </h3>
        </div>
        <div
          className={`space-y-3 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}
        >
          {parsed.synthesisParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
        {parsed.closingLine && (
          <div className="pt-4 border-t border-stone-800 text-center font-mono text-xs text-stone-400 tracking-widest uppercase">
            {parsed.closingLine}
          </div>
        )}
      </section>
    </div>
  );
};
