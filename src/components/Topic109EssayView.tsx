import React, { useState } from 'react';
import { GraduationCap, Copy, Check } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

export const Topic109EssayView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState(false);

  const fullEssayText = `# ABA  — ENSAIO ACADÊMICO, (SÍNTESE E DOSSIÊ DE PESQUISA)

## CONSENSO DO PÓS-GUERRA E ESTADO SOCIAL DE DIREITO

### 1. ENSAIO ACADÊMICO

# A DEMOCRATIZAÇÃO DO CAPITALISMO: A SOCIAL-DEMOCRACIA ENTRE A LIBERDADE POLÍTICA E A JUSTIÇA DISTRIBUTIVA

## Introdução — O problema da conciliação

A história da social-democracia representa uma das experiências mais importantes de transformação das sociedades capitalistas modernas. Sua trajetória está associada à tentativa de compatibilizar três princípios que frequentemente entram em tensão: a liberdade individual, a igualdade política e a justiça distributiva.

O capitalismo industrial havia demonstrado extraordinária capacidade de produção de riqueza, mas sua expansão também produziu desigualdades econômicas, insegurança no trabalho e concentração patrimonial. O liberalismo político, por sua vez, havia estabelecido importantes garantias constitucionais, mas a igualdade formal perante a lei não era suficiente para eliminar as desigualdades materiais.

A social-democracia surgiu como uma das respostas a esse problema.

Seu projeto não consistiu simplesmente em substituir o capitalismo por um sistema de propriedade estatal integral. Gradualmente, parte importante de sua tradição passou a defender a transformação das relações sociais por meio da democracia parlamentar, da negociação coletiva, da legislação trabalhista, da tributação progressiva e da ampliação dos serviços públicos.

A hipótese central deste ensaio é que o reformismo social-democrata contribuiu para democratizar o capitalismo ao submeter parte de suas relações econômicas a instituições políticas e direitos sociais. Entretanto, essa conciliação permaneceu historicamente condicionada pela capacidade de crescimento econômico, pela organização dos trabalhadores e pelo equilíbrio político entre diferentes grupos sociais.

## 2. Bernstein e a transformação da estratégia socialista

A publicação de *Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie*, em 1899, marcou um momento importante na revisão das estratégias socialistas.

Eduard Bernstein questionou a ideia de que o capitalismo caminhava necessariamente para uma crise terminal que produziria uma transformação revolucionária inevitável.

Sua interpretação valorizava as transformações graduais e a possibilidade de ampliar os direitos dos trabalhadores por meio das instituições democráticas.

A importância de Bernstein está em reconhecer que a democracia não deveria ser apenas um instrumento temporário de conquista do poder. Ela constituía uma condição permanente de legitimidade do projeto socialista.

Rosa Luxemburgo, entretanto, identificou um problema fundamental: a reforma poderia converter-se em objetivo final e deixar de questionar as estruturas de poder econômico.

A controvérsia permanece central para a teoria política contemporânea.

A social-democracia precisa decidir constantemente se sua função é apenas administrar as consequências sociais do capitalismo ou transformar suas estruturas distributivas e institucionais.

## 3. Keynes e a responsabilidade macroeconômica do Estado

A crise de 1929 revelou que o desemprego poderia persistir mesmo quando os mecanismos tradicionais de mercado permanecessem formalmente em funcionamento.

Keynes demonstrou que a insuficiência da demanda agregada poderia provocar retração econômica, desemprego e novas quedas do consumo.

Sua teoria contribuiu para justificar a intervenção estatal na estabilização da economia.

A importância política dessa transformação foi profunda.

O desemprego deixou de ser interpretado exclusivamente como consequência de decisões individuais ou de rigidezes no mercado de trabalho. Passou a ser compreendido também como um problema macroeconômico que exigia responsabilidade pública.

O Estado passou a desempenhar papel central na manutenção do emprego, no investimento e na estabilidade econômica.

Entretanto, Keynes não apresentou uma teoria completa da justiça distributiva. Sua contribuição principal foi demonstrar que o capitalismo precisava de instrumentos de estabilização e que a ação estatal poderia impedir crises prolongadas.

## 4. Beveridge e a institucionalização da segurança social

O Relatório Beveridge, de 1942, representou uma tentativa de organizar a proteção social como um sistema abrangente.

A ideia de que a sociedade deveria combater pobreza, doença, ignorância, condições habitacionais precárias e desemprego expressava uma nova concepção de responsabilidade pública.

A proteção social deixava de ser entendida apenas como assistência aos indivíduos considerados incapazes de prover sua própria subsistência.

Passava a integrar a estrutura institucional da cidadania.

A criação do NHS, em 1948, representou uma das manifestações mais importantes dessa concepção.

O acesso à saúde tornou-se um direito organizado nacionalmente e financiado por recursos públicos.

A experiência britânica demonstrou que o Estado de Bem-Estar Social não dependia apenas de crescimento econômico, mas também de decisões políticas e de instituições administrativas capazes de universalizar serviços.

## 5. Bad Godesberg e a social-democracia como projeto de governo

O Programa de Bad Godesberg, de 1959, consolidou uma transformação fundamental na social-democracia alemã.

O SPD reconheceu a importância da economia de mercado, da propriedade privada e da concorrência, mas manteve a defesa da proteção social, da justiça distributiva e da democratização econômica.

A mudança permitiu ampliar a base social do partido.

O socialismo democrático passou a ser apresentado como uma orientação política aberta, fundamentada na liberdade, na justiça e na solidariedade.

A decisão representou uma adaptação à sociedade industrial do pós-guerra, na qual a expansão das classes médias e o crescimento econômico haviam alterado as estruturas eleitorais.

Entretanto, a aproximação com a economia de mercado também criou uma tensão duradoura: até que ponto a social-democracia poderia aceitar os mecanismos capitalistas sem perder sua capacidade de transformação?

## 6. Rawls, Sen e a fundamentação contemporânea da justiça

Rawls e Sen contribuíram para ampliar a fundamentação filosófica da justiça social.

Rawls argumentou que as desigualdades econômicas deveriam ser justificáveis perante os cidadãos, especialmente aqueles que ocupassem as posições menos favorecidas.

Sen, por sua vez, demonstrou que a justiça não pode ser avaliada exclusivamente pela renda ou pela disponibilidade de recursos.

É necessário considerar as capacidades reais dos indivíduos.

Essas contribuições permitem superar duas limitações.

A primeira consiste em acreditar que a igualdade jurídica, isoladamente, garante oportunidades equivalentes.

A segunda consiste em considerar que a distribuição de renda é suficiente para medir o bem-estar.

A justiça social exige instituições que ampliem as condições reais de participação e liberdade.

## 7. O problema dos limites do reformismo

O sucesso histórico do Estado de Bem-Estar Social esteve associado a condições específicas.

O crescimento econômico do pós-guerra permitiu ampliar a arrecadação e financiar serviços públicos.

A organização sindical fortaleceu a capacidade de negociação dos trabalhadores.

A competição eleitoral incentivou partidos a incorporar reivindicações sociais.

A reconstrução europeia e a Guerra Fria também contribuíram para a valorização da estabilidade social.

Entretanto, a crise dos anos 1970 revelou que o compromisso social não estava livre de contradições.

A inflação, o desemprego e as transformações da economia mundial enfraqueceram os mecanismos tradicionais de regulação.

A partir da década de 1980, políticas neoliberais alteraram as relações entre Estado e mercado.

O Welfare State não desapareceu, mas passou por reformas e disputas distributivas.

A social-democracia contemporânea precisa responder a novos desafios: globalização financeira, precarização do trabalho, envelhecimento populacional, automação, desigualdade patrimonial e crise ambiental.

## Conclusão

A social-democracia não eliminou as contradições do capitalismo, mas contribuiu para modificar profundamente suas instituições.

O reconhecimento de direitos sociais, a proteção dos trabalhadores, a ampliação da saúde e da educação públicas e a intervenção macroeconômica alteraram a relação entre cidadania e mercado.

O Estado Social de Direito representa uma tentativa de garantir que a liberdade econômica não seja exercida de maneira incompatível com a dignidade humana e a participação democrática.

Seu maior legado não está na criação de uma sociedade sem conflitos, mas na construção de instituições capazes de processar conflitos econômicos e sociais por meios democráticos.

A conciliação entre mercado e justiça distributiva permanece incompleta, disputada e historicamente reversível.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullEssayText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 w-full">
      {/* Header Banner */}
      <div className="bg-[#161619] border border-amber-600/50 p-5 sm:p-7 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                ABA — ENSAIO ACADÊMICO, (SÍNTESE E DOSSIÊ DE PESQUISA)
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                1. ENSAIO ACADÊMICO
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold pt-1">
              CONSENSO DO PÓS-GUERRA E ESTADO SOCIAL DE DIREITO
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 leading-snug">
              A DEMOCRATIZAÇÃO DO CAPITALISMO: A SOCIAL-DEMOCRACIA ENTRE A LIBERDADE POLÍTICA E A JUSTIÇA DISTRIBUTIVA
            </h2>
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-2 min-h-[38px] bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar ensaio acadêmico na íntegra"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Ensaio Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Ensaio Completo</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
          <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Registro Nº 09 · Economia Política Social e Instituições Democráticas</span>
        </div>
      </div>

      {/* 1. Introdução — O problema da conciliação */}
      <section id="essay-sec-1" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800 pb-3 ${getFontSizeClass('heading')}`}>
          Introdução — O problema da conciliação
        </h3>
        <div className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          <p>A história da social-democracia representa uma das experiências mais importantes de transformação das sociedades capitalistas modernas. Sua trajetória está associada à tentativa de compatibilizar três princípios que frequentemente entram em tensão: a liberdade individual, a igualdade política e a justiça distributiva.</p>
          <p>O capitalismo industrial havia demonstrado extraordinária capacidade de produção de riqueza, mas sua expansão também produziu desigualdades econômicas, insegurança no trabalho e concentração patrimonial. O liberalismo político, por sua vez, havia estabelecido importantes garantias constitucionais, mas a igualdade formal perante a lei não era suficiente para eliminar as desigualdades materiais.</p>
          <p>A social-democracia surgiu como uma das respostas a esse problema.</p>
          <p>Seu projeto não consistiu simplesmente em substituir o capitalismo por um sistema de propriedade estatal integral. Gradualmente, parte importante de sua tradição passou a defender a transformação das relações sociais por meio da democracia parlamentar, da negociação coletiva, da legislação trabalhista, da tributação progressiva e da ampliação dos serviços públicos.</p>
          <p>A hipótese central deste ensaio é que o reformismo social-democrata contribuiu para democratizar o capitalismo ao submeter parte de suas relações econômicas a instituições políticas e direitos sociais. Entretanto, essa conciliação permaneceu historicamente condicionada pela capacidade de crescimento econômico, pela organização dos trabalhadores e pelo equilíbrio político entre diferentes grupos sociais.</p>
        </div>
      </section>

      {/* 2. Bernstein e a transformação da estratégia socialista */}
      <section id="essay-sec-2" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800 pb-3 ${getFontSizeClass('heading')}`}>
          2. Bernstein e a transformação da estratégia socialista
        </h3>
        <div className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          <p>A publicação de <em className="italic text-amber-200/90">Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie</em>, em 1899, marcou um momento importante na revisão das estratégias socialistas.</p>
          <p>Eduard Bernstein questionou a ideia de que o capitalismo caminhava necessariamente para uma crise terminal que produziria uma transformação revolucionária inevitável.</p>
          <p>Sua interpretação valorizava as transformações graduais e a possibilidade de ampliar os direitos dos trabalhadores por meio das instituições democráticas.</p>
          <p>A importância de Bernstein está em reconhecer que a democracia não deveria ser apenas um instrumento temporário de conquista do poder. Ela constituía uma condição permanente de legitimidade do projeto socialista.</p>
          <p>Rosa Luxemburgo, entretanto, identificou um problema fundamental: a reforma poderia converter-se em objetivo final e deixar de questionar as estruturas de poder econômico.</p>
          <p>A controvérsia permanece central para a teoria política contemporânea.</p>
          <p>A social-democracia precisa decidir constantemente se sua função é apenas administrar as consequências sociais do capitalismo ou transformar suas estruturas distributivas e institucionais.</p>
        </div>
      </section>

      {/* 3. Keynes e a responsabilidade macroeconômica do Estado */}
      <section id="essay-sec-3" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800 pb-3 ${getFontSizeClass('heading')}`}>
          3. Keynes e a responsabilidade macroeconômica do Estado
        </h3>
        <div className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          <p>A crise de 1929 revelou que o desemprego poderia persistir mesmo quando os mecanismos tradicionais de mercado permanecessem formalmente em funcionamento.</p>
          <p>Keynes demonstrou que a insuficiência da demanda agregada poderia provocar retração econômica, desemprego e novas quedas do consumo.</p>
          <p>Sua teoria contribuiu para justificar a intervenção estatal na estabilização da economia.</p>
          <p>A importância política dessa transformação foi profunda.</p>
          <p>O desemprego deixou de ser interpretado exclusivamente como consequência de decisões individuais ou de rigidezes no mercado de trabalho. Passou a ser compreendido também como um problema macroeconômico que exigia responsabilidade pública.</p>
          <p>O Estado passou a desempenhar papel central na manutenção do emprego, no investimento e na estabilidade econômica.</p>
          <p>Entretanto, Keynes não apresentou uma teoria completa da justiça distributiva. Sua contribuição principal foi demonstrar que o capitalismo precisava de instrumentos de estabilização e que a ação estatal poderia impedir crises prolongadas.</p>
        </div>
      </section>

      {/* 4. Beveridge e a institucionalização da segurança social */}
      <section id="essay-sec-4" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800 pb-3 ${getFontSizeClass('heading')}`}>
          4. Beveridge e a institucionalização da segurança social
        </h3>
        <div className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          <p>O Relatório Beveridge, de 1942, representou uma tentativa de organizar a proteção social como um sistema abrangente.</p>
          <p>A ideia de que a sociedade deveria combater pobreza, doença, ignorância, condições habitacionais precárias e desemprego expressava uma nova concepção de responsabilidade pública.</p>
          <p>A proteção social deixava de ser entendida apenas como assistência aos indivíduos considerados incapazes de prover sua própria subsistência.</p>
          <p>Passava a integrar a estrutura institucional da cidadania.</p>
          <p>A criação do NHS, em 1948, representou uma das manifestações mais importantes dessa concepção.</p>
          <p>O acesso à saúde tornou-se um direito organizado nacionalmente e financiado por recursos públicos.</p>
          <p>A experiência britânica demonstrou que o Estado de Bem-Estar Social não dependia apenas de crescimento econômico, mas também de decisões políticas e de instituições administrativas capazes de universalizar serviços.</p>
        </div>
      </section>

      {/* 5. Bad Godesberg e a social-democracia como projeto de governo */}
      <section id="essay-sec-5" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800 pb-3 ${getFontSizeClass('heading')}`}>
          5. Bad Godesberg e a social-democracia como projeto de governo
        </h3>
        <div className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          <p>O Programa de Bad Godesberg, de 1959, consolidou uma transformação fundamental na social-democracia alemã.</p>
          <p>O SPD reconheceu a importância da economia de mercado, da propriedade privada e da concorrência, mas manteve a defesa da proteção social, da justiça distributiva e da democratização econômica.</p>
          <p>A mudança permitiu ampliar a base social do partido.</p>
          <p>O socialismo democrático passou a ser apresentado como uma orientação política aberta, fundamentada na liberdade, na justiça e na solidariedade.</p>
          <p>A decisão representou uma adaptação à sociedade industrial do pós-guerra, na qual a expansão das classes médias e o crescimento econômico haviam alterado as estruturas eleitorais.</p>
          <p>Entretanto, a aproximação com a economia de mercado também criou uma tensão duradoura: até que ponto a social-democracia poderia aceitar os mecanismos capitalistas sem perder sua capacidade de transformação?</p>
        </div>
      </section>

      {/* 6. Rawls, Sen e a fundamentação contemporânea da justiça */}
      <section id="essay-sec-6" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800 pb-3 ${getFontSizeClass('heading')}`}>
          6. Rawls, Sen e a fundamentação contemporânea da justiça
        </h3>
        <div className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          <p>Rawls e Sen contribuíram para ampliar a fundamentação filosófica da justiça social.</p>
          <p>Rawls argumentou que as desigualdades econômicas deveriam ser justificáveis perante os cidadãos, especialmente aqueles que ocupassem as posições menos favorecidas.</p>
          <p>Sen, por sua vez, demonstrou que a justiça não pode ser avaliada exclusivamente pela renda ou pela disponibilidade de recursos.</p>
          <p>É necessário considerar as capacidades reais dos indivíduos.</p>
          <p>Essas contribuições permitem superar duas limitações.</p>
          <p>A primeira consiste em acreditar que a igualdade jurídica, isoladamente, garante oportunidades equivalentes.</p>
          <p>A segunda consiste em considerar que a distribuição de renda é suficiente para medir o bem-estar.</p>
          <p>A justiça social exige instituições que ampliem as condições reais de participação e liberdade.</p>
        </div>
      </section>

      {/* 7. O problema dos limites do reformismo */}
      <section id="essay-sec-7" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800 pb-3 ${getFontSizeClass('heading')}`}>
          7. O problema dos limites do reformismo
        </h3>
        <div className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          <p>O sucesso histórico do Estado de Bem-Estar Social esteve associado a condições específicas.</p>
          <p>O crescimento econômico do pós-guerra permitiu ampliar a arrecadação e financiar serviços públicos.</p>
          <p>A organização sindical fortaleceu a capacidade de negociação dos trabalhadores.</p>
          <p>A competição eleitoral incentivou partidos a incorporar reivindicações sociais.</p>
          <p>A reconstrução europeia e a Guerra Fria também contribuíram para a valorização da estabilidade social.</p>
          <p>Entretanto, a crise dos anos 1970 revelou que o compromisso social não estava livre de contradições.</p>
          <p>A inflação, o desemprego e as transformações da economia mundial enfraqueceram os mecanismos tradicionais de regulação.</p>
          <p>A partir da década de 1980, políticas neoliberais alteraram as relações entre Estado e mercado.</p>
          <p>O Welfare State não desapareceu, mas passou por reformas e disputas distributivas.</p>
          <p>A social-democracia contemporânea precisa responder a novos desafios: globalização financeira, precarização do trabalho, envelhecimento populacional, automação, desigualdade patrimonial e crise ambiental.</p>
        </div>
      </section>

      {/* Conclusão */}
      <section id="essay-sec-8" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-amber-600/40 space-y-4 shadow-md">
        <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800 pb-3 ${getFontSizeClass('heading')}`}>
          Conclusão
        </h3>
        <div className={`space-y-4 font-serif text-stone-200 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          <p>A social-democracia não eliminou as contradições do capitalismo, mas contribuiu para modificar profundamente suas instituições.</p>
          <p>O reconhecimento de direitos sociais, a proteção dos trabalhadores, a ampliação da saúde e da educação públicas e a intervenção macroeconômica alteraram a relação entre cidadania e mercado.</p>
          <p>O Estado Social de Direito representa uma tentativa de garantir que a liberdade econômica não seja exercida de maneira incompatível com a dignidade humana e a participação democrática.</p>
          <p>Seu maior legado não está na criação de uma sociedade sem conflitos, mas na construção de instituições capazes de processar conflitos econômicos e sociais por meios democráticos.</p>
          <p>A conciliação entre mercado e justiça distributiva permanece incompleta, disputada e historicamente reversível.</p>
        </div>
      </section>
    </div>
  );
};
