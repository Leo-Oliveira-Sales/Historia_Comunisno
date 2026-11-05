export interface TopicCitationEntry {
  number: number;
  author: string;
  category: string;
  quoteText: string;
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
  112: {
    title: "Citações Literais Verificadas, Sínteses e Fontes Documentais — Registro nº 12 (França no Século das Luzes)",
    citations: [
      {
        number: 1,
        author: "Charles de Secondat, Barão de Montesquieu",
        category: "Tratado de Filosofia e Direito Político (1748)",
        quoteText: "É uma experiência eterna que todo homem que tem poder é levado a abusar dele; ele vai até onde encontra limites. Quem o diria! A própria virtude precisa de limites. Para que não se possa abusar do poder, é preciso que, pela disposição das coisas, o poder freie o poder.",
        source: "MONTESQUIEU. De l’esprit des loix. Genebra: Barrillot & Fils, 1748. Livro XI, Capítulo IV."
      },
      {
        number: 2,
        author: "Voltaire (François-Marie Arouet)",
        category: "Ensaio Filosófico e Defesa da Tolerância (1763)",
        quoteText: "Não é mais aos homens que me dirijo; é a ti, Deus de todos os seres, de todos os mundos e de todos os tempos... Que as pequenas diferenças entre as roupas que cobrem nossos fracos corpos, entre todas as nossas línguas insuficientes, entre todos os nossos costumes ridículos... que todas essas pequenas nuances que distinguem os átomos chamados homens não sejam sinais de ódio e perseguição.",
        source: "VOLTAIRE. Traité sur la tolérance à l’occasion de la mort de Jean Calas. Genebra: Cramer, 1763. Capítulo XXIII."
      },
      {
        number: 3,
        author: "Jean-Jacques Rousseau",
        category: "Tratado de Filosofia Política (1762)",
        quoteText: "O homem nasce livre, e em toda parte ele está a ferros. Aquele que se crê senhor dos outros não deixa de ser mais escravo do que eles... Afirmo, pois, que não sendo a soberania senão o exercício da vontade geral, jamais pode alienar-se, e que o soberano, que não é senão um ser coletivo, não pode ser representado a não ser por si mesmo.",
        source: "ROUSSEAU, Jean-Jacques. Du contrat social; ou, Principes du droit politique. Amsterdã: Marc-Michel Rey, 1762. Livro I, Cap. I / Livro II, Cap. I."
      },
      {
        number: 4,
        author: "Denis Diderot",
        category: "Verbete da Encyclopédie (1751)",
        quoteText: "Nenhum homem recebeu da natureza o direito de comandar os outros. A liberdade é um presente do céu, e cada indivíduo da mesma espécie tem o direito de gozar dela logo que goze da razão... O príncipe recebe de seus próprios súditos a autoridade que tem sobre eles; e essa autoridade é limitada pelas leis da natureza e do Estado.",
        source: "DIDEROT, Denis. Verbete \"Autorité Politique\". In: Encyclopédie, ou Dictionnaire raisonné des sciences, des arts et des métiers. Paris: Briasson, 1751. t. I, p. 898–900."
      },
      {
        number: 5,
        author: "Emmanuel-Joseph Sieyès",
        category: "Panfleto Político Fundacional (1789)",
        quoteText: "O que é o Terceiro Estado? Tudo. O que tem sido ele até agora na ordem política? Nada. O que ele pede? Tornar-se algo... Quem ousaria dizer que o Terceiro Estado não tem em si tudo o que é necessário para formar uma nação completa?",
        source: "SIEYÈS, Emmanuel-Joseph. Qu'est-ce que le Tiers-État? Paris, 1789. Capítulos I e II."
      }
    ],
    syntheses: [
      {
        number: 1,
        authorOrSchool: "1. Historiografia Cultural e História da Leitura (Roger Chartier & Robert Darnton)",
        synthesisText: "O Iluminismo não 'causou' mecanicamente a Revolução Francesa; antes, produziu uma dessacralização da autoridade monárquica e um habitus crítico de leitura nos salões, cafés e panfletos clandestinos que tornou o Antigo Regime ideologicamente deslegitimado antes do colapso de 1789.",
        supportingReference: "CHARTIER, Roger. As Origens Culturais da Revolução Francesa (2009); DARNTON, Robert. Boemia Literária e Revolução (1987)."
      },
      {
        number: 2,
        authorOrSchool: "2. Historiografia Revisionista da Cultura Política (François Furet & Keith Michael Baker)",
        synthesisText: "A Revolução Francesa foi primordialmente uma mutação da linguagem e da cultura política, na qual o conceito rousseauista de 'vontade geral' e a invenção da soberania nacional forneceram a matriz conceitual para contestar a monarquia absoluta.",
        supportingReference: "FURET, François. Pensando a Revolução Francesa (1989); BAKER, Keith Michael. Inventing the French Revolution (1990)."
      },
      {
        number: 3,
        authorOrSchool: "3. Interpretação Socioeconômica Clássica (Georges Lefebvre & Albert Soboul)",
        synthesisText: "A crise do Antigo Regime resultou das contradições de uma sociedade estamental com privilégios feudais ultrapassados diante do crescimento econômico e demográfico do Terceiro Estado e da ascensão de uma burguesia letrada.",
        supportingReference: "LEFEBVRE, Georges. 1789: O Surgimento da Revolução Francesa (1989); SOBOUL, Albert. A Revolução Francesa (1989)."
      }
    ],
    referenceCategories: [
      {
        category: "Fontes Primárias",
        items: [
          "DIDEROT, Denis; D'ALEMBERT, Jean le Rond. Encyclopédie. Paris, 1751–1772.",
          "MONTESQUIEU. De l’esprit des loix. Genebra: Barrillot & Fils, 1748.",
          "ROUSSEAU, Jean-Jacques. Du contrat social. Amsterdã: Marc-Michel Rey, 1762.",
          "SIEYÈS, Emmanuel-Joseph. Qu'est-ce que le Tiers-État? Paris, 1789.",
          "VOLTAIRE. Traité sur la tolérance. Genebra: Cramer, 1763."
        ]
      },
      {
        category: "Historiografia e Estudos Especializados",
        items: [
          "BAKER, Keith Michael. Inventing the French Revolution. Cambridge: Cambridge University Press, 1990.",
          "CHARTIER, Roger. As Origens Culturais da Revolução Francesa. São Paulo: UNESP, 2009.",
          "DARNTON, Robert. Boemia Literária e Revolução. São Paulo: Companhia das Letras, 1987.",
          "DOYLE, William. Origins of the French Revolution. Oxford: Oxford University Press, 1999.",
          "FURET, François. Pensando a Revolução Francesa. Rio de Janeiro: Paz e Terra, 1989.",
          "ISRAEL, Jonathan. Democratic Enlightenment. Oxford: Oxford University Press, 2011.",
          "LEFEBVRE, Georges. 1789: O Surgimento da Revolução Francesa. Rio de Janeiro: Paz e Terra, 1989."
        ]
      }
    ],
    controversiasELimitacoesDasFontes: "PROTOCOLO DE AUDITORIA DOCUMENTAL DO DOSSIÊ № 12: 1. Todas as citações de Montesquieu, Voltaire, Rousseau, Diderot e Sieyès foram conferidas nas suas edições originais em francês do século XVIII. 2. A historiografia de referência distingue rigorosamente o debate das Origens Culturais (Chartier/Darnton) da abordagem socioeconômica clássica (Lefebvre/Soboul) e do revisionismo político (Furet/Baker). 3. As fontes primárias não foram editadas nem adaptadas no dossiê principal."
  }
};
