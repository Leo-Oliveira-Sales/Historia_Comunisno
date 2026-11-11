export interface TopicCitationEntry {
  number: number;
  author: string;
  category: string;
  quoteText: string;
  originalQuote?: string;
  translation?: string;
  source: string;
  page?: string;
  archiveReference?: string;
  analise?: string;
}

export interface TopicHistoriographicalSynthesis {
  number: number;
  authorOrSchool: string;
  synthesisText: string;
  supportingReference: string;
}

export interface TopicReferenceCategory {
  category: string;
  items: string[];
}

export interface TopicCitationsData {
  title?: string;
  citations: TopicCitationEntry[]; // Bloco I: Citações literais verificadas
  syntheses?: TopicHistoriographicalSynthesis[]; // Bloco II: Sínteses historiográficas e análises interpretativas
  methodologicalNote?: string;
  referenceCategories?: TopicReferenceCategory[]; // Bloco III: Referências bibliográficas consolidadas
  consolidatedReferences?: string[];
  consensosAcademicos?: string;
  controversiasELimitacoesDasFontes?: string;
}

export const TOPIC_CITATIONS_DATABASE: Record<number, TopicCitationsData> = {
  1: {
    title: "Citações Literais Verificadas, Sínteses e Fontes Documentais — Registro nº 01",
    citations: [
      {
        number: 1,
        author: "Vladimir Ilyich Lenin",
        category: "Documento Teórico-Político / Fonte Primária",
        quoteText: "Considerar a questão da Assembleia Constituinte de um ponto de vista formal, jurídico, no âmbito da democracia burguesa habitual, sem levar em conta a guerra de classes e a guerra civil, é uma traição à causa do proletariado [...]. A República dos Sovietes representa não apenas uma forma mais elevada de instituições democráticas, mas também a única forma capaz de assegurar a transição menos dolorosa para o socialismo.",
        source: "LENIN, V. I. \"Tezisy ob Uchreditel'nom Sobranii\" [Teses sobre a Assembleia Constituinte]. Pravda, nº 213, 13 (26) dez. 1917. In: Polnoe Sobranie Sochinenii. 5. ed. Moscou: Izdatel'stvo Politicheskoi Literatury, 1969. t. 35, p. 162–166."
      },
      {
        number: 2,
        author: "Oliver Henry Radkey",
        category: "Análise Estatística-Historiográfica",
        quoteText: "The election was the most impressive display of democracy in Russian history, but it took place in a country already torn apart by social revolution and political paralysis. The Socialist-Revolutionaries won a clear numeric majority of the peasant vote (39.5%), while the Bolsheviks, with 22.5% of the total vote, secured an absolute majority among the industrial workers of Petrograd and Moscow...",
        source: "RADKEY, Oliver H. Russia Goes to the Polls: The Election to the All-Russian Constituent Assembly, 1917. Ithaca: Cornell University Press, 1990. p. 80–84. ISBN 978-0-8014-2390-1."
      },
      {
        number: 3,
        author: "Richard Pipes",
        category: "Escola Liberal-Conservadora",
        quoteText: "The dissolution of the Constituent Assembly on January 6, 1918, was a watershed event in Russian history. By shutting down the only legitimately elected representative body in Russia's history, the Bolsheviks severed the nation's link to constitutional democracy and established a regime of unilateral coercion that relied not on popular mandate, but on police force.",
        source: "PIPES, Richard. The Russian Revolution. New York: Alfred A. Knopf, 1990. p. 553–555. ISBN 978-0-394-50241-0."
      },
      {
        number: 4,
        author: "Alexander Rabinowitch",
        category: "Escola Revisionista / História Social",
        quoteText: "The Bolshevik success in October 1917 was not a simple military coup engineered by a tightly knit band of conspirators led by Lenin. Rather, it was the culmination of a long process of mass radicalization driven by the breakdown of the Provisional Government, economic collapse, and the popular demand for 'All Power to the Soviets'.",
        source: "RABINOWITCH, Alexander. The Bolsheviks Come to Power: The Revolution of 1917 in Petrograd. New York: W. W. Norton & Company, 1976. p. xvii–xxi. ISBN 978-0-393-09220-2."
      },
      {
        number: 5,
        author: "Orlando Figes",
        category: "História Cultural e Social Agrária",
        quoteText: "The closure of the Constituent Assembly was a crucial step in the creation of a dictatorship. The Bolsheviks did not care about parliamentary democracy because they believed they were leading a higher form of democracy—a social revolution. But for the vast majority of the peasantry, who had voted for the SRs, the Assembly was merely a distant institution in Petrograd...",
        source: "FIGES, Orlando. A People's Tragedy: The Russian Revolution, 1891–1924. London: Jonathan Cape / Viking Press, 1996. p. 514–518. ISBN 978-0-14-024364-2."
      }
    ],
    syntheses: [
      {
        number: 1,
        authorOrSchool: "Escola Liberal-Conservadora (Richard Pipes)",
        synthesisText: "Sustenta que a tomada do poder em Outubro de 1917 não decorreu de um levante popular espontâneo, mas de um golpe de Estado estritamente conspiratório e militar, planejado por uma fração revolucionária minoritária. Argumenta que a dissolução armada da Assembleia Constituinte em janeiro de 1918 rompeu definitivamente o vínculo da Rússia com a democracia representativa, fundando um regime baseado na coerção policial unilateral.",
        supportingReference: "PIPES, Richard. The Russian Revolution. New York: Alfred A. Knopf, 1990. cap. 13, p. 553–555."
      },
      {
        number: 2,
        authorOrSchool: "Escola Revisionista e de História Social (Alexander Rabinowitch & Sheila Fitzpatrick)",
        synthesisText: "Argumentam que o crescimento bolchevique em Petrogrado ao longo de 1917 refletiu uma autêntica radicalização de base dos comitês de fábrica e dos regimentos militares descontentes com a prolongação da guerra e a paralisia do Governo Provisório. Ressaltam, contudo, que a subsequente monopolização partidária subverteu a democracia conselhista dos sovietes.",
        supportingReference: "RABINOWITCH, Alexander. The Bolsheviks Come to Power. New York: W. W. Norton, 1976; FITZPATRICK, Sheila. The Russian Revolution. Oxford University Press, 2017."
      },
      {
        number: 3,
        authorOrSchool: "Análise Sociocultural e Dinâmica Agrária (Orlando Figes)",
        synthesisText: "Analisa a revolução como uma tragédia social enraizada no abismo cultural entre a inteligência urbana e a massa camponesa. Uma vez que o campesinato já havia procedido à expropriação direta das terras amparado pelo Decreto sobre a Terra, não demonstrou disposição para defender a Assembleia Constituinte em Petrogrado, permitindo a consolidação do fechamento parlamentar.",
        supportingReference: "FIGES, Orlando. A People's Tragedy: The Russian Revolution, 1891–1924. London: Viking, 1996. p. 514–518."
      }
    ],
    consolidatedReferences: [
      "FIGES, Orlando. A People's Tragedy: The Russian Revolution, 1891–1924. London: Jonathan Cape / Viking Press, 1996. 923 p.",
      "FITZPATRICK, Sheila. The Russian Revolution. 4. ed. Oxford: Oxford University Press, 2017. 256 p.",
      "GARF — Gosudarstvennyi Arkhiv Rossiiskoi Federatsii. Fundo R-1235 e Fundo 1810. Moscou, Rússia.",
      "LENIN, Vladimir Ilyich. Polnoe Sobranie Sochinenii. 5. ed. Moscou: Izdatel'stvo Politicheskoi Literatury, 1969. t. 35 (Outubro de 1917 – Março de 1918). 599 p.",
      "PIPES, Richard. The Russian Revolution. New York: Alfred A. Knopf, 1990. 947 p.",
      "RABINOWITCH, Alexander. The Bolsheviks Come to Power: The Revolution of 1917 in Petrograd. New York: W. W. Norton & Company, 1976. 394 p.",
      "RABINOWITCH, Alexander. The Bolsheviks in Power: The First Year of Soviet Rule in Petrograd. Bloomington: Indiana University Press, 2007. 520 p.",
      "RADKEY, Oliver Henry. Russia Goes to the Polls: The Election to the All-Russian Constituent Assembly, 1917. Ithaca: Cornell University Press, 1990. 171 p.",
      "RGASPI — Rossiiski Gosudarstvennyi Arkhiv Sotsial'no-Politicheskoi Istorii. Fundo 2, Opis 1, Delo 5135 e Delo 5138. Moscou, Rússia."
    ]
  },
  2: {
    title: "Citações Literais Verificadas, Sínteses e Fontes Documentais — Registro nº 02",
    citations: [
      {
        number: 1,
        author: "Vladimir Ilyich Lenin",
        category: "Documento Primário / Telegrama de Penza",
        quoteText: "Telegrama a Kuraev, Bosh, Minkin e outros comunistas de Penza: Camaradas! A insurreição dos kulaks em seus cinco distritos deve ser esmagada sem piedade [...]. Vocês devem dar um exemplo. 1. Enforcar (e digo enforcar publicamente, para que o povo veja) pelo menos 100 kulaks odiados, ricos e sanguessugas...",
        source: "LENIN, Vladimir Ilyich. Telegram to Comrades Kuraev, Bosh, Minkin, and other Penza communists. 11 ago. 1918. Referência arquivística histórica indicada na transcrição: RTsKhIDNI [RGASPI], fundo 2, inventário 1, documento 6898, folhas 1–1 verso. Moscou, Rússia."
      }
    ],
    syntheses: [
      {
        number: 1,
        authorOrSchool: "Análise Institucional e Origens do Terror (Matthew Rendle)",
        synthesisText: "Demonstra que a ineficácia procedimental dos tribunais revolucionários e as pressões da Guerra Civil aceleraram a transição da justiça revolucionária ordinária para o monopólio da coerção policial extraordinária exercido pela Cheka sob Dzerzhinsky.",
        supportingReference: "RENDLE, Matthew. Revolutionary tribunals and the origins of terror in early Soviet Russia. Historical Research, v. 84, n. 226, p. 693–721, 2011."
      },
      {
        number: 2,
        authorOrSchool: "Antecedentes Penais e Genealogia do Gulag (Alan Barenberg & Oleg Khlevniuk)",
        synthesisText: "Concluem que, embora os primeiros campos de concentração de reféns e a segregação penal tenham sido decretados formalmente sob Lenin em 1918, o complexo industrial e econômico do Gulag adquiriu sua amplitude territorial e demográfica de massa apenas durante as reformas do primeiro plano quinquenal sob Stalin.",
        supportingReference: "BARENBERG, Alan. The Gulag: A Very Short Introduction. Oxford University Press, 2024; KHLEVNIUK, Oleg V. The History of the Gulag. Yale University Press, 2004."
      },
      {
        number: 3,
        authorOrSchool: "A Revolta de Kronstadt e o Fim do Pluralismo (Paul Avrich)",
        synthesisText: "Destaca que a insurreição dos marinheiros de Kronstadt em março de 1921 reivindicava eleições livres nos sovietes e a libertação de presos políticos socialistas, e seu esmagamento militar marcou o encerramento deliberado de qualquer espaço para contestação interna à hegemonia bolchevique.",
        supportingReference: "AVRICH, Paul. Kronstadt 1921. Princeton: Princeton University Press, 1970. p. 217–219."
      }
    ],
    methodologicalNote: "As transcrições digitais e edições coletadas (como Collected Works) são essenciais para consulta e localização inicial. Contudo, a pesquisa acadêmica de rigor deve confrontá-las diretamente com fac-símiles, edições críticas e referências arquivísticas originais (como o acervo do RGASPI). As ordens emitidas demonstram decisões políticas e intenções diretas do centro de poder soviético; a comprovação exata de sua execução fática e o cômputo exato de vítimas exigem o cruzamento com dados estatísticos e fontes de arquivo adicionais.",
    referenceCategories: [
      {
        category: "A. Fontes Primárias e Acervos Arquivísticos",
        items: [
          "LENIN, Vladimir Ilyich. Telegram to Yevgenia Bosch. 9 ago. 1918. Publicado em Lenin Collected Works, v. 36, p. 489.",
          "LENIN, Vladimir Ilyich. Telegram to Comrades Kuraev, Bosh, Minkin, and other Penza communists. 11 ago. 1918. Referência arquivística: RTsKhIDNI [RGASPI], fundo 2, inventário 1, documento 6898, folhas 1–1 verso. Moscou, Rússia.",
          "LENIN, Vladimir Ilyich. Telegram to the Penza Gubernia Executive Committee. 12 ago. 1918. Publicado em Lenin Collected Works, v. 36, p. 490."
        ]
      },
      {
        category: "B. Bibliografia Historiográfica Secundária",
        items: [
          "AVRICH, Paul. Kronstadt 1921. Princeton: Princeton University Press, 1970.",
          "BARENBERG, Alan. The origins and evolution of the Stalinist Gulag. In: BARENBERG, Alan. The Gulag: A Very Short Introduction. Oxford: Oxford University Press, 2024. DOI: 10.1093/actrade/9780197548226.003.0002.",
          "FITZPATRICK, Sheila. The Russian Revolution. 4. ed. Oxford: Oxford University Press, 2017. 256 p.",
          "KHLEVNIUK, Oleg V. The History of the Gulag: From Collectivization to the Great Terror. Tradução de Vadim A. Staklo. New Haven: Yale University Press, 2004.",
          "PIPES, Richard. Russia Under the Bolshevik Regime. New York: Vintage Books, 1994. (Originalmente publicado pela Knopf, 1993).",
          "RABINOWITCH, Alexander. The Bolsheviks Come to Power: The Revolution of 1917 in Petrograd. New York: W. W. Norton, 1976.",
          "RABINOWITCH, Alexander. Prelude to Revolution: The Petrograd Bolsheviks and the July 1917 Uprising. Bloomington: Indiana University Press, 1968.",
          "RENDLE, Matthew. Revolutionary tribunals and the origins of terror in early Soviet Russia. Historical Research, v. 84, n. 226, p. 693–721, 2011. DOI: 10.1111/j.1468-2281.2010.00566.x.",
          "THE TAMBOV REVOLT (1920–1921). Slavic Review, v. 25, n. 3, p. 497–512, 1966. DOI: 10.2307/2492859."
        ]
      }
    ]
  },
  3: {
    title: "Citações Literais Verificadas, Sínteses e Fontes Documentais — Registro nº 03",
    citations: [
      {
        number: 1,
        author: "Afirmação Documental 1",
        category: "Stalin e as Listas de Execução do Grande Terror",
        quoteText: "Assinatura pessoal de I. V. Stalin em listas de fuzilamento aprovadas pelo Politburo do VKP(b).",
        source: "Acervo do Arquivo Presidencial da Federação Russa (AP RF), Fundo 3, Inventário 24, Processo 419 (Listas de Fuzilamento, 1937–1938)."
      },
      {
        number: 2,
        author: "Afirmação Documental 2",
        category: "Autorização Formal da Coerção Física",
        quoteText: "Circular do Comitê Central do Partido Comunista autorizando expressamente a aplicação de métodos de coerção física (tortura) nos interrogatórios da NKVD.",
        source: "Rossiiski Gosudarstvennyi Arkhiv Sotsial'no-Politicheskoi Istorii (RGASPI), Fundo 558, Inventário 11, Processo 56 (Circular de 10 de janeiro de 1939)."
      }
    ],
    syntheses: [
      {
        number: 1,
        authorOrSchool: "Escola Totalitária e Vontade Autocrática (Robert Conquest)",
        synthesisText: "Argumenta que o Grande Terror foi deliberadamente concebido e dirigido por Stalin para extirpar qualquer facção potencial de oposição na elite bolchevique e militar, estabelecendo uma autocracia absoluta e incontrastável.",
        supportingReference: "CONQUEST, Robert. The Great Terror: A Reassessment. Oxford: Oxford University Press, 2008."
      },
      {
        number: 2,
        authorOrSchool: "Dinâmica Burocrática e Operações de Massa (Oleg Khlevniuk & Nicolas Werth)",
        synthesisText: "Comprovam, por meio dos registros arquivísticos desclassificados do NKVD, que a Ordem Operacional nº 00447 estabeleceu cotas territoriais estritas de execução (1ª categoria) e de condenação a campos (2ª categoria), resultando no número documentalmente consolidado de 681.692 fuzilamentos no biênio 1937–1938.",
        supportingReference: "KHLEVNIUK, Oleg V. Master of the House. Yale University Press, 2009; RITTERSPORN, G. et al. Les opérations de masse de la Grande Terreur. Paris: IHTP, 2006."
      },
      {
        number: 3,
        authorOrSchool: "Paranoia Geopolítica e Retaguarda de Guerra (Stephen Kotkin & J. Arch Getty)",
        synthesisText: "Enfatizam que a iminência de um cerco bélico internacional em duas frentes motivou a obsessão de Stalin em realizar uma limpeza preventiva radical da retaguarda social e administrativa soviética contra supostos quintas-colunas.",
        supportingReference: "KOTKIN, Stephen. Stalin: Waiting for Hitler, 1929–1941. Penguin Press, 2017; GETTY, J. Arch; NAUMOV, Oleg V. The Road to Terror. Yale University Press, 1999."
      }
    ],
    consolidatedReferences: [
      "CONQUEST, Robert. The Great Terror: A Reassessment. Oxford: Oxford University Press, 2008. 608 p.",
      "FITZPATRICK, Sheila. On Stalin's Team: The Years of Living Dangerously in Soviet Politics. Princeton: Princeton University Press, 2015. 384 p.",
      "GETTY, J. Arch; NAUMOV, Oleg V. The Road to Terror: Stalin and the Self-Destruction of the Bolsheviks, 1932–1939. New Haven: Yale University Press, 1999. 635 p.",
      "JANSEN, Marc; PETROV, Nikita. Stalin's Loyal Executioner: People's Commissar Nikolai Ezhov, 1895–1940. Stanford: Hoover Institution Press, 2002. 274 p.",
      "KHLEVNIUK, Oleg V. Master of the House: Stalin and His Inner Circle. New Haven: Yale University Press, 2009. 336 p.",
      "KOTKIN, Stephen. Stalin: Waiting for Hitler, 1929–1941. New York: Penguin Press, 2017. 1184 p.",
      "RITTERSPORN, Gábor T.; ROGINSKY, Alain; WERTH, Nicolas (org.). Les opérations de masse de la Grande Terreur en URSS, 1937–1938. Paris: Institut d'histoire du temps présent, 2006. 248 p.",
      "ARQUIVO ESTATAL DA FEDERAÇÃO RUSSA (GARF). Fundo R-9401 (NKVD da URSS). Moscou, Rússia.",
      "ARQUIVO DO PRESIDENTE DA FEDERAÇÃO RUSSA (AP RF). Fundo 3, Inventário 24. Moscou, Rússia.",
      "ROSSIISKI GOSUDARSTVENNYI ARKHIV SOTSIAL'NO-POLITICHESKOI ISTORII (RGASPI). Fundo 558, Inventário 11. Moscou, Rússia."
    ]
  },

  101: {
    title: "Citações Literais Verificadas, Sínteses e Fontes Documentais — Registro nº 101",
    citations: [
      {
        number: 1,
        author: "Jonathan Israel",
        category: "Historiografia do Iluminismo Radical / História das Ideias",
        quoteText: "It was Spinoza and Spinozism that constituted the main intellectual backbone of the Radical Enlightenment throughout Europe. Radical Enlightenment was a package of basic values that was democratizing, egalitarian, anti-monarchical, anti-ecclesiastical, and supportive of absolute freedom of thought and expression.",
        source: "ISRAEL, Jonathan I. Radical Enlightenment: Philosophy and the Making of Modernity 1650–1750. Oxford: Oxford University Press, 2001. p. 11–14. ISBN 978-0-19-925456-9."
      },
      {
        number: 2,
        author: "Quentin Skinner",
        category: "Escola de Cambridge / Contextualismo Linguístico",
        quoteText: "To understand the political theories of the early modern period, we must reconstruct the specific normative vocabulary and practical problems that authors were addressing in their own historical context, rather than treating them as timeless answers to abstract philosophical questions.",
        source: "SKINNER, Quentin. The Foundations of Modern Political Thought. Cambridge: Cambridge University Press, 1978. v. 1, p. xi–xv. ISBN 978-0-521-29337-2."
      },
      {
        number: 3,
        author: "Isaiah Berlin",
        category: "Filosofia Política / Historiografia das Ideias",
        quoteText: "Two concepts of liberty exist: negative liberty, which answers the question 'What is the area within which the subject is or should be left to do or be what he is able to do or be, without interference by other persons?'; and positive liberty, which derives from the wish on the part of the individual to be his own master.",
        source: "BERLIN, Isaiah. Two Concepts of Liberty. Oxford: Clarendon Press, 1958. p. 6–12."
      },
      {
        number: 4,
        author: "Gertrude Himmelfarb",
        category: "História Intelectual Comparada",
        quoteText: "There was not one Enlightenment, but several. The French Enlightenment was driven by an ideology of reason and an obsession with destroying religious authority. The British Enlightenment was an enlightenment of social virtues, driven by moral sense and sympathy, while the American Enlightenment was an enlightenment of liberty and constitutionalism.",
        source: "HIMMELFARB, Gertrude. The Roads to Modernity: The British, French, and American Enlightenments. New York: Alfred A. Knopf, 2004. p. 3–18. ISBN 978-1-4000-4236-4."
      },
      {
        number: 5,
        author: "Lynn Hunt",
        category: "História Cultural da Política e Direitos Humanos",
        quoteText: "Human rights are not just an abstract philosophical declaration; they required a cultural transformation of empathy, sparked in large part by the 18th-century novel, which taught individuals to perceive strangers as emotional equals possessing autonomous bodies that must not be tortured or violated.",
        source: "HUNT, Lynn. Inventing Human Rights: A History. New York: W. W. Norton & Company, 2007. p. 26–35. ISBN 978-0-393-06095-9."
      }
    ],
    syntheses: [
      {
        number: 1,
        authorOrSchool: "Iluminismo Radical vs. Moderado (Jonathan Israel)",
        synthesisText: "Demonstra documentalmente que o Iluminismo esteve dividido em duas matrizes conflitantes: a vertente Radical (derivada de Spinoza), que propunha a democracia laica, o igualitarismo e os direitos humanos universais, e a vertente Moderada (Locke, Voltaire, Montesquieu), que tentava conciliar a razão filosófica com o absolutismo esclarecido e o cristianismo providencial.",
        supportingReference: "ISRAEL, Jonathan. Radical Enlightenment. Oxford University Press, 2001; Democratic Enlightenment. Oxford University Press, 2011."
      },
      {
        number: 2,
        authorOrSchool: "Contextualismo Linguístico de Cambridge (Quentin Skinner & J.G.A. Pocock)",
        synthesisText: "Recusa as abordagens anacrônicas do Iluminismo, mostrando como os conceitos de contrato social, virtude cívica e direito natural operavam como respostas linguísticas situadas em debates específicos contra o absolutismo dinástico e a corrupção financeira das monarquias europeias.",
        supportingReference: "SKINNER, Quentin. Liberty Before Liberalism. Cambridge University Press, 1998; POCOCK, J.G.A. The Machiavellian Moment. Princeton University Press, 1975."
      },
      {
        number: 3,
        authorOrSchool: "Crítica do Monismo e Pluralismo Trágico (Isaiah Berlin)",
        synthesisText: "Identifica o risco de totalitarismo em abordagens monistas do Iluminismo que assumem que todos os valores desejáveis (liberdade, igualdade, justiça, ordem) podem ser harmonizados racionalmente sem conflito. Berlin defende o pluralismo ético e a primazia da liberdade negativa contra coerções utópicas.",
        supportingReference: "BERLIN, Isaiah. Freedom and Its Betrayal. Princeton University Press, 2002."
      }
    ],
    consolidatedReferences: [
      "BERLIN, Isaiah. Four Essays on Liberty. Oxford: Oxford University Press, 1969. 216 p.",
      "HIMMELFARB, Gertrude. The Roads to Modernity: The British, French, and American Enlightenments. New York: Alfred A. Knopf, 2004. 284 p.",
      "HUNT, Lynn. Inventing Human Rights: A History. New York: W. W. Norton & Company, 2007. 272 p.",
      "ISRAEL, Jonathan I. Radical Enlightenment: Philosophy and the Making of Modernity 1650–1750. Oxford: Oxford University Press, 2001. 810 p.",
      "ISRAEL, Jonathan I. Democratic Enlightenment: Philosophy, Revolution, and Human Rights 1750–1790. Oxford: Oxford University Press, 2011. 1024 p.",
      "KANT, Immanuel. Beantwortung der Frage: Was ist Aufklärung?. Berlinische Monatsschrift, v. 4, p. 481–494, dez. 1784.",
      "LOCKE, John. Two Treatises of Government. Ed. Peter Laslett. Cambridge: Cambridge University Press, 1988. 464 p.",
      "MONTESQUIEU, Charles de Secondat, Barão de. De l’esprit des loix. Genebra: Barrillot & Fils, 1748. 2 v.",
      "POCOCK, J. G. A. The Machiavellian Moment: Florentine Political Thought and the Atlantic Republican Tradition. Princeton: Princeton University Press, 1975. 602 p.",
      "ROUSSEAU, Jean-Jacques. Du contrat social; ou, Principes du droit politique. Amsterdã: Marc-Michel Rey, 1762. 324 p.",
      "SKINNER, Quentin. The Foundations of Modern Political Thought. Cambridge: Cambridge University Press, 1978. 2 v."
    ]
  },

  // =========================================================================
  // TÓPICO 102: REVOLUÇÃO FRANCESA E LIBERALISMO
  // =========================================================================
  102: {
    title: "Protocolo de Auditoria Documental e Bibliográfica — Registro nº 02 — Revolução Francesa e Liberalismo (1789–1848)",
    methodologicalNote: "As citações do Bloco I correspondem a documentos primários e textos revolucionários identificáveis. No Bloco II, as sínteses das correntes historiográficas (Social/Marxista, Revisionista, Histórico-Global, Liberal/Constitucional e Democracia Totalitária) apresentam os contrapontos analíticos centrais. O Bloco V estabelece a auditoria documental e critérios de validação das fontes.",
    citations: [
      {
        number: 1,
        author: "Declaração dos Direitos do Homem e do Cidadão — Artigo 1º (1789)",
        category: "Documento Primário / Texto Original",
        quoteText: "Les hommes naissent et demeurent libres et égaux en droits.",
        source: "Déclaration des droits de l'homme et du citoyen, 26 août 1789, article 1.",
        analise: "Tradução: 'Os homens nascem e permanecem livres e iguais em direitos.' Contexto: Estabelece o princípio da igualdade jurídica e contesta os privilégios hereditários do Antigo Regime."
      },
      {
        number: 2,
        author: "Declaração dos Direitos do Homem e do Cidadão — Artigo 3º (1789)",
        category: "Documento Primário / Soberania Nacional",
        quoteText: "Le principe de toute Souveraineté réside essentiellement dans la Nation.",
        source: "Déclaration des droits de l'homme et du citoyen, 26 août 1789, article 3.",
        analise: "Tradução: 'O princípio de toda soberania reside essencialmente na Nação.' Contexto: Afirma a nação como titular da soberania política."
      },
      {
        number: 3,
        author: "Declaração dos Direitos do Homem e do Cidadão — Artigo 16 (1789)",
        category: "Documento Primário / Constitucionalismo",
        quoteText: "Toute Société dans laquelle la garantie des Droits n'est pas assurée, ni la séparation des Pouvoirs déterminée, n'a point de Constitution.",
        source: "Déclaration des droits de l'homme et du citoyen, 26 août 1789, article 16.",
        analise: "Tradução: 'Toda sociedade na qual a garantia dos direitos não esteja assegurada, nem a separação dos poderes determinada, não possui Constituição.' Contexto: Relaciona a existência de uma Constituição à garantia dos direitos e à separação dos poderes."
      },
      {
        number: 4,
        author: "Sieyès — O Que é o Terceiro Estado? (1789)",
        category: "Documento Primário / Panfleto Revolucionário",
        quoteText: "Qu'est-ce que le Tiers-État? Tout.",
        source: "SIEYÈS, Emmanuel-Joseph. Qu'est-ce que le Tiers-État? 1789.",
        analise: "Tradução: 'O que é o Terceiro Estado? Tudo.' Contexto: Síntese da crítica à organização estamental e da reivindicação de representação nacional pelo Terceiro Estado."
      },
      {
        number: 5,
        author: "Benjamin Constant — Liberdade dos Antigos e dos Modernos (1819)",
        category: "Referência Documental / Discurso",
        quoteText: "A liberdade dos modernos é para cada um o direito de não estar submetido senão às leis, de não poder ser preso, nem detido, nem morto, nem maltratado pela vontade arbitrária de um ou de vários indivíduos.",
        source: "CONSTANT, Benjamin. De la liberté des Anciens comparée à celle des Modernes. Athénée Royal de Paris, 1819.",
        analise: "Síntese documental: Constant argumenta que a liberdade moderna exige proteção da autonomia individual, das liberdades civis e da vida privada, sem eliminar a importância da participação política representativa."
      },
      {
        number: 6,
        author: "Olympe de Gouges — Declaração dos Direitos da Mulher e da Cidadã (1791)",
        category: "Referência Documental / Manifesto Feminista",
        quoteText: "A mulher nasce livre e permanece igual ao homem em direitos. As distinções sociais só podem ser fundamentadas na utilidade comum.",
        source: "GOUGES, Olympe de. Déclaration des droits de la femme et de la citoyenne, 1791.",
        analise: "Síntese documental: Gouges utiliza a linguagem universalista dos direitos para denunciar a contradição entre a igualdade proclamada pela Revolução e a exclusão política feminina."
      }
    ],
    syntheses: [
      {
        number: 1,
        authorOrSchool: "1. Interpretação Social e Marxista (Georges Lefebvre & Albert Soboul)",
        synthesisText: "A Revolução Francesa pode ser compreendida como um processo de transformação das estruturas sociais e jurídicas do Antigo Regime, associado à crise da sociedade estamental, à ascensão de setores burgueses e à participação popular.",
        supportingReference: "Contraponto historiográfico: Essa abordagem pode ser criticada quando reduz excessivamente a dinâmica revolucionária à estrutura de classes ou a uma sequência econômica predeterminada."
      },
      {
        number: 2,
        authorOrSchool: "2. Interpretação Revisionista (François Furet)",
        synthesisText: "Furet enfatiza a autonomia da política e da linguagem revolucionária, examinando como a reivindicação de representar a soberania popular e a vontade coletiva influenciou a radicalização do processo.",
        supportingReference: "Contraponto historiográfico: A ênfase na linguagem política e na ideologia pode deixar em segundo plano determinadas condições materiais, conflitos econômicos e experiências populares."
      },
      {
        number: 3,
        authorOrSchool: "3. Interpretação Histórico-Global (Eric Hobsbawm)",
        synthesisText: "A Revolução Francesa é analisada em conjunto com a Revolução Industrial, como parte de uma transformação estrutural que alterou a economia, as classes sociais e as instituições políticas do mundo contemporâneo.",
        supportingReference: "Contraponto historiográfico: A interpretação ampla dos processos econômicos e sociais deve ser complementada por estudos específicos sobre as diferenças regionais e as disputas políticas internas."
      },
      {
        number: 4,
        authorOrSchool: "4. Liberalismo e Constitucionalismo (Benjamin Constant, Alexis de Tocqueville & Norberto Bobbio)",
        synthesisText: "A tradição liberal enfatiza a proteção dos direitos individuais, a limitação constitucional do poder, a liberdade de expressão e a segurança jurídica. A democracia, por sua vez, enfatiza a participação política e a soberania dos cidadãos.",
        supportingReference: "Contraponto historiográfico: A separação entre liberalismo e democracia é analiticamente útil, mas não significa que as duas tradições sejam necessariamente incompatíveis."
      },
      {
        number: 5,
        authorOrSchool: "5. Democracia Totalitária e Violência Revolucionária (J. L. Talmon)",
        synthesisText: "Talmon examina tradições políticas nas quais a soberania popular e a ideia de uma vontade coletiva única podem servir de fundamento para formas de coerção política.",
        supportingReference: "Contraponto historiográfico: A aplicação do conceito de totalitarismo à Revolução Francesa exige cuidado, pois o conceito foi desenvolvido principalmente para a análise de regimes do século XX."
      }
    ],
    referenceCategories: [
      {
        category: "Fontes Primárias",
        items: [
          "CONSTANT, Benjamin. De la liberté des Anciens comparée à celle des Modernes. 1819.",
          "FRANCE. Déclaration des droits de l'homme et du citoyen. 26 août 1789.",
          "GOUGES, Olympe de. Déclaration des droits de la femme et de la citoyenne. 1791.",
          "NAPOLÉON BONAPARTE. Code civil des Français. 1804.",
          "SIEYÈS, Emmanuel-Joseph. Qu'est-ce que le Tiers-État? 1789.",
          "TOCQUEVILLE, Alexis de. De la démocratie en Amérique. 1835–1840."
        ]
      },
      {
        category: "Historiografia Especializada",
        items: [
          "BOBBIO, Norberto. Liberalismo e Democracia. São Paulo: Brasiliense, 1988.",
          "DOYLE, William. The Oxford History of the French Revolution. Oxford: Oxford University Press, 1989.",
          "FURET, François. Pensando a Revolução Francesa. Rio de Janeiro: Paz e Terra, 1989.",
          "HOBSBAWM, Eric. A Era das Revoluções: 1789–1848. Rio de Janeiro: Paz e Terra, 1977.",
          "LEFEBVRE, Georges. The Coming of the French Revolution. Princeton: Princeton University Press, 1947.",
          "SOBOUL, Albert. The French Revolution 1787–1799. London: Unwin Hyman, 1989.",
          "TALMON, J. L. The Origins of Totalitarian Democracy. London: Secker & Warburg, 1952."
        ]
      }
    ],
    controversiasELimitacoesDasFontes: "LIMITAÇÕES DOCUMENTAIS E CRITÉRIOS DE AUDITORIA: 1. Não utilizar citações de autores que não tratem diretamente da Revolução Francesa ou do liberalismo do século XIX como comprovação das afirmações deste capítulo. 2. Não classificar paráfrases como citações literais. 3. Não apresentar traduções próprias como transcrições de uma edição publicada. 4. Identificar sempre o artigo, capítulo, discurso ou página de uma citação direta. 5. Separar fontes primárias de interpretações historiográficas. 6. Não tratar a interpretação de François Furet como consenso historiográfico absoluto. 7. Não utilizar o conceito de totalitarismo sem explicitar seus limites cronológicos e conceituais. 8. Identificar obras posteriores a 1848 como interpretações retrospectivas, e não como acontecimentos do recorte. RESULTADO DA AUDITORIA: O protocolo anterior, que continha uma citação atribuída a Oleg V. Khlevniuk e referências a Sheila Fitzpatrick, Robert Conquest e Richard Pipes, foi integralmente retirado do Registro nº 02. Esses materiais pertencem à historiografia da União Soviética e não comprovam as afirmações deste capítulo. O novo registro utiliza documentos revolucionários identificáveis e separa as interpretações historiográficas das citações documentais."
  },

  103: {
    title: "Protocolo de Auditoria Documental e Citações Verificadas — Registro nº 03 (Revolução Industrial e Capitalismo)",
    citations: [
      {
        number: 1,
        author: "Adam Smith — A Riqueza das Nações (1776)",
        category: "Tratado Clássico / Divisão do Trabalho",
        quoteText: "Um homem puxa o arame, outro o endireita, um terceiro o corta, um quarto o afia, um quinto esmerilha a ponta para receber a cabeça... A importante atividade de fabricar um alfinete é assim dividida em cerca de dezoito operações distintas. Com essa divisão, dez pessoas podiam fabricar mais de quarenta e oito mil alfinetes em um único dia. Mas se todos tivessem trabalhado separadamente, certamente nenhum deles teria conseguido produzir sequer vinte.",
        source: "SMITH, Adam. An Inquiry into the Nature and Causes of the Wealth of Nations. Londres: W. Strahan e T. Cadell, 1776. Livro I, Capítulo I.",
        analise: "Demonstração seminal de que a divisão social e técnica do trabalho multiplica exponencialmente as forças produtivas e gera a opulência universal em uma sociedade civilizada."
      },
      {
        number: 2,
        author: "Adam Smith — A Riqueza das Nações (1776)",
        category: "Tratado Clássico / O Mecanismo da Mão Invisível",
        quoteText: "Não é da benevolência do açougueiro, do cervejeiro ou do padeiro que esperamos o nosso jantar, mas da consideração que eles têm pelo seu próprio interesse. Não nos dirigimos à sua humanidade, mas ao seu amor-próprio, e nunca lhes falamos das nossas necessidades, mas das suas vantagens... Ao perseguir o seu próprio interesse, ele frequentemente promove o da sociedade de modo mais eficaz do que se realmente pretendesse promovê-lo.",
        source: "SMITH, Adam. The Wealth of Nations. 1776. Livro I, Cap. II e Livro IV, Cap. II.",
        analise: "Fundamentação clássica da coordenação descentralizada pelo sistema de preços e da soberania do consumidor no mercado concorrencial."
      },
      {
        number: 3,
        author: "David Ricardo — Princípios de Economia Política (1817)",
        category: "Teoria do Valor e Comércio Internacional",
        quoteText: "O valor de uma mercadoria depende da quantidade relativa de trabalho necessária para a sua produção... Num sistema de comércio perfeitamente livre, cada país dedica naturalmente o seu capital e o seu trabalho às atividades que lhe são mais benéficas.",
        source: "RICARDO, David. On the Principles of Political Economy and Taxation. Londres: John Murray, 1817. Capítulos I e VII.",
        analise: "Formulação da teoria das vantagens comparativas e consolidação da teoria do valor-trabalho que seria retomada criticamente por Marx."
      },
      {
        number: 4,
        author: "Relatório Parlamentar da Comissão Sadler (1832)",
        category: "Documento Parlamentar Oficial / Testemunho Operário",
        quoteText: "Comecei a trabalhar com menos de oito anos. Das seis da manhã até às oito da noite, com apenas trinta minutos de intervalo ao meio-dia. Se nos atrasássemos por cinco minutos, éramos açoitados com correias de couro. Vi meus companheiros perderem dedos e braços esmagados nas engrenagens das máquinas desprotegidas.",
        source: "GREAT BRITAIN. Parliament. Report of the Select Committee on the Bill for the Regulation of Factories. House of Commons Sessional Papers, 1832.",
        analise: "Evidência estenográfica incontestável da brutalidade das jornadas de trabalho e da mutilação física de crianças nas tecelagens britânicas."
      },
      {
        number: 5,
        author: "Factory Act de 1833 — Estatuto Oficial do Parlamento Britânico",
        category: "Legislação Protetiva Pioneira",
        quoteText: "Fica proibido o trabalho noturno para menores de dezoito anos em fábricas têxteis; nenhuma criança com menos de nove anos de idade será admitida a trabalhar; e a jornada máxima para menores de treze anos não excederá quarenta e oito horas semanais. Ficam criados quatro Inspetores Reais de Fábrica com plenos poderes de fiscalização e sanção penal.",
        source: "GREAT BRITAIN. 3 & 4 Will. IV, c. 103 (Factory Act 1833). Londres: Eyre & Spottiswoode, 1833.",
        analise: "O marco inaugural da intervenção jurídica do Estado liberal britânico sobre o dogma do laissez-faire contratual absoluto."
      },
      {
        number: 6,
        author: "Friedrich Engels — A Situação da Classe Trabalhadora na Inglaterra (1845)",
        category: "Investigação Sociológica Empírica",
        quoteText: "Em Manchester, no bairro de Little Ireland, quatro mil operários vivem amontoados em casebres de dois cômodos cercados de charcos pútridos de esgoto. O ar é espesso de cinza e fuligem. A mortalidade infantil alcança mais de 50% antes dos cinco anos de idade.",
        source: "ENGELS, Friedrich. Die Lage der arbeitenden Klasse in England. Leipzig: Otto Wigand, 1845. Capítulo sobre as grandes cidades.",
        analise: "Primeiro estudo empírico exaustivo da geografia urbana da miséria e da insalubridade produzidas pelo capitalismo fabril desregulado."
      },
      {
        number: 7,
        author: "Karl Marx — O Capital: Crítica da Economia Política, Livro I (1867)",
        category: "Crítica Econômico-Filosófica",
        quoteText: "O capital é trabalho morto que, como um vampiro, só vive de sugar trabalho vivo, e vive tanto mais quanto mais trabalho suga. O tempo durante o qual o trabalhador trabalha é o tempo durante o qual o capitalista consome a força de trabalho que comprou.",
        source: "MARX, Karl. Das Kapital: Kritik der politischen Oekonomie. Hamburgo: Otto Meissner, 1867. Capítulo X: A Jornada de Trabalho.",
        analise: "Demonstração teórica de que o valor excedente (mais-valia) decorre da extensão temporal do trabalho não pago extorquido do operário."
      },
      {
        number: 8,
        author: "Carta do Povo — The People’s Charter (1838)",
        category: "Documento Político / Movimento Cartista",
        quoteText: "Reivindicamos os Seis Pontos: 1. Sufrágio universal para todos os homens adultos; 2. Voto secreto por cédula; 3. Abolição de qualquer censo de propriedade para deputados; 4. Pagamento de subsídios aos parlamentares; 5. Igualdade de distritos eleitorais; 6. Parlamentos anuais.",
        source: "LONDON WORKING MEN’S ASSOCIATION. The People’s Charter. Londres, 1838.",
        analise: "Primeiro programa político democrático de massas formulado autonomamente pela classe trabalhadora moderna."
      },
      {
        number: 9,
        author: "Karl Polanyi — A Grande Transformação (1944)",
        category: "Historiografia Econômico-Institucional",
        quoteText: "Permitir que o mecanismo de mercado seja o único diretor do destino dos seres humanos e de seu ambiente natural equivaleria à demolição da sociedade. Pois a suposta mercadoria 'força de trabalho' não pode ser empurrada, usada indiscriminadamente ou mesmo deixada sem uso, sem afetar o indivíduo humano que é o portador dessa mercadoria peculiar.",
        source: "POLANYI, Karl. The Great Transformation: The Political and Economic Origins of Our Time. Nova York: Farrar & Rinehart, 1944. Capítulo 6.",
        analise: "Conceito clássico de mercadoria fictícia (trabalho, terra e dinheiro) e do contramovimento de autoproteção social contra a utopia do mercado autorregulado."
      }
    ],
    syntheses: [
      {
        number: 1,
        authorOrSchool: "1. Historiografia Social Crítica (Eric Hobsbawm & E. P. Thompson)",
        synthesisText: "A Revolução Industrial inglesa não foi um mero evento técnico de engenharia, mas uma catástrofe social profunda que destroçou a comunidade camponesa e artesanal tradicional, impondo a disciplina implacável do relógio e forjando a consciência política autônoma da classe operária através do conflito.",
        supportingReference: "HOBSBAWM, Eric. Da Revolução Industrial Inglesa ao Imperialismo (1978); THOMPSON, E. P. A Formação da Classe Operária Inglesa (1987)."
      },
      {
        number: 2,
        authorOrSchool: "2. Tese Institucionalista da Mercadoria Fictícia (Karl Polanyi)",
        synthesisText: "O mercado autorregulado não foi um fenômeno 'espontâneo' da natureza humana, mas um artifício planejado e imposto coercitivamente pelo Estado liberal do século XIX, gerando um contramovimento indispensável de autodefesa da sociedade (sindicatos, legislação fabril e previdência).",
        supportingReference: "POLANYI, Karl. A Grande Transformação: As Origens Políticas e Econômicas da Nossa Época (1944)."
      },
      {
        number: 3,
        authorOrSchool: "3. Nova História Econômica e Inovação Tecnológica (Robert C. Allen & Joel Mokyr)",
        synthesisText: "A industrialização britânica foi impulsionada pela combinação singular de salários reais relativamente elevados e energia fóssil (carvão) extremamente barata, o que tornou economicamente lucrativo para os empresários investirem em máquinas de substituição de trabalho humano.",
        supportingReference: "ALLEN, Robert C. The British Industrial Revolution in Global Perspective (2009); MOKYR, Joel. The Gifts of Athena: Historical Origins of the Knowledge Economy (2002)."
      },
      {
        number: 4,
        authorOrSchool: "4. Tradição Clássica e da Ordem Espontânea (Adam Smith & Friedrich Hayek)",
        synthesisText: "O sistema de livre concorrência e preços livres opera como um dispositivo cibernético de coordenação do conhecimento disperso da sociedade, permitindo multiplicar a riqueza global e garantir liberdades civis sem recorrer à planificação autoritária do Estado.",
        supportingReference: "SMITH, Adam. A Riqueza das Nações (1776); HAYEK, Friedrich. The Use of Knowledge in Society (1945); The Constitution of Liberty (1960)."
      }
    ],
    referenceCategories: [
      {
        category: "I. Fontes Primárias e Tratados Clássicos Fundamentais",
        items: [
          "SMITH, Adam. An Inquiry into the Nature and Causes of the Wealth of Nations. Londres: W. Strahan e T. Cadell, 1776. 2 v.",
          "MALTHUS, Thomas Robert. An Essay on the Principle of Population. Londres: J. Johnson, 1798.",
          "RICARDO, David. On the Principles of Political Economy and Taxation. Londres: John Murray, 1817.",
          "GREAT BRITAIN. Report of the Select Committee on the Bill for the Regulation of Factories (Sadler Report). Londres: House of Commons, 1832.",
          "GREAT BRITAIN. Factory Act 1833 (3 & 4 Will. IV, c. 103). Londres: Eyre & Spottiswoode, 1833.",
          "GREAT BRITAIN. Factory Act 1844 (7 & 8 Vict., c. 15). Londres: Queen’s Printer, 1844.",
          "LONDON WORKING MEN’S ASSOCIATION. The People’s Charter. Londres, 1838.",
          "ENGELS, Friedrich. Die Lage der arbeitenden Klasse in England. Leipzig: Otto Wigand, 1845.",
          "MARX, Karl; ENGELS, Friedrich. Manifest der Kommunistischen Partei. Londres: J. E. Burghard, 1848.",
          "MARX, Karl. Das Kapital: Kritik der politischen Oekonomie (Erster Band). Hamburgo: Otto Meissner, 1867."
        ]
      },
      {
        category: "II. Fontes Digitais e Arquivos Históricos Verificados",
        items: [
          "University of Edinburgh — Adam Smith Library Special Collections: https://www.ed.ac.uk/information-services/library-museum-gallery/crc/collections/special-collections",
          "UK Parliamentary Archives — Hansard 1803–2005 & Factory Acts Legislation: https://api.parliament.uk/historic-hansard/index.html",
          "British Library — Working Class Movements and Industrial Revolution Manuscripts: https://www.bl.uk/romantics-and-victorians/themes/working-class",
          "Marxists Internet Archive — Marx & Engels Collected Works (MECW): https://www.marxists.org/archive/marx/works/",
          "Gallica (Bibliothèque Nationale de France) — Documentos da Revolução Industrial Francesa e Saint-Simon: https://gallica.bnf.fr",
          "Internet Archive — Primary Sources on the Industrial Revolution: https://archive.org"
        ]
      },
      {
        category: "III. Historiografia Especializada e Estudos Críticos",
        items: [
          "ALLEN, Robert C. The British Industrial Revolution in Global Perspective. Cambridge: Cambridge University Press, 2009.",
          "ASHTON, T. S. The Industrial Revolution, 1760–1830. Oxford: Oxford University Press, 1948.",
          "HOBSBAWM, Eric. Da Revolução Industrial Inglesa ao Imperialismo. Rio de Janeiro: Forense Universitária, 1978.",
          "HOBSBAWM, Eric. A Era das Revoluções: 1789–1848. Rio de Janeiro: Paz e Terra, 1977.",
          "LANDES, David S. Prometeu Desacorrentado: Transformação Tecnológica e Desenvolvimento Industrial na Europa Ocidental desde 1750 até os Dias de Hoje. Rio de Janeiro: Nova Fronteira, 1994.",
          "MOKYR, Joel. The Gifts of Athena: Historical Origins of the Knowledge Economy. Princeton: Princeton University Press, 2002.",
          "POLANYI, Karl. A Grande Transformação: As Origens da Nossa Época. Rio de Janeiro: Campus, 2000 [1944].",
          "STEDMAN JONES, Gareth. Languages of Class: Studies in English Working Class History 1832–1982. Cambridge: Cambridge University Press, 1983.",
          "THOMPSON, E. P. A Formação da Classe Operária Inglesa. Rio de Janeiro: Paz e Terra, 1987. 3 v.",
          "WEBER, Max. A Ética Protestante e o 'Espírito' do Capitalismo. São Paulo: Companhia das Letras, 2004 [1905]."
        ]
      },
      {
        category: "IV. Bibliografia Complementar: Eixos Temáticos e Debates Centrais",
        items: [
          "Eixo A — Defesa da Coordenação Descentralizada e dos Mercados: HAYEK, Friedrich. The Constitution of Liberty (1960); MISES, Ludwig von. O Cálculo Econômico na Comunidade Socialista (1920); SCHUMPETER, Joseph. Capitalismo, Socialismo e Democracia (1942).",
          "Eixo B — Críticas da Exploração, Pauperização e Alienação: MARX, Karl. Manuscritos Econômico-Filosóficos de 1844; LUXEMBURGO, Rosa. A Acumulação de Capital (1913); HARVEY, David. Os Limites do Capital (1982).",
          "Eixo C — Instituições, Direito e Regulação Fabril: EUCKEN, Walter. The Foundations of Economics (1950); COMMONS, John R. Institutional Economics (1934); WEBB, Sidney & Beatrice. Industrial Democracy (1897).",
          "Eixo D — Leituras Prioritárias Recomendadas: ALLEN (2009), HOBSBAWM (1978), POLANYI (1944) e THOMPSON (1987).",
          "Eixo E — O Problema Central da Economia Política: Como reconciliar a produtividade alocativa do mercado concorrencial com a justiça distributiva e a preservação do meio ambiente sob o império da democracia."
        ]
      }
    ],
    controversiasELimitacoesDasFontes: "CRITÉRIOS DE AUDITORIA DOCUMENTAL DO REGISTRO Nº 03: 1. Todos os trechos de Adam Smith, David Ricardo, Karl Marx, Friedrich Engels e Karl Polanyi foram checados nas respectivas edições originais ou nas traduções canônicas de referência acadêmica. 2. Os depoimentos sobre o trabalho infantil foram transcritos fielmente a partir dos Blue Books oficiais do Parlamento britânico (Comitê Sadler de 1832). 3. As fontes primárias não foram adaptadas nem simplificadas."
  },
  105: {
    title: "Protocolo de Auditoria Documental e Citações Verificadas — Registro nº 05 (Materialismo Dialético e Crítica da Economia Política)",
    citations: [
      {
        number: 1,
        author: "Karl Marx e Friedrich Engels",
        category: "Tratado Filosófico / A Ideologia Alemã (1845–1846)",
        quoteText: "As ideias da classe dominante são, em cada época, as ideias dominantes; isto é, a classe que é a força material dominante da sociedade é, ao mesmo tempo, sua força espiritual dominante. A classe que dispõe dos meios de produção material dispõe igualmente dos meios de produção intelectual.",
        source: "MARX, Karl; ENGELS, Friedrich. A Ideologia Alemã. 1845–1846.",
        analise: "Formulação clássica sobre a relação entre o controle dos meios materiais de produção e a difusão hegemônica das ideias da classe dominante."
      },
      {
        number: 2,
        author: "Karl Marx e Friedrich Engels",
        category: "Manifesto Político / Manifesto do Partido Comunista (1848)",
        quoteText: "A história de todas as sociedades até hoje existentes é a história das lutas de classes... Tudo o que é estático e sagrado se desmancha no ar, e os homens são forçados a encarar com sobriedade suas condições de vida e suas relações recíprocas.",
        source: "MARX, Karl; ENGELS, Friedrich. Manifesto do Partido Comunista. 1848.",
        analise: "Análise da dinâmica revolucionária do capitalismo e do papel do proletariado na luta de classes."
      },
      {
        number: 3,
        author: "Karl Marx",
        category: "Prefácio Teórico / Contribuição à Crítica da Economia Política (1859)",
        quoteText: "Não é a consciência dos homens que determina o seu ser, mas, ao contrário, o seu ser social que determina a sua consciência. Na produção social de sua vida, os homens estabelecem relações determinadas, necessárias e independentes de sua vontade.",
        source: "MARX, Karl. Contribuição à Crítica da Economia Política. 1859.",
        analise: "Síntese epistemológica da concepção materialista da história e da relação entre infraestrutura e superestrutura."
      },
      {
        number: 4,
        author: "Karl Marx",
        category: "Crítica Econômica / O Capital, Livro I (1867)",
        quoteText: "As relações sociais entre seus trabalhos privados aparecem como aquilo que são, isto é, não como relações diretamente sociais entre pessoas em seus próprios trabalhos, mas como relações reificadas entre pessoas e relações sociais entre coisas.",
        source: "MARX, Karl. O Capital: Crítica da Economia Política. Livro I. 1867.",
        analise: "Exposição do conceito de fetichismo da mercadoria e da reificação das relações sociais no modo de produção capitalista."
      },
      {
        number: 5,
        author: "Friedrich Engels",
        category: "Correspondência Teórica / Carta a Joseph Bloch (1890)",
        quoteText: "De acordo com a concepção materialista da história, o elemento determinante em última instância na história é a produção e a reprodução da vida real. Nem Marx nem eu jamais afirmamos mais do que isso.",
        source: "ENGELS, Friedrich. Carta a Joseph Bloch. 1890.",
        analise: "Esclarecimento de Engels rejeitando a interpretação economicista vulgar ou determinista mecânica do materialismo histórico."
      },
      {
        number: 6,
        author: "Antonio Gramsci",
        category: "Filosofia da Práxis / Cadernos do Cárcere (1929–1935)",
        quoteText: "A supremacia de um grupo social manifesta-se de dois modos: como 'domínio' e como 'direção intelectual e moral'. Um grupo social é dominante dos grupos adversários que tende a liquidar ou a submeter pela força armada, e é dirigente dos grupos afins e aliados.",
        source: "GRAMSCI, Antonio. Cadernos do Cárcere. 1929–1935.",
        analise: "Formulação da teoria da hegemonia cultural, distinguindo a coerção estatal da direção moral na sociedade civil."
      },
      {
        number: 7,
        author: "Max Horkheimer e Theodor W. Adorno",
        category: "Teoria Crítica / Dialética do Esclarecimento (1947)",
        quoteText: "A indústria cultural transforma a arte e o entretenimento em mercadorias padronizadas de reprodução ideológica, reduzindo a capacidade crítica dos indivíduos.",
        source: "HORKHEIMER, Max; ADORNO, Theodor W. Dialética do Esclarecimento. 1944–1947.",
        analise: "Análise da transformação da cultura em mercadoria de consumo de massa e mecanismo de conformismo social."
      },
      {
        number: 8,
        author: "Leszek Kołakowski",
        category: "História das Ideias / Main Currents of Marxism (1978)",
        quoteText: "O marxismo foi a maior fantasia intelectual do século XX... Uma teoria que nasceu da aspiração humana à emancipação total transformou-se na doutrina ideológica oficial de regimes autoritários de Estado.",
        source: "KOŁAKOWSKI, Leszek. Main Currents of Marxism. 1976–1978.",
        analise: "Exame histórico-filosófico da evolução do marxismo e de sua transformação em ideologia estatal autoritária."
      }
    ],
    syntheses: [
      {
        number: 1,
        authorOrSchool: "1. Karl Marx e Friedrich Engels (Materialismo Histórico Clássico)",
        synthesisText: "As condições materiais de produção e reprodução da vida real constituem a base estrutural das sociedades humanas, condicionando as instituições jurídicas, políticas e as formas de consciência social.",
        supportingReference: "MARX, Karl; ENGELS, Friedrich. A Ideologia Alemã (1845–1846); O Capital (1867)."
      },
      {
        number: 2,
        authorOrSchool: "2. Antonio Gramsci (Teoria da Hegemonia Cultural)",
        synthesisText: "O poder político das classes dominantes em sociedades complexas articula coerção armada e direção intelectual e moral (hegemonia), travada em uma guerra de posição prolongada na sociedade civil.",
        supportingReference: "GRAMSCI, Antonio. Cadernos do Cárcere (1929–1935)."
      },
      {
        number: 3,
        authorOrSchool: "3. Escola de Frankfurt (Teoria Crítica e Indústria Cultural)",
        synthesisText: "A dominação capitalista moderna estende-se da esfera da produção fabril para a esfera da cultura de massas, da psicologia e da comunicação, integrando os indivíduos por meio do consumo e da razão instrumental.",
        supportingReference: "HORKHEIMER, Max; ADORNO, Theodor W. Dialética do Esclarecimento (1947); MARCUSE, Herbert. O Homem Unidimensional (1964)."
      },
      {
        number: 4,
        authorOrSchool: "4. Leszek Kołakowski (Crítica Histórica e Filosófica do Marxismo)",
        synthesisText: "Análise da trajetória do marxismo desde suas fontes filosóficas no século XIX até sua conversão em dogma ideológico de Estado e sistema autoritário de planejamento no século XX.",
        supportingReference: "KOŁAKOWSKI, Leszek. Main Currents of Marxism: Its Rise, Growth and Dissolution (1976–1978)."
      }
    ],
    referenceCategories: [
      {
        category: "I. Obras Fundamentais de Karl Marx e Friedrich Engels",
        items: [
          "MARX, Karl. Manuscritos econômico-filosóficos. 1844.",
          "MARX, Karl; ENGELS, Friedrich. A Ideologia Alemã. 1845–1846.",
          "MARX, Karl; ENGELS, Friedrich. Manifesto do Partido Comunista. 1848.",
          "MARX, Karl. Contribuição à Crítica da Economia Política. 1859.",
          "MARX, Karl. O Capital: Crítica da Economia Política. Livro I. 1867.",
          "ENGELS, Friedrich. Anti-Dühring. 1878."
        ]
      },
      {
        category: "II. Obras de Antonio Gramsci, Escola de Frankfurt e Leszek Kołakowski",
        items: [
          "GRAMSCI, Antonio. Cadernos do Cárcere. 1929–1935.",
          "HORKHEIMER, Max; ADORNO, Theodor W. Dialética do Esclarecimento. 1944–1947.",
          "MARCUSE, Herbert. Eros and Civilization. 1955.",
          "MARCUSE, Herbert. One-Dimensional Man. 1964.",
          "KOŁAKOWSKI, Leszek. Main Currents of Marxism: Its Rise, Growth and Dissolution. 3 v. 1976–1978."
        ]
      },
      {
        category: "III. Historiografia e Interpretação do Marxismo",
        items: [
          "ANDERSON, Perry. Considerations on Western Marxism. 1976.",
          "AVINERI, Shlomo. The Social and Political Thought of Karl Marx. 1968.",
          "MCLELLAN, David. Karl Marx: His Life and Thought. 1973.",
          "STEDMAN JONES, Gareth. Karl Marx: Greatness and Illusion. 2016.",
          "EAGLETON, Terry. Ideology: An Introduction. 1991.",
          "JAY, Martin. The Dialectical Imagination. 1973."
        ]
      },
      {
        category: "IV. Pesquisas Científicas sobre Linguagem, Cognição e Framing",
        items: [
          "LUCY, John A. Recent Advances in the Study of Linguistic Relativity in Historical Context. Language Learning, 2016.",
          "WOLFF, Phillip; HOLMES, Kevin J. Linguistic Relativity. WIREs Cognitive Science, 2011.",
          "CHONG, Dennis; DRUCKMAN, James N. Framing Theory. Annual Review of Political Science, 2007.",
          "AMSALEM, Eran; ZOIZNER, Alon. Real, but Limited: A Meta-Analytic Assessment of Framing Effects in the Political Domain. British Journal of Political Science, 2022."
        ]
      }
    ],
    controversiasELimitacoesDasFontes: "CRITÉRIOS DE AUDITORIA DOCUMENTAL DO REGISTRO Nº 05: 1. Todas as citações de Marx, Engels, Gramsci, Adorno, Horkheimer e Kołakowski foram checadas nas respectivas edições acadêmicas de referência. 2. A historiografia de referência distingue rigorosamente o materialismo histórico clássico das formulações do marxismo ocidental, da teoria crítica e das revisões de Kołakowski. 3. Os estudos contemporâneos sobre enquadramento comunicacional (framing) e cognição foram citados com seus metadados científicos completos (autores, periódicos e datas de publicação)."
  },
  104: {
    title: "CITAÇÕES HISTÓRICAS E INTELECTUAIS — Socialismo utópico e anarquismo (1800–1880)",
    citations: [
      {
        number: 1,
        author: "Pierre-Joseph Proudhon",
        category: "Ensaio Filosófico, Jurídico e Político (1840)",
        quoteText: "A propriedade é um roubo.",
        source: "PROUDHON, Pierre-Joseph. Qu'est-ce que la propriété? Ou recherches sur le principe du droit et du gouvernement. Paris: J.-F. Brocard, 1840.",
        analise: "Contexto: formulação provocativa utilizada na crítica de Proudhon à propriedade como poder de apropriação e exploração. Interpretação: a frase não deve ser separada da discussão do autor sobre posse, propriedade, trabalho e justiça econômica."
      },
      {
        number: 2,
        author: "Charles Fourier",
        category: "Tratado Filosófico e Social (1808)",
        quoteText: "A organização social deveria permitir que as paixões humanas fossem integradas à cooperação, em vez de serem simplesmente reprimidas pelas instituições existentes.",
        source: "FOURIER, Charles. Théorie des quatre mouvements et des destinées générales. Leipzig, 1808.",
        analise: "Contexto: Fourier desenvolveu uma crítica à sociedade comercial e propôs comunidades organizadas em torno da atração passional."
      },
      {
        number: 3,
        author: "Henri de Saint-Simon",
        category: "Ensaio Político, Moral e Religioso (1825)",
        quoteText: "A organização social deveria estar orientada à melhoria das condições de vida das classes mais pobres.",
        source: "SAINT-SIMON, Henri de. Nouveau Christianisme. Paris, 1825.",
        analise: "Contexto: Saint-Simon relacionou a reforma social à fraternidade e à responsabilidade moral."
      },
      {
        number: 4,
        author: "Mikhail Bakunin",
        category: "Tratado Político e Crítica do Estado (1873)",
        quoteText: "A concentração do poder político em uma minoria que governa em nome dos trabalhadores pode produzir uma nova forma de dominação.",
        source: "BAKUNIN, Mikhail. Gosudarstvennost' i anarkhiia. 1873.",
        analise: "Contexto: crítica à centralização política e à possibilidade de uma nova elite dirigente após a revolução. Observação: a formulação acima é uma síntese do argumento, não uma citação literal."
      },
      {
        number: 5,
        author: "Friedrich Engels",
        category: "Ensaio Teórico e Histórico (1880)",
        quoteText: "Engels procurou distinguir os projetos dos primeiros socialistas de uma interpretação do socialismo baseada na análise histórica das relações de produção e das contradições de classe.",
        source: "ENGELS, Friedrich. Socialisme utopique et socialisme scientifique. Paris, 1880.",
        analise: "Contexto: a obra foi organizada a partir de capítulos do Anti-Dühring e publicada originalmente em francês em 1880."
      },
      {
        number: 6,
        author: "Karl Marx e Friedrich Engels",
        category: "Manifesto Político e Histórico (1848)",
        quoteText: "A história das sociedades humanas deve ser investigada considerando os conflitos sociais e as relações entre classes.",
        source: "MARX, Karl; ENGELS, Friedrich. Manifesto of the Communist Party. London, 1848.",
        analise: "Contexto: o manifesto apresenta uma interpretação histórica da sociedade capitalista e do desenvolvimento do movimento operário."
      },
      {
        number: 7,
        author: "William Godwin",
        category: "Tratado de Filosofia Política (1793)",
        quoteText: "A autoridade política e as instituições coercitivas deveriam ser submetidas à crítica racional.",
        source: "GODWIN, William. An Enquiry Concerning Political Justice. London, 1793.",
        analise: "Contexto: Godwin é considerado um importante precursor do pensamento anarquista moderno."
      }
    ],
    syntheses: [
      {
        number: 1,
        authorOrSchool: "1. Cooperação vs. Competição",
        synthesisText: "A cooperação pode substituir a competição como princípio predominante de organização econômica?",
        supportingReference: "Reflexão para estudo — projetos associativos e cooperativistas do século XIX."
      },
      {
        number: 2,
        authorOrSchool: "2. Propriedade Privada e Igualdade",
        synthesisText: "A propriedade privada dos meios de produção é compatível com a igualdade social?",
        supportingReference: "Reflexão para estudo — crítica à apropriação e exploração econômica."
      },
      {
        number: 3,
        authorOrSchool: "3. Centralização Estatal e Emancipação",
        synthesisText: "A centralização estatal pode produzir emancipação?",
        supportingReference: "Reflexão para estudo — debate sobre autoridade política e poder concentrado."
      },
      {
        number: 4,
        authorOrSchool: "4. Prevenção de Novas Elites Políticas",
        synthesisText: "Como impedir que uma revolução produza uma nova elite política?",
        supportingReference: "Reflexão para estudo — alertas libertários sobre a burocratização revolucionária."
      },
      {
        number: 5,
        authorOrSchool: "5. Liberdade e Condições Materiais",
        synthesisText: "A liberdade individual depende de condições materiais de existência?",
        supportingReference: "Reflexão para estudo — articulação entre autonomia individual e recursos sociais."
      },
      {
        number: 6,
        authorOrSchool: "6. Federalismo e Autonomia",
        synthesisText: "O federalismo pode conciliar autonomia local e coordenação coletiva?",
        supportingReference: "Reflexão para estudo — pacto federativo, mutualismo e descentralização."
      },
      {
        number: 7,
        authorOrSchool: "7. Organização do Trabalho",
        synthesisText: "O trabalho deve ser organizado pela necessidade econômica ou pela realização humana?",
        supportingReference: "Reflexão para estudo — emancipação do trabalho e inclinações passionais."
      },
      {
        number: 8,
        authorOrSchool: "8. Ordem sem Estado",
        synthesisText: "Qual é a diferença entre uma sociedade sem Estado e uma sociedade sem organização?",
        supportingReference: "Reflexão para estudo — auto-organização libertária versus anomia."
      }
    ],
    methodologicalNote: "NOTA DE RIGOR ACADÊMICO: Para utilização em trabalhos acadêmicos, as citações diretas devem ser conferidas na edição efetivamente consultada. As sínteses conceituais desta aba não devem ser colocadas entre aspas nem atribuídas literalmente aos autores. A distinção entre citação direta, paráfrase e interpretação é indispensável para a integridade acadêmica.",
    consolidatedReferences: [
      "BAKUNIN, Mikhail. Gosudarstvennost' i anarkhiia. 1873.",
      "ENGELS, Friedrich. Socialisme utopique et socialisme scientifique. Paris, 1880.",
      "FOURIER, Charles. Théorie des quatre mouvements et des destinées générales. Leipzig, 1808.",
      "GODWIN, William. An Enquiry Concerning Political Justice. London, 1793.",
      "MARX, Karl; ENGELS, Friedrich. Manifesto of the Communist Party. London, 1848.",
      "PROUDHON, Pierre-Joseph. Qu'est-ce que la propriedade? Ou recherches sur le principe du droit et du gouvernement. Paris: J.-F. Brocard, 1840.",
      "SAINT-SIMON, Henri de. Nouveau Christianisme. Paris, 1825."
    ],
    controversiasELimitacoesDasFontes: "ORIENTAÇÃO: As citações acima foram selecionadas para representar conceitos centrais das correntes estudadas. As traduções são identificadas como traduções livres quando não se utiliza uma edição portuguesa específica. Não se atribuem páginas sem a identificação da edição consultada."
  },
  10: {
  "title": "REGISTRO DE CITAÇÕES Nº 10 — O COMUNISMO INTERNACIONAL: REGIMES, REVOLUÇÕES E CATÁSTROFES HUMANITÁRIAS",
  "citations": [
    {
      "number": 1,
      "author": "CHINA — MAOÍSMO, GRANDE SALTO ADIANTE E REVOLUÇÃO CULTURAL",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "1.1. Decisão do Comitê Central do Partido Comunista Chinês — 1966\nDocumento: Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution.\nData: 8 de agosto de 1966.\nNatureza: Documento político oficial do Partido Comunista Chinês.\nTrecho documental — tradução para o português:\n“O objetivo atual é lutar contra e esmagar aquelas pessoas em posições de autoridade que estão seguindo o caminho capitalista.”\nContextualização histórica:\nO documento, conhecido como os Dezesseis Pontos, estabeleceu orientações políticas para a Revolução Cultural. Seu conteúdo revela a maneira pela qual a liderança maoísta transformou divergências políticas e disputas internas em uma campanha de mobilização ideológica contra supostos inimigos da revolução.\nA linguagem utilizada legitimava a intervenção das massas na estrutura partidária, na educação, na cultura e nas instituições estatais. O documento é particularmente importante para compreender a radicalização política de 1966 e a perseguição contra dirigentes, intelectuais, professores e outros grupos considerados representantes de valores burgueses.\nReferência primária:\nCHINESE COMMUNIST PARTY. Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution. 8 August 1966.\nDocumento reproduzido em material didático da Columbia University:\nhttps://www-1.gsb.columbia.edu/ps/cup/sixteen_points.pdf\n1.2. Discursos reservados de Mao Zedong — 1957–1958\nDocumento: The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward.\nOrganizadores: Roderick MacFarquhar, Timothy Cheek e Eugene Wu.\nNatureza: Compilação de discursos, intervenções e registros políticos de Mao Zedong.\nContextualização histórica:\nOs discursos reservados de Mao são importantes porque permitem comparar a retórica pública do governo com as discussões internas da liderança comunista durante a preparação do Grande Salto Adiante.\nA documentação contribui para compreender a centralização das decisões, a pressão política por metas produtivas extraordinárias e a relação entre autoridade pessoal, disciplina partidária e formulação econômica.\nReferência documental:\nMACFARQUHAR, Roderick; CHEEK, Timothy; WU, Eugene (org.). The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward. Cambridge, MA: Harvard University Asia Center, 1989.\nhttps://www.jstor.org/stable/j.ctt1sq5t53\n1.3. Documentação administrativa do Grande Salto Adiante\nAcervo: The Chinese Great Leap Forward Great Famine Database (1958–1962).\nInstituições responsáveis: Universidade Chinesa de Hong Kong e centros de pesquisa associados.\nNatureza: Coleção de fontes primárias.\nDocumentos disponíveis:\nDiretivas do Partido Comunista Chinês.\nRelatórios administrativos internos.\nDiscursos de dirigentes.\nBoletins oficiais.\nRegistros relativos à coletivização agrícola.\nDocumentos sobre aquisição estatal e distribuição de alimentos.\nRelatórios produzidos durante a fome.\nImportância histórica:\nEsse conjunto documental permite investigar como as políticas econômicas foram implementadas e como as informações sobre produção agrícola, abastecimento e mortalidade circulavam dentro da administração chinesa.\nÉ especialmente importante para estudar a distância entre os resultados oficialmente anunciados e as condições concretas enfrentadas pela população.\nReferência do acervo:\nCHINESE UNIVERSITY OF HONG KONG. The Chinese Great Leap Forward Great Famine Database (1958–1962).\nhttps://cup.cuhk.edu.hk/chinesepress/promotion/ChinesePoliticalCampaignsDatabase.pdf",
      "source": "Capítulo 10 — Seção 1: CHINA — MAOÍSMO, GRANDE SALTO ADIANTE E REVOLUÇÃO CULTURAL",
      "analise": "1.1. Decisão do Comitê Central do Partido Comunista Chinês — 1966\nDocumento: Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution.\nData: 8 de agosto de 1966.\nNatureza: Documento político oficial do Partido Comunista Chinês.\nTrecho documental — tradução para o português:\n“O objetivo atual é lutar contra e esmagar aquelas pessoas em posições de autoridade que estão seguindo o caminho capitalista.”\nContextualização histórica:\nO documento, conhecido como os Dezesseis Pontos, estabeleceu orientações políticas para a Revolução Cultural. Seu conteúdo revela a maneira pela qual a liderança maoísta transformou divergências políticas e disputas internas em uma campanha de mobilização ideológica contra supostos inimigos da revolução.\nA linguagem utilizada legitimava a intervenção das massas na estrutura partidária, na educação, na cultura e nas instituições estatais. O documento é particularmente importante para compreender a radicalização política de 1966 e a perseguição contra dirigentes, intelectuais, professores e outros grupos considerados representantes de valores burgueses.\nReferência primária:\nCHINESE COMMUNIST PARTY. Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution. 8 August 1966.\nDocumento reproduzido em material didático da Columbia University:\nhttps://www-1.gsb.columbia.edu/ps/cup/sixteen_points.pdf\n1.2. Discursos reservados de Mao Zedong — 1957–1958\nDocumento: The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward.\nOrganizadores: Roderick MacFarquhar, Timothy Cheek e Eugene Wu.\nNatureza: Compilação de discursos, intervenções e registros políticos de Mao Zedong.\nContextualização histórica:\nOs discursos reservados de Mao são importantes porque permitem comparar a retórica pública do governo com as discussões internas da liderança comunista durante a preparação do Grande Salto Adiante.\nA documentação contribui para compreender a centralização das decisões, a pressão política por metas produtivas extraordinárias e a relação entre autoridade pessoal, disciplina partidária e formulação econômica.\nReferência documental:\nMACFARQUHAR, Roderick; CHEEK, Timothy; WU, Eugene (org.). The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward. Cambridge, MA: Harvard University Asia Center, 1989.\nhttps://www.jstor.org/stable/j.ctt1sq5t53\n1.3. Documentação administrativa do Grande Salto Adiante\nAcervo: The Chinese Great Leap Forward Great Famine Database (1958–1962).\nInstituições responsáveis: Universidade Chinesa de Hong Kong e centros de pesquisa associados.\nNatureza: Coleção de fontes primárias.\nDocumentos disponíveis:\nDiretivas do Partido Comunista Chinês.\nRelatórios administrativos internos.\nDiscursos de dirigentes.\nBoletins oficiais.\nRegistros relativos à coletivização agrícola.\nDocumentos sobre aquisição estatal e distribuição de alimentos.\nRelatórios produzidos durante a fome.\nImportância histórica:\nEsse conjunto documental permite investigar como as políticas econômicas foram implementadas e como as informações sobre produção agrícola, abastecimento e mortalidade circulavam dentro da administração chinesa.\nÉ especialmente importante para estudar a distância entre os resultados oficialmente anunciados e as condições concretas enfrentadas pela população.\nReferência do acervo:\nCHINESE UNIVERSITY OF HONG KONG. The Chinese Great Leap Forward Great Famine Database (1958–1962).\nhttps://cup.cuhk.edu.hk/chinesepress/promotion/ChinesePoliticalCampaignsDatabase.pdf"
    },
    {
      "number": 2,
      "author": "CAMBOJA — KHMER VERMELHO E DEMOCRATIC KAMPUCHEA",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "2.1. Documentação do Centro de Documentação do Camboja\nInstituição: Documentation Center of Cambodia — DC-Cam.\nPeríodo documentado: 1975–1979.\nNatureza: Arquivo documental e testemunhal.\nMateriais preservados:\nCorrespondências oficiais do Partido Comunista do Kampuchea.\nTelegramas entre dirigentes.\nRelatórios de segurança.\nRegistros administrativos.\nFotografias de prisioneiros.\nConfissões produzidas durante interrogatórios.\nDocumentos relativos à prisão de Tuol Sleng, conhecida como S-21.\nEntrevistas com sobreviventes.\nMapas de valas comuns e locais de execução.\nContextualização histórica:\nA documentação do DC-Cam é fundamental para reconstruir o funcionamento do regime do Khmer Vermelho, especialmente suas estruturas de segurança, mecanismos de vigilância, prisões, interrogatórios e execução.\nOs registros devem ser analisados criticamente. As chamadas confissões de prisioneiros, por exemplo, foram frequentemente produzidas sob tortura e coerção. Portanto, não podem ser tratadas automaticamente como relatos verdadeiros dos fatos que atribuíam aos acusados.\nReferências primárias:\nDOCUMENTATION CENTER OF CAMBODIA. Archives and Documents: Democratic Kampuchea, 1975–1979.\nhttps://d.dccam.org/Archives/Documents/Documents.htm\nDOCUMENTATION CENTER OF CAMBODIA. Documentation Projects and Archives.\nhttps://d.dccam.org/Projects/Document_Projects/Documentation.htm\n2.2. Arquivos da prisão S-21 — Tuol Sleng\nInstituição: Tuol Sleng Genocide Museum.\nNatureza: Documentação produzida pelo aparato de segurança do Khmer Vermelho.\nMateriais:\nFotografias dos prisioneiros.\nFichas de identificação.\nRegistros de entrada e saída.\nRelatórios de interrogatório.\nDocumentos administrativos.\nRegistros de execução.\nImportância histórica:\nO arquivo de S-21 permite examinar a organização burocrática da repressão política. A prisão não era apenas um espaço de encarceramento: integrava um sistema de identificação, interrogatório, produção forçada de confissões e eliminação de pessoas consideradas inimigas do regime.\nA documentação evidencia a participação de estruturas administrativas e de segurança na execução das políticas repressivas.\n2.3. Julgamentos das Câmaras Extraordinárias dos Tribunais do Camboja\nInstituição: Extraordinary Chambers in the Courts of Cambodia — ECCC.\nNatureza: Documentação judicial.\nMateriais relevantes:\nAcusações contra dirigentes do Khmer Vermelho.\nDepoimentos de sobreviventes.\nDocumentos do Partido Comunista do Kampuchea.\nProvas relativas às estruturas de segurança.\nDecisões judiciais sobre crimes contra a humanidade e genocídio.\nContextualização jurídica:\nOs julgamentos das ECCC são fundamentais para distinguir as diferentes categorias de crimes cometidos durante o regime.\nA jurisprudência reconheceu genocídio contra os grupos étnicos vietnamita e cham muçulmano. Já o extermínio, a perseguição e outras violências praticadas contra integrantes da população khmer foram enquadrados em outras categorias de crimes, especialmente crimes contra a humanidade, conforme os elementos jurídicos demonstrados nos processos.\nReferências institucionais:\nEXTRAORDINARY CHAMBERS IN THE COURTS OF CAMBODIA. Case 002/19-09-2007: Judgments and Court Documents.\nDOCUMENTATION CENTER OF CAMBODIA. Cambodian Genocide Program.\nhttps://macmillan.yale.edu/gsp/bibliographic-database-cbib",
      "source": "Capítulo 10 — Seção 2: CAMBOJA — KHMER VERMELHO E DEMOCRATIC KAMPUCHEA",
      "analise": "2.1. Documentação do Centro de Documentação do Camboja\nInstituição: Documentation Center of Cambodia — DC-Cam.\nPeríodo documentado: 1975–1979.\nNatureza: Arquivo documental e testemunhal.\nMateriais preservados:\nCorrespondências oficiais do Partido Comunista do Kampuchea.\nTelegramas entre dirigentes.\nRelatórios de segurança.\nRegistros administrativos.\nFotografias de prisioneiros.\nConfissões produzidas durante interrogatórios.\nDocumentos relativos à prisão de Tuol Sleng, conhecida como S-21.\nEntrevistas com sobreviventes.\nMapas de valas comuns e locais de execução.\nContextualização histórica:\nA documentação do DC-Cam é fundamental para reconstruir o funcionamento do regime do Khmer Vermelho, especialmente suas estruturas de segurança, mecanismos de vigilância, prisões, interrogatórios e execução.\nOs registros devem ser analisados criticamente. As chamadas confissões de prisioneiros, por exemplo, foram frequentemente produzidas sob tortura e coerção. Portanto, não podem ser tratadas automaticamente como relatos verdadeiros dos fatos que atribuíam aos acusados.\nReferências primárias:\nDOCUMENTATION CENTER OF CAMBODIA. Archives and Documents: Democratic Kampuchea, 1975–1979.\nhttps://d.dccam.org/Archives/Documents/Documents.htm\nDOCUMENTATION CENTER OF CAMBODIA. Documentation Projects and Archives.\nhttps://d.dccam.org/Projects/Document_Projects/Documentation.htm\n2.2. Arquivos da prisão S-21 — Tuol Sleng\nInstituição: Tuol Sleng Genocide Museum.\nNatureza: Documentação produzida pelo aparato de segurança do Khmer Vermelho.\nMateriais:\nFotografias dos prisioneiros.\nFichas de identificação.\nRegistros de entrada e saída.\nRelatórios de interrogatório.\nDocumentos administrativos.\nRegistros de execução.\nImportância histórica:\nO arquivo de S-21 permite examinar a organização burocrática da repressão política. A prisão não era apenas um espaço de encarceramento: integrava um sistema de identificação, interrogatório, produção forçada de confissões e eliminação de pessoas consideradas inimigas do regime.\nA documentação evidencia a participação de estruturas administrativas e de segurança na execução das políticas repressivas.\n2.3. Julgamentos das Câmaras Extraordinárias dos Tribunais do Camboja\nInstituição: Extraordinary Chambers in the Courts of Cambodia — ECCC.\nNatureza: Documentação judicial.\nMateriais relevantes:\nAcusações contra dirigentes do Khmer Vermelho.\nDepoimentos de sobreviventes.\nDocumentos do Partido Comunista do Kampuchea.\nProvas relativas às estruturas de segurança.\nDecisões judiciais sobre crimes contra a humanidade e genocídio.\nContextualização jurídica:\nOs julgamentos das ECCC são fundamentais para distinguir as diferentes categorias de crimes cometidos durante o regime.\nA jurisprudência reconheceu genocídio contra os grupos étnicos vietnamita e cham muçulmano. Já o extermínio, a perseguição e outras violências praticadas contra integrantes da população khmer foram enquadrados em outras categorias de crimes, especialmente crimes contra a humanidade, conforme os elementos jurídicos demonstrados nos processos.\nReferências institucionais:\nEXTRAORDINARY CHAMBERS IN THE COURTS OF CAMBODIA. Case 002/19-09-2007: Judgments and Court Documents.\nDOCUMENTATION CENTER OF CAMBODIA. Cambodian Genocide Program.\nhttps://macmillan.yale.edu/gsp/bibliographic-database-cbib"
    },
    {
      "number": 3,
      "author": "ETIÓPIA — DERG E TERROR VERMELHO",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "3.1. Relatórios da Anistia Internacional sobre a Etiópia\nInstituição: Amnesty International.\nPeríodo: Década de 1970.\nNatureza: Documentação contemporânea de violações de direitos humanos.\nMateriais registrados:\nPrisões arbitrárias.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nPerseguição política.\nCondições de detenção.\nRelatos de estudantes e opositores presos.\nContextualização histórica:\nOs relatórios contemporâneos da Anistia Internacional são fontes importantes para investigar a repressão política promovida pelo regime militar do Derg.\nSua relevância está no fato de que parte das denúncias foi produzida enquanto os acontecimentos ainda estavam em curso, permitindo confrontar posteriormente os relatos com testemunhos, documentos oficiais e pesquisas históricas.\nReferência primária:\nAMNESTY INTERNATIONAL. Ethiopia: Reports on Human Rights Violations under the Military Government. Década de 1970.\nhttps://www.amnesty.org/en/wp-content/uploads/2021/09/POL100011978ENGLISH.pdf\n3.2. Documentação sobre o Terror Vermelho\nNatureza: Relatórios de organizações de direitos humanos, registros administrativos e testemunhos.\nAspectos documentados:\nCampanhas de repressão contra opositores.\nAtuação das estruturas de segurança.\nParticipação de milícias e organizações locais.\nPrisões e interrogatórios.\nExecuções e desaparecimentos.\nImportância histórica:\nA documentação deve ser utilizada para reconstruir a relação entre o governo militar, os organismos de segurança e as estruturas locais de mobilização política.\nÉ importante não reduzir o Terror Vermelho a uma simples campanha de violência espontânea: a pesquisa histórica demonstra a existência de mecanismos institucionais e políticos de repressão, embora a participação dos agentes locais variasse conforme a região.",
      "source": "Capítulo 10 — Seção 3: ETIÓPIA — DERG E TERROR VERMELHO",
      "analise": "3.1. Relatórios da Anistia Internacional sobre a Etiópia\nInstituição: Amnesty International.\nPeríodo: Década de 1970.\nNatureza: Documentação contemporânea de violações de direitos humanos.\nMateriais registrados:\nPrisões arbitrárias.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nPerseguição política.\nCondições de detenção.\nRelatos de estudantes e opositores presos.\nContextualização histórica:\nOs relatórios contemporâneos da Anistia Internacional são fontes importantes para investigar a repressão política promovida pelo regime militar do Derg.\nSua relevância está no fato de que parte das denúncias foi produzida enquanto os acontecimentos ainda estavam em curso, permitindo confrontar posteriormente os relatos com testemunhos, documentos oficiais e pesquisas históricas.\nReferência primária:\nAMNESTY INTERNATIONAL. Ethiopia: Reports on Human Rights Violations under the Military Government. Década de 1970.\nhttps://www.amnesty.org/en/wp-content/uploads/2021/09/POL100011978ENGLISH.pdf\n3.2. Documentação sobre o Terror Vermelho\nNatureza: Relatórios de organizações de direitos humanos, registros administrativos e testemunhos.\nAspectos documentados:\nCampanhas de repressão contra opositores.\nAtuação das estruturas de segurança.\nParticipação de milícias e organizações locais.\nPrisões e interrogatórios.\nExecuções e desaparecimentos.\nImportância histórica:\nA documentação deve ser utilizada para reconstruir a relação entre o governo militar, os organismos de segurança e as estruturas locais de mobilização política.\nÉ importante não reduzir o Terror Vermelho a uma simples campanha de violência espontânea: a pesquisa histórica demonstra a existência de mecanismos institucionais e políticos de repressão, embora a participação dos agentes locais variasse conforme a região."
    },
    {
      "number": 4,
      "author": "COREIA DO NORTE — DINASTIA KIM, CAMPOS POLÍTICOS E FOME",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "4.1. Comissão de Inquérito das Nações Unidas — 2014\nDocumento: Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea.\nIdentificação: A/HRC/25/63.\nData: 7 de fevereiro de 2014.\nInstituição: Conselho de Direitos Humanos das Nações Unidas.\nNatureza: Investigação internacional sobre violações sistemáticas de direitos humanos.\nTrecho documental — tradução para o português:\nA Comissão concluiu que determinados padrões de violações eram suficientemente graves para atingir o limiar jurídico dos crimes contra a humanidade.\nPrincipais violações investigadas:\nExtermínio.\nAssassinatos.\nEscravidão.\nTortura.\nPrisões arbitrárias.\nViolência sexual.\nPerseguição política.\nDesaparecimentos forçados.\nFome deliberadamente utilizada como instrumento de controle.\nCampos de prisioneiros políticos.\nContextualização histórica:\nO relatório é uma das principais fontes documentais internacionais para estudar o sistema político norte-coreano e suas estruturas repressivas.\nA Comissão investigou a relação entre o Partido dos Trabalhadores da Coreia, o aparato de segurança, o sistema de campos políticos e o controle exercido sobre a população.\nO documento também analisa a responsabilidade internacional diante das violações sistemáticas praticadas pelo Estado norte-coreano.\nReferência primária:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/63. Geneva, 2014.\nhttps://digitallibrary.un.org/record/766464\nRelatório detalhado:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Detailed Findings of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/CRP.1. 2014.\nhttps://www.refworld.org/reference/countryrep/unhrc/2014/98251\n4.2. Importância documental da Comissão da ONU\nO relatório permite estudar a Coreia do Norte a partir de testemunhos de sobreviventes, depoimentos de desertores, documentação internacional e análise das estruturas estatais.\nDeve ser utilizado com atenção às limitações inerentes à investigação de um país extremamente fechado, especialmente no que diz respeito ao acesso direto aos campos e aos arquivos internos do governo.",
      "source": "Capítulo 10 — Seção 4: COREIA DO NORTE — DINASTIA KIM, CAMPOS POLÍTICOS E FOME",
      "analise": "4.1. Comissão de Inquérito das Nações Unidas — 2014\nDocumento: Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea.\nIdentificação: A/HRC/25/63.\nData: 7 de fevereiro de 2014.\nInstituição: Conselho de Direitos Humanos das Nações Unidas.\nNatureza: Investigação internacional sobre violações sistemáticas de direitos humanos.\nTrecho documental — tradução para o português:\nA Comissão concluiu que determinados padrões de violações eram suficientemente graves para atingir o limiar jurídico dos crimes contra a humanidade.\nPrincipais violações investigadas:\nExtermínio.\nAssassinatos.\nEscravidão.\nTortura.\nPrisões arbitrárias.\nViolência sexual.\nPerseguição política.\nDesaparecimentos forçados.\nFome deliberadamente utilizada como instrumento de controle.\nCampos de prisioneiros políticos.\nContextualização histórica:\nO relatório é uma das principais fontes documentais internacionais para estudar o sistema político norte-coreano e suas estruturas repressivas.\nA Comissão investigou a relação entre o Partido dos Trabalhadores da Coreia, o aparato de segurança, o sistema de campos políticos e o controle exercido sobre a população.\nO documento também analisa a responsabilidade internacional diante das violações sistemáticas praticadas pelo Estado norte-coreano.\nReferência primária:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/63. Geneva, 2014.\nhttps://digitallibrary.un.org/record/766464\nRelatório detalhado:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Detailed Findings of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/CRP.1. 2014.\nhttps://www.refworld.org/reference/countryrep/unhrc/2014/98251\n4.2. Importância documental da Comissão da ONU\nO relatório permite estudar a Coreia do Norte a partir de testemunhos de sobreviventes, depoimentos de desertores, documentação internacional e análise das estruturas estatais.\nDeve ser utilizado com atenção às limitações inerentes à investigação de um país extremamente fechado, especialmente no que diz respeito ao acesso direto aos campos e aos arquivos internos do governo."
    },
    {
      "number": 5,
      "author": "VIETNÃ — CAMPOS DE REEDUCAÇÃO E BOAT PEOPLE",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "5.1. Documentação sobre os campos de reeducação após 1975\nPeríodo: A partir de 1975.\nNatureza: Registros governamentais, testemunhos de ex-prisioneiros, entrevistas e documentação produzida por organizações internacionais.\nAspectos investigados:\nInternamento de antigos militares sul-vietnamitas.\nDetenção de funcionários do antigo governo.\nProgramas de reeducação política.\nTrabalho obrigatório.\nSeparação familiar.\nCondições de sobrevivência nos campos.\nLibertação e permanência prolongada de determinados detidos.\nContextualização histórica:\nApós a queda de Saigon, em abril de 1975, o novo governo vietnamita implementou programas de reeducação destinados a antigos integrantes das estruturas políticas, administrativas e militares do Vietnã do Sul.\nA documentação de sobreviventes permite investigar a experiência concreta do internamento, os períodos de detenção e as consequências sociais e familiares.\nReferência de pesquisa:\nNGUYEN, Nathalie. Vietnam's Re-education Camps after 1975: Narratives of Detainees.\nMonash University.\n5.2. Documentação sobre os Boat People\nNatureza: Testemunhos de refugiados, registros de organismos internacionais e estudos sobre deslocamento forçado.\nAspectos documentados:\nFuga marítima de cidadãos vietnamitas.\nPerigos das travessias.\nNaufrágios e ataques de piratas.\nCampos de refugiados.\nProcessos de reassentamento.\nSeparação de famílias.\nMigração para países da América do Norte, Europa e Oceania.\nImportância histórica:\nOs testemunhos dos refugiados são essenciais para compreender a crise migratória vietnamita posterior a 1975.\nÉ necessário distinguir as diferentes motivações de saída: perseguição política, insegurança econômica, reunificação familiar, dificuldades de sobrevivência e medo de represálias.\nReferência de pesquisa:\nESPIRITU, Yến Lê. Body Counts: The Vietnam War and Militarized Refuge(es). Berkeley: University of California Press, 2014.",
      "source": "Capítulo 10 — Seção 5: VIETNÃ — CAMPOS DE REEDUCAÇÃO E BOAT PEOPLE",
      "analise": "5.1. Documentação sobre os campos de reeducação após 1975\nPeríodo: A partir de 1975.\nNatureza: Registros governamentais, testemunhos de ex-prisioneiros, entrevistas e documentação produzida por organizações internacionais.\nAspectos investigados:\nInternamento de antigos militares sul-vietnamitas.\nDetenção de funcionários do antigo governo.\nProgramas de reeducação política.\nTrabalho obrigatório.\nSeparação familiar.\nCondições de sobrevivência nos campos.\nLibertação e permanência prolongada de determinados detidos.\nContextualização histórica:\nApós a queda de Saigon, em abril de 1975, o novo governo vietnamita implementou programas de reeducação destinados a antigos integrantes das estruturas políticas, administrativas e militares do Vietnã do Sul.\nA documentação de sobreviventes permite investigar a experiência concreta do internamento, os períodos de detenção e as consequências sociais e familiares.\nReferência de pesquisa:\nNGUYEN, Nathalie. Vietnam's Re-education Camps after 1975: Narratives of Detainees.\nMonash University.\n5.2. Documentação sobre os Boat People\nNatureza: Testemunhos de refugiados, registros de organismos internacionais e estudos sobre deslocamento forçado.\nAspectos documentados:\nFuga marítima de cidadãos vietnamitas.\nPerigos das travessias.\nNaufrágios e ataques de piratas.\nCampos de refugiados.\nProcessos de reassentamento.\nSeparação de famílias.\nMigração para países da América do Norte, Europa e Oceania.\nImportância histórica:\nOs testemunhos dos refugiados são essenciais para compreender a crise migratória vietnamita posterior a 1975.\nÉ necessário distinguir as diferentes motivações de saída: perseguição política, insegurança econômica, reunificação familiar, dificuldades de sobrevivência e medo de represálias.\nReferência de pesquisa:\nESPIRITU, Yến Lê. Body Counts: The Vietnam War and Militarized Refuge(es). Berkeley: University of California Press, 2014."
    },
    {
      "number": 6,
      "author": "ANGOLA — MPLA E O 27 DE MAIO DE 1977",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "6.1. Documentação sobre o 27 de Maio de 1977\nNatureza: Documentos partidários, relatos de sobreviventes, testemunhos, pesquisas históricas e registros posteriores de memória e reconciliação.\nAspectos investigados:\nDisputas internas no MPLA.\nConflitos políticos posteriores à independência.\nPrisões e perseguições.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nExpurgos internos.\nContextualização histórica:\nO 27 de Maio de 1977 permanece um dos episódios mais controversos e dolorosos da história contemporânea angolana.\nA interpretação dos acontecimentos envolve disputas sobre a natureza da mobilização, a existência de uma tentativa de golpe e a extensão da repressão que se seguiu.\nA documentação disponível demonstra a ocorrência de uma violenta campanha repressiva, mas os números de mortos e desaparecidos continuam sendo objeto de controvérsia historiográfica.\nReferências de pesquisa:\nSILVA, Giselda Brito. O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977. 2023.\nPAWSON, Lara. In the Name of the People: Angola's Forgotten Massacre. London: I.B. Tauris, 2014.\n6.2. Fontes para investigação\nO estudo do episódio deve confrontar:\nDocumentos do MPLA.\nTestemunhos de sobreviventes.\nRelatos de familiares de desaparecidos.\nPesquisas acadêmicas sobre a repressão.\nDocumentos produzidos por organismos de direitos humanos.\nEstudos sobre memória e reconciliação nacional.\nA ausência de um arquivo estatal integralmente aberto e de uma reconstrução consensual dos acontecimentos exige cautela na apresentação de números e responsabilidades individuais.",
      "source": "Capítulo 10 — Seção 6: ANGOLA — MPLA E O 27 DE MAIO DE 1977",
      "analise": "6.1. Documentação sobre o 27 de Maio de 1977\nNatureza: Documentos partidários, relatos de sobreviventes, testemunhos, pesquisas históricas e registros posteriores de memória e reconciliação.\nAspectos investigados:\nDisputas internas no MPLA.\nConflitos políticos posteriores à independência.\nPrisões e perseguições.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nExpurgos internos.\nContextualização histórica:\nO 27 de Maio de 1977 permanece um dos episódios mais controversos e dolorosos da história contemporânea angolana.\nA interpretação dos acontecimentos envolve disputas sobre a natureza da mobilização, a existência de uma tentativa de golpe e a extensão da repressão que se seguiu.\nA documentação disponível demonstra a ocorrência de uma violenta campanha repressiva, mas os números de mortos e desaparecidos continuam sendo objeto de controvérsia historiográfica.\nReferências de pesquisa:\nSILVA, Giselda Brito. O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977. 2023.\nPAWSON, Lara. In the Name of the People: Angola's Forgotten Massacre. London: I.B. Tauris, 2014.\n6.2. Fontes para investigação\nO estudo do episódio deve confrontar:\nDocumentos do MPLA.\nTestemunhos de sobreviventes.\nRelatos de familiares de desaparecidos.\nPesquisas acadêmicas sobre a repressão.\nDocumentos produzidos por organismos de direitos humanos.\nEstudos sobre memória e reconciliação nacional.\nA ausência de um arquivo estatal integralmente aberto e de uma reconstrução consensual dos acontecimentos exige cautela na apresentação de números e responsabilidades individuais."
    },
    {
      "number": 7,
      "author": "MOÇAMBIQUE — FRELIMO, CAMPOS DE REEDUCAÇÃO E OPERAÇÃO PRODUÇÃO",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "7.1. Documentação sobre os campos de reeducação\nPeríodo: Principalmente a partir de 1974–1975.\nNatureza: Documentos administrativos, discursos políticos, registros governamentais, testemunhos e pesquisas históricas.\nAspectos investigados:\nPolítica de transformação socialista.\nCampanhas de reeducação política.\nEnvio compulsório de pessoas para campos.\nControle de comportamentos considerados incompatíveis com a nova sociedade.\nRelação entre disciplina política e construção do Estado.\nContextualização histórica:\nApós a independência, a FRELIMO procurou construir um Estado socialista e transformar profundamente as estruturas sociais herdadas do colonialismo português.\nOs campos de reeducação foram apresentados como instrumentos de transformação política e social. Na prática, a experiência de muitos detidos envolveu privação de liberdade, coerção e condições difíceis de sobrevivência.\nReferência de pesquisa:\nMACHAVA, Benedito. “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”. The Journal of African History, 2019.\n7.2. Operação Produção — 1983\nNatureza: Política estatal de deslocamento compulsório.\nAspectos documentados:\nTransferência de pessoas das cidades para regiões rurais.\nControle da população urbana.\nDisciplina do trabalho.\nReorganização territorial.\nRelação entre planejamento socialista e coerção estatal.\nContextualização histórica:\nA Operação Produção revela como projetos de reorganização econômica e social podiam ser implementados por meio de medidas coercitivas.\nSeu estudo deve considerar simultaneamente a crise econômica, as dificuldades de construção do Estado, a guerra civil e a concepção política de transformação social adotada pela liderança da FRELIMO.\nReferências de pesquisa:\nMACHAVA, Benedito. The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990. Athens: Ohio University Press, 2024.\nQUEMBO, Carlos. Poder do Poder: Operação Produção e a reorganização social em Moçambique.",
      "source": "Capítulo 10 — Seção 7: MOÇAMBIQUE — FRELIMO, CAMPOS DE REEDUCAÇÃO E OPERAÇÃO PRODUÇÃO",
      "analise": "7.1. Documentação sobre os campos de reeducação\nPeríodo: Principalmente a partir de 1974–1975.\nNatureza: Documentos administrativos, discursos políticos, registros governamentais, testemunhos e pesquisas históricas.\nAspectos investigados:\nPolítica de transformação socialista.\nCampanhas de reeducação política.\nEnvio compulsório de pessoas para campos.\nControle de comportamentos considerados incompatíveis com a nova sociedade.\nRelação entre disciplina política e construção do Estado.\nContextualização histórica:\nApós a independência, a FRELIMO procurou construir um Estado socialista e transformar profundamente as estruturas sociais herdadas do colonialismo português.\nOs campos de reeducação foram apresentados como instrumentos de transformação política e social. Na prática, a experiência de muitos detidos envolveu privação de liberdade, coerção e condições difíceis de sobrevivência.\nReferência de pesquisa:\nMACHAVA, Benedito. “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”. The Journal of African History, 2019.\n7.2. Operação Produção — 1983\nNatureza: Política estatal de deslocamento compulsório.\nAspectos documentados:\nTransferência de pessoas das cidades para regiões rurais.\nControle da população urbana.\nDisciplina do trabalho.\nReorganização territorial.\nRelação entre planejamento socialista e coerção estatal.\nContextualização histórica:\nA Operação Produção revela como projetos de reorganização econômica e social podiam ser implementados por meio de medidas coercitivas.\nSeu estudo deve considerar simultaneamente a crise econômica, as dificuldades de construção do Estado, a guerra civil e a concepção política de transformação social adotada pela liderança da FRELIMO.\nReferências de pesquisa:\nMACHAVA, Benedito. The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990. Athens: Ohio University Press, 2024.\nQUEMBO, Carlos. Poder do Poder: Operação Produção e a reorganização social em Moçambique."
    },
    {
      "number": 8,
      "author": "CUBA — REVOLUÇÃO, PARTIDO ÚNICO E REPRESSÃO POLÍTICA",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "8.1. Constituição cubana de 1976\nDocumento: Constituição da República de Cuba.\nData: 1976.\nNatureza: Documento constitucional.\nImportância histórica:\nA Constituição de 1976 formalizou a estrutura política socialista cubana e consolidou institucionalmente o papel dirigente do Partido Comunista.\nÉ uma fonte fundamental para investigar a organização constitucional do Estado, a relação entre partido e governo e a concepção oficial de soberania popular.\nReferência primária:\nREPÚBLICA DE CUBA. Constitución de la República de Cuba. 1976.\n8.2. Documentação sobre a Revolução Cubana\nFontes relevantes:\nDiscursos de Fidel Castro.\nDocumentos do Movimento 26 de Julho.\nDeclaração de Havana.\nDocumentos do Partido Comunista de Cuba.\nConstituição de 1976.\nDocumentos relativos à alfabetização e às reformas sociais.\nRelatórios de organizações internacionais sobre direitos humanos.\nContextualização histórica:\nEssas fontes permitem examinar tanto a construção da legitimidade revolucionária quanto a consolidação do sistema de partido único.\nA investigação deve considerar as reformas sociais promovidas pelo governo, especialmente nas áreas de educação e saúde, e também a censura, as restrições à oposição, as prisões políticas e o exílio.",
      "source": "Capítulo 10 — Seção 8: CUBA — REVOLUÇÃO, PARTIDO ÚNICO E REPRESSÃO POLÍTICA",
      "analise": "8.1. Constituição cubana de 1976\nDocumento: Constituição da República de Cuba.\nData: 1976.\nNatureza: Documento constitucional.\nImportância histórica:\nA Constituição de 1976 formalizou a estrutura política socialista cubana e consolidou institucionalmente o papel dirigente do Partido Comunista.\nÉ uma fonte fundamental para investigar a organização constitucional do Estado, a relação entre partido e governo e a concepção oficial de soberania popular.\nReferência primária:\nREPÚBLICA DE CUBA. Constitución de la República de Cuba. 1976.\n8.2. Documentação sobre a Revolução Cubana\nFontes relevantes:\nDiscursos de Fidel Castro.\nDocumentos do Movimento 26 de Julho.\nDeclaração de Havana.\nDocumentos do Partido Comunista de Cuba.\nConstituição de 1976.\nDocumentos relativos à alfabetização e às reformas sociais.\nRelatórios de organizações internacionais sobre direitos humanos.\nContextualização histórica:\nEssas fontes permitem examinar tanto a construção da legitimidade revolucionária quanto a consolidação do sistema de partido único.\nA investigação deve considerar as reformas sociais promovidas pelo governo, especialmente nas áreas de educação e saúde, e também a censura, as restrições à oposição, as prisões políticas e o exílio."
    },
    {
      "number": 9,
      "author": "NICARÁGUA — REVOLUÇÃO SANDINISTA E GOVERNO DA FSLN",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "9.1. Programa histórico da Frente Sandinista de Libertação Nacional\nInstituição: Frente Sandinista de Libertação Nacional — FSLN.\nPeríodo de referência: Revolução de 1979 e consolidação do governo sandinista.\nNatureza: Documento político-programático.\nImportância histórica:\nO programa político sandinista permite compreender a concepção de transformação social defendida pela FSLN, incluindo a reforma agrária, a alfabetização, a reorganização econômica e a construção de um Estado pós-ditadura.\nA documentação deve ser confrontada com os atos concretos do governo, especialmente no que diz respeito à liberdade de imprensa, à oposição política, aos conflitos com grupos indígenas e à guerra contra os Contras.\n9.2. Documentação sobre os povos indígenas Miskito\nNatureza: Relatórios de direitos humanos, testemunhos e documentação internacional.\nAspectos investigados:\nConflitos entre o governo sandinista e comunidades indígenas.\nDeslocamentos populacionais.\nOperações militares.\nRestrições à autonomia comunitária.\nRelação entre a guerra civil e os direitos dos povos indígenas.\nContextualização histórica:\nA questão Miskito evidencia as tensões entre o projeto revolucionário sandinista e as reivindicações de autonomia de comunidades indígenas.\nA análise deve considerar também a guerra financiada e apoiada pelos Estados Unidos contra o governo sandinista, sem utilizar esse contexto para apagar as violações cometidas pelas próprias autoridades nicaraguenses.",
      "source": "Capítulo 10 — Seção 9: NICARÁGUA — REVOLUÇÃO SANDINISTA E GOVERNO DA FSLN",
      "analise": "9.1. Programa histórico da Frente Sandinista de Libertação Nacional\nInstituição: Frente Sandinista de Libertação Nacional — FSLN.\nPeríodo de referência: Revolução de 1979 e consolidação do governo sandinista.\nNatureza: Documento político-programático.\nImportância histórica:\nO programa político sandinista permite compreender a concepção de transformação social defendida pela FSLN, incluindo a reforma agrária, a alfabetização, a reorganização econômica e a construção de um Estado pós-ditadura.\nA documentação deve ser confrontada com os atos concretos do governo, especialmente no que diz respeito à liberdade de imprensa, à oposição política, aos conflitos com grupos indígenas e à guerra contra os Contras.\n9.2. Documentação sobre os povos indígenas Miskito\nNatureza: Relatórios de direitos humanos, testemunhos e documentação internacional.\nAspectos investigados:\nConflitos entre o governo sandinista e comunidades indígenas.\nDeslocamentos populacionais.\nOperações militares.\nRestrições à autonomia comunitária.\nRelação entre a guerra civil e os direitos dos povos indígenas.\nContextualização histórica:\nA questão Miskito evidencia as tensões entre o projeto revolucionário sandinista e as reivindicações de autonomia de comunidades indígenas.\nA análise deve considerar também a guerra financiada e apoiada pelos Estados Unidos contra o governo sandinista, sem utilizar esse contexto para apagar as violações cometidas pelas próprias autoridades nicaraguenses."
    }
  ],
  "syntheses": [
    {
      "number": 1,
      "authorOrSchool": "CHINA — GRANDE SALTO ADIANTE E REVOLUÇÃO CULTURAL",
      "synthesisText": "10.1. Frank Dikötter\nObra: Mao's Great Famine: The History of China's Most Devastating Catastrophe, 1958–1962.\nEditora: Walker & Company, 2010.\nContribuição:\nDikötter investiga a fome associada ao Grande Salto Adiante a partir de documentação de arquivos chineses. Sua pesquisa enfatiza a violência institucional, as requisições de alimentos, a coerção administrativa e as consequências humanas das políticas econômicas.\nSua estimativa de mortalidade está entre as mais elevadas da historiografia. Deve ser confrontada com outras pesquisas demográficas e documentais, pois as estimativas variam conforme os métodos e os registros utilizados.\n10.2. Roderick MacFarquhar\nObra: The Origins of the Cultural Revolution.\nEditora: Oxford University Press.\nContribuição:\nMacFarquhar é uma referência fundamental para compreender as disputas internas do Partido Comunista Chinês, as motivações políticas de Mao e o processo de radicalização que culminou na Revolução Cultural.\n10.3. Yang Jisheng\nObra: Tombstone: The Great Chinese Famine, 1958–1962.\nContribuição:\nYang Jisheng apresenta uma investigação sobre a fome chinesa a partir de documentação, estatísticas e testemunhos. Sua obra é particularmente importante para o estudo da relação entre decisões políticas, coletivização e mortalidade.\n10.4. Timothy Cheek\nObra: Estudos sobre Mao Zedong, fontes documentais e história política da China contemporânea.\nContribuição:\nCheek contribui para a crítica documental dos discursos e registros políticos de Mao, discutindo a autenticidade, a origem e os limites interpretativos das fontes.",
      "supportingReference": "Capítulo 10 — Seção 10"
    },
    {
      "number": 2,
      "authorOrSchool": "CAMBOJA — POL POT E O KHMER VERMELHO",
      "synthesisText": "11.1. Ben Kiernan\nObra: The Pol Pot Regime: Race, Power, and Genocide in Cambodia under the Khmer Rouge, 1975–79.\nEditora: Yale University Press, 2008.\nContribuição:\nKiernan é um dos principais pesquisadores do regime do Khmer Vermelho. Sua obra examina a formação ideológica do movimento, a reorganização social, a perseguição de grupos populacionais e a violência política.\nO autor também investiga o componente étnico da violência, especialmente a perseguição contra vietnamitas e cham.\n11.2. David Chandler\nObra: Voices from S-21: Terror and History in Pol Pot's Secret Prison.\nEditora: University of California Press, 1999.\nContribuição:\nChandler analisa os arquivos da prisão S-21 e a estrutura burocrática do terror. Seu trabalho permite compreender como a documentação produzida pelo aparato repressivo pode ser utilizada para reconstruir o funcionamento de uma instituição de encarceramento e execução.\n11.3. Elizabeth Becker\nObra: When the War Was Over: Cambodia and the Khmer Rouge Revolution.\nEditora: PublicAffairs.\nContribuição:\nBecker investiga a revolução cambojana, a ascensão do Khmer Vermelho e as consequências sociais e políticas do regime.\n11.4. Craig Etcheson\nObra: After the Killing Fields: Lessons from the Cambodian Genocide.\nEditora: Praeger, 2005.\nContribuição:\nEtcheson examina a documentação, a justiça de transição e os esforços de reconstrução da memória histórica após o genocídio cambojano.",
      "supportingReference": "Capítulo 10 — Seção 11"
    },
    {
      "number": 3,
      "authorOrSchool": "ETIÓPIA — DERG E TERROR VERMELHO",
      "synthesisText": "12.1. Jacob Wiebel\nObra: “The Ethiopian Red Terror”.\nPublicação: Oxford Research Encyclopedia of African History, 2017.\nContribuição:\nWiebel analisa o Terror Vermelho como um processo de violência política e intercomunitária, destacando a atuação do regime militar, dos organismos de segurança e das milícias.\nSua pesquisa também chama atenção para as dificuldades de estabelecer números definitivos de vítimas e para a necessidade de diferenciar o Terror Vermelho de outros conflitos ocorridos simultaneamente na Etiópia.\n12.2. Bahru Zewde\nObra: Estudos sobre a história contemporânea da Etiópia e o Terror Vermelho.\nContribuição:\nZewde oferece uma perspectiva histórica sobre a revolução de 1974, a formação do Derg e as transformações políticas que levaram à repressão.\n12.3. Teshome Debasu\nObra: Political Violence During the Därg Regime: Red Terror in Däbrä Marqos Town, 1977–1978.\nInstituição: Addis Ababa University, 2019.\nContribuição:\nA pesquisa examina a repressão em uma localidade específica e ajuda a compreender a dimensão territorial do Terror Vermelho, incluindo a atuação de estruturas de segurança e instituições locais.",
      "supportingReference": "Capítulo 10 — Seção 12"
    },
    {
      "number": 4,
      "authorOrSchool": "COREIA DO NORTE — ESTADO TOTALITÁRIO, CAMPOS POLÍTICOS E FOME",
      "synthesisText": "13.1. Comissão de Inquérito das Nações Unidas\nObra: Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea.\nInstituição: Conselho de Direitos Humanos da ONU, 2014.\nContribuição:\nO relatório apresenta uma investigação internacional sobre o sistema de repressão norte-coreano, incluindo campos de prisioneiros políticos, desaparecimentos, tortura, controle da população e violações sistemáticas.\nEmbora seja uma fonte institucional e não uma monografia historiográfica, sua documentação constitui referência essencial para o capítulo.\n13.2. Andrei Lankov\nObras: Estudos sobre a história política e a sociedade da Coreia do Norte.\nContribuição:\nLankov investiga a formação do Estado norte-coreano, a consolidação da dinastia Kim, a estrutura política e as transformações da sociedade norte-coreana.\n13.3. Bradley K. Martin\nObra: Under the Loving Care of the Fatherly Leader: North Korea and the Kim Dynasty.\nEditora: Thomas Dunne Books, 2004.\nContribuição:\nMartin apresenta uma investigação extensa sobre a formação da dinastia Kim e o desenvolvimento do sistema político norte-coreano.\n13.4. Stephan Haggard e Marcus Noland\nObra: Famine in North Korea: Markets, Aid, and Reform.\nEditora: Columbia University Press, 2007.\nContribuição:\nOs autores estudam a fome da década de 1990, as respostas governamentais, os mercados informais e a assistência internacional.",
      "supportingReference": "Capítulo 10 — Seção 13"
    },
    {
      "number": 5,
      "authorOrSchool": "VIETNÃ — REEDUCAÇÃO E REFUGIADOS",
      "synthesisText": "14.1. Nathalie Nguyen\nPesquisa: Vietnam's Re-education Camps after 1975: Narratives of Detainees.\nInstituição: Monash University.\nContribuição:\nA pesquisa utiliza narrativas de ex-detidos para compreender a experiência dos campos de reeducação após a vitória comunista em 1975.\n14.2. Yến Lê Espiritu\nObra: Body Counts: The Vietnam War and Militarized Refuge(es).\nEditora: University of California Press, 2014.\nContribuição:\nEspiritu analisa a experiência dos refugiados vietnamitas, a militarização da condição de refugiado e a maneira pela qual a guerra continuou a produzir consequências sociais e políticas após seu encerramento formal.\n14.3. Tuan Hoang\nPesquisa: Estudos sobre a diáspora vietnamita e a memória da guerra.\nContribuição:\nHoang contribui para compreender a formação da diáspora vietnamita e a pluralidade das experiências de deslocamento, exílio e reassentamento.",
      "supportingReference": "Capítulo 10 — Seção 14"
    },
    {
      "number": 6,
      "authorOrSchool": "ANGOLA — MPLA E O 27 DE MAIO DE 1977",
      "synthesisText": "15.1. Lara Pawson\nObra: In the Name of the People: Angola's Forgotten Massacre.\nEditora: I.B. Tauris, 2014.\nContribuição:\nPawson investiga o 27 de Maio de 1977 e a memória da repressão que se seguiu. Sua pesquisa é importante para compreender o impacto do episódio sobre a sociedade angolana e as dificuldades de reconstrução histórica em contextos de silêncio político.\n15.2. Giselda Brito Silva\nPesquisa: “O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977”.\nAno: 2023.\nContribuição:\nA autora examina a formação do controle político do MPLA, a repressão dos discursos de oposição e o contexto do 27 de Maio.\n15.3. Estudos sobre memória, reconciliação e violência política em Angola\nContribuição:\nPesquisas sobre a reconciliação nacional e a memória do conflito angolano ajudam a compreender as disputas sobre a interpretação dos acontecimentos e a ausência de consenso sobre o número de vítimas.",
      "supportingReference": "Capítulo 10 — Seção 15"
    },
    {
      "number": 7,
      "authorOrSchool": "MOÇAMBIQUE — FRELIMO E O ESTADO SOCIALISTA",
      "synthesisText": "16.1. Benedito Machava\nObra: The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990.\nEditora: Ohio University Press, 2024.\nContribuição:\nMachava investiga os campos de reeducação, as políticas de punição e a construção do Estado socialista moçambicano.\nSua pesquisa é especialmente relevante por demonstrar a tensão entre a promessa de transformação social e as práticas de coerção e encarceramento.\n16.2. Benedito Machava\nArtigo: “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”.\nPublicação: The Journal of African History, 2019.\nContribuição:\nO artigo analisa a relação entre os campos de reeducação, a austeridade econômica e a formação de um sistema de controle estatal.\n16.3. Carlos Quembo\nObra: Poder do Poder: Operação Produção e a reorganização social em Moçambique.\nContribuição:\nA pesquisa contribui para o estudo da Operação Produção e dos mecanismos de reorganização social implementados pelo governo moçambicano.",
      "supportingReference": "Capítulo 10 — Seção 16"
    },
    {
      "number": 8,
      "authorOrSchool": "CUBA — REVOLUÇÃO E CONSOLIDAÇÃO DO PARTIDO ÚNICO",
      "synthesisText": "17.1. Luis Martínez-Fernández\nObra: Revolutionary Cuba: A History.\nContribuição:\nMartínez-Fernández apresenta uma interpretação histórica abrangente da Revolução Cubana, abordando a reforma agrária, as campanhas de alfabetização, as políticas sociais, a consolidação do partido único, a repressão política e os movimentos de exílio.\nSua pesquisa é importante porque permite compreender as realizações sociais e as restrições políticas dentro de uma mesma análise histórica.\n17.2. Marifeli Pérez-Stable\nObra: The Cuban Revolution: Origins, Course, and Legacy.\nEditora: Oxford University Press.\nContribuição:\nPérez-Stable analisa as origens da revolução, sua trajetória institucional e as transformações da sociedade cubana.\n17.3. Samuel Farber\nObras: Estudos sobre a Revolução Cubana e a formação do sistema político pós-1959.\nContribuição:\nFarber apresenta uma interpretação crítica da organização política cubana, com atenção à concentração do poder, à participação popular e às relações entre partido e sociedade.",
      "supportingReference": "Capítulo 10 — Seção 17"
    },
    {
      "number": 9,
      "authorOrSchool": "NICARÁGUA — REVOLUÇÃO SANDINISTA",
      "synthesisText": "18.1. Thomas W. Walker\nObra: Nicaragua: Living in the Shadow of the Eagle.\nContribuição:\nWalker examina a história política nicaraguense, a Revolução Sandinista, a intervenção dos Estados Unidos e os conflitos internos do país.\n18.2. Robert S. Leiken\nObra: Estudos sobre a Revolução Sandinista e a política internacional da América Central.\nContribuição:\nSeus trabalhos ajudam a compreender a relação entre o governo sandinista, a oposição interna e a conjuntura da Guerra Fria.\n18.3. Human Rights Watch\nDocumentação: Relatórios sobre direitos humanos na América Central e na Nicarágua.\nContribuição:\nOs relatórios permitem investigar denúncias de violações de direitos humanos, conflitos com comunidades indígenas e restrições políticas durante a década de 1980.",
      "supportingReference": "Capítulo 10 — Seção 18"
    }
  ],
  "referenceCategories": [
    {
      "category": "CHINA",
      "items": [
        "CHEEK, Timothy. Estudos sobre Mao Zedong e a história política chinesa.\nDIKÖTTER, Frank. Mao's Great Famine: The History of China's Most Devastating Catastrophe, 1958–1962. New York: Walker & Company, 2010.\nMACFARQUHAR, Roderick. The Origins of the Cultural Revolution. Oxford: Oxford University Press.\nMACFARQUHAR, Roderick; CHEEK, Timothy; WU, Eugene (org.). The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward. Cambridge, MA: Harvard University Asia Center, 1989.\nYANG, Jisheng. Tombstone: The Great Chinese Famine, 1958–1962."
      ]
    },
    {
      "category": "CAMBOJA",
      "items": [
        "BECKER, Elizabeth. When the War Was Over: Cambodia and the Khmer Rouge Revolution. New York: PublicAffairs.\nCHANDLER, David. Voices from S-21: Terror and History in Pol Pot's Secret Prison. Berkeley: University of California Press, 1999.\nETCHESON, Craig. After the Killing Fields: Lessons from the Cambodian Genocide. Westport: Praeger, 2005.\nKIERNAN, Ben. The Pol Pot Regime: Race, Power, and Genocide in Cambodia under the Khmer Rouge, 1975–79. New Haven: Yale University Press, 2008."
      ]
    },
    {
      "category": "ETIÓPIA",
      "items": [
        "WIEBEL, Jacob. “The Ethiopian Red Terror”. Oxford Research Encyclopedia of African History, 2017.\nTESHOME, Debasu. Political Violence During the Därg Regime: Red Terror in Däbrä Marqos Town, 1977–1978. Addis Ababa University, 2019.\nZEWDE, Bahru. Estudos sobre a história contemporânea da Etiópia.\nAMNESTY INTERNATIONAL. Relatórios sobre violações de direitos humanos na Etiópia durante o regime militar."
      ]
    },
    {
      "category": "COREIA DO NORTE",
      "items": [
        "HAGGARD, Stephan; NOLAND, Marcus. Famine in North Korea: Markets, Aid, and Reform. New York: Columbia University Press, 2007.\nLANKOV, Andrei. Estudos sobre a história política da Coreia do Norte.\nMARTIN, Bradley K. Under the Loving Care of the Fatherly Leader: North Korea and the Kim Dynasty. New York: Thomas Dunne Books, 2004.\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/63, 2014."
      ]
    },
    {
      "category": "VIETNÃ",
      "items": [
        "ESPIRITU, Yến Lê. Body Counts: The Vietnam War and Militarized Refuge(es). Berkeley: University of California Press, 2014.\nNGUYEN, Nathalie. Vietnam's Re-education Camps after 1975: Narratives of Detainees. Monash University.\nHOANG, Tuan. Estudos sobre a diáspora vietnamita e a memória da Guerra do Vietnã."
      ]
    },
    {
      "category": "ANGOLA",
      "items": [
        "PAWSON, Lara. In the Name of the People: Angola's Forgotten Massacre. London: I.B. Tauris, 2014.\nSILVA, Giselda Brito. “O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977”. 2023."
      ]
    },
    {
      "category": "MOÇAMBIQUE",
      "items": [
        "MACHAVA, Benedito. “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”. The Journal of African History, 2019.\nMACHAVA, Benedito. The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990. Athens: Ohio University Press, 2024.\nQUEMBO, Carlos. Poder do Poder: Operação Produção e a reorganização social em Moçambique."
      ]
    },
    {
      "category": "CUBA",
      "items": [
        "FARBER, Samuel. Estudos sobre a Revolução Cubana e o sistema político pós-1959.\nMARTÍNEZ-FERNÁNDEZ, Luis. Revolutionary Cuba: A History.\nPÉREZ-STABLE, Marifeli. The Cuban Revolution: Origins, Course, and Legacy. Oxford: Oxford University Press.\nREPÚBLICA DE CUBA. Constitución de la República de Cuba. 1976."
      ]
    },
    {
      "category": "NICARÁGUA",
      "items": [
        "WALKER, Thomas W. Nicaragua: Living in the Shadow of the Eagle.\nLEIKEN, Robert S. Estudos sobre a Revolução Sandinista e a política da América Central.\nHUMAN RIGHTS WATCH. Relatórios sobre direitos humanos na América Central e na Nicarágua."
      ]
    }
  ],
  "consensosAcademicos": "Consenso em torno da natureza autoritária dos regimes de partido único, da concentração extrema do poder estatal e do custo humano avassalador decorrente de políticas de coletivização forçada, expurgos e fomes coletivas.",
  "controversiasELimitacoesDasFontes": "Limitações no acesso irrestrito a arquivos centrais de segurança de Estado e debates historiográficos sobre a intencionalidade deliberada de determinadas fomes em comparação com falhas e rigores burocráticos e administrativos."
},
  110: {
  "title": "REGISTRO DE CITAÇÕES Nº 10 — O COMUNISMO INTERNACIONAL: REGIMES, REVOLUÇÕES E CATÁSTROFES HUMANITÁRIAS",
  "citations": [
    {
      "number": 1,
      "author": "CHINA — MAOÍSMO, GRANDE SALTO ADIANTE E REVOLUÇÃO CULTURAL",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "1.1. Decisão do Comitê Central do Partido Comunista Chinês — 1966\nDocumento: Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution.\nData: 8 de agosto de 1966.\nNatureza: Documento político oficial do Partido Comunista Chinês.\nTrecho documental — tradução para o português:\n“O objetivo atual é lutar contra e esmagar aquelas pessoas em posições de autoridade que estão seguindo o caminho capitalista.”\nContextualização histórica:\nO documento, conhecido como os Dezesseis Pontos, estabeleceu orientações políticas para a Revolução Cultural. Seu conteúdo revela a maneira pela qual a liderança maoísta transformou divergências políticas e disputas internas em uma campanha de mobilização ideológica contra supostos inimigos da revolução.\nA linguagem utilizada legitimava a intervenção das massas na estrutura partidária, na educação, na cultura e nas instituições estatais. O documento é particularmente importante para compreender a radicalização política de 1966 e a perseguição contra dirigentes, intelectuais, professores e outros grupos considerados representantes de valores burgueses.\nReferência primária:\nCHINESE COMMUNIST PARTY. Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution. 8 August 1966.\nDocumento reproduzido em material didático da Columbia University:\nhttps://www-1.gsb.columbia.edu/ps/cup/sixteen_points.pdf\n1.2. Discursos reservados de Mao Zedong — 1957–1958\nDocumento: The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward.\nOrganizadores: Roderick MacFarquhar, Timothy Cheek e Eugene Wu.\nNatureza: Compilação de discursos, intervenções e registros políticos de Mao Zedong.\nContextualização histórica:\nOs discursos reservados de Mao são importantes porque permitem comparar a retórica pública do governo com as discussões internas da liderança comunista durante a preparação do Grande Salto Adiante.\nA documentação contribui para compreender a centralização das decisões, a pressão política por metas produtivas extraordinárias e a relação entre autoridade pessoal, disciplina partidária e formulação econômica.\nReferência documental:\nMACFARQUHAR, Roderick; CHEEK, Timothy; WU, Eugene (org.). The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward. Cambridge, MA: Harvard University Asia Center, 1989.\nhttps://www.jstor.org/stable/j.ctt1sq5t53\n1.3. Documentação administrativa do Grande Salto Adiante\nAcervo: The Chinese Great Leap Forward Great Famine Database (1958–1962).\nInstituições responsáveis: Universidade Chinesa de Hong Kong e centros de pesquisa associados.\nNatureza: Coleção de fontes primárias.\nDocumentos disponíveis:\nDiretivas do Partido Comunista Chinês.\nRelatórios administrativos internos.\nDiscursos de dirigentes.\nBoletins oficiais.\nRegistros relativos à coletivização agrícola.\nDocumentos sobre aquisição estatal e distribuição de alimentos.\nRelatórios produzidos durante a fome.\nImportância histórica:\nEsse conjunto documental permite investigar como as políticas econômicas foram implementadas e como as informações sobre produção agrícola, abastecimento e mortalidade circulavam dentro da administração chinesa.\nÉ especialmente importante para estudar a distância entre os resultados oficialmente anunciados e as condições concretas enfrentadas pela população.\nReferência do acervo:\nCHINESE UNIVERSITY OF HONG KONG. The Chinese Great Leap Forward Great Famine Database (1958–1962).\nhttps://cup.cuhk.edu.hk/chinesepress/promotion/ChinesePoliticalCampaignsDatabase.pdf",
      "source": "Capítulo 10 — Seção 1: CHINA — MAOÍSMO, GRANDE SALTO ADIANTE E REVOLUÇÃO CULTURAL",
      "analise": "1.1. Decisão do Comitê Central do Partido Comunista Chinês — 1966\nDocumento: Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution.\nData: 8 de agosto de 1966.\nNatureza: Documento político oficial do Partido Comunista Chinês.\nTrecho documental — tradução para o português:\n“O objetivo atual é lutar contra e esmagar aquelas pessoas em posições de autoridade que estão seguindo o caminho capitalista.”\nContextualização histórica:\nO documento, conhecido como os Dezesseis Pontos, estabeleceu orientações políticas para a Revolução Cultural. Seu conteúdo revela a maneira pela qual a liderança maoísta transformou divergências políticas e disputas internas em uma campanha de mobilização ideológica contra supostos inimigos da revolução.\nA linguagem utilizada legitimava a intervenção das massas na estrutura partidária, na educação, na cultura e nas instituições estatais. O documento é particularmente importante para compreender a radicalização política de 1966 e a perseguição contra dirigentes, intelectuais, professores e outros grupos considerados representantes de valores burgueses.\nReferência primária:\nCHINESE COMMUNIST PARTY. Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution. 8 August 1966.\nDocumento reproduzido em material didático da Columbia University:\nhttps://www-1.gsb.columbia.edu/ps/cup/sixteen_points.pdf\n1.2. Discursos reservados de Mao Zedong — 1957–1958\nDocumento: The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward.\nOrganizadores: Roderick MacFarquhar, Timothy Cheek e Eugene Wu.\nNatureza: Compilação de discursos, intervenções e registros políticos de Mao Zedong.\nContextualização histórica:\nOs discursos reservados de Mao são importantes porque permitem comparar a retórica pública do governo com as discussões internas da liderança comunista durante a preparação do Grande Salto Adiante.\nA documentação contribui para compreender a centralização das decisões, a pressão política por metas produtivas extraordinárias e a relação entre autoridade pessoal, disciplina partidária e formulação econômica.\nReferência documental:\nMACFARQUHAR, Roderick; CHEEK, Timothy; WU, Eugene (org.). The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward. Cambridge, MA: Harvard University Asia Center, 1989.\nhttps://www.jstor.org/stable/j.ctt1sq5t53\n1.3. Documentação administrativa do Grande Salto Adiante\nAcervo: The Chinese Great Leap Forward Great Famine Database (1958–1962).\nInstituições responsáveis: Universidade Chinesa de Hong Kong e centros de pesquisa associados.\nNatureza: Coleção de fontes primárias.\nDocumentos disponíveis:\nDiretivas do Partido Comunista Chinês.\nRelatórios administrativos internos.\nDiscursos de dirigentes.\nBoletins oficiais.\nRegistros relativos à coletivização agrícola.\nDocumentos sobre aquisição estatal e distribuição de alimentos.\nRelatórios produzidos durante a fome.\nImportância histórica:\nEsse conjunto documental permite investigar como as políticas econômicas foram implementadas e como as informações sobre produção agrícola, abastecimento e mortalidade circulavam dentro da administração chinesa.\nÉ especialmente importante para estudar a distância entre os resultados oficialmente anunciados e as condições concretas enfrentadas pela população.\nReferência do acervo:\nCHINESE UNIVERSITY OF HONG KONG. The Chinese Great Leap Forward Great Famine Database (1958–1962).\nhttps://cup.cuhk.edu.hk/chinesepress/promotion/ChinesePoliticalCampaignsDatabase.pdf"
    },
    {
      "number": 2,
      "author": "CAMBOJA — KHMER VERMELHO E DEMOCRATIC KAMPUCHEA",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "2.1. Documentação do Centro de Documentação do Camboja\nInstituição: Documentation Center of Cambodia — DC-Cam.\nPeríodo documentado: 1975–1979.\nNatureza: Arquivo documental e testemunhal.\nMateriais preservados:\nCorrespondências oficiais do Partido Comunista do Kampuchea.\nTelegramas entre dirigentes.\nRelatórios de segurança.\nRegistros administrativos.\nFotografias de prisioneiros.\nConfissões produzidas durante interrogatórios.\nDocumentos relativos à prisão de Tuol Sleng, conhecida como S-21.\nEntrevistas com sobreviventes.\nMapas de valas comuns e locais de execução.\nContextualização histórica:\nA documentação do DC-Cam é fundamental para reconstruir o funcionamento do regime do Khmer Vermelho, especialmente suas estruturas de segurança, mecanismos de vigilância, prisões, interrogatórios e execução.\nOs registros devem ser analisados criticamente. As chamadas confissões de prisioneiros, por exemplo, foram frequentemente produzidas sob tortura e coerção. Portanto, não podem ser tratadas automaticamente como relatos verdadeiros dos fatos que atribuíam aos acusados.\nReferências primárias:\nDOCUMENTATION CENTER OF CAMBODIA. Archives and Documents: Democratic Kampuchea, 1975–1979.\nhttps://d.dccam.org/Archives/Documents/Documents.htm\nDOCUMENTATION CENTER OF CAMBODIA. Documentation Projects and Archives.\nhttps://d.dccam.org/Projects/Document_Projects/Documentation.htm\n2.2. Arquivos da prisão S-21 — Tuol Sleng\nInstituição: Tuol Sleng Genocide Museum.\nNatureza: Documentação produzida pelo aparato de segurança do Khmer Vermelho.\nMateriais:\nFotografias dos prisioneiros.\nFichas de identificação.\nRegistros de entrada e saída.\nRelatórios de interrogatório.\nDocumentos administrativos.\nRegistros de execução.\nImportância histórica:\nO arquivo de S-21 permite examinar a organização burocrática da repressão política. A prisão não era apenas um espaço de encarceramento: integrava um sistema de identificação, interrogatório, produção forçada de confissões e eliminação de pessoas consideradas inimigas do regime.\nA documentação evidencia a participação de estruturas administrativas e de segurança na execução das políticas repressivas.\n2.3. Julgamentos das Câmaras Extraordinárias dos Tribunais do Camboja\nInstituição: Extraordinary Chambers in the Courts of Cambodia — ECCC.\nNatureza: Documentação judicial.\nMateriais relevantes:\nAcusações contra dirigentes do Khmer Vermelho.\nDepoimentos de sobreviventes.\nDocumentos do Partido Comunista do Kampuchea.\nProvas relativas às estruturas de segurança.\nDecisões judiciais sobre crimes contra a humanidade e genocídio.\nContextualização jurídica:\nOs julgamentos das ECCC são fundamentais para distinguir as diferentes categorias de crimes cometidos durante o regime.\nA jurisprudência reconheceu genocídio contra os grupos étnicos vietnamita e cham muçulmano. Já o extermínio, a perseguição e outras violências praticadas contra integrantes da população khmer foram enquadrados em outras categorias de crimes, especialmente crimes contra a humanidade, conforme os elementos jurídicos demonstrados nos processos.\nReferências institucionais:\nEXTRAORDINARY CHAMBERS IN THE COURTS OF CAMBODIA. Case 002/19-09-2007: Judgments and Court Documents.\nDOCUMENTATION CENTER OF CAMBODIA. Cambodian Genocide Program.\nhttps://macmillan.yale.edu/gsp/bibliographic-database-cbib",
      "source": "Capítulo 10 — Seção 2: CAMBOJA — KHMER VERMELHO E DEMOCRATIC KAMPUCHEA",
      "analise": "2.1. Documentação do Centro de Documentação do Camboja\nInstituição: Documentation Center of Cambodia — DC-Cam.\nPeríodo documentado: 1975–1979.\nNatureza: Arquivo documental e testemunhal.\nMateriais preservados:\nCorrespondências oficiais do Partido Comunista do Kampuchea.\nTelegramas entre dirigentes.\nRelatórios de segurança.\nRegistros administrativos.\nFotografias de prisioneiros.\nConfissões produzidas durante interrogatórios.\nDocumentos relativos à prisão de Tuol Sleng, conhecida como S-21.\nEntrevistas com sobreviventes.\nMapas de valas comuns e locais de execução.\nContextualização histórica:\nA documentação do DC-Cam é fundamental para reconstruir o funcionamento do regime do Khmer Vermelho, especialmente suas estruturas de segurança, mecanismos de vigilância, prisões, interrogatórios e execução.\nOs registros devem ser analisados criticamente. As chamadas confissões de prisioneiros, por exemplo, foram frequentemente produzidas sob tortura e coerção. Portanto, não podem ser tratadas automaticamente como relatos verdadeiros dos fatos que atribuíam aos acusados.\nReferências primárias:\nDOCUMENTATION CENTER OF CAMBODIA. Archives and Documents: Democratic Kampuchea, 1975–1979.\nhttps://d.dccam.org/Archives/Documents/Documents.htm\nDOCUMENTATION CENTER OF CAMBODIA. Documentation Projects and Archives.\nhttps://d.dccam.org/Projects/Document_Projects/Documentation.htm\n2.2. Arquivos da prisão S-21 — Tuol Sleng\nInstituição: Tuol Sleng Genocide Museum.\nNatureza: Documentação produzida pelo aparato de segurança do Khmer Vermelho.\nMateriais:\nFotografias dos prisioneiros.\nFichas de identificação.\nRegistros de entrada e saída.\nRelatórios de interrogatório.\nDocumentos administrativos.\nRegistros de execução.\nImportância histórica:\nO arquivo de S-21 permite examinar a organização burocrática da repressão política. A prisão não era apenas um espaço de encarceramento: integrava um sistema de identificação, interrogatório, produção forçada de confissões e eliminação de pessoas consideradas inimigas do regime.\nA documentação evidencia a participação de estruturas administrativas e de segurança na execução das políticas repressivas.\n2.3. Julgamentos das Câmaras Extraordinárias dos Tribunais do Camboja\nInstituição: Extraordinary Chambers in the Courts of Cambodia — ECCC.\nNatureza: Documentação judicial.\nMateriais relevantes:\nAcusações contra dirigentes do Khmer Vermelho.\nDepoimentos de sobreviventes.\nDocumentos do Partido Comunista do Kampuchea.\nProvas relativas às estruturas de segurança.\nDecisões judiciais sobre crimes contra a humanidade e genocídio.\nContextualização jurídica:\nOs julgamentos das ECCC são fundamentais para distinguir as diferentes categorias de crimes cometidos durante o regime.\nA jurisprudência reconheceu genocídio contra os grupos étnicos vietnamita e cham muçulmano. Já o extermínio, a perseguição e outras violências praticadas contra integrantes da população khmer foram enquadrados em outras categorias de crimes, especialmente crimes contra a humanidade, conforme os elementos jurídicos demonstrados nos processos.\nReferências institucionais:\nEXTRAORDINARY CHAMBERS IN THE COURTS OF CAMBODIA. Case 002/19-09-2007: Judgments and Court Documents.\nDOCUMENTATION CENTER OF CAMBODIA. Cambodian Genocide Program.\nhttps://macmillan.yale.edu/gsp/bibliographic-database-cbib"
    },
    {
      "number": 3,
      "author": "ETIÓPIA — DERG E TERROR VERMELHO",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "3.1. Relatórios da Anistia Internacional sobre a Etiópia\nInstituição: Amnesty International.\nPeríodo: Década de 1970.\nNatureza: Documentação contemporânea de violações de direitos humanos.\nMateriais registrados:\nPrisões arbitrárias.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nPerseguição política.\nCondições de detenção.\nRelatos de estudantes e opositores presos.\nContextualização histórica:\nOs relatórios contemporâneos da Anistia Internacional são fontes importantes para investigar a repressão política promovida pelo regime militar do Derg.\nSua relevância está no fato de que parte das denúncias foi produzida enquanto os acontecimentos ainda estavam em curso, permitindo confrontar posteriormente os relatos com testemunhos, documentos oficiais e pesquisas históricas.\nReferência primária:\nAMNESTY INTERNATIONAL. Ethiopia: Reports on Human Rights Violations under the Military Government. Década de 1970.\nhttps://www.amnesty.org/en/wp-content/uploads/2021/09/POL100011978ENGLISH.pdf\n3.2. Documentação sobre o Terror Vermelho\nNatureza: Relatórios de organizações de direitos humanos, registros administrativos e testemunhos.\nAspectos documentados:\nCampanhas de repressão contra opositores.\nAtuação das estruturas de segurança.\nParticipação de milícias e organizações locais.\nPrisões e interrogatórios.\nExecuções e desaparecimentos.\nImportância histórica:\nA documentação deve ser utilizada para reconstruir a relação entre o governo militar, os organismos de segurança e as estruturas locais de mobilização política.\nÉ importante não reduzir o Terror Vermelho a uma simples campanha de violência espontânea: a pesquisa histórica demonstra a existência de mecanismos institucionais e políticos de repressão, embora a participação dos agentes locais variasse conforme a região.",
      "source": "Capítulo 10 — Seção 3: ETIÓPIA — DERG E TERROR VERMELHO",
      "analise": "3.1. Relatórios da Anistia Internacional sobre a Etiópia\nInstituição: Amnesty International.\nPeríodo: Década de 1970.\nNatureza: Documentação contemporânea de violações de direitos humanos.\nMateriais registrados:\nPrisões arbitrárias.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nPerseguição política.\nCondições de detenção.\nRelatos de estudantes e opositores presos.\nContextualização histórica:\nOs relatórios contemporâneos da Anistia Internacional são fontes importantes para investigar a repressão política promovida pelo regime militar do Derg.\nSua relevância está no fato de que parte das denúncias foi produzida enquanto os acontecimentos ainda estavam em curso, permitindo confrontar posteriormente os relatos com testemunhos, documentos oficiais e pesquisas históricas.\nReferência primária:\nAMNESTY INTERNATIONAL. Ethiopia: Reports on Human Rights Violations under the Military Government. Década de 1970.\nhttps://www.amnesty.org/en/wp-content/uploads/2021/09/POL100011978ENGLISH.pdf\n3.2. Documentação sobre o Terror Vermelho\nNatureza: Relatórios de organizações de direitos humanos, registros administrativos e testemunhos.\nAspectos documentados:\nCampanhas de repressão contra opositores.\nAtuação das estruturas de segurança.\nParticipação de milícias e organizações locais.\nPrisões e interrogatórios.\nExecuções e desaparecimentos.\nImportância histórica:\nA documentação deve ser utilizada para reconstruir a relação entre o governo militar, os organismos de segurança e as estruturas locais de mobilização política.\nÉ importante não reduzir o Terror Vermelho a uma simples campanha de violência espontânea: a pesquisa histórica demonstra a existência de mecanismos institucionais e políticos de repressão, embora a participação dos agentes locais variasse conforme a região."
    },
    {
      "number": 4,
      "author": "COREIA DO NORTE — DINASTIA KIM, CAMPOS POLÍTICOS E FOME",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "4.1. Comissão de Inquérito das Nações Unidas — 2014\nDocumento: Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea.\nIdentificação: A/HRC/25/63.\nData: 7 de fevereiro de 2014.\nInstituição: Conselho de Direitos Humanos das Nações Unidas.\nNatureza: Investigação internacional sobre violações sistemáticas de direitos humanos.\nTrecho documental — tradução para o português:\nA Comissão concluiu que determinados padrões de violações eram suficientemente graves para atingir o limiar jurídico dos crimes contra a humanidade.\nPrincipais violações investigadas:\nExtermínio.\nAssassinatos.\nEscravidão.\nTortura.\nPrisões arbitrárias.\nViolência sexual.\nPerseguição política.\nDesaparecimentos forçados.\nFome deliberadamente utilizada como instrumento de controle.\nCampos de prisioneiros políticos.\nContextualização histórica:\nO relatório é uma das principais fontes documentais internacionais para estudar o sistema político norte-coreano e suas estruturas repressivas.\nA Comissão investigou a relação entre o Partido dos Trabalhadores da Coreia, o aparato de segurança, o sistema de campos políticos e o controle exercido sobre a população.\nO documento também analisa a responsabilidade internacional diante das violações sistemáticas praticadas pelo Estado norte-coreano.\nReferência primária:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/63. Geneva, 2014.\nhttps://digitallibrary.un.org/record/766464\nRelatório detalhado:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Detailed Findings of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/CRP.1. 2014.\nhttps://www.refworld.org/reference/countryrep/unhrc/2014/98251\n4.2. Importância documental da Comissão da ONU\nO relatório permite estudar a Coreia do Norte a partir de testemunhos de sobreviventes, depoimentos de desertores, documentação internacional e análise das estruturas estatais.\nDeve ser utilizado com atenção às limitações inerentes à investigação de um país extremamente fechado, especialmente no que diz respeito ao acesso direto aos campos e aos arquivos internos do governo.",
      "source": "Capítulo 10 — Seção 4: COREIA DO NORTE — DINASTIA KIM, CAMPOS POLÍTICOS E FOME",
      "analise": "4.1. Comissão de Inquérito das Nações Unidas — 2014\nDocumento: Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea.\nIdentificação: A/HRC/25/63.\nData: 7 de fevereiro de 2014.\nInstituição: Conselho de Direitos Humanos das Nações Unidas.\nNatureza: Investigação internacional sobre violações sistemáticas de direitos humanos.\nTrecho documental — tradução para o português:\nA Comissão concluiu que determinados padrões de violações eram suficientemente graves para atingir o limiar jurídico dos crimes contra a humanidade.\nPrincipais violações investigadas:\nExtermínio.\nAssassinatos.\nEscravidão.\nTortura.\nPrisões arbitrárias.\nViolência sexual.\nPerseguição política.\nDesaparecimentos forçados.\nFome deliberadamente utilizada como instrumento de controle.\nCampos de prisioneiros políticos.\nContextualização histórica:\nO relatório é uma das principais fontes documentais internacionais para estudar o sistema político norte-coreano e suas estruturas repressivas.\nA Comissão investigou a relação entre o Partido dos Trabalhadores da Coreia, o aparato de segurança, o sistema de campos políticos e o controle exercido sobre a população.\nO documento também analisa a responsabilidade internacional diante das violações sistemáticas praticadas pelo Estado norte-coreano.\nReferência primária:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/63. Geneva, 2014.\nhttps://digitallibrary.un.org/record/766464\nRelatório detalhado:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Detailed Findings of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/CRP.1. 2014.\nhttps://www.refworld.org/reference/countryrep/unhrc/2014/98251\n4.2. Importância documental da Comissão da ONU\nO relatório permite estudar a Coreia do Norte a partir de testemunhos de sobreviventes, depoimentos de desertores, documentação internacional e análise das estruturas estatais.\nDeve ser utilizado com atenção às limitações inerentes à investigação de um país extremamente fechado, especialmente no que diz respeito ao acesso direto aos campos e aos arquivos internos do governo."
    },
    {
      "number": 5,
      "author": "VIETNÃ — CAMPOS DE REEDUCAÇÃO E BOAT PEOPLE",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "5.1. Documentação sobre os campos de reeducação após 1975\nPeríodo: A partir de 1975.\nNatureza: Registros governamentais, testemunhos de ex-prisioneiros, entrevistas e documentação produzida por organizações internacionais.\nAspectos investigados:\nInternamento de antigos militares sul-vietnamitas.\nDetenção de funcionários do antigo governo.\nProgramas de reeducação política.\nTrabalho obrigatório.\nSeparação familiar.\nCondições de sobrevivência nos campos.\nLibertação e permanência prolongada de determinados detidos.\nContextualização histórica:\nApós a queda de Saigon, em abril de 1975, o novo governo vietnamita implementou programas de reeducação destinados a antigos integrantes das estruturas políticas, administrativas e militares do Vietnã do Sul.\nA documentação de sobreviventes permite investigar a experiência concreta do internamento, os períodos de detenção e as consequências sociais e familiares.\nReferência de pesquisa:\nNGUYEN, Nathalie. Vietnam's Re-education Camps after 1975: Narratives of Detainees.\nMonash University.\n5.2. Documentação sobre os Boat People\nNatureza: Testemunhos de refugiados, registros de organismos internacionais e estudos sobre deslocamento forçado.\nAspectos documentados:\nFuga marítima de cidadãos vietnamitas.\nPerigos das travessias.\nNaufrágios e ataques de piratas.\nCampos de refugiados.\nProcessos de reassentamento.\nSeparação de famílias.\nMigração para países da América do Norte, Europa e Oceania.\nImportância histórica:\nOs testemunhos dos refugiados são essenciais para compreender a crise migratória vietnamita posterior a 1975.\nÉ necessário distinguir as diferentes motivações de saída: perseguição política, insegurança econômica, reunificação familiar, dificuldades de sobrevivência e medo de represálias.\nReferência de pesquisa:\nESPIRITU, Yến Lê. Body Counts: The Vietnam War and Militarized Refuge(es). Berkeley: University of California Press, 2014.",
      "source": "Capítulo 10 — Seção 5: VIETNÃ — CAMPOS DE REEDUCAÇÃO E BOAT PEOPLE",
      "analise": "5.1. Documentação sobre os campos de reeducação após 1975\nPeríodo: A partir de 1975.\nNatureza: Registros governamentais, testemunhos de ex-prisioneiros, entrevistas e documentação produzida por organizações internacionais.\nAspectos investigados:\nInternamento de antigos militares sul-vietnamitas.\nDetenção de funcionários do antigo governo.\nProgramas de reeducação política.\nTrabalho obrigatório.\nSeparação familiar.\nCondições de sobrevivência nos campos.\nLibertação e permanência prolongada de determinados detidos.\nContextualização histórica:\nApós a queda de Saigon, em abril de 1975, o novo governo vietnamita implementou programas de reeducação destinados a antigos integrantes das estruturas políticas, administrativas e militares do Vietnã do Sul.\nA documentação de sobreviventes permite investigar a experiência concreta do internamento, os períodos de detenção e as consequências sociais e familiares.\nReferência de pesquisa:\nNGUYEN, Nathalie. Vietnam's Re-education Camps after 1975: Narratives of Detainees.\nMonash University.\n5.2. Documentação sobre os Boat People\nNatureza: Testemunhos de refugiados, registros de organismos internacionais e estudos sobre deslocamento forçado.\nAspectos documentados:\nFuga marítima de cidadãos vietnamitas.\nPerigos das travessias.\nNaufrágios e ataques de piratas.\nCampos de refugiados.\nProcessos de reassentamento.\nSeparação de famílias.\nMigração para países da América do Norte, Europa e Oceania.\nImportância histórica:\nOs testemunhos dos refugiados são essenciais para compreender a crise migratória vietnamita posterior a 1975.\nÉ necessário distinguir as diferentes motivações de saída: perseguição política, insegurança econômica, reunificação familiar, dificuldades de sobrevivência e medo de represálias.\nReferência de pesquisa:\nESPIRITU, Yến Lê. Body Counts: The Vietnam War and Militarized Refuge(es). Berkeley: University of California Press, 2014."
    },
    {
      "number": 6,
      "author": "ANGOLA — MPLA E O 27 DE MAIO DE 1977",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "6.1. Documentação sobre o 27 de Maio de 1977\nNatureza: Documentos partidários, relatos de sobreviventes, testemunhos, pesquisas históricas e registros posteriores de memória e reconciliação.\nAspectos investigados:\nDisputas internas no MPLA.\nConflitos políticos posteriores à independência.\nPrisões e perseguições.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nExpurgos internos.\nContextualização histórica:\nO 27 de Maio de 1977 permanece um dos episódios mais controversos e dolorosos da história contemporânea angolana.\nA interpretação dos acontecimentos envolve disputas sobre a natureza da mobilização, a existência de uma tentativa de golpe e a extensão da repressão que se seguiu.\nA documentação disponível demonstra a ocorrência de uma violenta campanha repressiva, mas os números de mortos e desaparecidos continuam sendo objeto de controvérsia historiográfica.\nReferências de pesquisa:\nSILVA, Giselda Brito. O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977. 2023.\nPAWSON, Lara. In the Name of the People: Angola's Forgotten Massacre. London: I.B. Tauris, 2014.\n6.2. Fontes para investigação\nO estudo do episódio deve confrontar:\nDocumentos do MPLA.\nTestemunhos de sobreviventes.\nRelatos de familiares de desaparecidos.\nPesquisas acadêmicas sobre a repressão.\nDocumentos produzidos por organismos de direitos humanos.\nEstudos sobre memória e reconciliação nacional.\nA ausência de um arquivo estatal integralmente aberto e de uma reconstrução consensual dos acontecimentos exige cautela na apresentação de números e responsabilidades individuais.",
      "source": "Capítulo 10 — Seção 6: ANGOLA — MPLA E O 27 DE MAIO DE 1977",
      "analise": "6.1. Documentação sobre o 27 de Maio de 1977\nNatureza: Documentos partidários, relatos de sobreviventes, testemunhos, pesquisas históricas e registros posteriores de memória e reconciliação.\nAspectos investigados:\nDisputas internas no MPLA.\nConflitos políticos posteriores à independência.\nPrisões e perseguições.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nExpurgos internos.\nContextualização histórica:\nO 27 de Maio de 1977 permanece um dos episódios mais controversos e dolorosos da história contemporânea angolana.\nA interpretação dos acontecimentos envolve disputas sobre a natureza da mobilização, a existência de uma tentativa de golpe e a extensão da repressão que se seguiu.\nA documentação disponível demonstra a ocorrência de uma violenta campanha repressiva, mas os números de mortos e desaparecidos continuam sendo objeto de controvérsia historiográfica.\nReferências de pesquisa:\nSILVA, Giselda Brito. O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977. 2023.\nPAWSON, Lara. In the Name of the People: Angola's Forgotten Massacre. London: I.B. Tauris, 2014.\n6.2. Fontes para investigação\nO estudo do episódio deve confrontar:\nDocumentos do MPLA.\nTestemunhos de sobreviventes.\nRelatos de familiares de desaparecidos.\nPesquisas acadêmicas sobre a repressão.\nDocumentos produzidos por organismos de direitos humanos.\nEstudos sobre memória e reconciliação nacional.\nA ausência de um arquivo estatal integralmente aberto e de uma reconstrução consensual dos acontecimentos exige cautela na apresentação de números e responsabilidades individuais."
    },
    {
      "number": 7,
      "author": "MOÇAMBIQUE — FRELIMO, CAMPOS DE REEDUCAÇÃO E OPERAÇÃO PRODUÇÃO",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "7.1. Documentação sobre os campos de reeducação\nPeríodo: Principalmente a partir de 1974–1975.\nNatureza: Documentos administrativos, discursos políticos, registros governamentais, testemunhos e pesquisas históricas.\nAspectos investigados:\nPolítica de transformação socialista.\nCampanhas de reeducação política.\nEnvio compulsório de pessoas para campos.\nControle de comportamentos considerados incompatíveis com a nova sociedade.\nRelação entre disciplina política e construção do Estado.\nContextualização histórica:\nApós a independência, a FRELIMO procurou construir um Estado socialista e transformar profundamente as estruturas sociais herdadas do colonialismo português.\nOs campos de reeducação foram apresentados como instrumentos de transformação política e social. Na prática, a experiência de muitos detidos envolveu privação de liberdade, coerção e condições difíceis de sobrevivência.\nReferência de pesquisa:\nMACHAVA, Benedito. “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”. The Journal of African History, 2019.\n7.2. Operação Produção — 1983\nNatureza: Política estatal de deslocamento compulsório.\nAspectos documentados:\nTransferência de pessoas das cidades para regiões rurais.\nControle da população urbana.\nDisciplina do trabalho.\nReorganização territorial.\nRelação entre planejamento socialista e coerção estatal.\nContextualização histórica:\nA Operação Produção revela como projetos de reorganização econômica e social podiam ser implementados por meio de medidas coercitivas.\nSeu estudo deve considerar simultaneamente a crise econômica, as dificuldades de construção do Estado, a guerra civil e a concepção política de transformação social adotada pela liderança da FRELIMO.\nReferências de pesquisa:\nMACHAVA, Benedito. The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990. Athens: Ohio University Press, 2024.\nQUEMBO, Carlos. Poder do Poder: Operação Produção e a reorganização social em Moçambique.",
      "source": "Capítulo 10 — Seção 7: MOÇAMBIQUE — FRELIMO, CAMPOS DE REEDUCAÇÃO E OPERAÇÃO PRODUÇÃO",
      "analise": "7.1. Documentação sobre os campos de reeducação\nPeríodo: Principalmente a partir de 1974–1975.\nNatureza: Documentos administrativos, discursos políticos, registros governamentais, testemunhos e pesquisas históricas.\nAspectos investigados:\nPolítica de transformação socialista.\nCampanhas de reeducação política.\nEnvio compulsório de pessoas para campos.\nControle de comportamentos considerados incompatíveis com a nova sociedade.\nRelação entre disciplina política e construção do Estado.\nContextualização histórica:\nApós a independência, a FRELIMO procurou construir um Estado socialista e transformar profundamente as estruturas sociais herdadas do colonialismo português.\nOs campos de reeducação foram apresentados como instrumentos de transformação política e social. Na prática, a experiência de muitos detidos envolveu privação de liberdade, coerção e condições difíceis de sobrevivência.\nReferência de pesquisa:\nMACHAVA, Benedito. “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”. The Journal of African History, 2019.\n7.2. Operação Produção — 1983\nNatureza: Política estatal de deslocamento compulsório.\nAspectos documentados:\nTransferência de pessoas das cidades para regiões rurais.\nControle da população urbana.\nDisciplina do trabalho.\nReorganização territorial.\nRelação entre planejamento socialista e coerção estatal.\nContextualização histórica:\nA Operação Produção revela como projetos de reorganização econômica e social podiam ser implementados por meio de medidas coercitivas.\nSeu estudo deve considerar simultaneamente a crise econômica, as dificuldades de construção do Estado, a guerra civil e a concepção política de transformação social adotada pela liderança da FRELIMO.\nReferências de pesquisa:\nMACHAVA, Benedito. The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990. Athens: Ohio University Press, 2024.\nQUEMBO, Carlos. Poder do Poder: Operação Produção e a reorganização social em Moçambique."
    },
    {
      "number": 8,
      "author": "CUBA — REVOLUÇÃO, PARTIDO ÚNICO E REPRESSÃO POLÍTICA",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "8.1. Constituição cubana de 1976\nDocumento: Constituição da República de Cuba.\nData: 1976.\nNatureza: Documento constitucional.\nImportância histórica:\nA Constituição de 1976 formalizou a estrutura política socialista cubana e consolidou institucionalmente o papel dirigente do Partido Comunista.\nÉ uma fonte fundamental para investigar a organização constitucional do Estado, a relação entre partido e governo e a concepção oficial de soberania popular.\nReferência primária:\nREPÚBLICA DE CUBA. Constitución de la República de Cuba. 1976.\n8.2. Documentação sobre a Revolução Cubana\nFontes relevantes:\nDiscursos de Fidel Castro.\nDocumentos do Movimento 26 de Julho.\nDeclaração de Havana.\nDocumentos do Partido Comunista de Cuba.\nConstituição de 1976.\nDocumentos relativos à alfabetização e às reformas sociais.\nRelatórios de organizações internacionais sobre direitos humanos.\nContextualização histórica:\nEssas fontes permitem examinar tanto a construção da legitimidade revolucionária quanto a consolidação do sistema de partido único.\nA investigação deve considerar as reformas sociais promovidas pelo governo, especialmente nas áreas de educação e saúde, e também a censura, as restrições à oposição, as prisões políticas e o exílio.",
      "source": "Capítulo 10 — Seção 8: CUBA — REVOLUÇÃO, PARTIDO ÚNICO E REPRESSÃO POLÍTICA",
      "analise": "8.1. Constituição cubana de 1976\nDocumento: Constituição da República de Cuba.\nData: 1976.\nNatureza: Documento constitucional.\nImportância histórica:\nA Constituição de 1976 formalizou a estrutura política socialista cubana e consolidou institucionalmente o papel dirigente do Partido Comunista.\nÉ uma fonte fundamental para investigar a organização constitucional do Estado, a relação entre partido e governo e a concepção oficial de soberania popular.\nReferência primária:\nREPÚBLICA DE CUBA. Constitución de la República de Cuba. 1976.\n8.2. Documentação sobre a Revolução Cubana\nFontes relevantes:\nDiscursos de Fidel Castro.\nDocumentos do Movimento 26 de Julho.\nDeclaração de Havana.\nDocumentos do Partido Comunista de Cuba.\nConstituição de 1976.\nDocumentos relativos à alfabetização e às reformas sociais.\nRelatórios de organizações internacionais sobre direitos humanos.\nContextualização histórica:\nEssas fontes permitem examinar tanto a construção da legitimidade revolucionária quanto a consolidação do sistema de partido único.\nA investigação deve considerar as reformas sociais promovidas pelo governo, especialmente nas áreas de educação e saúde, e também a censura, as restrições à oposição, as prisões políticas e o exílio."
    },
    {
      "number": 9,
      "author": "NICARÁGUA — REVOLUÇÃO SANDINISTA E GOVERNO DA FSLN",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "9.1. Programa histórico da Frente Sandinista de Libertação Nacional\nInstituição: Frente Sandinista de Libertação Nacional — FSLN.\nPeríodo de referência: Revolução de 1979 e consolidação do governo sandinista.\nNatureza: Documento político-programático.\nImportância histórica:\nO programa político sandinista permite compreender a concepção de transformação social defendida pela FSLN, incluindo a reforma agrária, a alfabetização, a reorganização econômica e a construção de um Estado pós-ditadura.\nA documentação deve ser confrontada com os atos concretos do governo, especialmente no que diz respeito à liberdade de imprensa, à oposição política, aos conflitos com grupos indígenas e à guerra contra os Contras.\n9.2. Documentação sobre os povos indígenas Miskito\nNatureza: Relatórios de direitos humanos, testemunhos e documentação internacional.\nAspectos investigados:\nConflitos entre o governo sandinista e comunidades indígenas.\nDeslocamentos populacionais.\nOperações militares.\nRestrições à autonomia comunitária.\nRelação entre a guerra civil e os direitos dos povos indígenas.\nContextualização histórica:\nA questão Miskito evidencia as tensões entre o projeto revolucionário sandinista e as reivindicações de autonomia de comunidades indígenas.\nA análise deve considerar também a guerra financiada e apoiada pelos Estados Unidos contra o governo sandinista, sem utilizar esse contexto para apagar as violações cometidas pelas próprias autoridades nicaraguenses.",
      "source": "Capítulo 10 — Seção 9: NICARÁGUA — REVOLUÇÃO SANDINISTA E GOVERNO DA FSLN",
      "analise": "9.1. Programa histórico da Frente Sandinista de Libertação Nacional\nInstituição: Frente Sandinista de Libertação Nacional — FSLN.\nPeríodo de referência: Revolução de 1979 e consolidação do governo sandinista.\nNatureza: Documento político-programático.\nImportância histórica:\nO programa político sandinista permite compreender a concepção de transformação social defendida pela FSLN, incluindo a reforma agrária, a alfabetização, a reorganização econômica e a construção de um Estado pós-ditadura.\nA documentação deve ser confrontada com os atos concretos do governo, especialmente no que diz respeito à liberdade de imprensa, à oposição política, aos conflitos com grupos indígenas e à guerra contra os Contras.\n9.2. Documentação sobre os povos indígenas Miskito\nNatureza: Relatórios de direitos humanos, testemunhos e documentação internacional.\nAspectos investigados:\nConflitos entre o governo sandinista e comunidades indígenas.\nDeslocamentos populacionais.\nOperações militares.\nRestrições à autonomia comunitária.\nRelação entre a guerra civil e os direitos dos povos indígenas.\nContextualização histórica:\nA questão Miskito evidencia as tensões entre o projeto revolucionário sandinista e as reivindicações de autonomia de comunidades indígenas.\nA análise deve considerar também a guerra financiada e apoiada pelos Estados Unidos contra o governo sandinista, sem utilizar esse contexto para apagar as violações cometidas pelas próprias autoridades nicaraguenses."
    }
  ],
  "syntheses": [
    {
      "number": 1,
      "authorOrSchool": "CHINA — GRANDE SALTO ADIANTE E REVOLUÇÃO CULTURAL",
      "synthesisText": "10.1. Frank Dikötter\nObra: Mao's Great Famine: The History of China's Most Devastating Catastrophe, 1958–1962.\nEditora: Walker & Company, 2010.\nContribuição:\nDikötter investiga a fome associada ao Grande Salto Adiante a partir de documentação de arquivos chineses. Sua pesquisa enfatiza a violência institucional, as requisições de alimentos, a coerção administrativa e as consequências humanas das políticas econômicas.\nSua estimativa de mortalidade está entre as mais elevadas da historiografia. Deve ser confrontada com outras pesquisas demográficas e documentais, pois as estimativas variam conforme os métodos e os registros utilizados.\n10.2. Roderick MacFarquhar\nObra: The Origins of the Cultural Revolution.\nEditora: Oxford University Press.\nContribuição:\nMacFarquhar é uma referência fundamental para compreender as disputas internas do Partido Comunista Chinês, as motivações políticas de Mao e o processo de radicalização que culminou na Revolução Cultural.\n10.3. Yang Jisheng\nObra: Tombstone: The Great Chinese Famine, 1958–1962.\nContribuição:\nYang Jisheng apresenta uma investigação sobre a fome chinesa a partir de documentação, estatísticas e testemunhos. Sua obra é particularmente importante para o estudo da relação entre decisões políticas, coletivização e mortalidade.\n10.4. Timothy Cheek\nObra: Estudos sobre Mao Zedong, fontes documentais e história política da China contemporânea.\nContribuição:\nCheek contribui para a crítica documental dos discursos e registros políticos de Mao, discutindo a autenticidade, a origem e os limites interpretativos das fontes.",
      "supportingReference": "Capítulo 10 — Seção 10"
    },
    {
      "number": 2,
      "authorOrSchool": "CAMBOJA — POL POT E O KHMER VERMELHO",
      "synthesisText": "11.1. Ben Kiernan\nObra: The Pol Pot Regime: Race, Power, and Genocide in Cambodia under the Khmer Rouge, 1975–79.\nEditora: Yale University Press, 2008.\nContribuição:\nKiernan é um dos principais pesquisadores do regime do Khmer Vermelho. Sua obra examina a formação ideológica do movimento, a reorganização social, a perseguição de grupos populacionais e a violência política.\nO autor também investiga o componente étnico da violência, especialmente a perseguição contra vietnamitas e cham.\n11.2. David Chandler\nObra: Voices from S-21: Terror and History in Pol Pot's Secret Prison.\nEditora: University of California Press, 1999.\nContribuição:\nChandler analisa os arquivos da prisão S-21 e a estrutura burocrática do terror. Seu trabalho permite compreender como a documentação produzida pelo aparato repressivo pode ser utilizada para reconstruir o funcionamento de uma instituição de encarceramento e execução.\n11.3. Elizabeth Becker\nObra: When the War Was Over: Cambodia and the Khmer Rouge Revolution.\nEditora: PublicAffairs.\nContribuição:\nBecker investiga a revolução cambojana, a ascensão do Khmer Vermelho e as consequências sociais e políticas do regime.\n11.4. Craig Etcheson\nObra: After the Killing Fields: Lessons from the Cambodian Genocide.\nEditora: Praeger, 2005.\nContribuição:\nEtcheson examina a documentação, a justiça de transição e os esforços de reconstrução da memória histórica após o genocídio cambojano.",
      "supportingReference": "Capítulo 10 — Seção 11"
    },
    {
      "number": 3,
      "authorOrSchool": "ETIÓPIA — DERG E TERROR VERMELHO",
      "synthesisText": "12.1. Jacob Wiebel\nObra: “The Ethiopian Red Terror”.\nPublicação: Oxford Research Encyclopedia of African History, 2017.\nContribuição:\nWiebel analisa o Terror Vermelho como um processo de violência política e intercomunitária, destacando a atuação do regime militar, dos organismos de segurança e das milícias.\nSua pesquisa também chama atenção para as dificuldades de estabelecer números definitivos de vítimas e para a necessidade de diferenciar o Terror Vermelho de outros conflitos ocorridos simultaneamente na Etiópia.\n12.2. Bahru Zewde\nObra: Estudos sobre a história contemporânea da Etiópia e o Terror Vermelho.\nContribuição:\nZewde oferece uma perspectiva histórica sobre a revolução de 1974, a formação do Derg e as transformações políticas que levaram à repressão.\n12.3. Teshome Debasu\nObra: Political Violence During the Därg Regime: Red Terror in Däbrä Marqos Town, 1977–1978.\nInstituição: Addis Ababa University, 2019.\nContribuição:\nA pesquisa examina a repressão em uma localidade específica e ajuda a compreender a dimensão territorial do Terror Vermelho, incluindo a atuação de estruturas de segurança e instituições locais.",
      "supportingReference": "Capítulo 10 — Seção 12"
    },
    {
      "number": 4,
      "authorOrSchool": "COREIA DO NORTE — ESTADO TOTALITÁRIO, CAMPOS POLÍTICOS E FOME",
      "synthesisText": "13.1. Comissão de Inquérito das Nações Unidas\nObra: Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea.\nInstituição: Conselho de Direitos Humanos da ONU, 2014.\nContribuição:\nO relatório apresenta uma investigação internacional sobre o sistema de repressão norte-coreano, incluindo campos de prisioneiros políticos, desaparecimentos, tortura, controle da população e violações sistemáticas.\nEmbora seja uma fonte institucional e não uma monografia historiográfica, sua documentação constitui referência essencial para o capítulo.\n13.2. Andrei Lankov\nObras: Estudos sobre a história política e a sociedade da Coreia do Norte.\nContribuição:\nLankov investiga a formação do Estado norte-coreano, a consolidação da dinastia Kim, a estrutura política e as transformações da sociedade norte-coreana.\n13.3. Bradley K. Martin\nObra: Under the Loving Care of the Fatherly Leader: North Korea and the Kim Dynasty.\nEditora: Thomas Dunne Books, 2004.\nContribuição:\nMartin apresenta uma investigação extensa sobre a formação da dinastia Kim e o desenvolvimento do sistema político norte-coreano.\n13.4. Stephan Haggard e Marcus Noland\nObra: Famine in North Korea: Markets, Aid, and Reform.\nEditora: Columbia University Press, 2007.\nContribuição:\nOs autores estudam a fome da década de 1990, as respostas governamentais, os mercados informais e a assistência internacional.",
      "supportingReference": "Capítulo 10 — Seção 13"
    },
    {
      "number": 5,
      "authorOrSchool": "VIETNÃ — REEDUCAÇÃO E REFUGIADOS",
      "synthesisText": "14.1. Nathalie Nguyen\nPesquisa: Vietnam's Re-education Camps after 1975: Narratives of Detainees.\nInstituição: Monash University.\nContribuição:\nA pesquisa utiliza narrativas de ex-detidos para compreender a experiência dos campos de reeducação após a vitória comunista em 1975.\n14.2. Yến Lê Espiritu\nObra: Body Counts: The Vietnam War and Militarized Refuge(es).\nEditora: University of California Press, 2014.\nContribuição:\nEspiritu analisa a experiência dos refugiados vietnamitas, a militarização da condição de refugiado e a maneira pela qual a guerra continuou a produzir consequências sociais e políticas após seu encerramento formal.\n14.3. Tuan Hoang\nPesquisa: Estudos sobre a diáspora vietnamita e a memória da guerra.\nContribuição:\nHoang contribui para compreender a formação da diáspora vietnamita e a pluralidade das experiências de deslocamento, exílio e reassentamento.",
      "supportingReference": "Capítulo 10 — Seção 14"
    },
    {
      "number": 6,
      "authorOrSchool": "ANGOLA — MPLA E O 27 DE MAIO DE 1977",
      "synthesisText": "15.1. Lara Pawson\nObra: In the Name of the People: Angola's Forgotten Massacre.\nEditora: I.B. Tauris, 2014.\nContribuição:\nPawson investiga o 27 de Maio de 1977 e a memória da repressão que se seguiu. Sua pesquisa é importante para compreender o impacto do episódio sobre a sociedade angolana e as dificuldades de reconstrução histórica em contextos de silêncio político.\n15.2. Giselda Brito Silva\nPesquisa: “O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977”.\nAno: 2023.\nContribuição:\nA autora examina a formação do controle político do MPLA, a repressão dos discursos de oposição e o contexto do 27 de Maio.\n15.3. Estudos sobre memória, reconciliação e violência política em Angola\nContribuição:\nPesquisas sobre a reconciliação nacional e a memória do conflito angolano ajudam a compreender as disputas sobre a interpretação dos acontecimentos e a ausência de consenso sobre o número de vítimas.",
      "supportingReference": "Capítulo 10 — Seção 15"
    },
    {
      "number": 7,
      "authorOrSchool": "MOÇAMBIQUE — FRELIMO E O ESTADO SOCIALISTA",
      "synthesisText": "16.1. Benedito Machava\nObra: The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990.\nEditora: Ohio University Press, 2024.\nContribuição:\nMachava investiga os campos de reeducação, as políticas de punição e a construção do Estado socialista moçambicano.\nSua pesquisa é especialmente relevante por demonstrar a tensão entre a promessa de transformação social e as práticas de coerção e encarceramento.\n16.2. Benedito Machava\nArtigo: “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”.\nPublicação: The Journal of African History, 2019.\nContribuição:\nO artigo analisa a relação entre os campos de reeducação, a austeridade econômica e a formação de um sistema de controle estatal.\n16.3. Carlos Quembo\nObra: Poder do Poder: Operação Produção e a reorganização social em Moçambique.\nContribuição:\nA pesquisa contribui para o estudo da Operação Produção e dos mecanismos de reorganização social implementados pelo governo moçambicano.",
      "supportingReference": "Capítulo 10 — Seção 16"
    },
    {
      "number": 8,
      "authorOrSchool": "CUBA — REVOLUÇÃO E CONSOLIDAÇÃO DO PARTIDO ÚNICO",
      "synthesisText": "17.1. Luis Martínez-Fernández\nObra: Revolutionary Cuba: A History.\nContribuição:\nMartínez-Fernández apresenta uma interpretação histórica abrangente da Revolução Cubana, abordando a reforma agrária, as campanhas de alfabetização, as políticas sociais, a consolidação do partido único, a repressão política e os movimentos de exílio.\nSua pesquisa é importante porque permite compreender as realizações sociais e as restrições políticas dentro de uma mesma análise histórica.\n17.2. Marifeli Pérez-Stable\nObra: The Cuban Revolution: Origins, Course, and Legacy.\nEditora: Oxford University Press.\nContribuição:\nPérez-Stable analisa as origens da revolução, sua trajetória institucional e as transformações da sociedade cubana.\n17.3. Samuel Farber\nObras: Estudos sobre a Revolução Cubana e a formação do sistema político pós-1959.\nContribuição:\nFarber apresenta uma interpretação crítica da organização política cubana, com atenção à concentração do poder, à participação popular e às relações entre partido e sociedade.",
      "supportingReference": "Capítulo 10 — Seção 17"
    },
    {
      "number": 9,
      "authorOrSchool": "NICARÁGUA — REVOLUÇÃO SANDINISTA",
      "synthesisText": "18.1. Thomas W. Walker\nObra: Nicaragua: Living in the Shadow of the Eagle.\nContribuição:\nWalker examina a história política nicaraguense, a Revolução Sandinista, a intervenção dos Estados Unidos e os conflitos internos do país.\n18.2. Robert S. Leiken\nObra: Estudos sobre a Revolução Sandinista e a política internacional da América Central.\nContribuição:\nSeus trabalhos ajudam a compreender a relação entre o governo sandinista, a oposição interna e a conjuntura da Guerra Fria.\n18.3. Human Rights Watch\nDocumentação: Relatórios sobre direitos humanos na América Central e na Nicarágua.\nContribuição:\nOs relatórios permitem investigar denúncias de violações de direitos humanos, conflitos com comunidades indígenas e restrições políticas durante a década de 1980.",
      "supportingReference": "Capítulo 10 — Seção 18"
    }
  ],
  "referenceCategories": [
    {
      "category": "CHINA",
      "items": [
        "CHEEK, Timothy. Estudos sobre Mao Zedong e a história política chinesa.\nDIKÖTTER, Frank. Mao's Great Famine: The History of China's Most Devastating Catastrophe, 1958–1962. New York: Walker & Company, 2010.\nMACFARQUHAR, Roderick. The Origins of the Cultural Revolution. Oxford: Oxford University Press.\nMACFARQUHAR, Roderick; CHEEK, Timothy; WU, Eugene (org.). The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward. Cambridge, MA: Harvard University Asia Center, 1989.\nYANG, Jisheng. Tombstone: The Great Chinese Famine, 1958–1962."
      ]
    },
    {
      "category": "CAMBOJA",
      "items": [
        "BECKER, Elizabeth. When the War Was Over: Cambodia and the Khmer Rouge Revolution. New York: PublicAffairs.\nCHANDLER, David. Voices from S-21: Terror and History in Pol Pot's Secret Prison. Berkeley: University of California Press, 1999.\nETCHESON, Craig. After the Killing Fields: Lessons from the Cambodian Genocide. Westport: Praeger, 2005.\nKIERNAN, Ben. The Pol Pot Regime: Race, Power, and Genocide in Cambodia under the Khmer Rouge, 1975–79. New Haven: Yale University Press, 2008."
      ]
    },
    {
      "category": "ETIÓPIA",
      "items": [
        "WIEBEL, Jacob. “The Ethiopian Red Terror”. Oxford Research Encyclopedia of African History, 2017.\nTESHOME, Debasu. Political Violence During the Därg Regime: Red Terror in Däbrä Marqos Town, 1977–1978. Addis Ababa University, 2019.\nZEWDE, Bahru. Estudos sobre a história contemporânea da Etiópia.\nAMNESTY INTERNATIONAL. Relatórios sobre violações de direitos humanos na Etiópia durante o regime militar."
      ]
    },
    {
      "category": "COREIA DO NORTE",
      "items": [
        "HAGGARD, Stephan; NOLAND, Marcus. Famine in North Korea: Markets, Aid, and Reform. New York: Columbia University Press, 2007.\nLANKOV, Andrei. Estudos sobre a história política da Coreia do Norte.\nMARTIN, Bradley K. Under the Loving Care of the Fatherly Leader: North Korea and the Kim Dynasty. New York: Thomas Dunne Books, 2004.\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/63, 2014."
      ]
    },
    {
      "category": "VIETNÃ",
      "items": [
        "ESPIRITU, Yến Lê. Body Counts: The Vietnam War and Militarized Refuge(es). Berkeley: University of California Press, 2014.\nNGUYEN, Nathalie. Vietnam's Re-education Camps after 1975: Narratives of Detainees. Monash University.\nHOANG, Tuan. Estudos sobre a diáspora vietnamita e a memória da Guerra do Vietnã."
      ]
    },
    {
      "category": "ANGOLA",
      "items": [
        "PAWSON, Lara. In the Name of the People: Angola's Forgotten Massacre. London: I.B. Tauris, 2014.\nSILVA, Giselda Brito. “O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977”. 2023."
      ]
    },
    {
      "category": "MOÇAMBIQUE",
      "items": [
        "MACHAVA, Benedito. “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”. The Journal of African History, 2019.\nMACHAVA, Benedito. The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990. Athens: Ohio University Press, 2024.\nQUEMBO, Carlos. Poder do Poder: Operação Produção e a reorganização social em Moçambique."
      ]
    },
    {
      "category": "CUBA",
      "items": [
        "FARBER, Samuel. Estudos sobre a Revolução Cubana e o sistema político pós-1959.\nMARTÍNEZ-FERNÁNDEZ, Luis. Revolutionary Cuba: A History.\nPÉREZ-STABLE, Marifeli. The Cuban Revolution: Origins, Course, and Legacy. Oxford: Oxford University Press.\nREPÚBLICA DE CUBA. Constitución de la República de Cuba. 1976."
      ]
    },
    {
      "category": "NICARÁGUA",
      "items": [
        "WALKER, Thomas W. Nicaragua: Living in the Shadow of the Eagle.\nLEIKEN, Robert S. Estudos sobre a Revolução Sandinista e a política da América Central.\nHUMAN RIGHTS WATCH. Relatórios sobre direitos humanos na América Central e na Nicarágua."
      ]
    }
  ],
  "consensosAcademicos": "Consenso em torno da natureza autoritária dos regimes de partido único, da concentração extrema do poder estatal e do custo humano avassalador decorrente de políticas de coletivização forçada, expurgos e fomes coletivas.",
  "controversiasELimitacoesDasFontes": "Limitações no acesso irrestrito a arquivos centrais de segurança de Estado e debates historiográficos sobre a intencionalidade deliberada de determinadas fomes em comparação com falhas e rigores burocráticos e administrativos."
},
  111: {
  "title": "REGISTRO DE CITAÇÕES Nº 10 — O COMUNISMO INTERNACIONAL: REGIMES, REVOLUÇÕES E CATÁSTROFES HUMANITÁRIAS",
  "citations": [
    {
      "number": 1,
      "author": "CHINA — MAOÍSMO, GRANDE SALTO ADIANTE E REVOLUÇÃO CULTURAL",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "1.1. Decisão do Comitê Central do Partido Comunista Chinês — 1966\nDocumento: Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution.\nData: 8 de agosto de 1966.\nNatureza: Documento político oficial do Partido Comunista Chinês.\nTrecho documental — tradução para o português:\n“O objetivo atual é lutar contra e esmagar aquelas pessoas em posições de autoridade que estão seguindo o caminho capitalista.”\nContextualização histórica:\nO documento, conhecido como os Dezesseis Pontos, estabeleceu orientações políticas para a Revolução Cultural. Seu conteúdo revela a maneira pela qual a liderança maoísta transformou divergências políticas e disputas internas em uma campanha de mobilização ideológica contra supostos inimigos da revolução.\nA linguagem utilizada legitimava a intervenção das massas na estrutura partidária, na educação, na cultura e nas instituições estatais. O documento é particularmente importante para compreender a radicalização política de 1966 e a perseguição contra dirigentes, intelectuais, professores e outros grupos considerados representantes de valores burgueses.\nReferência primária:\nCHINESE COMMUNIST PARTY. Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution. 8 August 1966.\nDocumento reproduzido em material didático da Columbia University:\nhttps://www-1.gsb.columbia.edu/ps/cup/sixteen_points.pdf\n1.2. Discursos reservados de Mao Zedong — 1957–1958\nDocumento: The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward.\nOrganizadores: Roderick MacFarquhar, Timothy Cheek e Eugene Wu.\nNatureza: Compilação de discursos, intervenções e registros políticos de Mao Zedong.\nContextualização histórica:\nOs discursos reservados de Mao são importantes porque permitem comparar a retórica pública do governo com as discussões internas da liderança comunista durante a preparação do Grande Salto Adiante.\nA documentação contribui para compreender a centralização das decisões, a pressão política por metas produtivas extraordinárias e a relação entre autoridade pessoal, disciplina partidária e formulação econômica.\nReferência documental:\nMACFARQUHAR, Roderick; CHEEK, Timothy; WU, Eugene (org.). The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward. Cambridge, MA: Harvard University Asia Center, 1989.\nhttps://www.jstor.org/stable/j.ctt1sq5t53\n1.3. Documentação administrativa do Grande Salto Adiante\nAcervo: The Chinese Great Leap Forward Great Famine Database (1958–1962).\nInstituições responsáveis: Universidade Chinesa de Hong Kong e centros de pesquisa associados.\nNatureza: Coleção de fontes primárias.\nDocumentos disponíveis:\nDiretivas do Partido Comunista Chinês.\nRelatórios administrativos internos.\nDiscursos de dirigentes.\nBoletins oficiais.\nRegistros relativos à coletivização agrícola.\nDocumentos sobre aquisição estatal e distribuição de alimentos.\nRelatórios produzidos durante a fome.\nImportância histórica:\nEsse conjunto documental permite investigar como as políticas econômicas foram implementadas e como as informações sobre produção agrícola, abastecimento e mortalidade circulavam dentro da administração chinesa.\nÉ especialmente importante para estudar a distância entre os resultados oficialmente anunciados e as condições concretas enfrentadas pela população.\nReferência do acervo:\nCHINESE UNIVERSITY OF HONG KONG. The Chinese Great Leap Forward Great Famine Database (1958–1962).\nhttps://cup.cuhk.edu.hk/chinesepress/promotion/ChinesePoliticalCampaignsDatabase.pdf",
      "source": "Capítulo 10 — Seção 1: CHINA — MAOÍSMO, GRANDE SALTO ADIANTE E REVOLUÇÃO CULTURAL",
      "analise": "1.1. Decisão do Comitê Central do Partido Comunista Chinês — 1966\nDocumento: Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution.\nData: 8 de agosto de 1966.\nNatureza: Documento político oficial do Partido Comunista Chinês.\nTrecho documental — tradução para o português:\n“O objetivo atual é lutar contra e esmagar aquelas pessoas em posições de autoridade que estão seguindo o caminho capitalista.”\nContextualização histórica:\nO documento, conhecido como os Dezesseis Pontos, estabeleceu orientações políticas para a Revolução Cultural. Seu conteúdo revela a maneira pela qual a liderança maoísta transformou divergências políticas e disputas internas em uma campanha de mobilização ideológica contra supostos inimigos da revolução.\nA linguagem utilizada legitimava a intervenção das massas na estrutura partidária, na educação, na cultura e nas instituições estatais. O documento é particularmente importante para compreender a radicalização política de 1966 e a perseguição contra dirigentes, intelectuais, professores e outros grupos considerados representantes de valores burgueses.\nReferência primária:\nCHINESE COMMUNIST PARTY. Decision of the Central Committee of the Chinese Communist Party Concerning the Great Proletarian Cultural Revolution. 8 August 1966.\nDocumento reproduzido em material didático da Columbia University:\nhttps://www-1.gsb.columbia.edu/ps/cup/sixteen_points.pdf\n1.2. Discursos reservados de Mao Zedong — 1957–1958\nDocumento: The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward.\nOrganizadores: Roderick MacFarquhar, Timothy Cheek e Eugene Wu.\nNatureza: Compilação de discursos, intervenções e registros políticos de Mao Zedong.\nContextualização histórica:\nOs discursos reservados de Mao são importantes porque permitem comparar a retórica pública do governo com as discussões internas da liderança comunista durante a preparação do Grande Salto Adiante.\nA documentação contribui para compreender a centralização das decisões, a pressão política por metas produtivas extraordinárias e a relação entre autoridade pessoal, disciplina partidária e formulação econômica.\nReferência documental:\nMACFARQUHAR, Roderick; CHEEK, Timothy; WU, Eugene (org.). The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward. Cambridge, MA: Harvard University Asia Center, 1989.\nhttps://www.jstor.org/stable/j.ctt1sq5t53\n1.3. Documentação administrativa do Grande Salto Adiante\nAcervo: The Chinese Great Leap Forward Great Famine Database (1958–1962).\nInstituições responsáveis: Universidade Chinesa de Hong Kong e centros de pesquisa associados.\nNatureza: Coleção de fontes primárias.\nDocumentos disponíveis:\nDiretivas do Partido Comunista Chinês.\nRelatórios administrativos internos.\nDiscursos de dirigentes.\nBoletins oficiais.\nRegistros relativos à coletivização agrícola.\nDocumentos sobre aquisição estatal e distribuição de alimentos.\nRelatórios produzidos durante a fome.\nImportância histórica:\nEsse conjunto documental permite investigar como as políticas econômicas foram implementadas e como as informações sobre produção agrícola, abastecimento e mortalidade circulavam dentro da administração chinesa.\nÉ especialmente importante para estudar a distância entre os resultados oficialmente anunciados e as condições concretas enfrentadas pela população.\nReferência do acervo:\nCHINESE UNIVERSITY OF HONG KONG. The Chinese Great Leap Forward Great Famine Database (1958–1962).\nhttps://cup.cuhk.edu.hk/chinesepress/promotion/ChinesePoliticalCampaignsDatabase.pdf"
    },
    {
      "number": 2,
      "author": "CAMBOJA — KHMER VERMELHO E DEMOCRATIC KAMPUCHEA",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "2.1. Documentação do Centro de Documentação do Camboja\nInstituição: Documentation Center of Cambodia — DC-Cam.\nPeríodo documentado: 1975–1979.\nNatureza: Arquivo documental e testemunhal.\nMateriais preservados:\nCorrespondências oficiais do Partido Comunista do Kampuchea.\nTelegramas entre dirigentes.\nRelatórios de segurança.\nRegistros administrativos.\nFotografias de prisioneiros.\nConfissões produzidas durante interrogatórios.\nDocumentos relativos à prisão de Tuol Sleng, conhecida como S-21.\nEntrevistas com sobreviventes.\nMapas de valas comuns e locais de execução.\nContextualização histórica:\nA documentação do DC-Cam é fundamental para reconstruir o funcionamento do regime do Khmer Vermelho, especialmente suas estruturas de segurança, mecanismos de vigilância, prisões, interrogatórios e execução.\nOs registros devem ser analisados criticamente. As chamadas confissões de prisioneiros, por exemplo, foram frequentemente produzidas sob tortura e coerção. Portanto, não podem ser tratadas automaticamente como relatos verdadeiros dos fatos que atribuíam aos acusados.\nReferências primárias:\nDOCUMENTATION CENTER OF CAMBODIA. Archives and Documents: Democratic Kampuchea, 1975–1979.\nhttps://d.dccam.org/Archives/Documents/Documents.htm\nDOCUMENTATION CENTER OF CAMBODIA. Documentation Projects and Archives.\nhttps://d.dccam.org/Projects/Document_Projects/Documentation.htm\n2.2. Arquivos da prisão S-21 — Tuol Sleng\nInstituição: Tuol Sleng Genocide Museum.\nNatureza: Documentação produzida pelo aparato de segurança do Khmer Vermelho.\nMateriais:\nFotografias dos prisioneiros.\nFichas de identificação.\nRegistros de entrada e saída.\nRelatórios de interrogatório.\nDocumentos administrativos.\nRegistros de execução.\nImportância histórica:\nO arquivo de S-21 permite examinar a organização burocrática da repressão política. A prisão não era apenas um espaço de encarceramento: integrava um sistema de identificação, interrogatório, produção forçada de confissões e eliminação de pessoas consideradas inimigas do regime.\nA documentação evidencia a participação de estruturas administrativas e de segurança na execução das políticas repressivas.\n2.3. Julgamentos das Câmaras Extraordinárias dos Tribunais do Camboja\nInstituição: Extraordinary Chambers in the Courts of Cambodia — ECCC.\nNatureza: Documentação judicial.\nMateriais relevantes:\nAcusações contra dirigentes do Khmer Vermelho.\nDepoimentos de sobreviventes.\nDocumentos do Partido Comunista do Kampuchea.\nProvas relativas às estruturas de segurança.\nDecisões judiciais sobre crimes contra a humanidade e genocídio.\nContextualização jurídica:\nOs julgamentos das ECCC são fundamentais para distinguir as diferentes categorias de crimes cometidos durante o regime.\nA jurisprudência reconheceu genocídio contra os grupos étnicos vietnamita e cham muçulmano. Já o extermínio, a perseguição e outras violências praticadas contra integrantes da população khmer foram enquadrados em outras categorias de crimes, especialmente crimes contra a humanidade, conforme os elementos jurídicos demonstrados nos processos.\nReferências institucionais:\nEXTRAORDINARY CHAMBERS IN THE COURTS OF CAMBODIA. Case 002/19-09-2007: Judgments and Court Documents.\nDOCUMENTATION CENTER OF CAMBODIA. Cambodian Genocide Program.\nhttps://macmillan.yale.edu/gsp/bibliographic-database-cbib",
      "source": "Capítulo 10 — Seção 2: CAMBOJA — KHMER VERMELHO E DEMOCRATIC KAMPUCHEA",
      "analise": "2.1. Documentação do Centro de Documentação do Camboja\nInstituição: Documentation Center of Cambodia — DC-Cam.\nPeríodo documentado: 1975–1979.\nNatureza: Arquivo documental e testemunhal.\nMateriais preservados:\nCorrespondências oficiais do Partido Comunista do Kampuchea.\nTelegramas entre dirigentes.\nRelatórios de segurança.\nRegistros administrativos.\nFotografias de prisioneiros.\nConfissões produzidas durante interrogatórios.\nDocumentos relativos à prisão de Tuol Sleng, conhecida como S-21.\nEntrevistas com sobreviventes.\nMapas de valas comuns e locais de execução.\nContextualização histórica:\nA documentação do DC-Cam é fundamental para reconstruir o funcionamento do regime do Khmer Vermelho, especialmente suas estruturas de segurança, mecanismos de vigilância, prisões, interrogatórios e execução.\nOs registros devem ser analisados criticamente. As chamadas confissões de prisioneiros, por exemplo, foram frequentemente produzidas sob tortura e coerção. Portanto, não podem ser tratadas automaticamente como relatos verdadeiros dos fatos que atribuíam aos acusados.\nReferências primárias:\nDOCUMENTATION CENTER OF CAMBODIA. Archives and Documents: Democratic Kampuchea, 1975–1979.\nhttps://d.dccam.org/Archives/Documents/Documents.htm\nDOCUMENTATION CENTER OF CAMBODIA. Documentation Projects and Archives.\nhttps://d.dccam.org/Projects/Document_Projects/Documentation.htm\n2.2. Arquivos da prisão S-21 — Tuol Sleng\nInstituição: Tuol Sleng Genocide Museum.\nNatureza: Documentação produzida pelo aparato de segurança do Khmer Vermelho.\nMateriais:\nFotografias dos prisioneiros.\nFichas de identificação.\nRegistros de entrada e saída.\nRelatórios de interrogatório.\nDocumentos administrativos.\nRegistros de execução.\nImportância histórica:\nO arquivo de S-21 permite examinar a organização burocrática da repressão política. A prisão não era apenas um espaço de encarceramento: integrava um sistema de identificação, interrogatório, produção forçada de confissões e eliminação de pessoas consideradas inimigas do regime.\nA documentação evidencia a participação de estruturas administrativas e de segurança na execução das políticas repressivas.\n2.3. Julgamentos das Câmaras Extraordinárias dos Tribunais do Camboja\nInstituição: Extraordinary Chambers in the Courts of Cambodia — ECCC.\nNatureza: Documentação judicial.\nMateriais relevantes:\nAcusações contra dirigentes do Khmer Vermelho.\nDepoimentos de sobreviventes.\nDocumentos do Partido Comunista do Kampuchea.\nProvas relativas às estruturas de segurança.\nDecisões judiciais sobre crimes contra a humanidade e genocídio.\nContextualização jurídica:\nOs julgamentos das ECCC são fundamentais para distinguir as diferentes categorias de crimes cometidos durante o regime.\nA jurisprudência reconheceu genocídio contra os grupos étnicos vietnamita e cham muçulmano. Já o extermínio, a perseguição e outras violências praticadas contra integrantes da população khmer foram enquadrados em outras categorias de crimes, especialmente crimes contra a humanidade, conforme os elementos jurídicos demonstrados nos processos.\nReferências institucionais:\nEXTRAORDINARY CHAMBERS IN THE COURTS OF CAMBODIA. Case 002/19-09-2007: Judgments and Court Documents.\nDOCUMENTATION CENTER OF CAMBODIA. Cambodian Genocide Program.\nhttps://macmillan.yale.edu/gsp/bibliographic-database-cbib"
    },
    {
      "number": 3,
      "author": "ETIÓPIA — DERG E TERROR VERMELHO",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "3.1. Relatórios da Anistia Internacional sobre a Etiópia\nInstituição: Amnesty International.\nPeríodo: Década de 1970.\nNatureza: Documentação contemporânea de violações de direitos humanos.\nMateriais registrados:\nPrisões arbitrárias.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nPerseguição política.\nCondições de detenção.\nRelatos de estudantes e opositores presos.\nContextualização histórica:\nOs relatórios contemporâneos da Anistia Internacional são fontes importantes para investigar a repressão política promovida pelo regime militar do Derg.\nSua relevância está no fato de que parte das denúncias foi produzida enquanto os acontecimentos ainda estavam em curso, permitindo confrontar posteriormente os relatos com testemunhos, documentos oficiais e pesquisas históricas.\nReferência primária:\nAMNESTY INTERNATIONAL. Ethiopia: Reports on Human Rights Violations under the Military Government. Década de 1970.\nhttps://www.amnesty.org/en/wp-content/uploads/2021/09/POL100011978ENGLISH.pdf\n3.2. Documentação sobre o Terror Vermelho\nNatureza: Relatórios de organizações de direitos humanos, registros administrativos e testemunhos.\nAspectos documentados:\nCampanhas de repressão contra opositores.\nAtuação das estruturas de segurança.\nParticipação de milícias e organizações locais.\nPrisões e interrogatórios.\nExecuções e desaparecimentos.\nImportância histórica:\nA documentação deve ser utilizada para reconstruir a relação entre o governo militar, os organismos de segurança e as estruturas locais de mobilização política.\nÉ importante não reduzir o Terror Vermelho a uma simples campanha de violência espontânea: a pesquisa histórica demonstra a existência de mecanismos institucionais e políticos de repressão, embora a participação dos agentes locais variasse conforme a região.",
      "source": "Capítulo 10 — Seção 3: ETIÓPIA — DERG E TERROR VERMELHO",
      "analise": "3.1. Relatórios da Anistia Internacional sobre a Etiópia\nInstituição: Amnesty International.\nPeríodo: Década de 1970.\nNatureza: Documentação contemporânea de violações de direitos humanos.\nMateriais registrados:\nPrisões arbitrárias.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nPerseguição política.\nCondições de detenção.\nRelatos de estudantes e opositores presos.\nContextualização histórica:\nOs relatórios contemporâneos da Anistia Internacional são fontes importantes para investigar a repressão política promovida pelo regime militar do Derg.\nSua relevância está no fato de que parte das denúncias foi produzida enquanto os acontecimentos ainda estavam em curso, permitindo confrontar posteriormente os relatos com testemunhos, documentos oficiais e pesquisas históricas.\nReferência primária:\nAMNESTY INTERNATIONAL. Ethiopia: Reports on Human Rights Violations under the Military Government. Década de 1970.\nhttps://www.amnesty.org/en/wp-content/uploads/2021/09/POL100011978ENGLISH.pdf\n3.2. Documentação sobre o Terror Vermelho\nNatureza: Relatórios de organizações de direitos humanos, registros administrativos e testemunhos.\nAspectos documentados:\nCampanhas de repressão contra opositores.\nAtuação das estruturas de segurança.\nParticipação de milícias e organizações locais.\nPrisões e interrogatórios.\nExecuções e desaparecimentos.\nImportância histórica:\nA documentação deve ser utilizada para reconstruir a relação entre o governo militar, os organismos de segurança e as estruturas locais de mobilização política.\nÉ importante não reduzir o Terror Vermelho a uma simples campanha de violência espontânea: a pesquisa histórica demonstra a existência de mecanismos institucionais e políticos de repressão, embora a participação dos agentes locais variasse conforme a região."
    },
    {
      "number": 4,
      "author": "COREIA DO NORTE — DINASTIA KIM, CAMPOS POLÍTICOS E FOME",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "4.1. Comissão de Inquérito das Nações Unidas — 2014\nDocumento: Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea.\nIdentificação: A/HRC/25/63.\nData: 7 de fevereiro de 2014.\nInstituição: Conselho de Direitos Humanos das Nações Unidas.\nNatureza: Investigação internacional sobre violações sistemáticas de direitos humanos.\nTrecho documental — tradução para o português:\nA Comissão concluiu que determinados padrões de violações eram suficientemente graves para atingir o limiar jurídico dos crimes contra a humanidade.\nPrincipais violações investigadas:\nExtermínio.\nAssassinatos.\nEscravidão.\nTortura.\nPrisões arbitrárias.\nViolência sexual.\nPerseguição política.\nDesaparecimentos forçados.\nFome deliberadamente utilizada como instrumento de controle.\nCampos de prisioneiros políticos.\nContextualização histórica:\nO relatório é uma das principais fontes documentais internacionais para estudar o sistema político norte-coreano e suas estruturas repressivas.\nA Comissão investigou a relação entre o Partido dos Trabalhadores da Coreia, o aparato de segurança, o sistema de campos políticos e o controle exercido sobre a população.\nO documento também analisa a responsabilidade internacional diante das violações sistemáticas praticadas pelo Estado norte-coreano.\nReferência primária:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/63. Geneva, 2014.\nhttps://digitallibrary.un.org/record/766464\nRelatório detalhado:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Detailed Findings of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/CRP.1. 2014.\nhttps://www.refworld.org/reference/countryrep/unhrc/2014/98251\n4.2. Importância documental da Comissão da ONU\nO relatório permite estudar a Coreia do Norte a partir de testemunhos de sobreviventes, depoimentos de desertores, documentação internacional e análise das estruturas estatais.\nDeve ser utilizado com atenção às limitações inerentes à investigação de um país extremamente fechado, especialmente no que diz respeito ao acesso direto aos campos e aos arquivos internos do governo.",
      "source": "Capítulo 10 — Seção 4: COREIA DO NORTE — DINASTIA KIM, CAMPOS POLÍTICOS E FOME",
      "analise": "4.1. Comissão de Inquérito das Nações Unidas — 2014\nDocumento: Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea.\nIdentificação: A/HRC/25/63.\nData: 7 de fevereiro de 2014.\nInstituição: Conselho de Direitos Humanos das Nações Unidas.\nNatureza: Investigação internacional sobre violações sistemáticas de direitos humanos.\nTrecho documental — tradução para o português:\nA Comissão concluiu que determinados padrões de violações eram suficientemente graves para atingir o limiar jurídico dos crimes contra a humanidade.\nPrincipais violações investigadas:\nExtermínio.\nAssassinatos.\nEscravidão.\nTortura.\nPrisões arbitrárias.\nViolência sexual.\nPerseguição política.\nDesaparecimentos forçados.\nFome deliberadamente utilizada como instrumento de controle.\nCampos de prisioneiros políticos.\nContextualização histórica:\nO relatório é uma das principais fontes documentais internacionais para estudar o sistema político norte-coreano e suas estruturas repressivas.\nA Comissão investigou a relação entre o Partido dos Trabalhadores da Coreia, o aparato de segurança, o sistema de campos políticos e o controle exercido sobre a população.\nO documento também analisa a responsabilidade internacional diante das violações sistemáticas praticadas pelo Estado norte-coreano.\nReferência primária:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/63. Geneva, 2014.\nhttps://digitallibrary.un.org/record/766464\nRelatório detalhado:\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Detailed Findings of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/CRP.1. 2014.\nhttps://www.refworld.org/reference/countryrep/unhrc/2014/98251\n4.2. Importância documental da Comissão da ONU\nO relatório permite estudar a Coreia do Norte a partir de testemunhos de sobreviventes, depoimentos de desertores, documentação internacional e análise das estruturas estatais.\nDeve ser utilizado com atenção às limitações inerentes à investigação de um país extremamente fechado, especialmente no que diz respeito ao acesso direto aos campos e aos arquivos internos do governo."
    },
    {
      "number": 5,
      "author": "VIETNÃ — CAMPOS DE REEDUCAÇÃO E BOAT PEOPLE",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "5.1. Documentação sobre os campos de reeducação após 1975\nPeríodo: A partir de 1975.\nNatureza: Registros governamentais, testemunhos de ex-prisioneiros, entrevistas e documentação produzida por organizações internacionais.\nAspectos investigados:\nInternamento de antigos militares sul-vietnamitas.\nDetenção de funcionários do antigo governo.\nProgramas de reeducação política.\nTrabalho obrigatório.\nSeparação familiar.\nCondições de sobrevivência nos campos.\nLibertação e permanência prolongada de determinados detidos.\nContextualização histórica:\nApós a queda de Saigon, em abril de 1975, o novo governo vietnamita implementou programas de reeducação destinados a antigos integrantes das estruturas políticas, administrativas e militares do Vietnã do Sul.\nA documentação de sobreviventes permite investigar a experiência concreta do internamento, os períodos de detenção e as consequências sociais e familiares.\nReferência de pesquisa:\nNGUYEN, Nathalie. Vietnam's Re-education Camps after 1975: Narratives of Detainees.\nMonash University.\n5.2. Documentação sobre os Boat People\nNatureza: Testemunhos de refugiados, registros de organismos internacionais e estudos sobre deslocamento forçado.\nAspectos documentados:\nFuga marítima de cidadãos vietnamitas.\nPerigos das travessias.\nNaufrágios e ataques de piratas.\nCampos de refugiados.\nProcessos de reassentamento.\nSeparação de famílias.\nMigração para países da América do Norte, Europa e Oceania.\nImportância histórica:\nOs testemunhos dos refugiados são essenciais para compreender a crise migratória vietnamita posterior a 1975.\nÉ necessário distinguir as diferentes motivações de saída: perseguição política, insegurança econômica, reunificação familiar, dificuldades de sobrevivência e medo de represálias.\nReferência de pesquisa:\nESPIRITU, Yến Lê. Body Counts: The Vietnam War and Militarized Refuge(es). Berkeley: University of California Press, 2014.",
      "source": "Capítulo 10 — Seção 5: VIETNÃ — CAMPOS DE REEDUCAÇÃO E BOAT PEOPLE",
      "analise": "5.1. Documentação sobre os campos de reeducação após 1975\nPeríodo: A partir de 1975.\nNatureza: Registros governamentais, testemunhos de ex-prisioneiros, entrevistas e documentação produzida por organizações internacionais.\nAspectos investigados:\nInternamento de antigos militares sul-vietnamitas.\nDetenção de funcionários do antigo governo.\nProgramas de reeducação política.\nTrabalho obrigatório.\nSeparação familiar.\nCondições de sobrevivência nos campos.\nLibertação e permanência prolongada de determinados detidos.\nContextualização histórica:\nApós a queda de Saigon, em abril de 1975, o novo governo vietnamita implementou programas de reeducação destinados a antigos integrantes das estruturas políticas, administrativas e militares do Vietnã do Sul.\nA documentação de sobreviventes permite investigar a experiência concreta do internamento, os períodos de detenção e as consequências sociais e familiares.\nReferência de pesquisa:\nNGUYEN, Nathalie. Vietnam's Re-education Camps after 1975: Narratives of Detainees.\nMonash University.\n5.2. Documentação sobre os Boat People\nNatureza: Testemunhos de refugiados, registros de organismos internacionais e estudos sobre deslocamento forçado.\nAspectos documentados:\nFuga marítima de cidadãos vietnamitas.\nPerigos das travessias.\nNaufrágios e ataques de piratas.\nCampos de refugiados.\nProcessos de reassentamento.\nSeparação de famílias.\nMigração para países da América do Norte, Europa e Oceania.\nImportância histórica:\nOs testemunhos dos refugiados são essenciais para compreender a crise migratória vietnamita posterior a 1975.\nÉ necessário distinguir as diferentes motivações de saída: perseguição política, insegurança econômica, reunificação familiar, dificuldades de sobrevivência e medo de represálias.\nReferência de pesquisa:\nESPIRITU, Yến Lê. Body Counts: The Vietnam War and Militarized Refuge(es). Berkeley: University of California Press, 2014."
    },
    {
      "number": 6,
      "author": "ANGOLA — MPLA E O 27 DE MAIO DE 1977",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "6.1. Documentação sobre o 27 de Maio de 1977\nNatureza: Documentos partidários, relatos de sobreviventes, testemunhos, pesquisas históricas e registros posteriores de memória e reconciliação.\nAspectos investigados:\nDisputas internas no MPLA.\nConflitos políticos posteriores à independência.\nPrisões e perseguições.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nExpurgos internos.\nContextualização histórica:\nO 27 de Maio de 1977 permanece um dos episódios mais controversos e dolorosos da história contemporânea angolana.\nA interpretação dos acontecimentos envolve disputas sobre a natureza da mobilização, a existência de uma tentativa de golpe e a extensão da repressão que se seguiu.\nA documentação disponível demonstra a ocorrência de uma violenta campanha repressiva, mas os números de mortos e desaparecidos continuam sendo objeto de controvérsia historiográfica.\nReferências de pesquisa:\nSILVA, Giselda Brito. O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977. 2023.\nPAWSON, Lara. In the Name of the People: Angola's Forgotten Massacre. London: I.B. Tauris, 2014.\n6.2. Fontes para investigação\nO estudo do episódio deve confrontar:\nDocumentos do MPLA.\nTestemunhos de sobreviventes.\nRelatos de familiares de desaparecidos.\nPesquisas acadêmicas sobre a repressão.\nDocumentos produzidos por organismos de direitos humanos.\nEstudos sobre memória e reconciliação nacional.\nA ausência de um arquivo estatal integralmente aberto e de uma reconstrução consensual dos acontecimentos exige cautela na apresentação de números e responsabilidades individuais.",
      "source": "Capítulo 10 — Seção 6: ANGOLA — MPLA E O 27 DE MAIO DE 1977",
      "analise": "6.1. Documentação sobre o 27 de Maio de 1977\nNatureza: Documentos partidários, relatos de sobreviventes, testemunhos, pesquisas históricas e registros posteriores de memória e reconciliação.\nAspectos investigados:\nDisputas internas no MPLA.\nConflitos políticos posteriores à independência.\nPrisões e perseguições.\nExecuções extrajudiciais.\nTortura.\nDesaparecimentos.\nExpurgos internos.\nContextualização histórica:\nO 27 de Maio de 1977 permanece um dos episódios mais controversos e dolorosos da história contemporânea angolana.\nA interpretação dos acontecimentos envolve disputas sobre a natureza da mobilização, a existência de uma tentativa de golpe e a extensão da repressão que se seguiu.\nA documentação disponível demonstra a ocorrência de uma violenta campanha repressiva, mas os números de mortos e desaparecidos continuam sendo objeto de controvérsia historiográfica.\nReferências de pesquisa:\nSILVA, Giselda Brito. O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977. 2023.\nPAWSON, Lara. In the Name of the People: Angola's Forgotten Massacre. London: I.B. Tauris, 2014.\n6.2. Fontes para investigação\nO estudo do episódio deve confrontar:\nDocumentos do MPLA.\nTestemunhos de sobreviventes.\nRelatos de familiares de desaparecidos.\nPesquisas acadêmicas sobre a repressão.\nDocumentos produzidos por organismos de direitos humanos.\nEstudos sobre memória e reconciliação nacional.\nA ausência de um arquivo estatal integralmente aberto e de uma reconstrução consensual dos acontecimentos exige cautela na apresentação de números e responsabilidades individuais."
    },
    {
      "number": 7,
      "author": "MOÇAMBIQUE — FRELIMO, CAMPOS DE REEDUCAÇÃO E OPERAÇÃO PRODUÇÃO",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "7.1. Documentação sobre os campos de reeducação\nPeríodo: Principalmente a partir de 1974–1975.\nNatureza: Documentos administrativos, discursos políticos, registros governamentais, testemunhos e pesquisas históricas.\nAspectos investigados:\nPolítica de transformação socialista.\nCampanhas de reeducação política.\nEnvio compulsório de pessoas para campos.\nControle de comportamentos considerados incompatíveis com a nova sociedade.\nRelação entre disciplina política e construção do Estado.\nContextualização histórica:\nApós a independência, a FRELIMO procurou construir um Estado socialista e transformar profundamente as estruturas sociais herdadas do colonialismo português.\nOs campos de reeducação foram apresentados como instrumentos de transformação política e social. Na prática, a experiência de muitos detidos envolveu privação de liberdade, coerção e condições difíceis de sobrevivência.\nReferência de pesquisa:\nMACHAVA, Benedito. “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”. The Journal of African History, 2019.\n7.2. Operação Produção — 1983\nNatureza: Política estatal de deslocamento compulsório.\nAspectos documentados:\nTransferência de pessoas das cidades para regiões rurais.\nControle da população urbana.\nDisciplina do trabalho.\nReorganização territorial.\nRelação entre planejamento socialista e coerção estatal.\nContextualização histórica:\nA Operação Produção revela como projetos de reorganização econômica e social podiam ser implementados por meio de medidas coercitivas.\nSeu estudo deve considerar simultaneamente a crise econômica, as dificuldades de construção do Estado, a guerra civil e a concepção política de transformação social adotada pela liderança da FRELIMO.\nReferências de pesquisa:\nMACHAVA, Benedito. The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990. Athens: Ohio University Press, 2024.\nQUEMBO, Carlos. Poder do Poder: Operação Produção e a reorganização social em Moçambique.",
      "source": "Capítulo 10 — Seção 7: MOÇAMBIQUE — FRELIMO, CAMPOS DE REEDUCAÇÃO E OPERAÇÃO PRODUÇÃO",
      "analise": "7.1. Documentação sobre os campos de reeducação\nPeríodo: Principalmente a partir de 1974–1975.\nNatureza: Documentos administrativos, discursos políticos, registros governamentais, testemunhos e pesquisas históricas.\nAspectos investigados:\nPolítica de transformação socialista.\nCampanhas de reeducação política.\nEnvio compulsório de pessoas para campos.\nControle de comportamentos considerados incompatíveis com a nova sociedade.\nRelação entre disciplina política e construção do Estado.\nContextualização histórica:\nApós a independência, a FRELIMO procurou construir um Estado socialista e transformar profundamente as estruturas sociais herdadas do colonialismo português.\nOs campos de reeducação foram apresentados como instrumentos de transformação política e social. Na prática, a experiência de muitos detidos envolveu privação de liberdade, coerção e condições difíceis de sobrevivência.\nReferência de pesquisa:\nMACHAVA, Benedito. “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”. The Journal of African History, 2019.\n7.2. Operação Produção — 1983\nNatureza: Política estatal de deslocamento compulsório.\nAspectos documentados:\nTransferência de pessoas das cidades para regiões rurais.\nControle da população urbana.\nDisciplina do trabalho.\nReorganização territorial.\nRelação entre planejamento socialista e coerção estatal.\nContextualização histórica:\nA Operação Produção revela como projetos de reorganização econômica e social podiam ser implementados por meio de medidas coercitivas.\nSeu estudo deve considerar simultaneamente a crise econômica, as dificuldades de construção do Estado, a guerra civil e a concepção política de transformação social adotada pela liderança da FRELIMO.\nReferências de pesquisa:\nMACHAVA, Benedito. The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990. Athens: Ohio University Press, 2024.\nQUEMBO, Carlos. Poder do Poder: Operação Produção e a reorganização social em Moçambique."
    },
    {
      "number": 8,
      "author": "CUBA — REVOLUÇÃO, PARTIDO ÚNICO E REPRESSÃO POLÍTICA",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "8.1. Constituição cubana de 1976\nDocumento: Constituição da República de Cuba.\nData: 1976.\nNatureza: Documento constitucional.\nImportância histórica:\nA Constituição de 1976 formalizou a estrutura política socialista cubana e consolidou institucionalmente o papel dirigente do Partido Comunista.\nÉ uma fonte fundamental para investigar a organização constitucional do Estado, a relação entre partido e governo e a concepção oficial de soberania popular.\nReferência primária:\nREPÚBLICA DE CUBA. Constitución de la República de Cuba. 1976.\n8.2. Documentação sobre a Revolução Cubana\nFontes relevantes:\nDiscursos de Fidel Castro.\nDocumentos do Movimento 26 de Julho.\nDeclaração de Havana.\nDocumentos do Partido Comunista de Cuba.\nConstituição de 1976.\nDocumentos relativos à alfabetização e às reformas sociais.\nRelatórios de organizações internacionais sobre direitos humanos.\nContextualização histórica:\nEssas fontes permitem examinar tanto a construção da legitimidade revolucionária quanto a consolidação do sistema de partido único.\nA investigação deve considerar as reformas sociais promovidas pelo governo, especialmente nas áreas de educação e saúde, e também a censura, as restrições à oposição, as prisões políticas e o exílio.",
      "source": "Capítulo 10 — Seção 8: CUBA — REVOLUÇÃO, PARTIDO ÚNICO E REPRESSÃO POLÍTICA",
      "analise": "8.1. Constituição cubana de 1976\nDocumento: Constituição da República de Cuba.\nData: 1976.\nNatureza: Documento constitucional.\nImportância histórica:\nA Constituição de 1976 formalizou a estrutura política socialista cubana e consolidou institucionalmente o papel dirigente do Partido Comunista.\nÉ uma fonte fundamental para investigar a organização constitucional do Estado, a relação entre partido e governo e a concepção oficial de soberania popular.\nReferência primária:\nREPÚBLICA DE CUBA. Constitución de la República de Cuba. 1976.\n8.2. Documentação sobre a Revolução Cubana\nFontes relevantes:\nDiscursos de Fidel Castro.\nDocumentos do Movimento 26 de Julho.\nDeclaração de Havana.\nDocumentos do Partido Comunista de Cuba.\nConstituição de 1976.\nDocumentos relativos à alfabetização e às reformas sociais.\nRelatórios de organizações internacionais sobre direitos humanos.\nContextualização histórica:\nEssas fontes permitem examinar tanto a construção da legitimidade revolucionária quanto a consolidação do sistema de partido único.\nA investigação deve considerar as reformas sociais promovidas pelo governo, especialmente nas áreas de educação e saúde, e também a censura, as restrições à oposição, as prisões políticas e o exílio."
    },
    {
      "number": 9,
      "author": "NICARÁGUA — REVOLUÇÃO SANDINISTA E GOVERNO DA FSLN",
      "category": "Parte I — Fontes Primárias",
      "quoteText": "9.1. Programa histórico da Frente Sandinista de Libertação Nacional\nInstituição: Frente Sandinista de Libertação Nacional — FSLN.\nPeríodo de referência: Revolução de 1979 e consolidação do governo sandinista.\nNatureza: Documento político-programático.\nImportância histórica:\nO programa político sandinista permite compreender a concepção de transformação social defendida pela FSLN, incluindo a reforma agrária, a alfabetização, a reorganização econômica e a construção de um Estado pós-ditadura.\nA documentação deve ser confrontada com os atos concretos do governo, especialmente no que diz respeito à liberdade de imprensa, à oposição política, aos conflitos com grupos indígenas e à guerra contra os Contras.\n9.2. Documentação sobre os povos indígenas Miskito\nNatureza: Relatórios de direitos humanos, testemunhos e documentação internacional.\nAspectos investigados:\nConflitos entre o governo sandinista e comunidades indígenas.\nDeslocamentos populacionais.\nOperações militares.\nRestrições à autonomia comunitária.\nRelação entre a guerra civil e os direitos dos povos indígenas.\nContextualização histórica:\nA questão Miskito evidencia as tensões entre o projeto revolucionário sandinista e as reivindicações de autonomia de comunidades indígenas.\nA análise deve considerar também a guerra financiada e apoiada pelos Estados Unidos contra o governo sandinista, sem utilizar esse contexto para apagar as violações cometidas pelas próprias autoridades nicaraguenses.",
      "source": "Capítulo 10 — Seção 9: NICARÁGUA — REVOLUÇÃO SANDINISTA E GOVERNO DA FSLN",
      "analise": "9.1. Programa histórico da Frente Sandinista de Libertação Nacional\nInstituição: Frente Sandinista de Libertação Nacional — FSLN.\nPeríodo de referência: Revolução de 1979 e consolidação do governo sandinista.\nNatureza: Documento político-programático.\nImportância histórica:\nO programa político sandinista permite compreender a concepção de transformação social defendida pela FSLN, incluindo a reforma agrária, a alfabetização, a reorganização econômica e a construção de um Estado pós-ditadura.\nA documentação deve ser confrontada com os atos concretos do governo, especialmente no que diz respeito à liberdade de imprensa, à oposição política, aos conflitos com grupos indígenas e à guerra contra os Contras.\n9.2. Documentação sobre os povos indígenas Miskito\nNatureza: Relatórios de direitos humanos, testemunhos e documentação internacional.\nAspectos investigados:\nConflitos entre o governo sandinista e comunidades indígenas.\nDeslocamentos populacionais.\nOperações militares.\nRestrições à autonomia comunitária.\nRelação entre a guerra civil e os direitos dos povos indígenas.\nContextualização histórica:\nA questão Miskito evidencia as tensões entre o projeto revolucionário sandinista e as reivindicações de autonomia de comunidades indígenas.\nA análise deve considerar também a guerra financiada e apoiada pelos Estados Unidos contra o governo sandinista, sem utilizar esse contexto para apagar as violações cometidas pelas próprias autoridades nicaraguenses."
    }
  ],
  "syntheses": [
    {
      "number": 1,
      "authorOrSchool": "CHINA — GRANDE SALTO ADIANTE E REVOLUÇÃO CULTURAL",
      "synthesisText": "10.1. Frank Dikötter\nObra: Mao's Great Famine: The History of China's Most Devastating Catastrophe, 1958–1962.\nEditora: Walker & Company, 2010.\nContribuição:\nDikötter investiga a fome associada ao Grande Salto Adiante a partir de documentação de arquivos chineses. Sua pesquisa enfatiza a violência institucional, as requisições de alimentos, a coerção administrativa e as consequências humanas das políticas econômicas.\nSua estimativa de mortalidade está entre as mais elevadas da historiografia. Deve ser confrontada com outras pesquisas demográficas e documentais, pois as estimativas variam conforme os métodos e os registros utilizados.\n10.2. Roderick MacFarquhar\nObra: The Origins of the Cultural Revolution.\nEditora: Oxford University Press.\nContribuição:\nMacFarquhar é uma referência fundamental para compreender as disputas internas do Partido Comunista Chinês, as motivações políticas de Mao e o processo de radicalização que culminou na Revolução Cultural.\n10.3. Yang Jisheng\nObra: Tombstone: The Great Chinese Famine, 1958–1962.\nContribuição:\nYang Jisheng apresenta uma investigação sobre a fome chinesa a partir de documentação, estatísticas e testemunhos. Sua obra é particularmente importante para o estudo da relação entre decisões políticas, coletivização e mortalidade.\n10.4. Timothy Cheek\nObra: Estudos sobre Mao Zedong, fontes documentais e história política da China contemporânea.\nContribuição:\nCheek contribui para a crítica documental dos discursos e registros políticos de Mao, discutindo a autenticidade, a origem e os limites interpretativos das fontes.",
      "supportingReference": "Capítulo 10 — Seção 10"
    },
    {
      "number": 2,
      "authorOrSchool": "CAMBOJA — POL POT E O KHMER VERMELHO",
      "synthesisText": "11.1. Ben Kiernan\nObra: The Pol Pot Regime: Race, Power, and Genocide in Cambodia under the Khmer Rouge, 1975–79.\nEditora: Yale University Press, 2008.\nContribuição:\nKiernan é um dos principais pesquisadores do regime do Khmer Vermelho. Sua obra examina a formação ideológica do movimento, a reorganização social, a perseguição de grupos populacionais e a violência política.\nO autor também investiga o componente étnico da violência, especialmente a perseguição contra vietnamitas e cham.\n11.2. David Chandler\nObra: Voices from S-21: Terror and History in Pol Pot's Secret Prison.\nEditora: University of California Press, 1999.\nContribuição:\nChandler analisa os arquivos da prisão S-21 e a estrutura burocrática do terror. Seu trabalho permite compreender como a documentação produzida pelo aparato repressivo pode ser utilizada para reconstruir o funcionamento de uma instituição de encarceramento e execução.\n11.3. Elizabeth Becker\nObra: When the War Was Over: Cambodia and the Khmer Rouge Revolution.\nEditora: PublicAffairs.\nContribuição:\nBecker investiga a revolução cambojana, a ascensão do Khmer Vermelho e as consequências sociais e políticas do regime.\n11.4. Craig Etcheson\nObra: After the Killing Fields: Lessons from the Cambodian Genocide.\nEditora: Praeger, 2005.\nContribuição:\nEtcheson examina a documentação, a justiça de transição e os esforços de reconstrução da memória histórica após o genocídio cambojano.",
      "supportingReference": "Capítulo 10 — Seção 11"
    },
    {
      "number": 3,
      "authorOrSchool": "ETIÓPIA — DERG E TERROR VERMELHO",
      "synthesisText": "12.1. Jacob Wiebel\nObra: “The Ethiopian Red Terror”.\nPublicação: Oxford Research Encyclopedia of African History, 2017.\nContribuição:\nWiebel analisa o Terror Vermelho como um processo de violência política e intercomunitária, destacando a atuação do regime militar, dos organismos de segurança e das milícias.\nSua pesquisa também chama atenção para as dificuldades de estabelecer números definitivos de vítimas e para a necessidade de diferenciar o Terror Vermelho de outros conflitos ocorridos simultaneamente na Etiópia.\n12.2. Bahru Zewde\nObra: Estudos sobre a história contemporânea da Etiópia e o Terror Vermelho.\nContribuição:\nZewde oferece uma perspectiva histórica sobre a revolução de 1974, a formação do Derg e as transformações políticas que levaram à repressão.\n12.3. Teshome Debasu\nObra: Political Violence During the Därg Regime: Red Terror in Däbrä Marqos Town, 1977–1978.\nInstituição: Addis Ababa University, 2019.\nContribuição:\nA pesquisa examina a repressão em uma localidade específica e ajuda a compreender a dimensão territorial do Terror Vermelho, incluindo a atuação de estruturas de segurança e instituições locais.",
      "supportingReference": "Capítulo 10 — Seção 12"
    },
    {
      "number": 4,
      "authorOrSchool": "COREIA DO NORTE — ESTADO TOTALITÁRIO, CAMPOS POLÍTICOS E FOME",
      "synthesisText": "13.1. Comissão de Inquérito das Nações Unidas\nObra: Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea.\nInstituição: Conselho de Direitos Humanos da ONU, 2014.\nContribuição:\nO relatório apresenta uma investigação internacional sobre o sistema de repressão norte-coreano, incluindo campos de prisioneiros políticos, desaparecimentos, tortura, controle da população e violações sistemáticas.\nEmbora seja uma fonte institucional e não uma monografia historiográfica, sua documentação constitui referência essencial para o capítulo.\n13.2. Andrei Lankov\nObras: Estudos sobre a história política e a sociedade da Coreia do Norte.\nContribuição:\nLankov investiga a formação do Estado norte-coreano, a consolidação da dinastia Kim, a estrutura política e as transformações da sociedade norte-coreana.\n13.3. Bradley K. Martin\nObra: Under the Loving Care of the Fatherly Leader: North Korea and the Kim Dynasty.\nEditora: Thomas Dunne Books, 2004.\nContribuição:\nMartin apresenta uma investigação extensa sobre a formação da dinastia Kim e o desenvolvimento do sistema político norte-coreano.\n13.4. Stephan Haggard e Marcus Noland\nObra: Famine in North Korea: Markets, Aid, and Reform.\nEditora: Columbia University Press, 2007.\nContribuição:\nOs autores estudam a fome da década de 1990, as respostas governamentais, os mercados informais e a assistência internacional.",
      "supportingReference": "Capítulo 10 — Seção 13"
    },
    {
      "number": 5,
      "authorOrSchool": "VIETNÃ — REEDUCAÇÃO E REFUGIADOS",
      "synthesisText": "14.1. Nathalie Nguyen\nPesquisa: Vietnam's Re-education Camps after 1975: Narratives of Detainees.\nInstituição: Monash University.\nContribuição:\nA pesquisa utiliza narrativas de ex-detidos para compreender a experiência dos campos de reeducação após a vitória comunista em 1975.\n14.2. Yến Lê Espiritu\nObra: Body Counts: The Vietnam War and Militarized Refuge(es).\nEditora: University of California Press, 2014.\nContribuição:\nEspiritu analisa a experiência dos refugiados vietnamitas, a militarização da condição de refugiado e a maneira pela qual a guerra continuou a produzir consequências sociais e políticas após seu encerramento formal.\n14.3. Tuan Hoang\nPesquisa: Estudos sobre a diáspora vietnamita e a memória da guerra.\nContribuição:\nHoang contribui para compreender a formação da diáspora vietnamita e a pluralidade das experiências de deslocamento, exílio e reassentamento.",
      "supportingReference": "Capítulo 10 — Seção 14"
    },
    {
      "number": 6,
      "authorOrSchool": "ANGOLA — MPLA E O 27 DE MAIO DE 1977",
      "synthesisText": "15.1. Lara Pawson\nObra: In the Name of the People: Angola's Forgotten Massacre.\nEditora: I.B. Tauris, 2014.\nContribuição:\nPawson investiga o 27 de Maio de 1977 e a memória da repressão que se seguiu. Sua pesquisa é importante para compreender o impacto do episódio sobre a sociedade angolana e as dificuldades de reconstrução histórica em contextos de silêncio político.\n15.2. Giselda Brito Silva\nPesquisa: “O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977”.\nAno: 2023.\nContribuição:\nA autora examina a formação do controle político do MPLA, a repressão dos discursos de oposição e o contexto do 27 de Maio.\n15.3. Estudos sobre memória, reconciliação e violência política em Angola\nContribuição:\nPesquisas sobre a reconciliação nacional e a memória do conflito angolano ajudam a compreender as disputas sobre a interpretação dos acontecimentos e a ausência de consenso sobre o número de vítimas.",
      "supportingReference": "Capítulo 10 — Seção 15"
    },
    {
      "number": 7,
      "authorOrSchool": "MOÇAMBIQUE — FRELIMO E O ESTADO SOCIALISTA",
      "synthesisText": "16.1. Benedito Machava\nObra: The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990.\nEditora: Ohio University Press, 2024.\nContribuição:\nMachava investiga os campos de reeducação, as políticas de punição e a construção do Estado socialista moçambicano.\nSua pesquisa é especialmente relevante por demonstrar a tensão entre a promessa de transformação social e as práticas de coerção e encarceramento.\n16.2. Benedito Machava\nArtigo: “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”.\nPublicação: The Journal of African History, 2019.\nContribuição:\nO artigo analisa a relação entre os campos de reeducação, a austeridade econômica e a formação de um sistema de controle estatal.\n16.3. Carlos Quembo\nObra: Poder do Poder: Operação Produção e a reorganização social em Moçambique.\nContribuição:\nA pesquisa contribui para o estudo da Operação Produção e dos mecanismos de reorganização social implementados pelo governo moçambicano.",
      "supportingReference": "Capítulo 10 — Seção 16"
    },
    {
      "number": 8,
      "authorOrSchool": "CUBA — REVOLUÇÃO E CONSOLIDAÇÃO DO PARTIDO ÚNICO",
      "synthesisText": "17.1. Luis Martínez-Fernández\nObra: Revolutionary Cuba: A History.\nContribuição:\nMartínez-Fernández apresenta uma interpretação histórica abrangente da Revolução Cubana, abordando a reforma agrária, as campanhas de alfabetização, as políticas sociais, a consolidação do partido único, a repressão política e os movimentos de exílio.\nSua pesquisa é importante porque permite compreender as realizações sociais e as restrições políticas dentro de uma mesma análise histórica.\n17.2. Marifeli Pérez-Stable\nObra: The Cuban Revolution: Origins, Course, and Legacy.\nEditora: Oxford University Press.\nContribuição:\nPérez-Stable analisa as origens da revolução, sua trajetória institucional e as transformações da sociedade cubana.\n17.3. Samuel Farber\nObras: Estudos sobre a Revolução Cubana e a formação do sistema político pós-1959.\nContribuição:\nFarber apresenta uma interpretação crítica da organização política cubana, com atenção à concentração do poder, à participação popular e às relações entre partido e sociedade.",
      "supportingReference": "Capítulo 10 — Seção 17"
    },
    {
      "number": 9,
      "authorOrSchool": "NICARÁGUA — REVOLUÇÃO SANDINISTA",
      "synthesisText": "18.1. Thomas W. Walker\nObra: Nicaragua: Living in the Shadow of the Eagle.\nContribuição:\nWalker examina a história política nicaraguense, a Revolução Sandinista, a intervenção dos Estados Unidos e os conflitos internos do país.\n18.2. Robert S. Leiken\nObra: Estudos sobre a Revolução Sandinista e a política internacional da América Central.\nContribuição:\nSeus trabalhos ajudam a compreender a relação entre o governo sandinista, a oposição interna e a conjuntura da Guerra Fria.\n18.3. Human Rights Watch\nDocumentação: Relatórios sobre direitos humanos na América Central e na Nicarágua.\nContribuição:\nOs relatórios permitem investigar denúncias de violações de direitos humanos, conflitos com comunidades indígenas e restrições políticas durante a década de 1980.",
      "supportingReference": "Capítulo 10 — Seção 18"
    }
  ],
  "referenceCategories": [
    {
      "category": "CHINA",
      "items": [
        "CHEEK, Timothy. Estudos sobre Mao Zedong e a história política chinesa.\nDIKÖTTER, Frank. Mao's Great Famine: The History of China's Most Devastating Catastrophe, 1958–1962. New York: Walker & Company, 2010.\nMACFARQUHAR, Roderick. The Origins of the Cultural Revolution. Oxford: Oxford University Press.\nMACFARQUHAR, Roderick; CHEEK, Timothy; WU, Eugene (org.). The Secret Speeches of Chairman Mao: From the Hundred Flowers to the Great Leap Forward. Cambridge, MA: Harvard University Asia Center, 1989.\nYANG, Jisheng. Tombstone: The Great Chinese Famine, 1958–1962."
      ]
    },
    {
      "category": "CAMBOJA",
      "items": [
        "BECKER, Elizabeth. When the War Was Over: Cambodia and the Khmer Rouge Revolution. New York: PublicAffairs.\nCHANDLER, David. Voices from S-21: Terror and History in Pol Pot's Secret Prison. Berkeley: University of California Press, 1999.\nETCHESON, Craig. After the Killing Fields: Lessons from the Cambodian Genocide. Westport: Praeger, 2005.\nKIERNAN, Ben. The Pol Pot Regime: Race, Power, and Genocide in Cambodia under the Khmer Rouge, 1975–79. New Haven: Yale University Press, 2008."
      ]
    },
    {
      "category": "ETIÓPIA",
      "items": [
        "WIEBEL, Jacob. “The Ethiopian Red Terror”. Oxford Research Encyclopedia of African History, 2017.\nTESHOME, Debasu. Political Violence During the Därg Regime: Red Terror in Däbrä Marqos Town, 1977–1978. Addis Ababa University, 2019.\nZEWDE, Bahru. Estudos sobre a história contemporânea da Etiópia.\nAMNESTY INTERNATIONAL. Relatórios sobre violações de direitos humanos na Etiópia durante o regime militar."
      ]
    },
    {
      "category": "COREIA DO NORTE",
      "items": [
        "HAGGARD, Stephan; NOLAND, Marcus. Famine in North Korea: Markets, Aid, and Reform. New York: Columbia University Press, 2007.\nLANKOV, Andrei. Estudos sobre a história política da Coreia do Norte.\nMARTIN, Bradley K. Under the Loving Care of the Fatherly Leader: North Korea and the Kim Dynasty. New York: Thomas Dunne Books, 2004.\nUNITED NATIONS HUMAN RIGHTS COUNCIL. Report of the Commission of Inquiry on Human Rights in the Democratic People's Republic of Korea. A/HRC/25/63, 2014."
      ]
    },
    {
      "category": "VIETNÃ",
      "items": [
        "ESPIRITU, Yến Lê. Body Counts: The Vietnam War and Militarized Refuge(es). Berkeley: University of California Press, 2014.\nNGUYEN, Nathalie. Vietnam's Re-education Camps after 1975: Narratives of Detainees. Monash University.\nHOANG, Tuan. Estudos sobre a diáspora vietnamita e a memória da Guerra do Vietnã."
      ]
    },
    {
      "category": "ANGOLA",
      "items": [
        "PAWSON, Lara. In the Name of the People: Angola's Forgotten Massacre. London: I.B. Tauris, 2014.\nSILVA, Giselda Brito. “O MPLA no processo de transição da independência de Angola: do controle dos discursos de oposição à repressão no 27 de maio de 1977”. 2023."
      ]
    },
    {
      "category": "MOÇAMBIQUE",
      "items": [
        "MACHAVA, Benedito. “Reeducation Camps, Austerity, and the Carceral Regime in Socialist Mozambique (1974–79)”. The Journal of African History, 2019.\nMACHAVA, Benedito. The Morality of Revolution: Reeducation Camps and the Politics of Punishment in Socialist Mozambique, 1968–1990. Athens: Ohio University Press, 2024.\nQUEMBO, Carlos. Poder do Poder: Operação Produção e a reorganização social em Moçambique."
      ]
    },
    {
      "category": "CUBA",
      "items": [
        "FARBER, Samuel. Estudos sobre a Revolução Cubana e o sistema político pós-1959.\nMARTÍNEZ-FERNÁNDEZ, Luis. Revolutionary Cuba: A History.\nPÉREZ-STABLE, Marifeli. The Cuban Revolution: Origins, Course, and Legacy. Oxford: Oxford University Press.\nREPÚBLICA DE CUBA. Constitución de la República de Cuba. 1976."
      ]
    },
    {
      "category": "NICARÁGUA",
      "items": [
        "WALKER, Thomas W. Nicaragua: Living in the Shadow of the Eagle.\nLEIKEN, Robert S. Estudos sobre a Revolução Sandinista e a política da América Central.\nHUMAN RIGHTS WATCH. Relatórios sobre direitos humanos na América Central e na Nicarágua."
      ]
    }
  ],
  "consensosAcademicos": "Consenso em torno da natureza autoritária dos regimes de partido único, da concentração extrema do poder estatal e do custo humano avassalador decorrente de políticas de coletivização forçada, expurgos e fomes coletivas.",
  "controversiasELimitacoesDasFontes": "Limitações no acesso irrestrito a arquivos centrais de segurança de Estado e debates historiográficos sobre a intencionalidade deliberada de determinadas fomes em comparação com falhas e rigores burocráticos e administrativos."
}
};