import React, { useState } from 'react';
import { QuizQuestion, DossierTopic } from '../types/dossier';
import { QUIZ_QUESTIONS } from '../data/dossierDatabase';
import { playStampSound, playTypewriterClack } from '../utils/audio';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck, 
  BookOpen 
} from 'lucide-react';

interface QuizModalProps {
  topics: DossierTopic[];
  onSelectTopic: (topic: DossierTopic) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ topics, onSelectTopic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    playTypewriterClack();

    if (idx === currentQ.correctIndex) {
      setScore((s) => s + 1);
      playStampSound();
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      playTypewriterClack();
    } else {
      setIsCompleted(true);
      playStampSound();
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
    playTypewriterClack();
  };

  const linkedTopic = topics.find((t) => t.id === currentQ?.topicId);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Intro Header */}
      <div className="bg-[#17171a] border border-stone-800 rounded-xl p-4 sm:p-6 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-500 mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>AVALIAÇÃO HISTORIOGRÁFICA & CHECAGEM DE FONTES</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-display font-bold text-stone-100">
          Desafio Acadêmico: Fatos, Tratados e Documentos
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 font-serif mt-2 leading-relaxed">
          Responda a perguntas baseadas diretamente nos tratados diplomáticos do Yale Avalon Project, despachos do Politburo, pesquisas de Robert Paxton, Timothy Snyder, Anne Applebaum, Frank Dikötter e registros do Memorial.
        </p>

        {/* Progress bar */}
        {!isCompleted && (
          <div className="mt-4 sm:mt-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-stone-400">
              <span>Questão {currentIndex + 1} de {QUIZ_QUESTIONS.length}</span>
              <span>Acertos: {score}</span>
            </div>
            <div className="w-full bg-stone-900 h-2 rounded-full overflow-hidden border border-stone-800">
              <div
                className="bg-amber-500 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Active Question Card */}
      {!isCompleted ? (
        <div className="bg-[#17171b] border border-stone-800 rounded-xl p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="dossier-stamp-amber text-[10px]">DOCUMENTO FONTE</span>
            <span className="text-xs font-mono text-stone-400">
              {currentQ.sourceDoc}
            </span>
          </div>

          <h3 className="text-base sm:text-xl font-display font-bold text-stone-100 leading-snug">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-2.5 sm:space-y-3">
            {currentQ.options.map((opt, idx) => {
              let btnStyle = 'bg-[#141417] border-stone-800 text-stone-200 hover:bg-stone-800 hover:border-stone-700';

              if (isAnswered) {
                if (idx === currentQ.correctIndex) {
                  btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-medium shadow-sm';
                } else if (idx === selectedOption) {
                  btnStyle = 'bg-red-950/60 border-red-500 text-red-200';
                } else {
                  btnStyle = 'bg-[#121215] border-stone-900 text-stone-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-lg border text-sm font-serif transition-all flex items-start gap-3 ${btnStyle}`}
                >
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-900/80 border border-stone-700 shrink-0 text-stone-300">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-relaxed">{opt}</span>

                  {isAnswered && idx === currentQ.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation reveal */}
          {isAnswered && (
            <div className="p-4 bg-[#121215] border border-stone-800 rounded-lg space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold">
                {selectedOption === currentQ.correctIndex ? (
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Resposta Histórica Correta!
                  </span>
                ) : (
                  <span className="text-red-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> Resposta Incorreta
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm font-serif text-stone-300 leading-relaxed">
                {currentQ.explanation}
              </p>

              <div className="pt-2 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                {linkedTopic && (
                  <button
                    onClick={() => onSelectTopic(linkedTopic)}
                    className="text-amber-400 hover:text-amber-300 font-mono text-[11px] flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Inspecionar Dossiê Completo (#{linkedTopic.categoryNumber})</span>
                  </button>
                )}

                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-md flex items-center gap-1.5 ml-auto transition-colors"
                >
                  <span>{currentIndex + 1 < QUIZ_QUESTIONS.length ? 'Próxima Questão' : 'Ver Resultado Final'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Results Card */
        <div className="bg-[#17171b] border border-stone-800 rounded-xl p-8 text-center space-y-6 shadow-2xl">
          <div className="inline-flex p-4 rounded-full bg-stone-900 border border-stone-800">
            <ShieldCheck className="w-12 h-12 text-amber-400" />
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-stone-100">
              Desafio Concluído!
            </h3>
            <p className="text-sm font-serif text-stone-300 mt-2">
              Você acertou <strong className="text-amber-400 font-mono text-base">{score}</strong> de{' '}
              <strong className="text-stone-100 font-mono text-base">{QUIZ_QUESTIONS.length}</strong> questões baseadas em fontes primárias e monografias.
            </p>
          </div>

          <div className="p-4 bg-[#121215] border border-stone-800 rounded-lg max-w-md mx-auto text-xs font-mono text-stone-400">
            {score >= 7
              ? 'Excelente rigor analítico! Você demonstra sólido domínio da documentação primária do período soviético e dos tratados de entreguerras.'
              : score >= 4
              ? 'Bom desempenho! Explore os dossiês e as transcrições do Yale Avalon e Library of Congress para aprofundar os pontos divergentes.'
              : 'Recomendamos consultar a aba "Acervos & Monografias" e revisar os dossiês desclassificados do acervo.'}
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-semibold flex items-center gap-2 border border-stone-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Desafio</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
