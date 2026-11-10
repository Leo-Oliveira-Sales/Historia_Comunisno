import React from 'react';
import { BookOpen, ScrollText } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

export const Topic112ChroniclesView: React.FC<Props> = ({ getFontSizeClass }) => {
  const cronicas = [
    {
      num: 1,
      title: 'CRÔNICA 1 — A MONARQUIA E O SÉCULO DAS LUZES (1715–1788)',
      paragraphs: [
        'Em 1715, a morte de Luís XIV encerrou um longo reinado que havia simbolizado o poder da monarquia francesa.',
        'A França continuava sendo uma das principais potências europeias. Sua sociedade, entretanto, estava organizada por privilégios jurídicos, distinções de nascimento e diferentes formas de autoridade.',
        'Ao longo do século XVIII, uma transformação intelectual começou a modificar a maneira como o poder era discutido.',
        'Nos livros, nas academias, nos salões e nos cafés, filósofos passaram a questionar o fanatismo religioso, a arbitrariedade política e as estruturas tradicionais da sociedade.',
        'Montesquieu examinou a organização dos poderes. Voltaire atacou a intolerância. Rousseau discutiu a soberania popular.',
        'A monarquia, entretanto, enfrentava problemas que não podiam ser resolvidos apenas pela força de sua tradição.',
        'O endividamento público, os privilégios fiscais e a resistência das instituições dificultavam as reformas.',
        'Em 1788, a crise financeira tornou-se insustentável. Luís XVI convocou os Estados Gerais.',
        'A crise do Antigo Regime estava prestes a transformar-se em revolução.'
      ]
    },
    {
      num: 2,
      title: 'CRÔNICA 2 — A QUEDA DA BASTILHA (1789)',
      paragraphs: [
        'Em 14 de julho de 1789, a população de Paris tomou a Bastilha.',
        'A fortaleza representava a autoridade real e a possibilidade de prisão por determinação monárquica.',
        'Sua queda não encerrou imediatamente o poder da monarquia, mas demonstrou que a população urbana poderia interferir diretamente no curso da política nacional.',
        'Nas semanas seguintes, a Revolução avançou.',
        'A Assembleia Nacional aboliu privilégios feudais, e a Declaração dos Direitos do Homem e do Cidadão estabeleceu princípios que se tornariam referências do constitucionalismo moderno.',
        'O movimento revolucionário ultrapassou Paris. No campo, camponeses atacaram símbolos e documentos do regime senhorial.',
        'A França havia iniciado uma transformação política de alcance internacional.'
      ]
    },
    {
      num: 3,
      title: 'CRÔNICA 3 — A REPÚBLICA E O TERROR (1792–1794)',
      paragraphs: [
        'Em setembro de 1792, a monarquia foi abolida e a República proclamada.',
        'A guerra contra potências europeias, os conflitos internos e a disputa entre diferentes projetos revolucionários aprofundaram a instabilidade.',
        'Luís XVI foi executado em janeiro de 1793.',
        'A Convenção Nacional passou a governar em um ambiente de guerra e radicalização política.',
        'Entre 1793 e 1794, o governo revolucionário recorreu a medidas excepcionais, tribunals revolucionários e repressão contra os considerados inimigos da República.',
        'O Terror tornou-se uma das experiências mais controversas da Revolução.',
        'Em julho de 1794, a queda de Robespierre abriu caminho para uma nova fase política.'
      ]
    },
    {
      num: 4,
      title: 'CRÔNICA 4 — NAPOLEÃO E A NOVA FRANÇA (1799–1815)',
      paragraphs: [
        'Em novembro de 1799, Napoleão Bonaparte participou do golpe que encerrou o Diretório.',
        'O novo governo reorganizou a administração e concentrou o poder político.',
        'Em 1804, o Código Civil consolidou regras fundamentais sobre propriedade, contratos e relações familiares.',
        'No mesmo ano, Napoleão tornou-se imperador.',
        'A França passou a exercer enorme influência militar e política sobre a Europa.',
        'As campanhas napoleônicas transformaram fronteiras e regimes, mas também provocaram resistência nacional e guerras prolongadas.',
        'A derrota de Waterloo, em 1815, encerrou definitivamente seu governo imperial.'
      ]
    },
    {
      num: 5,
      title: 'CRÔNICA 5 — AS REVOLUÇÕES DE 1830 E 1848',
      paragraphs: [
        'A derrota de Napoleão não restaurou integralmente a antiga ordem.',
        'Em julho de 1830, Paris voltou às barricadas. Carlos X foi derrubado, e Luís Filipe assumiu o trono.',
        'Dezoito anos depois, a monarquia novamente entrou em colapso.',
        'Em fevereiro de 1848, uma nova revolução estabeleceu a Segunda República.',
        'O sufrágio masculino universal foi instituído, e a escravidão foi abolida nas colônias francesas.',
        'Entretanto, a questão social permanecia aberta.',
        'As Jornadas de Junho, quando trabalhadores de Paris foram reprimidos, mostraram que a igualdade jurídica não significava igualdade econômica.'
      ]
    },
    {
      num: 6,
      title: 'CRÔNICA 6 — A COMUNA DE PARIS (1871)',
      paragraphs: [
        'Em 1871, Paris vivia as consequências da derrota francesa diante da Prússia.',
        'A queda do Segundo Império, a ocupação, o cerco da capital e os conflitos com o governo instalado em Versalhes contribuíram para a insurreição.',
        'Em 18 de março, iniciou-se o movimento que conduziu à Comuna de Paris.',
        'Durante aproximadamente 72 dias, a capital foi administrada por um governo revolucionário municipal.',
        'A Comuna promoveu medidas de reorganização política e social e tornou-se referência para movimentos operários.',
        'Em maio, as forças do governo francês retomaram a cidade.',
        'A Semana Sangrenta encerrou a experiência em meio a uma repressão de grande violência.'
      ]
    },
    {
      num: 7,
      title: 'CRÔNICA 7 — A FRANÇA NAS TRINCHEIRAS (1914–1918)',
      paragraphs: [
        'Em agosto de 1914, a França entrou na Primeira Guerra Mundial.',
        'A guerra transformou o território francês em um dos principais campos de batalha da Europa.',
        'Trincheiras, bombardeios, artilharia e combates prolongados marcaram a experiência dos soldados.',
        'A população civil enfrentou destruição, deslocamentos e dificuldades econômicas.',
        'A vitória de 1918 não apagou o custo humano e material do conflito.',
        'A França saiu vitoriosa, mas profundamente transformada.'
      ]
    },
    {
      num: 8,
      title: 'CRÔNICA 8 — VICHY, OCUPAÇÃO E RESISTÊNCIA (1940–1944)',
      paragraphs: [
        'Em 1940, a derrota diante da Alemanha nazista provocou o colapso da Terceira República.',
        'O regime de Vichy, dirigido por Pétain, estabeleceu uma política de colaboração com os ocupantes.',
        'O governo francês participou da perseguição aos judeus e de outras medidas repressivas.',
        'Fora e dentro da França, diferentes movimentos organizaram a resistência.',
        'Charles de Gaulle tornou-se a principal referência da França Livre, enquanto Jean Moulin ajudou a articular a Resistência interna.',
        'Em agosto de 1944, Paris foi libertada.',
        'A reconstrução nacional exigiria não apenas a recuperação material, mas também a reorganização das instituições e a revisão do passado recente.'
      ]
    },
    {
      num: 9,
      title: 'CRÔNICA 9 — A RECONSTRUÇÃO E O ESTADO SOCIAL (1944–1950)',
      paragraphs: [
        'A Resistência francesa havia elaborado propostas para reorganizar o país depois da ocupação.',
        'O programa do Conselho Nacional da Resistência, aprovado em março de 1944, defendia reformas econômicas e sociais.',
        'Depois da libertação, a França ampliou as nacionalizações e organizou a estrutura moderna da Seguridade Social.',
        'O Estado assumiu novas responsabilidades na proteção dos trabalhadores, na previdência e na reconstrução econômica.',
        'Em 1945, as mulheres francesas votaram pela primeira vez em eleições municipais, depois de conquistarem o direito de voto em 1944.',
        'A reconstrução também significou ampliar a cidadania política.'
      ]
    },
    {
      num: 10,
      title: 'CRÔNICA 10 — AS TRINTA GLORIOSAS E O FIM DE UMA ÉPOCA (1945–1975)',
      paragraphs: [
        'Nas décadas posteriores à guerra, a França experimentou forte crescimento econômico.',
        'Novas indústrias, habitações, estradas e serviços públicos modificaram a vida cotidiana.',
        'O consumo aumentou, a escolarização se expandiu e a proteção social tornou-se parte importante da organização nacional.',
        'Entretanto, o crescimento conviveu com conflitos trabalhistas, desigualdades, tensões coloniais e transformações culturais.',
        'A Guerra da Argélia, encerrada em 1962, marcou profundamente a história republicana.',
        'Em maio de 1968, estudantes e trabalhadores questionaram as estruturas de autoridade e as relações sociais.',
        'A crise internacional de 1973 enfraqueceu o modelo de crescimento do pós-guerra.',
        'Em 1975, encerrava-se simbolicamente o período das Trinta Gloriosas.',
        'A França havia percorrido um longo caminho: da monarquia absolutista à República social, atravessando revoluções, guerras e experiências políticas profundamente contraditórias.'
      ]
    }
  ];

  const referencias = [
    'DOYLE, William. The Oxford History of the French Revolution. Oxford University Press, 2002.',
    'MCPHEE, Peter. Liberty or Death: The French Revolution. Yale University Press, 2016.',
    'TOMBS, Robert. The Paris Commune 1871. Longman, 1999.',
    'JACKSON, Julian. France: The Dark Years, 1940–1944. Oxford University Press, 2001.',
    'PAXTON, Robert O. Vichy France: Old Guard and New Order, 1940–1944. Columbia University Press, 1972.',
    'FOURASTIÉ, Jean. Les Trente Glorieuses. Fayard, 1979.'
  ];

  return (
    <div className="bg-[#161619] border border-stone-800 p-6 sm:p-9 rounded-xl space-y-9 shadow-xl">
      {/* HEADER BANNER */}
      <div className="border-b border-stone-800 pb-6 space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold inline-block">
          COLEÇÃO II — HISTÓRIA DAS IDEOLOGIAS POLÍTICAS
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
          CRÔNICAS HISTÓRICAS Nº 11
        </h2>
        <p className="font-serif italic text-amber-400 text-base sm:text-lg">
          FRANÇA: REVOLUÇÕES, GUERRAS E TRANSFORMAÇÕES SOCIAIS (1715–1975)
        </p>
      </div>

      {/* LIST OF CHRONICLES */}
      <div className="space-y-7">
        {cronicas.map((c) => (
          <article key={c.num} className="bg-[#121214] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
            <div className="flex items-center gap-3 border-b border-stone-800/80 pb-3">
              <ScrollText className="w-5 h-5 text-amber-400 shrink-0" />
              <h3 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                {c.title}
              </h3>
            </div>

            <div className="space-y-3.5">
              {c.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* REFERÊNCIAS PARA AS CRÔNICAS */}
      <section className="space-y-4 pt-4 border-t border-stone-800">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          REFERÊNCIAS PARA AS CRÔNICAS
        </h3>

        <div className="space-y-2 font-mono text-xs text-stone-300">
          {referencias.map((ref, rIdx) => (
            <div key={rIdx} className="bg-[#121214] p-3.5 rounded border border-stone-800/80 select-all leading-relaxed">
              • {ref}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
