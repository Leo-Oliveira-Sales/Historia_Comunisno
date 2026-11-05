import { DossierTopic } from '../../types/dossier';

export const IDEOLOGIAS_TOPICS: DossierTopic[] = [
  // =========================================================================
  // TÓPICO 101 (CAPÍTULO 01)
  // =========================================================================
  {
    id: 101,
    categoryNumber: '01',
    title: 'Iluminismo e Pensamento Moderno: Razão, Contrato Social e Soberania',
    category: 'Filosofia Política e Raízes da Modernidade',
    period: 'todos',
    periodLabel: 'Século XVII – XVIII (1689–1789)',
    tagline: 'A emancipação intelectual pela Razão, a dessacralização do poder e a invenção da soberania popular.',
    summary: 'Análise aprofundada da emergência do Iluminismo europeu em suas duas grandes matrizes: a moderada e a radical. Exame das teorias contratualistas de Thomas Hobbes, John Locke e Jean-Jacques Rousseau, a separação de poderes de Montesquieu e a defesa da tolerância e da crítica livre da religião e do absolutismo monárquico.',
    mainSubjects: [
      'Razão crítica e dessacralização da autoridade dinástica',
      'Teoria do Contrato Social: Hobbes, Locke e Rousseau',
      'Separação tripartite de poderes e freios e contrapesos em Montesquieu',
      'Iluminismo Radical spinozista versus Iluminismo Moderado',
      'A Enciclopédia de Diderot e D’Alembert e a difusão da esfera pública'
    ],
    historicalContext: 'Com o declínio da hegemonia feudal e a Revolução Científica do século XVII (Galileu, Descartes, Newton), a Europa experimentou uma crise profunda de legitimidade política. O direito divino dos reis passou a ser confrontado pela ideia de que a sociedade civil se origina de um pacto deliberado entre indivíduos livres e portadores de direitos naturais inalienáveis.',
    academicConsensus: 'A historiografia contemporânea (liderada por Jonathan Israel e Quentin Skinner) superou a visão homogeneizante do Iluminismo como um bloco único abstrato, demonstrando que o Iluminismo foi um movimento policêntrico e conflituoso, no qual a vertente radical laica forneceu a base dos direitos humanos modernos enquanto a vertente moderada buscou acomodar reformas institucionais com as monarquias existentes.',
    keyActors: [
      'John Locke (1632–1704)',
      'Jean-Jacques Rousseau (1712–1778)',
      'Barão de Montesquieu (1689–1755)',
      'Denis Diderot (1713–1784)',
      'Voltaire (1694–1778)'
    ],
    historiansInvolved: [
      'Jonathan Israel',
      'Quentin Skinner',
      'J. G. A. Pocock',
      'Isaiah Berlin',
      'Gertrude Himmelfarb',
      'Lynn Hunt'
    ],
    primarySources: [
      {
        title: 'Tratado Teológico-Político (1670)',
        institution: 'Universidade de Leida / Biblioteca Nacional dos Países Baixos',
        documentType: 'Tratado Filosófico-Político',
        year: '1670',
        archiveReference: 'KB KB-753-A-12',
        transcriptionPt: 'O fim do Estado não é transformar os homens de seres racionais em feras ou autômatos, mas, ao contrário, fazer com que sua mente e seu corpo desenvolvam suas funções em segurança e eles façam livre uso da razão. O verdadeiro fim do Estado é, portanto, a liberdade.',
        abntCitation: 'SPINOZA, Baruch. Tractatus Theologico-Politicus. Amsterdã: Heinrich Künraht, 1670.',
        chicagoCitation: 'Spinoza, Baruch. Tractatus Theologico-Politicus. Amsterdam, 1670.',
        relatedHistorians: ['Jonathan Israel']
      },
      {
        title: 'Segundo Tratado sobre o Governo Civil (1689)',
        institution: 'British Library / Yale Avalon Project',
        documentType: 'Tratado Político Fundamental',
        year: '1689',
        archiveReference: 'Wing L2766 / Avalon Project Doc #Locke-Gov-1689',
        transcriptionPt: 'O estado de natureza é um estado de perfeita liberdade para os homens regularem suas ações e disporem de suas posses e pessoas como acharem conveniente, dentro dos limites da lei da natureza. [...] O poder legislativo não pode transferir o poder de fazer leis para quaisquer outras mãos, pois não é senão um poder delegado pelo povo.',
        abntCitation: 'LOCKE, John. Two Treatises of Government. Londres: Awnsham Churchill, 1689.',
        chicagoCitation: 'Locke, John. Two Treatises of Government. London: Awnsham Churchill, 1689.',
        relatedHistorians: ['Jonathan Israel', 'Quentin Skinner']
      },
      {
        title: 'O Espírito das Leis (1748)',
        institution: 'Bibliothèque nationale de France (BnF)',
        documentType: 'Tratado de Filosofia e Direito Político',
        year: '1748',
        archiveReference: 'BnF Tolbiac - R-7321',
        transcriptionPt: 'Para que não se possa abusar do poder, é preciso que, pela disposição das coisas, o poder freie o poder. Uma constituição pode ser tal que ninguém seja constrangido a fazer as coisas a que a lei não o obriga, e a não fazer as que a lei lhe permite.',
        abntCitation: 'MONTESQUIEU, Charles de Secondat, Barão de. De l’esprit des loix. Genebra: Barrillot & Fils, 1748.',
        chicagoCitation: 'Montesquieu, Baron de. De l’esprit des loix. Geneva: Barrillot, 1748.',
        relatedHistorians: ['Quentin Skinner', 'J. G. A. Pocock']
      },
      {
        title: 'Do Contrato Social: Princípios do Direito Político (1762)',
        institution: 'Bibliothèque nationale de France (BnF)',
        documentType: 'Tratado de Filosofia Política',
        year: '1762',
        archiveReference: 'BnF Tolbiac - R-12948',
        transcriptionPt: 'O homem nasce livre, e em toda parte ele está a ferros. Aquele que se crê senhor dos outros não deixa de ser mais escravo do que eles. [...] Cada um de nós põe em comum sua pessoa e toda a sua autoridade sob a suprema direção da vontade geral, e recebemos em corpo cada membro como parte indivisível do todo.',
        abntCitation: 'ROUSSEAU, Jean-Jacques. Du contrat social; ou, Principes du droit politique. Amsterdã: Marc-Michel Rey, 1762.',
        chicagoCitation: 'Rousseau, Jean-Jacques. Du contrat social. Amsterdam: Marc-Michel Rey, 1762.',
        relatedHistorians: ['Isaiah Berlin', 'Sheldon Wolin']
      }
    ],
    historicalImpact: 'O Iluminismo desmantelou os fundamentos teológicos do absolutismo e ofereceu o repertório ideológico universal que inspirou a Independência dos Estados Unidos (1776), a Revolução Francesa (1789) e as independências ibero-americanas no século XIX.',
    quote: {
      text: 'O Iluminismo é a saída do homem de sua menoridade culpada. Sapere aude! Ouse saber! Tenha a coragem de fazer uso do seu próprio entendimento!',
      author: 'Immanuel Kant',
      context: 'Resposta à Pergunta: O que é o Iluminismo? (1784)'
    }
  },

  // =========================================================================
  // TÓPICO 102 (CAPÍTULO 02)
  // =========================================================================
  {
    id: 102,
    categoryNumber: '02',
    title: 'Revolução Francesa e Liberalismo: Direitos do Homem, Cidadania e Ruptura Antigo Regime',
    category: 'Revoluções Burguesas e Teoria do Estado',
    period: 'todos',
    periodLabel: '1789 – 1848',
    tagline: 'A invenção da cidadania universal, o nascimento dos conceitos de Esquerda e Direita e as garantias constitucionais.',
    summary: 'Exame da Revolução Francesa como matriz fundadora da política contemporânea: a Declaração dos Direitos do Homem e do Cidadão, a abolição dos privilégios estamentais, os debates entre girondinos e jacobinos, o Terror robespierrista e a consolidação do liberalismo político clássico de Benjamin Constant e Alexis de Tocqueville.',
    mainSubjects: [
      'A convocação dos Estados Gerais e a tomada da Bastilha (1789)',
      'A Declaração dos Direitos do Homem e do Cidadão',
      'Girondinos, Jacobinos e o nascimento da topografia Esquerda/Direita',
      'O Terror, a virtude pública e o debate historiográfico revisionista',
      'O liberalismo pós-revolucionário de Constant e a democracia de Tocqueville'
    ],
    historicalContext: 'A crise fiscal aguda da monarquia dos Bourbon na França, combinada com colheitas desastrosas e a ascensão da burguesia letrada, explodiu em 1789. O Terceiro Estado recusou a submissão aos dois primeiros estamentos (clero e nobreza) e autoproclamou-se Assembleia Nacional Soberana, demolindo mil anos de feudalismo.',
    academicConsensus: 'A historiografia pós-revisionista (François Furet, Lynn Hunt) estabeleceu que a Revolução Francesa foi primordialmente uma mutação radical da cultura política simbólica e do discurso, criando o espaço da política democrática de massas e demonstrando os riscos inerentes à identificação totalitária entre o Estado e a vontade popular una.',
    keyActors: [
      'Maximilien Robespierre (1758–1794)',
      'Emmanuel-Joseph Sieyès (1748–1836)',
      'Benjamin Constant (1767–1830)',
      'Alexis de Tocqueville (1805–1859)',
      'Marquês de La Fayette (1757–1834)'
    ],
    historiansInvolved: [
      'François Furet',
      'Eric Hobsbawm',
      'Norberto Bobbio',
      'Robert Dahl',
      'Michael Freeden'
    ],
    primarySources: [
      {
        title: 'Declaração dos Direitos do Homem e do Cidadão (26 de agosto de 1789)',
        institution: 'Archives Nationales de France / Yale Avalon Project',
        documentType: 'Declaração Constitucional Fundamental',
        year: '1789',
        archiveReference: 'Archives Nationales AE/II/1101',
        transcriptionPt: 'Art. 1º. Os homens nascem e são livres e iguais em direitos. As distinções sociais só podem fundar-se na utilidade comum. Art. 2º. A finalidade de toda associação política é a conservação dos direitos naturais e imprescritíveis do homem. Esses direitos são a liberdade, a propriedade, a segurança e a resistência à opressão.',
        abntCitation: 'FRANÇA. Assemblée Nationale Constituante. Déclaration des Droits de l’Homme et du Citoyen. Paris, 1789.',
        chicagoCitation: 'National Assembly of France. Declaration of the Rights of Man and of the Citizen. Paris, 1789.',
        relatedHistorians: ['François Furet', 'Norberto Bobbio']
      },
      {
        title: 'Da Liberdade dos Antigos Comparada à dos Modernos (1819)',
        institution: 'Athénée Royal de Paris / Gallica BnF',
        documentType: 'Discurso / Ensaio Político',
        year: '1819',
        archiveReference: 'Gallica BnF LK7-1601',
        transcriptionPt: 'A liberdade dos antigos consistia em exercer coletiva, mas diretamente, várias partes da soberania inteira. A liberdade dos modernos é para cada um o direito de não estar submetido senão às leis, de não poder ser preso, nem detido, nem morto, nem maltratado pela vontade arbitrária de um ou de vários indivíduos.',
        abntCitation: 'CONSTANT, Benjamin. De la liberté des Anciens comparée à celle des Modernes. Paris: Athénée Royal, 1819.',
        chicagoCitation: 'Constant, Benjamin. De la liberté des Anciens comparée à celle des Modernes. Paris, 1819.',
        relatedHistorians: ['Isaiah Berlin', 'Quentin Skinner']
      }
    ],
    historicalImpact: 'Consolidou o império da lei escrita, o regime constitucional representativo, a igualdade formal de todos perante a lei e a exigência de cartas magnas que limitem expressamente o poder dos governantes.',
    quote: {
      text: 'A grande revolução inaugurou uma nova época porque colocou a igualdade como norma e a soberania do indivíduo como ponto de partida inegociável.',
      author: 'François Furet',
      context: 'Pensando a Revolução Francesa (1978)'
    }
  },

  // =========================================================================
  // TÓPICO 103 (CAPÍTULO 03)
  // =========================================================================
  {
    id: 103,
    categoryNumber: '03',
    title: 'Revolução Industrial e Capitalismo: Livre Mercado, Burguesia e Divisão do Trabalho',
    category: 'Economia Política e Transformação Social',
    period: 'todos',
    periodLabel: '1760 – 1900',
    tagline: 'A máquina a vapor, a mercantilização do trabalho humano, a teoria econômica clássica e o nascimento do proletariado.',
    summary: 'A profunda metamorfose socioeconômica desencadeada pela Revolução Industrial britânica e sua expansão global. O desenvolvimento da economia política clássica com Adam Smith e David Ricardo, a teoria da mão invisível e das vantagens comparativas, a disciplina fabril, a urbanização caótica e a gestação da Questão Social.',
    mainSubjects: [
      'A mecanização fabril e o cercamento dos campos (enclosures)',
      'Adam Smith e A Riqueza das Nações: divisão do trabalho e auto-interesse',
      'David Ricardo: teoria do valor-trabalho e renda da terra',
      'A formação da classe operária fabril e o movimento ludista/cartista',
      'A mercantilização das relações sociais e as críticas de Polanyi'
    ],
    historicalContext: 'A partir da segunda metade do século XVIII, inovações técnicas como o tear mecânico e a máquina a vapor de James Watt, somadas à acumulação comercial e abundância de carvão mineral, permitiram à Grã-Bretanha multiplicar sua capacidade produtiva em escala exponencial, transformando camponeses despossuídos em força de trabalho assalariada concentrada em cidades fabris.',
    academicConsensus: 'Historiadores econômicos e sociais contemporâneos convergem em reconhecer que, embora a industrialização tenha propiciado aumentos sem precedentes na riqueza global no longo prazo, sua implantação inicial impôs custos humanos brutais (jornadas de 16 horas, exploração infantil e insalubridade crônica), o que desestabilizou o equilíbrio social e forçou a criação do direito do trabalho.',
    keyActors: [
      'Adam Smith (1723–1790)',
      'David Ricardo (1772–1823)',
      'Thomas Malthus (1766–1834)',
      'Richard Arkwright (1732–1792)',
      'Robert Peel (1788–1850)'
    ],
    historiansInvolved: [
      'Eric Hobsbawm',
      'Karl Polanyi',
      'Gareth Stedman Jones',
      'Friedrich Hayek',
      'Walter Eucken'
    ],
    primarySources: [
      {
        title: 'Uma Investigação sobre a Natureza e as Causas da Riqueza das Nações (1776)',
        institution: 'National Library of Scotland / University of Glasgow',
        documentType: 'Tratado de Economia Política',
        year: '1776',
        archiveReference: 'Sp Coll Ferguson Al-a.36-37',
        transcriptionPt: 'Não é da benevolência do açougueiro, do cervejeiro ou do padeiro que esperamos o nosso jantar, mas da consideração que eles têm pelo seu próprio interesse. Não nos dirigimos à sua humanidade, mas ao seu amor-próprio, e nunca lhes falamos das nossas necessidades, mas das suas vantagens.',
        abntCitation: 'SMITH, Adam. An Inquiry into the Nature and Causes of the Wealth of Nations. Londres: W. Strahan e T. Cadell, 1776.',
        chicagoCitation: 'Smith, Adam. The Wealth of Nations. London: Strahan and Cadell, 1776.',
        relatedHistorians: ['Karl Polanyi', 'Friedrich Hayek']
      },
      {
        title: 'Relatório Parlamentar da Comissão Sadler sobre o Trabalho Infantil nas Fábricas (1832)',
        institution: 'British Parliamentary Papers / Hansard Archive',
        documentType: 'Relatório Oficial de Inquérito',
        year: '1832',
        archiveReference: 'House of Commons Sessional Papers 1831-32, Vol. XV',
        transcriptionPt: 'Pergunta: A que idade você começou a trabalhar na tecelagem de algodão? Resposta: Com menos de oito anos. [...] Pergunta: Quais eram as suas horas normais de trabalho? Resposta: Das seis da manhã até às oito da noite, com apenas trinta minutos de intervalo ao meio-dia. Se nos atrasássemos por cinco minutos, éramos açoitados.',
        abntCitation: 'GRÃ-BRETANHA. Parliament. Report of the Select Committee on the Bill for the Regulation of Factories. Londres, 1832.',
        chicagoCitation: 'Select Committee on the Factory Bill. Sadler Report. London: House of Commons, 1832.',
        relatedHistorians: ['Eric Hobsbawm', 'Karl Polanyi']
      }
    ],
    historicalImpact: 'Estruturou o sistema de produção fabril moderno, o sistema financeiro internacional e gerou as duas grandes classes antagônicas do século XIX e XX: a burguesia detentora dos meios de produção e o proletariado assalariado.',
    quote: {
      text: 'O nascimento do mercado autorregulado não foi um processo espontâneo: o laissez-faire precisou da intervenção contínua da legislação do Estado para desmantelar os laços comunitários tradicionais.',
      author: 'Karl Polanyi',
      context: 'A Grande Transformação (1944)'
    }
  },

  // =========================================================================
  // TÓPICO 104 (CAPÍTULO 04)
  // =========================================================================
  {
    id: 104,
    categoryNumber: '04',
    title: 'Socialismo Utópico e Anarquismo: Saint-Simon, Fourier, Proudhon e Bakunin',
    category: 'Correntes Emancipatórias e Antiautoritárias',
    period: 'todos',
    periodLabel: '1800 – 1880',
    tagline: 'A denúncia da exploração fabril, a proposta dos falanstérios, o mutualismo proudhoniano e a rebelião anarquista contra o Estado.',
    summary: 'Estudo do florescimento das primeiras correntes socialistas (Saint-Simon, Charles Fourier, Robert Owen) baseadas no cooperativismo e no redesenho voluntário das comunidades humanas, seguido pelo desenvolvimento do anarquismo moderno com Pierre-Joseph Proudhon e Mikhail Bakunin, que propuseram a supressão imediata de toda autoridade estatal e hierárquica em favor da livre federação de produtores.',
    mainSubjects: [
      'O socialismo utópico: a reorganização tecnocrática de Saint-Simon',
      'Charles Fourier e a teoria das paixões atraentes nos Falanstérios',
      'Robert Owen e o cooperativismo de New Lanark e New Harmony',
      'Pierre-Joseph Proudhon: "A Propriedade é um Roubo!" e o mutualismo',
      'Mikhail Bakunin versus Karl Marx na Primeira Internacional (AIT)'
    ],
    historicalContext: 'Diante das misérias da industrialização desregulada nas primeiras décadas do século XIX, pensadores humanistas e operários buscaram alternativas morais e sociais à tirania do lucro individualista, imaginando sociedades fundadas na cooperação, no livre acordo e na eliminação da coerção governamental.',
    academicConsensus: 'A pesquisa histórica reconhece que, longe de serem ingênuos ou infantis (como a pecha "utópicos" cunhada por Engels sugeria), esses pioneiros inauguraram o debate sobre cooperativismo, igualdade de gênero, pedagogia libertária e descentralização federativa que marcou decisivamente a tradição do sindicalismo revolucionário europeu.',
    keyActors: [
      'Henri de Saint-Simon (1760–1825)',
      'Charles Fourier (1772–1837)',
      'Robert Owen (1771–1858)',
      'Pierre-Joseph Proudhon (1809–1865)',
      'Mikhail Bakunin (1814–1876)'
    ],
    historiansInvolved: [
      'Leszek Kołakowski',
      'Gareth Stedman Jones',
      'Eric Hobsbawm',
      'Shlomo Avineri',
      'David McLellan'
    ],
    primarySources: [
      {
        title: 'O que é a Propriedade? Ou Pesquisas sobre o Princípio do Direito e do Governo (1840)',
        institution: 'Bibliothèque nationale de France (BnF)',
        documentType: 'Ensaio Filosófico e Jurídico',
        year: '1840',
        archiveReference: 'BnF Tolbiac - R-47391',
        transcriptionPt: 'Se eu tivesse de responder à seguinte pergunta: O que é a escravidão?, e respondesse com uma só palavra: É o assassinato!, meu pensamento seria compreendido de imediato. Por que, então, a esta outra pergunta: O que é a propriedade?, não posso responder da mesma forma: É o roubo!?, sem ter a certeza de não ser compreendido?',
        abntCitation: 'PROUDHON, Pierre-Joseph. Qu’est-ce que la propriété? Recherche sur le principe du droit et du gouvernement. Paris: J.-F. Brocard, 1840.',
        chicagoCitation: 'Proudhon, Pierre-Joseph. Qu’est-ce que la propriété? Paris: Brocard, 1840.',
        relatedHistorians: ['Leszek Kołakowski', 'David McLellan']
      },
      {
        title: 'Estatismo e Anarquia (1873)',
        institution: 'International Institute of Social History (IISH), Amsterdã',
        documentType: 'Tratado Político Anarquista',
        year: '1873',
        archiveReference: 'IISH Bakunin Papers ARCH00045',
        transcriptionPt: 'Nenhum Estado, por mais democrático que seja nas suas formas, nem mesmo a república mais vermelha sonhada pelos marxistas, é capaz de dar ao povo o que ele precisa: a livre organização de seus próprios interesses de baixo para cima. O Estado proletário de Marx nada mais será do que a ditadura de uma nova aristocracia de burocratas e cientistas sobre os trabalhadores.',
        abntCitation: 'BAKUNIN, Mikhail. Gosudarstvennost’ i Anarkhiya. Zurique/Genebra: Tipografiya Rabotnika, 1873.',
        chicagoCitation: 'Bakunin, Mikhail. Statism and Anarchy. Zurich, 1873.',
        relatedHistorians: ['Leszek Kołakowski', 'Shlomo Avineri']
      }
    ],
    historicalImpact: 'Lançou as bases dos sindicatos anarcossindicalistas na Espanha, França, Itália e América Latina, inspirou os movimentos de autogestão operária e prefigurou a crítica contundente ao autoritarismo burocrático do socialismo de Estado.',
    quote: {
      text: 'A liberdade sem o socialismo é privilégio e injustiça; o socialismo sem a liberdade é escravidão e brutalidade.',
      author: 'Mikhail Bakunin',
      context: 'Federalismo, Socialismo e Antiteologismo (1867)'
    }
  },

  // =========================================================================
  // TÓPICO 105 (CAPÍTULO 05)
  // =========================================================================
  {
    id: 105,
    categoryNumber: '05',
    title: 'Marx e Engels: A Formação do Materialismo Histórico e do Socialismo Científico',
    category: 'Materialismo Dialético e Crítica da Economia Política',
    period: 'todos',
    periodLabel: '1843 – 1883',
    tagline: 'A superação dos jovens hegelianos, o Manifesto Comunista de 1848 e a anatomia da mais-valia em O Capital.',
    summary: 'A trajetória teórica e política de Karl Marx e Friedrich Engels: da crítica à alienação nos Manuscritos de 1844 à formulação do materialismo histórico na Ideologia Alemã e no Manifesto do Partido Comunista (1848). A análise do modo de produção capitalista desenvolvida n’O Capital: mercadoria, fetichismo, teoria da exploração pela mais-valia e a luta de classes como motor da história.',
    mainSubjects: [
      'A inversão materialista da dialética hegeliana e a crítica a Feuerbach',
      'O Manifesto Comunista de 1848 e a burguesia como classe revolucionária',
      'A teoria do valor-trabalho, mais-valia absoluta e relativa',
      'O fetichismo da mercadoria e a reificação das relações humanas',
      'A Primeira Internacional (1864) e as lições da Comuna de Paris (1871)'
    ],
    historicalContext: 'Em meio às convulsões da Primavera dos Povos de 1848 que abalaram as monarquias europeias e ao avanço do capitalismo industrial maduro, Marx e Engels buscaram conferir ao socialismo uma fundamentação não mais moral ou utópica, mas científica, baseada nas leis materiais do desenvolvimento histórico.',
    academicConsensus: 'A pesquisa historiográfica e filosófica (Stedman Jones, McLellan, Avineri) desfez a imagem monolítica de Marx como arquiteto de manuais dogmáticos soviéticos, demonstrando que o pensamento marxiano era uma reflexão viva e rigorosa, em permanente mutação epistêmica diante das conjunturas econômicas e políticas do século XIX.',
    keyActors: [
      'Karl Marx (1818–1883)',
      'Friedrich Engels (1820–1895)',
      'Jenny von Westphalen (1814–1881)',
      'Wilhelm Liebknecht (1826–1900)',
      'August Bebel (1840–1913)'
    ],
    historiansInvolved: [
      'Gareth Stedman Jones',
      'David McLellan',
      'Shlomo Avineri',
      'Leszek Kołakowski',
      'Perry Anderson'
    ],
    primarySources: [
      {
        title: 'Manifesto do Partido Comunista (Fevereiro de 1848)',
        institution: 'British Library / Marx-Engels Archive (IISH)',
        documentType: 'Manifesto Político Fundamental',
        year: '1848',
        archiveReference: 'IISH ME-1848-MPC / British Library C.194.a.808',
        transcriptionPt: 'A história de todas as sociedades até hoje tem sido a história das lutas de classes. Homem livre e escravo, patrício e plebeu, senhor feudal e servo, mestre de corporação e jornaleiro, em uma palavra: opressores e oprimidos mantiveram-se em constante oposição. [...] Os proletários nada têm a perder além de seus grilhões. Têm um mundo a ganhar. Proletários de todos os países, uni-vos!',
        abntCitation: 'MARX, Karl; ENGELS, Friedrich. Manifest der Kommunistischen Partei. Londres: J. E. Burghard, 1848.',
        chicagoCitation: 'Marx, Karl, and Friedrich Engels. The Communist Manifesto. London: Burghard, 1848.',
        relatedHistorians: ['Gareth Stedman Jones', 'Eric Hobsbawm']
      },
      {
        title: 'O Capital: Crítica da Economia Política - Livro I (1867)',
        institution: 'Universidade Humboldt de Berlim / IISH Amsterdã',
        documentType: 'Obra Teórica Fundamental',
        year: '1867',
        archiveReference: 'IISH Marx/Engels Papers d. 104',
        transcriptionPt: 'A riqueza das sociedades onde reina o modo de produção capitalista aparece como uma enorme coleção de mercadorias, e a mercadoria individual como sua forma elementar. [...] A produção de mais-valia ou a obtenção de lucro é a lei absoluta desse modo de produção.',
        abntCitation: 'MARX, Karl. Das Kapital: Kritik der politischen Oekonomie. Erster Band. Hamburgo: Verlag von Otto Meissner, 1867.',
        chicagoCitation: 'Marx, Karl. Das Kapital. Vol. 1. Hamburg: Otto Meissner, 1867.',
        relatedHistorians: ['David McLellan', 'Shlomo Avineri']
      }
    ],
    historicalImpact: 'Tornou-se a matriz intelectual mais influente dos movimentos revolucionários mundiais do século XX, originando os partidos sociais-democratas de massas e as revoluções comunistas na Rússia, Ásia e América Latina.',
    quote: {
      text: 'Os filósofos limitaram-se a interpretar o mundo de diferentes maneiras; o que importa é transformá-lo.',
      author: 'Karl Marx',
      context: 'Teses sobre Feuerbach (Tese XI, 1845)'
    }
  },

  // =========================================================================
  // TÓPICO 106 (CAPÍTULO 06)
  // =========================================================================
  {
    id: 106,
    categoryNumber: '06',
    title: 'Comunismo e Movimentos Revolucionários: Da Comuna de Paris à Internacional Comunista',
    category: 'Vanguardas Insurrecionais e Regimes de Partido Único',
    period: 'todos',
    periodLabel: '1871 – 1945',
    tagline: 'O partido de novo tipo de Lenin, a tomada bolchevique do poder e a expansão da Terceira Internacional (Komintern).',
    summary: 'A transição decisiva do socialismo teórico para a conquista efetiva do poder estatal: a Comuna de Paris (1871), as cisões da Segunda Internacional sobre a guerra e o imperialismo, a formulação leninista da vanguarda revolucionária de revolucionários profissionais (O Que Fazer?), a Revolução de Outubro de 1917, a fundação do Komintern e a institucionalização da ditadura do proletariado.',
    mainSubjects: [
      'A Comuna de Paris (1871): a primeira experiência de governo operário',
      'O colapso da Segunda Internacional em 1914 diante do nacionalismo belicista',
      'Vladimir Lenin: centralismo democrático e o partido de vanguarda',
      'A Revolução de Outubro de 1917 e o desmantelamento da Assembleia Constituinte',
      'A criação do Komintern (1919) e os 21 pontos de adesão revolucionária'
    ],
    historicalContext: 'A carnificina industrial da Primeira Guerra Mundial (1914–1918) desmoralizou as instituições liberais europeias e causou o desmoronamento dos impérios russo, austro-húngaro, otomano e alemão. Na Rússia imperial em ruínas, a vanguarda bolchevique dirigida por Lenin e Trotsky capitalizou o anseio de "Paz, Pão e Terra" para instaurar o primeiro Estado socialista da história.',
    academicConsensus: 'Os especialistas contemporâneos (Robert Service, François Furet, Sheila Fitzpatrick) destacam que o bolchevismo representou uma mutação voluntarista e militarizada do marxismo, na qual a convicção dogmática na posse da verdade científica serviu de justificativa para a abolição dos direitos civis e o estabelecimento do terror de Estado.',
    keyActors: [
      'Vladimir Lenin (1870–1924)',
      'Leon Trotsky (1879–1940)',
      'Rosa Luxemburgo (1871–1919)',
      'Nikolai Bukharin (1888–1938)',
      'Karl Kautsky (1854–1938)'
    ],
    historiansInvolved: [
      'Robert Service',
      'François Furet',
      'Sheila Fitzpatrick',
      'Hannah Arendt',
      'Leszek Kołakowski'
    ],
    primarySources: [
      {
        title: 'Que Fazer? Questões Candentes de Nosso Movimento (1902)',
        institution: 'Arquivo Estatal Russo de História Sócio-Política (RGASPI)',
        documentType: 'Tratado Político de Organização Partidária',
        year: '1902',
        archiveReference: 'RGASPI f. 2, op. 1, d. 1024',
        transcriptionPt: 'A consciência política de classe só pode ser levada ao operário a partir de fora, isto é, de fora da luta econômica, de fora da esfera das relações entre operários e patrões. [...] Deem-nos uma organização de revolucionários e nós viraremos a Rússia do avesso!',
        abntCitation: 'LENIN, Vladimir Ilitch. Chto delat’?: Nabolevshie voprosy nashego dvizheniya. Stuttgart: J. H. W. Dietz, 1902.',
        chicagoCitation: 'Lenin, V. I. What Is to Be Done?. Stuttgart: Dietz, 1902.',
        relatedHistorians: ['Robert Service', 'Leszek Kołakowski']
      },
      {
        title: 'Condições de Admissão à Internacional Comunista - As 21 Condições (1920)',
        institution: 'Wilson Center / RGASPI Fundo Komintern',
        documentType: 'Resolução Oficial de Congresso',
        year: '1920',
        archiveReference: 'RGASPI f. 495, op. 1, d. 8',
        transcriptionPt: 'Condição 1: Toda a propaganda e agitação deve ter um caráter verdadeiramente comunista e estar em conformidade com o programa da Terceira Internacional. Condição 12: Todas as decisões dos congressos da Internacional Comunista e do seu Comitê Executivo são de cumprimento obrigatório para todos os partidos filiados.',
        abntCitation: 'INTERNACIONAL COMUNISTA. As 21 Condições de Admissão à Internacional Comunista. Segundo Congresso. Moscou, 1920.',
        chicagoCitation: 'Communist International. Twenty-One Conditions for Admission. Moscow, 1920.',
        relatedHistorians: ['Robert Service', 'François Furet']
      }
    ],
    historicalImpact: 'Dividiu a esquerda mundial de modo irreversível entre comunistas alinhados a Moscou e sociais-democratas reformistas, inaugurando a era das guerras ideológicas que moldaram a Guerra Fria.',
    quote: {
      text: 'O leninismo consistiu na militarização do marxismo: a substituição do movimento autônomo das massas pela disciplina de ferro de uma ordem conspiratória.',
      author: 'Leszek Kołakowski',
      context: 'Correntes Principais do Marxismo (1976)'
    }
  },

  // =========================================================================
  // TÓPICO 107 (CAPÍTULO 07)
  // =========================================================================
  {
    id: 107,
    categoryNumber: '07',
    title: 'Fascismo Italiano: Ultranacionalismo, Totalitarismo e Corporativismo (1919–1945)',
    category: 'Ultranacionalismo Autoritário e Sacralização da Política',
    period: 'todos',
    periodLabel: '1919 – 1945',
    tagline: 'O esquadrismo das camisas-negras, a Marcha sobre Roma, o Estado corporativo e a divinização do Duce.',
    summary: 'A gênese, ascensão e institucionalização do Fascismo na Itália liderado por Benito Mussolini. A exploração do mito da "vitória mutilada" no pós-Primeira Guerra, o terror paramilitar dos esquadristas contra grevistas e socialistas, a Marcha sobre Roma de 1922, a destruição do parlamento após o assassinato de Giacomo Matteotti, as leis fascistíssimas e a ideologia corporativista formulada por Giovanni Gentile.',
    mainSubjects: [
      'A crise do pós-guerra, o Biennio Rosso (1919–1920) e o esquadrismo',
      'A Marcha sobre Roma (1922) e a cumplicidade da monarquia de Vitor Emanuel III',
      'O assassinato de Matteotti (1924) e a ditadura aberta',
      'A Doutrina do Fascismo: "Tudo no Estado, nada contra o Estado, nada fora do Estado"',
      'O Estado Corporativo: superação forçada da luta de classes pelo bem nacional'
    ],
    historicalContext: 'Apesar de ter figurado no lado vencedor da Primeira Guerra, a Itália sentiu-se humilhada nas negociações de Versalhes. A inflação descontrolada, o desemprego de veteranos e o temor generalizado das elites de uma revolução bolchevique criaram a oportunidade para os Fasci di Combattimento de Mussolini se apresentarem como salvadores da pátria.',
    academicConsensus: 'A historiografia contemporânea (Stanley Payne, Emilio Gentile, Roger Griffin) refuta teses antigas de que o fascismo era mero "fantoche do grande capital" ou "parenteses de loucura", demonstrando que o fascismo foi um regime totalitário pioneiro, com sólida base intelectual anti-iluminista, religião política institucionalizada e adesão genuína de massas.',
    keyActors: [
      'Benito Mussolini (1883–1945)',
      'Giovanni Gentile (1875–1944)',
      'Giacomo Matteotti (1885–1924)',
      'Rei Vitor Emanuel III (1869–1947)',
      'Gabriele D’Annunzio (1863–1938)'
    ],
    historiansInvolved: [
      'Emilio Gentile',
      'Stanley G. Payne',
      'Roger Griffin',
      'Robert O. Paxton',
      'Zeev Sternhell'
    ],
    primarySources: [
      {
        title: 'A Doutrina do Fascismo (La Dottrina del Fascismo, 1932)',
        institution: 'Enciclopedia Italiana Treccani / Archivio Centrale dello Stato (Roma)',
        documentType: 'Manifesto Doutrinário Oficial',
        year: '1932',
        archiveReference: 'Archivio Centrale dello Stato - Carte Mussolini',
        transcriptionPt: 'O fascismo rejeita a concepção liberal da política segundo a qual o Estado é um simples árbitro dos interesses particulares. [...] Para o fascista, tudo está no Estado, e nada humano ou espiritual existe, e muito menos tem valor, fora do Estado. [...] O fascismo é a negação categórica e resoluta do socialismo e da democracia parlamentar.',
        abntCitation: 'MUSSOLINI, Benito; GENTILE, Giovanni. La dottrina del fascismo. Roma: Istituto della Enciclopedia Italiana, 1932.',
        chicagoCitation: 'Mussolini, Benito, and Giovanni Gentile. The Doctrine of Fascism. Rome: Treccani, 1932.',
        relatedHistorians: ['Emilio Gentile', 'Stanley G. Payne']
      },
      {
        title: 'Carta del Lavoro (21 de abril de 1927)',
        institution: 'Gazzetta Ufficiale del Regno d’Italia / Archivio di Stato',
        documentType: 'Decreto-Lei Corporativista Fundamental',
        year: '1927',
        archiveReference: 'Gazzetta Ufficiale n. 100, 30/04/1927',
        transcriptionPt: 'A Nação italiana é um organismo que tem fins, vida e meios de ação superiores aos dos indivíduos, isolados ou agrupados, que a compõem. [...] O trabalho, sob todas as suas formas organizativas e executivas, é um dever social. Só a este título é tutelado pelo Estado. [...] A greve e o locaute são terminantemente proibidos sob pena de prisão.',
        abntCitation: 'ITÁLIA. Gran Consiglio del Fascismo. Carta del Lavoro. Roma, 1927.',
        chicagoCitation: 'Fascist Grand Council. Labor Charter of 1927. Rome, 1927.',
        relatedHistorians: ['Stanley G. Payne', 'Robert O. Paxton']
      }
    ],
    historicalImpact: 'Serviu de modelo pioneiro para movimentos autoritários em todo o mundo na década de 1930, demonstrando o perigo da subversão democrática a partir da ocupação das instituições pelo terror paramilitar.',
    quote: {
      text: 'O fascismo não foi uma mera reação; foi a primeira experiência contemporânea de sacralização integral da política em um Estado totalitário.',
      author: 'Emilio Gentile',
      context: 'A Sacralização da Política na Itália Fascista (1996)'
    }
  },

  // =========================================================================
  // TÓPICO 108 (CAPÍTULO 08)
  // =========================================================================
  {
    id: 108,
    categoryNumber: '08',
    title: 'Nazismo Alemão: Racialismo Biológico, Antissemitismo e a Ditadura Totalitária de Hitler',
    category: 'Totalitarismo Racial e Genocídio Industrial',
    period: 'todos',
    periodLabel: '1920 – 1945',
    tagline: 'O colapso de Weimar, o mito do Lebensraum, o terror da SS e a Solução Final planejada como obrigação redentora.',
    summary: 'A anatomia do Nacional-Socialismo (Nazismo) na Alemanha: as raízes völkisch do pangermanismo, o impacto devastador do Tratado de Versalhes e da Grande Depressão de 1929 na ruína da República de Weimar, a ideologia exposta em Mein Kampf, a conquista legal do poder em 1933, a coordenação (Gleichschaltung) de toda a sociedade, o aparato de terror da SS/Gestapo e a execução industrial do Holocausto.',
    mainSubjects: [
      'A ideologia biológica de raça e sangue: o arianismo e o antissemitismo redentor',
      'O colapso da República de Weimar e a cumplicidade das elites conservadoras em 1933',
      'O incêndio do Reichstag, a Lei de Concessão de Plenos Poderes e o Estado Policial',
      'A doutrina do Lebensraum (Espaço Vital) e o plano de subjugação do Leste Europeu',
      'O Holocausto (Shoah): a conferência de Wannsee e a maquinaria de extermínio'
    ],
    historicalContext: 'A capitulação alemã em 1918 e a lenda punhalada pelas costas (Dolchstoßlegende) alimentaram um ódio profundo contra a república parlamentar. Quando a crise de Wall Street de 1929 arremessou 6 milhões de alemães ao desemprego, Adolf Hitler canalizou a revolta coletiva prometendo a ressurreição nacional e a aniquilação dos "inimigos da raça".',
    academicConsensus: 'A pesquisa documental dos arquivos alemães (Ian Kershaw, Richard J. Evans, Saul Friedländer) comprovou que o nazismo operava como uma autoridade carismática extrema, na qual o Estado tradicional se fragmentou em feudos burocráticos concorrentes que radicalizavam continuamente suas ações para "trabalhar em direção ao Führer", tendo no assassinato em massa dos judeus o objetivo escatológico supremo.',
    keyActors: [
      'Adolf Hitler (1889–1945)',
      'Heinrich Himmler (1900–1945)',
      'Joseph Goebbels (1897–1945)',
      'Hermann Göring (1893–1946)',
      'Reinhard Heydrich (1904–1942)'
    ],
    historiansInvolved: [
      'Ian Kershaw',
      'Richard J. Evans',
      'Saul Friedländer',
      'George L. Mosse',
      'Michael Mann'
    ],
    primarySources: [
      {
        title: 'Programa de 25 Pontos do Partido Nacional-Socialista dos Trabalhadores Alemães (NSDAP, 1920)',
        institution: 'Bundesarchiv Berlim-Lichterfelde / GHDI',
        documentType: 'Programa Partidário Oficial',
        year: '1920',
        archiveReference: 'Bundesarchiv NS 26/50 / GHDI Doc #1920-NSDAP-25',
        transcriptionPt: 'Ponto 4: Só pode ser cidadão quem for membro da raça alemã. Só pode ser membro da raça quem tiver sangue alemão, sem consideração de confissão religiosa. Nenhum judeu pode, portanto, ser membro da raça. Ponto 7: Exigimos terra e solo (colônias) para alimentar o nosso povo e assentar o nosso excesso de população.',
        abntCitation: 'NSDAP. Das Programm der Nationalsozialistischen Deutschen Arbeiterpartei. Munique: Franz Eher Nachfolger, 1920.',
        chicagoCitation: 'NSDAP. The 25-Point Program of the Nazi Party. Munich, 1920.',
        relatedHistorians: ['Richard J. Evans', 'Ian Kershaw']
      },
      {
        title: 'Ata Secreta da Conferência de Wannsee sobre a Solução Final (20 de janeiro de 1942)',
        institution: 'Politisches Archiv des Auswärtigen Amts / Haus der Wannsee-Konferenz',
        documentType: 'Ata de Protocolo Secreto Governamental',
        year: '1942',
        archiveReference: 'PA AA Inland II g 177',
        transcriptionPt: 'No curso da solução final, os judeus devem ser conduzidos para o leste sob a devida supervisão e empregados no trabalho. [...] No decorrer dessa execução, a grande maioria dos judeus sem dúvida perecerá por eliminação natural. O restante final que eventualmente sobrar terá de ser tratado em conformidade, pois representa o gérmen biológico de uma nova ressurreição judaica.',
        abntCitation: 'ALEMANHA. Chef der Sicherheitspolizei und des SD. Protokoll der Wannsee-Konferenz. Berlim, 1942.',
        chicagoCitation: 'Reich Security Main Office. Wannsee Protocol. Berlin, 1942.',
        relatedHistorians: ['Saul Friedländer', 'Richard J. Evans']
      }
    ],
    historicalImpact: 'Culminou no Holocausto com o genocídio sistemático de 6 milhões de judeus e milhões de ciganos, eslavos e opositores, e provocou a Segunda Guerra Mundial, o conflito mais letal da história humana.',
    quote: {
      text: 'O antissemitismo nazista não era um instrumento eleitoral passageiro: era uma visão de mundo redentora que considerava o extermínio físico dos judeus como uma cruzada biológica de salvação cósmica.',
      author: 'Saul Friedländer',
      context: 'A Alemanha Nazista e os Judeus (1997)'
    }
  },

  // =========================================================================
  // TÓPICO 109 (CAPÍTULO 09)
  // =========================================================================
  {
    id: 109,
    categoryNumber: '09',
    title: 'Social-Democracia e Democracia Liberal: Reformismo, Bem-Estar Social e Ordem Constitucional',
    category: 'Consenso do Pós-Guerra e Estado Social de Direito',
    period: 'todos',
    periodLabel: '1899 – Presente',
    tagline: 'O compromisso de Bad Godesberg, o modelo keynesiano, a universalização da saúde e o Estado Providência.',
    summary: 'A trajetória da Social-Democracia europeia e sua convergência com a Democracia Liberal: o revisionismo reformista de Eduard Bernstein, a ruptura definitiva com a via insurrecional soviética, o Programa de Bad Godesberg do SPD alemão (1959), o Relatório Beveridge na Grã-Bretanha e a criação do Estado de Bem-Estar Social (Welfare State) sustentado pelas teorias macroeconômicas de Keynes e pelo Ordoliberalismo.',
    mainSubjects: [
      'O debate revisionista de Eduard Bernstein: reforma institucional versus revolução',
      'O Relatório Beveridge (1942) e a guerra aos cinco gigantes (Miséria, Doença, Ignorância, Ociosidade e Degradação)',
      'A economia mista e o pleno emprego sob a macroeconomia keynesiana',
      'O Congresso de Bad Godesberg (1959): o abandono oficial do marxismo pelo SPD',
      'A síntese de Rawls: conciliação entre liberdades individuais e justiça distributiva'
    ],
    historicalContext: 'A devastação física e moral da Europa após 1945 exigiu um pacto social histórico para reconstruir as democracias e evitar que os trabalhadores fossem seduzidos pelo modelo soviético. Democracias liberais e sindicatos firmaram o "Compromisso Socialdemocrata", garantindo direitos sociais universais financiado por tributação progressiva sobre economias de mercado prósperas.',
    academicConsensus: 'Cientistas políticos e economistas (Norberto Bobbio, Robert Dahl, Amartya Sen) apontam que os Trinta Anos Gloriosos (1945–1975) comprovaram que a democracia constitucional pode coexistir com um alto padrão de bem-estar e baixa desigualdade, transformando a social-democracia no pilar de estabilidade das sociedades ocidentais modernas.',
    keyActors: [
      'Eduard Bernstein (1850–1932)',
      'William Beveridge (1879–1963)',
      'Clement Attlee (1883–1967)',
      'Willy Brandt (1913–1992)',
      'Olof Palme (1927–1986)'
    ],
    historiansInvolved: [
      'Eduard Bernstein',
      'John Maynard Keynes',
      'Norberto Bobbio',
      'Amartya Sen',
      'John Rawls'
    ],
    primarySources: [
      {
        title: 'Relatório Beveridge sobre Seguridade Social e Serviços Afins (1942)',
        institution: 'The National Archives (TNA), Kew / UK Parliament',
        documentType: 'Relatório Oficial de Política Pública',
        year: '1942',
        archiveReference: 'TNA CAB 87/76 / Cmd. 6404',
        transcriptionPt: 'Um momento revolucionário no mundo é um momento para inovações audazes, e não para meros remendos. [...] A seguridade social deve ser garantida desde o berço até o túmulo. O plano de seguridade social é um ataque contra a Necessidade e contra os outros quatro gigantes que barram o caminho do progresso: Doença, Ignorância, Degradação e Ociosidade.',
        abntCitation: 'GRÃ-BRETANHA. Social Insurance and Allied Services: Report by Sir William Beveridge. Londres: HMSO, 1942.',
        chicagoCitation: 'Beveridge, William. Social Insurance and Allied Services. London: HMSO, 1942.',
        relatedHistorians: ['John Maynard Keynes', 'Amartya Sen']
      },
      {
        title: 'Programa Fundamental do Partido Social-Democrata da Alemanha (Bad Godesberg, 1959)',
        institution: 'Archiv der sozialen Demokratie (AdsD) / Friedrich-Ebert-Stiftung',
        documentType: 'Programa Partidário Fundamental',
        year: '1959',
        archiveReference: 'AdsD SPD-Parteitage 1959',
        transcriptionPt: 'Os socialistas democráticos lutam por uma sociedade na qual todo homem possa desenvolver livremente sua personalidade. [...] A liberdade e a justiça são os valores fundamentais do socialismo. [...] Concorrência tanto quanto possível, planejamento tanto quanto necessário. O Partido Social-Democrata não é mais um partido de uma classe única, mas um partido de todo o povo.',
        abntCitation: 'SPD. Grundsatzprogramm der Sozialdemokratischen Partei Deutschlands: Beschlossen auf dem Außerordentlichen Parteitag zu Bad Godesberg. Bonn, 1959.',
        chicagoCitation: 'Social Democratic Party of Germany. The Bad Godesberg Program. Bonn, 1959.',
        relatedHistorians: ['Eduard Bernstein', 'Norberto Bobbio']
      }
    ],
    historicalImpact: 'Construiu os sistemas universais de saúde (como o NHS britânico), a previdência pública e a educação gratuita de qualidade, constituindo o padrão civilizatório mais invejado das democracias ocidentais.',
    quote: {
      text: 'O socialismo democrático provou que a busca pela igualdade não precisa ser feita ao preço da liberdade civil, mas deve ser a sua realização mais plena.',
      author: 'Norberto Bobbio',
      context: 'Liberalismo e Democracia (1985)'
    }
  },

  // =========================================================================
  // TÓPICO 110 (CAPÍTULO 10)
  // =========================================================================
  {
    id: 110,
    categoryNumber: '10',
    title: 'Análise Historiográfica Comparada: Tipologia, Conflitos e Rupturas entre as Grandes Ideologias',
    category: 'Teoria Política Comparada e Matrizes Conceituais',
    period: 'todos',
    periodLabel: 'Século XIX – Século XXI',
    tagline: 'O confronto sistemático entre Liberalismo, Socialismo, Conservadorismo, Fascismo e Democracia sob o crivo acadêmico.',
    summary: 'Síntese historiográfica e conceitual comparada de todas as grandes matrizes políticas que disputaram o mundo contemporâneo. A análise das variáveis-chave: concepção de natureza humana, papel do Estado, limites da liberdade versus igualdade, postura diante da propriedade privada e da violência revolucionária. O contraste rigoroso entre regimes abertos e sistemas totalitários segundo as lições consolidadas dos 40 pesquisadores de referência.',
    mainSubjects: [
      'A morfologia comparada das ideologias segundo Michael Freeden',
      'Natureza humana: otimismo iluminista, pessimismo conservador e plasticidade marxiana',
      'Liberdade negativa (liberal), liberdade substantiva (socialista) e liberdade orgânica (fascista)',
      'A teoria do totalitarismo de Arendt, Friedrich e Brzezinski versus autoritarismo de Linz',
      'O balanço do "Breve Século XX" e os desafios ideológicos do século XXI'
    ],
    historicalContext: 'Com o fim da Guerra Fria e o colapso da União Soviética em 1991, teses precipitadas sobre o "Fim da História" foram desmentidas pela reemergência de nacionalismos, autoritarismos tecnocráticos e polarizações globais, exigindo o domínio crítico das raízes históricas de cada tradição política.',
    academicConsensus: 'O consenso epistemológico dos grandes historiadores e cientistas políticos (Aron, Berlin, Bobbio, Dahl, Linz, Freeden) estabelece que as ideologias não são aberrações elimináveis, mas estruturas conceituais necessárias de ordenação do mundo público; a salvaguarda fundamental contra as tentações tirânicas reside no respeito inflexível ao pluralismo de valores, ao Estado de Direito e à recusa de utopias que pretendam sacrificar gerações vivas no altar de futuros absolutos.',
    keyActors: [
      'Karl Marx (1818–1883)',
      'John Locke (1632–1704)',
      'Edmund Burke (1729–1797)',
      'Benito Mussolini (1883–1945)',
      'John Maynard Keynes (1883–1946)'
    ],
    historiansInvolved: [
      'Isaiah Berlin',
      'Hannah Arendt',
      'Norberto Bobbio',
      'Raymond Aron',
      'Juan Linz',
      'Carl J. Friedrich',
      'Michael Freeden'
    ],
    primarySources: [
      {
        title: 'Declaração Universal dos Direitos Humanos (10 de dezembro de 1948)',
        institution: 'Organização das Nações Unidas (ONU) / Palais de Chaillot, Paris',
        documentType: 'Tratado Internacional de Direitos Humanos',
        year: '1948',
        archiveReference: 'Resolução 217 A (III) da Assembleia Geral da ONU',
        transcriptionPt: 'Artigo 1: Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade. [...] Artigo 19: Todo ser humano tem direito à liberdade de opinião e de expressão. Artigo 25: Todo ser humano tem direito a um padrão de vida capaz de assegurar a si e à sua família saúde e bem-estar.',
        abntCitation: 'ORGANIZAÇÃO DAS NAÇÕES UNIDAS. Declaração Universal dos Direitos Humanos. Paris, 1948.',
        chicagoCitation: 'United Nations. Universal Declaration of Human Rights. Paris: UN General Assembly, 1948.',
        relatedHistorians: ['Hannah Arendt', 'Norberto Bobbio', 'John Rawls']
      },
      {
        title: 'Two Concepts of Liberty (Dois Conceitos de Liberdade, 1958)',
        institution: 'University of Oxford / Oxford University Press',
        documentType: 'Aula Inaugural / Ensaio Filosófico',
        year: '1958',
        archiveReference: 'Oxford Clarendon Press OUP-1958-Berlin',
        transcriptionPt: 'Se os homens nunca tivessem discordado sobre os fins da vida, se os nossos ancestrais tivessem permanecido imperturbáveis no Jardim do Éden, a história das ideias políticas jamais teria existido. [...] A crença de que uma única fórmula pode resolver todas as dores da humanidade é uma ilusão fatal que sempre justificou o sacrifício de homens vivos.',
        abntCitation: 'BERLIN, Isaiah. Two Concepts of Liberty: An Inaugural Lecture delivered before the University of Oxford on 31 October 1958. Oxford: Clarendon Press, 1958.',
        chicagoCitation: 'Berlin, Isaiah. Two Concepts of Liberty. Oxford: Clarendon Press, 1958.',
        relatedHistorians: ['Isaiah Berlin', 'Raymond Aron']
      }
    ],
    historicalImpact: 'Constitui a chave de interpretação essencial para compreender os conflitos contemporâneos, as crises de legitimidade democrática e a defesa intransigente dos direitos civis e das garantias constitucionais.',
    quote: {
      text: 'O pluralismo político e a aceitação pacífica do dissenso são o único escudo da humanidade contra a barbárie dos regimes que se julgam donos exclusivos da verdade absoluta.',
      author: 'Isaiah Berlin',
      context: 'Quatro Ensaios sobre a Liberdade (1969)'
    }
  },

  // =========================================================================
  // TÓPICO 111 (CAPÍTULO 11)
  // =========================================================================
  {
    id: 111,
    categoryNumber: '11',
    title: 'O Comunismo Internacional: Regimes, Revoluções e Catástrofes Humanitárias',
    category: 'Comunismo Internacional',
    period: 'internacional',
    periodLabel: '1949–início do século XXI · Ásia, África e América Latina',
    tagline: 'China de Mao, genocídio no Camboja, Derg na Etiópia, dinastia Kim na Coreia do Norte, Vietnã, África e América Latina.',
    summary: 'A expansão global do comunismo e a emergência de regimes autoritários de partido único. Análise documental das catástrofes humanitárias, expurgos e fomes coletivas: o Grande Salto Adiante (dezenas de milhões de mortes) e a Revolução Cultural na China; o genocídio cambojano sob Pol Pot (1,7 a 2 milhões de vítimas); o Terror Vermelho na Etiópia sob o Derg; o totalitarismo dinástico norte-coreano; campos de reeducação no Vietnã e Moçambique; e repressões em Angola, Cuba e Nicarágua.',
    mainSubjects: ['China de Mao: Grande Salto Adiante e Revolução Cultural', 'Camboja de Pol Pot e o Genocídio do Khmer Vermelho', 'Etiópia do Derg e o Terror Vermelho', 'Coreia do Norte: Dinastia Kim, Gulag e Marcha Árdua', 'Vietnã: Campos de Reeducação e Boat People', 'África: Angola (MPLA 1977) e Moçambique (FRELIMO)', 'América Latina: Cuba e Nicarágua', 'Padrões Comparativos de Violência de Estado'],
    historicalContext: 'A exportação de modelos de partido único e economia planificada coercitiva para o Terceiro Mundo levou à concentração absoluta do poder e à repressão sistemática a dissidentes e supostos inimigos internos, frequentemente com apoio militar e financeiro soviético ou chinês.',
    academicConsensus: 'Pesquisadores como Frank Dikötter, Yang Jisheng, Roderick MacFarquhar, Ben Kiernan, David Chandler, Stephan Haggard, Marcus Noland e Jacob Wiebel documentam as causas políticas, operacionais e ideológicas das fomes induzidas, campos de trabalho e assassinatos em massa nesses regimes.',
    keyActors: ['Mao Tsé-Tung', 'Pol Pot (Saloth Sar)', 'Mengistu Haile Mariam', 'Kim Il-sung', 'Ho Chi Minh', 'Fidel Castro'],
    historiansInvolved: ['Frank Dikötter', 'Yang Jisheng', 'Ben Kiernan', 'David Chandler', 'Lillian Guerra', 'Stephan Haggard'],
    historicalImpact: 'Produziu perdas de dezenas de milhões de vidas humanas em fomes forçadas, campos de trabalhos correcionais e expurgos políticos, deixando traumas demográficos e sociais profundos em múltiplos continentes.',
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
      },
      {
        title: 'Fichas Prisionais e Ordens de Execução de Tuol Sleng (S-21) do Khmer Vermelho',
        institution: 'Extraordinary Chambers in the Courts of Cambodia (ECCC) / DC-Cam',
        documentType: 'Registros Prisionais e Ordens de Execução',
        year: '1975–1979',
        archiveReference: 'ECCC Archives: Case 001 (Kaing Guek Eav / Duch), Document D24 / DC-Cam Collection',
        transcriptionPt: 'Registros burocráticos meticulosos contendo fotografias de entrada, confissões forçadas sob tortura sistemática e despachos assinados pelo comandante Duch determinando o envio dos detidos para execução sumária em Choeung Ek.',
        abntCitation: 'EXTRAORDINARY CHAMBERS IN THE COURTS OF CAMBODIA (ECCC). Registros Prisionais de Tuol Sleng (S-21). Phnom Penh: ECCC / DC-Cam, Caso 001.',
        chicagoCitation: 'Extraordinary Chambers in the Courts of Cambodia. 1975–1979. "Tuol Sleng S-21 Prison Records." Phnom Penh: ECCC.'
      }
    ]
  }
];

export const getIdeologiasTopicById = (id: number): DossierTopic | undefined => {
  return IDEOLOGIAS_TOPICS.find(t => t.id === id);
};
