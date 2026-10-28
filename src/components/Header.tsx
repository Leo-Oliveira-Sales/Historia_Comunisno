import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Bookmark, 
  Menu, 
  X, 
  Compass, 
  Layers, 
  Calendar, 
  BookOpen, 
  HelpCircle,
  Moon,
  Sun,
  ScrollText,
  Type
} from 'lucide-react';
import { AppTheme, THEME_OPTIONS } from '../utils/theme';
import { AppFontSize, FONT_SIZE_OPTIONS } from '../utils/fontSize';

interface HeaderProps {
  currentTab: 'dossiers' | 'roulette' | 'timeline' | 'sources' | 'quiz';
  onSelectTab: (tab: 'dossiers' | 'roulette' | 'timeline' | 'sources' | 'quiz') => void;
  savedCount: number;
  onOpenNotebook: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  theme: AppTheme;
  onSelectTheme: (theme: AppTheme) => void;
  fontSize: AppFontSize;
  onSelectFontSize: (size: AppFontSize) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  savedCount,
  onOpenNotebook,
  soundEnabled,
  onToggleSound,
  theme,
  onSelectTheme,
  fontSize,
  onSelectFontSize,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dossiers' as const, label: '20 Temas', icon: Layers },
    { id: 'roulette' as const, label: 'Roleta de Curiosidades', icon: Compass },
    { id: 'timeline' as const, label: 'Linha do Tempo', icon: Calendar },
    { id: 'sources' as const, label: 'Acervos & Monografias', icon: BookOpen },
    { id: 'quiz' as const, label: 'Desafio Histórico', icon: HelpCircle },
  ];

  const handleCycleTheme = () => {
    if (theme === 'preto') onSelectTheme('branco');
    else if (theme === 'branco') onSelectTheme('bege');
    else onSelectTheme('preto');
  };

  const handleCycleFontSize = () => {
    if (fontSize === 'normal') onSelectFontSize('medio');
    else if (fontSize === 'medio') onSelectFontSize('grande');
    else if (fontSize === 'grande') onSelectFontSize('extra-grande');
    else onSelectFontSize('normal');
  };

  const getThemeIcon = (t: AppTheme) => {
    switch (t) {
      case 'branco':
        return <Sun className="w-3.5 h-3.5" />;
      case 'bege':
        return <ScrollText className="w-3.5 h-3.5" />;
      case 'preto':
      default:
        return <Moon className="w-3.5 h-3.5" />;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#121214]/95 backdrop-blur border-b border-stone-800/80 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 transition-colors">
        {/* Zone 1: Brand Wordmark (Clean button without box or border) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onSelectTab('dossiers')}
            className="brand-btn nav-btn-clean text-sm sm:text-base md:text-lg font-display font-bold tracking-tight text-stone-100 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 sm:gap-2 text-left min-h-[44px] border-0 bg-transparent shadow-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block shrink-0"></span>
            <span>DOSSIÊ SOVIÉTICO</span>
          </button>
        </div>

        {/* Zone 2: Desktop nav links (Clean text links without boxes) */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-medium text-stone-300">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`nav-btn-clean ${isActive ? 'nav-btn-active text-amber-400 font-semibold' : 'text-stone-300 hover:text-stone-100'} transition-colors whitespace-nowrap shrink-0 py-2 min-h-[44px] flex items-center border-0 bg-transparent shadow-none`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions + Theme Switcher + Global Font Size Control + Mobile Hamburger */}
        <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
          
          {/* Global Font Size Control (Desktop) */}
          <div 
            className="hidden xl:flex items-center bg-stone-900/90 border border-stone-700/80 p-0.5 rounded-lg shadow-inner"
            role="group"
            aria-label="Tamanho da Fonte Global"
          >
            <div className="px-1.5 text-stone-500 flex items-center" title="Tamanho do Texto Global">
              <Type className="w-3.5 h-3.5 text-amber-400" />
            </div>
            {FONT_SIZE_OPTIONS.map((fOpt) => {
              const isSelected = fontSize === fOpt.id;
              return (
                <button
                  key={fOpt.id}
                  onClick={() => onSelectFontSize(fOpt.id)}
                  title={`Tamanho Global do Texto: ${fOpt.label}`}
                  className={`px-1.5 py-1 text-[11px] font-mono font-bold rounded transition-all min-h-[30px] ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 font-extrabold shadow-sm'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/50'
                  }`}
                >
                  {fOpt.shortLabel}
                </button>
              );
            })}
          </div>

          {/* Compact Global Font Size Cycle Button (Medium & Mobile screens) */}
          <button
            onClick={handleCycleFontSize}
            title={`Aumentar Tamanho da Fonte (Atual: ${fontSize.toUpperCase()})`}
            className="p-1.5 min-h-[38px] min-w-[38px] text-stone-300 hover:text-amber-400 hover:bg-stone-800/60 rounded-lg border border-stone-700/80 transition-colors flex items-center justify-center gap-1"
            aria-label="Aumentar Fonte do App"
          >
            <Type className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] font-mono font-bold text-amber-400">
              {fontSize === 'normal' ? '1x' : fontSize === 'medio' ? '1.15x' : fontSize === 'grande' ? '1.3x' : '1.45x'}
            </span>
          </button>

          {/* Desktop 3-Way Segmented Theme Switcher */}
          <div 
            className="hidden sm:flex items-center bg-stone-900/90 border border-stone-700/80 p-0.5 rounded-lg shadow-inner"
            role="group"
            aria-label="Seleção de Tema de Leitura"
          >
            {THEME_OPTIONS.map((opt) => {
              const isSelected = theme === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => onSelectTheme(opt.id)}
                  title={`${opt.label} — ${opt.description}`}
                  className={`px-2 py-1.5 text-xs font-mono font-medium rounded-md transition-all flex items-center gap-1.5 min-h-[34px] ${
                    isSelected
                      ? 'bg-stone-800 text-amber-400 font-bold border border-stone-600 shadow-sm'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/40'
                  }`}
                >
                  {getThemeIcon(opt.id)}
                  <span className="hidden xl:inline">{opt.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Compact Theme Cycle Button for Small Screens (< 640px) */}
          <button
            onClick={handleCycleTheme}
            title={`Tema Atual: ${theme.toUpperCase()} (Clique para alternar Preto / Branco / Bege)`}
            className="sm:hidden p-2 min-h-[44px] min-w-[44px] text-stone-300 hover:text-amber-400 hover:bg-stone-800/60 rounded-lg border border-stone-800 transition-colors flex items-center justify-center gap-1"
            aria-label="Alternar Tema de Leitura"
          >
            {getThemeIcon(theme)}
            <span className="text-[10px] font-mono uppercase font-bold text-amber-400">{theme.slice(0, 3)}</span>
          </button>

          {/* Audio Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Desativar áudio mecânico' : 'Ativar áudio mecânico'}
            className="p-2 min-h-[44px] min-w-[44px] text-stone-400 hover:text-stone-200 hover:bg-stone-800/60 rounded-lg transition-colors flex items-center justify-center"
            aria-label="Controle de Áudio"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
          </button>

          {/* Research Notebook Button */}
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
          <div className="md:hidden absolute top-full left-0 right-0 z-40 bg-[#141417]/98 border-b border-stone-800 shadow-2xl backdrop-blur p-4 space-y-4 animate-in slide-in-from-top-2 duration-150">
            {/* Global Font Size Selector inside Mobile Drawer */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase text-stone-500 tracking-wider px-1 flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-amber-400" />
                <span>Tamanho da Fonte Global</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {FONT_SIZE_OPTIONS.map((fOpt) => {
                  const isSelected = fontSize === fOpt.id;
                  return (
                    <button
                      key={fOpt.id}
                      onClick={() => onSelectFontSize(fOpt.id)}
                      className={`px-2 py-2 rounded-lg text-xs font-mono font-bold border transition-all ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950 font-black border-amber-500 shadow-sm'
                          : 'bg-stone-850 text-stone-300 border-stone-700/80 hover:bg-stone-800'
                      }`}
                    >
                      {fOpt.shortLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Theme Selector Section inside Mobile Drawer */}
            <div className="space-y-2 border-t border-stone-800 pt-3">
              <div className="text-[11px] font-mono uppercase text-stone-500 tracking-wider px-1">
                Tema Visual do Acervo
              </div>
              <div className="grid grid-cols-3 gap-2">
                {THEME_OPTIONS.map((opt) => {
                  const isSelected = theme === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        onSelectTheme(opt.id);
                      }}
                      className={`px-2.5 py-2 rounded-lg text-xs font-medium flex flex-col items-center justify-center gap-1 border transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 text-amber-400 font-bold border-amber-500/50 shadow-sm'
                          : 'bg-stone-850 text-stone-300 border-stone-700/80 hover:bg-stone-800'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        {getThemeIcon(opt.id)}
                        <span>{opt.shortLabel}</span>
                      </div>
                      <span className="text-[9px] font-mono opacity-70">
                        {opt.id === 'preto' ? 'Escuro' : opt.id === 'branco' ? 'Claro' : 'Sépia'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-stone-800 pt-3">
              <div className="text-[11px] font-mono uppercase text-stone-500 tracking-wider px-1 mb-2">
                Navegação do Acervo
              </div>
              <div className="space-y-1.5">
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
                      className={`nav-btn-clean w-full text-left px-3.5 py-3 min-h-[48px] rounded-lg text-sm font-medium flex items-center gap-3 transition-colors ${
                        isActive
                          ? 'bg-amber-500/15 text-amber-400 font-semibold border-amber-500/30'
                          : 'text-stone-300 hover:bg-stone-800/80 hover:text-stone-100'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
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

