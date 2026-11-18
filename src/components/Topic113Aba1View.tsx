import React, { useMemo, useState } from 'react';
import {
  BookOpenCheck,
  Copy,
  Check,
  BookmarkCheck,
  ArrowRight,
} from 'lucide-react';
import { RAW_ADAM_SMITH_ABA1 } from '../data/collections/chapter_12_adam_smith_content';
import { AdamSmithTabId } from '../data/collections/chapter_12_adam_smith_tabs';

interface Topic113Aba1ViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
  onSelectTab: (tab: AdamSmithTabId) => void;
}

interface SubSectionBlock {
  heading?: string;
  blocks: ContentBlock[];
}

type ContentBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'ordered'; items: string[] };

interface MainSection {
  id: string;
  heading: string;
  subsections: SubSectionBlock[];
}

interface ParsedAba1 {
  title: string;
  chairLabel: string;
  collectionLabel: string;
  sections: MainSection[];
  refsHeading: string;
  refsSubsections: SubSectionBlock[];
}

function stripMdBold(text: string): string {
  return text.trim().replace(/^\*\*|\*\*$/g, '').trim();
}

function parseContentLines(lines: string[]): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ kind: 'bullets', items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim());
        i++;
      }
      blocks.push({ kind: 'ordered', items });
      continue;
    }

    blocks.push({ kind: 'paragraph', text: line });
    i++;
  }

  return blocks;
}

function parseAba1(raw: string): ParsedAba1 {
  const normalized = raw.replace(/\r\n/g, '\n').trim();
  const lines = normalized.split('\n');

  const title = lines[0].replace(/^#\s+/, '').trim();
  const chairLabel = stripMdBold(lines[2] || '');
  const collectionLabel = stripMdBold(lines[3] || '');

  const bodyLines = lines.slice(4);
  const refsLineIdx = bodyLines.findIndex((l) => l.trim().startsWith('### Referências'));
  const mainBodyLines = refsLineIdx >= 0 ? bodyLines.slice(0, refsLineIdx) : bodyLines;
  const refsLines = refsLineIdx >= 0 ? bodyLines.slice(refsLineIdx) : [];

  const mainChunks = mainBodyLines
    .join('\n')
    .trim()
    .split(/\n(?=##\s+)/)
    .map((c) => c.trim())
    .filter(Boolean);

  const sections: MainSection[] = mainChunks.map((chunk, idx) => {
    const chunkLines = chunk.split('\n');
    const heading = chunkLines[0].replace(/^##\s+/, '').trim();
    const rest = chunkLines.slice(1).join('\n').trim();

    const subChunks = rest
      .split(/\n(?=###\s+)/)
      .map((s) => s.trim())
      .filter(Boolean);

    const subsections: SubSectionBlock[] = subChunks.map((sub) => {
      const subLines = sub.split('\n');
      if (subLines[0].startsWith('### ')) {
        return {
          heading: subLines[0].replace(/^###\s+/, '').trim(),
          blocks: parseContentLines(subLines.slice(1)),
        };
      }
      return {
        blocks: parseContentLines(subLines),
      };
    });

    const numMatch = heading.match(/^(\d+)\./);
    const id = `smith-aba1-sec-${numMatch ? numMatch[1] : idx + 1}`;

    return { id, heading, subsections };
  });

  const refsHeading = refsLines[0] ? refsLines[0].replace(/^###\s+/, '').trim() : '';
  const refsBlocks = parseContentLines(refsLines.slice(1));

  return {
    title,
    chairLabel,
    collectionLabel,
    sections,
    refsHeading,
    refsSubsections: [{ blocks: refsBlocks }],
  };
}

function renderInlineMarkdown(text: string): React.ReactNode[] {
  // Split by **bold** or *italic*
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

  const renderBlocks = (blocks: ContentBlock[]) =>
    blocks.map((blk, bIdx) => {
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

      if (blk.kind === 'ordered') {
        return (
          <div
            key={bIdx}
            className={`space-y-2 bg-[#121214] border border-stone-800 border-l-4 border-l-amber-500 p-4 sm:p-5 rounded-r-lg font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}
          >
            {blk.items.map((item, iIdx) => (
              <p key={iIdx}>{renderInlineMarkdown(item)}</p>
            ))}
          </div>
        );
      }

      return (
        <p key={bIdx} className="leading-relaxed">
          {renderInlineMarkdown(blk.text)}
        </p>
      );
    });

  if (isEmpty) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto w-full box-border overflow-hidden">
        <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 text-center">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
              Coleção II · Nº 12 · ABA 1 — Vida e Contexto Histórico
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-2">
              Adam Smith e o pensamento econômico
            </h2>
          </div>
          <div className="bg-[#121214] border border-stone-800 p-8 rounded-xl space-y-3">
            <p className="text-stone-400 font-serif italic text-sm sm:text-base">
              Conteúdo da Aba 1 (Vida e Contexto Histórico) excluído conforme solicitação.
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
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                {parsed.collectionLabel}
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                Coleção II · Nº 12 · ABA 1 — Vida e Contexto Histórico
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 leading-snug uppercase tracking-tight pt-1">
              {parsed.title}
            </h2>
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

        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
          <BookOpenCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{parsed.chairLabel}</span>
        </div>
      </div>

      {/* SEÇÕES 1 A 8 */}
      {parsed.sections.map((section, idx) => {
        const isLast = idx === parsed.sections.length - 1;
        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border ${
              isLast ? 'border-amber-600/40' : 'border-stone-800'
            } space-y-5 shadow-md`}
          >
            <h3
              className={`font-serif font-bold text-amber-300 border-b border-stone-800 pb-3 ${getFontSizeClass('heading')}`}
            >
              {section.heading}
            </h3>

            <div className="space-y-5">
              {section.subsections.map((sub, sIdx) =>
                sub.heading ? (
                  <article
                    key={sIdx}
                    className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3"
                  >
                    <h4
                      className={`font-serif font-bold text-stone-100 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}
                    >
                      {sub.heading}
                    </h4>
                    <div
                      className={`space-y-3.5 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}
                    >
                      {renderBlocks(sub.blocks)}
                    </div>
                  </article>
                ) : (
                  <div
                    key={sIdx}
                    className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}
                  >
                    {renderBlocks(sub.blocks)}
                  </div>
                )
              )}
            </div>
          </section>
        );
      })}

      {/* REFERÊNCIAS BIBLIOGRÁFICAS ESSENCIAIS */}
      {parsed.refsHeading && (
        <section
          id="smith-aba1-refs"
          className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-5 shadow-md"
        >
          <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
            <BookmarkCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <h3 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>
              {parsed.refsHeading}
            </h3>
          </div>

          <div
            className={`space-y-4 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
          >
            {parsed.refsSubsections.map((sub, sIdx) => (
              <React.Fragment key={sIdx}>{renderBlocks(sub.blocks)}</React.Fragment>
            ))}
          </div>
        </section>
      )}

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
