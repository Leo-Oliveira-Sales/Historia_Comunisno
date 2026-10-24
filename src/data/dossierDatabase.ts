import { DossierTopic, QuizQuestion } from '../types/dossier';

export const DOSSIER_TOPICS: DossierTopic[] = [
  {
    id: 1,
    categoryNumber: '01',
    title: 'Revolução Russa e Tomada do Poder',
    category: 'Revolução Russa',
    period: '1905-1917',
    periodLabel: '1905–1917 · Queda Czarista e Outubro',
    tagline: 'Domingo Sangrento de 1905, Revoluções de Fevereiro e Outubro de 1917 e dissolução da Constituinte.',
    summary: 'A trajetória de desagregação do Império Russo através da revolta popular de 1905, a abdicação do Czar Nicolau II em fevereiro de 1917, a dualidade de poderes entre o Governo Provisório e o Soviete de Petrogrado, culminando no golpe armado bolchevique de 25 de outubro (7 de novembro) de 1917 e no encerramento forçado da Assembleia Constituinte eleita em janeiro de 1918.',
    mainSubjects: ['Revolução de 1905', 'Revolução de Fevereiro de 1917', 'Revolução de Outubro de 1917', 'Teses de Abril de Lenin', 'Dissolução da Assembleia Constituinte'],
    historicalContext: 'Com o colapso econômico e militar da Rússia na Primeira Guerra Mundial, motins de operários e soldados forçaram a abdicação de Nicolau II. Os bolcheviques, sob liderança de Lenin e Trotsky, capitalizaram o descontentamento com o slogan "Paz, Pão e Terra". Ao tomarem os centros nevrálgicos de Petrogrado, assumiram o controle governamental antes da reunião do II Congresso dos Sovietes.',
    academicConsensus: 'Historiadores contemporâneos como Richard Pipes e Orlando Figes documentam que a tomada de poder em outubro foi uma insurreição militar conspiratória altamente coordenada, seguida da repressão imediata ao pluripartidarismo socialista (mencheviques e socialistas-revolucionários) e pelo fechamento à mão armada da Assembleia Constituinte, onde os bolcheviques obtiveram menos de um quarto dos votos.',
    keyActors: ['Vladimir Lenin', 'Leon Trotsky', 'Alexander Kerensky', 'Nicolau II'],
    historiansInvolved: ['Sheila Fitzpatrick', 'J. Arch Getty', 'Orlando Figes', 'Richard Pipes'],
    historicalImpact: 'Encerrou mais de três séculos da dinastia Romanov, liquidou a jovem experiência parlamentar russa e estabeleceu as bases do primeiro Estado socialista unipartidário da história moderna.',
    quote: {
      text: 'Todo o poder aos sovietes! Não apoiar em nada o Governo Provisório.',
      author: 'Vladimir Lenin',
      context: 'Teses de Abril, Pravda nº 26, 7 de abril de 1917'
    },
    primarySources: [
      {
        title: 'Decreto sobre a Paz e Decreto sobre a Terra (Outubro de 1917)',
        institution: 'Yale Avalon Project / Soviet Diplomatic Archives',
        documentType: 'Decreto / Ordem',
        year: '1917',
        archiveReference: 'RGASPI f. 2, op. 1, d. 4390 / Yale Avalon Coll. Soviet Decrees',
        transcriptionPt: 'O Governo Operário e Camponês abole imediatamente a propriedade latifundiária sobre a terra sem qualquer indenização. As terras passam à disposição dos comitês agrários locais.',
        abntCitation: 'LENIN, V. I. Decretos do II Congresso dos Sovietes de Toda a Rússia. Moscou: Coleção Documental do Estado Soviético, 1917. Disponível via Yale Avalon Project.',
        chicagoCitation: 'Lenin, Vladimir. 1917. "Decrees on Peace and Land." Second All-Russian Congress of Soviets. Yale Avalon Historical Collection.',
        relatedHistorians: ['Sheila Fitzpatrick']
      },
      {
        title: 'Decreto de Dissolução da Assembleia Constituinte de Toda a Rússia (6 de janeiro de 1918)',
        institution: 'German History in Documents and Images / Library of Congress',
        documentType: 'Decreto / Ordem',
        year: '1918',
        archiveReference: 'Izvestia nº 5 (269), 6 de janeiro de 1918; LoC Revelations Box 1',
        transcriptionPt: 'A Assembleia Constituinte, eleita sob velhas listas e controlada pela burguesia contrarrevolucionária, recusou-se a reconhecer a Declaração dos Direitos do Povo Trabalhador. O Comitê Executivo Central decreta: a Assembleia Constituinte fica dissolvida.',
        abntCitation: 'RÚSSIA SOVIÉTICA. Decreto sobre a Dissolução da Assembleia Constituinte. VTsIK, 6 de janeiro de 1918. Arquivo Estatal RGASPI / Library of Congress.',
        chicagoCitation: 'All-Russian Central Executive Committee. 1918. "Decree on the Dissolution of the Constituent Assembly." Petrograd: VTsIK.',
        relatedHistorians: ['J. Arch Getty']
      }
    ]
  },
  {
    id: 2,
    categoryNumber: '02',
    title: 'Lenin e o Bolchevismo: Monopólio e Repressão',
    category: 'Lenin e o Bolchevismo',
    period: '1917-1924',
    periodLabel: '1917–1924 · Governo de Lenin e Guerra Civil',
    tagline: 'Terror Vermelho, criação da Cheka por Dzerzhinsky, revolta de marinheiros em Kronstadt e rebelião de Tambov.',
    summary: 'A consolidação do monopólio político bolchevique durante a Guerra Civil Russa através da criação da polícia política (Cheka), a decretação oficial do Terror Vermelho em setembro de 1918, o esmagamento armado dos marinheiros de Kronstadt (1921) e a repressão química e armada da insurreição camponesa de Tambov liderada por Antonov.',
    mainSubjects: ['Terror Vermelho', 'Criação da Cheka (VChK)', 'Revolta de Kronstadt (1921)', 'Rebelião Camponesa de Tambov', 'Comunismo de Guerra e Proibição de Frações'],
    historicalContext: 'Após atentados contra dirigentes bolcheviques em 1918, o Conselho de Comissários do Povo formalizou a política de Terror Vermelho, autorizando execuções sumárias de reféns da nobreza, burguesia e opositores socialistas. A requisição forçada de grãos no campo gerou revoltas massivas de camponeses em Tambov e de marinheiros outrora leais em Kronstadt.',
    academicConsensus: 'Documentos do Arquivo RGASPI e estudos de historiadores como Nicolas Werth (O Livro Negro do Comunismo), Lynne Viola e Oleg Khlevniuk demonstram que as estruturas concentracionárias e o aparelho punitivo de Estado foram concebidos e implementados sob a supervisão direta de Lenin e Felix Dzerzhinsky, antes da ascensão de Stalin.',
    keyActors: ['Vladimir Lenin', 'Felix Dzerzhinsky', 'Mikhail Tukhachevsky', 'Stepan Petrichenko'],
    historiansInvolved: ['Oleg V. Khlevniuk', 'Lynne Viola', 'J. Arch Getty', 'Richard Pipes'],
    historicalImpact: 'Eliminou qualquer pluralismo de esquerda na Rússia, converteu os sovietes em meros órgãos de transmissão do Comitê Central e estabeleceu a polícia secreta como pilar do poder estatal.',
    quote: {
      text: 'É imperativo conduzir um terror de massas sem piedade contra os kulaks, padres e guardas-brancos; fechar os indivíduos suspeitos em campos de concentração.',
      author: 'Vladimir Lenin',
      context: 'Telegrama de Lenin aos bolcheviques de Penza, 11 de agosto de 1918 (RGASPI f. 2, op. 1, d. 6898)'
    },
    primarySources: [
      {
        title: 'Ordem de Enforcamento de Penza (11 de agosto de 1918)',
        institution: 'RGASPI (Arquivo Estatal Russo de História Sociopolítica)',
        documentType: 'Telegrama Oficial',
        year: '1918',
        archiveReference: 'RGASPI f. 2, op. 1, d. 6898',
        transcriptionPt: 'Camaradas! A insurreição dos kulaks deve ser esmagada sem piedade. 1) Enforcar publicamente (de modo que a população veja) nada menos que 100 kulaks e sanguessugas conhecidos. 2) Publicar seus nomes. 3) Tomar todo o seu trigo. Façam isso de forma que as pessoas a centenas de verstas vejam e tremam.',
        abntCitation: 'LENIN, V. I. Instrução aos Comissários do Povo em Penza. 11 de agosto de 1918. Arquivo RGASPI f. 2, op. 1, d. 6898. Transcrição catalogada.',
        chicagoCitation: 'Lenin, Vladimir. 1918. "Penza Hanging Order." Russian State Archive of Socio-Political History (RGASPI), fond 2, opis 1, delo 6898.'
      },
      {
        title: 'Resolução da Tripulação do Navio Petropavlovsk (Kronstadt, 28 de fevereiro de 1921)',
        institution: 'Hoover Institution Archives / Memorial Society',
        documentType: 'Decreto / Ordem',
        year: '1921',
        archiveReference: 'Hoover Archival Document Coll. Russian Civil War, Box 14',
        transcriptionPt: 'Exigimos: 1. Novas eleições secretas para os sovietes com plena liberdade de agitação; 2. Liberdade de expressão e de imprensa para operários, camponeses e anarquistas; 3. Libertação de todos os presos políticos socialistas; 4. Fim do monopólio do Partido Comunista.',
        abntCitation: 'MARINHEIROS DE KRONSTADT. Resolução da Reunião Geral da 1ª e 2ª Esquadras do Báltico. Kronstadt: Navio Petropavlovsk, 28 fev. 1921. Arquivo Hoover.',
        chicagoCitation: 'Kronstadt Sailors. 1921. "Resolution of the Petropavlovsk Meeting." Kronstadt Soviet. Hoover Institution Archives.'
      }
    ]
  },
  {
    id: 3,
    categoryNumber: '03',
    title: 'Stalin e o Grande Terror: Expurgos e Culto',
    category: 'Stalin e o Grande Terror',
    period: '1924-1953',
    periodLabel: '1924–1953 · Governo de Stalin',
    tagline: 'Os Julgamentos de Moscou, a Ordem Operacional nº 00447 do NKVD, expurgos militares e culto irrestrito ao líder.',
    summary: 'A escalada repressiva stalinista que atingiu o ápice entre 1936 e 1938. Os célebres processos judiciais forjados contra a liderança histórica do partido (Zinoviev, Kamenev, Bukharin), a liquidação da cúpula do Exército Vermelho e a massiva campanha de fuzilamentos clandestinos no bosque de Butovo e Sandarmokh com base em cotas numéricas diárias estabelecidas por Nikolai Yezhov.',
    mainSubjects: ['Processos de Moscou', 'Ordem nº 00447 do NKVD', 'Expurgo do Exército Vermelho (Caso Tukhachevsky)', 'Culto à Personalidade de Stalin', 'Cotas de Fuzilamento'],
    historicalContext: 'Após o assassinato suspeito de Sergei Kirov em 1934, Stalin promulgou leis extraordinárias suprimindo direito a defesa. A histeria contra "sabotadores" e "espiões trotskistas-fascistas" justificou a purga de cerca de 700.000 a 800.000 pessoas fuziladas em menos de dois anos, além de 1,5 milhão enviadas ao Gulag.',
    academicConsensus: 'A abertura dos arquivos pós-1991 (Oleg Khlevniuk, J. Arch Getty) provou que Stalin assinou pessoalmente 383 listas de execução com mais de 44.000 nomes de funcionários estatais e supervisionava as quotas de repressão por distrito geográfico.',
    keyActors: ['Iosif Stalin', 'Nikolai Yezhov', 'Lavrentiy Beria', 'Nikolai Bukharin', 'Lev Kamenev'],
    historiansInvolved: ['Oleg V. Khlevniuk', 'J. Arch Getty', 'Norman M. Naimark', 'Sheila Fitzpatrick'],
    historicalImpact: 'Consolidou o poder autocrático absoluto de Stalin, decapitou a inteligência das Forças Armadas às vésperas da invasão nazista de 1941 e incutiu terror psicológico pervasivo na sociedade soviética.',
    quote: {
      text: 'O camarada Stalin é o líder genial, mestre e pai de todos os povos que conduziu a pátria socialista à vitória indestrutível.',
      author: 'Pravda',
      context: 'Edição comemorativa do 60º aniversário de Stalin, 21 de dezembro de 1939'
    },
    primarySources: [
      {
        title: 'Ordem Operacional nº 00447 do NKVD (30 de julho de 1937)',
        institution: 'Memorial Human Rights Society / GARF / Library of Congress',
        documentType: 'Decreto / Ordem',
        year: '1937',
        archiveReference: 'GARF f. 9401, op. 1, d. 4157, ll. 1-24 / LoC Revelations Box 2',
        transcriptionPt: 'Operação de repressão contra ex-kulaks, criminosos e elementos anti-soviéticos. As pessoas sujeitas a repressão são divididas em duas categorias: 1ª Categoria: indivíduos mais hostis, sujeitos a fuzilamento imediato (cota inicial fixada em 72.950 pessoas); 2ª Categoria: indivíduos menos ativos, sentenciados a 8 a 10 anos de campo de concentração.',
        abntCitation: 'YEZHOV, Nikolai. Ordem Operacional nº 00447 do Comissariado do Povo de Assuntos Internos. Moscou: NKVD, 30 de julho de 1937. Arquivo Estatal da Federação Russa (GARF).',
        chicagoCitation: 'Yezhov, Nikolai. 1937. "Operational Order No. 00447: On the Operation to Repress Former Kulaks, Criminals and Other Anti-Soviet Elements." Moscow: NKVD. GARF.'
      },
      {
        title: 'Lista de Execuções assinada por Stalin e Molotov (12 de dezembro de 1938)',
        institution: 'Yale University Press (Annals of Communism) / Memorial Society / AP RF',
        documentType: 'Relatório de Inteligência',
        year: '1938',
        archiveReference: 'AP RF f. 3, op. 24, d. 419, ll. 165-168; Annals of Communism Series',
        transcriptionPt: 'Lista de indivíduos sujeitos a julgamento pelo Colégio Militar da Suprema Corte da URSS na 1ª Categoria (Fuzilamento). No topo do cabeçalho consta manuscrito: "A favor. I. Stalin. V. Molotov".',
        abntCitation: 'STALIN, Iosif; MOLOTOV, Vyacheslav. Listas de Fuzilamento do Politburo. Moscou: Arquivo Presidencial da Federação Russa, 1938. Annals of Communism.',
        chicagoCitation: 'Stalin, Joseph, and Vyacheslav Molotov. 1938. "Stalinist Execution Lists for the Military Collegium." Moscow: Archive of the President of the Russian Federation.'
      }
    ]
  },
  {
    id: 4,
    categoryNumber: '04',
    title: 'Perseguição Religiosa, Científica e Censura',
    category: 'Perseguição Religiosa e Intelectual',
    period: '1924-1953',
    periodLabel: '1917–1953 · Repressão Ideológica',
    tagline: 'Liga dos Ateus Militantes, destruição de templos, o obscurantismo do lysenkoísmo e a censura do Glavlit.',
    summary: 'A tentativa sistemática do Estado soviético de extirpar a fé religiosa e subordinar as ciências e as artes aos dogmas do marxismo-leninismo. Incluiu a dinamitação da Catedral de Cristo Salvador (1931), a execução de dezenas de milhares de padres ortodoxos, rabinos e clérigos islâmicos, o aprisionamento de cientistas (como Nikolai Vavilov) e a imposição do realismo socialista.',
    mainSubjects: ['Liga dos Ateus Militantes', 'Destruição de Templos Religiosos', 'Caso Trofim Lysenko na Genética', 'Censura Prévia (Glavlit)', 'Perseguição a Escritores (Mandelstam, Akhmatova, Pasternak)'],
    historicalContext: 'A Constituição soviética garantia formalmente liberdade de culto, mas o decreto de separação Igreja-Estado permitiu confisco de bens e campanhas de difamação pública. Na ciência, a biologia mendeliana foi declarada "ciência burguesa reacionária" em favor da pseudociência lamarckiana de Lysenko, arruinando a agricultura.',
    academicConsensus: 'A historiografia documenta que a repressão à Igreja Ortodoxa e a minorias religiosas foi uma das mais ferozes do século XX. O caso Lysenko é estudado como exemplo máximo de subversão da verdade científica pelo dogma ideológico sob coerção policial.',
    keyActors: ['Emelian Yaroslavsky (Liga dos Ateus)', 'Trofim Lysenko', 'Nikolai Vavilov', 'Osip Mandelstam'],
    historiansInvolved: ['Sheila Fitzpatrick', 'Hiroaki Kuromiya', 'Richard Pipes'],
    historicalImpact: 'Centenas de milhares de mosteiros e templos históricos foram destruídos ou transformados em depósitos e prisões; a genética soviética retrocedeu décadas em relação ao padrão internacional.',
    quote: {
      text: 'A genética formal e a teoria dos genes de Morgan são invenções burguesas decadentes. O ambiente modifica diretamente as características hereditárias da planta cultivada.',
      author: 'Trofim Lysenko',
      context: 'Discurso na Sessão da Academia Lenin de Ciências Agrícolas (VASKhNIL), agosto de 1948'
    },
    primarySources: [
      {
        title: 'Decreto sobre as Associações Religiosas de Toda a Rússia (8 de abril de 1929)',
        institution: 'Library of Congress / USHMM',
        documentType: 'Decreto / Ordem',
        year: '1929',
        archiveReference: 'Sobranie Uzakonenii RSFSR, 1929, nº 35, art. 353 / LoC Revelations Box 3',
        transcriptionPt: 'É terminantemente proibido às organizações religiosas criar fundos de ajuda mútua, organizar círculos para estudos bíblicos ou literários, abrir bibliotecas e salas de leitura, ou ministrar qualquer instrução religiosa a menores de idade.',
        abntCitation: 'UNIÃO SOVIÉTICA. Decreto sobre Associações Religiosas. VTsIK e Sovnarkom da RSFSR, 8 de abril de 1929. Tradução arquivada Library of Congress / Harvard.',
        chicagoCitation: 'All-Russian Central Executive Committee. 1929. "Law on Religious Associations." Moscow: Sovnarkom. Library of Congress.'
      },
      {
        title: 'Prontuário do NKVD sobre a Prisão do Acadêmico Nikolai Vavilov (6 de agosto de 1940)',
        institution: 'Memorial Society / Arquivos Centrais do FSB',
        documentType: 'Relatório de Inteligência',
        year: '1940',
        archiveReference: 'FSB Archival File nº R-23114 (Vavilov, N. I.)',
        transcriptionPt: 'Acusação: Vavilov liderava organização antisoviética de sabotagem no Instituto de Produção Vegetal, sabotando a produção agrícola da URSS em conluio com centros científicos capitalistas britânicos. Sentença: Pena capital (comutada para 20 anos; Vavilov morreu de inanição na prisão de Saratov em 1943).',
        abntCitation: 'NKVD. Dossiê Investigativo nº R-23114: Nikolai Ivanovich Vavilov. Moscou: Arquivo Central da Segurança de Estado (FSB), 1940.',
        chicagoCitation: 'People\'s Commissariat for Internal Affairs (NKVD). 1940. "Investigative Case of Academician N. I. Vavilov." Central FSB Archives.'
      }
    ]
  },
  {
    id: 5,
    categoryNumber: '05',
    title: 'Economia e Sociedade: Planos Quinquenais e Escassez',
    category: 'Economia e Sociedade Soviética',
    period: '1924-1953',
    periodLabel: '1928–1985 · Economia de Comando',
    tagline: 'Gosplan, metas industriais irrealistas, coletivização forçada, stakhanovismo e as filas perenes do consumidor.',
    summary: 'A edificação do modelo de planificação centralizada soviética após o fim da NEP. O Estado monopolizou os meios de produção, impôs a coletivização forçada da terra através dos Kolkhozes, priorizou indústrias pesadas e militares em detrimento dos bens de consumo básico, gerando escassez crônica, filas e o florescimento da economia informal subterrânea (blat).',
    mainSubjects: ['Planos Quinquenais (Pyatiletka)', 'Gosplan e Metas Centrais', 'Stakhanovismo e Mobilização Operária', 'Filas e Escassez de Alimentos', 'Kolkhozes e Sovkhozes'],
    historicalContext: 'Em 1928, Stalin proclamou a necessidade de "superar o atraso de cem anos em dez anos, ou seremos esmagados". O esforço colossal de industrialização foi custeado pela extração predatória de recursos do campo e pelo trabalho compulsório penal, sacrificando o padrão de vida civil.',
    academicConsensus: 'Economistas como Alec Nove, R. W. Davies e Stephen G. Wheatcroft demonstraram a irracionalidade intrínseca da economia de comando soviética ("economia de escassez"), incapaz de calcular preços de mercado, coordenar milhões de insumos e satisfazer as necessidades da população.',
    keyActors: ['Iosif Stalin', 'Valerian Kuibyshev (Gosplan)', 'Alexei Stakhanov'],
    historiansInvolved: ['Sheila Fitzpatrick', 'R. W. Davies', 'Stephen G. Wheatcroft', 'Lynne Viola'],
    historicalImpact: 'Construiu indústrias de base e armamentos que sustentaram o esforço da Segunda Guerra Mundial, mas condenou gerações a moradias comunais precárias (kommunalka), racionamento e baixa qualidade de bens vitais.',
    quote: {
      text: 'O plano não é apenas uma previsão; ele é uma diretiva que tem força de lei para todos os escalões da produção socialista.',
      author: 'Resolução do XV Congresso do PCUS',
      context: 'Moscou, dezembro de 1927'
    },
    primarySources: [
      {
        title: 'Diretrizes do Primeiro Plano Quinquenal de Desenvolvimento Econômico da URSS (1928-1932)',
        institution: 'Cambridge University Press / Yale Economic History Collections',
        documentType: 'Decreto / Ordem',
        year: '1929',
        archiveReference: 'Gosplan SSSR: Pyatiletnii plan narodno-khoziaistvennogo stroitelstva SSSR, Moscou, 1929',
        transcriptionPt: 'O Plano Quinquenal estabelece o crescimento anual da indústria pesada em mais de 20%, priorizando usinas hidrelétricas, siderurgia nos Montes Urais e tratores, subordinando a indústria leve à acumulação interna.',
        abntCitation: 'GOSPLAN URSS. O Primeiro Plano Quinquenal de Construção Econômica Nacional da URSS. Moscou: Comitê Estatal de Planejamento, 1929.',
        chicagoCitation: 'Gosplan USSR. 1929. "The Five-Year Plan for the Economic Construction of the USSR." Moscow: State Planning Commission.'
      }
    ]
  },
  {
    id: 6,
    categoryNumber: '06',
    title: 'Expansão e Ocupações Soviéticas',
    category: 'Expansão e Ocupações',
    period: '1924-1953',
    periodLabel: '1939–1945 · Invasões e Anexações',
    tagline: 'Invasão da Polônia oriental, anexação forçada dos Estados Bálticos, Guerra de Inverno e Besarábia.',
    summary: 'A expansão territorial da URSS em 1939-1940 executada em estrita conformidade com as cláusulas do Protocolo Secreto Molotov-Ribbentrop. O Exército Vermelho invadiu a Polônia em 17 de setembro de 1939, forçou tratados de "assistência mútua" sobre Estônia, Letônia e Lituânia culminando na anexação em 1940, atacou a Finlândia na Guerra de Inverno e tomou a Besarábia e Bucovina do Norte da Romênia.',
    mainSubjects: ['Invasão da Polônia (17/09/1939)', 'Anexação dos Estados Bálticos (1940)', 'Guerra de Inverno contra a Finlândia (1939-1940)', 'Expulsão da URSS da Liga das Nações', 'Desfile Militar Conjunto Teuto-Soviético em Brest-Litovsk'],
    historicalContext: 'Enquanto o Reino Unido e a França declararam guerra à Alemanha após a invasão da Polônia ocidental, a URSS avançou sobre o território polonês oriental afirmando hipocritamente "proteger as populações irmãs ucranianas e bielorrussas do Estado polonês falido".',
    academicConsensus: 'A historiografia internacional (Timothy Snyder, Geoffrey Roberts, Norman Davies) reconhece a ocupação soviética de 1939-1941 como um regime de terror caracterizado por deportações massivas de civis para a Sibéria e liquidação sistemática das elites administrativas polonesas e bálticas.',
    keyActors: ['Vyacheslav Molotov', 'Iosif Stalin', 'Heinz Guderian', 'Semyon Krivoshein (Brest)'],
    historiansInvolved: ['Timothy Snyder', 'Geoffrey Roberts', 'Anne Applebaum', 'Hiroaki Kuromiya'],
    historicalImpact: 'Rearranjou as fronteiras do Leste Europeu, impôs a sovietização forçada sobre milhões de cidadãos e levou à expulsão da URSS da Liga das Nações em dezembro de 1939 por agressão militar covarde.',
    quote: {
      text: 'O Estado polonês e seu governo deixaram de existir. As cláusulas dos tratados concluídos entre a URSS e a Polônia perderam o efeito.',
      author: 'Vyacheslav Molotov',
      context: 'Nota diplomática entregue ao embaixador polonês em Moscou, 17 de setembro de 1939'
    },
    primarySources: [
      {
        title: 'Nota Diplomática Soviética ao Governo Polonês (17 de setembro de 1939)',
        institution: 'Yale Avalon Project: Documents on Soviet-Polish Relations',
        documentType: 'Telegrama Oficial',
        year: '1939',
        archiveReference: 'Yale Avalon Doc: Nazi-Soviet Relations 1939-1941, No. 41',
        transcriptionPt: 'O Governo soviético deu ordens ao Alto Comando do Exército Vermelho para ordenar que as tropas cruzem a fronteira e tomem sob sua proteção a vida e propriedade da população da Ucrânia Ocidental e da Bielorrússia Ocidental.',
        abntCitation: 'MOLOTOV, Vyacheslav. Nota do Governo Soviético ao Embaixador da Polônia em Moscou. 17 de setembro de 1939. Yale Avalon Project.',
        chicagoCitation: 'Molotov, Vyacheslav. 1939. "Soviet Diplomatic Note to the Polish Ambassador." Moscow: People\'s Commissariat of Foreign Affairs. Yale Avalon Project.'
      },
      {
        title: 'Tratado de Não Agressão e Limites Soviético-Estadunidenses / Bálticos (Verão de 1940)',
        institution: 'German History in Documents and Images (GHDI)',
        documentType: 'Tratado Diplomático',
        year: '1940',
        archiveReference: 'GHDI Doc-1940-Baltic-Annexation / RGASPI f. 17',
        transcriptionPt: 'Declarações conjuntas dos novos parlamentos marionetes criados após a entrada do Exército Vermelho requerendo a admissão da Lituânia, Letônia e Estônia como repúblicas federadas da URSS.',
        abntCitation: 'SUPREMO SOVIETE DA URSS. Resoluções sobre a Admissão das Repúblicas Soviéticas Socialistas da Lituânia, Letônia e Estônia. Moscou, agosto de 1940. GHDI Archive.',
        chicagoCitation: 'Supreme Soviet of the USSR. 1940. "Decrees on the Admission of the Baltic Republics." GHDI.'
      }
    ]
  },
  {
    id: 7,
    categoryNumber: '07',
    title: 'Crises e Dissolução da URSS',
    category: 'Crises e Dissolução da URSS',
    period: '1985-1991',
    periodLabel: '1985–1991 · Era Gorbachev e Colapso',
    tagline: 'O segredo em Chernobyl, a revolta operária de Novocherkassk, Glasnost, Perestroika e o Tratado de Belavezha.',
    summary: 'A trajetória de esgotamento do sistema comunista: desde o massacre encoberto de operários em Novocherkassk (1962), a catástrofe de Chernobyl (1986) que escancarou a cultura de mentira e censura estatal, até as reformas de Mikhail Gorbachev (abertura política e reestruturação econômica) que libertaram forças centrífugas, culminando no colapso da URSS em 25 de dezembro de 1991.',
    mainSubjects: ['Acidente Nuclear de Chernobyl (1986)', 'Massacre de Novocherkassk (1962)', 'Glasnost (Transparência) e Perestroika (Reestruturação)', 'Golpe da Linha-Dura de Agosto de 1991 (GKChP)', 'Acordos de Belavezha e Fim da URSS'],
    historicalContext: 'A tentativa tardia de reformar uma economia falida por gastos militares e paralisada por uma burocracia ineficiente levou à perda do controle sobre a imprensa e à eclosão de movimentos de independência nacional na Ucrânia, nos Bálticos e no Cáucaso.',
    academicConsensus: 'Stephen Kotkin e Serhii Plokhy ressaltam que Chernobyl desmoralizou a legitimidade moral e técnica do Partido Comunista perante os cidadãos, enquanto a recusa de Gorbachev em usar repressão em massa permitiu a desintegração pacífica do império.',
    keyActors: ['Mikhail Gorbachev', 'Boris Yeltsin', 'Nikita Kruschev (Novocherkassk)', 'Gennady Yanayev'],
    historiansInvolved: ['Stephen Kotkin', 'Serhii Plokhy', 'Oleg V. Khlevniuk'],
    historicalImpact: 'Pôs fim a 74 anos de regime comunista em Moscou, desmantelou a superpotência nuclear euroasiática e libertou 15 repúblicas independentes.',
    quote: {
      text: 'O antigo sistema desabou antes que o novo começasse a funcionar, e a crise na sociedade tornou-se mais aguda... Renuncio ao cargo de Presidente da URSS.',
      author: 'Mikhail Gorbachev',
      context: 'Discurso de renúncia televisionado em Moscou, 25 de dezembro de 1991'
    },
    primarySources: [
      {
        title: 'Relatório Secreto do Politburo sobre o Acidente de Chernobyl (29 de abril de 1986)',
        institution: 'Wilson Center Cold War International History Project',
        documentType: 'Relatório de Inteligência',
        year: '1986',
        archiveReference: 'CWIHP Digital Archive / TsDAHO Ucrânia f. 1, op. 25, spr. 3113',
        transcriptionPt: 'Ata secreta: A radiação na usina e em Pripyat excede os limites de segurança em milhares de vezes. Decidido: manter silêncio informativo total para evitar pânico público e cancelar comunicados à imprensa internacional.',
        abntCitation: 'POLITBURO DO PCUS. Atas das Sessões Secretas sobre as Consequências da Avaria no Reator 4 da Usina Atômica de Chernobyl. 29 de abril de 1986. Wilson Center Digital Archive.',
        chicagoCitation: 'Politburo of the CPSU. 1986. "Top Secret Protocol on the Disaster at Chernobyl." Wilson Center Cold War International History Project.'
      },
      {
        title: 'Acordo de Belavezha sobre a Criação da Comunidade de Estados Independentes (8 de dezembro de 1991)',
        institution: 'Yale Avalon Project / Arquivos Nacionais de Minsk',
        documentType: 'Tratado Diplomático',
        year: '1991',
        archiveReference: 'Vedomosti SND i VS RF, 1991, nº 51, art. 1798',
        transcriptionPt: 'Nós, dirigentes da República da Bielorrússia, Federação Russa e Ucrânia, constatamos que a União das Repúblicas Socialistas Soviéticas, enquanto sujeito de direito internacional e realidade geopolítica, cessa de existir.',
        abntCitation: 'RÚSSIA; UCRÂNIA; BIELORRÚSSIA. Acordo que Institui a Comunidade de Estados Independentes (Pacto de Belavezha). Minsk, 8 de dezembro de 1991.',
        chicagoCitation: 'Yeltsin, Boris, Leonid Kravchuk, and Stanislav Shushkevich. 1991. "The Belavezha Accords: Dissolution of the Soviet Union." Minsk.'
      }
    ]
  },
  {
    id: 8,
    categoryNumber: '08',
    title: 'Stalin, Hitler e o Nazismo: Pactos e Comércio',
    category: 'Stalin, Hitler e Nazismo',
    period: '1924-1953',
    periodLabel: '1939–1941 · Aliança Tática Molotov-Ribbentrop',
    tagline: 'O Tratado de Não-Agressão de 23 de agosto de 1939, Protocolo Secreto, tratados comerciais e partilha da Europa.',
    summary: 'A estreita cooperação diplomática, militar e econômica entre a União Soviética stalinista e a Alemanha nacional-socialista de Adolf Hitler entre agosto de 1939 e junho de 1941. O pacto permitiu a Hitler invadir a Polônia sem receio de guerra em duas frentes, enquanto a URSS expandiu suas fronteiras e forneceu milhões de toneladas de petróleo, grãos, borracha e metais vitais para o esforço de guerra nazista contra a Grã-Bretanha.',
    mainSubjects: ['Pacto Molotov-Ribbentrop (23/08/1939)', 'Protocolo Secreto Adicional (Partilha da Polônia e Bálticos)', 'Tratado de Fronteiras e Amizade Teuto-Soviético (28/09/1939)', 'Acordo Comercial Econômico de 1940', 'Discurso de Molotov no Reichstag e Reunião em Berlim'],
    historicalContext: 'Após o fracasso das negociações com a França e Grã-Bretanha, Stalin optou pela partilha imperial do Leste Europeu com Hitler. Durante quase dois anos, a propaganda soviética cessou qualquer ataque ao fascismo e retratou as democracias ocidentais como as únicas instigadoras da guerra.',
    academicConsensus: 'Documentos do Ministério das Relações Exteriores da Alemanha capturados pelos Aliados e desclassificados pelo Yale Avalon Project, NARA (Record Group 242) e GHDI confirmam a autenticidade inquestionável do Protocolo Secreto (negado pela URSS até 1989) e a dependência da economia de guerra alemã dos carregamentos soviéticos até as vésperas da Operação Barbarossa.',
    keyActors: ['Iosif Stalin', 'Adolf Hitler', 'Vyacheslav Molotov', 'Joachim von Ribbentrop'],
    historiansInvolved: ['Geoffrey Roberts', 'Timothy Snyder', 'Ian Kershaw', 'Richard J. Evans'],
    historicalImpact: 'Desencadeou a Segunda Guerra Mundial na Europa, causou a destruição da Polônia independente e fortaleceu militarmente a máquina de guerra do Terceiro Reich.',
    quote: {
      text: 'Sei o quanto o povo alemão ama seu Führer; gostaria, portanto, de beber à sua saúde.',
      author: 'Iosif Stalin',
      context: 'Brinde de Stalin em homenagem a Adolf Hitler no Kremlin, na noite de 23 de agosto de 1939 (Yale Avalon Project)'
    },
    primarySources: [
      {
        title: 'Protocolo Secreto Adicional ao Pacto de Não Agressão Teuto-Soviético (23 de agosto de 1939)',
        institution: 'Yale Avalon Project / German History in Documents and Images (GHDI) / NARA',
        documentType: 'Protocolo Secreto',
        year: '1939',
        archiveReference: 'Yale Avalon: Nazi-Soviet Relations 1939-1941, German Foreign Office Files; NARA RG 242; GHDI Doc-623',
        transcriptionPt: 'Por ocasião da assinatura do Tratado de Não Agressão, os plenipotenciários assinaram em discussão estritamente confidencial a questão dos limites de suas respectivas esferas de interesse no Leste Europeu: 1. No caso de uma reorganização territorial nos Estados Bálticos (Finlândia, Estônia, Letônia, Lituânia), o limite norte da Lituânia representará o limite das esferas de interesse da Alemanha e da URSS. 2. No caso da Polônia, as esferas de interesse serão delimitadas aproximadamente pelos rios Narew, Vístula e San. Assinado: J. v. Ribbentrop; V. Molotov.',
        abntCitation: 'ALEMANHA; UNIÃO SOVIÉTICA. Protocolo Secreto Adicional ao Pacto de Não-Agressão. Moscou, 23 de agosto de 1939. Yale Avalon Project: Nazi-Soviet Relations 1939-1941.',
        chicagoCitation: 'Ribbentrop, Joachim von, and Vyacheslav Molotov. 1939. "Secret Additional Protocol to the Treaty of Non-Aggression." Moscow: German Foreign Office and Soviet Commissariat for Foreign Affairs. Yale Avalon Project.'
      },
      {
        title: 'Acordo Econômico e Comercial Teuto-Soviético (11 de fevereiro de 1940)',
        institution: 'Persée (Manfred Schwendemann) / Bundesarchiv / Cambridge University Press',
        documentType: 'Tratado Diplomático',
        year: '1940',
        archiveReference: 'Reichsgesetzblatt / Schwendemann, Les relations économiques germano-soviétiques 1939-1941; Bundesarchiv R 43-II',
        transcriptionPt: 'A União Soviética compromete-se a fornecer à Alemanha nos primeiros 12 meses: 1 milhão de toneladas de grãos alimentícios, 900.000 toneladas de petróleo e derivados de combustível, 100.000 toneladas de algodão, 500.000 toneladas de minérios de ferro e metais raros (manganês, platina), permitindo furar o bloqueio naval britânico.',
        abntCitation: 'SCHWENDEMANN, Manfred. Les relations économiques germano-soviétiques, 1939-1941. Cahiers du Monde Russe et Soviétique / Persée, 1969. Transcrição dos tratados de intercâmbio.',
        chicagoCitation: 'Schwendemann, Manfred. 1969. "German-Soviet Economic Relations, 1939–1941." Cambridge and Paris: Persée Review.'
      }
    ]
  },
  {
    id: 9,
    categoryNumber: '09',
    title: 'Comunismo e Fascismo: Frentes e Rupturas',
    category: 'Comunismo e Fascismo',
    period: '1924-1953',
    periodLabel: '1920–1939 · Komintern e Totalitarismo',
    tagline: 'Mussolini e a matriz socialista, o Komintern, a tese do "Social-Fascismo" e as Frentes Populares de 1935.',
    summary: 'A complexa interação teórica e política entre os movimentos comunistas e fascistas no entreguerras. As origens de Benito Mussolini como diretor do jornal socialista Avanti! e líder da ala maximalista do PSI antes de fundar os Fasci di Combattimento; a catastrófica doutrina stalinista do "Social-Fascismo" (1928-1934) imposta pelo Komintern que rotulava os sociais-democratas como "a ala esquerda do fascismo", paralisando a resistência alemã à ascensão de Hitler; e a posterior guinada para as Frentes Populares no VII Congresso do Komintern (1935).',
    mainSubjects: ['Mussolini e a Ala Maximalista do PSI', 'Doutrina do Social-Fascismo do Komintern', 'VII Congresso da Internacional Comunista (1935)', 'Georgi Dimitrov e as Frentes Populares', 'Comparação Historiográfica do Totalitarismo'],
    historicalContext: 'A Terceira Internacional (Komintern), subordinada a Moscou, ordenou ao Partido Comunista da Alemanha (KPD) que tratasse os sociais-democratas (SPD) como inimigos primários, facilitando a ascensão do Partido Nazista em 1933.',
    academicConsensus: 'O United States Holocaust Memorial Museum (USHMM) e estudos de Robert O. Paxton, Kevin Passmore e Ian Kershaw analisam as analogias estruturais nos regimes totalitários: partido único, polícia política onipresente, culto carismático ao chefe, militarização social e eliminação forçada de grupos categorizados como "inimigos objetivos".',
    keyActors: ['Benito Mussolini', 'Ernst Thälmann (KPD)', 'Georgi Dimitrov', 'Iosif Stalin'],
    historiansInvolved: ['Robert O. Paxton', 'Kevin Passmore', 'Ian Kershaw', 'Andrea Graziosi'],
    historicalImpact: 'A divisão sectária promovida pela teoria do social-fascismo destruiu a República de Weimar; as posteriores Frentes Populares levaram a confrontos fratricidas na Guerra Civil Espanhola.',
    quote: {
      text: 'O fascismo e a social-democracia não são antípodas, mas irmãos gêmeos. A social-democracia é objetivamente a ala moderada do fascismo.',
      author: 'Iosif Stalin',
      context: 'Sobre a Situação Internacional, Pravda nº 214, 20 de setembro de 1924'
    },
    primarySources: [
      {
        title: 'Definição Histórica de Fascismo e Totalitarismo Comparado',
        institution: 'USHMM (United States Holocaust Memorial Museum)',
        documentType: 'Estudo Acadêmico Pari',
        year: '1933',
        archiveReference: 'USHMM Holocaust Encyclopedia: Totalitarianism & Fascism in Interwar Europe',
        transcriptionPt: 'Análise documental sobre as táticas totalitárias: o colapso da democracia parlamentar através da polarização radical, o uso de forças paramilitares, a censura total da imprensa e o controle corporativo da economia pelo Estado burocrático centralizador.',
        abntCitation: 'UNITED STATES HOLOCAUST MEMORIAL MUSEUM. Totalitarianism, Fascism, and Ideological Repression in Europe (1919-1945). Washington, DC: USHMM Encyclopedia, 2023.',
        chicagoCitation: 'United States Holocaust Memorial Museum. 2023. "Fascism and Totalitarianism: Interwar Historical Analysis." USHMM Historical Studies.'
      },
      {
        title: 'Relatório de Georgi Dimitrov no VII Congresso do Komintern (Agosto de 1935)',
        institution: 'German History in Documents and Images / Komintern Archives',
        documentType: 'Decreto / Ordem',
        year: '1935',
        archiveReference: 'RGASPI f. 495, op. 18, d. 1024; GHDI Doc Coll.',
        transcriptionPt: 'A ascensão do fascismo ao poder na Alemanha exige a substituição da tática de classe contra classe pela Frente Única Popular anti-fascista com todos os setores operários e democráticos.',
        abntCitation: 'DIMITROV, Georgi. A ofensiva do fascismo e as tarefas da Internacional Comunista. VII Congresso Mundial do Komintern. Cambridge University Press / RGASPI, 1935.',
        chicagoCitation: 'Dimitrov, Georgi. 1935. "The Fascist Offensive and the Tasks of the Communist International." VII Congress of the Comintern. Moscow.'
      }
    ]
  },
  {
    id: 10,
    categoryNumber: '10',
    title: 'Cooperação Militar Teuto-Soviética (1922-1933)',
    category: 'Cooperação e Contradições Políticas',
    period: '1917-1924',
    periodLabel: '1922–1933 · Tratado de Rapallo',
    tagline: 'O Tratado de Rapallo (1922) e os acordos secretos de armamento e treinamento entre Reichswehr e Exército Vermelho.',
    summary: 'A cooperação militar e tecnológica clandestina entre a República de Weimar alemã e a Rússia Soviética iniciada com o Tratado de Rapallo em 1922. Para burlar as restrições punitivas do Tratado de Versalhes, a Alemanha estabeleceu em território soviético centros secretos de testes de blindados (escola de tanques de Kama em Kazan), de aviação militar (escola de Lipetsk) e de guerra química (Tomka), em troca de treinamento tático da elite do Exército Vermelho.',
    mainSubjects: ['Tratado de Rapallo (1922)', 'Escola Secreta de Blindados de Kama (Kazan)', 'Centro de Aviação Militar de Lipetsk', 'Instalações de Armas Químicas em Tomka', 'General Hans von Seeckt e Trotsky'],
    historicalContext: 'Ambos os países eram nações párias derrotadas na Primeira Guerra Mundial e isoladas pela Liga das Nações. O chanceler alemão Walter Rathenau e o comissário soviético Georgiy Chicherin firmaram a renúncia mútua a reparações e pavimentaram o conluio militar secreto chefiado pelo general Hans von Seeckt.',
    academicConsensus: 'Pesquisas publicadas pela Cambridge University Press e Bundesarchiv (F. L. Carsten, Richard J. Evans) detalham os registros dos testes alemães na URSS onde futuros generais da Wehrmacht (como Heinz Guderian) e comandantes soviéticos aperfeiçoaram a doutrina de guerra móvel de blindados.',
    keyActors: ['Georgiy Chicherin', 'Walter Rathenau', 'Hans von Seeckt', 'Leon Trotsky'],
    historiansInvolved: ['Richard J. Evans', 'Geoffrey Roberts', 'Ian Kershaw'],
    historicalImpact: 'Permitiu que a Alemanha reconstruísse sua tecnologia militar proibida e que a União Soviética absorvesse a engenharia militar alemã durante a década de 1920.',
    quote: {
      text: 'A Polônia é o cerne do problema oriental. A existência da Polônia é intolerável e incompatível com os interesses vitais da Alemanha... A Rússia e a Alemanha devem conspirar juntas.',
      author: 'General Hans von Seeckt',
      context: 'Memorando secreto do Comandante da Reichswehr, 11 de setembro de 1922'
    },
    primarySources: [
      {
        title: 'Tratado de Rapallo entre a Alemanha e a República Socialista Federativa Soviética da Rússia (16 de abril de 1922)',
        institution: 'Yale Avalon Project / German History in Documents and Images',
        documentType: 'Tratado Diplomático',
        year: '1922',
        archiveReference: 'Yale Avalon Doc: Treaty of Rapallo; Reichsgesetzblatt 1922 II, p. 495',
        transcriptionPt: 'Artigo 1: Os dois Governos concordam que os acordos entre o Reich alemão e a RSFSR sobre as consequências da guerra serão regidos pela renúncia mútua a todas as reivindicações por custos de guerra e perdas de propriedade privada.',
        abntCitation: 'ALEMANHA; RÚSSIA SOVIÉTICA. Tratado de Rapallo. Rapallo, 16 de abril de 1922. Yale Avalon Project: Diplomatic Treaties Collection.',
        chicagoCitation: 'German Foreign Ministry and Russian Soviet Federative Socialist Republic. 1922. "The Treaty of Rapallo." Yale Avalon Project.'
      },
      {
        title: 'Cooperação Militar Alemã-Soviética na Década de 1920 (Documentos de Kama e Lipetsk)',
        institution: 'Cambridge University Press / Arquivo Militar Federal da Alemanha (BA-MA)',
        documentType: 'Estudo Acadêmico Pari',
        year: '1926',
        archiveReference: 'BA-MA RH 2/2218; Cambridge Historical Journal Series',
        transcriptionPt: 'Contratos operacionais secretos entre a empresa de fachada Sondergruppe R da Reichswehr e o Comissariado Militar Soviético para financiamento conjunto e testes com protótipos de tanques Krupp e Rheinmetall em Kazan.',
        abntCitation: 'CARSTEN, F. L. The Reichswehr and the Red Army, 1920-1933. Cambridge: Cambridge University Press, 1966. Arquivos BA-MA.',
        chicagoCitation: 'Carsten, Francis L. 1966. "The Reichswehr and the Red Army." Cambridge University Press.'
      }
    ]
  },
  {
    id: 11,
    categoryNumber: '11',
    title: 'O Sistema Gulag e o Trabalho Forçado',
    category: 'Gulag e Trabalho Forçado',
    period: '1924-1953',
    periodLabel: '1929–1953 · Trabalho Penitenciário em Massa',
    tagline: 'O arquipélago concentracionário: Belomorkanal, Kolyma, Vorkuta, Norilsk e a mortalidade forçada no Ártico.',
    summary: 'A vasta rede de campos de trabalho penitenciário forçado administrada pela Diretoria Geral dos Campos (GULAG) do NKVD. Milhões de prisioneiros políticos (condenados sob o célebre Artigo 58 por "crime contra-revolucionário") foram submetidos à escravidão estatal em condições polares inóspitas, construindo canais, ferrovias e extraindo ouro e carvão.',
    mainSubjects: ['Canal Mar Branco-Báltico (Belomorkanal)', 'Complexo de Minas de Ouro de Kolyma (Dalstroy)', 'Campos de Carvão de Vorkuta', 'Complexo Metalúrgico de Norilsk', 'Artigo 58 do Código Penal Soviético'],
    historicalContext: 'Em 1929, o Politburo decidiu formalmente substituir o sistema carcerário comum pelo trabalho forçado em grande escala para colonizar regiões despovoadas ricas em recursos naturais sem pagar salários.',
    academicConsensus: 'Anne Applebaum e os dados compilados pela ONG Memorial registram que pelo menos 18 a 20 milhões de pessoas passaram pelos campos e colônias do Gulag entre 1929 e 1953, com cerca de 1,6 a 2 milhões de mortes documentadas por inanição, hipotermia, exaustão e maus-tratos.',
    keyActors: ['Iosif Stalin', 'Naftaly Frenkel (idealizador do sistema)', 'Aleksandr Soljenítsin', 'Varlam Shalamov'],
    historiansInvolved: ['Anne Applebaum', 'Oleg V. Khlevniuk', 'Lynne Viola', 'Stephen G. Wheatcroft'],
    historicalImpact: 'Tornou-se o símbolo supremo da violência totalitária soviética, deixando valas comuns por toda a Sibéria e destruindo a saúde física e mental de milhões de sobreviventes.',
    quote: {
      text: 'O prisioneiro deve produzir de acordo com a quantidade de alimento que recebe; quem não atinge a cota de produção recebe ração de fome.',
      author: 'Naftaly Frenkel',
      context: 'Princípio de calibração calórica por rendimento adotado no Gulag das Ilhas Solovki e no Belomorkanal'
    },
    primarySources: [
      {
        title: 'Decreto do Conselho de Comissários do Povo sobre a Utilização do Trabalho Prisional (11 de julho de 1929)',
        institution: 'Memorial Society / GARF',
        documentType: 'Decreto / Ordem',
        year: '1929',
        archiveReference: 'GARF f. 5446, op. 1, d. 48, l. 21',
        transcriptionPt: 'Decisão do Sovnarkom: Transferir todos os condenados a penas superiores a 3 anos para a jurisdição do OGPU a fim de organizar campos de trabalho correcional para a exploração econômica e colonização das regiões remotas do Norte e da Sibéria.',
        abntCitation: 'SOVNARKOM URSS. Sobre a utilização do trabalho de prisioneiros criminosos. Moscou: Resolução do Conselho de Comissários do Povo, 11 de julho de 1929. GARF.',
        chicagoCitation: 'Council of People\'s Commissars. 1929. "On the Utilization of the Labor of Criminal Prisoners." State Archive of the Russian Federation (GARF).'
      },
      {
        title: 'Relatório Estatístico da 1ª Seção Especial do NKVD sobre a Mortalidade nos Campos (1930-1953)',
        institution: 'GARF / Memorial Human Rights Society / Hoover Institution',
        documentType: 'Relatório de Inteligência',
        year: '1953',
        archiveReference: 'GARF f. 9414, op. 1, d. 1155, ll. 1-12; Hoover Soviet Archives',
        transcriptionPt: 'Censo geral do contingente do GULAG: contagem ano a ano de internados, mortes registradas em hospitais do campo, mortes por escorbuto e desnutrição crônica (distrofia alimentar), com picos em 1933 (15,3% de mortalidade geral) e 1942 (24,9%).',
        abntCitation: 'NKVD/MVD URSS. Relatório estatístico sobre o movimento de prisioneiros no Gulag (1930–1953). Moscou: Departamento de Arquivos do MVD, 1953. Coleção Memorial.',
        chicagoCitation: 'Gulag Administration. 1953. "Statistical Report on Prison Camp Population and Mortality (1930–1953)." GARF.'
      }
    ]
  },
  {
    id: 12,
    categoryNumber: '12',
    title: 'Fomes e Catástrofes Humanitárias de Estado',
    category: 'Fomes e Catástrofes Humanitárias',
    period: '1924-1953',
    periodLabel: '1921–1947 · Fomes na URSS',
    tagline: 'O Holodomor ucraniano, a tragédia do Cazaquistão (Asharshylyq) e as fomes devastadoras de 1921 e 1946.',
    summary: 'As crises de fome catastróficas provocadas diretamente por políticas coercitivas de requisição de grãos e destruição da estrutura camponesa tradicional. O Holodomor na Ucrânia e região de Kuban (1932-1933), a fome no Cazaquistão (1930-1933) que dizimou mais de um terço da população nômade cazaque, além das crises de 1921-1922 (Povolzhye) e do pós-guerra em 1946-1947.',
    mainSubjects: ['Holodomor na Ucrânia (1932-1933)', 'Lei das Cinco Espigas (07/08/1932)', 'Fome no Cazaquistão / Asharshylyq', 'Fome do Volga de 1921-1922', 'Exportação de Grãos durante o Racionamento'],
    historicalContext: 'Para financiar a compra de maquinário ocidental durante o Primeiro Plano Quinquenal, o regime stalinista confiscou não apenas as cotas normais, mas as sementes de plantio futuras dos camponeses, impondo bloqueio militar contra a fuga de famintos.',
    academicConsensus: 'Robert Conquest (A Colheita da Dor), Anne Applebaum (Red Famine), Sarah Cameron (The Hungry Steppe) e Davies & Wheatcroft (The Years of Hunger) documentam que as cotas punitivas e os bloqueios de estradas impostos especificamente às aldeias ucranianas e cazaques constituíram armas deliberadas de repressão contra qualquer aspiração nacionalista.',
    keyActors: ['Iosif Stalin', 'Vyacheslav Molotov', 'Lazar Kaganovich', 'Filipp Goloshchyokin (Cazaquistão)'],
    historiansInvolved: ['Anne Applebaum', 'Sarah Cameron', 'R. W. Davies', 'Stephen G. Wheatcroft', 'Andrea Graziosi'],
    historicalImpact: 'Resultou na morte estimada de 5 a 7 milhões de seres humanos entre 1931 e 1933 (cerca de 4 milhões na Ucrânia e 1,5 milhão no Cazaquistão), com o trauma sendo reconhecido como genocídio por dezenas de parlamentos mundiais.',
    quote: {
      text: 'Qualquer furto de bens pertencentes aos kolkhozes ou ferrovias, mesmo grãos caídos no chão após a colheita, será punido com a pena máxima: fuzilamento com confisco de bens.',
      author: 'Lei da Proteção da Propriedade Socialista',
      context: 'Conhecida popularmente como Lei das Cinco Espigas, 7 de agosto de 1932'
    },
    primarySources: [
      {
        title: 'Lei sobre a Salvaguarda dos Bens das Empresas Estatais e Kolkhozes (Lei das Cinco Espigas - 7 de agosto de 1932)',
        institution: 'Yale Avalon Project / Harvard Ukrainian Research Institute',
        documentType: 'Decreto / Ordem',
        year: '1932',
        archiveReference: 'Sobranie Zakonov SSSR, 1932, nº 62, art. 360',
        transcriptionPt: 'Decisão do Comitê Executivo Central e Sovnarkom: Considerar a propriedade das cooperativas e kolkhozes sagrada e inviolável. Pessoas culpadas de roubo de bens kolkhozianos (inclusive espigas de trigo) devem ser punidas com pena suprema: fuzilamento.',
        abntCitation: 'UNIÃO SOVIÉTICA. Decreto sobre a Salvaguarda da Propriedade Socialista. TsIK e Sovnarkom, 7 de agosto de 1932. Harvard Ukrainian Research Institute.',
        chicagoCitation: 'Central Executive Committee of the USSR. 1932. "Decree on the Protection of Socialist Property." Moscow. Harvard HURI Archive.'
      },
      {
        title: 'Diretiva Secreta do Comitê Central e Sovnarkom sobre o Bloqueio de Fronteiras da Ucrânia (22 de janeiro de 1933)',
        institution: 'Memorial Society / RGASPI / Hoover Institution',
        documentType: 'Decreto / Ordem',
        year: '1933',
        archiveReference: 'RGASPI f. 558, op. 11, d. 45, ll. 109-111; Hoover Archives',
        transcriptionPt: 'Instrução assinada por Stalin e Molotov: Foi constatado que camponeses famintos da Ucrânia e do norte do Cáucaso estão fugindo em massa para as províncias centrais em busca de pão. Ordena-se à GPU e aos órgãos de transporte ferroviário que impeçam essa saída a todo custo e enviem os fugitivos de volta às suas aldeias.',
        abntCitation: 'STALIN, Iosif; MOLOTOV, Vyacheslav. Diretiva sobre o Bloqueio da Fuga de Camponeses da Ucrânia e Kuban. Moscou: Comitê Central do PCUS, 22 de janeiro de 1933. RGASPI.',
        chicagoCitation: 'Stalin, Joseph, and Vyacheslav Molotov. 1933. "Directive on Preventing the Flight of Peasants from Ukraine." RGASPI fond 558.'
      }
    ]
  },
  {
    id: 13,
    categoryNumber: '13',
    title: 'Crimes de Guerra e Massacres de Estado',
    category: 'Crimes e Massacres',
    period: '1924-1953',
    periodLabel: '1937–1945 · Execuções em Massa',
    tagline: 'O massacre na Floresta de Katyn, as valas comuns de Butovo, Vinnytsia e as execuções sumárias de prisioneiros em 1941.',
    summary: 'Os assassinatos em massa deliberados executados pelas forças de segurança soviéticas. O caso paradigmático do Massacre de Katyn na primavera de 1940, no qual cerca de 22.000 oficiais militares, policiais e intelectuais poloneses foram assassinados com tiros na nuca pela NKVD sob despacho formal assinado por Stalin e membros do Politburo.',
    mainSubjects: ['Massacre da Floresta de Katyn (1940)', 'Despacho Secreto do Politburo de 5 de março de 1940', 'Valas de Butovo em Moscou', 'Massacres de Prisioneiros da NKVD durante a Retirada de 1941', 'Massacre de Vinnytsia'],
    historicalContext: 'Durante meio século, a URSS atribuiu oficialmente o crime de Katyn às tropas alemãs. Somente em abril de 1990 o governo de Mikhail Gorbachev admitiu formalmente a culpa da NKVD soviética, e em 1992 Boris Yeltsin entregou à Polônia cópias autenticadas do "Pacote Fechado nº 1" contendo as assinaturas do Politburo.',
    academicConsensus: 'A investigação histórica e pericial é definitiva e incontestável, analisada detalhadamente por Timothy Snyder (Bloodlands) e Norman M. Naimark (Stalin\'s Genocides), reconhecida pela Duma Estatal russa em 2010 como crime ordenado diretamente por Stalin.',
    keyActors: ['Iosif Stalin', 'Lavrentiy Beria', 'Vyacheslav Molotov', 'Vasily Blokhin (carrasco-chefe da NKVD)'],
    historiansInvolved: ['Timothy Snyder', 'Norman M. Naimark', 'Oleg V. Khlevniuk', 'David P. Chandler'],
    historicalImpact: 'Causou uma fratura duradoura nas relações polaco-russas e estabeleceu o padrão de eliminação preventiva das lideranças cívicas das nações ocupadas.',
    quote: {
      text: 'Os casos dos 14.700 oficiais poloneses detidos em campos e dos 11.000 presos nas prisões ocidentais devem ser examinados em ordem especial, aplicando-lhes a pena suprema: fuzilamento.',
      author: 'Lavrentiy Beria',
      context: 'Proposta confidencial encaminhada a Stalin e aprovada pelo Politburo, 5 de março de 1940'
    },
    primarySources: [
      {
        title: 'Decisão do Politburo do PCUS sobre a Execução dos Prisioneiros Poloneses (5 de março de 1940)',
        institution: 'Yale Avalon Project / Wilson Center / Arquivo do Presidente da Federação Russa (AP RF)',
        documentType: 'Decreto / Ordem',
        year: '1940',
        archiveReference: 'AP RF f. 3, op. 128, d. 638, ll. 1-4; Yale Avalon Polish-Soviet Documents',
        transcriptionPt: 'Decisão do Politburo: Instruir o NKVD da URSS a aplicar a pena suprema — fuzilamento — a 14.700 ex-oficiais, policiais e proprietários de terras poloneses mantidos nos campos de Kozelsk, Starobelsk e Ostashkov, bem como a 11.000 prisioneiros mantidos em prisões ocidentais da Ucrânia e Bielorrússia. Assinado por: I. Stalin, K. Voroshilov, V. Molotov, A. Mikoyan; votos a favor anotados: Kalinin, Kaganovich.',
        abntCitation: 'POLITBURO DO PCUS. Protocolo nº 13 do Politburo: Resolução sobre o fuzilamento de oficiais e prisioneiros poloneses. Moscou: Arquivo Presidencial da Federação Russa, 5 de março de 1940. Yale Avalon Project.',
        chicagoCitation: 'Politburo of the Central Committee. 1940. "Resolution on the Execution of Polish Officers (Katyn)." Moscow: Presidential Archive of the Russian Federation.'
      },
      {
        title: 'Memorando de Alexander Shelepin (Chefe da KGB) a Nikita Kruschev sobre a Destruição dos Dossiês de Katyn (3 de março de 1959)',
        institution: 'Wilson Center Cold War History / Memorial Society',
        documentType: 'Relatório de Inteligência',
        year: '1959',
        archiveReference: 'AP RF f. 3, op. 128, d. 638, ll. 5-7',
        transcriptionPt: 'O Presidente da KGB Shelepin relata: De acordo com a decisão de 1940, foram fuzilados 21.857 cidadãos poloneses. Recomenda-se destruir todos os processos individuais de investigação para evitar que o segredo de Estado seja comprometido no futuro, conservando apenas os protocolos de execução.',
        abntCitation: 'SHELEPIN, Alexander. Carta confidencial ao camarada N. S. Kruschev. Moscou: KGB, 3 de março de 1959. Wilson Center Digital Archive.',
        chicagoCitation: 'Shelepin, Alexander. 1959. "Memorandum from KGB Chairman Shelepin to Nikita Khrushchev." Wilson Center.'
      }
    ]
  },
  {
    id: 14,
    categoryNumber: '14',
    title: 'Nacionalidades e Deportações de Minorias Étnicas',
    category: 'Nacionalidades e Minorias Étnicas',
    period: '1924-1953',
    periodLabel: '1937–1949 · Limpeza Étnica e Deportações',
    tagline: 'Operações Nacionais do NKVD, deportações em massa de tártaros da Crimeia, chechenos, inguches e alemães do Volga.',
    summary: 'A expulsão forçada de povos e etnias inteiras sob acusação coletiva de "traição" e "colaboracionismo". Em vagões de gado sem água ou aquecimento, populações completas — tártaros da Crimeia, chechenos e inguches (Operação Lentil de 1944), alemães do Volga, calmuques, coreanos do Extremo Oriente e gregos do Mar Negro — foram desterradas para os desertos da Ásia Central e esteppes da Sibéria sob o regime de colonos especiais.',
    mainSubjects: ['Deportação dos Tártaros da Crimeia (Sürgünlik)', 'Operação Lentil (Deportação de Chechenos e Inguches - 1944)', 'Dissolução da República dos Alemães do Volga', 'Deportação de Coreanos Soviéticos (1937)', 'Operação Nacional Polonesa da NKVD (Ordem nº 00485)'],
    historicalContext: 'Embora a constituição proclamasse a "amizade dos povos", a paranoia stalinista temia minorias fronteiriças com lealdades transnacionais. Durante a guerra, etnias inteiras foram punidas coletivamente sem julgamento individual.',
    academicConsensus: 'Norman M. Naimark (Stalin\'s Genocides) e Sarah Cameron classificam as operações como episódios brutais de engenharia demográfica e limpeza étnica. A mortalidade durante os transportes e primeiros invernos no desterro atingiu entre 20% e 40% das populações deportadas.',
    keyActors: ['Iosif Stalin', 'Lavrentiy Beria', 'Ivan Serov'],
    historiansInvolved: ['Norman M. Naimark', 'Sarah Cameron', 'Timothy Snyder', 'Hiroaki Kuromiya'],
    historicalImpact: 'Apagou repúblicas autônomas centenárias do mapa, destruiu patrimônios culturais milenares e gerou conflitos territoriais que eclodiram após 1991 (como as Guerras da Chechênia).',
    quote: {
      text: 'Todos os chechenos e inguches residentes no território da República Autônoma da Chechênia-Inguchétia devem ser reassentados permanentemente nas regiões do Cazaquistão e Quirguistão.',
      author: 'Lavrentiy Beria',
      context: 'Relatório do NKVD a Stalin sobre o início da Operação Lentil, 24 de fevereiro de 1944'
    },
    primarySources: [
      {
        title: 'Decreto do Comitê de Defesa do Estado nº 5859-ss sobre os Tártaros da Crimeia (11 de maio de 1944)',
        institution: 'Memorial Human Rights Society / GARF',
        documentType: 'Decreto / Ordem',
        year: '1944',
        archiveReference: 'GARF f. R-5446, op. 47, d. 433, ll. 11-14',
        transcriptionPt: 'Decisão do GKO: Todos os tártaros devem ser expulsos do território da Crimeia e assentados como colonos especiais no Uzbequistão. A operação deve ser concluída até 1º de junho sob a responsabilidade do camarada Beria.',
        abntCitation: 'COMITÊ DE DEFESA DO ESTADO DA URSS. Resolução nº 5859-ss sobre os tártaros da Crimeia. Moscou: GKO, 11 de maio de 1944. Arquivo Estatal GARF.',
        chicagoCitation: 'State Defense Committee (GKO). 1944. "Decree No. 5859-ss: On the Crimean Tatars." Moscow: GARF.'
      }
    ]
  },
  {
    id: 15,
    categoryNumber: '15',
    title: 'Guerra Fria, KGB e Espionagem Global',
    category: 'Guerra Fria e Espionagem',
    period: '1964-1982',
    periodLabel: '1945–1989 · Bipolaridade e Inteligência',
    tagline: 'O Muro de Berlim (1961), a Crise dos Mísseis em Cuba (1962), a rede atômica Venona e as operações da Primeira Diretoria da KGB.',
    summary: 'O confronto geopolítico, ideológico e de inteligência entre o bloco soviético e as democracias ocidentais. A infiltração de espiões atômicos no Projeto Manhattan (Klaus Fuchs, casal Rosenberg), a construção clandestina do Muro de Berlim em agosto de 1961 pela Alemanha Oriental e URSS para estancar a fuga de 3 milhões de cidadãos para o Ocidente, e o quase holocausto nuclear na Crise dos Mísseis de Cuba em 1962.',
    mainSubjects: ['Construção do Muro de Berlim (1961)', 'Crise dos Mísseis em Cuba (1962)', 'Projeto Venona e Espionagem Atômica', 'A Primeira Diretoria Geral da KGB (Espionagem Externa)', 'Guerra por Procuração no Terceiro Mundo'],
    historicalContext: 'A doutrina stalinista e pós-stalinista de expansão global enfrentou a política de contenção dos EUA. A espionagem e a desinformação (Active Measures) tornaram-se o teatro principal da disputa mundial.',
    academicConsensus: 'Geoffrey Roberts (The Soviet Union and the Origins of the Cold War) e Bruce Cumings documentam as tensões nucleares e a revelação dos arquivos do Wilson Center (CWIHP) e do Projeto Venona provando a rede de financiamento soviético a partidos e guerrilhas em todo o mundo.',
    keyActors: ['Nikita Kruschev', 'John F. Kennedy', 'Yuri Andropov', 'Fidel Castro', 'Klaus Fuchs'],
    historiansInvolved: ['Geoffrey Roberts', 'Bruce Cumings', 'Hiroaki Kuromiya'],
    historicalImpact: 'Manteve a humanidade sob a ameaça contínua de destruição mútua assegurada (MAD) e dividiu o continente europeu por uma Cortina de Ferro física durante quatro décadas.',
    quote: {
      text: 'Ninguém tem a intenção de construir um muro!',
      author: 'Walter Ulbricht',
      context: 'Declaração pública do líder da Alemanha Oriental dois meses antes de ordenar o fechamento da fronteira de Berlim, 15 de junho de 1961'
    },
    primarySources: [
      {
        title: 'Carta Confidencial de Nikita Kruschev ao Presidente John F. Kennedy (27 de outubro de 1962)',
        institution: 'Yale Avalon Project: Cold War / Cuban Missile Crisis',
        documentType: 'Telegrama Oficial',
        year: '1962',
        archiveReference: 'Yale Avalon: Cuban Missile Crisis Documents; Foreign Relations of the United States, Vol. XI',
        transcriptionPt: 'Estamos dispostos a retirar de Cuba as armas que considerais ofensivas se os Estados Unidos, por sua parte, retirarem seus mísseis análogos instalados na Turquia e prometerem respeitar a soberania de Cuba.',
        abntCitation: 'KRUSCHEV, Nikita. Mensagem do Presidente do Conselho de Ministros da URSS ao Presidente Kennedy. 27 de outubro de 1962. Yale Avalon Project: Cuban Missile Crisis.',
        chicagoCitation: 'Khrushchev, Nikita. 1962. "Letter to President Kennedy during the Cuban Missile Crisis." Yale Avalon Project.'
      }
    ]
  },
  {
    id: 16,
    categoryNumber: '16',
    title: 'Comunismo Internacional e Movimentos Revolucionários',
    category: 'Comunismo Internacional',
    period: 'internacional',
    periodLabel: '1949–1989 · Ásia, África e América Latina',
    tagline: 'O Grande Salto e a Revolução Cultural na China de Mao, Guerra da Coreia, Guerra do Vietnã e Cuba.',
    summary: 'A exportação e adaptação do modelo revolucionário comunista fora da Europa. A vitória de Mao Tsé-Tung na China em 1949 seguida pelas catástrofes humanitárias do Grande Salto Adiante (fome com mais de 30 milhões de mortos) e da Revolução Cultural; a Guerra da Coreia (1950-1953) impulsionada pela invasão norte-coreana aprovada por Stalin; a Revolução Cubana de 1959 e o conflito no Sudeste Asiático.',
    mainSubjects: ['Revolução Chinesa e Maoísmo', 'O Grande Salto Adiante e Revolução Cultural na China', 'Guerra da Coreia (Kim Il-sung e Stalin)', 'Guerra do Vietnã e Viet Cong', 'Revolução Cubana e o Bloco Soviético'],
    historicalContext: 'A cisão sino-soviética a partir do final dos anos 1950 dividiu o movimento comunista mundial entre a ortodoxia de Moscou e o radicalismo agrário de Pequim, levando a confrontos armados na fronteira do rio Ussuri em 1969.',
    academicConsensus: 'Pesquisadores como Frank Dikötter (Mao\'s Great Famine, The Cultural Revolution), Ben Kiernan (The Pol Pot Regime), David P. Chandler (Brother Number One), Bruce Cumings e Marifeli Pérez-Stable documentaram a magnitude devastadora das políticas de coletivização agrária forçada na China, Camboja e Coreia.',
    keyActors: ['Mao Tsé-Tung', 'Kim Il-sung', 'Ho Chi Minh', 'Fidel Castro', 'Ernesto Che Guevara'],
    historiansInvolved: ['Frank Dikötter', 'Ben Kiernan', 'David P. Chandler', 'Bruce Cumings', 'Marifeli Pérez-Stable'],
    historicalImpact: 'Levou à divisão permanente da península coreana, a regimes totalitários fechados e a guerras sangrentas que consumiram milhões de vidas no Terceiro Mundo.',
    quote: {
      text: 'O poder político brota do cano de um fuzil.',
      author: 'Mao Tsé-Tung',
      context: 'Discurso na 6ª Sessão Plenária do Comitê Central do Partido Comunista Chinês, novembro de 1938'
    },
    primarySources: [
      {
        title: 'Telegrama de Stalin a Mao Tsé-Tung autorizando o apoio militar na Guerra da Coreia (5 de outubro de 1950)',
        institution: 'Wilson Center Cold War International History Project',
        documentType: 'Telegrama Oficial',
        year: '1950',
        archiveReference: 'CWIHP Digital Archive: Soviet Korean War Files, Doc nº 1950-10-05',
        transcriptionPt: 'Para Mao: Considero que a China deve intervir com voluntários para auxiliar os camaradas coreanos. Se os Estados Unidos entrarem em grande guerra, a URSS prestará assistência e isso colocará a revolução mundial em posição de força.',
        abntCitation: 'STALIN, Iosif. Telegrama cifrado a Mao Tsé-Tung sobre o envio de tropas chinesas à Coreia. Moscou: 5 de outubro de 1950. Wilson Center Digital Archive.',
        chicagoCitation: 'Stalin, Joseph. 1950. "Coded Telegram to Mao Zedong on Korean War Intervention." Wilson Center CWIHP.'
      }
    ]
  },
  {
    id: 17,
    categoryNumber: '17',
    title: 'Dissidência, Samizdat e Luta por Direitos Humanos',
    category: 'Dissidência e Direitos Humanos',
    period: '1964-1982',
    periodLabel: '1968–1989 · Resistência Clandestina',
    tagline: 'Aleksandr Soljenítsin, Andrei Sakharov, a circulação do Samizdat, a Carta 77 e o Grupo Helsinque.',
    summary: 'A emergência da oposição moral e intelectual pacífica dentro da URSS e no Bloco Oriental. O fenômeno do Samizdat (datilografia e circulação clandestina de livros censurados de mão em mão), o impacto demolidor do lançamento ocidental de "O Arquipélago Gulag" de Soljenítsin em 1973, a coragem do físico nuclear Andrei Sakharov em defesa dos direitos civis, a Carta 77 na Tchecoslováquia (Václav Havel) e os comitês de monitoramento dos Acordos de Helsinque de 1975.',
    mainSubjects: ['Aleksandr Soljenítsin e "O Arquipélago Gulag"', 'Andrei Sakharov e o Movimento Democrático', 'Samizdat (Publicação Clandestina)', 'Carta 77 na Tchecoslováquia', 'Grupo Helsinque de Moscou e Psiquiatria Punitiva'],
    historicalContext: 'Após a invasão da Tchecoslováquia em 1968, as ilusões de autorreforma do socialismo dissiparam-se. A KGB sob Yuri Andropov passou a usar exílio forçado e confinamento em hospitais psiquiátricos (psikhiatricheskie bolnitsy) contra dissidentes políticos.',
    academicConsensus: 'Historiadores concordam que a dissidência soviética expôs no Ocidente o vácuo ético do regime soviético e forneceu as bases morais para a revolução democrática pacífica de 1989 no Leste Europeu.',
    keyActors: ['Aleksandr Soljenítsin', 'Andrei Sakharov', 'Václav Havel', 'Yuri Andropov', 'Elena Bonner'],
    historiansInvolved: ['Anne Applebaum', 'Oleg V. Khlevniuk', 'J. Arch Getty'],
    historicalImpact: 'Quebrou o monopólio da informação do Estado, inspirou a resistência dos trabalhadores do sindicato Solidarność na Polônia e apressou a falência ideológica do regime.',
    quote: {
      text: 'Uma palavra de verdade pesa mais do que o mundo inteiro.',
      author: 'Aleksandr Soljenítsin',
      context: 'Discurso do Prêmio Nobel de Literatura de 1970'
    },
    primarySources: [
      {
        title: 'Declaração Fundacional da Carta 77 (Praga, 1º de janeiro de 1977)',
        institution: 'Wilson Center Cold War History / Hoover Institution',
        documentType: 'Decreto / Ordem',
        year: '1977',
        archiveReference: 'Hoover Institution Archives, Charter 77 Records, Box 1',
        transcriptionPt: 'A Carta 77 é uma iniciativa cívica livre, informal e aberta a pessoas de diferentes convicções que exigem do governo tchecoslovaco o respeito prático aos direitos humanos fundamentais consagrados nos Acordos de Helsinque e nos pactos internacionais da ONU.',
        abntCitation: 'HAVEL, Václav et al. Carta 77: Declaração de Direitos Cívicos e Liberdades Fundamentais. Praga, 1º de janeiro de 1977. Hoover Institution.',
        chicagoCitation: 'Havel, Václav, Jan Patočka, and Jiří Hájek. 1977. "The Charter 77 Declaration." Prague. Hoover Institution Archives.'
      },
      {
        title: 'Memorando da KGB sobre as Medidas contra o Escritor Soljenítsin (1974)',
        institution: 'Memorial Society / Arquivos Centrais do FSB',
        documentType: 'Relatório de Inteligência',
        year: '1974',
        archiveReference: 'RGANI f. 3, op. 69, d. 177, ll. 1-15',
        transcriptionPt: 'Proposta do Comitê de Segurança de Estado (KGB): Soljenítsin cometeu crime de traição à pátria ao enviar ao Ocidente a obra anti-soviética "O Arquipélago Gulag". Propõe-se despojá-lo da cidadania soviética e expulsá-lo imediatamente para a República Federal da Alemanha.',
        abntCitation: 'ANDROPOV, Yuri. Decisão do Politburo sobre a Expulsão de A. I. Soljenítsin da URSS. Moscou: KGB, 12 de fevereiro de 1974. RGANI.',
        chicagoCitation: 'Andropov, Yuri. 1974. "KGB Report to the Politburo on the Expulsion of Aleksandr Solzhenitsyn." RGANI.'
      }
    ]
  },
  {
    id: 18,
    categoryNumber: '18',
    title: 'Propaganda, Agitprop e Controle Social',
    category: 'Propaganda e Controle Social',
    period: '1924-1953',
    periodLabel: '1917–1985 · Monopólio da Informação',
    tagline: 'O departamento de Agitprop, os jornais Pravda e Izvestia, a organização dos Pioneiros e os passaportes internos.',
    summary: 'Os mecanismos pervasivos de engenharia social utilizados pelo Estado para moldar a mentalidade do "Homo Sovieticus". Desde a infância na organização dos Jovens Pioneiros e no Komsomol, a censura rígida de toda a imprensa e rádio, a celebração iconográfica do líder supremo, até a restrição da liberdade de locomoção física por meio do sistema de passaportes internos compulsórios (propiska).',
    mainSubjects: ['Departamento de Agitprop do Comitê Central', 'Monopólio de Imprensa (Pravda, Izvestia, TASS)', 'Juventude Soviética (Komsomol e Pioneiros)', 'Sistema de Passaportes Internos (Propiska)', 'Culto aos Heróis Falsificados (Pavlik Morozov)'],
    historicalContext: 'Nenhum meio de reprodução mecânica (nem mesmo mimeógrafos ou máquinas de fotocópia) podia ser operado sem autorização especial da polícia secreta para impedir qualquer manifestação não estatal.',
    academicConsensus: 'Peter Kenez (The Birth of the Propaganda State) e Sheila Fitzpatrick (Everyday Stalinism) demonstram que a propaganda soviética não funcionava apenas como persuasão, mas como instrumento de terror psicológico para isolar os cidadãos e destruir os laços interpessoais de confiança.',
    keyActors: ['Vladimir Mayakovsky (primeiros pôsteres)', 'Andrei Zhdanov (doutrina cultural)', 'Pavlik Morozov (mito propagandístico)'],
    historiansInvolved: ['Sheila Fitzpatrick', 'Frank Dikötter', 'J. Arch Getty'],
    historicalImpact: 'Criou uma sociedade marcada pelo "duplo pensamento" orwelliano, onde os cidadãos expressavam lealdade pública em comícios enquanto mantinham silêncio e desconfiança na esfera privada.',
    quote: {
      text: 'Os escritores são os engenheiros da alma humana; sua tarefa é educar os trabalhadores no espírito do socialismo.',
      author: 'Iosif Stalin',
      context: 'Encontro com escritores soviéticos na residência de Maxim Gorky, 26 de outubro de 1932'
    },
    primarySources: [
      {
        title: 'Decreto do Comitê Central sobre a Criação do Sistema Único de Passaportes Internos (27 de dezembro de 1932)',
        institution: 'GARF / Memorial Society',
        documentType: 'Decreto / Ordem',
        year: '1932',
        archiveReference: 'Sobranie Zakonov SSSR, 1932, nº 84, art. 516',
        transcriptionPt: 'Decisão: Instituir para todos os cidadãos das cidades e zonas industriais o sistema de passaporte único obrigatório com registro de domicílio (propiska). Os camponeses dos kolkhozes não recebem passaporte, ficando proibidos de abandonar seus povoados sem autorização expressa da administração.',
        abntCitation: 'UNIÃO SOVIÉTICA. Decreto sobre o Estabelecimento do Sistema Unificado de Passaportes na URSS. TsIK e Sovnarkom, 27 de dezembro de 1932. GARF.',
        chicagoCitation: 'Central Executive Committee of the USSR. 1932. "Decree on the Internal Passport System." Moscow: GARF.'
      }
    ]
  },
  {
    id: 19,
    categoryNumber: '19',
    title: 'Intervenções Soviéticas no Bloco Oriental',
    category: 'Intervenções Soviéticas',
    period: '1953-1964',
    periodLabel: '1953–1979 · Tanques e a Doutrina Brejnev',
    tagline: 'O levante operário de 1953 em Berlim, a Revolução Húngara de 1956, a invasão de Praga em 1968 e o Afeganistão em 1979.',
    summary: 'A resposta armada de Moscou a qualquer tentativa dos países satélites do Pacto de Varsóvia de romper com a tutela soviética ou democratizar seus regimes. O esmagamento da greve de operários de construção em Berlim Oriental (1953), o massacre sangrento dos insurgentes húngaros liderados por Imre Nagy com tanques soviéticos (1956), a invasão da Tchecoslováquia por meio milhão de soldados sob a Doutrina Brejnev da "soberania limitada" (1968) e a invasão do Afeganistão (1979).',
    mainSubjects: ['Levante Operário na Alemanha Oriental (17/06/1953)', 'Revolução Húngara de 1956 e Execução de Imre Nagy', 'Primavera de Praga e Operação Danúbio (1968)', 'Doutrina Brejnev de Soberania Limitada', 'Invasão Soviética do Afeganistão (1979)'],
    historicalContext: 'O Pacto de Varsóvia, fundado ostensivamente como aliança defensiva contra a OTAN, funcionou na prática como instrumento policial de ocupação militar contra os próprios países membros que buscavam reformas democráticas.',
    academicConsensus: 'A historiografia internacional (Anne Applebaum, Geoffrey Roberts) demonstra que a cada intervenção armada com tanques soviéticos contra populações civis desarmadas, os partidos comunistas ocidentais perdiam contingentes expressivos de intelectuais e militantes que renunciavam à filiação.',
    keyActors: ['Nikita Kruschev', 'Leonid Brejnev', 'Imre Nagy', 'Alexander Dubček', 'Hafizullah Amin'],
    historiansInvolved: ['Anne Applebaum', 'Geoffrey Roberts'],
    historicalImpact: 'Exibiu ao mundo que o império soviético no Leste Europeu se sustentava exclusivamente pela força militar dos blindados do Exército Vermelho.',
    quote: {
      text: 'Quando as forças hostis ao socialismo tentam desviar o desenvolvimento de um país socialista para o capitalismo, isso não é apenas problema desse país, mas uma preocupação comum de todos os países do campo socialista.',
      author: 'Leonid Brejnev',
      context: 'Discurso no V Congresso do Partido Operário Unificado Polonês, formulando a Doutrina Brejnev, 12 de novembro de 1968'
    },
    primarySources: [
      {
        title: 'Ordem de Operações das Tropas Soviéticas para Esmagamento da Insurreição em Budapeste (Operação Whirlwind - 4 de novembro de 1956)',
        institution: 'Wilson Center Cold War History / Arquivos Militares Russos (TsAMO)',
        documentType: 'Decreto / Ordem',
        year: '1956',
        archiveReference: 'TsAMO f. 32, op. 701291, d. 15, ll. 2-5; CWIHP Bulletin 5',
        transcriptionPt: 'Diretiva do Marechal Konev: As tropas do Exército Soviético devem entrar em Budapeste, desarmar os insurgentes, capturar os prédios de comunicações, dissolver o governo de Imre Nagy e restaurar a ordem revolucionária dos trabalhadores leais.',
        abntCitation: 'KONEV, Ivan. Ordem Operacional de Combate para a Operação "Torvelinho" na Hungria. Moscou: Ministério da Defesa da URSS, 4 de novembro de 1956. Wilson Center.',
        chicagoCitation: 'Konev, Ivan. 1956. "Operational Order for Operation Whirlwind in Budapest." Central Archive of the Russian Ministry of Defense (TsAMO).'
      },
      {
        title: 'Resolução Conjunta dos Cinco Membros do Pacto de Varsóvia sobre a Ocupação da Tchecoslováquia (20 de agosto de 1968)',
        institution: 'German History in Documents and Images / Wilson Center / Bundesarchiv',
        documentType: 'Tratado Diplomático',
        year: '1968',
        archiveReference: 'CWIHP Digital Archive: Warsaw Pact Czechoslovak Crisis 1968; Bundesarchiv SED Archive',
        transcriptionPt: 'Comunicado oficial: Tropas da União Soviética, Polônia, Hungria, Bulgária e RDA cruzaram as fronteiras da Tchecoslováquia em resposta ao "pedido de auxílio urgente" de líderes patriotas contra o perigo da restauração capitalista.',
        abntCitation: 'PACTO DE VARSÓVIA. Comunicado dos Governos dos Cinco Países sobre a Entrada de Tropas na República Socialista da Tchecoslováquia. Moscou: TASS, 21 de agosto de 1968.',
        chicagoCitation: 'Warsaw Pact High Command. 1968. "Communique on the Military Intervention in Czechoslovakia." TASS News Agency.'
      }
    ]
  },
  {
    id: 20,
    categoryNumber: '20',
    title: 'Crise e Falência Estrutural do Sistema Soviético',
    category: 'Crise do Sistema Soviético',
    period: '1964-1982',
    periodLabel: '1970–1985 · A Estagnação (Zastoy)',
    tagline: 'A era Brejnev, gerontocracia, corrupção endêmica, a armadilha do petróleo e o colapso tecnológico.',
    summary: 'O declínio estrutural cumulativo que inviabilizou a URSS como modelo socioeconômico sustentável. A Era da Estagnação (Zastoy) sob Leonid Brejnev, a obsolescência das indústrias frente à revolução da microeletrônica ocidental, a dependência crônica das receitas de exportação de petróleo bruto e as importações de grãos dos Estados Unidos para evitar a fome alimentar nas cidades.',
    mainSubjects: ['A Estagnação Brejneviana (Zastoy)', 'A Gerontocracia do Politburo', 'O Mercado Negro e a Economia Informal (Blat)', 'A Queda do Preço do Petróleo nos Anos 1980', 'A Corrida Armamentista e a Guerra nas Estrelas (SDI)'],
    historicalContext: 'A URSS gastava cerca de 20% a 25% de todo o seu Produto Interno Bruto no complexo militar-industrial, privando a população de investimentos essenciais em saúde, infraestrutura e bens de consumo civil.',
    academicConsensus: 'Yegor Gaidar (A Queda de um Império), R. W. Davies e Stephen G. Wheatcroft demonstraram documentalmente que a URSS tornou-se financeiramente insolvente após o choque de queda nos preços internacionais do petróleo em 1985-1986, sobrevivendo no final à base de empréstimos bancários ocidentais.',
    keyActors: ['Leonid Brejnev', 'Alexei Kosygin', 'Yuri Andropov', 'Konstantin Chernenko', 'Ronald Reagan'],
    historiansInvolved: ['Sheila Fitzpatrick', 'R. W. Davies', 'Stephen G. Wheatcroft'],
    historicalImpact: 'Evidenciou o esgotamento inescapável do planejamento burocrático soviético e acelerou as condições materiais para a dissolução geopolítica do império em 1991.',
    quote: {
      text: 'Nós fingimos que trabalhamos, e eles fingem que nos pagam.',
      author: 'Ditado popular soviético',
      context: 'Expressão corrente entre os trabalhadores urbanos durante a era da estagnação brejneviana'
    },
    primarySources: [
      {
        title: 'Memorando Econômico do Primeiro-Ministro Alexei Kosygin ao Politburo sobre o Déficit Agrícola e Importação de Grãos (1972)',
        institution: 'Wilson Center Cold War History / RGANI',
        documentType: 'Relatório de Inteligência',
        year: '1972',
        archiveReference: 'RGANI f. 4, op. 20, d. 112, ll. 45-49',
        transcriptionPt: 'Alerta urgente: A safra nacional é incapaz de abastecer a população das grandes cidades com pão e forragem para o gado. É imperativo despender com urgência as reservas de ouro do Estado para comprar 19 milhões de toneladas de trigo dos EUA e Canadá.',
        abntCitation: 'KOSYGIN, Alexei. Relatório sobre a Situação do Abastecimento de Cereais e Balança de Pagamentos. Moscou: Conselho de Ministros da URSS, 1972. RGANI.',
        chicagoCitation: 'Kosygin, Alexei. 1972. "Memorandum on Soviet Grain Crisis and Foreign Exchange Deficits." Moscow: RGANI.'
      }
    ]
  }
];

export const HISTORICAL_PERIODS = [
  { id: 'todos', label: 'Todos os Períodos (20 Temas)' },
  { id: '1905-1917', label: '1905–1917: Revolução Russa e Queda Czarista' },
  { id: '1917-1924', label: '1917–1924: Lenin, Guerra Civil e Terror' },
  { id: '1924-1953', label: '1924–1953: Stalin, Grande Terror e Guerra' },
  { id: '1953-1964', label: '1953–1964: Desestalinização e Kruschev' },
  { id: '1964-1982', label: '1964–1982: Era Brejnev e Dissidência' },
  { id: '1985-1991', label: '1985–1991: Gorbachev, Chernobyl e Fim da URSS' },
  { id: 'internacional', label: 'Panorama Internacional e Guerra Fria' },
];

export const HISTORICAL_ARCHIVES = [
  {
    name: 'Yale Avalon Project',
    description: 'Coleção diplomática de tratados, telegramas e correspondências diplomáticas teuto-soviéticas de 1939–1941.',
    focus: 'Tratados e pactos diplomáticos',
    url: 'https://avalon.law.yale.edu/'
  },
  {
    name: 'German History in Documents and Images (GHDI)',
    description: 'Documentos do Ministério das Relações Exteriores da Alemanha capturados sobre o Pacto Molotov-Ribbentrop e partilhas territoriais.',
    focus: 'Documentos alemães e partilha da Polônia',
    url: 'https://germanhistorydocs.org/'
  },
  {
    name: 'United States Holocaust Memorial Museum (USHMM)',
    description: 'Acervo e enciclopédia sobre o fascismo, perseguição ideológica, totalitarismo e alianças bélicas.',
    focus: 'Totalitarismo e perseguição política',
    url: 'https://www.ushmm.org/'
  },
  {
    name: 'Cambridge University Press Archives',
    description: 'Estudos historiográficos pari passu sobre a cooperação militar e tecnológica soviético-alemã (Rapallo, Kama, Lipetsk) entre 1917 e 1941.',
    focus: 'Cooperação militar e estudos acadêmicos',
    url: 'https://www.cambridge.org/'
  },
  {
    name: 'Persée / Manfred Schwendemann',
    description: 'Registros dos acordos comerciais de matérias-primas e petróleo fornecidos por Stalin a Hitler entre 1939 e 1941.',
    focus: 'Comércio de guerra germano-soviético',
    url: 'https://www.persee.fr/'
  },
  {
    name: 'Memorial Human Rights Society',
    description: 'Arquivo independente (laureado com o Prêmio Nobel da Paz 2022) com milhões de registros de vítimas do Gulag e do Terror.',
    focus: 'Vítimas do terror e mapas do Gulag',
    url: 'https://memo.ru/'
  },
  {
    name: 'Wilson Center Cold War Project (CWIHP)',
    description: 'Documentos desclassificados do Politburo, KGB e Pacto de Varsóvia sobre Chernobyl, Berlim, Cuba e Katyn.',
    focus: 'Documentos desclassificados do Politburo e KGB',
    url: 'https://www.wilsoncenter.org/program/cold-war-international-history-project'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    topicId: 8,
    question: 'Qual cláusula do Pacto Molotov-Ribbentrop de agosto de 1939 foi mantida em segredo oficial por 50 anos?',
    options: [
      'A renúncia alemã à tecnologia de submarinos',
      'O Protocolo Secreto que dividia a Polônia e os Estados Bálticos em esferas de influência',
      'A entrega de tanques soviéticos ao exército japonês',
      'O empréstimo bancário compulsório da França'
    ],
    correctIndex: 1,
    explanation: 'O Protocolo Secreto Adicional, assinado por Ribbentrop e Molotov em 23 de agosto de 1939, demarcou secretamente as esferas de interesse soviética e alemã, partilhando a Polônia e entregando os Bálticos e a Finlândia à órbita de Stalin. Sua existência foi negada pela URSS até 1989.',
    sourceDoc: 'Yale Avalon Project: Secret Additional Protocol of August 23, 1939'
  },
  {
    id: 2,
    topicId: 13,
    question: 'Em que consistiu a decisão de 5 de março de 1940 assinada por Stalin e membros do Politburo soviético?',
    options: [
      'A construção do metrô de Moscou',
      'A declaração de guerra imediata à Finlândia',
      'A execução sumária por fuzilamento de mais de 21.000 oficiais e prisioneiros poloneses em Katyn',
      'O encerramento de todos os campos de trabalho do Gulag'
    ],
    correctIndex: 2,
    explanation: 'A resolução do Politburo de 5 de março de 1940 aprovou a proposta de Lavrentiy Beria para aplicar a pena suprema (fuzilamento) a cerca de 22.000 oficiais militares, policiais e intelectuais poloneses detidos após a invasão soviética.',
    sourceDoc: 'Arquivo Presidencial da Federação Russa (AP RF): Resolução nº 13 do Politburo'
  },
  {
    id: 3,
    topicId: 10,
    question: 'Onde funcionaram as instalações clandestinas de teste de blindados e aviação entre a Alemanha e a URSS nos anos 1920?',
    options: [
      'Em Paris e Lyon após a rendição francesa',
      'Nas bases secretas de Kama (Kazan) e Lipetsk em território soviético',
      'Em Vladivostok com apoio do Japão',
      'Nos portos do Mar Negro sob supervisão britânica'
    ],
    correctIndex: 1,
    explanation: 'Para contornar o Tratado de Versalhes, a Reichswehr alemã e o Exército Vermelho cooperaram secretamente operando a escola de tanques de Kama (Kazan), a base de aviação de Lipetsk e o centro químico de Tomka em solo russo.',
    sourceDoc: 'Cambridge University Press: The Reichswehr and the Red Army, 1920–1933'
  },
  {
    id: 4,
    topicId: 11,
    question: 'Qual foi o canal construído com trabalho forçado de prisioneiros do Gulag entre 1931 e 1933 com altíssima mortalidade?',
    options: [
      'Canal de Suez',
      'Canal do Panamá',
      'Canal Mar Branco-Báltico (Belomorkanal)',
      'Canal de Kiel'
    ],
    correctIndex: 2,
    explanation: 'O Belomorkanal foi escavado com ferramentas manuais por mais de 100.000 prisioneiros do Gulag em condições brutais sob o comando de Naftaly Frenkel e Genrikh Yagoda, resultando em dezenas de milhares de mortes por exaustão e frio.',
    sourceDoc: 'Arquivo Estatal GARF / Memorial Society: Registros do Belomorkanal'
  },
  {
    id: 5,
    topicId: 12,
    question: 'O que estipulava a conhecida "Lei das Cinco Espigas" (7 de agosto de 1932) durante o Holodomor?',
    options: [
      'O prêmio em dinheiro para o agricultor que colhesse mais trigo',
      'Pena de fuzilamento ou 10 anos de campo por qualquer recolhimento de grãos ou espigas caídas no solo',
      'A distribuição gratuita de farinha aos idosos',
      'A importação de fertilizantes dos Estados Unidos'
    ],
    correctIndex: 1,
    explanation: 'A draconiana lei stalinista de 7 de agosto de 1932 punia como furto da propriedade socialista até mesmo a apanha de espigas de trigo caídas nos campos após a colheita com a pena de fuzilamento ou dez anos de prisão em regime fechado.',
    sourceDoc: 'Sobranie Zakonov SSSR, 1932, nº 62, art. 360'
  },
  {
    id: 6,
    topicId: 9,
    question: 'Qual era a doutrina imposta por Stalin e pelo Komintern que rotulava os sociais-democratas antes da ascensão de Hitler?',
    options: [
      'Aliança Eterna dos Trabalhadores',
      'Doutrina do Social-Fascismo',
      'Tratado de Desarmamento Geral',
      'Comunismo Neoliberal'
    ],
    correctIndex: 1,
    explanation: 'A teoria do "Social-Fascismo", sustentada pelo Komintern entre 1928 e 1934, alegava que a social-democracia era a "ala moderada do fascismo", proibindo os comunistas alemães (KPD) de formarem frente unida com o SPD para barrar o nazismo.',
    sourceDoc: 'Stalin, I. V. Pravda nº 214, 1924; Atas do VI Congresso do Komintern'
  },
  {
    id: 7,
    topicId: 2,
    question: 'Qual revolta de marinheiros em março de 1921 exigiu sovietes livres e o fim do monopólio do Partido Bolchevique?',
    options: [
      'Revolta do Encouraçado Potemkin',
      'Revolta de Kronstadt',
      'Insurreição dos Bôeres',
      'Motim de Kiel'
    ],
    correctIndex: 1,
    explanation: 'Os marinheiros da fortaleza naval de Kronstadt, anteriormente descritos por Trotsky como "o orgulho da revolução", rebelaram-se em 1921 contra a ditadura da Cheka e as requisições forçadas, sendo esmagados militarmente por tropas bolcheviques.',
    sourceDoc: 'Resolução da Tripulação do Navio Petropavlovsk (Kronstadt, 28 de fevereiro de 1921)'
  },
  {
    id: 8,
    topicId: 17,
    question: 'Qual escritor soviético recebeu o Nobel de Literatura e publicou no Ocidente "O Arquipélago Gulag"?',
    options: [
      'Maxim Gorky',
      'Aleksandr Soljenítsin',
      'Vladimir Mayakovsky',
      'Mikhail Sholokhov'
    ],
    correctIndex: 1,
    explanation: 'Aleksandr Soljenítsin, ex-prisioneiro do Gulag, reuniu testemunhos de mais de duas centenas de sobreviventes em "O Arquipélago Gulag". Publicada no Ocidente em 1973, a obra resultou em sua prisão e expulsão forçada da URSS pela KGB em 1974.',
    sourceDoc: 'Memorando da KGB ao Politburo sobre Soljenítsin (RGANI, 1974)'
  }
];
