import React from 'react';
import {
  BookOpenCheck,
  HeartHandshake,
  BookMarked,
  Cog,
  Coins,
  TrendingUp,
  Landmark,
  Scale,
  Compass,
  GraduationCap,
  ArrowLeft,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { ADAM_SMITH_TABS, AdamSmithTabId } from '../data/collections/chapter_12_adam_smith_tabs';
import { Topic113Aba1View } from './Topic113Aba1View';
import { Topic113Aba2View } from './Topic113Aba2View';
import { Topic113Aba3View } from './Topic113Aba3View';
import { Topic113Aba4View } from './Topic113Aba4View';
import { Topic113Aba5View } from './Topic113Aba5View';
import { Topic113Aba6View } from './Topic113Aba6View';

interface Topic113TabsViewProps {
  activeTab: AdamSmithTabId;
  onSelectTab: (tab: AdamSmithTabId) => void;
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

const getTabIcon = (tabId: AdamSmithTabId) => {
  switch (tabId) {
    case 'aba1':
      return <BookOpenCheck className="w-5 h-5 text-amber-400 shrink-0" />;
    case 'aba2':
      return <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0" />;
    case 'aba3':
      return <BookMarked className="w-5 h-5 text-amber-400 shrink-0" />;
    case 'aba4':
      return <Cog className="w-5 h-5 text-amber-400 shrink-0" />;
    case 'aba5':
      return <Coins className="w-5 h-5 text-amber-400 shrink-0" />;
    case 'aba6':
      return <TrendingUp className="w-5 h-5 text-amber-400 shrink-0" />;
    case 'aba7':
      return <Landmark className="w-5 h-5 text-amber-400 shrink-0" />;
    case 'aba8':
      return <Scale className="w-5 h-5 text-amber-400 shrink-0" />;
    case 'aba9':
      return <Compass className="w-5 h-5 text-amber-400 shrink-0" />;
    case 'aba10':
      return <GraduationCap className="w-5 h-5 text-amber-400 shrink-0" />;
  }
};

export const Topic113TabsView: React.FC<Topic113TabsViewProps> = ({
  activeTab,
  onSelectTab,
  getFontSizeClass,
}) => {
  if (activeTab === 'aba1') {
    return <Topic113Aba1View getFontSizeClass={getFontSizeClass} onSelectTab={onSelectTab} />;
  }
  if (activeTab === 'aba2') {
    return <Topic113Aba2View getFontSizeClass={getFontSizeClass} onSelectTab={onSelectTab} />;
  }
  if (activeTab === 'aba3') {
    return <Topic113Aba3View getFontSizeClass={getFontSizeClass} onSelectTab={onSelectTab} />;
  }
  if (activeTab === 'aba4') {
    return <Topic113Aba4View getFontSizeClass={getFontSizeClass} onSelectTab={onSelectTab} />;
  }
  if (activeTab === 'aba5') {
    return <Topic113Aba5View getFontSizeClass={getFontSizeClass} onSelectTab={onSelectTab} />;
  }
  if (activeTab === 'aba6') {
    return <Topic113Aba6View getFontSizeClass={getFontSizeClass} onSelectTab={onSelectTab} />;
  }

  const currentIndex = ADAM_SMITH_TABS.findIndex((t) => t.id === activeTab);
  const currentTab = ADAM_SMITH_TABS[currentIndex >= 0 ? currentIndex : 0];
  const prevTab = currentIndex > 0 ? ADAM_SMITH_TABS[currentIndex - 1] : null;
  const nextTab = currentIndex < ADAM_SMITH_TABS.length - 1 ? ADAM_SMITH_TABS[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto w-full box-border space-y-6">
      {/* Main Tab Card */}
      <article
        id={currentTab.anchorId}
        className="scroll-mt-24 bg-[#161619] border border-amber-600/50 p-6 sm:p-10 rounded-2xl shadow-xl space-y-5"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/15 text-amber-300 border border-amber-500/40 font-bold">
            Coleção II — História das Ideologias
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-stone-900 text-amber-400 border border-amber-700/50 font-bold flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-amber-400 shrink-0" />
            <span>Aba {currentTab.number} de 10 · Em Produção!</span>
          </span>
        </div>

        <div className="text-xs font-mono text-stone-400">
          Nº 11 · Adam Smith e o pensamento econômico
        </div>

        <div className="flex items-start gap-3 border-b border-stone-800 pb-4">
          <div className="mt-1">{getTabIcon(currentTab.id)}</div>
          <div className="space-y-1.5">
            <h2 className={`font-serif font-bold text-stone-100 leading-snug ${getFontSizeClass('heading')}`}>
              {currentTab.number}. {currentTab.title}
            </h2>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              {currentTab.subtitle}
            </p>
          </div>
        </div>

        <div className="bg-[#121214] border border-stone-800 border-l-4 border-l-amber-500 p-4 rounded-r-lg space-y-2">
          <div className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
            Escopo da Aba {currentTab.number}
          </div>
          <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
            {currentTab.title} — {currentTab.subtitle}
          </p>
          <p className="text-xs font-mono text-stone-400 pt-1">
            Aba em branco — conteúdo de <strong className="text-amber-300">{currentTab.title}</strong> preparado para inserção integral.
          </p>
        </div>

        {/* Previous / Next Tab Navigation */}
        <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
          {prevTab ? (
            <button
              onClick={() => onSelectTab(prevTab.id)}
              className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-mono rounded-lg border border-stone-700 flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Aba {prevTab.number}: {prevTab.title}</span>
            </button>
          ) : (
            <div />
          )}

          {nextTab && (
            <button
              onClick={() => onSelectTab(nextTab.id)}
              className="px-3.5 py-2 bg-amber-950/70 hover:bg-amber-900/70 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors ml-auto"
            >
              <span>Aba {nextTab.number}: {nextTab.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            </button>
          )}
        </div>
      </article>

      {/* Overview Index of the 10 Tabs */}
      <section className="bg-[#161619] border border-stone-800 p-5 sm:p-6 rounded-xl space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold border-b border-stone-800 pb-2">
          Estrutura Completa do Capítulo Nº 11 (10 Abas)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {ADAM_SMITH_TABS.map((tab) => {
            const isCurrent = tab.id === currentTab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`text-left p-3.5 rounded-lg border transition-all space-y-1 ${
                  isCurrent
                    ? 'bg-amber-950/40 border-amber-500/70 text-amber-200 shadow-sm'
                    : 'bg-[#121214] border-stone-800 hover:border-stone-700 text-stone-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    ABA {tab.number}
                  </span>
                  <span className="text-xs font-serif font-bold text-stone-100">
                    {tab.title}
                  </span>
                </div>
                <p className="text-[11px] font-serif text-stone-400 leading-snug">
                  {tab.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
