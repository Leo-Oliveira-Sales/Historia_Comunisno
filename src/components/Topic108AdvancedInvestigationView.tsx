import React, { useMemo, useState } from 'react';
import { BookOpen, Check, CheckCircle2, Copy, FileText, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { RAW_ADVANCED_INVESTIGATION_08 } from '../data/advanced/advanced_ideologias_08';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

interface QuestionBlock {
  number: number;
  heading: string;
  blocks: string[];
}

interface PartSection {
  id: string;
  title: string;
  questions: QuestionBlock[];
}

interface BibSubSection {
  heading: string;
  items: string[];
}

interface ParsedInvestigation {
  mainTitle: string;
  subtitle: string;
  chapterTitle: string;
  metaLines: string[];
  parts: PartSection[];
  allQuestions: QuestionBlock[];
  synthesisTitle: string;
  synthesisBlocks: string[];
  bibliographyTitle: string;
  bibliographySubsections: BibSubSection[];
  methodologyTitle: string;
  methodologyBlocks: string[];
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatInline(text: string): string {
  const escaped = escapeHtml(text);
  return escaped
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-stone-100">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="italic text-amber-200/90">$1</em>');
}

function parseInvestigation(raw: string): ParsedInvestigation {
  const normalized = raw.replace(/\r\n/g, '\n');
  const firstSep = normalized.indexOf('\n---\n');
  const headerText = firstSep !== -1 ? normalized.slice(0, firstSep) : '';
  const bodyText = firstSep !== -1 ? normalized.slice(firstSep + 5) : normalized;

  const headerLines = headerText
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean);

  const mainTitle = (headerLines[0] || '# INVESTIGAÇÃO AVANÇADA').replace(/^#\s+/, '');
  const subtitle = (headerLines[1] || '## TOTALITARISMO RACIAL E GENOCÍDIO INDUSTRIAL').replace(/^##\s+/, '');
  const chapterTitle = (headerLines[2] || '').replace(/^###\s+/, '');
  const metaLines = headerLines.slice(3);

  const topSections = bodyText.split(/\n(?=# )/).map(s => s.trim()).filter(Boolean);

  const parts: PartSection[] = [];
  const allQuestions: QuestionBlock[] = [];
  let synthesisTitle = 'SÍNTESE FINAL DA INVESTIGAÇÃO';
  let synthesisBlocks: string[] = [];
  let bibliographyTitle = 'BIBLIOGRAFIA GERAL DE REFERÊNCIA';
  const bibliographySubsections: BibSubSection[] = [];
  let methodologyTitle = 'OBSERVAÇÃO METODOLÓGICA';
  let methodologyBlocks: string[] = [];

  topSections.forEach((sec) => {
    const firstNewline = sec.indexOf('\n');
    const headingLine = (firstNewline === -1 ? sec : sec.slice(0, firstNewline)).replace(/^#\s+/, '').trim();
    const rest = (firstNewline === -1 ? '' : sec.slice(firstNewline + 1)).trim();

    if (headingLine.startsWith('PARTE ')) {
      const qChunks = rest.split(/\n(?=## )/).map(c => c.trim()).filter(Boolean);
      const questions: QuestionBlock[] = [];

      qChunks.forEach((qc) => {
        if (qc === '---') return;
        const cleanedChunk = qc.replace(/\n---\s*$/, '').trim();
        const nl = cleanedChunk.indexOf('\n');
        const qHeading = (nl === -1 ? cleanedChunk : cleanedChunk.slice(0, nl)).replace(/^##\s+/, '').trim();
        const qBody = (nl === -1 ? '' : cleanedChunk.slice(nl + 1)).trim();
        const numMatch = qHeading.match(/^(\d+)\./);
        const qNum = numMatch ? parseInt(numMatch[1], 10) : allQuestions.length + 1;
        const blocks = qBody
          .split(/\n{2,}/)
          .map(b => b.trim())
          .filter(b => b.length > 0 && b !== '---');

        const qObj: QuestionBlock = {
          number: qNum,
          heading: qHeading,
          blocks,
        };
        questions.push(qObj);
        allQuestions.push(qObj);
      });

      parts.push({
        id: `adv-parte-${parts.length + 1}`,
        title: headingLine,
        questions,
      });
    } else if (headingLine.startsWith('SÍNTESE FINAL')) {
      synthesisTitle = headingLine;
      synthesisBlocks = rest
        .replace(/\n---\s*$/, '')
        .split(/\n{2,}/)
        .map(b => b.trim())
        .filter(b => b.length > 0 && b !== '---');
    } else if (headingLine.startsWith('BIBLIOGRAFIA GERAL')) {
      bibliographyTitle = headingLine;
      const subChunks = rest
        .replace(/\n---\s*$/, '')
        .split(/\n(?=## )/)
        .map(c => c.trim())
        .filter(Boolean);

      subChunks.forEach((sc) => {
        const nl = sc.indexOf('\n');
        const subHeading = (nl === -1 ? sc : sc.slice(0, nl)).replace(/^##\s+/, '').trim();
        const subBody = (nl === -1 ? '' : sc.slice(nl + 1)).trim();
        const items = subBody
          .split('\n')
          .map(l => l.trim())
          .filter(l => l.startsWith('- '))
          .map(l => l.replace(/^-\s+/, ''));
        bibliographySubsections.push({
          heading: subHeading,
          items,
        });
      });
    } else if (headingLine.startsWith('OBSERVAÇÃO METODOLÓGICA')) {
      methodologyTitle = headingLine;
      methodologyBlocks = rest
        .replace(/\n---\s*$/, '')
        .split(/\n{2,}/)
        .map(b => b.trim())
        .filter(b => b.length > 0 && b !== '---');
    }
  });

  return {
    mainTitle,
    subtitle,
    chapterTitle,
    metaLines,
    parts,
    allQuestions,
    synthesisTitle,
    synthesisBlocks,
    bibliographyTitle,
    bibliographySubsections,
    methodologyTitle,
    methodologyBlocks,
  };
}

export const Topic108AdvancedInvestigationView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState(false);

  const parsed = useMemo(() => parseInvestigation(RAW_ADVANCED_INVESTIGATION_08), []);

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_ADVANCED_INVESTIGATION_08);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const renderQuestionBlock = (block: string, bIdx: number) => {
    if (block.startsWith('**Interpretação historiográfica:**')) {
      const content = block.replace(/^\*\*Interpretação historiográfica:\*\*\s*/, '');
      return (
        <div
          key={bIdx}
          className="bg-stone-900/70 border border-stone-700/80 border-l-4 border-l-amber-500 p-4 rounded-r-xl space-y-1.5"
        >
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
            Interpretação historiográfica:
          </span>
          <p
            className={`font-serif text-stone-200 leading-relaxed text-justify ${getFontSizeClass('body')}`}
            dangerouslySetInnerHTML={{ __html: formatInline(content) }}
          />
        </div>
      );
    }

    if (block.startsWith('**Conclusão:**')) {
      const content = block.replace(/^\*\*Conclusão:\*\*\s*/, '');
      return (
        <div
          key={bIdx}
          className="bg-amber-950/25 border border-amber-600/40 p-4 rounded-xl space-y-1.5"
        >
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
            Conclusão:
          </span>
          <p
            className={`font-serif text-stone-100 leading-relaxed text-justify ${getFontSizeClass('body')}`}
            dangerouslySetInnerHTML={{ __html: formatInline(content) }}
          />
        </div>
      );
    }

    if (block.startsWith('**Referências fundamentais:**')) {
      const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
      const items = lines.slice(1).map(l => l.replace(/^-\s+/, ''));
      return (
        <div
          key={bIdx}
          className="bg-stone-950/70 border border-stone-800 p-4 rounded-xl space-y-2"
        >
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
            Referências fundamentais:
          </span>
          <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-stone-300">
            {items.map((item, iIdx) => (
              <li key={iIdx} className="flex items-start gap-2">
                <span className="text-amber-400 font-bold shrink-0">•</span>
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ul>
        </div>
      );
    }

    if (block.startsWith('**Critério de rigor:**')) {
      const content = block.replace(/^\*\*Critério de rigor:\*\*\s*/, '');
      return (
        <div
          key={bIdx}
          className="bg-amber-950/30 border border-amber-600/50 p-4 sm:p-5 rounded-xl space-y-1.5"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold block">
            Critério de rigor:
          </span>
          <p
            className={`font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}
            dangerouslySetInnerHTML={{ __html: formatInline(content) }}
          />
        </div>
      );
    }

    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    const isNumberedList = lines.length > 0 && lines.every(l => /^\d+\.\s+/.test(l));
    if (isNumberedList) {
      return (
        <div key={bIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {lines.map((line, lIdx) => {
            const match = line.match(/^(\d+)\.\s+(.*)$/);
            const num = match ? match[1] : String(lIdx + 1);
            const restText = match ? match[2] : line;
            return (
              <div
                key={lIdx}
                className="bg-stone-900/70 p-3.5 rounded-lg border border-stone-800 flex items-start gap-2.5"
              >
                <span className="w-6 h-6 rounded-full bg-amber-950 border border-amber-700/60 text-amber-300 font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                  {num}
                </span>
                <p
                  className="font-serif text-xs sm:text-sm text-stone-200 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatInline(restText) }}
                />
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <p
        key={bIdx}
        className={`font-serif text-stone-300 leading-relaxed text-justify ${getFontSizeClass('body')}`}
        dangerouslySetInnerHTML={{ __html: formatInline(block) }}
      />
    );
  };

  return (
    <article className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-500/70 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6">
        <div className="flex items-start justify-between flex-wrap gap-4 border-b border-amber-600/40 pb-5">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-mono text-[10px] sm:text-xs font-black tracking-wider uppercase rounded shadow-sm">
                {parsed.mainTitle}
              </span>
              <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wide">
                Nº 08 · 25 Questões Historiográficas
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 tracking-tight uppercase">
              {parsed.subtitle}
            </h1>
            {parsed.chapterTitle && (
              <p className="text-sm sm:text-base font-serif font-semibold text-amber-300">
                {parsed.chapterTitle}
              </p>
            )}
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0 shadow-md"
          >
            {copied ? (
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

        {/* METADATA BLOCK */}
        <div className="bg-stone-950/70 border border-stone-800 rounded-xl p-4 space-y-1.5 font-serif text-xs sm:text-sm text-stone-300">
          {parsed.metaLines.map((line, mIdx) => (
            <p key={mIdx} dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
          ))}
        </div>

        {/* QUICK-JUMP MENU */}
        <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 sm:p-5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Índice de Investigação Avançada (25 Questões &amp; Síntese):</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif">
            {parsed.allQuestions.map((q) => (
              <a
                key={q.number}
                href={`#adv-sec-${q.number}`}
                className="p-2 rounded bg-stone-950/60 hover:bg-stone-800/80 border border-stone-800/70 text-stone-300 hover:text-amber-300 transition-colors flex items-start gap-2"
              >
                <span className="font-mono font-bold text-amber-500 shrink-0">{q.number}.</span>
                <span className="leading-snug line-clamp-2">{q.heading.replace(/^\d+\.\s*/, '')}</span>
              </a>
            ))}
            <a
              href="#adv-sec-synthesis"
              className="p-2 rounded bg-amber-950/30 hover:bg-amber-900/40 border border-amber-700/50 text-amber-300 transition-colors flex items-center gap-2 font-bold"
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>{parsed.synthesisTitle}</span>
            </a>
            <a
              href="#adv-sec-bibliography"
              className="p-2 rounded bg-amber-950/30 hover:bg-amber-900/40 border border-amber-700/50 text-amber-300 transition-colors flex items-center gap-2 font-bold"
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span>{parsed.bibliographyTitle}</span>
            </a>
            <a
              href="#adv-sec-methodology"
              className="p-2 rounded bg-amber-950/30 hover:bg-amber-900/40 border border-amber-700/50 text-amber-300 transition-colors flex items-center gap-2 font-bold sm:col-span-2"
            >
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>{parsed.methodologyTitle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* PARTES I - VI */}
      {parsed.parts.map((parte) => (
        <section key={parte.id} id={parte.id} className="space-y-6">
          <div className="bg-[#161619] border border-amber-600/40 px-6 py-4 rounded-xl flex items-center gap-3 shadow-md">
            <FileText className="w-5 h-5 text-amber-400 shrink-0" />
            <h2 className="text-base sm:text-xl font-serif font-bold text-amber-300 uppercase tracking-wide">
              {parte.title}
            </h2>
          </div>

          <div className="space-y-6">
            {parte.questions.map((q) => (
              <div
                key={q.number}
                id={`adv-sec-${q.number}`}
                className="scroll-mt-24 bg-[#121214] p-6 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md"
              >
                <div className="flex items-start gap-3 border-b border-stone-800 pb-3">
                  <span className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 font-mono text-sm flex items-center justify-center font-black shrink-0 shadow">
                    {q.number}
                  </span>
                  <h3 className={`font-serif font-bold text-stone-100 leading-snug ${getFontSizeClass('heading')}`}>
                    {q.heading}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {q.blocks.map((block, bIdx) => renderQuestionBlock(block, bIdx))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* SÍNTESE FINAL DA INVESTIGAÇÃO */}
      <section
        id="adv-sec-synthesis"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-amber-600/50 space-y-4 shadow-xl"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-300 uppercase tracking-wide">
            {parsed.synthesisTitle}
          </h2>
        </div>
        <div className="space-y-3.5">
          {parsed.synthesisBlocks.map((b, idx) => renderQuestionBlock(b, idx))}
        </div>
      </section>

      {/* BIBLIOGRAFIA GERAL DE REFERÊNCIA */}
      <section
        id="adv-sec-bibliography"
        className="scroll-mt-24 bg-[#121214] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-5 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <BookOpen className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-300 uppercase tracking-wide">
            {parsed.bibliographyTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {parsed.bibliographySubsections.map((sub, sIdx) => (
            <div key={sIdx} className="bg-stone-900/70 p-4 sm:p-5 rounded-xl border border-stone-800 space-y-2.5">
              <h3 className="font-serif font-bold text-amber-300 text-sm sm:text-base border-b border-stone-800 pb-2">
                {sub.heading}
              </h3>
              <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-stone-300">
                {sub.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">•</span>
                    <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* OBSERVAÇÃO METODOLÓGICA */}
      <section
        id="adv-sec-methodology"
        className="scroll-mt-24 bg-[#121214] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-300 uppercase tracking-wide">
            {parsed.methodologyTitle}
          </h2>
        </div>
        <div className="space-y-4">
          {parsed.methodologyBlocks.map((b, idx) => renderQuestionBlock(b, idx))}
        </div>
      </section>
    </article>
  );
};
