import React, { useMemo, useState } from 'react';
import { Copy, Check, ScrollText, CheckCircle2 } from 'lucide-react';

interface Topic203ChroniclesViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

interface ChronicleItem {
  id: string;
  heading: string;
  paragraphs: string[];
}

interface ParsedChronicles203 {
  mainTitle: string;
  subtitle: string;
  chronicles: ChronicleItem[];
  closingHeading: string;
  closingParagraphs: string[];
}

export const RAW_CHRONICLES_203 = `# CRÔNICAS HISTÓRICAS
## A GUERRA DE TRINCHEIRAS E A FRENTE OCIDENTAL (1914–1918)

### CRÔNICA 1 — AGOSTO DE 1914: QUANDO A EUROPA MARCHOU PARA A GUERRA

No verão de 1914, a Europa entrou em uma guerra que muitos imaginavam ser breve. As mobilizações militares sucederam-se rapidamente, os sistemas ferroviários foram colocados a serviço dos exércitos e milhões de homens receberam ordens para abandonar suas casas e seguir para as fronteiras.

Na Alemanha, na França e no Reino Unido, a guerra foi acompanhada por manifestações patrióticas, discursos nacionalistas e uma atmosfera de expectativa. A mobilização parecia confirmar que os Estados europeus estavam preparados para uma grande confrontação.

Entretanto, por trás do entusiasmo inicial existia uma realidade militar muito mais complexa.

Os exércitos modernos eram enormes organizações industriais. Dependiam de ferrovias, depósitos de munição, sistemas de comunicação, abastecimento alimentar e estruturas administrativas capazes de sustentar milhões de combatentes.

A Alemanha iniciou sua ofensiva ocidental atravessando Luxemburgo e a Bélgica, violando a neutralidade belga e provocando a entrada britânica na guerra. O avanço alemão colocou a França diante de uma ameaça imediata.

Durante semanas, as forças alemãs avançaram profundamente em território francês. As tropas francesas e britânicas recuaram, reorganizaram suas posições e tentaram impedir que o inimigo alcançasse seus objetivos.

Em setembro, a Batalha do Marne interrompeu a ofensiva alemã.

A expectativa de uma vitória rápida começou a desaparecer.

Os exércitos tentaram contornar as posições adversárias em direção ao norte, mas os movimentos sucessivos não produziram uma ruptura decisiva. As linhas militares foram se estendendo até formar uma frente contínua, que atravessava grande parte do território francês e chegava ao litoral belga.

A guerra de movimento não havia desaparecido completamente, mas a possibilidade de uma decisão rápida na Frente Ocidental estava seriamente comprometida.

Os soldados começaram a escavar posições para se protegerem do fogo inimigo. Inicialmente, eram abrigos improvisados. Com o passar do tempo, transformaram-se em sistemas defensivos cada vez mais elaborados.

A Europa havia entrado em uma guerra diferente daquela que seus planejadores imaginaram.

---

### CRÔNICA 2 — O NASCIMENTO DAS TRINCHEIRAS: A TERRA COMO ÚLTIMA PROTEÇÃO

O solo da Frente Ocidental tornou-se parte fundamental da guerra.

Depois dos combates de 1914, os soldados compreenderam que permanecer em terreno aberto significava expor-se a uma quantidade crescente de disparos.

A escavação de trincheiras oferecia uma proteção relativa contra rifles, metralhadoras e estilhaços de artilharia.

O que começou como uma medida emergencial transformou-se em um sistema permanente de defesa.

As trincheiras não eram simplesmente valas cavadas no chão. Em muitos setores, formavam redes complexas, compostas por linhas de frente, posições de apoio, abrigos subterrâneos, postos de observação e corredores de comunicação.

As linhas defensivas eram frequentemente protegidas por arame farpado, metralhadoras e posições de artilharia.

Entre os exércitos adversários existia uma faixa de terreno conhecida como Terra de Ninguém.

Esse espaço podia apresentar crateras, árvores destruídas, restos de construções, arame farpado e cadáveres. Em determinados setores, atravessá-lo durante uma ofensiva significava enfrentar fogo concentrado de diferentes posições defensivas.

A distância entre as linhas variava conforme o terreno e as circunstâncias militares.

Durante o dia, os movimentos eram frequentemente limitados pela observação inimiga. À noite, patrulhas procuravam reconhecer as posições adversárias, reparar obstáculos e transportar suprimentos.

O trabalho nas trincheiras não se limitava ao combate.

Era necessário retirar água, reforçar paredes, limpar abrigos, transportar munição e organizar os sistemas de comunicação.

A terra, antes considerada apenas o terreno da batalha, tornou-se uma estrutura de sobrevivência.

---

### CRÔNICA 3 — A SEGUNDA BATALHA DE YPRES: O GÁS SOBRE A FRENTE OCIDENTAL

Em abril de 1915, os soldados aliados posicionados na região de Ypres enfrentaram uma experiência aterrorizante.

No dia 22 de abril, as forças alemãs lançaram uma grande quantidade de cloro contra posições francesas e coloniais.

O gás foi liberado em direção às linhas adversárias, formando uma nuvem que avançou sobre os soldados.

Muitos combatentes não compreendiam inicialmente o que estava acontecendo.

A exposição ao cloro provocava graves lesões no sistema respiratório. Os soldados atingidos apresentavam tosse, dificuldades para respirar e outros sintomas decorrentes da intoxicação.

A utilização do gás abriu uma nova dimensão na guerra industrial.

A violência do conflito já havia alcançado níveis extremos por meio da artilharia, das metralhadoras e dos explosivos. Agora, os combatentes também precisavam enfrentar substâncias químicas capazes de transformar o próprio ar em ameaça.

Entretanto, a introdução de armas químicas não ocorreu sem controvérsias.

O uso de substâncias irritantes e lacrimogêneas já havia ocorrido anteriormente, mas o ataque alemão de 22 de abril representou o primeiro emprego em larga escala de cloro como arma química letal na Frente Ocidental.

Nos meses seguintes, os dois lados desenvolveram seus próprios meios de guerra química.

Máscaras e equipamentos de proteção passaram a integrar a rotina militar.

A guerra havia ampliado novamente seus limites tecnológicos e humanos.

Ypres tornou-se um dos símbolos da utilização de armas químicas durante a Primeira Guerra Mundial.

---

### CRÔNICA 4 — VERDUN, 1916: UMA BATALHA CONTRA O ESGOTAMENTO

Em fevereiro de 1916, a região de Verdun tornou-se palco de uma das maiores batalhas da história militar francesa.

A ofensiva alemã começou com uma preparação de artilharia extremamente intensa.

As explosões atingiram posições defensivas, destruíram abrigos e transformaram partes do terreno em crateras.

As tropas francesas enfrentaram uma situação de enorme pressão.

Verdun possuía importância militar e simbólica. Sua defesa estava associada à capacidade francesa de resistir à ofensiva alemã.

O sistema de abastecimento francês desempenhou papel fundamental na sustentação da batalha.

A estrada de Bar-le-Duc a Verdun, conhecida posteriormente como Voie Sacrée, tornou-se uma importante rota de transporte de soldados, munições e suprimentos.

Caminhões e veículos militares deslocavam-se continuamente, permitindo a manutenção da resistência francesa.

A batalha tornou-se progressivamente um símbolo nacional.

O lema francês associado à resistência de Verdun, frequentemente representado pela expressão *Ils ne passeront pas* — eles não passarão —, passou a simbolizar a determinação de impedir o avanço alemão.

Entretanto, a resistência francesa teve um custo enorme.

As tropas enfrentaram bombardeios contínuos, perdas humanas, dificuldades de abastecimento e desgaste psicológico.

Os alemães também sofreram baixas elevadas.

Verdun não foi uma batalha em que apenas um exército pagou o preço da resistência. Ambos os lados comprometeram enormes recursos humanos e materiais.

Ao longo dos meses, a ofensiva alemã perdeu sua capacidade de alcançar os objetivos pretendidos.

No final de 1916, os franceses recuperaram importantes posições.

Verdun permaneceu na memória francesa como símbolo de resistência, sofrimento e sacrifício nacional.

---

### CRÔNICA 5 — 1º DE JULHO DE 1916: O PRIMEIRO DIA DO SOMME

Na manhã de 1º de julho de 1916, tropas britânicas avançaram contra as posições alemãs na região do rio Somme.

Durante vários dias, a artilharia aliada havia bombardeado as linhas defensivas alemãs.

Os comandantes esperavam que a preparação destruísse os obstáculos, neutralizasse as metralhadoras e permitisse que a infantaria atravessasse as posições adversárias.

Entretanto, muitas defesas alemãs sobreviveram ao bombardeio.

Quando os soldados britânicos deixaram suas trincheiras, encontraram uma resistência muito maior do que a esperada.

As metralhadoras alemãs abriram fogo contra as tropas que atravessavam o terreno exposto.

O primeiro dia da batalha tornou-se uma das maiores tragédias da história militar britânica.

As forças britânicas sofreram aproximadamente 57 mil baixas nesse único dia, incluindo cerca de 19 mil mortos.

A escala da tragédia marcou profundamente a sociedade britânica.

Famílias receberam notícias de filhos, irmãos e maridos mortos ou desaparecidos. Comunidades inteiras perderam parcelas significativas de seus homens em uma única operação.

A ofensiva continuou durante meses.

Os Aliados conquistaram algumas posições, mas não conseguiram produzir a ruptura decisiva inicialmente esperada.

O Somme demonstrou os limites dos métodos ofensivos utilizados naquele momento da guerra.

Também revelou a capacidade dos exércitos de aprender com experiências extremamente custosas.

A batalha não foi apenas uma sequência de ataques e perdas. Foi um momento importante no desenvolvimento das táticas militares que seriam aperfeiçoadas nos anos seguintes.

---

### CRÔNICA 6 — O COTIDIANO NAS TRINCHEIRAS: ENTRE A ESPERA E O BOMBARDEIO

A imagem mais conhecida da guerra de trincheiras é a do soldado enfrentando o inimigo em meio à lama e às explosões.

Entretanto, grande parte da experiência dos combatentes era marcada pela espera.

Os soldados podiam passar longos períodos sem participar de grandes ofensivas, mas isso não significava ausência de perigo.

A artilharia podia atingir as posições a qualquer momento.

Um bombardeio inesperado era capaz de destruir abrigos, interromper comunicações e provocar numerosas baixas.

A rotina dependia da organização das unidades e da situação militar de cada setor.

Os homens precisavam limpar as posições, transportar alimentos, reparar estruturas, observar o inimigo e realizar patrulhas.

A umidade representava um problema constante.

Em determinados setores, a água acumulada dificultava a circulação e contribuía para o desenvolvimento de doenças.

Ratos e piolhos eram comuns.

A alimentação nem sempre chegava em boas condições, e a dificuldade de manter a higiene agravava a situação.

O cheiro da guerra também fazia parte da experiência dos combatentes: fumaça, pólvora, lama, animais mortos e corpos em decomposição.

A morte não estava restrita ao momento das ofensivas.

Um soldado podia ser atingido durante o transporte de suprimentos, enquanto observava o inimigo ou mesmo dentro de um abrigo aparentemente protegido.

A trincheira era simultaneamente um espaço de defesa, trabalho, convivência e vulnerabilidade.

---

### CRÔNICA 7 — PASSCHENDAELE, 1917: A BATALHA CONTRA O TERRENO

Em 1917, a região de Ypres voltou a ser palco de uma grande ofensiva.

A Terceira Batalha de Ypres, frequentemente conhecida como Passchendaele, começou em julho e prolongou-se até novembro.

O objetivo britânico era pressionar as posições alemãs na região e alcançar objetivos operacionais importantes, incluindo a área de Passchendaele.

Entretanto, as condições do terreno tornaram a operação extremamente difícil.

Os bombardeios destruíram sistemas de drenagem, danificaram estradas e transformaram campos em áreas de lama profunda.

As crateras produzidas pelas explosões acumulavam água, enquanto os deslocamentos de soldados e equipamentos se tornavam cada vez mais complicados.

Tanques, artilharia e veículos enfrentavam dificuldades para atravessar determinadas áreas.

A infantaria precisava avançar em condições extremamente adversas.

As tropas alemãs também estavam submetidas a condições difíceis, mas o sistema defensivo permitia resistir em posições preparadas.

A batalha tornou-se um símbolo do sofrimento humano associado à guerra de trincheiras.

Entretanto, a interpretação histórica de Passchendaele não deve se limitar à lama.

A operação envolveu objetivos estratégicos, decisões de comando, condições meteorológicas, capacidade defensiva alemã e problemas logísticos.

O terreno contribuiu para o desastre, mas não explica sozinho o resultado da campanha.

---

### CRÔNICA 8 — 1917: O CANSAÇO DOS EXÉRCITOS E A CRISE DA GUERRA

Em 1917, a guerra havia produzido um desgaste profundo entre os combatentes e as sociedades europeias.

A França enfrentava uma crise militar após o fracasso da ofensiva de Nivelle.

Diversas unidades francesas passaram a recusar a participação em novas ofensivas consideradas inúteis.

Esses movimentos ficaram conhecidos como motins franceses.

Entretanto, os soldados não abandonaram universalmente suas posições nem se recusaram a defender o território francês.

Em grande parte, as manifestações expressavam a rejeição a novos ataques ofensivos sem perspectivas convincentes de sucesso.

O comando francês respondeu combinando medidas disciplinares com reformas nas condições de serviço, incluindo melhorias nas licenças e na organização das tropas.

Philippe Pétain assumiu papel central na reorganização do Exército francês.

Enquanto isso, a Rússia atravessava uma crise revolucionária.

A Revolução de Fevereiro derrubou a monarquia czarista, e a Revolução de Outubro levou os bolcheviques ao poder.

A continuidade da participação russa na guerra tornou-se cada vez mais difícil.

Em abril, os Estados Unidos declararam guerra à Alemanha.

A entrada norte-americana representou uma mudança importante no equilíbrio estratégico, embora a chegada em larga escala das tropas exigisse tempo.

O ano de 1917 revelou que a guerra não estava destruindo apenas os exércitos.

Estava pressionando os próprios fundamentos políticos e sociais dos Estados envolvidos.

---

### CRÔNICA 9 — MARÇO DE 1918: A ÚLTIMA GRANDE OFENSIVA ALEMÃ

Depois da retirada russa, a Alemanha conseguiu transferir importantes contingentes militares para a Frente Ocidental.

O comando alemão compreendeu que existia uma oportunidade temporária.

Os Estados Unidos estavam entrando progressivamente na guerra, mas ainda não haviam colocado todo o seu potencial militar em operação.

A Alemanha precisava vencer antes que essa vantagem se consolidasse.

Em 21 de março de 1918, começou a Operação Michael.

A ofensiva utilizou técnicas de infiltração e tropas de assalto para penetrar nas posições aliadas.

Em determinados setores, os alemães conseguiram avanços importantes.

As linhas britânicas foram pressionadas, e a situação militar tornou-se extremamente delicada.

Entretanto, o avanço alemão não produziu a destruição das forças adversárias.

Os soldados precisavam atravessar áreas devastadas, enquanto as estruturas logísticas enfrentavam dificuldades para acompanhar o ritmo das operações.

Além disso, as tropas alemãs estavam cada vez mais desgastadas.

As ofensivas seguintes também não conseguiram alcançar uma decisão definitiva.

A Alemanha havia demonstrado capacidade de romper posições defensivas, mas não possuía recursos suficientes para transformar esses avanços em vitória estratégica.

A oportunidade de decidir a guerra começava a desaparecer.

---

### CRÔNICA 10 — 8 DE AGOSTO DE 1918: AMIENS E A MUDANÇA DO RITMO DA GUERRA

Na manhã de 8 de agosto de 1918, os Aliados iniciaram uma ofensiva na região de Amiens.

A operação foi marcada pela preparação cuidadosa, pelo emprego de forças blindadas e pela coordenação entre diferentes sistemas de armas.

A infantaria avançou com apoio de tanques e artilharia.

A aviação participou das operações e contribuiu para dificultar a atuação das forças alemãs.

O ataque produziu resultados importantes.

As posições alemãs foram pressionadas, e o comando aliado conseguiu recuperar a iniciativa.

O impacto psicológico da ofensiva também foi significativo.

As forças alemãs enfrentavam uma situação cada vez mais difícil, e o avanço aliado demonstrava que o equilíbrio militar havia mudado.

O general alemão Erich Ludendorff posteriormente associou o dia 8 de agosto a uma crise particularmente grave para o Exército alemão.

A partir de Amiens, os Aliados iniciaram uma sequência de operações que ficou conhecida como Ofensiva dos Cem Dias.

A guerra não terminou imediatamente.

Os combates continuaram em diferentes setores, mas a Alemanha passou a enfrentar uma pressão militar crescente.

A experiência de Amiens demonstrou a importância da coordenação operacional e da superioridade material.

A guerra de posições estava sendo superada por operações ofensivas mais eficientes.

---

### CRÔNICA 11 — NOVEMBRO DE 1918: O FIM DOS COMBATES NA FRENTE OCIDENTAL

Durante o segundo semestre de 1918, as forças aliadas avançaram progressivamente contra as posições alemãs.

A Alemanha enfrentava problemas militares, econômicos e políticos cada vez mais graves.

As Potências Centrais começaram a abandonar a guerra.

A Bulgária assinou o armistício em setembro. O Império Otomano deixou o conflito em outubro. A Áustria-Hungria entrou em colapso político e militar.

Na Alemanha, a situação interna tornou-se insustentável.

A escassez de alimentos, o desgaste econômico, as perdas militares e a crise política contribuíram para a Revolução Alemã.

Em novembro, Guilherme II abdicou.

O governo alemão passou a negociar o encerramento das hostilidades.

Na manhã de 11 de novembro de 1918, foi assinado o armistício de Compiègne.

Às 11 horas, os combates foram interrompidos na Frente Ocidental.

Depois de mais de quatro anos de guerra, os canhões silenciaram.

Entretanto, o fim dos combates não significava que todas as questões políticas e territoriais haviam sido resolvidas.

O armistício encerrou as hostilidades, mas a organização da paz ainda seria discutida nas negociações que culminariam no Tratado de Versalhes, em 1919.

A Primeira Guerra Mundial havia terminado militarmente na Frente Ocidental, mas suas consequências continuariam a marcar a Europa durante décadas.

---

### CRÔNICA 12 — A MEMÓRIA DA LAMA: O QUE RESTOU DA GUERRA DE TRINCHEIRAS?

Quando os combates terminaram, a Frente Ocidental permaneceu profundamente marcada pela destruição.

Regiões inteiras da França e da Bélgica haviam sido devastadas.

Campos agrícolas estavam cobertos por crateras, construções destruídas e restos de equipamentos militares.

O solo continha munições não detonadas, fragmentos de artilharia e outros vestígios da guerra.

Muitas comunidades precisaram reconstruir suas cidades e recuperar suas atividades econômicas.

As famílias enfrentaram a ausência de milhões de homens mortos, feridos ou desaparecidos.

Os sobreviventes carregavam marcas físicas e psicológicas do conflito.

A memória da guerra foi construída por meio de monumentos, cemitérios, cerimônias públicas, livros, fotografias e testemunhos.

O soldado desconhecido tornou-se uma representação simbólica dos combatentes que morreram sem identificação ou cujos corpos não puderam ser recuperados.

Na França e no Reino Unido, os memoriais de guerra passaram a ocupar lugar central na vida pública.

A lembrança da Frente Ocidental não se limitava às vitórias ou derrotas militares.

Ela expressava a dimensão humana de uma guerra que havia transformado profundamente as sociedades europeias.

A lama das trincheiras tornou-se uma imagem histórica de sofrimento, resistência e destruição.

A guerra havia terminado, mas sua memória continuaria presente nas gerações seguintes.

---

## ENCERRAMENTO DAS CRÔNICAS

A Frente Ocidental entre 1914 e 1918 foi marcada por uma transformação radical da experiência militar.

As trincheiras representaram a resposta dos exércitos a uma guerra industrial cuja capacidade destrutiva ultrapassava, em muitos momentos, a capacidade de coordenação das ofensivas.

Verdun, Somme, Ypres, Passchendaele e Amiens foram mais do que batalhas isoladas: constituíram episódios de um processo histórico de adaptação militar, desgaste econômico e sofrimento humano.

A guerra de trincheiras não pode ser compreendida apenas por meio das decisões dos generais ou da evolução dos armamentos. É necessário considerar também a experiência dos soldados, as condições de sobrevivência, a transformação das sociedades e a memória construída depois do conflito.

A Frente Ocidental deixou uma herança militar, política e cultural que ultrapassou os limites de 1918.

**A guerra terminou, mas o mundo que havia produzido as trincheiras jamais seria exatamente o mesmo.**`;

function parseChronicles203(raw: string): ParsedChronicles203 {
  const blocks = raw
    .replace(/\r\n/g, '\n')
    .trim()
    .split(/\n---\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  const firstLines = (blocks[0] || '').split('\n');
  let mainTitle = 'CRÔNICAS HISTÓRICAS';
  let subtitle = '';
  let bodyStartIdx = 0;

  for (let i = 0; i < firstLines.length; i++) {
    const t = firstLines[i].trim();
    if (t.startsWith('# ')) {
      mainTitle = t.slice(2).trim();
    } else if (t.startsWith('## ')) {
      subtitle = t.slice(3).trim();
    } else if (t.startsWith('### ')) {
      bodyStartIdx = i;
      break;
    }
  }

  const chronicles: ChronicleItem[] = [];

  const parseChronicleBlock = (textBlock: string) => {
    const lines = textBlock.split('\n');
    const headingLine = lines.find((l) => l.trim().startsWith('### ')) || '';
    const heading = headingLine.trim().slice(4).trim();
    const m = heading.match(/^CRÔNICA\s+(\d+)/);
    const num = m ? m[1] : String(chronicles.length + 1);
    const bodyText = lines
      .slice(lines.indexOf(headingLine) + 1)
      .join('\n')
      .trim();
    const paragraphs = bodyText
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean);

    chronicles.push({
      id: `cronica-${num}`,
      heading,
      paragraphs,
    });
  };

  parseChronicleBlock(firstLines.slice(bodyStartIdx).join('\n'));
  for (let i = 1; i < blocks.length - 1; i++) {
    parseChronicleBlock(blocks[i]);
  }

  const closingLines = (blocks[blocks.length - 1] || '').split('\n');
  const closingHeadingLine = closingLines.find((l) => l.trim().startsWith('## ')) || '';
  const closingHeading = closingHeadingLine.trim().slice(3).trim() || 'ENCERRAMENTO DAS CRÔNICAS';
  const closingBody = closingLines
    .slice(closingLines.indexOf(closingHeadingLine) + 1)
    .join('\n')
    .trim();
  const closingParagraphs = closingBody
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return {
    mainTitle,
    subtitle,
    chronicles,
    closingHeading,
    closingParagraphs,
  };
}

function renderInlineMarkdown(text: string): React.ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return tokens.map((token, idx) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={idx} className="text-stone-100 font-semibold">
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith('*') && token.endsWith('*')) {
      return (
        <em key={idx} className="italic text-amber-200/90">
          {token.slice(1, -1)}
        </em>
      );
    }
    return <React.Fragment key={idx}>{token}</React.Fragment>;
  });
}

export const Topic203ChroniclesView: React.FC<Topic203ChroniclesViewProps> = ({
  getFontSizeClass,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const parsed = useMemo(() => parseChronicles203(RAW_CHRONICLES_203), []);

  const handleCopy = () => {
    navigator.clipboard.writeText(RAW_CHRONICLES_203);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-800 pb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                COLEÇÃO III — HISTÓRIA DAS GUERRAS MUNDIAIS
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                MONOGRAFIA Nº 03
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                ABA 3 — CRÔNICAS
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              {parsed.mainTitle}
            </h1>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              {parsed.subtitle}
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar texto integral da Aba 3 Crônicas"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Texto Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Aba Crônicas na Íntegra</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* CRÔNICAS 1 A 12 */}
      <div className="space-y-6">
        {parsed.chronicles.map((chronicle) => (
          <article
            key={chronicle.id}
            id={chronicle.id}
            className="scroll-mt-24 bg-[#161619] border border-stone-800 p-5 sm:p-7 rounded-xl shadow-md space-y-5"
          >
            <div className="border-b border-stone-800 pb-3">
              <div className="flex items-start gap-2.5">
                <ScrollText className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <h2
                  className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}
                >
                  {chronicle.heading}
                </h2>
              </div>
            </div>

            <div
              className={`font-serif text-stone-300 text-justify leading-relaxed space-y-4 ${getFontSizeClass('body')}`}
            >
              {chronicle.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{renderInlineMarkdown(paragraph)}</p>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* ENCERRAMENTO DAS CRÔNICAS */}
      <section
        id="cronica-nota"
        className="scroll-mt-24 bg-[#161619] border border-amber-600/40 p-5 sm:p-7 rounded-xl shadow-md space-y-4"
      >
        <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <h2
            className={`font-serif font-bold text-amber-300 uppercase tracking-wide ${getFontSizeClass('heading')}`}
          >
            {parsed.closingHeading}
          </h2>
        </div>
        <div
          className={`space-y-4 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}
        >
          {parsed.closingParagraphs.map((paragraph, idx) => (
            <p key={idx}>{renderInlineMarkdown(paragraph)}</p>
          ))}
        </div>
      </section>
    </div>
  );
};
