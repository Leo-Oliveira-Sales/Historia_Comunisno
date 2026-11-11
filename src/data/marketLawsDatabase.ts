export interface MarketLawsSection {
  number: string;
  title: string;
  content: string;
  subsections?: {
    number: string;
    title: string;
    content: string;
  }[];
}

export interface MarketLawsChapter {
  topicId: number;
  title: string;
  subtitle: string;
  authorCatedra: string;
  introduction: string;
  sections: MarketLawsSection[];
  conclusion: string;
  bibliographicReferences: string[];
  rawMarkdown?: string;
}

export const MARKET_LAWS_CHAPTERS: Record<number, MarketLawsChapter> = {
  103: {
    topicId: 103,
    title: 'CAPÍTULO IX — AS LEIS DE MERCADO SÃO ABSOLUTAS?',
    subtitle: 'Capitalismo, ordem espontânea, preços e os limites do controle econômico',
    authorCatedra: 'Cátedra de Teoria Econômica, Epistemologia dos Mercados e Filosofia Política',
    introduction: `A questão sobre a natureza das "leis de mercado" constitui um dos debates mais duradouros e apaixonados da história do pensamento econômico e da filosofia política. Desde que Adam Smith formulou sistematicamente a ideia de que o comércio e a divisão do trabalho geram um alinhamento impessoal entre o interesse próprio e a riqueza coletiva, teóricos, governantes e cidadãos têm se interrogado: as forças de mercado operam como leis físicas invariáveis — tais como a gravidade ou a termodinâmica —, ou constituem convenções institucionais historicamente contingentes, passíveis de moldagem, regulação e subversão pela vontade política?

A crença na soberania irrestrita dos mecanismos de mercado inspirou o liberalismo clássico do século XIX e as reformas de desregulamentação do final do século XX. Por outro lado, a constatação de crises recorrentes, miséria social, concentração monopolista e degradação ambiental estimulou correntes que vão do reformismo social-democrata e ordoliberal até o socialismo revolucionário, as quais sustentam que o mercado deixado a si próprio é autodestrutivo.

Este capítulo investiga o estatuto epistemológico e histórico das chamadas "leis econômicas". Analisa a descoberta da ordem espontânea, a função informacional insubstituível do sistema de preços, a revolução subjetivista do valor, o célebre debate sobre a impossibilidade do cálculo econômico socialista e, em contraponto rigoroso, as falhas de mercado, as assimetrias de informação, a crítica polanyiana à "mercadoria fictícia" e a necessidade de instituições jurídicas e democráticas que subordinem a economia à vida humana.`,
    sections: [
      {
        number: '1',
        title: 'A Natureza do Mercado: Mecanismo Construtivo ou Ordem Espontânea?',
        content: `A primeira grande controvérsia teórica diz respeito à própria ontologia do mercado. Para a tradição do racionalismo construtivista — criticada com veemência por Friedrich Hayek —, a sociedade e a economia seriam produtos de um projeto deliberado, passíveis de serem desenhadas e planejadas a partir de um centro de decisão racional.

Em contrapartida, a tradição evolucionária britânica e a Escola Austríaca de Economia argumentam que o mercado é uma ordem espontânea (termo grego: cosmos), resultante da ação humana, mas não do desígnio humano deliberado. Nenhum comitê de sábios inventou a moeda, a linguagem ou o comércio internacional. Tais instituições emergiram gradualmente a partir da interação descentralizada de milhões de indivíduos que buscavam satisfazer seus objetivos específicos, aprendendo por tentativa e erro ao longo de gerações.

Contudo, reconhecer a espontaneidade do mercado não implica afirmar sua independência das leis. A ordem de mercado não opera no vácuo anárquico: ela exige um arcabouço prévio de regras gerais e abstratas — especialmente o reconhecimento da propriedade privada, o cumprimento coercitivo dos contratos e a vedação à fraude e à violência. A questão crucial, portanto, não é mercado versus regras, mas quais regras permitem que a coordenação social ocorra com máxima liberdade e mínima coerção.`
      },
      {
        number: '2',
        title: 'O Sistema de Preços como Transmissor de Informação e Conhecimento Disperso',
        content: `Em seu célebre ensaio de 1945, "The Use of Knowledge in Society", Friedrich Hayek demonstrou que o problema econômico fundamental enfrentado por qualquer civilização não é meramente a alocação de recursos dados, mas sim a utilização de um conhecimento que não se encontra concentrado na mente de nenhum indivíduo ou agência central.

O conhecimento relevante para a tomada de decisões econômicas — as preferências dos consumidores, as condições geológicas de uma mina distante, as inovações técnicas repentinas, o clima de uma colheita — é essencialmente tácito, disperso, fragmentado e frequentemente contraditório. Nenhum planejador central, por mais poderoso que seja seu aparato burocrático ou computacional, é capaz de reunir a totalidade desses dados antes que eles mudem.

É exatamente aqui que o sistema de preços atua como uma máquina cibernética de coordenação. Quando ocorre uma escassez repentina de estanho ou trigo, o preço do produto sobe no mercado mundial. Esse simples aumento numérico transmite a todos os agentes econômicos — sem a necessidade de nenhuma ordem governamental centralizada — duas instruções vitais: aos consumidores, que economizem o uso daquele insumo ou procurem substitutos; aos produtores, que invistam recursos para ampliar sua extração ou cultivo. O preço funciona como um sinal condensado que resume uma imensa teia de fatos econômicos complexos.`
      },
      {
        number: '3',
        title: 'A Teoria do Valor Subjetivo e a Revolução Marginalista',
        content: `A economia clássica de Adam Smith e David Ricardo, retomada posteriormente por Karl Marx, tentou fundamentar o valor das mercadorias na quantidade de trabalho humano socialmente necessária para sua produção (Teoria do Valor-Trabalho). Essa formulação, no entanto, esbarrava no célebre "paradoxo da água e do diamante": por que a água, indispensável à sobrevivência, tem preço tão baixo, enquanto o diamante, supérfluo, alcança cifras astronômicas?

A resposta foi encontrada na década de 1870 com a Revolução Marginalista, protagonizada simultaneamente por Carl Menger em Viena, William Stanley Jevons na Inglaterra e Léon Walras na Suíça. Os marginalistas estabeleceram que o valor não é uma substância física intrínseca ao objeto, tampouco a soma das horas de suor empregadas em sua confecção. O valor é eminentemente subjetivo: reflete a utilidade atribuída pelo indivíduo à última unidade disponível daquele bem (utilidade marginal decrescente).

A água é abundante; logo, a utilidade da última unidade de um copo de água é ínfima. Os diamantes são escassos; logo, a satisfação trazida por uma unidade adicional é muito alta. Ao dissociar o valor dos custos físicos de produção e vinculá-lo às valorações subjetivas dos indivíduos na margem, a teoria econômica demonstrou que o mercado não é regido por leis de determinação mecânica material, mas pela dinâmica psicológica e circunstancial das escolhas humanas livres.`
      },
      {
        number: '4',
        title: 'A Lei da Oferta e da Procura: Forças Gravitacionais e Ajustes Dinâmicos',
        content: `A chamada "lei da oferta e da procura" é frequentemente citada como o núcleo inegociável do funcionamento capitalista. Quando a demanda por um produto supera a oferta disponível ao preço corrente, a concorrência entre os compradores tende a elevar as cotações. Inversamente, quando a oferta supera a demanda, a necessidade de desovar estoques força a redução dos preços.

No entanto, longe de ser um ponto estático de repouso (como sugerem os modelos de equilíbrio geral matemático walrasiano), o mercado real é um processo dinâmico contínuo de descoberta e arbitragem. O empreendedor não atua em um ambiente de certeza perfeita: ele antecipa demandas futuras incertas, corre riscos e coordena recursos para preencher vazios onde os preços vigentes não refletem as preferências reais do público.

Tentativas governamentais de revogar a lei da oferta e da procura por meio de decretos de congelamento de preços invariavelmente fracassam. Ao fixar artificialmente o preço de um alimento abaixo de seu patamar de mercado, o Estado desestimula os produtores a ofertá-lo (pois o custo supera a receita) e incentiva o consumo desenfreado. O resultado histórico universal é a escassez, a formação de filas, o racionamento burocrático e a emergência imediata do mercado negro (câmbio paralelo), demonstrando que as forças de ajuste de preços não desaparecem, mas se deslocam para a ilegalidade.`
      },
      {
        number: '5',
        title: 'O Debate sobre o Cálculo Econômico no Socialismo (Mises, Hayek, Lange)',
        content: `Em 1920, Ludwig von Mises publicou o artigo divisor de águas "O Cálculo Econômico na Comunidade Socialista", lançando o desafio mais profundo à viabilidade de uma economia centralmente planejada. Mises argumentou que, para alocar recursos escassos de forma racional entre infinitos usos concorrentes na sociedade moderna, é indispensável calcular custos e receitas em termos de uma unidade monetária comum.

Todavia, para que existam preços monetários autênticos para bens de capital (máquinas, terrenos, matérias-primas industriais), é imperativo que esses bens sejam negociados em um mercado livre entre proprietários privados concorrentes. Se o Estado estatiza a totalidade dos meios de produção — como pretendia o socialismo marxista soviético —, os bens de capital deixam de ser comprados e vendidos. Não havendo mercado, não há trocas; não havendo trocas, não há preços; não havendo preços, torna-se impossível calcular se a construção de uma ferrovia ou usina foi economicamente eficiente ou um desperdício monstruoso de riqueza social.

Economistas socialistas como Oskar Lange e Abba Lerner tentaram responder propondo o "socialismo de mercado", onde comitês de planejamento imitariam o mecanismo de preços por meio de equações matemáticas e tentativa e erro. A história do colapso econômico da União Soviética e do Bloco do Leste ao longo do século XX conferiu ampla validação empírica à tese austríaca: sem a propriedade privada e os preços livres, a economia de comando ruiu sob o peso da descoordenação sistêmica e do desperdício de capitais.`
      },
      {
        number: '6',
        title: 'Externalidades, Bens Públicos e Falhas de Mercado (Pigou, Coase, Samuelson)',
        content: `Se o mecanismo de preços é formidável na coordenação privada, por que não podemos afirmar que as leis de mercado são absolutas e perfeitas? A resposta reside nas imperfeições intrínsecas identificadas pela própria ciência econômica: as chamadas "falhas de mercado".

Arthur Cecil Pigou, em The Economics of Welfare (1920), formulou o conceito de externalidades — custos ou benefícios gerados por uma transação econômica que recaem sobre terceiros sem que haja compensação no preço de mercado. O exemplo paradigmático é a poluição: uma fábrica química pode produzir tecidos baratos e lucrativos para seus clientes, enquanto despeja efluentes tóxicos em um rio, destruindo a pesca e a saúde da comunidade ribeirinha. O preço de mercado do tecido não embute o custo ambiental da destruição, gerando superprodução do bem poluente.

Ronald Coase (Prêmio Nobel de 1991), em The Problem of Social Cost (1960), sofisticou a análise ao demonstrar que as externalidades decorrem fundamentalmente da ausência de direitos de propriedade bem definidos e dos custos de transação. Além disso, a teoria dos bens públicos puros de Paul Samuelson demonstrou que bens não rivais e não excludentes — tais como a defesa nacional, a iluminação pública e a proteção das águas internacionais — não podem ser providos eficientemente pelo mercado privado devido ao problema do "carona" (free rider), exigindo o poder tributário e coercitivo do Estado.`
      },
      {
        number: '7',
        title: 'Monopólios Naturais, Concorrência e Destruição Criativa (Schumpeter)',
        content: `A visão idílica da concorrência perfeita descrita pelos manuais econômicos — onde milhares de pequenos produtores vendem mercadorias homogêneas sem nenhum poder sobre o preço — não descreve o capitalismo real. No mundo contemporâneo, a existência de vultosos custos fixos e economias de escala gera tendências à concentração e ao surgimento de monopólios naturais (distribuição de energia elétrica, saneamento, ferrovias e grandes plataformas digitais de rede).

Joseph Schumpeter, em Capitalismo, Socialismo e Democracia (1942), desmistificou o horror liberal convencional aos monopólios temporários. Schumpeter explicou que o motor supremo do capitalismo não é a concorrência estática de preços de produtos iguais, mas a "destruição criativa": o vendaval incessante pelo qual novos métodos de produção, novas fontes de matérias-primas e novas tecnologias aniquilam os monopólios do passado.

O fabricante de velas não compete baixando o preço da cera; ele é varrido do mapa pela lâmpada elétrica de Edison. A máquina de escrever não compete com o processador de texto digital. Para Schumpeter, os lucros extraordinários do inovador funcionam como o prêmio indispensável para incentivar o risco do progresso técnico. No entanto, quando corporações gigantescas utilizam seu poder financeiro para erigir barreiras artificiais de entrada e capturar os órgãos reguladores do Estado, as leis de mercado deixam de funcionar a favor da sociedade e passam a servir a cartéis parasitários.`
      },
      {
        number: '8',
        title: 'A Crítica Institucionalista e a Mercadoria Fictícia (Karl Polanyi)',
        content: `A crítica mais devastadora à crença de que o mercado possui leis absolutas e naturais veio do historiador econômico húngaro Karl Polanyi em sua obra-prima A Grande Transformação (1944). Polanyi atacou a tese liberal de que a humanidade sempre foi regida pela propensão individual a trocar e barganhar. Pelo contrário, na esmagadora maioria das sociedades pré-capitalistas, a atividade econômica encontrava-se "enraizada" (embedded) em normas de reciprocidade, redistribuição comunitária e obrigações religiosas.

A criação do "mercado autorregulado" no século XIX exigiu uma intervenção estatal massiva e violenta para transformar elementos que não são mercadorias em itens transacionáveis na bolsa de valores. Polanyi cunhou o conceito de "mercadorias fictícias":

1. O Trabalho humano: que é nada mais que a própria atividade vital do ser humano em sua dignidade corporal e psíquica;
2. A Terra: que é a natureza viva e o ecossistema que sustenta a biosfera terrestre;
3. O Dinheiro: que é um símbolo contábil de poder de compra e crédito garantido pela soberania do Estado.

Permitir que o destino de milhões de seres humanos e a integridade da natureza sejam regulados exclusivamente pela flutuação cega da oferta e da procura significa aniquilar a substância humana e ecológica da civilização. Por essa razão, Polanyi demonstrou que a história do capitalismo é regida por um "duplo movimento": à medida que o mercado avança mercantilizando tudo, a sociedade espontaneamente reage criando contramovimentos de autodefesa (sindicatos, previdência social, leis ambientais e regulação fabril).`
      },
      {
        number: '9',
        title: 'Assimetria de Informação, Mercados Incompletos e Seleção Adversa',
        content: `Durante a segunda metade do século XX, a economia da informação — liderada por George Akerlof, Joseph Stiglitz e Michael Spence (laureados com o Nobel de 2001) — desferiu um golpe definitivo no dogma da perfeição informacional dos mercados.

Em seu célebre artigo "The Market for 'Lemons'" (1970), Akerlof demonstrou que, quando os vendedores sabem mais sobre a qualidade de um produto do que os compradores (assimetria de informação), a lei da concorrência de preços pode causar a destruição do próprio mercado. Os compradores, desconfiados de adquirirem produtos defeituosos, só aceitam pagar um preço médio; a esse preço, os proprietários de produtos de alta qualidade retiram suas ofertas, deixando apenas os piores produtos em circulação (seleção adversa).

O mesmo mecanismo se aplica a mercados de seguros de saúde, crédito bancário e emprego. Se deixados exclusivamente ao livre jogo de preços sem regulação pública, idosos e portadores de doenças pré-existentes são excluídos de qualquer seguro privado, e pequenas empresas viáveis não obtêm crédito. Os teoremas de Greenwald-Stiglitz comprovaram matematicamente que, em presença de assimetria informacional e mercados incompletos, os mercados livres não alcançam a eficiência de Pareto, justificando intervenções governamentais corretivas.`
      },
      {
        number: '10',
        title: 'O Estado como Garantidor de Regras: Ordoliberalismo e a Escola de Friburgo',
        content: `Na Alemanha devastada do pós-Segunda Guerra Mundial, os economistas e juristas da Escola de Friburgo — Walter Eucken, Franz Böhm, Wilhelm Röpke e Alfred Müller-Armack — formularam o Ordoliberalismo, que deu origem ao modelo da "Economia Social de Mercado".

Os ordoliberais rejeitaram tanto o planejamento socialista soviético quanto o laissez-faire ingênuo do século XIX. Para Eucken, o mercado não é uma selva darwinista nem um mecanismo cósmico autônomo. O mercado concorrencial é uma instituição artificial e frágil que precisa ser permanentemente protegida, tanto contra a intervenção arbitrária dos governantes quanto contra o poder predatório dos cartéis empresariais.

O papel do Estado ordoliberal é ser o "árbitro do jogo": ele estabelece a Ordnungspolitik (política de ordenamento institucional) — moeda estável, responsabilidade fiscal, defesa impiedosa da concorrência através de órgãos antitruste e redes de seguridade social —, mas abstém-se terminantemente de interferir discricionariamente no resultado do jogo diário (fixação casuística de preços ou subsídios a empresas amigas). É a distinção fundamental entre criar regras transparentes para todos e favorecer grupos de interesse particulares.`
      },
      {
        number: '11',
        title: 'Ciclos Econômicos, Moeda e Intervenção Monetária',
        content: `A recorrência de crises de superprodução, recessões e desemprego em massa ao longo dos séculos XIX e XX colocou em xeque a famosa Lei de Say — o postulado clássico segundo o qual "a oferta cria sua própria procura" e, portanto, uma crise generalizada de demanda seria impossível.

John Maynard Keynes, em sua monumental Teoria Geral do Emprego, do Juro e da Moeda (1936), demonstrou que, em tempos de incerteza profunda, os agentes econômicos preferem entesourar moeda em vez de investir ou consumir (preferência pela liquidez). Ao reterem papel-moeda, a demanda agregada desaba, as empresas não encontram compradores para sua produção e demitem trabalhadores, deflagrando uma espiral descendente onde a frugalidade individual gera desastre coletivo ("paradoxo da parcimônia").

A Escola Austríaca de Hayek e Mises ofereceu uma explicação antagônica para os ciclos: as crises não decorrem de deficiências da demanda, mas da expansão artificial de crédito promovida pelos Bancos Centrais, que mantêm os juros artificialmente baixos e induzem empresários a realizarem investimentos insustentáveis no longo prazo (má alocação de capital ou malinvestment). Quando a inflação obriga a alta dos juros, os projetos deficitários colapsam. O debate contemporâneo entre keynesianos e austríacos continua no centro das políticas monetárias mundiais.`
      },
      {
        number: '12',
        title: 'O Mito do Mercado Autorregulado e a Realidade das Instituições Sociais',
        content: `O exame histórico rigoroso revela que a ideia de leis de mercado "absolutas" é uma abstração teórica. Nenhum mercado existiu jamais em estado puro desprovido de instituições criadas pela cultura, pela moral e pelo direito.

Os mercados dependem de:
1. Direitos de propriedade juridicamente definidos e garantidos por um sistema judiciário confiável e independente;
2. Padrões técnicos, medidas sanitárias e controle de pesos e balanças que garantem a segurança do consumidor;
3. Proteção aos trabalhadores contra a servidão por dívidas, limitação de jornadas e vedação absoluta ao trabalho infantil escravo;
4. Legislação societária e falimentar que permita a dissolução ordenada de empresas sem a prisão de devedores;
5. Segurança jurídica que impeça a expropriação violenta de capitais por governos tiranos ou oligarcas armados.

As leis de mercado não caíram do céu como tábuas de pedra dadas a Moisés no Sinai: elas funcionam como forças gravitacionais dentro de canais desenhados pelas escolhas normativas da sociedade. Negar a realidade das forças de oferta e procura conduz ao caos e à escassez; absolutizá-las às custas da justiça social e da sustentabilidade ambiental conduz à barbárie.`
      },
      {
        number: '13',
        title: 'Conclusão Histórico-Analítica: As Leis Econômicas perante a Dignidade Humana',
        content: `Responder à questão "As leis de mercado são absolutas?" exige uma distinção epistemológica fundamental entre realidade dos mecanismos econômicos e absolutismo normativo.

Em termos analíticos e descritivos, as leis econômicas expressam regularidades reais do comportamento humano em ambientes de escassez: os incentivos importam, os preços refletem a escassez relativa, a coerção destrói o cálculo informacional e a inflação corrói o poder de compra dos mais pobres. Qualquer política pública que ignore essas forças — tabelando juros por decreto, ignorando restrições orçamentárias ou imprimindo dinheiro sem lastro — é punida inexoravelmente pela realidade com recessão, inflação descontrolada e miséria.

No entanto, em termos éticos, políticos e normativos, as leis de mercado NÃO são absolutas. O mercado é um extraordinário servo e instrumento de alocação de recursos, mas um péssimo mestre para definir os fins morais de uma civilização. A dignidade da pessoa humana, a saúde universal, a educação infantil, o patrimônio cultural e a preservação do equilíbrio ecológico da Terra não podem ser leiloados pelo melhor lance da bolsa de valores.

A verdadeira sabedoria civilizatória construída entre 1760 e o século XXI reside em harmonizar a insubstituível vitalidade produtiva e inovadora dos mercados livres com a firmeza de um Estado democrático de direito, capaz de impor limites civilizatórios e garantir que o progresso material sirva à elevação de todos os seres humanos.`
      }
    ],
    conclusion: `A interrogação sobre o absolutismo das leis de mercado encerra o núcleo dramático da modernidade econômica. A história demonstra que os mercados livres são indispensáveis para gerar riqueza, incentivar a inovação científica e coordenar o conhecimento de sociedades complexas sem recorrer à tirania da planificação totalitária.

Todavia, a própria longevidade e legitimidade do capitalismo dependem de sua capacidade de reconhecer limites: onde a vida humana, a dignidade do trabalho e a biosfera planetária são ameaçadas, o direito soberano da cidadania e a autoridade moral da democracia devem prevalecer sobre a maximização contábil do lucro. A economia foi feita para o homem, e não o homem para a economia.`,
    bibliographicReferences: [
      'AKERLOF, George A. The Market for "Lemons": Quality Uncertainty and the Market Mechanism. The Quarterly Journal of Economics, v. 84, n. 3, p. 488-500, 1970.',
      'COASE, Ronald H. The Problem of Social Cost. Journal of Law and Economics, v. 3, p. 1-44, 1960.',
      'EUCKEN, Walter. The Foundations of Economics. London: William Hodge, 1950.',
      'HAYEK, Friedrich A. The Use of Knowledge in Society. American Economic Review, v. 35, n. 4, p. 519-530, 1945.',
      'HAYEK, Friedrich A. The Constitution of Liberty. Chicago: The University of Chicago Press, 1960.',
      'KEYNES, John Maynard. The General Theory of Employment, Interest and Money. London: Macmillan, 1936.',
      'MENGER, Carl. Princípios de Economia Política. São Paulo: Nova Cultural, 1988 [1871].',
      'MISES, Ludwig von. Economic Calculation in the Socialist Commonwealth. London: Institute of Economic Affairs, 1990 [1920].',
      'PIGOU, Arthur Cecil. The Economics of Welfare. London: Macmillan, 1920.',
      'POLANYI, Karl. A Grande Transformação: As Origens Políticas e Econômicas da Nossa Época. Rio de Janeiro: Campus, 2000 [1944].',
      'SAMUELSON, Paul A. The Pure Theory of Public Expenditure. The Review of Economics and Statistics, v. 36, n. 4, p. 387-389, 1954.',
      'SCHUMPETER, Joseph A. Capitalismo, Socialismo e Democracia. Rio de Janeiro: Fundo de Cultura, 1961 [1942].',
      'SMITH, Adam. Uma Investigação sobre a Natureza e as Causas da Riqueza das Nações. São Paulo: Martins Fontes, 2003 [1776].',
      'STIGLITZ, Joseph E. Whither Socialism? Cambridge, MA: MIT Press, 1994.'
    ]
  },
  105: {
    topicId: 105,
    title: 'A VIRADA EPISTEMOLÓGICA DO MARXISMO',
    subtitle: 'Da infraestrutura econômica à hegemonia cultural: Gramsci, Escola de Frankfurt e a crítica de Leszek Kołakowski',
    authorCatedra: 'Cátedra de Teoria Marxista, Epistemologia Histórica e Filosofia Política',
    introduction: `Uma das transformações mais importantes da tradição marxista no século XX foi a ampliação de seu objeto de investigação.

No século XIX, Marx e Engels desenvolveram uma interpretação da sociedade que atribuía papel fundamental às condições materiais de produção.

A economia constituía o ponto de partida para compreender as instituições políticas, as formas jurídicas e as representações ideológicas.

Entretanto, a experiência histórica do século XX apresentou problemas que exigiram reformulações.

O capitalismo industrial não entrou em colapso automático nos países mais desenvolvidos.

As crises econômicas não produziram necessariamente revoluções socialistas.

Movimentos de trabalhadores participaram de instituições parlamentares, sindicatos e sistemas de proteção social.

O fascismo conseguiu mobilizar setores importantes das classes trabalhadoras.

As sociedades capitalistas desenvolveram meios de comunicação de massa, publicidade, indústria cultural e novas formas de integração social.

Essas experiências colocaram uma questão diante dos marxistas:

**Se a estrutura econômica é fundamental para explicar a sociedade, por que as condições econômicas não conduzem automaticamente à consciência revolucionária?**

A resposta exigiu ampliar a análise para instituições, cultura, educação, religião, comunicação, psicologia e linguagem.

Essa transformação não ocorreu de maneira uniforme nem foi planejada por uma organização central.

Foi resultado de diferentes experiências intelectuais e políticas.`,
    sections: [
      {
        number: '1',
        title: 'O ponto de origem: Marx e Engels',
        content: ``,
        subsections: [
          {
            number: '1.1',
            title: 'A vida material e a consciência',
            content: `Em A Ideologia Alemã, Marx e Engels procuram demonstrar que a história deve começar pelos indivíduos concretos e pelas condições nas quais produzem sua existência.

A consciência não é apresentada como uma entidade independente das relações sociais.

Os seres humanos desenvolvem ideias dentro de condições históricas determinadas.

Essa formulação será posteriormente sintetizada no prefácio de 1859 à Contribuição à Crítica da Economia Política.

Marx escreve que não é a consciência dos homens que determina seu ser, mas seu ser social que determina sua consciência.

A afirmação estabelece a base de uma interpretação materialista da sociedade.`
          },
          {
            number: '1.2',
            title: 'As ideias dominantes',
            content: `Em outro trecho de A Ideologia Alemã, Marx e Engels relacionam o poder material ao poder intelectual.

A classe que controla os meios de produção material dispõe também de condições privilegiadas para influenciar os meios de produção intelectual.

O argumento é particularmente importante porque demonstra que Marx já reconhecia a importância política da produção das ideias.

A dimensão cultural não foi inventada por Gramsci.

O que Gramsci fez foi desenvolver essa questão de maneira muito mais sistemática.`
          },
          {
            number: '1.3',
            title: 'O problema da interpretação economicista',
            content: `Uma dificuldade surgiu quando parte da tradição marxista passou a interpretar a infraestrutura como causa praticamente automática das transformações políticas e culturais.

Nessa leitura, mudanças econômicas deveriam produzir necessariamente mudanças na consciência.

O problema é que a experiência histórica mostrou uma realidade mais complexa.

Uma crise econômica pode provocar radicalização revolucionária, mas também pode produzir nacionalismo, conservadorismo, autoritarismo ou desmobilização política.

A mesma situação material pode ser interpretada de maneiras diferentes por grupos sociais distintos.

Essa dificuldade abriu espaço para novas investigações.`
          }
        ]
      },
      {
        number: '2',
        title: 'A experiência histórica que desafiou o marxismo tradicional',
        content: `No início do século XX, a Europa industrializada não apresentou a transformação revolucionária prevista por determinadas interpretações do marxismo.

A Primeira Guerra Mundial, a Revolução Russa de 1917, a crise do liberalismo, o crescimento dos movimentos fascistas e a consolidação dos Estados nacionais modificaram profundamente o cenário político.

Em sociedades industrializadas como Alemanha e Itália, movimentos revolucionários socialistas não conseguiram conquistar o poder.

Na Alemanha, o movimento operário possuía organizações importantes, mas o país também se tornou um dos principais centros de desenvolvimento do fascismo.

Na Itália, o fascismo conseguiu consolidar uma ditadura.

Essas experiências estimularam a investigação de fatores que ultrapassavam a economia.

Era necessário compreender:

- nacionalismo;
- religião;
- autoridade;
- propaganda;
- educação;
- comunicação;
- identidade coletiva;
- comportamento de massas;
- instituições políticas;
- formação do consentimento.

A pergunta deixou de ser apenas como as relações econômicas produzem determinadas formas de consciência.

Passou a incluir como determinadas formas de consciência ajudam a reproduzir relações sociais e políticas.`
      },
      {
        number: '3',
        title: 'Antonio Gramsci: hegemonia e sociedade civil',
        content: `Antonio Gramsci é um dos autores mais importantes dessa transformação.

Seus Cadernos do Cárcere foram escritos entre 1929 e 1935, durante sua prisão pelo regime fascista italiano.

Gramsci procurou compreender por que as sociedades ocidentais apresentavam maior resistência à revolução socialista do que algumas interpretações marxistas tradicionais supunham.`,
        subsections: [
          {
            number: '3.1',
            title: 'A diferença entre dominação e direção',
            content: `Gramsci distinguiu duas dimensões do exercício do poder:

**Dominação:** capacidade de impor decisões por meio da coerção.

**Direção intelectual e moral:** capacidade de construir consentimento e apresentar determinada visão de mundo como legítima ou aceitável.

Uma classe dominante não se sustenta apenas porque possui força econômica, militar ou administrativa.

Também precisa estabelecer alianças, influenciar instituições e apresentar seus interesses como compatíveis com os interesses gerais da sociedade.

Essa capacidade constitui a hegemonia.`
          },
          {
            number: '3.2',
            title: 'Sociedade política e sociedade civil',
            content: `Gramsci desenvolveu uma análise complexa da relação entre Estado e sociedade civil.

A sociedade política está relacionada aos mecanismos de governo, administração e coerção.

A sociedade civil envolve instituições, organizações e espaços nos quais se desenvolvem disputas culturais e políticas.

Entre esses espaços podem estar:

- escolas;
- associações;
- sindicatos;
- igrejas;
- jornais;
- organizações culturais;
- universidades;
- partidos;
- instituições intelectuais.

Esses espaços participam da formação de valores e da organização da vida social.

Entretanto, não devem ser entendidos como instrumentos controlados automaticamente por uma única classe ou partido.

São também espaços de conflito, resistência e disputa.`
          },
          {
            number: '3.3',
            title: 'Guerra de posição',
            content: `Uma das contribuições mais importantes de Gramsci é o conceito de guerra de posição.

Ele utiliza uma metáfora militar para distinguir duas formas de disputa política.

**Guerra de movimento:** confronto direto e relativamente rápido contra o aparelho estatal.

**Guerra de posição:** disputa prolongada pela direção política e cultural da sociedade, envolvendo instituições, alianças e organizações da sociedade civil.

A ideia central é que, em sociedades ocidentais complexas, a conquista do poder estatal não poderia ser compreendida apenas como uma operação militar ou insurrecional.

Seria necessário construir capacidade de direção política e moral.`
          },
          {
            number: '3.4',
            title: 'Gramsci defendia simplesmente ocupar escolas e universidades?',
            content: `Essa interpretação aparece frequentemente em debates políticos contemporâneos, mas é uma simplificação.

Gramsci atribuía grande importância à educação, aos intelectuais e à cultura.

Entretanto, seu conceito de hegemonia envolve muito mais do que ocupar instituições.

Inclui:

- construção de alianças sociais;
- organização política;
- elaboração de uma visão de mundo;
- formação de intelectuais;
- direção moral;
- disputa de interesses;
- capacidade de representar projetos coletivos.

Portanto, não é rigoroso reduzir sua teoria a uma receita de controle institucional.`
          },
          {
            number: '3.5',
            title: 'A transformação epistemológica',
            content: `Gramsci ampliou a análise marxista porque passou a investigar como a sociedade produz consentimento.

A economia continuava sendo importante, mas não explicava sozinha a estabilidade política.

A hegemonia permitia compreender por que grupos sociais podiam aceitar instituições que não correspondiam diretamente aos seus interesses econômicos imediatos.

Esse desenvolvimento representa uma importante ampliação da teoria marxista.`
          }
        ]
      },
      {
        number: '4',
        title: 'A Escola de Frankfurt: cultura, psicologia e dominação',
        content: `A Escola de Frankfurt desenvolveu outra resposta aos problemas da sociedade industrial moderna.

O Instituto de Pesquisa Social, associado à Universidade de Frankfurt, tornou-se um importante centro de investigação interdisciplinar.

Seus pesquisadores utilizaram elementos de Marx, Hegel, Weber, Freud e outras tradições intelectuais.

Entre os principais nomes estavam:

- Max Horkheimer;
- Theodor Adorno;
- Herbert Marcuse;
- Erich Fromm;
- Walter Benjamin;
- Friedrich Pollock.`,
        subsections: [
          {
            number: '4.1',
            title: 'A crise da expectativa revolucionária',
            content: `A experiência do fascismo, a derrota de movimentos revolucionários e a integração de trabalhadores às sociedades capitalistas levaram esses autores a questionar explicações simplificadas da consciência de classe.

Por que pessoas submetidas a condições de desigualdade podiam apoiar movimentos autoritários?

Por que a propaganda podia mobilizar massas?

Por que o desenvolvimento tecnológico não produzia necessariamente emancipação?

Essas perguntas exigiam investigar a psicologia e a cultura.`
          },
          {
            number: '4.2',
            title: 'A indústria cultural',
            content: `Em Dialética do Esclarecimento, Horkheimer e Adorno desenvolveram a crítica da indústria cultural.

A expressão procura analisar a transformação de produtos culturais em mercadorias produzidas e distribuídas em larga escala.

Cinema, rádio, música e entretenimento passam a integrar estruturas industriais.

A cultura deixa de ser compreendida exclusivamente como produção artística individual e passa a ser analisada também como atividade econômica organizada.

Os autores argumentaram que a padronização cultural poderia reduzir a autonomia crítica dos indivíduos.

A indústria cultural não seria simplesmente um conjunto de produtos ruins.

Seria uma estrutura de produção e distribuição que influencia os hábitos, os desejos e as formas de percepção.`
          },
          {
            number: '4.3',
            title: 'Herbert Marcuse e o homem unidimensional',
            content: `Em O Homem Unidimensional, publicado em 1964, Marcuse desenvolveu uma crítica às sociedades industriais avançadas.

Sua tese era que a sociedade tecnológica poderia integrar os indivíduos por meio do consumo, da produção e de formas de satisfação administradas.

O conflito social não desapareceria, mas poderia ser enfraquecido por mecanismos de integração.

O indivíduo poderia experimentar a sociedade como um ambiente de liberdade e satisfação mesmo quando permanecesse submetido a estruturas de dominação.`
          },
          {
            number: '4.4',
            title: 'A incorporação da psicologia',
            content: `A Escola de Frankfurt também utilizou elementos da psicanálise freudiana.

A intenção era compreender como estruturas sociais influenciavam a formação da personalidade, da autoridade e das disposições políticas.

Essa abordagem permitia investigar fenômenos que não poderiam ser explicados exclusivamente pela posição econômica dos indivíduos.

A análise da sociedade passou a incluir processos psicológicos e culturais.`
          },
          {
            number: '4.5',
            title: 'A Escola de Frankfurt abandonou a economia?',
            content: `Não completamente.

A crítica da economia política permaneceu presente em diferentes autores e momentos da Escola.

O que ocorreu foi uma ampliação interdisciplinar da teoria crítica.

A economia passou a ser analisada em conjunto com cultura, psicologia, comunicação, racionalidade e instituições.

Essa distinção é importante para não confundir ampliação teórica com abandono completo do pensamento econômico.`
          }
        ]
      },
      {
        number: '5',
        title: 'Leszek Kołakowski: a crítica ao destino histórico do marxismo',
        content: `Leszek Kołakowski ocupa posição diferente de Gramsci e da Escola de Frankfurt.

Ele foi inicialmente um intelectual marxista polonês, mas progressivamente se tornou um crítico do marxismo oficial e do comunismo autoritário.

Sua trajetória é especialmente relevante porque conheceu o sistema comunista por dentro.`,
        subsections: [
          {
            number: '5.1',
            title: 'Da adesão à crítica',
            content: `Kołakowski participou inicialmente da vida intelectual do marxismo polonês.

Com o tempo, passou a criticar o dogmatismo, o autoritarismo e as pretensões de verdade absoluta do sistema ideológico oficial.

Foi afastado do Partido Operário Unificado Polonês em 1966 e posteriormente deixou a Polônia.

Sua experiência permitiu que analisasse não apenas os textos de Marx, mas também a evolução política das organizações que reivindicavam seu pensamento.`
          },
          {
            number: '5.2',
            title: 'Main Currents of Marxism',
            content: `Sua obra mais conhecida sobre o tema é Main Currents of Marxism: Its Rise, Growth and Dissolution, publicada originalmente em três volumes entre 1976 e 1978.

O trabalho reconstrói a formação do marxismo, suas origens filosóficas, suas diferentes correntes e sua evolução política.

Kołakowski não trata o marxismo como uma doutrina perfeitamente uniforme.

Examina suas tensões, contradições, transformações e consequências históricas.

Sua crítica é especialmente forte em relação à associação entre a pretensão de possuir uma interpretação científica definitiva da história e a legitimação de sistemas políticos autoritários.`
          },
          {
            number: '5.3',
            title: 'O problema do marxismo como projeto de poder',
            content: `Uma questão fundamental em Kołakowski é a transformação de uma teoria crítica em uma doutrina oficial de Estado.

Quando determinada interpretação do marxismo passa a ser considerada verdade histórica incontestável, a divergência pode ser classificada como erro ideológico ou oposição política.

O pensamento crítico corre o risco de transformar-se em instrumento de legitimação do poder.

Esse problema não é apenas econômico.

É também epistemológico e político.

Envolve a relação entre conhecimento, liberdade, verdade e autoridade.`
          },
          {
            number: '5.4',
            title: 'Kołakowski e a crítica cultural',
            content: `É possível investigar como o marxismo continuou influenciando universidades, filosofia, sociologia, história e estudos culturais mesmo depois da crise dos regimes comunistas europeus.

Entretanto, é importante não atribuir a Kołakowski uma frase que não foi verificada.

Ele não deve ser apresentado como autor de uma suposta afirmação de que o marxismo deixou de ser teoria econômica e se tornou exclusivamente uma crítica cultural.

Sua obra oferece uma crítica histórica e filosófica muito mais ampla.

Também é importante distinguir três fenômenos:

1. crise dos sistemas de planejamento central;
2. sobrevivência intelectual do marxismo;
3. desenvolvimento de correntes acadêmicas de crítica cultural.

Eles estão relacionados historicamente, mas não são acontecimentos idênticos.`
          }
        ]
      },
      {
        number: '6',
        title: 'A linguagem como instrumento de influência social',
        content: `Chegamos a uma das questões mais importantes da investigação.

Se as instituições culturais participam da formação da consciência, qual é o papel da linguagem?

A linguagem não serve apenas para transmitir informações.

Ela também organiza categorias, estabelece distinções, apresenta interpretações e influencia a maneira como acontecimentos são compreendidos.

A escolha de palavras pode modificar a percepção de uma situação.

Compare:

- imposto versus contribuição;
- manifestação versus distúrbio;
- reforma versus retirada de direitos;
- liberdade econômica versus exploração;
- segurança pública versus repressão;
- resistência versus radicalismo.

Cada expressão pode destacar aspectos diferentes de uma mesma situação.

Isso não significa que todas as palavras tenham o mesmo efeito em todos os indivíduos.

O significado depende do contexto, das experiências, dos valores e das informações disponíveis.`,
        subsections: [
          {
            number: '6.1',
            title: 'A hipótese de Sapir-Whorf',
            content: `A hipótese da relatividade linguística investiga a relação entre língua e pensamento.

Em sua versão mais forte, sugeriria que a língua determina a maneira como as pessoas pensam.

Essa versão determinista não possui sustentação científica suficiente.

Entretanto, pesquisas contemporâneas demonstram que a linguagem pode influenciar a atenção, a categorização e determinados processos cognitivos.

A conclusão mais equilibrada é que a língua pode influenciar a maneira como organizamos determinadas experiências, sem determinar integralmente nossa capacidade de pensar.`
          },
          {
            number: '6.2',
            title: 'Enquadramento comunicacional',
            content: `O conceito de framing, ou enquadramento, é especialmente importante.

Um enquadramento destaca determinados aspectos de um acontecimento e deixa outros em segundo plano.

Imagine duas notícias sobre a mesma política pública.

A primeira enfatiza o custo tributário.

A segunda enfatiza os benefícios sociais.

As duas podem descrever o mesmo programa, mas conduzem a interpretações diferentes.

O enquadramento não precisa envolver mentira.

Pode ocorrer simplesmente pela seleção dos aspectos destacados.`
          },
          {
            number: '6.3',
            title: 'Estudos científicos sobre framing',
            content: `A pesquisa de Dennis Chong e James Druckman, publicada em 2007 na Annual Review of Political Science, revisou a teoria do enquadramento e os mecanismos pelos quais a apresentação das informações pode influenciar a opinião pública.

Em 2022, Eran Amsalem e Alon Zoizner publicaram uma meta-análise de 138 experimentos sobre efeitos de enquadramento na política.

Os autores identificaram efeitos de tamanho médio sobre atitudes e emoções políticas.

Entretanto, os efeitos sobre o comportamento foram negligenciáveis na análise agregada.

Essa distinção é fundamental.

A linguagem pode influenciar opiniões, emoções e julgamentos, mas não existe comprovação de que controlar palavras seja suficiente para controlar as ações de uma população.`
          },
          {
            number: '6.4',
            title: 'Repetição, propaganda e persuasão',
            content: `A repetição de mensagens pode aumentar sua familiaridade e influenciar a percepção de credibilidade.

A propaganda política utiliza diferentes mecanismos:

- repetição;
- símbolos;
- identificação coletiva;
- simplificação;
- apelo emocional;
- seleção de informações;
- construção de inimigos;
- enquadramento moral.

Entretanto, os efeitos dependem da credibilidade da fonte, da exposição, do contexto e das predisposições individuais.

Os indivíduos também podem resistir, reinterpretar ou rejeitar mensagens.`
          },
          {
            number: '6.5',
            title: 'O poder da nomeação',
            content: `A linguagem pode transformar categorias sociais.

Quando uma instituição define determinada conduta como crime, direito, ameaça, privilégio ou dever, ela participa da construção de interpretações socialmente relevantes.

A nomeação pode influenciar:

- percepção de legitimidade;
- identificação de grupos;
- julgamentos morais;
- expectativas sociais;
- decisões políticas.

Mas a linguagem não cria sozinha a realidade material.

Uma palavra não elimina uma crise econômica, não produz alimentos e não modifica automaticamente as relações de propriedade.

O poder simbólico opera em interação com instituições, recursos e relações sociais.`
          }
        ]
      },
      {
        number: '7',
        title: 'Olavo de Carvalho e a interpretação da guerra cultural no Brasil',
        content: `Olavo de Carvalho foi um dos principais divulgadores brasileiros de uma interpretação segundo a qual a esquerda teria deslocado sua estratégia para a disputa cultural e intelectual.

Sua leitura enfatizou Gramsci, a Escola de Frankfurt e a influência de correntes marxistas nas universidades, na imprensa e na produção cultural.

Essa interpretação teve influência importante na formação de setores da direita brasileira contemporânea.

Entretanto, é necessário separar três dimensões:

**Primeira:** a existência de teorias acadêmicas sobre hegemonia cultural, ideologia, comunicação e disputa simbólica.

**Segunda:** a existência de movimentos políticos que procuram influenciar instituições educacionais, culturais e comunicacionais.

**Terceira:** a afirmação de que existe uma estratégia centralizada, contínua e coordenada de conquista de todas essas instituições por uma organização marxista.

As duas primeiras afirmações podem ser investigadas empiricamente.

A terceira exige provas específicas e não pode ser presumida a partir da existência das teorias de Gramsci ou Frankfurt.

A expressão "marxismo cultural" é frequentemente utilizada em debates políticos contemporâneos, mas não representa uma categoria acadêmica consensual que descreva uma organização centralizada de transformação cultural.`
      },
      {
        number: '8',
        title: 'A virada epistemológica: o que realmente mudou?',
        content: `A transformação pode ser organizada em quatro momentos.

### Primeiro momento — Marx e Engels
A investigação começa pelas condições materiais de existência.
A estrutura econômica ocupa posição fundamental na explicação das instituições e das formas de consciência.

### Segundo momento — Gramsci
A investigação se amplia para compreender como a direção intelectual e moral contribui para a estabilidade da sociedade.
O consentimento passa a ser uma dimensão central da reprodução do poder.

### Terceiro momento — Escola de Frankfurt
A análise incorpora psicologia, comunicação, indústria cultural e racionalidade instrumental.
A dominação passa a ser estudada também por meio da formação de desejos, hábitos e formas de percepção.

### Quarto momento — Crítica de Kołakowski
O próprio desenvolvimento do marxismo torna-se objeto de investigação crítica.
A questão deixa de ser apenas como o capitalismo reproduz suas relações sociais e passa a incluir como uma teoria revolucionária pode transformar-se em doutrina oficial e instrumento de poder.

### Esquema da transformação

Marx e Engels
**Produção material, classes e ideologia**

↓

Gramsci
**Hegemonia, sociedade civil e consentimento**

↓

Escola de Frankfurt
**Cultura de massas, psicologia e comunicação**

↓

Kołakowski
**Crítica filosófica e histórica do marxismo**

Essa sequência representa uma linha de desenvolvimento intelectual, não uma sucessão obrigatória ou uma evolução homogênea.

Os autores possuem diferenças importantes e não formam uma única escola teórica.`
      },
      {
        number: '9',
        title: 'Conclusão — Da produção material à produção de sentidos',
        content: `A história do marxismo demonstra que uma teoria inicialmente concentrada na crítica da economia política acabou influenciando investigações muito mais amplas.

A produção material permaneceu importante, mas tornou-se necessário estudar como as instituições culturais, os meios de comunicação, a educação e a linguagem participam da organização da sociedade.

Gramsci demonstrou a importância da hegemonia.

A Escola de Frankfurt investigou a cultura de massas e os mecanismos psicológicos e sociais da dominação.

Kołakowski analisou criticamente a transformação histórica do marxismo e suas relações com o autoritarismo político.

A pesquisa contemporânea sobre linguagem e comunicação confirma que o enquadramento das informações pode influenciar julgamentos e atitudes.

Entretanto, a influência não equivale a controle absoluto.

A conclusão mais consistente é que **o poder social não se manifesta apenas no controle dos recursos econômicos ou das instituições políticas. Também envolve a capacidade de influenciar as categorias, os valores e as interpretações por meio das quais os indivíduos compreendem a realidade.**

A linguagem é uma dimensão importante desse processo, mas atua em conjunto com condições materiais, instituições, experiências e relações de poder.`
      }
    ,
      {
        number: '10',
        title: 'Estudos científicos especialmente relevantes para a investigação sobre linguagem',
        content: `1. John A. Lucy — relatividade linguística (2016)

Examina a relação entre linguagem e pensamento e apresenta uma avaliação crítica das pesquisas contemporâneas. A conclusão é que a linguagem influencia determinados processos cognitivos, e parte do pensamento.

2. Dennis Chong e James Druckman — teoria do enquadramento (2007)

Analisa como a maneira de apresentar informações pode influenciar a opinião pública.

3. Eran Amsalem e Alon Zoizner — meta-análise de efeitos de enquadramento (2022)

É especialmente importante porque reúne 138 experimentos. Encontrou efeitos médios sobre atitudes e emoções políticas, mas efeitos negligenciáveis sobre comportamento na análise agregada.

4. Phillip Wolff e Kevin Holmes — relatividade linguística (2011)`
      }
    ],
    conclusion: `A história do marxismo demonstra que uma teoria inicialmente concentrada na crítica da economia política acabou influenciando investigações muito mais amplas. A conclusão mais consistente é que o poder social não se manifesta apenas no controle dos recursos econômicos ou das instituições políticas: também envolve a capacidade de influenciar as categorias, os valores e as interpretações por meio das quais os indivíduos compreendem a realidade.`,
    bibliographicReferences: [
      'AMSALEM, Eran; ZOIZNER, Alon. Real, but Limited: A Meta-Analytic Assessment of Framing Effects in the Political Domain. British Journal of Political Science, 2022.',
      'ANDERSON, Perry. Considerations on Western Marxism. Londres: New Left Books, 1976.',
      'CALIL, Gilberto. Olavo de Carvalho e a hegemonia da reação no Brasil. Revista Argumentum, v. 13, n. 2, 2021.',
      'CHONG, Dennis; DRUCKMAN, James N. Framing Theory. Annual Review of Political Science, 2007.',
      'GRAMSCI, Antonio. Cadernos do Cárcere. 6 v. Rio de Janeiro: Civilização Brasileira, 1999-2002.',
      'HORKHEIMER, Max; ADORNO, Theodor W. Dialética do Esclarecimento. Rio de Janeiro: Zahar, 1985 [1947].',
      'KOŁAKOWSKI, Leszek. Main Currents of Marxism. 3 v. Oxford: Clarendon Press, 1978.',
      'LUCY, John A. Recent Advances in the Study of Linguistic Relativity in Historical Context. Language Learning, 2016.',
      'MARCUSE, Herbert. One-Dimensional Man. Boston: Beacon Press, 1964.',
      'WOLFF, Phillip; HOLMES, Kevin J. Linguistic Relativity. WIREs Cognitive Science, 2011.'
    ]
  }
};
