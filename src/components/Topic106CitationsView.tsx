import React, { useState } from 'react';
import { Quote, BookOpen, FileText, Check, Copy, ExternalLink, BookmarkCheck, Search, HelpCircle, ShieldCheck } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

export const Topic106CitationsView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const fullText = `# CITAÇÕES & DOCUMENTOS
## Vanguardas Insurrecionais e Regimes de Partido Único (1871–1945)

### PARTE I — CITAÇÕES HISTÓRICAS E TEÓRICAS

Nota de rigor: as citações diretas abaixo são identificadas por obra e ano. Quando a redação varia conforme a tradução, a formulação deve ser conferida na edição utilizada antes da publicação definitiva no aplicativo. Não serão atribuídas páginas sem identificação de uma edição específica.

1. Karl Marx — A Comuna de Paris (1871)
Obra: A Guerra Civil na França.
Marx interpretou a Comuna como uma forma política que permitia à classe trabalhadora assumir diretamente a direção dos assuntos públicos.
Ideia central: a Comuna deveria substituir o aparelho estatal burocrático e militar tradicional por instituições políticas submetidas à representação e à responsabilidade popular.
Importância histórica: tornou-se uma das principais referências marxistas para a discussão sobre Estado e revolução.

2. Vladimir Lenin — O partido revolucionário (1902)
Obra: Que Fazer?
Lenin desenvolveu uma concepção de organização revolucionária baseada na atuação de militantes politicamente preparados, organização sistemática e capacidade de enfrentar a repressão czarista.
Ideia central: a luta política socialista não deveria se limitar às reivindicações econômicas imediatas.
Importância histórica: a obra tornou-se referência para a concepção leninista de partido de vanguarda.

3. Vladimir Lenin — O Estado e a Revolução (1917)
Obra: O Estado e a Revolução.
Lenin retomou as interpretações de Marx e Engels sobre o Estado, a Comuna de Paris e a transição revolucionária.
Ideia central: a transformação socialista exigiria a superação do aparelho estatal burguês e a construção de novas instituições políticas.
Importância histórica: a obra foi fundamental para a formulação teórica bolchevique em 1917.

4. Rosa Luxemburg — A Revolução Russa (1918)
Obra: A Revolução Russa.
Luxemburg reconheceu a importância histórica da Revolução de Outubro, mas criticou a restrição das liberdades políticas e os efeitos da concentração do poder.
Ideia central: a participação democrática e a liberdade política são componentes fundamentais de uma transformação socialista.
Importância histórica: constitui uma crítica interna ao desenvolvimento político do bolchevismo.

5. Karl Kautsky — A Ditadura do Proletariado (1918)
Obra: A Ditadura do Proletariado.
Kautsky questionou a identificação entre o governo de uma classe social e o monopólio político exercido por um partido.
Ideia central: a construção do socialismo deveria preservar mecanismos democráticos de participação e representação.
Importância histórica: representa uma crítica marxista ao modelo político bolchevique.

6. Leon Trotsky — História da Revolução Russa (1930–1932)
Obra: A História da Revolução Russa.
Trotsky apresentou uma interpretação da revolução que enfatizava as contradições sociais, a crise do Estado e a atuação das massas.
Ideia central: a Revolução de Outubro deve ser compreendida a partir da interação entre condições históricas, organização política e mobilização popular.
Importância histórica: é uma fonte fundamental para estudar a interpretação trotskista da Revolução Russa.

7. François Furet — O passado de uma ilusão (1995)
Obra: Le Passé d'une illusion.
Furet analisou o comunismo como fenômeno político e ideológico do século XX.
Ideia central: o comunismo deve ser estudado não apenas como programa econômico, mas também como tradição intelectual, movimento político e experiência histórica.
Importância histórica: sua interpretação contribuiu para o debate sobre a influência do comunismo na política contemporânea.

8. Hannah Arendt — As origens do totalitarismo (1951)
Obra: The Origins of Totalitarianism.
Arendt desenvolveu uma interpretação do totalitarismo baseada na relação entre ideologia, terror e dominação política.
Ideia central: o totalitarismo constitui uma forma específica de organização e exercício do poder.
Importância histórica: sua análise tornou-se referência central nos estudos comparativos sobre os regimes totalitários.

9. Oleg Khlevniuk — Stalin e a estrutura do poder soviético (2015)
Obra: Stalin: New Biography of a Dictator.
Khlevniuk investiga a formação e o funcionamento do poder stalinista, utilizando documentação histórica e arquivos soviéticos.
Ideia central: a compreensão do stalinismo exige investigar as instituições, os mecanismos de decisão, as relações entre dirigentes e a estrutura coercitiva do Estado.
Importância histórica: contribui para uma análise documental do funcionamento do poder soviético.
Observação: não atribuir a Khlevniuk frases entre aspas sem conferir a redação e a página na edição consultada. Paráfrases de suas interpretações devem ser identificadas como paráfrases.

---

### PARTE II — DOCUMENTOS HISTÓRICOS

DOCUMENTO 01 — A GUERRA CIVIL NA FRANÇA (1871)
Autor: Karl Marx  
Data: 1871  
Natureza: documento político e interpretação contemporânea da Comuna de Paris.
Contexto: Marx escreveu o texto em nome do Conselho Geral da Associação Internacional dos Trabalhadores, analisando a experiência revolucionária parisiense.
Temas para investigação:
- A Comuna como forma política;
- O Estado e a burocracia;
- A representação popular;
- A relação entre trabalhadores e poder político;
- A repressão à Comuna.
Acesso ao documento: https://www.marxists.org/archive/marx/

DOCUMENTO 02 — QUE FAZER? (1902)
Autor: Vladimir Lenin  
Data: 1902  
Natureza: obra política e organizacional.
Contexto: Lenin discute a organização do movimento social-democrata russo e a necessidade de uma organização revolucionária preparada para enfrentar a repressão política.
Temas para investigação:
- Consciência política;
- Organização revolucionária;
- Militância profissional;
- Centralização;
- Relação entre luta econômica e luta política.
Acesso ao documento: https://www.marxists.org/archive/lenin/works/1901/witbd/

DOCUMENTO 03 — O ESTADO E A REVOLUÇÃO (1917)
Autor: Vladimir Lenin  
Data: 1917  
Natureza: obra teórico-política.
Contexto: Escrito durante a crise revolucionária de 1917, o livro examina as interpretações marxistas sobre o Estado e a transição revolucionária.
Temas para investigação:
- Estado e classes sociais;
- Comuna de Paris;
- Ditadura do proletariado;
- Transição socialista;
- Desaparecimento do Estado.
Acesso ao documento: https://www.marxists.org/archive/lenin/works/1917/staterev/

DOCUMENTO 04 — A REVOLUÇÃO RUSSA (1918)
Autora: Rosa Luxemburg  
Data: 1918  
Natureza: crítica político-teórica.
Contexto: Luxemburg examina a experiência bolchevique e questiona determinadas decisões políticas relacionadas à democracia, às liberdades e à organização do poder.
Temas para investigação:
- Democracia socialista;
- Liberdade política;
- Assembleia Constituinte;
- Questão nacional;
- Centralização revolucionária.
Acesso ao documento: https://www.marxists.org/archive/luxemburg/1918/russian-revolution/

DOCUMENTO 05 — A DITADURA DO PROLETARIADO (1918)
Autor: Karl Kautsky  
Data: 1918  
Natureza: crítica político-teórica.
Contexto: Kautsky discute a interpretação bolchevique da ditadura do proletariado e defende a importância das instituições democráticas.
Temas para investigação:
- Marxismo e democracia;
- Ditadura de classe;
- Ditadura partidária;
- Representação política;
- Divergências entre marxistas.
Acesso ao documento: https://www.marxists.org/archive/kautsky/

DOCUMENTO 06 — AS 21 CONDIÇÕES DE ADMISSÃO À INTERNACIONAL COMUNISTA (1920)
Instituição: Internacional Comunista  
Data: 1920  
Natureza: documento organizacional e político.
Contexto: O Segundo Congresso da Internacional Comunista aprovou condições para a admissão de partidos à organização.
Temas para investigação:
- Disciplina partidária;
- Centralização;
- Relação entre partidos nacionais e Internacional;
- Rompimento com o reformismo;
- Internacionalismo revolucionário.
Acesso ao documento: https://www.marxists.org/history/international/comintern/

DOCUMENTO 07 — PROGRAMA DA INTERNACIONAL COMUNISTA (1928)
Instituição: Internacional Comunista  
Data: 1928  
Natureza: programa político internacional.
Contexto: O documento apresenta a interpretação oficial da organização sobre o capitalismo, o imperialismo, a revolução e a construção do socialismo.
Temas para investigação:
- Estratégia revolucionária;
- Imperialismo;
- Partido comunista;
- Transição socialista;
- Organização internacional.
Acesso ao documento: https://www.marxists.org/history/international/comintern/

---

### PARTE III — ARQUIVOS E REPOSITÓRIOS PARA PESQUISA

1. Marxists Internet Archive
Reúne textos de Marx, Engels, Lenin, Luxemburg, Trotsky, Kautsky e documentos da Internacional Comunista.
https://www.marxists.org/

2. Wilson Center Digital Archive
Repositório de documentos históricos relacionados à história internacional e às relações entre Estados.
https://digitalarchive.wilsoncenter.org/

3. Gallica — Bibliothèque nationale de France
Biblioteca digital com periódicos, livros, documentos e materiais históricos franceses, incluindo fontes relevantes para a Comuna de Paris.
https://gallica.bnf.fr/

4. Internet Archive
Acervo digital de livros e publicações históricas, sujeito às condições de acesso e empréstimo de cada obra.
https://archive.org/

5. Biblioteca Nacional da França
Instituição fundamental para pesquisas sobre a história política e social francesa.
https://www.bnf.fr/

---

### PARTE IV — BIBLIOGRAFIA ESPECIALIZADA

Comuna de Paris
EICHNER, Carolyn J. Surmounting the Barricades: Women in the Paris Commune. Bloomington: Indiana University Press, 2004.
ROSS, Kristin. Communal Luxury: The Political Imaginary of the Paris Commune. London: Verso, 2015.
TOMBS, Robert. The Paris Commune 1871. London: Longman, 1999.

Revolução Russa
CARR, E. H. The Bolshevik Revolution, 1917–1923. London: Macmillan, 1950–1953.
FITZPATRICK, Sheila. The Russian Revolution. Oxford: Oxford University Press, 1982.
FIGES, Orlando. A People's Tragedy: The Russian Revolution, 1891–1924. London: Jonathan Cape, 1996.
RABINOWITCH, Alexander. The Bolsheviks Come to Power. New York: W. W. Norton, 1976.
SMITH, S. A. Russia in Revolution: An Empire in Crisis, 1890 to 1928. Oxford: Oxford University Press, 2017.

Comunismo internacional
BROUÉ, Pierre. Histoire de l'Internationale communiste, 1919–1943. Paris: Fayard, 1997.
MCDERMOTT, Kevin; AGNEW, Jeremy. The Comintern: A History of International Communism from Lenin to Stalin. London: Macmillan, 1996.
PONS, Silvio. The Global Revolution: A History of International Communism 1917–1991. Oxford: Oxford University Press, 2014.
STUDER, Brigitte. The Transnational World of the Cominternians. London: Palgrave Macmillan, 2015.

História política e intelectual
ARENDT, Hannah. The Origins of Totalitarianism. New York: Harcourt, 1951.
FURET, François. The Passing of an Illusion: The Idea of Communism in the Twentieth Century. Chicago: University of Chicago Press, 1999.
KOŁAKOWSKI, Leszek. Main Currents of Marxism. Oxford: Oxford University Press, 1978.
KHLEVNIUK, Oleg V. Stalin: New Biography of a Dictator. New Haven: Yale University Press, 2015.
SERVICE, Robert. Comrades! A History of World Communism. Cambridge: Harvard University Press, 2007.

---

### PARTE V — QUESTÕES PARA INVESTIGAÇÃO AVANÇADA

1. A Comuna de Paris foi uma experiência de democracia direta ou uma forma de governo revolucionário representativo?
2. Quais eram as divergências fundamentais entre Marx e Bakunin?
3. A Primeira Internacional fracassou por divergências ideológicas ou por limitações organizacionais?
4. A Segunda Internacional abandonou o internacionalismo ao apoiar os governos nacionais em 1914?
5. A concepção de partido de vanguarda de Lenin era compatível com o pluralismo político?
6. A Revolução de Outubro representou uma tomada de poder minoritária em um contexto de revolução social mais ampla?
7. A guerra civil foi determinante para a formação do regime de partido único?
8. Como diferenciar o conceito marxista de ditadura do proletariado da experiência institucional soviética?
9. A Internacional Comunista conseguiu preservar a autonomia dos partidos nacionais?
10. A dissolução da Komintern em 1943 representou uma mudança de estratégia ou o reconhecimento de uma transformação já ocorrida?

### CONCLUSÃO DOCUMENTAL

O estudo das fontes primárias permite compreender que o comunismo internacional não surgiu como um sistema político pronto e uniforme.

Ele foi construído por meio de disputas intelectuais, experiências revolucionárias, conflitos organizacionais e transformações institucionais.

A Comuna de Paris, as Internacionais socialistas, a Revolução Russa e a Internacional Comunista representam etapas fundamentais desse processo.

A comparação entre os documentos dos próprios revolucionários e as pesquisas historiográficas posteriores é indispensável para compreender as diferenças entre os projetos políticos originais e os regimes efetivamente constituídos.`;

  const copyAll = () => {
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                AUDITORIA DOCUMENTAL & HISTORIOGRÁFICA
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                CAPÍTULO ACADÊMICO Nº 06
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              CITAÇÕES & DOCUMENTOS
            </h1>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              Vanguardas Insurrecionais e Regimes de Partido Único (1871–1945)
            </p>
          </div>

          <button
            onClick={copyAll}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar todo o acervo da aba Citações e Documentos"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Conteúdo Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Citações & Documentos na Íntegra</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* PARTE I — CITAÇÕES HISTÓRICAS E TEÓRICAS */}
      <section id="cit-block-1" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <Quote className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE I — CITAÇÕES HISTÓRICAS E TEÓRICAS
          </h2>
        </div>

        <div className="bg-[#121214] p-4 rounded-lg border border-amber-600/40 text-amber-200/90 font-serif text-xs sm:text-sm leading-relaxed">
          <strong className="text-amber-300 font-bold block mb-1">Nota de rigor:</strong>
          as citações diretas abaixo são identificadas por obra e ano. Quando a redação varia conforme a tradução, a formulação deve ser conferida na edição utilizada antes da publicação definitiva no aplicativo. Não serão atribuídas páginas sem identificação de uma edição específica.
        </div>

        <div className="space-y-5 pt-2">
          {[
            {
              num: '1',
              author: 'Karl Marx',
              theme: 'A Comuna de Paris (1871)',
              work: 'A Guerra Civil na França',
              desc: 'Marx interpretou a Comuna como uma forma política que permitia à classe trabalhadora assumir diretamente a direção dos assuntos públicos.',
              idea: 'A Comuna deveria substituir o aparelho estatal burocrático e militar tradicional por instituições políticas submetidas à representação e à responsabilidade popular.',
              importance: 'Tornou-se uma das principais referências marxistas para a discussão sobre Estado e revolução.'
            },
            {
              num: '2',
              author: 'Vladimir Lenin',
              theme: 'O partido revolucionário (1902)',
              work: 'Que Fazer?',
              desc: 'Lenin desenvolveu uma concepção de organização revolucionária baseada na atuação de militantes politicamente preparados, organização sistemática e capacidade de enfrentar a repressão czarista.',
              idea: 'A luta política socialista não deveria se limitar às reivindicações econômicas imediatas.',
              importance: 'A obra tornou-se referência para a concepção leninista de partido de vanguarda.'
            },
            {
              num: '3',
              author: 'Vladimir Lenin',
              theme: 'O Estado e a Revolução (1917)',
              work: 'O Estado e a Revolução',
              desc: 'Lenin retomou as interpretações de Marx e Engels sobre o Estado, a Comuna de Paris e a transição revolucionária.',
              idea: 'A transformação socialista exigiria a superação do aparelho estatal burguês e a construção de novas instituições políticas.',
              importance: 'A obra foi fundamental para a formulação teórica bolchevique em 1917.'
            },
            {
              num: '4',
              author: 'Rosa Luxemburg',
              theme: 'A Revolução Russa (1918)',
              work: 'A Revolução Russa',
              desc: 'Luxemburg reconheceu a importância histórica da Revolução de Outubro, mas criticou a restrição das liberdades políticas e os efeitos da concentração do poder.',
              idea: 'A participação democrática e a liberdade política são componentes fundamentais de uma transformação socialista.',
              importance: 'Constitui uma crítica interna ao desenvolvimento político do bolchevismo.'
            },
            {
              num: '5',
              author: 'Karl Kautsky',
              theme: 'A Ditadura do Proletariado (1918)',
              work: 'A Ditadura do Proletariado',
              desc: 'Kautsky questionou a identificação entre o governo de uma classe social e o monopólio político exercido por um partido.',
              idea: 'A construção do socialismo deveria preservar mecanismos democráticos de participação e representação.',
              importance: 'Representa uma crítica marxista ao modelo político bolchevique.'
            },
            {
              num: '6',
              author: 'Leon Trotsky',
              theme: 'História da Revolução Russa (1930–1932)',
              work: 'A História da Revolução Russa',
              desc: 'Trotsky apresentou uma interpretação da revolução que enfatizava as contradições sociais, a crise do Estado e a atuação das massas.',
              idea: 'A Revolução de Outubro deve ser compreendida a partir da interação entre condições históricas, organização política e mobilização popular.',
              importance: 'É uma fonte fundamental para estudar a interpretação trotskista da Revolução Russa.'
            },
            {
              num: '7',
              author: 'François Furet',
              theme: 'O passado de uma ilusão (1995)',
              work: 'Le Passé d\'une illusion',
              desc: 'Furet analisou o comunismo como fenômeno político e ideológico do século XX.',
              idea: 'O comunismo deve ser estudado não apenas como programa econômico, mas também como tradição intelectual, movimento político e experiência histórica.',
              importance: 'Sua interpretação contribuiu para o debate sobre a influência do comunismo na política contemporânea.'
            },
            {
              num: '8',
              author: 'Hannah Arendt',
              theme: 'As origens do totalitarismo (1951)',
              work: 'The Origins of Totalitarianism',
              desc: 'Arendt desenvolveu uma interpretação do totalitarismo baseada na relação entre ideologia, terror e dominação política.',
              idea: 'O totalitarismo constitui uma forma específica de organização e exercício do poder.',
              importance: 'Sua análise tornou-se referência central nos estudos comparativos sobre os regimes totalitários.'
            },
            {
              num: '9',
              author: 'Oleg Khlevniuk',
              theme: 'Stalin e a estrutura do poder soviético (2015)',
              work: 'Stalin: New Biography of a Dictator',
              desc: 'Khlevniuk investiga a formação e o funcionamento do poder stalinista, utilizando documentação histórica e arquivos soviéticos.',
              idea: 'A compreensão do stalinismo exige investigar as instituições, os mecanismos de decisão, as relações entre dirigentes e a estrutura coercitiva do Estado.',
              importance: 'Contribui para uma análise documental do funcionamento do poder soviético.',
              obs: 'Não atribuir a Khlevniuk frases entre aspas sem conferir a redação e a página na edição consultada. Paráfrases de suas interpretações devem ser identificadas como paráfrases.'
            }
          ].map((item) => (
            <div key={item.num} className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap border-b border-stone-800/80 pb-2.5">
                <h3 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                  {item.num}. {item.author} — {item.theme}
                </h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-stone-900 text-stone-300 border border-stone-800">
                  Obra: <em>{item.work}</em>
                </span>
              </div>

              <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
                {item.desc}
              </p>

              <div className="bg-stone-900/70 p-3.5 rounded border border-stone-800 space-y-1 text-xs sm:text-sm font-serif">
                <p className="text-stone-200">
                  <strong className="text-amber-400">Ideia central:</strong> {item.idea}
                </p>
                <p className="text-stone-300 pt-1">
                  <strong className="text-amber-400">Importância histórica:</strong> {item.importance}
                </p>
                {item.obs && (
                  <p className="text-amber-200/90 italic pt-1 border-t border-stone-800/80 mt-2">
                    <strong className="text-amber-400">Observação:</strong> {item.obs}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTE II — DOCUMENTOS HISTÓRICOS */}
      <section id="cit-documents" className="scroll-mt-24 bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <FileText className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE II — DOCUMENTOS HISTÓRICOS
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              docNum: '01',
              title: 'A GUERRA CIVIL NA FRANÇA (1871)',
              author: 'Karl Marx',
              year: '1871',
              nature: 'Documento político e interpretação contemporânea da Comuna de Paris.',
              context: 'Marx escreveu o texto em nome do Conselho Geral da Associação Internacional dos Trabalhadores, analisando a experiência revolucionária parisiense.',
              topics: [
                'A Comuna como forma política;',
                'O Estado e a burocracia;',
                'A representação popular;',
                'A relação entre trabalhadores e poder político;',
                'A repressão à Comuna.'
              ],
              link: 'https://www.marxists.org/archive/marx/'
            },
            {
              docNum: '02',
              title: 'QUE FAZER? (1902)',
              author: 'Vladimir Lenin',
              year: '1902',
              nature: 'Obra política e organizacional.',
              context: 'Lenin discute a organização do movimento social-democrata russo e a necessidade de uma organização revolucionária preparada para enfrentar a repressão política.',
              topics: [
                'Consciência política;',
                'Organização revolucionária;',
                'Militância profissional;',
                'Centralização;',
                'Relação entre luta econômica e luta política.'
              ],
              link: 'https://www.marxists.org/archive/lenin/works/1901/witbd/'
            },
            {
              docNum: '03',
              title: 'O ESTADO E A REVOLUÇÃO (1917)',
              author: 'Vladimir Lenin',
              year: '1917',
              nature: 'Obra teórico-política.',
              context: 'Escrito durante a crise revolucionária de 1917, o livro examina as interpretações marxistas sobre o Estado e a transição revolucionária.',
              topics: [
                'Estado e classes sociais;',
                'Comuna de Paris;',
                'Ditadura do proletariado;',
                'Transição socialista;',
                'Desaparecimento do Estado.'
              ],
              link: 'https://www.marxists.org/archive/lenin/works/1917/staterev/'
            },
            {
              docNum: '04',
              title: 'A REVOLUÇÃO RUSSA (1918)',
              author: 'Rosa Luxemburg',
              year: '1918',
              nature: 'Crítica político-teórica.',
              context: 'Luxemburg examina a experiência bolchevique e questiona determinadas decisões políticas relacionadas à democracia, às liberdades e à organização do poder.',
              topics: [
                'Democracia socialista;',
                'Liberdade política;',
                'Assembleia Constituinte;',
                'Questão nacional;',
                'Centralização revolucionária.'
              ],
              link: 'https://www.marxists.org/archive/luxemburg/1918/russian-revolution/'
            },
            {
              docNum: '05',
              title: 'A DITADURA DO PROLETARIADO (1918)',
              author: 'Karl Kautsky',
              year: '1918',
              nature: 'Crítica político-teórica.',
              context: 'Kautsky discute a interpretação bolchevique da ditadura do proletariado e defende a importância das instituições democráticas.',
              topics: [
                'Marxismo e democracia;',
                'Ditadura de classe;',
                'Ditadura partidária;',
                'Representação política;',
                'Divergências entre marxistas.'
              ],
              link: 'https://www.marxists.org/archive/kautsky/'
            },
            {
              docNum: '06',
              title: 'AS 21 CONDIÇÕES DE ADMISSÃO À INTERNACIONAL COMUNISTA (1920)',
              author: 'Internacional Comunista',
              year: '1920',
              nature: 'Documento organizacional e político.',
              context: 'O Segundo Congresso da Internacional Comunista aprovou condições para a admissão de partidos à organização.',
              topics: [
                'Disciplina partidária;',
                'Centralização;',
                'Relação entre partidos nacionais e Internacional;',
                'Rompimento com o reformismo;',
                'Internacionalismo revolucionário.'
              ],
              link: 'https://www.marxists.org/history/international/comintern/'
            },
            {
              docNum: '07',
              title: 'PROGRAMA DA INTERNACIONAL COMUNISTA (1928)',
              author: 'Internacional Comunista',
              year: '1928',
              nature: 'Programa político internacional.',
              context: 'O documento apresenta a interpretação oficial da organização sobre o capitalismo, o imperialismo, a revolução e a construção do socialismo.',
              topics: [
                'Estratégia revolucionária;',
                'Imperialismo;',
                'Partido comunista;',
                'Transição socialista;',
                'Organização internacional.'
              ],
              link: 'https://www.marxists.org/history/international/comintern/'
            }
          ].map((doc) => (
            <article key={doc.docNum} className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3">
              <div className="flex items-start justify-between gap-3 flex-wrap border-b border-stone-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60 uppercase">
                    DOCUMENTO {doc.docNum}
                  </span>
                  <h3 className="font-serif font-bold text-stone-100 text-base sm:text-lg pt-1">
                    {doc.title}
                  </h3>
                </div>

                <div className="text-right text-xs font-mono text-stone-400">
                  <div><strong>Autor / Instituição:</strong> {doc.author}</div>
                  <div><strong>Data:</strong> {doc.year}</div>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm font-serif">
                <p className="text-stone-300">
                  <strong className="text-amber-400">Natureza:</strong> {doc.nature}
                </p>
                <p className="text-stone-300">
                  <strong className="text-amber-400">Contexto:</strong> {doc.context}
                </p>

                <div className="bg-stone-900/60 p-3 rounded border border-stone-800/80 space-y-1 mt-2">
                  <strong className="text-amber-400 font-bold block text-xs">Temas para investigação:</strong>
                  <ul className="list-disc list-inside text-stone-300 space-y-0.5">
                    {doc.topics.map((t, tIdx) => (
                      <li key={tIdx}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-xs font-mono">
                  <strong className="text-amber-400">Acesso ao documento:</strong>{' '}
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 underline hover:text-amber-200 inline-flex items-center gap-1"
                  >
                    <span>{doc.link}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PARTE III — ARQUIVOS E REPOSITÓRIOS PARA PESQUISA */}
      <section className="bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <BookOpen className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE III — ARQUIVOS E REPOSITÓRIOS PARA PESQUISA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: '1. Marxists Internet Archive',
              desc: 'Reúne textos de Marx, Engels, Lenin, Luxemburg, Trotsky, Kautsky e documentos da Internacional Comunista.',
              url: 'https://www.marxists.org/'
            },
            {
              name: '2. Wilson Center Digital Archive',
              desc: 'Repositório de documentos históricos relacionados à história internacional e às relações entre Estados.',
              url: 'https://digitalarchive.wilsoncenter.org/'
            },
            {
              name: '3. Gallica — Bibliothèque nationale de France',
              desc: 'Biblioteca digital com periódicos, livros, documentos e materiais históricos franceses, incluindo fontes relevantes para a Comuna de Paris.',
              url: 'https://gallica.bnf.fr/'
            },
            {
              name: '4. Internet Archive',
              desc: 'Acervo digital de livros e publicações históricas, sujeito às condições de acesso e empréstimo de cada obra.',
              url: 'https://archive.org/'
            },
            {
              name: '5. Biblioteca Nacional da França',
              desc: 'Instituição fundamental para pesquisas sobre a história política e social francesa.',
              url: 'https://www.bnf.fr/'
            }
          ].map((repo, idx) => (
            <div key={idx} className="bg-[#121214] p-4 rounded-lg border border-stone-800 space-y-2">
              <h3 className="font-serif font-bold text-amber-300 text-sm sm:text-base">
                {repo.name}
              </h3>
              <p className={`font-serif text-stone-300 leading-relaxed text-xs sm:text-sm`}>
                {repo.desc}
              </p>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-amber-400 underline hover:text-amber-300 inline-flex items-center gap-1 pt-1"
              >
                <span>{repo.url}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PARTE IV — BIBLIOGRAFIA ESPECIALIZADA */}
      <section className="bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-6 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <BookmarkCheck className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE IV — BIBLIOGRAFIA ESPECIALIZADA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm font-serif">
          <div className="bg-[#121214] p-4 rounded-lg border border-stone-800 space-y-2">
            <h3 className="font-bold text-amber-400 uppercase font-mono text-xs border-b border-stone-800 pb-1">
              Comuna de Paris
            </h3>
            <ul className="space-y-1.5 text-stone-300">
              <li>EICHNER, Carolyn J. <em>Surmounting the Barricades: Women in the Paris Commune</em>. Bloomington: Indiana University Press, 2004.</li>
              <li>ROSS, Kristin. <em>Communal Luxury: The Political Imaginary of the Paris Commune</em>. London: Verso, 2015.</li>
              <li>TOMBS, Robert. <em>The Paris Commune 1871</em>. London: Longman, 1999.</li>
            </ul>
          </div>

          <div className="bg-[#121214] p-4 rounded-lg border border-stone-800 space-y-2">
            <h3 className="font-bold text-amber-400 uppercase font-mono text-xs border-b border-stone-800 pb-1">
              Revolução Russa
            </h3>
            <ul className="space-y-1.5 text-stone-300">
              <li>CARR, E. H. <em>The Bolshevik Revolution, 1917–1923</em>. London: Macmillan, 1950–1953.</li>
              <li>FITZPATRICK, Sheila. <em>The Russian Revolution</em>. Oxford: Oxford University Press, 1982.</li>
              <li>FIGES, Orlando. <em>A People's Tragedy: The Russian Revolution, 1891–1924</em>. London: Jonathan Cape, 1996.</li>
              <li>RABINOWITCH, Alexander. <em>The Bolsheviks Come to Power</em>. New York: W. W. Norton, 1976.</li>
              <li>SMITH, S. A. <em>Russia in Revolution: An Empire in Crisis, 1890 to 1928</em>. Oxford: Oxford University Press, 2017.</li>
            </ul>
          </div>

          <div className="bg-[#121214] p-4 rounded-lg border border-stone-800 space-y-2">
            <h3 className="font-bold text-amber-400 uppercase font-mono text-xs border-b border-stone-800 pb-1">
              Comunismo internacional
            </h3>
            <ul className="space-y-1.5 text-stone-300">
              <li>BROUÉ, Pierre. <em>Histoire de l'Internationale communiste, 1919–1943</em>. Paris: Fayard, 1997.</li>
              <li>MCDERMOTT, Kevin; AGNEW, Jeremy. <em>The Comintern: A History of International Communism from Lenin to Stalin</em>. London: Macmillan, 1996.</li>
              <li>PONS, Silvio. <em>The Global Revolution: A History of International Communism 1917–1991</em>. Oxford: Oxford University Press, 2014.</li>
              <li>STUDER, Brigitte. <em>The Transnational World of the Cominternians</em>. London: Palgrave Macmillan, 2015.</li>
            </ul>
          </div>

          <div className="bg-[#121214] p-4 rounded-lg border border-stone-800 space-y-2">
            <h3 className="font-bold text-amber-400 uppercase font-mono text-xs border-b border-stone-800 pb-1">
              História política e intelectual
            </h3>
            <ul className="space-y-1.5 text-stone-300">
              <li>ARENDT, Hannah. <em>The Origins of Totalitarianism</em>. New York: Harcourt, 1951.</li>
              <li>FURET, François. <em>The Passing of an Illusion: The Idea of Communism in the Twentieth Century</em>. Chicago: University of Chicago Press, 1999.</li>
              <li>KOŁAKOWSKI, Leszek. <em>Main Currents of Marxism</em>. Oxford: Oxford University Press, 1978.</li>
              <li>KHLEVNIUK, Oleg V. <em>Stalin: New Biography of a Dictator</em>. New Haven: Yale University Press, 2015.</li>
              <li>SERVICE, Robert. <em>Comrades! A History of World Communism</em>. Cambridge: Harvard University Press, 2007.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PARTE V — QUESTÕES PARA INVESTIGAÇÃO AVANÇADA */}
      <section className="bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <HelpCircle className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            PARTE V — QUESTÕES PARA INVESTIGAÇÃO AVANÇADA
          </h2>
        </div>

        <ol className="space-y-2 font-serif text-stone-200 list-decimal list-inside leading-relaxed text-xs sm:text-sm bg-[#121214] p-5 rounded-lg border border-stone-800">
          <li>A Comuna de Paris foi uma experiência de democracia direta ou uma forma de governo revolucionário representativo?</li>
          <li>Quais eram as divergências fundamentais entre Marx e Bakunin?</li>
          <li>A Primeira Internacional fracassou por divergências ideológicas ou por limitações organizacionais?</li>
          <li>A Segunda Internacional abandonou o internacionalismo ao apoiar os governos nacionais em 1914?</li>
          <li>A concepção de partido de vanguarda de Lenin era compatível com o pluralismo político?</li>
          <li>A Revolução de Outubro representou uma tomada de poder minoritária em um contexto de revolução social mais ampla?</li>
          <li>A guerra civil foi determinante para a formação do regime de partido único?</li>
          <li>Como diferenciar o conceito marxista de ditadura do proletariado da experiência institucional soviética?</li>
          <li>A Internacional Comunista conseguiu preservar a autonomia dos partidos nacionais?</li>
          <li>A dissolução da Komintern em 1943 representou uma mudança de estratégia ou o reconhecimento de uma transformação já ocorrida?</li>
        </ol>
      </section>

      {/* CONCLUSÃO DOCUMENTAL */}
      <section className="bg-[#161619] p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4 shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            CONCLUSÃO DOCUMENTAL
          </h2>
        </div>

        <div className={`space-y-3 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
          <p>
            O estudo das fontes primárias permite compreender que o comunismo internacional não surgiu como um sistema político pronto e uniforme.
          </p>
          <p>
            Ele foi construído por meio de disputas intelectuais, experiências revolucionárias, conflitos organizacionais e transformações institucionais.
          </p>
          <p>
            A Comuna de Paris, as Internacionais socialistas, a Revolução Russa e a Internacional Comunista representam etapas fundamentais desse processo.
          </p>
          <p className="bg-[#121214] p-4 rounded-lg border border-stone-800 text-amber-200/90 italic">
            A comparação entre os documentos dos próprios revolucionários e as pesquisas historiográficas posteriores é indispensável para compreender as diferenças entre os projetos políticos originais e os regimes efetivamente constituídos.
          </p>
        </div>
      </section>
    </div>
  );
};
