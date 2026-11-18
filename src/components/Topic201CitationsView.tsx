import React, { useState } from 'react';
import {
  Copy,
  Check,
  Quote,
  FileText,
  ShieldCheck,
  Globe,
  BookmarkCheck,
  BookOpen,
  ExternalLink,
  Scale,
  HelpCircle,
} from 'lucide-react';

interface Topic201CitationsViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

const FULL_TEXT_201_ABA4 = `==========================================================
AS ORIGENS DA PRIMEIRA GUERRA MUNDIAL (1871–1914)
Protocolo de Auditoria Documental e Bibliográfica
Coleção III — História das Guerras Mundiais
Monografia nº 01 · Aba 4 Citações
==========================================================

PARTE I — CITAÇÕES E SÍNTESES HISTORIOGRÁFICAS

1. ORIENTAÇÃO METODOLÓGICA

Esta seção distingue três categorias:

A) CITAÇÃO LITERAL VERIFICADA
Trecho reproduzido exatamente como aparece na edição ou no documento consultado, acompanhado de referência e localização.

B) SÍNTESE HISTORIOGRÁFICA
Apresentação das ideias de um pesquisador com redação própria, sem utilizar aspas como se fossem palavras literais do autor.

C) INTERPRETAÇÃO ANALÍTICA
Conclusão elaborada a partir da comparação entre documentos e estudos históricos.

Não serão apresentadas frases entre aspas como citações literais sem conferência da fonte original, edição e página.

2. SÍNTESES DE PESQUISADORES

FRITZ FISCHER — A RESPONSABILIDADE ALEMÃ

Fischer argumentou que setores da liderança alemã possuíam objetivos expansionistas e que a política externa do Império Alemão contribuiu decisivamente para a crise que conduziu à guerra.

Sua pesquisa questionou interpretações que apresentavam a Alemanha como um Estado essencialmente defensivo.

Obra fundamental:
FISCHER, Fritz. Germany's Aims in the First World War. New York: W. W. Norton, 1967.

CHRISTOPHER CLARK — A INTERAÇÃO ENTRE AS POTÊNCIAS

Clark reconstrói as decisões tomadas pelos governos europeus antes e durante a crise de julho de 1914.

Sua abordagem enfatiza as interações entre os Estados, as percepções de ameaça, as escolhas políticas e os erros de avaliação que contribuíram para a escalada.

Obra fundamental:
CLARK, Christopher. The Sleepwalkers: How Europe Went to War in 1914. London: Allen Lane, 2012.

MARGARET MACMILLAN — A POSSIBILIDADE DE EVITAR A GUERRA

MacMillan examina as decisões políticas, os conflitos de interesses e as oportunidades diplomáticas que antecederam 1914.

Sua interpretação destaca que o conflito não era inevitável e que os dirigentes europeus participaram de um processo de escolhas que poderia ter seguido outro caminho.

Obra fundamental:
MACMILLAN, Margaret. The War That Ended Peace: The Road to 1914. New York: Random House, 2013.

HEW STRACHAN — A DIMENSÃO INTERNACIONAL E MILITAR

Strachan oferece uma interpretação ampla da Primeira Guerra Mundial, relacionando estratégia, política, sociedade e relações internacionais.

Sua produção permite compreender que o conflito não pode ser reduzido a uma disputa exclusivamente diplomática ou a uma sequência de batalhas.

Obra fundamental:
STRACHAN, Hew. The First World War. Oxford: Oxford University Press, 2001.

ANÁLISE COMPARATIVA

Fischer concentra sua interpretação na política alemã e em seus objetivos de poder.

Clark amplia o foco para as interações entre as potências e para o processo decisório de 1914.

MacMillan destaca as alternativas políticas e diplomáticas que foram abandonadas.

Strachan relaciona o conflito à transformação mais ampla da política e da guerra na Europa e no mundo.

Essas abordagens não são necessariamente incompatíveis em todos os aspectos. A investigação histórica pode combinar suas contribuições, desde que preserve as diferenças de interpretação.

==========================================================
PARTE II — DOCUMENTOS HISTÓRICOS
==========================================================

DOCUMENTO 01 — TRATADO DE FRANKFURT (1871)

DATA:
10 de maio de 1871.

PRODUTORES:
Representantes do Império Alemão e da França.

NATUREZA:
Tratado de paz.

CONTEXTO:
Encerramento formal da Guerra Franco-Prussiana.

IMPORTÂNCIA HISTÓRICA:
O tratado estabeleceu as condições da paz, incluindo a cessão de territórios franceses à Alemanha e o pagamento de indenização.

QUESTÕES PARA INVESTIGAÇÃO:
- Como o tratado alterou a posição internacional da França?
- De que maneira a perda territorial alimentou a rivalidade franco-alemã?
- Como a vitória prussiana contribuiu para a consolidação do Império Alemão?

DOCUMENTO 02 — TRATADO DA TRÍPLICE ALIANÇA (1882)

DATA:
20 de maio de 1882.

SIGNATÁRIOS:
Alemanha, Áustria-Hungria e Itália.

NATUREZA:
Tratado de aliança defensiva, com obrigações e condições específicas.

CONTEXTO:
Acordo diplomático destinado a organizar compromissos de segurança entre as três potências.

IMPORTÂNCIA HISTÓRICA:
O tratado demonstra a institucionalização de alianças na Europa e a tentativa de organizar a segurança por meio de compromissos diplomáticos.

QUESTÕES PARA INVESTIGAÇÃO:
- Quais situações acionavam as obrigações do tratado?
- Como as condições do acordo limitavam ou definiam a participação dos signatários?
- Por que a Itália não permaneceu ao lado de Alemanha e Áustria-Hungria em 1914?

DOCUMENTO 03 — ALIANÇA FRANCO-RUSSA (1892–1894)

DATA:
Convenção militar de 1892, seguida de formalização diplomática em 1894.

SIGNATÁRIOS:
França e Rússia.

NATUREZA:
Acordo político e militar.

CONTEXTO:
A aproximação entre os dois países respondeu às transformações do sistema de alianças europeu.

IMPORTÂNCIA HISTÓRICA:
A aliança reduziu o isolamento diplomático francês e ampliou a possibilidade de coordenação estratégica entre França e Rússia.

QUESTÕES PARA INVESTIGAÇÃO:
- Quais compromissos militares foram estabelecidos?
- Como a aliança alterou o cálculo estratégico alemão?
- Qual era a relação entre a aliança e a hipótese de uma guerra em duas frentes?

DOCUMENTO 04 — ENTENTE CORDIALE (1904)

DATA:
8 de abril de 1904.

SIGNATÁRIOS:
França e Reino Unido.

NATUREZA:
Conjunto de acordos diplomáticos.

CONTEXTO:
Resolução de disputas coloniais e aproximação entre os dois países.

IMPORTÂNCIA HISTÓRICA:
A Entente Cordiale não constituiu, por si só, uma aliança militar automática. Representou uma aproximação diplomática que facilitou a cooperação posterior.

QUESTÕES PARA INVESTIGAÇÃO:
- Quais disputas coloniais foram resolvidas?
- Por que a aproximação foi importante para a diplomacia europeia?
- Como a Alemanha interpretou o entendimento entre franceses e britânicos?

DOCUMENTO 05 — CONVENÇÃO ANGLO-RUSSA (1907)

DATA:
31 de agosto de 1907.

SIGNATÁRIOS:
Reino Unido e Rússia.

NATUREZA:
Convenção diplomática.

CONTEXTO:
Acordo destinado a resolver disputas entre os dois impérios na Pérsia, no Afeganistão e no Tibete.

IMPORTÂNCIA HISTÓRICA:
A convenção completou uma aproximação diplomática entre Reino Unido, França e Rússia, posteriormente conhecida como Tríplice Entente.

QUESTÕES PARA INVESTIGAÇÃO:
- Quais regiões foram objeto do acordo?
- Como a convenção modificou as relações entre os dois impérios?
- Por que a Tríplice Entente não deve ser confundida com um tratado militar único?

DOCUMENTO 06 — DOCUMENTOS DA CRISE DA BÓSNIA (1908–1909)

DATA:
Outubro de 1908 em diante.

PRODUTORES:
Governos da Áustria-Hungria, Rússia, Sérvia, Alemanha e demais potências envolvidas.

NATUREZA:
Comunicados diplomáticos, notas oficiais, correspondências e acordos internacionais.

CONTEXTO:
Anexação austro-húngara da Bósnia-Herzegovina.

IMPORTÂNCIA HISTÓRICA:
A crise demonstra a ligação entre nacionalismo, interesses imperiais e rivalidade diplomática nos Bálcãs.

QUESTÕES PARA INVESTIGAÇÃO:
- Como a anexação foi justificada por Viena?
- Qual foi a reação da Sérvia?
- Por que a Rússia recuou?
- Como a Alemanha apoiou sua aliada?

DOCUMENTO 07 — DOCUMENTOS DA CRISE DE AGADIR (1911)

DATA:
1911.

PRODUTORES:
Governos alemão, francês e britânico.

NATUREZA:
Correspondência diplomática, comunicados e acordos.

CONTEXTO:
Disputa em torno da influência francesa no Marrocos e da presença alemã em Agadir.

IMPORTÂNCIA HISTÓRICA:
O episódio permite estudar o uso de demonstrações militares como instrumento de pressão diplomática.

QUESTÕES PARA INVESTIGAÇÃO:
- Qual era o objetivo alemão?
- Como o Reino Unido reagiu?
- Quais concessões foram estabelecidas no acordo final?
- Como a crise afetou a confiança entre as potências?

==========================================================
PARTE III — PROTOCOLO DE AUDITORIA DOCUMENTAL
==========================================================

1. IDENTIFICAÇÃO DO DOCUMENTO

Cada documento incorporado ao aplicativo deverá apresentar:

- Título oficial.
- Data de produção.
- Autor ou instituição produtora.
- Destinatário, quando aplicável.
- Natureza documental.
- Idioma original.
- Local de produção.
- Acervo custodiante.
- Referência arquivística ou editorial confirmada.
- Contexto histórico.
- Relação com o tema estudado.

2. AUTENTICIDADE E PROCEDÊNCIA

A pesquisa deverá verificar:

- Se o documento corresponde ao original ou a uma reprodução posterior.
- Se existe versão oficial publicada.
- Se a tradução é integral ou parcial.
- Se houve edição, seleção ou supressão de trechos.
- Se o documento foi produzido durante o acontecimento ou posteriormente.
- Se existem versões divergentes.

3. TRADUÇÕES

Quando houver tradução para o português, o aplicativo deverá informar:

- Idioma original.
- Responsável pela tradução, quando identificado.
- Edição utilizada.
- Eventuais adaptações de linguagem.
- Indicação de tradução própria, quando for o caso.

Uma tradução não deve ser apresentada como transcrição original.

4. CITAÇÕES LITERAIS

Toda citação literal deverá conter:

- Nome do autor ou instituição.
- Título da obra ou documento.
- Edição ou acervo.
- Página ou localização documental.
- Idioma original.
- Tradução, quando aplicável.

Se a localização não puder ser confirmada, o trecho não deverá ser apresentado como citação literal verificada.

5. SÍNTESES HISTORIOGRÁFICAS

Quando a ideia de um pesquisador for apresentada com palavras próprias, deverá ser identificada como síntese ou paráfrase.

Não utilizar aspas para destacar uma formulação que não foi conferida literalmente na fonte.

==========================================================
PARTE IV — ACERVOS E REPOSITÓRIOS DE PESQUISA
==========================================================

1. THE NATIONAL ARCHIVES — REINO UNIDO

Acervo relevante para a diplomacia britânica, política externa, documentação governamental e história militar.

Portal:
https://www.nationalarchives.gov.uk/

2. POLITISCHES ARCHIV DES AUSWÄRTIGEN AMTS — ALEMANHA

Arquivo político do Ministério das Relações Exteriores alemão.

Relevância:
Correspondência diplomática, tratados, relatórios e documentação da política externa alemã.

Portal:
https://archiv.diplo.de/

3. ÖSTERREICHISCHES STAATSARCHIV — ÁUSTRIA

Acervo fundamental para a história da monarquia dos Habsburgo e da política austro-húngara.

Portal:
https://www.oesta.gv.at/

4. ARCHIVES DIPLOMATIQUES — FRANÇA

Documentação da diplomacia francesa, tratados e correspondência internacional.

Portal:
https://www.diplomatie.gouv.fr/

5. NATIONAL ARCHIVES AND RECORDS ADMINISTRATION — ESTADOS UNIDOS

Documentação diplomática e governamental norte-americana, especialmente útil para estudos comparativos.

Portal:
https://www.archives.gov/

6. INTERNATIONAL ENCYCLOPEDIA OF THE FIRST WORLD WAR

Projeto acadêmico internacional que reúne estudos sobre os antecedentes, o desenvolvimento e as consequências da Primeira Guerra Mundial.

Portal:
https://encyclopedia.1914-1918-online.net/

==========================================================
PARTE V — BIBLIOGRAFIA CONSOLIDADA
==========================================================

FONTES PRIMÁRIAS E COLEÇÕES DOCUMENTAIS

MOMBAUER, Annika (ed.). The Origins of the First World War: Diplomatic and Military Documents. Manchester: Manchester University Press, 2013.

EUROPEAN DIPLOMATIC DOCUMENTS:
Tratados, convenções, correspondências e documentos diplomáticos produzidos entre 1871 e 1914, consultados em edições documentais e acervos oficiais.

ESTUDOS HISTORIOGRÁFICOS

CLARK, Christopher. The Sleepwalkers: How Europe Went to War in 1914. London: Allen Lane, 2012.

FISCHER, Fritz. Germany's Aims in the First World War. New York: W. W. Norton, 1967.

MACMILLAN, Margaret. The War That Ended Peace: The Road to 1914. New York: Random House, 2013.

MULLIGAN, William. The Origins of the First World War. Cambridge: Cambridge University Press, 2010.

OTTE, T. G. July Crisis: The World's Descent into War, Summer 1914. Cambridge: Cambridge University Press, 2014.

STRACHAN, Hew. The First World War. Oxford: Oxford University Press, 2001.

==========================================================
CONCLUSÃO DOCUMENTAL
==========================================================

A documentação diplomática anterior a 1914 permite reconstruir os interesses, as percepções e as decisões das grandes potências.

Tratados demonstram compromissos formais. Correspondências revelam preocupações e divergências. Relatórios militares ajudam a compreender os cálculos estratégicos. Documentos governamentais permitem comparar as justificativas públicas com as decisões internas.

Nenhuma fonte deve ser interpretada isoladamente.

A investigação deve considerar a autoria, o contexto, a finalidade e os limites de cada documento.

O objetivo desta aba é estabelecer uma base verificável para que o leitor possa avançar da narrativa histórica para a pesquisa documental.`;

interface MethodologyCategory {
  title: string;
  description: string;
}

const METHODOLOGY_CATEGORIES: MethodologyCategory[] = [
  {
    title: 'A) CITAÇÃO LITERAL VERIFICADA',
    description:
      'Trecho reproduzido exatamente como aparece na edição ou no documento consultado, acompanhado de referência e localização.',
  },
  {
    title: 'B) SÍNTESE HISTORIOGRÁFICA',
    description:
      'Apresentação das ideias de um pesquisador com redação própria, sem utilizar aspas como se fossem palavras literais do autor.',
  },
  {
    title: 'C) INTERPRETAÇÃO ANALÍTICA',
    description:
      'Conclusão elaborada a partir da comparação entre documentos e estudos históricos.',
  },
];

interface ResearcherSynthesis {
  title: string;
  paragraphs: string[];
  workLabel: string;
  workCitation: string;
}

const RESEARCHER_SYNTHESES: ResearcherSynthesis[] = [
  {
    title: 'FRITZ FISCHER — A RESPONSABILIDADE ALEMÃ',
    paragraphs: [
      'Fischer argumentou que setores da liderança alemã possuíam objetivos expansionistas e que a política externa do Império Alemão contribuiu decisivamente para a crise que conduziu à guerra.',
      'Sua pesquisa questionou interpretações que apresentavam a Alemanha como um Estado essencialmente defensivo.',
    ],
    workLabel: 'Obra fundamental:',
    workCitation: "FISCHER, Fritz. Germany's Aims in the First World War. New York: W. W. Norton, 1967.",
  },
  {
    title: 'CHRISTOPHER CLARK — A INTERAÇÃO ENTRE AS POTÊNCIAS',
    paragraphs: [
      'Clark reconstrói as decisões tomadas pelos governos europeus antes e durante a crise de julho de 1914.',
      'Sua abordagem enfatiza as interações entre os Estados, as percepções de ameaça, as escolhas políticas e os erros de avaliação que contribuíram para a escalada.',
    ],
    workLabel: 'Obra fundamental:',
    workCitation: 'CLARK, Christopher. The Sleepwalkers: How Europe Went to War in 1914. London: Allen Lane, 2012.',
  },
  {
    title: 'MARGARET MACMILLAN — A POSSIBILIDADE DE EVITAR A GUERRA',
    paragraphs: [
      'MacMillan examina as decisões políticas, os conflitos de interesses e as oportunidades diplomáticas que antecederam 1914.',
      'Sua interpretação destaca que o conflito não era inevitável e que os dirigentes europeus participaram de um processo de escolhas que poderia ter seguido outro caminho.',
    ],
    workLabel: 'Obra fundamental:',
    workCitation: 'MACMILLAN, Margaret. The War That Ended Peace: The Road to 1914. New York: Random House, 2013.',
  },
  {
    title: 'HEW STRACHAN — A DIMENSÃO INTERNACIONAL E MILITAR',
    paragraphs: [
      'Strachan oferece uma interpretação ampla da Primeira Guerra Mundial, relacionando estratégia, política, sociedade e relações internacionais.',
      'Sua produção permite compreender que o conflito não pode ser reduzido a uma disputa exclusivamente diplomática ou a uma sequência de batalhas.',
    ],
    workLabel: 'Obra fundamental:',
    workCitation: 'STRACHAN, Hew. The First World War. Oxford: Oxford University Press, 2001.',
  },
];

interface HistoricalDocument201 {
  title: string;
  fields: { label: string; value: string }[];
  questionsLabel: string;
  questions: string[];
}

const HISTORICAL_DOCUMENTS_201: HistoricalDocument201[] = [
  {
    title: 'DOCUMENTO 01 — TRATADO DE FRANKFURT (1871)',
    fields: [
      { label: 'DATA:', value: '10 de maio de 1871.' },
      { label: 'PRODUTORES:', value: 'Representantes do Império Alemão e da França.' },
      { label: 'NATUREZA:', value: 'Tratado de paz.' },
      { label: 'CONTEXTO:', value: 'Encerramento formal da Guerra Franco-Prussiana.' },
      {
        label: 'IMPORTÂNCIA HISTÓRICA:',
        value:
          'O tratado estabeleceu as condições da paz, incluindo a cessão de territórios franceses à Alemanha e o pagamento de indenização.',
      },
    ],
    questionsLabel: 'QUESTÕES PARA INVESTIGAÇÃO:',
    questions: [
      'Como o tratado alterou a posição internacional da França?',
      'De que maneira a perda territorial alimentou a rivalidade franco-alemã?',
      'Como a vitória prussiana contribuiu para a consolidação do Império Alemão?',
    ],
  },
  {
    title: 'DOCUMENTO 02 — TRATADO DA TRÍPLICE ALIANÇA (1882)',
    fields: [
      { label: 'DATA:', value: '20 de maio de 1882.' },
      { label: 'SIGNATÁRIOS:', value: 'Alemanha, Áustria-Hungria e Itália.' },
      {
        label: 'NATUREZA:',
        value: 'Tratado de aliança defensiva, com obrigações e condições específicas.',
      },
      {
        label: 'CONTEXTO:',
        value: 'Acordo diplomático destinado a organizar compromissos de segurança entre as três potências.',
      },
      {
        label: 'IMPORTÂNCIA HISTÓRICA:',
        value:
          'O tratado demonstra a institucionalização de alianças na Europa e a tentativa de organizar a segurança por meio de compromissos diplomáticos.',
      },
    ],
    questionsLabel: 'QUESTÕES PARA INVESTIGAÇÃO:',
    questions: [
      'Quais situações acionavam as obrigações do tratado?',
      'Como as condições do acordo limitavam ou definiam a participação dos signatários?',
      'Por que a Itália não permaneceu ao lado de Alemanha e Áustria-Hungria em 1914?',
    ],
  },
  {
    title: 'DOCUMENTO 03 — ALIANÇA FRANCO-RUSSA (1892–1894)',
    fields: [
      {
        label: 'DATA:',
        value: 'Convenção militar de 1892, seguida de formalização diplomática em 1894.',
      },
      { label: 'SIGNATÁRIOS:', value: 'França e Rússia.' },
      { label: 'NATUREZA:', value: 'Acordo político e militar.' },
      {
        label: 'CONTEXTO:',
        value: 'A aproximação entre os dois países respondeu às transformações do sistema de alianças europeu.',
      },
      {
        label: 'IMPORTÂNCIA HISTÓRICA:',
        value:
          'A aliança reduziu o isolamento diplomático francês e ampliou a possibilidade de coordenação estratégica entre França e Rússia.',
      },
    ],
    questionsLabel: 'QUESTÕES PARA INVESTIGAÇÃO:',
    questions: [
      'Quais compromissos militares foram estabelecidos?',
      'Como a aliança alterou o cálculo estratégico alemão?',
      'Qual era a relação entre a aliança e a hipótese de uma guerra em duas frentes?',
    ],
  },
  {
    title: 'DOCUMENTO 04 — ENTENTE CORDIALE (1904)',
    fields: [
      { label: 'DATA:', value: '8 de abril de 1904.' },
      { label: 'SIGNATÁRIOS:', value: 'França e Reino Unido.' },
      { label: 'NATUREZA:', value: 'Conjunto de acordos diplomáticos.' },
      {
        label: 'CONTEXTO:',
        value: 'Resolução de disputas coloniais e aproximação entre os dois países.',
      },
      {
        label: 'IMPORTÂNCIA HISTÓRICA:',
        value:
          'A Entente Cordiale não constituiu, por si só, uma aliança militar automática. Representou uma aproximação diplomática que facilitou a cooperação posterior.',
      },
    ],
    questionsLabel: 'QUESTÕES PARA INVESTIGAÇÃO:',
    questions: [
      'Quais disputas coloniais foram resolvidas?',
      'Por que a aproximação foi importante para a diplomacia europeia?',
      'Como a Alemanha interpretou o entendimento entre franceses e britânicos?',
    ],
  },
  {
    title: 'DOCUMENTO 05 — CONVENÇÃO ANGLO-RUSSA (1907)',
    fields: [
      { label: 'DATA:', value: '31 de agosto de 1907.' },
      { label: 'SIGNATÁRIOS:', value: 'Reino Unido e Rússia.' },
      { label: 'NATUREZA:', value: 'Convenção diplomática.' },
      {
        label: 'CONTEXTO:',
        value:
          'Acordo destinado a resolver disputas entre os dois impérios na Pérsia, no Afeganistão e no Tibete.',
      },
      {
        label: 'IMPORTÂNCIA HISTÓRICA:',
        value:
          'A convenção completou uma aproximação diplomática entre Reino Unido, França e Rússia, posteriormente conhecida como Tríplice Entente.',
      },
    ],
    questionsLabel: 'QUESTÕES PARA INVESTIGAÇÃO:',
    questions: [
      'Quais regiões foram objeto do acordo?',
      'Como a convenção modificou as relações entre os dois impérios?',
      'Por que a Tríplice Entente não deve ser confundida com um tratado militar único?',
    ],
  },
  {
    title: 'DOCUMENTO 06 — DOCUMENTOS DA CRISE DA BÓSNIA (1908–1909)',
    fields: [
      { label: 'DATA:', value: 'Outubro de 1908 em diante.' },
      {
        label: 'PRODUTORES:',
        value: 'Governos da Áustria-Hungria, Rússia, Sérvia, Alemanha e demais potências envolvidas.',
      },
      {
        label: 'NATUREZA:',
        value: 'Comunicados diplomáticos, notas oficiais, correspondências e acordos internacionais.',
      },
      { label: 'CONTEXTO:', value: 'Anexação austro-húngara da Bósnia-Herzegovina.' },
      {
        label: 'IMPORTÂNCIA HISTÓRICA:',
        value:
          'A crise demonstra a ligação entre nacionalismo, interesses imperiais e rivalidade diplomática nos Bálcãs.',
      },
    ],
    questionsLabel: 'QUESTÕES PARA INVESTIGAÇÃO:',
    questions: [
      'Como a anexação foi justificada por Viena?',
      'Qual foi a reação da Sérvia?',
      'Por que a Rússia recuou?',
      'Como a Alemanha apoiou sua aliada?',
    ],
  },
  {
    title: 'DOCUMENTO 07 — DOCUMENTOS DA CRISE DE AGADIR (1911)',
    fields: [
      { label: 'DATA:', value: '1911.' },
      { label: 'PRODUTORES:', value: 'Governos alemão, francês e britânico.' },
      { label: 'NATUREZA:', value: 'Correspondência diplomática, comunicados e acordos.' },
      {
        label: 'CONTEXTO:',
        value: 'Disputa em torno da influência francesa no Marrocos e da presença alemã em Agadir.',
      },
      {
        label: 'IMPORTÂNCIA HISTÓRICA:',
        value:
          'O episódio permite estudar o uso de demonstrações militares como instrumento de pressão diplomática.',
      },
    ],
    questionsLabel: 'QUESTÕES PARA INVESTIGAÇÃO:',
    questions: [
      'Qual era o objetivo alemão?',
      'Como o Reino Unido reagiu?',
      'Quais concessões foram estabelecidas no acordo final?',
      'Como a crise afetou a confiança entre as potências?',
    ],
  },
];

interface AuditProtocolSection {
  title: string;
  intro?: string;
  bullets?: string[];
  paragraphs?: string[];
}

const AUDIT_PROTOCOL_SECTIONS: AuditProtocolSection[] = [
  {
    title: '1. IDENTIFICAÇÃO DO DOCUMENTO',
    intro: 'Cada documento incorporado ao aplicativo deverá apresentar:',
    bullets: [
      'Título oficial.',
      'Data de produção.',
      'Autor ou instituição produtora.',
      'Destinatário, quando aplicável.',
      'Natureza documental.',
      'Idioma original.',
      'Local de produção.',
      'Acervo custodiante.',
      'Referência arquivística ou editorial confirmada.',
      'Contexto histórico.',
      'Relação com o tema estudado.',
    ],
  },
  {
    title: '2. AUTENTICIDADE E PROCEDÊNCIA',
    intro: 'A pesquisa deverá verificar:',
    bullets: [
      'Se o documento corresponde ao original ou a uma reprodução posterior.',
      'Se existe versão oficial publicada.',
      'Se a tradução é integral ou parcial.',
      'Se houve edição, seleção ou supressão de trechos.',
      'Se o documento foi produzido durante o acontecimento ou posteriormente.',
      'Se existem versões divergentes.',
    ],
  },
  {
    title: '3. TRADUÇÕES',
    intro: 'Quando houver tradução para o português, o aplicativo deverá informar:',
    bullets: [
      'Idioma original.',
      'Responsável pela tradução, quando identificado.',
      'Edição utilizada.',
      'Eventuais adaptações de linguagem.',
      'Indicação de tradução própria, quando for o caso.',
    ],
    paragraphs: ['Uma tradução não deve ser apresentada como transcrição original.'],
  },
  {
    title: '4. CITAÇÕES LITERAIS',
    intro: 'Toda citação literal deverá conter:',
    bullets: [
      'Nome do autor ou instituição.',
      'Título da obra ou documento.',
      'Edição ou acervo.',
      'Página ou localização documental.',
      'Idioma original.',
      'Tradução, quando aplicável.',
    ],
    paragraphs: [
      'Se a localização não puder ser confirmada, o trecho não deverá ser apresentado como citação literal verificada.',
    ],
  },
  {
    title: '5. SÍNTESES HISTORIOGRÁFICAS',
    paragraphs: [
      'Quando a ideia de um pesquisador for apresentada com palavras próprias, deverá ser identificada como síntese ou paráfrase.',
      'Não utilizar aspas para destacar uma formulação que não foi conferida literalmente na fonte.',
    ],
  },
];

interface ResearchArchive201 {
  title: string;
  description: string;
  relevanceLabel?: string;
  relevanceText?: string;
  portalLabel: string;
  portalUrl: string;
}

const RESEARCH_ARCHIVES_201: ResearchArchive201[] = [
  {
    title: '1. THE NATIONAL ARCHIVES — REINO UNIDO',
    description:
      'Acervo relevante para a diplomacia britânica, política externa, documentação governamental e história militar.',
    portalLabel: 'Portal:',
    portalUrl: 'https://www.nationalarchives.gov.uk/',
  },
  {
    title: '2. POLITISCHES ARCHIV DES AUSWÄRTIGEN AMTS — ALEMANHA',
    description: 'Arquivo político do Ministério das Relações Exteriores alemão.',
    relevanceLabel: 'Relevância:',
    relevanceText:
      'Correspondência diplomática, tratados, relatórios e documentação da política externa alemã.',
    portalLabel: 'Portal:',
    portalUrl: 'https://archiv.diplo.de/',
  },
  {
    title: '3. ÖSTERREICHISCHES STAATSARCHIV — ÁUSTRIA',
    description:
      'Acervo fundamental para a história da monarquia dos Habsburgo e da política austro-húngara.',
    portalLabel: 'Portal:',
    portalUrl: 'https://www.oesta.gv.at/',
  },
  {
    title: '4. ARCHIVES DIPLOMATIQUES — FRANÇA',
    description: 'Documentação da diplomacia francesa, tratados e correspondência internacional.',
    portalLabel: 'Portal:',
    portalUrl: 'https://www.diplomatie.gouv.fr/',
  },
  {
    title: '5. NATIONAL ARCHIVES AND RECORDS ADMINISTRATION — ESTADOS UNIDOS',
    description:
      'Documentação diplomática e governamental norte-americana, especialmente útil para estudos comparativos.',
    portalLabel: 'Portal:',
    portalUrl: 'https://www.archives.gov/',
  },
  {
    title: '6. INTERNATIONAL ENCYCLOPEDIA OF THE FIRST WORLD WAR',
    description:
      'Projeto acadêmico internacional que reúne estudos sobre os antecedentes, o desenvolvimento e as consequências da Primeira Guerra Mundial.',
    portalLabel: 'Portal:',
    portalUrl: 'https://encyclopedia.1914-1918-online.net/',
  },
];

export const Topic201CitationsView: React.FC<Topic201CitationsViewProps> = ({
  getFontSizeClass,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(FULL_TEXT_201_ABA4);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4 border-b border-stone-800 pb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                Coleção III — História das Guerras Mundiais
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                Monografia nº 01 · Aba 4 Citações
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              AS ORIGENS DA PRIMEIRA GUERRA MUNDIAL (1871–1914)
            </h1>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              Protocolo de Auditoria Documental e Bibliográfica
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar texto integral da Aba 4 Citações"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Texto Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Aba Citações na Íntegra</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* PARTE I — CITAÇÕES E SÍNTESES HISTORIOGRÁFICAS */}
      <section
        id="cit-parte-1"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <Quote className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE I — CITAÇÕES E SÍNTESES HISTORIOGRÁFICAS
          </h2>
        </div>

        {/* 1. ORIENTAÇÃO METODOLÓGICA */}
        <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-4">
          <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
            1. ORIENTAÇÃO METODOLÓGICA
          </h3>
          <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
            Esta seção distingue três categorias:
          </p>
          <div className="grid grid-cols-1 gap-3">
            {METHODOLOGY_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-stone-950/60 border border-stone-800/90 border-l-4 border-l-amber-500/80 p-4 rounded-r-lg space-y-1"
              >
                <div className="font-mono text-xs font-bold text-amber-300">
                  {cat.title}
                </div>
                <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
          <p className={`font-serif text-stone-200 leading-relaxed pt-1 ${getFontSizeClass('body')}`}>
            Não serão apresentadas frases entre aspas como citações literais sem conferência da fonte original, edição e página.
          </p>
        </div>

        {/* 2. SÍNTESES DE PESQUISADORES */}
        <div className="space-y-5">
          <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
            2. SÍNTESES DE PESQUISADORES
          </h3>

          {RESEARCHER_SYNTHESES.map((item, idx) => (
            <article
              key={idx}
              className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3"
            >
              <h4 className={`font-serif font-bold text-stone-100 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                {item.title}
              </h4>
              <div className={`space-y-3 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                {item.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
              <div className="bg-stone-950/60 border border-stone-800/80 p-3.5 rounded-lg space-y-1">
                <div className="text-xs font-mono font-bold text-amber-400">
                  {item.workLabel}
                </div>
                <p className="font-mono text-xs text-stone-300 leading-relaxed">
                  {item.workCitation}
                </p>
              </div>
            </article>
          ))}

          {/* ANÁLISE COMPARATIVA */}
          <article className="bg-[#121214] p-5 rounded-lg border border-amber-600/30 space-y-3">
            <div className="flex items-center gap-2 border-b border-stone-800/80 pb-2">
              <Scale className="w-4 h-4 text-amber-400 shrink-0" />
              <h4 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>
                ANÁLISE COMPARATIVA
              </h4>
            </div>
            <div className={`space-y-3 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
              <p>Fischer concentra sua interpretação na política alemã e em seus objetivos de poder.</p>
              <p>Clark amplia o foco para as interações entre as potências e para o processo decisório de 1914.</p>
              <p>MacMillan destaca as alternativas políticas e diplomáticas que foram abandonadas.</p>
              <p>Strachan relaciona o conflito à transformação mais ampla da política e da guerra na Europa e no mundo.</p>
              <p>
                Essas abordagens não são necessariamente incompatíveis em todos os aspectos. A investigação histórica pode combinar suas contribuições, desde que preserve as diferenças de interpretação.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* PARTE II — DOCUMENTOS HISTÓRICOS */}
      <section
        id="cit-parte-2"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE II — DOCUMENTOS HISTÓRICOS
          </h2>
        </div>

        <div className="space-y-5">
          {HISTORICAL_DOCUMENTS_201.map((doc, idx) => (
            <article
              key={idx}
              className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-4"
            >
              <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                {doc.title}
              </h3>

              <div className="space-y-2.5">
                {doc.fields.map((field, fIdx) => (
                  <div key={fIdx} className="space-y-0.5">
                    <div className="text-xs font-mono font-bold text-amber-400">
                      {field.label}
                    </div>
                    <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-stone-950/60 border border-stone-800/80 border-l-4 border-l-amber-500 p-4 rounded-r-lg space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{doc.questionsLabel}</span>
                </div>
                <ul className={`space-y-1.5 font-serif text-stone-200 ${getFontSizeClass('body')}`}>
                  {doc.questions.map((q, qIdx) => (
                    <li key={qIdx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold shrink-0">-</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PARTE III — PROTOCOLO DE AUDITORIA DOCUMENTAL */}
      <section
        id="cit-parte-3"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE III — PROTOCOLO DE AUDITORIA DOCUMENTAL
          </h2>
        </div>

        <div className="space-y-5">
          {AUDIT_PROTOCOL_SECTIONS.map((sec, idx) => (
            <article
              key={idx}
              className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3"
            >
              <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                {sec.title}
              </h3>

              {sec.intro && (
                <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                  {sec.intro}
                </p>
              )}

              {sec.bullets && (
                <ul className={`space-y-1.5 pl-1 font-serif text-stone-300 ${getFontSizeClass('body')}`}>
                  {sec.bullets.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold shrink-0">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.paragraphs && (
                <div className={`space-y-2 pt-1 font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* PARTE IV — ACERVOS E REPOSITÓRIOS DE PESQUISA */}
      <section
        id="cit-parte-4"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <Globe className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE IV — ACERVOS E REPOSITÓRIOS DE PESQUISA
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {RESEARCH_ARCHIVES_201.map((archive, idx) => (
            <article
              key={idx}
              className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5"
            >
              <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
                {archive.title}
              </h3>

              <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                {archive.description}
              </p>

              {archive.relevanceLabel && archive.relevanceText && (
                <div className="space-y-0.5">
                  <div className="text-xs font-mono font-bold text-amber-400">
                    {archive.relevanceLabel}
                  </div>
                  <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                    {archive.relevanceText}
                  </p>
                </div>
              )}

              <div className="pt-1 flex items-center flex-wrap gap-2 text-xs font-mono">
                <span className="font-bold text-amber-400">{archive.portalLabel}</span>
                <a
                  href={archive.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 underline underline-offset-4 break-all"
                >
                  <span>{archive.portalUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PARTE V — BIBLIOGRAFIA CONSOLIDADA */}
      <section
        id="cit-parte-5"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <BookmarkCheck className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE V — BIBLIOGRAFIA CONSOLIDADA
          </h2>
        </div>

        <div className="space-y-5">
          <article className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              FONTES PRIMÁRIAS E COLEÇÕES DOCUMENTAIS
            </h3>
            <div className="space-y-3 font-mono text-xs sm:text-sm text-stone-300 leading-relaxed">
              <p>
                MOMBAUER, Annika (ed.). The Origins of the First World War: Diplomatic and Military Documents. Manchester: Manchester University Press, 2013.
              </p>
              <div className="bg-stone-950/60 border border-stone-800/80 p-3.5 rounded-lg space-y-1">
                <div className="font-bold text-amber-400">
                  EUROPEAN DIPLOMATIC DOCUMENTS:
                </div>
                <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                  Tratados, convenções, correspondências e documentos diplomáticos produzidos entre 1871 e 1914, consultados em edições documentais e acervos oficiais.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              ESTUDOS HISTORIOGRÁFICOS
            </h3>
            <ul className="space-y-2.5 font-mono text-xs sm:text-sm text-stone-300 leading-relaxed">
              <li>CLARK, Christopher. The Sleepwalkers: How Europe Went to War in 1914. London: Allen Lane, 2012.</li>
              <li>FISCHER, Fritz. Germany's Aims in the First World War. New York: W. W. Norton, 1967.</li>
              <li>MACMILLAN, Margaret. The War That Ended Peace: The Road to 1914. New York: Random House, 2013.</li>
              <li>MULLIGAN, William. The Origins of the First World War. Cambridge: Cambridge University Press, 2010.</li>
              <li>OTTE, T. G. July Crisis: The World's Descent into War, Summer 1914. Cambridge: Cambridge University Press, 2014.</li>
              <li>STRACHAN, Hew. The First World War. Oxford: Oxford University Press, 2001.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* CONCLUSÃO DOCUMENTAL */}
      <section
        id="cit-conclusao"
        className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-amber-600/40 space-y-4 shadow-md"
      >
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <BookOpen className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-lg sm:text-2xl font-serif font-bold text-amber-300 uppercase tracking-wide">
            CONCLUSÃO DOCUMENTAL
          </h2>
        </div>
        <div className={`space-y-3 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
          <p>
            A documentação diplomática anterior a 1914 permite reconstruir os interesses, as percepções e as decisões das grandes potências.
          </p>
          <p>
            Tratados demonstram compromissos formais. Correspondências revelam preocupações e divergências. Relatórios militares ajudam a compreender os cálculos estratégicos. Documentos governamentais permitem comparar as justificativas públicas com as decisões internas.
          </p>
          <p>Nenhuma fonte deve ser interpretada isoladamente.</p>
          <p>A investigação deve considerar a autoria, o contexto, a finalidade e os limites de cada documento.</p>
          <p>
            O objetivo desta aba é estabelecer uma base verificável para que o leitor possa avançar da narrativa histórica para a pesquisa documental.
          </p>
        </div>
      </section>
    </div>
  );
};
