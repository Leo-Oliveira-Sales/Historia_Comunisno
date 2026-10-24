import React, { useState, useMemo } from 'react';
import { DossierTopic, HistoricalPeriod } from '../types/dossier';
import { HISTORICAL_PERIODS } from '../data/dossierDatabase';
import { Search, BookOpen, Bookmark, BookmarkCheck, FileCheck, Layers, GraduationCap, Award } from 'lucide-react';
import { playTypewriterClack, playStampSound } from '../utils/audio';

interface DossierGridProps {
  topics: DossierTopic[];
  onSelectTopic: (topic: DossierTopic) => void;
  savedTopicIds: number[];
  onToggleSave: (topicId: number) => void;
  onOpenRoulette?: () => void;
}

export const DossierGrid: React.FC<DossierGridProps> = ({
  topics,
  onSelectTopic,
  savedTopicIds,
  onToggleSave,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState<HistoricalPeriod>('todos');

  const filteredTopics = useMemo(() => {
    return topics.filter((t) => {
      const matchesPeriod = selectedPeriod === 'todos' || t.period === selectedPeriod;
      if (!matchesPeriod) return false;

      if (!searchTerm.trim()) return true;
      const q = searchTerm.toLowerCase();
      const inTitle = t.title.toLowerCase().includes(q);
      const inCategory = t.category.toLowerCase().includes(q);
      const inSummary = t.summary.toLowerCase().includes(q);
      const inSubjects = t.mainSubjects.some((s) => s.toLowerCase().includes(q));
      const inActors = t.keyActors.some((a) => a.toLowerCase().includes(q));
      const inSources = t.primarySources.some(
        (s) => s.title.toLowerCase().includes(q) || s.institution.toLowerCase().includes(q)
      );

      return inTitle || inCategory || inSummary || inSubjects || inActors || inSources;
    });
  }, [topics, selectedPeriod, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Search and Period Filter Ribbon */}
      <div className="bg-[#17171b] border border-stone-800 rounded-xl p-3.5 sm:p-6 space-y-3 sm:space-y-4 shadow-lg">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar por tratado, expurgo, autor (ex: Molotov, Katyn, Gulag, Rapallo)..."
              className="w-full pl-10 pr-4 py-2.5 sm:py-2 bg-[#121215] border border-stone-700/80 rounded-lg text-xs sm:text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-500 transition-colors min-h-[42px]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-500 hover:text-stone-300 min-h-[32px] px-2 flex items-center"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Period Filter Buttons / Segmented Controls with smooth touch scrolling */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs touch-pan-x no-scrollbar">
          {HISTORICAL_PERIODS.map((period) => {
            const isActive = selectedPeriod === period.id;
            return (
              <button
                key={period.id}
                onClick={() => {
                  playTypewriterClack();
                  setSelectedPeriod(period.id as HistoricalPeriod);
                }}
                className={`px-3 py-2 min-h-[38px] rounded-md font-medium whitespace-nowrap transition-colors shrink-0 flex items-center justify-center ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                    : 'bg-stone-800/80 text-stone-400 hover:text-stone-200 hover:bg-stone-700/80'
                }`}
              >
                {period.label}
              </button>
            );
          })}
        </div>

        {/* Count and helper text */}
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between text-xs text-stone-400 pt-1 border-t border-stone-800/60 font-mono gap-1">
          <span>
            {filteredTopics.length} de {topics.length} tópicos catalogados
          </span>
          <span className="text-[11px] text-stone-500">Documentação Primária Yale / GHDI / USHMM</span>
        </div>
      </div>

      {/* Grid of 20 Dossier Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
        {filteredTopics.map((topic) => {
          const isSaved = savedTopicIds.includes(topic.id);

          return (
            <div
              key={topic.id}
              className="bg-[#17171a] border border-stone-800 hover:border-stone-700 rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-xl group relative overflow-hidden"
            >
              {/* Top Meta Line with zero-pill rule */}
              <div>
                <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-400 font-bold">Nº {topic.categoryNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-stone-400">{topic.category}</span>
                  </div>

                  <button
                    onClick={() => {
                      playStampSound();
                      onToggleSave(topic.id);
                    }}
                    className={`p-2 min-h-[38px] min-w-[38px] flex items-center justify-center rounded transition-colors ${
                      isSaved
                        ? 'text-amber-400 bg-amber-950/40'
                        : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800'
                    }`}
                    title={isSaved ? 'Remover do Caderno' : 'Salvar no Caderno de Pesquisa'}
                  >
                    {isSaved ? <BookmarkCheck className="w-4 h-4 text-amber-400" /> : <Bookmark className="w-4 h-4" />}
                  </button>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-stone-100 group-hover:text-amber-400 transition-colors leading-snug">
                  {topic.title}
                </h3>

                <div className="text-[11px] font-mono text-stone-400 mt-1">
                  {topic.periodLabel}
                </div>

                <p className="text-stone-300 text-xs sm:text-sm font-serif mt-3 line-clamp-3 leading-relaxed">
                  {topic.summary}
                </p>

                {/* Subtopics */}
                <div className="mt-3.5 pt-3 border-t border-stone-800/80">
                  <span className="text-[10px] font-mono uppercase text-stone-400 tracking-wider block mb-1.5">
                    Assuntos Principais:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {topic.mainSubjects.slice(0, 3).map((sub, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-[#121215] text-stone-300 px-2 py-0.5 rounded border border-stone-800"
                      >
                        {sub}
                      </span>
                    ))}
                    {topic.mainSubjects.length > 3 && (
                      <span className="text-[11px] text-stone-500 self-center">
                        +{topic.mainSubjects.length - 3} mais
                      </span>
                    )}
                  </div>
                </div>

                {/* Academic Standard Badge */}
                <div className="mt-3 py-1.5 px-2.5 bg-[#121215] border border-amber-900/40 rounded flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Padrão 8 Seções Canônicas</span>
                  </span>
                  <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                    Auditado
                  </span>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-stone-400 font-mono text-[11px]">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{topic.primarySources.length} Fontes</span>
                </div>

                <button
                  onClick={() => onSelectTopic(topic)}
                  className="px-3.5 py-2 min-h-[40px] bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 group-hover:text-amber-300 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all border border-stone-700/60"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Abrir Dossiê</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTopics.length === 0 && (
        <div className="text-center py-16 bg-[#17171a] border border-stone-800 rounded-xl p-8 space-y-3">
          <p className="text-stone-400 font-serif text-lg">
            Nenhum dossiê encontrado para a busca "{searchTerm}".
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedPeriod('todos');
            }}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs rounded-md"
          >
            Limpar Filtros e Ver Todos
          </button>
        </div>
      )}
    </div>
  );
};
