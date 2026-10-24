import { HistorianProfile, HistoricalArchiveRepository } from '../types/dossier';

export const HISTORIANS_DATABASE: HistorianProfile[] = [
  {
    id: 'sheila-fitzpatrick',
    name: 'Sheila Fitzpatrick',
    institution: 'University of Chicago / University of Sydney',
    expertise: 'História social soviética, Revolução Russa, burocracia e vida cotidiana sob Stalin',
    keyWork: 'Everyday Stalinism: Ordinary Life in Extraordinary Times (1999) & The Russian Revolution (1982)',
    year: '1999',
    contribution: 'Pioneira da historiografia revisionista social soviética. Demonstrou como cidadãos comuns sobreviviam, negociavam e utilizavam as regras do sistema soviético (mercado negro, denúncias, apadrinhamento) para navegar o terror burocrático e a escassez material.',
    dossierTopicIds: [1, 4, 5, 18, 20],
    quote: 'O stalinismo não era apenas terror imposto de cima; tornou-se um modo de vida para milhões que aprenderam a "falar bolchevique" para sobreviver.'
  },
  {
    id: 'oleg-khlevniuk',
    name: 'Oleg V. Khlevniuk',
    institution: 'Arquivo Estatal da Federação Russa (GARF) / Higher School of Economics',
    expertise: 'Arquivos do Politburo, biografia de Stalin, mecanismo do Grande Terror e sistema Gulag',
    keyWork: 'The History of the Gulag (2004) & Stalin: New Biography of a Dictator (Yale University Press, 2015)',
    year: '2015',
    contribution: 'Principal autoridade russa sobre os arquivos de Stalin desclassificados após 1991. Comprovou o controle minucioso e diário exercido pessoalmente por Stalin sobre cotas de execuções, o Gulag e as listas de condenações do Politburo.',
    dossierTopicIds: [3, 11, 12, 13, 14],
    quote: 'Nenhum aspecto fundamental da repressão soviética ocorreu sem a ordem, conhecimento ou ratificação expressa de Stalin.'
  },
  {
    id: 'j-arch-getty',
    name: 'J. Arch Getty',
    institution: 'University of California, Los Angeles (UCLA)',
    expertise: 'Origens institucionais dos expurgos soviéticos, conflito centro-periferia e nomenklatura',
    keyWork: 'The Road to Terror: Stalin and the Self-Destruction of the Bolsheviks (Yale Annals of Communism, 1999)',
    year: '1999',
    contribution: 'Análise documental exaustiva dos arquivos do Comitê Central (RGASPI), demonstrando as lutas internas entre a liderança moscovita e as chefias provinciais que catalisaram a histeria repressiva da Ordem nº 00447.',
    dossierTopicIds: [2, 3, 13, 18],
    quote: 'O terror stalinista não foi fruto de demência inexplicável, mas de um sistema paranoico em que a conspiração era a linguagem primária da política.'
  },
  {
    id: 'r-w-davies',
    name: 'R. W. Davies',
    institution: 'University of Birmingham',
    expertise: 'História econômica soviética, industrialização, coletivização e planejamento central',
    keyWork: 'The Industrialisation of Soviet Russia (7 volumes) & The Years of Hunger: Soviet Agriculture 1931-1933 (com Wheatcroft, 2004)',
    year: '2004',
    contribution: 'Maior levantamento empírico-estatístico sobre a economia agrária soviética, detalhando tonelada a tonelada os confiscos de cereais, os saldos de exportação e a destruição da capacidade produtiva durante os planos quinquenais.',
    dossierTopicIds: [5, 12, 20],
    quote: 'As metas irracionais do Plano Quinquenal criaram um fosso entre os números propagandísticos e a realidade de carência de alimentos nas fazendas.'
  },
  {
    id: 'stephen-wheatcroft',
    name: 'Stephen G. Wheatcroft',
    institution: 'University of Melbourne',
    expertise: 'Demografia histórica russa e soviética, balanços de mortalidade do Gulag e das fomes de 1931-1933',
    keyWork: 'The Years of Hunger (2004) & Challenging Traditional Views of Russian History (2002)',
    year: '2004',
    contribution: 'Estabeleceu as estimativas demográficas quantitativas mais rigorosas baseadas nos censos soviéticos secretos de 1937 e 1939, demonstrando a mortalidade de 5 a 7 milhões nas fomes de 1931-1933 e os índices de morte nos campos do Gulag.',
    dossierTopicIds: [5, 11, 12],
    quote: 'Os arquivos desclassificados permitem afastar tanto a minimização ideológica quanto a inflação acrítica de números, ancorando o trauma em evidências documentais.'
  },
  {
    id: 'lynne-viola',
    name: 'Lynne Viola',
    institution: 'University of Toronto',
    expertise: 'Resistência camponesa, coletivização forçada, colonos especiais e perpetradores da NKVD',
    keyWork: 'Peasant Rebels Under Stalin (1996) & The Stalinist Perpetrators on Trial (Oxford University Press, 2017)',
    year: '2017',
    contribution: 'Descobriu e catalogou milhares de insurreições camponesas espontâneas contra a coletivização e analisou os interrogatórios e processos internos contra os próprios agentes operacionais da NKVD após a queda de Yezhov.',
    dossierTopicIds: [2, 3, 5, 11, 12],
    quote: 'Os camponeses não foram vítimas passivas: travaram uma guerra de resistência desesperada contra a guerra civil movida pelo Estado contra o campo.'
  },
  {
    id: 'anne-applebaum',
    name: 'Anne Applebaum',
    institution: 'London School of Economics / The Atlantic (Prêmio Pulitzer)',
    expertise: 'História do Gulag, Holodomor na Ucrânia e sovietização do Leste Europeu',
    keyWork: 'Gulag: A History (Prêmio Pulitzer 2004), Red Famine: Stalin\'s War on Ukraine (2017) & Iron Curtain (2012)',
    year: '2004',
    contribution: 'Síntese monumental com base nos testemunhos de sobreviventes e relatórios administrativos do NKVD, demonstrando que o Gulag e o bloqueio de alimentos na Ucrânia eram instrumentos centrais de pacificação política e subjugação nacional.',
    dossierTopicIds: [6, 11, 12, 14, 19],
    quote: 'O Gulag não era uma anomalia ou desvio do sistema soviético; era o próprio motor econômico e coercitivo que permitia ao regime existir.'
  },
  {
    id: 'sarah-cameron',
    name: 'Sarah Cameron',
    institution: 'University of Maryland',
    expertise: 'Fome no Cazaquistão (Asharshylyq), nomadismo e modernização forçada na Ásia Central',
    keyWork: 'The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan (Cornell University Press, 2018)',
    year: '2018',
    contribution: 'Pesquisa pioneira em arquivos cazaques e russos que tirou da obscuridade historiográfica a fome de 1930-1933 que matou um terço da população cazaque e destruiu violentamente o modo de vida nômade tradicional.',
    dossierTopicIds: [5, 12, 14],
    quote: 'A catástrofe no Cazaquistão foi uma das mais severas de todo o século XX, transformando forçadamente uma sociedade pastoral em súditos sedentários do Estado soviético.'
  },
  {
    id: 'andrea-graziosi',
    name: 'Andrea Graziosi',
    institution: 'Universidade de Nápoles Federico II / Harvard Ukrainian Research Institute',
    expertise: 'Guerra camponesa soviética, correspondências de Stalin e história comparada dos totalitarismos',
    keyWork: 'Histoire de l\'URSS (Presses Universitaires de France, 2010) & Letters from Kharkov: Famine in Ukraine (1989)',
    year: '2010',
    contribution: 'Descobridor dos relatórios consulares italianos em Kharkiv que registraram em tempo real o canibalismo e a fome de 1933. Analisou as cartas secretas de Stalin a Kaganovich evidenciando a intenção de subjugar a Ucrânia.',
    dossierTopicIds: [3, 8, 9, 12, 13],
    quote: 'As cartas de Stalin em agosto de 1932 provam que a fome não foi um mero erro de colheita, mas um ataque preventivo para esmagar o nacionalismo ucraniano.'
  },
  {
    id: 'hiroaki-kuromiya',
    name: 'Hiroaki Kuromiya',
    institution: 'Indiana University Bloomington',
    expertise: 'Grande Terror no Donbas, espionagem, fronteiras soviéticas com o Japão e a Polônia',
    keyWork: 'Freedom and Terror in the Donbas: A Ukrainian-Russian Borderland, 1870-1990 (Cambridge University Press, 1998) & Conscience on Trial (2012)',
    year: '1998',
    contribution: 'Estudou a penetração do terror policial stalinista na bacia do Donbas e nas fronteiras com a Manchúria e Polônia, demonstrando o pânico conspiratório do regime contra supostas redes de espionagem transfronteiriças.',
    dossierTopicIds: [3, 6, 13, 14, 15],
    quote: 'No Donbas, a fronteira operária transformou-se em laboratório do terror estalinista, onde a suspeita de sabotagem atingia qualquer trabalhador dissidente.'
  },
  {
    id: 'timothy-snyder',
    name: 'Timothy Snyder',
    institution: 'Yale University',
    expertise: 'História do Leste Europeu, totalitarismo comparado, Holocausto e políticas genocidas nazistas e stalinistas',
    keyWork: 'Bloodlands: Europe Between Hitler and Stalin (Basic Books, 2010) & Black Earth: The Holocaust as History and Warning (2015)',
    year: '2010',
    contribution: 'Cunhou o conceito seminal de "Terras de Sangue" (Polônia, Ucrânia, Bielorrússia, Bálticos), demonstrando que 14 milhões de civis foram deliberadamente assassinados por regimes totalitários nesse espaço geográfico comum entre 1933 e 1945.',
    dossierTopicIds: [6, 8, 12, 13, 14],
    quote: 'Hitler e Stalin não apenas competiram militarmente; seus regimes interagiram e intensificaram a violência assassina sobre os mesmos povos indefesos.'
  },
  {
    id: 'geoffrey-roberts',
    name: 'Geoffrey Roberts',
    institution: 'University College Cork / Royal Irish Academy',
    expertise: 'Diplomacia soviética, Segunda Guerra Mundial, relações Stalin-Churchill-Roosevelt e o Pacto de 1939',
    keyWork: 'Stalin\'s Wars: From World War to Cold War, 1939–1953 (Yale University Press, 2006) & Molotov: Stalin\'s Cold Warrior (2012)',
    year: '2006',
    contribution: 'Análise minuciosa dos arquivos diplomáticos do MID russo (AVP RF), documentando o cálculo geopolítico de Stalin ao assinar o Pacto com Hitler e a posterior reconstrução da coalizão antifascista com os Aliados ocidentais.',
    dossierTopicIds: [6, 8, 10, 15],
    quote: 'Stalin via a diplomacia como a continuação da guerra ideológica por outros meios, alternando pactos táticos com imperialistas e mobilização bélica total.'
  },
  {
    id: 'robert-o-paxton',
    name: 'Robert O. Paxton',
    institution: 'Columbia University',
    expertise: 'Fascismo europeu, regime de Vichy e tipologia de regimes autoritários e totalitários',
    keyWork: 'The Anatomy of Fascism (Alfred A. Knopf, 2004) & Vichy France: Old Guard and New Order (1972)',
    year: '2004',
    contribution: 'Definiu o fascismo não como ideologia abstrata, mas como comportamento político de paixões mobilizadoras, culto ao chefe, obsessão com declínio comunitário e uso de violência paramilitar contra inimigos internos e externos.',
    dossierTopicIds: [8, 9, 10],
    quote: 'O fascismo é uma forma de conduta política marcada pela preocupação obsessiva com a decadência da comunidade, a humilhação ou vitimização.'
  },
  {
    id: 'ian-kershaw',
    name: 'Ian Kershaw',
    institution: 'University of Sheffield / British Academy',
    expertise: 'Terceiro Reich, biografia de Adolf Hitler e dinâmica do totalitarismo europeu',
    keyWork: 'Hitler: Hubris and Nemesis (2 volumes, 1998-2000) & To Hell and Back: Europe 1914-1949 (Penguin, 2015)',
    year: '2000',
    contribution: 'Conceito de "trabalhar em direção ao Führer" e análise estrutural do Terceiro Reich, explorando os acordos diplomáticos e a guerra de aniquilação ideológica e biológica contra o "judaico-bolchevismo" na Frente Oriental.',
    dossierTopicIds: [8, 9, 10],
    quote: 'A invasão da União Soviética em 1941 foi concebida por Hitler não apenas como campanha militar convencional, mas como guerra de extermínio racial e ideológico.'
  },
  {
    id: 'richard-j-evans',
    name: 'Richard J. Evans',
    institution: 'University of Cambridge',
    expertise: 'História da Alemanha moderna, Terceiro Reich e a Segunda Guerra Mundial',
    keyWork: 'The Third Reich Trilogy: The Coming of the Third Reich, The Third Reich in Power, The Third Reich at War (Penguin, 2003-2008)',
    year: '2005',
    contribution: 'Trabalho definitivo sobre o nacional-socialismo que detalha os contatos comerciais secretos, a partilha da Polônia em 1939 e as atrocidades cometidas na retaguarda da Operação Barbarossa.',
    dossierTopicIds: [8, 9, 10, 13],
    quote: 'Os acordos comerciais teuto-soviéticos de 1939-1940 forneceram à Alemanha a gasolina de aviação e os metais raros essenciais para derrotar a França e bombardear a Grã-Bretanha.'
  },
  {
    id: 'frank-dikotter',
    name: 'Frank Dikötter',
    institution: 'University of Hong Kong / School of Oriental and African Studies (SOAS)',
    expertise: 'Comunismo asiático, Revolução Chinesa de Mao, fome e repressão de massas',
    keyWork: 'Mao\'s Great Famine (Prêmio Samuel Johnson 2011), The Tragedy of Liberation (2013) & The Cultural Revolution (2016)',
    year: '2011',
    contribution: 'Primeiro historiador ocidental a ter acesso irrestrito aos arquivos provinciais do Partido Comunista Chinês, demonstrando que pelo menos 45 milhões de pessoas morreram prematuramente no Grande Salto Adiante sob coerção violenta de Mao.',
    dossierTopicIds: [12, 16],
    quote: 'A coletivização na China de Mao transformou o alimento em arma: quem não trabalhava ou expressava descontentamento era privado de rações e deixado para morrer.'
  },
  {
    id: 'ben-kiernan',
    name: 'Ben Kiernan',
    institution: 'Yale University (Diretor do Genocide Studies Program)',
    expertise: 'Genocídio comparado, regime do Khmer Vermelho no Camboja e totalitarismo agrário',
    keyWork: 'The Pol Pot Regime: Race, Power, and Genocide in Cambodia under the Khmer Rouge (Yale University Press, 1996) & Blood and Soil (2007)',
    year: '1996',
    contribution: 'Mapeou as cadeias de comando e a ideologia racial e agrária do Kampuchea Democrático, documentando a morte de 1,7 a 2 milhões de cambojanos (um quarto da população do país) nos "Campos da Morte" entre 1975 e 1979.',
    dossierTopicIds: [11, 13, 16],
    quote: 'O Khmer Vermelho levou o dogma comunista da liquidação de classes ao extremo biológico e étnico, buscando refundar a sociedade a partir do "Ano Zero".'
  },
  {
    id: 'david-p-chandler',
    name: 'David P. Chandler',
    institution: 'Monash University',
    expertise: 'História do Camboja moderno, biografia de Pol Pot e arquivos da prisão secreta de Tuol Sleng (S-21)',
    keyWork: 'Brother Number One: A Political Biography of Pol Pot (Westview, 1992) & Voices from S-21: Terror and History in Pol Pot\'s Secret Prison (University of California Press, 1999)',
    year: '1999',
    contribution: 'Trabalho pericial com os arquivos confessionais da prisão secreta S-21 de Tuol Sleng, revelando o mecanismo burocrático de tortura e confissões forçadas idêntico aos Processos de Moscou stalinistas.',
    dossierTopicIds: [3, 13, 16],
    quote: 'Tuol Sleng funcionava como uma fábrica de confissões forjadas para justificar as alucinações de traição que consumiam a liderança do Khmer Vermelho.'
  }
];

export const ARCHIVES_DATABASE: HistoricalArchiveRepository[] = [
  {
    id: 'library-of-congress',
    name: 'Library of Congress — Revelations from the Russian Archives',
    institution: 'Library of Congress (Washington, D.C.) / Arquivos Centrais de Moscou',
    focus: 'Documentos secretos do Comitê Central do PCUS, KGB, ordem de Lenin contra a Igreja e correspondências do Politburo',
    description: 'Histórica exposição e digitalização conjunta realizada em 1992 após a abertura inicial dos arquivos soviéticos secretos. Contém documentos manuscritos de Lenin autorizando enforcamentos em Penza, a pilhagem de bens eclesiásticos e despachos da KGB.',
    notableCollections: [
      'Documentos da Comissão Extraordinária (Cheka / GPU)',
      'Ata secreta do Politburo de 1922 sobre a execução de padres e expropriação da Igreja Ortodoxa',
      'Relatórios internos sobre a Guerra Civil Espanhola e cooperação do Komintern',
      'Correspondência secreta entre Khrushchev e o Comitê Central'
    ],
    url: 'https://www.loc.gov/exhibits/archives/',
    relatedTopicIds: [1, 2, 4, 15, 17]
  },
  {
    id: 'wilson-center',
    name: 'Wilson Center — Digital Archive (Cold War International History Project)',
    institution: 'Woodrow Wilson International Center for Scholars (Washington, D.C.)',
    focus: 'Desclassificação internacional de documentos soviéticos, chineses e do Pacto de Varsóvia sobre a Guerra Fria',
    description: 'A principal referência mundial para documentos primários traduzidos do Bloco Soviético: atas do Politburo, gravações secretas das invasões da Hungria (1956) e Tchecoslováquia (1968), mensagens da Crise dos Mísseis e os despachos confidenciais sobre Chernobyl.',
    notableCollections: [
      'Coleção Chernobyl: relatórios médicos confidenciais do Politburo de abril/maio de 1986',
      'Coleção Katyn: memorando de Shelepin (KGB) a Kruschev de 1959',
      'Coleção Guerra da Coreia: telegramas cifrados entre Stalin, Mao Tsé-Tung e Kim Il-sung',
      'Coleção Invasão da Tchecoslováquia: atas secretas das reuniões de Brejnev em 1968'
    ],
    url: 'https://digitalarchive.wilsoncenter.org/',
    relatedTopicIds: [7, 13, 15, 16, 17, 19]
  },
  {
    id: 'yale-avalon',
    name: 'Yale University — The Avalon Project: Documents in Law, History and Diplomacy',
    institution: 'Lilian Goldman Law Library, Yale Law School (New Haven, CT)',
    focus: 'Tratados diplomáticos integrais, convenções internacionais e correspondências de política externa de 1917 a 1945',
    description: 'Repositório de direito internacional de Yale com a compilação completa "Nazi-Soviet Relations 1939-1941" (arquivos capturados do Ministério de Relações Exteriores da Alemanha), o texto de Brest-Litovsk de 1918 e o Tratado de Rapallo de 1922.',
    notableCollections: [
      'Nazi-Soviet Relations 1939-1941 (telegramas de Ribbentrop, Molotov e Schulenburg)',
      'Protocolo Secreto Adicional de 23 de agosto de 1939 (partilha da Polônia e Bálticos)',
      'Tratado de Amizade e Fronteiras de 28 de setembro de 1939',
      'Tratado de Rapallo de 16 de abril de 1922 (RSFSR e Alemanha)'
    ],
    url: 'https://avalon.law.yale.edu/sub_nazsov.asp',
    relatedTopicIds: [1, 6, 8, 10]
  },
  {
    id: 'nara-archives',
    name: 'National Archives and Records Administration (NARA)',
    institution: 'Governo Federal dos Estados Unidos (College Park, MD)',
    focus: 'Record Group 242 (Foreign Records Seized): Arquivos alemães capturados e documentos dos Julgamentos de Nuremberg',
    description: 'Contém os microfilmes originais capturados pelas forças armadas dos EUA em Berlim em 1945 com os registros do Auswärtiges Amt (Ministério dos Negócios Estrangeiros alemão), incluindo as minutas e mapas da partilha da Europa assinados por Stalin e Ribbentrop.',
    notableCollections: [
      'NARA RG 242: Microfilmes das pastas secretas de Joachim von Ribbentrop',
      'Mapas originais com a linha demarcatória de fronteira assinados à lápis por Stalin em setembro de 1939',
      'Registros de interrogatórios nos Julgamentos de Nuremberg de altos diplomatas alemães',
      'Relatórios de inteligência militar (OSS) sobre a ocupação soviética da Polônia'
    ],
    url: 'https://www.archives.gov/research/captured-german-records',
    relatedTopicIds: [6, 8, 10, 13]
  },
  {
    id: 'bundesarchiv',
    name: 'Bundesarchiv — Arquivo Federal Alemão',
    institution: 'República Federal da Alemanha (Koblenz e Berlim)',
    focus: 'Documentos estatais da República de Weimar, Terceiro Reich, República Democrática Alemã (RDA) e arquivos militares (BA-MA)',
    description: 'Guarda a documentação militar secreta das bases conjuntas em solo soviético na década de 1920 (escola de blindados de Kama em Kazan, Lipetsk e Tomka), os livros contábeis do comércio teuto-soviético e os arquivos do Partido Socialista Unificado da RDA (SED).',
    notableCollections: [
      'BA-MA RH 2: Arquivos da Reichswehr e correspondência do General Hans von Seeckt com Trotsky',
      'Registros de remessa de matérias-primas e petróleo da URSS para a Marinha de Guerra e Luftwaffe em 1940',
      'Arquivos do Ministério da Segurança do Estado da RDA (Stasi) e o levante operário de 17 de junho de 1953'
    ],
    url: 'https://www.bundesarchiv.de/',
    relatedTopicIds: [6, 8, 10, 19]
  },
  {
    id: 'ghdi-germany',
    name: 'German History in Documents and Images (GHDI)',
    institution: 'German Historical Institute (Washington, D.C.) / Max Planck Institute',
    focus: 'Fontes primárias traduzidas e comentadas sobre a história política, social e diplomática alemã de 1815 a 1990',
    description: 'Coleção acadêmica com transcrições fiéis e contextualizações dos acordos diplomáticos de entreguerras, discursos de Hitler e declarações conjuntas teuto-soviéticas de 1939–1941, além das resoluções do KPD sobre o social-fascismo.',
    notableCollections: [
      'Declaração Conjunta dos Governos Alemão e Soviético sobre a Liquidação da Guerra (28 de setembro de 1939)',
      'Documentos do KPD e da Internacional Comunista sobre a social-democracia de Weimar',
      'Construção e registros fotográficos da fronteira de Berlim em agosto de 1961'
    ],
    url: 'https://germanhistorydocs.org/',
    relatedTopicIds: [8, 9, 10, 15, 19]
  },
  {
    id: 'hoover-institution',
    name: 'Hoover Institution Archives — Documentos Soviéticos',
    institution: 'Stanford University (Stanford, CA)',
    focus: 'Coleção Boris Nicolaevsky, papéis de Leon Trotsky, arquivos de dissidentes soviéticos e publicações Samizdat',
    description: 'Um dos maiores arquivos ocidentais sobre a Revolução Russa e o comunismo, salvaguardando documentos resgatados da Europa antes da ocupação nazista e a maior coleção mundial de literatura clandestina Samizdat da era Brejnev.',
    notableCollections: [
      'Coleção Nicolaevsky: cartas inéditas de líderes bolcheviques e mencheviques',
      'Arquivos da Okhrana imperial e da Cheka inicial',
      'Coleção Carta 77 e documentação do Grupo Helsinque de Moscou',
      'Testemunhos datilografados de sobreviventes das fomes de 1932-1933 e do Gulag'
    ],
    url: 'https://www.hoover.org/library-archives',
    relatedTopicIds: [1, 2, 11, 12, 17]
  },
  {
    id: 'yale-annals-communism',
    name: 'Yale University Press — Annals of Communism Series',
    institution: 'Yale University Press em colaboração com os Arquivos Estatais Russos (RGASPI, GARF, TsKhSD)',
    focus: 'Série seminal de mais de 20 volumes publicando coleções de documentos originais desclassificados dos arquivos de Moscou',
    description: 'Iniciativa editorial histórica coordenada por historiadores russos e ocidentais após 1991, transcrevendo despachos originais do Kremlin sem censura. Obras fundamentais incluem: "The Road to Terror", "The Unknown Lenin", "Stalin\'s Letters to Molotov", "The Secret World of American Communism" e "The KGB and the Soviet War in Afghanistan".',
    notableCollections: [
      'The Road to Terror: Stalin and the Self-Destruction of the Bolsheviks (J. Arch Getty e Oleg Naumov)',
      'The Unknown Lenin: From the Secret Archive (Richard Pipes)',
      'Stalin\'s Letters to Molotov, 1925–1936 (Lars T. Lih, Oleg Khlevniuk e Oleg Naumov)',
      'The KGB\'s Villa: Soviet Secret Operations and Internal Directives'
    ],
    url: 'https://yalebooks.yale.edu/series/annals-of-communism/',
    relatedTopicIds: [2, 3, 8, 11, 13, 15]
  }
];
