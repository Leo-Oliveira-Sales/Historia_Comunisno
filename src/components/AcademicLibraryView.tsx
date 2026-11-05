import React, { useState, useMemo } from 'react';
import { MONOGRAPHS_DATABASE, AcademicMonograph } from '../data/monographsDatabase';
import { ARCHIVES_DATABASE, HISTORIANS_DATABASE } from '../data/historiansAndArchives';
import { DossierTopic } from '../types/dossier';
import { CollectionId } from '../types/collection';
import { IDEOLOGIAS_40_HISTORIANS, IdeologiaHistorian } from '../data/collections/ideologias_historians';
import { playTypewriterClack } from '../utils/audio';
import { 
  BookOpen, 
  Building2, 
  Users, 
  ExternalLink, 
  Copy, 
  Check, 
  Search, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Quote
} from 'lucide-react';

interface AcademicLibraryViewProps {
  topics: DossierTopic[];
  onSelectTopic: (topic: DossierTopic) => void;
  activeCollectionId?: CollectionId;
}

export const AcademicLibraryView: React.FC<AcademicLibraryViewProps> = ({
  topics,
  onSelectTopic,
  activeCollectionId = 'colecao-1',
}) => {
  const [subTab, setSubTab] = useState<'ideologias40' | 'monographs' | 'archives' | 'historians'>(
    activeCollectionId === 'colecao-2' ? 'ideologias40' : 'monographs'
  );
  const [selectedCategoryRoman, setSelectedCategoryRoman] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCitation = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    playTypewriterClack();
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredMonographs = useMemo(() => {
    if (!searchTerm.trim()) return MONOGRAPHS_DATABASE;
    const q = searchTerm.toLowerCase();
    return MONOGRAPHS_DATABASE.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.authors.some((a) => a.toLowerCase().includes(q)) ||
        m.focus.toLowerCase().includes(q) ||
        m.thesisSummary.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  const filteredArchives = useMemo(() => {
    if (!searchTerm.trim()) return ARCHIVES_DATABASE;
    const q = searchTerm.toLowerCase();
    return ARCHIVES_DATABASE.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.institution.toLowerCase().includes(q) ||
        a.focus.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  const filteredHistorians = useMemo(() => {
    if (!searchTerm.trim()) return HISTORIANS_DATABASE;
    const q = searchTerm.toLowerCase();
    return HISTORIANS_DATABASE.filter(
      (h) =>
        h.name.toLowerCase().includes(q) ||
        h.institution.toLowerCase().includes(q) ||
        h.expertise.toLowerCase().includes(q) ||
        h.contribution.toLowerCase().includes(q)
    );
  }, [searchTerm]);

  const filteredIdeologiaHistorians = useMemo(() => {
    return IDEOLOGIAS_40_HISTORIANS.filter((h) => {
      const matchesCat = selectedCategoryRoman === 'todos' || h.categoryRoman === selectedCategoryRoman;
      if (!matchesCat) return false;
      if (!searchTerm.trim()) return true;
      const q = searchTerm.toLowerCase();
      return (
        h.name.toLowerCase().includes(q) ||
        h.expertise.toLowerCase().includes(q) ||
        h.mainContribution.toLowerCase().includes(q) ||
        h.referenceWorks.some((w) => w.toLowerCase().includes(q))
      );
    });
  }, [selectedCategoryRoman, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#17171a] border border-stone-800 rounded-xl p-4 sm:p-6 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-500 mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>
            {activeCollectionId === 'colecao-2'
              ? 'COLEÇÃO II · CORPUS HISTORIOGRÁFICO DAS IDEOLOGIAS POLÍTICAS'
              : 'COLEÇÃO I · CORPUS HISTORIOGRÁFICO & REPOSITÓRIOS DOCUMENTAIS OFICIAIS'}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-display font-bold text-stone-100">
          {activeCollectionId === 'colecao-2'
            ? 'Os 40 Principais Pesquisadores e Especialistas de Referência Mundial'
            : 'Acervo de Pesquisa: Monografias, Historiadores e Arquivos'}
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 font-serif mt-2 max-w-3xl leading-relaxed">
          {activeCollectionId === 'colecao-2'
            ? 'Catálogo integral e rigoroso dos 40 maiores especialistas mundiais no estudo do pensamento político, Iluminismo, liberalismo, marxismo, fascismo, nazismo, social-democracia e teoria do totalitarismo.'
            : 'Consulte as 23 obras acadêmicas fundamentais, o perfil dos historiadores de referência e os 8 grandes repositórios arquivísticos (Library of Congress, Wilson Center, Yale Avalon, NARA, Bundesarchiv, GHDI, Hoover e Yale Annals of Communism).'}
        </p>

        {/* Sub-Tab Navigation Bar with touch scrolling */}
        <div className="flex items-center gap-2 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-stone-800 overflow-x-auto no-scrollbar touch-pan-x">
          <button
            onClick={() => {
              playTypewriterClack();
              setSubTab('ideologias40');
            }}
            className={`px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 ${
              subTab === 'ideologias40'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>40 Especialistas de Ideologias ({IDEOLOGIAS_40_HISTORIANS.length})</span>
          </button>

          <button
            onClick={() => {
              playTypewriterClack();
              setSubTab('monographs');
            }}
            className={`px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 ${
              subTab === 'monographs'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="sm:hidden">Monografias ({filteredMonographs.length})</span>
            <span className="hidden sm:inline">23 Monografias de Referência ({filteredMonographs.length})</span>
          </button>

          <button
            onClick={() => {
              playTypewriterClack();
              setSubTab('archives');
            }}
            className={`px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 ${
              subTab === 'archives'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span className="sm:hidden">Arquivos ({filteredArchives.length})</span>
            <span className="hidden sm:inline">8 Arquivos Históricos ({filteredArchives.length})</span>
          </button>

          <button
            onClick={() => {
              playTypewriterClack();
              setSubTab('historians');
            }}
            className={`px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 ${
              subTab === 'historians'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span className="sm:hidden">Pesquisadores URSS ({filteredHistorians.length})</span>
            <span className="hidden sm:inline">18 Pesquisadores Soviéticos ({filteredHistorians.length})</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={
            subTab === 'ideologias40'
              ? 'Pesquisar entre os 40 especialistas (ex: Berlin, Hobsbawm, Arendt, Skinner, Bobbio, Rawls, Hayek, Kershaw, Keynes)...'
              : subTab === 'monographs'
              ? 'Pesquisar livro por título, autor (ex: Fitzpatrick, Khlevniuk, Applebaum, Snyder, Dikötter)...'
              : subTab === 'archives'
              ? 'Pesquisar arquivo (ex: Library of Congress, NARA, Wilson Center, Avalon, Bundesarchiv)...'
              : 'Pesquisar historiador ou instituição...'
          }
          className="w-full pl-10 pr-4 py-2.5 bg-[#17171a] border border-stone-800 rounded-lg text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
        />
      </div>

      {/* SUB-TAB 0: OS 40 PRINCIPAIS PESQUISADORES E ESPECIALISTAS DE REFERÊNCIA */}
      {subTab === 'ideologias40' && (
        <div className="space-y-5">
          {/* Category Filter Pills (I to VI) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs touch-pan-x no-scrollbar">
            {[
              { id: 'todos', label: 'Todos os 40 Especialistas' },
              { id: 'I', label: 'I. Pensamento Político (8)' },
              { id: 'II', label: 'II. Iluminismo & Liberalismo (6)' },
              { id: 'III', label: 'III. Socialismo & Marxismo (8)' },
              { id: 'IV', label: 'IV. Fascismo & Nazismo (10)' },
              { id: 'V', label: 'V. Social-Democracia & Bem-Estar (6)' },
              { id: 'VI', label: 'VI. Teoria do Autoritarismo (2)' },
            ].map((cat) => {
              const isActive = selectedCategoryRoman === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playTypewriterClack();
                    setSelectedCategoryRoman(cat.id);
                  }}
                  className={`px-3 py-1.5 min-h-[36px] rounded-lg font-mono text-xs transition-colors shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 font-bold shadow'
                      : 'bg-stone-800/80 text-stone-400 hover:text-stone-200 hover:bg-stone-700'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid of the 40 Specialists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredIdeologiaHistorians.map((h) => (
              <div
                key={h.id}
                className="bg-[#17171b] border border-stone-800 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow hover:border-stone-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                      Bloco {h.categoryRoman} · #{h.number}
                    </span>
                    <span className="text-stone-400">{h.lifespan}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-stone-100 flex items-center gap-2">
                    <span>{h.name}</span>
                  </h3>

                  <div className="mt-1 text-xs font-mono text-stone-400">
                    <span className="text-stone-500">Área: </span>
                    <span className="text-stone-300">{h.expertise}</span>
                  </div>

                  <div className="mt-3 text-xs bg-[#121215] p-2.5 rounded-lg border border-stone-800/80 space-y-1">
                    <span className="text-stone-500 block text-[10px] font-mono uppercase tracking-wider font-semibold">
                      Obras de Referência:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-stone-200 font-serif text-[12px]">
                      {h.referenceWorks.map((work, wIdx) => (
                        <li key={wIdx} className="italic">{work}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <span className="text-stone-500 block text-[10px] font-mono uppercase tracking-wider font-semibold mb-1">
                      Contribuição Historiográfica:
                    </span>
                    <p className="text-xs font-serif text-stone-300 leading-relaxed">
                      {h.mainContribution}
                    </p>
                  </div>

                  <div className="mt-3 p-3 bg-stone-900/70 border-l-2 border-amber-500 rounded-r-lg text-xs text-stone-300 italic font-serif">
                    <Quote className="w-3.5 h-3.5 text-amber-500 inline-block mr-1.5 -mt-1 opacity-70" />
                    "{h.keyQuote}"
                  </div>
                </div>

                {/* Bottom Related Chapters Links */}
                <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-stone-500">Capítulos Relacionados:</span>
                  <div className="flex flex-wrap gap-1">
                    {h.relatedChapters.map((chNum) => {
                      const topicId = 100 + chNum;
                      const topic = topics.find((t) => t.id === topicId);
                      return (
                        <button
                          key={chNum}
                          onClick={() => {
                            if (topic) onSelectTopic(topic);
                          }}
                          className="px-2 py-0.5 rounded bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-300 font-mono text-[10px] transition-colors"
                          title={topic ? topic.title : `Capítulo ${chNum}`}
                        >
                          Cap. {chNum.toString().padStart(2, '0')}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 1: 23 MONOGRAPHS */}
      {subTab === 'monographs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredMonographs.map((mono) => (
            <div
              key={mono.id}
              className="bg-[#17171b] border border-stone-800 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow hover:border-stone-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-1.5">
                  <span className="text-amber-400 font-semibold">{mono.authors.join(', ')}</span>
                  <span>{mono.year} · {mono.publisher}</span>
                </div>

                <h3 className="text-lg font-display font-bold text-stone-100 leading-snug">
                  {mono.title}
                </h3>

                <div className="mt-2 text-xs font-mono text-stone-400">
                  <span className="text-stone-500">Foco Temático: </span>
                  <span className="text-stone-300">{mono.focus}</span>
                </div>

                <p className="mt-3 text-xs sm:text-sm font-serif text-stone-300 leading-relaxed">
                  {mono.thesisSummary}
                </p>

                {/* Base Arquivística Primária */}
                <div className="mt-3.5 p-2.5 bg-[#121215] border border-stone-800/80 rounded text-xs">
                  <span className="font-mono text-amber-500/90 font-bold block mb-0.5">
                    Base Documental e Arquivos Consultados:
                  </span>
                  <p className="font-mono text-stone-400 text-[11px]">
                    {mono.archivalBase}
                  </p>
                </div>
              </div>

              {/* Bottom Actions: Copy Citation & Link to Topic */}
              <div className="pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => copyCitation(mono.abntCitation, `${mono.id}_abnt`)}
                    className="px-2.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded border border-stone-700 text-[11px] font-mono flex items-center gap-1 transition-colors"
                  >
                    {copiedId === `${mono.id}_abnt` ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copiado ABNT</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>ABNT</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => copyCitation(mono.chicagoCitation, `${mono.id}_chicago`)}
                    className="px-2.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded border border-stone-700 text-[11px] font-mono flex items-center gap-1 transition-colors"
                  >
                    {copiedId === `${mono.id}_chicago` ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copiado Chicago</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Chicago</span>
                      </>
                    )}
                  </button>
                </div>

                {mono.relatedTopicIds.length > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-mono text-stone-500">Tópicos:</span>
                    {mono.relatedTopicIds.map((tid) => {
                      const topic = topics.find((t) => t.id === tid);
                      if (!topic) return null;
                      return (
                        <button
                          key={tid}
                          onClick={() => onSelectTopic(topic)}
                          className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-300 font-mono text-[10px] transition-colors"
                          title={`Abrir Dossiê ${topic.categoryNumber}: ${topic.title}`}
                        >
                          #{topic.categoryNumber}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SUB-TAB 2: 8 OFFICIAL HISTORICAL ARCHIVES */}
      {subTab === 'archives' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredArchives.map((archive) => (
            <div
              key={archive.id}
              className="bg-[#17171b] border border-stone-800 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 mb-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{archive.institution}</span>
                </div>

                <h3 className="text-lg font-display font-bold text-stone-100">
                  {archive.name}
                </h3>

                <div className="mt-1 text-xs font-mono text-stone-400">
                  <span className="text-stone-500">Foco Principal: </span>
                  <span className="text-stone-300">{archive.focus}</span>
                </div>

                <p className="mt-3 text-xs sm:text-sm font-serif text-stone-300 leading-relaxed">
                  {archive.description}
                </p>

                {/* Notable collections */}
                <div className="mt-3.5 bg-[#121215] p-3 rounded border border-stone-800 space-y-1.5">
                  <span className="text-[11px] font-mono uppercase text-amber-500/90 font-bold block">
                    Fundos e Coleções Notáveis:
                  </span>
                  <ul className="space-y-1">
                    {archive.notableCollections.map((col, idx) => (
                      <li key={idx} className="text-[11px] text-stone-300 font-mono flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">›</span>
                        <span>{col}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-2.5 text-xs">
                <div className="flex flex-wrap items-center gap-1 font-mono text-[11px] text-stone-400">
                  <span className="shrink-0">Dossiês Vinculados:</span>
                  {archive.relatedTopicIds.map((tid) => {
                    const topic = topics.find((t) => t.id === tid);
                    if (!topic) return null;
                    return (
                      <button
                        key={tid}
                        onClick={() => onSelectTopic(topic)}
                        className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-300 text-[10px] shrink-0"
                        title={topic.title}
                      >
                        #{topic.categoryNumber}
                      </button>
                    );
                  })}
                </div>

                <a
                  href={archive.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-400 rounded border border-stone-700 font-mono text-xs flex items-center gap-1.5 transition-colors shrink-0 ml-auto"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Acessar Acervo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SUB-TAB 3: 18 HISTORIANS */}
      {subTab === 'historians' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredHistorians.map((hist) => (
            <div
              key={hist.id}
              className="bg-[#17171b] border border-stone-800 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{hist.institution}</span>
                </div>

                <h3 className="text-lg font-display font-bold text-stone-100">
                  {hist.name}
                </h3>

                <div className="mt-1 text-xs font-mono text-stone-400">
                  <span className="text-stone-500">Especialidade: </span>
                  <span className="text-stone-300">{hist.expertise}</span>
                </div>

                <div className="mt-2 text-xs font-mono text-amber-400/90 bg-[#121215] p-2 rounded border border-stone-800">
                  <span className="text-stone-500 block text-[10px] uppercase">Obra Seminal:</span>
                  {hist.keyWork}
                </div>

                <p className="mt-3 text-xs font-serif text-stone-300 leading-relaxed">
                  {hist.contribution}
                </p>

                <div className="mt-3 p-2.5 bg-stone-900/60 border-l-2 border-amber-600 rounded-r text-[11px] text-stone-300 italic font-serif">
                  "{hist.quote}"
                </div>
              </div>

              {/* Bottom Topic Links */}
              <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-stone-500">Dossiês associados:</span>
                <div className="flex flex-wrap gap-1">
                  {hist.dossierTopicIds.map((tid) => {
                    const topic = topics.find((t) => t.id === tid);
                    if (!topic) return null;
                    return (
                      <button
                        key={tid}
                        onClick={() => onSelectTopic(topic)}
                        className="px-1.5 py-0.5 rounded bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-300 font-mono text-[10px] transition-colors"
                        title={topic.title}
                      >
                        #{topic.categoryNumber}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
