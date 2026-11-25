import React, { useMemo, useState } from 'react';
import {
  Copy,
  Check,
  FileText,
  Quote,
  Map as MapIcon,
  Globe,
  HelpCircle,
  BookmarkCheck,
  BookOpen,
  ShieldCheck,
  Calendar,
  Compass,
} from 'lucide-react';
import {
  RAW_CITATIONS_204,
  RAW_CITATIONS_204_APARATO,
} from '../data/citations/citations_guerras_mundiais_04';

interface Topic204CitationsViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

type MdBlock =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'numbered'; items: string[] }
  | { kind: 'quote'; text: string }
  | { kind: 'table'; headers: string[]; rows: string[][] };

interface CitationChunkSection {
  id: string;
  num: string;
  heading: string;
  subtitle?: string;
  blocks: MdBlock[];
}

interface ParsedCitations204 {
  mainTitle: string;
  subtitle: string;
  collectionLabel: string;
  blockLabel: string;
  monographLabel: string;
  sections: CitationChunkSection[];
}

interface ParsedAparato204 {
  mainTitle: string;
  subtitle: string;
  collectionLabel: string;
  blockLabel: string;
  monographLabel: string;
  parts: CitationChunkSection[];
}

function renderInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={key++} className="font-semibold text-amber-300">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <em key={key++} className="italic text-stone-200">
          {token.slice(1, -1)}
        </em>
      );
    }
    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function parsePipeRow(line: string): string[] {
  const trimmed = line.trim();
  const stripped = trimmed.replace(/^\|/, '').replace(/\|$/, '');
  return stripped.split('|').map((c) => c.trim());
}

function parseBlocks(rawLines: string[]): MdBlock[] {
  const blocks: MdBlock[] = [];
  let i = 0;

  while (i < rawLines.length) {
    const trimmed = rawLines[i].trim();
    if (!trimmed) {
      i++;
      continue;
    }

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines: string[] = [];
      while (
        i < rawLines.length &&
        rawLines[i].trim().startsWith('|') &&
        rawLines[i].trim().endsWith('|')
      ) {
        tableLines.push(rawLines[i].trim());
        i++;
      }
      if (tableLines.length >= 3 && /^\|[\s\-|:]+\|$/.test(tableLines[1])) {
        const headers = parsePipeRow(tableLines[0]);
        const rows = tableLines.slice(2).map(parsePipeRow);
        blocks.push({ kind: 'table', headers, rows });
      } else {
        tableLines.forEach((tl) => blocks.push({ kind: 'paragraph', text: tl }));
      }
      continue;
    }

    if (trimmed.startsWith('## ')) {
      blocks.push({ kind: 'h2', text: trimmed.slice(3).trim() });
      i++;
      continue;
    }

    if (trimmed.startsWith('### ')) {
      blocks.push({ kind: 'h3', text: trimmed.slice(4).trim() });
      i++;
      continue;
    }

    if (trimmed.startsWith('- ')) {
      const items: string[] = [];
      while (i < rawLines.length && rawLines[i].trim().startsWith('- ')) {
        items.push(rawLines[i].trim().slice(2));
        i++;
      }
      blocks.push({ kind: 'bullets', items });
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < rawLines.length && /^\d+\.\s+/.test(rawLines[i].trim())) {
        items.push(rawLines[i].trim());
        i++;
      }
      blocks.push({ kind: 'numbered', items });
      continue;
    }

    if (trimmed.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < rawLines.length && rawLines[i].trim().startsWith('> ')) {
        quoteLines.push(rawLines[i].trim().slice(2));
        i++;
      }
      blocks.push({ kind: 'quote', text: quoteLines.join(' ') });
      continue;
    }

    blocks.push({ kind: 'paragraph', text: trimmed });
    i++;
  }

  return blocks;
}

function parseCitations204(raw: string): ParsedCitations204 {
  const chunks = raw
    .replace(/\r\n/g, '\n')
    .trim()
    .split(/\n---\n/)
    .map((c) => c.trim())
    .filter(Boolean);

  const headerLines = (chunks[0] || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const mainTitle = (headerLines.find((l) => l.startsWith('# ')) || '# CITAÇÕES & DOCUMENTOS')
    .slice(2)
    .trim();
  const subtitle = (headerLines.find((l) => l.startsWith('## ')) || '').slice(3).trim();
  const metaHeaderLines = headerLines
    .filter((l) => !l.startsWith('#'))
    .map((l) => l.replace(/^\*\*|\*\*$/g, '').trim());

  const sections: CitationChunkSection[] = [];
  for (let idx = 1; idx < chunks.length; idx++) {
    const lines = chunks[idx].split('\n');
    const h1Idx = lines.findIndex((l) => l.trim().startsWith('# '));
    const h1Text = h1Idx >= 0 ? lines[h1Idx].trim().slice(2).trim() : '';
    const numMatch = h1Text.match(/^(\d+)\.\s+(.*)$/);
    const num = numMatch ? numMatch[1] : String(idx);

    let bodyStart = h1Idx >= 0 ? h1Idx + 1 : 0;
    let subtitleLine: string | undefined;

    // Check if the first non-empty line after # N. DOCUMENTO X is a document subtitle ## ...
    let probe = bodyStart;
    while (probe < lines.length && !lines[probe].trim()) probe++;
    if (
      probe < lines.length &&
      lines[probe].trim().startsWith('## ') &&
      /^DOCUMENTO\s+/i.test(numMatch ? numMatch[2] : h1Text)
    ) {
      subtitleLine = lines[probe].trim().slice(3).trim();
      bodyStart = probe + 1;
    }

    let id = `cit-sec-${num}`;
    if (num === '1') id = 'cit-apresentacao';
    else if (num === '2') id = 'cit-metodologia';
    else if (num === '3') id = 'cit-doc-1';
    else if (num === '14') id = 'cit-mapas';
    else if (num === '15') id = 'cit-complementares';
    else if (num === '16') id = 'cit-arquivos';
    else if (num === '17') id = 'cit-bibliografia';
    else if (num === '18') id = 'cit-cronologia';
    else if (num === '19') id = 'cit-questoes';
    else if (num === '20') id = 'cit-propostas';
    else if (num === '21') id = 'cit-conclusao';

    sections.push({
      id,
      num,
      heading: h1Text,
      subtitle: subtitleLine,
      blocks: parseBlocks(lines.slice(bodyStart)),
    });
  }

  return {
    mainTitle,
    subtitle,
    collectionLabel: metaHeaderLines[0] || '',
    blockLabel: metaHeaderLines[1] || '',
    monographLabel: metaHeaderLines[2] || '',
    sections,
  };
}

function parseAparato204(raw: string): ParsedAparato204 {
  const normalized = raw.replace(/\r\n/g, '\n').trim();
  const partSplitRegex = /\n---\n+(?=# PARTE\s+)/;
  const topSegments = normalized
    .split(partSplitRegex)
    .map((s) => s.trim())
    .filter(Boolean);

  const headerLines = (topSegments[0] || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const mainTitle = (headerLines.find((l) => l.startsWith('# ')) || '# APARATO CRÍTICO')
    .slice(2)
    .trim();
  const subtitle = (headerLines.find((l) => l.startsWith('## ')) || '').slice(3).trim();
  const metaHeaderLines = headerLines
    .filter((l) => !l.startsWith('#'))
    .map((l) => l.replace(/^\*\*|\*\*$/g, '').trim());

  const partIds = [
    'cit-aparato-p1',
    'cit-aparato-p2',
    'cit-aparato-p3',
    'cit-aparato-p4',
    'cit-aparato-p5',
  ];
  const partNums = ['P-I', 'P-II', 'P-III', 'P-IV', 'P-V'];

  const parts: CitationChunkSection[] = [];
  for (let idx = 1; idx < topSegments.length; idx++) {
    const lines = topSegments[idx]
      .split('\n')
      .filter((l) => l.trim() !== '---');
    const h1Idx = lines.findIndex((l) => l.trim().startsWith('# '));
    const h1Text = h1Idx >= 0 ? lines[h1Idx].trim().slice(2).trim() : '';
    const bodyStart = h1Idx >= 0 ? h1Idx + 1 : 0;

    parts.push({
      id: partIds[idx - 1] || `cit-aparato-${idx}`,
      num: partNums[idx - 1] || `P-${idx}`,
      heading: h1Text,
      blocks: parseBlocks(lines.slice(bodyStart)),
    });
  }

  return {
    mainTitle,
    subtitle,
    collectionLabel: metaHeaderLines[0] || '',
    blockLabel: metaHeaderLines[1] || '',
    monographLabel: metaHeaderLines[2] || '',
    parts,
  };
}

export const Topic204CitationsView: React.FC<Topic204CitationsViewProps> = ({
  getFontSizeClass,
}) => {
  const [copied, setCopied] = useState(false);

  const parsed = useMemo(() => parseCitations204(RAW_CITATIONS_204), []);
  const aparato = useMemo(() => parseAparato204(RAW_CITATIONS_204_APARATO), []);

  const handleCopyAll = () => {
    navigator.clipboard.writeText(`${RAW_CITATIONS_204}\n\n---\n\n${RAW_CITATIONS_204_APARATO}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const renderBlocks = (blocks: MdBlock[]) =>
    blocks.map((blk, idx) => {
      if (blk.kind === 'table') {
        return (
          <div key={idx} className="overflow-x-auto my-3 border border-stone-800 rounded-lg shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm font-serif border-collapse">
              <thead className="bg-stone-900 border-b border-stone-700 text-amber-300">
                <tr>
                  {blk.headers.map((h, hIdx) => (
                    <th
                      key={hIdx}
                      className="p-3 font-mono text-xs font-bold uppercase tracking-wider border-r border-stone-800 last:border-r-0"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/80 bg-stone-950/50">
                {blk.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-stone-900/40 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`p-3 leading-relaxed border-r border-stone-800/70 last:border-r-0 align-top ${
                          cIdx === 0 ? 'font-semibold text-stone-100 whitespace-nowrap' : 'text-stone-300'
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

      if (blk.kind === 'h2') {
        return (
          <h3
            key={idx}
            className="text-sm sm:text-base font-serif font-bold text-amber-300 pt-4 mt-2 border-t border-stone-800/80 first:border-t-0 first:pt-0 uppercase tracking-wide"
          >
            {renderInlineMarkdown(blk.text)}
          </h3>
        );
      }

      if (blk.kind === 'h3') {
        return (
          <h4
            key={idx}
            className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-amber-400 pt-3 first:pt-0"
          >
            {renderInlineMarkdown(blk.text)}
          </h4>
        );
      }

      if (blk.kind === 'quote') {
        return (
          <blockquote
            key={idx}
            className={`bg-stone-950/70 border-l-4 border-amber-500 p-4 rounded-r-lg font-serif italic text-stone-100 leading-relaxed ${getFontSizeClass('quote')}`}
          >
            {renderInlineMarkdown(blk.text)}
          </blockquote>
        );
      }

      if (blk.kind === 'bullets') {
        return (
          <ul
            key={idx}
            className={`space-y-1.5 pl-4 border-l border-amber-500/30 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
          >
            {blk.items.map((item, iIdx) => (
              <li key={iIdx} className="flex items-start gap-2">
                <span className="text-amber-400 font-mono text-xs mt-1 shrink-0">•</span>
                <span>{renderInlineMarkdown(item)}</span>
              </li>
            ))}
          </ul>
        );
      }

      if (blk.kind === 'numbered') {
        return (
          <ol
            key={idx}
            className={`space-y-2 pl-4 border-l border-stone-700 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
          >
            {blk.items.map((item, iIdx) => (
              <li key={iIdx}>{renderInlineMarkdown(item)}</li>
            ))}
          </ol>
        );
      }

      return (
        <p
          key={idx}
          className={`font-serif text-stone-300 text-justify leading-relaxed break-words ${getFontSizeClass('body')}`}
        >
          {renderInlineMarkdown(blk.text)}
        </p>
      );
    });

  const getSectionIcon = (num: string) => {
    const n = Number(num);
    if (n === 1) return <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />;
    if (n === 2) return <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />;
    if (n >= 3 && n <= 13) return <FileText className="w-5 h-5 text-amber-400 shrink-0" />;
    if (n === 14) return <MapIcon className="w-5 h-5 text-amber-400 shrink-0" />;
    if (n === 15) return <Quote className="w-5 h-5 text-amber-400 shrink-0" />;
    if (n === 16) return <Globe className="w-5 h-5 text-amber-400 shrink-0" />;
    if (n === 17) return <BookmarkCheck className="w-5 h-5 text-amber-400 shrink-0" />;
    if (n === 18) return <Calendar className="w-5 h-5 text-amber-400 shrink-0" />;
    if (n === 19) return <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />;
    if (n === 20) return <Compass className="w-5 h-5 text-amber-400 shrink-0" />;
    return <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />;
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER — CITAÇÕES & DOCUMENTOS */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-800 pb-4">
          <div className="space-y-2 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                {parsed.collectionLabel}
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                {parsed.blockLabel}
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                {parsed.monographLabel}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              {parsed.mainTitle}
            </h1>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              {parsed.subtitle}
            </p>
          </div>

          <button
            onClick={handleCopyAll}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
            title="Copiar texto integral da Aba 4 Citações & Documentos"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Texto Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Aba Citações na Íntegra</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* SEÇÕES 1 A 21 — CITAÇÕES & DOCUMENTOS */}
      <div className="space-y-6">
        {parsed.sections.map((sec) => {
          const isConclusion = sec.num === '21';
          return (
            <section
              key={sec.id}
              id={sec.id}
              className={`scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border space-y-4 shadow-md ${
                isConclusion ? 'border-amber-600/40' : 'border-stone-800'
              }`}
            >
              <div className="border-b border-stone-800 pb-3 space-y-1">
                <div className="flex items-center gap-2.5">
                  {getSectionIcon(sec.num)}
                  <h2
                    className={`font-serif font-bold uppercase tracking-wide ${
                      isConclusion ? 'text-amber-300' : 'text-stone-100'
                    } ${getFontSizeClass('heading')}`}
                  >
                    {sec.heading}
                  </h2>
                </div>
                {sec.subtitle && (
                  <p className="font-serif font-semibold text-amber-300 text-sm sm:text-base pl-7">
                    {sec.subtitle}
                  </p>
                )}
              </div>
              <div className="space-y-4">{renderBlocks(sec.blocks)}</div>
            </section>
          );
        })}
      </div>

      {/* DIVISÓRIA E APARATO CRÍTICO */}
      <div id="cit-aparato" className="scroll-mt-24 pt-6 border-t-2 border-stone-800 space-y-6">
        <div className="bg-[#161619] border border-amber-600/40 p-6 sm:p-8 rounded-2xl shadow-xl space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
              {aparato.collectionLabel}
            </span>
            <span className="text-[10px] font-mono text-stone-400">
              {aparato.blockLabel}
            </span>
          </div>
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
            {aparato.monographLabel}
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-tight">
            {aparato.mainTitle}
          </h2>
          <p className="text-amber-400 font-serif italic text-sm sm:text-base">
            {aparato.subtitle}
          </p>
        </div>

        {aparato.parts.map((part) => (
          <section
            key={part.id}
            id={part.id}
            className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md"
          >
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              <span className="px-2.5 py-1 rounded bg-amber-950/90 border border-amber-600/60 text-amber-300 font-mono font-bold text-xs shrink-0">
                {part.num}
              </span>
              <h2
                className={`font-serif font-bold text-stone-100 uppercase tracking-wide ${getFontSizeClass('heading')}`}
              >
                {part.heading}
              </h2>
            </div>
            <div className="space-y-4">{renderBlocks(part.blocks)}</div>
          </section>
        ))}
      </div>
    </div>
  );
};
