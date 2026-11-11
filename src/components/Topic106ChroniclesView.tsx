import React, { useState } from 'react';
import { ScrollText, MapPin, Copy, Check, ShieldCheck, HelpCircle, BookOpen } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

interface Chronicle {
  num: string;
  title: string;
  location: string;
  paragraphs: string[];
  historicalQuestion: string;
}

export const Topic106ChroniclesView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const chronicles: Chronicle[] = [
    {
      num: 'CRÔNICA I',
      title: 'PARIS, 1871: A CIDADE QUE TENTOU GOVERNAR A SI MESMA',
      location: 'Paris, França',
      paragraphs: [
        'Paris, março de 1871.',
        'A França havia sido derrotada na Guerra Franco-Prussiana. O Império de Napoleão III havia desmoronado, e o governo instalado em Versalhes procurava restabelecer a autoridade sobre uma capital marcada pela mobilização popular.',
        'A Guarda Nacional de Paris possuía armas e canhões que se tornaram motivo de conflito com o governo.',
        'Em 18 de março, tropas enviadas para recolher os canhões encontraram resistência. A operação fracassou, e a autoridade governamental perdeu o controle da cidade.',
        'Nos dias seguintes, a população parisiense organizou eleições para constituir uma nova administração.',
        'A Comuna de Paris foi proclamada em 28 de março.',
        'A cidade passou a experimentar formas de governo que procuravam aproximar a administração pública dos representantes eleitos e das organizações populares.',
        'Mas a experiência não duraria.',
        'O governo de Versalhes organizou uma ofensiva militar. Em maio, as tropas entraram em Paris.',
        'Durante a Semana Sangrenta, entre 21 e 28 de maio, a repressão destruiu a Comuna.',
        'A experiência terminou, mas sua memória permaneceu. Marx a interpretaria como uma experiência histórica fundamental para a discussão sobre o Estado e a revolução.'
      ],
      historicalQuestion: 'como uma experiência revolucionária local se transformou em referência internacional para o movimento socialista?'
    },
    {
      num: 'CRÔNICA II',
      title: 'LONDRES, 1864–1876: A PRIMEIRA INTERNACIONAL E A DISPUTA PELO MOVIMENTO OPERÁRIO',
      location: 'Londres, Reino Unido',
      paragraphs: [
        'Em Londres, em 1864, representantes de organizações operárias de diferentes países reuniram-se para criar uma associação internacional.',
        'A proposta era simples em sua formulação, mas complexa em sua execução: organizar a solidariedade dos trabalhadores para além das fronteiras nacionais.',
        'A Associação Internacional dos Trabalhadores reuniu socialistas, sindicalistas, marxistas, anarquistas e outras correntes.',
        'Marx tornou-se uma figura importante na elaboração de documentos e na orientação da organização.',
        'Mas a unidade era frágil.',
        'Bakunin defendia uma transformação social baseada na autonomia das organizações e na rejeição do Estado. Marx considerava necessária a organização política da classe trabalhadora e a conquista do poder político.',
        'A divergência cresceu.',
        'No Congresso de Haia, em 1872, o conflito tornou-se decisivo. A organização perdeu sua unidade e entrou em um processo de fragmentação.',
        'Em 1876, a Primeira Internacional encerrou suas atividades.',
        'A experiência demonstrou que o internacionalismo operário não eliminava os conflitos sobre estratégia, autoridade e organização.'
      ],
      historicalQuestion: 'seria possível construir uma organização internacional revolucionária sem estabelecer uma direção política centralizada?'
    },
    {
      num: 'CRÔNICA III',
      title: '1914: A GUERRA QUE DIVIDIU O SOCIALISMO EUROPEU',
      location: 'Europa',
      paragraphs: [
        'O ano de 1914 representou uma ruptura para o movimento socialista internacional.',
        'Durante décadas, partidos socialistas haviam defendido a solidariedade internacional dos trabalhadores e denunciado os conflitos imperialistas.',
        'Entretanto, quando a Primeira Guerra Mundial começou, importantes partidos socialistas apoiaram os governos de seus próprios países.',
        'A decisão provocou uma crise política e ideológica.',
        'Para setores revolucionários, a guerra demonstrava que o internacionalismo socialista havia sido subordinado aos interesses nacionais.',
        'Lenin considerou a posição dos partidos que apoiaram a guerra uma falência da Segunda Internacional.',
        'Outros socialistas defenderam posições diferentes, e o movimento se fragmentou.',
        'A crise de 1914 tornou-se um dos antecedentes políticos da fundação da Internacional Comunista em 1919.'
      ],
      historicalQuestion: 'por que organizações comprometidas com a solidariedade internacional dos trabalhadores apoiaram guerras conduzidas por seus próprios Estados?'
    },
    {
      num: 'CRÔNICA IV',
      title: 'PETROGRADO, OUTUBRO DE 1917: A QUEDA DO GOVERNO PROVISÓRIO',
      location: 'Petrogrado, Rússia',
      paragraphs: [
        'A Rússia de 1917 atravessava uma crise profunda.',
        'A monarquia havia caído em fevereiro, mas o Governo Provisório não conseguira resolver os problemas que alimentavam a revolução.',
        'A guerra continuava. A economia estava desorganizada. Trabalhadores e soldados pressionavam por mudanças.',
        'Os sovietes haviam adquirido grande importância política.',
        'Os bolcheviques, inicialmente uma das forças presentes nesse cenário, ampliaram sua influência durante o ano.',
        'Em outubro, o Comitê Militar Revolucionário do Soviete de Petrogrado coordenou a ocupação de pontos estratégicos da capital.',
        'A operação derrubou o Governo Provisório.',
        'Os bolcheviques assumiram a direção do novo governo.',
        'A tomada do poder foi organizada por uma direção revolucionária, mas ocorreu em uma conjuntura de mobilização popular e desagregação institucional.',
        'A Revolução de Outubro tornou-se um dos acontecimentos mais debatidos da história contemporânea.'
      ],
      historicalQuestion: 'Outubro de 1917 foi principalmente uma insurreição partidária, uma revolução popular ou a combinação de diferentes processos políticos?'
    },
    {
      num: 'CRÔNICA V',
      title: '1918–1921: A REVOLUÇÃO SOB O CERCO DA GUERRA CIVIL',
      location: 'Rússia Soviética',
      paragraphs: [
        'Após a tomada do poder, o governo bolchevique enfrentou uma guerra civil.',
        'O conflito envolveu forças antibolcheviques, exércitos estrangeiros, movimentos nacionalistas e grupos camponeses.',
        'O novo governo centralizou a economia e ampliou os mecanismos de segurança política.',
        'A Cheka passou a desempenhar papel importante na repressão aos considerados inimigos da revolução.',
        'O Terror Vermelho, as execuções e as prisões tornaram-se elementos da experiência política do período.',
        'Em janeiro de 1918, a Assembleia Constituinte havia sido dissolvida. Em 1921, a revolta de Kronstadt foi reprimida militarmente.',
        'A guerra civil terminou sem que a Rússia retornasse ao pluralismo político anterior.',
        'A Nova Política Econômica foi introduzida em 1921, mas o monopólio político do Partido Comunista permaneceu.',
        'A revolução havia sobrevivido militarmente, mas o regime construído durante o conflito apresentava instituições profundamente centralizadas.'
      ],
      historicalQuestion: 'quais elementos da centralização política foram respostas à guerra civil e quais expressaram escolhas estruturais do governo bolchevique?'
    },
    {
      num: 'CRÔNICA VI',
      title: 'MOSCOU, 1919: O NASCIMENTO DA INTERNACIONAL COMUNISTA',
      location: 'Moscou, URSS',
      paragraphs: [
        'Em março de 1919, representantes de organizações comunistas reuniram-se em Moscou para fundar uma nova organização internacional.',
        'A Internacional Comunista nasceu em um contexto de expectativa revolucionária.',
        'A Revolução Russa havia demonstrado que um movimento comunista poderia conquistar o poder. Para seus dirigentes, a experiência deveria ser difundida internacionalmente.',
        'A nova organização procurou estabelecer uma coordenação política entre partidos comunistas.',
        'Em 1920, o Segundo Congresso aprovou 21 condições para a admissão de organizações na Internacional.',
        'As condições exigiam disciplina, ruptura com setores reformistas e reorganização partidária.',
        'A Komintern tornou-se uma das instituições mais importantes da história do comunismo internacional.',
        'Ao mesmo tempo, sua trajetória revelou uma tensão crescente entre o projeto de revolução mundial e os interesses do Estado soviético.'
      ],
      historicalQuestion: 'a Internacional Comunista foi uma organização internacional autônoma ou um instrumento progressivamente subordinado à política soviética?'
    },
    {
      num: 'CRÔNICA VII',
      title: '1935–1943: A FRENTE POPULAR E O FIM DA INTERNACIONAL COMUNISTA',
      location: 'Moscou / Europa',
      paragraphs: [
        'Na década de 1930, a ascensão do fascismo e do nazismo alterou profundamente a estratégia comunista internacional.',
        'Em 1935, o Sétimo Congresso da Internacional Comunista passou a defender a formação de Frentes Populares.',
        'A nova orientação permitia alianças entre comunistas, socialistas e setores democráticos contrários ao fascismo.',
        'A Guerra Civil Espanhola tornou-se um dos principais cenários dessa política.',
        'A União Soviética apoiou a República Espanhola, enquanto diferentes organizações comunistas participaram do conflito.',
        'Entretanto, as disputas internas da esquerda, a repressão política e os conflitos entre organizações revolucionárias também marcaram o período.',
        'Em 1943, durante a Segunda Guerra Mundial, a Internacional Comunista foi formalmente dissolvida.',
        'A organização havia deixado de existir, mas os partidos comunistas continuaram atuando internacionalmente.',
        'A história da Komintern demonstrava a complexidade do internacionalismo revolucionário: uma organização criada para promover a revolução mundial havia sido profundamente condicionada pelas prioridades políticas e diplomáticas do Estado soviético.'
      ],
      historicalQuestion: 'a dissolução da Internacional Comunista representou o abandono do internacionalismo revolucionário ou uma transformação de suas formas de atuação?'
    }
  ];

  const fullChroniclesText = `# CRÔNICAS DA HISTÓRIA REVOLUCIONÁRIA
## Da Comuna de Paris à Internacional Comunista (1871–1945)

${chronicles.map(c => `${c.num} — ${c.title}\n${c.paragraphs.join('\n\n')}\n\nQuestão histórica: ${c.historicalQuestion}`).join('\n\n---\n\n')}

---

### NOTA METODOLÓGICA DAS CRÔNICAS
As narrativas desta aba são sínteses históricas baseadas em acontecimentos documentados. Não foram inventados diálogos, pensamentos privados ou cenas testemunhais.

As descrições de acontecimentos devem ser confrontadas com documentos históricos e estudos especializados, especialmente os trabalhos de Robert Tombs, Sheila Fitzpatrick, Alexander Rabinowitch, S. A. Smith, E. H. Carr, Silvio Pons e Brigitte Studer.`;

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
                REGISTROS NARRATIVOS E DOCUMENTADOS
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                CAPÍTULO ACADÊMICO Nº 06
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              CRÔNICAS DA HISTÓRIA REVOLUCIONÁRIA
            </h1>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              Da Comuna de Paris à Internacional Comunista (1871–1945)
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar todas as 7 crônicas e nota metodológica"
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
      </div>

      {/* CHRONICLES LIST */}
      <div className="space-y-6">
        {chronicles.map((c, idx) => (
          <article key={idx} className="bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
            <div className="flex items-start justify-between gap-3 flex-wrap border-b border-stone-800 pb-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                  {c.num}
                </span>
                <h3 className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}>
                  {c.title}
                </h3>
              </div>

              {c.location && (
                <div className="flex items-center gap-1.5 text-xs font-mono text-stone-300 bg-stone-900 px-2.5 py-1 rounded border border-stone-800 shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{c.location}</span>
                </div>
              )}
            </div>

            <div className={`space-y-3 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
              {c.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>
                  {p}
                </p>
              ))}
            </div>

            {c.historicalQuestion && (
              <div className="bg-[#121214] p-4 rounded-lg border-l-4 border-amber-500/80 space-y-1 mt-4 shadow-inner">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Questão histórica:</span>
                </div>
                <p className="font-serif italic text-stone-200 text-xs sm:text-sm leading-relaxed pl-5">
                  {c.historicalQuestion}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* NOTA METODOLÓGICA DAS CRÔNICAS */}
      <section className="bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-3 shadow-md">
        <div className="flex items-center gap-2 border-b border-stone-800 pb-3 text-amber-400">
          <BookOpen className="w-5 h-5 shrink-0" />
          <h3 className="font-serif font-bold text-base sm:text-lg text-stone-100 uppercase tracking-wide">
            NOTA METODOLÓGICA DAS CRÔNICAS
          </h3>
        </div>
        <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
          As narrativas desta aba são sínteses históricas baseadas em acontecimentos documentados. Não foram inventados diálogos, pensamentos privados ou cenas testemunhais.
        </p>
        <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
          As descrições de acontecimentos devem ser confrontadas com documentos históricos e estudos especializados, especialmente os trabalhos de Robert Tombs, Sheila Fitzpatrick, Alexander Rabinowitch, S. A. Smith, E. H. Carr, Silvio Pons e Brigitte Studer.
        </p>
      </section>
    </div>
  );
};
