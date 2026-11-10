import React from 'react';
import { BookOpen, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

export const Topic112EssayView: React.FC<Props> = ({ getFontSizeClass }) => {
  const referencias = [
    'ANDRESS, David (org.). The Oxford Handbook of the French Revolution. Oxford: Oxford University Press, 2015.',
    'BOSSENGA, Gail. Origins of the French Revolution. History Compass, v. 5, n. 4, 2007.',
    'DOYLE, William. The Oxford History of the French Revolution. 2. ed. Oxford: Oxford University Press, 2002.',
    'FURET, François. Pensando a Revolução Francesa. Rio de Janeiro: Paz e Terra, 1989.',
    'JACKSON, Julian. France: The Dark Years, 1940–1944. Oxford: Oxford University Press, 2001.',
    'MARX, Karl. The Civil War in France. 1871.',
    'MCPHEE, Peter. Liberty or Death: The French Revolution. New Haven: Yale University Press, 2016.',
    'ROSS, Kristin. Communal Luxury: The Political Imaginary of the Paris Commune. London: Verso, 2015.',
    'ROUGERIE, Jacques. La Commune de 1871. Paris: Presses Universitaires de France.',
    'TOMBS, Robert. The Paris Commune 1871. London: Longman, 1999.',
    'FOURASTIÉ, Jean. Les Trente Glorieuses. Paris: Fayard, 1979.',
    'PAXTON, Robert O. Vichy France: Old Guard and New Order, 1940–1944. New York: Columbia University Press, 1972.',
    'NORD, Philip. France\'s New Deal: From the Thirties to the Postwar Era. Princeton: Princeton University Press, 2010.'
  ];

  return (
    <article className="bg-[#161619] border border-stone-800 p-6 sm:p-9 rounded-xl space-y-9 shadow-xl max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="border-b border-stone-800 pb-6 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
            COLEÇÃO II — HISTÓRIA DAS IDEOLOGIAS POLÍTICAS
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-stone-900 text-stone-300 border border-stone-800 font-bold">
            ENSAIO ACADÊMICO Nº 11
          </span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-100 leading-tight">
          DA FRANÇA ILUMINISTA AO ESTADO SOCIAL
        </h1>
        <p className="font-serif italic text-amber-400 text-base sm:text-lg">
          Filosofia política, revoluções, conflitos sociais e transformação do Estado francês (1715–1975)
        </p>
        <div className="pt-2 flex items-center gap-4 flex-wrap text-xs font-mono text-stone-400">
          <span className="bg-stone-900 px-3 py-1 rounded border border-stone-800 text-stone-300">
            <strong className="text-amber-400">Eixo temático:</strong> Transformações do pensamento político, revoluções, cidadania, conflitos de classe, republicanismo e formação do Estado social.
          </span>
          <span className="bg-stone-900 px-3 py-1 rounded border border-stone-800 text-stone-300">
            <strong className="text-amber-400">Recorte histórico:</strong> 1715–1975
          </span>
        </div>
      </div>

      {/* 1. INTRODUÇÃO */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-stone-200 text-lg sm:text-xl uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          1. INTRODUÇÃO: A TRANSFORMAÇÃO DA FRANÇA MODERNA
        </h2>
        <div className="space-y-4 font-serif text-stone-300 text-justify leading-relaxed text-sm sm:text-base">
          <p>
            A história política francesa entre 1715 e 1975 constitui um dos processos mais importantes para compreender a formação do mundo político contemporâneo. Nesse intervalo, a França passou por transformações profundas: deixou para trás a monarquia absolutista, atravessou revoluções, experimentou diferentes regimes políticos, enfrentou guerras internacionais e desenvolveu instituições republicanas e sociais que influenciaram outros países.
          </p>
          <p>
            Essa trajetória não deve ser interpretada como uma sequência inevitável de acontecimentos. O Iluminismo não produziu automaticamente a Revolução Francesa; a Revolução não conduziu diretamente à democracia consolidada; a Comuna de Paris não representou uma etapa necessária para a criação do Estado social.
          </p>
          <p>
            O processo foi marcado por rupturas, disputas, contradições e diferentes projetos de sociedade.
          </p>
          <p className="bg-[#121214] p-4 rounded-lg border border-stone-800 text-amber-200/90 italic">
            A questão fundamental deste ensaio é compreender como a França passou de uma ordem política fundada na autoridade dinástica, nos privilégios jurídicos e na sociedade de ordens para um Estado republicano que, especialmente depois de 1945, assumiu responsabilidades crescentes na organização da economia, na proteção social e na garantia de direitos.
          </p>
        </div>
      </section>

      {/* 2. O ILUMINISMO E A CRISE DA AUTORIDADE MONÁRQUICA */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-stone-200 text-lg sm:text-xl uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-amber-400" />
          2. O ILUMINISMO E A CRISE DA AUTORIDADE MONÁRQUICA
        </h2>
        <div className="space-y-4 font-serif text-stone-300 text-justify leading-relaxed text-sm sm:text-base">
          <p>
            No século XVIII, a França era uma das principais monarquias europeias. A autoridade real estava associada à tradição dinástica, à religião e à concepção de soberania monárquica.
          </p>
          <p>
            Entretanto, o desenvolvimento intelectual das Luzes introduziu novas formas de discutir o poder político.
          </p>
          <p>
            Montesquieu, em <em>De l'esprit des lois</em> (1748), examinou as relações entre as instituições políticas e a liberdade. Sua reflexão sobre a distribuição dos poderes tornou-se uma referência fundamental para o constitucionalismo moderno.
          </p>
          <p>
            Voltaire criticou a intolerância religiosa, o fanatismo e os abusos judiciais. Sua atuação intelectual demonstrou que a autoridade tradicional poderia ser submetida à crítica pública.
          </p>
          <p>
            Rousseau, em <em>Du contrat social</em> (1762), apresentou uma concepção de soberania baseada no corpo político e na vontade geral. Sua obra tornou-se particularmente importante para os debates revolucionários sobre legitimidade e participação política.
          </p>
          <p>
            Diderot e d'Alembert, por meio da <em>Encyclopédie</em>, contribuíram para a circulação de conhecimentos científicos, técnicos e filosóficos.
          </p>
          <p>
            Esses autores não defendiam necessariamente o mesmo modelo político. O Iluminismo era heterogêneo, e suas ideias foram apropriadas de diferentes maneiras pelos grupos envolvidos na crise revolucionária.
          </p>
          <p className="bg-[#121214] p-4 rounded-lg border border-stone-800 text-amber-300 font-semibold">
            A transformação decisiva foi a ampliação do espaço de crítica: o poder monárquico passou a ser discutido segundo critérios de razão, utilidade pública, direitos e legitimidade.
          </p>
        </div>
      </section>

      {/* 3. A REVOLUÇÃO FRANCESA E A RECONSTRUÇÃO DA LEGITIMIDADE POLÍTICA */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-stone-200 text-lg sm:text-xl uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          3. A REVOLUÇÃO FRANCESA E A RECONSTRUÇÃO DA LEGITIMIDADE POLÍTICA
        </h2>
        <div className="space-y-4 font-serif text-stone-300 text-justify leading-relaxed text-sm sm:text-base">
          <p>
            A crise financeira da monarquia, as tensões sociais, os conflitos institucionais e a incapacidade de realizar reformas tributárias contribuíram para a convocação dos Estados Gerais em 1789.
          </p>
          <p>
            A transformação dos Estados Gerais em Assembleia Nacional representou uma ruptura fundamental: a legitimidade política passou a ser reivindicada em nome da nação.
          </p>
          <p>
            A tomada da Bastilha, em 14 de julho de 1789, tornou-se símbolo da queda da autoridade arbitrária. A Declaração dos Direitos do Homem e do Cidadão, aprovada em agosto daquele ano, formulou princípios de liberdade, igualdade jurídica, propriedade e soberania nacional.
          </p>
          <p>
            A Revolução atravessou diferentes fases.
          </p>
          <p>
            A monarquia constitucional foi substituída pela República em 1792. A execução de Luís XVI, em janeiro de 1793, aprofundou a ruptura com a ordem dinástica.
          </p>
          <p>
            Durante o governo revolucionário, especialmente entre 1793 e 1794, a política de exceção e o Terror revelaram uma das principais contradições da Revolução: a tentativa de defender a liberdade e a soberania popular por meio de instrumentos coercitivos e repressivos.
          </p>
          <p>
            A reação termidoriana e o Diretório demonstraram a dificuldade de estabilizar o regime republicano.
          </p>
          <p>
            A Revolução produziu transformações duradouras no direito, na administração, na propriedade e na linguagem política, mas não estabeleceu imediatamente uma democracia universal.
          </p>
          <p>
            Mulheres, escravizados nas colônias e setores populares continuaram enfrentando exclusões e limitações.
          </p>
        </div>
      </section>

      {/* 4. NAPOLEÃO E A CONTRADIÇÃO ENTRE MODERNIZAÇÃO E AUTORITARISMO */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-stone-200 text-lg sm:text-xl uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          4. NAPOLEÃO E A CONTRADIÇÃO ENTRE MODERNIZAÇÃO E AUTORITARISMO
        </h2>
        <div className="space-y-4 font-serif text-stone-300 text-justify leading-relaxed text-sm sm:text-base">
          <p>
            O golpe de 18 de Brumário, em 9 de novembro de 1799, encerrou o período revolucionário do Diretório e abriu caminho para o governo de Napoleão Bonaparte.
          </p>
          <p>
            O Código Civil de 1804 consolidou importantes transformações jurídicas iniciadas durante a Revolução. A igualdade civil masculina, a proteção da propriedade privada e a unificação de normas jurídicas constituíram elementos fundamentais da nova ordem.
          </p>
          <p>
            Entretanto, a codificação também preservou hierarquias familiares e fortaleceu a autoridade masculina.
          </p>
          <p>
            O governo napoleônico combinou modernização administrativa, centralização estatal, reformas educacionais e jurídicas com concentração do poder político e restrições às liberdades.
          </p>
          <p>
            A expansão militar francesa difundiu instituições e princípios jurídicos, mas também produziu ocupações, resistências nacionais e guerras de grande escala.
          </p>
          <p>
            Napoleão representou, portanto, uma combinação contraditória: preservou parte das conquistas revolucionárias enquanto consolidava um regime autoritário e imperial.
          </p>
        </div>
      </section>

      {/* 5. O SÉCULO XIX: LIBERALISMO, REPUBLICANISMO E QUESTÃO SOCIAL */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-stone-200 text-lg sm:text-xl uppercase tracking-wide border-l-4 border-amber-500 pl-3.5">
          5. O SÉCULO XIX: LIBERALISMO, REPUBLICANISMO E QUESTÃO SOCIAL
        </h2>
        <div className="space-y-4 font-serif text-stone-300 text-justify leading-relaxed text-sm sm:text-base">
          <p>
            A derrota de Napoleão em 1815 não encerrou as disputas políticas iniciadas em 1789.
          </p>
          <p>
            A Restauração Bourbon tentou recuperar a legitimidade monárquica, mas enfrentou uma sociedade transformada pela Revolução e pelo Império.
          </p>
          <p>
            A Revolução de Julho de 1830 derrubou Carlos X e estabeleceu a Monarquia de Julho.
          </p>
          <p>
            Em 1848, uma nova revolução derrubou Luís Filipe e instituiu a Segunda República. O sufrágio masculino universal foi estabelecido, e a abolição da escravidão nas colônias francesas representou uma transformação jurídica de grande importância.
          </p>
          <p>
            Entretanto, os conflitos entre trabalhadores, republicanos moderados e setores conservadores demonstraram que a igualdade política não resolvia automaticamente as desigualdades econômicas.
          </p>
          <p>
            As Jornadas de Junho de 1848, marcadas pela repressão aos trabalhadores de Paris, revelaram a profundidade da questão social.
          </p>
          <p>
            Nesse contexto, o socialismo, o republicanismo democrático e o anarquismo desenvolveram diferentes críticas à propriedade, ao Estado e às relações de trabalho.
          </p>
        </div>
      </section>

      {/* 6. A COMUNA DE PARIS: AUTOGOVERNO E EXPERIÊNCIA REVOLUCIONÁRIA */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-stone-200 text-lg sm:text-xl uppercase tracking-wide border-l-4 border-amber-500 pl-3.5">
          6. A COMUNA DE PARIS: AUTOGOVERNO E EXPERIÊNCIA REVOLUCIONÁRIA
        </h2>
        <div className="space-y-4 font-serif text-stone-300 text-justify leading-relaxed text-sm sm:text-base">
          <p>
            A derrota francesa na Guerra Franco-Prussiana, em 1870–1871, provocou o colapso do Segundo Império e abriu uma profunda crise política.
          </p>
          <p>
            Em março de 1871, a insurreição de Paris deu origem à Comuna, uma experiência de governo municipal que durou aproximadamente 72 dias.
          </p>
          <p>
            A Comuna reuniu correntes políticas diversas: republicanos radicais, jacobinos, socialistas, blanquistas, proudhonianos e internacionalistas.
          </p>
          <p>
            Entre suas medidas estavam a eleição e possibilidade de revogação de representantes, mudanças nas relações entre Igreja e Estado, medidas relativas ao trabalho e iniciativas de organização popular.
          </p>
          <p>
            Karl Marx interpretou a Comuna como uma experiência histórica de emancipação política dos trabalhadores.
          </p>
          <p>
            Entretanto, a Comuna não deve ser tratada como um projeto ideologicamente uniforme. Sua composição era heterogênea, e as interpretações sobre sua natureza continuam sendo objeto de debate historiográfico.
          </p>
          <p>
            A repressão da Semana Sangrenta, em maio de 1871, encerrou violentamente a experiência.
          </p>
          <p>
            Sua memória tornou-se fundamental para movimentos socialistas, anarquistas e operários em diferentes partes do mundo.
          </p>
        </div>
      </section>

      {/* 7. AS GUERRAS MUNDIAIS E A CRISE DA REPÚBLICA */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-stone-200 text-lg sm:text-xl uppercase tracking-wide border-l-4 border-amber-500 pl-3.5">
          7. AS GUERRAS MUNDIAIS E A CRISE DA REPÚBLICA
        </h2>
        <div className="space-y-4 font-serif text-stone-300 text-justify leading-relaxed text-sm sm:text-base">
          <p>
            A Terceira República francesa enfrentou a Primeira Guerra Mundial entre 1914 e 1918.
          </p>
          <p>
            A guerra provocou milhões de baixas militares e civis, destruição de regiões industriais e agrícolas e profundas transformações na sociedade.
          </p>
          <p>
            O período entre guerras foi marcado por disputas políticas, instabilidade econômica e tensões sociais.
          </p>
          <p>
            Em 1940, a derrota diante da Alemanha nazista provocou o colapso da Terceira República.
          </p>
          <p>
            O regime de Vichy, dirigido por Philippe Pétain, colaborou com a Alemanha nazista e participou da perseguição e deportação dos judeus.
          </p>
          <p>
            Ao mesmo tempo, diferentes organizações de resistência desenvolveram atividades clandestinas dentro e fora do território francês.
          </p>
          <p>
            Charles de Gaulle organizou a França Livre, enquanto Jean Moulin desempenhou papel fundamental na articulação da Resistência interna.
          </p>
          <p>
            A libertação de Paris, em agosto de 1944, simbolizou a retomada da soberania nacional.
          </p>
          <p>
            A reconstrução posterior foi também uma reconstrução política: a França precisou reorganizar suas instituições, enfrentar o legado da colaboração e redefinir os direitos dos cidadãos.
          </p>
        </div>
      </section>

      {/* 8. O PROGRAMA DO CNR E A CONSTRUÇÃO DO ESTADO SOCIAL */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-stone-200 text-lg sm:text-xl uppercase tracking-wide border-l-4 border-amber-500 pl-3.5">
          8. O PROGRAMA DO CNR E A CONSTRUÇÃO DO ESTADO SOCIAL
        </h2>
        <div className="space-y-4 font-serif text-stone-300 text-justify leading-relaxed text-sm sm:text-base">
          <p>
            O Conselho Nacional da Resistência reuniu diferentes organizações políticas e movimentos de resistência.
          </p>
          <p>
            Seu programa, aprovado em 15 de março de 1944, propôs uma reorganização democrática e social da França.
          </p>
          <p>
            Entre suas propostas estavam nacionalizações, planejamento econômico, proteção dos trabalhadores e criação de um sistema abrangente de seguridade social.
          </p>
          <p>
            A implantação da estrutura moderna da Seguridade Social, em 1945, representou uma transformação decisiva.
          </p>
          <p>
            Pierre Laroque e Ambroise Croizat tiveram papéis importantes na organização e implementação do sistema.
          </p>
          <p>
            A criação da proteção social não significou que todas as pessoas passaram imediatamente a receber cobertura universal. A expansão ocorreu gradualmente, em meio à permanência de regimes especiais e disputas institucionais.
          </p>
          <p>
            As nacionalizações de setores estratégicos, a criação de empresas públicas e o planejamento econômico consolidaram um modelo de economia mista.
          </p>
          <p>
            O Estado passou a atuar de maneira mais intensa na reconstrução industrial, no financiamento, na infraestrutura e na proteção social.
          </p>
        </div>
      </section>

      {/* 9. AS TRINTA GLORIOSAS E AS CONTRADIÇÕES DO CRESCIMENTO */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-stone-200 text-lg sm:text-xl uppercase tracking-wide border-l-4 border-amber-500 pl-3.5">
          9. AS TRINTA GLORIOSAS E AS CONTRADIÇÕES DO CRESCIMENTO
        </h2>
        <div className="space-y-4 font-serif text-stone-300 text-justify leading-relaxed text-sm sm:text-base">
          <p>
            O período aproximado de 1945 a 1975 ficou conhecido como Trinta Gloriosas.
          </p>
          <p>
            A expressão, popularizada pelo economista Jean Fourastié, designa uma fase de forte crescimento econômico, aumento da produtividade, expansão do consumo e transformação das condições materiais de vida.
          </p>
          <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2">
            <strong className="text-amber-400 font-mono text-xs uppercase tracking-wider block mb-1">
              A França experimentou:
            </strong>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-serif text-xs sm:text-sm text-stone-200">
              <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">•</span> Expansão industrial.</li>
              <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">•</span> Crescimento urbano.</li>
              <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">•</span> Modernização da infraestrutura.</li>
              <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">•</span> Ampliação do acesso à educação.</li>
              <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">•</span> Desenvolvimento da proteção social.</li>
              <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">•</span> Crescimento do consumo doméstico.</li>
              <li className="flex items-center gap-2 sm:col-span-2"><span className="text-amber-400 font-bold">•</span> Expansão dos serviços públicos.</li>
            </ul>
          </div>
          <p>
            Em 1950, foi criado o SMIG, salário mínimo interprofissional garantido, posteriormente substituído pelo SMIC em 1970.
          </p>
          <p>
            Entretanto, o crescimento não eliminou as desigualdades sociais, as discriminações de gênero, os problemas habitacionais ou os conflitos trabalhistas.
          </p>
          <p>
            A descolonização, especialmente a Guerra da Argélia, expôs as contradições entre os valores republicanos e a manutenção do império colonial.
          </p>
          <p>
            Em maio de 1968, estudantes e trabalhadores protagonizaram mobilizações que questionaram a autoridade, as relações de trabalho, o sistema educacional e as estruturas sociais.
          </p>
          <p>
            A crise do petróleo de 1973 e as dificuldades econômicas posteriores marcaram o encerramento da conjuntura excepcional das Trinta Gloriosas.
          </p>
        </div>
      </section>

      {/* 10. CONCLUSÃO */}
      <section className="space-y-4">
        <h2 className="font-serif font-bold text-stone-200 text-lg sm:text-xl uppercase tracking-wide border-l-4 border-amber-500 pl-3.5">
          10. CONCLUSÃO: UMA HISTÓRIA DE RUPTURAS E CONTINUIDADES
        </h2>
        <div className="bg-[#121214] p-6 rounded-xl border border-stone-800 space-y-4 leading-relaxed font-serif text-stone-300 text-justify text-sm sm:text-base">
          <p>
            Entre 1715 e 1975, a França experimentou uma transformação profunda de suas instituições políticas e sociais.
          </p>
          <p>
            O Iluminismo contribuiu para renovar o vocabulário político. A Revolução Francesa rompeu com os fundamentos jurídicos do Antigo Regime. Napoleão consolidou parte das transformações revolucionárias. As revoluções do século XIX ampliaram as disputas sobre cidadania e soberania. A Comuna de Paris tornou-se referência para os movimentos operários. As guerras mundiais expuseram os limites e as fragilidades das instituições republicanas. A reconstrução posterior à Segunda Guerra Mundial ampliou o papel do Estado na economia e na proteção social.
          </p>
          <p>
            O Estado social francês não foi produto de um único acontecimento ou de uma única corrente ideológica. Sua formação resultou de conflitos sociais, experiências políticas, reformas anteriores, mobilização dos trabalhadores, resistência à ocupação e decisões institucionais do pós-guerra.
          </p>
          <p className="text-amber-300 font-semibold border-t border-stone-800 pt-3">
            A história francesa entre 1715 e 1975 demonstra, portanto, que a construção da democracia e dos direitos sociais não é um processo linear. É resultado de disputas permanentes sobre liberdade, igualdade, autoridade, propriedade, trabalho e participação política.
          </p>
        </div>
      </section>

      {/* REFERÊNCIAS BIBLIOGRÁFICAS ESSENCIAIS */}
      <section className="space-y-4 pt-4 border-t border-stone-800">
        <h2 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          REFERÊNCIAS BIBLIOGRÁFICAS ESSENCIAIS
        </h2>

        <div className="space-y-2 font-mono text-xs text-stone-300">
          {referencias.map((ref, idx) => (
            <div key={idx} className="bg-[#121214] p-3.5 rounded border border-stone-800/80 select-all leading-relaxed">
              • {ref}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
