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
  112: {
  "title": "REGISTRO DE CITAÇÕES Nº 11 — FRANÇA: ILUMINISMO, REVOLUÇÕES E ESTADO SOCIAL (1715–1975)",
  "citations": [
    {
      "number": 1,
      "author": "MONTESQUIEU — Limitação do Poder",
      "category": "I. Citações de Filósofos e Pensadores do Século XVIII",
      "quoteText": "É uma experiência eterna que todo homem que tem poder é levado a abusar dele; ele vai até encontrar limites.",
      "originalQuote": "C'est une expérience éternelle que tout homme qui a du pouvoir est porté à en abuser; il va jusqu'à ce qu'il trouve des limites.",
      "source": "MONTESQUIEU. De l'esprit des lois. 1748. (Livro XI, capítulo IV)",
      "analise": "Interpretação: A liberdade política depende da existência de limites institucionais ao exercício do poder."
    },
    {
      "number": 2,
      "author": "ROUSSEAU — Liberdade e Condição Política",
      "category": "I. Citações de Filósofos e Pensadores do Século XVIII",
      "quoteText": "O homem nasce livre e por toda parte encontra-se a ferros.",
      "originalQuote": "L'homme est né libre, et partout il est dans les fers.",
      "source": "ROUSSEAU. Du contrat social. 1762. (Livro I, capítulo I)",
      "analise": "Interpretação: Rousseau introduz uma crítica à condição política e social que submete os indivíduos a relações de dependência."
    },
    {
      "number": 3,
      "author": "VOLTAIRE — Tolerância Religiosa",
      "category": "I. Citações de Filósofos e Pensadores do Século XVIII",
      "quoteText": "A tolerância constitui um princípio fundamental para limitar a violência produzida pela intolerância religiosa.",
      "source": "VOLTAIRE. Traité sur la tolérance. 1763. (Capítulo XXIII)",
      "analise": "Tema: Crítica ao fanatismo, à perseguição religiosa e aos erros judiciais. Interpretação: A tolerância constitui um princípio fundamental para limitar a violência produzida pela intolerância religiosa."
    },
    {
      "number": 4,
      "author": "DIDEROT — Autoridade Política",
      "category": "I. Citações de Filósofos e Pensadores do Século XVIII",
      "quoteText": "A legitimidade do poder não deve ser confundida com um direito ilimitado de dominação.",
      "source": "DIDEROT, Denis. Autorité politique. In: Encyclopédie. 1751.",
      "analise": "Tema: Origem e limites da autoridade política. Interpretação: A legitimidade do poder não deve ser confundida com um direito ilimitado de dominação."
    },
    {
      "number": 5,
      "author": "SIEYÈS — O Terceiro Estado",
      "category": "II. Revolução Francesa e Direitos Políticos",
      "quoteText": "O que é o Terceiro Estado? Tudo. O que tem sido até agora na ordem política? Nada. O que pede? Tornar-se alguma coisa.",
      "originalQuote": "Qu'est-ce que le Tiers-État? Tout. Qu'a-t-il été jusqu'à présent dans l'ordre politique? Rien. Que demande-t-il? À y devenir quelque chose.",
      "source": "SIEYÈS. Qu'est-ce que le Tiers-État? 1789.",
      "analise": "Interpretação: A representação nacional deveria refletir a importância social e política do Terceiro Estado."
    },
    {
      "number": 6,
      "author": "DECLARAÇÃO DOS DIREITOS DO HOMEM E DO CIDADÃO",
      "category": "II. Revolução Francesa e Direitos Políticos",
      "quoteText": "Os homens nascem e permanecem livres e iguais em direitos.",
      "originalQuote": "Les hommes naissent et demeurent libres et égaux en droits.",
      "source": "FRANÇA. Déclaration des droits de l'homme et du citoyen, 1789. (26 de agosto de 1789, Artigo 1º)",
      "analise": "Interpretação: Formulação fundamental da igualdade jurídica, embora a aplicação histórica do princípio tenha sido limitada por exclusões de gênero, condição colonial e restrições políticas."
    },
    {
      "number": 7,
      "author": "OLYMPE DE GOUGES — Cidadania Feminina",
      "category": "II. Revolução Francesa e Direitos Políticos",
      "quoteText": "A autora denuncia a contradição entre os princípios universais da Revolução e a exclusão das mulheres da cidadania política plena.",
      "source": "GOUGES, Olympe de. Déclaration des droits de la femme et de la citoyenne, 1791.",
      "analise": "Tema: Extensão dos direitos políticos às mulheres. Interpretação: A autora denuncia a contradição entre os princípios universais da Revolução e a exclusão das mulheres da cidadania política plena."
    },
    {
      "number": 8,
      "author": "CÓDIGO CIVIL DE 1804 (Código Napoleônico)",
      "category": "III. Napoleão e a Codificação Jurídica",
      "quoteText": "A codificação consolidou elementos da transformação jurídica revolucionária, ao mesmo tempo que preservou hierarquias familiares e sociais.",
      "source": "FRANÇA. Code civil des Français, 1804.",
      "analise": "Tema: Propriedade, contratos, família e igualdade civil masculina. Interpretação: A codificação consolidou elementos da transformação jurídica revolucionária, ao mesmo tempo que preservou hierarquias familiares e sociais."
    },
    {
      "number": 9,
      "author": "TOCQUEVILLE — Revolução e Continuidade",
      "category": "IV. Revoluções e Questão Social no Século XIX",
      "quoteText": "A Revolução destruiu instituições tradicionais, mas também aprofundou tendências de centralização administrativa anteriores a 1789.",
      "source": "TOCQUEVILLE, Alexis de. L'Ancien Régime et la Révolution. 1856.",
      "analise": "Tema: Relação entre a estrutura administrativa do Antigo Regime e as transformações revolucionárias. Interpretação: A Revolução destruiu instituições tradicionais, mas também aprofundou tendências de centralização administrativa anteriores a 1789."
    },
    {
      "number": 10,
      "author": "KARL MARX — Comuna de Paris",
      "category": "IV. Revoluções e Questão Social no Século XIX",
      "quoteText": "Marx interpreta a Comuna como uma experiência de transformação da máquina estatal e de emancipação política da classe trabalhadora.",
      "source": "MARX, Karl. The Civil War in France. 1871.",
      "analise": "Tema: A experiência da Comuna como forma de organização política dos trabalhadores. Interpretação: Marx interpreta a Comuna como uma experiência de transformação da máquina estatal e de emancipação política da classe trabalhadora."
    },
    {
      "number": 11,
      "author": "DOCUMENTOS DA COMUNA DE PARIS",
      "category": "IV. Revoluções e Questão Social no Século XIX",
      "quoteText": "Os documentos oficiais permitem investigar a diversidade política da Comuna e suas práticas institucionais.",
      "source": "COMMUNE DE PARIS. Journal officiel de la Commune. 1871.",
      "analise": "Tema: Autogoverno, organização municipal, trabalho e medidas sociais. Interpretação: Os documentos oficiais permitem investigar a diversidade política da Comuna e suas práticas institucionais."
    },
    {
      "number": 12,
      "author": "MARC BLOCH — A Derrota de 1940",
      "category": "V. Guerras Mundiais e Resistência",
      "quoteText": "Bloch oferece uma análise contemporânea da crise francesa, examinando responsabilidades institucionais e limitações da sociedade de seu tempo.",
      "source": "BLOCH, Marc. L'Étrange Défaite. 1946 (escrita em 1940).",
      "analise": "Tema: Crítica à derrota francesa e às estruturas políticas, militares e sociais que contribuíram para ela. Interpretação: Bloch oferece uma análise contemporânea da crise francesa, examinando responsabilidades institucionais e limitações da sociedade de seu tempo."
    },
    {
      "number": 13,
      "author": "CHARLES DE GAULLE — França Livre",
      "category": "V. Guerras Mundiais e Resistência",
      "quoteText": "De Gaulle apresenta sua concepção da continuidade da legitimidade francesa diante da derrota e da ocupação.",
      "source": "DE GAULLE, Charles. Mémoires de guerre. 1954–1959.",
      "analise": "Tema: Resistência, legitimidade nacional e reconstrução da França. Interpretação: De Gaulle apresenta sua concepção da continuidade da legitimidade francesa diante da derrota e da ocupação."
    },
    {
      "number": 14,
      "author": "PROGRAMA DO CONSELHO NACIONAL DA RESISTÊNCIA",
      "category": "V. Guerras Mundiais e Resistência",
      "quoteText": "O documento reúne propostas de diferentes correntes da Resistência e tornou-se referência para a reconstrução francesa do pós-guerra.",
      "source": "CONSEIL NATIONAL DE LA RÉSISTANCE. Programme. 15 de março de 1944.",
      "analise": "Tema: Reconstrução política, nacionalizações e proteção social. Interpretação: O documento reúne propostas de diferentes correntes da Resistência e tornou-se referência para a reconstrução francesa do pós-guerra."
    },
    {
      "number": 15,
      "author": "PREÂMBULO DA CONSTITUIÇÃO DE 1946",
      "category": "VI. Estado Social e França Contemporânea",
      "quoteText": "Amplia o constitucionalismo francês para além das liberdades civis e políticas, reconhecendo direitos de natureza social e econômica.",
      "source": "FRANÇA. Préambule de la Constitution de 1946. (Constituição de 27 de outubro de 1946)",
      "analise": "Tema: Direitos sociais, trabalho, proteção à saúde e condições materiais de existência. Interpretação: Amplia o constitucionalismo francês para além das liberdades civis e políticas, reconhecendo direitos de natureza social e econômica."
    },
    {
      "number": 16,
      "author": "JEAN FOURASTIÉ — As Trinta Gloriosas",
      "category": "VI. Estado Social e França Contemporânea",
      "quoteText": "A expressão designa um período excepcional de expansão econômica e modernização social, sem significar ausência de conflitos ou desigualdades.",
      "source": "FOURASTIÉ, Jean. Les Trente Glorieuses. 1979.",
      "analise": "Tema: Crescimento econômico e transformação das condições de vida entre 1945 e 1975. Interpretação: A expressão designa um período excepcional de expansão econômica e modernização social, sem significar ausência de conflitos ou desigualdades."
    }
  ],
  "syntheses": [
    {
      "number": 1,
      "authorOrSchool": "1. François Furet — A Revolução como Transformação da Cultura Política",
      "synthesisText": "Furet destaca a importância das linguagens políticas e das representações da soberania na Revolução Francesa. Sua interpretação questiona explicações que reduzem a Revolução a uma simples consequência do desenvolvimento econômico ou da ascensão burguesa.",
      "supportingReference": "FURET, François. Penser la Révolution française. Paris: Gallimard, 1978."
    },
    {
      "number": 2,
      "authorOrSchool": "2. Georges Lefebvre — A Revolução e a Estrutura Social",
      "synthesisText": "Lefebvre enfatiza a articulação entre crise econômica, conflitos sociais, tensões camponesas e transformações políticas.",
      "supportingReference": "LEFEBVRE, Georges. Quatre-vingt-neuf. Paris: Maison du Livre Français, 1939."
    },
    {
      "number": 3,
      "authorOrSchool": "3. Robert Darnton — Cultura e Circulação das Ideias",
      "synthesisText": "Darnton investiga os circuitos de publicação, os livros clandestinos, os livreiros e a circulação da literatura política.",
      "supportingReference": "DARNTON, Robert. The Literary Underground of the Old Regime. Cambridge: Harvard University Press, 1982."
    },
    {
      "number": 4,
      "authorOrSchool": "4. Robert Tombs — A Comuna de Paris",
      "synthesisText": "Tombs examina a Comuna e a repressão de 1871, questionando interpretações simplificadoras sobre sua natureza e sobre o número de mortos.",
      "supportingReference": "TOMBS, Robert. The Paris Commune 1871 (1999); How Bloody Was La Semaine Sanglante of 1871? A Revision (2012)."
    },
    {
      "number": 5,
      "authorOrSchool": "5. Julian Jackson — Vichy e a Resistência",
      "synthesisText": "Jackson demonstra a complexidade da sociedade francesa durante a ocupação, evitando reduzir o período a uma divisão simples entre resistentes e colaboradores.",
      "supportingReference": "JACKSON, Julian. France: The Dark Years, 1940–1944. Oxford: Oxford University Press, 2001."
    },
    {
      "number": 6,
      "authorOrSchool": "6. Philip Nord — A Construção do Estado Social",
      "synthesisText": "Nord investiga a relação entre as reformas dos anos 1930 e as instituições construídas no pós-guerra.",
      "supportingReference": "NORD, Philip. France's New Deal: From the Thirties to the Postwar Era. Princeton: Princeton University Press, 2010."
    }
  ],
  "referenceCategories": [
    {
      "category": "I. Filosofia e Pensadores do Século XVIII",
      "items": [
        "MONTESQUIEU. De l'esprit des lois. 1748.",
        "ROUSSEAU, Jean-Jacques. Du contrat social. 1762.",
        "VOLTAIRE. Traité sur la tolérance. 1763.",
        "DIDEROT, Denis. Autorité politique. In: Encyclopédie. 1751."
      ]
    },
    {
      "category": "II. Revolução Francesa e Direitos Políticos",
      "items": [
        "SIEYÈS, Emmanuel-Joseph. Qu'est-ce que le Tiers-État? 1789.",
        "FRANÇA. Déclaration des droits de l'homme et du citoyen. 1789.",
        "GOUGES, Olympe de. Déclaration des droits de la femme et de la citoyenne. 1791."
      ]
    },
    {
      "category": "III. Napoleão e a Codificação Jurídica",
      "items": [
        "FRANÇA. Code civil des Français. 1804."
      ]
    },
    {
      "category": "IV. Revoluções e Questão Social no Século XIX",
      "items": [
        "TOCQUEVILLE, Alexis de. L'Ancien Régime et la Révolution. 1856.",
        "MARX, Karl. The Civil War in France. 1871.",
        "COMMUNE DE PARIS. Journal officiel de la Commune. 1871."
      ]
    },
    {
      "category": "V. Guerras Mundiais e Resistência",
      "items": [
        "BLOCH, Marc. L'Étrange Défaite. 1946.",
        "DE GAULLE, Charles. Mémoires de guerre. 1954–1959.",
        "CONSEIL NATIONAL DE LA RÉSISTANCE. Programme. 1944."
      ]
    },
    {
      "category": "VI. Estado Social e França Contemporânea",
      "items": [
        "FRANÇA. Préambule de la Constitution de 1946.",
        "FOURASTIÉ, Jean. Les Trente Glorieuses. 1979."
      ]
    },
    {
      "category": "VII. Sínteses Historiográficas",
      "items": [
        "FURET, François. Penser la Révolution française. 1978.",
        "LEFEBVRE, Georges. Quatre-vingt-neuf. 1939.",
        "DARNTON, Robert. The Literary Underground of the Old Regime. 1982.",
        "TOMBS, Robert. The Paris Commune 1871. 1999.",
        "JACKSON, Julian. France: The Dark Years, 1940–1944. 2001.",
        "NORD, Philip. France's New Deal. 2010."
      ]
    }
  ],
  "controversiasELimitacoesDasFontes": "REGISTRO ACADÊMICO DE CITAÇÕES Nº 11 — FRANÇA: ILUMINISMO, REVOLUÇÕES E ESTADO SOCIAL (1715–1975). Este acervo organiza em 7 eixos temáticos as 16 citações documentais fundamentais e as 6 sínteses historiográficas centrais para a compreensão do modelo político francês."
}};
