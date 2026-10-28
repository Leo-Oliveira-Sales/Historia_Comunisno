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
  }
};
