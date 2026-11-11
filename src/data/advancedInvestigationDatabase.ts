export interface AdvancedInvestigationQuestion {
  number: number;
  question: string;
  body: string[];
  historiographicalInterpretation?: string;
  conclusion: string;
  subsections?: {
    number: string;
    title: string;
    content: string;
  }[];
  comparativeTable?: {
    headers: string[];
    rows: {
      aspect: string;
      col1: string;
      col2: string;
    }[];
  };
}

export interface AdvancedInvestigationData {
  topicId: number;
  title: string;
  subtitle: string;
  questionsSummary: string[];
  rawText: string;
  fundamentalReferences: {
    authorAndWork: string;
    relatedQuestions: string;
  }[];
}

export const ADVANCED_INVESTIGATIONS_DATABASE: Record<number, AdvancedInvestigationData> = {
  112: {
    topicId: 112,
    title: 'INVESTIGAÇÃO AVANÇADA Nº 11',
    subtitle: 'FRANÇA: ILUMINISMO, REVOLUÇÕES, GUERRAS E ESTADO SOCIAL (1715–1975)',
    questionsSummary: [
      '1. Problemas de Investigação sobre o Iluminismo',
      '2. Problemas sobre as Causas da Revolução Francesa',
      '3. Problemas sobre os Limites da Revolução',
      '4. Problemas sobre Napoleão',
      '5. Problemas sobre as Revoluções de 1830 e 1848',
      '6. Problemas sobre a Comuna de Paris',
      '7. Problemas sobre as Guerras Mundiais',
      '8. Problemas sobre a Construção do Estado Social',
      '9. Problemas sobre as Trinta Gloriosas',
      '10. Investigações Documentais (Dossiês A ao E)',
      '11. Questões Metodológicas',
      '12. Propostas de Pesquisa Avançada',
      '13. Critérios para uma Conclusão Histórica'
    ],
    fundamentalReferences: [
      { authorAndWork: 'Robert Darnton, Roger Chartier & Jonathan Israel', relatedQuestions: 'Eixo 1 — Iluminismo' },
      { authorAndWork: 'Georges Lefebvre, Albert Soboul & François Furet', relatedQuestions: 'Eixo 2 — Causas da Revolução' },
      { authorAndWork: 'Lynn Hunt, Timothy Tackett & David Andress', relatedQuestions: 'Eixo 3 — Limites da Revolução' },
      { authorAndWork: 'Isser Woloch & Jean-Louis Halpérin', relatedQuestions: 'Eixo 4 — Napoleão' },
      { authorAndWork: 'Roger Price & Edward Berenson', relatedQuestions: 'Eixo 5 — Revoluções de 1830 e 1848' },
      { authorAndWork: 'Jacques Rougerie, Robert Tombs & Kristin Ross', relatedQuestions: 'Eixo 6 — Comuna de Paris' },
      { authorAndWork: 'Julian Jackson, Robert Paxton & Olivier Wieviorka', relatedQuestions: 'Eixo 7 — Guerras Mundiais & Vichy' },
      { authorAndWork: 'Philip Nord, Adam Steinhouse & Richard Kuisel', relatedQuestions: 'Eixo 8 — Estado Social' },
      { authorAndWork: 'Jean Fourastié, Tony Judt & Michelle Zancarini-Fournel', relatedQuestions: 'Eixo 9 — Trinta Gloriosas' }
    ],
    rawText: `# COLEÇÃO II — HISTÓRIA DAS IDEOLOGIAS POLÍTICAS

# INVESTIGAÇÃO AVANÇADA Nº 11

## FRANÇA: ILUMINISMO, REVOLUÇÕES, GUERRAS E ESTADO SOCIAL (1715–1975)

### 1. PROBLEMAS DE INVESTIGAÇÃO SOBRE O ILUMINISMO

1. O Iluminismo foi uma causa direta da Revolução Francesa ou forneceu uma linguagem intelectual posteriormente apropriada pelos revolucionários?
2. Voltaire, Montesquieu e Rousseau defendiam concepções políticas convergentes?
3. Até que ponto a circulação de livros e panfletos contribuiu para a formação de uma opinião pública crítica?
4. A crítica iluminista ao absolutismo era necessariamente democrática?
5. Qual foi o papel da censura na formação dos circuitos clandestinos de publicação?
6. Como as ideias iluministas foram apropriadas por diferentes grupos sociais?
7. Qual a relação entre o pensamento fisiocrático e as tentativas de reforma econômica?

**Autores para investigação:** Robert Darnton, Roger Chartier, Jonathan Israel, Keith Michael Baker, Dena Goodman e William Doyle.

### 2. PROBLEMAS SOBRE AS CAUSAS DA REVOLUÇÃO FRANCESA

1. A crise fiscal foi a causa imediata da Revolução?
2. Por que a monarquia não conseguiu reformar o sistema tributário?
3. Qual foi a responsabilidade da aristocracia na crise institucional de 1787–1788?
4. O Terceiro Estado constituía um grupo social homogêneo?
5. Qual foi a importância da crise dos preços dos alimentos?
6. A Revolução foi essencialmente burguesa?
7. Como os camponeses participaram da destruição das estruturas senhoriais?
8. Qual foi a importância dos Estados Gerais e dos *Cahiers de doléances*?

**Autores para investigação:** Georges Lefebvre, Albert Soboul, François Furet, William Doyle, Timothy Tackett e Gail Bossenga.

### 3. PROBLEMAS SOBRE OS LIMITES DA REVOLUÇÃO

1. A Declaração de 1789 established direitos universais na prática?
2. Por que as mulheres foram excluídas da cidadania política plena?
3. Qual foi o significado da Declaração de Olympe de Gouges?
4. Como a escravidão colonial entrou em conflito com os princípios revolucionários?
5. A política do Terror foi uma consequência inevitável da guerra?
6. Como diferenciar defesa da República e repressão política?
7. Quais foram as causas da queda de Robespierre?
8. A Revolução conseguiu estabilizar uma ordem democrática?

**Autores para investigação:** Lynn Hunt, Timothy Tackett, David Andress, Suzanne Desan e Laurent Dubois.

### 4. PROBLEMAS SOBRE NAPOLEÃO

1. Napoleão preservou as conquistas da Revolução?
2. O Código Civil representou igualdade jurídica efetiva?
3. Como o Código Civil organizou as relações familiares e a autoridade masculina?
4. A centralização administrativa napoleônica rompeu com o Antigo Regime ou aprofundou tendências anteriores?
5. A expansão militar difundiu princípios revolucionários ou consolidou um projeto imperial?
6. Qual foi o impacto das ocupações napoleônicas sobre as identidades nacionais europeias?
7. Por que a campanha da Rússia representou um ponto de inflexão?

**Autores para investigação:** Isser Woloch, Martyn Lyons, Jean-Louis Halpérin e Sudhir Hazareesingh.

### 5. PROBLEMAS SOBRE AS REVOLUÇÕES DE 1830 E 1848

1. Por que a Restauração Bourbon não conseguiu estabilizar a monarquia?
2. A Revolução de 1830 foi uma revolução popular ou predominantemente liberal?
3. Quais foram as diferenças entre 1830 e 1848?
4. Por que a Segunda República adotou o sufrágio masculino universal?
5. Como se relacionaram a questão social e a questão política em 1848?
6. Por que ocorreu a repressão das Jornadas de Junho?
7. Qual foi a importância da abolição da escravidão em 1848?
8. Como o golpe de Luís Napoleão encerrou a Segunda República?

**Autores para investigação:** Roger Price, Edward Berenson, David Pinkney e Jonathan M. House.

### 6. PROBLEMAS SOBRE A COMUNA DE PARIS

1. A Comuna deve ser interpretada como um governo operário?
2. Quais correntes políticas participaram da experiência?
3. Qual foi a influência do socialismo, do anarquismo e do republicanismo radical?
4. A Comuna possuía um projeto institucional coerente?
5. Quais medidas sociais foram efetivamente implementadas?
6. Como Marx interpretou a experiência?
7. Como os anarquistas interpretaram o autogoverno comunal?
8. Quais foram as causas da derrota militar?
9. Qual foi a dimensão da repressão durante a Semana Sangrenta?
10. Como a memória da Comuna foi utilizada pelos movimentos socialistas posteriores?

**Autores para investigação:** Jacques Rougerie, Robert Tombs, Kristin Ross, John Merriman e Carolyn J. Eichner.

### 7. PROBLEMAS SOBRE AS GUERRAS MUNDIAIS

1. Como a Primeira Guerra Mundial modificou a estrutura social francesa?
2. Qual foi o impacto da guerra sobre os trabalhadores e as mulheres?
3. Como a experiência dos veteranos influenciou a cultura política do período entre guerras?
4. Quais fatores contribuíram para a derrota francesa de 1940?
5. O regime de Vichy foi apenas consequência da ocupação alemã?
6. Qual foi a participação das autoridades francesas na perseguição aos judeus?
7. Como se organizou a Resistência interna?
8. Qual foi o papel de Jean Moulin?
9. Como de Gaulle construiu a legitimidade da França Livre?
10. Como a sociedade francesa enfrentou o passado da colaboração depois de 1944?

**Autores para investigação:** Julian Jackson, Robert Paxton, Olivier Wieviorka, Henry Rousso e Robert Gildea.

### 8. PROBLEMAS SOBRE A CONSTRUÇÃO DO ESTADO SOCIAL

1. O programa do CNR foi uma ruptura ou uma continuidade das reformas anteriores?
2. Quais foram as influências da experiência do Front Populaire de 1936?
3. Qual foi o papel dos sindicatos na reconstrução?
4. Por que a Seguridade Social foi organizada em 1945?
5. Qual foi a contribuição de Pierre Laroque e Ambroise Croizat?
6. Por que a cobertura social não se tornou universal imediatamente?
7. Como as nacionalizações modificaram a economia francesa?
8. Qual foi o papel do planejamento econômico?
9. Qual a diferença entre SMIG e SMIC?
10. Até que ponto o Estado social reduziu as desigualdades?

**Autores para investigação:** Philip Nord, Adam Steinhouse, Richard Kuisel, Herrick Chapman e Jean-Pierre Rioux.

### 9. PROBLEMAS SOBRE AS TRINTA GLORIOSAS

1. Por que a França experimentou crescimento econômico acelerado entre 1945 e 1975?
2. Qual foi a importância da reconstrução industrial?
3. Como a urbanização transformou as relações sociais?
4. O crescimento beneficiou igualmente homens, mulheres e imigrantes?
5. Como a descolonização afetou a política francesa?
6. Qual foi o significado de Maio de 1968?
7. A crise de 1973 encerrou imediatamente o modelo econômico do pós-guerra?
8. Quais elementos do Estado social sobreviveram à crise econômica?

**Autores para investigação:** Jean Fourastié, Tony Judt, Philip Nord, Michelle Zancarini-Fournel e Kristin Ross.

---

## 10. INVESTIGAÇÕES DOCUMENTAIS

Para cada problema, o pesquisador deverá selecionar documentos que permitam confrontar as interpretações historiográficas.

### Dossiê A — Revolução e soberania
- Declaração dos Direitos do Homem e do Cidadão.
- Constituição de 1791.
- Constituição de 1793.
- Textos de Sieyès.
- *Cahiers de doléances*.

### Dossiê B — Napoleão e direito
- Constituição do Ano VIII.
- Código Civil de 1804.
- Decretos administrativos.
- Tratados internacionais.

### Dossiê C — Comuna de Paris
- Proclamações da Comuna.
- *Journal officiel*.
- Decretos municipais.
- *A Guerra Civil na França*, de Marx.
- Memórias de participantes.

### Dossiê D — Vichy e Resistência
- Atos constitucionais de 1940.
- Estatutos discriminatórios.
- Documentos da França Livre.
- Programa do CNR.
- Registros de deportação e libertação.

### Dossiê E — Estado social
- Programa do CNR.
- Ordenança de 4 de outubro de 1945.
- Preâmbulo constitucional de 1946.
- Legislação do SMIG.
- Constituição de 1958.
- Acordos de Grenelle.

---

## 11. QUESTÕES METODOLÓGICAS

Em todas as investigações, o pesquisador deverá:

1. Identificar a autoria e a data da fonte.
2. Distinguir documentos contemporâneos de interpretações posteriores.
3. Investigar o contexto de produção.
4. Identificar os interesses dos grupos envolvidos.
5. Confrontar fontes primárias e historiografia.
6. Distinguir fatos documentados de hipóteses interpretativas.
7. Considerar os limites de preservação e acesso aos arquivos.
8. Evitar explicações monocausais.
9. Comparar interpretações historiográficas divergentes.
10. Registrar as referências completas.

---

## 12. PROPOSTAS DE PESQUISA AVANÇADA

**Pesquisa 1:** O Iluminismo e a construção da linguagem política revolucionária.
**Pesquisa 2:** A participação camponesa na Revolução Francesa.
**Pesquisa 3:** A cidadania feminina e os limites da igualdade revolucionária.
**Pesquisa 4:** O Código Civil napoleônico e a formação do direito moderno.
**Pesquisa 5:** Socialismo, anarquismo e republicanismo na Comuna de Paris.
**Pesquisa 6:** Vichy, colaboração e responsabilidade do Estado francês.
**Pesquisa 7:** O Programa do CNR e a formação do Estado social.
**Pesquisa 8:** As Trinta Gloriosas e as contradições do crescimento econômico.

---

## 13. CRITÉRIOS PARA UMA CONCLUSÃO HISTÓRICA

Uma investigação será considerada academicamente consistente quando:

- Apresentar uma questão delimitada.
- Utilizar fontes identificáveis.
- Reconhecer interpretações historiográficas divergentes.
- Demonstrar como as evidências sustentam a conclusão.
- Distinguir causalidade, correlação e sucessão cronológica.
- Reconhecer incertezas documentais.
- Apresentar bibliografia especializada.

**Objetivo final:** desenvolver uma interpretação crítica da transformação histórica francesa, sem reduzir dois séculos e meio de história a uma única ideologia ou explicação causal.`
  },
  105: {
    topicId: 105,
    title: 'INVESTIGAÇÃO AVANÇADA',
    subtitle: 'Questões para pesquisa e aprofundamento: Materialismo Histórico, Crítica Cultural e Epistemologia',
    questionsSummary: [
      'O materialismo histórico pressupõe que a economia determina integralmente a sociedade?',
      'A infraestrutura econômica é suficiente para explicar a permanência das sociedades capitalistas?',
      'A hegemonia cultural é uma ampliação legítima do materialismo histórico?',
      'A Escola de Frankfurt abandonou a crítica da economia política?',
      'A linguagem pode controlar o pensamento?',
      'O controle dos meios de produção intelectual pode ser tão importante quanto o controle dos meios de produção material?',
      'O marxismo do século XX preservou a teoria econômica de Marx?',
      'Kołakowski demonstrou que o marxismo se tornou apenas uma crítica cultural?',
      'A queda da União Soviética representou o fim do marxismo?',
      'O conceito de ideologia pode ser utilizado para analisar qualquer divergência política?'
    ],
    fundamentalReferences: [
      { authorAndWork: 'Karl Marx & Friedrich Engels — A Ideologia Alemã e Prefácio de 1859', relatedQuestions: '1, 6 e 10' },
      { authorAndWork: 'Antonio Gramsci — Cadernos do Cárcere (Hegemonia e Sociedade Civil)', relatedQuestions: '1, 2 e 3' },
      { authorAndWork: 'Max Horkheimer & Theodor W. Adorno — Dialética do Esclarecimento', relatedQuestions: '2 e 4' },
      { authorAndWork: 'Leszek Kołakowski — Main Currents of Marxism', relatedQuestions: '7, 8 e 9' },
      { authorAndWork: 'John A. Lucy / Chong & Druckman / Amsalem & Zoizner — Pesquisas sobre Linguagem e Framing', relatedQuestions: '5 e 6' }
    ],
    rawText: `# INVESTIGAÇÃO AVANÇADA
## Questões para pesquisa e aprofundamento

### 1. O materialismo histórico pressupõe que a economia determina integralmente a sociedade?

A formulação clássica de Marx estabelece a centralidade das condições materiais de existência.

Entretanto, a história apresenta situações nas quais religião, política, nacionalismo e instituições culturais parecem exercer influência independente sobre o desenvolvimento econômico.

A questão consiste em investigar se a relação entre infraestrutura e superestrutura deve ser entendida como determinação unilateral ou como condicionamento recíproco.

**Autores para investigação:** Marx, Engels, Gramsci, Raymond Williams e Perry Anderson.

### 2. A infraestrutura econômica é suficiente para explicar a permanência das sociedades capitalistas?

A existência de crises econômicas não produz necessariamente revoluções.

Sociedades podem atravessar desemprego, desigualdade e conflitos sem experimentar uma transformação revolucionária.

É necessário investigar os mecanismos institucionais e culturais que contribuem para a estabilidade social.

**Autores:** Gramsci, Adorno, Horkheimer e Marcuse.

### 3. A hegemonia cultural é uma ampliação legítima do materialismo histórico?

Gramsci procurou compreender como grupos sociais exercem direção política e moral, construindo consentimento.

A pergunta consiste em saber se esse conceito desenvolve elementos já presentes em Marx ou se representa uma transformação epistemológica significativa.

**Autores:** Marx, Gramsci, Perry Anderson e Stuart Hall.

### 4. A Escola de Frankfurt abandonou a crítica da economia política?

Horkheimer e Adorno investigaram a cultura de massas, a racionalidade instrumental e as formas de dominação.

A ampliação dos objetos de estudo pode ser interpretada como abandono da economia ou como uma tentativa de explicar fenômenos que a economia, isoladamente, não conseguia esclarecer.

**Autores:** Horkheimer, Adorno, Marcuse, Martin Jay e autores contemporâneos de teoria crítica.

### 5. A linguagem pode controlar o pensamento?

A linguagem influencia a maneira como os indivíduos organizam experiências, classificam objetos e interpretam acontecimentos.

Entretanto, influência não significa determinação absoluta.

É necessário investigar empiricamente os efeitos do vocabulário, das metáforas, dos enquadramentos e da repetição de mensagens.

**Autores e pesquisas:** John Lucy; Phillip Wolff; Kevin Holmes; Dennis Chong; James Druckman; Eran Amsalem; Alon Zoizner.

### 6. O controle dos meios de produção intelectual pode ser tão importante quanto o controle dos meios de produção material?

Marx e Engels relacionaram os meios de produção material à capacidade de influência sobre a produção intelectual.

O desenvolvimento posterior dos meios de comunicação, da publicidade, da televisão e das plataformas digitais ampliou esse problema.

A investigação deve considerar propriedade dos meios de comunicação, financiamento, concentração empresarial, acesso à informação e liberdade de expressão.

### 7. O marxismo do século XX preservou a teoria econômica de Marx?

É necessário diferenciar:
- crítica marxista da economia política;
- experiências de planejamento central;
- partidos comunistas;
- marxismo universitário;
- correntes culturais e filosóficas.

Não se deve presumir que todas essas tradições tenham desenvolvido a mesma teoria econômica.

### 8. Kołakowski demonstrou que o marxismo se tornou apenas uma crítica cultural?

A obra de Kołakowski apresenta uma reconstrução histórica das correntes marxistas e uma crítica ao desenvolvimento do comunismo.

Entretanto, sua posição não deve ser reduzida à tese de que o marxismo simplesmente abandonou a economia e migrou para a cultura.

É necessário investigar seus argumentos sobre filosofia, religião, liberdade, totalitarismo e responsabilidade moral.

### 9. A queda da União Soviética representou o fim do marxismo?

A dissolução da União Soviética demonstrou a crise histórica de um modelo específico de organização política e econômica.

Entretanto, o marxismo continuou existindo em diferentes tradições intelectuais, políticas e acadêmicas.

A questão consiste em distinguir a crise do socialismo soviético da continuidade de correntes marxistas não vinculadas àquele modelo estatal.

### 10. O conceito de ideologia pode ser utilizado para analisar qualquer divergência política?

Se toda discordância for classificada como expressão de uma ideologia, o conceito corre o risco de perder precisão.

É necessário estabelecer critérios para distinguir influência social, erro factual, interesse econômico, interpretação legítima e manipulação deliberada.

Essa questão é fundamental para impedir que a crítica ideológica se transforme em instrumento de desqualificação de qualquer posição contrária.`
  }
};

