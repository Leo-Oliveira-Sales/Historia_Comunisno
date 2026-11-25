import React, { useMemo, useState } from 'react';
import {
  GraduationCap,
  Layers,
  Search,
  Sparkles,
  Copy,
  Check,
  BookOpen,
  CheckCircle2,
  BookmarkCheck,
} from 'lucide-react';
import { RAW_ESSAY_204 } from '../data/essays/essay_guerras_mundiais_04';

interface Topic204EssayViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

type ContentBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'arrow'; symbol: string }
  | { kind: 'subheading'; text: string };

interface EssaySection204 {
  id: string;
  number: string;
  title: string;
  fullHeading: string;
  blocks: ContentBlock[];
}

interface ParsedEssay204 {
  collectionLabel: string;
  blockLabel: string;
  monographLabel: string;
  monographTitle: string;
  abaLabel: string;
  part1Label: string;
  part1Title: string;
  part1Sections: EssaySection204[];
  part2Label: string;
  part2Title: string;
  part2Sections: EssaySection204[];
  part3Label: string;
  part3Title: string;
  part3Sections: EssaySection204[];
  part4Label: string;
  part4Title: string;
  part4Questions: EssaySection204[];
  conclusionHeading: string;
  conclusionBlocks: ContentBlock[];
  refsHeading: string;
  refsBlocks: ContentBlock[];
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

function parseContentLines(rawLines: string[]): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let i = 0;

  while (i < rawLines.length) {
    const trimmed = rawLines[i].trim();
    if (!trimmed) {
      i++;
      continue;
    }

    // Markdown pipe table
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

    // Arrow separator
    if (trimmed === '↓') {
      blocks.push({ kind: 'arrow', symbol: '↓' });
      i++;
      continue;
    }

    // ### Subheading
    if (trimmed.startsWith('### ')) {
      blocks.push({ kind: 'subheading', text: trimmed.slice(4).trim() });
      i++;
      continue;
    }

    // Bullet list
    if (trimmed.startsWith('- ')) {
      const items: string[] = [];
      while (i < rawLines.length && rawLines[i].trim().startsWith('- ')) {
        items.push(rawLines[i].trim().slice(2));
        i++;
      }
      blocks.push({ kind: 'bullets', items });
      continue;
    }

    blocks.push({ kind: 'paragraph', text: trimmed });
    i++;
  }

  return blocks;
}

function splitH2Sections(lines: string[], idPrefix: string): EssaySection204[] {
  const sections: EssaySection204[] = [];
  let currentHeading = '';
  let currentNum = '';
  let currentTitle = '';
  let buffer: string[] = [];
  let qCounter = 0;

  const flush = () => {
    if (!currentHeading) return;
    sections.push({
      id: `${idPrefix}-${currentNum || sections.length + 1}`,
      number: currentNum,
      title: currentTitle,
      fullHeading: currentHeading,
      blocks: parseContentLines(buffer),
    });
    buffer = [];
  };

  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith('## ')) {
      flush();
      const heading = t.slice(3).trim();
      currentHeading = heading;
      const numMatch = heading.match(/^(\d+)\.\s+(.*)$/);
      const qMatch = heading.match(/^QUESTÃO\s+(\d+)\s+—\s+(.*)$/);
      if (numMatch) {
        currentNum = numMatch[1];
        currentTitle = numMatch[2];
      } else if (qMatch) {
        currentNum = `Q${qMatch[1]}`;
        currentTitle = qMatch[2];
      } else {
        qCounter++;
        currentNum = String(qCounter);
        currentTitle = heading;
      }
    } else if (currentHeading) {
      buffer.push(line);
    }
  }
  flush();

  return sections;
}

function parseEssay204(raw: string): ParsedEssay204 {
  const chunks = raw
    .split(/\n---\n/)
    .map((c) => c.trim())
    .filter(Boolean);

  // Chunk 0: Header
  const hLines = chunks[0]
    .split('\n')
    .map((l) => l.trim().replace(/^#{1,3}\s+/, ''))
    .filter(Boolean);

  // Chunk 1: PARTE I
  const p1Lines = chunks[1].split('\n');
  const part1Label = p1Lines[0].trim().replace(/^#\s+/, '');
  const p1TitleIdx = p1Lines.findIndex((l, idx) => idx > 0 && l.trim().startsWith('# '));
  const part1Title = p1Lines[p1TitleIdx].trim().replace(/^#\s+/, '');
  const part1Sections = splitH2Sections(p1Lines.slice(p1TitleIdx + 1), 'essay-sec');

  // Chunk 2: PARTE II
  const p2Lines = chunks[2].split('\n');
  const part2Label = p2Lines[0].trim().replace(/^#\s+/, '');
  const p2TitleIdx = p2Lines.findIndex((l, idx) => idx > 0 && l.trim().startsWith('# '));
  const part2Title = p2Lines[p2TitleIdx].trim().replace(/^#\s+/, '');
  const part2Sections = splitH2Sections(p2Lines.slice(p2TitleIdx + 1), 'sintese-sec');

  // Chunk 3: PARTE III
  const p3Lines = chunks[3].split('\n');
  const part3Label = p3Lines[0].trim().replace(/^#\s+/, '');
  const p3TitleIdx = p3Lines.findIndex((l, idx) => idx > 0 && l.trim().startsWith('# '));
  const part3Title = p3Lines[p3TitleIdx].trim().replace(/^#\s+/, '');
  const part3Sections = splitH2Sections(p3Lines.slice(p3TitleIdx + 1), 'dossie-sec');

  // Chunk 4: PARTE IV
  const p4Lines = chunks[4].split('\n');
  const part4Label = p4Lines[0].trim().replace(/^#\s+/, '');
  const p4TitleIdx = p4Lines.findIndex((l, idx) => idx > 0 && l.trim().startsWith('# '));
  const part4Title = p4Lines[p4TitleIdx].trim().replace(/^#\s+/, '');
  const part4Questions = splitH2Sections(p4Lines.slice(p4TitleIdx + 1), 'adv-sec').map((q, idx) => ({
    ...q,
    id: `adv-sec-${idx + 1}`,
  }));

  // Chunk 5: CONCLUSÃO DA INVESTIGAÇÃO AVANÇADA
  const cLines = chunks[5].split('\n');
  const conclusionHeading = cLines[0].trim().replace(/^#\s+/, '');
  const conclusionBlocks = parseContentLines(cLines.slice(1));

  // Chunk 6: REFERÊNCIAS BIBLIOGRÁFICAS DA ABA
  const rLines = chunks[6].split('\n');
  const refsHeading = rLines[0].trim().replace(/^#\s+/, '');
  const refsBlocks = parseContentLines(rLines.slice(1));

  return {
    collectionLabel: hLines[0],
    blockLabel: hLines[1],
    monographLabel: hLines[2],
    monographTitle: hLines[3],
    abaLabel: hLines[4],
    part1Label,
    part1Title,
    part1Sections,
    part2Label,
    part2Title,
    part2Sections,
    part3Label,
    part3Title,
    part3Sections,
    part4Label,
    part4Title,
    part4Questions,
    conclusionHeading,
    conclusionBlocks,
    refsHeading,
    refsBlocks,
  };
}

export const Topic204EssayView: React.FC<Topic204EssayViewProps> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState(false);
  const parsed = useMemo(() => parseEssay204(RAW_ESSAY_204), []);

  const handleCopyAll = () => {
    navigator.clipboard.writeText(RAW_ESSAY_204);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const renderBlocks = (blocks: ContentBlock[]) =>
    blocks.map((blk, bIdx) => {
      if (blk.kind === 'arrow') {
        return (
          <div key={bIdx} className="flex justify-center py-0.5 select-none">
            <span className="text-amber-400 font-mono text-base font-bold">{blk.symbol}</span>
          </div>
        );
      }

      if (blk.kind === 'table') {
        return (
          <div key={bIdx} className="overflow-x-auto my-3 border border-stone-800 rounded-lg shadow-sm">
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
                          cIdx === 0 ? 'font-semibold text-stone-100' : 'text-stone-300'
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

      if (blk.kind === 'subheading') {
        return (
          <h3
            key={bIdx}
            className="text-xs sm:text-sm font-mono uppercase tracking-wider text-amber-300 font-bold pt-2 border-t border-stone-800/70 first:border-t-0 first:pt-0"
          >
            {blk.text}
          </h3>
        );
      }

      if (blk.kind === 'bullets') {
        return (
          <ul
            key={bIdx}
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

      const isAdjacentToArrow =
        blocks[bIdx - 1]?.kind === 'arrow' || blocks[bIdx + 1]?.kind === 'arrow';

      if (isAdjacentToArrow) {
        return (
          <div
            key={bIdx}
            className={`mx-auto max-w-xl text-center bg-[#121214] border border-amber-600/40 rounded-lg px-4 py-2.5 text-stone-200 font-serif shadow-sm ${getFontSizeClass('body')}`}
          >
            {renderInlineMarkdown(blk.text)}
          </div>
        );
      }

      if (/^https?:\/\//.test(blk.text.trim())) {
        return (
          <p
            key={bIdx}
            className="font-mono text-xs text-amber-400/90 break-all bg-stone-950/50 px-3 py-2 rounded border border-stone-800/80"
          >
            {blk.text}
          </p>
        );
      }

      return (
        <p
          key={bIdx}
          className={`font-serif text-stone-300 text-justify leading-relaxed break-words ${getFontSizeClass('body')}`}
        >
          {renderInlineMarkdown(blk.text)}
        </p>
      );
    });

  return (
    <article className="space-y-12 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* ============================================================
          PARTE I — ENSAIO ACADÊMICO
         ============================================================ */}
      <div id="essay-master" className="scroll-mt-24 space-y-6">
        <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
          <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-800 pb-4">
            <div className="space-y-2 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                  {parsed.abaLabel}
                </span>
                <span className="text-[10px] font-mono text-stone-400">
                  {parsed.collectionLabel} · {parsed.blockLabel} · {parsed.monographLabel}
                </span>
              </div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider pt-1">
                {parsed.monographTitle}
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 leading-snug">
                {parsed.part1Title}
              </h1>
            </div>

            <button
              onClick={handleCopyAll}
              className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
              title="Copiar texto integral da Aba 2 Ensaio Acadêmico"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Texto Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-amber-400" />
                  <span>Copiar Aba Ensaio na Íntegra</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2.5 text-amber-300 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{parsed.part1Label}</span>
          </div>
        </div>

        {parsed.part1Sections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md"
          >
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/60 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                {sec.number}
              </span>
              <h2
                className={`font-serif font-bold text-stone-100 uppercase tracking-wide break-words ${getFontSizeClass('heading')}`}
              >
                {sec.fullHeading}
              </h2>
            </div>
            <div className="space-y-4">{renderBlocks(sec.blocks)}</div>
          </section>
        ))}
      </div>

      {/* ============================================================
          PARTE II — SÍNTESE ESTRUTURAL
         ============================================================ */}
      <div
        id="essay-synthese-master"
        className="scroll-mt-24 pt-6 border-t-2 border-stone-800 space-y-6"
      >
        <div className="flex items-center gap-4 py-2">
          <div className="h-px bg-stone-700 flex-1" />
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-400 font-bold bg-[#161619] px-4 py-1.5 rounded-full border border-amber-600/40 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            {parsed.part2Label}
          </span>
          <div className="h-px bg-stone-700 flex-1" />
        </div>

        <div className="bg-[#161619] p-5 sm:p-6 rounded-xl border border-amber-600/40 shadow-md">
          <h2 className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}>
            {parsed.part2Title}
          </h2>
        </div>

        {parsed.part2Sections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md"
          >
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/60 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                {sec.number}
              </span>
              <h2
                className={`font-serif font-bold text-stone-100 uppercase tracking-wide ${getFontSizeClass('heading')}`}
              >
                {sec.fullHeading}
              </h2>
            </div>
            <div className="space-y-4">{renderBlocks(sec.blocks)}</div>
          </section>
        ))}
      </div>

      {/* ============================================================
          PARTE III — DOSSIÊ ACADÊMICO DE PESQUISA
         ============================================================ */}
      <div
        id="essay-research-dossier-master"
        className="scroll-mt-24 pt-6 border-t-2 border-stone-800 space-y-6"
      >
        <div className="flex items-center gap-4 py-2">
          <div className="h-px bg-stone-700 flex-1" />
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-400 font-bold bg-[#161619] px-4 py-1.5 rounded-full border border-amber-600/40 flex items-center gap-2">
            <Search className="w-4 h-4 text-amber-400" />
            {parsed.part3Label}
          </span>
          <div className="h-px bg-stone-700 flex-1" />
        </div>

        <div className="bg-[#161619] p-5 sm:p-6 rounded-xl border border-amber-600/40 shadow-md">
          <h2 className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}>
            {parsed.part3Title}
          </h2>
        </div>

        {parsed.part3Sections.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md"
          >
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/60 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                {sec.number}
              </span>
              <h2
                className={`font-serif font-bold text-stone-100 uppercase tracking-wide ${getFontSizeClass('heading')}`}
              >
                {sec.fullHeading}
              </h2>
            </div>
            <div className="space-y-4">{renderBlocks(sec.blocks)}</div>
          </section>
        ))}
      </div>

      {/* ============================================================
          PARTE IV — INVESTIGAÇÃO AVANÇADA
         ============================================================ */}
      <div
        id="essay-advanced-investigation-master"
        className="scroll-mt-24 pt-6 border-t-2 border-stone-800 space-y-6"
      >
        <div className="flex items-center gap-4 py-2">
          <div className="h-px bg-stone-700 flex-1" />
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-400 font-bold bg-[#161619] px-4 py-1.5 rounded-full border border-amber-600/40 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            {parsed.part4Label}
          </span>
          <div className="h-px bg-stone-700 flex-1" />
        </div>

        <div className="bg-[#161619] p-5 sm:p-6 rounded-xl border border-amber-600/40 shadow-md">
          <h2 className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}>
            {parsed.part4Title}
          </h2>
        </div>

        {parsed.part4Questions.map((sec) => (
          <section
            key={sec.id}
            id={sec.id}
            className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md"
          >
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/60 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                {sec.number}
              </span>
              <h2
                className={`font-serif font-bold text-stone-100 uppercase tracking-wide ${getFontSizeClass('heading')}`}
              >
                {sec.fullHeading}
              </h2>
            </div>
            <div className="space-y-4">{renderBlocks(sec.blocks)}</div>
          </section>
        ))}

        {/* CONCLUSÃO DA INVESTIGAÇÃO AVANÇADA */}
        <section
          id="adv-conclusion"
          className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-amber-600/40 space-y-4 shadow-md"
        >
          <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <h2
              className={`font-serif font-bold text-amber-300 uppercase tracking-wide ${getFontSizeClass('heading')}`}
            >
              {parsed.conclusionHeading}
            </h2>
          </div>
          <div className="space-y-4">{renderBlocks(parsed.conclusionBlocks)}</div>
        </section>

        {/* REFERÊNCIAS BIBLIOGRÁFICAS DA ABA */}
        <section
          id="adv-refs"
          className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md"
        >
          <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
            <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
            <h2 className="font-mono font-bold text-stone-100 uppercase tracking-wide text-sm sm:text-base">
              {parsed.refsHeading}
            </h2>
          </div>
          <div className="space-y-3 pt-1">
            {parsed.refsBlocks.map((blk, idx) =>
              blk.kind === 'bullets' ? (
                <div key={idx} className="space-y-2.5">
                  {blk.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="bg-[#121214] p-3.5 rounded-lg border border-stone-800 font-serif text-xs sm:text-sm text-stone-200 leading-relaxed flex items-start gap-2.5"
                    >
                      <BookmarkCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{renderInlineMarkdown(item)}</span>
                    </div>
                  ))}
                </div>
              ) : null
            )}
          </div>
        </section>
      </div>
    </article>
  );
};
