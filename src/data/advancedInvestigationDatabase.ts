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
    title: 'INVESTIGAÇÃO AVANÇADA',
    subtitle: 'Iluminismo, Antigo Regime e as origens da Revolução Francesa: oito problemas históricos e historiográficos',
    questionsSummary: [
      'O Iluminismo foi uma causa direta da Revolução Francesa ou um elemento de uma conjuntura mais ampla?',
      'Até que ponto a burguesia possuía interesses políticos comuns?',
      'A crise financeira era suficiente para derrubar a monarquia?',
      'O absolutismo francês era efetivamente absoluto na prática?',
      'Como a circulação de livros e panfletos alterou a cultura política?',
      'Quais contradições existiam entre os direitos naturais e a sociedade escravista atlântica?',
      'Como as interpretações de Hobsbawm e Furet diferem na análise da Revolução?',
      'Em que medida a Revolução representou ruptura e continuidade em relação ao Antigo Regime?'
    ],
    fundamentalReferences: [
      { authorAndWork: 'Eric Hobsbawm — A Era das Revoluções: 1789–1848', relatedQuestions: '1, 2, 3 e 7' },
      { authorAndWork: 'François Furet — Pensar a Revolução Francesa', relatedQuestions: '1, 2, 7 e 8' },
      { authorAndWork: 'William Doyle — The Oxford History of the French Revolution', relatedQuestions: '1, 2, 3 e 4' },
      { authorAndWork: 'Alexis de Tocqueville — O Antigo Regime e a Revolução', relatedQuestions: '4 e 8' },
      { authorAndWork: 'Lynn Hunt — Inventing Human Rights', relatedQuestions: '5 e 6' },
      { authorAndWork: 'Laurent Dubois — Avengers of the New World', relatedQuestions: '6' },
      { authorAndWork: 'Timothy Tackett — The Coming of the Terror in the French Revolution', relatedQuestions: '1 e 7' },
      { authorAndWork: 'Michel Vovelle — La mentalité révolutionnaire', relatedQuestions: '5 e 8' }
    ],
    rawText: `# INVESTIGAÇÃO AVANÇADA

## Iluminismo, Antigo Regime e as origens da Revolução Francesa: oito problemas históricos e historiográficos

### QUESTÕES PARA INVESTIGAÇÃO AVANÇADA
1. O Iluminismo foi uma causa direta da Revolução Francesa ou um elemento de uma conjuntura mais ampla?
2. Até que ponto a burguesia possuía interesses políticos comuns?
3. A crise financeira era suficiente para derrubar a monarquia?
4. O absolutismo francês era efetivamente absoluto na prática?
5. Como a circulação de livros e panfletos alterou a cultura política?
6. Quais contradições existiam entre os direitos naturais e a sociedade escravista atlântica?
7. Como as interpretações de Hobsbawm e Furet diferem na análise da Revolução?
8. Em que medida a Revolução representou ruptura e continuidade em relação ao Antigo Regime?

---

### 1. O ILUMINISMO FOI UMA CAUSA DIRETA DA REVOLUÇÃO FRANCESA OU UM ELEMENTO DE UMA CONJUNTURA MAIS AMPLA?

O Iluminismo desempenhou um papel importante na formação do ambiente intelectual em que a Revolução Francesa se desenvolveu. Entretanto, afirmar que a Revolução foi simplesmente causada pelas ideias iluministas significa reduzir um processo histórico complexo a uma única dimensão explicativa.

Durante o século XVIII, pensadores como Montesquieu, Voltaire e Rousseau questionaram diferentes aspectos da organização política e social europeia. Suas obras contribuíram para difundir discussões sobre liberdade, autoridade, tolerância religiosa, direitos naturais, representação e soberania.

Essas ideias modificaram o vocabulário político disponível. A autoridade monárquica passou a ser questionada não apenas por sua capacidade administrativa, mas também por sua legitimidade. A sociedade de privilégios passou a ser confrontada com princípios de igualdade jurídica e racionalidade institucional.

Entretanto, os filósofos iluministas não formavam um movimento político uniforme. Montesquieu defendia mecanismos de limitação institucional do poder; Voltaire criticava a intolerância e frequentemente demonstrava preferência por uma monarquia reformadora; Rousseau desenvolvia uma concepção de soberania popular que seria posteriormente mobilizada por setores mais radicais da Revolução.

Portanto, não existia um programa iluminista único que determinasse o resultado de 1789.

Além disso, a França enfrentava problemas que não podem ser explicados exclusivamente pela filosofia: endividamento estatal, dificuldades de arrecadação, resistência dos grupos privilegiados às reformas, crises agrícolas e tensões sociais.

A convocação dos Estados Gerais, em 1789, ocorreu em meio a uma crise financeira e institucional que transformou a discussão sobre impostos em uma disputa sobre representação e soberania.

**Interpretação historiográfica**

Uma abordagem intelectual enfatiza a transformação das ideias políticas e da cultura pública. Outra privilegia as estruturas econômicas e sociais. Uma terceira procura compreender como ideias, instituições e acontecimentos contingentes interagiram.

A interpretação mais consistente não precisa escolher exclusivamente entre ideias e estruturas. O Iluminismo forneceu instrumentos intelectuais de crítica, enquanto a conjuntura política, econômica e social tornou possível sua utilização revolucionária.

**Conclusão:** o Iluminismo não foi uma causa direta e suficiente da Revolução Francesa. Foi um dos elementos fundamentais de uma conjuntura mais ampla, que envolveu crise financeira, desigualdade jurídica, conflitos sociais e deslegitimação da monarquia.

---

### 2. ATÉ QUE PONTO A BURGUESIA POSSUÍA INTERESSES POLÍTICOS COMUNS?

A burguesia desempenhou papel importante na Revolução Francesa, mas não deve ser compreendida como uma classe perfeitamente homogênea.

O termo burguesia reunia grupos com atividades e interesses diferentes: comerciantes, banqueiros, profissionais liberais, proprietários, negociantes coloniais, empresários e funcionários.

Esses setores podiam compartilhar determinadas reivindicações, como maior igualdade jurídica, acesso a cargos, proteção da propriedade e redução de privilégios tradicionais.

Entretanto, suas posições econômicas e políticas não eram necessariamente idênticas.

Um grande comerciante interessado no comércio colonial podia defender posições diferentes das de um advogado de Paris. Um proprietário de terras podia desejar a eliminação de determinados privilégios senhoriais, mas também defender a preservação da propriedade privada e da ordem social.

A própria Revolução demonstrou essas divergências.

Alguns setores burgueses defendiam uma monarquia constitucional, instituições representativas e estabilidade política. Outros se aproximaram do republicanismo e das mobilizações populares. Em diferentes momentos, grupos burgueses apoiaram medidas de radicalização ou procuraram contê-las.

Também é importante considerar que os camponeses e trabalhadores urbanos não eram simplesmente instrumentos políticos da burguesia. Possuíam reivindicações próprias, especialmente em relação aos direitos senhoriais, aos preços dos alimentos e às condições de subsistência.

**Interpretação historiográfica**

A historiografia marxista clássica, especialmente em sua interpretação da Revolução como revolução burguesa, enfatizou a ascensão de uma classe economicamente dinâmica que enfrentava os privilégios do Antigo Regime.

Abordagens posteriores destacaram a diversidade interna da burguesia, as alianças temporárias e a autonomia política de outros grupos sociais.

A questão não é negar a importância burguesa, mas evitar transformar uma categoria social ampla em um ator com vontade única.

**Conclusão:** a burguesia possuía interesses comuns em determinadas questões, sobretudo na contestação de privilégios jurídicos e na defesa da propriedade e da participação política. Entretanto, suas divisões econômicas e políticas impedem que seja tratada como um bloco homogêneo.

---

### 3. A CRISE FINANCEIRA ERA SUFICIENTE PARA DERRUBAR A MONARQUIA?

A crise financeira foi um dos fatores decisivos para a Revolução Francesa, mas, isoladamente, não era suficiente para determinar a queda da monarquia.

A França possuía uma dívida pública elevada, agravada por conflitos militares e pelos custos administrativos do Estado.

A participação na Guerra de Independência dos Estados Unidos aumentou o endividamento. Ao mesmo tempo, a estrutura tributária dificultava a arrecadação de recursos.

Os grupos privilegiados resistiam a reformas que ameaçassem suas vantagens fiscais e jurídicas. A monarquia encontrava dificuldades para impor mudanças sem enfrentar oposição política.

O problema financeiro tornou-se particularmente grave quando o Estado precisou negociar sua própria reorganização com os grupos sociais e instituições que deveriam aceitar as reformas.

A convocação dos Estados Gerais, em 1789, foi uma tentativa de superar esse impasse.

Entretanto, a reunião não permaneceu limitada à discussão tributária. A questão da representação política transformou-se em um conflito sobre a natureza da autoridade e a composição da nação.

A crise financeira abriu a porta para uma crise de soberania.

**Interpretação histórica**

Uma explicação exclusivamente fiscal não consegue esclarecer por que o conflito assumiu determinada forma revolucionária, por que a população parisiense se mobilizou ou por que os representantes do Terceiro Estado reivindicaram a condição de Assembleia Nacional.

A crise financeira foi um mecanismo de desencadeamento e aprofundamento da crise política, mas seus resultados dependeram das decisões dos atores históricos e das instituições existentes.

**Conclusão:** a crise financeira não era suficiente para derrubar a monarquia. Ela se tornou revolucionária porque se combinou com conflitos de representação, desigualdades sociais, resistência institucional e mobilização popular.

---

### 4. O ABSOLUTISMO FRANCÊS ERA EFETIVAMENTE ABSOLUTO NA PRÁTICA?

A expressão absolutismo pode transmitir a impressão de que o monarca exercia um poder ilimitado, sem qualquer resistência institucional ou social.

Entretanto, o funcionamento concreto da monarquia francesa era mais complexo.

O rei concentrava autoridade política significativa, mas precisava governar por meio de instituições, funcionários, tribunais, conselhos e relações de negociação com diferentes grupos sociais.

Os parlamentos franceses, por exemplo, eram tribunais superiores responsáveis pelo registro de determinados atos reais. Podiam apresentar remonstrâncias e resistir à aplicação de medidas, embora não fossem parlamentos legislativos no sentido contemporâneo.

A nobreza também preservava posições sociais e econômicas importantes. A Igreja possuía propriedades, privilégios e influência institucional.

A administração real dependia de estruturas locais e regionais que nem sempre obedeciam de maneira uniforme às determinações de Paris.

Assim, o absolutismo era uma concepção de autoridade soberana e uma forma de organização monárquica, mas sua aplicação prática encontrava limites.

A Coroa podia reivindicar autoridade superior, porém precisava enfrentar resistências, negociar e adaptar suas políticas.

**Interpretação historiográfica**

A historiografia institucional e social tem demonstrado que o Estado do Antigo Regime não funcionava como uma máquina administrativa perfeitamente centralizada.

A autoridade real coexistia com privilégios corporativos, jurisdições particulares e diferentes formas de autonomia local.

Isso ajuda a compreender por que as reformas fiscais encontraram tantas dificuldades.

**Conclusão:** o absolutismo francês era uma estrutura de concentração monárquica de autoridade, mas não significava poder ilimitado na prática. A distância entre a pretensão de soberania do rei e sua capacidade efetiva de governar foi uma das fragilidades do Antigo Regime.

---

### 5. COMO A CIRCULAÇÃO DE LIVROS E PANFLETOS ALTEROU A CULTURA POLÍTICA?

A expansão da imprensa e da circulação de textos modificou profundamente as formas de discussão pública durante o século XVIII.

Livros, periódicos, panfletos e textos filosóficos permitiram que debates sobre religião, política, ciência e sociedade ultrapassassem os espaços tradicionais das universidades e das instituições religiosas.

A Enciclopédia, organizada por Diderot e d'Alembert, tornou-se um dos grandes símbolos dessa transformação intelectual.

Os salões, cafés, academias e círculos de leitura também contribuíram para a formação de espaços de sociabilidade nos quais ideias eram discutidas e reinterpretadas.

A circulação de textos não significava que todos os franceses possuíam acesso igual ao conhecimento. O analfabetismo, as desigualdades econômicas e as limitações impostas às mulheres restringiam a participação.

Além disso, a censura continuava presente. Obras consideradas perigosas podiam enfrentar proibições, apreensões e perseguições.

Entretanto, a circulação de ideias tornou mais difícil manter o debate político exclusivamente sob controle da monarquia e das instituições tradicionais.

Durante a crise de 1789, os panfletos desempenharam papel particularmente importante.

O texto de Sieyès, O que é o Terceiro Estado?, tornou-se uma expressão influente da contestação política à sociedade de ordens.

A imprensa revolucionária também contribuiu para divulgar posições políticas, mobilizar apoiadores e intensificar conflitos.

**Interpretação histórica**

A formação de uma esfera pública não deve ser confundida com a existência de uma democracia plenamente inclusiva. Tratava-se de uma ampliação dos espaços de debate, ainda marcada por desigualdades de acesso e participação.

**Conclusão:** a circulação de livros e panfletos ajudou a transformar a cultura política francesa porque ampliou o debate público, difundiu novas linguagens de legitimidade e permitiu que a autoridade tradicional fosse submetida a uma crítica mais ampla.

---

### 6. QUAIS CONTRADIÇÕES EXISTIAM ENTRE OS DIREITOS NATURAIS E A SOCIEDADE ESCRAVISTA ATLÂNTICA?

Uma das contradições mais importantes da história da Revolução Francesa está na relação entre o universalismo dos direitos proclamados em 1789 e a permanência da escravidão e das desigualdades coloniais.

A Declaração dos Direitos do Homem e do Cidadão afirmou princípios de liberdade e igualdade jurídica.

Entretanto, a sociedade atlântica permanecia marcada pela escravidão, especialmente nas colônias açucareiras francesas.

Saint-Domingue, atual Haiti, era uma das colônias mais lucrativas da França. Sua economia dependia profundamente do trabalho escravizado.

A proclamação de direitos universais criou uma contradição política: se os homens nasciam livres e iguais em direitos, como justificar a escravização de populações inteiras?

A questão não era apenas filosófica. Ela envolvia interesses econômicos, proprietários coloniais, comerciantes, grupos abolicionistas e pessoas escravizadas que reivindicavam liberdade.

A Revolução Haitiana, iniciada em 1791, demonstrou que a linguagem dos direitos podia ser apropriada por aqueles que estavam excluídos da cidadania efetiva.

Em 1794, a Convenção Nacional aboliu a escravidão nas colônias francesas. Entretanto, Napoleão restabeleceu a escravidão em parte do império colonial em 1802.

A abolição definitiva da escravidão nas colônias francesas ocorreu em 1848.

Também existiam contradições de gênero. Olympe de Gouges publicou, em 1791, a Declaração dos Direitos da Mulher e da Cidadã, questionando a exclusão feminina da cidadania política.

Mary Wollstonecraft, em 1792, publicou uma defesa da educação e dos direitos das mulheres.

Esses documentos demonstram que o universalismo revolucionário foi objeto de disputas e ampliações.

**Interpretação historiográfica**

A historiografia contemporânea tem enfatizado que a história dos direitos humanos não pode ser compreendida apenas a partir dos debates europeus metropolitanos.

A experiência colonial, a escravidão e as reivindicações de mulheres e populações submetidas são indispensáveis para avaliar a universalidade dos princípios revolucionários.

**Conclusão:** a Revolução Francesa proclamou princípios universais, mas sua aplicação foi limitada por interesses coloniais, escravidão e exclusões políticas. A Revolução Haitiana e as reivindicações femininas expuseram essas contradições e contribuíram para ampliar o debate sobre cidadania e liberdade.

---

### 7. COMO AS INTERPRETAÇÕES DE HOBSBAWM E FURET DIFEREM NA ANÁLISE DA REVOLUÇÃO?

Eric Hobsbawm e François Furet são dois historiadores fundamentais para compreender os debates historiográficos sobre a Revolução Francesa.

Entretanto, suas interpretações partem de preocupações diferentes.

#### 7.1 Eric Hobsbawm: a Revolução como transformação social e econômica

Em A Era das Revoluções: 1789–1848, Hobsbawm interpreta a Revolução Francesa em relação à transformação mais ampla do mundo moderno.

A Revolução Francesa aparece associada à crise da sociedade de ordens, à ascensão de novas relações sociais e à expansão de princípios políticos vinculados à igualdade jurídica e à cidadania.

Sua interpretação também considera a relação entre a Revolução Francesa e a Revolução Industrial britânica.

Hobsbawm utiliza a ideia de uma dupla revolução para compreender a transformação do mundo entre o final do século XVIII e a primeira metade do século XIX.

A Revolução Francesa representa a dimensão política e institucional dessa transformação, enquanto a Revolução Industrial representa sua dimensão econômica e tecnológica.

Sua abordagem destaca a importância das estruturas sociais, das classes e das transformações econômicas.

#### 7.2 François Furet: cultura política e dinâmica revolucionária

François Furet, especialmente em Pensar a Revolução Francesa, questionou interpretações que tratavam a Revolução como uma consequência inevitável da ascensão burguesa.

Sua análise atribui grande importância à linguagem política, à soberania popular e à dinâmica interna do processo revolucionário.

Furet examinou como a ideia de vontade popular podia adquirir uma dimensão política radical, especialmente quando determinados grupos afirmavam representar a totalidade da nação.

Sua interpretação também questionou a identificação automática entre a Revolução e uma trajetória linear de emancipação.

A violência revolucionária, a disputa pela representação da vontade popular e a instabilidade institucional ocupam posição importante em sua reflexão.

#### 7.3 Comparação das abordagens

| Aspecto | Eric Hobsbawm | François Furet |
| :--- | :--- | :--- |
| **Ênfase principal** | Transformações sociais e econômicas. | Cultura política e dinâmica revolucionária. |
| **Interpretação** | Revolução como parte da formação do mundo moderno. | Revolução como processo político e ideológico complexo. |
| **Burguesia** | Importante para compreender a transformação social. | Não deve ser tratada como explicação suficiente. |
| **Ideias políticas** | Relacionadas às transformações sociais e históricas. | Elemento central da dinâmica revolucionária. |
| **Violência** | Deve ser compreendida no contexto das transformações e conflitos sociais. | Exige análise da linguagem política e da lógica da soberania revolucionária. |

A comparação não deve ser transformada em uma oposição absoluta. Hobsbawm não ignora a política, assim como Furet não ignora as estruturas sociais.

A diferença está principalmente na ênfase explicativa e na maneira de interpretar a dinâmica revolucionária.

**Conclusão:** Hobsbawm oferece uma interpretação ampla da Revolução como parte das transformações sociais, econômicas e políticas do mundo moderno. Furet enfatiza a cultura política, a soberania e as tensões internas do processo revolucionário. A comparação entre ambos permite compreender por que a Revolução Francesa permanece objeto de debates historiográficos.

---

### 8. EM QUE MEDIDA A REVOLUÇÃO REPRESENTOU RUPTURA E CONTINUIDADE EM RELAÇÃO AO ANTIGO REGIME?

A Revolução Francesa promoveu uma ruptura profunda com a estrutura jurídica e política do Antigo Regime. Entretanto, não eliminou imediatamente todas as instituições, práticas e relações sociais herdadas do passado.

A compreensão desse processo exige distinguir diferentes dimensões.

#### 8.1 A ruptura jurídica

A abolição dos privilégios feudais e a afirmação da igualdade jurídica representaram uma transformação fundamental.

A sociedade deixou de ser oficialmente organizada em ordens privilegiadas com direitos e obrigações diferenciados.

A propriedade privada ganhou proteção jurídica importante, enquanto a cidadania passou a ser discutida em termos de pertencimento à nação.

#### 8.2 A ruptura política

A soberania deixou de ser fundamentada exclusivamente na autoridade hereditária do monarca.

A nação tornou-se uma referência central para a legitimidade política.

As experiências de monarquia constitucional, república e governo representativo demonstraram a busca por novas formas de organização do Estado.

#### 8.3 A continuidade administrativa

A Revolução não criou todas as instituições administrativas do zero.

A centralização estatal, iniciada e desenvolvida antes de 1789, foi preservada e reorganizada.

Napoleão aprofundou a centralização administrativa, consolidou instituições e estabeleceu mecanismos de governo que permaneceram importantes na história francesa.

#### 8.4 A continuidade social

A eliminação dos privilégios jurídicos não significou o desaparecimento das desigualdades econômicas.

A propriedade continuou distribuída de maneira desigual. A riqueza permaneceu concentrada em determinados setores, e a participação política continuou submetida a diferentes restrições ao longo do processo revolucionário.

#### 8.5 A continuidade da centralização estatal

A Revolução combateu o absolutismo monárquico, mas não eliminou a tendência à centralização administrativa.

O Estado revolucionário desenvolveu instrumentos de mobilização, controle e organização que seriam posteriormente ampliados durante o período napoleônico.

Isso demonstra que ruptura política e continuidade institucional podem coexistir.

**Interpretação historiográfica**

Tocqueville, em O Antigo Regime e a Revolução, publicado em 1856, destacou continuidades entre a administração monárquica e a centralização estatal posterior.

Sua interpretação é especialmente importante porque questiona a ideia de que 1789 teria inaugurado uma sociedade inteiramente nova em todos os aspectos.

A Revolução modificou profundamente a legitimidade política e a organização jurídica, mas também preservou e reorganizou elementos anteriores.

**Conclusão:** a Revolução Francesa representou uma ruptura decisiva com a sociedade de ordens e com os fundamentos tradicionais da soberania monárquica. Entretanto, preservou e transformou estruturas administrativas, desigualdades econômicas e mecanismos de centralização. Seu significado histórico está justamente na combinação entre ruptura e continuidade.

---

# CONCLUSÃO GERAL DA INVESTIGAÇÃO AVANÇADA

As oito questões demonstram que a Revolução Francesa não pode ser explicada por uma causa isolada.

O Iluminismo forneceu instrumentos intelectuais de crítica; a crise fiscal comprometeu a capacidade de governo da monarquia; a desigualdade jurídica alimentou tensões sociais; e a disputa sobre representação transformou uma crise institucional em uma revolução política.

A burguesia participou decisivamente desse processo, mas não constituiu um grupo homogêneo. Os camponeses, trabalhadores urbanos, setores populares, mulheres e populações coloniais também desenvolveram reivindicações próprias.

A Declaração dos Direitos do Homem e do Cidadão estabeleceu princípios fundamentais para a história política moderna, mas sua universalidade encontrou limites concretos na escravidão, na exclusão feminina e nas restrições à participação política.

As interpretações de Hobsbawm e Furet demonstram que a Revolução pode ser analisada a partir de diferentes perspectivas, sem que uma única abordagem esgote sua complexidade.

Finalmente, a Revolução representou uma ruptura histórica profunda, mas não eliminou todas as estruturas anteriores. O Estado moderno francês também se desenvolveu por meio da reorganização de instituições e mecanismos de centralização que já existiam antes de 1789.

Compreender essas contradições é essencial para estudar a formação do liberalismo, do republicanismo, da democracia moderna, do socialismo e das diferentes tradições políticas que marcaram os séculos XIX e XX.

---

### REFERÊNCIAS FUNDAMENTAIS PARA APROFUNDAR AS QUESTÕES

| Autor e Obra | Questões Especialmente Relacionadas |
| :--- | :--- |
| **Eric Hobsbawm** — *A Era das Revoluções: 1789–1848* | 1, 2, 3 e 7 |
| **François Furet** — *Pensar a Revolução Francesa* | 1, 2, 7 e 8 |
| **William Doyle** — *The Oxford History of the French Revolution* | 1, 2, 3 e 4 |
| **Alexis de Tocqueville** — *O Antigo Regime e a Revolução* | 4 e 8 |
| **Lynn Hunt** — *Inventing Human Rights* | 5 e 6 |
| **Laurent Dubois** — *Avengers of the New World* | 6 |
| **Timothy Tackett** — *The Coming of the Terror in the French Revolution* | 1 e 7 |
| **Michel Vovelle** — *La mentalité révolutionnaire* | 5 e 8 |
`
  }
};

