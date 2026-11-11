import React from 'react';
import { BookOpen, Check, Copy, FileText, HelpCircle, Layers, Search, ShieldCheck, Sparkles } from 'lucide-react';

interface Props {
  copyAdvancedInvestigation: () => void;
  copiedCitation: string | null;
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

export const Topic112AdvancedInvestigationView: React.FC<Props> = ({
  copyAdvancedInvestigation,
  copiedCitation,
  getFontSizeClass,
}) => {
  const problemSections = [
    {
      num: 1,
      id: 'adv-prob-1',
      title: '1. PROBLEMAS DE INVESTIGAÇÃO SOBRE O ILUMINISMO',
      questions: [
        'O Iluminismo foi uma causa direta da Revolução Francesa ou forneceu uma linguagem intelectual posteriormente apropriada pelos revolucionários?',
        'Voltaire, Montesquieu e Rousseau defendiam concepções políticas convergentes?',
        'Até que ponto a circulação de livros e panfletos contribuiu para a formação de uma opinião pública crítica?',
        'A crítica iluminista ao absolutismo era necessariamente democrática?',
        'Qual foi o papel da censura na formação dos circuitos clandestinos de publicação?',
        'Como as ideias iluministas foram apropriadas por diferentes grupos sociais?',
        'Qual a relação entre o pensamento fisiocrático e as tentativas de reforma econômica?'
      ],
      authors: 'Robert Darnton, Roger Chartier, Jonathan Israel, Keith Michael Baker, Dena Goodman e William Doyle.'
    },
    {
      num: 2,
      id: 'adv-prob-2',
      title: '2. PROBLEMAS SOBRE AS CAUSAS DA REVOLUÇÃO FRANCESA',
      questions: [
        'A crise fiscal foi a causa imediata da Revolução?',
        'Por que a monarquia não conseguiu reformar o sistema tributário?',
        'Qual foi a responsabilidade da aristocracia na crise institucional de 1787–1788?',
        'O Terceiro Estado constituía um grupo social homogêneo?',
        'Qual foi a importância da crise dos preços dos alimentos?',
        'A Revolução foi essencialmente burguesa?',
        'Como os camponeses participaram da destruição das estruturas senhoriais?',
        'Qual foi a importância dos Estados Gerais e dos Cahiers de doléances?'
      ],
      authors: 'Georges Lefebvre, Albert Soboul, François Furet, William Doyle, Timothy Tackett e Gail Bossenga.'
    },
    {
      num: 3,
      id: 'adv-prob-3',
      title: '3. PROBLEMAS SOBRE OS LIMITES DA REVOLUÇÃO',
      questions: [
        'A Declaração de 1789 estabeleceu direitos universais na prática?',
        'Por que as mulheres foram excluídas da cidadania política plena?',
        'Qual foi o significado da Declaração de Olympe de Gouges?',
        'Como a escravidão colonial entrou em conflito com os princípios revolucionários?',
        'A política do Terror foi uma consequência inevitável da guerra?',
        'Como diferenciar defesa da República e repressão política?',
        'Quais foram as causas da queda de Robespierre?',
        'A Revolução conseguiu estabilizar uma ordem democrática?'
      ],
      authors: 'Lynn Hunt, Timothy Tackett, David Andress, Suzanne Desan e Laurent Dubois.'
    },
    {
      num: 4,
      id: 'adv-prob-4',
      title: '4. PROBLEMAS SOBRE NAPOLEÃO',
      questions: [
        'Napoleão preservou as conquistas da Revolução?',
        'O Código Civil representou igualdade jurídica efetiva?',
        'Como o Código Civil organizou as relações familiares e a autoridade masculina?',
        'A centralização administrativa napoleônica rompeu com o Antigo Regime ou aprofundou tendências anteriores?',
        'A expansão militar difundiu princípios revolucionários ou consolidou um projeto imperial?',
        'Qual foi o impacto das ocupações napoleônicas sobre as identidades nacionais europeias?',
        'Por que a campanha da Rússia representou um ponto de inflexão?'
      ],
      authors: 'Isser Woloch, Martyn Lyons, Jean-Louis Halpérin e Sudhir Hazareesingh.'
    },
    {
      num: 5,
      id: 'adv-prob-5',
      title: '5. PROBLEMAS SOBRE AS REVOLUÇÕES DE 1830 E 1848',
      questions: [
        'Por que a Restauração Bourbon não conseguiu estabilizar a monarquia?',
        'A Revolução de 1830 foi uma revolução popular ou predominantemente liberal?',
        'Quais foram as diferenças entre 1830 e 1848?',
        'Por que a Segunda República adotou o sufrágio masculino universal?',
        'Como se relacionaram a questão social e a questão política em 1848?',
        'Por que ocorreu a repressão das Jornadas de Junho?',
        'Qual foi a importância da abolição da escravidão em 1848?',
        'Como o golpe de Luís Napoleão encerrou a Segunda República?'
      ],
      authors: 'Roger Price, Edward Berenson, David Pinkney e Jonathan M. House.'
    },
    {
      num: 6,
      id: 'adv-prob-6',
      title: '6. PROBLEMAS SOBRE A COMUNA DE PARIS',
      questions: [
        'A Comuna deve ser interpretada como um governo operário?',
        'Quais correntes políticas participaram da experiência?',
        'Qual foi a influência do socialismo, do anarquismo e do republicanismo radical?',
        'A Comuna possuía um projeto institucional coerente?',
        'Quais medidas sociais foram efetivamente implementadas?',
        'Como Marx interpretou a experiência?',
        'Como os anarquistas interpretaram o autogoverno comunal?',
        'Quais foram as causas da derrota militar?',
        'Qual foi a dimensão da repressão durante a Semana Sangrenta?',
        'Como a memória da Comuna foi utilizada pelos movimentos socialistas posteriores?'
      ],
      authors: 'Jacques Rougerie, Robert Tombs, Kristin Ross, John Merriman e Carolyn J. Eichner.'
    },
    {
      num: 7,
      id: 'adv-prob-7',
      title: '7. PROBLEMAS SOBRE AS GUERRAS MUNDIAIS',
      questions: [
        'Como a Primeira Guerra Mundial modificou a estrutura social francesa?',
        'Qual foi o impacto da guerra sobre os trabalhadores e as mulheres?',
        'Como a experiência dos veteranos influenciou a cultura política do período entre guerras?',
        'Quais fatores contribuíram para a derrota francesa de 1940?',
        'O regime de Vichy foi apenas consequência da ocupação alemã?',
        'Qual foi a participação das autoridades francesas na perseguição aos judeus?',
        'Como se organizou a Resistência interna?',
        'Qual foi o papel de Jean Moulin?',
        'Como de Gaulle construiu a legitimidade da França Livre?',
        'Como a sociedade francesa enfrentou o passado da colaboração depois de 1944?'
      ],
      authors: 'Julian Jackson, Robert Paxton, Olivier Wieviorka, Henry Rousso e Robert Gildea.'
    },
    {
      num: 8,
      id: 'adv-prob-8',
      title: '8. PROBLEMAS SOBRE A CONSTRUÇÃO DO ESTADO SOCIAL',
      questions: [
        'O programa do CNR foi uma ruptura ou uma continuidade das reformas anteriores?',
        'Quais foram as influências da experiência do Front Populaire de 1936?',
        'Qual foi o papel dos sindicatos na reconstrução?',
        'Por que a Seguridade Social foi organizada em 1945?',
        'Qual foi a contribuição de Pierre Laroque e Ambroise Croizat?',
        'Por que a cobertura social não se tornou universal imediatamente?',
        'Como as nacionalizações modificaram a economia francesa?',
        'Qual foi o papel do planejamento econômico?',
        'Qual a diferença entre SMIG e SMIC?',
        'Até que ponto o Estado social reduziu as desigualdades?'
      ],
      authors: 'Philip Nord, Adam Steinhouse, Richard Kuisel, Herrick Chapman e Jean-Pierre Rioux.'
    },
    {
      num: 9,
      id: 'adv-prob-9',
      title: '9. PROBLEMAS SOBRE AS TRINTA GLORIOSAS',
      questions: [
        'Por que a França experimentou crescimento econômico acelerado entre 1945 e 1975?',
        'Qual foi a importância da reconstrução industrial?',
        'Como a urbanização transformou as relações sociais?',
        'O crescimento beneficiou igualmente homens, mulheres e imigrantes?',
        'Como a descolonização afetou a política francesa?',
        'Qual foi o significado de Maio de 1968?',
        'A crise de 1973 encerrou imediatamente o modelo econômico do pós-guerra?',
        'Quais elementos do Estado social sobreviveram à crise econômica?'
      ],
      authors: 'Jean Fourastié, Tony Judt, Philip Nord, Michelle Zancarini-Fournel e Kristin Ross.'
    }
  ];

  const dossiesDocumentais = [
    {
      letra: 'A',
      title: 'Dossiê A — Revolução e soberania',
      items: [
        'Declaração dos Direitos do Homem e do Cidadão.',
        'Constituição de 1791.',
        'Constituição de 1793.',
        'Textos de Sieyès.',
        'Cahiers de doléances.'
      ]
    },
    {
      letra: 'B',
      title: 'Dossiê B — Napoleão e direito',
      items: [
        'Constituição do Ano VIII.',
        'Código Civil de 1804.',
        'Decretos administrativos.',
        'Tratados internacionais.'
      ]
    },
    {
      letra: 'C',
      title: 'Dossiê C — Comuna de Paris',
      items: [
        'Proclamações da Comuna.',
        'Journal officiel.',
        'Decretos municipais.',
        'A Guerra Civil na França, de Marx.',
        'Memórias de participantes.'
      ]
    },
    {
      letra: 'D',
      title: 'Dossiê D — Vichy e Resistência',
      items: [
        'Atos constitucionais de 1940.',
        'Estatutos discriminatórios.',
        'Documentos da França Livre.',
        'Programa do CNR.',
        'Registros de deportação e libertação.'
      ]
    },
    {
      letra: 'E',
      title: 'Dossiê E — Estado social',
      items: [
        'Programa do CNR.',
        'Ordenança de 4 de outubro de 1945.',
        'Preâmbulo constitucional de 1946.',
        'Legislação do SMIG.',
        'Constituição de 1958.',
        'Acordos de Grenelle.'
      ]
    }
  ];

  const questoesMetodologicas = [
    'Identificar a autoria e a data da fonte.',
    'Distinguir documentos contemporâneos de interpretações posteriores.',
    'Investigar o contexto de produção.',
    'Identificar os interesses dos grupos envolvidos.',
    'Confrontar fontes primárias e historiografia.',
    'Distinguir fatos documentados de hipóteses interpretativas.',
    'Considerar os limites de preservação e acesso aos arquivos.',
    'Evitar explicações monocausais.',
    'Comparar interpretações historiográficas divergentes.',
    'Registrar as referências completas.'
  ];

  const propostasPesquisa = [
    'O Iluminismo e a construção da linguagem política revolucionária.',
    'A participação camponesa na Revolução Francesa.',
    'A cidadania feminina e os limites da igualdade revolucionária.',
    'O Código Civil napoleônico e a formação do direito moderno.',
    'Socialismo, anarquismo e republicanismo na Comuna de Paris.',
    'Vichy, colaboração e responsabilidade do Estado francês.',
    'O Programa do CNR e a formação do Estado social.',
    'As Trinta Gloriosas e as contradições do crescimento econômico.'
  ];

  const criteriosConclusao = [
    'Apresentar uma questão delimitada.',
    'Utilizar fontes identificáveis.',
    'Reconhecer interpretações historiográficas divergentes.',
    'Demonstrar como as evidências sustentam a conclusão.',
    'Distinguir causalidade, correlação e sucessão cronológica.',
    'Reconhecer incertezas documentais.',
    'Apresentar bibliografia especializada.'
  ];

  return (
    <article className="bg-[#161619] border border-amber-500/70 p-6 sm:p-9 rounded-xl space-y-9 shadow-2xl max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-amber-600/40 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-mono text-xs font-black tracking-wider uppercase rounded shadow-sm">
              COLEÇÃO II — HISTÓRIA DAS IDEOLOGIAS POLÍTICAS
            </span>
            <span className="px-2.5 py-1 bg-stone-900 text-stone-300 font-mono text-xs font-bold border border-stone-800 rounded">
              INVESTIGAÇÃO AVANÇADA Nº 11
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-100 leading-tight">
            FRANÇA: ILUMINISMO, REVOLUÇÕES, GUERRAS E ESTADO SOCIAL (1715–1975)
          </h1>
        </div>

        <button
          onClick={copyAdvancedInvestigation}
          className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0 shadow-md"
          title="Copiar texto completo da Investigação Avançada"
        >
          {copiedCitation === 'advanced_investigation' ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Texto Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-amber-400" />
              <span>Copiar Investigação Completa</span>
            </>
          )}
        </button>
      </div>

      {/* QUICK MENU AT A GLANCE */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Eixos de Problematização Historiográfica (9 Seções + Dossiês Documentais):</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs font-serif">
          {problemSections.map((sec) => (
            <a
              key={sec.num}
              href={`#${sec.id}`}
              className="p-2.5 rounded bg-stone-950/70 hover:bg-stone-800 border border-stone-800/80 text-stone-300 hover:text-amber-300 transition-colors flex items-center gap-2 font-mono text-[11px]"
            >
              <span className="w-5 h-5 rounded-full bg-amber-950 text-amber-300 text-[10px] font-bold flex items-center justify-center border border-amber-700/60 shrink-0">
                {sec.num}
              </span>
              <span className="truncate">{sec.title.replace(/^\d+\.\s*/, '')}</span>
            </a>
          ))}
          <a
            href="#adv-dossies"
            className="p-2.5 rounded bg-amber-950/40 hover:bg-amber-900/50 border border-amber-800/50 text-amber-300 font-mono text-[11px] flex items-center gap-2 sm:col-span-2 md:col-span-3"
          >
            <Search className="w-4 h-4 text-amber-400 shrink-0" />
            <span>10. Dossiês Documentais, Metodologia e Propostas de Pesquisa</span>
          </a>
        </div>
      </div>

      {/* 9 PROBLEM SECTIONS */}
      <div className="space-y-8">
        {problemSections.map((sec) => (
          <section key={sec.num} id={sec.id} className="scroll-mt-24 bg-[#121214] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
            <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
              <span className="w-7 h-7 rounded-full bg-amber-950 border border-amber-600/60 text-amber-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                {sec.num}
              </span>
              <h2 className="font-serif font-bold text-amber-300 text-base sm:text-lg uppercase tracking-wide">
                {sec.title}
              </h2>
            </div>

            <div className="space-y-2.5">
              {sec.questions.map((q, qIdx) => (
                <div key={qIdx} className="bg-stone-900/60 p-3 sm:p-3.5 rounded-lg border border-stone-800/80 flex items-start gap-3">
                  <span className="font-mono text-amber-400 font-bold text-xs shrink-0 mt-0.5">
                    {qIdx + 1}.
                  </span>
                  <p className={`font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}>
                    {q}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-stone-800/80 font-mono text-xs text-stone-400 bg-stone-950/60 p-3 rounded border border-stone-800">
              <strong className="text-amber-400 uppercase tracking-wider block mb-0.5">
                Autores para investigação:
              </strong>
              <span className="text-stone-300 font-serif italic text-xs sm:text-sm">{sec.authors}</span>
            </div>
          </section>
        ))}
      </div>

      {/* 10. INVESTIGAÇÕES DOCUMENTAIS */}
      <section id="adv-dossies" className="scroll-mt-24 bg-[#121214] p-6 sm:p-7 rounded-xl border border-stone-800 space-y-5 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <FileText className="w-5 h-5 text-amber-400 shrink-0" />
          <h2 className="font-serif font-bold text-amber-300 text-base sm:text-lg uppercase tracking-wide">
            10. INVESTIGAÇÕES DOCUMENTAIS
          </h2>
        </div>
        <p className="font-serif text-stone-300 text-xs sm:text-sm italic">
          Para cada problema, o pesquisador deverá selecionar documentos que permitam confrontar as interpretações historiográficas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {dossiesDocumentais.map((dos) => (
            <div key={dos.letra} className="bg-stone-900/80 p-4 sm:p-5 rounded-lg border border-stone-800 space-y-2">
              <h3 className="font-serif font-bold text-amber-300 text-sm sm:text-base border-b border-stone-800 pb-1.5 flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-amber-950 text-amber-300 font-mono text-xs flex items-center justify-center border border-amber-700/60 font-bold shrink-0">
                  {dos.letra}
                </span>
                <span>{dos.title}</span>
              </h3>
              <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-stone-300 pt-1">
                {dos.items.map((it, itIdx) => (
                  <li key={itIdx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 11. QUESTÕES METODOLÓGICAS */}
      <section className="bg-[#121214] p-6 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
          <h2 className="font-serif font-bold text-amber-300 text-base sm:text-lg uppercase tracking-wide">
            11. QUESTÕES METODOLÓGICAS
          </h2>
        </div>
        <p className="font-serif text-stone-300 text-xs sm:text-sm font-mono text-amber-300">
          Em todas as investigações, o pesquisador deverá:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-serif text-xs sm:text-sm text-stone-200">
          {questoesMetodologicas.map((m, idx) => (
            <div key={idx} className="bg-stone-900/60 p-3 rounded-lg border border-stone-800/80 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-950 border border-amber-700/60 text-amber-300 font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{m}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 12. PROPOSTAS DE PESQUISA AVANÇADA */}
      <section className="bg-[#121214] p-6 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <Layers className="w-5 h-5 text-amber-400 shrink-0" />
          <h2 className="font-serif font-bold text-amber-300 text-base sm:text-lg uppercase tracking-wide">
            12. PROPOSTAS DE PESQUISA AVANÇADA
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {propostasPesquisa.map((p, idx) => (
            <div key={idx} className="bg-stone-900/80 p-3.5 rounded-lg border border-stone-800/80 space-y-1">
              <strong className="font-mono text-amber-400 text-xs block font-bold">
                Pesquisa {idx + 1}:
              </strong>
              <p className="font-serif text-xs sm:text-sm text-stone-200">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 13. CRITÉRIOS PARA UMA CONCLUSÃO HISTÓRICA & OBJETIVO FINAL */}
      <section className="bg-[#121214] p-6 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
          <h2 className="font-serif font-bold text-amber-300 text-base sm:text-lg uppercase tracking-wide">
            13. CRITÉRIOS PARA UMA CONCLUSÃO HISTÓRICA
          </h2>
        </div>
        <p className="font-serif text-stone-300 text-xs sm:text-sm italic">
          Uma investigação será considerada academicamente consistente quando:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-serif text-xs sm:text-sm text-stone-200">
          {criteriosConclusao.map((c, idx) => (
            <div key={idx} className="bg-stone-900/60 p-3 rounded-lg border border-stone-800 flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span>{c}</span>
            </div>
          ))}
        </div>

        <div className="bg-amber-950/30 border border-amber-600/50 p-5 rounded-xl space-y-1.5 mt-4">
          <strong className="font-mono text-xs uppercase tracking-wider text-amber-400 block font-bold">
            Objetivo final:
          </strong>
          <p className="font-serif text-stone-200 text-sm sm:text-base italic leading-relaxed">
            desenvolver uma interpretação crítica da transformação histórica francesa, sem reduzir dois séculos e meio de história a uma única ideologia ou explicação causal.
          </p>
        </div>
      </section>
    </article>
  );
};
