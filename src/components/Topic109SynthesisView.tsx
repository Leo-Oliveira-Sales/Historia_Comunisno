import React from 'react';
import { BookOpen, Compass, Lightbulb, Target, Layers } from 'lucide-react';

interface Props {
  getFontSizeClass: (type?: 'heading' | 'body' | 'quote') => string;
}

export const Topic109SynthesisView: React.FC<Props> = ({ getFontSizeClass }) => {
  const etapas = [
    { etapa: 'Revisionismo', referencia: 'Bernstein, 1899', transformacao: 'Reformas graduais e democracia parlamentar' },
    { etapa: 'Keynesianismo', referencia: 'Keynes, 1936', transformacao: 'Intervenção macroeconômica e pleno emprego' },
    { etapa: 'Welfare State', referencia: 'Beveridge, 1942', transformacao: 'Segurança social abrangente' },
    { etapa: 'Social-democracia moderna', referencia: 'Bad Godesberg, 1959', transformacao: 'Aceitação da economia de mercado regulada' },
    { etapa: 'Justiça contemporânea', referencia: 'Rawls e Sen', transformacao: 'Fundamentação filosófica da igualdade e das capacidades' },
  ];

  const conceitos = [
    {
      term: 'Social-democracia:',
      desc: 'tradição política que defende a transformação social por meio da democracia representativa, das reformas institucionais e da proteção social.'
    },
    {
      term: 'Revisionismo:',
      desc: 'revisão de interpretações e estratégias socialistas tradicionais, especialmente das expectativas de colapso inevitável do capitalismo.'
    },
    {
      term: 'Keynesianismo:',
      desc: 'tradição econômica que atribui importância à demanda agregada e à intervenção pública na estabilização da economia.'
    },
    {
      term: 'Welfare State:',
      desc: 'Estado que assume responsabilidades permanentes pela proteção social.'
    },
    {
      term: 'Economia mista:',
      desc: 'sistema que combina propriedade privada, mercado, regulação e atuação econômica do poder público.'
    },
    {
      term: 'Economia Social de Mercado:',
      desc: 'modelo que combina liberdade econômica e concorrência com responsabilidade social e estrutura jurídica regulatória.'
    },
    {
      term: 'Estado Social de Direito:',
      desc: 'Estado constitucional que preserva as liberdades e garantias jurídicas e assume responsabilidades na promoção de direitos sociais.'
    },
    {
      term: 'Justiça distributiva:',
      desc: 'discussão sobre a distribuição de recursos, oportunidades, benefícios e encargos dentro de uma sociedade.'
    },
    {
      term: 'Capacidades:',
      desc: 'oportunidades reais de os indivíduos realizarem atividades e alcançarem condições de vida que valorizam.'
    },
  ];

  return (
    <div className="bg-[#161619] border border-stone-800 p-6 sm:p-9 rounded-xl space-y-8 shadow-xl">
      {/* Header */}
      <div className="border-b border-stone-800 pb-5 space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold inline-block">
          REGISTRO Nº 09 · SÍNTESE ACADÊMICA
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
          2. SÍNTESE ACADÊMICA
        </h3>
      </div>

      {/* 2.1. Problema histórico central */}
      <div className="space-y-3">
        <div className="flex items-center gap-2.5 border-l-4 border-amber-500 pl-3">
          <Target className="w-4 h-4 text-amber-400 shrink-0" />
          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg tracking-wide">
            2.1. Problema histórico central
          </h4>
        </div>
        <p className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          Como a social-democracia transformou o socialismo reformista em um projeto de organização democrática do capitalismo, combinando liberdade constitucional, intervenção estatal, proteção social e justiça distributiva?
        </p>
      </div>

      {/* 2.2. Hipótese interpretativa */}
      <div className="space-y-3">
        <div className="flex items-center gap-2.5 border-l-4 border-amber-500 pl-3">
          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg tracking-wide">
            2.2. Hipótese interpretativa
          </h4>
        </div>
        <div className={`font-serif text-stone-300 text-justify leading-relaxed space-y-3 ${getFontSizeClass('body')}`}>
          <p>
            A social-democracia contribuiu para democratizar o capitalismo ao construir instituições que limitaram determinados efeitos da desigualdade econômica e ampliaram os direitos sociais.
          </p>
          <p>
            Essa transformação não resultou de uma única teoria ou liderança. Foi produzida pela interação entre movimentos operários, sindicatos, partidos políticos, economistas, filósofos, governos e instituições democráticas.
          </p>
        </div>
      </div>

      {/* 2.3. Tese central */}
      <div className="space-y-3">
        <div className="flex items-center gap-2.5 border-l-4 border-amber-500 pl-3">
          <Compass className="w-4 h-4 text-amber-400 shrink-0" />
          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg tracking-wide">
            2.3. Tese central
          </h4>
        </div>
        <p className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          A consolidação do Estado Social de Direito representou uma transformação da cidadania moderna: os direitos civis e políticos passaram a coexistir com responsabilidades públicas relacionadas à saúde, educação, previdência, emprego e proteção contra riscos sociais.
        </p>
      </div>

      {/* 2.4. Cinco etapas fundamentais */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 border-l-4 border-amber-500 pl-3">
          <Layers className="w-4 h-4 text-amber-400 shrink-0" />
          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg tracking-wide">
            2.4. Cinco etapas fundamentais
          </h4>
        </div>
        <div className="overflow-x-auto border border-stone-800 rounded-xl shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm font-serif">
            <thead className="bg-stone-900 border-b border-stone-800 text-stone-200">
              <tr>
                <th className="p-3.5 font-bold uppercase tracking-wider text-amber-400">Etapa</th>
                <th className="p-3.5 font-bold uppercase tracking-wider text-amber-400">Referência</th>
                <th className="p-3.5 font-bold uppercase tracking-wider text-amber-400">Transformação histórica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/80 bg-[#121214]">
              {etapas.map((item, idx) => (
                <tr key={idx} className="hover:bg-stone-900/40 transition-colors">
                  <td className="p-3.5 text-stone-100 font-semibold">{item.etapa}</td>
                  <td className="p-3.5 text-amber-300 font-mono text-xs">{item.referencia}</td>
                  <td className="p-3.5 text-stone-300 leading-relaxed">{item.transformacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2.5. Conceitos fundamentais */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 border-l-4 border-amber-500 pl-3">
          <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg tracking-wide">
            2.5. Conceitos fundamentais
          </h4>
        </div>
        <div className={`space-y-3 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
          {conceitos.map((c, idx) => (
            <div key={idx} className="bg-[#121214] p-4 rounded-lg border border-stone-800/80">
              <strong className="text-amber-300 font-bold">{c.term}</strong>{' '}
              <span>{c.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
