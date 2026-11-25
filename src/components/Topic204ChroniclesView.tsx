import React, { useMemo, useState } from 'react';
import {
  Copy,
  Check,
  ScrollText,
  BookOpen,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { RAW_CHRONICLES_204 } from '../data/chronicles/chronicles_guerras_mundiais_04';

interface Topic204ChroniclesViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

interface ChronicleItem204 {
  id: string;
  label: string;
  title: string;
  metaLines: string[];
  paragraphs: string[];
  interpretationHeading: string;
  interpretationParagraphs: string[];
}

interface ParsedChronicles204 {
  mainTitle: string;
  subtitle: string;
  collectionLabel: string;
  blockLabel: string;
  monographLabel: string;
  presentationHeading: string;
  presentationParagraphs: string[];
  chronicles: ChronicleItem204[];
  closingHeading: string;
  closingSubtitle: string;
  closingParagraphs: string[];
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

function parseChronicles204(raw: string): ParsedChronicles204 {
  const blocks = raw
    .replace(/\r\n/g, '\n')
    .trim()
    .split(/\n---\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  // Chunk 0: Header
  const headerLines = (blocks[0] || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const mainTitle = (headerLines.find((l) => l.startsWith('# ')) || '# CRÔNICAS')
    .slice(2)
    .trim();
  const subtitle = (headerLines.find((l) => l.startsWith('## ')) || '')
    .slice(3)
    .trim();
  const metaHeaderLines = headerLines
    .filter((l) => !l.startsWith('#'))
    .map((l) => l.replace(/^\*\*|\*\*$/g, '').trim());

  const collectionLabel = metaHeaderLines[0] || '';
  const blockLabel = metaHeaderLines[1] || '';
  const monographLabel = metaHeaderLines[2] || '';

  // Chunk 1: Apresentação
  const presLines = (blocks[1] || '').split('\n');
  const presHeadingLine = presLines.find((l) => l.trim().startsWith('# ')) || '# APRESENTAÇÃO';
  const presentationHeading = presHeadingLine.trim().slice(2).trim();
  const presBody = presLines
    .slice(presLines.indexOf(presHeadingLine) + 1)
    .join('\n')
    .trim();
  const presentationParagraphs = presBody
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  // Chunks 2..N-2: Crônicas I..XII
  const chronicles: ChronicleItem204[] = [];
  for (let i = 2; i < blocks.length - 1; i++) {
    const lines = blocks[i].split('\n');
    const labelLine = lines.find((l) => l.trim().startsWith('# ')) || '';
    const titleLine = lines.find((l) => l.trim().startsWith('## ')) || '';
    const label = labelLine.trim().slice(2).trim();
    const title = titleLine.trim().slice(3).trim();

    const startIdx = Math.max(lines.indexOf(labelLine), lines.indexOf(titleLine)) + 1;
    const bodyText = lines.slice(startIdx).join('\n').trim();
    const bodyChunks = bodyText
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean);

    let metaLines: string[] = [];
    let restChunks = bodyChunks;
    if (bodyChunks.length > 0 && bodyChunks[0].startsWith('**Período:**')) {
      metaLines = bodyChunks[0]
        .split('\n')
        .map((m) => m.trim())
        .filter(Boolean);
      restChunks = bodyChunks.slice(1);
    }

    const interpIdx = restChunks.findIndex(
      (c) => c === '**Interpretação histórica**' || c.replace(/\*\*/g, '').trim() === 'Interpretação histórica'
    );

    const paragraphs = interpIdx >= 0 ? restChunks.slice(0, interpIdx) : restChunks;
    const interpretationHeading =
      interpIdx >= 0 ? restChunks[interpIdx].replace(/^\*\*|\*\*$/g, '').trim() : '';
    const interpretationParagraphs = interpIdx >= 0 ? restChunks.slice(interpIdx + 1) : [];

    chronicles.push({
      id: `cronica-${i - 1}`,
      label,
      title,
      metaLines,
      paragraphs,
      interpretationHeading,
      interpretationParagraphs,
    });
  }

  // Last chunk: Síntese Final das Crônicas
  const closingLines = (blocks[blocks.length - 1] || '').split('\n');
  const closingH1 = closingLines.find((l) => l.trim().startsWith('# ')) || '';
  const closingH2 = closingLines.find((l) => l.trim().startsWith('## ')) || '';
  const closingHeading = closingH1.trim().slice(2).trim();
  const closingSubtitle = closingH2.trim().slice(3).trim();
  const closingStartIdx = Math.max(closingLines.indexOf(closingH1), closingLines.indexOf(closingH2)) + 1;
  const closingBody = closingLines.slice(closingStartIdx).join('\n').trim();
  const closingParagraphs = closingBody
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return {
    mainTitle,
    subtitle,
    collectionLabel,
    blockLabel,
    monographLabel,
    presentationHeading,
    presentationParagraphs,
    chronicles,
    closingHeading,
    closingSubtitle,
    closingParagraphs,
  };
}

export const Topic204ChroniclesView: React.FC<Topic204ChroniclesViewProps> = ({
  getFontSizeClass,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const parsed = useMemo(() => parseChronicles204(RAW_CHRONICLES_204), []);

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_CHRONICLES_204);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-800 pb-4">
          <div className="space-y-2">
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
            onClick={handleCopy}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
            title="Copiar texto integral da Aba 3 Crônicas"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Texto Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Aba Crônicas na Íntegra</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* APRESENTAÇÃO */}
      <section
        id="cronica-apresentacao"
        className="scroll-mt-24 bg-[#161619] border border-amber-600/40 p-5 sm:p-7 rounded-xl shadow-md space-y-4"
      >
        <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
          <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
          <h2
            className={`font-serif font-bold text-amber-300 uppercase tracking-wide ${getFontSizeClass('heading')}`}
          >
            {parsed.presentationHeading}
          </h2>
        </div>
        <div
          className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}
        >
          {parsed.presentationParagraphs.map((paragraph, idx) => (
            <p key={idx}>{renderInlineMarkdown(paragraph)}</p>
          ))}
        </div>
      </section>

      {/* CRÔNICAS I A XII */}
      <div className="space-y-6">
        {parsed.chronicles.map((chronicle) => (
          <article
            key={chronicle.id}
            id={chronicle.id}
            className="scroll-mt-24 bg-[#161619] border border-stone-800 p-5 sm:p-7 rounded-xl shadow-md space-y-5"
          >
            <div className="border-b border-stone-800 pb-4 space-y-2">
              <div className="flex items-center gap-2">
                <ScrollText className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                  {chronicle.label}
                </span>
              </div>
              <h2
                className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}
              >
                {chronicle.title}
              </h2>
              {chronicle.metaLines.length > 0 && (
                <div className="flex flex-col gap-1 pt-1 text-xs font-mono text-stone-300">
                  {chronicle.metaLines.map((line, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-1.5">
                      {mIdx === 0 ? (
                        <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      ) : (
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      )}
                      <span>{renderInlineMarkdown(line)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              className={`font-serif text-stone-300 text-justify leading-relaxed space-y-4 ${getFontSizeClass('body')}`}
            >
              {chronicle.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{renderInlineMarkdown(paragraph)}</p>
              ))}
            </div>

            {chronicle.interpretationHeading && chronicle.interpretationParagraphs.length > 0 && (
              <div className="bg-[#121214] border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-lg space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{chronicle.interpretationHeading}</span>
                </div>
                <div
                  className={`font-serif text-stone-200 text-justify leading-relaxed space-y-3 ${getFontSizeClass('body')}`}
                >
                  {chronicle.interpretationParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{renderInlineMarkdown(paragraph)}</p>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* SÍNTESE FINAL DAS CRÔNICAS */}
      <section
        id="cronica-nota"
        className="scroll-mt-24 bg-[#161619] border border-amber-600/40 p-5 sm:p-7 rounded-xl shadow-md space-y-4"
      >
        <div className="border-b border-stone-800 pb-3 space-y-1">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <h2
              className={`font-serif font-bold text-amber-300 uppercase tracking-wide ${getFontSizeClass('heading')}`}
            >
              {parsed.closingHeading}
            </h2>
          </div>
          {parsed.closingSubtitle && (
            <p className="font-serif font-semibold text-stone-200 text-sm sm:text-base pl-7">
              {parsed.closingSubtitle}
            </p>
          )}
        </div>
        <div
          className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}
        >
          {parsed.closingParagraphs.map((paragraph, idx) => (
            <p key={idx}>{renderInlineMarkdown(paragraph)}</p>
          ))}
        </div>
      </section>
    </div>
  );
};
