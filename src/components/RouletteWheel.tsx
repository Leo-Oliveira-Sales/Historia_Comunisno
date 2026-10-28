import React, { useRef, useState, useEffect } from 'react';
import { DossierTopic, HistoricalCuriosity } from '../types/dossier';
import { HISTORICAL_CURIOSITIES } from '../data/curiositiesDatabase';
import { playRatchetTick, playStampSound, playTypewriterClack } from '../utils/audio';
import { 
  Sparkles, 
  Compass, 
  BookOpen, 
  AlertTriangle, 
  GraduationCap,
  Flame,
  ArrowRight,
  ListFilter,
  ChevronDown,
  RotateCcw,
  X,
  FileText,
  Clock,
  Archive,
  Eye
} from 'lucide-react';

interface RouletteWheelProps {
  topics: DossierTopic[];
  onSelectTopic: (topic: DossierTopic) => void;
  selectedTopic: DossierTopic | null;
}

export const RouletteWheel: React.FC<RouletteWheelProps> = ({
  topics,
  onSelectTopic,
}) => {
  const curiosities = HISTORICAL_CURIOSITIES;
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [winnerCuriosity, setWinnerCuriosity] = useState<HistoricalCuriosity>(curiosities[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const lastSoundSectorRef = useRef<number>(-1);

  const totalSectors = curiosities.length;
  const sectorAngle = (2 * Math.PI) / totalSectors;

  // Sector color palette: Vibrant archival tones
  const colors = [
    '#991b1b', '#18181b', '#b45309', '#27272a',
    '#7f1d1d', '#1f2937', '#c2410c', '#18181b',
    '#854d0e', '#292524', '#a12323', '#1e293b',
    '#92400e', '#1c1917', '#b91c1c', '#27272a',
    '#d97706', '#1f2937', '#881337', '#18181b',
  ];

  // Draw the wheel onto canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 16;

    ctx.clearRect(0, 0, width, height);

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotationAngle);

    // Draw slices
    for (let i = 0; i < totalSectors; i++) {
      const startAngle = i * sectorAngle;
      const endAngle = startAngle + sectorAngle;
      const item = curiosities[i];

      // Slice background
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();

      // Hairline sector border
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#d4af37';
      ctx.stroke();

      // Sector label
      ctx.save();
      ctx.rotate(startAngle + sectorAngle / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';

      // Number badge
      ctx.fillStyle = '#fef3c7';
      ctx.font = 'bold 11px "Space Mono", monospace';
      ctx.fillText(String(i + 1).padStart(2, '0'), radius - 16, 0);

      // Compact Curiosity Label
      ctx.fillStyle = '#f3f4f6';
      ctx.font = '700 10.5px "Plus Jakarta Sans", sans-serif';
      const label = item.shortLabel.length > 17 
        ? item.shortLabel.slice(0, 16) + '…' 
        : item.shortLabel;
      ctx.fillText(label, radius - 44, 0);

      ctx.restore();
    }

    // Outer wheel brass rim
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#856114';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius + 4, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#d4af37';
    ctx.stroke();

    // Inner brass center hub
    ctx.beginPath();
    ctx.arc(0, 0, 42, 0, 2 * Math.PI);
    ctx.fillStyle = '#141416';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#d4af37';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, 32, 0, 2 * Math.PI);
    ctx.fillStyle = '#991b1b';
    ctx.fill();

    ctx.fillStyle = '#fef3c7';
    ctx.font = 'bold 10px "Space Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('FATOS', 0, -5);
    ctx.font = 'bold 8.5px "Space Mono", monospace';
    ctx.fillText('SECRETOS', 0, 7);

    ctx.restore();
  }, [rotationAngle, curiosities, totalSectors, sectorAngle]);

  const spinRoulette = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setIsModalOpen(false);

    // Pick random target index
    const targetIndex = Math.floor(Math.random() * totalSectors);
    const targetCuriosity = curiosities[targetIndex];

    // Pointer is at TOP (angle 3PI/2)
    const pointerAngle = (3 * Math.PI) / 2;
    const sectorCenter = (targetIndex + 0.5) * sectorAngle;
    const targetNormalizedAngle = (pointerAngle - sectorCenter + 2 * Math.PI) % (2 * Math.PI);

    // Add 6 to 9 full spins
    const fullSpins = (6 + Math.floor(Math.random() * 4)) * 2 * Math.PI;
    const startAngle = rotationAngle % (2 * Math.PI);
    const totalDelta = fullSpins + (targetNormalizedAngle - (startAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    const startTime = performance.now();
    const duration = 5200; // 5.2 seconds

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Deceleration curve
      const ease = 1 - Math.pow(1 - progress, 3.5);
      const currentAngle = startAngle + totalDelta * ease;

      setRotationAngle(currentAngle);

      // Tick sound
      const currentWheelRotation = currentAngle % (2 * Math.PI);
      const activeAngleUnderPointer = (pointerAngle - currentWheelRotation + 4 * Math.PI) % (2 * Math.PI);
      const currentSector = Math.floor(activeAngleUnderPointer / sectorAngle) % totalSectors;

      if (currentSector !== lastSoundSectorRef.current) {
        lastSoundSectorRef.current = currentSector;
        playRatchetTick(0.85 + (progress * 0.4));
      }

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        setWinnerCuriosity(targetCuriosity);
        playStampSound();
        // Automatically open the curiosity viewer when wheel finishes spinning
        setIsModalOpen(true);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
  };

  const instantRandom = () => {
    if (isSpinning) return;
    const targetIndex = Math.floor(Math.random() * totalSectors);
    const chosen = curiosities[targetIndex];
    selectDirectly(chosen);
    playStampSound();
  };

  const selectDirectly = (curiosity: HistoricalCuriosity) => {
    if (isSpinning) return;
    playTypewriterClack();
    setWinnerCuriosity(curiosity);

    // Smoothly align wheel pointer to the chosen curiosity sector
    const targetIndex = curiosities.findIndex((c) => c.id === curiosity.id);
    if (targetIndex >= 0) {
      const pointerAngle = (3 * Math.PI) / 2;
      const sectorCenter = (targetIndex + 0.5) * sectorAngle;
      const targetNormalizedAngle = (pointerAngle - sectorCenter + 2 * Math.PI) % (2 * Math.PI);
      setRotationAngle(targetNormalizedAngle);
    }

    // Open curiosity viewer directly
    setIsModalOpen(true);
  };

  const handleOpenRelatedDossier = () => {
    const related = topics.find((t) => t.id === winnerCuriosity.relatedTopicId);
    if (related) {
      playStampSound();
      setIsModalOpen(false);
      onSelectTopic(related);
    }
  };

  useEffect(() => {
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Distinct categories for organized select dropdown optgroups
  const categoriesList = [
    'Cotidiano Bizarro',
    'Diplomacia Secreta',
    'Repressão & KGB',
    'Propaganda & Culto',
    'Ciência & Espionagem',
    'Guerra & Fomes'
  ] as const;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* SELECTION INTERFACE: LISTA SUSPENSA (DROPDOWN) */}
      <div className="bg-[#151518] border border-stone-800 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/40 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="dossier-stamp-red text-[10px]">CURIOSIDADES</span>
              <h2 className="text-sm sm:text-base font-display font-bold text-stone-100">
                Roleta & Lista Suspensa de Curiosidades
              </h2>
            </div>
            <p className="text-xs font-serif text-stone-400 mt-0.5">
              Gire a roleta para sortear ou escolha qualquer curiosidade na <strong>lista suspensa</strong> abaixo:
            </p>
          </div>
        </div>

        {/* LISTA SUSPENSA (SELECT DROPDOWN) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
          <div className="relative flex-1 sm:w-80 md:w-96">
            <label htmlFor="curiosity-select-dropdown" className="sr-only">
              Selecionar Curiosidade na Lista Suspensa
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-400">
              <ListFilter className="w-4 h-4" />
            </div>
            <select
              id="curiosity-select-dropdown"
              value={winnerCuriosity.id}
              onChange={(e) => {
                const chosen = curiosities.find((c) => c.id === Number(e.target.value));
                if (chosen) selectDirectly(chosen);
              }}
              disabled={isSpinning}
              className="w-full bg-[#1b1b1f] hover:bg-[#202026] text-stone-200 border border-stone-700 hover:border-amber-500/80 rounded-lg pl-9 pr-10 py-2.5 text-xs sm:text-sm font-serif appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer transition-colors shadow-inner disabled:opacity-50"
            >
              {categoriesList.map((categoryGroup) => {
                const groupItems = curiosities.filter((c) => c.category === categoryGroup);
                if (groupItems.length === 0) return null;

                return (
                  <optgroup key={categoryGroup} label={`--- ${categoryGroup.toUpperCase()} ---`} className="bg-[#141416] text-amber-400 font-mono font-bold">
                    {groupItems.map((c) => (
                      <option 
                        key={c.id} 
                        value={c.id}
                        className="bg-[#1b1b1f] text-stone-200 py-1.5 font-sans font-normal"
                      >
                        Nº {String(c.id).padStart(2, '0')} · {c.shortLabel} ({c.year})
                      </option>
                    ))}
                  </optgroup>
                );
              })}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-stone-400">
              <ChevronDown className="w-4 h-4 text-amber-400" />
            </div>
          </div>

          {/* Quick random button next to dropdown */}
          <button
            onClick={instantRandom}
            disabled={isSpinning}
            className="px-3.5 py-2.5 rounded-lg text-xs font-medium bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors flex items-center justify-center gap-1.5 shrink-0"
            title="Sortear aleatoriamente"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            <span>Aleatório</span>
          </button>
        </div>
      </div>

      {/* CENTERED ROULETTE WHEEL ARENA (WITHOUT STATIC CARDS) */}
      <div className="bg-[#18181c] border border-stone-800/80 rounded-xl p-3 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Background Archival Seal */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
          <span className="font-display text-[120px] sm:text-[160px] font-black text-amber-500">CCCP</span>
        </div>

        {/* Top Pointer Indicator */}
        <div className="relative flex flex-col items-center">
          <div className="absolute -top-3 z-20 flex flex-col items-center">
            <div className="w-0 h-0 border-l-[14px] sm:border-l-[16px] border-l-transparent border-r-[14px] sm:border-r-[16px] border-r-transparent border-t-[22px] sm:border-t-[26px] border-t-amber-400 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-red-600 -mt-1 shadow-sm" />
          </div>

          {/* Canvas Wrapper */}
          <div className="relative p-1.5 sm:p-3 bg-[#121215] rounded-full border-2 border-stone-800 shadow-[0_0_50px_rgba(0,0,0,0.7)] max-w-[92vw]">
            <canvas
              ref={canvasRef}
              width={460}
              height={460}
              className="w-[260px] h-[260px] xs:w-[300px] xs:h-[300px] sm:w-[400px] sm:h-[400px] md:w-[440px] md:h-[440px] max-w-full cursor-pointer touch-manipulation transition-transform active:scale-[0.99]"
              onClick={spinRoulette}
              title="Clique ou toque para girar a roleta de curiosidades"
            />
          </div>
        </div>

        {/* Roulette Control Buttons */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 justify-center w-full max-w-md relative z-10">
          <button
            onClick={spinRoulette}
            disabled={isSpinning}
            className={`w-full sm:w-auto px-6 py-3.5 min-h-[44px] rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2.5 transition-all shadow-xl ${
              isSpinning
                ? 'bg-stone-800 text-stone-500 cursor-not-allowed'
                : 'bg-red-700 hover:bg-red-600 text-white hover:shadow-red-900/40 active:scale-95'
            }`}
          >
            <Compass className={`w-4 h-4 sm:w-5 sm:h-5 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>{isSpinning ? 'Girando a Roleta...' : 'Girar Roleta de Curiosidades'}</span>
          </button>

          <button
            onClick={instantRandom}
            disabled={isSpinning}
            className="w-full sm:w-auto px-5 py-3.5 min-h-[44px] rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 border border-stone-700 transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Sorteio Instantâneo</span>
          </button>
        </div>

        {/* Selected Curiosity Bar Indicator (Clean & Minimalist) */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-stone-800/80 w-full max-w-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-left bg-[#131316] p-3.5 sm:p-4 rounded-lg border border-stone-800">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
              <span className="text-amber-400 font-bold">Nº {String(winnerCuriosity.id).padStart(2, '0')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-300">{winnerCuriosity.category}</span>
              <span aria-hidden="true">·</span>
              <span>{winnerCuriosity.year}</span>
            </div>
            <h4 className="text-sm sm:text-base font-display font-bold text-stone-100 truncate">
              {winnerCuriosity.title}
            </h4>
          </div>

          <button
            onClick={() => {
              playTypewriterClack();
              setIsModalOpen(true);
            }}
            className="w-full sm:w-auto px-4 py-2.5 min-h-[40px] bg-amber-500 hover:bg-amber-400 active:scale-95 text-stone-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow"
          >
            <Eye className="w-4 h-4" />
            <span>Visualizar História Completa</span>
          </button>
        </div>
      </div>

      {/* MODAL DA CURIOSIDADE HISTÓRICA DESCLASSIFICADA */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/90 backdrop-blur-sm overflow-hidden animate-in fade-in duration-200">
          <div 
            className="bg-[#18181c] border-0 sm:border sm:border-stone-700 rounded-none sm:rounded-xl w-full max-w-2xl h-[100dvh] sm:h-auto sm:max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-[#121215] border-b border-stone-800 p-3 sm:p-5 flex items-start justify-between gap-2.5 sm:gap-3 shrink-0">
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="dossier-stamp-red text-[9px] sm:text-[10px]">CURIOSIDADE HISTÓRICA</span>
                  <span className="dossier-stamp-amber text-[9px] sm:text-[10px]">{winnerCuriosity.category}</span>
                  <span className="text-[11px] sm:text-xs font-mono text-stone-400">
                    Nº {String(winnerCuriosity.id).padStart(2, '0')} · {winnerCuriosity.year}
                  </span>
                </div>
                <h3 className="text-base sm:text-xl font-display font-bold text-stone-100 leading-snug break-words">
                  {winnerCuriosity.title}
                </h3>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 min-h-[44px] min-w-[44px] text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-colors flex items-center justify-center shrink-0"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
              {/* Teaser Highlight */}
              <div className="p-4 bg-stone-900/90 border-l-4 border-amber-500 rounded-r-lg font-serif italic text-amber-200/90 text-sm sm:text-base leading-relaxed">
                "{winnerCuriosity.teaser}"
              </div>

              {/* Shock Fact Box */}
              <div className="p-3.5 bg-red-950/40 border border-red-800/60 rounded-lg space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Fato Documentado em Arquivo Oficial:</span>
                </div>
                <p className="text-xs sm:text-sm font-serif text-stone-200 leading-relaxed">
                  {winnerCuriosity.shockFact}
                </p>
              </div>

              {/* Full Story Narrative */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-stone-400 tracking-wider block">
                  A História dos Acontecimentos:
                </span>
                <div className="font-serif text-stone-300 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-3 bg-[#131316] p-4 rounded-lg border border-stone-800/80">
                  {winnerCuriosity.fullStory}
                </div>
              </div>

              {/* Archive and Historian Attribution */}
              <div className="pt-3 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-stone-400">
                <div className="bg-[#121215] p-3 rounded border border-stone-800/80">
                  <div className="flex items-center gap-1.5 text-stone-300 font-bold mb-1">
                    <Archive className="w-3.5 h-3.5 text-amber-400" />
                    <span>Fonte Documental Primária:</span>
                  </div>
                  <span className="text-stone-400 text-[11px] block">{winnerCuriosity.archivalSource}</span>
                </div>

                <div className="bg-[#121215] p-3 rounded border border-stone-800/80">
                  <div className="flex items-center gap-1.5 text-stone-300 font-bold mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Historiadores de Referência:</span>
                  </div>
                  <span className="text-amber-400/90 text-[11px] block">{winnerCuriosity.historianReference}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="p-4 bg-[#121215] border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-medium rounded-lg transition-colors"
              >
                Fechar e Voltar à Roleta
              </button>

              <button
                onClick={handleOpenRelatedDossier}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Abrir Dossiê & Ensaio Completo deste Tema</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
