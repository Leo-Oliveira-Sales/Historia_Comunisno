import React, { useMemo, useState } from 'react';
import {
  Copy,
  Check,
  Quote,
  FileText,
  ShieldCheck,
  Globe,
  BookmarkCheck,
  BookOpen,
  HelpCircle,
} from 'lucide-react';
import { RAW_CITATIONS_202 } from '../data/citations/citations_guerras_mundiais_02';

interface Topic202CitationsViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

interface ParsedCitations202 {
  bannerCollection: string;
  bannerMonograph: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerTab: string;
  protocolHeading: string;
  protocolIntro: string[];
  classificationHeading: string;
  classificationItems: {
    heading: string;
    blocks: { type: 'paragraph' | 'label' | 'bullet'; text: string }[];
  }[];
  parte1Heading: string;
  documents: {
    heading: string;
    lines: string[];
  }[];
  parte2Heading: string;
  parte2NoteHeading: string;
  parte2NoteParagraphs: string[];
  researchers: {
    heading: string;
    lines: string[];
  }[];
  parte3Heading: string;
  repositories: {
    heading: string;
    lines: string[];
  }[];
  parte4Heading: string;
  bibliographyBlocks: {
    heading: string;
    lines: string[];
  }[];
  parte5Heading: string;
  analysisQuestions: {
    heading: string;
    paragraphs: string[];
  }[];
  conclusionHeading: string;
  conclusionParagraphs: string[];
  closingLines: string[];
}

function parseCitations202(raw: string): ParsedCitations202 {
  const sections = raw
    .split(/^-{10,}$/m)
    .map((s) => s.trim())
    .filter(Boolean);

  // Section 0: Header banner + Protocolo + Critérios de Classificação
  const sec0Lines = sections[0].split('\n').map((l) => l.trimEnd());
  // Extract banner between top === lines
  const eqIndices: number[] = [];
  sec0Lines.forEach((l, idx) => {
    if (/^={10,}$/.test(l.trim())) eqIndices.push(idx);
  });
  const bannerLines = sec0Lines
    .slice(eqIndices[0] + 1, eqIndices[1])
    .map((l) => l.trim())
    .filter(Boolean);

  const afterBanner = sec0Lines.slice(eqIndices[1] + 1).map((l) => l.trim());
  const classIdx = afterBanner.findIndex((l) => l === 'CRITÉRIOS DE CLASSIFICAÇÃO');
  const protocolLines = afterBanner.slice(0, classIdx).filter(Boolean);
  const classificationRaw = afterBanner.slice(classIdx + 1).filter(Boolean);

  const classificationItems: ParsedCitations202['classificationItems'] = [];
  let currentClass: ParsedCitations202['classificationItems'][number] | null = null;
  for (const line of classificationRaw) {
    if (/^(I|II|III|IV)\.\s+/.test(line)) {
      if (currentClass) classificationItems.push(currentClass);
      currentClass = { heading: line, blocks: [] };
    } else if (currentClass) {
      if (line.startsWith('- ')) {
        currentClass.blocks.push({ type: 'bullet', text: line.slice(2) });
      } else if (line.endsWith(':')) {
        currentClass.blocks.push({ type: 'label', text: line });
      } else {
        currentClass.blocks.push({ type: 'paragraph', text: line });
      }
    }
  }
  if (currentClass) classificationItems.push(currentClass);

  // Sections 1 & 2: PARTE I — DOCUMENTOS PRIMÁRIOS FUNDAMENTAIS + content
  const parte1Heading = sections[1].trim();
  const docChunks = sections[2]
    .split(/^\.{10,}$/m)
    .map((c) => c.trim())
    .filter(Boolean);
  const documents = docChunks.map((chunk) => {
    const lines = chunk
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    return {
      heading: lines[0],
      lines: lines.slice(1),
    };
  });

  // Sections 3 & 4: PARTE II — CITAÇÕES E INTERPRETAÇÕES HISTORIOGRÁFICAS + content
  const parte2Heading = sections[3].trim();
  const parte2Lines = sections[4]
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const firstResIdx = parte2Lines.findIndex((l) => /^\d+\.\s+[A-ZÁÉÍÓÚÀÂÊÔÃÕÇ\s]+$/.test(l));
  const parte2NoteHeading = parte2Lines[0];
  const parte2NoteParagraphs = parte2Lines.slice(1, firstResIdx);
  const researchers: ParsedCitations202['researchers'] = [];
  let curRes: ParsedCitations202['researchers'][number] | null = null;
  for (const line of parte2Lines.slice(firstResIdx)) {
    if (/^\d+\.\s+[A-ZÁÉÍÓÚÀÂÊÔÃÕÇ\s]+$/.test(line)) {
      if (curRes) researchers.push(curRes);
      curRes = { heading: line, lines: [] };
    } else if (curRes) {
      curRes.lines.push(line);
    }
  }
  if (curRes) researchers.push(curRes);

  // Sections 5 & 6: PARTE III — REPOSITÓRIOS E ACERVOS DOCUMENTAIS + content
  const parte3Heading = sections[5].trim();
  const parte3Lines = sections[6]
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const repositories: ParsedCitations202['repositories'] = [];
  let curRepo: ParsedCitations202['repositories'][number] | null = null;
  for (const line of parte3Lines) {
    if (/^\d+\.\s+[A-Z0-9ÁÉÍÓÚÀÂÊÔÃÕÇ\s—–-]+$/.test(line)) {
      if (curRepo) repositories.push(curRepo);
      curRepo = { heading: line, lines: [] };
    } else if (curRepo) {
      curRepo.lines.push(line);
    }
  }
  if (curRepo) repositories.push(curRepo);

  // Sections 7 & 8: PARTE IV — BIBLIOGRAFIA ACADÊMICA + content
  const parte4Heading = sections[7].trim();
  const parte4Lines = sections[8]
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const bibHeadings = new Set([
    'OBRAS FUNDAMENTAIS',
    'FONTES DOCUMENTAIS E COLETÂNEAS',
    'OBSERVAÇÃO BIBLIOGRÁFICA:',
  ]);
  const bibliographyBlocks: ParsedCitations202['bibliographyBlocks'] = [];
  let curBib: ParsedCitations202['bibliographyBlocks'][number] | null = null;
  for (const line of parte4Lines) {
    if (bibHeadings.has(line)) {
      if (curBib) bibliographyBlocks.push(curBib);
      curBib = { heading: line, lines: [] };
    } else if (curBib) {
      curBib.lines.push(line);
    }
  }
  if (curBib) bibliographyBlocks.push(curBib);

  // Sections 9 & 10: PARTE V — QUESTÕES PARA ANÁLISE DOCUMENTAL + content
  const parte5Heading = sections[9].trim();
  const parte5Lines = sections[10]
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const analysisQuestions: ParsedCitations202['analysisQuestions'] = [];
  let curQ: ParsedCitations202['analysisQuestions'][number] | null = null;
  for (const line of parte5Lines) {
    if (/^\d+\.\s+[A-ZÁÉÍÓÚÀÂÊÔÃÕÇ\s-]+$/.test(line)) {
      if (curQ) analysisQuestions.push(curQ);
      curQ = { heading: line, paragraphs: [] };
    } else if (curQ) {
      curQ.paragraphs.push(line);
    }
  }
  if (curQ) analysisQuestions.push(curQ);

  // Sections 11 & 12: CONCLUSÃO DOCUMENTAL + closing
  const conclusionHeading = sections[11].trim();
  const sec12Lines = sections[12]
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !/^={10,}$/.test(l));
  const fimIdx = sec12Lines.findIndex((l) => l.startsWith('FIM DA ABA 4'));
  const conclusionParagraphs = fimIdx >= 0 ? sec12Lines.slice(0, fimIdx) : sec12Lines;
  const closingLines = fimIdx >= 0 ? sec12Lines.slice(fimIdx) : [];

  return {
    bannerCollection: bannerLines[0],
    bannerMonograph: bannerLines[1],
    bannerTitle: bannerLines[2],
    bannerSubtitle: bannerLines[3],
    bannerTab: bannerLines[4],
    protocolHeading: protocolLines[0],
    protocolIntro: protocolLines.slice(1),
    classificationHeading: 'CRITÉRIOS DE CLASSIFICAÇÃO',
    classificationItems,
    parte1Heading,
    documents,
    parte2Heading,
    parte2NoteHeading,
    parte2NoteParagraphs,
    researchers,
    parte3Heading,
    repositories,
    parte4Heading,
    bibliographyBlocks,
    parte5Heading,
    analysisQuestions,
    conclusionHeading,
    conclusionParagraphs,
    closingLines,
  };
}

interface DocSubBlock {
  kind: 'meta-inline' | 'heading-block' | 'callout-block' | 'reference-block' | 'body';
  heading?: string;
  label?: string;
  value?: string;
  items: string[];
}

function groupDocumentLines(lines: string[]): DocSubBlock[] {
  const blocks: DocSubBlock[] = [];
  const calloutHeadings = new Set([
    'LIMITAÇÃO DOCUMENTAL:',
    'LIMITAÇÕES:',
    'QUESTÃO DE INTERPRETAÇÃO:',
    'QUESTÃO DOCUMENTAL:',
    'QUESTÕES PARA ANÁLISE:',
    'CUIDADO INTERPRETATIVO:',
    'CUIDADO CRONOLÓGICO:',
    'QUESTÃO DE INVESTIGAÇÃO:',
    'QUESTÃO JURÍDICA:',
  ]);
  const referenceHeadings = new Set([
    'Referência de pesquisa:',
    'Referência documental:',
  ]);
  const sectionHeadings = new Set([
    'CONTEXTO HISTÓRICO:',
    'DOCUMENTO CENTRAL:',
    'IMPORTÂNCIA HISTÓRICA:',
  ]);
  const metaListHeadings = new Set([
    'Personagens centrais:',
    'Participantes relevantes:',
    'Remetentes:',
    'Instituições envolvidas:',
  ]);

  let current: DocSubBlock | null = null;

  const flush = () => {
    if (current) {
      blocks.push(current);
      current = null;
    }
  };

  for (const line of lines) {
    if (calloutHeadings.has(line)) {
      flush();
      current = { kind: 'callout-block', heading: line, items: [] };
      continue;
    }
    if (referenceHeadings.has(line)) {
      flush();
      current = { kind: 'reference-block', heading: line, items: [] };
      continue;
    }
    if (sectionHeadings.has(line)) {
      flush();
      current = { kind: 'heading-block', heading: line, items: [] };
      continue;
    }
    if (metaListHeadings.has(line)) {
      flush();
      current = { kind: 'heading-block', heading: line, items: [] };
      continue;
    }

    // Inline key: value metadata at top (Data:, Autor:, etc.) before any major section block
    const colonIdx = line.indexOf(':');
    const isMetaInline =
      colonIdx > 0 &&
      colonIdx < 40 &&
      !line.startsWith('- ') &&
      !/^\d+\.\s/.test(line) &&
      (!current || current.kind === 'heading-block' && metaListHeadings.has(current.heading || '')) &&
      /^(Data|Data de apresentação|Autor|Autor institucional|Destinatário|Natureza|Instituição produtora|Produção|Principal responsável diplomático|Principal responsável político|Entrega|Personagem central|Período|Signatários|Representante diplomático)$/.test(
        line.slice(0, colonIdx)
      );

    if (isMetaInline) {
      flush();
      blocks.push({
        kind: 'meta-inline',
        label: line.slice(0, colonIdx + 1),
        value: line.slice(colonIdx + 1).trim(),
        items: [],
      });
      continue;
    }

    if (current) {
      current.items.push(line);
    } else {
      blocks.push({ kind: 'body', items: [line] });
    }
  }
  flush();
  return blocks;
}

export const Topic202CitationsView: React.FC<Topic202CitationsViewProps> = ({
  getFontSizeClass,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const parsed = useMemo(() => parseCitations202(RAW_CITATIONS_202), []);

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_CITATIONS_202);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const renderMixedLine = (line: string, idx: number) => {
    if (line.startsWith('- ')) {
      return (
        <div key={idx} className="flex items-start gap-2 pl-1">
          <span className="text-amber-400 font-bold shrink-0">-</span>
          <span>{line.slice(2)}</span>
        </div>
      );
    }
    return <p key={idx}>{line}</p>;
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-800 pb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                {parsed.bannerCollection}
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                {parsed.bannerMonograph} · {parsed.bannerTab}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              {parsed.bannerTitle}
            </h1>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              {parsed.bannerSubtitle}
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar texto integral da Aba 4 Citações"
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

      {/* PROTOCOLO DE AUDITORIA DOCUMENTAL E BIBLIOGRÁFICA + CRITÉRIOS */}
      <section
        id="cit-protocolo"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsed.protocolHeading}
          </h2>
        </div>

        <div className={`space-y-3 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          {parsed.protocolIntro.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-4">
          <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
            {parsed.classificationHeading}
          </h3>
          <div className="grid grid-cols-1 gap-3.5">
            {parsed.classificationItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-stone-950/60 border border-stone-800/90 border-l-4 border-l-amber-500/80 p-4 rounded-r-lg space-y-2"
              >
                <div className="font-mono text-xs font-bold text-amber-300">
                  {item.heading}
                </div>
                <div className={`space-y-1.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                  {item.blocks.map((b, bIdx) => {
                    if (b.type === 'bullet') {
                      return (
                        <div key={bIdx} className="flex items-start gap-2 pl-1">
                          <span className="text-amber-400 font-bold shrink-0">-</span>
                          <span>{b.text}</span>
                        </div>
                      );
                    }
                    if (b.type === 'label') {
                      return (
                        <div key={bIdx} className="text-xs font-mono font-bold text-amber-400 pt-1">
                          {b.text}
                        </div>
                      );
                    }
                    return <p key={bIdx}>{b.text}</p>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTE I — DOCUMENTOS PRIMÁRIOS FUNDAMENTAIS */}
      <section
        id="cit-parte-1"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsed.parte1Heading}
          </h2>
        </div>

        <div className="space-y-5">
          {parsed.documents.map((doc, dIdx) => {
            const grouped = groupDocumentLines(doc.lines);
            return (
              <article
                key={dIdx}
                className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-4"
              >
                <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                  {doc.heading}
                </h3>

                <div className="space-y-3">
                  {grouped.map((blk, bIdx) => {
                    if (blk.kind === 'meta-inline') {
                      return (
                        <div key={bIdx} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                          <span className="text-xs font-mono font-bold text-amber-400 shrink-0">
                            {blk.label}
                          </span>
                          <span className={`font-serif text-stone-200 ${getFontSizeClass('body')}`}>
                            {blk.value}
                          </span>
                        </div>
                      );
                    }

                    if (blk.kind === 'callout-block') {
                      return (
                        <div
                          key={bIdx}
                          className="bg-stone-950/60 border border-stone-800/80 border-l-4 border-l-amber-500 p-4 rounded-r-lg space-y-2"
                        >
                          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400">
                            <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>{blk.heading}</span>
                          </div>
                          <div className={`space-y-1.5 font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}>
                            {blk.items.map((item, iIdx) => renderMixedLine(item, iIdx))}
                          </div>
                        </div>
                      );
                    }

                    if (blk.kind === 'reference-block') {
                      return (
                        <div
                          key={bIdx}
                          className="bg-stone-950/60 border border-stone-800/80 p-3.5 rounded-lg space-y-1"
                        >
                          <div className="text-xs font-mono font-bold text-amber-400">
                            {blk.heading}
                          </div>
                          <div className="space-y-0.5 font-mono text-xs text-stone-300 leading-relaxed">
                            {blk.items.map((item, iIdx) => (
                              <p key={iIdx}>{item}</p>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    if (blk.kind === 'heading-block') {
                      return (
                        <div key={bIdx} className="space-y-1.5 pt-1">
                          <div className="text-xs font-mono font-bold text-amber-400">
                            {blk.heading}
                          </div>
                          <div className={`space-y-2 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                            {blk.items.map((item, iIdx) => renderMixedLine(item, iIdx))}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={bIdx} className={`space-y-2 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                        {blk.items.map((item, iIdx) => renderMixedLine(item, iIdx))}
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PARTE II — CITAÇÕES E INTERPRETAÇÕES HISTORIOGRÁFICAS */}
      <section
        id="cit-parte-2"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <Quote className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsed.parte2Heading}
          </h2>
        </div>

        <div className="bg-stone-950/60 border border-stone-800/90 border-l-4 border-l-amber-500/80 p-4 rounded-r-lg space-y-2">
          <div className="font-mono text-xs font-bold text-amber-300">
            {parsed.parte2NoteHeading}
          </div>
          <div className={`space-y-1.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
            {parsed.parte2NoteParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {parsed.researchers.map((res, rIdx) => {
            const subLabels = new Set(['Obra:', 'Estudo:', 'CONTRIBUIÇÃO:', 'QUESTÃO CENTRAL:']);
            const subGroups: { label: string; lines: string[] }[] = [];
            let cur: { label: string; lines: string[] } | null = null;
            for (const line of res.lines) {
              if (subLabels.has(line)) {
                if (cur) subGroups.push(cur);
                cur = { label: line, lines: [] };
              } else if (cur) {
                cur.lines.push(line);
              }
            }
            if (cur) subGroups.push(cur);

            return (
              <article
                key={rIdx}
                className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3"
              >
                <h3 className={`font-serif font-bold text-stone-100 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                  {res.heading}
                </h3>

                {subGroups.map((sg, sIdx) => {
                  if (sg.label === 'Obra:' || sg.label === 'Estudo:') {
                    return (
                      <div key={sIdx} className="bg-stone-950/60 border border-stone-800/80 p-3.5 rounded-lg space-y-1">
                        <div className="text-xs font-mono font-bold text-amber-400">
                          {sg.label}
                        </div>
                        <p className="font-mono text-xs text-stone-300 leading-relaxed">
                          {sg.lines.join(' ')}
                        </p>
                      </div>
                    );
                  }
                  if (sg.label === 'QUESTÃO CENTRAL:') {
                    return (
                      <div key={sIdx} className="bg-stone-950/60 border border-stone-800/80 border-l-4 border-l-amber-500 p-4 rounded-r-lg space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400">
                          <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{sg.label}</span>
                        </div>
                        <div className={`space-y-1.5 font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}>
                          {sg.lines.map((l, lIdx) => (
                            <p key={lIdx}>{l}</p>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="text-xs font-mono font-bold text-amber-400">
                        {sg.label}
                      </div>
                      <div className={`space-y-2 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                        {sg.lines.map((l, lIdx) => (
                          <p key={lIdx}>{l}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </article>
            );
          })}
        </div>
      </section>

      {/* PARTE III — REPOSITÓRIOS E ACERVOS DOCUMENTAIS */}
      <section
        id="cit-parte-3"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <Globe className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsed.parte3Heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {parsed.repositories.map((repo, rIdx) => {
            const repoLabels = new Set(['DOCUMENTO RELEVANTE:', 'UTILIDADE:', 'OBSERVAÇÃO:']);
            const descLines: string[] = [];
            const fields: { label: string; lines: string[] }[] = [];
            let curField: { label: string; lines: string[] } | null = null;
            for (const line of repo.lines) {
              if (repoLabels.has(line)) {
                if (curField) fields.push(curField);
                curField = { label: line, lines: [] };
              } else if (curField) {
                curField.lines.push(line);
              } else {
                descLines.push(line);
              }
            }
            if (curField) fields.push(curField);

            return (
              <article
                key={rIdx}
                className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5"
              >
                <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                  {repo.heading}
                </h3>

                {descLines.map((d, dIdx) => (
                  <p key={dIdx} className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                    {d}
                  </p>
                ))}

                {fields.map((f, fIdx) => (
                  <div
                    key={fIdx}
                    className={
                      f.label === 'OBSERVAÇÃO:'
                        ? 'bg-stone-950/60 border border-stone-800/80 border-l-4 border-l-amber-500/80 p-3.5 rounded-r-lg space-y-1'
                        : 'space-y-0.5'
                    }
                  >
                    <div className="text-xs font-mono font-bold text-amber-400">
                      {f.label}
                    </div>
                    {f.lines.map((l, lIdx) => (
                      <p key={lIdx} className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                        {l}
                      </p>
                    ))}
                  </div>
                ))}
              </article>
            );
          })}
        </div>
      </section>

      {/* PARTE IV — BIBLIOGRAFIA ACADÊMICA */}
      <section
        id="cit-parte-4"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <BookmarkCheck className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsed.parte4Heading}
          </h2>
        </div>

        <div className="space-y-5">
          {parsed.bibliographyBlocks.map((bib, bIdx) => {
            const isObservation = bib.heading === 'OBSERVAÇÃO BIBLIOGRÁFICA:';
            return (
              <article
                key={bIdx}
                className={
                  isObservation
                    ? 'bg-stone-950/60 p-5 rounded-r-lg border border-stone-800 border-l-4 border-l-amber-500 space-y-3'
                    : 'bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3'
                }
              >
                <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                  {bib.heading}
                </h3>
                {isObservation ? (
                  <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                    {bib.lines.map((l, lIdx) => (
                      <p key={lIdx}>{l}</p>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2.5 font-mono text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {bib.lines.map((l, lIdx) => (
                      <li key={lIdx}>{l}</li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* PARTE V — QUESTÕES PARA ANÁLISE DOCUMENTAL */}
      <section
        id="cit-parte-5"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <HelpCircle className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            {parsed.parte5Heading}
          </h2>
        </div>

        <div className="space-y-4">
          {parsed.analysisQuestions.map((q, qIdx) => (
            <article
              key={qIdx}
              className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5"
            >
              <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                {q.heading}
              </h3>
              <div className={`space-y-2 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                {q.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONCLUSÃO DOCUMENTAL */}
      <section
        id="cit-conclusao"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-amber-600/40 space-y-4 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <BookOpen className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-amber-300 uppercase tracking-wide">
            {parsed.conclusionHeading}
          </h2>
        </div>
        <div className={`space-y-3 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          {parsed.conclusionParagraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {parsed.closingLines.length > 0 && (
          <div className="pt-4 border-t border-stone-800 text-center space-y-1">
            {parsed.closingLines.map((line, idx) => (
              <p key={idx} className="text-xs font-mono text-amber-400/90 tracking-wider uppercase">
                {line}
              </p>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
