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

        </div>
      </header>

      {/* Mobile Floating Side Button for instant lateral menu access from anywhere */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="md:hidden fixed top-1/2 right-0 -translate-y-1/2 z-30 bg-amber-500 hover:bg-amber-400 active:scale-95 text-stone-950 font-bold px-2 py-3.5 rounded-l-xl shadow-2xl flex flex-col items-center justify-center gap-1 border-y border-l border-amber-300 text-[10px] font-mono uppercase tracking-wider transition-all"
        title="Abrir Navegação Lateral"
        aria-label="Abrir Navegação Lateral"
      >
        <Menu className="w-4 h-4 text-stone-950" />
        <span className="[writing-mode:vertical-lr] rotate-180 font-mono tracking-widest text-[9px] font-black my-0.5">MENU</span>
      </button>

      {/* Mobile Lateral Off-Canvas Sidebar Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex justify-end">
          {/* Dark Backdrop Overlay */}
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Lateral Slide-Over Panel */}
          <aside 
            className="relative z-10 w-80 max-w-[85vw] h-full bg-[#151518] border-l border-stone-800 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200 p-5 space-y-6 text-stone-200"
            role="dialog"
            aria-label="Menu Lateral de Navegação"
          >
            {/* Panel Top Header */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block"></span>
                <span className="font-display font-bold text-sm text-stone-100 uppercase tracking-tight">
                  Navegação do Acervo
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
                aria-label="Fechar Menu Lateral"
              >
                <X className="w-5 h-5 text-amber-400" />
              </button>
            </div>

            {/* Primary Lateral Navigation Buttons */}
            <div className="space-y-2 flex-1">
              <div className="text-[10px] font-mono uppercase text-stone-500 tracking-wider px-1 mb-2 font-bold">
                Seções do Dossiê
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
                    className={`w-full text-left px-4 py-3 min-h-[48px] rounded-xl text-sm font-semibold flex items-center justify-between transition-all border ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-400 border-amber-500/40 shadow-sm font-bold'
                        : 'bg-stone-900/60 text-stone-300 hover:bg-stone-800/80 hover:text-stone-100 border-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    )}
                  </button>
                );
              })}

              {/* Notebook direct button inside lateral list */}
              <button
                onClick={() => {
                  onOpenNotebook();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 min-h-[48px] rounded-xl text-sm font-semibold bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-800 flex items-center justify-between transition-all mt-3"
              >
                <div className="flex items-center gap-3">
                  <Bookmark className="w-4 h-4 text-amber-400" />
                  <span>Caderno de Pesquisa</span>
                </div>
                {savedCount > 0 && (
                  <span className="bg-red-700 text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-full">
                    {savedCount}
                  </span>
                )}
              </button>
            </div>

            {/* Global Font Size Controls */}
            <div className="space-y-2 pt-4 border-t border-stone-800">
              <div className="text-[10px] font-mono uppercase text-stone-500 tracking-wider px-1 flex items-center gap-1.5 font-bold">
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
                      className={`py-2 rounded-lg text-xs font-mono font-bold border transition-all flex items-center justify-center min-h-[38px] ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950 font-black border-amber-500 shadow'
                          : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800'
                      }`}
                    >
                      {fOpt.shortLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visual Theme Selector */}
            <div className="space-y-2 pt-4 border-t border-stone-800">
              <div className="text-[10px] font-mono uppercase text-stone-500 tracking-wider px-1 font-bold">
                Tema Visual do Acervo
              </div>
              <div className="grid grid-cols-3 gap-2">
                {THEME_OPTIONS.map((opt) => {
                  const isSelected = theme === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => onSelectTheme(opt.id)}
                      className={`p-2.5 rounded-xl text-xs font-medium flex flex-col items-center justify-center gap-1 border transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 text-amber-400 font-bold border-amber-500/50 shadow'
                          : 'bg-stone-900 text-stone-300 border-stone-800 hover:bg-stone-800'
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

            {/* Footer Branding */}
            <div className="pt-4 border-t border-stone-800 text-[11px] font-mono text-stone-500 text-center">
              Dossiê Soviético · Cátedra Historiográfica
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

