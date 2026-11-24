import React, { useMemo, useState } from 'react';
import {
  Cog,
  Copy,
  Check,
  BookmarkCheck,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  BookOpenCheck,
  Table2,
  BookA,
  GitBranch,
  MessageSquareMore,
} from 'lucide-react';
import { RAW_ADAM_SMITH_ABA4 } from '../data/collections/chapter_12_adam_smith_content';
import { AdamSmithTabId } from '../data/collections/chapter_12_adam_smith_tabs';

interface Topic113Aba4ViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
  onSelectTab: (tab: AdamSmithTabId) => void;
}

type ContentBlock =
  | { kind: 'paragraph'; lines: string[] }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'tree'; lines: string[] }
  | { kind: 'arrow'; symbol: string };

type SectionChild =
  | { kind: 'blocks'; blocks: ContentBlock[] }
  | { kind: 'subsection'; heading: string; blocks: ContentBlock[] }
  | { kind: 'didactic'; heading: string; blocks: ContentBlock[] };

interface MainSection {
  id: string;
  num: string;
  heading: string;
  children: SectionChild[];
}

interface ParsedAba4 {
  chapterHeading: string;
  title: string;
  subtitle: string;
  metadataLines: string[];
  sections: MainSection[];
}

function isTableSeparator(line: string): boolean {
  return /^\|[\s|:-]+\|$/.test(line.trim());
}

function parseTableRow(line: string): string[] {
  const trimmed = line.trim();
  const inner = trimmed.startsWith('|') ? trimmed.slice(1) : trimmed;
  const clean = inner.endsWith('|') ? inner.slice(0, -1) : inner;
  return clean.split('|').map((cell) => cell.trim());
}

function isTreeLine(line: string): boolean {
  return /^(?:[├└│]| {4}[├└│])/.test(line);
}

function parseContentLines(lines: string[]): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    if (
      trimmed.startsWith('|') &&
      i + 1 < lines.length &&
      isTableSeparator(lines[i + 1])
    ) {
      const headers = parseTableRow(lines[i]);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(parseTableRow(lines[i]));
        i++;
      }
      blocks.push({ kind: 'table', headers, rows });
      continue;
    }

    if (isTreeLine(rawLine)) {
      const treeLines: string[] = [];
      while (i < lines.length && isTreeLine(lines[i])) {
        treeLines.push(lines[i].replace(/\s+$/, ''));
        i++;
      }
      blocks.push({ kind: 'tree', lines: treeLines });
      continue;
    }

    if (trimmed === '↓') {
      blocks.push({ kind: 'arrow', symbol: '↓' });
      i++;
      continue;
    }

    if (trimmed.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ kind: 'bullets', items });
      continue;
    }

    const paraLines: string[] = [];
    while (i < lines.length) {
      const cur = lines[i];
      const curTrim = cur.trim();
      if (
        !curTrim ||
        curTrim === '↓' ||
        curTrim.startsWith('- ') ||
        isTreeLine(cur) ||
        (curTrim.startsWith('|') &&
          i + 1 < lines.length &&
          isTableSeparator(lines[i + 1]))
      ) {
        break;
      }
      paraLines.push(cur.replace(/\s+$/, ''));
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ kind: 'paragraph', lines: paraLines });
    }
  }

  return blocks;
}

function parseAba4(raw: string): ParsedAba4 {
  const normalized = raw.replace(/\r\n/g, '\n').trim();
  if (!normalized) {
    return {
      chapterHeading: '',
      title: '',
      subtitle: '',
      metadataLines: [],
      sections: [],
    };
  }

  const lines = normalized.split('\n');
  const firstSectionIdx = lines.findIndex((l) => l.trim().startsWith('### '));
  const headerLines = firstSectionIdx >= 0 ? lines.slice(0, firstSectionIdx) : lines.slice(0, 5);
  const bodyLines = firstSectionIdx >= 0 ? lines.slice(firstSectionIdx) : lines.slice(5);

  const h1HeaderLines: string[] = [];
  let subtitle = '';
  const metadataLines: string[] = [];

  for (const rawLine of headerLines) {
    const trimmed = rawLine.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith('# ')) {
      h1HeaderLines.push(trimmed.slice(2).trim());
    } else if (trimmed.startsWith('## ')) {
      subtitle = trimmed.slice(3).trim();
    } else {
      metadataLines.push(trimmed);
    }
  }

  const chapterHeading = h1HeaderLines.length > 1 ? h1HeaderLines[0] : '';
  const title = h1HeaderLines.length > 1 ? h1HeaderLines[1] : h1HeaderLines[0] || '';

  const sections: MainSection[] = [];
  let currentTitle = '';
  let currentLines: string[] = [];

  const flushSection = () => {
    if (!currentTitle) return;
    const numMatch = currentTitle.match(/^(\d+)\./);
    const num = numMatch ? numMatch[1] : String(sections.length + 1);
    const id = `smith-aba4-sec-${num}`;

    const children: SectionChild[] = [];
    let buffer: string[] = [];
    let activeKind: 'blocks' | 'subsection' | 'didactic' = 'blocks';
    let activeHeading = '';

    const flushChild = () => {
      const blocks = parseContentLines(buffer);
      if (activeKind === 'subsection') {
        children.push({ kind: 'subsection', heading: activeHeading, blocks });
      } else if (activeKind === 'didactic') {
        children.push({ kind: 'didactic', heading: activeHeading, blocks });
      } else if (blocks.length > 0) {
        children.push({ kind: 'blocks', blocks });
      }
      buffer = [];
    };

    for (const ln of currentLines) {
      const trimmed = ln.trim();
      if (trimmed === '---') continue;
      if (trimmed.startsWith('#### ')) {
        flushChild();
        const headingText = trimmed.slice(5).trim();
        const isDidacticBox =
          /^Quadro\b/i.test(headingText) || /^Esquema\b/i.test(headingText);
        activeKind = isDidacticBox ? 'didactic' : 'subsection';
        activeHeading = headingText;
      } else {
        buffer.push(ln);
      }
    }
    flushChild();

    sections.push({
      id,
      num,
      heading: currentTitle,
      children,
    });
  };

  for (const line of bodyLines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('### ')) {
      flushSection();
      currentTitle = trimmed.slice(4).trim();
      currentLines = [];
    } else if (currentTitle) {
      currentLines.push(line);
    }
  }
  flushSection();

  return {
    chapterHeading,
    title,
    subtitle,
    metadataLines,
    sections,
  };
}

function renderTextWithLinks(text: string, keyPrefix: string): React.ReactNode[] {
  const urlParts = text.split(/(https?:\/\/[^\s)]+)/g);
  return urlParts.map((part, idx) => {
    if (/^https?:\/\/[^\s)]+$/.test(part)) {
      return (
        <a
          key={`${keyPrefix}-u-${idx}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-300 underline decoration-amber-500/50 hover:text-amber-200 break-all"
        >
          {part}
        </a>
      );
    }
    return <React.Fragment key={`${keyPrefix}-t-${idx}`}>{part}</React.Fragment>;
  });
}

function renderInlineMarkdown(text: string): React.ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return tokens.map((token, idx) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={idx} className="text-stone-100 font-semibold">
          {renderTextWithLinks(token.slice(2, -2), `b-${idx}`)}
        </strong>
      );
    }
    if (token.startsWith('*') && token.endsWith('*')) {
      return (
        <em key={idx} className="italic text-amber-200/90">
          {renderTextWithLinks(token.slice(1, -1), `i-${idx}`)}
        </em>
      );
    }
    return <React.Fragment key={idx}>{renderTextWithLinks(token, `p-${idx}`)}</React.Fragment>;
  });
}

export const Topic113Aba4View: React.FC<Topic113Aba4ViewProps> = ({
  getFontSizeClass,
  onSelectTab,
}) => {
  const [copied, setCopied] = useState(false);
  const parsed = useMemo(() => parseAba4(RAW_ADAM_SMITH_ABA4), []);

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_ADAM_SMITH_ABA4);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const renderBlocks = (blocks: ContentBlock[], insideDidactic = false, isConceptMapSection = false) =>
    blocks.map((blk, bIdx) => {
      if (blk.kind === 'table') {
        return (
          <div
            key={bIdx}
            className="overflow-x-auto rounded-xl border border-stone-800 bg-[#121214] my-2"
          >
            <table className={`w-full text-left border-collapse font-serif ${getFontSizeClass('body')}`}>
              <thead>
                <tr className="bg-stone-900/90 border-b border-stone-800">
                  {blk.headers.map((header, hIdx) => (
                    <th
                      key={hIdx}
                      className="px-4 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-amber-300 font-bold border-r last:border-r-0 border-stone-800"
                    >
                      {renderInlineMarkdown(header)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/80">
                {blk.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-stone-900/40 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`px-4 py-3 text-stone-300 align-top border-r last:border-r-0 border-stone-800/70 ${
                          cIdx === 0 ? 'font-semibold text-stone-100' : ''
                        }`}
                      >
                        {renderInlineMarkdown(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      if (blk.kind === 'tree') {
        return (
          <pre
            key={bIdx}
            className="font-mono text-xs sm:text-sm text-amber-100/90 bg-[#0d0d10] border border-stone-800 rounded-lg p-4 sm:p-5 overflow-x-auto leading-relaxed whitespace-pre"
          >
            {blk.lines.join('\n')}
          </pre>
        );
      }

      if (blk.kind === 'arrow') {
        return (
          <div
            key={bIdx}
            className="flex justify-center py-0.5 text-amber-400 font-mono font-bold text-lg select-none"
          >
            {blk.symbol}
          </div>
        );
      }

      if (blk.kind === 'bullets') {
        return (
          <ul
            key={bIdx}
            className={`space-y-2.5 bg-[#121214] border border-stone-800 p-4 sm:p-5 rounded-lg font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
          >
            {blk.items.map((item, iIdx) => (
              <li key={iIdx} className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                <span className="min-w-0 break-words">{renderInlineMarkdown(item)}</span>
              </li>
            ))}
          </ul>
        );
      }

      const joined = blk.lines.join('\n');
      const isQuizAnswer =
        blk.lines.length === 1 &&
        (joined.startsWith('**Resposta:') ||
          joined.startsWith('**Comentário:') ||
          joined.startsWith('Comentário:'));
      const isClosingLine =
        blk.lines.length === 1 &&
        joined.startsWith('**FIM DA ABA');

      if (isClosingLine) {
        return (
          <div
            key={bIdx}
            className="pt-4 border-t border-amber-500/30 text-center font-mono text-xs sm:text-sm tracking-wider text-amber-300"
          >
            {renderInlineMarkdown(joined)}
          </div>
        );
      }

      if (isQuizAnswer) {
        return (
          <div
            key={bIdx}
            className="bg-amber-950/20 border border-amber-700/40 rounded-lg px-4 py-2.5 text-stone-200 leading-relaxed"
          >
            {renderInlineMarkdown(joined)}
          </div>
        );
      }

      const isAdjacentToArrow =
        blocks[bIdx - 1]?.kind === 'arrow' || blocks[bIdx + 1]?.kind === 'arrow';

      if (isAdjacentToArrow && (insideDidactic || isConceptMapSection || true)) {
        return (
          <div
            key={bIdx}
            className="mx-auto max-w-xl text-center bg-[#121214] border border-amber-600/40 rounded-lg px-4 py-2.5 text-stone-200 font-serif shadow-sm"
          >
            {blk.lines.map((ln, lIdx) => (
              <React.Fragment key={lIdx}>
                {lIdx > 0 && <br />}
                {renderInlineMarkdown(ln)}
              </React.Fragment>
            ))}
          </div>
        );
      }

      return (
        <p key={bIdx} className="leading-relaxed break-words">
          {blk.lines.map((ln, lIdx) => (
            <React.Fragment key={lIdx}>
              {lIdx > 0 && <br />}
              {renderInlineMarkdown(ln)}
            </React.Fragment>
          ))}
        </p>
      );
    });

  return (
    <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-5 sm:p-7 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
          <div className="space-y-2 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                Coleção II · Economia Política Clássica e Iluminismo Escocês
              </span>
              {parsed.chapterHeading && (
                <span className="text-[10px] font-mono text-stone-400">
                  {parsed.chapterHeading}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 pt-1">
              <Cog className="w-6 h-6 text-amber-400 shrink-0" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 leading-snug uppercase tracking-tight">
                {parsed.title}
              </h2>
            </div>
            {parsed.subtitle && (
              <p className="text-sm sm:text-base font-serif italic text-amber-400">
                {parsed.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2 min-h-[38px] bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar texto integral da Aba 4"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Texto Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Aba 4 na Íntegra</span>
              </>
            )}
          </button>
        </div>

        {parsed.metadataLines.length > 0 && (
          <div className="bg-[#121214] border border-stone-800 rounded-xl p-4 space-y-1.5 font-serif text-sm text-stone-300">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold pb-1 border-b border-stone-800/80 mb-2">
              <Cog className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Ficha da Aba 4</span>
            </div>
            {parsed.metadataLines.map((line, mIdx) => (
              <p key={mIdx} className="leading-relaxed">
                {renderInlineMarkdown(line)}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* SEÇÕES 1 A 20 */}
      {parsed.sections.map((section, idx) => {
        const isLast = idx === parsed.sections.length - 1;
        const isGeneralTable = section.num === '13';
        const isConceptMap = section.num === '14';
        const isGlossary = section.num === '15';
        const isQuiz = section.num === '16';
        const isReflection = section.num === '17';
        const isRefs = section.num === '18' || section.num === '19';

        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border ${
              isLast ? 'border-amber-600/40' : 'border-stone-800'
            } space-y-5 shadow-md`}
          >
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              {isGeneralTable && <Table2 className="w-5 h-5 text-amber-400 shrink-0" />}
              {isConceptMap && <GitBranch className="w-5 h-5 text-amber-400 shrink-0" />}
              {isGlossary && <BookA className="w-5 h-5 text-amber-400 shrink-0" />}
              {isQuiz && <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />}
              {isReflection && <MessageSquareMore className="w-5 h-5 text-amber-400 shrink-0" />}
              {isRefs && <BookmarkCheck className="w-5 h-5 text-amber-400 shrink-0" />}
              <h3
                className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}
              >
                {section.heading}
              </h3>
            </div>

            <div className="space-y-5">
              {section.children.map((child, cIdx) => {
                if (child.kind === 'subsection') {
                  return (
                    <article
                      key={cIdx}
                      className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3"
                    >
                      <h4
                        className={`font-serif font-bold text-stone-100 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}
                      >
                        {child.heading}
                      </h4>
                      <div
                        className={`space-y-3.5 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}
                      >
                        {renderBlocks(child.blocks)}
                      </div>
                    </article>
                  );
                }

                if (child.kind === 'didactic') {
                  const isQuadro = /^Quadro\b/i.test(child.heading);
                  return (
                    <div
                      key={cIdx}
                      className="bg-[#121214] p-5 rounded-xl border border-amber-600/40 space-y-3"
                    >
                      <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                        {isQuadro ? (
                          <Table2 className="w-4 h-4 text-amber-400 shrink-0" />
                        ) : (
                          <BookOpenCheck className="w-4 h-4 text-amber-400 shrink-0" />
                        )}
                        <h4 className="font-mono font-bold text-amber-300 text-xs sm:text-sm uppercase tracking-wider">
                          {child.heading}
                        </h4>
                      </div>
                      <div
                        className={`space-y-3 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
                      >
                        {renderBlocks(child.blocks, true)}
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={cIdx}
                    className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}
                  >
                    {renderBlocks(child.blocks, false, isConceptMap)}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* NAVEGAÇÃO ENTRE ABAS */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          onClick={() => onSelectTab('aba3')}
          className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-mono rounded-lg border border-stone-700 flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Aba Anterior · 3. A Riqueza das Nações</span>
        </button>

        <button
          onClick={() => onSelectTab('aba5')}
          className="px-4 py-2.5 bg-amber-950/70 hover:bg-amber-900/70 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors ml-auto"
        >
          <span>Próxima Aba · 5. Valor, salários, lucros e propriedade</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        </button>
      </div>
    </div>
  );
};
