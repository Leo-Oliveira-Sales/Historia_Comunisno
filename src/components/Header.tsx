import React, { useState } from 'react';
import { Volume2, VolumeX, Bookmark, Menu, X, Compass, Layers, Calendar, BookOpen, HelpCircle } from 'lucide-react';

interface HeaderProps {
  currentTab: 'dossiers' | 'roulette' | 'timeline' | 'sources' | 'quiz';
  onSelectTab: (tab: 'dossiers' | 'roulette' | 'timeline' | 'sources' | 'quiz') => void;
  savedCount: number;
  onOpenNotebook: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  savedCount,
  onOpenNotebook,
  soundEnabled,
  onToggleSound,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dossiers' as const, label: '20 Temas', icon: Layers },
    { id: 'roulette' as const, label: 'Roleta de Curiosidades', icon: Compass },
    { id: 'timeline' as const, label: 'Linha do Tempo', icon: Calendar },
    { id: 'sources' as const, label: 'Acervos & Monografias', icon: BookOpen },
    { id: 'quiz' as const, label: 'Desafio Histórico', icon: HelpCircle },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#121214]/95 backdrop-blur border-b border-stone-800/80 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onSelectTab('dossiers')}
            className="text-sm sm:text-base md:text-lg font-display font-bold tracking-tight text-stone-100 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 text-left min-h-[44px]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block shrink-0"></span>
            <span>DOSSIÊ SOVIÉTICO</span>
          </button>
        </div>

        {/* Zone 2: Desktop 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-medium text-stone-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`hover:text-stone-100 transition-colors whitespace-nowrap shrink-0 py-2 min-h-[44px] flex items-center ${
                currentTab === item.id ? 'text-amber-400 font-semibold' : 'text-stone-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Actions + Mobile Hamburger */}
        <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Desativar áudio mecânico' : 'Ativar áudio mecânico'}
            className="p-2 min-h-[44px] min-w-[44px] text-stone-400 hover:text-stone-200 hover:bg-stone-800/60 rounded-lg transition-colors flex items-center justify-center"
            aria-label="Controle de Áudio"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
          </button>

          <button
            onClick={onOpenNotebook}
            className="px-2.5 sm:px-3 py-1.5 min-h-[44px] text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            aria-label="Abrir Caderno de Pesquisa"
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Caderno</span>
            {savedCount > 0 && (
              <span className="bg-red-700 text-white text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full">
                {savedCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button (< 768px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-colors flex items-center justify-center"
            aria-label="Abrir Menu de Navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer Navigation Overlay positioned below header */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-40 bg-[#141417]/98 border-b border-stone-800 shadow-2xl backdrop-blur p-4 space-y-2 animate-in slide-in-from-top-2 duration-150">
            <div className="text-[11px] font-mono uppercase text-stone-500 tracking-wider px-2">
              Navegação do Acervo
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-3 min-h-[48px] rounded-lg text-sm font-medium flex items-center gap-3 transition-colors ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-400 font-semibold border border-amber-500/30'
                      : 'text-stone-300 hover:bg-stone-800/80 hover:text-stone-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Dim backdrop when mobile menu is open */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
