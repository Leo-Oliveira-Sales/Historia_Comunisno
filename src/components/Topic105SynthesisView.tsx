import React from 'react';
import { 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  Scale, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Users 
} from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

export const Topic105SynthesisView: React.FC<Props> = ({ getFontSizeClass }) => {
  const periodos = [
    {
      num: 'I',
      title: 'A RUPTURA COM O IDEALISMO E A CRÍTICA DA ALIENAÇÃO (1843–1844)',
      caracteristicas: [
        'Crítica à Filosofia do Direito de Hegel e superação do idealismo estatal.',
        'Redação dos Manuscritos Econômico-Filosóficos de Paris (1844).',
        'Formulação inaugural do conceito ontológico e social de alienação do trabalho.',
        'Análise da separação do trabalhador em relação ao produto, ao processo e ao ser genérico.',
        'Transição do democratismo radical juvenil para o comunismo crítico.'
      ],
      autores: ['Karl Marx', 'Friedrich Engels', 'G. W. F. Hegel (crítica)', 'Ludwig Feuerbach (diálogo)'],
      acontecimentoDecisivo: 'Encontro definitivo e início da colaboração intelectual indissolúvel entre Marx e Engels em Paris (agosto de 1844).',
      ideiaCentral: 'O trabalho humano sob o regime da propriedade privada não realiza a essência criativa do homem, mas converte-se em mercadoria que escraviza e estranha o trabalhador diante de sua própria obra.'
    },
    {
      num: 'II',
      title: 'A FUNDAÇÃO DO MATERIALISMO HISTÓRICO (1845–1847)',
      caracteristicas: [
        'Redação das 11 Teses sobre Feuerbach e superação do materialismo contemplativo.',
        'Elaboração d\'A Ideologia Alemã e formulação do materialismo histórico.',
        'Crítica à autonomia ilusória da consciência, das ideias e da religião.',
        'Combate ao socialismo mutualista de Pierre-Joseph Proudhon em Miséria da Filosofia.',
        'Constituição dos homens reais e da produção material como base da história.'
      ],
      autores: ['Karl Marx', 'Friedrich Engels', 'Max Stirner (crítica)', 'Pierre-Joseph Proudhon (crítica)'],
      acontecimentoDecisivo: 'A redação das Teses sobre Feuerbach (1845), consagrando a tese da práxis como critério de verdade e transformação social.',
      ideiaCentral: 'Não é a consciência dos homens que determina o seu ser social, mas, inversamente, o seu ser social e as condições de produção material que determinam a sua consciência.'
    },
    {
      num: 'III',
      title: 'O MANIFESTO COMUNISTA E AS REVOLUÇÕES DE 1848 (1847–1852)',
      caracteristicas: [
        'Transformação da Liga dos Justos em Liga dos Comunistas.',
        'Publicação do Manifesto do Partido Comunista às vésperas de 1848.',
        'Análise dialética do papel revolucionário e civilizatório da burguesia.',
        'Definição da luta de classes como o grande motor das transformações históricas.',
        'Balanço crítico da Primavera dos Povos em As Lutas de Classes na França e O 18 de Brumário.'
      ],
      autores: ['Karl Marx', 'Friedrich Engels', 'Luís Bonaparte / Napoleão III (análise do cesarismo)'],
      acontecimentoDecisivo: 'A eclosão simultânea das insurreições da Primavera dos Povos na Europa e a repressão violenta às Jornadas de Junho em Paris.',
      ideiaCentral: 'A história de todas as sociedades existentes até hoje tem sido a história das lutas de classes; ao desenvolver a grande indústria, a burguesia forja os seus próprios coveiros: o proletariado moderno.'
    },
    {
      num: 'IV',
      title: 'A CRÍTICA DA ECONOMIA POLÍTICA E O CAPITAL (1850–1867)',
      caracteristicas: [
        'Exílio permanente em Londres e pesquisa exaustiva no Museu Britânico.',
        'Redação dos Grundrisse (1857–1858) e da Contribuição à Crítica da Economia Política (1859).',
        'Publicação do Livro I d\'O Capital (1867) em Hamburgo.',
        'Descoberta do duplo caráter do trabalho contido na mercadoria (trabalho concreto e abstrato).',
        'Teoria da mais-valia absoluta e relativa e dissecação do fetichismo da mercadoria.'
      ],
      autores: ['Karl Marx', 'Adam Smith (crítica)', 'David Ricardo (crítica)'],
      acontecimentoDecisivo: 'A publicação do primeiro volume de O Capital em 1867, decifrando as leis internas de movimento e contradição do modo de produção capitalista.',
      ideiaCentral: 'A riqueza no capitalismo não é apenas abundância material, mas uma imensa acumulação de mercadorias fetichizadas, cuja valorização assenta na extração sistemática de mais-valia não paga.'
    },
    {
      num: 'V',
      title: 'INTERNACIONALISMO, A COMUNA DE PARIS E O LEGADO HISTÓRICO (1864–1883/1894)',
      caracteristicas: [
        'Fundação da Associação Internacional dos Trabalhadores (Primeira Internacional / AIT).',
        'Debates com as frações reformistas (Trade Unions inglesas) e anarquistas (Mikhail Bakunin).',
        'Exame da Comuna de Paris de 1871 em A Guerra Civil na França.',
        'Redação da Crítica do Programa de Gotha (1875) e distinção entre socialismo e comunismo.',
        'Sistematização do marxismo por Engels e publicação póstuma dos Livros II e III d\'O Capital.'
      ],
      autores: ['Karl Marx', 'Friedrich Engels', 'Mikhail Bakunin (conflito teórico)', 'August Bebel', 'Wilhelm Liebknecht'],
      acontecimentoDecisivo: 'A insurreição da Comuna de Paris (1871) como primeira manifestação prática de autogoverno dos trabalhadores e quebra do aparato estatal tradicional.',
      ideiaCentral: 'A classe operária não pode limitar-se a apossar-se da máquina do Estado burguês tal como ela existe para pô-la em movimento; a emancipação dos trabalhadores deve ser obra dos próprios trabalhadores.'
    }
  ];

  const linhaDoTempo = [
    { year: '1818', event: 'Nascimento de Karl Marx em Trier, na Renânia prussiana (5 de maio).' },
    { year: '1820', event: 'Nascimento de Friedrich Engels em Barmen (28 de novembro).' },
    { year: '1841', event: 'Marx conclui sua tese doutoral sobre a filosofia da natureza em Demócrito e Epicuro.' },
    { year: '1843', event: 'Marx redige a Crítica da Filosofia do Direito de Hegel e emigra para Paris.' },
    { year: '1844', event: 'Redação dos Manuscritos Econômico-Filosóficos de Paris; início da amizade e parceria indissolúvel com Engels.' },
    { year: '1845', event: 'Marx formula as 11 Teses sobre Feuerbach; Engels publica A Situação da Classe Trabalhadora na Inglaterra.' },
    { year: '1845–1846', event: 'Redação conjunta de A Ideologia Alemã, assentando a teoria materialista da história e da ideologia.' },
    { year: '1847', event: 'Marx publica Miséria da Filosofia, refutando o sistema econômico e anarquista de Pierre-Joseph Proudhon.' },
    { year: '1848', event: 'Publicação do Manifesto do Partido Comunista em Londres; eclosão das insurreições da Primavera dos Povos.' },
    { year: '1849', event: 'Expulso da Prússia e de Paris, Marx estabelece exílio definitivo com sua família em Londres.' },
    { year: '1850–1852', event: 'Publicação de As Lutas de Classes na França e O 18 de Brumário de Luís Bonaparte.' },
    { year: '1857–1858', event: 'Elaboração dos Grundrisse (Esboços da Crítica da Economia Política), preparando sua obra máxima.' },
    { year: '1859', event: 'Publicação de Para a Crítica da Economia Política, com o célebre Prefácio sobre infraestrutura e superestrutura.' },
    { year: '1864', event: 'Fundação da Associação Internacional dos Trabalhadores (AIT / Primeira Internacional) em Londres.' },
    { year: '1867', event: 'Publicação em Hamburgo do Livro I de O Capital: O Processo de Produção do Capital.' },
    { year: '1871', event: 'Insurreição da Comuna de Paris; Marx redige a mensagem do Conselho Geral da AIT (A Guerra Civil na França).' },
    { year: '1872', event: 'Congresso de Haia da Primeira Internacional e cisão definitiva entre marxistas e anarquistas bakuninistas.' },
    { year: '1875', event: 'Marx escreve as Glosas Marginais ao programa do Partido Operário Alemão (Crítica do Programa de Gotha).' },
    { year: '1878', event: 'Engels publica o Anti-Dühring, sistematizando as bases do materialismo dialético e da concepção socialista.' },
    { year: '1883', event: 'Morte de Karl Marx em Londres (14 de março); funeral histórico no Cemitério de Highgate.' },
    { year: '1885', event: 'Engels edita e publica o Livro II de O Capital (O Processo de Circulação do Capital).' },
    { year: '1894', event: 'Engels conclui e publica o Livro III de O Capital (O Processo Global da Produção Capitalista).' }
  ];

  const conceitos = [
    {
      term: 'Materialismo Histórico',
      desc: 'Método científico-dialético que compreende a evolução das sociedades humanas a partir da produção e reprodução da vida material, identificando nas relações econômicas a base concreta sobre a qual se erguem as instituições jurídicas, políticas e ideológicas.'
    },
    {
      term: 'Materialismo Dialético',
      desc: 'Concepção filosófica sistematizada especialmente por Engels, que apreende a totalidade da natureza, do pensamento e da sociedade como matéria em constante automovimento, transformação e devir histórico mediante contradições internas.'
    },
    {
      term: 'Forças Produtivas',
      desc: 'Combinação dinâmica entre a capacidade produtiva da força de trabalho humana viva (conhecimento, técnica, experiência) e os meios materiais de produção (instrumentos de trabalho, tecnologias, instalações, matérias-primas e terra).'
    },
    {
      term: 'Relações de Produção',
      desc: 'Relações sociais necessárias e involuntárias estabelecidas entre os seres humanos no processo de produção, distribuição e apropriação dos bens materiais, determinadas historicamente pelo regime de propriedade dos meios de produção.'
    },
    {
      term: 'Modo de Produção',
      desc: 'Unidade estrutural entre determinado grau de desenvolvimento das forças produtivas e as correspondentes relações sociais de produção, caracterizando épocas históricas distintas (asiático, antigo/escravista, feudal, burguês/capitalista).'
    },
    {
      term: 'Infraestrutura e Superestrutura',
      desc: 'Modelo analítico no qual a estrutura econômica (infraestrutura) condiciona em última instância o edifício institucional (superestrutura jurídica e política) e as correspondentes formas de consciência social (filosofia, religião, arte e ideologia).'
    },
    {
      term: 'Alienação (Entfremdung)',
      desc: 'Condição ontológica e social em que o trabalhador é despojado do produto do seu trabalho, perde o domínio sobre a sua atividade produtiva, confronta-se como inimigo diante de outros homens e degrada sua condição genérica humana em mera mercadoria.'
    },
    {
      term: 'Fetichismo da Mercadoria',
      desc: 'Ilusão objetiva gerada pelo mercado na qual o caráter social do trabalho humano individual aparece disfarçado como propriedade física natural dos próprios objetos, fazendo com que relações sociais entre produtores apareçam como relações fantasmagóricas entre coisas.'
    },
    {
      term: 'Mais-Valia (Mehrwert)',
      desc: 'Excedente de valor gerado pelo trabalho vivo assalariado durante a jornada de produção para além do valor correspondente ao seu salário (tempo de trabalho necessário), sendo apropriado privadamente pelo capitalista sem contraprestação equivalente.'
    },
    {
      term: 'Mais-Valia Absoluta e Relativa',
      desc: 'A mais-valia absoluta é extraída pelo prolongamento temporal da jornada de trabalho ou pela intensificação do ritmo; a mais-valia relativa é obtida pelo avanço tecnológico e ganhos de produtividade que barateiam os meios de subsistência e encurtam o tempo de trabalho necessário.'
    },
    {
      term: 'Luta de Classes',
      desc: 'O antagonismo material irreconciliável entre classes sociais com posições opostas na estrutura de propriedade dos meios de produção (livre e escravo, patrício e plebeu, senhor feudal e servo, burguês e proletário), motor de todas as transformações revolucionárias.'
    },
    {
      term: 'Ideologia',
      desc: 'Formação discursiva e simbólica da classe dominante que projeta uma imagem invertida e falsificada da realidade material, universalizando e naturalizando os seus interesses corporativos de classe como se fossem o bem comum de toda a sociedade.'
    },
    {
      term: 'Ditadura do Proletariado',
      desc: 'Período transitório de poder político concentrado nas mãos dos trabalhadores armados e organizados (auto-administração municipal e conselhista, como na Comuna de Paris), destinado a desmantelar a máquina do Estado burguês rumo à sociedade sem classes.'
    },
    {
      term: 'Práxis Revolucionária',
      desc: 'A unidade indissociável entre o conhecimento teórico rigoroso e a ação prática transformadora da realidade, expressa na 11ª Tese sobre Feuerbach: não apenas interpretar criticamente o mundo, mas agir materialmente para transformá-lo.'
    }
  ];

  const rupturas = [
    {
      corrente: 'Idealismo Hegeliano',
      premissa: 'A Razão e a Ideia Absoluta governam a história; as instituições materiais são a manifestação terrena do Espírito.',
      criticaMarxista: 'Colocou a dialética "de cabeça para baixo"; é preciso assentar a dialética sobre bases materiais e terrenas.'
    },
    {
      corrente: 'Materialismo de Feuerbach',
      premissa: 'A religião é a projeção alienada da essência humana universal; o homem é produto das suas circunstâncias.',
      criticaMarxista: 'Materialismo contemplativo e abstrato; ignora a atividade prático-crítica (práxis) e as relações históricas reais.'
    },
    {
      corrente: 'Economia Política Clássica (Smith & Ricardo)',
      premissa: 'Descobriram a teoria do valor-trabalho, mas naturalizaram a propriedade privada e o capital como leis eternas.',
      criticaMarxista: 'Tratou categorias históricas e transitórias como se fossem eternas leis da natureza humana.'
    },
    {
      corrente: 'Socialismo Utópico (Saint-Simon, Fourier, Owen)',
      premissa: 'Condenavam moralmente os horrores da indústria e propunham falanstérios e cooperativas através do convencimento benevolente.',
      criticaMarxista: 'Faltava-lhes base científica e o entendimento do papel histórico revolucionário do proletariado organizado na luta de classes.'
    },
    {
      corrente: 'Anarquismo e Socialismo Pequeno-Burguês (Proudhon & Bakunin)',
      premissa: 'Defesa do crédito gratuito, do mutualismo e abolição imediata e voluntarista do Estado por decreto insurrecional.',
      criticaMarxista: 'Desconhecimento das leis do valor e do capital; romantismo pequeno-burguês que rejeita a organização política operária.'
    }
  ];

  const questoes = [
    'Qual a diferença epistemológica fundamental entre o idealismo dialético de Hegel e o materialismo histórico de Marx?',
    'Em que consiste a crítica de Marx a Feuerbach formulada nas célebres Teses de 1845?',
    'Quais são as quatro principais dimensões da alienação do trabalho identificadas nos Manuscritos de Paris (1844)?',
    'Por que Marx e Engels consideram a burguesia como uma classe eminentemente revolucionária no Manifesto Comunista?',
    'Como se articulam as forças produtivas e as relações de produção no Prefácio de 1859 para desencadear épocas de revolução social?',
    'Qual o significado rigoroso do conceito de fetichismo da mercadoria no Livro I de O Capital?',
    'Qual a distinção analítica entre trabalho e força de trabalho, e por que ela é indispensável para explicar a mais-valia?',
    'Qual a diferença teórica entre mais-valia absoluta e mais-valia relativa no desenvolvimento das forças produtivas capitalistas?',
    'Como a experiência histórica da Comuna de Paris (1871) modificou a concepção de Marx sobre a maquinaria do Estado burguês?',
    'Por que o marxismo de Marx não pode ser reduzido a um determinismo econômico mecanicista, segundo os esclarecimentos posteriores de Engels?'
  ];

  return (
    <div className="bg-[#161619] border border-stone-800 p-6 sm:p-9 rounded-xl space-y-9 shadow-xl max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="border-b border-stone-800 pb-6 space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold inline-block">
          COLEÇÃO II — HISTÓRIA DAS IDEOLOGIAS POLÍTICAS
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
          SÍNTESE HISTÓRICA E TEÓRICA Nº 05
        </h2>
        <p className="font-serif italic text-amber-400 text-base sm:text-lg">
          MARX E ENGELS: A FORMAÇÃO DO MATERIALISMO HISTÓRICO E DA CRÍTICA DA ECONOMIA POLÍTICA (1843–1883)
        </p>
      </div>

      {/* 1. OBJETIVO GERAL */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          1. Objetivo Geral do Capítulo
        </h3>
        <div className="bg-[#121214] p-5 sm:p-6 rounded-xl border border-stone-800 space-y-3">
          <p className={`font-serif text-stone-200 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
            Analisar a gênese, o amadurecimento conceitual e a consolidação do <strong>materialismo histórico</strong> e da <strong>crítica da economia política</strong> formulados por Karl Marx e Friedrich Engels ao longo do século XIX (1843–1883).
          </p>
          <p className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
            O estudo examina como a crítica radical da filosofia idealista alemã (Hegel) e do materialismo contemplativo (Feuerbach) conduziu à descoberta das leis materiais de reprodução da sociedade humana, à teorização da alienação nos <em>Manuscritos de 1844</em>, à fundação da concepção materialista da história n'<em>A Ideologia Alemã</em> e no <em>Manifesto Comunista de 1848</em>, e à dissecação anatômica do capital em <em>O Capital</em> (1867), desvelando os mecanismos objetivos do fetichismo, da exploração do trabalho pela mais-valia e da luta de classes como eixo das transformações revolucionárias.
          </p>
        </div>
      </section>

      {/* 2. OS CINCO GRANDES MOMENTOS DA TRAJETÓRIA INTELECTUAL */}
      <section className="space-y-6">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" />
          2. Os Cinco Grandes Momentos da Trajetória Intelectual (1843–1883)
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

              <div className="space-y-3.5 font-serif text-xs sm:text-sm">
                <div>
                  <strong className="text-amber-400 font-mono text-xs uppercase tracking-wider block mb-1.5">
                    Características e Descobertas Teóricas:
                  </strong>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-200">
                    {p.caracteristicas.map((c, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 bg-stone-900/60 p-2.5 rounded border border-stone-800/80">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-stone-800/60 flex items-center gap-2 flex-wrap">
                  <strong className="text-stone-300 font-mono text-xs uppercase tracking-wider">
                    Autores em Diálogo e Confronto Crítico:
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

      {/* 3. AS DUAS GRANDES ARQUITETURAS CONCEITUAIS (ESQUEMAS SISTÊMICOS) */}
      <section className="space-y-6">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-amber-400" />
          3. Arquitetura Analítica do Materialismo Histórico e d'O Capital
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Esquema 1: A Estrutura Social e as Revoluções */}
          <div className="bg-[#121214] p-5 rounded-xl border border-stone-800 space-y-3">
            <h4 className="font-serif font-bold text-amber-300 text-base border-b border-stone-800 pb-2">
              A. Concepção Materialista da Sociedade
            </h4>
            <div className="space-y-1.5 font-mono text-xs text-stone-300 text-center">
              <div className="p-2.5 bg-stone-900 rounded border border-stone-800 font-semibold text-stone-100">
                Condições Materiais da Vida Real
              </div>
              <div className="text-amber-400 font-bold">↓</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
                Forças Produtivas (Técnica, Ferramentas, Trabalho Humano)
              </div>
              <div className="text-amber-400 font-bold">⇅ (Conflito de Classes)</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
                Relações de Produção (Propriedade dos Meios de Produção)
              </div>
              <div className="text-amber-400 font-bold">↓</div>
              <div className="p-2.5 bg-amber-950/40 rounded border border-amber-700/50 font-bold text-amber-300">
                BASE ECONÔMICA (INFRAESTRUTURA)
              </div>
              <div className="text-amber-400 font-bold">↓ condiciona</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
                Superestrutura Jurídico-Política (Estado, Leis, Tribunais)
              </div>
              <div className="text-amber-400 font-bold">↓ e determina</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
                Formas de Consciência Social (Ideologia, Moral, Filosofia, Religião)
              </div>
            </div>
            <p className="font-serif text-[11px] text-stone-400 italic pt-2 text-justify">
              * Nota epistemológica de Engels: A determinação econômica dá-se "em última instância", existindo uma complexa ação recíproca dos fatores jurídicos, políticos e ideológicos.
            </p>
          </div>

          {/* Esquema 2: O Ciclo de Acumulação Capitalista */}
          <div className="bg-[#121214] p-5 rounded-xl border border-stone-800 space-y-3">
            <h4 className="font-serif font-bold text-amber-300 text-base border-b border-stone-800 pb-2">
              B. O Ciclo do Capital e a Mais-Valia (D — M — D')
            </h4>
            <div className="space-y-1.5 font-mono text-xs text-stone-300 text-center">
              <div className="p-2.5 bg-stone-900 rounded border border-stone-800 font-semibold text-stone-100">
                D (Capital-Dinheiro Adiantado)
              </div>
              <div className="text-amber-400 font-bold">↓ compra no mercado</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
                M (Mercadorias: Meios de Produção + Força de Trabalho Viva)
              </div>
              <div className="text-amber-400 font-bold">↓ processo de trabalho</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
                P (Produção: Consumo da Força de Trabalho Vivo)
              </div>
              <div className="text-amber-400 font-bold">↓ gera excedente</div>
              <div className="p-2.5 bg-amber-950/40 rounded border border-amber-700/50 font-bold text-amber-300">
                M' (Mercadorias com Valor Agregado: c + v + m)
              </div>
              <div className="text-amber-400 font-bold">↓ realização na venda</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
                D' (Capital Ampliado com MAIS-VALIA Realizada: D + Δd)
              </div>
              <div className="text-amber-400 font-bold">↓ reinvestimento forçado</div>
              <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
                Acumulação de Capital & Reprodução Ampliada
              </div>
            </div>
            <p className="font-serif text-[11px] text-stone-400 italic pt-2 text-justify">
              * A mais-valia (m) provém unicamente do capital variável (v / força de trabalho humana), a única mercadoria capaz de criar valor superior ao seu próprio custo de reprodução.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LINHA DO TEMPO ESSENCIAL */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-amber-400" />
          4. Linha do Tempo Essencial (1818–1894)
        </h3>

        <div className="overflow-x-auto rounded-lg border border-stone-800">
          <table className="w-full text-left font-serif text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-stone-900 border-b border-stone-800 text-amber-300 font-mono text-xs">
                <th className="p-3 border-r border-stone-800 w-32 text-center">Ano / Período</th>
                <th className="p-3">Acontecimento Histórico e Marco Teórico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800 text-stone-200">
              {linhaDoTempo.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-[#121214]' : 'bg-[#161619]'}>
                  <td className="p-3 font-mono font-bold text-amber-300 border-r border-stone-800 text-center bg-amber-950/20 whitespace-nowrap">
                    {item.year}
                  </td>
                  <td className="p-3 text-stone-200">{item.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. CONCEITOS FUNDAMENTAIS */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          5. Conceitos Fundamentais da Teoria Marxiana
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {conceitos.map((c, idx) => (
            <div key={idx} className="bg-[#121214] p-4 sm:p-4.5 rounded-lg border border-stone-800 space-y-1.5">
              <strong className="text-amber-300 font-serif font-bold text-sm sm:text-base block">
                {c.term}
              </strong>
              <p className="font-serif text-stone-300 text-xs sm:text-sm leading-relaxed text-justify">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. QUADRO COMPARATIVO DAS GRANDES RUPTURAS EPISTEMOLÓGICAS */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-400" />
          6. As Grandes Rupturas Epistemológicas diante das Correntes Anteriores
        </h3>

        <div className="overflow-x-auto rounded-lg border border-stone-800">
          <table className="w-full text-left font-serif text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-stone-900 border-b border-stone-800 text-amber-300 font-mono text-xs">
                <th className="p-3 border-r border-stone-800 w-44">Tradição / Corrente</th>
                <th className="p-3 border-r border-stone-800">Premissa Central da Corrente</th>
                <th className="p-3">Crítica e Superação por Marx e Engels</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800 text-stone-200">
              {rupturas.map((r, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-[#121214]' : 'bg-[#161619]'}>
                  <td className="p-3 font-serif font-bold text-amber-300 border-r border-stone-800">
                    {r.corrente}
                  </td>
                  <td className="p-3 text-stone-300 border-r border-stone-800 text-xs sm:text-sm">
                    {r.premissa}
                  </td>
                  <td className="p-3 text-stone-200 text-xs sm:text-sm font-semibold">
                    {r.criticaMarxista}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. QUESTÕES FUNDAMENTAIS PARA REVISÃO */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" />
          7. Questões Fundamentais para Revisão Acadêmica
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

      {/* 8. CONCLUSÃO GERAL */}
      <section className="space-y-4">
        <h3 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3.5 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          8. Conclusão Geral e Ideia Central do Capítulo
        </h3>

        <div className="bg-[#121214] p-6 rounded-xl border border-stone-800 space-y-4 leading-relaxed font-serif text-stone-300 text-justify text-sm sm:text-base">
          <p>
            O pensamento de Karl Marx e Friedrich Engels representou uma revolução epistemológica na história das ciências humanas: ao deslocar a explicação dos fenômenos sociais do reino abstrato das ideias para o solo concreto das relações materiais de produção, o marxismo desfez a ilusão de que a sociedade moderna é governada por leis naturais eternas.
          </p>
          <p>
            O capitalismo revelou-se um modo de produção histórico, contraditório e transitório, estruturado sobre a contradição insolúvel entre o caráter cada vez mais social da produção e a apropriação privada do produto social pelo capital através da mais-valia.
          </p>
          <div className="bg-amber-950/30 border border-amber-600/50 p-4 rounded-lg text-amber-300 font-serif font-semibold text-center text-sm sm:text-base">
            <strong>Síntese central:</strong> A anatomia da sociedade civil deve ser buscada na economia política; o conhecimento das leis materiais do capitalismo não é um fim acadêmico contemplativo, mas a ferramenta teórica indispensável para a práxis revolucionária de emancipação da classe trabalhadora.
          </div>
        </div>
      </section>
    </div>
  );
};
