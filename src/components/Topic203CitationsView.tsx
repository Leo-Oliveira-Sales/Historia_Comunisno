import React, { useMemo, useState } from 'react';
import {
  Copy,
  Check,
  FileText,
  Quote,
  Camera,
  Globe,
  HelpCircle,
  BookmarkCheck,
  BookOpen,
  ShieldCheck,
} from 'lucide-react';
import {
  RAW_CITATIONS_203,
  RAW_CITATIONS_203_PART2,
} from '../data/citations/citations_guerras_mundiais_03';

interface Topic203CitationsViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

type MdBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'numbered'; items: string[] }
  | { kind: 'quote'; text: string };

interface DocSubsection {
  heading: string;
  blocks: MdBlock[];
}

interface ParsedDocument203 {
  id: string;
  docNumberHeading: string;
  titleHeading: string;
  metadata: ({ kind: 'line'; text: string } | { kind: 'bullets'; items: string[] })[];
  subsections: DocSubsection[];
  footerLines: string[];
}

interface ParsedImageEntry {
  heading: string;
  blocks: MdBlock[];
}

interface ParsedCompEntry {
  heading: string;
  blocks: MdBlock[];
}

interface ParsedQuestionEntry {
  heading: string;
  paragraphs: string[];
}

interface ParsedCitations203 {
  bannerHeading: string;
  bannerSubtitle: string;
  apresentacaoHeading: string;
  apresentacaoBlocks: MdBlock[];
  documents: ParsedDocument203[];
  iconografiaHeading: string;
  iconografiaIntro: string[];
  images: ParsedImageEntry[];
  complementaresHeading: string;
  complementares: ParsedCompEntry[];
  questoesHeading: string;
  questoesIntro: string[];
  questoes: ParsedQuestionEntry[];
  referenciasHeading: string;
  referencias: string[];
  conclusaoHeading: string;
  conclusaoParagraphs: string[];
  closingLines: string[];
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
        <strong key={key++} className="font-semibold text-stone-100">
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

function parseGenericBlocks(rawLines: string[]): MdBlock[] {
  const blocks: MdBlock[] = [];
  let i = 0;

  while (i < rawLines.length) {
    const trimmed = rawLines[i].trim();
    if (!trimmed) {
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

function parseMetadataLines(
  rawLines: string[]
): ({ kind: 'line'; text: string } | { kind: 'bullets'; items: string[] })[] {
  const items: ({ kind: 'line'; text: string } | { kind: 'bullets'; items: string[] })[] = [];
  let i = 0;

  while (i < rawLines.length) {
    const trimmed = rawLines[i].trim();
    if (!trimmed) {
      i++;
      continue;
    }
    if (trimmed.startsWith('- ')) {
      const bullets: string[] = [];
      while (i < rawLines.length && rawLines[i].trim().startsWith('- ')) {
        bullets.push(rawLines[i].trim().slice(2));
        i++;
      }
      items.push({ kind: 'bullets', items: bullets });
      continue;
    }
    items.push({ kind: 'line', text: trimmed });
    i++;
  }

  return items;
}

function parseDocumentChunk(chunk: string, idx: number): ParsedDocument203 {
  const lines = chunk.split('\n');
  let cursor = 0;

  let docNumberHeading = '';
  let titleHeading = '';

  while (cursor < lines.length) {
    const t = lines[cursor].trim();
    if (t.startsWith('# ')) {
      docNumberHeading = t.slice(2).trim();
      cursor++;
      break;
    }
    cursor++;
  }

  while (cursor < lines.length) {
    const t = lines[cursor].trim();
    if (t.startsWith('## ')) {
      titleHeading = t.slice(3).trim();
      cursor++;
      break;
    }
    cursor++;
  }

  const firstSubIdx = lines.findIndex((l, i) => i >= cursor && l.trim().startsWith('### '));
  const metaSlice = firstSubIdx >= 0 ? lines.slice(cursor, firstSubIdx) : lines.slice(cursor);
  const metadata = parseMetadataLines(metaSlice);

  const restLines = firstSubIdx >= 0 ? lines.slice(firstSubIdx) : [];
  const rawSubs: { heading: string; lines: string[] }[] = [];
  let curSub: { heading: string; lines: string[] } | null = null;

  for (const line of restLines) {
    const t = line.trim();
    if (t.startsWith('### ')) {
      if (curSub) rawSubs.push(curSub);
      curSub = { heading: t.slice(4).trim(), lines: [] };
    } else if (curSub) {
      curSub.lines.push(line);
    }
  }
  if (curSub) rawSubs.push(curSub);

  const footerPrefixes = [
    '**Importância documental:**',
    '**Referência arquivística:**',
    '**Referência:**',
    '**Observação:**',
  ];
  const footerLines: string[] = [];

  if (rawSubs.length > 0) {
    const lastSub = rawSubs[rawSubs.length - 1];
    const keptLines: string[] = [];
    for (const l of lastSub.lines) {
      const t = l.trim();
      if (footerPrefixes.some((p) => t.startsWith(p))) {
        footerLines.push(t);
      } else {
        keptLines.push(l);
      }
    }
    lastSub.lines = keptLines;
  }

  const subsections: DocSubsection[] = rawSubs.map((s) => ({
    heading: s.heading,
    blocks: parseGenericBlocks(s.lines),
  }));

  const docNum = String(idx + 1).padStart(2, '0');
  return {
    id: `cit-doc-${docNum}`,
    docNumberHeading,
    titleHeading,
    metadata,
    subsections,
    footerLines,
  };
}

function parseCitations203(raw: string): ParsedCitations203 {
  const chunks = raw
    .split(/\n---\n/)
    .map((c) => c.trim())
    .filter(Boolean);

  // Chunk 0: Banner + Apresentação Documental
  const chunk0Lines = chunks[0].split('\n');
  let bannerHeading = '';
  let bannerSubtitle = '';
  let apresentacaoHeading = '';
  const apresentacaoLines: string[] = [];
  let inApresentacao = false;

  for (const line of chunk0Lines) {
    const t = line.trim();
    if (!inApresentacao) {
      if (t.startsWith('# ')) {
        bannerHeading = t.slice(2).trim();
      } else if (t.startsWith('## ')) {
        bannerSubtitle = t.slice(3).trim();
      } else if (t.startsWith('### ')) {
        apresentacaoHeading = t.slice(4).trim();
        inApresentacao = true;
      }
    } else {
      apresentacaoLines.push(line);
    }
  }

  const apresentacaoBlocks = parseGenericBlocks(apresentacaoLines);

  // Chunks 1..12: DOCUMENTO 01 .. DOCUMENTO 12
  const docChunks = chunks.filter((c) => c.startsWith('# DOCUMENTO '));
  const documents = docChunks.map((c, idx) => parseDocumentChunk(c, idx));

  // Dossiê Iconográfico
  const iconChunk = chunks.find((c) => c.startsWith('# DOSSIÊ ICONOGRÁFICO')) || '';
  const iconLines = iconChunk.split('\n');
  let iconografiaHeading = '';
  const iconografiaIntro: string[] = [];
  const images: ParsedImageEntry[] = [];
  let curImg: { heading: string; lines: string[] } | null = null;

  for (const line of iconLines) {
    const t = line.trim();
    if (t.startsWith('# ')) {
      iconografiaHeading = t.slice(2).trim();
    } else if (t.startsWith('## ')) {
      if (curImg) images.push({ heading: curImg.heading, blocks: parseGenericBlocks(curImg.lines) });
      curImg = { heading: t.slice(3).trim(), lines: [] };
    } else if (curImg) {
      curImg.lines.push(line);
    } else if (t) {
      iconografiaIntro.push(t);
    }
  }
  if (curImg) images.push({ heading: curImg.heading, blocks: parseGenericBlocks(curImg.lines) });

  // Documentos Complementares para Pesquisa
  const compChunk = chunks.find((c) => c.startsWith('# DOCUMENTOS COMPLEMENTARES')) || '';
  const compLines = compChunk.split('\n');
  let complementaresHeading = '';
  const complementares: ParsedCompEntry[] = [];
  let curComp: { heading: string; lines: string[] } | null = null;

  for (const line of compLines) {
    const t = line.trim();
    if (t.startsWith('# ')) {
      complementaresHeading = t.slice(2).trim();
    } else if (t.startsWith('## ')) {
      if (curComp) complementares.push({ heading: curComp.heading, blocks: parseGenericBlocks(curComp.lines) });
      curComp = { heading: t.slice(3).trim(), lines: [] };
    } else if (curComp) {
      curComp.lines.push(line);
    }
  }
  if (curComp) complementares.push({ heading: curComp.heading, blocks: parseGenericBlocks(curComp.lines) });

  // Questões de Análise Documental
  const qChunk = chunks.find((c) => c.startsWith('# QUESTÕES DE ANÁLISE DOCUMENTAL')) || '';
  const qLines = qChunk.split('\n');
  let questoesHeading = '';
  const questoesIntro: string[] = [];
  const questoes: ParsedQuestionEntry[] = [];
  let curQ: ParsedQuestionEntry | null = null;

  for (const line of qLines) {
    const t = line.trim();
    if (t.startsWith('# ')) {
      questoesHeading = t.slice(2).trim();
    } else if (t.startsWith('### ')) {
      if (curQ) questoes.push(curQ);
      curQ = { heading: t.slice(4).trim(), paragraphs: [] };
    } else if (curQ && t) {
      curQ.paragraphs.push(t);
    } else if (!curQ && t) {
      questoesIntro.push(t);
    }
  }
  if (curQ) questoes.push(curQ);

  // Referências Documentais
  const refChunk = chunks.find((c) => c.startsWith('# REFERÊNCIAS DOCUMENTAIS')) || '';
  const refLines = refChunk.split('\n');
  let referenciasHeading = '';
  const referencias: string[] = [];
  for (const line of refLines) {
    const t = line.trim();
    if (t.startsWith('# ')) {
      referenciasHeading = t.slice(2).trim();
    } else if (t) {
      referencias.push(t);
    }
  }

  // Conclusão da Aba 4
  const concChunk = chunks.find((c) => c.startsWith('# CONCLUSÃO DA ABA 4')) || '';
  const concLines = concChunk.split('\n');
  let conclusaoHeading = '';
  const conclusaoParagraphs: string[] = [];
  for (const line of concLines) {
    const t = line.trim();
    if (t.startsWith('# ')) {
      conclusaoHeading = t.slice(2).trim();
    } else if (t) {
      conclusaoParagraphs.push(t);
    }
  }

  // Closing block
  const closingChunk = chunks.find((c) => c.startsWith('**FIM DA ABA 4')) || '';
  const closingLines = closingChunk
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  return {
    bannerHeading,
    bannerSubtitle,
    apresentacaoHeading,
    apresentacaoBlocks,
    documents,
    iconografiaHeading,
    iconografiaIntro,
    images,
    complementaresHeading,
    complementares,
    questoesHeading,
    questoesIntro,
    questoes,
    referenciasHeading,
    referencias,
    conclusaoHeading,
    conclusaoParagraphs,
    closingLines,
  };
}

interface ParsedAuthor203 {
  heading: string;
  metadata: string[];
  subsections: DocSubsection[];
}

interface ParsedPart2Section {
  heading: string;
  blocks: MdBlock[];
}

interface ParsedCitations203Part2 {
  bannerHeading: string;
  bannerSubtitle: string;
  parte2Heading: string;
  sec1Heading: string;
  sec1Blocks: MdBlock[];
  sec2Heading: string;
  authors: ParsedAuthor203[];
  sec3Heading: string;
  sec3Intro: string[];
  sec3Citations: DocSubsection[];
  sec4Heading: string;
  sec4Themes: ParsedPart2Section[];
  sec5Heading: string;
  sec5Entries: string[];
  sec6Heading: string;
  sec6Blocks: MdBlock[];
  sec7Heading: string;
  sec7Blocks: MdBlock[];
}

function parseCitations203Part2(raw: string): ParsedCitations203Part2 {
  const chunks = raw
    .split(/\n---\n/)
    .map((c) => c.trim())
    .filter(Boolean);

  // Chunk 0: Header + 1. APRESENTAÇÃO
  const c0Lines = chunks[0].split('\n');
  let bannerHeading = '';
  let bannerSubtitle = '';
  let parte2Heading = '';
  let sec1Heading = '';
  const sec1Lines: string[] = [];
  let inSec1 = false;

  for (const line of c0Lines) {
    const t = line.trim();
    if (!inSec1) {
      if (t.startsWith('# CITAÇÕES')) {
        bannerHeading = t.slice(2).trim();
      } else if (t.startsWith('## MONOGRAFIA')) {
        bannerSubtitle = t.slice(3).trim();
      } else if (t.startsWith('# PARTE II')) {
        parte2Heading = t.slice(2).trim();
      } else if (t.startsWith('## 1.')) {
        sec1Heading = t.slice(3).trim();
        inSec1 = true;
      }
    } else {
      sec1Lines.push(line);
    }
  }
  const sec1Blocks = parseGenericBlocks(sec1Lines);

  // Chunks 1..9: 2. AUTORES E OBRAS FUNDAMENTAIS
  let sec2Heading = '';
  const authorChunksRaw = chunks.slice(1, 10);
  const authors: ParsedAuthor203[] = authorChunksRaw.map((chunk) => {
    const lines = chunk.split('\n');
    let heading = '';
    const metadata: string[] = [];
    const rawSubs: { heading: string; lines: string[] }[] = [];
    let curSub: { heading: string; lines: string[] } | null = null;

    for (const line of lines) {
      const t = line.trim();
      if (t.startsWith('# 2.')) {
        sec2Heading = t.slice(2).trim();
      } else if (t.startsWith('## ')) {
        heading = t.slice(3).trim();
      } else if (t.startsWith('### ')) {
        if (curSub) rawSubs.push(curSub);
        curSub = { heading: t.slice(4).trim(), lines: [] };
      } else if (curSub) {
        curSub.lines.push(line);
      } else if (t) {
        metadata.push(t);
      }
    }
    if (curSub) rawSubs.push(curSub);

    return {
      heading,
      metadata,
      subsections: rawSubs.map((s) => ({
        heading: s.heading,
        blocks: parseGenericBlocks(s.lines),
      })),
    };
  });

  // Chunk 10: 3. CITAÇÕES DIRETAS VERIFICÁVEIS
  const c3Lines = chunks[10].split('\n');
  let sec3Heading = '';
  const sec3Intro: string[] = [];
  const rawSec3Subs: { heading: string; lines: string[] }[] = [];
  let curSec3Sub: { heading: string; lines: string[] } | null = null;

  for (const line of c3Lines) {
    const t = line.trim();
    if (t.startsWith('# ')) {
      sec3Heading = t.slice(2).trim();
    } else if (t.startsWith('### ')) {
      if (curSec3Sub) rawSec3Subs.push(curSec3Sub);
      curSec3Sub = { heading: t.slice(4).trim(), lines: [] };
    } else if (curSec3Sub) {
      curSec3Sub.lines.push(line);
    } else if (t) {
      sec3Intro.push(t);
    }
  }
  if (curSec3Sub) rawSec3Subs.push(curSec3Sub);

  const sec3Citations: DocSubsection[] = rawSec3Subs.map((s) => ({
    heading: s.heading,
    blocks: parseGenericBlocks(s.lines),
  }));

  // Chunk 11: 4. CITAÇÕES INDIRETAS ORGANIZADAS POR TEMA DO CAPÍTULO
  const c4Lines = chunks[11].split('\n');
  let sec4Heading = '';
  const rawSec4Themes: { heading: string; lines: string[] }[] = [];
  let curTheme: { heading: string; lines: string[] } | null = null;

  for (const line of c4Lines) {
    const t = line.trim();
    if (t.startsWith('# ')) {
      sec4Heading = t.slice(2).trim();
    } else if (t.startsWith('## ')) {
      if (curTheme) rawSec4Themes.push(curTheme);
      curTheme = { heading: t.slice(3).trim(), lines: [] };
    } else if (curTheme) {
      curTheme.lines.push(line);
    }
  }
  if (curTheme) rawSec4Themes.push(curTheme);

  const sec4Themes: ParsedPart2Section[] = rawSec4Themes.map((th) => ({
    heading: th.heading,
    blocks: parseGenericBlocks(th.lines),
  }));

  // Chunk 12: 5. REFERÊNCIAS BIBLIOGRÁFICAS
  const c5Lines = chunks[12].split('\n');
  let sec5Heading = '';
  const sec5Entries: string[] = [];
  for (const line of c5Lines) {
    const t = line.trim();
    if (t.startsWith('# ')) {
      sec5Heading = t.slice(2).trim();
    } else if (t) {
      sec5Entries.push(t);
    }
  }

  // Chunk 13: 6. ORIENTAÇÃO DE UTILIZAÇÃO NO CAPÍTULO ACADÊMICO
  const c6Lines = chunks[13].split('\n');
  let sec6Heading = '';
  const sec6BodyLines: string[] = [];
  for (const line of c6Lines) {
    const t = line.trim();
    if (t.startsWith('# ')) {
      sec6Heading = t.slice(2).trim();
    } else {
      sec6BodyLines.push(line);
    }
  }
  const sec6Blocks = parseGenericBlocks(sec6BodyLines);

  // Chunk 14: 7. NOTA FINAL DE RIGOR ACADÊMICO
  const c7Lines = chunks[14].split('\n');
  let sec7Heading = '';
  const sec7BodyLines: string[] = [];
  for (const line of c7Lines) {
    const t = line.trim();
    if (t.startsWith('# ')) {
      sec7Heading = t.slice(2).trim();
    } else {
      sec7BodyLines.push(line);
    }
  }
  const sec7Blocks = parseGenericBlocks(sec7BodyLines);

  return {
    bannerHeading,
    bannerSubtitle,
    parte2Heading,
    sec1Heading,
    sec1Blocks,
    sec2Heading,
    authors,
    sec3Heading,
    sec3Intro,
    sec3Citations,
    sec4Heading,
    sec4Themes,
    sec5Heading,
    sec5Entries,
    sec6Heading,
    sec6Blocks,
    sec7Heading,
    sec7Blocks,
  };
}

export const Topic203CitationsView: React.FC<Topic203CitationsViewProps> = ({
  getFontSizeClass,
}) => {
  const [copiedFull, setCopiedFull] = useState(false);

  const parsed = useMemo(() => parseCitations203(RAW_CITATIONS_203), []);
  const parsedPart2 = useMemo(() => parseCitations203Part2(RAW_CITATIONS_203_PART2), []);

  const handleCopyFull = () => {
    navigator.clipboard.writeText(`${RAW_CITATIONS_203}\n\n---\n\n${RAW_CITATIONS_203_PART2}`);
    setCopiedFull(true);
    setTimeout(() => setCopiedFull(false), 2000);
  };

  const renderBlocks = (blocks: MdBlock[], textClass = 'text-stone-300') =>
    blocks.map((blk, bIdx) => {
      if (blk.kind === 'bullets') {
        return (
          <ul
            key={bIdx}
            className={`space-y-1.5 pl-4 border-l border-amber-500/30 font-serif ${textClass} leading-relaxed ${getFontSizeClass('body')}`}
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
          <div
            key={bIdx}
            className={`space-y-1.5 pl-4 border-l border-stone-700 font-serif ${textClass} leading-relaxed ${getFontSizeClass('body')}`}
          >
            {blk.items.map((item, iIdx) => (
              <p key={iIdx}>{renderInlineMarkdown(item)}</p>
            ))}
          </div>
        );
      }

      if (blk.kind === 'quote') {
        return (
          <blockquote
            key={bIdx}
            className={`bg-stone-950/70 border border-stone-800/90 border-l-4 border-l-amber-500 p-4 rounded-r-lg font-serif italic text-stone-100 leading-relaxed ${getFontSizeClass('quote')}`}
          >
            {renderInlineMarkdown(blk.text)}
          </blockquote>
        );
      }

      const isMethodNote =
        blk.text.startsWith('**Nota metodológica:**') ||
        blk.text.startsWith('**Nota de rigor acadêmico:**');
      if (isMethodNote) {
        return (
          <div
            key={bIdx}
            className="bg-stone-950/60 border border-stone-800/90 border-l-4 border-l-amber-500/80 p-4 rounded-r-lg"
          >
            <p className={`font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}>
              {renderInlineMarkdown(blk.text)}
            </p>
          </div>
        );
      }

      return (
        <p
          key={bIdx}
          className={`font-serif ${textClass} text-justify leading-relaxed ${getFontSizeClass('body')}`}
        >
          {renderInlineMarkdown(blk.text)}
        </p>
      );
    });

  return (
    <div className="space-y-10 text-stone-200">
      {/* HEADER + APRESENTAÇÃO DOCUMENTAL */}
      <section
        id="cit-apresentacao"
        className="scroll-mt-24 bg-[#161619] border border-amber-600/40 rounded-xl p-6 sm:p-8 shadow-lg space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-stone-800 pb-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/15 text-amber-300 border border-amber-500/40 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                {parsed.bannerHeading}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 tracking-wide">
              {parsed.bannerSubtitle}
            </h1>
          </div>

          <button
            onClick={handleCopyFull}
            className="shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono uppercase tracking-wider bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-600/40 transition-colors cursor-pointer"
          >
            {copiedFull ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Texto Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar Aba Citações na Íntegra</span>
              </>
            )}
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-amber-400 shrink-0" />
            <h2 className="text-base sm:text-lg font-serif font-bold text-amber-300 uppercase tracking-wide">
              {parsed.apresentacaoHeading}
            </h2>
          </div>

          <div className="space-y-3">{renderBlocks(parsed.apresentacaoBlocks)}</div>
        </div>
      </section>

      {/* DOCUMENTOS 01 A 12 */}
      <section id="cit-docs" className="scroll-mt-24 space-y-6">
        <div className="space-y-6">
          {parsed.documents.map((doc) => (
            <article
              key={doc.id}
              id={doc.id}
              className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-5 shadow-md"
            >
              <div className="border-b border-stone-800 pb-4 space-y-2">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/15 text-amber-300 border border-amber-500/40 font-bold">
                  <Quote className="w-3.5 h-3.5" />
                  <span>{doc.docNumberHeading}</span>
                </div>
                <h2 className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}>
                  {doc.titleHeading}
                </h2>
              </div>

              {/* Metadata Box */}
              {doc.metadata.length > 0 && (
                <div className="bg-[#121214] border border-stone-800 rounded-lg p-4 space-y-1.5 font-mono text-xs text-stone-300">
                  {doc.metadata.map((m, mIdx) => {
                    if (m.kind === 'bullets') {
                      return (
                        <ul key={mIdx} className="pl-4 space-y-1 text-stone-300">
                          {m.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2">
                              <span className="text-amber-400 shrink-0">•</span>
                              <span>{renderInlineMarkdown(item)}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <div key={mIdx} className="leading-relaxed">
                        {renderInlineMarkdown(m.text)}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Document Subsections */}
              <div className="space-y-5">
                {doc.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-2.5">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                      {sub.heading}
                    </h3>
                    <div className="space-y-2.5">{renderBlocks(sub.blocks)}</div>
                  </div>
                ))}
              </div>

              {/* Footer Metadata (Importância documental, Referência, Observação) */}
              {doc.footerLines.length > 0 && (
                <div className="bg-stone-950/60 border border-stone-800/90 border-l-4 border-l-amber-500/80 p-4 rounded-r-lg space-y-2">
                  {doc.footerLines.map((fl, fIdx) => (
                    <p
                      key={fIdx}
                      className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
                    >
                      {renderInlineMarkdown(fl)}
                    </p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* DOSSIÊ ICONOGRÁFICO */}
      {parsed.iconografiaHeading && parsed.images.length > 0 && (
        <section
          id="cit-iconografia"
          className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
        >
          <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
            <Camera className="w-6 h-6 text-amber-400 shrink-0" />
            <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
              {parsed.iconografiaHeading}
            </h2>
          </div>

          <div className={`space-y-2 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
            {parsed.iconografiaIntro.map((p, idx) => (
              <p key={idx}>{renderInlineMarkdown(p)}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {parsed.images.map((img, iIdx) => (
              <article
                key={iIdx}
                className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3"
              >
                <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                  {img.heading}
                </h3>
                <div className="space-y-2.5">{renderBlocks(img.blocks)}</div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* DOCUMENTOS COMPLEMENTARES PARA PESQUISA */}
      <section
        id="cit-complementares"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <Globe className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsed.complementaresHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {parsed.complementares.map((comp, cIdx) => (
            <article
              key={cIdx}
              className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3"
            >
              <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                {comp.heading}
              </h3>
              <div className="space-y-2.5">{renderBlocks(comp.blocks)}</div>
            </article>
          ))}
        </div>
      </section>

      {/* QUESTÕES DE ANÁLISE DOCUMENTAL */}
      <section
        id="cit-questoes"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <HelpCircle className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsed.questoesHeading}
          </h2>
        </div>

        {parsed.questoesIntro.length > 0 && (
          <div className={`space-y-2 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
            {parsed.questoesIntro.map((p, idx) => (
              <p key={idx}>{renderInlineMarkdown(p)}</p>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {parsed.questoes.map((q, qIdx) => (
            <article
              key={qIdx}
              className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5"
            >
              <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                {q.heading}
              </h3>
              <div className={`space-y-2 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                {q.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{renderInlineMarkdown(p)}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* REFERÊNCIAS DOCUMENTAIS */}
      <section
        id="cit-referencias"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <BookmarkCheck className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsed.referenciasHeading}
          </h2>
        </div>

        <ul className="space-y-3 bg-[#121214] p-5 rounded-lg border border-stone-800 font-mono text-xs sm:text-sm text-stone-300 leading-relaxed">
          {parsed.referencias.map((ref, rIdx) => (
            <li key={rIdx} className="border-b border-stone-800/60 last:border-b-0 pb-2.5 last:pb-0">
              {renderInlineMarkdown(ref)}
            </li>
          ))}
        </ul>
      </section>

      {/* CONCLUSÃO DA ABA 4 */}
      <section
        id="cit-conclusao"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-amber-600/40 space-y-4 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <BookOpen className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-amber-300 uppercase tracking-wide">
            {parsed.conclusaoHeading}
          </h2>
        </div>

        <div className={`space-y-3 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          {parsed.conclusaoParagraphs.map((p, idx) => (
            <p key={idx}>{renderInlineMarkdown(p)}</p>
          ))}
        </div>

        {parsed.closingLines.length > 0 && (
          <div className="pt-4 border-t border-stone-800 text-center space-y-1">
            {parsed.closingLines.map((line, idx) => (
              <p key={idx} className="text-xs font-mono text-amber-400/90 tracking-wider uppercase">
                {renderInlineMarkdown(line)}
              </p>
            ))}
          </div>
        )}
      </section>

      {/* PARTE II — REFERÊNCIAS HISTORIOGRÁFICAS, CITAÇÕES DIRETAS E INDIRETAS */}
      <section
        id="cit-parte-2"
        className="scroll-mt-24 bg-[#161619] border border-amber-600/40 rounded-xl p-6 sm:p-8 shadow-lg space-y-6"
      >
        <div className="border-b border-stone-800 pb-5 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/15 text-amber-300 border border-amber-500/40 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{parsedPart2.bannerHeading}</span>
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-stone-400">
            {parsedPart2.bannerSubtitle}
          </div>
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide pt-1">
            {parsedPart2.parte2Heading}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-amber-400 shrink-0" />
            <h3 className="text-base sm:text-lg font-serif font-bold text-amber-300 uppercase tracking-wide">
              {parsedPart2.sec1Heading}
            </h3>
          </div>
          <div className="space-y-3">{renderBlocks(parsedPart2.sec1Blocks)}</div>
        </div>
      </section>

      {/* 2. AUTORES E OBRAS FUNDAMENTAIS */}
      <section
        id="cit-p2-autores"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <BookOpen className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsedPart2.sec2Heading}
          </h2>
        </div>

        <div className="space-y-6">
          {parsedPart2.authors.map((author, aIdx) => (
            <article
              key={aIdx}
              className="bg-[#121214] p-5 sm:p-6 rounded-xl border border-stone-800 space-y-5"
            >
              <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-3 ${getFontSizeClass('heading')}`}>
                {author.heading}
              </h3>

              {author.metadata.length > 0 && (
                <div className="bg-stone-950/60 border border-stone-800/80 rounded-lg p-4 space-y-1.5 font-mono text-xs text-stone-300">
                  {author.metadata.map((m, mIdx) => (
                    <div key={mIdx} className="leading-relaxed">
                      {renderInlineMarkdown(m)}
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                {author.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                      {sub.heading}
                    </h4>
                    <div className="space-y-2">{renderBlocks(sub.blocks)}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. CITAÇÕES DIRETAS VERIFICÁVEIS */}
      <section
        id="cit-p2-diretas"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <Quote className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsedPart2.sec3Heading}
          </h2>
        </div>

        {parsedPart2.sec3Intro.length > 0 && (
          <div className={`space-y-2 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
            {parsedPart2.sec3Intro.map((p, idx) => (
              <p key={idx}>{renderInlineMarkdown(p)}</p>
            ))}
          </div>
        )}

        <div className="space-y-5">
          {parsedPart2.sec3Citations.map((cit, cIdx) => (
            <article
              key={cIdx}
              className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3"
            >
              <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                {cit.heading}
              </h3>
              <div className="space-y-2.5">{renderBlocks(cit.blocks)}</div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. CITAÇÕES INDIRETAS ORGANIZADAS POR TEMA DO CAPÍTULO */}
      <section
        id="cit-p2-indiretas"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsedPart2.sec4Heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {parsedPart2.sec4Themes.map((th, tIdx) => (
            <article
              key={tIdx}
              className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5"
            >
              <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                {th.heading}
              </h3>
              <div className="space-y-2">{renderBlocks(th.blocks)}</div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. REFERÊNCIAS BIBLIOGRÁFICAS */}
      <section
        id="cit-p2-bib"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <BookmarkCheck className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsedPart2.sec5Heading}
          </h2>
        </div>

        <ul className="space-y-3 bg-[#121214] p-5 rounded-lg border border-stone-800 font-mono text-xs sm:text-sm text-stone-300 leading-relaxed">
          {parsedPart2.sec5Entries.map((entry, eIdx) => (
            <li key={eIdx} className="border-b border-stone-800/60 last:border-b-0 pb-2.5 last:pb-0">
              {renderInlineMarkdown(entry)}
            </li>
          ))}
        </ul>
      </section>

      {/* 6. ORIENTAÇÃO DE UTILIZAÇÃO NO CAPÍTULO ACADÊMICO */}
      <section
        id="cit-p2-orientacao"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <HelpCircle className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsedPart2.sec6Heading}
          </h2>
        </div>
        <div className="space-y-3">{renderBlocks(parsedPart2.sec6Blocks)}</div>
      </section>

      {/* 7. NOTA FINAL DE RIGOR ACADÊMICO */}
      <section
        id="cit-p2-nota-final"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-amber-600/40 space-y-4 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-amber-300 uppercase tracking-wide">
            {parsedPart2.sec7Heading}
          </h2>
        </div>
        <div className="space-y-3">{renderBlocks(parsedPart2.sec7Blocks)}</div>
      </section>
    </div>
  );
};
