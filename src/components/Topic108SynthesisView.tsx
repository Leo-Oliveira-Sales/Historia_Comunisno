import React from 'react';
import { BookOpen, Target, Compass, Lightbulb, CheckCircle2 } from 'lucide-react';

interface Props {
  getFontSizeClass: (type?: 'heading' | 'body' | 'quote') => string;
}

export const Topic108SynthesisView: React.FC<Props> = ({ getFontSizeClass }) => {
  const objetivosEspecificos = [
    '1. Examinar as raízes do nacionalismo étnico, do pensamento völkisch e do racialismo biológico.',
    '2. Investigar a crise do Império Alemão e a formação da República de Weimar.',
    '3. Analisar a trajetória política de Adolf Hitler e a formação do NSDAP.',
    '4. Explicar a ascensão eleitoral nazista e as negociações que permitiram a nomeação de Hitler.',
    '5. Investigar a destruição das instituições democráticas e a formação da ditadura.',
    '6. Analisar a nazificação das instituições e a estrutura de terror.',
    '7. Examinar a legislação racial e a exclusão dos judeus.',
    '8. Investigar a política de eugenia e o assassinato de pessoas com deficiência.',
    '9. Analisar o conceito de Lebensraum e a expansão para o Leste Europeu.',
    '10. Reconstruir o processo de radicalização da política antijudaica.',
    '11. Investigar a organização administrativa e material do Holocausto.',
    '12. Analisar a participação de instituições, empresas, militares e colaboradores.',
    '13. Examinar os debates historiográficos sobre intenção, radicalização, consenso e responsabilidade.'
  ];

  return (
    <div className="bg-[#161619] border border-stone-800 p-6 sm:p-9 rounded-xl space-y-8 shadow-xl">
      {/* Header */}
      <div className="border-b border-stone-800 pb-5 space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold inline-block">
          REGISTRO Nº 08 · SÍNTESE DO PROJETO
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
          SÍNTESE DO PROJETO
        </h3>
      </div>

      {/* 1. Identificação */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 border-l-4 border-amber-500 pl-3">
          <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg tracking-wide">
            1. Identificação
          </h4>
        </div>
        <div className={`bg-[#121214] p-5 rounded-lg border border-stone-800/80 space-y-3 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
          <p><strong className="text-amber-300">Título:</strong> Nazismo Alemão: Racialismo Biológico, Antissemitismo e a Ditadura Totalitária de Hitler.</p>
          <p><strong className="text-amber-300">Período:</strong> 1920–1945.</p>
          <p><strong className="text-amber-300">Eixo temático:</strong> Totalitarismo, nacionalismo racial, antissemitismo, eugenia, imperialismo, guerra de extermínio e genocídio.</p>
          <p><strong className="text-amber-300">Área:</strong> História Política, História Contemporânea, História das Ideologias e Estudos do Holocausto.</p>
        </div>
      </div>

      {/* 2. Objeto de investigação */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 border-l-4 border-amber-500 pl-3">
          <Compass className="w-4 h-4 text-amber-400 shrink-0" />
          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg tracking-wide">
            2. Objeto de investigação
          </h4>
        </div>
        <p className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          Investigar a formação, a ascensão e a consolidação do nacional-socialismo alemão, analisando a transformação de uma ideologia racial e nacionalista em um projeto de poder estatal, expansão territorial e genocídio.
        </p>
      </div>

      {/* 3. Problema central */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 border-l-4 border-amber-500 pl-3">
          <Target className="w-4 h-4 text-amber-400 shrink-0" />
          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg tracking-wide">
            3. Problema central
          </h4>
        </div>
        <p className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          Como o nacional-socialismo conseguiu transformar o racialismo biológico e o antissemitismo em fundamentos de organização do Estado, mobilização social, expansão imperial e extermínio sistemático de populações consideradas inimigas raciais?
        </p>
      </div>

      {/* 4. Hipótese interpretativa */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 border-l-4 border-amber-500 pl-3">
          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg tracking-wide">
            4. Hipótese interpretativa
          </h4>
        </div>
        <div className={`font-serif text-stone-300 text-justify leading-relaxed space-y-4 ${getFontSizeClass('body')}`}>
          <p>O nazismo não pode ser compreendido apenas como uma ditadura política ou como consequência da crise alemã do pós-guerra.</p>
          <p>Foi um projeto de reorganização racial da sociedade que combinou ideologia, instituições, mobilização popular, violência estatal e expansão territorial.</p>
          <p>A guerra criou condições decisivas para a radicalização e para a execução do genocídio, mas a centralidade do antissemitismo e da hierarquia racial estava presente desde a formação do movimento.</p>
        </div>
      </div>

      {/* 5. Objetivo geral */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 border-l-4 border-amber-500 pl-3">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg tracking-wide">
            5. Objetivo geral
          </h4>
        </div>
        <p className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          Analisar historicamente o desenvolvimento do nacional-socialismo entre 1920 e 1945, identificando suas matrizes ideológicas, mecanismos de conquista do poder, estruturas totalitárias, políticas raciais e práticas genocidas.
        </p>
      </div>

      {/* 6. Objetivos específicos */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 border-l-4 border-amber-500 pl-3">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg tracking-wide">
            6. Objetivos específicos
          </h4>
        </div>
        <div className={`space-y-2 pt-1 font-serif text-stone-300 ${getFontSizeClass('body')}`}>
          {objetivosEspecificos.map((obj, idx) => (
            <div key={idx} className="bg-[#121214] p-3.5 rounded-lg border border-stone-800/80 leading-relaxed">
              {obj}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
