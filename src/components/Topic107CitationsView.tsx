import React, { useState } from 'react';
import { Quote, BookOpen, FileText, Check, Copy, ExternalLink, BookmarkCheck } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

export const Topic107CitationsView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const fullText = `CITAÇÕES & DOCUMENTOS
FASCISMO ITALIANO: ULTRANACIONALISMO, TOTALITARISMO E CORPORATIVISMO (1919–1945)
REGISTRO DOCUMENTAL Nº 07

PARTE I — DOCUMENTOS FUNDADORES DO MOVIMENTO FASCISTA

DOCUMENTO 01 — PROGRAMA DE SAN SEPOLCRO (1919)
Título original: Programma dei Fasci Italiani di Combattimento.
Data: 6 de junho de 1919, publicação no jornal Il Popolo d'Italia.
Organização: Fasci Italiani di Combattimento.
Natureza: Programa político fundador.
Contexto: O documento foi publicado após a reunião de fundação do movimento fascista, realizada em Milão em 23 de março de 1919.
Importância histórica:
O Programa de San Sepolcro demonstra que o fascismo inicial ainda possuía uma composição ideológica heterogênea.
O documento reunia propostas políticas, sociais e econômicas que não correspondiam integralmente à doutrina posteriormente consolidada pelo regime.
Entre suas reivindicações estavam reformas eleitorais, propostas republicanas, medidas sociais e elementos nacionalistas.
Trecho documental em italiano:
"Italiani!
Ecco il programma nazionale di un movimento sanamente italiano."
Tradução:
"Italianos!
Eis o programa nacional de um movimento autenticamente italiano."
Interpretação acadêmica:
O documento deve ser analisado como expressão da primeira fase do fascismo. Não é adequado projetar retrospectivamente sobre 1919 toda a estrutura ideológica e institucional que o regime desenvolveria após 1922.
Referência:
FASCI ITALIANI DI COMBATTIMENTO. Programma di San Sepolcro. Publicado em Il Popolo d'Italia, 6 jun. 1919.
Fonte digital:
https://it.wikisource.org/wiki/Manifesto_dei_Fasci_italiani_di_combattimento,_pubblicato_su_%22Il_Popolo_d%27Italia%22_del_6_giugno_1919

DOCUMENTO 02 — A FUNDAÇÃO DO PARTIDO NACIONAL FASCISTA (1921)
Título: Transformação dos Fasci Italiani di Combattimento em Partido Nacional Fascista.
Data: Novembro de 1921.
Natureza: Documento organizacional e partidário.
Contexto:
A transformação dos Fasci em Partido Nacional Fascista representou uma etapa importante da institucionalização do movimento.
O fascismo procurava ampliar sua capacidade de atuação nacional, organizar sua estrutura interna e converter sua presença paramilitar em força política permanente.
Importância histórica:
A transformação organizacional não significou o desaparecimento da violência esquadrista.
O partido continuou associado às formações paramilitares e às redes locais de intimidação.
Referência bibliográfica:
PAYNE, Stanley G. A History of Fascism, 1914–1945. Madison: University of Wisconsin Press, 1995.
LYTTELTON, Adrian. The Seizure of Power: Fascism in Italy, 1919–1929. London: Weidenfeld & Nicolson, 1973.

PARTE II — A MARCHA SOBRE ROMA E A CONSOLIDAÇÃO DO PODER

DOCUMENTO 03 — A MARCHA SOBRE ROMA (OUTUBRO DE 1922)
Data: 27–30 de outubro de 1922.
Natureza: Acontecimento político e insurrecional.
Protagonistas:
- Benito Mussolini;
- Italo Balbo;
- Emilio De Bono;
- Cesare Maria De Vecchi;
- Michele Bianchi;
- Vitor Emanuel III;
- Luigi Facta.
Contexto:
O movimento fascista organizou uma mobilização armada em direção à capital italiana.
O governo considerou a decretação do estado de sítio, mas o rei recusou-se a assinar o decreto.
Mussolini foi posteriormente convidado a formar um governo.
Importância histórica:
A Marcha sobre Roma representou a conquista do governo por meio de uma combinação entre ameaça paramilitar, crise institucional e decisão monárquica.
Não deve ser descrita simplesmente como uma vitória militar dos fascistas sobre o Estado italiano.
Referências:
LYTTELTON, Adrian. The Seizure of Power: Fascism in Italy, 1919–1929. 1973.
FOOT, John. “The March on Rome Revisited: Silences, Historians and the Power of the Counter-factual.” Modern Italy, 2023.

DOCUMENTO 04 — LEI ACERBO (1923)
Data: 18 de novembro de 1923.
Natureza: Legislação eleitoral.
Objetivo:
Alterar o sistema eleitoral para favorecer a lista mais votada, desde que alcançasse o percentual mínimo previsto na legislação.
Importância histórica:
A Lei Acerbo contribuiu para criar condições eleitorais extremamente favoráveis ao governo fascista nas eleições de 1924.
A legislação alterou a representação parlamentar e facilitou a consolidação do poder fascista.
Referências:
ITALIA. Legge 18 novembre 1923, n. 2444.
LYTTELTON, Adrian. The Seizure of Power. 1973.

PARTE III — O ASSASSINATO DE MATTEOTTI

DOCUMENTO 05 — DISCURSO PARLAMENTAR DE GIACOMO MATTEOTTI
Autor: Giacomo Matteotti.
Data: 30 de maio de 1924.
Instituição: Câmara dos Deputados do Reino da Itália.
Natureza: Discurso parlamentar.
Contexto:
Matteotti denunciou as irregularidades, intimidações e violências que haviam marcado as eleições de abril de 1924.
Sua atuação tornou-se um dos episódios mais importantes da oposição parlamentar ao fascismo.
Em 10 de junho de 1924, Matteotti foi sequestrado e assassinado.
Importância histórica:
O discurso constitui uma fonte primária fundamental para investigar a violência eleitoral e a resistência parlamentar ao regime.
Deve ser analisado em conjunto com os documentos relativos ao sequestro, à investigação judicial e à crise política de 1924.
Referência:
MATTEOTTI, Giacomo. Intervento alla Camera dei Deputati, 30 maggio 1924.

DOCUMENTO 06 — O DISCURSO DE MUSSOLINI DE 3 DE JANEIRO DE 1925
Autor: Benito Mussolini.
Data: 3 de janeiro de 1925.
Instituição: Câmara dos Deputados do Reino da Itália.
Natureza: Discurso político.
Contexto:
Após a crise provocada pelo assassinato de Matteotti, Mussolini pronunciou um discurso no qual assumiu responsabilidade política pelo ambiente de violência fascista e anunciou uma nova etapa de ação governamental.
Importância histórica:
O discurso é considerado um marco na transformação do governo fascista em ditadura aberta.
Sua análise permite investigar a relação entre responsabilidade política, violência e concentração de poder.
Referência:
MUSSOLINI, Benito. Discorso alla Camera dei Deputati, 3 gennaio 1925.

PARTE IV — AS LEIS FASCISTÍSSIMAS

DOCUMENTO 07 — LEI Nº 2263, DE 24 DE DEZEMBRO DE 1925
Título original: Attribuzioni e prerogative del Capo del Governo, Primo Ministro Segretario di Stato.
Data: 24 de dezembro de 1925.
Número: Lei nº 2263.
Natureza: Legislação sobre as atribuições do chefe de governo.
Contexto:
A legislação fortaleceu a posição do chefe do governo e contribuiu para reduzir o controle parlamentar sobre o Executivo.
Trecho original:
"Il Primo Ministro è Capo del Governo."
Tradução:
"O Primeiro-Ministro é o Chefe do Governo."
Importância histórica:
O dispositivo deve ser analisado dentro da transformação institucional que subordinou progressivamente o sistema parlamentar à autoridade de Mussolini.
Referência:
ITALIA. Legge 24 dicembre 1925, n. 2263.
Fonte oficial:
https://www.normattiva.it/atto/caricaDettaglioAtto?atto.codiceRedazionale=025U2263

DOCUMENTO 08 — LEI Nº 100, DE 31 DE JANEIRO DE 1926
Título: Facoltà del potere esecutivo di emanare norme giuridiche.
Data: 31 de janeiro de 1926.
Natureza: Legislação sobre a capacidade normativa do Executivo.
Importância histórica:
A lei fortaleceu a capacidade do governo de produzir normas jurídicas e integrou o processo de concentração institucional do poder.
Referência:
ITALIA. Legge 31 gennaio 1926, n. 100.

DOCUMENTO 09 — LEGISLAÇÃO SOBRE ASSOCIAÇÕES E ORGANIZAÇÕES POLÍTICAS
Data: 26 de novembro de 1925.
Número: Lei nº 2029.
Natureza: Regulamentação e controle de associações.
Importância histórica:
A legislação ampliou os mecanismos de controle estatal sobre organizações políticas e associativas.
Referência:
ITALIA. Legge 26 novembre 1925, n. 2029.

PARTE V — A DOUTRINA DO FASCISMO

DOCUMENTO 10 — LA DOTTRINA DEL FASCISMO (1932)
Título: La dottrina del fascismo.
Data: 1932.
Autores associados à publicação: Benito Mussolini e Giovanni Gentile.
Publicação: Enciclopedia Italiana.
Natureza: Texto doutrinário oficial.
Contexto:
A publicação procurou sistematizar a concepção fascista de Estado, nação, política e sociedade.
A contribuição filosófica de Giovanni Gentile é especialmente relevante para a compreensão da concepção ética e estatal apresentada no texto.
Trecho célebre do original italiano:
"Tutto nello Stato, niente al di fuori dello Stato, nulla contro lo Stato."
Tradução:
"Tudo no Estado, nada fora do Estado, nada contra o Estado."
Interpretação acadêmica:
A formulação expressa a pretensão de subordinar os indivíduos e as organizações sociais à autoridade estatal.
Deve ser analisada como expressão doutrinária do projeto fascista, não como descrição literal da capacidade efetiva de controle do regime.
Referência:
MUSSOLINI, Benito; GENTILE, Giovanni. La dottrina del fascismo. In: ENCICLOPEDIA ITALIANA. Roma, 1932.
Fonte digital:
https://www.treccani.it/enciclopedia/fascismo/

PARTE VI — CORPORATIVISMO E CONTROLE DO TRABALHO

DOCUMENTO 11 — CARTA DEL LAVORO (1927)
Data: 21 de abril de 1927.
Instituição: Grande Conselho do Fascismo.
Natureza: Documento fundamental do corporativismo fascista.
Contexto:
A Carta del Lavoro estabeleceu princípios para a organização das relações de trabalho no Estado fascista.
O documento apresentava a nação como organismo superior aos interesses individuais e defendia a subordinação do trabalho à organização estatal.
Trecho original:
"La Nazione italiana è un organismo avente fini, vita, mezzi di azione superiori a quelli degli individui, singoli o associati, che la compongono."
Tradução:
"A Nação italiana é um organismo que possui fins, vida e meios de ação superiores aos dos indivíduos, isolados ou associados, que a compõem."
Importância histórica:
O documento expressa a concepção organicista da nação e a subordinação dos interesses individuais à comunidade política.
A Carta deve ser estudada em conjunto com a legislação sindical de 1926, que restringiu a autonomia das organizações de trabalhadores e proibiu a greve.
Referência:
GRAN CONSIGLIO DEL FASCISMO. Carta del Lavoro. 21 aprile 1927.

DOCUMENTO 12 — LEGISLAÇÃO SINDICAL DE 1926
Data: 3 de abril de 1926.
Número: Lei nº 563.
Natureza: Legislação sobre relações coletivas de trabalho.
Importância histórica:
A legislação estabeleceu o reconhecimento estatal de determinadas organizações sindicais e restringiu a liberdade de organização independente.
A greve e o locaute foram proibidos.
Referência:
ITALIA. Legge 3 aprile 1926, n. 563.

PARTE VII — IGREJA E ESTADO

DOCUMENTO 13 — PACTOS DE LATRÃO (1929)
Data: 11 de fevereiro de 1929.
Signatários: Benito Mussolini, pelo Reino da Itália, e Pietro Gasparri, pela Santa Sé.
Natureza: Tratados diplomáticos e acordo de relações entre Igreja e Estado.
Componentes:
1. Tratado político.
2. Convenção financeira.
3. Concordata.
Importância histórica:
Os Pactos encerraram formalmente a Questão Romana e reconheceram a soberania da Cidade do Vaticano.
O acordo ampliou a legitimidade internacional e nacional do regime fascista.
Referência:
SANTA SÉ; REINO DA ITÁLIA. Patti Lateranensi. 11 febbraio 1929.

PARTE VIII — IMPERIALISMO E RACISMO

DOCUMENTO 14 — PROCLAMAÇÃO DO IMPÉRIO ITALIANO (1936)
Data: maio de 1936.
Autoridade: Benito Mussolini.
Contexto:
Após a conquista da Etiópia, Mussolini proclamou a criação do Império Italiano.
Importância histórica:
O acontecimento foi utilizado para legitimar o imperialismo fascista e fortalecer a narrativa de grandeza nacional.
A conquista foi acompanhada por violência colonial e pelo uso de armas químicas.
Referências:
DE GRAND, Alexander. “Mussolini's Follies: Fascism in Its Imperial and Racist Phase, 1935–1940.” Contemporary European History, 2004.
DEL BOCA, Angelo. Gli italiani in Africa Orientale. 1976–1984.

DOCUMENTO 15 — MANIFESTO DOS CIENTISTAS RACISTAS (1938)
Título: Manifesto della razza.
Data: julho de 1938.
Natureza: Documento ideológico e pseudocientífico.
Contexto:
O manifesto procurou conferir aparência científica às concepções raciais do regime.
Foi parte do processo de preparação e legitimação das políticas antissemitas adotadas naquele ano.
Importância histórica:
O documento demonstra a utilização de discursos científicos racializados para justificar discriminação política e jurídica.
Deve ser analisado criticamente, pois suas afirmações não representam conhecimento científico válido.
Referência:
Il Giornale d'Italia, 14 luglio 1938.

DOCUMENTO 16 — REAL DECRETO-LEI Nº 1728 (1938)
Título original: Provvedimenti per la difesa della razza italiana.
Data: 17 de novembro de 1938.
Número: Decreto-Lei nº 1728.
Natureza: Legislação racial.
Trecho original:
"Il matrimonio del cittadino italiano di razza ariana con persona appartenente ad altra razza è proibito."
Tradução:
"O casamento de cidadão italiano de raça ariana com pessoa pertencente a outra raça é proibido."
Importância histórica:
O decreto institucionalizou discriminações raciais e integrou a política antissemita do regime.
A legislação também estabeleceu restrições relativas à vida pública e às condições de cidadania.
Referência:
ITALIA. Regio Decreto-Legge 17 novembre 1938, n. 1728.
Fonte oficial:
https://www.normattiva.it/atto/caricaDettaglioAtto?atto.codiceRedazionale=038U1728

PARTE IX — O COLAPSO DO REGIME

DOCUMENTO 17 — A QUEDA DE MUSSOLINI (25 DE JULHO DE 1943)
Data: 25 de julho de 1943.
Instituições: Grande Conselho do Fascismo e Monarquia italiana.
Contexto:
A crise militar após o desembarque aliado na Sicília levou à reunião do Grande Conselho do Fascismo.
Uma moção contrária a Mussolini foi aprovada.
O rei Vitor Emanuel III afastou o Duce do governo e determinou sua prisão.
Importância histórica:
O acontecimento demonstra os limites da concentração de poder fascista e a permanência de instituições tradicionais capazes de intervir contra Mussolini.

DOCUMENTO 18 — REPÚBLICA SOCIAL ITALIANA (1943–1945)
Data: setembro de 1943 a abril de 1945.
Natureza: Regime fascista republicano sob ocupação e dependência alemã.
Contexto:
Após sua libertação por forças alemãs, Mussolini passou a dirigir a República Social Italiana.
O regime desenvolveu repressão contra opositores e participou da perseguição aos judeus.
Importância histórica:
A República Social Italiana permite investigar a radicalização final do fascismo e sua dependência militar da Alemanha nazista.

PARTE X — CITAÇÕES E SÍNTESES HISTORIOGRÁFICAS

1. Roger Griffin — O núcleo ideológico do fascismo
Obra: The Nature of Fascism. 1991.
Conceito central: Ultranacionalismo palingenético.
Síntese interpretativa:
Griffin identifica no fascismo a crença em uma regeneração nacional radical, baseada na representação de uma comunidade nacional em decadência que deveria renascer por meio de uma transformação revolucionária.
Aplicação ao caso italiano:
A narrativa de vitória mutilada, o culto à Roma imperial e a promessa de criar um novo italiano expressam essa concepção de renascimento nacional.
Natureza do registro: Síntese historiográfica, não transcrição literal.

2. Emilio Gentile — A sacralização da política
Obra: The Sacralization of Politics in Fascist Italy. 1996.
Conceito central: Religião política.
Síntese interpretativa:
Gentile demonstra que o fascismo procurou transformar a política em experiência de devoção coletiva, utilizando símbolos, rituais, cerimônias, culto ao líder e mitos nacionais.
Aplicação ao caso italiano:
A construção do culto ao Duce e a organização de cerimônias nacionais constituíram instrumentos para produzir uma identidade política fascista.
Natureza do registro: Síntese historiográfica, não transcrição literal.

3. Robert O. Paxton — O fascismo como processo político
Obra: The Anatomy of Fascism. 2004.
Conceito central: Fascismo como prática e processo histórico.
Síntese interpretativa:
Paxton propõe compreender o fascismo por meio de sua trajetória: formação do movimento, inserção na política nacional, conquista do poder, exercício do governo e radicalização.
Aplicação ao caso italiano:
A Marcha sobre Roma e a posterior consolidação da ditadura demonstram que a conquista do governo e a construção do regime constituíram processos distintos.
Natureza do registro: Síntese historiográfica, não transcrição literal.

4. Stanley G. Payne — A morfologia do fascismo
Obra: A History of Fascism, 1914–1945. 1995.
Conceito central: Análise comparativa dos movimentos fascistas.
Síntese interpretativa:
Payne organiza a análise do fascismo em dimensões ideológicas, políticas e organizacionais, permitindo identificar características recorrentes sem ignorar diferenças nacionais.
Aplicação ao caso italiano:
O movimento de Mussolini combina nacionalismo radical, antiliberalismo, anticomunismo, organização paramilitar, mobilização de massas e projeto autoritário.
Natureza do registro: Síntese historiográfica, não transcrição literal.

5. Renzo De Felice — Fascismo como movimento e como regime
Obras: Mussolini il rivoluzionario; Mussolini il fascista.
Conceito central: Distinção entre as fases do movimento e do regime.
Síntese interpretativa:
De Felice enfatizou a necessidade de investigar as transformações internas do fascismo, sua composição social e as diferentes relações estabelecidas com a sociedade italiana.
Aplicação ao caso italiano:
O fascismo de 1919 não possuía exatamente a mesma configuração institucional, social e ideológica do regime consolidado após 1925.
Natureza do registro: Síntese historiográfica, não transcrição literal.

6. R. J. B. Bosworth — A distância entre o projeto e a realidade
Obra: Mussolini's Italy: Life Under the Fascist Dictatorship, 1915–1945. 2005.
Conceito central: Complexidade social e limites do regime.
Síntese interpretativa:
Bosworth enfatiza que o fascismo não controlou integralmente a sociedade italiana, apesar de suas pretensões totalitárias.
Aplicação ao caso italiano:
A permanência da monarquia, da Igreja Católica e das elites tradicionais demonstra que a construção do Estado fascista foi marcada por compromissos e limites.
Natureza do registro: Síntese historiográfica, não transcrição literal.

PARTE XI — BIBLIOGRAFIA DOCUMENTAL CONSOLIDADA

Fontes primárias
1. FASCI ITALIANI DI COMBATTIMENTO. Programma di San Sepolcro. 1919.
2. MUSSOLINI, Benito. Discorsi parlamentari, especialmente o discurso de 3 de janeiro de 1925.
3. MATTEOTTI, Giacomo. Discurso na Câmara dos Deputados, 30 de maio de 1924.
4. ITALIA. Legge 18 novembre 1923, n. 2444 — Lei Acerbo.
5. ITALIA. Legge 24 dicembre 1925, n. 2263.
6. ITALIA. Legge 31 gennaio 1926, n. 100.
7. ITALIA. Legge 26 novembre 1925, n. 2029.
8. ITALIA. Legge 3 aprile 1926, n. 563.
9. GRAN CONSIGLIO DEL FASCISMO. Carta del Lavoro. 1927.
10. SANTA SÉ; REINO DA ITÁLIA. Patti Lateranensi. 1929.
11. MUSSOLINI, Benito; GENTILE, Giovanni. La dottrina del fascismo. 1932.
12. ITALIA. Regio Decreto-Legge 17 novembre 1938, n. 1728.

Estudos historiográficos
13. BOSWORTH, R. J. B. Mussolini's Italy. 2005.
14. DE FELICE, Renzo. Mussolini il rivoluzionario. 1965.
15. DE FELICE, Renzo. Mussolini il fascista. 1966–1968.
16. GENTILE, Emilio. The Sacralization of Politics in Fascist Italy. 1996.
17. GRIFFIN, Roger. The Nature of Fascism. 1991.
18. LYTTELTON, Adrian. The Seizure of Power. 1973.
19. PAXTON, Robert O. The Anatomy of Fascism. 2004.
20. PAYNE, Stanley G. A History of Fascism, 1914–1945. 1995.
21. POLLARD, John F. The Vatican and Italian Fascism, 1929–32. 1985.
22. EBNER, Michael H. Ordinary Violence in Mussolini's Italy. 2011.
23. MORGAN, Philip. Italian Fascism, 1915–1945. 2004.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                REGISTRO DOCUMENTAL Nº 07
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                COLEÇÃO II — HISTÓRIA DAS IDEOLOGIAS POLÍTICAS
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              CITAÇÕES & DOCUMENTOS
            </h1>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              FASCISMO ITALIANO: ULTRANACIONALISMO, TOTALITARISMO E CORPORATIVISMO (1919–1945)
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar todas as citações, documentos e bibliografia"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Citações & Documentos Copiados!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Tudo na Íntegra</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* PARTE I — DOCUMENTOS FUNDADORES DO MOVIMENTO FASCISTA */}
      <section id="cit-parte-1" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE I — DOCUMENTOS FUNDADORES DO MOVIMENTO FASCISTA
          </h2>
        </div>

        <div className="space-y-6">
          {/* DOCUMENTO 01 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 01 — PROGRAMA DE SAN SEPOLCRO (1919)
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Título original:</strong> Programma dei Fasci Italiani di Combattimento.</p>
              <p><strong className="text-stone-100">Data:</strong> 6 de junho de 1919, publicação no jornal <em>Il Popolo d'Italia</em>.</p>
              <p><strong className="text-stone-100">Organização:</strong> Fasci Italiani di Combattimento.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Programa político fundador.</p>
              <p><strong className="text-stone-100">Contexto:</strong> O documento foi publicado após a reunião de fundação do movimento fascista, realizada em Milão em 23 de março de 1919.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>O Programa de San Sepolcro demonstra que o fascismo inicial ainda possuía uma composição ideológica heterogênea.</p>
              <p>O documento reunia propostas políticas, sociais e econômicas que não correspondiam integralmente à doutrina posteriormente consolidada pelo regime.</p>
              <p>Entre suas reivindicações estavam reformas eleitorais, propostas republicanas, medidas sociais e elementos nacionalistas.</p>
              <p className="font-bold text-stone-100 pt-1">Trecho documental em italiano:</p>
              <blockquote className="bg-stone-900/70 border-l-2 border-amber-500/80 pl-4 py-2.5 pr-3 italic text-stone-200 rounded-r space-y-1">
                <p>"Italiani!</p>
                <p>Ecco il programma nazionale di un movimento sanamente italiano."</p>
              </blockquote>
              <p className="font-bold text-stone-100 pt-1">Tradução:</p>
              <blockquote className="bg-stone-900/70 border-l-2 border-emerald-500/70 pl-4 py-2.5 pr-3 italic text-stone-200 rounded-r space-y-1">
                <p>"Italianos!</p>
                <p>Eis o programa nacional de um movimento autenticamente italiano."</p>
              </blockquote>
              <p className="font-bold text-stone-100 pt-1">Interpretação acadêmica:</p>
              <p>O documento deve ser analisado como expressão da primeira fase do fascismo. Não é adequado projetar retrospectivamente sobre 1919 toda a estrutura ideológica e institucional que o regime desenvolveria após 1922.</p>
              <p className="font-bold text-stone-100 pt-1">Referência:</p>
              <p className="font-mono text-xs text-stone-300">FASCI ITALIANI DI COMBATTIMENTO. <em>Programma di San Sepolcro</em>. Publicado em <em>Il Popolo d'Italia</em>, 6 jun. 1919.</p>
              <p className="font-bold text-stone-100 pt-1">Fonte digital:</p>
              <a
                href="https://it.wikisource.org/wiki/Manifesto_dei_Fasci_italiani_di_combattimento,_pubblicato_su_%22Il_Popolo_d%27Italia%22_del_6_giugno_1919"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-400 hover:underline break-all"
              >
                <span>https://it.wikisource.org/wiki/Manifesto_dei_Fasci_italiani_di_combattimento,_pubblicato_su_%22Il_Popolo_d%27Italia%22_del_6_giugno_1919</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </article>

          {/* DOCUMENTO 02 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 02 — A FUNDAÇÃO DO PARTIDO NACIONAL FASCISTA (1921)
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Título:</strong> Transformação dos Fasci Italiani di Combattimento em Partido Nacional Fascista.</p>
              <p><strong className="text-stone-100">Data:</strong> Novembro de 1921.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Documento organizacional e partidário.</p>
              <p className="font-bold text-stone-100 pt-1">Contexto:</p>
              <p>A transformação dos Fasci em Partido Nacional Fascista representou uma etapa importante da institucionalização do movimento.</p>
              <p>O fascismo procurava ampliar sua capacidade de atuação nacional, organizar sua estrutura interna e converter sua presença paramilitar em força política permanente.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>A transformação organizacional não significou o desaparecimento da violência esquadrista.</p>
              <p>O partido continuou associado às formações paramilitares e às redes locais de intimidação.</p>
              <p className="font-bold text-stone-100 pt-1">Referência bibliográfica:</p>
              <p className="font-mono text-xs text-stone-300">PAYNE, Stanley G. <em>A History of Fascism, 1914–1945</em>. Madison: University of Wisconsin Press, 1995.</p>
              <p className="font-mono text-xs text-stone-300">LYTTELTON, Adrian. <em>The Seizure of Power: Fascism in Italy, 1919–1929</em>. London: Weidenfeld & Nicolson, 1973.</p>
            </div>
          </article>
        </div>
      </section>

      {/* PARTE II — A MARCHA SOBRE ROMA E A CONSOLIDAÇÃO DO PODER */}
      <section id="cit-parte-2" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE II — A MARCHA SOBRE ROMA E A CONSOLIDAÇÃO DO PODER
          </h2>
        </div>

        <div className="space-y-6">
          {/* DOCUMENTO 03 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 03 — A MARCHA SOBRE ROMA (OUTUBRO DE 1922)
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Data:</strong> 27–30 de outubro de 1922.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Acontecimento político e insurrecional.</p>
              <p className="font-bold text-stone-100 pt-1">Protagonistas:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Benito Mussolini;</li>
                <li>Italo Balbo;</li>
                <li>Emilio De Bono;</li>
                <li>Cesare Maria De Vecchi;</li>
                <li>Michele Bianchi;</li>
                <li>Vitor Emanuel III;</li>
                <li>Luigi Facta.</li>
              </ul>
              <p className="font-bold text-stone-100 pt-1">Contexto:</p>
              <p>O movimento fascista organizou uma mobilização armada em direção à capital italiana.</p>
              <p>O governo considerou a decretação do estado de sítio, mas o rei recusou-se a assinar o decreto.</p>
              <p>Mussolini foi posteriormente convidado a formar um governo.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>A Marcha sobre Roma representou a conquista do governo por meio de uma combinação entre ameaça paramilitar, crise institucional e decisão monárquica.</p>
              <p>Não deve ser descrita simplesmente como uma vitória militar dos fascistas sobre o Estado italiano.</p>
              <p className="font-bold text-stone-100 pt-1">Referências:</p>
              <p className="font-mono text-xs text-stone-300">LYTTELTON, Adrian. <em>The Seizure of Power: Fascism in Italy, 1919–1929</em>. 1973.</p>
              <p className="font-mono text-xs text-stone-300">FOOT, John. “The March on Rome Revisited: Silences, Historians and the Power of the Counter-factual.” <em>Modern Italy</em>, 2023.</p>
            </div>
          </article>

          {/* DOCUMENTO 04 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 04 — LEI ACERBO (1923)
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Data:</strong> 18 de novembro de 1923.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Legislação eleitoral.</p>
              <p className="font-bold text-stone-100 pt-1">Objetivo:</p>
              <p>Alterar o sistema eleitoral para favorecer a lista mais votada, desde que alcançasse o percentual mínimo previsto na legislação.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>A Lei Acerbo contribuiu para criar condições eleitorais extremamente favoráveis ao governo fascista nas eleições de 1924.</p>
              <p>A legislação alterou a representação parlamentar e facilitou a consolidação do poder fascista.</p>
              <p className="font-bold text-stone-100 pt-1">Referências:</p>
              <p className="font-mono text-xs text-stone-300">ITALIA. <em>Legge 18 novembre 1923, n. 2444</em>.</p>
              <p className="font-mono text-xs text-stone-300">LYTTELTON, Adrian. <em>The Seizure of Power</em>. 1973.</p>
            </div>
          </article>
        </div>
      </section>

      {/* PARTE III — O ASSASSINATO DE MATTEOTTI */}
      <section id="cit-parte-3" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE III — O ASSASSINATO DE MATTEOTTI
          </h2>
        </div>

        <div className="space-y-6">
          {/* DOCUMENTO 05 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 05 — DISCURSO PARLAMENTAR DE GIACOMO MATTEOTTI
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Autor:</strong> Giacomo Matteotti.</p>
              <p><strong className="text-stone-100">Data:</strong> 30 de maio de 1924.</p>
              <p><strong className="text-stone-100">Instituição:</strong> Câmara dos Deputados do Reino da Itália.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Discurso parlamentar.</p>
              <p className="font-bold text-stone-100 pt-1">Contexto:</p>
              <p>Matteotti denunciou as irregularidades, intimidações e violências que haviam marcado as eleições de abril de 1924.</p>
              <p>Sua atuação tornou-se um dos episódios mais importantes da oposição parlamentar ao fascismo.</p>
              <p>Em 10 de junho de 1924, Matteotti foi sequestrado e assassinado.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>O discurso constitui uma fonte primária fundamental para investigar a violência eleitoral e a resistência parlamentar ao regime.</p>
              <p>Deve ser analisado em conjunto com os documentos relativos ao sequestro, à investigação judicial e à crise política de 1924.</p>
              <p className="font-bold text-stone-100 pt-1">Referência:</p>
              <p className="font-mono text-xs text-stone-300">MATTEOTTI, Giacomo. Intervento alla Camera dei Deputati, 30 maggio 1924.</p>
            </div>
          </article>

          {/* DOCUMENTO 06 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 06 — O DISCURSO DE MUSSOLINI DE 3 DE JANEIRO DE 1925
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Autor:</strong> Benito Mussolini.</p>
              <p><strong className="text-stone-100">Data:</strong> 3 de janeiro de 1925.</p>
              <p><strong className="text-stone-100">Instituição:</strong> Câmara dos Deputados do Reino da Itália.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Discurso político.</p>
              <p className="font-bold text-stone-100 pt-1">Contexto:</p>
              <p>Após a crise provocada pelo assassinato de Matteotti, Mussolini pronunciou um discurso no qual assumiu responsabilidade política pelo ambiente de violência fascista e anunciou uma nova etapa de ação governamental.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>O discurso é considerado um marco na transformação do governo fascista em ditadura aberta.</p>
              <p>Sua análise permite investigar a relação entre responsabilidade política, violência e concentração de poder.</p>
              <p className="font-bold text-stone-100 pt-1">Referência:</p>
              <p className="font-mono text-xs text-stone-300">MUSSOLINI, Benito. Discorso alla Camera dei Deputati, 3 gennaio 1925.</p>
            </div>
          </article>
        </div>
      </section>

      {/* PARTE IV — AS LEIS FASCISTÍSSIMAS */}
      <section id="cit-parte-4" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE IV — AS LEIS FASCISTÍSSIMAS
          </h2>
        </div>

        <div className="space-y-6">
          {/* DOCUMENTO 07 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 07 — LEI Nº 2263, DE 24 DE DEZEMBRO DE 1925
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Título original:</strong> Attribuzioni e prerogative del Capo del Governo, Primo Ministro Segretario di Stato.</p>
              <p><strong className="text-stone-100">Data:</strong> 24 de dezembro de 1925.</p>
              <p><strong className="text-stone-100">Número:</strong> Lei nº 2263.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Legislação sobre as atribuições do chefe de governo.</p>
              <p className="font-bold text-stone-100 pt-1">Contexto:</p>
              <p>A legislação fortaleceu a posição do chefe do governo e contribuiu para reduzir o controle parlamentar sobre o Executivo.</p>
              <p className="font-bold text-stone-100 pt-1">Trecho original:</p>
              <blockquote className="bg-stone-900/70 border-l-2 border-amber-500/80 pl-4 py-2.5 pr-3 italic text-stone-200 rounded-r">
                "Il Primo Ministro è Capo del Governo."
              </blockquote>
              <p className="font-bold text-stone-100 pt-1">Tradução:</p>
              <blockquote className="bg-stone-900/70 border-l-2 border-emerald-500/70 pl-4 py-2.5 pr-3 italic text-stone-200 rounded-r">
                "O Primeiro-Ministro é o Chefe do Governo."
              </blockquote>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>O dispositivo deve ser analisado dentro da transformação institucional que subordinou progressivamente o sistema parlamentar à autoridade de Mussolini.</p>
              <p className="font-bold text-stone-100 pt-1">Referência:</p>
              <p className="font-mono text-xs text-stone-300">ITALIA. Legge 24 dicembre 1925, n. 2263.</p>
              <p className="font-bold text-stone-100 pt-1">Fonte oficial:</p>
              <a
                href="https://www.normattiva.it/atto/caricaDettaglioAtto?atto.codiceRedazionale=025U2263"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-400 hover:underline break-all"
              >
                <span>https://www.normattiva.it/atto/caricaDettaglioAtto?atto.codiceRedazionale=025U2263</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </article>

          {/* DOCUMENTO 08 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 08 — LEI Nº 100, DE 31 DE JANEIRO DE 1926
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Título:</strong> Facoltà del potere esecutivo di emanare norme giuridiche.</p>
              <p><strong className="text-stone-100">Data:</strong> 31 de janeiro de 1926.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Legislação sobre a capacidade normativa do Executivo.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>A lei fortaleceu a capacidade do governo de produzir normas jurídicas e integrou o processo de concentração institucional do poder.</p>
              <p className="font-bold text-stone-100 pt-1">Referência:</p>
              <p className="font-mono text-xs text-stone-300">ITALIA. Legge 31 gennaio 1926, n. 100.</p>
            </div>
          </article>

          {/* DOCUMENTO 09 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 09 — LEGISLAÇÃO SOBRE ASSOCIAÇÕES E ORGANIZAÇÕES POLÍTICAS
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Data:</strong> 26 de novembro de 1925.</p>
              <p><strong className="text-stone-100">Número:</strong> Lei nº 2029.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Regulamentação e controle de associações.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>A legislação ampliou os mecanismos de controle estatal sobre organizações políticas e associativas.</p>
              <p className="font-bold text-stone-100 pt-1">Referência:</p>
              <p className="font-mono text-xs text-stone-300">ITALIA. Legge 26 novembre 1925, n. 2029.</p>
            </div>
          </article>
        </div>
      </section>

      {/* PARTE V — A DOUTRINA DO FASCISMO */}
      <section id="cit-parte-5" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE V — A DOUTRINA DO FASCISMO
          </h2>
        </div>

        <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
          <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
            DOCUMENTO 10 — LA DOTTRINA DEL FASCISMO (1932)
          </h3>
          <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
            <p><strong className="text-stone-100">Título:</strong> La dottrina del fascismo.</p>
            <p><strong className="text-stone-100">Data:</strong> 1932.</p>
            <p><strong className="text-stone-100">Autores associados à publicação:</strong> Benito Mussolini e Giovanni Gentile.</p>
            <p><strong className="text-stone-100">Publicação:</strong> Enciclopedia Italiana.</p>
            <p><strong className="text-stone-100">Natureza:</strong> Texto doutrinário oficial.</p>
            <p className="font-bold text-stone-100 pt-1">Contexto:</p>
            <p>A publicação procurou sistematizar a concepção fascista de Estado, nação, política e sociedade.</p>
            <p>A contribuição filosófica de Giovanni Gentile é especialmente relevante para a compreensão da concepção ética e estatal apresentada no texto.</p>
            <p className="font-bold text-stone-100 pt-1">Trecho célebre do original italiano:</p>
            <blockquote className="bg-stone-900/70 border-l-2 border-amber-500/80 pl-4 py-2.5 pr-3 italic text-stone-200 rounded-r">
              "Tutto nello Stato, niente al di fuori dello Stato, nulla contro lo Stato."
            </blockquote>
            <p className="font-bold text-stone-100 pt-1">Tradução:</p>
            <blockquote className="bg-stone-900/70 border-l-2 border-emerald-500/70 pl-4 py-2.5 pr-3 italic text-stone-200 rounded-r">
              "Tudo no Estado, nada fora do Estado, nada contra o Estado."
            </blockquote>
            <p className="font-bold text-stone-100 pt-1">Interpretação acadêmica:</p>
            <p>A formulação expressa a pretensão de subordinar os indivíduos e as organizações sociais à autoridade estatal.</p>
            <p>Deve ser analisada como expressão doutrinária do projeto fascista, não como descrição literal da capacidade efetiva de controle do regime.</p>
            <p className="font-bold text-stone-100 pt-1">Referência:</p>
            <p className="font-mono text-xs text-stone-300">MUSSOLINI, Benito; GENTILE, Giovanni. <em>La dottrina del fascismo</em>. In: ENCICLOPEDIA ITALIANA. Roma, 1932.</p>
            <p className="font-bold text-stone-100 pt-1">Fonte digital:</p>
            <a
              href="https://www.treccani.it/enciclopedia/fascismo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-400 hover:underline break-all"
            >
              <span>https://www.treccani.it/enciclopedia/fascismo/</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          </div>
        </article>
      </section>

      {/* PARTE VI — CORPORATIVISMO E CONTROLE DO TRABALHO */}
      <section id="cit-parte-6" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE VI — CORPORATIVISMO E CONTROLE DO TRABALHO
          </h2>
        </div>

        <div className="space-y-6">
          {/* DOCUMENTO 11 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 11 — CARTA DEL LAVORO (1927)
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Data:</strong> 21 de abril de 1927.</p>
              <p><strong className="text-stone-100">Instituição:</strong> Grande Conselho do Fascismo.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Documento fundamental do corporativismo fascista.</p>
              <p className="font-bold text-stone-100 pt-1">Contexto:</p>
              <p>A Carta del Lavoro estabeleceu princípios para a organização das relações de trabalho no Estado fascista.</p>
              <p>O documento apresentava a nação como organismo superior aos interesses individuais e defendia a subordinação do trabalho à organização estatal.</p>
              <p className="font-bold text-stone-100 pt-1">Trecho original:</p>
              <blockquote className="bg-stone-900/70 border-l-2 border-amber-500/80 pl-4 py-2.5 pr-3 italic text-stone-200 rounded-r">
                "La Nazione italiana è un organismo avente fini, vita, mezzi di azione superiori a quelli degli individui, singoli o associati, che la compongono."
              </blockquote>
              <p className="font-bold text-stone-100 pt-1">Tradução:</p>
              <blockquote className="bg-stone-900/70 border-l-2 border-emerald-500/70 pl-4 py-2.5 pr-3 italic text-stone-200 rounded-r">
                "A Nação italiana é um organismo que possui fins, vida e meios de ação superiores aos dos indivíduos, isolados ou associados, que a compõem."
              </blockquote>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>O documento expressa a concepção organicista da nação e a subordinação dos interesses individuais à comunidade política.</p>
              <p>A Carta deve ser estudada em conjunto com a legislação sindical de 1926, que restringiu a autonomia das organizações de trabalhadores e proibiu a greve.</p>
              <p className="font-bold text-stone-100 pt-1">Referência:</p>
              <p className="font-mono text-xs text-stone-300">GRAN CONSIGLIO DEL FASCISMO. <em>Carta del Lavoro</em>. 21 aprile 1927.</p>
            </div>
          </article>

          {/* DOCUMENTO 12 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 12 — LEGISLAÇÃO SINDICAL DE 1926
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Data:</strong> 3 de abril de 1926.</p>
              <p><strong className="text-stone-100">Número:</strong> Lei nº 563.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Legislação sobre relações coletivas de trabalho.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>A legislação estabeleceu o reconhecimento estatal de determinadas organizações sindicais e restringiu a liberdade de organização independente.</p>
              <p>A greve e o locaute foram proibidos.</p>
              <p className="font-bold text-stone-100 pt-1">Referência:</p>
              <p className="font-mono text-xs text-stone-300">ITALIA. Legge 3 aprile 1926, n. 563.</p>
            </div>
          </article>
        </div>
      </section>

      {/* PARTE VII — IGREJA E ESTADO */}
      <section id="cit-parte-7" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE VII — IGREJA E ESTADO
          </h2>
        </div>

        <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
          <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
            DOCUMENTO 13 — PACTOS DE LATRÃO (1929)
          </h3>
          <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
            <p><strong className="text-stone-100">Data:</strong> 11 de fevereiro de 1929.</p>
            <p><strong className="text-stone-100">Signatários:</strong> Benito Mussolini, pelo Reino da Itália, e Pietro Gasparri, pela Santa Sé.</p>
            <p><strong className="text-stone-100">Natureza:</strong> Tratados diplomáticos e acordo de relações entre Igreja e Estado.</p>
            <p className="font-bold text-stone-100 pt-1">Componentes:</p>
            <ol className="list-decimal list-inside space-y-1 pl-2">
              <li>Tratado político.</li>
              <li>Convenção financeira.</li>
              <li>Concordata.</li>
            </ol>
            <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
            <p>Os Pactos encerraram formalmente a Questão Romana e reconheceram a soberania da Cidade do Vaticano.</p>
            <p>O acordo ampliou a legitimidade internacional e nacional do regime fascista.</p>
            <p className="font-bold text-stone-100 pt-1">Referência:</p>
            <p className="font-mono text-xs text-stone-300">SANTA SÉ; REINO DA ITÁLIA. <em>Patti Lateranensi</em>. 11 febbraio 1929.</p>
          </div>
        </article>
      </section>

      {/* PARTE VIII — IMPERIALISMO E RACISMO */}
      <section id="cit-parte-8" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE VIII — IMPERIALISMO E RACISMO
          </h2>
        </div>

        <div className="space-y-6">
          {/* DOCUMENTO 14 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 14 — PROCLAMAÇÃO DO IMPÉRIO ITALIANO (1936)
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Data:</strong> maio de 1936.</p>
              <p><strong className="text-stone-100">Autoridade:</strong> Benito Mussolini.</p>
              <p className="font-bold text-stone-100 pt-1">Contexto:</p>
              <p>Após a conquista da Etiópia, Mussolini proclamou a criação do Império Italiano.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>O acontecimento foi utilizado para legitimar o imperialismo fascista e fortalecer a narrativa de grandeza nacional.</p>
              <p>A conquista foi acompanhada por violência colonial e pelo uso de armas químicas.</p>
              <p className="font-bold text-stone-100 pt-1">Referências:</p>
              <p className="font-mono text-xs text-stone-300">DE GRAND, Alexander. “Mussolini's Follies: Fascism in Its Imperial and Racist Phase, 1935–1940.” <em>Contemporary European History</em>, 2004.</p>
              <p className="font-mono text-xs text-stone-300">DEL BOCA, Angelo. <em>Gli italiani in Africa Orientale</em>. 1976–1984.</p>
            </div>
          </article>

          {/* DOCUMENTO 15 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 15 — MANIFESTO DOS CIENTISTAS RACISTAS (1938)
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Título:</strong> Manifesto della razza.</p>
              <p><strong className="text-stone-100">Data:</strong> julho de 1938.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Documento ideológico e pseudocientífico.</p>
              <p className="font-bold text-stone-100 pt-1">Contexto:</p>
              <p>O manifesto procurou conferir aparência científica às concepções raciais do regime.</p>
              <p>Foi parte do processo de preparação e legitimação das políticas antissemitas adotadas naquele ano.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>O documento demonstra a utilização de discursos científicos racializados para justificar discriminação política e jurídica.</p>
              <p>Deve ser analisado criticamente, pois suas afirmações não representam conhecimento científico válido.</p>
              <p className="font-bold text-stone-100 pt-1">Referência:</p>
              <p className="font-mono text-xs text-stone-300"><em>Il Giornale d'Italia</em>, 14 luglio 1938.</p>
            </div>
          </article>

          {/* DOCUMENTO 16 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 16 — REAL DECRETO-LEI Nº 1728 (1938)
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Título original:</strong> Provvedimenti per la difesa della razza italiana.</p>
              <p><strong className="text-stone-100">Data:</strong> 17 de novembro de 1938.</p>
              <p><strong className="text-stone-100">Número:</strong> Decreto-Lei nº 1728.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Legislação racial.</p>
              <p className="font-bold text-stone-100 pt-1">Trecho original:</p>
              <blockquote className="bg-stone-900/70 border-l-2 border-amber-500/80 pl-4 py-2.5 pr-3 italic text-stone-200 rounded-r">
                "Il matrimonio del cittadino italiano di razza ariana con persona appartenente ad altra razza è proibito."
              </blockquote>
              <p className="font-bold text-stone-100 pt-1">Tradução:</p>
              <blockquote className="bg-stone-900/70 border-l-2 border-emerald-500/70 pl-4 py-2.5 pr-3 italic text-stone-200 rounded-r">
                "O casamento de cidadão italiano de raça ariana com pessoa pertencente a outra raça é proibido."
              </blockquote>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>O decreto institucionalizou discriminações raciais e integrou a política antissemita do regime.</p>
              <p>A legislação também estabeleceu restrições relativas à vida pública e às condições de cidadania.</p>
              <p className="font-bold text-stone-100 pt-1">Referência:</p>
              <p className="font-mono text-xs text-stone-300">ITALIA. Regio Decreto-Legge 17 novembre 1938, n. 1728.</p>
              <p className="font-bold text-stone-100 pt-1">Fonte oficial:</p>
              <a
                href="https://www.normattiva.it/atto/caricaDettaglioAtto?atto.codiceRedazionale=038U1728"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-400 hover:underline break-all"
              >
                <span>https://www.normattiva.it/atto/caricaDettaglioAtto?atto.codiceRedazionale=038U1728</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* PARTE IX — O COLAPSO DO REGIME */}
      <section id="cit-parte-9" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE IX — O COLAPSO DO REGIME
          </h2>
        </div>

        <div className="space-y-6">
          {/* DOCUMENTO 17 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 17 — A QUEDA DE MUSSOLINI (25 DE JULHO DE 1943)
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Data:</strong> 25 de julho de 1943.</p>
              <p><strong className="text-stone-100">Instituições:</strong> Grande Conselho do Fascismo e Monarquia italiana.</p>
              <p className="font-bold text-stone-100 pt-1">Contexto:</p>
              <p>A crise militar após o desembarque aliado na Sicília levou à reunião do Grande Conselho do Fascismo.</p>
              <p>Uma moção contrária a Mussolini foi aprovada.</p>
              <p>O rei Vitor Emanuel III afastou o Duce do governo e determinou sua prisão.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>O acontecimento demonstra os limites da concentração de poder fascista e a permanência de instituições tradicionais capazes de intervir contra Mussolini.</p>
            </div>
          </article>

          {/* DOCUMENTO 18 */}
          <article className="bg-[#121214] p-5 sm:p-6 rounded-lg border border-stone-800 space-y-3">
            <h3 className={`font-serif font-bold text-amber-300 border-b border-stone-800/80 pb-2 ${getFontSizeClass('heading')}`}>
              DOCUMENTO 18 — REPÚBLICA SOCIAL ITALIANA (1943–1945)
            </h3>
            <div className={`space-y-2.5 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Data:</strong> setembro de 1943 a abril de 1945.</p>
              <p><strong className="text-stone-100">Natureza:</strong> Regime fascista republicano sob ocupação e dependência alemã.</p>
              <p className="font-bold text-stone-100 pt-1">Contexto:</p>
              <p>Após sua libertação por forças alemãs, Mussolini passou a dirigir a República Social Italiana.</p>
              <p>O regime desenvolveu repressão contra opositores e participou da perseguição aos judeus.</p>
              <p className="font-bold text-stone-100 pt-1">Importância histórica:</p>
              <p>A República Social Italiana permite investigar a radicalização final do fascismo e sua dependência militar da Alemanha nazista.</p>
            </div>
          </article>
        </div>
      </section>

      {/* PARTE X — CITAÇÕES E SÍNTESES HISTORIOGRÁFICAS */}
      <section id="cit-parte-10" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <Quote className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE X — CITAÇÕES E SÍNTESES HISTORIOGRÁFICAS
          </h2>
        </div>

        <div className="space-y-5">
          <article className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5">
            <h3 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>
              1. Roger Griffin — O núcleo ideológico do fascismo
            </h3>
            <div className={`space-y-2 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Obra:</strong> <em>The Nature of Fascism</em>. 1991.</p>
              <p><strong className="text-stone-100">Conceito central:</strong> Ultranacionalismo palingenético.</p>
              <p><strong className="text-stone-100">Síntese interpretativa:</strong></p>
              <p>Griffin identifica no fascismo a crença em uma regeneração nacional radical, baseada na representação de uma comunidade nacional em decadência que deveria renascer por meio de uma transformação revolucionária.</p>
              <p><strong className="text-stone-100">Aplicação ao caso italiano:</strong></p>
              <p>A narrativa de vitória mutilada, o culto à Roma imperial e a promessa de criar um novo italiano expressam essa concepção de renascimento nacional.</p>
              <p><strong className="text-amber-300">Natureza do registro:</strong> Síntese historiográfica, não transcrição literal.</p>
            </div>
          </article>

          <article className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5">
            <h3 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>
              2. Emilio Gentile — A sacralização da política
            </h3>
            <div className={`space-y-2 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Obra:</strong> <em>The Sacralization of Politics in Fascist Italy</em>. 1996.</p>
              <p><strong className="text-stone-100">Conceito central:</strong> Religião política.</p>
              <p><strong className="text-stone-100">Síntese interpretativa:</strong></p>
              <p>Gentile demonstra que o fascismo procurou transformar a política em experiência de devoção coletiva, utilizando símbolos, rituais, cerimônias, culto ao líder e mitos nacionais.</p>
              <p><strong className="text-stone-100">Aplicação ao caso italiano:</strong></p>
              <p>A construção do culto ao Duce e a organização de cerimônias nacionais constituíram instrumentos para produzir uma identidade política fascista.</p>
              <p><strong className="text-amber-300">Natureza do registro:</strong> Síntese historiográfica, não transcrição literal.</p>
            </div>
          </article>

          <article className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5">
            <h3 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>
              3. Robert O. Paxton — O fascismo como processo político
            </h3>
            <div className={`space-y-2 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Obra:</strong> <em>The Anatomy of Fascism</em>. 2004.</p>
              <p><strong className="text-stone-100">Conceito central:</strong> Fascismo como prática e processo histórico.</p>
              <p><strong className="text-stone-100">Síntese interpretativa:</strong></p>
              <p>Paxton propõe compreender o fascismo por meio de sua trajetória: formação do movimento, inserção na política nacional, conquista do poder, exercício do governo e radicalização.</p>
              <p><strong className="text-stone-100">Aplicação ao caso italiano:</strong></p>
              <p>A Marcha sobre Roma e a posterior consolidação da ditadura demonstram que a conquista do governo e a construção do regime constituíram processos distintos.</p>
              <p><strong className="text-amber-300">Natureza do registro:</strong> Síntese historiográfica, não transcrição literal.</p>
            </div>
          </article>

          <article className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5">
            <h3 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>
              4. Stanley G. Payne — A morfologia do fascismo
            </h3>
            <div className={`space-y-2 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Obra:</strong> <em>A History of Fascism, 1914–1945</em>. 1995.</p>
              <p><strong className="text-stone-100">Conceito central:</strong> Análise comparativa dos movimentos fascistas.</p>
              <p><strong className="text-stone-100">Síntese interpretativa:</strong></p>
              <p>Payne organiza a análise do fascismo em dimensões ideológicas, políticas e organizacionais, permitindo identificar características recorrentes sem ignorar diferenças nacionais.</p>
              <p><strong className="text-stone-100">Aplicação ao caso italiano:</strong></p>
              <p>O movimento de Mussolini combina nacionalismo radical, antiliberalismo, anticomunismo, organização paramilitar, mobilização de massas e projeto autoritário.</p>
              <p><strong className="text-amber-300">Natureza do registro:</strong> Síntese historiográfica, não transcrição literal.</p>
            </div>
          </article>

          <article className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5">
            <h3 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>
              5. Renzo De Felice — Fascismo como movimento e como regime
            </h3>
            <div className={`space-y-2 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Obras:</strong> <em>Mussolini il rivoluzionario</em>; <em>Mussolini il fascista</em>.</p>
              <p><strong className="text-stone-100">Conceito central:</strong> Distinção entre as fases do movimento e do regime.</p>
              <p><strong className="text-stone-100">Síntese interpretativa:</strong></p>
              <p>De Felice enfatizou a necessidade de investigar as transformações internas do fascismo, sua composição social e as diferentes relações estabelecidas com a sociedade italiana.</p>
              <p><strong className="text-stone-100">Aplicação ao caso italiano:</strong></p>
              <p>O fascismo de 1919 não possuía exatamente a mesma configuração institucional, social e ideológica do regime consolidado após 1925.</p>
              <p><strong className="text-amber-300">Natureza do registro:</strong> Síntese historiográfica, não transcrição literal.</p>
            </div>
          </article>

          <article className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2.5">
            <h3 className={`font-serif font-bold text-amber-300 ${getFontSizeClass('heading')}`}>
              6. R. J. B. Bosworth — A distância entre o projeto e a realidade
            </h3>
            <div className={`space-y-2 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              <p><strong className="text-stone-100">Obra:</strong> <em>Mussolini's Italy: Life Under the Fascist Dictatorship, 1915–1945</em>. 2005.</p>
              <p><strong className="text-stone-100">Conceito central:</strong> Complexidade social e limites do regime.</p>
              <p><strong className="text-stone-100">Síntese interpretativa:</strong></p>
              <p>Bosworth enfatiza que o fascismo não controlou integralmente a sociedade italiana, apesar de suas pretensões totalitárias.</p>
              <p><strong className="text-stone-100">Aplicação ao caso italiano:</strong></p>
              <p>A permanência da monarquia, da Igreja Católica e das elites tradicionais demonstra que a construção do Estado fascista foi marcada por compromissos e limites.</p>
              <p><strong className="text-amber-300">Natureza do registro:</strong> Síntese historiográfica, não transcrição literal.</p>
            </div>
          </article>
        </div>
      </section>

      {/* PARTE XI — BIBLIOGRAFIA DOCUMENTAL CONSOLIDADA */}
      <section id="cit-parte-11" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <BookmarkCheck className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE XI — BIBLIOGRAFIA DOCUMENTAL CONSOLIDADA
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3">
            <h3 className="font-bold text-amber-400 uppercase font-mono text-xs border-b border-stone-800 pb-2">
              Fontes primárias
            </h3>
            <ol className="space-y-2 font-serif text-xs sm:text-sm text-stone-300 leading-relaxed">
              <li>1. FASCI ITALIANI DI COMBATTIMENTO. <em>Programma di San Sepolcro</em>. 1919.</li>
              <li>2. MUSSOLINI, Benito. Discorsi parlamentari, especialmente o discurso de 3 de janeiro de 1925.</li>
              <li>3. MATTEOTTI, Giacomo. Discurso na Câmara dos Deputados, 30 de maio de 1924.</li>
              <li>4. ITALIA. Legge 18 novembre 1923, n. 2444 — Lei Acerbo.</li>
              <li>5. ITALIA. Legge 24 dicembre 1925, n. 2263.</li>
              <li>6. ITALIA. Legge 31 gennaio 1926, n. 100.</li>
              <li>7. ITALIA. Legge 26 novembre 1925, n. 2029.</li>
              <li>8. ITALIA. Legge 3 aprile 1926, n. 563.</li>
              <li>9. GRAN CONSIGLIO DEL FASCISMO. <em>Carta del Lavoro</em>. 1927.</li>
              <li>10. SANTA SÉ; REINO DA ITÁLIA. <em>Patti Lateranensi</em>. 1929.</li>
              <li>11. MUSSOLINI, Benito; GENTILE, Giovanni. <em>La dottrina del fascismo</em>. 1932.</li>
              <li>12. ITALIA. Regio Decreto-Legge 17 novembre 1938, n. 1728.</li>
            </ol>
          </div>

          <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3">
            <h3 className="font-bold text-amber-400 uppercase font-mono text-xs border-b border-stone-800 pb-2">
              Estudos historiográficos
            </h3>
            <ol className="space-y-2 font-serif text-xs sm:text-sm text-stone-300 leading-relaxed">
              <li>13. BOSWORTH, R. J. B. <em>Mussolini's Italy</em>. 2005.</li>
              <li>14. DE FELICE, Renzo. <em>Mussolini il rivoluzionario</em>. 1965.</li>
              <li>15. DE FELICE, Renzo. <em>Mussolini il fascista</em>. 1966–1968.</li>
              <li>16. GENTILE, Emilio. <em>The Sacralization of Politics in Fascist Italy</em>. 1996.</li>
              <li>17. GRIFFIN, Roger. <em>The Nature of Fascism</em>. 1991.</li>
              <li>18. LYTTELTON, Adrian. <em>The Seizure of Power</em>. 1973.</li>
              <li>19. PAXTON, Robert O. <em>The Anatomy of Fascism</em>. 2004.</li>
              <li>20. PAYNE, Stanley G. <em>A History of Fascism, 1914–1945</em>. 1995.</li>
              <li>21. POLLARD, John F. <em>The Vatican and Italian Fascism, 1929–32</em>. 1985.</li>
              <li>22. EBNER, Michael H. <em>Ordinary Violence in Mussolini's Italy</em>. 2011.</li>
              <li>23. MORGAN, Philip. <em>Italian Fascism, 1915–1945</em>. 2004.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};
