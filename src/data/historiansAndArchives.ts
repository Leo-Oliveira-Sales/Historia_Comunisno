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
  },
  // BLOCO II — HISTÓRIA SOVIÉTICA, COMUNISMO E GUERRA FRIA (#19–#24)
  {
    id: 'stephen-kotkin',
    number: 19,
    blockLabel: 'BLOCO II — HISTÓRIA SOVIÉTICA, COMUNISMO E GUERRA FRIA',
    name: 'Stephen Kotkin',
    institution: 'Princeton University',
    expertise: 'História soviética, stalinismo, industrialização, formação do Estado soviético e história política da Rússia contemporânea',
    keyWork: 'Magnetic Mountain: Stalinism as a Civilization (1995) & Stalin: Paradoxes of Power, 1878–1928 (2014)',
    year: '2014',
    contribution: 'Uma das principais referências contemporâneas no estudo do stalinismo. Sua pesquisa utiliza a história de Magnitogorsk para investigar a construção da sociedade industrial soviética, relacionando transformação econômica, engenharia social, cultura política e formação de novas identidades. Sua biografia de Stalin também examina as relações entre ideologia, instituições, personalidade política e construção do poder.',
    dossierTopicIds: [],
    associatedDossiersText: 'Industrialização soviética / Stalinismo / Planos Quinquenais / Formação do Estado soviético / Sociedade e cultura política.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'A análise de Kotkin permite compreender o stalinismo não apenas como um sistema de repressão, mas como um processo de transformação institucional, econômica e social que procurou reorganizar profundamente a sociedade soviética.'
  },
  {
    id: 'moshe-lewin',
    number: 20,
    blockLabel: 'BLOCO II — HISTÓRIA SOVIÉTICA, COMUNISMO E GUERRA FRIA',
    name: 'Moshe Lewin',
    institution: 'University of Pennsylvania',
    expertise: 'História social soviética, campesinato russo, coletivização, formação do sistema soviético e transformações institucionais sob Stalin',
    keyWork: 'The Making of the Soviet System: Essays in the Social History of Interwar Russia (1985) & The Gorbachev Phenomenon (1988)',
    year: '1988',
    contribution: 'Historiador fundamental para compreender as transformações sociais e políticas que antecederam a consolidação do stalinismo. Lewin investigou as relações entre Estado, sociedade rural, industrialização, burocracia e estrutura partidária, destacando as contradições internas do sistema soviético e os limites de seu modelo de desenvolvimento.',
    dossierTopicIds: [],
    associatedDossiersText: 'Leninismo / Coletivização agrícola / Sociedade soviética / Burocracia / Reformas de Gorbachev.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Sua interpretação enfatiza que o sistema soviético não pode ser explicado exclusivamente pelas decisões de seus dirigentes. É necessário examinar também as estruturas sociais, os conflitos institucionais e as transformações econômicas que condicionaram o funcionamento do regime.'
  },
  {
    id: 'ronald-grigor-suny',
    number: 21,
    blockLabel: 'BLOCO II — HISTÓRIA SOVIÉTICA, COMUNISMO E GUERRA FRIA',
    name: 'Ronald Grigor Suny',
    institution: 'University of Michigan',
    expertise: 'História russa e soviética, nacionalidades, Revolução Russa, formação do Estado soviético e relações entre nacionalismo e socialismo',
    keyWork: 'The Revenge of the Past: Nationalism, Revolution, and the Collapse of the Soviet Union (1993) & The Soviet Experiment: Russia, the USSR, and the Successor States (1998)',
    year: '1998',
    contribution: 'Pesquisador de destaque na história política e social da Rússia e da União Soviética. Sua produção examina a diversidade étnica e nacional do antigo Império Russo, as tensões entre centralização política e autonomia nacional e o papel das identidades coletivas na formação e dissolução da URSS.',
    dossierTopicIds: [],
    associatedDossiersText: 'Revolução Russa / Nacionalidades soviéticas / Leninismo / Federalismo soviético / Dissolução da URSS.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Suny demonstra a importância de compreender a União Soviética como um Estado multinacional, cuja trajetória foi marcada por conflitos entre internacionalismo socialista, centralização partidária e reivindicações nacionais.'
  },
  {
    id: 'vladislav-m-zubok',
    number: 22,
    blockLabel: 'BLOCO II — HISTÓRIA SOVIÉTICA, COMUNISMO E GUERRA FRIA',
    name: 'Vladislav M. Zubok',
    institution: 'London School of Economics and Political Science (LSE)',
    expertise: 'Guerra Fria, política externa soviética, diplomacia internacional, relações entre Estados Unidos e União Soviética e crise do socialismo soviético',
    keyWork: 'A Failed Empire: The Soviet Union in the Cold War from Stalin to Gorbachev (2007) & Collapse: The Fall of the Soviet Union (2021)',
    year: '2021',
    contribution: 'Historiador especializado na política internacional soviética. Sua pesquisa utiliza documentos diplomáticos, registros partidários e fontes recentemente disponibilizadas para reconstruir as percepções, interesses e decisões dos dirigentes soviéticos durante a Guerra Fria. Seu trabalho procura compreender o conflito internacional também a partir da perspectiva de Moscou.',
    dossierTopicIds: [],
    associatedDossiersText: 'Guerra Fria / Pacto de Varsóvia / Crise do socialismo soviético / Diplomacia soviética / Dissolução da URSS.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Zubok investiga como interesses estratégicos, convicções ideológicas, percepções de segurança e decisões políticas contribuíram para a trajetória internacional e a crise final da União Soviética.'
  },
  {
    id: 'nicolas-werth',
    number: 23,
    blockLabel: 'BLOCO II — HISTÓRIA SOVIÉTICA, COMUNISMO E GUERRA FRIA',
    name: 'Nicolas Werth',
    institution: 'Centre National de la Recherche Scientifique (CNRS)',
    expertise: 'História da União Soviética, repressão política, violência estatal, coletivização, Grande Terror e sistema Gulag',
    keyWork: 'Histoire de l\'Union soviétique: De l\'Empire russe à la Communauté des États indépendants (1990) & Un État contre son peuple: Violences, répressions, terreurs en Union soviétique (1997; edição revista em 2025)',
    year: '2025',
    contribution: 'Historiador francês reconhecido por suas pesquisas sobre a violência política soviética e a construção do Estado comunista. Participou de importantes estudos documentais sobre a repressão na União Soviética, investigando a relação entre ideologia, políticas de Estado, coletivização e violência de massa.',
    dossierTopicIds: [],
    associatedDossiersText: 'Revolução Russa / Guerra Civil / Coletivização / Grande Terror / Gulag / Repressão política.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Sua produção contribui para o estudo da repressão soviética a partir da análise de políticas institucionais, documentos administrativos, estatísticas e mecanismos de coerção empregados pelo Estado.'
  },
  {
    id: 'archie-brown',
    number: 24,
    blockLabel: 'BLOCO II — HISTÓRIA SOVIÉTICA, COMUNISMO E GUERRA FRIA',
    name: 'Archie Brown',
    institution: 'University of Oxford',
    expertise: 'História política soviética, comunismo internacional, liderança política, reformas de Gorbachev e transformações dos regimes comunistas',
    keyWork: 'The Gorbachev Factor (1996) & The Rise and Fall of Communism (2009)',
    year: '2009',
    contribution: 'Um dos principais especialistas em política soviética e comunismo internacional. Brown examina a evolução dos regimes comunistas, a estrutura dos partidos únicos, as diferenças entre modelos de socialismo de Estado e o papel das lideranças políticas nas transformações do século XX.',
    dossierTopicIds: [],
    associatedDossiersText: 'Leninismo / Stalinismo / Comunismo internacional / Gorbachev / Perestroika / Dissolução da URSS.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Sua pesquisa destaca que a trajetória dos regimes comunistas não foi uniforme. As diferenças entre dirigentes, instituições, estratégias de reforma e condições nacionais ajudam a explicar tanto a permanência quanto a transformação e o colapso desses sistemas.'
  },
  // BLOCO III — ILUMINISMO, LIBERALISMO, REPUBLICANISMO E TEORIA POLÍTICA (#25–#30)
  {
    id: 'isaiah-berlin',
    number: 25,
    blockLabel: 'BLOCO III — ILUMINISMO, LIBERALISMO, REPUBLICANISMO E TEORIA POLÍTICA',
    name: 'Isaiah Berlin',
    institution: 'University of Oxford',
    expertise: 'História das ideias, liberalismo, liberdade individual, pluralismo de valores, Iluminismo e pensamento político moderno',
    keyWork: 'Two Concepts of Liberty (1958) & Russian Thinkers (1978)',
    year: '1978',
    contribution: 'Filósofo político e historiador das ideias, Berlin tornou-se uma das principais referências do liberalismo político do século XX. Sua distinção entre liberdade negativa e liberdade positiva influenciou profundamente os debates sobre autonomia individual, autoridade política, pluralismo e limites do poder estatal.',
    dossierTopicIds: [],
    associatedDossiersText: 'Iluminismo / Liberalismo clássico / Liberdade individual / Pluralismo / Autoritarismo / Totalitarismo.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Berlin chama atenção para a existência de diferentes concepções de liberdade e para os conflitos entre valores humanos que não podem necessariamente ser conciliados por um único modelo político. Sua obra é fundamental para compreender os debates entre liberalismo, autoritarismo e projetos políticos totalizantes.'
  },
  {
    id: 'quentin-skinner',
    number: 26,
    blockLabel: 'BLOCO III — ILUMINISMO, LIBERALISMO, REPUBLICANISMO E TEORIA POLÍTICA',
    name: 'Quentin Skinner',
    institution: 'University of Cambridge',
    expertise: 'História do pensamento político, republicanismo, liberalismo, teoria do Estado e formação da linguagem política moderna',
    keyWork: 'The Foundations of Modern Political Thought (1978) & Liberty Before Liberalism (1998)',
    year: '1998',
    contribution: 'Um dos principais representantes da Escola de Cambridge de história intelectual. Skinner investiga os textos políticos em seus contextos históricos, examinando como conceitos como liberdade, soberania, autoridade, cidadania e republicanismo foram construídos e transformados ao longo do tempo.',
    dossierTopicIds: [],
    associatedDossiersText: 'Renascimento político / Maquiavel / Republicanismo / Liberalismo / Soberania / Formação do Estado moderno.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Sua metodologia demonstra que as ideias políticas não devem ser interpretadas isoladamente. É necessário compreender as circunstâncias históricas, os debates intelectuais e as intervenções políticas que deram significado aos conceitos utilizados pelos pensadores.'
  },
  {
    id: 'j-g-a-pocock',
    number: 27,
    blockLabel: 'BLOCO III — ILUMINISMO, LIBERALISMO, REPUBLICANISMO E TEORIA POLÍTICA',
    name: 'J. G. A. Pocock',
    institution: 'Johns Hopkins University',
    expertise: 'Republicanismo clássico, história intelectual, pensamento político renascentista, tradição atlântica e formação do pensamento moderno',
    keyWork: 'The Machiavellian Moment: Florentine Political Thought and the Atlantic Republican Tradition (1975)',
    year: '1975',
    contribution: 'Historiador das ideias políticas conhecido por seus estudos sobre a tradição republicana e a influência do pensamento clássico na formação das instituições políticas modernas. Sua pesquisa examina a relação entre virtude cívica, participação política, corrupção, estabilidade institucional e liberdade republicana.',
    dossierTopicIds: [],
    associatedDossiersText: 'República romana / Renascimento / Maquiavel / Republicanismo / Revoluções atlânticas / Formação do pensamento político moderno.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Pocock contribuiu para recuperar a importância da tradição republicana na história do pensamento político ocidental, demonstrando que a modernidade política não foi construída exclusivamente a partir do liberalismo individualista.'
  },
  {
    id: 'jonathan-israel',
    number: 28,
    blockLabel: 'BLOCO III — ILUMINISMO, LIBERALISMO, REPUBLICANISMO E TEORIA POLÍTICA',
    name: 'Jonathan Israel',
    institution: 'Institute for Advanced Study, Princeton',
    expertise: 'Iluminismo europeu, história intelectual, racionalismo, pensamento democrático, secularização e origens ideológicas da modernidade',
    keyWork: 'Radical Enlightenment: Philosophy and the Making of Modernity 1650–1750 (2001) & Enlightenment Contested (2006)',
    year: '2006',
    contribution: 'Historiador especializado no desenvolvimento intelectual da Europa moderna. Sua pesquisa destaca as correntes radicais do Iluminismo, especialmente aquelas associadas ao racionalismo filosófico, à crítica da autoridade religiosa, à igualdade política e à defesa de princípios democráticos.',
    dossierTopicIds: [],
    associatedDossiersText: 'Iluminismo / Spinoza / Racionalismo / Revolução Francesa / Secularização / Democracia moderna.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Israel atribui papel central ao chamado Iluminismo Radical na formação de ideias modernas de liberdade, igualdade, secularização e democracia. Sua interpretação é influente, embora também tenha provocado debates historiográficos sobre a diversidade interna do Iluminismo e o peso relativo de suas diferentes correntes.'
  },
  {
    id: 'norberto-bobbio',
    number: 29,
    blockLabel: 'BLOCO III — ILUMINISMO, LIBERALISMO, REPUBLICANISMO E TEORIA POLÍTICA',
    name: 'Norberto Bobbio',
    institution: 'Università di Torino',
    expertise: 'Filosofia política, liberalismo, democracia, socialismo, teoria do Estado, direitos humanos e pensamento jurídico',
    keyWork: 'Liberalism and Democracy (1985) & Left and Right: The Significance of a Political Distinction (1994)',
    year: '1994',
    contribution: 'Filósofo político e jurista italiano, Bobbio foi uma das referências fundamentais do pensamento democrático contemporâneo. Sua obra examina as relações entre liberdade, igualdade, democracia representativa, Estado de Direito e socialismo, procurando esclarecer diferenças conceituais entre tradições políticas frequentemente tratadas como equivalentes.',
    dossierTopicIds: [],
    associatedDossiersText: 'Liberalismo / Democracia representativa / Socialismo democrático / Direitos humanos / Estado de Direito / Esquerda e direita.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Bobbio contribui para compreender as tensões e aproximações entre liberalismo e democracia, assim como os conflitos históricos entre liberdade política, igualdade social e organização do poder estatal.'
  },
  {
    id: 'hannah-arendt',
    number: 30,
    blockLabel: 'BLOCO III — ILUMINISMO, LIBERALISMO, REPUBLICANISMO E TEORIA POLÍTICA',
    name: 'Hannah Arendt',
    institution: 'The New School for Social Research',
    expertise: 'Teoria política, totalitarismo, autoritarismo, revoluções, liberdade política, cidadania e responsabilidade individual',
    keyWork: 'The Origins of Totalitarianism (1951) & The Human Condition (1958)',
    year: '1958',
    contribution: 'Uma das pensadoras políticas mais influentes do século XX. Arendt investigou as origens históricas do totalitarismo, analisando o antissemitismo, o imperialismo, a crise do Estado-nação e a formação de regimes políticos baseados na ideologia, no terror e na destruição da pluralidade humana.',
    dossierTopicIds: [],
    associatedDossiersText: 'Nazismo / Stalinismo / Totalitarismo / Imperialismo / Revoluções / Democracia / Liberdade política.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Sua interpretação procura compreender o totalitarismo como uma forma específica de dominação política, distinta de outras modalidades de autoritarismo e tirania. Sua obra também examina a importância da liberdade, da ação coletiva e da participação na vida pública.'
  },
  // BLOCO IV — SOCIALISMO, MARXISMO, ANARQUISMO E MOVIMENTOS OPERÁRIOS (#31–#36)
  {
    id: 'gareth-stedman-jones',
    number: 31,
    blockLabel: 'BLOCO IV — SOCIALISMO, MARXISMO, ANARQUISMO E MOVIMENTOS OPERÁRIOS',
    name: 'Gareth Stedman Jones',
    institution: 'Queen Mary University of London',
    expertise: 'História do socialismo, marxismo, movimentos operários, pensamento de Karl Marx e história intelectual do século XIX',
    keyWork: 'Karl Marx: Greatness and Illusion (2016) & Languages of Class: Studies in English Working Class History (1983)',
    year: '2016',
    contribution: 'Historiador britânico dedicado ao estudo da formação do pensamento socialista e das transformações políticas e sociais da Europa industrial. Sua biografia intelectual de Marx procura reconstruir o pensamento do filósofo em seu próprio contexto histórico, evitando interpretar suas ideias exclusivamente a partir dos movimentos políticos que posteriormente reivindicaram sua herança.',
    dossierTopicIds: [],
    associatedDossiersText: 'Revolução Industrial / Socialismo / Marxismo / Formação da classe operária / Primeira Internacional / História do movimento trabalhista.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Sua pesquisa permite distinguir o pensamento original de Marx das interpretações e apropriações desenvolvidas posteriormente por partidos socialistas, movimentos revolucionários e regimes comunistas.'
  },
  {
    id: 'james-joll',
    number: 32,
    blockLabel: 'BLOCO IV — SOCIALISMO, MARXISMO, ANARQUISMO E MOVIMENTOS OPERÁRIOS',
    name: 'James Joll',
    institution: 'University College London (UCL)',
    expertise: 'História do socialismo europeu, anarquismo, movimentos revolucionários, Primeira Internacional e Segunda Internacional',
    keyWork: 'The Second International, 1889–1914 (1955) & The Anarchists (1964)',
    year: '1964',
    contribution: 'Historiador britânico reconhecido por suas pesquisas sobre a formação dos movimentos socialistas e anarquistas na Europa. Seus trabalhos examinam as organizações políticas, os conflitos internos do movimento operário, as divergências estratégicas entre revolucionários e reformistas e as disputas ideológicas que marcaram a esquerda europeia.',
    dossierTopicIds: [],
    associatedDossiersText: 'Socialismo utópico / Marxismo / Anarquismo / Primeira Internacional / Segunda Internacional / Movimento operário europeu.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Joll demonstra que o socialismo europeu foi constituído por correntes diversas, com diferentes concepções sobre organização política, revolução, Estado, sindicalismo e transformação social.'
  },
  {
    id: 'ruth-kinna',
    number: 33,
    blockLabel: 'BLOCO IV — SOCIALISMO, MARXISMO, ANARQUISMO E MOVIMENTOS OPERÁRIOS',
    name: 'Ruth Kinna',
    institution: 'Loughborough University',
    expertise: 'História do anarquismo, teoria política libertária, pensamento de Bakunin, Kropotkin e tradições antiautoritárias',
    keyWork: 'Anarchism: A Beginner\'s Guide (2005) & The Government of No One: The Theory and Practice of Anarchism (2019)',
    year: '2019',
    contribution: 'Pesquisadora contemporânea especializada no pensamento anarquista e nas diferentes tradições políticas libertárias. Sua produção examina as críticas anarquistas ao Estado, à autoridade centralizada e às hierarquias políticas, além das propostas de organização social baseadas na autonomia, associação voluntária e cooperação.',
    dossierTopicIds: [],
    associatedDossiersText: 'Socialismo utópico / Proudhon / Bakunin / Kropotkin / Anarcossindicalismo / Movimentos libertários.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Kinna contribui para superar interpretações simplificadas do anarquismo como sinônimo de desordem, apresentando suas diferentes correntes teóricas e experiências históricas de organização política e social.'
  },
  {
    id: 'donald-sassoon',
    number: 34,
    blockLabel: 'BLOCO IV — SOCIALISMO, MARXISMO, ANARQUISMO E MOVIMENTOS OPERÁRIOS',
    name: 'Donald Sassoon',
    institution: 'Queen Mary University of London',
    expertise: 'História do socialismo europeu, partidos socialistas, social-democracia, comunismo ocidental e movimentos políticos da esquerda',
    keyWork: 'One Hundred Years of Socialism: The West European Left in the Twentieth Century (1996; edição revista posterior)',
    year: '1996',
    contribution: 'Historiador especializado na evolução da esquerda europeia durante os séculos XIX e XX. Sua obra acompanha a formação dos partidos socialistas, a expansão do movimento operário, o desenvolvimento da social-democracia e as transformações das relações entre partidos comunistas, instituições democráticas e economias capitalistas.',
    dossierTopicIds: [],
    associatedDossiersText: 'Socialismo / Social-democracia / Marxismo / Comunismo ocidental / Estado de bem-estar social / Partidos trabalhistas.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Sassoon demonstra que o socialismo europeu não seguiu uma trajetória única. Suas diferentes organizações adaptaram suas estratégias às condições econômicas, sociais e institucionais de cada país.'
  },
  {
    id: 'geoff-eley',
    number: 35,
    blockLabel: 'BLOCO IV — SOCIALISMO, MARXISMO, ANARQUISMO E MOVIMENTOS OPERÁRIOS',
    name: 'Geoff Eley',
    institution: 'University of Michigan',
    expertise: 'História da esquerda europeia, socialismo, movimentos operários, democracia, fascismo e transformações políticas contemporâneas',
    keyWork: 'Forging Democracy: The History of the Left in Europe, 1850–2000 (2002) & Reshaping the German Right: Radical Nationalism and Political Change After Bismarck (1980)',
    year: '2002',
    contribution: 'Historiador especializado na formação dos movimentos políticos modernos e na relação entre mobilização social, organização partidária e desenvolvimento da democracia europeia. Seus estudos examinam a participação de movimentos socialistas, trabalhistas, feministas e comunistas nas disputas pela ampliação dos direitos políticos e sociais.',
    dossierTopicIds: [],
    associatedDossiersText: 'Revoluções europeias / Socialismo / Movimento operário / Democracia / Fascismo / História política da Alemanha.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Eley destaca que a democracia europeia foi resultado de conflitos e mobilizações históricas, e não apenas de uma evolução institucional espontânea. Sua abordagem permite compreender a participação da esquerda na construção das democracias modernas.'
  },
  {
    id: 'leszek-kolakowski',
    number: 36,
    blockLabel: 'BLOCO IV — SOCIALISMO, MARXISMO, ANARQUISMO E MOVIMENTOS OPERÁRIOS',
    name: 'Leszek Kołakowski',
    institution: 'University of Chicago',
    expertise: 'História do marxismo, filosofia política, comunismo, crítica do totalitarismo e pensamento filosófico moderno',
    keyWork: 'Main Currents of Marxism: Its Rise, Growth, and Dissolution (1976–1978) & The Alienation of Reason: A History of Positivist Thought (1966)',
    year: '1978',
    contribution: 'Filósofo polonês que se tornou uma das principais referências críticas do marxismo no século XX. Sua produção intelectual investiga a formação filosófica do pensamento marxista, suas diferentes interpretações históricas e as transformações de sua relação com os partidos comunistas e os regimes socialistas.',
    dossierTopicIds: [],
    associatedDossiersText: 'Marxismo / Marx e Engels / Leninismo / Stalinismo / Comunismo internacional / Dissidência intelectual.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Kołakowski examina as tensões entre a filosofia marxista original, suas interpretações políticas e as experiências históricas dos regimes que reivindicaram sua legitimidade. Sua obra é fundamental para compreender os debates internos do marxismo e as críticas ao comunismo de Estado.'
  },
  // BLOCO V — FASCISMO, NAZISMO, AUTORITARISMO E TOTALITARISMO (#37–#42)
  {
    id: 'emilio-gentile',
    number: 37,
    blockLabel: 'BLOCO V — FASCISMO, NAZISMO, AUTORITARISMO E TOTALITARISMO',
    name: 'Emilio Gentile',
    institution: 'Sapienza Università di Roma',
    expertise: 'Fascismo italiano, ideologia fascista, religião política, nacionalismo, totalitarismo e cultura política',
    keyWork: 'The Sacralization of Politics in Fascist Italy (1996) & Fascismo: storia e interpretazione (2002)',
    year: '2002',
    contribution: 'Historiador italiano reconhecido internacionalmente por seus estudos sobre a ideologia e a cultura política do fascismo. Sua pesquisa investiga a construção do regime de Mussolini, o culto ao líder, os rituais políticos, os símbolos nacionais e a tentativa de transformar o fascismo em uma espécie de religião política secular.',
    dossierTopicIds: [],
    associatedDossiersText: 'Fascismo italiano / Mussolini / Nacionalismo / Propaganda / Religião política / Totalitarismo.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Gentile interpreta o fascismo como um fenômeno político e cultural que procurou mobilizar as massas por meio de mitos nacionais, símbolos, rituais, culto ao chefe e projetos de transformação radical da sociedade.'
  },
  {
    id: 'roger-griffin',
    number: 38,
    blockLabel: 'BLOCO V — FASCISMO, NAZISMO, AUTORITARISMO E TOTALITARISMO',
    name: 'Roger Griffin',
    institution: 'Oxford Brookes University',
    expertise: 'Teoria do fascismo, ultranacionalismo, ideologia política, movimentos neofascistas e extremismo contemporâneo',
    keyWork: 'The Nature of Fascism (1991) & Modernism and Fascism: The Sense of a Beginning under Mussolini and Hitler (2007)',
    year: '2007',
    contribution: 'Um dos principais teóricos contemporâneos do fascismo. Griffin desenvolveu uma interpretação influente que identifica no fascismo um núcleo ideológico de ultranacionalismo palingenético, caracterizado pela promessa de renascimento nacional após uma suposta decadência política, moral ou cultural.',
    dossierTopicIds: [],
    associatedDossiersText: 'Fascismo italiano / Nazismo / Ultranacionalismo / Ideologia fascista / Neofascismo / Extrema direita.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Sua definição tornou-se uma referência importante nos estudos comparativos do fascismo, permitindo analisar movimentos de diferentes países sem reduzir o fenômeno exclusivamente ao caso italiano ou alemão. Sua abordagem também é objeto de debates acadêmicos sobre os limites das definições gerais de fascismo.'
  },
  {
    id: 'stanley-g-payne',
    number: 39,
    blockLabel: 'BLOCO V — FASCISMO, NAZISMO, AUTORITARISMO E TOTALITARISMO',
    name: 'Stanley G. Payne',
    institution: 'University of Wisconsin–Madison',
    expertise: 'Fascismo europeu, franquismo, nacionalismo autoritário, Guerra Civil Espanhola e regimes de direita radical',
    keyWork: 'A History of Fascism, 1914–1945 (1995) & Fascism: Comparison and Definition (1980)',
    year: '1995',
    contribution: 'Historiador norte-americano reconhecido por seus estudos comparativos sobre os movimentos fascistas europeus. Sua produção examina as características organizacionais, ideológicas e institucionais dos regimes e movimentos de extrema direita, estabelecendo distinções entre fascismo, conservadorismo autoritário, nacionalismo radical e outras formas de ditadura.',
    dossierTopicIds: [],
    associatedDossiersText: 'Fascismo italiano / Nazismo / Franquismo / Guerra Civil Espanhola / Nacionalismo autoritário / Extrema direita europeia.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Payne oferece uma abordagem comparativa e tipológica do fascismo, contribuindo para identificar semelhanças e diferenças entre os movimentos políticos europeus do período entreguerras.'
  },
  {
    id: 'george-l-mosse',
    number: 40,
    blockLabel: 'BLOCO V — FASCISMO, NAZISMO, AUTORITARISMO E TOTALITARISMO',
    name: 'George L. Mosse',
    institution: 'University of Wisconsin–Madison',
    expertise: 'História cultural do fascismo, nacionalismo, antissemitismo, racismo, militarismo e formação das identidades políticas modernas',
    keyWork: 'The Nationalization of the Masses: Political Symbolism and Mass Movements in Germany from the Napoleonic Wars through the Third Reich (1975) & The Crisis of German Ideology (1964)',
    year: '1975',
    contribution: 'Historiador fundamental para a compreensão das dimensões culturais e simbólicas do nacionalismo e do fascismo. Mosse investigou a construção de mitos nacionais, a mobilização das massas, a estética política, o militarismo e a formação de culturas políticas que contribuíram para a ascensão do nacional-socialismo.',
    dossierTopicIds: [],
    associatedDossiersText: 'Nacionalismo / Fascismo / Nazismo / Antissemitismo / Racismo / Propaganda / Cultura política de massas.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Sua produção demonstra que os regimes fascistas não dependiam exclusivamente da coerção institucional. Símbolos, cerimônias, representações do passado e mecanismos de identificação coletiva também desempenharam papel importante na mobilização política.'
  },
  {
    id: 'juan-j-linz',
    number: 41,
    blockLabel: 'BLOCO V — FASCISMO, NAZISMO, AUTORITARISMO E TOTALITARISMO',
    name: 'Juan J. Linz',
    institution: 'Yale University',
    expertise: 'Ciência política comparada, autoritarismo, totalitarismo, regimes políticos, transições democráticas e sistemas partidários',
    keyWork: 'Totalitarian and Authoritarian Regimes (2000) & The Breakdown of Democratic Regimes (1978, com Alfred Stepan em estudos posteriores sobre transições)',
    year: '2000',
    contribution: 'Um dos principais cientistas políticos do século XX no estudo comparativo dos regimes políticos. Linz desenvolveu distinções conceituais entre regimes autoritários e totalitários, analisando aspectos como pluralismo político, ideologia, mobilização social, liderança e limites institucionais ao exercício do poder.',
    dossierTopicIds: [],
    associatedDossiersText: 'Autoritarismo / Totalitarismo / Fascismo / Nazismo / Stalinismo / Democracia / Transições políticas.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Sua contribuição é fundamental para diferenciar sistemas políticos que frequentemente são agrupados de maneira imprecisa. Sua tipologia permite analisar as diferenças entre ditaduras militares, regimes autoritários tradicionais, sistemas de partido único e regimes totalitários.'
  },
  {
    id: 'francois-furet',
    number: 42,
    blockLabel: 'BLOCO V — FASCISMO, NAZISMO, AUTORITARISMO E TOTALITARISMO',
    name: 'François Furet',
    institution: 'École des Hautes Études en Sciences Sociales (EHESS)',
    expertise: 'Revolução Francesa, história do comunismo, ideologias revolucionárias, totalitarismo e história intelectual contemporânea',
    keyWork: 'Interpreting the French Revolution (1978) & The Passing of an Illusion: The Idea of Communism in the Twentieth Century (1995)',
    year: '1995',
    contribution: 'Historiador francês conhecido por suas interpretações da Revolução Francesa e pela análise crítica da tradição comunista no século XX. Sua produção examina a relação entre revolução, democracia, violência política e construção de identidades ideológicas, investigando como a experiência soviética influenciou a cultura política europeia.',
    dossierTopicIds: [],
    associatedDossiersText: 'Iluminismo / Revolução Francesa / Jacobinismo / Marxismo / Comunismo / Totalitarismo / História das ideologias.',
    synthesisLabel: 'Síntese historiográfica:',
    quote: 'Furet questionou interpretações tradicionais da Revolução Francesa e investigou a permanência do imaginário revolucionário na política moderna. Sua interpretação do comunismo gerou debates historiográficos relevantes, especialmente sobre a relação entre ideologia, experiência soviética e movimentos políticos ocidentais.'
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
  },
  {
    id: 'rgaspi-moscow',
    headerBanner: '09. RUSSIAN STATE ARCHIVE OF SOCIO-POLITICAL HISTORY (RGASPI)',
    institution: 'Arquivo Estatal Russo de História Sociopolítica · Moscou, Rússia',
    name: 'Russian State Archive of Socio-Political History — RGASPI',
    focus: 'Documentação histórica do Partido Comunista, da Internacional Comunista (Comintern), dos movimentos revolucionários e da formação do socialismo soviético.',
    description: 'Um dos principais arquivos históricos para o estudo do comunismo internacional e da história política soviética. Preserva documentação produzida por organizações partidárias, dirigentes comunistas e estruturas políticas revolucionárias, incluindo importantes fundos relacionados à Internacional Comunista, que funcionou entre 1919 e 1943.',
    notableCollections: [
      'Arquivos do Comitê Executivo da Internacional Comunista (ECCI).',
      'Documentação dos partidos comunistas e movimentos revolucionários internacionais.',
      'Correspondências, relatórios e resoluções das organizações comunistas.',
      'Documentação histórica relacionada a Lenin, dirigentes bolcheviques e à formação do Estado soviético.'
    ],
    url: 'https://guides.loc.gov/comintern-archives',
    accessLabel: 'Acessar Guia dos Arquivos do Comintern — Library of Congress',
    relatedTopicIds: []
  },
  {
    id: 'iish-amsterdam',
    headerBanner: '10. INTERNATIONAL INSTITUTE OF SOCIAL HISTORY (IISH)',
    institution: 'Instituto Internacional de História Social · Amsterdã, Países Baixos',
    name: 'International Institute of Social History — IISH',
    focus: 'História do socialismo, marxismo, anarquismo, movimentos operários, organizações revolucionárias e pensamento político internacional.',
    description: 'Instituição de referência mundial para a preservação de documentos relacionados à história dos movimentos sociais e das ideologias políticas. Seu acervo reúne documentos pessoais, correspondências, manuscritos e arquivos de organizações políticas e sindicais. Destaca-se a coleção histórica de documentos de Karl Marx e Friedrich Engels.',
    notableCollections: [
      'Marx-Engels Papers: documentos e correspondências de Karl Marx e Friedrich Engels.',
      'Arquivos de movimentos socialistas e organizações operárias internacionais.',
      'Documentação histórica de movimentos anarquistas e revolucionários.',
      'Coleções de dirigentes políticos, intelectuais e organizações da esquerda europeia.'
    ],
    url: 'https://archief.socialhistory.org/en/collections/marx-engels-papers?language=en',
    accessLabel: 'Acessar Acervo Marx-Engels',
    extraLinks: [
      {
        label: 'Acessar Coleções e Arquivos do IISH',
        url: 'https://iisg.amsterdam/en/collections'
      }
    ],
    relatedTopicIds: []
  },
  {
    id: 'national-security-archive-gwu',
    headerBanner: '11. NATIONAL SECURITY ARCHIVE',
    institution: 'George Washington University · Washington, D.C., Estados Unidos',
    name: 'National Security Archive — George Washington University',
    focus: 'Documentos governamentais desclassificados sobre Guerra Fria, espionagem, política externa, segurança internacional e relações entre Estados Unidos e União Soviética.',
    description: 'Instituição de pesquisa independente especializada na obtenção, preservação e publicação de documentos governamentais anteriormente classificados. Reúne milhares de documentos relacionados à diplomacia, inteligência, conflitos internacionais e decisões estratégicas das grandes potências durante o século XX.',
    notableCollections: [
      'Documentação desclassificada sobre a Crise dos Mísseis de Cuba.',
      'Documentos sobre as relações diplomáticas entre Estados Unidos e União Soviética.',
      'Registros de inteligência e política externa durante a Guerra Fria.',
      'Documentos sobre intervenções internacionais, conflitos e operações governamentais.'
    ],
    url: 'https://nsarchive.gwu.edu/',
    accessLabel: 'Acessar National Security Archive',
    relatedTopicIds: []
  },
  {
    id: 'political-archive-german-foreign-office',
    headerBanner: '12. POLITICAL ARCHIVE OF THE FEDERAL FOREIGN OFFICE',
    institution: 'Arquivo Político do Ministério das Relações Exteriores da Alemanha · Berlim, Alemanha',
    name: 'Political Archive — German Federal Foreign Office',
    focus: 'Documentação diplomática alemã, relações internacionais, política externa, tratados e correspondências governamentais.',
    description: 'Arquivo especializado na preservação de documentos diplomáticos alemães de diferentes períodos históricos. É particularmente relevante para a investigação das relações internacionais durante a República de Weimar, o Terceiro Reich, a Guerra Fria e a reunificação alemã.',
    notableCollections: [
      'Correspondências diplomáticas da República de Weimar.',
      'Documentos sobre as relações diplomáticas entre Alemanha e União Soviética.',
      'Registros de tratados, negociações e acordos internacionais.',
      'Documentação da política externa alemã durante a Guerra Fria.'
    ],
    url: 'https://archiv.diplo.de/arc-en',
    accessLabel: 'Acessar Arquivo Político Alemão',
    relatedTopicIds: []
  },
  {
    id: 'ssu-sectoral-state-archive',
    headerBanner: '13. SSU SECTORAL STATE ARCHIVE',
    institution: 'Arquivo Setorial do Serviço de Segurança da Ucrânia · Kyiv, Ucrânia',
    name: 'Security Service of Ukraine — Sectoral State Archive',
    focus: 'Documentação dos serviços de segurança soviéticos, repressão política, perseguições, dissidência e história da Ucrânia sob o regime comunista.',
    description: 'Arquivo de grande importância para a investigação dos mecanismos de repressão política e controle social durante o período soviético. Preserva documentos relacionados às atividades dos órgãos de segurança, perseguições políticas, movimentos nacionalistas ucranianos e acontecimentos históricos do século XX.',
    notableCollections: [
      'Documentação dos órgãos de segurança soviéticos na Ucrânia.',
      'Registros relacionados às perseguições políticas e repressão stalinista.',
      'Documentos sobre o Holodomor e a coletivização forçada.',
      'Arquivos relacionados aos movimentos de resistência e dissidência ucranianos.'
    ],
    url: 'https://www.ssu.gov.ua/en/haluzevyi-derzhavnyi-arkhiv',
    accessLabel: 'Acessar Arquivo Setorial do Serviço de Segurança da Ucrânia',
    relatedTopicIds: []
  },
  {
    id: 'the-national-archives-uk',
    headerBanner: '14. THE NATIONAL ARCHIVES — UNITED KINGDOM',
    institution: 'Arquivo Nacional do Reino Unido · Londres, Reino Unido',
    name: 'The National Archives — United Kingdom',
    focus: 'Documentação governamental britânica, diplomacia, inteligência, guerras mundiais, política internacional e Guerra Fria.',
    description: 'Um dos principais repositórios documentais para a história política e diplomática contemporânea. Preserva documentos produzidos por departamentos governamentais, órgãos militares, serviços de inteligência e instituições administrativas britânicas.',
    notableCollections: [
      'Registros do Foreign Office sobre as relações britânico-soviéticas.',
      'Documentação diplomática da Segunda Guerra Mundial.',
      'Relatórios governamentais e documentos relacionados à Guerra Fria.',
      'Registros históricos de inteligência, segurança e política externa.'
    ],
    url: 'https://www.nationalarchives.gov.uk/',
    accessLabel: 'Acessar National Archives — Reino Unido',
    relatedTopicIds: []
  },
  {
    id: 'rgani-moscow',
    headerBanner: '15. RUSSIAN STATE ARCHIVE OF CONTEMPORARY HISTORY (RGANI)',
    institution: 'Arquivo Estatal Russo de História Contemporânea · Moscou, Rússia',
    name: 'Russian State Archive of Contemporary History — RGANI',
    focus: 'Documentação da liderança soviética, Comitê Central do PCUS, decisões políticas, reformas institucionais e transformações da União Soviética no período posterior a Stalin.',
    description: 'Arquivo fundamental para compreender o funcionamento político da União Soviética durante as décadas de 1950 a 1990. Sua documentação permite investigar as estruturas decisórias do Partido Comunista, as disputas internas da liderança e os processos que conduziram à crise e dissolução do Estado soviético.',
    notableCollections: [
      'Documentação do Comitê Central do Partido Comunista da União Soviética.',
      'Registros das decisões políticas da liderança soviética.',
      'Documentação relacionada aos governos de Khrushchev e Brejnev.',
      'Registros sobre reformas políticas, crises institucionais e transformações da década de 1980.'
    ],
    url: 'https://archives.gov.ru/',
    accessLabel: 'Acessar Portal do Arquivo Federal Russo',
    relatedTopicIds: []
  },
  {
    id: 'sapmo-bundesarchiv',
    headerBanner: '16. ARCHIVES OF THE SOVIET OCCUPATION ZONE AND THE GDR · SAPMO — Bundesarchiv',
    institution: 'Arquivo da Zona de Ocupação Soviética e da República Democrática Alemã · Alemanha',
    name: 'Bundesarchiv — Stiftung Archiv der Parteien und Massenorganisationen der DDR (SAPMO)',
    focus: 'Documentação do Partido Socialista Unificado da Alemanha (SED), estruturas políticas da Alemanha Oriental, organizações de massas e administração do regime comunista alemão.',
    description: 'Coleção documental essencial para estudar a experiência do socialismo de Estado na Europa Oriental. Preserva registros das organizações partidárias, instituições políticas, entidades sociais e estruturas administrativas da República Democrática Alemã.',
    notableCollections: [
      'Documentação do Comitê Central e do Politburo do SED.',
      'Registros das organizações de massas e instituições políticas da Alemanha Oriental.',
      'Documentos relacionados à administração e ao funcionamento do Estado socialista.',
      'Documentação sobre a construção do Muro de Berlim, oposição política e transformações de 1989.'
    ],
    url: 'https://www.bundesarchiv.de/',
    accessLabel: 'Acessar Bundesarchiv — SAPMO',
    relatedTopicIds: []
  },
  {
    id: 'loc-digital-collections',
    headerBanner: '17. LIBRARY OF CONGRESS — DIGITAL COLLECTIONS',
    institution: 'Biblioteca do Congresso dos Estados Unidos · Washington, D.C., Estados Unidos',
    name: 'Library of Congress — Digital Collections',
    focus: 'Documentos históricos, imprensa, manuscritos, discursos políticos, publicações governamentais e fontes primárias da história política mundial.',
    description: 'Biblioteca nacional dos Estados Unidos e uma das maiores instituições de preservação documental do mundo. Seu portal digital permite consultar coleções históricas de diferentes períodos, incluindo documentos relacionados à formação do liberalismo, republicanismo, democracia, nacionalismo, movimentos sociais e transformações políticas modernas.',
    notableCollections: [
      'American Memory: documentos e materiais históricos da formação política dos Estados Unidos.',
      'Chronicling America: jornais históricos digitalizados.',
      'Coleções de manuscritos, correspondências e documentos políticos.',
      'Publicações históricas, discursos, fotografias e registros governamentais.'
    ],
    url: 'https://www.loc.gov/collections/',
    accessLabel: 'Acessar Coleções Digitais da Library of Congress',
    relatedTopicIds: []
  },
  {
    id: 'marxists-internet-archive',
    headerBanner: '18. MARXISTS INTERNET ARCHIVE',
    institution: 'Arquivo Digital de Textos do Pensamento Marxista e Socialista · Repositório internacional',
    name: 'Marxists Internet Archive — MIA',
    focus: 'Textos originais do marxismo, socialismo, comunismo, anarquismo, pensamento revolucionário e crítica política.',
    description: 'Biblioteca digital internacional dedicada à preservação e disponibilização de textos de pensadores e dirigentes políticos ligados à história das ideologias socialistas e revolucionárias. Reúne obras teóricas, discursos, correspondências, documentos históricos e textos políticos de diferentes períodos.',
    notableCollections: [
      'Obras de Karl Marx e Friedrich Engels.',
      'Textos de Vladimir Lenin, Leon Trotsky e Rosa Luxemburgo.',
      'Obras e documentos de Antonio Gramsci.',
      'Textos de Mikhail Bakunin, Pierre-Joseph Proudhon e outros pensadores anarquistas.'
    ],
    url: 'https://www.marxists.org/',
    accessLabel: 'Acessar Marxists Internet Archive',
    note: 'Observação: trata-se de um repositório digital de textos, não de um arquivo estatal. Sua utilidade está na consulta de fontes intelectuais e documentos políticos reproduzidos.',
    relatedTopicIds: []
  },
  {
    id: 'online-library-of-liberty',
    headerBanner: '19. ONLINE LIBRARY OF LIBERTY (OLL)',
    institution: 'Liberty Fund · Indianápolis, Estados Unidos',
    name: 'Online Library of Liberty — Liberty Fund',
    focus: 'Documentação clássica do liberalismo, republicanismo, economia política, liberdade individual, teoria do Estado e pensamento político moderno.',
    description: 'Biblioteca digital acadêmica que disponibiliza obras fundamentais da história do pensamento político e econômico. Reúne textos originais e edições históricas de autores que influenciaram a formação das tradições liberais, republicanas e conservadoras.',
    notableCollections: [
      'Obras de John Locke e Adam Smith.',
      'Textos de Alexis de Tocqueville e John Stuart Mill.',
      'Documentos relacionados ao constitucionalismo e republicanismo.',
      'Obras clássicas de economia política, liberdade individual e teoria do Estado.'
    ],
    url: 'https://oll.libertyfund.org/',
    accessLabel: 'Acessar Online Library of Liberty',
    note: 'Observação: é uma biblioteca digital de obras intelectuais, não um arquivo histórico governamental.',
    relatedTopicIds: []
  },
  {
    id: 'gallica-bnf',
    headerBanner: '20. GALLICA — BIBLIOTHÈQUE NATIONALE DE FRANCE',
    institution: 'Biblioteca Nacional da França — Gallica · Paris, França',
    name: 'Gallica — Bibliothèque nationale de France',
    focus: 'Documentação histórica francesa, imprensa, livros, manuscritos, panfletos políticos, periódicos e fontes primárias da história das ideologias.',
    description: 'Uma das principais bibliotecas digitais europeias. Disponibiliza um vasto conjunto de documentos históricos digitalizados, especialmente relevante para estudar a Revolução Francesa, o Iluminismo, o liberalismo, o republicanismo, o socialismo francês, o nacionalismo e as transformações políticas dos séculos XIX e XX.',
    notableCollections: [
      'Publicações e documentos históricos da Revolução Francesa.',
      'Obras clássicas do Iluminismo e do pensamento político francês.',
      'Jornais, periódicos e panfletos políticos dos séculos XIX e XX.',
      'Livros, manuscritos e documentos relacionados aos movimentos socialistas e republicanos.'
    ],
    url: 'https://gallica.bnf.fr/',
    accessLabel: 'Acessar Gallica — Biblioteca Nacional da França',
    relatedTopicIds: []
  }
];
