import { CHAPTER_01 } from './chapters/chapter_01';
import { CHAPTER_02 } from './chapters/chapter_02';
import { CHAPTER_03 } from './chapters/chapter_03';
import { CHAPTER_04 } from './chapters/chapter_04';
import { CHAPTER_05 } from './chapters/chapter_05';
import { CHAPTER_06 } from './chapters/chapter_06';
import { CHAPTER_07 } from './chapters/chapter_07';
import { CHAPTER_08 } from './chapters/chapter_08';
import { CHAPTER_09 } from './chapters/chapter_09';
import { CHAPTER_10 } from './chapters/chapter_10';
import { CHAPTER_11 } from './chapters/chapter_11';
import { CHAPTER_12 } from './chapters/chapter_12';
import { CHAPTER_14 } from './chapters/chapter_14';
import { CHAPTER_15 } from './chapters/chapter_15';
import { CHAPTER_16 } from './chapters/chapter_16';
import { CHAPTER_17 } from './chapters/chapter_17';
import { CHAPTER_18 } from './chapters/chapter_18';
import { CHAPTER_19 } from './chapters/chapter_19';
import { CHAPTER_20 } from './chapters/chapter_20';
export interface AcademicChapterSection {
  number: string;
  title: string;
  content: string;
  subsections?: {
    number: string;
    title: string;
    content: string;
  }[];
}

export interface AcademicChapter {
  topicId: number;
  title: string;
  subtitle: string;
  authorCatedra: string;
  introduction: string;
  sections: AcademicChapterSection[];
  conclusion: string;
  bibliographicReferences: string[];
}

export const ACADEMIC_CHAPTERS: Record<number, AcademicChapter> = {
  1: CHAPTER_01,
  2: CHAPTER_02,
  3: CHAPTER_03,
  4: CHAPTER_04,

  5: CHAPTER_05,

  6: CHAPTER_06,

  7: CHAPTER_07,

  8: CHAPTER_08,

  9: CHAPTER_09,

  10: CHAPTER_10,

  11: CHAPTER_11,

  12: CHAPTER_12,
13: {
    topicId: 13,
    title: 'Crimes de Guerra e Massacres de Estado',
    subtitle: 'Massacre de Katyn e execução de prisioneiros poloneses em 1940 (1939–1945)',
    authorCatedra: 'Cátedra de História Russa e Soviética · Capítulo Acadêmico',
    introduction: `O Massacre de Katyn é a denominação mais conhecida de uma série de execuções em massa de cidadãos poloneses realizadas pela polícia política soviética, o NKVD, na primavera de 1940, por determinação aprovada pela cúpula política da União Soviética.

As vítimas incluíam oficiais das Forças Armadas polonesas, policiais, funcionários públicos, integrantes de outras instituições estatais e pessoas detidas nas regiões da Polônia ocupadas pela União Soviética em 1939.

Embora o nome Katyn esteja associado à floresta situada nas proximidades de Smolensk, na Rússia atual, os assassinatos ocorreram em vários locais. Entre os principais estão:
* Floresta de Katyn, próxima a Smolensk, onde foram enterrados prisioneiros provenientes principalmente do campo de Kozelsk.
* Kharkiv, na atual Ucrânia, onde foram executados prisioneiros do campo de Starobelsk e enterrados em Pyatikhatky.
* Kalinin, atualmente Tver, na Rússia, onde foram executados prisioneiros do campo de Ostashkov e posteriormente enterrados em Mednoye.
* Prisões da Ucrânia e da Bielorrússia soviéticas, nas quais foram assassinados milhares de cidadãos poloneses detidos após a ocupação soviética.

O termo Massacre de Katyn passou a designar, em sentido amplo, o conjunto dessas execuções, embora nem todas tenham ocorrido na floresta que deu nome ao acontecimento.

A decisão política central foi aprovada em 5 de março de 1940, após uma proposta apresentada por Lavrentiy Beria, chefe do NKVD, a Josef Stalin. As execuções ocorreram principalmente entre abril e maio daquele ano.

A contagem de 21.857 vítimas aparece em um memorando de Aleksandr Shelepin, dirigente da segurança soviética, datado de 3 de março de 1959. Outras publicações históricas apresentam totais próximos, como aproximadamente 22 mil mortos. As diferenças dependem das categorias e dos registros utilizados.

Questão histórica central: como e por que o Estado soviético decidiu executar milhares de prisioneiros poloneses sem julgamento regular, e de que maneira suas autoridades tentaram ocultar a responsabilidade pelo crime?`,
    sections: [
      {
        number: '2',
        title: 'Contexto histórico e político',
        content: '',
        subsections: [
          {
            number: '2.1',
            title: 'A Polônia entre a Alemanha nazista e a União Soviética',
            content: `Em 23 de agosto de 1939, a Alemanha nazista e a União Soviética assinaram um tratado de não agressão, conhecido como Pacto Molotov-Ribbentrop. O tratado público foi acompanhado por um protocolo secreto que delimitava esferas de influência alemã e soviética na Europa Oriental.

Em 1º de setembro de 1939, a Alemanha invadiu a Polônia pelo oeste. Em 17 de setembro, o Exército Vermelho entrou no território polonês pelo leste. A ofensiva soviética ocorreu enquanto as Forças Armadas polonesas já enfrentavam a invasão alemã. A ocupação resultante dividiu o território polonês entre as duas potências, embora as administrações e as políticas de ocupação não fossem idênticas.

A União Soviética incorporou territórios poloneses às repúblicas soviéticas da Ucrânia e da Bielorrússia. As autoridades soviéticas também realizaram prisões, deportações, confisco de propriedades e outras medidas de repressão. A ocupação colocou sob controle soviético militares poloneses, funcionários públicos, policiais, proprietários rurais e outros grupos considerados potencialmente hostis ao novo poder.

A partir desse contexto, a questão dos prisioneiros poloneses deixou de ser apenas um problema militar e passou a integrar a política soviética de reorganização e controle dos territórios ocupados.`
          },
          {
            number: '2.2',
            title: 'A captura de militares poloneses',
            content: `A entrada soviética na Polônia levou à captura de um grande número de militares. Estimativas frequentemente mencionadas indicam que aproximadamente 250 mil soldados poloneses foram capturados em diferentes circunstâncias, embora o número de detidos variasse conforme rendições, libertações, transferências e outras decisões das autoridades ocupantes.

Esse total não deve ser confundido com o número de prisioneiros mantidos nos três campos especiais do NKVD relacionados diretamente ao massacre.

Os prisioneiros considerados oficiais, integrantes de quadros militares ou membros de instituições do Estado polonês receberam tratamento diferenciado. Entre eles estavam oficiais profissionais e reservistas. Alguns reservistas exerciam profissões civis, como medicina, advocacia, engenharia e docência, mas haviam sido mobilizados para o serviço militar.

Também foram detidos policiais, integrantes da gendarmaria, funcionários públicos e outras pessoas identificadas pelas autoridades soviéticas como integrantes de estruturas do Estado polonês. Nem todas as vítimas eram oficiais de carreira, e nem todas as pessoas executadas pertenciam aos campos de prisioneiros de guerra.`
          },
          {
            number: '2.3',
            title: 'Os três campos especiais',
            content: `Os três campos mais diretamente associados à operação eram:
* Kozelsk: localizado na região de Smolensk, abrigava grande número de oficiais e outros militares poloneses. Muitos de seus prisioneiros foram levados para execução na região de Katyn.
* Starobelsk: situado no território da atual Ucrânia, mantinha oficiais e outros integrantes das Forças Armadas polonesas. Os prisioneiros enviados para execução foram levados à prisão do NKVD em Kharkiv.
* Ostashkov: localizado na região de Kalinin, abrigava numerosos policiais, integrantes da gendarmaria e outros agentes estatais poloneses. Os prisioneiros executados foram levados à prisão do NKVD em Kalinin, atual Tver, e enterrados em Mednoye.

Esses campos não devem ser confundidos com os campos de trabalho do sistema Gulag. Embora todos estivessem inseridos no aparato repressivo soviético, tinham funções administrativas e populações detidas distintas.`
          },
          {
            number: '2.4',
            title: 'A lógica política da repressão',
            content: `A documentação soviética mostra que os dirigentes responsáveis pela decisão classificavam os prisioneiros como elementos hostis, contrarrevolucionários ou potencialmente perigosos para o domínio soviético. Essas classificações pertenciam à linguagem política e policial do regime, não constituindo provas de crimes individuais.

A decisão de março de 1940 determinou que os casos fossem examinados por um procedimento especial, sem a presença dos detidos, sem apresentação regular de acusações e sem julgamento judicial convencional. O resultado foi a eliminação física de milhares de pessoas consideradas incompatíveis com os interesses de segurança e controle político definidos pela liderança soviética.`
          }
        ]
      },
      {
        number: '3',
        title: 'Narrativa cronológica detalhada',
        content: '',
        subsections: [
          {
            number: '3.1',
            title: 'Agosto e setembro de 1939: o acordo germano-soviético e a ocupação da Polônia',
            content: `Em 23 de agosto de 1939, Alemanha e URSS assinaram o Pacto Molotov-Ribbentrop com o protocolo secreto de partilha. Em 1º de setembro a Alemanha invadiu pelo oeste e em 17 de setembro o Exército Vermelho entrou pelo leste, resultando na captura de milhares de militares poloneses e ocupação dos territórios orientais.`
          },
          {
            number: '3.2',
            title: 'Final de 1939 e início de 1940: detenção e classificação dos prisioneiros',
            content: `O NKVD administrou os campos especiais e reuniu informações sobre os antecedentes profissionais e políticos dos prisioneiros, preparando a proposta de execução em massa submetida à direção política.`
          },
          {
            number: '3.3',
            title: '5 de março de 1940: a decisão do Politburo',
            content: `O Politburo do Comitê Central aprovou a proposta de Lavrentiy Beria para aplicar pena de morte sem julgamento convencional aos prisioneiros de guerra e detidos civis, examinados por uma troika especial do NKVD. O documento traz as assinaturas de Stalin, Voroshilov, Molotov, Mikoyan, Kalinin e Kaganovich.`
          },
          {
            number: '3.4',
            title: 'Abril e maio de 1940: as execuções',
            content: `As execuções foram coordenadas pelo NKVD: os prisioneiros de Kozelsk foram fuzilados e enterrados na floresta de Katyn; os de Starobelsk fuzilados em Kharkiv (enterrados em Pyatikhatky); os de Ostashkov fuzilados em Kalinin/Tver (enterrados em Mednoye); e milhares em prisões ocidentais da Ucrânia e Bielorrússia. A fase principal concentrou-se entre abril e maio de 1940.`
          },
          {
            number: '3.5',
            title: '1941–1943: invasão alemã e descoberta das valas',
            content: `Em 1943, tropas alemãs anunciaram a descoberta das valas comuns em Katyn, utilizando-as na propaganda de guerra. A investigação alemã apontou autoria soviética, enquanto Moscou negou e atribuiu o crime aos alemães em 1941, gerando uma crise diplomática prolongada.`
          },
          {
            number: '3.6',
            title: '1944–1946: versão oficial soviética e Tribunal de Nuremberg',
            content: `A Comissão Especial soviética (Comissão Burdenko) publicou relatório em 1944 atribuindo os assassinatos aos invasores alemães. Em 1946, a promotoria soviética tentou incluir Katyn na acusação em Nuremberg, mas a sentença final do Tribunal Militar Internacional não condenou os alemães pelo massacre.`
          },
          {
            number: '3.7',
            title: '1959: o memorando de Aleksandr Shelepin',
            content: `Em 3 de março de 1959, Aleksandr Shelepin enviou memorando secreto a Nikita Khrushchev registrando a execução de 21.857 cidadãos poloneses (4.421 em Katyn; 3.820 em Kharkiv; 6.311 em Kalinin; e 7.305 em outras prisões da Ucrânia e Bielorrússia ocidentais), recomendando a queima dos arquivos individuais para evitar embaraços políticos.`
          },
          {
            number: '3.8',
            title: '1990–1992: reconhecimento soviético e abertura documental',
            content: `Em abril de 1990, a URSS admitiu oficialmente a responsabilidade do NKVD. Em 14 de outubro de 1992, por ordem de Boris Yeltsin, o emissário russo entregou ao presidente polonês Lech Wałęsa cópias dos documentos do Pacote Fechado nº 1 do Arquivo Presidencial, comprovando a ordem de Stalin e do Politburo.`
          },
          {
            number: '3.9',
            title: '2013: julgamento no Tribunal Europeu dos Direitos Humanos',
            content: `No caso Janowiec e Outros contra Rússia (2013), a Grande Câmara do TEDH declarou-se incompetente ratione temporis para analisar a violação do direito à vida material, dado que as mortes ocorreram em 1940, muito antes da entrada em vigor da Convenção para a Rússia em 1998, sem que isso conteste a realidade histórica documental do massacre.`
          }
        ]
      },
      {
        number: '4',
        title: 'Documentos e evidências probatórias',
        content: '',
        subsections: [
          {
            number: '4.1',
            title: 'A proposta de Lavrentiy Beria',
            content: `O memorando confidencial de Beria a Stalin em março de 1940 solicitou autorização expressa para a aplicação da pena de morte aos oficiais e agentes sob custódia, caracterizando-os como inimigos irrecuperáveis do poder soviético.`
          },
          {
            number: '4.2',
            title: 'A decisão do Politburo de 5 de março de 1940',
            content: `A resolução formal do Politburo autorizou o procedimento sumário da troika do NKVD e a execução dos contingentes prisionais, trazendo assinaturas e marcas de aprovação do círculo íntimo stalinista.`
          },
          {
            number: '4.3',
            title: 'O memorando de Shelepin (1959)',
            content: `Documento contábil interno da KGB que discrimina o número exato de 21.857 vítimas executadas por localidade e campo de origem, além de instruir a destruição seletiva de prontuários.`
          },
          {
            number: '4.4',
            title: 'Exumações forenses e evidências materiais',
            content: `Trabalhos forenses de 1943 e as exumações conjuntas polaco-russas dos anos 1990 em Katyn, Mednoye e Pyatikhatky recuperaram restos mortais, insígnias militares, diários interrompidos na primavera de 1940 e cápsulas de munição que atestam a mecânica serial dos disparos na nuca.`
          },
          {
            number: '4.5',
            title: 'O Pacote Fechado nº 1 (AP RF)',
            content: `Dossiê documental arquivado no cofre presidencial soviético contendo os manuscritos e resoluções originais de Stalin, Beria e Shelepin, desclassificado e publicado em obras de referência de Cienciala, Lebedeva e Materski.`
          }
        ]
      },
      {
        number: '5',
        title: 'Responsabilidades e consequências históricas',
        content: '',
        subsections: [
          {
            number: '5.1',
            title: 'Três níveis de responsabilidade',
            content: `A documentação estabelece: responsabilidade decisória (Stalin e membros do Politburo signatários); responsabilidade administrativa e operacional (Beria, Merkulov, Soprunenko, Blokhin e comandantes dos campos e prisões); e responsabilidade pelo encobrimento continuado por quase cinco décadas.`
          },
          {
            number: '5.2',
            title: 'O número de vítimas e sua precisão estatística',
            content: `O total de 21.857 executados declarado por Shelepin é a referência estatística documental primária mais consistente, devendo-se discriminar as origens (Kozelsk, Starobelsk, Ostashkov e prisões ocidentais) e os locais de sepultamento.`
          },
          {
            number: '5.3',
            title: 'Impacto sobre a sociedade polonesa',
            content: `A eliminação de milhares de oficiais, médicos, juristas, professores universitários e policiais representou um golpe devastador na elite institucional polonesa, gerando traumas sociais profundos e privação de luto para as famílias sob a censura comunista.`
          },
          {
            number: '5.4',
            title: 'Consequências diplomáticas e classificação jurídica',
            content: `Katyn marcou profundamente as relações diplomáticas entre a Polônia e Moscou. No plano jurídico, o massacre é caracterizado como crime de guerra continuado, execução extrajudicial maciça e crime contra a humanidade, com debates contínuos sobre enquadramento sob o conceito de genocídio.`
          }
        ]
      },
      {
        number: '6',
        title: 'Debate historiográfico',
        content: '',
        subsections: [
          {
            number: '6.1',
            title: 'Reconstrução documental e institucional',
            content: `Estudos fundamentais de Anna Cienciala, Natalia Lebedeva e Wojciech Materski (Katyn: A Crime Without Punishment) demonstraram a consistência dos arquivos desclassificados e a cadeia burocrática da tomada de decisão stalinista.`
          },
          {
            number: '6.2',
            title: 'Violência de massa comparada',
            content: `Timothy Snyder (Bloodlands) situa o massacre na dinâmica das terras de sangue da Europa Oriental disputadas entre as políticas de terror e aniquilação nazista e stalinista.`
          },
          {
            number: '6.3',
            title: 'Repressão política e genocídio',
            content: `Norman Naimark (Stalin's Genocides) discute os crimes de massa soviéticos à luz das categorias jurídicas e históricas de destruição intencional de grupos sociais e nacionais.`
          },
          {
            number: '6.4',
            title: 'Consensos e pontos em aberto',
            content: `A autoria soviética é um fato factual definitivo e incontestável nos arquivos; debates contemporâneos incidem sobre a abertura integral de processos remanescentes e as consequências jurídicas internacionais.`
          }
        ]
      },
      {
        number: '7',
        title: 'Citações verificadas e metodologia documental',
        content: '',
        subsections: [
          {
            number: '7.1',
            title: 'Decisão do Politburo de 5 de março de 1940',
            content: `Autorização de pena de morte com exame dos casos em procedimento especial sem convocação dos detidos e sem acusação judicial regular.`
          },
          {
            number: '7.2',
            title: 'Memorando de Shelepin (3 de março de 1959)',
            content: `Registro interno oficial de 21.857 execuções e recomendação de destruição de arquivos individuais de pessoas fuziladas em 1940.`
          },
          {
            number: '7.3',
            title: 'Declaração oficial da TASS de 13 de abril de 1990',
            content: `Reconhecimento soviético formal de que o massacre de Katyn foi perpetrado diretamente pelos órgãos do NKVD sob Beria e Merkulov.`
          }
        ]
      }
    ],
    conclusion: `O Massacre de Katyn demonstra como uma decisão política de alto nível pode ser transformada em operação administrativa de execução em massa, seguida de um esforço prolongado de ocultação.

A documentação disponível sustenta a responsabilidade soviética pela decisão e pela execução do massacre. A análise acadêmica deve, ao mesmo tempo, distinguir o núcleo factual estabelecido das questões que permanecem abertas sobre motivações, extensão documental, responsabilidade individual e classificação jurídica.

O objetivo deste dossiê é permitir que o leitor compreenda o acontecimento por meio de fontes verificáveis, contexto histórico e debate historiográfico, sem transformar a pesquisa em defesa ou acusação partidária.`,
    bibliographicReferences: [
      'CIENCIALA, Anna M.; LEBEDEVA, Natalia S.; MATERSKI, Wojciech (ed.). Katyn: A Crime Without Punishment. New Haven: Yale University Press, 2007.',
      'EUROPEAN COURT OF HUMAN RIGHTS. Case of Janowiec and Others v. Russia. Grand Chamber Judgment, 21 October 2013. Disponível em: https://hudoc.echr.coe.int/ukr?i=001-127684.',
      'NAIMARK, Norman M. Stalin\'s Genocides. Princeton: Princeton University Press, 2010.',
      'SNYDER, Timothy. Bloodlands: Europe Between Hitler and Stalin. New York: Basic Books, 2010.',
      'INSTITUTE OF NATIONAL REMEMBRANCE (IPN). The Katyń Massacre. Warsaw: Institute of National Remembrance, 2020.',
      'INSTITUTE OF NATIONAL REMEMBRANCE (IPN). The Katyn Massacre timeline. 1 mar. 2021.',
      'ARQUIVO DO PRESIDENTE DA FEDERAÇÃO RUSSA (AP RF). Pacote Fechado nº 1: Decisão de 5 de março de 1940, Proposta de Beria e Memorando de Shelepin. Fundo 3. Moscou.'
    ]
  },

  14: CHAPTER_14,

  15: CHAPTER_15,

  16: CHAPTER_16,

  17: CHAPTER_17,

  18: CHAPTER_18,
  19: CHAPTER_19,
  20: CHAPTER_20
};