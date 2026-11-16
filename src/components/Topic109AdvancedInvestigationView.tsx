import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  FileText,
  Globe,
  ScrollText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { RAW_ADVANCED_INVESTIGATION_09 } from '../data/advanced/advanced_ideologias_09';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

interface SubSection {
  heading: string;
  blocks: string[];
}

interface InvestigationSection {
  number: number;
  label: string;
  question: string;
  subsections: SubSection[];
  trailingBlocks: string[];
}

interface BibSubSection {
  heading: string;
  entries: string[];
}

interface ParsedInvestigation09 {
  mainTitle: string;
  subtitle: string;
  chapterTitle: string;
  metaLines: string[];
  introTitle: string;
  introBlocks: string[];
  investigations: InvestigationSection[];
  conclusionTitle: string;
  conclusionBlocks: string[];
  bibliographyTitle: string;
  bibliographySubsections: BibSubSection[];
  primaryTitle: string;
  primaryBlocks: string[];
  digitalTitle: string;
  digitalBlocks: string[];
  methodologyNote: string | null;
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

function parseInvestigation09(raw: string): ParsedInvestigation09 {
  const normalized = raw.replace(/\r\n/g, '\n');
  const firstSep = normalized.indexOf('\n---\n');
  const headerText = firstSep !== -1 ? normalized.slice(0, firstSep) : '';
  const bodyText = firstSep !== -1 ? normalized.slice(firstSep + 5) : normalized;

  const headerLines = headerText
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean);

  const mainTitle = (headerLines[0] || '# INVESTIGAÇÃO AVANÇADA').replace(/^#\s+/, '');
  const subtitle = (headerLines[1] || '## CONSENSO DO PÓS-GUERRA E ESTADO SOCIAL DE DIREITO').replace(/^##\s+/, '');
  const chapterTitle = (headerLines[2] || '').replace(/^###\s+/, '');
  const metaLines = headerLines.slice(3);

  const topSections = bodyText.split(/\n(?=# )/).map(s => s.trim()).filter(Boolean);

  let introTitle = 'INTRODUÇÃO';
  let introBlocks: string[] = [];
  const investigations: InvestigationSection[] = [];
  let conclusionTitle = 'CONCLUSÃO GERAL';
  let conclusionBlocks: string[] = [];
  let bibliographyTitle = 'BIBLIOGRAFIA GERAL DA INVESTIGAÇÃO AVANÇADA';
  const bibliographySubsections: BibSubSection[] = [];
  let primaryTitle = 'DOCUMENTOS PRIMÁRIOS PARA CONSULTA';
  let primaryBlocks: string[] = [];
  let digitalTitle = 'FONTES DIGITAIS E REPOSITÓRIOS DE CONSULTA';
  let digitalBlocks: string[] = [];
  let methodologyNote: string | null = null;

  topSections.forEach((sec) => {
    const firstNewline = sec.indexOf('\n');
    const headingLine = (firstNewline === -1 ? sec : sec.slice(0, firstNewline)).replace(/^#\s+/, '').trim();
    const rest = (firstNewline === -1 ? '' : sec.slice(firstNewline + 1)).trim();

    if (headingLine.startsWith('INTRODUÇÃO')) {
      introTitle = headingLine;
      introBlocks = rest
        .replace(/\n---\s*$/, '')
        .split(/\n{2,}/)
        .map(b => b.trim())
        .filter(b => b.length > 0 && b !== '---');
    } else if (headingLine.startsWith('INVESTIGAÇÃO ')) {
      const numMatch = headingLine.match(/^INVESTIGAÇÃO\s+(\d+)/);
      const qNum = numMatch ? parseInt(numMatch[1], 10) : investigations.length + 1;
      const cleanedRest = rest.replace(/\n---\s*$/, '').trim();

      const lines = cleanedRest.split('\n');
      let question = '';
      let contentStartIdx = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('## ')) {
          question = lines[i].replace(/^##\s+/, '').trim();
          contentStartIdx = i + 1;
          break;
        }
      }
      const afterQuestion = lines.slice(contentStartIdx).join('\n').trim();
      const subParts = afterQuestion.split(/\n(?=### )/);
      const subsections: SubSection[] = [];
      const trailingBlocks: string[] = [];

      subParts.forEach((sp) => {
        const sTrim = sp.trim();
        if (!sTrim || sTrim === '---') return;
        if (sTrim.startsWith('### ')) {
          const nl = sTrim.indexOf('\n');
          const subHeading = (nl === -1 ? sTrim : sTrim.slice(0, nl)).replace(/^###\s+/, '').trim();
          const subBody = (nl === -1 ? '' : sTrim.slice(nl + 1)).trim();
          const blocks = subBody
            .split(/\n{2,}/)
            .map(b => b.trim())
            .filter(b => b.length > 0 && b !== '---');
          subsections.push({ heading: subHeading, blocks });
        } else {
          const blocks = sTrim
            .split(/\n{2,}/)
            .map(b => b.trim())
            .filter(b => b.length > 0 && b !== '---');
          trailingBlocks.push(...blocks);
        }
      });

      investigations.push({
        number: qNum,
        label: headingLine,
        question,
        subsections,
        trailingBlocks,
      });
    } else if (headingLine.startsWith('CONCLUSÃO GERAL')) {
      conclusionTitle = headingLine;
      conclusionBlocks = rest
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
        const entries = subBody
          .split(/\n{2,}/)
          .map(e => e.trim())
          .filter(e => e.length > 0 && e !== '---');
        bibliographySubsections.push({ heading: subHeading, entries });
      });
    } else if (headingLine.startsWith('DOCUMENTOS PRIMÁRIOS')) {
      primaryTitle = headingLine;
      primaryBlocks = rest
        .replace(/\n---\s*$/, '')
        .split(/\n{2,}/)
        .map(b => b.trim())
        .filter(b => b.length > 0 && b !== '---');
    } else if (headingLine.startsWith('FONTES DIGITAIS')) {
      digitalTitle = headingLine;
      const sepIdx = rest.indexOf('\n---\n');
      const digitalPart = sepIdx !== -1 ? rest.slice(0, sepIdx) : rest;
      const notePart = sepIdx !== -1 ? rest.slice(sepIdx + 5).trim() : '';

      digitalBlocks = digitalPart
        .split(/\n{2,}/)
        .map(b => b.trim())
        .filter(b => b.length > 0 && b !== '---');

      if (notePart) {
        methodologyNote = notePart;
      }
    }
  });

  return {
    mainTitle,
    subtitle,
    chapterTitle,
    metaLines,
    introTitle,
    introBlocks,
    investigations,
    conclusionTitle,
    conclusionBlocks,
    bibliographyTitle,
    bibliographySubsections,
    primaryTitle,
    primaryBlocks,
    digitalTitle,
    digitalBlocks,
    methodologyNote,
  };
}

export const Topic109AdvancedInvestigationView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState(false);

  const parsed = useMemo(() => parseInvestigation09(RAW_ADVANCED_INVESTIGATION_09), []);

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_ADVANCED_INVESTIGATION_09);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const renderBlock = (block: string, bIdx: number) => {
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

    if (block.startsWith('**Referências específicas:**')) {
      const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
      const items = lines.slice(1).map(l => l.replace(/^-\s+/, ''));
      return (
        <div
          key={bIdx}
          className="bg-stone-950/70 border border-stone-800 p-4 rounded-xl space-y-2"
        >
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
            Referências específicas:
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

    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);

    const isBulletList = lines.length > 0 && lines.every(l => l.startsWith('- '));
    if (isBulletList) {
      return (
        <ul key={bIdx} className={`space-y-1.5 pl-1 font-serif text-stone-300 ${getFontSizeClass('body')}`}>
          {lines.map((l, lIdx) => (
            <li key={lIdx} className="flex items-start gap-2">
              <span className="text-amber-400 font-bold shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(l.replace(/^-\s+/, '')) }} />
            </li>
          ))}
        </ul>
      );
    }

    const isNumberedList = lines.length > 0 && lines.every(l => /^\d+\.\s+/.test(l));
    if (isNumberedList) {
      return (
        <div key={bIdx} className="space-y-2.5 pt-1">
          {lines.map((line, lIdx) => {
            const match = line.match(/^(\d+)\.\s+(.*)$/);
            const num = match ? match[1] : String(lIdx + 1);
            const restText = match ? match[2] : line;
            return (
              <div
                key={lIdx}
                className="bg-stone-900/70 p-3.5 rounded-lg border border-stone-800 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-amber-950 border border-amber-700/60 text-amber-300 font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                  {num}
                </span>
                <p
                  className={`font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}
                  dangerouslySetInnerHTML={{ __html: formatInline(restText) }}
                />
              </div>
            );
          })}
        </div>
      );
    }

    if (/^https?:\/\/\S+$/.test(block.trim())) {
      const url = block.trim();
      return (
        <a
          key={bIdx}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-300 hover:text-amber-200 underline break-all bg-stone-950/60 px-3 py-1.5 rounded border border-stone-800"
        >
          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          <span>{url}</span>
        </a>
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
                Nº 09 · 10 Investigações Historiográficas
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
            <span>Índice de Investigação Avançada (10 Investigações &amp; Aparato Documental):</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif">
            <a
              href="#adv-sec-intro"
              className="p-2 rounded bg-stone-950/60 hover:bg-stone-800/80 border border-stone-800/70 text-amber-300 transition-colors flex items-center gap-2 font-bold sm:col-span-2"
            >
              <FileText className="w-3.5 h-3.5 shrink-0" />
              <span>{parsed.introTitle}</span>
            </a>
            {parsed.investigations.map((inv) => (
              <a
                key={inv.number}
                href={`#adv-sec-${inv.number}`}
                className="p-2 rounded bg-stone-950/60 hover:bg-stone-800/80 border border-stone-800/70 text-stone-300 hover:text-amber-300 transition-colors flex items-start gap-2"
              >
                <span className="font-mono font-bold text-amber-500 shrink-0">
                  {String(inv.number).padStart(2, '0')}.
                </span>
                <span className="leading-snug line-clamp-2">{inv.question}</span>
              </a>
            ))}
            <a
              href="#adv-sec-conclusion"
              className="p-2 rounded bg-amber-950/30 hover:bg-amber-900/40 border border-amber-700/50 text-amber-300 transition-colors flex items-center gap-2 font-bold"
            >
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>{parsed.conclusionTitle}</span>
            </a>
            <a
              href="#adv-sec-bibliography"
              className="p-2 rounded bg-amber-950/30 hover:bg-amber-900/40 border border-amber-700/50 text-amber-300 transition-colors flex items-center gap-2 font-bold"
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span>{parsed.bibliographyTitle}</span>
            </a>
            <a
              href="#adv-sec-primary"
              className="p-2 rounded bg-amber-950/30 hover:bg-amber-900/40 border border-amber-700/50 text-amber-300 transition-colors flex items-center gap-2 font-bold"
            >
              <ScrollText className="w-3.5 h-3.5 shrink-0" />
              <span>{parsed.primaryTitle}</span>
            </a>
            <a
              href="#adv-sec-digital"
              className="p-2 rounded bg-amber-950/30 hover:bg-amber-900/40 border border-amber-700/50 text-amber-300 transition-colors flex items-center gap-2 font-bold"
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <span>{parsed.digitalTitle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* INTRODUÇÃO */}
      <section
        id="adv-sec-intro"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-300 uppercase tracking-wide">
            {parsed.introTitle}
          </h2>
        </div>
        <div className="space-y-3.5">
          {parsed.introBlocks.map((b, bIdx) => renderBlock(b, bIdx))}
        </div>
      </section>

      {/* INVESTIGAÇÕES 01 - 10 */}
      {parsed.investigations.map((inv) => (
        <section
          key={inv.number}
          id={`adv-sec-${inv.number}`}
          className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
        >
          <div className="border-b border-stone-800 pb-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-amber-500 text-stone-950 font-mono text-xs font-black tracking-wider uppercase">
                {inv.label}
              </span>
            </div>
            <h2 className={`font-serif font-bold text-stone-100 leading-snug ${getFontSizeClass('heading')}`}>
              {inv.question}
            </h2>
          </div>

          <div className="space-y-5">
            {inv.subsections.map((sub, sIdx) => (
              <div
                key={sIdx}
                className="bg-[#121214] p-5 rounded-xl border border-stone-800/90 space-y-3"
              >
                <h3 className="font-serif font-bold text-amber-300 text-base sm:text-lg border-b border-stone-800/70 pb-2">
                  {sub.heading}
                </h3>
                <div className="space-y-3">
                  {sub.blocks.map((b, bIdx) => renderBlock(b, bIdx))}
                </div>
              </div>
            ))}

            {inv.trailingBlocks.length > 0 && (
              <div className="space-y-3">
                {inv.trailingBlocks.map((b, bIdx) => renderBlock(b, bIdx))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CONCLUSÃO GERAL */}
      <section
        id="adv-sec-conclusion"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-amber-600/50 space-y-4 shadow-xl"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-300 uppercase tracking-wide">
            {parsed.conclusionTitle}
          </h2>
        </div>
        <div className="space-y-3.5">
          {parsed.conclusionBlocks.map((b, idx) => renderBlock(b, idx))}
        </div>
      </section>

      {/* BIBLIOGRAFIA GERAL DA INVESTIGAÇÃO AVANÇADA */}
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
              <div className="space-y-2 font-serif text-xs sm:text-sm text-stone-300 leading-relaxed">
                {sub.entries.map((entry, eIdx) => (
                  <p key={eIdx} dangerouslySetInnerHTML={{ __html: formatInline(entry) }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTOS PRIMÁRIOS PARA CONSULTA */}
      <section
        id="adv-sec-primary"
        className="scroll-mt-24 bg-[#121214] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <ScrollText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-300 uppercase tracking-wide">
            {parsed.primaryTitle}
          </h2>
        </div>
        <div className="space-y-3">
          {parsed.primaryBlocks.map((b, idx) => renderBlock(b, idx))}
        </div>
      </section>

      {/* FONTES DIGITAIS E REPOSITÓRIOS DE CONSULTA */}
      <section
        id="adv-sec-digital"
        className="scroll-mt-24 bg-[#121214] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <Globe className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-300 uppercase tracking-wide">
            {parsed.digitalTitle}
          </h2>
        </div>
        <div className="space-y-3">
          {parsed.digitalBlocks.map((b, idx) => renderBlock(b, idx))}
        </div>

        {parsed.methodologyNote && (
          <div
            id="adv-sec-methodology"
            className="scroll-mt-24 mt-6 bg-amber-950/25 border border-amber-600/40 p-4 sm:p-5 rounded-xl flex items-start gap-3"
          >
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p
              className={`font-serif text-stone-200 leading-relaxed text-justify ${getFontSizeClass('body')}`}
              dangerouslySetInnerHTML={{ __html: formatInline(parsed.methodologyNote) }}
            />
          </div>
        )}
      </section>
    </article>
  );
};
