import React, { useMemo, useState } from 'react';
import {
  GraduationCap,
  Layers,
  Search,
  Sparkles,
  Copy,
  Check,
  BookOpen,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { RAW_ESSAY_202 } from '../data/essays/essay_guerras_mundiais_02';

interface Topic202EssayViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

interface NumberedSection {
  id: string;
  number: string;
  title: string;
  fullHeading: string;
  blocks: string[];
}

interface ParsedEssay202 {
  headerTitle: string;
  headerSubtitle: string;
  headerBadges: string[];
  part1Heading: string;
  part1Subtitle: string;
  part1Sections: NumberedSection[];
  part2Heading: string;
  part2Sections: NumberedSection[];
  part3Heading: string;
  part3ThemeLabel: string;
  part3ThemeText: string;
  part3Sections: NumberedSection[];
  part4Heading: string;
  part4IntroHeading: string;
  part4IntroText: string;
  part4Investigations: NumberedSection[];
  refsHeading: string;
  refsItems: string[];
  closingLine: string;
}

const ALL_CAPS_SUBHEADING_RE = /^[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ0-9][A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ0-9\s:—–\-,.()ºª]+$/;

function splitBlocks(body: string): string[] {
  return body
    .trim()
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);
}

function parseNumberedSections(rawBody: string, prefix: string): NumberedSection[] {
  const chunks = rawBody
    .trim()
    .split(/\n(?=\d+\.\s+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ])/)
    .map((s) => s.trim())
    .filter(Boolean);

  return chunks.map((chunk, idx) => {
    const nl = chunk.indexOf('\n');
    const headingLine = (nl === -1 ? chunk : chunk.slice(0, nl)).trim();
    const rest = nl === -1 ? '' : chunk.slice(nl + 1).trim();
    const match = headingLine.match(/^(\d+)\.\s+(.*)$/);
    const num = match ? match[1] : String(idx + 1);
    const title = match ? match[2] : headingLine;
    return {
      id: `${prefix}-${num}`,
      number: num,
      title,
      fullHeading: headingLine,
      blocks: splitBlocks(rest),
    };
  });
}

function parseEssay202(raw: string): ParsedEssay202 {
  const normalized = raw.replace(/\r\n/g, '\n');
  const eq = normalized.split(/^={10,}$/m);

  const headerLines = (eq[1] || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const headerTitle = headerLines[0] || '';
  const headerSubtitle = headerLines[1] || '';
  const headerBadges = headerLines.slice(2);

  // PARTE I
  const part1Chunks = (eq[2] || '')
    .trim()
    .split(/^-{10,}$/m)
    .map((s) => s.trim())
    .filter(Boolean);
  const part1HeaderLines = (part1Chunks[0] || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const part1Heading = part1HeaderLines[0] || 'PARTE I — ENSAIO ACADÊMICO';
  const part1Subtitle = part1HeaderLines.slice(1).join(' ');

  const part1Sections: NumberedSection[] = [];
  for (let i = 1; i < part1Chunks.length; i += 2) {
    const headingLine = part1Chunks[i] || '';
    const body = part1Chunks[i + 1] || '';
    const match = headingLine.match(/^(\d+)\.\s+(.*)$/);
    const num = match ? match[1] : String(part1Sections.length + 1);
    const title = match ? match[2] : headingLine;
    part1Sections.push({
      id: `essay-sec-${num}`,
      number: num,
      title,
      fullHeading: headingLine,
      blocks: splitBlocks(body),
    });
  }

  // PARTE II
  const part2Heading = (eq[3] || '').trim();
  const part2Sections = parseNumberedSections(eq[4] || '', 'sintese-sec');

  // PARTE III
  const part3Heading = (eq[5] || '').trim();
  const part3Raw = (eq[6] || '').trim();
  const firstDossieSecIdx = part3Raw.search(/\n\d+\.\s+[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ]/);
  const part3ThemeRaw =
    firstDossieSecIdx === -1 ? part3Raw : part3Raw.slice(0, firstDossieSecIdx).trim();
  const part3ThemeLines = part3ThemeRaw
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const part3ThemeLabel = part3ThemeLines[0] || 'TEMA:';
  const part3ThemeText = part3ThemeLines.slice(1).join(' ');
  const part3Body =
    firstDossieSecIdx === -1 ? '' : part3Raw.slice(firstDossieSecIdx + 1).trim();
  const part3Sections = parseNumberedSections(part3Body, 'dossie-sec');

  // PARTE IV
  const part4Heading = (eq[7] || '').trim();
  const part4Chunks = (eq[8] || '')
    .trim()
    .split(/^-{10,}$/m)
    .map((s) => s.trim())
    .filter(Boolean);
  const part4IntroBlocks = splitBlocks(part4Chunks[0] || '');
  const part4IntroHeading = part4IntroBlocks[0] || '';
  const part4IntroText = part4IntroBlocks.slice(1).join('\n\n');

  const part4Investigations: NumberedSection[] = [];
  for (let i = 1; i < part4Chunks.length; i += 2) {
    const headingLine = part4Chunks[i] || '';
    const body = part4Chunks[i + 1] || '';
    const invMatch = headingLine.match(/^INVESTIGAÇÃO\s+(\d+)\s+—\s+(.*)$/);
    const numMatch = headingLine.match(/^(\d+)\.\s+(.*)$/);
    const num = invMatch
      ? invMatch[1]
      : numMatch
      ? numMatch[1]
      : String(part4Investigations.length + 1);
    const title = invMatch ? invMatch[2] : numMatch ? numMatch[2] : headingLine;
    part4Investigations.push({
      id: `adv-sec-${num}`,
      number: num,
      title,
      fullHeading: headingLine,
      blocks: splitBlocks(body),
    });
  }

  // REFERÊNCIAS
  const refsHeading = (eq[9] || '').trim();
  const refsItems = (eq[10] || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const closingLine = (eq[11] || '').trim();

  return {
    headerTitle,
    headerSubtitle,
    headerBadges,
    part1Heading,
    part1Subtitle,
    part1Sections,
    part2Heading,
    part2Sections,
    part3Heading,
    part3ThemeLabel,
    part3ThemeText,
    part3Sections,
    part4Heading,
    part4IntroHeading,
    part4IntroText,
    part4Investigations,
    refsHeading,
    refsItems,
    closingLine,
  };
}

export const Topic202EssayView: React.FC<Topic202EssayViewProps> = ({
  getFontSizeClass,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const parsed = useMemo(() => parseEssay202(RAW_ESSAY_202), []);

  const handleCopyAll = () => {
    navigator.clipboard.writeText(RAW_ESSAY_202);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const renderBlock = (block: string, bIdx: number) => {
    const lines = block
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) return null;

    // Pure bullet list
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

    // Pure numbered list inside a block (e.g. "1. ...\n2. ...\n3. ...")
    if (lines.length > 1 && lines.every((l) => /^\d+\.\s+/.test(l))) {
      return (
        <div
          key={bIdx}
          className={`bg-[#121214] p-4 rounded-lg border border-stone-800 space-y-1.5 font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}
        >
          {lines.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      );
    }

    // Standalone subsection heading line like "12.1. ..." or ALL-CAPS label ("PROBLEMA HISTÓRICO", "ANÁLISE", "PRIMEIRA: ...")
    if (
      lines.length === 1 &&
      (/^\d+\.\d+\.\s+/.test(lines[0]) ||
        (ALL_CAPS_SUBHEADING_RE.test(lines[0]) && lines[0].length <= 95))
    ) {
      return (
        <h3
          key={bIdx}
          className="font-mono font-bold text-amber-300 text-xs sm:text-sm uppercase tracking-wider pt-2 border-t border-stone-800/70"
        >
          {lines[0]}
        </h3>
      );
    }

    // Multi-line labeled card block: First line ALL CAPS (actor/doc/concept) or ends with ':' followed by fields/lines
    if (
      lines.length >= 2 &&
      (lines[0].endsWith(':') ||
        /^(DOCUMENTO|HIPÓTESE)\s+\d+/i.test(lines[0]) ||
        ALL_CAPS_SUBHEADING_RE.test(lines[0]))
    ) {
      return (
        <div
          key={bIdx}
          className="bg-[#121214] p-4 rounded-lg border border-stone-800 space-y-1.5"
        >
          <div className="font-mono font-bold text-amber-300 text-xs sm:text-sm tracking-wide">
            {lines[0]}
          </div>
          {lines.slice(1).map((line, lIdx) => (
            <p
              key={lIdx}
              className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
            >
              {line}
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
    <article className="space-y-12 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* ============================================================
          PARTE I — ENSAIO ACADÊMICO
         ============================================================ */}
      <div id="essay-master" className="scroll-mt-24 space-y-6">
        {/* Header Banner */}
        <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
          <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-800 pb-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                {parsed.headerBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={
                      idx === 0
                        ? 'text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold'
                        : 'text-[10px] font-mono text-stone-400'
                    }
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
                {parsed.headerTitle}
              </h1>
              <p className="text-amber-400 font-serif italic text-sm sm:text-base">
                {parsed.headerSubtitle}
              </p>
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
          <p className="font-serif font-semibold text-stone-200 text-sm sm:text-base">
            {parsed.part1Subtitle}
          </p>
        </div>

        {/* Sections 1 - 14 */}
        {parsed.part1Sections.map((sec) => {
          const isConclusion = sec.title.includes('CONCLUSÃO');
          return (
            <section
              key={sec.id}
              id={sec.id}
              className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md"
            >
              <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                    isConclusion
                      ? 'bg-emerald-950/90 border border-emerald-600/60 text-emerald-300'
                      : 'bg-amber-950/90 border border-amber-600/60 text-amber-300'
                  }`}
                >
                  {sec.number}
                </span>
                <h2
                  className={`font-serif font-bold uppercase tracking-wide break-words ${
                    isConclusion ? 'text-amber-300' : 'text-stone-100'
                  } ${getFontSizeClass('heading')}`}
                >
                  {sec.fullHeading}
                </h2>
              </div>
              <div className="space-y-4">
                {sec.blocks.map((block, bIdx) => renderBlock(block, bIdx))}
              </div>
            </section>
          );
        })}
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
            <div className="space-y-4">
              {sec.blocks.map((block, bIdx) => renderBlock(block, bIdx))}
            </div>
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

        {/* TEMA Card */}
        <div className="bg-[#161619] p-5 sm:p-6 rounded-xl border border-amber-600/40 space-y-2 shadow-md">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
            <Compass className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{parsed.part3ThemeLabel}</span>
          </div>
          <p className={`font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}>
            {parsed.part3ThemeText}
          </p>
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
              {sec.blocks.map((block, bIdx) => renderBlock(block, bIdx))}
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

        {/* Intro Card */}
        <div className="bg-[#161619] p-5 sm:p-6 rounded-xl border border-amber-600/40 space-y-2 shadow-md">
          <h3 className={`font-serif font-bold text-amber-300 uppercase tracking-wide ${getFontSizeClass('heading')}`}>
            {parsed.part4IntroHeading}
          </h3>
          <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
            {parsed.part4IntroText}
          </p>
        </div>

        {/* Investigações 1 - 10 + 11. Conclusão Geral */}
        {parsed.part4Investigations.map((sec) => {
          const isGeneralConclusion = sec.fullHeading.includes('CONCLUSÃO GERAL');
          return (
            <section
              key={sec.id}
              id={sec.id}
              className={`scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl space-y-4 shadow-md ${
                isGeneralConclusion
                  ? 'border border-amber-600/40'
                  : 'border border-stone-800'
              }`}
            >
              <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
                {isGeneralConclusion ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <span className="w-8 h-8 rounded-full bg-amber-950/90 border border-amber-600/60 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    {sec.number}
                  </span>
                )}
                <h2
                  className={`font-serif font-bold uppercase tracking-wide ${
                    isGeneralConclusion ? 'text-amber-300' : 'text-stone-100'
                  } ${getFontSizeClass('heading')}`}
                >
                  {sec.fullHeading}
                </h2>
              </div>
              <div className="space-y-4">
                {sec.blocks.map((block, bIdx) => renderBlock(block, bIdx))}
              </div>
            </section>
          );
        })}

        {/* REFERÊNCIAS PARA A INVESTIGAÇÃO AVANÇADA */}
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
          <div className="space-y-2.5 pt-1 font-mono text-xs text-stone-300">
            {parsed.refsItems.map((ref, idx) => (
              <div
                key={idx}
                className="bg-[#121214] p-3.5 rounded-lg border border-stone-800 select-all leading-relaxed break-words"
              >
                {ref}
              </div>
            ))}
          </div>
          {parsed.closingLine && (
            <div className="pt-4 border-t border-stone-800 text-center font-mono text-xs text-stone-400 tracking-widest uppercase">
              {parsed.closingLine}
            </div>
          )}
        </section>
      </div>
    </article>
  );
};
