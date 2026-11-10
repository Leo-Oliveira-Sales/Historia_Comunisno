import React from 'react';
import { BookOpen, Calendar, CheckCircle2, HelpCircle, Layers, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

export const Topic112SynthesisView: React.FC<Props> = ({ getFontSizeClass }) => {
  const periodos = [
    {
      num: 'I',
      title: 'ILUMINISMO E ANTIGO REGIME (1715–1789)',
      caracteristicas: [
        'Monarquia absolutista.',
        'Sociedade de ordens.',
        'Privilégios jurídicos e fiscais.',
        'Desenvolvimento do pensamento iluminista.',
        'Crítica à intolerância e ao poder arbitrário.',
        'Crise financeira da monarquia.'
      ],
      autores: ['Montesquieu', 'Voltaire', 'Rousseau', 'Diderot', "d'Alembert"],
      acontecimentoDecisivo: 'Convocação dos Estados Gerais em 1789.',
      ideiaCentral: 'A autoridade tradicional passa a ser questionada por novos conceitos de razão, liberdade, direitos e soberania.'
    },
    {
      num: 'II',
      title: 'REVOLUÇÃO FRANCESA (1789–1799)',
      caracteristicas: [
        'Queda da Bastilha.',
        'Abolição dos privilégios feudais.',
        'Declaração dos Direitos do Homem e do Cidadão.',
        'Monarquia constitucional.',
        'Proclamação da República.',
        'Terror.',
        'Diretório.'
      ],
      autores: ['Luís XVI', 'Robespierre', 'Danton', 'Marat', 'Sieyès', 'Olympe de Gouges'],
      acontecimentoDecisivo: 'Derrubada da monarquia e proclamação da República.',
      ideiaCentral: 'A soberania deixa de ser fundamentada exclusivamente na dinastia e passa a ser reivindicada em nome da nação.'
    },
    {
      num: 'III',
      title: 'NAPOLEÃO (1799–1815)',
      caracteristicas: [
        'Golpe de 18 de Brumário.',
        'Consulado.',
        'Centralização administrativa.',
        'Código Civil de 1804.',
        'Império.',
        'Guerras napoleônicas.',
        'Derrota em Waterloo.'
      ],
      autores: ['Napoleão Bonaparte'],
      acontecimentoDecisivo: 'Consolidação do Código Civil e estabelecimento do Império.',
      ideiaCentral: 'Modernização jurídica e administrativa combinada com concentração autoritária do poder.'
    },
    {
      num: 'IV',
      title: 'REVOLUÇÕES DO SÉCULO XIX E COMUNA DE PARIS (1815–1871)',
      caracteristicas: [
        'Restauração Bourbon.',
        'Revolução de 1830.',
        'Revolução de 1848.',
        'Segunda República.',
        'Segundo Império.',
        'Guerra Franco-Prussiana.',
        'Comuna de Paris.'
      ],
      autores: ['Alexis de Tocqueville', 'Louis Blanc', 'Pierre-Joseph Proudhon', 'Karl Marx', 'Louise Michel', 'Adolphe Thiers'],
      acontecimentoDecisivo: 'Comuna de Paris de 1871.',
      ideiaCentral: 'Disputa entre monarquia, liberalismo, republicanismo, socialismo e diferentes projetos de organização da sociedade.'
    },
    {
      num: 'V',
      title: 'GUERRAS MUNDIAIS E RESISTÊNCIA (1871–1945)',
      caracteristicas: [
        'Terceira República.',
        'Primeira Guerra Mundial.',
        'Crise do período entre guerras.',
        'Segunda Guerra Mundial.',
        'Ocupação alemã.',
        'Regime de Vichy.',
        'Colaboração.',
        'Resistência Francesa.',
        'Libertação.'
      ],
      autores: ['Georges Clemenceau', 'Philippe Pétain', 'Charles de Gaulle', 'Jean Moulin'],
      acontecimentoDecisivo: 'Libertação da França e reorganização republicana em 1944–1945.',
      ideiaCentral: 'As guerras mundiais transformaram as instituições, a economia e a própria concepção de cidadania francesa.'
    },
    {
      num: 'VI',
      title: 'ESTADO SOCIAL E TRINTA GLORIOSAS (1944–1975)',
      caracteristicas: [
        'Programa do Conselho Nacional da Resistência.',
        'Seguridade Social.',
        'Nacionalizações.',
        'Planejamento econômico.',
        'Direito de voto feminino.',
        'SMIG.',
        'Quarta e Quinta Repúblicas.',
        'Descolonização.',
        'Maio de 1968.',
        'SMIC.',
        'Crise de 1973.'
      ],
      autores: ['Charles de Gaulle', 'Pierre Laroque', 'Ambroise Croizat', 'Jean Monnet', 'Jean Fourastié'],
      acontecimentoDecisivo: 'Consolidação das instituições sociais do pós-guerra.',
      ideiaCentral: 'Ampliação da responsabilidade estatal pela proteção social, pela reconstrução econômica e pela regulação das relações de trabalho.'
    }
  ];

  const linhaDoTempo = [
    { year: '1715', event: 'Morte de Luís XIV' },
    { year: '1748', event: 'Montesquieu publica O Espírito das Leis' },
    { year: '1751', event: 'Início da Encyclopédie' },
    { year: '1762', event: 'Rousseau publica Do Contrato Social' },
    { year: '1763', event: 'Voltaire publica o Tratado sobre a Tolerância' },
    { year: '1789', event: 'Revolução Francesa' },
    { year: '1791', event: 'Constituição e Declaração dos Direitos da Mulher e da Cidadã' },
    { year: '1792', event: 'Proclamação da República' },
    { year: '1793–1794', event: 'Terror' },
    { year: '1799', event: 'Golpe de 18 de Brumário' },
    { year: '1804', event: 'Código Civil e Império' },
    { year: '1815', event: 'Waterloo e queda definitiva de Napoleão' },
    { year: '1830', event: 'Revolução de Julho' },
    { year: '1848', event: 'Segunda República e abolição da escravidão nas colônias' },
    { year: '1871', event: 'Comuna de Paris' },
    { year: '1914–1918', event: 'Primeira Guerra Mundial' },
    { year: '1940', event: 'Derrota francesa e regime de Vichy' },
    { year: '1944', event: 'Libertação e programa do CNR' },
    { year: '1945', event: 'Organização da Seguridade Social' },
    { year: '1946', event: 'Quarta República' },
    { year: '1950', event: 'Criação do SMIG' },
    { year: '1958', event: 'Quinta República' },
    { year: '1962', event: 'Independência da Argélia' },
    { year: '1968', event: 'Maio de 1968' },
    { year: '1970', event: 'Criação do SMIC' },
    { year: '1973', event: 'Crise do petróleo' },
    { year: '1975', event: 'Encerramento simbólico das Trinta Gloriosas' }
  ];

  const conceitos = [
    { term: 'Absolutismo', desc: 'Forma de organização política em que a soberania se concentra na autoridade monárquica.' },
    { term: 'Iluminismo', desc: 'Movimento intelectual que valorizou a razão crítica, a ciência e a discussão das instituições.' },
    { term: 'Soberania popular', desc: 'Princípio segundo o qual a legitimidade política pertence ao povo.' },
    { term: 'Constitucionalismo', desc: 'Organização do poder político por meio de normas constitucionais e limites institucionais.' },
    { term: 'República', desc: 'Forma de governo que não depende de sucessão dinástica e cuja legitimidade se relaciona à comunidade política.' },
    { term: 'Liberalismo', desc: 'Corrente política que valoriza liberdades individuais, direitos e limites ao poder estatal, embora apresente diferentes vertentes.' },
    { term: 'Socialismo', desc: 'Conjunto heterogêneo de correntes que criticam desigualdades e relações de exploração e propõem diferentes formas de organização econômica e social.' },
    { term: 'Anarquismo', desc: 'Corrente que critica o poder estatal coercitivo e defende formas de organização baseadas na associação e na autonomia.' },
    { term: 'Comuna', desc: 'Experiência de governo municipal revolucionário, especialmente associada à experiência parisiense de 1871.' },
    { term: 'Estado social', desc: 'Modelo em que o poder público assume responsabilidades institucionais pela proteção social e pela redução de determinados riscos econômicos.' },
    { term: 'Seguridade Social', desc: 'Sistema institucional de proteção contra riscos sociais, como doença, velhice e acidentes de trabalho.' },
    { term: 'Nacionalização', desc: 'Transferência de empresas ou setores econômicos para a propriedade ou controle estatal.' },
    { term: 'Trinta Gloriosas', desc: 'Expressão utilizada para designar aproximadamente o período de crescimento econômico francês entre 1945 e 1975.' }
  ];

  const transformacoes = [
    { dim: 'Política', desc: 'Monarquia absolutista → regimes constitucionais → República' },
    { dim: 'Jurídica', desc: 'Privilégios estamentais → igualdade civil masculina → constitucionalismo social' },
    { dim: 'Econômica', desc: 'Economia agrária e privilégios → industrialização → economia mista' },
    { dim: 'Social', desc: 'Sociedade de ordens → cidadania moderna → proteção social ampliada' },
    { dim: 'Ideológica', desc: 'Iluminismo → liberalismo, republicanismo, socialismo e anarquismo' },
    { dim: 'Internacional', desc: 'Guerras europeias → guerras mundiais → descolonização' },
    { dim: 'Institucional', desc: 'Autoridade dinástica → instituições republicanas → Estado social' }
  ];

  const questoes = [
    'Quais foram as principais críticas iluministas ao absolutismo?',
    'Por que a crise financeira da monarquia contribuiu para a Revolução Francesa?',
    'Quais foram os limites sociais da Declaração dos Direitos do Homem e do Cidadão?',
    'Como Napoleão preservou e modificou as conquistas revolucionárias?',
    'Por que ocorreram as revoluções de 1830 e 1848?',
    'Quais eram as principais correntes políticas presentes na Comuna de Paris?',
    'Como a Primeira Guerra Mundial transformou a sociedade francesa?',
    'Qual foi a responsabilidade do regime de Vichy durante a ocupação nazista?',
    'Qual foi a importância do Conselho Nacional da Resistência?',
    'Como se organizou a Seguridade Social francesa?',
    'Qual a diferença entre SMIG e SMIC?',
    'Quais foram as contradições das Trinta Gloriosas?'
  ];

  return (
    <div className="bg-[#161619] border border-stone-800 p-6 sm:p-9 rounded-xl space-y-9 shadow-xl">
      {/* HEADER BANNER */}
      <div className="border-b border-stone-800 pb-6 space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold inline-block">
          COLEÇÃO II — HISTÓRIA DAS IDEOLOGIAS POLÍTICAS
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
          SÍNTESE HISTÓRICA Nº 11
        </h2>
        <p className="font-serif italic text-amber-400 text-base sm:text-lg">
          FRANÇA: DO ANTIGO REGIME AO ESTADO SOCIAL (1715–1975)
        </p>
      </div>

      {/* 1. OBJETIVO GERAL */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          1. Objetivo Geral
        </h3>
        <div className="bg-[#121214] p-5 rounded-lg border border-stone-800">
          <p className={`font-serif text-stone-200 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
            Compreender a transformação da França entre o século XVIII e a segunda metade do século XX, identificando as principais mudanças filosóficas, políticas, jurídicas, sociais e econômicas que contribuíram para a formação da sociedade republicana contemporânea.
          </p>
        </div>
      </section>

      {/* 2. OS SEIS GRANDES PERÍODOS */}
      <section className="space-y-6">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" />
          2. Os Seis Grandes Períodos
        </h3>

        <div className="space-y-6">
          {periodos.map((p) => (
            <div key={p.num} className="bg-[#121214] p-5 sm:p-6 rounded-xl border border-stone-800 space-y-4 shadow-md">
              <div className="flex items-center gap-3 border-b border-stone-800/80 pb-3">
                <span className="w-8 h-8 rounded-full bg-amber-950 border border-amber-600/60 text-amber-300 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  {p.num}
                </span>
                <h4 className="font-serif font-bold text-amber-300 text-base sm:text-lg uppercase tracking-wide">
                  {p.title}
                </h4>
              </div>

              <div className="space-y-3 font-serif text-xs sm:text-sm">
                <div>
                  <strong className="text-amber-400 font-mono text-xs uppercase tracking-wider block mb-1.5">
                    Características:
                  </strong>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-200">
                    {p.caracteristicas.map((c, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 bg-stone-900/60 p-2 rounded border border-stone-800/80">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-stone-800/60 flex items-center gap-2 flex-wrap">
                  <strong className="text-stone-300 font-mono text-xs uppercase tracking-wider">
                    {p.num === 'III' ? 'Personagem Central:' : 'Autores e Personagens:'}
                  </strong>
                  {p.autores.map((a, aIdx) => (
                    <span key={aIdx} className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-stone-300 font-mono text-xs">
                      {a}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-stone-800/60">
                  <strong className="text-stone-300 font-mono text-xs uppercase tracking-wider block mb-0.5">
                    Acontecimento decisivo:
                  </strong>
                  <p className="text-stone-200 font-semibold">{p.acontecimentoDecisivo}</p>
                </div>

                <div className="bg-amber-950/30 border border-amber-600/40 p-3.5 rounded-lg text-amber-200/90 italic">
                  <strong className="not-italic font-mono text-amber-400 text-xs block uppercase tracking-wider mb-0.5">
                    Ideia central:
                  </strong>
                  "{p.ideiaCentral}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LINHA DO TEMPO ESSENCIAL */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-amber-400" />
          3. Linha do Tempo Essencial
        </h3>

        <div className="overflow-x-auto rounded-lg border border-stone-800">
          <table className="w-full text-left font-serif text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-stone-900 border-b border-stone-800 text-amber-300 font-mono text-xs">
                <th className="p-3 border-r border-stone-800 w-28 text-center">Ano</th>
                <th className="p-3">Acontecimento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800 text-stone-200">
              {linhaDoTempo.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-[#121214]' : 'bg-[#161619]'}>
                  <td className="p-3 font-mono font-bold text-amber-300 border-r border-stone-800 text-center bg-amber-950/20">
                    {item.year}
                  </td>
                  <td className="p-3 text-stone-200">{item.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. CONCEITOS FUNDAMENTAIS */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          4. Conceitos Fundamentais
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {conceitos.map((c, idx) => (
            <div key={idx} className="bg-[#121214] p-4 rounded-lg border border-stone-800 space-y-1">
              <strong className="text-amber-300 font-serif font-bold text-sm sm:text-base block">
                {c.term}
              </strong>
              <p className="font-serif text-stone-300 text-xs sm:text-sm leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. AS GRANDES TRANSFORMAÇÕES */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          5. As Grandes Transformações
        </h3>

        <div className="overflow-x-auto rounded-lg border border-stone-800">
          <table className="w-full text-left font-serif text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-stone-900 border-b border-stone-800 text-amber-300 font-mono text-xs">
                <th className="p-3 border-r border-stone-800 w-36">Dimensão</th>
                <th className="p-3">Transformação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800 text-stone-200">
              {transformacoes.map((t, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-[#121214]' : 'bg-[#161619]'}>
                  <td className="p-3 font-mono font-bold text-amber-300 border-r border-stone-800">
                    {t.dim}
                  </td>
                  <td className="p-3 text-stone-200">{t.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. QUESTÕES FUNDAMENTAIS PARA REVISÃO */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" />
          6. Questões Fundamentais para Revisão
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {questoes.map((q, idx) => (
            <div key={idx} className="bg-[#121214] p-4 rounded-lg border border-stone-800 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-950 border border-amber-700/60 text-amber-300 font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span className="font-serif text-xs sm:text-sm text-stone-200 leading-relaxed">
                {q}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONCLUSÃO GERAL */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          7. Conclusão Geral
        </h3>

        <div className="bg-[#121214] p-6 rounded-xl border border-stone-800 space-y-4 leading-relaxed">
          <p className="font-serif text-stone-300 text-justify text-sm sm:text-base">
            A história francesa entre 1715 e 1975 pode ser compreendida como uma longa transformação das relações entre poder, cidadania, propriedade, trabalho e proteção social.
          </p>
          <p className="font-serif text-stone-300 text-justify text-sm sm:text-base">
            O período não apresenta uma evolução linear, mas uma sucessão de conflitos e experiências políticas que modificaram profundamente o Estado francês.
          </p>
          <p className="font-serif text-stone-300 text-justify text-sm sm:text-base">
            A França passou de uma sociedade de ordens para uma sociedade juridicamente organizada em torno da cidadania republicana e, posteriormente, desenvolveu instituições de proteção social que se tornaram referências internacionais.
          </p>
          <div className="bg-amber-950/30 border border-amber-600/50 p-4 rounded-lg text-amber-300 font-serif font-semibold text-center text-sm sm:text-base">
            <strong>Síntese central:</strong> a formação da França contemporânea foi resultado de revoluções, reformas, conflitos sociais, guerras e decisões institucionais, e não de um único projeto político.
          </div>
        </div>
      </section>
    </div>
  );
};
