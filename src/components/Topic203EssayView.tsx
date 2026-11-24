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
import { RAW_ESSAY_203 } from '../data/essays/essay_guerras_mundiais_03';

interface Topic203EssayViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

type ContentBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'arrow'; symbol: string }
  | { kind: 'subheading'; text: string }
  | { kind: 'labeled'; label: string; body: string };

interface NumberedSection {
  id: string;
  number: string;
  title: string;
  fullHeading: string;
  blocks: ContentBlock[];
}

interface ParsedEssay203 {
  abaLabel: string;
  titleLabel: string;
  essayTitle: string;
  part1Heading: string;
  part1Sections: NumberedSection[];
  part2Heading: string;
  part2Sections: NumberedSection[];
  part3Heading: string;
  part3Sections: NumberedSection[];
  part4Heading: string;
  part4Intro: string;
  part4Questions: NumberedSection[];
  generalConclusionHeading: string;
  generalConclusionBlocks: ContentBlock[];
  refsHeading: string;
  refsBlocks: ContentBlock[];
  closingLine: string;
}

const ALL_CAPS_HEADING_RE = /^[0-9]+\.\s+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ0-9]/;
const SUBSECTION_HEADING_RE = /^(\d+\.\d+\.\s+.+|Debate\s+\d+\s+—\s+.+)$/;
const LABELED_PREFIX_RE = /^(Dimensão\s+[^:]+|Guerra\s+[^:]+|Terra\s+de\s+ninguém|Barragem\s+móvel|Tropas\s+de\s+assalto|Armas\s+combinadas|Shell\s+shock|Conclusão|Resposta\s+desenvolvida):\s*(.*)$/;

function parseContentLines(lines: string[]): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const raw = lines[i];
    const trimmed = raw.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // TSV table block
    if (raw.includes('\t')) {
      const tableRows: string[][] = [];
      while (i < lines.length && lines[i].includes('\t')) {
        tableRows.push(lines[i].split('\t').map((c) => c.trim()));
        i++;
      }
      if (tableRows.length >= 2) {
        blocks.push({
          kind: 'table',
          headers: tableRows[0],
          rows: tableRows.slice(1),
        });
      }
      continue;
    }

    // Vertical flow arrow
    if (trimmed === '↓') {
      blocks.push({ kind: 'arrow', symbol: '↓' });
      i++;
      continue;
    }

    // Bullet list
    if (trimmed.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ kind: 'bullets', items });
      continue;
    }

    // Subsection heading (4.1., 2.1., Debate 1 — ...)
    if (SUBSECTION_HEADING_RE.test(trimmed)) {
      blocks.push({ kind: 'subheading', text: trimmed });
      i++;
      continue;
    }

    // Labeled line (Dimensão ..., Guerra de movimento: ..., Conclusão: ..., Resposta desenvolvida:)
    const labeledMatch = trimmed.match(LABELED_PREFIX_RE);
    if (labeledMatch) {
      blocks.push({
        kind: 'labeled',
        label: `${labeledMatch[1]}:`,
        body: labeledMatch[2],
      });
      i++;
      continue;
    }

    blocks.push({ kind: 'paragraph', text: trimmed });
    i++;
  }

  return blocks;
}

function splitNumberedSections(lines: string[], prefix: string): NumberedSection[] {
  const sections: NumberedSection[] = [];
  let currentHeading = '';
  let currentNum = '';
  let currentTitle = '';
  let buffer: string[] = [];

  const flush = () => {
    if (!currentHeading) return;
    sections.push({
      id: `${prefix}-${currentNum}`,
      number: currentNum,
      title: currentTitle,
      fullHeading: currentHeading,
      blocks: parseContentLines(buffer),
    });
  };

  for (const line of lines) {
    const t = line.trim();
    const isTopLevelHeading =
      ALL_CAPS_HEADING_RE.test(t) &&
      t === t.toUpperCase() &&
      !/^\d+\.\d+/.test(t);

    if (isTopLevelHeading) {
      flush();
      currentHeading = t;
      const m = t.match(/^(\d+)\.\s+(.*)$/);
      currentNum = m ? m[1] : String(sections.length + 1);
      currentTitle = m ? m[2] : t;
      buffer = [];
    } else if (currentHeading) {
      buffer.push(line);
    }
  }
  flush();
  return sections;
}

function parseEssay203(raw: string): ParsedEssay203 {
  const lines = raw.replace(/\r\n/g, '\n').split('\n');

  const idxPart1 = lines.findIndex((l) => l.trim() === 'PARTE I — ENSAIO ACADÊMICO');
  const idxPart2 = lines.findIndex((l) => l.trim() === 'PARTE II — SÍNTESE ESTRUTURAL');
  const idxPart3 = lines.findIndex((l) => l.trim() === 'PARTE III — DOSSIÊ ACADÊMICO DE PESQUISA');
  const idxPart4 = lines.findIndex((l) => l.trim() === 'PARTE IV — INVESTIGAÇÃO AVANÇADA');
  const idxGeneralConc = lines.findIndex((l) => l.trim() === 'CONCLUSÃO GERAL DA ABA 2');
  const idxRefs = lines.findIndex((l) => l.trim() === 'REFERÊNCIAS COMPLEMENTARES PARA CONSULTA');
  const idxEnd = lines.findIndex((l) => l.trim() === 'FIM DA ABA 2 — ENSAIO ACADÊMICO');

  const headerLines = lines.slice(0, idxPart1).map((l) => l.trim()).filter(Boolean);
  const abaLabel = headerLines[0] || 'ABA 2 — ENSAIO ACADÊMICO';
  const titleLabel = headerLines[1] || 'Título do ensaio:';
  const essayTitle = headerLines.slice(2).join(' ');

  const part1Sections = splitNumberedSections(lines.slice(idxPart1 + 1, idxPart2), 'essay-sec');
  const part2Sections = splitNumberedSections(lines.slice(idxPart2 + 1, idxPart3), 'sintese-sec');
  const part3Sections = splitNumberedSections(lines.slice(idxPart3 + 1, idxPart4), 'dossie-sec');

  const part4Lines = lines.slice(idxPart4 + 1, idxGeneralConc);
  const firstQuestionIdx = part4Lines.findIndex((l) => l.trim().startsWith('QUESTÃO '));
  const part4Intro =
    firstQuestionIdx > 0
      ? part4Lines.slice(0, firstQuestionIdx).map((l) => l.trim()).filter(Boolean).join(' ')
      : '';

  const part4Questions: NumberedSection[] = [];
  let qHeading = '';
  let qNum = '';
  let qTitle = '';
  let qBuffer: string[] = [];

  const flushQ = () => {
    if (!qHeading) return;
    part4Questions.push({
      id: `adv-sec-${qNum}`,
      number: qNum,
      title: qTitle,
      fullHeading: qHeading,
      blocks: parseContentLines(qBuffer),
    });
  };

  for (const line of part4Lines.slice(Math.max(0, firstQuestionIdx))) {
    const t = line.trim();
    const qMatch = t.match(/^QUESTÃO\s+(\d+)\s+—\s+(.*)$/);
    if (qMatch) {
      flushQ();
      qHeading = t;
      qNum = qMatch[1];
      qTitle = qMatch[2];
      qBuffer = [];
    } else if (qHeading) {
      qBuffer.push(line);
    }
  }
  flushQ();

  const generalConclusionBlocks = parseContentLines(lines.slice(idxGeneralConc + 1, idxRefs));
  const refsBlocks = parseContentLines(lines.slice(idxRefs + 1, idxEnd >= 0 ? idxEnd : lines.length));
  const closingLine = idxEnd >= 0 ? lines[idxEnd].trim() : '';

  return {
    abaLabel,
    titleLabel,
    essayTitle,
    part1Heading: lines[idxPart1]?.trim() || 'PARTE I — ENSAIO ACADÊMICO',
    part1Sections,
    part2Heading: lines[idxPart2]?.trim() || 'PARTE II — SÍNTESE ESTRUTURAL',
    part2Sections,
    part3Heading: lines[idxPart3]?.trim() || 'PARTE III — DOSSIÊ ACADÊMICO DE PESQUISA',
    part3Sections,
    part4Heading: lines[idxPart4]?.trim() || 'PARTE IV — INVESTIGAÇÃO AVANÇADA',
    part4Intro,
    part4Questions,
    generalConclusionHeading: lines[idxGeneralConc]?.trim() || 'CONCLUSÃO GERAL DA ABA 2',
    generalConclusionBlocks,
    refsHeading: lines[idxRefs]?.trim() || 'REFERÊNCIAS COMPLEMENTARES PARA CONSULTA',
    refsBlocks,
    closingLine,
  };
}

export const Topic203EssayView: React.FC<Topic203EssayViewProps> = ({
  getFontSizeClass,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const parsed = useMemo(() => parseEssay203(RAW_ESSAY_203), []);

  const handleCopyAll = () => {
    navigator.clipboard.writeText(RAW_ESSAY_203);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const renderBlocks = (blocks: ContentBlock[], isBibSection = false) =>
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
                      {header}
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
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            className={`space-y-2 bg-[#121214] border border-stone-800 p-4 sm:p-5 rounded-lg font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
          >
            {blk.items.map((item, iIdx) => (
              <li key={iIdx} className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                <span className="min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        );
      }

      if (blk.kind === 'subheading') {
        return (
          <h3
            key={bIdx}
            className="font-serif font-bold text-amber-300 text-base sm:text-lg pt-3 border-t border-stone-800/80"
          >
            {blk.text}
          </h3>
        );
      }

      if (blk.kind === 'labeled') {
        const isConclusion = blk.label.startsWith('Conclusão');
        const isResponseHeader = blk.label.startsWith('Resposta desenvolvida') && !blk.body;

        if (isResponseHeader) {
          return (
            <div
              key={bIdx}
              className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold pt-1"
            >
              {blk.label}
            </div>
          );
        }

        return (
          <div
            key={bIdx}
            className={`p-4 rounded-lg border leading-relaxed font-serif ${getFontSizeClass('body')} ${
              isConclusion
                ? 'bg-emerald-950/20 border-emerald-700/40 text-stone-200'
                : 'bg-[#121214] border-stone-800 text-stone-300'
            }`}
          >
            <strong className={isConclusion ? 'text-emerald-300 font-semibold' : 'text-amber-300 font-semibold'}>
              {blk.label}
            </strong>
            {blk.body ? ` ${blk.body}` : ''}
          </div>
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
            {blk.text}
          </div>
        );
      }

      if (isBibSection) {
        return (
          <div
            key={bIdx}
            className="bg-[#121214] p-3.5 rounded-lg border border-stone-800 font-mono text-xs text-stone-300 select-all leading-relaxed break-words"
          >
            {blk.text}
          </div>
        );
      }

      return (
        <p
          key={bIdx}
          className={`font-serif text-stone-300 text-justify leading-relaxed break-words ${getFontSizeClass('body')}`}
        >
          {blk.text}
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
                  Coleção III · História das Guerras Mundiais · Monografia nº 03
                </span>
              </div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider pt-1">
                {parsed.titleLabel}
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 leading-snug">
                {parsed.essayTitle}
              </h1>
            </div>

            <button
              onClick={handleCopyAll}
              className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
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
            <span>{parsed.part1Heading}</span>
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
            {parsed.part2Heading}
          </span>
          <div className="h-px bg-stone-700 flex-1" />
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
            {parsed.part3Heading}
          </span>
          <div className="h-px bg-stone-700 flex-1" />
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
            <div className="space-y-4">
              {renderBlocks(sec.blocks, sec.number === '6')}
            </div>
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
            {parsed.part4Heading}
          </span>
          <div className="h-px bg-stone-700 flex-1" />
        </div>

        {parsed.part4Intro && (
          <div className="bg-[#161619] p-5 sm:p-6 rounded-xl border border-amber-600/40 shadow-md">
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              {parsed.part4Intro}
            </p>
          </div>
        )}

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

        {/* CONCLUSÃO GERAL DA ABA 2 */}
        <section
          id="adv-conclusion"
          className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-amber-600/40 space-y-4 shadow-md"
        >
          <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <h2
              className={`font-serif font-bold text-amber-300 uppercase tracking-wide ${getFontSizeClass('heading')}`}
            >
              {parsed.generalConclusionHeading}
            </h2>
          </div>
          <div className="space-y-4">{renderBlocks(parsed.generalConclusionBlocks)}</div>
        </section>

        {/* REFERÊNCIAS COMPLEMENTARES PARA CONSULTA */}
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
              blk.kind === 'paragraph' && /^\d+\.\s+/.test(blk.text) ? (
                <div
                  key={idx}
                  className="bg-[#121214] p-3.5 rounded-lg border border-stone-800 font-serif text-xs sm:text-sm text-stone-200 leading-relaxed flex items-start gap-2.5"
                >
                  <BookmarkCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{blk.text}</span>
                </div>
              ) : (
                <p
                  key={idx}
                  className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
                >
                  {blk.kind === 'paragraph' ? blk.text : ''}
                </p>
              )
            )}
          </div>
          {parsed.closingLine && (
            <div className="pt-4 border-t border-stone-800 text-center font-mono text-xs text-amber-300 tracking-widest uppercase">
              {parsed.closingLine}
            </div>
          )}
        </section>
      </div>
    </article>
  );
};
