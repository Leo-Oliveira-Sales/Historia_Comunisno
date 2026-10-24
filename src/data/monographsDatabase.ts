export interface AcademicMonograph {
  id: string;
  title: string;
  authors: string[];
  year: string;
  publisher: string;
  focus: string;
  archivalBase: string; // Quais arquivos primários o autor pesquisou
  thesisSummary: string;
  relatedTopicIds: number[];
  abntCitation: string;
  chicagoCitation: string;
}

export const MONOGRAPHS_DATABASE: AcademicMonograph[] = [
  {
    id: 'fitzpatrick-revolution',
    title: 'The Russian Revolution',
    authors: ['Sheila Fitzpatrick'],
    year: '1982',
    publisher: 'Oxford University Press',
    focus: 'Revolução de 1917, Guerra Civil e ascensão dos bolcheviques',
    archivalBase: 'Arquivos do Partido Bolchevique, imprensa operária e diários contemporâneos de Petrogrado e Moscou',
    thesisSummary: 'Trata a revolução não como um golpe isolado de um dia, mas como um processo contínuo de convulsão social e violência institucionalizada que se estendeu de 1917 até os expurgos da década de 1930.',
    relatedTopicIds: [1, 2],
    abntCitation: 'FITZPATRICK, Sheila. The Russian Revolution. 4. ed. Oxford: Oxford University Press, 1982.',
    chicagoCitation: 'Fitzpatrick, Sheila. 1982. The Russian Revolution. Oxford: Oxford University Press.'
  },
  {
    id: 'fitzpatrick-everyday',
    title: 'Everyday Stalinism: Ordinary Life in Extraordinary Times',
    authors: ['Sheila Fitzpatrick'],
    year: '1999',
    publisher: 'Oxford University Press',
    focus: 'Vida cotidiana, escassez, denúncias e acomodação social na URSS dos anos 1930',
    archivalBase: 'GARF, cartas enviadas por cidadãos às autoridades soviéticas, relatórios do NKVD sobre humor público (svodki)',
    thesisSummary: 'Demonstra como os cidadãos soviéticos comuns aprenderam a "falar bolchevique" para obter moradia, alimentos em filas e evitar denúncias durante o ápice do terror stalinista.',
    relatedTopicIds: [3, 4, 5, 18, 20],
    abntCitation: 'FITZPATRICK, Sheila. Everyday Stalinism: Ordinary Life in Extraordinary Times: Soviet Russia in the 1930s. New York: Oxford University Press, 1999.',
    chicagoCitation: 'Fitzpatrick, Sheila. 1999. Everyday Stalinism: Ordinary Life in Extraordinary Times: Soviet Russia in the 1930s. New York: Oxford University Press.'
  },
  {
    id: 'khlevniuk-gulag',
    title: 'The History of the Gulag: From Collectivization to the Great Terror',
    authors: ['Oleg V. Khlevniuk'],
    year: '2004',
    publisher: 'Yale University Press (Annals of Communism)',
    focus: 'Administração penitenciária, mortalidade e controle do Politburo sobre o Gulag',
    archivalBase: 'Fundos secretos do GULAG no GARF (f. 9414) e atas do Politburo no RGASPI',
    thesisSummary: 'Apresenta a documentação interna do NKVD revelando que o Gulag era simultaneamente um sistema punitivo de aniquilação política e uma empresa estatal predatória de extração econômica de mão de obra escrava.',
    relatedTopicIds: [3, 11, 13],
    abntCitation: 'KHLEVNIUK, Oleg V. The History of the Gulag: From Collectivization to the Great Terror. New Haven: Yale University Press, 2004.',
    chicagoCitation: 'Khlevniuk, Oleg V. 2004. The History of the Gulag: From Collectivization to the Great Terror. New Haven: Yale University Press.'
  },
  {
    id: 'getty-naumov-road',
    title: 'The Road to Terror: Stalin and the Self-Destruction of the Bolsheviks, 1932–1939',
    authors: ['J. Arch Getty', 'Oleg V. Naumov'],
    year: '1999',
    publisher: 'Yale University Press (Annals of Communism)',
    focus: 'Origens institucionais e documentais dos expurgos do Grande Terror de 1937–1938',
    archivalBase: 'RGASPI (Arquivo Central do Partido Comunista), listas de execução originais e transcrições das plenárias secretas do Comitê Central',
    thesisSummary: 'Publica pela primeira vez as minutas das sessões secretas em que a velha guarda bolchevique foi coagida a confessar conspirações inexistentes antes de ser entregue aos pelotões de fuzilamento da NKVD.',
    relatedTopicIds: [2, 3, 13, 18],
    abntCitation: 'GETTY, J. Arch; NAUMOV, Oleg V. The Road to Terror: Stalin and the Self-Destruction of the Bolsheviks, 1932–1939. New Haven: Yale University Press, 1999.',
    chicagoCitation: 'Getty, J. Arch, and Oleg V. Naumov. 1999. The Road to Terror: Stalin and the Self-Destruction of the Bolsheviks, 1932–1939. New Haven: Yale University Press.'
  },
  {
    id: 'applebaum-gulag',
    title: 'Gulag: A History',
    authors: ['Anne Applebaum'],
    year: '2003',
    publisher: 'Anchor Books / Doubleday (Prêmio Pulitzer)',
    focus: 'História abrangente da rede de campos de trabalho forçado soviéticos',
    archivalBase: 'Arquivos do Memorial Human Rights Society, GARF, testemunhos orais de prisioneiros e diários íntimos',
    thesisSummary: 'Demonstra a amplitude monumental do sistema concentracionário desde as Ilhas Solovki nos anos 1920 até o fechamento gradual na década de 1950, resgatando a dignidade humana das vítimas.',
    relatedTopicIds: [2, 3, 11, 13, 17],
    abntCitation: 'APPLEBAUM, Anne. Gulag: A History. New York: Doubleday, 2003.',
    chicagoCitation: 'Applebaum, Anne. 2003. Gulag: A History. New York: Doubleday.'
  },
  {
    id: 'applebaum-red-famine',
    title: 'Red Famine: Stalin\'s War on Ukraine',
    authors: ['Anne Applebaum'],
    year: '2017',
    publisher: 'Doubleday',
    focus: 'O Holodomor ucraniano de 1932–1933 e o esmagamento das aspirações nacionais',
    archivalBase: 'Arquivos Nacionais de Kyiv (TsDAHO), cartas confidenciais de Stalin a Kaganovich e relatórios de requisições de grãos',
    thesisSummary: 'Evidencia que a fome na Ucrânia foi agravada deliberadamente por ordens de Stalin para punir a resistência camponesa e eliminar a liderança cultural e intelectual ucraniana através do bloqueio territorial.',
    relatedTopicIds: [5, 12, 14],
    abntCitation: 'APPLEBAUM, Anne. Red Famine: Stalin\'s War on Ukraine. New York: Doubleday, 2017.',
    chicagoCitation: 'Applebaum, Anne. 2017. Red Famine: Stalin\'s War on Ukraine. New York: Doubleday.'
  },
  {
    id: 'viola-unknown-gulag',
    title: 'The Unknown Gulag: The Lost World of Stalin\'s Special Settlements',
    authors: ['Lynne Viola'],
    year: '2007',
    publisher: 'Oxford University Press',
    focus: 'Deportação em massa de camponeses rotulados como kulaks para colônias especiais',
    archivalBase: 'Arquivos regionais da Sibéria, Montes Urais e Cazaquistão (fondos de colonos especiais da OGPU/NKVD)',
    thesisSummary: 'Revela a face menos conhecida do Gulag: as colônias rurais de desterro onde famílias camponesas inteiras (incluindo crianças e idosos) foram abandonadas em taigas e estepes geladas para morrer de inanição.',
    relatedTopicIds: [5, 11, 12, 14],
    abntCitation: 'VIOLA, Lynne. The Unknown Gulag: The Lost World of Stalin\'s Special Settlements. Oxford: Oxford University Press, 2007.',
    chicagoCitation: 'Viola, Lynne. 2007. The Unknown Gulag: The Lost World of Stalin\'s Special Settlements. Oxford: Oxford University Press.'
  },
  {
    id: 'davies-wheatcroft-hunger',
    title: 'The Years of Hunger: Soviet Agriculture, 1931–1933',
    authors: ['R. W. Davies', 'Stephen G. Wheatcroft'],
    year: '2004',
    publisher: 'Palgrave Macmillan',
    focus: 'Estatística demográfica e econômica detalhada das fomes soviéticas de 1931–1933',
    archivalBase: 'Registros censitários do Gosplan, Ministério das Finanças da URSS, atas de exportação de grãos e estoques estatais',
    thesisSummary: 'Trabalho de referência absoluta quantitativa que documenta como o governo soviético continuou a exportar cereais para o exterior enquanto milhões de seus cidadãos sucumbiam à inanição forçada.',
    relatedTopicIds: [5, 12],
    abntCitation: 'DAVIES, R. W.; WHEATCROFT, Stephen G. The Years of Hunger: Soviet Agriculture, 1931–1933. London: Palgrave Macmillan, 2004.',
    chicagoCitation: 'Davies, R. W., and Stephen G. Wheatcroft. 2004. The Years of Hunger: Soviet Agriculture, 1931–1933. London: Palgrave Macmillan.'
  },
  {
    id: 'cameron-hungry-steppe',
    title: 'The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan',
    authors: ['Sarah Cameron'],
    year: '2018',
    publisher: 'Cornell University Press',
    focus: 'A catástrofe da fome cazaque (Asharshylyq) e a sedentarização forçada dos nômades',
    archivalBase: 'Arquivos Centrais do Estado da República do Cazaquistão (TsGA RK) e arquivos em Moscou',
    thesisSummary: 'Documenta como a coletivização soviética provocou a morte de 1,5 milhão de cazaques (mais de um terço de toda a etnia), extinguindo uma cultura pastoral milenar em nome da ortodoxia marxista-leninista.',
    relatedTopicIds: [5, 12, 14],
    abntCitation: 'CAMERON, Sarah. The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan. Ithaca: Cornell University Press, 2018.',
    chicagoCitation: 'Cameron, Sarah. 2018. The Hungry Steppe: Famine, Violence, and the Making of Soviet Kazakhstan. Ithaca: Cornell University Press.'
  },
  {
    id: 'naimark-genocides',
    title: 'Stalin\'s Genocides',
    authors: ['Norman M. Naimark'],
    year: '2010',
    publisher: 'Princeton University Press',
    focus: 'Análise jurídica e historiográfica das campanhas stalinistas sob o conceito de genocídio',
    archivalBase: 'Documentação da Convenção da ONU sobre Genocídio de 1948, ordens de deportação do GKO e do NKVD',
    thesisSummary: 'Argumenta que a repressão deliberada contra os kulaks, a fome na Ucrânia, as deportações de chechenos e tártaros e o massacre de Katyn enquadram-se na definição substantiva e moral de genocídio de Estado.',
    relatedTopicIds: [3, 12, 13, 14],
    abntCitation: 'NAIMARK, Norman M. Stalin\'s Genocides. Princeton: Princeton University Press, 2010.',
    chicagoCitation: 'Naimark, Norman M. 2010. Stalin\'s Genocides. Princeton: Princeton University Press.'
  },
  {
    id: 'roberts-origins-ww2',
    title: 'The Soviet Union and the Origins of the Second World War: Russo-German Relations and the Road to War, 1933–1941',
    authors: ['Geoffrey Roberts'],
    year: '1995',
    publisher: 'St. Martin\'s Press',
    focus: 'Diplomacia soviética, negociações com a Alemanha e a gênese do Pacto Molotov-Ribbentrop',
    archivalBase: 'Arquivo de Política Externa da Federação Russa (AVP RF), correspondências do Comissariado do Povo de Relações Exteriores',
    thesisSummary: 'Analisa como Stalin utilizou o realismo geopolítico impiedoso para forjar uma aliança tática com Hitler em agosto de 1939 para comprar tempo e expandir o território soviético sobre a Europa Oriental.',
    relatedTopicIds: [6, 8, 10],
    abntCitation: 'ROBERTS, Geoffrey. The Soviet Union and the Origins of the Second World War. New York: St. Martin\'s Press, 1995.',
    chicagoCitation: 'Roberts, Geoffrey. 1995. The Soviet Union and the Origins of the Second World War. New York: St. Martin\'s Press.'
  },
  {
    id: 'roberts-origins-coldwar',
    title: 'The Soviet Union and the Origins of the Cold War',
    authors: ['Geoffrey Roberts'],
    year: '1999',
    publisher: 'Palgrave Macmillan',
    focus: 'Transição da Grande Aliança antifascista para a Guerra Fria e sovietização do Leste Europeu',
    archivalBase: 'Atas das conferências de Teerã, Yalta e Potsdam no AVP RF e despachos do Estado-Maior Soviético',
    thesisSummary: 'Mapeia como a exigência intransigente de Stalin por uma barreira de segurança de Estados-satélite submissos na Europa Central destruiu a cooperação com Washington e Londres.',
    relatedTopicIds: [6, 15, 19],
    abntCitation: 'ROBERTS, Geoffrey. The Soviet Union and the Origins of the Cold War. London: Palgrave Macmillan, 1999.',
    chicagoCitation: 'Roberts, Geoffrey. 1999. The Soviet Union and the Origins of the Cold War. London: Palgrave Macmillan.'
  },
  {
    id: 'snyder-bloodlands',
    title: 'Bloodlands: Europe Between Hitler and Stalin',
    authors: ['Timothy Snyder'],
    year: '2010',
    publisher: 'Basic Books',
    focus: 'As políticas genocidas nazistas e stalinistas na Polônia, Ucrânia, Bielorrússia e Bálticos',
    archivalBase: 'Arquivos poloneses, ucranianos, bielorrussos, alemães e soviéticos desclassificados',
    thesisSummary: 'Demonstra que entre 1933 e 1945, 14 milhões de pessoas foram deliberadamente assassinadas não em combate, mas por políticas assassinas coordenadas ou sucessivas dos regimes de Hitler e Stalin no mesmo solo europeu.',
    relatedTopicIds: [6, 8, 12, 13, 14],
    abntCitation: 'SNYDER, Timothy. Bloodlands: Europe Between Hitler and Stalin. New York: Basic Books, 2010.',
    chicagoCitation: 'Snyder, Timothy. 2010. Bloodlands: Europe Between Hitler and Stalin. New York: Basic Books.'
  },
  {
    id: 'paxton-anatomy-fascism',
    title: 'The Anatomy of Fascism',
    authors: ['Robert O. Paxton'],
    year: '2004',
    publisher: 'Alfred A. Knopf',
    focus: 'Definição estrutural, dinâmicas operacionais e comparação do fascismo e totalitarismo',
    archivalBase: 'Arquivos da polícia política italiana, arquivos do governo de Vichy e documentos da República de Weimar',
    thesisSummary: 'Estabelece a definição padrão do fascismo como um sistema de paixões mobilizadoras, culto ao líder e violência paramilitar, contrastando suas dinâmicas táticas com o Komintern comunista.',
    relatedTopicIds: [8, 9, 10],
    abntCitation: 'PAXTON, Robert O. The Anatomy of Fascism. New York: Alfred A. Knopf, 2004.',
    chicagoCitation: 'Paxton, Robert O. 2004. The Anatomy of Fascism. New York: Alfred A. Knopf.'
  },
  {
    id: 'passmore-fascism',
    title: 'Fascism: A Very Short Introduction',
    authors: ['Kevin Passmore'],
    year: '2002',
    publisher: 'Oxford University Press',
    focus: 'Síntese conceitual do fascismo, totalitarismo e a resposta das esquerdas e da Internacional Comunista',
    archivalBase: 'Registros dos partidos fascistas na Europa Ocidental e debates doutrinários da Terceira Internacional',
    thesisSummary: 'Analisa a disputa ideológica do entreguerras e as contradições táticas entre o comunismo soviético e as ditaduras fascistas na Europa.',
    relatedTopicIds: [9, 10],
    abntCitation: 'PASSMORE, Kevin. Fascism: A Very Short Introduction. Oxford: Oxford University Press, 2002.',
    chicagoCitation: 'Passmore, Kevin. 2002. Fascism: A Very Short Introduction. Oxford: Oxford University Press.'
  },
  {
    id: 'kershaw-hitler',
    title: 'Hitler: Hubris and Nemesis (2 volumes)',
    authors: ['Ian Kershaw'],
    year: '1998–2000',
    publisher: 'W. W. Norton & Company',
    focus: 'Biografia política de Adolf Hitler, política externa e a invasão da União Soviética',
    archivalBase: 'Bundesarchiv, diários de Joseph Goebbels, atas da Chancelaria do Reich e interrogatórios de Nuremberg',
    thesisSummary: 'Examina a obsessão doentia de Hitler com o "judaico-bolchevismo" e como o pacto tático com Stalin em 1939 foi apenas uma manobra temporária antes da cruzada de aniquilação ideológica e biológica de 1941.',
    relatedTopicIds: [8, 9, 10],
    abntCitation: 'KERSHAW, Ian. Hitler: 1889-1945. New York: W. W. Norton, 1998-2000. 2 v.',
    chicagoCitation: 'Kershaw, Ian. 1998–2000. Hitler. 2 vols. New York: W. W. Norton.'
  },
  {
    id: 'evans-third-reich',
    title: 'The Third Reich Trilogy (The Coming, In Power, At War)',
    authors: ['Richard J. Evans'],
    year: '2003–2008',
    publisher: 'Penguin Books',
    focus: 'História total do regime nacional-socialista, a frente oriental e o Holocausto',
    archivalBase: 'Bundesarchiv, relatórios de interrogatório da Gestapo, correspondência diplomática com Moscou',
    thesisSummary: 'Trabalho de referência definitiva sobre a ascensão de Hitler, a cumplicidade nos acordos comerciais com a URSS e as atrocidades cometidas pelas Einsatzgruppen e pela Wehrmacht na Frente Oriental.',
    relatedTopicIds: [8, 9, 10, 13],
    abntCitation: 'EVANS, Richard J. The Third Reich Trilogy. London: Penguin Books, 2003-2008. 3 v.',
    chicagoCitation: 'Evans, Richard J. 2003–2008. The Third Reich Trilogy. 3 vols. London: Penguin Books.'
  },
  {
    id: 'dikotter-great-famine',
    title: 'Mao\'s Great Famine: The History of China\'s Most Devastating Catastrophe, 1958–1962',
    authors: ['Frank Dikötter'],
    year: '2010',
    publisher: 'Walker & Company (Prêmio Samuel Johnson)',
    focus: 'O Grande Salto Adiante na China comunista e a fome resultante',
    archivalBase: 'Dezenas de arquivos provinciais e municipais do Partido Comunista Chinês abertos brevemente a pesquisadores',
    thesisSummary: 'Comprovou que pelo menos 45 milhões de pessoas morreram desnecessariamente de inanição ou tortura entre 1958 e 1962, revelando que a comida era sistematicamente usada como arma de controle político.',
    relatedTopicIds: [12, 16],
    abntCitation: 'DIKÖTTER, Frank. Mao\'s Great Famine: The History of China\'s Most Devastating Catastrophe, 1958–1962. New York: Walker & Company, 2010.',
    chicagoCitation: 'Dikötter, Frank. 2010. Mao\'s Great Famine. New York: Walker & Company.'
  },
  {
    id: 'dikotter-cultural-revolution',
    title: 'The Cultural Revolution: A People\'s History, 1962―1976',
    authors: ['Frank Dikötter'],
    year: '2016',
    publisher: 'Bloomsbury Press',
    focus: 'A Revolução Cultural de Mao, os Guardas Vermelhos e o fanatismo ideológico',
    archivalBase: 'Relatórios do Bureau de Segurança Pública chinês, cartas de cidadãos e registros médicos dos expurgos',
    thesisSummary: 'Retrata como o apelo de Mao aos jovens estudantes lançou o país no caos fratricida, na destruição do patrimônio cultural chinês e no assassinato em massa de professores, artistas e dissidentes.',
    relatedTopicIds: [4, 16, 18],
    abntCitation: 'DIKÖTTER, Frank. The Cultural Revolution: A People\'s History, 1962–1976. London: Bloomsbury Press, 2016.',
    chicagoCitation: 'Dikötter, Frank. 2016. The Cultural Revolution: A People\'s History, 1962–1976. London: Bloomsbury Press.'
  },
  {
    id: 'kiernan-pol-pot',
    title: 'The Pol Pot Regime: Race, Power, and Genocide in Cambodia under the Khmer Rouge, 1975-79',
    authors: ['Ben Kiernan'],
    year: '1996',
    publisher: 'Yale University Press',
    focus: 'O genocídio no Camboja sob o Khmer Vermelho e a ideologia agrária radical',
    archivalBase: 'Yale Cambodian Genocide Program, arquivos do centro de detenção S-21, entrevistas com sobreviventes e refugiados',
    thesisSummary: 'Demonstra como o regime comunista de Pol Pot mesclou o dogma stalinista de liquidação de classes com o racismo contra minorias étnicas (vietnamitas, cham e chineses), exterminando 1,7 milhão de cambojanos.',
    relatedTopicIds: [11, 13, 16],
    abntCitation: 'KIERNAN, Ben. The Pol Pot Regime: Race, Power, and Genocide in Cambodia under the Khmer Rouge, 1975-79. New Haven: Yale University Press, 1996.',
    chicagoCitation: 'Kiernan, Ben. 1996. The Pol Pot Regime. New Haven: Yale University Press.'
  },
  {
    id: 'chandler-brother-one',
    title: 'Brother Number One: A Political Biography of Pol Pot',
    authors: ['David P. Chandler'],
    year: '1992',
    publisher: 'Westview Press',
    focus: 'Biografia política de Saloth Sar (Pol Pot) e a dinâmica totalitária do Kampuchea Democrático',
    archivalBase: 'Documentos do Comitê Central do Partido Comunista do Kampuchea, arquivos confessionais de Tuol Sleng',
    thesisSummary: 'Reconstitui como a paranoia conspiratória e a adoração pelo comunismo stalinista e maoísta levaram Pol Pot a despovoar cidades inteiras e estabelecer os "Campos da Morte".',
    relatedTopicIds: [3, 13, 16],
    abntCitation: 'CHANDLER, David P. Brother Number One: A Political Biography of Pol Pot. Boulder: Westview Press, 1992.',
    chicagoCitation: 'Chandler, David P. 1992. Brother Number One: A Political Biography of Pol Pot. Boulder: Westview Press.'
  },
  {
    id: 'cumings-korean-war',
    title: 'The Korean War: A History',
    authors: ['Bruce Cumings'],
    year: '2010',
    publisher: 'Modern Library',
    focus: 'Guerra da Coreia (1950–1953), contexto da Guerra Fria e envolvimento de Stalin e Mao',
    archivalBase: 'NARA (Record Group 338), despachos militares dos EUA e documentos desclassificados do CWIHP em Moscou',
    thesisSummary: 'Análise minuciosa das origens do conflito na península coreana, evidenciando as motivações de Kim Il-sung, a autorização final concedida por Stalin e o violento choque entre o bloco comunista e as forças da ONU.',
    relatedTopicIds: [15, 16],
    abntCitation: 'CUMINGS, Bruce. The Korean War: A History. New York: Modern Library, 2010.',
    chicagoCitation: 'Cumings, Bruce. 2010. The Korean War: A History. New York: Modern Library.'
  },
  {
    id: 'perez-stable-cuba',
    title: 'The Cuban Revolution: Origins, Course, and Legacy',
    authors: ['Marifeli Pérez-Stable'],
    year: '1993',
    publisher: 'Oxford University Press',
    focus: 'Revolução Cubana de 1959, adesão ao modelo soviético e militarização social',
    archivalBase: 'Documentos do governo cubano, despachos diplomáticos da América Latina e do Bloco Soviético',
    thesisSummary: 'Examina a consolidação do poder de Fidel Castro, a rápida subordinação econômica e ideológica de Havana a Moscou e o impacto da exportação de guerrilhas comunistas para o Terceiro Mundo.',
    relatedTopicIds: [15, 16],
    abntCitation: 'PÉREZ-STABLE, Marifeli. The Cuban Revolution: Origins, Course, and Legacy. New York: Oxford University Press, 1993.',
    chicagoCitation: 'Pérez-Stable, Marifeli. 1993. The Cuban Revolution: Origins, Course, and Legacy. New York: Oxford University Press.'
  }
];
