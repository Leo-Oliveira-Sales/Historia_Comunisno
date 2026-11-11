import React, { useState } from 'react';
import { ScrollText, Calendar, BookOpen, Quote, ShieldCheck, MapPin, Copy, Check, Sparkles } from 'lucide-react';
import { DetailedHistoricalEpisode } from '../types/dossier';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

interface NewChronicle {
  id: string;
  num: number;
  title: string;
  subtitle: string;
  paragraphs: string[];
  reflectionLabel?: string;
  reflection: string;
  references: string[];
}

export const Topic111ChroniclesView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState<boolean>(false);

  // ACERVO ORIGINAL PRESERVADO INTEGRALMENTE
  const originalChronology = [
    { date: '1 de outubro de 1949', event: 'Proclamação da República Popular da China por Mao Tsé-Tung', significance: 'Vitória comunista sobre o Kuomintang e criação do maior Estado marxista-leninista populacional do globo.' },
    { date: '25 de junho de 1950', event: 'Invasão da Coreia do Sul pela Coreia do Norte de Kim Il-Sung', significance: 'Guerra da Coreia com apoio militar e caças secretos soviéticos pilotados por instrutores russos em combate direto.' },
    { date: '1 de janeiro de 1959', event: 'Triunfo da Revolução Cubana de Fidel Castro', significance: 'Queda de Fulgêncio Batista e rápida conversão de Cuba em bastião estratégico e militar soviético no Hemisfério Ocidental.' },
    { date: '1958–1962', event: 'O Grande Salto Adiante na China de Mao', significance: 'A coletivização forçada e a siderurgia de quintal causam a maior fome da história humana, vitimando de 30 a 45 milhões de pessoas.' },
    { date: '17 de abril de 1975', event: 'Tomada de Phnom Penh pelo Khmer Vermelho de Pol Pot', significance: 'Início da utopia agrária totalitária no Camboja, culminando no massacre de um quarto de toda a população nos "Killing Fields".' }
  ];

  const originalEpisode: DetailedHistoricalEpisode = {
    title: 'Os Campos da Morte do Tuol Sleng (S-21): O Delírio Agrário de Pol Pot',
    location: 'Escola Secundária Tuol Svay Prey, Phnom Penh, Camboja',
    narrative: `Em 17 de abril de 1975, guerrilheiros do Khmer Vermelho liderados por Saloth Sar (Pol Pot) marcharam sobre Phnom Penh. Em 72 horas, sob a justificativa de que um bombardeio americano era iminente, toda a população urbana de 2,5 milhões de pessoas foi expulsa a pé para os arrozais do campo: hospitais foram esvaziados à força e pacientes operados caminhavam empurrando seus próprios suportes de soro até morrerem na poeira das estradas. O regime proclamou o "Ano Zero", aboliu o dinheiro, a propriedade privada, os telefones, as escolas e as famílias.

Na capital deserta, a antiga escola secundária Tuol Svay Prey foi convertida na prisão secreta de tortura S-21 (Tuol Sleng), chefiada pelo sádico ex-professor de matemática Kaing Guek Eav (conhecido pelo codinome "Duch"). No local, mais de 18.000 pessoas — intelectuais, médicos, professores, pessoas que usavam óculos (acusadas de serem "parasitas burgueses letrados") e membros do próprio partido sob suspeita de traição — foram fotografadas de frente e de perfil com números de arquivo no peito antes de serem torturadas sistematicamente com choques elétricos e afogamento para confessarem que eram "espiões da CIA e da KGB".

Após assinarem confissões forjadas delirantes, os prisioneiros eram transportados à noite em caminhões até o pomar de Choeung Ek (os infames "Killing Fields"), onde eram forçados a se ajoelhar à beira de fossas comuns e executados não com balas (para economizar munição), mas com pancadas de barras de ferro e pás na base do crânio. Entre 1975 e 1979, o delírio utópico do Khmer Vermelho exterminou entre 1,7 e 2,2 milhões de cambojanos — quase um quarto de toda a população da nação.`,
    eyewitnessOrDocQuote: 'Destruir você não é nenhuma perda; preservar você não traz nenhum proveito.',
    quoteAuthor: 'Lema oficial da Angkar (Organização Central do Khmer Vermelho) repetido aos prisioneiros'
  };

  // NOVOS CONTEÚDOS INSERIDOS NA ÍNTEGRA (11 CRÔNICAS + NOTA EDITORIAL)
  const newChronicles: NewChronicle[] = [
    {
      id: 'cronica-1',
      num: 1,
      title: 'A REVOLUÇÃO QUE PRETENDIA TRANSFORMAR A NATUREZA HUMANA',
      subtitle: 'China, 1958–1962: o Grande Salto Adiante',
      paragraphs: [
        'Em 1958, a China entrou em uma das experiências mais ambiciosas de transformação econômica e social do século XX. Sob a liderança de Mao Zedong, o governo anunciou que o país poderia superar rapidamente seu atraso econômico e alcançar as principais potências industriais.',
        'A promessa era grandiosa: industrializar o campo, multiplicar a produção agrícola, mobilizar milhões de trabalhadores e construir uma sociedade socialista capaz de demonstrar a superioridade de seu modelo político.',
        'As comunas populares passaram a reorganizar a vida de milhões de camponeses. A produção agrícola foi submetida a metas estabelecidas pelo Estado, enquanto pequenas unidades industriais improvisadas, conhecidas por seus fornos de quintal, simbolizavam a tentativa de acelerar a industrialização.',
        'Entretanto, entre a propaganda e a realidade abriu-se um abismo.',
        'Os dirigentes locais tinham incentivos para anunciar resultados extraordinários. Informações sobre a produção eram frequentemente exageradas, e os números apresentados às autoridades centrais não correspondiam necessariamente à quantidade real de alimentos disponíveis.',
        'O sistema político dificultava a transmissão de notícias negativas. Reconhecer o fracasso podia significar demonstrar deslealdade à revolução.',
        'Enquanto isso, o Estado continuava requisitando alimentos com base em informações distorcidas. Em diversas regiões, os camponeses perderam o controle sobre parte substancial de sua produção, e a escassez tornou-se uma tragédia nacional.',
        'A fome de 1959–1961 provocou milhões de mortes. As estimativas variam consideravelmente entre os pesquisadores, conforme os métodos demográficos e documentais utilizados.',
        'O Grande Salto Adiante demonstrou como uma política econômica submetida à ambição ideológica, à pressão administrativa e à ausência de mecanismos efetivos de correção podia produzir consequências catastróficas.',
        'A tragédia não foi simplesmente resultado de uma natureza hostil ou de uma colheita ruim. Foi agravada por decisões políticas, mecanismos coercitivos de aquisição de alimentos e pela incapacidade institucional de reconhecer e corrigir os erros.'
      ],
      reflection: 'Quando a fidelidade a um projeto político se torna mais importante do que a realidade, a própria capacidade de governar pode ser destruída. A experiência chinesa demonstra os perigos da concentração decisória e da transformação de metas ideológicas em obrigações administrativas incontestáveis.',
      references: [
        'Frank Dikötter — Mao\'s Great Famine (2010).',
        'Yang Jisheng — Tombstone.',
        'Roderick MacFarquhar — The Origins of the Cultural Revolution.'
      ]
    },
    {
      id: 'cronica-2',
      num: 2,
      title: 'QUANDO A REVOLUÇÃO PASSOU A JULGAR SEUS PRÓPRIOS FILHOS',
      subtitle: 'China, 1966–1976: a Revolução Cultural',
      paragraphs: [
        'Em 1966, a China iniciou uma campanha que pretendia combater os chamados elementos burgueses e preservar a pureza revolucionária do socialismo.',
        'Mao Zedong convocou a população, especialmente os jovens, a participar de uma transformação política e cultural. Os Guardas Vermelhos passaram a ocupar posição central nesse movimento.',
        'Escolas e universidades foram profundamente afetadas. Professores, intelectuais, dirigentes partidários e funcionários públicos passaram a ser acusados de defender ideias contrárias à revolução.',
        'A crítica política transformou-se em perseguição pública. Reuniões de denúncia, humilhações coletivas e agressões tornaram-se instrumentos de intimidação.',
        'Livros, monumentos, objetos religiosos e referências culturais tradicionais foram atacados em nome da destruição dos chamados Quatro Velhos: velhos costumes, velha cultura, velhos hábitos e velhas ideias.',
        'A campanha ultrapassou rapidamente os limites de uma reforma cultural. As disputas políticas passaram a produzir conflitos entre diferentes grupos revolucionários, inclusive entre aqueles que afirmavam defender Mao.',
        'O próprio Partido Comunista foi atingido pela radicalização. Dirigentes que haviam participado da construção do Estado socialista passaram a ser acusados de traição e revisionismo.',
        'A violência política revelou uma contradição profunda: uma revolução que afirmava combater hierarquias antigas produziu novas formas de autoridade e perseguição.',
        'A Revolução Cultural terminou politicamente com a morte de Mao, em 1976, e com a derrota do chamado Grupo dos Quatro.',
        'Seu legado permaneceu profundamente controverso na sociedade chinesa.'
      ],
      reflection: 'A Revolução Cultural demonstra como a mobilização política permanente pode destruir instituições que deveriam garantir estabilidade, educação e administração pública. Quando a discordância passa a ser interpretada como traição, a sociedade perde espaços legítimos para o debate.',
      references: [
        'Roderick MacFarquhar e Michael Schoenhals — Mao\'s Last Revolution (2006).',
        'Frank Dikötter — The Cultural Revolution: A People\'s History, 1962–1976 (2016).',
        'Andrew G. Walder — China Under Mao: A Revolution Derailed (2015).'
      ]
    },
    {
      id: 'cronica-3',
      num: 3,
      title: 'O PAÍS QUE QUIS RECOMEÇAR DO ZERO',
      subtitle: 'Camboja, 1975–1979: Pol Pot e o Khmer Vermelho',
      paragraphs: [
        'Em abril de 1975, as forças do Khmer Vermelho entraram em Phnom Penh. O regime de Lon Nol havia sido derrotado, e os revolucionários proclamavam o início de uma nova sociedade.',
        'A capital foi esvaziada. Hospitais, residências e ruas foram abandonados por ordem das novas autoridades. Milhares de famílias receberam a determinação de deixar a cidade, muitas vezes sob a justificativa de que precisavam escapar dos bombardeios ou colaborar com a reorganização nacional.',
        'A população urbana foi enviada para o campo.',
        'O novo governo, denominado Democratic Kampuchea, pretendia construir uma sociedade agrária radicalmente transformada. O dinheiro, os mercados, as instituições tradicionais e diversas formas de organização social foram eliminados ou profundamente modificados.',
        'A vida cotidiana passou a ser controlada por estruturas revolucionárias. Famílias foram separadas, crianças foram incorporadas a organizações coletivas e o trabalho agrícola tornou-se obrigatório.',
        'A educação, a religião e a cultura foram submetidas a uma ideologia que identificava antigas estruturas sociais como obstáculos à revolução.',
        'O regime também perseguiu antigos funcionários públicos, militares, intelectuais, religiosos, minorias étnicas e pessoas suspeitas de deslealdade.',
        'A prisão S-21, em Phnom Penh, tornou-se um dos símbolos mais conhecidos do sistema de terror. Pessoas eram interrogadas, submetidas à tortura e frequentemente executadas após a produção de confissões forçadas.',
        'Entre 1975 e 1979, aproximadamente 1,5 a 2 milhões de pessoas morreram em consequência de execuções, fome, doenças, trabalho forçado e outras formas de violência.',
        'A experiência cambojana representou uma tentativa extrema de reorganização social pela destruição das estruturas anteriores.',
        'Em dezembro de 1978, o Vietnã invadiu o Camboja. Em janeiro de 1979, Phnom Penh foi tomada, encerrando o governo de Pol Pot.',
        'A queda do regime não encerrou imediatamente a violência nem resolveu os conflitos políticos do país.'
      ],
      reflection: 'A experiência cambojana demonstra os riscos de projetos revolucionários que procuram reconstruir integralmente a sociedade por meio da eliminação de instituições, identidades e relações humanas consideradas incompatíveis com uma concepção ideológica de perfeição social.',
      references: [
        'Ben Kiernan — The Pol Pot Regime (2008).',
        'David Chandler — Voices from S-21 (1999).',
        'Elizabeth Becker — When the War Was Over.'
      ]
    },
    {
      id: 'cronica-4',
      num: 4,
      title: 'A REVOLUÇÃO QUE SE VOLTOU CONTRA SEUS ADVERSÁRIOS INTERNOS',
      subtitle: 'Etiópia, 1974–1978: o Derg e o Terror Vermelho',
      paragraphs: [
        'Em 1974, uma revolução derrubou o imperador Haile Selassie, encerrando séculos de monarquia etíope.',
        'O movimento que contribuiu para a queda do imperador era heterogêneo. Militares, estudantes, trabalhadores e diferentes organizações políticas participaram da crise que desestabilizou o antigo regime.',
        'O poder acabou concentrado no Derg, um conselho militar que passou a governar o país.',
        'Sob a liderança de Mengistu Haile Mariam, o governo adotou o marxismo-leninismo e estabeleceu relações estreitas com a União Soviética.',
        'A revolução prometia acabar com as desigualdades sociais, transformar a estrutura agrária e construir um Estado socialista.',
        'Entretanto, a disputa entre organizações revolucionárias tornou-se cada vez mais violenta.',
        'O Partido Revolucionário do Povo Etíope (EPRP) e outros grupos passaram a confrontar o governo militar. O Derg respondeu com uma campanha de repressão conhecida como Terror Vermelho.',
        'Prisões, execuções e desaparecimentos atingiram estudantes, militantes, opositores e pessoas consideradas inimigas do regime.',
        'As ruas de algumas cidades foram marcadas pela exposição pública de cadáveres, numa tentativa de intimidar a população e demonstrar a capacidade coercitiva do Estado.',
        'A violência não ficou restrita às estruturas centrais do governo. Organizações locais, milícias e agentes políticos também participaram do processo repressivo.',
        'A Etiópia enfrentava simultaneamente conflitos internos, guerras regionais, dificuldades econômicas e disputas internacionais relacionadas à Guerra Fria.',
        'A revolução que prometia libertar a população das estruturas tradicionais acabou construindo um sistema político no qual a oposição podia representar uma ameaça à própria sobrevivência.'
      ],
      reflection: 'O caso etíope demonstra que movimentos revolucionários podem transformar antigos adversários em inimigos permanentes. A concentração do poder militar e a ausência de garantias políticas favoreceram a transformação da disputa ideológica em violência institucional.',
      references: [
        'Bahru Zewde — estudos sobre a história contemporânea da Etiópia.',
        'Jacob Wiebel — pesquisas sobre o Terror Vermelho.',
        'Atrocities in Revolutionary Ethiopia, 1974–79: Towards a Comparative Analysis.'
      ]
    },
    {
      id: 'cronica-5',
      num: 5,
      title: 'O PAÍS ONDE O ESTADO OBSERVAVA TUDO',
      subtitle: 'Coreia do Norte: a dinastia Kim e a construção de um sistema fechado',
      paragraphs: [
        'Após a divisão da península coreana e a Guerra da Coreia, a República Popular Democrática da Coreia consolidou um sistema político altamente centralizado.',
        'Kim Il-sung construiu sua autoridade sobre a vitória revolucionária, a resistência contra o domínio japonês e a defesa da independência nacional.',
        'Com o passar dos anos, o Estado desenvolveu uma estrutura política baseada na supremacia do Partido dos Trabalhadores da Coreia, na liderança pessoal e no culto à personalidade.',
        'A ideologia Juche passou a ocupar posição central no discurso oficial. A independência nacional, a autossuficiência e a lealdade ao dirigente foram apresentadas como princípios fundamentais da organização política.',
        'A sucessão de Kim Il-sung por seu filho Kim Jong-il, em 1994, e posteriormente por Kim Jong-un, consolidou uma dinastia política incomum entre os regimes oficialmente socialistas.',
        'A população passou a viver sob um sistema de vigilância, controle informacional e restrições severas à circulação de pessoas e ideias.',
        'O Estado manteve campos de prisioneiros políticos e outras estruturas de detenção. Relatórios internacionais documentaram tortura, execuções, trabalho forçado e perseguição sistemática.',
        'Na década de 1990, o país enfrentou uma grave crise alimentar, conhecida oficialmente como Marcha Árdua.',
        'A fome provocou uma catástrofe humanitária. A deterioração da economia, os problemas agrícolas, as mudanças no apoio externo e as decisões políticas contribuíram para a crise.',
        'Milhares de pessoas tentaram escapar do país, enfrentando riscos de prisão, deportação e punição.',
        'A Coreia do Norte tornou-se um dos exemplos mais extremos de fechamento político e controle estatal da sociedade contemporânea.'
      ],
      reflection: 'A experiência norte-coreana demonstra como a combinação entre isolamento, concentração do poder, controle da informação e sucessão dinástica pode produzir um sistema político de extraordinária resistência à transformação institucional.',
      references: [
        'Comissão de Inquérito da ONU — relatório A/HRC/25/63 (2014).',
        'Stephan Haggard e Marcus Noland — Famine in North Korea (2007).',
        'Bradley K. Martin — Under the Loving Care of the Fatherly Leader (2004).',
        'Andrei Lankov — estudos sobre a história da Coreia do Norte.'
      ]
    },
    {
      id: 'cronica-6',
      num: 6,
      title: 'OS QUE PARTIRAM PELO MAR',
      subtitle: 'Vietnã, 1975 em diante: campos de reeducação e Boat People',
      paragraphs: [
        'Em abril de 1975, Saigon caiu diante das forças comunistas do Vietnã do Norte.',
        'A reunificação do país encerrou uma longa guerra, mas inaugurou uma nova etapa de reorganização política e social.',
        'O governo passou a integrar as estruturas do antigo Vietnã do Sul ao novo Estado socialista.',
        'Antigos militares, funcionários públicos e integrantes da administração sul-vietnamita foram enviados para campos de reeducação.',
        'A duração do internamento variou. Algumas pessoas permaneceram detidas por períodos relativamente curtos; outras passaram anos em campos, submetidas a trabalho obrigatório e programas de reeducação política.',
        'As consequências atingiram também as famílias. A ausência de informações sobre os detidos, a perda de rendimentos e as restrições impostas aos antigos integrantes do regime derrotado produziram dificuldades sociais duradouras.',
        'Paralelamente, milhares de vietnamitas começaram a deixar o país.',
        'Alguns fugiam por razões políticas. Outros procuravam escapar da insegurança econômica, das restrições sociais ou das consequências da reorganização do país.',
        'Muitas famílias embarcaram em pequenas embarcações, atravessando o Mar da China Meridional em condições extremamente perigosas.',
        'Esses refugiados ficaram conhecidos internacionalmente como Boat People.',
        'A travessia podia significar naufrágios, fome, desidratação e ataques de piratas. Aqueles que sobreviviam frequentemente chegavam a campos de refugiados em países do Sudeste Asiático.',
        'A diáspora vietnamita espalhou-se por diferentes continentes, construindo comunidades que preservaram memórias distintas da guerra e da reunificação.',
        'A história do Vietnã após 1975 revela uma dimensão frequentemente esquecida das revoluções: a transformação política não termina quando o conflito militar acaba.'
      ],
      reflection: 'A vitória militar de uma revolução não elimina automaticamente as tensões sociais e políticas. A experiência vietnamita demonstra como a reorganização de um Estado pode produzir novas formas de exclusão, deslocamento e conflito.',
      references: [
        'Nathalie Nguyen — estudos sobre os campos de reeducação.',
        'Yến Lê Espiritu — Body Counts (2014).',
        'Tuan Hoang — pesquisas sobre a diáspora vietnamita.'
      ]
    },
    {
      id: 'cronica-7',
      num: 7,
      title: 'A REVOLUÇÃO DEPOIS DA INDEPENDÊNCIA',
      subtitle: 'Angola, 1975–1977: o MPLA e o 27 de Maio',
      paragraphs: [
        'Em novembro de 1975, Angola conquistou sua independência de Portugal.',
        'O processo, entretanto, foi marcado por disputas entre movimentos nacionalistas que haviam combatido o colonialismo português.',
        'O MPLA assumiu o controle do governo, enquanto a FNLA e a UNITA disputavam o poder em um cenário de guerra civil e intervenção internacional.',
        'A independência não significou o início imediato de uma ordem política estável.',
        'O novo governo procurou consolidar o Estado, organizar suas forças armadas e estabelecer um projeto político de orientação marxista-leninista.',
        'As disputas internas dentro do próprio MPLA tornaram-se cada vez mais intensas.',
        'Em 27 de maio de 1977, ocorreu uma mobilização política que permanece objeto de controvérsia histórica. As interpretações divergem sobre a natureza do movimento, sua liderança e o grau de organização de uma tentativa de golpe.',
        'O governo respondeu com uma campanha repressiva de grandes proporções.',
        'Prisões, torturas, execuções e desaparecimentos atingiram integrantes do movimento, militares, dirigentes e pessoas suspeitas de simpatia pelos dissidentes.',
        'A repressão ultrapassou os participantes diretos dos acontecimentos e produziu um ambiente de medo que marcou a sociedade angolana durante anos.',
        'Famílias procuraram informações sobre parentes desaparecidos, enquanto a memória do episódio permaneceu cercada de silêncio e disputas políticas.',
        'A reconstrução histórica do 27 de Maio exige confrontar versões oficiais, testemunhos de sobreviventes e pesquisas independentes.'
      ],
      reflection: 'O episódio demonstra que a conquista da independência não garante, por si só, pluralismo político ou liberdade de oposição. A construção de um Estado nacional pode ser acompanhada por disputas internas nas quais o poder revolucionário procura eliminar adversários em nome da estabilidade e da unidade nacional.',
      references: [
        'Lara Pawson — In the Name of the People (2014).',
        'Giselda Brito Silva — pesquisa sobre o MPLA e a repressão de 27 de maio de 1977.'
      ]
    },
    {
      id: 'cronica-8',
      num: 8,
      title: 'A SOCIEDADE QUE DEVERIA SER REEDUCADA',
      subtitle: 'Moçambique, 1975–1980: FRELIMO e os campos de reeducação',
      paragraphs: [
        'Em 1975, Moçambique tornou-se independente de Portugal.',
        'A FRELIMO, que havia liderado a luta de libertação nacional, assumiu o governo e iniciou um projeto de transformação socialista.',
        'O novo Estado procurou reorganizar a economia, a educação, a saúde e as estruturas administrativas herdadas do colonialismo.',
        'A liderança revolucionária acreditava que a independência política deveria ser acompanhada por uma profunda transformação cultural e social.',
        'Nesse contexto, foram criados campos de reeducação destinados a pessoas consideradas incompatíveis com os valores da nova sociedade.',
        'Indivíduos classificados como criminosos, exploradores, opositores ou representantes de comportamentos considerados socialmente indesejáveis podiam ser enviados para esses espaços.',
        'O discurso oficial apresentava a reeducação como instrumento de transformação moral e política.',
        'Na experiência concreta, entretanto, muitos detidos enfrentaram coerção, restrição da liberdade e condições precárias.',
        'Em 1983, o governo promoveu a Operação Produção, que envolveu o deslocamento compulsório de pessoas das cidades para regiões rurais.',
        'A medida procurava reorganizar a população urbana e responder aos problemas econômicos e sociais, mas produziu novos sofrimentos e desestruturação familiar.',
        'Moçambique enfrentava também uma guerra civil que aprofundava a crise econômica e comprometia a capacidade do Estado.',
        'A história da FRELIMO mostra as dificuldades de transformar uma sociedade marcada pelo colonialismo e pela desigualdade sem reproduzir mecanismos autoritários de controle.'
      ],
      reflection: 'A construção de uma sociedade mais igualitária não elimina a necessidade de proteger a liberdade individual. A experiência moçambicana demonstra a tensão entre transformação social, planejamento estatal e coerção política.',
      references: [
        'Benedito Machava — “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique” (2019).',
        'Benedito Machava — The Morality of Revolution (2024).',
        'Carlos Quembo — estudos sobre a Operação Produção.'
      ]
    },
    {
      id: 'cronica-9',
      num: 9,
      title: 'A REVOLUÇÃO QUE MUDOU A VIDA DE MILHÕES, MAS NÃO ABRIU MÃO DO PODER',
      subtitle: 'Cuba, 1959 em diante: conquistas sociais e partido único',
      paragraphs: [
        'Em janeiro de 1959, as forças revolucionárias lideradas por Fidel Castro derrubaram a ditadura de Fulgencio Batista.',
        'A vitória revolucionária despertou enormes expectativas. Cuba iniciou um processo de transformação econômica, social e política que alteraria profundamente a estrutura do país.',
        'A reforma agrária modificou a propriedade rural. A campanha de alfabetização mobilizou professores e estudantes. A educação e a saúde foram ampliadas como instrumentos centrais do projeto revolucionário.',
        'A aproximação com a União Soviética tornou-se cada vez mais importante, especialmente depois do agravamento das relações com os Estados Unidos.',
        'A invasão da Baía dos Porcos, em 1961, e a crise dos mísseis de 1962 consolidaram a posição de Cuba no centro das tensões da Guerra Fria.',
        'Entretanto, enquanto o governo promovia reformas sociais, também concentrava o poder político.',
        'A oposição organizada enfrentou restrições crescentes. A imprensa independente foi limitada, organizações políticas foram controladas e dissidentes sofreram perseguição.',
        'A institucionalização do Partido Comunista como força dirigente consolidou um sistema de partido único.',
        'Ao longo das décadas, a população cubana experimentou simultaneamente avanços sociais importantes e limitações profundas à liberdade política.',
        'A emigração tornou-se uma característica marcante da história revolucionária, com diferentes ondas de saída motivadas por razões políticas, econômicas e familiares.',
        'O caso cubano exige uma análise que não transforme conquistas sociais em justificativa para a repressão, nem ignore os efeitos das sanções e da pressão externa sobre o desenvolvimento do país.'
      ],
      reflection: 'A experiência cubana mostra que políticas sociais abrangentes e concentração autoritária do poder podem coexistir. A avaliação histórica de uma revolução precisa considerar tanto seus resultados sociais quanto as liberdades políticas garantidas ou negadas à população.',
      references: [
        'Luis Martínez-Fernández — Revolutionary Cuba: A History.',
        'Marifeli Pérez-Stable — The Cuban Revolution: Origins, Course, and Legacy.',
        'Samuel Farber — estudos sobre a Revolução Cubana.'
      ]
    },
    {
      id: 'cronica-10',
      num: 10,
      title: 'A REVOLUÇÃO QUE ENFRENTOU SUA PRÓPRIA GUERRA',
      subtitle: 'Nicarágua, 1979–1990: os sandinistas e a guerra dos Contras',
      paragraphs: [
        'Em julho de 1979, a Revolução Sandinista derrubou a ditadura da família Somoza, que havia dominado a Nicarágua durante décadas.',
        'A vitória da Frente Sandinista de Libertação Nacional representou uma ruptura histórica.',
        'O novo governo iniciou reformas sociais, programas de alfabetização, reorganização econômica e políticas destinadas a reduzir as desigualdades herdadas da ditadura.',
        'A revolução despertou esperança entre amplos setores da população e recebeu apoio internacional de diferentes países e movimentos políticos.',
        'Entretanto, o projeto sandinista rapidamente se tornou parte de uma disputa geopolítica.',
        'Os Estados Unidos passaram a apoiar forças contrarrevolucionárias conhecidas como Contras, que combatiam militarmente o governo.',
        'A guerra provocou mortes, destruição econômica e deslocamentos populacionais.',
        'O governo sandinista também enfrentou críticas por restrições à imprensa, tensões com setores da oposição e conflitos envolvendo comunidades indígenas, especialmente os Miskito.',
        'O deslocamento de comunidades indígenas e as operações militares na região caribenha demonstraram as dificuldades do governo em conciliar seu projeto revolucionário com as reivindicações de autonomia local.',
        'A guerra, a crise econômica e o desgaste político contribuíram para a derrota eleitoral dos sandinistas em 1990.',
        'A Nicarágua entrou em uma nova fase política, marcada por negociações e tentativas de reconstrução institucional.'
      ],
      reflection: 'A Revolução Sandinista demonstra como uma revolução nacional pode ser condicionada por conflitos internacionais e, simultaneamente, enfrentar contradições internas relacionadas ao pluralismo, à autonomia comunitária e aos direitos políticos.',
      references: [
        'Thomas W. Walker — Nicaragua: Living in the Shadow of the Eagle.',
        'Yvon Grenier — estudos sobre a política nicaraguense.',
        'Relatórios de direitos humanos sobre a Nicarágua durante a década de 1980.'
      ]
    },
    {
      id: 'cronica-11',
      num: 11,
      title: 'A IDEOLOGIA, O ESTADO E O INDIVÍDUO',
      subtitle: 'Uma reflexão sobre os padrões de violência política no século XX',
      paragraphs: [
        'As experiências analisadas neste capítulo ocorreram em países diferentes, separados por continentes, culturas, trajetórias coloniais e estruturas econômicas.',
        'China, Camboja, Etiópia, Coreia do Norte, Vietnã, Angola, Moçambique, Cuba e Nicarágua não constituíram sistemas políticos idênticos.',
        'Alguns foram Estados socialistas consolidados. Outros surgiram de movimentos de libertação nacional, revoluções militares ou guerras civis.',
        'Entretanto, suas trajetórias permitem identificar mecanismos políticos que apareceram repetidamente.',
        'O primeiro foi a concentração do poder. A centralização das decisões em uma liderança ou organização política reduziu a capacidade de fiscalização independente.',
        'O segundo foi a identificação entre partido, Estado e revolução. Em determinados contextos, a crítica ao governo passou a ser apresentada como oposição à própria nação ou à transformação social.',
        'O terceiro foi a construção de categorias de inimigos internos. Supostos contrarrevolucionários, revisionistas, sabotadores e traidores passaram a ser utilizados como justificativa para medidas repressivas.',
        'O quarto foi a utilização de estruturas administrativas para organizar a coerção. Prisões, campos de trabalho, sistemas de vigilância, organizações de segurança e campanhas de mobilização tornaram-se instrumentos de controle social.',
        'O quinto foi a dificuldade de corrigir decisões políticas equivocadas. Quando a autoridade central se torna praticamente incontestável, informações negativas podem ser ocultadas e erros administrativos podem transformar-se em tragédias nacionais.',
        'Esses mecanismos não apareceram com a mesma intensidade nem produziram os mesmos resultados em todos os países estudados.',
        'A fome chinesa, o genocídio cambojano, o Terror Vermelho etíope, os campos norte-coreanos, os campos de reeducação vietnamitas, a repressão angolana, os campos moçambicanos e as restrições políticas em Cuba e na Nicarágua precisam ser compreendidos em seus respectivos contextos históricos.',
        'Não se trata de afirmar que todas as experiências foram equivalentes, mas de investigar como projetos revolucionários podem transformar-se em estruturas de dominação quando o poder deixa de reconhecer limites institucionais e direitos individuais.',
        'A história do século XX mostra que nenhuma promessa de igualdade, emancipação ou progresso social deve ser considerada suficiente para justificar a supressão da dignidade humana.'
      ],
      reflectionLabel: 'Reflexão final:',
      reflection: 'A principal lição deste capítulo não é que todas as revoluções possuem o mesmo destino. É que nenhuma ideologia, independentemente de suas promessas, deve estar acima da investigação histórica, da responsabilidade política e dos direitos fundamentais dos indivíduos.',
      references: []
    }
  ];

  const editorialNoteParagraphs = [
    'As crônicas deste capítulo são textos de interpretação histórica elaborados com base na historiografia especializada e em acontecimentos documentados.',
    'Não são relatos autobiográficos, depoimentos literais ou reproduções de documentos de época.',
    'As referências bibliográficas indicadas ao final de cada crônica permitem aprofundar os acontecimentos, confrontar interpretações e consultar pesquisas especializadas.',
    'A narrativa procura preservar a complexidade histórica, evitando tanto a idealização dos projetos revolucionários quanto a redução de diferentes experiências nacionais a uma única explicação ideológica.'
  ];

  const copyFullChronicles = () => {
    let text = `# CRÔNICAS HISTÓRICAS\n`;
    text += `## COMUNISMO INTERNACIONAL: REGIMES, REVOLUÇÕES E CATÁSTROFES HUMANITÁRIAS\n\n`;
    text += `**Capítulo acadêmico nº 10 — História das Ideologias Políticas**\n\n`;
    text += `*Uma história sobre revoluções, promessas de transformação social, concentração do poder, perseguições políticas e experiências humanas sob regimes revolucionários.*\n\n`;
    text += `---\n\n`;

    text += `==========================================================\n`;
    text += `PARTE 1 — ACERVO HISTÓRICO ORIGINAL PRESERVADO INTEGRALMENTE\n`;
    text += `==========================================================\n\n`;

    text += `LINHA DO TEMPO CRONOLÓGICA (1949–1975):\n`;
    originalChronology.forEach(c => {
      text += `• [${c.date}] ${c.event} — ${c.significance}\n`;
    });
    text += `\nCRÔNICA OCULAR DO ACERVO ORIGINAL:\n`;
    text += `Título: ${originalEpisode.title}\n`;
    text += `Local: ${originalEpisode.location}\n\n`;
    text += `${originalEpisode.narrative}\n\n`;
    if (originalEpisode.eyewitnessOrDocQuote) {
      text += `"${originalEpisode.eyewitnessOrDocQuote}"\n— ${originalEpisode.quoteAuthor}\n\n`;
    }

    text += `==========================================================\n`;
    text += `PARTE 2 — NOVAS CRÔNICAS HISTÓRICAS E ANÁLISE COMPARADA\n`;
    text += `==========================================================\n\n`;

    newChronicles.forEach(c => {
      text += `# CRÔNICA ${c.num} — ${c.title}\n`;
      text += `### ${c.subtitle}\n\n`;
      c.paragraphs.forEach(p => {
        text += `${p}\n\n`;
      });
      text += `**${c.reflectionLabel || 'Reflexão histórica:'}**\n\n`;
      text += `${c.reflection}\n\n`;
      if (c.references && c.references.length > 0) {
        text += `**Referências para aprofundamento:**\n`;
        c.references.forEach(r => {
          text += `- ${r}\n`;
        });
        text += `\n`;
      }
      text += `---\n\n`;
    });

    text += `# NOTA EDITORIAL\n\n`;
    editorialNoteParagraphs.forEach(p => {
      text += `${p}\n\n`;
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto w-full box-border overflow-hidden">
      
      {/* 1. TOP BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                COLEÇÃO II — HISTÓRIA DAS IDEOLOGIAS POLÍTICAS
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                Capítulo Acadêmico nº 10
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100">
              Crônicas Históricas: O Comunismo Internacional
            </h1>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              Regimes, Revoluções e Catástrofes Humanitárias
            </p>
          </div>

          <button
            onClick={copyFullChronicles}
            className="px-3.5 py-2 min-h-[38px] bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar todas as crônicas na íntegra"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Crônicas Copiadas!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Acervo Integral</span>
              </>
            )}
          </button>
        </div>

        <p className="font-serif italic text-stone-300 text-xs sm:text-sm leading-relaxed border-l-2 border-amber-500/60 pl-3">
          Uma história sobre revoluções, promessas de transformação social, concentração do poder, perseguições políticas e experiências humanas sob regimes revolucionários.
        </p>

        {/* Badge de integridade e reestruturação */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-400 bg-[#121214] p-3 rounded-lg border border-stone-800">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Estrutura unificada: Acervo original preservado integralmente + 11 novas crônicas e nota editorial completa.
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PARTE 1 — ACERVO HISTÓRICO ORIGINAL PRESERVADO INTEGRALMENTE              */}
      {/* ========================================================================= */}
      <section className="space-y-6 pt-2">
        <div className="flex items-center gap-4 py-2">
          <div className="h-px bg-stone-700 flex-1" />
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-400 font-bold bg-[#161619] px-4 py-1.5 rounded-full border border-amber-600/40">
            PARTE 1 — ACERVO HISTÓRICO ORIGINAL PRESERVADO
          </span>
          <div className="h-px bg-stone-700 flex-1" />
        </div>

        {/* 1.1 Cronologia Passo a Passo */}
        <section id="stories-crono" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-5 shadow-md">
          <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
            <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                Passo a Passo Cronológico Documentado (1949–1975)
              </h3>
              <p className="text-xs text-stone-400 font-mono">
                Linha do tempo original das revoluções e intervenções do comunismo global
              </p>
            </div>
          </div>

          <div className="relative border-l-2 border-stone-800 ml-4 pl-6 space-y-6 pt-2">
            {originalChronology.map((item, cIdx) => (
              <div key={cIdx} className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-950 border-2 border-amber-500 group-hover:scale-125 transition-transform" />
                <div className="bg-[#121214] p-4 rounded-lg border border-stone-800/80 space-y-1.5 hover:border-stone-700 transition-colors">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-800/40">
                      {item.date}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-stone-100 pt-1">
                    {item.event}
                  </h4>
                  <p className="font-serif text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {item.significance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1.2 Crônica Ocular e Registro Documental Original */}
        <section id="stories-original-s21" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3 border-b border-stone-800 pb-2">
            <ScrollText className="w-5 h-5 text-amber-400 shrink-0" />
            <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
              Crônica Ocular e Registro Documental Arquivístico (Acervo Original)
            </h3>
          </div>

          <article className="bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
            <div className="flex items-start justify-between gap-3 flex-wrap border-b border-stone-800/80 pb-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                  REGISTRO ORIGINAL DOCUMENTADO
                </span>
                <h3 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>
                  {originalEpisode.title}
                </h3>
              </div>
              {originalEpisode.location && (
                <div className="flex items-center gap-1.5 text-xs font-mono text-stone-400 bg-stone-900 px-2.5 py-1 rounded border border-stone-800 shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{originalEpisode.location}</span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              {originalEpisode.narrative.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx} className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            {originalEpisode.eyewitnessOrDocQuote && (
              <div className="bg-[#121214] p-4 rounded-lg border-l-4 border-amber-500/80 space-y-2 mt-4 shadow-inner">
                <p className="font-serif italic text-stone-200 text-xs sm:text-sm leading-relaxed">
                  "{originalEpisode.eyewitnessOrDocQuote}"
                </p>
                {originalEpisode.quoteAuthor && (
                  <p className="text-[11px] font-mono text-amber-400 text-right">
                    — {originalEpisode.quoteAuthor}
                  </p>
                )}
              </div>
            )}
          </article>
        </section>
      </section>

      {/* ========================================================================= */}
      {/* PARTE 2 — NOVAS CRÔNICAS HISTÓRICAS E ANÁLISE COMPARADA (INTEGRAL)        */}
      {/* ========================================================================= */}
      <section className="space-y-8 pt-4">
        <div className="flex items-center gap-4 py-2">
          <div className="h-px bg-stone-700 flex-1" />
          <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-amber-400 font-bold bg-[#161619] px-4 py-1.5 rounded-full border border-amber-600/40 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            PARTE 2 — NOVAS CRÔNICAS HISTÓRICAS E ANÁLISE COMPARADA (11 CRÔNICAS)
          </span>
          <div className="h-px bg-stone-700 flex-1" />
        </div>

        {/* LISTA DAS 11 CRÔNICAS NA ÍNTEGRA */}
        <div className="space-y-8">
          {newChronicles.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="scroll-mt-24 bg-[#161619] p-5 sm:p-8 rounded-2xl border border-stone-800 space-y-6 shadow-xl"
            >
              {/* Header da Crônica */}
              <div className="border-b border-stone-800 pb-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                    CRÔNICA {c.num}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-300 uppercase tracking-wide">
                  CRÔNICA {c.num} — {c.title}
                </h2>
                <h3 className="text-sm sm:text-base font-serif italic text-stone-200">
                  {c.subtitle}
                </h3>
              </div>

              {/* Parágrafos da Narrativa */}
              <div className="space-y-3.5 font-serif text-stone-300">
                {c.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className={`text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Reflexão Histórica */}
              <div className="bg-[#121214] border-l-4 border-amber-500 p-5 rounded-r-xl space-y-2 shadow-inner">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block">
                  {c.reflectionLabel || 'Reflexão histórica:'}
                </span>
                <p className={`font-serif italic text-stone-200 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                  {c.reflection}
                </p>
              </div>

              {/* Referências para Aprofundamento */}
              {c.references && c.references.length > 0 && (
                <div className="bg-[#121214] p-4 sm:p-5 rounded-xl border border-stone-800/80 space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    Referências para aprofundamento:
                  </span>
                  <ul className="space-y-1.5 font-mono text-xs text-stone-300">
                    {c.references.map((ref, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{ref}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* NOTA EDITORIAL INTEGRAL */}
        <section
          id="stories-editorial-note"
          className="scroll-mt-24 bg-[#121214] border-2 border-amber-600/40 p-6 sm:p-8 rounded-2xl space-y-4 shadow-xl"
        >
          <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
            <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                NOTA EDITORIAL
              </h3>
              <p className="text-xs font-mono text-amber-400">
                Diretrizes de hermenêutica e metodologia de interpretação histórica
              </p>
            </div>
          </div>

          <div className="space-y-3 font-serif text-stone-300 text-justify leading-relaxed">
            {editorialNoteParagraphs.map((par, pIdx) => (
              <p key={pIdx} className={getFontSizeClass('body')}>
                {par}
              </p>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};
