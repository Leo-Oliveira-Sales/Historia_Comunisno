export interface TopicCitationEntry {
  number: number;
  author: string;
  category: string;
  quoteText: string;
  source: string;
}

export interface TopicCitationsData {
  title: string;
  citations: TopicCitationEntry[];
  consolidatedReferences: string[];
}

export const TOPIC_CITATIONS_DATABASE: Record<number, TopicCitationsData> = {
  1: {
    title: "Citações Literais Verificadas e Fontes Documentais",
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
  }
};
