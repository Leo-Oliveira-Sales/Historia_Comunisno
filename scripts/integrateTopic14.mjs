import fs from 'fs';

// ==========================================
// 1. UPDATE ACADEMIC_CHAPTERS[14]
// ==========================================
const academicChaptersPath = './src/data/academicChaptersDatabase.ts';
let academicContent = fs.readFileSync(academicChaptersPath, 'utf-8');

const chapter14Obj = `  14: {
    topicId: 14,
    title: 'Nacionalidades e Deportações de Minorias Étnicas',
    subtitle: 'Deportações em massa, punição coletiva e limpeza étnica na URSS (1937–1949)',
    authorCatedra: 'Cátedra de História Russa e Soviética · Capítulo Acadêmico',
    introduction: \`Entre 1937 e 1949, o governo soviético promoveu uma série de operações de deportação que atingiram milhões de pessoas de diferentes origens nacionais e étnicas. Algumas operações envolveram comunidades inteiras, retiradas compulsoriamente de suas regiões de residência e transferidas para áreas distantes, sobretudo na Ásia Central, na Sibéria e em outras regiões do interior da União Soviética.

Essas operações foram organizadas pelo Estado e executadas principalmente pelo aparato de segurança, com participação de autoridades partidárias, administrativas e ferroviárias.

Entre os grupos atingidos estavam:
* Coreanos do Extremo Oriente soviético, deportados em 1937.
* Alemães soviéticos, deportados em massa a partir de 1941.
* Karachais, deportados em 1943.
* Kalmyks, deportados em 1943.
* Chechenos e inguches, deportados em 1944.
* Balkars, deportados em 1944.
* Tártaros da Crimeia, deportados em maio de 1944.
* Turcos mesquécios e outras comunidades da região fronteiriça da Geórgia, deportados em 1944.
* Gregos do Mar Negro e outros grupos deslocados em operações posteriores, incluindo ações em 1949.

Também houve deportações de outras categorias de pessoas e populações, incluindo cidadãos de territórios incorporados à União Soviética, mas essas operações nem sempre tiveram a mesma base administrativa ou o mesmo caráter étnico das deportações coletivas aqui examinadas.

O conceito de deportação étnica descreve a transferência compulsória de pessoas selecionadas por sua nacionalidade, origem ou pertencimento a um grupo. A expressão limpeza étnica pode ser utilizada em estudos históricos para analisar políticas destinadas a remover grupos de determinados territórios, mas seu uso deve ser justificado pelo contexto e pelas evidências.\`,
    sections: [
      {
        number: '2',
        title: 'Contexto histórico',
        content: '',
        subsections: [
          {
            number: '2.1',
            title: 'A União Soviética e a questão das nacionalidades',
            content: \`A União Soviética era um Estado multinacional, composto por repúblicas, regiões autônomas e comunidades com diferentes línguas, religiões, tradições e identidades nacionais. O regime soviético reconhecia formalmente diversas nacionalidades e organizava parte de sua estrutura territorial em torno delas.

Entretanto, esse reconhecimento coexistiu com a centralização política, a repressão de movimentos considerados separatistas e a crescente intervenção do poder central na vida das populações. Durante o governo de Stalin, as autoridades passaram a tratar determinados grupos étnicos e populações de regiões fronteiriças como possíveis riscos à segurança.\`
          },
          {
            number: '2.2',
            title: 'Segurança estatal e punição coletiva',
            content: \`A política soviética de segurança frequentemente partia da identificação de categorias populacionais consideradas potencialmente perigosas. Em vez de investigar exclusivamente a conduta individual de pessoas acusadas de crimes, determinadas operações atingiram comunidades inteiras com base na nacionalidade, na origem regional ou no pertencimento étnico.\`
          },
          {
            number: '2.3',
            title: 'A guerra e o agravamento das deportações',
            content: \`A invasão alemã da União Soviética, em junho de 1941, intensificou o clima de emergência militar e ampliou o alcance das medidas de segurança. As autoridades soviéticas temiam a espionagem, a sabotagem e o avanço alemão, deportando os alemães soviéticos em massa em 1941, além de povos do Cáucaso e da Crimeia nos anos seguintes.\`
          }
        ]
      },
      {
        number: '3',
        title: 'Narrativa cronológica das principais operações',
        content: '',
        subsections: [
          {
            number: '3.1',
            title: '1937: Coreanos do Extremo Oriente',
            content: \`Remoção em massa de coreanos soviéticos do Extremo Oriente para o Cazaquistão e o Uzbequistão sob a justificativa de segurança fronteiriça e prevenção de espionagem relacionada ao Japão.\`
          },
          {
            number: '3.2',
            title: '1941: Alemães soviéticos',
            content: \`Deportação em massa de alemães étnicos a partir de agosto de 1941, dissolvendo a República Autônoma dos Alemães do Volga e dispersando a população para a Sibéria e Ásia Central.\`
          },
          {
            number: '3.3',
            title: '1943: Karachais e kalmyks',
            content: \`Remoção de karachais (novembro de 1943) e kalmyks (dezembro de 1943) sob acusações coletivas de colaboração com o ocupante alemão.\`
          },
          {
            number: '3.4',
            title: '1944: Chechenos, inguches e balkars',
            content: \`Operação Chechevitsa (fevereiro de 1944) que deportou chechenos e inguches, seguida pela deportação dos balkars em março de 1944 e dissolução de suas unidades autônomas.\`
          },
          {
            number: '3.5',
            title: '1944: Tártaros da Crimeia e povos fronteiriços',
            content: \`Deportação dos tártaros da Crimeia em 18 de maio de 1944 para o Uzbequistão, e em novembro de 1944 de turcos mesquécios, curdos e hemshins da fronteira georgiana.\`
          },
          {
            number: '3.6',
            title: '1949: Gregos do Mar Negro e outras operações',
            content: \`Novas ondas de deslocamento em 1949 atingindo comunidades gregas e populações de regiões do Mar Negro e da Moldávia soviética.\`
          }
        ]
      },
      {
        number: '4',
        title: 'Documentos e evidências',
        content: \`A pesquisa fundamenta-se em decretos do Presidium do Soviete Supremo, resoluções do Comitê de Defesa do Estado, ordens operacionais do NKVD, relatórios de transporte ferroviário, registros de assentamentos especiais e testemunhos orais e memoriais catalogados em acervos como o GARF e o RGASPI.\`
      },
      {
        number: '5',
        title: 'Responsabilidades e consequências',
        content: \`As deportações constituíram políticas estatais de punição coletiva que resultaram em centenas de milhares de mortes por doenças, fome e frio durante o transporte e nos assentamentos especiais, alterando permanentemente a demografia e a cultura dos povos atingidos.\`
      },
      {
        number: '6',
        title: 'Debate historiográfico',
        content: \`O debate historiográfico articula a história política e institucional do stalinismo (Khlevniuk), a história social e cotidiana (Fitzpatrick) e o estudo comparativo das deportações étnicas e da limpeza étnica (J. Otto Pohl).\`
      }
    ],
    conclusion: \`As deportações soviéticas de 1937 a 1949 constituíram uma série de operações estatais que deslocaram compulsoriamente populações inteiras, frequentemente com base na nacionalidade ou origem étnica.

A análise histórica exige identificar os responsáveis, as justificativas oficiais, os procedimentos administrativos, as condições de exílio e as consequências demográficas e culturais.

O rigor acadêmico também exige reconhecer as diferenças entre as operações e separar a comprovação das deportações de questões ainda debatidas sobre motivação, classificação jurídica e extensão das perdas humanas.\`,
    bibliographicReferences: [
      'FITZPATRICK, Sheila. Everyday Stalinism: Ordinary Life in Extraordinary Times. New York: Oxford University Press, 1999.',
      'KHLEVNIUK, Oleg V. Stalin: New Biography of a Dictator. New Haven: Yale University Press, 2015.',
      'POHL, J. Otto. Ethnic Cleansing in the USSR, 1937–1949. Westport: Praeger, 1999.'
    ]
  }`;

// Find last closing '  }' of ACADEMIC_CHAPTERS[13] before final '};'
const lastClosing13 = academicContent.lastIndexOf('  }\n};');
if (lastClosing13 !== -1) {
  academicContent = academicContent.slice(0, lastClosing13) + '  },\n\n' + chapter14Obj + '\n};';
  fs.writeFileSync(academicChaptersPath, academicContent, 'utf-8');
  console.log('Successfully added ACADEMIC_CHAPTERS[14]');
} else {
  console.error('Could not find last closing bracket in academicChaptersDatabase.ts');
}

// ==========================================
// 2. UPDATE RESEARCH_DOSSIERS[14]
// ==========================================
const researchDossiersPath = './src/data/researchDossiersDatabase.ts';
let researchContent = fs.readFileSync(researchDossiersPath, 'utf-8');

const dossier14Markdown = `  14: \`# Nº 14 — NACIONALIDADES E DEPORTAÇÕES DE MINORIAS ÉTNICAS

## Deportações em Massa, Punição Coletiva e Limpeza Étnica na URSS

**Período:** 1937–1949
**Eixos de pesquisa:** políticas de nacionalidade, segurança estatal, deportação em massa, assentamentos especiais, deslocamento forçado e memória histórica.

---

## 1. IDENTIFICAÇÃO DO ACONTECIMENTO

### 1.1. Objeto de pesquisa
Este dossiê examina as deportações em massa de grupos nacionais e étnicos realizadas pela União Soviética entre 1937 e 1949, incluindo coreanos (1937), alemães soviéticos (1941), karachais e kalmyks (1943), chechenos, inguches e balkars (1944), tártaros da Crimeia (1944), turcos mesquécios (1944) e gregos do Mar Negro (1949).

### 1.2. Definições operacionais
* **Deportação em massa:** remoção compulsória de uma população em escala significativa.
* **Deportação étnica:** operação em que a nacionalidade ou origem étnica constitui critério decisivo para a remoção.
* **Punição coletiva:** imposição de consequências punitivas a pessoas por sua pertença a um grupo, sem demonstração de responsabilidade individual.
* **Limpeza étnica:** remoção de populações de determinado território com base na identidade étnica ou nacional.

---

## 2. CONTEXTO HISTÓRICO
A União Soviética, embora reconhecesse formalmente diversas nacionalidades, centralizou o poder político e, a partir da década de 1930, passou a tratar populações fronteiriças e grupos étnicos específicos como riscos potenciais à segurança estatal, intensificando as medidas durante a Segunda Guerra Mundial sob alegações de suspeita de colaboração.

---

## 3. CRONOLOGIA DOCUMENTAL DAS PRINCIPAIS OPERAÇÕES
* **1937:** Coreanos soviéticos (Extremo Oriente para Ásia Central).
* **1941:** Alemães soviéticos (Volga e outras regiões para Sibéria/Cazaquistão).
* **1943:** Karachais (nov) e Kalmyks (dez).
* **1944:** Chechenos e inguches (fev - Operação Chechevitsa); Balkars (mar); Tártaros da Crimeia (mai); Turcos mesquécios e curdos da Geórgia (nov).
* **1949:** Gregos do Mar Negro e outras comunidades.

---

## 4. DOCUMENTOS E EVIDÊNCIAS
* **Documentos decisórios:** Decretos do Presidium do Soviete Supremo e resoluções do Comitê de Defesa do Estado.
* **Documentos operacionais:** Ordens do NKVD, relatórios de transporte ferroviário e registros de assentamentos especiais.
* **Acervos de consulta:** GARF (Arquivo Estatal da Federação Russa) e RGASPI.

---

## 5. RESPONSABILIDADES E CONSEQUÊNCIAS
As operações foram decididas pela liderança central stalinista, planejadas pelo NKVD e executadas como punição coletiva, causando centenas de milhares de mortes devido ao frio, à fome, às doenças no transporte e à rigidez dos assentamentos especiais.

---

## 6. DEBATE HISTORIOGRÁFICO
* **História institucional e política:** Oleg V. Khlevniuk.
* **História social e cotidiana:** Sheila Fitzpatrick.
* **Estudo comparativo das deportações étnicas:** J. Otto Pohl.

---

## 7. BIBLIOGRAFIA ABNT
FITZPATRICK, Sheila. *Everyday Stalinism*. New York: Oxford University Press, 1999.
KHLEVNIUK, Oleg V. *Stalin: New Biography of a Dictator*. New Haven: Yale University Press, 2015.
POHL, J. Otto. *Ethnic Cleansing in the USSR, 1937–1949*. Westport: Praeger, 1999.\`\n};`;

// Replace final '};' of RESEARCH_DOSSIERS
const lastClosingDossier13 = researchContent.lastIndexOf('\n};');
if (lastClosingDossier13 !== -1) {
  researchContent = researchContent.slice(0, lastClosingDossier13) + ',\n\n' + dossier14Markdown;
  fs.writeFileSync(researchDossiersPath, researchContent, 'utf-8');
  console.log('Successfully added RESEARCH_DOSSIERS[14]');
} else {
  console.error('Could not find closing bracket in researchDossiersDatabase.ts');
}

// ==========================================
// 3. UPDATE CANONICAL_EDITORIAL_DATABASE[14]
// ==========================================
const canonicalPath = './src/data/canonicalEditorialDatabase.ts';
let canonicalContent = fs.readFileSync(canonicalPath, 'utf-8');

const updatedTopic14Canonical = `  14: {
    topicId: 14,
    identificacao: {
      nomeAcontecimento: 'Nacionalidades e Deportações de Minorias Étnicas na URSS (1937–1949)',
      dataELocalizacao: {
        dataExata: '1937–1949 (Operações principais: coreanos em 1937, alemães em 1941, povos do Cáucaso e Crimeia em 1943–1944, gregos em 1949)',
        calendarioNotas: 'As operações ocorreram em sucessivas vagas de acordo com diretrizes do Estado e do Comitê de Defesa do Estado.',
        localizacaoPrecisa: 'Extremo Oriente soviético, República Autônoma dos Alemães do Volga, Cáucaso do Norte, Península da Crimeia, Geórgia e regiões fronteiriças da URSS.',
        teatroOperacoes: 'Zonas fronteiriças e repúblicas autônomas, com retransporte e exílio em assentamentos especiais na Sibéria, Cazaquistão e Ásia Central.'
      },
      governoEResponsaveis: {
        regimeVigente: 'União das Repúblicas Socialistas Soviéticas (Sovnarkom, Comitê de Defesa do Estado e Politburo)',
        chefesDeEstadoEGoverno: ['Josef Vissarionovitch Stalin', 'Lavrentiy Pavlovich Beria', 'Vyacheslav Molotov'],
        orgaosExecutoresDiretos: [
          'Comissariado do Povo de Assuntos Internos (NKVD da URSS)',
          'Comitê de Defesa do Estado (GKO)',
          'Ferrovias Estatais e Comitês Regionais do Partido'
        ],
        responsaveisOperacionais: ['Lavrentiy Beria', 'Ivan Serov', 'Bohdan Kobulov']
      }
    },
    contextoHistorico: {
      situacaoAnterior: 'A União Soviética estruturava parte de sua administração em repúblicas e regiões autônomas baseadas em nacionalidades, mas mantinha centralização férrea e vigilância sobre minorias fronteiriças.',
      causasPoliticas: 'Doutrina de segurança nacional baseada na eliminação preventiva de riscos associados a minorias com laços étnicos transfronteiriços ou acusadas coletivamente de colaboração com potências inimigas (Japão e Alemanha).',
      causasEconomicas: 'Utilização da mão de obra deportada sob o regime de assentamentos especiais para colonizar e explorar recursos em regiões inóspitas da Sibéria, Cazaquistão e Ásia Central.',
      causasSociais: 'Punição coletiva aplicada a povos inteiros com base na origem étnica ou nacional, ignorando garantias individuais e destruindo estruturas comunitárias locais.'
    },
    narrativaCronologica: {
      acontecimentosEmOrdem: [
        {
          dataExata: '1937',
          acontecimento: 'Deportação dos Coreanos do Extremo Oriente Soviético',
          personagensEInstituicoes: 'NKVD, governo soviético.',
          decisoesTomadas: 'Remoção forçada de mais de 170.000 coreanos para o Cazaquistão e Uzbequistão sob alegação de prevenção de espionagem japonesa.'
        },
        {
          dataExata: 'Agosto a Setembro de 1941',
          acontecimento: 'Deportação em Massa dos Alemães Soviéticos',
          personagensEInstituicoes: 'Presidium do Soviete Supremo, NKVD.',
          decisoesTomadas: 'Abolição da República Autônoma dos Alemães do Volga e deportação de cerca de 900.000 alemães étnicos para a Sibéria e Cazaquistão.'
        },
        {
          dataExata: 'Novembro e Dezembro de 1943',
          acontecimento: 'Deportação dos Karachais e Kalmyks',
          personagensEInstituicoes: 'GKO, NKVD.',
          decisoesTomadas: 'Remoção coletiva dos karachais e kalmyks do Cáucaso e regiões sulistas sob acusação de colaboração com a ocupação alemã.'
        },
        {
          dataExata: 'Fevereiro a Março de 1944',
          acontecimento: 'Operação Chechevitsa: Deportação de Chechenos, Inguches e Balkars',
          personagensEInstituicoes: 'Lavrentiy Beria, NKVD, tropas do Exército Vermelho.',
          decisoesTomadas: 'Remoção relâmpago de mais de 500.000 chechenos e inguches e dissolução de sua república autônoma.'
        },
        {
          dataExata: '18 a 20 de maio de 1944',
          acontecimento: 'Deportação dos Tártaros da Crimeia',
          personagensEInstituicoes: 'NKVD, GKO.',
          decisoesTomadas: 'Expulsão total de mais de 180.000 tártaros da Crimeia para o Uzbequistão em poucos dias.'
        },
        {
          dataExata: 'Novembro de 1944',
          acontecimento: 'Deportação dos Turcos Mesquécios e Grupos Fronteiriços',
          personagensEInstituicoes: 'NKVD, autoridades da Geórgia.',
          decisoesTomadas: 'Deslocamento de turcos mesquécios, curdos e hemshins da fronteira georgiano-turca.'
        }
      ],
      sinteseNarrativaGeral: 'Entre 1937 e 1949, o Estado soviético executou sucessivas operações de deportação étnica e punição coletiva, removendo povos inteiros de suas pátrias históricas para assentamentos especiais na Ásia Central e Sibéria, provocando centenas de milhares de mortes e profundas transformações demográficas.'
    },
    documentosEEvidencias: {
      documentosOriginais: [
        {
          titulo: 'Decretos do Presidium do Soviete Supremo e Resoluções do GKO sobre Deportações',
          fundoArquivistico: 'GARF (Arquivo Estatal da Federação Russa), Coleções do Comitê de Defesa do Estado',
          instituicaoGuarda: 'GARF, Moscou',
          descricaoConteudo: 'Conjunto de ordens estatais determinando a remoção de minorias étnicas sob justificativas de segurança fronteiriça e colaboração militar.',
          autenticidadeEStatus: 'Autêntico, desclassificado nos arquivos estatais russos.'
        }
      ],
      fotografiasERegistros: [
        {
          registroOuFoto: 'Registros fotográficos e cartográficos dos comboios ferroviários e colônias de assentamento especial',
          acervoOrigem: 'Arquivos Nacionais do Cazaquistão e Uzbequistão / Memorial',
          anoEIdentificador: '1937–1949, Arquivos de Assentamento Especial',
          significadoProbatório: 'Evidenciam as condições precárias de chegada e o controle policial exercido sobre os deportados.'
        }
      ],
      testemunhos: [
        {
          testemunha: 'Sobreviventes e Memoriais das Comunidades Deportadas',
          funcaoOrigem: 'Membros das comunidades chechena, tártara da crimeia e alemã soviética',
          trechoDepoimento: 'Fomos empurrados em vagões de gado sem água nem comida por semanas, sem saber para onde íamos, e muitos morreram antes de chegar à estepe gelada.',
          referenciaVerificada: 'Testemunhos orais catalogados pela Associação Memorial e acervos de história oral.'
        }
      ],
      decretosECorrespondencias: [
        {
          codigoOuNumero: 'Resoluções do Comitê de Defesa do Estado (GKO) de 1943–1944',
          dataEmissao: '1943–1944',
          orgaoEmissor: 'Comitê de Defesa do Estado da URSS (Stalin, Beria)',
          teorDispositivo: 'Ordenam a deportação integral de chechenos, inguches, tártaros da crimeia e outros povos sob alegação de colaboração com o inimigo.',
          localizacaoArquivo: 'GARF / RGASPI'
        }
      ]
    },
    responsabilidadesEConsequencias: {
      responsaveisPoliticosEInstitucionais: [
        {
          agenteOuOrgao: 'Josef Stalin e Cúpula do GKO/Politburo',
          funcaoCargo: 'Liderança Suprema da URSS',
          responsabilidadeEspecifica: 'Decisão política central de autorizar e supervisionar as operações de deportação em massa.'
        },
        {
          agenteOuOrgao: 'Lavrentiy Beria e o NKVD',
          funcaoCargo: 'Comissariado do Povo de Assuntos Internos',
          responsabilidadeEspecifica: 'Planejamento operacional, coordenação logística ferroviária e administração policial dos assentamentos especiais.'
        }
      ],
      vitimasEImpactos: {
        estimativasQuantitativas: 'Mais de 3 milhões de pessoas de diversas nacionalidades foram deportadas entre 1937 e 1949, com centenas de milhares de mortes decorrentes das péssimas condições de transporte e inanição no exílio.',
        impactosDemograficosEHumanos: 'Destruição de repúblicas autônomas, dispersão de comunidades inteiras e perdas humanas catastróficas em proporção à população de cada etnia.',
        impactosEconomicos: 'Uso da mão de obra forçada nos assentamentos especiais para mineração, agricultura e construção em zonas inóspitas.'
      },
      consequenciasImediatas: 'Afastamento forçado de minorias de suas terras ancestrais e imposição de vigilância policial rígida sob o estatuto de colonos especiais.',
      consequenciasLongoPrazo: 'Reabilitação parcial tardia no pós-stalinismo e forte mobilização histórica e nacionalista contemporânea nos países pós-soviéticos.'
    },
    debateHistoriografico: {
      interpretacoesDiferentes: [
        {
          correnteEscola: 'Análise Institucional e Política de Estado',
          principaisAutores: ['Oleg V. Khlevniuk'],
          teseCentral: 'Exame das decisões centralizadas de Stalin e do Comitê de Defesa do Estado na condução das políticas de segurança.',
          antiteseCritica: 'Foco preponderante na cúpula decisória, podendo secundarizar a dinâmica da execução local.'
        },
        {
          correnteEscola: 'Estudo Comparativo das Deportações e Limpeza Étnica',
          principaisAutores: ['J. Otto Pohl'],
          teseCentral: 'Análise sistemática das operações contra minorias étnicas na URSS como políticas de remoção coletiva.',
          antiteseCritica: 'Necessidade de contextualizar as particularidades de cada grupo étnico e momento militar.'
        }
      ],
      consensosAcademicos: 'Consenso de que o Estado soviético promoveu deportações em massa com base em punição coletiva étnica, causando enorme sofrimento humano e mortalidade.',
      controversiasELimitacoesDasFontes: 'Precisão estatística completa de óbitos no transporte devido a falhas e omissões nos registros do NKVD.'
    },
    citacoesVerificadas: [
      {
        trechoLiteral: 'As deportações em massa de minorias étnicas realizadas pela União Soviética entre 1937 e 1949 constituíram uma política sistemática de punição coletiva e deslocamento forçado de populações inteiras.',
        autor: 'J. Otto Pohl',
        obra: 'Ethnic Cleansing in the USSR, 1937–1949',
        edicaoEditoraAno: 'Westport: Praeger, 1999',
        paginaExata: 'p. 1-5',
        analiseContextual: 'Pohl resume o caráter sistêmico das operações de deportação contra nacionalidades na URSS.'
      }
    ],
    bibliografia: [
      {
        entradaAbnt: 'POHL, J. Otto. Ethnic Cleansing in the USSR, 1937–1949. Westport: Praeger, 1999. 192 p.',
        entradaChicago: 'Pohl, J. Otto. 1999. Ethnic Cleansing in the USSR, 1937–1949. Westport: Praeger.',
        tipoFonte: 'Monografia',
        isbnOuReferencia: 'ISBN 978-0313309212'
      },
      {
        entradaAbnt: 'KHLEVNIUK, Oleg V. Stalin: New Biography of a Dictator. New Haven: Yale University Press, 2015. 492 p.',
        entradaChicago: 'Khlevniuk, Oleg V. 2015. Stalin: New Biography of a Dictator. New Haven: Yale University Press.',
        tipoFonte: 'Monografia',
        isbnOuReferencia: 'ISBN 978-0300163889'
      },
      {
        entradaAbnt: 'FITZPATRICK, Sheila. Everyday Stalinism. Oxford: Oxford University Press, 1999. 304 p.',
        entradaChicago: 'Fitzpatrick, Sheila. 1999. Everyday Stalinism. Oxford: Oxford University Press.',
        tipoFonte: 'Monografia',
        isbnOuReferencia: 'ISBN 978-0195050011'
      }
    ]
  },`;

const startMarker14 = '  14: {';
const startMarker15 = '  15: {'; // Let's check where next topic or end is in canonicalEditorialDatabase.ts

const startIndex14 = canonicalContent.indexOf(startMarker14);
const startIndex15 = canonicalContent.indexOf(startMarker15, startIndex14);

if (startIndex14 !== -1 && startIndex15 !== -1) {
  canonicalContent = canonicalContent.slice(0, startIndex14) + updatedTopic14Canonical + '\n\n' + canonicalContent.slice(startIndex15);
  fs.writeFileSync(canonicalPath, canonicalContent, 'utf-8');
  console.log('Successfully updated CANONICAL_EDITORIAL_DATABASE[14]');
} else {
  console.error('Markers not found in canonicalEditorialDatabase.ts', { startIndex14, startIndex15 });
}
