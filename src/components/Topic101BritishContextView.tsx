import React, { useMemo, useState } from 'react';
import {
  Landmark,
  Copy,
  Check,
  BookmarkCheck,
  Table2,
  BookOpenCheck,
} from 'lucide-react';
import { RAW_CONTEXTO_HISTORICO_BRITANICO_101 } from '../data/collections/chapter_01_british_context_content';

interface Topic101BritishContextViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

type ContentBlock =
  | { kind: 'paragraph'; lines: string[] }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] };

type SectionChild =
  | { kind: 'blocks'; blocks: ContentBlock[] }
  | { kind: 'subsection'; heading: string; blocks: ContentBlock[] };

interface MainSection {
  id: string;
  key: string;
  heading: string;
  children: SectionChild[];
}

interface ParsedBritishContext {
  title: string;
  subtitle: string;
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
        curTrim.startsWith('- ') ||
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

function parseBritishContext(raw: string): ParsedBritishContext {
  const normalized = raw.replace(/\r\n/g, '\n').trim();
  if (!normalized) {
    return { title: '', subtitle: '', sections: [] };
  }

  const lines = normalized.split('\n');
  const introIdx = lines.findIndex((l) => l.trim().startsWith('### INTRODUÇÃO'));
  const headerLines = introIdx >= 0 ? lines.slice(0, introIdx) : lines.slice(0, 3);
  const bodyLines = introIdx >= 0 ? lines.slice(introIdx) : lines.slice(3);

  let title = '';
  let subtitle = '';
  for (const rawLine of headerLines) {
    const trimmed = rawLine.trim();
    if (trimmed.startsWith('# ')) {
      title = trimmed.slice(2).trim();
    } else if (trimmed.startsWith('## ')) {
      subtitle = trimmed.slice(3).trim();
    }
  }

  const sections: MainSection[] = [];
  let currentTitle = '';
  let currentLines: string[] = [];

  const flushSection = () => {
    if (!currentTitle) return;

    let key = 'sec';
    let id = `brit-ctx-sec-${sections.length + 1}`;
    const numMatch = currentTitle.match(/^(\d+)\./);
    if (numMatch) {
      key = numMatch[1];
      id = `brit-ctx-sec-${key}`;
    } else if (currentTitle.startsWith('INTRODUÇÃO')) {
      key = 'INT';
      id = 'brit-ctx-intro';
    } else if (currentTitle.startsWith('CONCLUSÃO')) {
      key = 'CON';
      id = 'brit-ctx-conclusion';
    } else if (currentTitle.startsWith('CRONOLOGIA')) {
      key = 'CRO';
      id = 'brit-ctx-chronology';
    } else if (currentTitle.startsWith('REFERÊNCIAS')) {
      key = 'REF';
      id = 'brit-ctx-refs';
    }

    const children: SectionChild[] = [];
    let buffer: string[] = [];
    let activeKind: 'blocks' | 'subsection' = 'blocks';
    let activeHeading = '';

    const flushChild = () => {
      const blocks = parseContentLines(buffer);
      if (activeKind === 'subsection') {
        children.push({ kind: 'subsection', heading: activeHeading, blocks });
      } else if (blocks.length > 0) {
        children.push({ kind: 'blocks', blocks });
      }
      buffer = [];
    };

    for (const ln of currentLines) {
      const trimmed = ln.trim();
      if (trimmed === '---') continue;
      if (trimmed.startsWith('### ')) {
        flushChild();
        activeKind = 'subsection';
        activeHeading = trimmed.slice(4).trim();
      } else {
        buffer.push(ln);
      }
    }
    flushChild();

    sections.push({
      id,
      key,
      heading: currentTitle,
      children,
    });
  };

  for (const line of bodyLines) {
    const trimmed = line.trim();
    const isTopHeading =
      trimmed.startsWith('### INTRODUÇÃO') ||
      trimmed.startsWith('## ') ||
      trimmed.startsWith('# ');

    if (isTopHeading) {
      flushSection();
      currentTitle = trimmed.replace(/^#{1,3}\s+/, '').trim();
      currentLines = [];
    } else if (currentTitle) {
      currentLines.push(line);
    }
  }
  flushSection();

  return {
    title,
    subtitle,
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

export const Topic101BritishContextView: React.FC<Topic101BritishContextViewProps> = ({
  getFontSizeClass,
}) => {
  const [copied, setCopied] = useState(false);
  const parsed = useMemo(() => parseBritishContext(RAW_CONTEXTO_HISTORICO_BRITANICO_101), []);

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_CONTEXTO_HISTORICO_BRITANICO_101);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const renderBlocks = (blocks: ContentBlock[]) =>
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
                          cIdx === 0 ? 'font-mono text-amber-300 font-semibold whitespace-nowrap' : cIdx === 1 ? 'font-semibold text-stone-100' : ''
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
      const isHighlightNote =
        blk.lines.length === 1 && joined.startsWith('**Importância histórica:**');

      if (isHighlightNote) {
        return (
          <div
            key={bIdx}
            className="bg-amber-950/20 border border-amber-700/40 border-l-4 border-l-amber-500 rounded-r-lg px-4 py-3 text-stone-200 leading-relaxed"
          >
            {renderInlineMarkdown(joined)}
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
                Coleção II · Filosofia Política e Raízes da Modernidade
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                Nº 01 · Século XVII – XVIII (1689–1789)
              </span>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <Landmark className="w-6 h-6 text-amber-400 shrink-0" />
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
            title="Copiar texto integral de Contexto Histórico Britânico"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Texto Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Aba na Íntegra</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* SEÇÕES */}
      {parsed.sections.map((section) => {
        const isIntro = section.key === 'INT';
        const isConclusion = section.key === 'CON';
        const isChronology = section.key === 'CRO';
        const isRefs = section.key === 'REF';

        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border ${
              isConclusion || isChronology ? 'border-amber-600/40' : 'border-stone-800'
            } space-y-5 shadow-md`}
          >
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              {isIntro && <BookOpenCheck className="w-5 h-5 text-amber-400 shrink-0" />}
              {isChronology && <Table2 className="w-5 h-5 text-amber-400 shrink-0" />}
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
    </div>
  );
};
