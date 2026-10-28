import React, { useState, useEffect } from 'react';
import { DOSSIER_TOPICS } from './data/dossierDatabase';
import { MONOGRAPHS_DATABASE } from './data/monographsDatabase';
import { ARCHIVES_DATABASE } from './data/historiansAndArchives';
import { DossierTopic } from './types/dossier';
import { Header } from './components/Header';
import { DossierGrid } from './components/DossierGrid';
import { RouletteWheel } from './components/RouletteWheel';
import { TimelineView } from './components/TimelineView';
import { AcademicLibraryView } from './components/AcademicLibraryView';
import { QuizModal } from './components/QuizModal';
import { DossierModal } from './components/DossierModal';
import { ResearchNotebookModal } from './components/ResearchNotebookModal';
import { getSoundEnabled, setSoundEnabled, playTypewriterClack } from './utils/audio';
import { 
  Compass, 
  Layers, 
  BookOpen, 
  Building2, 
  Award, 
  Sparkles, 
  FileCheck2,
  Calendar,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'dossiers' | 'roulette' | 'timeline' | 'sources' | 'quiz'>('dossiers');
  const [selectedTopic, setSelectedTopic] = useState<DossierTopic | null>(null);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [soundEnabled, setSoundState] = useState<boolean>(true);

  // Saved topics in LocalStorage
  const [savedTopicIds, setSavedTopicIds] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem('dossier_saved_topics');
      return stored ? JSON.parse(stored) : [8, 12]; // Default highlight Molotov-Ribbentrop and Holodomor
    } catch {
      return [8, 12];
    }
  });

  useEffect(() => {
    setSoundState(getSoundEnabled());

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedTopic) {
          setSelectedTopic(null);
        } else if (isNotebookOpen) {
          setIsNotebookOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTopic, isNotebookOpen]);

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundState(next);
    setSoundEnabled(next);
    playTypewriterClack();
  };

  const handleToggleSave = (topicId: number) => {
    setSavedTopicIds((prev) => {
      let updated: number[];
      if (prev.includes(topicId)) {
        updated = prev.filter((id) => id !== topicId);
      } else {
        updated = [...prev, topicId];
      }
      try {
        localStorage.setItem('dossier_saved_topics', JSON.stringify(updated));
      } catch {
        // fallback
      }
      return updated;
    });
  };

  if (selectedTopic) {
    return (
      <DossierModal
        topic={selectedTopic}
        onClose={() => setSelectedTopic(null)}
        isSaved={savedTopicIds.includes(selectedTopic.id)}
        onToggleSave={handleToggleSave}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#121214] text-[#EBE6DF] flex flex-col selection:bg-red-900 selection:text-white">
      {/* Top Bar Contract Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          playTypewriterClack();
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedCount={savedTopicIds.length}
        onOpenNotebook={() => setIsNotebookOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Hero Exhibition Banner (Only visible on 20 Temas tab) */}
      {currentTab === 'dossiers' && (
        <section className="relative border-b border-stone-800 bg-[#161619] overflow-hidden">
          {/* Subtle Archival Background Texture */}
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
            style={{ backgroundImage: `url('/src/assets/images/archive_dossier_declassified_1792790795875.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#161619]/80 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto px-3.5 sm:px-8 py-6 sm:py-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
              <div className="max-w-2xl space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2">
                  <span className="dossier-stamp-red text-[10px] sm:text-xs">ACERVO HISTÓRICO</span>
                  <span className="text-[11px] sm:text-xs font-mono text-stone-400">
                    URSS & COMUNISMO · 1905–1991
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-stone-100 text-balance leading-tight">
                  Dossiê Soviético: 20 Categorias Temáticas & Documentação Primária
                </h1>

                <p className="text-xs sm:text-base font-serif text-stone-300 leading-relaxed max-w-xl">
                  Coleção de documentos primários, tratados diplomáticos, telegramas desclassificados e ensaios acadêmicos rigorosos baseados nos arquivos da <strong>Library of Congress</strong>, <strong>Wilson Center</strong>, <strong>Yale Avalon Project</strong>, <strong>NARA</strong>, <strong>Bundesarchiv</strong> e <strong>GHDI</strong>.
                </p>

                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3 pt-2">
                  <button
                    onClick={() => {
                      playTypewriterClack();
                      setCurrentTab('sources');
                    }}
                    className="px-3.5 py-2.5 min-h-[42px] rounded-lg text-xs font-medium bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 border border-stone-700 flex items-center justify-center gap-2 transition-all"
                  >
                    <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{MONOGRAPHS_DATABASE.length} Monografias & {ARCHIVES_DATABASE.length} Arquivos</span>
                  </button>

                  <button
                    onClick={() => {
                      playTypewriterClack();
                      setCurrentTab('timeline');
                    }}
                    className="px-3.5 py-2.5 min-h-[42px] rounded-lg text-xs font-medium bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 border border-stone-700 flex items-center justify-center gap-2 transition-all"
                  >
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Linha do Tempo (1905–1991)</span>
                  </button>
                </div>
              </div>

              {/* Research Metrics Strip */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 w-full sm:w-auto shrink-0 font-mono">
                <div className="bg-[#19191d]/90 border border-stone-800 p-3 sm:p-3.5 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400 tabular-nums">{DOSSIER_TOPICS.length}</div>
                  <div className="text-[10px] sm:text-[11px] text-stone-400">Tópicos Catalogados</div>
                </div>

                <div className="bg-[#19191d]/90 border border-stone-800 p-3 sm:p-3.5 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-stone-100 tabular-nums">{MONOGRAPHS_DATABASE.length}</div>
                  <div className="text-[10px] sm:text-[11px] text-stone-400">Obras de Referência</div>
                </div>

                <div className="bg-[#19191d]/90 border border-stone-800 p-3 sm:p-3.5 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-stone-100 tabular-nums">0{ARCHIVES_DATABASE.length}</div>
                  <div className="text-[10px] sm:text-[11px] text-stone-400">Arquivos Oficiais</div>
                </div>

                <div className="bg-[#19191d]/90 border border-stone-800 p-3 sm:p-3.5 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">100%</div>
                  <div className="text-[10px] sm:text-[11px] text-stone-400">Fontes Verificadas</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Body Content Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-8 py-5 sm:py-8 flex-1 w-full space-y-6 sm:space-y-8">
        {/* VIEW 1: ROULETTE VIEW */}
        {currentTab === 'roulette' && (
          <div className="space-y-6">
            <RouletteWheel
              topics={DOSSIER_TOPICS}
              onSelectTopic={(topic) => setSelectedTopic(topic)}
              selectedTopic={selectedTopic}
            />

            {/* Quick access to full catalog beneath roulette */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-stone-800/80">
              <span className="text-xs font-mono text-stone-400">
                Prefere buscar na grade completa por palavra-chave ou período?
              </span>
              <button
                onClick={() => {
                  playTypewriterClack();
                  setCurrentTab('dossiers');
                }}
                className="w-full sm:w-auto px-4 py-2.5 min-h-[42px] bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 text-xs font-medium rounded-lg border border-stone-700 flex items-center justify-center gap-1.5 transition-all"
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Ver Grade Completa de 20 Temas</span>
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: 20 THEMATIC DOSSIERS */}
        {currentTab === 'dossiers' && (
          <DossierGrid
            topics={DOSSIER_TOPICS}
            onSelectTopic={(topic) => setSelectedTopic(topic)}
            savedTopicIds={savedTopicIds}
            onToggleSave={handleToggleSave}
          />
        )}

        {/* VIEW 3: TIMELINE VIEW */}
        {currentTab === 'timeline' && (
          <TimelineView
            topics={DOSSIER_TOPICS}
            onSelectTopic={(topic) => setSelectedTopic(topic)}
          />
        )}

        {/* VIEW 4: MONOGRAPHS, HISTORIANS & ARCHIVES */}
        {currentTab === 'sources' && (
          <AcademicLibraryView
            topics={DOSSIER_TOPICS}
            onSelectTopic={(topic) => setSelectedTopic(topic)}
          />
        )}

        {/* VIEW 5: QUIZ */}
        {currentTab === 'quiz' && (
          <QuizModal
            topics={DOSSIER_TOPICS}
            onSelectTopic={(topic) => setSelectedTopic(topic)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800/80 bg-[#101012] py-8 px-4 sm:px-8 mt-12 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-stone-200">DOSSIÊ SOVIÉTICO</span>
            <span aria-hidden="true">·</span>
            <span>Acervo Histórico e Roleta de Pesquisa Acadêmica</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-stone-500 font-mono text-[11px]">
            <span>Yale Avalon Project</span>
            <span aria-hidden="true">·</span>
            <span>Library of Congress</span>
            <span aria-hidden="true">·</span>
            <span>Wilson Center CWIHP</span>
            <span aria-hidden="true">·</span>
            <span>NARA RG 242</span>
            <span aria-hidden="true">·</span>
            <span>Bundesarchiv</span>
          </div>
        </div>
      </footer>

      {/* MODAL 2: Personal Research Notebook */}
      {isNotebookOpen && (
        <ResearchNotebookModal
          topics={DOSSIER_TOPICS}
          savedTopicIds={savedTopicIds}
          onToggleSave={handleToggleSave}
          onSelectTopic={(topic) => setSelectedTopic(topic)}
          onClose={() => setIsNotebookOpen(false)}
        />
      )}
    </div>
  );
}
