import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

interface Chronicle {
  id: string;
  num: string;
  fullHeading: string;
  paragraphs: string[];
  references: string;
}

const renderFormattedInline = (text: string) => {
  return text.replace(/\*(.*?)\*/g, '<em class="italic text-stone-200">$1</em>');
};

export const Topic108ChroniclesView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const chronicles: Chronicle[] = [
    {
      id: 'cronica-1',
      num: 'CRÔNICA I',
      fullHeading: 'CRÔNICA I — MUNIQUE, 1920: O NASCIMENTO DE UM MOVIMENTO RADICAL',
      paragraphs: [
        'Em fevereiro de 1920, Munique ainda vivia as consequências da derrota alemã na Primeira Guerra Mundial e das revoluções que haviam derrubado o Império.',
        'A cidade era um importante centro de movimentos nacionalistas, associações paramilitares e organizações contrarrevolucionárias. O medo de uma revolução socialista coexistia com o ressentimento diante do Tratado de Versalhes.',
        'Foi nesse ambiente que o Partido dos Trabalhadores Alemães, anteriormente fundado por Anton Drexler, passou a adotar uma identidade política mais ampla e radical.',
        'Em 24 de fevereiro de 1920, o movimento apresentou seu programa de 25 pontos e adotou o nome de Partido Nacional-Socialista dos Trabalhadores Alemães.',
        'Adolf Hitler já havia ingressado na organização e se destacava por sua capacidade de mobilização oratória.',
        'O programa combinava nacionalismo expansionista, antissemitismo, oposição ao Tratado de Versalhes, propostas de centralização estatal e reivindicações sociais.',
        'A cidadania deveria ser reservada àqueles classificados como integrantes da comunidade de sangue alemão.',
        'A exclusão dos judeus não era apresentada como uma simples diferença religiosa. Era formulada como uma questão racial.',
        'O movimento ainda não possuía a dimensão de uma força política nacional. Mas sua visão de mundo já continha elementos que se tornariam centrais no regime posterior: a comunidade racial, o inimigo interno, o nacionalismo radical e a rejeição do pluralismo liberal.',
        'A transformação de um pequeno movimento em uma organização de massas exigiria anos de propaganda, reorganização partidária, violência e aproveitamento de crises políticas.'
      ],
      references: 'Programa de 25 pontos do NSDAP (1920); Ian Kershaw, *Hitler, 1889–1936: Hubris*; Richard J. Evans, *The Coming of the Third Reich*.'
    },
    {
      id: 'cronica-2',
      num: 'CRÔNICA II',
      fullHeading: 'CRÔNICA II — MUNIQUE, NOVEMBRO DE 1923: O GOLPE FRACASSADO',
      paragraphs: [
        'A inflação alemã de 1923 havia destruído a confiança de milhões de pessoas na moeda e nas instituições.',
        'A ocupação do Ruhr por tropas francesas e belgas agravara a crise política. O governo enfrentava pressões nacionalistas, conflitos regionais e ameaças revolucionárias.',
        'Em 8 e 9 de novembro, Hitler e seus aliados tentaram tomar o poder na Baviera e desencadear uma revolta nacional.',
        'A tentativa fracassou.',
        'O episódio demonstrou que o movimento nazista ainda não possuía força suficiente para derrubar o governo alemão.',
        'Hitler foi preso e posteriormente julgado.',
        'Durante o encarceramento, trabalhou em *Mein Kampf*, obra na qual reuniu elementos de sua visão política e racial.',
        'O fracasso do golpe não encerrou o projeto nazista. Pelo contrário, estimulou uma mudança estratégica.',
        'O partido passaria a utilizar eleições, propaganda e negociação política como instrumentos para conquistar o poder.',
        'A experiência de 1923 demonstrou que o movimento podia sobreviver à derrota e adaptar seus métodos.'
      ],
      references: 'Ian Kershaw, *Hitler, 1889–1936: Hubris*; Richard J. Evans, *The Coming of the Third Reich*; documentação judicial do Putsch de Munique.'
    },
    {
      id: 'cronica-3',
      num: 'CRÔNICA III',
      fullHeading: 'CRÔNICA III — BERLIM, JANEIRO DE 1933: A NOMEAÇÃO DE HITLER',
      paragraphs: [
        'A República de Weimar chegava ao início de 1933 profundamente enfraquecida.',
        'O desemprego era elevado, os governos presidenciais haviam substituído a estabilidade parlamentar e os partidos tradicionais enfrentavam dificuldades para construir coalizões.',
        'O Partido Nazista havia se tornado uma força eleitoral expressiva, mas não possuía maioria absoluta.',
        'O presidente Paul von Hindenburg ainda detinha poderes decisivos.',
        'Franz von Papen e outros conservadores acreditavam que Hitler poderia ser incorporado ao governo e controlado por meio de um gabinete dominado por figuras tradicionais.',
        'O cálculo político foi equivocado.',
        'Em 30 de janeiro de 1933, Hitler foi nomeado chanceler.',
        'A nomeação ocorreu formalmente dentro das prerrogativas presidenciais, mas representou uma decisão política que abriu as portas do Estado a um movimento abertamente antidemocrático.',
        'A partir daquele momento, os nazistas passaram a utilizar os recursos do governo para destruir seus adversários.',
        'A democracia alemã não desapareceu de uma só vez. Sua destruição foi realizada por meio de medidas sucessivas, combinando violência paramilitar, decretos de emergência, repressão e manipulação das instituições.'
      ],
      references: 'Richard J. Evans, *The Coming of the Third Reich*; Ian Kershaw, *Hitler, 1889–1936: Hubris*; documentos do governo alemão de janeiro e fevereiro de 1933.'
    },
    {
      id: 'cronica-4',
      num: 'CRÔNICA IV',
      fullHeading: 'CRÔNICA IV — NUREMBERG, SETEMBRO DE 1935: A RAÇA TRANSFORMADA EM LEI',
      paragraphs: [
        'Em setembro de 1935, durante o Congresso do Partido Nazista em Nuremberg, o regime promulgou duas leis que alteraram profundamente a situação jurídica dos judeus alemães.',
        'A Lei de Cidadania do Reich restringiu a cidadania plena às pessoas consideradas de sangue alemão ou relacionado.',
        'A Lei para a Proteção do Sangue Alemão e da Honra Alemã proibiu casamentos e relações sexuais entre judeus e pessoas consideradas de sangue alemão.',
        'A classificação racial passou a depender de critérios administrativos de ascendência familiar.',
        'O Estado não avaliava mais apenas a religião praticada ou a identificação cultural de uma pessoa. Procurava estabelecer sua posição racial por meio de registros familiares.',
        'A legislação transformou o preconceito em estrutura jurídica.',
        'A partir daí, a exclusão dos judeus tornou-se mais profunda e abrangente.',
        'A cidadania deixou de ser uma condição política universal e passou a depender de uma classificação racial produzida pelo regime.',
        'As leis de Nuremberg foram um marco no processo de perseguição. Não eram ainda o sistema de assassinato continental que se desenvolveria durante a guerra, mas constituíram uma etapa decisiva da exclusão.'
      ],
      references: 'Leis de Nuremberg, 15 de setembro de 1935; Saul Friedländer, *Nazi Germany and the Jews*; United States Holocaust Memorial Museum.'
    },
    {
      id: 'cronica-5',
      num: 'CRÔNICA V',
      fullHeading: 'CRÔNICA V — BABi YAR, SETEMBRO DE 1941: O MASSACRE A CÉU ABERTO',
      paragraphs: [
        'Em setembro de 1941, as forças alemãs haviam ocupado Kiev, na União Soviética.',
        'A invasão alemã, iniciada em junho daquele ano, era conduzida como uma guerra ideológica e racial.',
        'Os judeus dos territórios ocupados eram apresentados como inimigos absolutos e submetidos a perseguição sistemática.',
        'Entre os dias 29 e 30 de setembro de 1941, milhares de judeus foram conduzidos ao desfiladeiro de Babi Yar, próximo a Kiev, e assassinados por unidades alemãs.',
        'O massacre foi realizado por integrantes do Einsatzgruppe C, com participação de unidades policiais e apoio de outras estruturas alemãs.',
        'As vítimas foram mortas em operações de fuzilamento.',
        'Babi Yar tornou-se um dos episódios mais conhecidos do extermínio por assassinatos em massa no Leste Europeu.',
        'O acontecimento demonstra que o Holocausto não foi executado exclusivamente em centros de extermínio. Uma parcela enorme das vítimas morreu em massacres realizados a céu aberto.',
        'A violência era organizada, documentada e executada por unidades que acompanhavam o avanço militar alemão.',
        'O assassinato em massa tornou-se parte integrante da ocupação.'
      ],
      references: 'United States Holocaust Memorial Museum, documentação sobre os Einsatzgruppen; Christopher Browning, *The Origins of the Final Solution*; Saul Friedländer, *Nazi Germany and the Jews*, volume II.'
    },
    {
      id: 'cronica-6',
      num: 'CRÔNICA VI',
      fullHeading: 'CRÔNICA VI — WANNSEE, JANEIRO DE 1942: A ADMINISTRAÇÃO DO EXTERMÍNIO',
      paragraphs: [
        'Em 20 de janeiro de 1942, quinze representantes de diferentes órgãos do Estado nazista reuniram-se em uma residência na região de Wannsee, em Berlim.',
        'A reunião foi presidida por Reinhard Heydrich.',
        'Os participantes discutiram a coordenação da chamada Solução Final da Questão Judaica.',
        'A documentação produzida apresenta a dimensão continental do projeto, que abrangia aproximadamente onze milhões de judeus em diferentes países europeus.',
        'A reunião não foi o início dos assassinatos em massa.',
        'Naquele momento, massacres por fuzilamento já haviam ocorrido em grande escala nos territórios soviéticos ocupados, e centros de extermínio já estavam em funcionamento.',
        'A importância de Wannsee reside na coordenação entre instituições.',
        'O genocídio exigia cooperação administrativa, definição de responsabilidades, transporte, identificação de vítimas e articulação entre órgãos do Estado.',
        'O protocolo demonstra que a política de assassinato havia ultrapassado a esfera de um único órgão policial.',
        'A reunião expõe uma dimensão perturbadora do genocídio: a participação burocrática de dirigentes e funcionários que discutiam a destruição de milhões de pessoas por meio de procedimentos administrativos.'
      ],
      references: 'Protocolo de Wannsee, 20 de janeiro de 1942; Mark Roseman, *The Wannsee Conference and the Final Solution*; Peter Longerich, *Holocaust*.'
    },
    {
      id: 'cronica-7',
      num: 'CRÔNICA VII',
      fullHeading: 'CRÔNICA VII — AUSCHWITZ-BIRKENAU: A DEPORTAÇÃO E O ASSASSINATO',
      paragraphs: [
        'Durante a guerra, Auschwitz-Birkenau tornou-se um dos principais centros de assassinato em massa do regime nazista.',
        'Trens transportavam judeus de diferentes regiões da Europa ocupada.',
        'Ao chegarem, as pessoas eram submetidas a processos de seleção. Muitas eram encaminhadas diretamente às câmaras de gás.',
        'Outras eram mantidas em condições de trabalho forçado, sujeitas à fome, às doenças, à violência e à exploração.',
        'O complexo reunia diferentes funções: concentração, trabalho escravo, experimentação criminosa e assassinato.',
        'O sistema utilizava registros, transporte ferroviário, estruturas administrativas e instalações construídas para executar políticas de perseguição e extermínio.',
        'Entretanto, Auschwitz não resume toda a história do Holocausto. Em Bełżec, Sobibór e Treblinka, por exemplo, os assassinatos ocorreram em centros especialmente organizados para o extermínio de judeus.',
        'Auschwitz tornou-se símbolo do genocídio porque reúne, em um mesmo complexo histórico, diferentes dimensões da política nazista: deportação, exploração, seleção e assassinato.'
      ],
      references: 'Raul Hilberg, *The Destruction of the European Jews*; Franciszek Piper, estudos sobre Auschwitz; United States Holocaust Memorial Museum; Auschwitz-Birkenau State Museum.'
    },
    {
      id: 'cronica-8',
      num: 'CRÔNICA VIII',
      fullHeading: 'CRÔNICA VIII — BERLIM, ABRIL DE 1945: O FIM DO TERCEIRO REICH',
      paragraphs: [
        'Em abril de 1945, a Alemanha estava militarmente derrotada.',
        'As tropas soviéticas avançavam sobre Berlim. No oeste, os exércitos aliados penetravam no território alemão.',
        'Hitler permanecia em seu bunker, enquanto o Estado nazista perdia progressivamente a capacidade de organizar a defesa.',
        'Em 30 de abril de 1945, Hitler suicidou-se.',
        'O regime que havia prometido estabelecer um império de mil anos chegava ao fim depois de pouco mais de doze anos no poder.',
        'Em 8 de maio de 1945, a Alemanha capitulou incondicionalmente.',
        'A derrota militar encerrou o Terceiro Reich, mas não apagou as consequências da guerra, da ocupação e do genocídio.',
        'As comunidades judaicas europeias haviam sido destruídas em proporções extraordinárias. Milhões de pessoas estavam mortas, deslocadas ou traumatizadas.',
        'Os sobreviventes precisaram reconstruir suas vidas em um continente devastado.',
        'A documentação reunida pelos Aliados e as investigações posteriores permitiram reconstruir parte dos mecanismos de perseguição e assassinato.',
        'A história do nazismo não terminou com a morte de Hitler. Passou a integrar o centro das discussões sobre responsabilidade criminal, direitos humanos, genocídio e os limites do poder estatal.'
      ],
      references: 'Ian Kershaw, *The End: Hitler\'s Germany, 1944–45*; documentação dos Julgamentos de Nuremberg; United States Holocaust Memorial Museum.'
    }
  ];

  const fullChroniclesText = `CRÔNICAS HISTÓRICAS Nº 08
A Alemanha Nazista: Da Crise de Weimar ao Colapso do Reich (1920–1945)

Crônicas de uma transformação política, racial e genocida.

As narrativas a seguir são reconstruções históricas fundamentadas em documentos e pesquisas acadêmicas. Não utilizam diálogos ficcionais nem atribuem pensamentos inventados a personagens históricos.

---

${chronicles.map(c => `${c.fullHeading}\n\n${c.paragraphs.map(p => p.replace(/\*/g, '')).join('\n\n')}\n\nReferências: ${c.references.replace(/\*/g, '')}`).join('\n\n---\n\n')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullChroniclesText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                COLEÇÃO II — HISTÓRIA DAS IDEOLOGIAS POLÍTICAS
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                REGISTRO Nº 08
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              CRÔNICAS HISTÓRICAS Nº 08
            </h1>
            <p className="text-amber-400 font-serif font-semibold text-sm sm:text-base">
              A Alemanha Nazista: Da Crise de Weimar ao Colapso do Reich (1920–1945)
            </p>
            <p className="text-stone-300 font-serif italic text-xs sm:text-sm pt-1">
              Crônicas de uma transformação política, racial e genocida.
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar todas as 8 crônicas na íntegra"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Crônicas Copiadas!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Crônicas na Íntegra</span>
              </>
            )}
          </button>
        </div>

        <p className={`text-stone-300 font-serif text-justify leading-relaxed pt-1 ${getFontSizeClass('body')}`}>
          As narrativas a seguir são reconstruções históricas fundamentadas em documentos e pesquisas acadêmicas. Não utilizam diálogos ficcionais nem atribuem pensamentos inventados a personagens históricos.
        </p>
      </div>

      {/* CHRONICLES LIST */}
      <div className="space-y-6">
        {chronicles.map((c) => (
          <article key={c.id} id={c.id} className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
            <div className="border-b border-stone-800 pb-3 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                {c.num}
              </span>
              <h3 className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}>
                {c.fullHeading}
              </h3>
            </div>

            <div className={`space-y-3 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
              {c.paragraphs.map((p, pIdx) => (
                <p key={pIdx} dangerouslySetInnerHTML={{ __html: renderFormattedInline(p) }} />
              ))}
            </div>

            <div className="pt-3 border-t border-stone-800/80">
              <p className="text-xs font-mono text-stone-400 leading-relaxed">
                <strong className="text-amber-400">Referências:</strong>{' '}
                <span dangerouslySetInnerHTML={{ __html: renderFormattedInline(c.references) }} />
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
