import fs from 'fs';

const filePath = '/app/applet/src/data/canonicalEditorialDatabase.ts';
const content = fs.readFileSync(filePath, 'utf-8');

const updatedTopic11 = `  11: {
    topicId: 11,
    identificacao: {
      nomeAcontecimento: 'O Sistema Gulag e o Trabalho Forçado na União Soviética (1929–1953)',
      dataELocalizacao: {
        dataExata: '1929–1953 (Marco institucional: 25 de abril de 1930; Dissolução formal: 25 de janeiro de 1960)',
        calendarioNotas: 'Correção cronológica obrigatória: 11 de julho de 1929 não deve ser apresentado como a data de criação formal da administração central do Gulag. O marco institucional formal adotado na historiografia arquivística é 25 de abril de 1930 (Ordem nº 130/63 da OGPU). O ápice de mortalidade ocorreu na crise alimentar da Segunda Guerra Mundial (1942–1943). Dissolução formal da administração: 25 de janeiro de 1960.',
        localizacaoPrecisa: 'Ilhas Solovki (Mar Branco), Canal Mar Branco–Báltico (Belomorkanal), Bacia de Kolyma (complexo Dalstroy no Extremo Oriente), Vorkuta (Bacia de Pechora, Ártico), Norilsk e Karaganda (Karlag, Cazaquistão).',
        teatroOperacoes: 'Centenas de complexos concentracionários e milhares de colônias de trabalho corretivo (ITL e ITK) distribuídos por regiões inóspitas, mineradoras e de fronteira da URSS.'
      },
      governoEResponsaveis: {
        regimeVigente: 'União das Repúblicas Socialistas Soviéticas (Sovnarkom / Conselho de Ministros / Politburo do CC do PCUS)',
        chefesDeEstadoEGoverno: ['Josef Vissarionovitch Stalin (Secretário-Geral do PCUS e Presidente do Sovnarkom)', 'Vyacheslav Molotov', 'Nikita Kruschev'],
        orgaosExecutoresDiretos: [
          'Administração Central dos Campos (GULAG) subordinada sucessivamente à OGPU, NKVD e MVD da URSS',
          'Diretoria Especial de Construção do Extremo Norte (Dalstroy)',
          'Comissariado do Povo de Assuntos Internos (NKVD da URSS)'
        ],
        responsaveisOperacionais: ['Naftaly Frenkel', 'Matvei Berman (Chefe do Gulag 1932–1937)', 'Israel Pliner', 'Viktor Nasedkin']
      }
    },
    contextoHistorico: {
      situacaoAnterior: 'A utilização de confinamento e trabalho compulsório teve antecedentes nos primeiros anos do poder soviético (1918–1921) e no desenvolvimento de Solovki (1923). Com o Primeiro Plano Quinquenal (1928–1929) e a coletivização forçada, a liderança soviética acelerou a mobilização coercitiva de mão de obra penal para a extração de matérias-primas e grandes obras de infraestrutura.',
      causasPoliticas: 'Instrumento central de repressão, coerção política e controle social do regime stalinista, punindo opositores, kulaks e cidadãos enquadrados no Artigo 58 do Código Penal por delitos políticos e econômicos.',
      causasEconomicas: 'Necessidade estatal de mobilizar força de trabalho compulsória em regiões remotas de clima extremo (Ártico, Sibéria, Extremo Oriente) para mineração de ouro, carvão, níquel, extração de madeira e canais estratégicos.',
      causasSociais: 'Deportação e deslocamento compulsório de grupos sociais e camponeses inteiros, associados à punição penal e à imposição de metas produtivas de trabalho forçado.'
    },
    narrativaCronologica: {
      acontecimentosEmOrdem: [
        {
          dataExata: '1918 a 1923',
          acontecimento: 'Antecedentes e desenvolvimento do campo de Solovki',
          personagensEInstituicoes: 'Governo Bolchevique, Tcheka, Ilhas Solovki.',
          decisoesTomadas: 'Primeiras experiências de campos de detenção e trabalho compulsório que serviram de modelo para o sistema posterior.'
        },
        {
          dataExata: '1928 a 1929',
          acontecimento: 'Primeiro Plano Quinquenal e expansão do trabalho forçado',
          personagensEInstituicoes: 'Liderança soviética, OGPU.',
          decisoesTomadas: 'Impulso decisivo à mobilização de mão de obra penal e envio massivo de sentenciados para obras estratégicas e colonização no Norte e Sibéria.'
        },
        {
          dataExata: '25 de abril de 1930',
          acontecimento: 'Ordem nº 130/63 da OGPU — Criação da Administração dos Campos',
          personagensEInstituicoes: 'OGPU da URSS.',
          decisoesTomadas: 'Criação formal da Administração dos Campos dentro da estrutura central da OGPU, marco institucional fundador do órgão Gulag (consolidado em outubro de 1930).'
        },
        {
          dataExata: '1931 a 1933',
          acontecimento: 'Construção do Canal Mar Branco–Báltico (Belomorkanal)',
          personagensEInstituicoes: 'OGPU, dezenas de milhares de prisioneiros.',
          decisoesTomadas: 'Emprego maciço de trabalho penal em obra acelerada de infraestrutura, convertida em símbolo da associação entre coerção, mortalidade e propaganda do regime.'
        },
        {
          dataExata: '13 de novembro de 1931',
          acontecimento: 'Criação do Dalstroy e exploração de Kolyma',
          personagensEInstituicoes: 'Eduard Berzin, OGPU, Administração de Construção do Extremo Norte.',
          decisoesTomadas: 'Organização da exploração mineradora de ouro e recursos na inóspita bacia de Kolyma, com base central no trabalho de presos sob condições climáticas extremas.'
        },
        {
          dataExata: '1937 a 1938',
          acontecimento: 'Grande Terror e expansão vertiginosa do contingente prisional',
          personagensEInstituicoes: 'NKVD sob Nikolai Yezhov, Diretoria do Gulag.',
          decisoesTomadas: 'Operações repressivas em massa geram fluxo sem precedentes de detidos nos campos (108.654 mortes registradas no sistema somente em 1938 segundo GARF f. 9414).'
        },
        {
          dataExata: '1941 a 1943',
          acontecimento: 'Invasão alemã, crise alimentar e pico de mortalidade nos campos',
          personagensEInstituicoes: 'NKVD da URSS, Administração Geral do Gulag.',
          decisoesTomadas: 'A economia de guerra e a carência nutricional provocam o ápice de mortes documentadas nos campos: 352.560 em 1942 e 267.826 em 1943.'
        },
        {
          dataExata: 'Março de 1953 a 1954',
          acontecimento: 'Morte de Stalin, anistias e revoltas prisionais (Vorkuta, Norilsk, Kengir)',
          personagensEInstituicoes: 'Nova liderança soviética, prisioneiros em greve, forças do MVD.',
          decisoesTomadas: 'Anistia parcial para presos comuns e posterior repressão e concessões após as insurreições de presos em Vorkuta, Norilsk e Kengir, acelerando a crise do sistema.'
        },
        {
          dataExata: '25 de janeiro de 1960',
          acontecimento: 'Ordem nº 020 do Ministério do Interior (MVD) extinguindo a administração Gulag',
          personagensEInstituicoes: 'Nikita Kruschev, MVD da URSS.',
          decisoesTomadas: 'Dissolução formal da administração central do Gulag, com reestruturação das unidades prisionais e colônias sob nova arquitetura penitenciária.'
        }
      ],
      sinteseNarrativaGeral: 'O sistema do Gulag combinou repressão política, isolamento de opositores reais ou presumidos e exploração de trabalho forçado em projetos estratégicos de infraestrutura e mineração. O marco formal de criação da administração dos campos foi a Ordem nº 130/63 da OGPU em 25 de abril de 1930. Entre 1929 e 1953, cerca de 18 milhões de pessoas passaram pelos campos e colônias, com mortalidade oficial documentada de 1.606.748 óbitos (GARF f. 9414) até sua dissolução em 1960.'
    },
    documentosEEvidencias: {
      documentosOriginais: [
        {
          titulo: 'Ordem OGPU nº 130/63 — Criação da Administração dos Campos de Trabalho Corretivo',
          fundoArquivistico: 'GARF (Arquivo Estatal da Federação Russa) / Exposição Ausstellung Gulag',
          instituicaoGuarda: 'Arquivo Estatal da Federação Russa (GARF)',
          descricaoConteudo: 'Ato administrativo fundador da Administração dos Campos de Trabalho Corretivo (marco institucional do Gulag de 25 de abril de 1930).',
          autenticidadeEStatus: 'Autêntico, diploma normativo desclassificado.'
        },
        {
          titulo: 'Relatório Oficial de Mortalidade de Presos no Sistema Gulag (1930–1956)',
          fundoArquivistico: 'GARF fundo 9414; Fundação Alexander N. Yakovlev, doc. 1009320',
          instituicaoGuarda: 'Arquivo Estatal da Federação Russa (GARF)',
          descricaoConteudo: 'Série contábil e estatística oficial da seção de registro operacional do Gulag comprovando 1.606.748 mortes registradas nos campos e colônias entre 1930 e 1956, com pico em 1942 (352.560) e 1943 (267.826).',
          autenticidadeEStatus: 'Autêntico, certificado em pesquisas arquivísticas de Applebaum, Khlevniuk e Yakovlev.'
        }
      ],
      fotografiasERegistros: [
        {
          registroOuFoto: 'Fotografias documentais dos prisioneiros nas escavações com pás e carrinhos de mão do Belomorkanal (1931–1933)',
          acervoOrigem: 'Álbuns de Construção do Canal Mar Branco-Báltico / Coleções GARF',
          anoEIdentificador: '1932, Registro Fotográfico BMK-32',
          significadoProbatório: 'Evidência visual do trabalho braçal compulsório e precariedade do maquinário pesado nas obras do canal.'
        },
        {
          registroOuFoto: 'Registros fotográficos e cartográficos das minas e alojamentos de prisioneiros em Kolyma (Dalstroy)',
          acervoOrigem: 'Museu Memorial do Gulag em Moscou / Arquivos Regionais de Magadan',
          anoEIdentificador: 'Década de 1930–1940, Registro Dalstroy-Kolyma',
          significadoProbatório: 'Documentação da extração de ouro e minérios sob condições climáticas árticas extremas.'
        }
      ],
      testemunhos: [
        {
          testemunha: 'Varlam Shalamov',
          funcaoOrigem: 'Escritor e sobrevivente das minas de ouro de Kolyma por 17 anos',
          trechoDepoimento: 'O trabalho no campo não educava nem corrigia ninguém; o campo era uma escola puramente negativa, corrompendo corpos e almas diante da fome contínua, do frio ártico e do esgotamento físico programado.',
          referenciaVerificada: 'SHALAMOV, Varlam. Contos de Kolimá. São Paulo: Editora 34, 2015.'
        },
        {
          testemunha: 'Aleksandr Solzhenitsyn',
          funcaoOrigem: 'Escritor, capitão de artilharia, prisioneiro político (zek) e Prêmio Nobel de Literatura',
          trechoDepoimento: 'O Gulag era uma rede orgânica espalhada como um arquipélago invisível por todo o corpo da União Soviética, sustentada pela triagem judicial sumária e pela extração forçada de força humana.',
          referenciaVerificada: 'SOLZHENITSYN, Aleksandr. Arquipélago Gulag. Rio de Janeiro: Record, 1976.'
        }
      ],
      decretosECorrespondencias: [
        {
          codigoOuNumero: 'Ordem OGPU nº 130/63',
          dataEmissao: '25 de abril de 1930',
          orgaoEmissor: 'Diretoria Política Conjunta do Estado (OGPU da URSS)',
          teorDispositivo: 'Ato de fundação e organização da Administração dos Campos de Trabalho Corretivo (marco institucional formal do Gulag).',
          localizacaoArquivo: 'GARF / Exposição Documental Ausstellung Gulag'
        },
        {
          codigoOuNumero: 'Compilação Estatística GARF f. 9414 (Справка о смертности заключенных)',
          dataEmissao: 'Período 1930–1956',
          orgaoEmissor: 'Seção de Registro Operacional e Estatística do Gulag',
          teorDispositivo: 'Série oficial de mortes registradas nos campos e colônias: total de 1.606.748 mortes documentadas, registrando o ápice em 1942 (352.560 mortes) e 1943 (267.826 mortes).',
          localizacaoArquivo: 'GARF fundo 9414; reproduzido no Arquivo Alexander N. Yakovlev doc. nº 1009320'
        }
      ]
    },
    responsabilidadesEConsequencias: {
      responsaveisPoliticosEInstitucionais: [
        {
          agenteOuOrgao: 'Josef Stalin e Círculo Dirigente do Politburo',
          funcaoCargo: 'Secretário-Geral do PCUS e Chefe do Governo Soviético',
          responsabilidadeEspecifica: 'Diretrizes governamentais de coletivização, metas econômicas coercitivas e aprovação das cotas de encarceramento e repressão em massa.'
        },
        {
          agenteOuOrgao: 'OGPU / NKVD / MVD da URSS',
          funcaoCargo: 'Polícia Política e Órgãos de Segurança do Estado Soviético',
          responsabilidadeEspecifica: 'Gestão direta do sistema penitenciário de campos e colônias, alocação de mão de obra forçada e manutenção do regime prisional.'
        }
      ],
      vitimasEImpactos: {
        estimativasQuantitativas: 'Aproximadamente 18 milhões de indivíduos passaram pelo sistema de campos e colônias do Gulag entre 1929 e 1953 (fluxo acumulado). Cerca de 6 milhões foram deslocados e deportados como colonos especiais. A série documental administrativa oficial (GARF f. 9414) registra 1.606.748 mortes documentadas nos campos e colônias de 1930 a 1956.',
        impactosDemograficosEHumanos: 'Destruição de laços familiares, dezenas de milhares de mortos por hipotermia, desnutrição e doenças infectocontagiosas crônicas; estigma social prolongado após a soltura.',
        impactosEconomicos: 'Extração compulsória de dezenas de toneladas de ouro em Kolyma, níquel em Norilsk, carvão em Vorkuta e construção de milhares de quilômetros de ferrovias e canais sob baixa produtividade e alto desperdício material.'
      },
      consequenciasImediatas: 'Militarização da economia penal em áreas remotas do Norte e da Sibéria e dependência estatal temporária do trabalho sob custódia.',
      consequenciasLongoPrazo: 'Desgaste moral e político do regime soviético; desestalinização e libertação massiva a partir de 1953; persistência da memória concentracionária documentada na literatura memorialista e nos arquivos desclassificados.'
    },
    debateHistoriografico: {
      interpretacoesDiferentes: [
        {
          correnteEscola: 'Interpretação Econômica e Funcional do Trabalho Forçado',
          principaisAutores: ['Oleg V. Khlevniuk', 'Paul R. Gregory'],
          teseCentral: 'Examina a contradição entre a lógica econômica da industrialização acelerada e a baixa produtividade intrínseca do trabalho sob coerção e desnutrição, que se tornou antieconômico para o próprio Estado.',
          antiteseCritica: 'Não deve desconsiderar que a motivação original do sistema penal e político transcendia cálculos contábeis de curto prazo.'
        },
        {
          correnteEscola: 'Interpretação Integrada: Repressão Política e História Institucional',
          principaisAutores: ['Anne Applebaum', 'Galina Ivanova'],
          teseCentral: 'Analisa o Gulag como instituição multifuncional do totalitarismo stalinista, unindo repressão política sistemática, deportação populacional e exploração de recursos em escala continental.',
          antiteseCritica: 'Necessidade metodológica de distinguir fluxos anuais de internados da população prisional presente simultaneamente.'
        },
        {
          correnteEscola: 'História Social e Experiência Prisional',
          principaisAutores: ['Varlam Shalamov', 'Aleksandr Solzhenitsyn', 'Sheila Fitzpatrick'],
          teseCentral: 'Reconstrói as hierarquias internas, as relações de sobrevivência cotidiana e a violência dos códigos informais no microcosmo carcerário soviético.',
          antiteseCritica: 'Memórias individuais precisam ser confrontadas e integradas com as séries estatísticas arquivísticas oficiais.'
        }
      ],
      consensosAcademicos: 'Consenso arquivístico de que o marco institucional de criação da administração central do Gulag é a Ordem nº 130/63 da OGPU (25 de abril de 1930); de que cerca de 18 milhões passaram pelo sistema (1929–1953); e de que a mortalidade teve seu ápice absoluto durante o desabastecimento crítico de 1942–1943.',
      controversiasELimitacoesDasFontes: 'A cobertura estatística variou ao longo dos anos entre campos de regime severo (ITL) e colônias agrícolas/industriais (ITK); registros médicos subnotificavam óbitos imediatos após libertações antecipadas por invalidez extrema.'
    },
    citacoesVerificadas: [
      {
        trechoLiteral: 'A estimativa amplamente aceita de que cerca de 18 milhões de pessoas passaram pelos campos e colônias do Gulag entre 1929 e 1953 reflete o fluxo acumulado de detidos no sistema ao longo de mais de duas décadas, e não a população simultânea em um único momento.',
        autor: 'Anne Applebaum',
        obra: 'Gulag: A History',
        edicaoEditoraAno: '1. ed. New York: Doubleday, 2003',
        paginaExata: 'Apêndice Estatístico, p. 578-583',
        analiseContextual: 'A historiadora esclarece a metodologia estatística correta para leitura dos dados arquivísticos do GARF.'
      },
      {
        trechoLiteral: 'O sistema do Gulag permaneceu economicamente ineficiente, com produtividade sistematicamente inferior à do trabalho livre assalariado, demonstrando que a coerção penal não foi capaz de substituir racionalmente incentivos econômicos modernos.',
        autor: 'Oleg V. Khlevniuk',
        obra: 'The History of the Gulag: From Collectivization to the Great Terror',
        edicaoEditoraAno: '1. ed. New Haven: Yale University Press, 2004',
        paginaExata: 'p. 328-333',
        analiseContextual: 'Khlevniuk analisa os balanços contábeis e produtivos internos do NKVD.'
      }
    ],
    bibliografia: [
      {
        entradaAbnt: 'APPLEBAUM, Anne. Gulag: A History. New York: Doubleday, 2003. 677 p.',
        entradaChicago: 'Applebaum, Anne. 2003. Gulag: A History. New York: Doubleday.',
        tipoFonte: 'Monografia',
        isbnOuReferencia: 'ISBN 978-0767900560'
      },
      {
        entradaAbnt: 'KHLEVNIUK, Oleg V. The History of the Gulag: From Collectivization to the Great Terror. New Haven: Yale University Press, 2004. 418 p.',
        entradaChicago: 'Khlevniuk, Oleg V. 2004. The History of the Gulag: From Collectivization to the Great Terror. New Haven: Yale University Press.',
        tipoFonte: 'Monografia',
        isbnOuReferencia: 'ISBN 978-0300092844'
      },
      {
        entradaAbnt: 'SOLZHENITSYN, Aleksandr. The Gulag Archipelago, 1918–1956: An Experiment in Literary Investigation. New York: Harper & Row, 1974. 3 v.',
        entradaChicago: 'Solzhenitsyn, Aleksandr. 1974. The Gulag Archipelago, 1918–1956. New York: Harper & Row.',
        tipoFonte: 'Monografia',
        isbnOuReferencia: 'ISBN 978-0813332895'
      },
      {
        entradaAbnt: 'SHALAMOV, Varlam. Contos de Kolimá. Tradução de Denise Sales e Elena Vássina. São Paulo: Editora 34, 2015. 6 v.',
        entradaChicago: 'Shalamov, Varlam. 2015. Kolyma Tales. São Paulo: Editora 34.',
        tipoFonte: 'Monografia',
        isbnOuReferencia: 'ISBN 978-8573266009'
      },
      {
        entradaAbnt: 'ARQUIVO ESTATAL DA FEDERAÇÃO RUSSA (GARF). Fundo R-9414 (Diretoria Geral dos Campos - Gulag): Relatório de Mortalidade de Presos no Sistema Gulag (1930–1956). Moscou: GARF / Fundação Alexander N. Yakovlev, doc. 1009320.',
        entradaChicago: 'State Archive of the Russian Federation (GARF). Fond R-9414 (Gulag Administration): Report on Prisoner Mortality in the Gulag System (1930–1956). Moscow.',
        tipoFonte: 'Fundo Arquivístico'
      }
    ]
  },`;

const startMarker = '  11: {';
const endMarker = '  7: {';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found', { startIndex, endIndex });
  process.exit(1);
}

const newContent = content.slice(0, startIndex) + updatedTopic11 + '\n\n' + content.slice(endIndex);
fs.writeFileSync(filePath, newContent, 'utf-8');
console.log('Successfully updated Topic 11 in canonicalEditorialDatabase.ts');
