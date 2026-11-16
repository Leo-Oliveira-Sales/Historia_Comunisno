import React, { useState } from 'react';
import { Copy, Check, ScrollText } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

interface Chronicle {
  id: string;
  num: string;
  fullHeading: string;
  locationDate: string;
  paragraphs: string[];
  reflexao: string;
}

export const Topic109ChroniclesView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const chronicles: Chronicle[] = [
    {
      id: 'cronica-1',
      num: 'CRÔNICA I',
      fullHeading: 'CRÔNICA I — O OPERÁRIO QUE NÃO QUERIA ESPERAR PELA REVOLUÇÃO',
      locationDate: 'Alemanha, 1899.',
      paragraphs: [
        'O inverno chegava às ruas industriais da Alemanha. Nas fábricas, o ruído das máquinas começava antes do amanhecer e terminava muito depois do pôr do sol.',
        'Karl, um operário fictício de uma indústria metalúrgica, havia trabalhado durante onze horas naquele dia.',
        'Seus dedos estavam marcados pelo trabalho e seu salário mal permitia sustentar a família.',
        'Naquela noite, depois de jantar, encontrou sobre a mesa um jornal socialista. O texto anunciava um debate que dividia o movimento operário: seria necessário esperar por uma grande transformação revolucionária ou lutar por conquistas graduais?',
        'No sindicato, alguns trabalhadores defendiam que o capitalismo estava destinado a entrar em colapso. Outros afirmavam que a organização política já estava conquistando resultados concretos.',
        'Karl não compreendia todas as discussões teóricas, mas compreendia perfeitamente o problema.',
        'Seu filho precisava frequentar a escola. Sua esposa precisava de atendimento médico. Ele próprio temia sofrer um acidente e perder a capacidade de trabalhar.',
        'Na reunião sindical, um trabalhador mais velho afirmou:',
        '— Não podemos esperar que uma sociedade futura resolva os problemas de nossos filhos. Precisamos de direitos agora.',
        'Outro respondeu:',
        '— Se aceitarmos apenas reformas, talvez terminemos defendendo o próprio sistema que pretendemos transformar.',
        'A discussão permaneceu sem solução.',
        'Naquele mesmo período, Eduard Bernstein publicava suas reflexões sobre o futuro da social-democracia.',
        'A história real não foi a de um único operário tomando conhecimento de um livro. Foi a de um movimento inteiro debatendo o significado da democracia, da reforma e da transformação social.',
        'A questão que dividia aqueles trabalhadores continuaria presente durante todo o século XX.'
      ],
      reflexao: 'a social-democracia nasceu de uma tensão entre conquistas imediatas e transformação estrutural. O problema não desapareceu com a consolidação do Welfare State.'
    },
    {
      id: 'cronica-2',
      num: 'CRÔNICA II',
      fullHeading: 'CRÔNICA II — O HOMEM QUE PERDEU O EMPREGO EM 1929',
      locationDate: 'Estados Unidos, 1929–1932.',
      paragraphs: [
        'Thomas, personagem fictício, trabalhava em uma fábrica de componentes industriais.',
        'Durante anos, acreditou que o emprego seria suficiente para garantir estabilidade à família.',
        'Tinha uma pequena casa, pagava suas contas e conseguia economizar alguma coisa.',
        'Quando a crise chegou, as primeiras notícias pareciam distantes.',
        'Falava-se de bancos, ações, investidores e empresas de Nova York.',
        'Depois vieram as demissões.',
        'Primeiro foram os trabalhadores temporários. Em seguida, os funcionários com menos tempo de serviço. Finalmente, a fábrica reduziu suas atividades.',
        'Thomas passou a procurar emprego diariamente.',
        'A cada semana, encontrava mais homens na mesma situação.',
        'O problema não era simplesmente a falta de disposição para trabalhar. Havia empresas fechadas, consumidores sem dinheiro e investimentos interrompidos.',
        'Sua esposa começou a reduzir as despesas da casa. As crianças perceberam que determinados alimentos haviam desaparecido da mesa.',
        'Thomas ouviu diferentes explicações.',
        'Alguns diziam que o mercado resolveria tudo. Outros afirmavam que o governo deveria intervir.',
        'A economia parecia ter entrado em um círculo: sem emprego, não havia renda; sem renda, não havia consumo; sem consumo, as empresas não contratavam.',
        'Anos depois, as ideias de John Maynard Keynes ofereceriam uma explicação teórica para aquele fenômeno.',
        'O desemprego não precisava ser interpretado apenas como um problema individual. Poderia resultar da insuficiência geral da demanda econômica.'
      ],
      reflexao: 'a crise de 1929 demonstrou que a estabilidade econômica não poderia ser deixada exclusivamente à expectativa de autorregulação dos mercados.'
    },
    {
      id: 'cronica-3',
      num: 'CRÔNICA III',
      fullHeading: 'CRÔNICA III — OS CINCO GIGANTES',
      locationDate: 'Londres, 1942.',
      paragraphs: [
        'A guerra ainda não havia terminado.',
        'Londres conhecia os bombardeios, as filas, o racionamento e a incerteza.',
        'Em uma casa fictícia de trabalhadores, uma família acompanhava as notícias pelo rádio.',
        'O pai estava preocupado com o futuro do emprego. A mãe temia que os filhos crescessem sem acesso adequado à educação. A avó dependia de ajuda familiar para sobreviver.',
        'O futuro parecia incerto.',
        'Naquele ano, William Beveridge apresentou seu relatório sobre a reorganização da segurança social britânica.',
        'O documento identificava cinco grandes obstáculos à construção de uma sociedade mais justa.',
        'A pobreza.',
        'A doença.',
        'A ignorância.',
        'As condições precárias de habitação.',
        'O desemprego.',
        'Os cinco gigantes não eram monstros imaginários. Eram problemas concretos que acompanhavam milhões de pessoas.',
        'A proposta de Beveridge procurava organizar uma rede de proteção que não dependesse exclusivamente da caridade.',
        'A família imaginária não conhecia os detalhes técnicos do relatório. Mas reconheceria imediatamente o significado de suas propostas.',
        'Uma doença não deveria destruir financeiramente uma família.',
        'A velhice não deveria significar abandono.',
        'O desemprego não deveria conduzir automaticamente à miséria.',
        'A educação não deveria ser privilégio de poucos.',
        'A guerra ainda continuaria por alguns anos, mas o debate sobre a reconstrução social já estava em andamento.'
      ],
      reflexao: 'a experiência britânica demonstrou que uma sociedade poderia transformar a proteção social em responsabilidade institucional do Estado.'
    },
    {
      id: 'cronica-4',
      num: 'CRÔNICA IV',
      fullHeading: 'CRÔNICA IV — A PRIMEIRA MANHÃ DO NHS',
      locationDate: 'Londres, 5 de julho de 1948.',
      paragraphs: [
        'Uma mulher fictícia chamada Margaret acordou cedo.',
        'Seu marido havia retornado da guerra, e os dois tinham uma filha pequena.',
        'Durante anos, a família havia adiado consultas médicas porque não possuía dinheiro suficiente.',
        'A doença era uma preocupação constante.',
        'Naquela manhã, o rádio anunciou o início do National Health Service.',
        'O novo sistema britânico prometia organizar o atendimento médico como um serviço nacional, financiado principalmente por recursos públicos.',
        'A mudança não resolveria imediatamente todos os problemas da saúde britânica.',
        'Havia dificuldades administrativas, resistência profissional, limitações de recursos e uma grande demanda acumulada.',
        'Mas algo importante havia mudado.',
        'O atendimento médico deixava de depender exclusivamente da possibilidade de pagar por ele.',
        'A família de Margaret não precisava conhecer os debates parlamentares que haviam antecedido a criação do serviço.',
        'O que importava era que a proteção à saúde passava a fazer parte de uma nova organização pública.',
        'A inauguração do NHS representou um dos momentos mais simbólicos da construção do Welfare State britânico.'
      ],
      reflexao: 'direitos sociais tornam-se concretos quando são transformados em instituições acessíveis à população.'
    },
    {
      id: 'cronica-5',
      num: 'CRÔNICA V',
      fullHeading: 'CRÔNICA V — A DISCUSSÃO EM BAD GODESBERG',
      locationDate: 'Alemanha Ocidental, novembro de 1959.',
      paragraphs: [
        'Em uma sala de congresso, delegados discutiam o futuro do Partido Social-Democrata alemão.',
        'A Alemanha Ocidental havia experimentado crescimento econômico expressivo.',
        'As cidades estavam sendo reconstruídas, a indústria se expandia e a sociedade passava por transformações profundas.',
        'O SPD precisava responder a uma pergunta difícil: como continuar sendo um partido socialista em uma sociedade na qual a economia de mercado havia adquirido enorme legitimidade?',
        'Um delegado fictício levantou-se:',
        '— Se abandonarmos nossa tradição marxista, perderemos nossa identidade.',
        'Outro respondeu:',
        '— Se não compreendermos a sociedade que existe hoje, continuaremos falando apenas para uma parcela do eleitorado.',
        'A discussão não era simples.',
        'A propriedade privada seria reconhecida?',
        'A concorrência deveria ser aceita?',
        'Qual seria o papel dos sindicatos?',
        'Como proteger os trabalhadores sem eliminar a iniciativa econômica?',
        'O Programa de Bad Godesberg procurou responder a essas questões.',
        'Liberdade, justiça e solidariedade passaram a constituir os valores fundamentais do socialismo democrático defendido pelo partido.',
        'A transformação foi histórica.',
        'O SPD deixou de se apresentar programaticamente como partido exclusivo da classe trabalhadora e passou a se definir como partido popular.'
      ],
      reflexao: 'Bad Godesberg simbolizou a passagem de uma social-democracia vinculada à tradição marxista para um projeto democrático de economia de mercado regulada e proteção social.'
    },
    {
      id: 'cronica-6',
      num: 'CRÔNICA VI',
      fullHeading: 'CRÔNICA VI — O HOMEM ATRÁS DO VÉU DA IGNORÂNCIA',
      locationDate: 'Uma sala imaginária de filosofia política, década de 1970.',
      paragraphs: [
        'Imagine uma sociedade na qual um grupo de pessoas precisa escolher as regras fundamentais de organização política.',
        'Elas não sabem quem serão.',
        'Não sabem se nascerão ricas ou pobres.',
        'Não sabem se terão saúde ou alguma deficiência.',
        'Não sabem se pertencerão a uma maioria ou a uma minoria.',
        'Não conhecem sua futura profissão, religião ou posição social.',
        'A única certeza é que, depois de escolher as regras, terão de viver sob elas.',
        'Essa é uma representação literária do experimento filosófico proposto por John Rawls.',
        'O véu da ignorância procura impedir que as pessoas escolham princípios exclusivamente favoráveis à posição que ocupam.',
        'Uma pessoa que não sabe se nascerá pobre talvez considere importante garantir educação pública e oportunidades reais.',
        'Alguém que não sabe se terá uma deficiência talvez defenda mecanismos de acessibilidade e proteção social.',
        'Alguém que desconhece sua futura posição política pode considerar indispensável proteger a liberdade de expressão.',
        'Rawls não estava descrevendo uma assembleia histórica real.',
        'Estava construindo um experimento mental para investigar os fundamentos da justiça.',
        'A pergunta permanecia:',
        'Se não soubéssemos qual seria nossa posição na sociedade, quais regras consideraríamos justas?'
      ],
      reflexao: 'a justiça distributiva pode ser examinada a partir de princípios que não dependam dos privilégios de quem os formula.'
    },
    {
      id: 'cronica-7',
      num: 'CRÔNICA VII',
      fullHeading: 'CRÔNICA VII — DUAS PESSOAS, A MESMA RENDA',
      locationDate: 'Uma cidade contemporânea.',
      paragraphs: [
        'João e Ana possuem a mesma renda mensal.',
        'Ambos recebem o mesmo salário e vivem no mesmo município.',
        'À primeira vista, parecem possuir condições econômicas equivalentes.',
        'Entretanto, João mora próximo ao trabalho, possui boa saúde e consegue utilizar o transporte público.',
        'Ana possui uma deficiência que exige adaptações em sua residência e transporte especializado.',
        'A mesma renda produz resultados diferentes.',
        'João consegue economizar.',
        'Ana precisa utilizar parte maior de seus recursos para alcançar condições semelhantes de mobilidade e participação.',
        'Se uma política pública considerar apenas a renda dos dois, poderá concluir que ambos estão em situação equivalente.',
        'Mas a realidade demonstra outra coisa.',
        'A liberdade efetiva depende das condições que permitem transformar recursos em oportunidades.',
        'É justamente esse tipo de problema que a abordagem das capacidades de Amartya Sen procura examinar.',
        'A pergunta não é apenas quanto cada pessoa possui.',
        'É também o que cada pessoa consegue efetivamente fazer e ser com aquilo que possui.'
      ],
      reflexao: 'a justiça social não pode ser medida exclusivamente pela renda. É necessário considerar as capacidades reais dos indivíduos.'
    },
    {
      id: 'cronica-8',
      num: 'CRÔNICA VIII',
      fullHeading: 'CRÔNICA VIII — O CONTRATO SOCIAL DO SÉCULO XXI',
      locationDate: 'Uma cidade industrial contemporânea.',
      paragraphs: [
        'Uma fábrica anuncia a substituição de parte de suas atividades por sistemas automatizados.',
        'A produtividade aumentará.',
        'Os custos diminuirão.',
        'Os consumidores poderão pagar menos por determinados produtos.',
        'Entretanto, centenas de trabalhadores temem perder seus empregos.',
        'O governo anuncia um programa de qualificação profissional.',
        'Os sindicatos exigem proteção de renda.',
        'As empresas afirmam que precisam modernizar suas instalações para competir internacionalmente.',
        'A sociedade enfrenta uma questão antiga sob uma forma nova.',
        'Como distribuir os benefícios da transformação econômica sem concentrar seus custos sobre os trabalhadores?',
        'A social-democracia nasceu em uma sociedade industrial muito diferente.',
        'Mas o problema que a originou permanece.',
        'O mercado produz oportunidades, riqueza e inovação. Também pode produzir insegurança e desigualdade.',
        'O Estado não precisa impedir toda transformação econômica, mas deve garantir que os indivíduos não sejam abandonados diante dela.',
        'A proteção social, a educação, a negociação coletiva e a participação democrática continuam sendo instrumentos fundamentais.'
      ],
      reflexao: 'a questão social não desapareceu com a modernização. Ela mudou de forma e passou a exigir novas respostas institucionais.'
    }
  ];

  const handleCopy = () => {
    const raw = `# ABA 3 — CRÔNICAS HISTÓRICAS

## CONSENSO DO PÓS-GUERRA E ESTADO SOCIAL DE DIREITO

### Narrativas sobre trabalhadores, crises, direitos sociais e democracia

---

` + chronicles.map(c => `# ${c.fullHeading}\n\n**${c.locationDate}**\n\n${c.paragraphs.join('\n\n')}\n\n**Reflexão histórica:** ${c.reflexao}`).join('\n\n---\n\n') + `\n\n---\n\n## NOTA HISTÓRICA SOBRE AS CRÔNICAS

As oito narrativas são composições literárias originais, com personagens fictícios e situações inspiradas em processos históricos documentados.

Não constituem testemunhos de pessoas reais nem reproduzem diálogos históricos.

Sua finalidade é apresentar, de maneira narrativa, os problemas sociais e políticos associados ao revisionismo, à Grande Depressão, ao Welfare State, à social-democracia alemã e às teorias contemporâneas da justiça.`;

    navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold inline-block">
              ABA 3 — CRÔNICAS HISTÓRICAS
            </span>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              CONSENSO DO PÓS-GUERRA E ESTADO SOCIAL DE DIREITO
            </h1>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              Narrativas sobre trabalhadores, crises, direitos sociais e democracia
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
      </div>

      {/* CHRONICLES I - VIII */}
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
              <p className="text-xs font-mono text-amber-300/90 font-semibold pt-1">
                {c.locationDate}
              </p>
            </div>

            <div className={`space-y-3 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
              {c.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            <div className="bg-stone-900/70 border border-stone-800 border-l-4 border-l-amber-500 p-4 rounded-r-lg">
              <p className={`font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}>
                <strong className="text-amber-300 font-bold">Reflexão histórica:</strong> {c.reflexao}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* NOTA HISTÓRICA SOBRE AS CRÔNICAS */}
      <section id="cronica-nota" className="scroll-mt-24 bg-[#161619] p-6 sm:p-7 rounded-xl border border-amber-600/40 space-y-3 shadow-md">
        <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
          <ScrollText className="w-5 h-5 text-amber-400 shrink-0" />
          <h3 className={`font-serif font-bold text-amber-300 uppercase tracking-wide ${getFontSizeClass('heading')}`}>
            NOTA HISTÓRICA SOBRE AS CRÔNICAS
          </h3>
        </div>
        <div className={`space-y-3 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
          <p>As oito narrativas são composições literárias originais, com personagens fictícios e situações inspiradas em processos históricos documentados.</p>
          <p>Não constituem testemunhos de pessoas reais nem reproduzem diálogos históricos.</p>
          <p>Sua finalidade é apresentar, de maneira narrativa, os problemas sociais e políticos associados ao revisionismo, à Grande Depressão, ao Welfare State, à social-democracia alemã e às teorias contemporâneas da justiça.</p>
        </div>
      </section>
    </div>
  );
};
