import React, { useMemo, useState } from 'react';
import {
  BookOpenCheck,
  Copy,
  Check,
  BookmarkCheck,
  ArrowRight,
  HelpCircle,
  GitBranch,
  Table2,
  Clock,
} from 'lucide-react';
import { RAW_ADAM_SMITH_ABA1 } from '../data/collections/chapter_12_adam_smith_content';
import { AdamSmithTabId } from '../data/collections/chapter_12_adam_smith_tabs';

interface Topic113Aba1ViewProps {
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

interface ParsedAba1 {
  title: string;
  chapterLabel: string;
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

function parseAba1(raw: string): ParsedAba1 {
  const normalized = raw.replace(/\r\n/g, '\n').trim();
  if (!normalized) {
    return {
      title: '',
      chapterLabel: '',
      subtitle: '',
      metadataLines: [],
      sections: [],
    };
  }

  const lines = normalized.split('\n');
  const firstDividerIdx = lines.findIndex((l) => l.trim() === '---');
  const headerLines = firstDividerIdx >= 0 ? lines.slice(0, firstDividerIdx) : lines.slice(0, 10);
  const bodyLines = firstDividerIdx >= 0 ? lines.slice(firstDividerIdx + 1) : lines.slice(10);

  let title = '';
  let chapterLabel = '';
  let subtitle = '';
  const metadataLines: string[] = [];

  for (const rawLine of headerLines) {
    const trimmed = rawLine.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith('# ')) {
      title = trimmed.slice(2).trim();
    } else if (trimmed.startsWith('## ')) {
      chapterLabel = trimmed.slice(3).trim();
    } else if (trimmed.startsWith('### ')) {
      subtitle = trimmed.slice(4).trim();
    } else {
      metadataLines.push(trimmed);
    }
  }

  const sections: MainSection[] = [];
  let currentTitle = '';
  let currentLines: string[] = [];

  const flushSection = () => {
    if (!currentTitle) return;
    const numMatch = currentTitle.match(/^(\d+)\./);
    const num = numMatch ? numMatch[1] : String(sections.length + 1);
    const id = `smith-aba1-sec-${num}`;

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
      if (trimmed.startsWith('## ')) {
        flushChild();
        activeKind = 'subsection';
        activeHeading = trimmed.slice(3).trim();
      } else if (trimmed.startsWith('### ')) {
        flushChild();
        activeKind = 'didactic';
        activeHeading = trimmed.slice(4).trim();
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
    if (trimmed.startsWith('# ')) {
      flushSection();
      currentTitle = trimmed.slice(2).trim();
      currentLines = [];
    } else if (currentTitle) {
      currentLines.push(line);
    }
  }
  flushSection();

  return {
    title,
    chapterLabel,
    subtitle,
    metadataLines,
    sections,
  };
}

function renderInlineMarkdown(text: string): React.ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return tokens.map((token, idx) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={idx} className="text-stone-100 font-semibold">
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith('*') && token.endsWith('*')) {
      return (
        <em key={idx} className="italic text-amber-200/90">
          {token.slice(1, -1)}
        </em>
      );
    }
    return <React.Fragment key={idx}>{token}</React.Fragment>;
  });
}

export const Topic113Aba1View: React.FC<Topic113Aba1ViewProps> = ({
  getFontSizeClass,
  onSelectTab,
}) => {
  const [copied, setCopied] = useState(false);

  const isEmpty = !RAW_ADAM_SMITH_ABA1.trim();
  const parsed = useMemo(() => parseAba1(RAW_ADAM_SMITH_ABA1), []);

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_ADAM_SMITH_ABA1);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const renderBlocks = (blocks: ContentBlock[], insideDidactic = false) =>
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
                <span>{renderInlineMarkdown(item)}</span>
              </li>
            ))}
          </ul>
        );
      }

      const joined = blk.lines.join('\n');
      const isQuizAnswer =
        blk.lines.length === 1 &&
        (joined.startsWith('**Resposta:') || joined.startsWith('**Comentário:'));
      const isClosingLine =
        blk.lines.length === 1 &&
        joined.startsWith('**FIM DO CAPÍTULO');

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

      if (insideDidactic && !blk.lines.some((l) => l.includes('├──') || l.includes('└──'))) {
        const isFlowNode = blocks.some((b) => b.kind === 'arrow');
        if (isFlowNode) {
          return (
            <div
              key={bIdx}
              className="mx-auto max-w-xl text-center bg-[#161619] border border-amber-600/40 rounded-lg px-4 py-2.5 text-stone-200 font-serif shadow-sm"
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
      }

      return (
        <p key={bIdx} className="leading-relaxed">
          {blk.lines.map((ln, lIdx) => (
            <React.Fragment key={lIdx}>
              {lIdx > 0 && <br />}
              {renderInlineMarkdown(ln)}
            </React.Fragment>
          ))}
        </p>
      );
    });

  if (isEmpty) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
        <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 text-center">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
              Coleção II · Nº 11 · ABA 1 — Vida e Contexto Histórico
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-2">
              Adam Smith e o pensamento econômico
            </h2>
          </div>
          <div className="bg-[#121214] border border-stone-800 p-8 rounded-xl space-y-3">
            <p className="text-stone-400 font-serif italic text-sm sm:text-base">
              Conteúdo da Aba 1 (Vida e Contexto Histórico) preparado para inserção integral.
            </p>
          </div>
          <div className="flex justify-end pt-2">
            <button
              onClick={() => onSelectTab('aba2')}
              className="px-4 py-2.5 bg-amber-950/70 hover:bg-amber-900/70 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors"
            >
              <span>Próxima Aba · 2. Teoria dos Sentimentos Morais</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-5 sm:p-7 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
          <div className="space-y-2 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                Coleção II · Nº 11 · Economia Política Clássica e Iluminismo Escocês
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                ABA 1 — Vida e Contexto Histórico
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 leading-snug uppercase tracking-tight pt-1">
              {parsed.title}
            </h2>
            {parsed.chapterLabel && (
              <div className="text-sm sm:text-base font-mono font-bold text-amber-400 tracking-wide">
                {parsed.chapterLabel}
              </div>
            )}
            {parsed.subtitle && (
              <p className="text-sm sm:text-base font-serif italic text-stone-300">
                {parsed.subtitle}
              </p>
            )}
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2 min-h-[38px] bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar texto integral da Aba 1"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Texto Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Aba 1 na Íntegra</span>
              </>
            )}
          </button>
        </div>

        {parsed.metadataLines.length > 0 && (
          <div className="bg-[#121214] border border-stone-800 rounded-xl p-4 space-y-1.5 font-serif text-sm text-stone-300">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold pb-1 border-b border-stone-800/80 mb-2">
              <BookOpenCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Ficha do Capítulo</span>
            </div>
            {parsed.metadataLines.map((line, mIdx) => (
              <p key={mIdx} className="leading-relaxed">
                {renderInlineMarkdown(line)}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* SEÇÕES 1 A 19 */}
      {parsed.sections.map((section, idx) => {
        const isLast = idx === parsed.sections.length - 1;
        const isRefs = section.num === '18';
        const isQuiz = section.num === '17';
        const isChrono = section.num === '15';

        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border ${
              isLast ? 'border-amber-600/40' : 'border-stone-800'
            } space-y-5 shadow-md`}
          >
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              {isRefs && <BookmarkCheck className="w-5 h-5 text-amber-400 shrink-0" />}
              {isQuiz && <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />}
              {isChrono && <Clock className="w-5 h-5 text-amber-400 shrink-0" />}
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
                  const isMap = child.heading.includes('MAPA CONCEITUAL');
                  const isQuadro = child.heading.includes('QUADRO DIDÁTICO');
                  return (
                    <div
                      key={cIdx}
                      className="bg-[#121214] p-5 rounded-xl border border-amber-600/40 space-y-3"
                    >
                      <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
                        {isMap ? (
                          <GitBranch className="w-4 h-4 text-amber-400 shrink-0" />
                        ) : isQuadro ? (
                          <Table2 className="w-4 h-4 text-amber-400 shrink-0" />
                        ) : (
                          <BookOpenCheck className="w-4 h-4 text-amber-400 shrink-0" />
                        )}
                        <h4
                          className={`font-mono font-bold text-amber-300 text-xs sm:text-sm uppercase tracking-wider`}
                        >
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
                    {renderBlocks(child.blocks)}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* PRÓXIMA ABA */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => onSelectTab('aba2')}
          className="px-4 py-2.5 bg-amber-950/70 hover:bg-amber-900/70 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors"
        >
          <span>Próxima Aba · 2. Teoria dos Sentimentos Morais</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        </button>
      </div>
    </div>
  );
};
