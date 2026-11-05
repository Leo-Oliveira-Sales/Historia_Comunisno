export interface IdeologiaHistorian {
  id: string;
  number: number;
  name: string;
  lifespan: string;
  category: 
    | 'História do pensamento político e das ideologias'
    | 'Iluminismo, liberalismo e democracia'
    | 'Socialismo, marxismo e comunismo'
    | 'Fascismo, nazismo e regimes totalitários'
    | 'Social-democracia, economia política e Estado de bem-estar'
    | 'Teoria do autoritarismo e regimes políticos';
  categoryRoman: 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI';
  expertise: string;
  referenceWorks: string[];
  mainContribution: string;
  keyQuote: string;
  relatedChapters: number[]; // e.g. [1, 2], [7, 8], etc.
}

export const IDEOLOGIAS_40_HISTORIANS: IdeologiaHistorian[] = [
  // =========================================================================
  // I. HISTÓRIA DO PENSAMENTO POLÍTICO E DAS IDEOLOGIAS (1 a 8)
  // =========================================================================
  {
    id: 'berlin-isaiah',
    number: 1,
    name: 'Isaiah Berlin',
    lifespan: '1909–1997',
    category: 'História do pensamento político e das ideologias',
    categoryRoman: 'I',
    expertise: 'História das ideias, liberdade negativa e positiva, Iluminismo e pluralismo de valores.',
    referenceWorks: ['Two Concepts of Liberty (1958)', 'The Roots of Romanticism (1999)', 'Four Essays on Liberty (1969)'],
    mainContribution: 'Formulou a distinção seminal entre liberdade negativa (ausência de coerção externa) e liberdade positiva (autodireção racional), alertando sobre como a última frequentemente foi pervertida por regimes autoritários em nome de uma vontade coletiva superior.',
    keyQuote: 'Pluralismo e o reconhecimento de que os valores humanos são múltiplos, frequentemente conflitantes e incomensuráveis entre si constituem o cerne da tolerância liberal.',
    relatedChapters: [1, 2, 9, 10]
  },
  {
    id: 'hobsbawm-eric',
    number: 2,
    name: 'Eric Hobsbawm',
    lifespan: '1917–2012',
    category: 'História do pensamento político e das ideologias',
    categoryRoman: 'I',
    expertise: 'História social contemporânea, ciclos revolucionários, expansão capitalista e o "Breve Século XX".',
    referenceWorks: ['A Era das Revoluções: 1789–1848', 'A Era do Capital: 1848–1875', 'A Era dos Impérios: 1875–1914', 'A Era dos Extremos: 1914–1991'],
    mainContribution: 'Desenvolveu o conceito analítico de "Dupla Revolução" (a Revolução Francesa política e a Revolução Industrial britânica econômica) que fundou o mundo ocidental moderno e estruturou os conflitos ideológicos universais.',
    keyQuote: 'As palavras são testemunhas que muitas vezes falam mais alto do que os documentos. Conceitos como indústria, fábrica, classe média, socialismo e nacionalismo foram todos forjados no caldeirão da dupla revolução.',
    relatedChapters: [2, 3, 5, 6, 10]
  },
  {
    id: 'arendt-hannah',
    number: 3,
    name: 'Hannah Arendt',
    lifespan: '1906–1975',
    category: 'História do pensamento político e das ideologias',
    categoryRoman: 'I',
    expertise: 'Origens do totalitarismo, anti-semitismo, imperialismo, poder, violência e a esfera pública.',
    referenceWorks: ['Origens do Totalitarismo (1951)', 'A Condição Humana (1958)', 'Eichmann em Jerusalém: Um Relato sobre a Banalidade do Mal (1963)'],
    mainContribution: 'Identificou o totalitarismo como uma forma de dominação inédita na história humana, que dissolve a política na ideologia e no terror policial onipresente, transformando indivíduos em massas desoladas e substituindo o fato empírico por ficções conspiratórias coerentes.',
    keyQuote: 'O objetivo da dominação totalitária não é simplesmente a opressão política, mas a destruição da própria espontaneidade humana e da faculdade de julgar e iniciar o novo.',
    relatedChapters: [6, 7, 8, 10]
  },
  {
    id: 'skinner-quentin',
    number: 4,
    name: 'Quentin Skinner',
    lifespan: '1940–',
    category: 'História do pensamento político e das ideologias',
    categoryRoman: 'I',
    expertise: 'História intelectual contextualista, Escola de Cambridge, republicanismo e atos de fala políticos.',
    referenceWorks: ['The Foundations of Modern Political Thought (1978)', 'Liberty Before Liberalism (1998)', 'Visions of Politics (2002)'],
    mainContribution: 'Pioneiro da virada contextualista na história das ideias políticas: textos canônicos devem ser lidos não como enigmas atemporais, mas como intervenções argumentativas intencionais dirigidas a disputas políticas e institucionais concretas do seu tempo.',
    keyQuote: 'Não podemos esperar aprender dos pensadores do passado a resposta para os nossos dilemas contemporâneos; o que aprendemos é como as próprias categorias do nosso pensamento foram contingencialmente construídas.',
    relatedChapters: [1, 2, 9, 10]
  },
  {
    id: 'pocock-j-g-a',
    number: 5,
    name: 'J. G. A. Pocock',
    lifespan: '1924–2023',
    category: 'História do pensamento político e das ideologias',
    categoryRoman: 'I',
    expertise: 'Tradição republicana atlântica, Maquiavel, virtude cívica e história do discurso político.',
    referenceWorks: ['The Machiavellian Moment (1975)', 'Virtue, Commerce, and History (1985)', 'Barbarism and Religion (1999–2015)'],
    mainContribution: 'Demonstrou a persistência da linhagem do republicanismo clássico cívico (focado na virtude, participação cidadã e oposição à corrupção) confrontando e antecedendo a hegemonia do paradigma liberal puramente contratualista e possessivo.',
    keyQuote: 'O momento maquiaveliano ocorre quando a república descobre sua própria mortalidade histórica e busca nas virtudes cívicas de seus cidadãos a única defesa contra a entropia da tirania.',
    relatedChapters: [1, 2, 9, 10]
  },
  {
    id: 'wolin-sheldon',
    number: 6,
    name: 'Sheldon Wolin',
    lifespan: '1922–2015',
    category: 'História do pensamento político e das ideologias',
    categoryRoman: 'I',
    expertise: 'Teoria política crítica, democracia fugitiva, poder corporativo e "totalitarismo invertido".',
    referenceWorks: ['Politics and Vision: Continuity and Innovation in Western Political Thought (1960)', 'Democracy Incorporated (2008)'],
    mainContribution: 'Analisou a constante tensão entre "a política" (instituições burocráticas estatais que gerenciam a ordem) e "o político" (momentos disruptivos de emancipação democrática direta), alertando sobre o esvaziamento tecnocrático da cidadania nas democracias liberais tardias.',
    keyQuote: 'A democracia não é uma forma estática de governo ou um conjunto de regras procedimentais; é um momento recorrente e fugaz de insurgência popular coletiva.',
    relatedChapters: [1, 2, 9, 10]
  },
  {
    id: 'bobbio-norberto',
    number: 7,
    name: 'Norberto Bobbio',
    lifespan: '1909–2004',
    category: 'História do pensamento político e das ideologias',
    categoryRoman: 'I',
    expertise: 'Filosofia do direito, teoria democrática, liberal-socialismo e a dicotomia Direita/Esquerda.',
    referenceWorks: ['Liberalismo e Democracia (1985)', 'Direita e Esquerda (1994)', 'O Futuro da Democracia (1984)', 'Teoria Geral da Política (1999)'],
    mainContribution: 'Articulou a síntese fundamental entre garantias liberais (Estado de Direito e direitos fundamentais de defesa) e método democrático (sufrágio universal e soberania popular), estabelecendo a igualdade como critério divisor supremo entre Esquerda e Direita.',
    keyQuote: 'O critério que melhor distingue a esquerda da direita é a atitude diferente diante da ideia de igualdade: para a esquerda os homens são mais iguais do que desiguais; para a direita, as desigualdades naturais e sociais prevalecem.',
    relatedChapters: [2, 5, 9, 10]
  },
  {
    id: 'aron-raymond',
    number: 8,
    name: 'Raymond Aron',
    lifespan: '1905–1983',
    category: 'História do pensamento político e das ideologias',
    categoryRoman: 'I',
    expertise: 'Sociologia política, relações internacionais, crítica lúcida ao totalitarismo e defesas da democracia liberal.',
    referenceWorks: ['Democracia e Totalitarismo (1965)', 'O Ópio dos Intelectuais (1955)', 'Paz e Guerra entre as Nações (1962)'],
    mainContribution: 'Desmistificou as ilusões teleológicas das vanguardas revolucionárias do século XX através do método sociológico comparado de regimes, contrastando o constitucional-pluralista das democracias com o partido monopolista totalitário.',
    keyQuote: 'A ideologia totalitária promete um paraíso futuro inalcançável para justificar as crueldades mais intoleráveis e imediatas do presente.',
    relatedChapters: [6, 7, 8, 9, 10]
  },

  // =========================================================================
  // II. ILUMINISMO, LIBERALISMO E DEMOCRACIA (9 a 14)
  // =========================================================================
  {
    id: 'israel-jonathan',
    number: 9,
    name: 'Jonathan Israel',
    lifespan: '1946–',
    category: 'Iluminismo, liberalismo e democracia',
    categoryRoman: 'II',
    expertise: 'Iluminismo Radical, Spinoza, materialismo filosófico e as origens intelectuais da democracia secular.',
    referenceWorks: ['Radical Enlightenment: Philosophy and the Making of Modernity 1650–1750 (2001)', 'Enlightenment Contested (2006)', 'Democratic Enlightenment (2011)'],
    mainContribution: 'Redefiniu o estudo do Iluminismo dividindo-o em duas correntes: o "Iluminismo Moderado" (Locke, Voltaire, Montesquieu, conservando alianças com a monarquia e a fé) e o "Iluminismo Radical" (spinozista, monista e igualitário, gerador dos direitos universais e do republicanismo democrático moderno).',
    keyQuote: 'Foi a corrente radical do Iluminismo — e não a sua variante moderada e acomodada às cortes — que produziu os pilares normativos dos direitos humanos universais, da igualdade de gênero e da democracia representativa laica.',
    relatedChapters: [1, 2, 10]
  },
  {
    id: 'himmelfarb-gertrude',
    number: 10,
    name: 'Gertrude Himmelfarb',
    lifespan: '1922–2019',
    category: 'Iluminismo, liberalismo e democracia',
    categoryRoman: 'II',
    expertise: 'Iluminismo britânico vs. continental, moralidade vitoriana e conservadorismo liberal.',
    referenceWorks: ['The Roads to Modernity: The British, French, and American Enlightenments (2004)', 'Victorian Values (1995)', 'On Looking into the Abyss (1994)'],
    mainContribution: 'Contrastou a abordagem abstrata e voluntarista do Iluminismo francês (revolucionário e jacobino) com a "Sociologia da Virtude" e o pragmatismo institucional do Iluminismo britânico (Adam Smith, David Hume, Edmund Burke) e americano.',
    keyQuote: 'Enquanto o Iluminismo francês entronizou a Deusa Razão com fúria teórica, os pensadores britânicos priorizaram os sentimentos morais, o comércio pacífico e o tecido comunitário das afeições humanas.',
    relatedChapters: [1, 2, 3, 10]
  },
  {
    id: 'rawls-john',
    number: 11,
    name: 'John Rawls',
    lifespan: '1921–2002',
    category: 'Iluminismo, liberalismo e democracia',
    categoryRoman: 'II',
    expertise: 'Filosofia política analítica, justiça como equidade, liberalismo igualitário e razão pública.',
    referenceWorks: ['A Theory of Justice (1971)', 'Political Liberalism (1993)', 'The Law of Peoples (1999)', 'Justice as Fairness: A Restatement (2001)'],
    mainContribution: 'Reavivou a teoria contratualista moderna através do experimento mental da "Posição Original" sob o "Véu da Ignorância", formulando os dois princípios de justiça: máxima liberdade básica igual para todos e princípio da diferença (desigualdades só se justificam se beneficiarem os menos favorecidos).',
    keyQuote: 'A justiça é a primeira virtude das instituições sociais, assim como a verdade o é dos sistemas de pensamento. Cada pessoa possui uma inviolabilidade fundada na justiça que nem o bem-estar de toda a sociedade pode atropelar.',
    relatedChapters: [1, 2, 9, 10]
  },
  {
    id: 'hayek-friedrich',
    number: 12,
    name: 'Friedrich Hayek',
    lifespan: '1899–1992',
    category: 'Iluminismo, liberalismo e democracia',
    categoryRoman: 'II',
    expertise: 'Escola Austríaca de Economia, ordem espontânea (catallaxy), epistemologia e crítica ao socialismo planejado.',
    referenceWorks: ['The Road to Serfdom (1944)', 'The Constitution of Liberty (1960)', 'Law, Legislation and Liberty (1973–1979)', 'The Fatal Conceit (1988)'],
    mainContribution: 'Demonstrou que o conhecimento econômico relevante é disperso, tácito e impossível de ser centralizado por planejadores estatais; o mecanismo de preços de mercado atua como um sistema descentralizado de sinais indispensável para a coordenação social livre.',
    keyQuote: 'A curiosa tarefa da ciência econômica é demonstrar aos homens quão pouco eles realmente sabem sobre aquilo que imaginam poder desenhar e planejar a partir de cima.',
    relatedChapters: [2, 3, 9, 10]
  },
  {
    id: 'dahl-robert',
    number: 13,
    name: 'Robert Dahl',
    lifespan: '1915–2014',
    category: 'Iluminismo, liberalismo e democracia',
    categoryRoman: 'II',
    expertise: 'Ciência política empírica, teoria democrática pluralista, poliarquia e participação cívica.',
    referenceWorks: ['Polyarchy: Participation and Opposition (1971)', 'A Preface to Democratic Theory (1956)', 'Democracy and Its Critics (1989)', 'On Democracy (1998)'],
    mainContribution: 'Cunhou e consolidou o conceito empírico de "Poliarquia" para descrever regimes democráticos reais em larga escala: sistemas abertos à oposição pacífica, com competição eleitoral justa, liberdade associativa e múltiplos centros de poder.',
    keyQuote: 'Uma das características fundamentais da democracia real é a capacidade contínua do governo de responder às preferências dos seus cidadãos, considerados como iguais políticos.',
    relatedChapters: [2, 9, 10]
  },
  {
    id: 'freeden-michael',
    number: 14,
    name: 'Michael Freeden',
    lifespan: '1944–',
    category: 'Iluminismo, liberalismo e democracia',
    categoryRoman: 'II',
    expertise: 'Teoria morfológica das ideologias políticas, análise semântica e história conceitual.',
    referenceWorks: ['Ideologies and Political Theory: A Conceptual Approach (1996)', 'The New Liberalism (1978)', 'Liberal Languages (2005)', 'Ideology: A Very Short Introduction (2003)'],
    mainContribution: 'Criou a teoria morfológica das ideologias: ideologias não são delírios falsos, mas constelações conceituais estruturadas onde conceitos nucleares (liberdade, igualdade, ordem, autoridade) são organizados e "descontestados" para guiar a ação política.',
    keyQuote: 'As ideologias políticas funcionam como mapas cognitivos: elas removem a ambiguidade inerente da linguagem política para conferir sentido prático e direcionar a decisão coletiva.',
    relatedChapters: [1, 2, 4, 5, 9, 10]
  },

  // =========================================================================
  // III. SOCIALISMO, MARXISMO E COMUNISMO (15 a 22)
  // =========================================================================
  {
    id: 'kolakowski-leszek',
    number: 15,
    name: 'Leszek Kołakowski',
    lifespan: '1927–2009',
    category: 'Socialismo, marxismo e comunismo',
    categoryRoman: 'III',
    expertise: 'História do marxismo, filosofia crítica, dissidência do bloco oriental e esatologia secular.',
    referenceWorks: ['Main Currents of Marxism: Its Rise, Growth and Dissolution (3 vols., 1976–1978)', 'The Presence of Myth (1972)', 'Modernity on Endless Trial (1990)'],
    mainContribution: 'Autor da mais monumental obra de referência crítica sobre a evolução do marxismo, rastreando suas raízes dialéticas desde os neoplatônicos e messianismos religiosos até a burocratização totalitária estalinista.',
    keyQuote: 'O marxismo começou como a maior tentativa filosófica de emancipar o homem da alienação e terminou na institucionalização do aparato coercitivo mais despótico do mundo contemporâneo.',
    relatedChapters: [4, 5, 6, 10]
  },
  {
    id: 'stedman-jones-gareth',
    number: 16,
    name: 'Gareth Stedman Jones',
    lifespan: '1942–',
    category: 'Socialismo, marxismo e comunismo',
    categoryRoman: 'III',
    expertise: 'História do socialismo operário britânico, pensamento político de Karl Marx e linguagem de classe.',
    referenceWorks: ['Karl Marx: Greatness and Illusion (2016)', 'Languages of Class (1983)', 'An End to Poverty? (2004)'],
    mainContribution: 'Desconstruiu a mitologia do "Marx canônico" construída pelo marxismo-leninismo da Terceira Internacional, resgatando a trajetória de Marx como um filósofo do século XIX inserido nas querelas pós-hegelianas e desapontamentos revolucionários europeus.',
    keyQuote: 'Marx não descobriu as leis inexoráveis do destino humano; ele foi um intelectual do século XIX dilacerado entre a paixão pela filosofia alemã e os dilemas da economia política industrial.',
    relatedChapters: [3, 4, 5, 6]
  },
  {
    id: 'avineri-shlomo',
    number: 17,
    name: 'Shlomo Avineri',
    lifespan: '1933–2023',
    category: 'Socialismo, marxismo e comunismo',
    categoryRoman: 'III',
    expertise: 'Filosofia política de Hegel e Karl Marx, socialismo democrático e sionismo.',
    referenceWorks: ['The Social and Political Thought of Karl Marx (1968)', 'Hegel’s Theory of the Modern State (1972)', 'Moses Hess: Prophet of Communism and Zionism (1985)'],
    mainContribution: 'Evidenciou a matriz hegeliana original de Marx contra leituras deterministas econômicas cruas, demonstrando que a teoria da práxis marxiana visava a emancipação da alienação da sociedade civil e não o culto ao Estado autoritário.',
    keyQuote: 'Para o jovem Marx, o problema da sociedade moderna não residia simplesmente na desigualdade material de renda, mas na alienação fundamental que submetia o homem às coisas criadas pelo seu próprio trabalho.',
    relatedChapters: [4, 5, 6, 10]
  },
  {
    id: 'mclellan-david',
    number: 18,
    name: 'David McLellan',
    lifespan: '1940–',
    category: 'Socialismo, marxismo e comunismo',
    categoryRoman: 'III',
    expertise: 'Biografia intelectual de Karl Marx, marxismo ocidental e correntes do socialismo europeu.',
    referenceWorks: ['Karl Marx: His Life and Thought (1973)', 'Marxism After Marx (1979)', 'The Thought of Karl Marx (1971)', 'The Young Hegelians and Karl Marx (1969)'],
    mainContribution: 'Elaborou a mais lida biografia analítica de Marx no mundo acadêmico de língua inglesa, mapeando a evolução textual dos Manuscritos Econômico-Filosóficos de 1844 até O Capital e os debates da Primeira Internacional.',
    keyQuote: 'A genialidade de Marx residiu na capacidade de fundir a dialética hegeliana, a economia política clássica britânica e a tradição revolucionária socialista francesa em um arcabouço teórico formidável.',
    relatedChapters: [3, 4, 5, 6]
  },
  {
    id: 'anderson-perry',
    number: 19,
    name: 'Perry Anderson',
    lifespan: '1938–',
    category: 'Socialismo, marxismo e comunismo',
    categoryRoman: 'III',
    expertise: 'História comparada do absolutismo, marxismo ocidental, transição do feudalismo e conjuntura geopolítica.',
    referenceWorks: ['Considerations on Western Marxism (1976)', 'Lineages of the Absolutist State (1974)', 'Passages from Antiquity to Feudalism (1974)', 'The Origins of Postmodernity (1998)'],
    mainContribution: 'Mapeou o desvio do marxismo ocidental após 1920: derrotado na esfera da revolução política prática, o marxismo europeu (Lukács, Korsch, Gramsci, Escola de Frankfurt) refugiou-se na teoria cultural, epistemologia e crítica da ideologia.',
    keyQuote: 'O marxismo ocidental nasceu da derrota das revoluções proletárias na Europa central; seu divórcio da prática das massas obrigou-o a falar a linguagem complexa da filosofia acadêmica.',
    relatedChapters: [4, 5, 6, 10]
  },
  {
    id: 'service-robert',
    number: 20,
    name: 'Robert Service',
    lifespan: '1947–',
    category: 'Socialismo, marxismo e comunismo',
    categoryRoman: 'III',
    expertise: 'História do comunismo global, biografias de Lenin, Stalin e Trotsky e Revolução Russa.',
    referenceWorks: ['Comrades! A History of World Communism (2007)', 'Lenin: A Biography (2000)', 'Stalin: A Biography (2004)', 'Trotsky: A Biography (2009)'],
    mainContribution: 'Investigou a transição da teoria leninista de vanguarda conspiratória para a estrutura institucional repressiva dos regimes comunistas mundiais na Europa Oriental, China, Cuba e Ásia.',
    keyQuote: 'O comunismo atraiu milhões de pessoas com sua promessa secular de justiça universal e fraternidade, mas seu código genético partidário subordinava tudo à manutenção implacável do monopólio do poder.',
    relatedChapters: [5, 6, 10]
  },
  {
    id: 'furet-francois',
    number: 21,
    name: 'François Furet',
    lifespan: '1927–1997',
    category: 'Socialismo, marxismo e comunismo',
    categoryRoman: 'III',
    expertise: 'Historiografia crítica da Revolução Francesa, mito jacobino e paixão comunista do século XX.',
    referenceWorks: ['The Passing of an Illusion: The Idea of Communism in the Twentieth Century (1995)', 'Interpreting the French Revolution (1978)', 'Marx and the French Revolution (1986)'],
    mainContribution: 'Rompeu com a ortodoxia marxista sobre a Revolução Francesa e o comunismo, demonstrando que a paixão revolucionária do século XX foi impulsionada pela sedução da ideia moral jacobina de regeneração total da humanidade.',
    keyQuote: 'A ilusão do comunismo não foi um simples erro cognitivo, mas uma paixão moral arrebatadora nascida da própria sociedade democrática e da sua incapacidade de conviver pacificamente com suas imperfeições.',
    relatedChapters: [2, 5, 6, 10]
  },
  {
    id: 'fitzpatrick-sheila',
    number: 22,
    name: 'Sheila Fitzpatrick',
    lifespan: '1941–',
    category: 'Socialismo, marxismo e comunismo',
    categoryRoman: 'III',
    expertise: 'História social soviética "a partir de baixo", mobilidade social operária e vida cotidiana revolucionária.',
    referenceWorks: ['The Russian Revolution (1982)', 'Everyday Stalinism (1999)', 'Tear off the Masks! Identity and Imposture in Twentieth-Century Russia (2005)'],
    mainContribution: 'Liderou a Escola Revisionista na história do socialismo real, revelando como trabalhadores e camponeses negociaram, acomodaram-se e instrumentalizaram as políticas e retóricas ideológicas soviéticas para ascensão social pessoal.',
    keyQuote: 'A história do comunismo não pode ser resumida aos ditames do Politburo; ela foi vivida por cidadãos comuns que aprenderam a falar o jargão bolchevique para garantir pão, teto e dignidade.',
    relatedChapters: [5, 6, 10]
  },

  // =========================================================================
  // IV. FASCISMO, NAZISMO E REGIMES TOTALITÁRIOS (23 a 32)
  // =========================================================================
  {
    id: 'payne-stanley-g',
    number: 23,
    name: 'Stanley G. Payne',
    lifespan: '1934–',
    category: 'Fascismo, nazismo e regimes totalitários',
    categoryRoman: 'IV',
    expertise: 'História comparada do fascismo europeu, franquismo e regimes autoritários ibéricos.',
    referenceWorks: ['A History of Fascism, 1914–1945 (1995)', 'Fascism: Comparison and Definition (1980)', 'The Franco Regime (1987)'],
    mainContribution: 'Elaborou a célebre "Matriz Tipológica de Payne" para definir o fascismo genérico através de três pilares: negações fascistas (antiliberalismo, anticomunismo, anticonservadorismo tradicional), ideologia e objetivos (império, regeneração ultranacionalista) e estilo de liderança/mobilização estética de massa.',
    keyQuote: 'O fascismo deve ser compreendido como uma revolução de direita inovadora e secular, que rejeita tanto a ordem parlamentar liberal quanto a utopia internacionalista comunista.',
    relatedChapters: [7, 8, 10]
  },
  {
    id: 'griffin-roger',
    number: 24,
    name: 'Roger Griffin',
    lifespan: '1948–',
    category: 'Fascismo, nazismo e regimes totalitários',
    categoryRoman: 'IV',
    expertise: 'Teoria do consenso sobre o fascismo, ultranacionalismo palingenético e modernismo político.',
    referenceWorks: ['The Nature of Fascism (1991)', 'Modernism and Fascism (2007)', 'Fascism: An Oxford Reader (1995)'],
    mainContribution: 'Formulou a mais influente definição de fascismo adotada pela historiografia contemporânea (o "mínimo fascista"): uma forma de ideologia política cujo núcleo mítico é o ultranacionalismo palingenético (mito do renascimento nacional após decadência profunda).',
    keyQuote: 'O fascismo é um gênero de ideologia política cujo núcleo mítico em suas várias permutações é uma forma palingenética de ultranacionalismo populista.',
    relatedChapters: [7, 8, 10]
  },
  {
    id: 'paxton-robert-o',
    number: 25,
    name: 'Robert O. Paxton',
    lifespan: '1932–',
    category: 'Fascismo, nazismo e regimes totalitários',
    categoryRoman: 'IV',
    expertise: 'Fascismo em ação, regime de Vichy na França, alianças conservadoras e tomada do poder.',
    referenceWorks: ['The Anatomy of Fascism (2004)', 'Vichy France: Old Guard and New Order (1972)', 'Europe in the Twentieth Century (1975)'],
    mainContribution: 'Demonstrou que o fascismo deve ser analisado não apenas pelos seus textos doutrinários originais, mas pelo seu ciclo pragmático de ação em 5 estágios: criação do movimento, enraizamento político, tomada do poder através de conluios com elites conservadoras, exercício do poder e radicalização bélica.',
    keyQuote: 'Nenhum movimento fascista chegou ao poder pelo simples voto popular nem pela revolução armada solitária; eles foram convidados ao poder por elites conservadoras tradicionais aterrorizadas pela esquerda.',
    relatedChapters: [7, 8, 10]
  },
  {
    id: 'gentile-emilio',
    number: 26,
    name: 'Emilio Gentile',
    lifespan: '1946–',
    category: 'Fascismo, nazismo e regimes totalitários',
    categoryRoman: 'IV',
    expertise: 'Fascismo italiano, religião política, culto à nação e sacralização da política.',
    referenceWorks: ['The Sacralization of Politics in Fascist Italy (1996)', 'Fascismo: Storia e Interpretazione (2002)', 'The Struggle for Modernity (2003)'],
    mainContribution: 'Pioneiro nos estudos do fascismo italiano como pioneiro histórico da "religião política": o partido-Estado monopolizou a liturgia pública, criou mártires, hinos e juramentos e transformou a nação e o Duce em divindades terrenas intocáveis.',
    keyQuote: 'O fascismo italiano foi o primeiro regime a institucionalizar a sacralização da política no século XX, integrando as massas numa comunhão laica e mística com o Estado soberano.',
    relatedChapters: [7, 8, 10]
  },
  {
    id: 'sternhell-zeev',
    number: 27,
    name: 'Zeev Sternhell',
    lifespan: '1935–2020',
    category: 'Fascismo, nazismo e regimes totalitários',
    categoryRoman: 'IV',
    expertise: 'Origens intelectuais francesas do fascismo, anti-iluminismo e convergência do sindicalismo revolucionário com o nacionalismo integral.',
    referenceWorks: ['Neither Right nor Left: Fascist Ideology in France (1983)', 'The Birth of Fascist Ideology (1989)', 'The Anti-Enlightenment Tradition (2006)'],
    mainContribution: 'Provou que a ideologia fascista não foi uma improvisação irracional pós-1918, mas amadureceu nas últimas décadas do século XIX a partir da síntese herética entre o sindicalismo revolucionário soreliano desiludido com o marxismo e o nacionalismo orgânico anti-iluminista.',
    keyQuote: 'O fascismo foi uma rejeição revolucionária da herança do Iluminismo e de 1789, buscando substituir a razão universal e os direitos individuais pela mística do sangue, do solo e da disciplina guerreira.',
    relatedChapters: [1, 7, 8, 10]
  },
  {
    id: 'kershaw-ian',
    number: 28,
    name: 'Ian Kershaw',
    lifespan: '1943–',
    category: 'Fascismo, nazismo e regimes totalitários',
    categoryRoman: 'IV',
    expertise: 'Biografia monumental de Adolf Hitler, estrutura do Terceiro Reich e o conceito de "Trabalhar em direção ao Führer".',
    referenceWorks: ['Hitler (2 vols.: Hubris, 1998; Nemesis, 2000)', 'The Nazi Dictatorship: Problems and Perspectives of Interpretation (1985)', 'The "Hitler Myth": Image and Reality in the Third Reich (1987)'],
    mainContribution: 'Resolveu o célebre debate historiográfico entre intencionalistas e estruturalistas sobre o nazismo introduzindo o mecanismo de "Trabalhar em direção ao Führer": a burocracia do Estado e o partido competiam radicalizando ordens tácitas de Hitler sem necessidade de decretos formais contínuos.',
    keyQuote: 'A autoridade carismática de Hitler funcionava de tal modo que funcionários e subordinados não esperavam ordens estritas: eles antecipavam a suposta vontade do Führer e competiam pela radicalização mais extrema de suas políticas.',
    relatedChapters: [7, 8, 10]
  },
  {
    id: 'evans-richard-j',
    number: 29,
    name: 'Richard J. Evans',
    lifespan: '1947–',
    category: 'Fascismo, nazismo e regimes totalitários',
    categoryRoman: 'IV',
    expertise: 'História exaustiva da Alemanha e do Terceiro Reich, metodologia histórica e crítica ao revisionismo.',
    referenceWorks: ['The Coming of the Third Reich (2003)', 'The Third Reich in Power (2005)', 'The Third Reich at War (2008)', 'In Defence of History (1997)'],
    mainContribution: 'Autor da mais abrangente e aclamada trilogia histórica moderna sobre o Terceiro Reich, documentando minuciosamente como as instituições de Weimar foram subvertidas, como o terror e a cumplicidade social se articularam e como a máquina de guerra nazista operou até a ruína total.',
    keyQuote: 'A ascensão de Hitler não foi inevitável; ela decorreu de uma série fatal de escolhas erradas tomadas por políticos conservadores míopes e da desintegração calamitosa do consenso civil sob a Grande Depressão.',
    relatedChapters: [7, 8, 10]
  },
  {
    id: 'friedlander-saul',
    number: 30,
    name: 'Saul Friedländer',
    lifespan: '1932–',
    category: 'Fascismo, nazismo e regimes totalitários',
    categoryRoman: 'IV',
    expertise: 'História do Holocausto, antissemitismo redentor e integração das vozes das vítimas à história política.',
    referenceWorks: ['Nazi Germany and the Jews (2 vols.: The Years of Persecution, 1997; The Years of Extermination, 2007)', 'When Memory Comes (1979)'],
    mainContribution: 'Formulou o conceito decisivo de "Antissemitismo Redentor": para os nazistas, o judeu não era simplesmente um adversário político ou econômico, mas um princípio de corrupção biológico-cósmica cuja destruição física era imaginada como condição sagrada para a sobrevivência da raça ariana.',
    keyQuote: 'O antissemitismo redentor fundiu o fanatismo religioso secularizado com o biologismo pseudocientífico moderno, transformando o genocídio na mais imperiosa das obrigações morais para o regime nazista.',
    relatedChapters: [8, 10]
  },
  {
    id: 'mosse-george-l',
    number: 31,
    name: 'George L. Mosse',
    lifespan: '1918–1999',
    category: 'Fascismo, nazismo e regimes totalitários',
    categoryRoman: 'IV',
    expertise: 'História cultural do nacionalismo e do fascismo, ideologia völkisch e a "Nova Política" estética.',
    referenceWorks: ['The Crisis of German Ideology: Intellectual Origins of the Third Reich (1964)', 'The Nationalization of the Masses (1975)', 'Toward the Final Solution (1978)'],
    mainContribution: 'Revelou as raízes míticas e estéticas do nacionalismo moderno: a "nacionalização das massas" ocorreu mediante festivais cívicos, monumentos solenes, símbolos patrióticos e culto à virilidade militar, criando o ambiente mental propício à adesão apaixonada ao nazismo.',
    keyQuote: 'O fascismo compreendeu antes de qualquer outra corrente que a política de massas do século XX não era disputada com silogismos racionais, mas com imagens teatrais, símbolos sagrados e paixões coletivas.',
    relatedChapters: [7, 8, 10]
  },
  {
    id: 'mann-michael',
    number: 32,
    name: 'Michael Mann',
    lifespan: '1942–',
    category: 'Fascismo, nazismo e regimes totalitários',
    categoryRoman: 'IV',
    expertise: 'Sociologia do poder, fascismo comparado, violência política e limpeza étnica.',
    referenceWorks: ['Fascists (2004)', 'The Sources of Social Power (4 vols., 1986–2013)', 'The Dark Side of Democracy: Explaining Ethnic Cleansing (2005)'],
    mainContribution: 'Propôs uma sociologia comparada rigorosa dos militantes fascistas na Itália, Alemanha, Romênia, Hungria e Espanha, definindo o fascismo como "a busca de um estatismo transcendente e paramilitarista através da purificação da nação".',
    keyQuote: 'Os fascistas foram homens modernos comprometidos com uma visão moral radical, dispostos a usar o paramilitarismo violento como ferramenta de higienização social contra tudo o que fragmentasse a integridade do Estado.',
    relatedChapters: [7, 8, 10]
  },

  // =========================================================================
  // V. SOCIAL-DEMOCRACIA, ECONOMIA POLÍTICA E ESTADO DE BEM-ESTAR (33 a 38)
  // =========================================================================
  {
    id: 'bernstein-eduard',
    number: 33,
    name: 'Eduard Bernstein',
    lifespan: '1850–1932',
    category: 'Social-democracia, economia política e Estado de bem-estar',
    categoryRoman: 'V',
    expertise: 'Pai do revisionismo marxista, transição democrática para o socialismo e reformismo institucional.',
    referenceWorks: ['Evolutionary Socialism: Die Voraussetzungen des Sozialismus und die Aufgaben der Sozialdemokratie (1899)'],
    mainContribution: 'Desafiou as profecias do colapso inevitável do capitalismo e da pauperização absoluta do proletariado, defendendo que o movimento socialista deveria abandonar a retórica do golpe insurrecional e concentrar-se nas conquistas graduais da democracia parlamentar, legislação trabalhista e cooperativas.',
    keyQuote: 'O objetivo final, seja ele qual for, nada significa para mim; o movimento em direção a uma sociedade mais justa e democrática é tudo.',
    relatedChapters: [5, 6, 9, 10]
  },
  {
    id: 'keynes-john-maynard',
    number: 34,
    name: 'John Maynard Keynes',
    lifespan: '1883–1946',
    category: 'Social-democracia, economia política e Estado de bem-estar',
    categoryRoman: 'V',
    expertise: 'Macroeconomia moderna, demanda agregada, política fiscal anticíclica e reconstrução monetária.',
    referenceWorks: ['The General Theory of Employment, Interest and Money (1936)', 'The Economic Consequences of the Peace (1919)', 'How to Pay for the War (1940)'],
    mainContribution: 'Revolucionou a ciência econômica ao refutar a Lei de Say (de que a oferta cria sua própria demanda): em recessões, a insuficiência da demanda agregada exige a intervenção ativa dos gastos do Estado para manter o pleno emprego, fornecendo o alicerce econômico do consenso social-democrata do pós-guerra.',
    keyQuote: 'As ideias dos economistas e filósofos políticos, tanto quando estão certas como quando estão erradas, são mais poderosas do que comumente se imagina. De fato, o mundo é governado por pouco mais além delas.',
    relatedChapters: [3, 9, 10]
  },
  {
    id: 'polanyi-karl',
    number: 35,
    name: 'Karl Polanyi',
    lifespan: '1886–1964',
    category: 'Social-democracia, economia política e Estado de bem-estar',
    categoryRoman: 'V',
    expertise: 'Economia substantiva, a falácia do mercado autorregulado e o "Duplo Movimento" protetor.',
    referenceWorks: ['The Great Transformation: The Political and Economic Origins of Our Time (1944)', 'Dahomey and the Slave Trade (1966)'],
    mainContribution: 'Demonstrou que a tentativa utilitarista do século XIX de transformar a terra, o trabalho e a moeda em "mercadorias fictícias" submetidas ao mercado autorregulado desestruturou o tecido social e gerou um contramovimento defensivo de proteção que culminou nos conflitos e totalitarismos do século XX.',
    keyQuote: 'Permitir que o mecanismo de mercado seja o único diretor do destino dos seres humanos e do seu meio natural resultaria na demolição da própria sociedade.',
    relatedChapters: [3, 4, 9, 10]
  },
  {
    id: 'eucken-walter',
    number: 36,
    name: 'Walter Eucken',
    lifespan: '1891–1950',
    category: 'Social-democracia, economia política e Estado de bem-estar',
    categoryRoman: 'V',
    expertise: 'Escola de Friburgo, Ordoliberalismo, ordem constitucional da concorrência e antimonopólio.',
    referenceWorks: ['Os Fundamentos da Economia Política: Die Grundlagen der Nationalökonomie (1940)', 'Grundsätze der Wirtschaftspolitik (1952)'],
    mainContribution: 'Fundador do Ordoliberalismo alemão: sustentou que o livre mercado não é um fenômeno natural espontâneo, mas uma ordem jurídica que deve ser constituída e protegida pelo Estado por meio de leis antitruste rigorosas e moeda estável para evitar cartéis privados que sufocam a liberdade.',
    keyQuote: 'O Estado deve zelar pelas regras do jogo econômico e pela concorrência leal de modo intransigente, abstendo-se de arbitrar os resultados particulares de cada jogador no mercado.',
    relatedChapters: [3, 9, 10]
  },
  {
    id: 'ropke-wilhelm',
    number: 37,
    name: 'Wilhelm Röpke',
    lifespan: '1899–1966',
    category: 'Social-democracia, economia política e Estado de bem-estar',
    categoryRoman: 'V',
    expertise: 'Economia Social de Mercado alemã, humanismo econômico, descentralização e limites do mercado.',
    referenceWorks: ['A Humane Economy: The Social Framework of the Free Market (1958)', 'The Social Crisis of Our Time (1942)', 'Civitas Humana (1944)'],
    mainContribution: 'Arquiteto intelectual do Milagre Econômico alemão (junto com Ludwig Erhard): defendeu que o mercado precisa de um quadro ético e comunitário exterior à lógica do lucro (família, comunidades locais, descentralização e redes de seguridade social) para ser moralmente sustentável.',
    keyQuote: 'O mercado não é o supremo tribunal de todos os valores morais da humanidade; se a sociedade perder seu senso de dever comunitário, solidariedade e justiça distributiva básica, a economia de mercado não sobreviverá.',
    relatedChapters: [3, 9, 10]
  },
  {
    id: 'sen-amartya',
    number: 38,
    name: 'Amartya Sen',
    lifespan: '1933–',
    category: 'Social-democracia, economia política e Estado de bem-estar',
    categoryRoman: 'V',
    expertise: 'Economia do bem-estar social, abordagem das capacitações (capabilities), liberdades fundamentais e teoria da justiça.',
    referenceWorks: ['Development as Freedom (1999)', 'Poverty and Famines: An Essay on Entitlement and Deprivation (1981)', 'The Idea of Justice (2009)'],
    mainContribution: 'Prêmio Nobel de Economia de 1998: redefiniu o desenvolvimento econômico e a justiça social como o processo de expansão das liberdades substantivas e das capacidades reais das pessoas, comprovando que fomes coletivas ocorrem por falhas institucionais e ausência de democracia, jamais por mera escassez absoluta de alimentos.',
    keyQuote: 'O desenvolvimento deve ser visto como a expansão das liberdades reais que as pessoas desfrutam para perseguir aquilo que têm razão para valorizar.',
    relatedChapters: [9, 10]
  },

  // =========================================================================
  // VI. TEORIA DO AUTORITARISMO E REGIMES POLÍTICOS (39 a 40)
  // =========================================================================
  {
    id: 'linz-juan',
    number: 39,
    name: 'Juan Linz',
    lifespan: '1926–2013',
    category: 'Teoria do autoritarismo e regimes políticos',
    categoryRoman: 'VI',
    expertise: 'Tipologia comparada de regimes, autoritarismo vs. totalitarismo, colapso de democracias e presidencialismo.',
    referenceWorks: ['Totalitarian and Authoritarian Regimes (2000)', 'The Breakdown of Democratic Regimes (1978)', 'Problems of Democratic Transition and Consolidation (1996)'],
    mainContribution: 'Estabeleceu a distinção sociológica fundamental entre regimes totalitários (ideologia elaborada que guia tudo, mobilização de massa constante, controle total da sociedade) e regimes autoritários (pluralismo político limitado e não responsável, mentalidades difusas sem ideologia elaborada e despolitização social deliberada).',
    keyQuote: 'Os regimes autoritários distinguem-se dos totalitários não pelo grau de benevolência, mas pela sua dependência de um pluralismo limitado e pela sua relutância em manter as massas mobilizadas em frenesi permanente.',
    relatedChapters: [6, 7, 8, 9, 10]
  },
  {
    id: 'friedrich-carl-j',
    number: 40,
    name: 'Carl J. Friedrich',
    lifespan: '1901–1984',
    category: 'Teoria do autoritarismo e regimes políticos',
    categoryRoman: 'VI',
    expertise: 'Modelo clássico do totalitarismo (síndrome dos 6 traços), constitucionalismo e teoria do Estado.',
    referenceWorks: ['Totalitarian Dictatorship and Autocracy (com Zbigniew Brzezinski, 1956)', 'Constitutional Government and Democracy (1941)', 'Man and His Government (1963)'],
    mainContribution: 'Formulou com Brzezinski o canônico modelo conceitual da "Síndrome Totalitária" com 6 traços interdependentes: 1. Ideologia totalizante; 2. Partido único liderado por um ditador; 3. Sistema de terror policial; 4. Monopólio das comunicações de massa; 5. Monopólio dos armamentos; 6. Economia centralizada e controlada burocraticamente.',
    keyQuote: 'A ditadura totalitária não é o retorno a tiranias antigas, mas um produto inteiramente moderno e tecnológico que visa a reconstrução compulsória da própria natureza humana.',
    relatedChapters: [6, 7, 8, 10]
  }
];

export const getHistoriansByCategory = (category: IdeologiaHistorian['category']): IdeologiaHistorian[] => {
  return IDEOLOGIAS_40_HISTORIANS.filter(h => h.category === category);
};

export const getHistoriansForChapter = (chapterNumber: number): IdeologiaHistorian[] => {
  return IDEOLOGIAS_40_HISTORIANS.filter(h => h.relatedChapters.includes(chapterNumber));
};
