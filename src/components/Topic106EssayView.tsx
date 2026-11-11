import React, { useState } from 'react';
import { GraduationCap, Sparkles, Copy, Check, BookOpen, Layers, Search, ShieldCheck } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

export const Topic106EssayView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(label);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const fullEssayText = `A REVOLUÇÃO, A VANGUARDA E O PODER
Da emancipação dos trabalhadores à centralização do Estado revolucionário

ENSAIO ACADÊMICO

A história do comunismo entre o século XIX e a primeira metade do século XX é marcada por uma questão fundamental: como transformar uma sociedade capitalista sem reproduzir, no interior do processo revolucionário, novas estruturas de dominação política?

Essa questão atravessou diferentes gerações de socialistas, desde a experiência da Comuna de Paris até a formação da Internacional Comunista.

Em 1871, a Comuna de Paris apresentou uma experiência de governo revolucionário que valorizava a representação popular, a responsabilidade dos representantes e a transformação das instituições tradicionais. Sua existência breve, entretanto, demonstrou as dificuldades de sobrevivência de um governo revolucionário diante de forças militares e políticas superiores.

Marx interpretou a Comuna como uma experiência de transformação do aparelho estatal. Bakunin, embora partisse de fundamentos diferentes, também via na experiência parisiense uma demonstração da capacidade de organização popular fora das estruturas tradicionais de autoridade.

A partir dessas experiências, o movimento socialista desenvolveu diferentes concepções sobre a relação entre organização, Estado e revolução.

A Primeira Internacional reuniu correntes que compartilhavam a crítica ao capitalismo, mas divergiam profundamente sobre os meios de transformação social. A disputa entre Marx e Bakunin revelou que a unidade do movimento operário não significava unidade doutrinária.

A Segunda Internacional ampliou a presença do socialismo na política parlamentar e na organização sindical. Entretanto, o crescimento dos partidos socialistas também produziu uma controvérsia sobre a relação entre reformas graduais e ruptura revolucionária.

A Primeira Guerra Mundial expôs os limites do internacionalismo socialista. O apoio de importantes partidos aos respectivos governos nacionais demonstrou que a solidariedade internacional dos trabalhadores poderia ser subordinada às prioridades dos Estados nacionais.

Foi nesse ambiente que Lenin desenvolveu sua crítica à Segunda Internacional e defendeu uma organização revolucionária capaz de enfrentar a autocracia russa.

A concepção de partido de vanguarda representou uma resposta às condições políticas do Império Russo. A organização centralizada, a disciplina e a formação de revolucionários profissionais eram consideradas instrumentos necessários para enfrentar a repressão czarista.

Contudo, a transformação dessa concepção em estrutura de poder estatal produziu problemas que não podem ser ignorados.

A Revolução de Outubro de 1917 ocorreu em uma sociedade profundamente desorganizada pela guerra, pela crise econômica e pela desintegração da autoridade imperial. Os bolcheviques conquistaram o poder em meio a uma mobilização social significativa, mas a consolidação do novo governo foi acompanhada por conflitos com outras forças políticas e pela restrição progressiva do pluralismo.

A dissolução da Assembleia Constituinte, a repressão aos adversários e a centralização do aparelho estatal demonstraram que a experiência soviética se afastava de determinadas expectativas democráticas presentes no socialismo anterior.

A guerra civil intensificou esse processo. A militarização da economia, a expansão da polícia política e a concentração das decisões contribuíram para a formação de instituições que sobreviveriam ao conflito.

A questão central não é simplesmente determinar se a violência foi consequência da guerra ou resultado de uma escolha ideológica. A investigação histórica exige analisar a interação entre condições excepcionais, decisões políticas, estruturas institucionais e projetos de poder.

Rosa Luxemburg identificou precocemente os riscos de uma revolução que restringisse excessivamente a liberdade política. Sua crítica não significava rejeição da Revolução de Outubro, mas uma advertência sobre os perigos de substituir a participação popular pela autoridade de uma direção partidária.

Kautsky também questionou a identificação entre ditadura do proletariado e ditadura de uma organização política.

Essas críticas demonstram que a controvérsia sobre democracia e revolução não foi uma discussão externa ao marxismo. Ela atravessou o próprio movimento socialista.

A Internacional Comunista ampliou a influência do modelo bolchevique. Ao estabelecer critérios de adesão e orientar a reorganização de partidos nacionais, a organização contribuiu para consolidar uma estrutura internacional de direção política.

Entretanto, o internacionalismo revolucionário passou a conviver com os interesses estratégicos do Estado soviético. Essa tensão tornou-se especialmente evidente nas mudanças de orientação política da Komintern durante as décadas de 1920 e 1930.

A trajetória entre 1871 e 1945 revela, assim, uma transformação profunda: o movimento socialista internacional, originalmente plural em suas formas organizacionais, passou a conviver com um modelo comunista no qual o partido revolucionário assumiu posição central na organização do Estado e da sociedade.

Essa transformação não foi inevitável nem ocorreu sem oposição. Foi resultado de conflitos históricos, escolhas políticas e circunstâncias específicas.

O estudo desse processo é indispensável para compreender as contradições entre emancipação social, democracia, autoridade revolucionária e concentração do poder.

---

SÍNTESE

O período de 1871 a 1945 pode ser compreendido por cinco grandes transformações:

1. Da experiência comunal à tradição revolucionária
A Comuna de Paris tornou-se uma referência para o pensamento socialista, especialmente na discussão sobre o Estado e a participação popular.

2. Da pluralidade socialista à organização partidária
As Internacionais reuniram diferentes correntes, mas suas disputas demonstraram as dificuldades de construir uma estratégia política comum.

3. Da organização revolucionária à conquista do Estado
A experiência bolchevique transformou o partido de vanguarda em instrumento central da tomada do poder.

4. Da ditadura do proletariado ao partido único
A consolidação soviética produziu uma estrutura política na qual o Partido Comunista passou a monopolizar progressivamente a direção do Estado.

5. Do internacionalismo à coordenação soviética
A Internacional Comunista articulou partidos de diferentes países, mas sua trajetória foi marcada pela crescente influência dos interesses políticos e estratégicos da União Soviética.

---

DOSSIÊ ACADÊMICO DE PESQUISA
Vanguardas Insurrecionais e Regimes de Partido Único (1871–1945)

Coleção: História das Ideologias Políticas  
Capítulo: Nº 06  
Eixo de pesquisa: Comunismo, organização revolucionária, centralização partidária e formação do Estado soviético.

1. PROBLEMA CENTRAL DE PESQUISA

1.1 Formulação do problema
Como a tradição revolucionária socialista, originalmente caracterizada pela pluralidade de correntes políticas, experiências de autogoverno e diferentes concepções de emancipação dos trabalhadores, contribuiu para a formação de regimes comunistas estruturados em torno de partidos centralizados, especialmente a partir da Revolução Russa de 1917?

1.2 Contextualização histórica
Durante o século XIX, o movimento socialista não possuía uma estrutura política única.
A Comuna de Paris, a Primeira Internacional e a Segunda Internacional revelaram diferentes formas de organização e concepções de transformação social.
A Comuna de Paris valorizou a representação popular e a reorganização das instituições políticas. A Primeira Internacional reuniu marxistas, anarquistas, sindicalistas e outras correntes. A Segunda Internacional consolidou partidos socialistas de massas, que disputavam espaço político por meio de eleições, sindicatos e organizações populares.
A Revolução Russa alterou profundamente essa trajetória.
A experiência bolchevique estabeleceu uma relação específica entre partido revolucionário, sovietes e Estado. A organização que havia sido desenvolvida para enfrentar a repressão czarista tornou-se o principal instrumento de direção do novo governo.
A guerra civil intensificou a centralização administrativa e militar. Entretanto, a consolidação do regime de partido único não pode ser explicada exclusivamente pelo conflito armado.
É necessário investigar a relação entre as concepções políticas anteriores à revolução, as condições excepcionais de 1917–1921 e as decisões institucionais tomadas pelos dirigentes bolcheviques.

1.3 Dimensões do problema
O problema central pode ser dividido em cinco dimensões:
Dimensão ideológica: quais concepções de Estado, partido, democracia e revolução estavam presentes nas diferentes correntes socialistas?
Dimensão organizacional: como o modelo bolchevique de organização se desenvolveu e por que adquiriu influência internacional?
Dimensão institucional: de que maneira os sovietes, o governo revolucionário e o Partido Comunista se relacionaram durante a formação do Estado soviético?
Dimensão coercitiva: qual foi o papel da guerra civil, da polícia política e da repressão na consolidação do regime?
Dimensão internacional: como a experiência soviética influenciou os partidos comunistas e a organização do movimento revolucionário mundial?

1.4 Justificativa historiográfica
A importância desse problema está na necessidade de evitar duas interpretações simplificadoras.
A primeira considera o regime soviético uma consequência inevitável de toda a tradição marxista. Essa interpretação tende a ignorar a diversidade histórica do socialismo e as divergências existentes entre Marx, Bakunin, Luxemburg, Kautsky e Lenin.
A segunda explica a centralização soviética exclusivamente pelas circunstâncias da guerra civil, como se as instituições autoritárias tivessem sido apenas medidas temporárias impostas por uma situação excepcional.
Uma investigação consistente deve considerar simultaneamente ideias, condições históricas, decisões políticas, estruturas institucionais e relações de poder.

2. HIPÓTESE INTERPRETATIVA

2.1 Hipótese principal
A centralização do poder soviético resultou da interação entre a tradição organizacional bolchevique, a crise do Estado russo, a radicalização revolucionária, a guerra civil e as decisões políticas tomadas durante a consolidação do novo regime.
A concepção de partido centralizado contribuiu para organizar a conquista do poder, mas sua transformação em estrutura dominante do Estado ocorreu em circunstâncias históricas específicas.
A guerra civil acelerou a militarização e o fortalecimento das instituições coercitivas. Entretanto, a dissolução da Assembleia Constituinte, a restrição do pluralismo político e a repressão aos adversários também expressaram decisões políticas que precisam ser examinadas em seus próprios contextos.

2.2 Hipóteses secundárias
Hipótese A — A pluralidade socialista não conduzia necessariamente ao modelo soviético.
As experiências do século XIX demonstram a existência de diferentes projetos de emancipação social. O anarquismo, o socialismo parlamentar e outras correntes marxistas apresentavam concepções distintas de Estado e organização política.

Hipótese B — O partido de vanguarda foi desenvolvido em condições históricas específicas.
A organização bolchevique surgiu em um ambiente de repressão czarista e clandestinidade. Sua estrutura não deve ser interpretada sem considerar essas condições.

Hipótese C — A conquista do poder e a construção do Estado foram processos diferentes.
A capacidade de organizar a insurreição de Outubro não significava que os bolcheviques possuíssem um modelo institucional plenamente definido para todos os problemas que surgiriam após a conquista do poder.

Hipótese D — A guerra civil foi decisiva, mas não suficiente para explicar a centralização.
O conflito fortalecia o aparato militar e coercitivo, mas as escolhas políticas realizadas durante e depois da guerra contribuíram para a permanência do monopólio partidário.

Hipótese E — O internacionalismo comunista tornou-se progressivamente condicionado pela política soviética.
A Internacional Comunista nasceu como organização revolucionária internacional, mas sua estrutura e suas orientações foram cada vez mais influenciadas pelas prioridades estratégicas do Estado soviético.

3. QUESTÕES DE INVESTIGAÇÃO — DESENVOLVIMENTO ANALÍTICO

QUESTÃO 01 — EM QUE MEDIDA A COMUNA DE PARIS INFLUENCIOU A CONCEPÇÃO MARXISTA DE ESTADO?
Contextualização: A Comuna de Paris foi uma experiência de governo revolucionário estabelecida em 1871, após a derrota francesa na Guerra Franco-Prussiana. Sua organização política chamou a atenção de Marx porque demonstrava a possibilidade de reorganizar as instituições públicas e substituir determinados elementos do aparelho estatal tradicional. Em A Guerra Civil na França, Marx analisou a Comuna como uma experiência política que apresentava características diferentes do Estado burocrático e militar existente na sociedade capitalista. Posteriormente, Lenin retomou a experiência em O Estado e a Revolução.
Problema historiográfico: A principal questão consiste em determinar se a Comuna deve ser interpretada como modelo institucional para a tradição marxista ou como uma experiência histórica específica posteriormente apropriada por diferentes correntes revolucionárias. Não se deve presumir que a Comuna possuía uma estrutura semelhante à do Estado soviético. Sua composição era plural e suas instituições estavam relacionadas às condições políticas de Paris em 1871.
Caminhos de investigação:
- Examinar a organização política da Comuna;
- Analisar as medidas administrativas e sociais;
- Comparar a interpretação de Marx com a de Lenin;
- Investigar as diferenças entre a Comuna e o sistema soviético;
- Examinar como anarquistas e marxistas incorporaram sua memória.
Fontes fundamentais:
- MARX, Karl. A Guerra Civil na França (1871).
- LENIN, Vladimir. O Estado e a Revolução (1917).
- TOMBS, Robert. The Paris Commune 1871 (1999).
- ROSS, Kristin. Communal Luxury (2015).
Questão complementar: A interpretação marxista da Comuna preservou suas características históricas ou selecionou determinados aspectos para legitimar concepções posteriores de revolução?

QUESTÃO 02 — QUAIS ERAM AS DIFERENÇAS FUNDAMENTAIS ENTRE MARX E BAKUNIN?
Contextualização: Marx e Bakunin representaram duas das principais correntes do movimento revolucionário do século XIX. Ambos criticavam as estruturas sociais e políticas existentes, mas divergiam profundamente sobre o Estado, a autoridade e a organização da transformação social. Marx defendia a necessidade de organização política da classe trabalhadora e atribuía importância à conquista do poder político. Bakunin considerava que a centralização estatal poderia produzir uma nova estrutura de dominação, mesmo quando organizada em nome dos trabalhadores.
Problema historiográfico: A divergência deve ser investigada para além de conflitos pessoais. O ponto central consiste em compreender duas concepções diferentes de emancipação: uma transformação social que envolve a conquista e a reorganização do poder político; e uma transformação social baseada na autonomia das organizações populares e na rejeição do Estado centralizado.
Caminhos de investigação:
- Comparar as concepções de Estado;
- Investigar a relação entre partido e movimento operário;
- Analisar o papel dos sindicatos;
- Examinar a disputa no Congresso de Haia de 1872;
- Investigar a influência posterior das duas tradições.
Fontes fundamentais:
- MARX, Karl. Manifesto do Partido Comunista (1848).
- MARX, Karl. A Guerra Civil na França (1871).
- BAKUNIN, Mikhail. Estatismo e Anarquia (1873).
Problema complementar: A experiência soviética confirmou as preocupações de Bakunin sobre a possibilidade de uma nova elite política revolucionária ou apresentou condições históricas que não poderiam ser previstas no século XIX?

QUESTÃO 03 — POR QUE A SEGUNDA INTERNACIONAL NÃO CONSEGUIU IMPEDIR A ADESÃO DE IMPORTANTES PARTIDOS SOCIALISTAS À PRIMEIRA GUERRA MUNDIAL?
Contextualização: A Segunda Internacional havia desenvolvido uma tradição política contrária às guerras entre potências capitalistas. Entretanto, em 1914, importantes partidos socialistas apoiaram os créditos militares de seus governos. O episódio provocou uma crise no internacionalismo socialista.
Problema historiográfico: É necessário investigar por que a solidariedade internacional dos trabalhadores não foi suficiente para impedir que partidos socialistas priorizassem interesses nacionais. A questão envolve a relação entre identidade de classe, nacionalismo, parlamentarismo, pressão governamental e estratégia política.
Caminhos de investigação:
- Examinar as resoluções anteriores a 1914;
- Analisar a posição da social-democracia alemã;
- Investigar a atuação de Jean Jaurès e outros dirigentes;
- Comparar as posições de Lenin, Luxemburg e Kautsky;
- Examinar o impacto da guerra sobre a unidade socialista.
Fontes fundamentais:
- LENIN, Vladimir. A Falência da Segunda Internacional (1915).
- LUXEMBURG, Rosa. A Crise da Social-Democracia (1916).
- HAUPT, Georges. Socialism and the Great War (1972).
Questão complementar: A crise de 1914 representou uma falência definitiva do internacionalismo socialista ou uma demonstração dos limites organizacionais da Segunda Internacional?

QUESTÃO 04 — A CONCEPÇÃO LENINISTA DE PARTIDO DE VANGUARDA FOI UMA RESPOSTA ÀS CONDIÇÕES RUSSAS OU POSSUÍA PRETENSÕES UNIVERSAIS?
Contextualização: Lenin desenvolveu sua concepção de organização revolucionária em um país marcado pela repressão czarista. A clandestinidade, a perseguição política e a dificuldade de organizar movimentos legais influenciaram sua defesa de uma organização disciplinada e centralizada. Em Que Fazer?, de 1902, Lenin argumentou que a organização revolucionária precisava desenvolver uma atuação política que ultrapassasse as reivindicações econômicas imediatas.
Problema historiográfico: A questão consiste em determinar se o modelo de organização desenvolvido por Lenin foi uma resposta específica às condições russas ou se deveria ser reproduzido em todos os países. Lars T. Lih propõe uma leitura contextualizada de Que Fazer?, destacando a influência da social-democracia europeia sobre o pensamento de Lenin. Essa interpretação questiona a ideia de que a obra tenha representado uma ruptura completa com as tradições socialistas anteriores.
Caminhos de investigação:
- Examinar a estrutura do movimento socialista russo;
- Analisar as condições de clandestinidade;
- Comparar o pensamento de Lenin com o Partido Social-Democrata alemão;
- Investigar a divisão entre bolcheviques e mencheviques;
- Comparar o partido revolucionário anterior a 1917 com o Partido Comunista após a conquista do poder.
Fontes fundamentais:
- LENIN, Vladimir. Que Fazer? (1902).
- LENIN, Vladimir. Um Passo em Frente, Dois Passos Atrás (1904).
- LIH, Lars T. Lenin Rediscovered (2006).
Questão complementar: A transformação do partido revolucionário em estrutura dirigente do Estado representou uma continuidade da organização anterior ou uma mudança qualitativa de sua função política?

QUESTÃO 05 — QUAL FOI O PAPEL DOS SOVIETES NA REVOLUÇÃO DE OUTUBRO?
Contextualização: Os sovietes surgiram durante a Revolução de 1905 e reapareceram com grande força em 1917. Eles eram conselhos representativos de trabalhadores e soldados, constituindo espaços de organização e participação política. Após a queda do czarismo, os sovietes passaram a coexistir com o Governo Provisório. A relação entre essas instituições ficou conhecida como duplo poder.
Problema historiográfico: A questão central consiste em determinar se os sovietes foram instrumentos autônomos de mobilização popular, instituições progressivamente influenciadas pelos bolcheviques ou estruturas que desempenharam funções diferentes conforme o momento revolucionário. É necessário evitar duas simplificações: considerar os sovietes apenas instrumentos do Partido Bolchevique ou tratá-los como instituições completamente independentes das disputas partidárias.
Caminhos de investigação:
- Investigar a origem dos sovietes em 1905;
- Examinar sua reorganização em fevereiro de 1917;
- Analisar a composição política dos conselhos;
- Investigar a crescente influência bolchevique;
- Examinar o Comitê Militar Revolucionário;
- Comparar a legitimidade dos sovietes com a Assembleia Constituinte.
Fontes fundamentais:
- RABINOWITCH, Alexander. The Bolsheviks Come to Power (1976).
- FITZPATRICK, Sheila. The Russian Revolution (1982).
- SMITH, S. A. Russia in Revolution (2017).
Questão complementar: Os sovietes preservaram sua autonomia depois da tomada do poder ou foram progressivamente subordinados à estrutura partidária?

QUESTÃO 06 — A DISSOLUÇÃO DA ASSEMBLEIA CONSTITUINTE REPRESENTOU UMA RUPTURA DECISIVA COM O PLURALISMO POLÍTICO?
Contextualização: Após a Revolução de Outubro, foram realizadas eleições para a Assembleia Constituinte. Os bolcheviques não obtiveram a maioria, enquanto os socialistas revolucionários conquistaram uma representação expressiva. Em janeiro de 1918, a Assembleia foi dissolvida depois de sua primeira sessão. A decisão representou um momento decisivo na organização política do novo regime.
Problema historiográfico: A questão envolve diferentes concepções de legitimidade revolucionária. Os bolcheviques defendiam que os sovietes representavam uma forma superior de poder revolucionário. Seus adversários consideravam que a dissolução da Assembleia eliminava uma instituição representativa eleita nacionalmente. É necessário investigar se a decisão representou uma medida excepcional, uma consequência das disputas revolucionárias ou um passo fundamental na consolidação do monopólio partidário.
Caminhos de investigação:
- Examinar os resultados eleitorais;
- Analisar a composição da Assembleia;
- Investigar os argumentos apresentados pelos bolcheviques;
- Comparar a legitimidade eleitoral e a legitimidade soviética;
- Estudar as consequências institucionais da dissolução.
Fontes fundamentais:
- LENIN, Vladimir. Textos políticos de 1917–1918.
- LUXEMBURG, Rosa. A Revolução Russa (1918).
- FITZPATRICK, Sheila. The Russian Revolution.
Questão complementar: A dissolução da Assembleia foi uma decisão isolada ou inaugurou uma transformação duradoura na relação entre partido, Estado e representação política?

QUESTÃO 07 — ATÉ QUE PONTO A GUERRA CIVIL EXPLICA A FORMAÇÃO DO REGIME DE PARTIDO ÚNICO?
Contextualização: Entre 1918 e 1921, a Rússia enfrentou uma guerra civil que envolveu forças antibolcheviques, intervenções estrangeiras, movimentos nacionalistas e revoltas camponesas. O governo bolchevique respondeu com a centralização das estruturas militares, econômicas e administrativas. A Cheka ampliou sua atuação e o Terror Vermelho tornou-se parte da experiência política do período.
Problema historiográfico: A guerra civil é indispensável para compreender a formação do Estado soviético, mas não pode ser utilizada como explicação automática para todas as medidas adotadas pelo governo. É necessário distinguir: medidas diretamente relacionadas às necessidades militares; decisões destinadas a eliminar adversários políticos; transformações institucionais que permaneceram depois do conflito; medidas econômicas emergenciais; e estruturas de poder que se tornaram permanentes.
Caminhos de investigação:
- Examinar a criação da Cheka;
- Investigar a dissolução da Assembleia Constituinte;
- Analisar a política do Comunismo de Guerra;
- Estudar a repressão política;
- Investigar a revolta de Kronstadt;
- Comparar o período de guerra civil com a NEP.
Fontes fundamentais:
- FITZPATRICK, Sheila. The Russian Revolution.
- FIGES, Orlando. A People's Tragedy (1996).
- GETTY, J. Arch; NAUMOV, Oleg V. The Road to Terror (1999).
- SMITH, S. A. Russia in Revolution (2017).
Questão complementar: Quais instituições coercitivas poderiam ter sido desmobilizadas após a guerra civil e quais foram preservadas ou ampliadas?

QUESTÃO 08 — COMO ROSA LUXEMBURG E KARL KAUTSKY INTERPRETARAM A EXPERIÊNCIA BOLCHEVIQUE?
Contextualização: A Revolução de Outubro provocou uma divisão dentro do próprio movimento marxista. Rosa Luxemburg reconheceu a importância histórica da revolução, mas criticou a restrição das liberdades políticas e os riscos de uma direção excessivamente concentrada. Karl Kautsky também questionou a identificação entre ditadura do proletariado e monopólio político de um partido.
Problema historiográfico: A questão consiste em compreender como diferentes correntes marxistas interpretavam a relação entre democracia e revolução. Luxemburg e Kautsky não possuíam posições idênticas. Suas críticas devem ser examinadas individualmente, considerando suas concepções de democracia, socialismo e organização política.
Caminhos de investigação:
- Comparar os textos de Luxemburg e Kautsky;
- Examinar suas críticas ao governo bolchevique;
- Analisar a resposta de Lenin;
- Investigar a diferença entre ditadura de classe e ditadura partidária;
- Examinar a recepção dessas críticas pelo movimento comunista internacional.
Fontes fundamentais:
- LUXEMBURG, Rosa. A Revolução Russa (1918).
- KAUTSKY, Karl. A Ditadura do Proletariado (1918).
- LENIN, Vladimir. A Revolução Proletária e o Renegado Kautsky (1918).
Questão complementar: As críticas de Luxemburg e Kautsky podem ser compreendidas como uma defesa de outra forma de socialismo revolucionário?

QUESTÃO 09 — A INTERNACIONAL COMUNISTA PRESERVOU SUA AUTONOMIA OU TORNOU-SE PROGRESSIVAMENTE SUBORDINADA AOS INTERESSES SOVIÉTICOS?
Contextualização: Fundada em 1919, a Internacional Comunista pretendia organizar a revolução mundial e coordenar partidos comunistas de diferentes países. Entretanto, sua estrutura foi progressivamente influenciada pela experiência soviética. As 21 Condições de 1920 estabeleceram critérios rigorosos de adesão, enquanto a bolchevização fortaleceu a centralização organizacional. Durante a década de 1930, as mudanças de estratégia da organização passaram a refletir também as necessidades políticas e diplomáticas da União Soviética.
Problema historiográfico: É necessário investigar como se desenvolveu a relação entre internacionalismo revolucionário e política externa soviética. Não se deve presumir que todos os partidos comunistas possuíam a mesma margem de autonomia, nem que a Internacional controlava de maneira idêntica todas as organizações nacionais. A pesquisa deve considerar diferenças entre países, períodos e dirigentes.
Caminhos de investigação:
- Examinar as 21 Condições;
- Estudar o processo de bolchevização;
- Comparar a estratégia do Terceiro Período com as Frentes Populares;
- Investigar as relações entre Moscou e os partidos nacionais;
- Examinar a atuação da Internacional na Guerra Civil Espanhola;
- Investigar os expurgos de comunistas estrangeiros;
- Analisar a dissolução de 1943.
Fontes fundamentais:
- MCDERMOTT, Kevin; AGNEW, Jeremy. The Comintern (1996).
- PONS, Silvio. The Global Revolution (2014).
- STUDER, Brigitte. The Transnational World of the Cominternians (2015).
- BROUÉ, Pierre. Histoire de l'Internationale communiste (1997).
Questão complementar: A Internacional Comunista foi progressivamente transformada em instrumento de política externa soviética ou preservou espaços importantes de iniciativa própria?

QUESTÃO 10 — COMO A ABERTURA DOS ARQUIVOS SOVIÉTICOS MODIFICOU A HISTORIOGRAFIA SOBRE ESSE PERÍODO?
Contextualização: Durante a existência da União Soviética, o acesso de pesquisadores estrangeiros a determinados arquivos era limitado. A interpretação oficial da história soviética também estava submetida a restrições políticas e ideológicas. Após o fim da União Soviética, a abertura parcial de arquivos permitiu novas investigações sobre o funcionamento das instituições, as decisões da liderança e os mecanismos de repressão.
Problema historiográfico: A abertura documental modificou a historiografia, mas não tornou automaticamente todas as interpretações anteriores inválidas. O trabalho histórico continua dependendo da crítica das fontes, da contextualização documental e da comparação entre diferentes evidências. Os arquivos também apresentam limitações: documentos preservados não representam necessariamente toda a realidade histórica, e sua produção estava relacionada às próprias instituições que os criaram.
Caminhos de investigação:
- Comparar estudos anteriores e posteriores a 1991;
- Examinar documentos do Partido Comunista;
- Investigar arquivos de segurança e repressão;
- Estudar a correspondência entre dirigentes;
- Analisar documentos da Internacional Comunista;
- Comparar arquivos com memórias, testemunhos e imprensa;
- Investigar como novas evidências alteraram interpretações sobre Lenin e Stalin.
Pesquisadores fundamentais:
- SHEILA FITZPATRICK — história social e transformações da sociedade soviética.
- J. ARCH GETTY — instituições políticas e documentação soviética.
- OLEG KHLEVNIUK — funcionamento do poder stalinista e arquivos soviéticos.
- STEPHEN KOTKIN — Estado soviético, Stalin e história política.
- ALEXANDER RABINOWITCH — dinâmica política da Revolução Russa.
Questão complementar: A abertura dos arquivos produziu uma ruptura metodológica na historiografia ou aprofundou tendências de pesquisa que já existiam?

4. METODOLOGIA DE INVESTIGAÇÃO

A pesquisa sobre o comunismo revolucionário exige uma metodologia capaz de combinar história política, história social, história intelectual e análise institucional.
Não basta estudar os discursos dos dirigentes. É necessário investigar como suas ideias foram transformadas em decisões políticas, estruturas administrativas e práticas de governo.

4.1 Análise das fontes primárias
As fontes primárias devem ser examinadas considerando:
- Quem produziu o documento;
- Em qual contexto foi produzido;
- Qual era seu objetivo;
- Quem era seu destinatário;
- Quais interesses políticos estavam envolvidos;
- Qual era sua relação com as práticas institucionais;
- Quais limitações apresenta como evidência histórica.
Discursos revolucionários, programas partidários e documentos oficiais não devem ser tratados como descrições neutras da realidade. Eles também constituem instrumentos de disputa política.

4.2 Comparação historiográfica
A pesquisa deve confrontar interpretações de diferentes historiadores.
Por exemplo, a Revolução de Outubro pode ser estudada a partir das interpretações de Alexander Rabinowitch, Sheila Fitzpatrick, Orlando Figes, Richard Pipes e S. A. Smith.
O objetivo não é escolher previamente um historiador como autoridade absoluta, mas identificar as diferenças de método, documentação e interpretação.

4.3 Distinção entre teoria e prática
Um dos principais cuidados metodológicos consiste em não confundir:
- O pensamento de Marx com o Estado soviético;
- A concepção de Lenin em 1902 com todas as instituições posteriores;
- A ditadura do proletariado como conceito teórico com o monopólio político do Partido Comunista;
- O internacionalismo revolucionário com a política externa soviética;
- A experiência da Comuna com a organização do governo bolchevique.
Essas distinções são indispensáveis para evitar anacronismos e generalizações.

5. MATRIZ DE PESQUISA: FONTES E AUTORES

Eixo de investigação | Fontes primárias | Historiadores e pesquisadores
Comuna de Paris | Marx, A Guerra Civil na França | Robert Tombs, Kristin Ross, Carolyn Eichner
Marxismo e anarquismo | Marx, Bakunin, documentos da Primeira Internacional | Wolfgang Eckhardt, Georges Haupt
Segunda Internacional | Resoluções socialistas e textos de Lenin, Luxemburg e Bernstein | Georges Haupt, Julius Braunthal
Partido de vanguarda | Lenin, Que Fazer? | Lars T. Lih, Robert Service
Revolução de Outubro | Documentos dos sovietes e do Partido Bolchevique | Alexander Rabinowitch, Sheila Fitzpatrick
Guerra Civil Russa | Documentos governamentais, militares e partidários | Orlando Figes, S. A. Smith, E. H. Carr
Ditadura do proletariado | Marx, Lenin, Luxemburg e Kautsky | Leszek Kołakowski, François Furet
Internacional Comunista | 21 Condições, resoluções e correspondência da Komintern | Pierre Broué, Silvio Pons, Brigitte Studer
Estado soviético | Documentação partidária e estatal | Oleg Khlevniuk, J. Arch Getty, Stephen Kotkin

6. OBJETIVOS DA INVESTIGAÇÃO

Objetivo geral:
Investigar a transformação histórica do movimento socialista internacional entre 1871 e 1945, analisando a formação do partido revolucionário centralizado, a experiência bolchevique de conquista do poder e a consolidação das estruturas políticas do Estado soviético e da Internacional Comunista.

Objetivos específicos:
1. Compreender a importância histórica da Comuna de Paris.
2. Investigar as divergências entre marxismo e anarquismo.
3. Examinar a formação e a crise das Internacionais socialistas.
4. Analisar a concepção leninista de organização revolucionária.
5. Investigar a dinâmica política e social da Revolução Russa.
6. Examinar a transformação dos sovietes e a formação do Estado soviético.
7. Analisar as relações entre ditadura do proletariado, democracia e partido único.
8. Investigar o papel da guerra civil na centralização política.
9. Compreender a formação e a trajetória da Internacional Comunista.
10. Avaliar as transformações historiográficas decorrentes da abertura dos arquivos soviéticos.

7. RESULTADOS ESPERADOS

Ao final da investigação, o pesquisador deverá ser capaz de explicar:
- Por que o socialismo do século XIX era politicamente plural;
- Como surgiram as principais divergências sobre Estado e revolução;
- Por que a Revolução Russa alterou a organização do comunismo mundial;
- Como os bolcheviques transformaram uma organização revolucionária em direção estatal;
- Quais foram as consequências da guerra civil para as instituições soviéticas;
- Como a restrição do pluralismo político se desenvolveu;
- Por que existiram críticas marxistas ao modelo bolchevique;
- Como a Internacional Comunista modificou sua estratégia;
- De que maneira os interesses soviéticos influenciaram o comunismo internacional;
- Como a historiografia contemporânea investiga essas transformações.

8. SÍNTESE INTERPRETATIVA FINAL

O período de 1871 a 1945 revela uma transformação decisiva na história do socialismo internacional.
A experiência da Comuna de Paris, as disputas entre marxistas e anarquistas, o crescimento dos partidos socialistas e a crise provocada pela Primeira Guerra Mundial constituíram antecedentes fundamentais da Revolução Russa.
A conquista do poder pelos bolcheviques modificou a relação entre movimento revolucionário, partido e Estado. O partido que havia sido organizado para enfrentar a autocracia czarista tornou-se a principal estrutura de direção do novo regime.
A guerra civil intensificou esse processo, mas não elimina a necessidade de investigar as decisões políticas que contribuíram para a formação do sistema de partido único.
A experiência soviética também transformou o internacionalismo comunista. A Internacional Comunista procurou organizar a revolução mundial, mas sua trajetória foi progressivamente condicionada pela política do Estado soviético.
A questão fundamental que atravessa toda esta investigação é a tensão entre emancipação e autoridade: como uma tradição política que reivindicava a libertação dos trabalhadores desenvolveu instituições nas quais a direção partidária passou a concentrar progressivamente o poder?
Responder a essa questão exige compreender não apenas as ideias dos revolucionários, mas também suas decisões, as condições históricas em que atuaram e as instituições que ajudaram a construir.

REFERÊNCIAS FUNDAMENTAIS DO DOSSIÊ

ARENDT, Hannah. The Origins of Totalitarianism. New York: Harcourt, 1951.
BROUÉ, Pierre. Histoire de l'Internationale communiste, 1919–1943. Paris: Fayard, 1997.
CARR, E. H. The Bolshevik Revolution, 1917–1923. London: Macmillan, 1950–1953.
FITZPATRICK, Sheila. The Russian Revolution. Oxford: Oxford University Press, 1982.
FIGES, Orlando. A People's Tragedy: The Russian Revolution, 1891–1924. London: Jonathan Cape, 1996.
FURET, François. Le Passé d'une illusion. Paris: Robert Laffont/Calmann-Lévy, 1995.
GETTY, J. Arch; NAUMOV, Oleg V. The Road to Terror. New Haven: Yale University Press, 1999.
HAUPT, Georges. Socialism and the Great War. Oxford: Clarendon Press, 1972.
KHLEVNIUK, Oleg V. Stalin: New Biography of a Dictator. New Haven: Yale University Press, 2015.
KOŁAKOWSKI, Leszek. Main Currents of Marxism. Oxford: Oxford University Press, 1978.
LIH, Lars T. Lenin Rediscovered: What Is to Be Done? in Context. Leiden: Brill, 2006.
MCDERMOTT, Kevin; AGNEW, Jeremy. The Comintern: A History of International Communism from Lenin to Stalin. London: Macmillan, 1996.
PONS, Silvio. The Global Revolution: A History of International Communism 1917–1991. Oxford: Oxford University Press, 2014.
RABINOWITCH, Alexander. The Bolsheviks Come to Power. New York: W. W. Norton, 1976.
ROSS, Kristin. Communal Luxury. London: Verso, 2015.
SMITH, S. A. Russia in Revolution: An Empire in Crisis, 1890 to 1928. Oxford: Oxford University Press, 2017.
STUDER, Brigitte. The Transnational World of the Cominternians. London: Palgrave Macmillan, 2015.
TOMBS, Robert. The Paris Commune 1871. London: Longman, 1999.`;

  return (
    <article className="space-y-12 max-w-4xl mx-auto w-full box-border overflow-hidden">
      
      {/* HEADER BANNER GENERAL */}
      <div className="bg-[#161619] border border-amber-600/50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                CÁTEDRA DE HISTÓRIA DO COMUNISMO GLOBAL E REGIMES REVOLUCIONÁRIOS
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                CAPÍTULO ACADÊMICO Nº 06
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              A REVOLUÇÃO, A VANGUARDA E O PODER
            </h1>
            <p className="text-amber-400 font-serif italic text-base sm:text-lg">
              Da emancipação dos trabalhadores à centralização do Estado revolucionário
            </p>
          </div>

          <button
            onClick={() => copyToClipboard(fullEssayText, 'full_essay_106')}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar todo o conteúdo da aba Ensaio Acadêmico"
          >
            {copiedSection === 'full_essay_106' ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Aba Completa Copiada!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Aba Ensaio Acadêmico na Íntegra</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* SUBSEÇÃO 1: ENSAIO ACADÊMICO */}
      <section id="essay-master" className="scroll-mt-24 space-y-6 bg-[#161619] border border-stone-800 p-6 sm:p-8 rounded-xl shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <GraduationCap className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            ENSAIO ACADÊMICO
          </h2>
        </div>

        <div className={`font-serif text-stone-300 text-justify leading-relaxed space-y-5 ${getFontSizeClass('body')}`}>
          <p>
            A história do comunismo entre o século XIX e a primeira metade do século XX é marcada por uma questão fundamental: como transformar uma sociedade capitalista sem reproduzir, no interior do processo revolucionário, novas estruturas de dominação política?
          </p>
          <p>
            Essa questão atravessou diferentes gerações de socialistas, desde a experiência da Comuna de Paris até a formação da Internacional Comunista.
          </p>
          <p>
            Em 1871, a Comuna de Paris apresentou uma experiência de governo revolucionário que valorizava a representação popular, a responsabilidade dos representantes e a transformação das instituições tradicionais. Sua existência breve, entretanto, demonstrou as dificuldades de sobrevivência de um governo revolucionário diante de forças militares e políticas superiores.
          </p>
          <p>
            Marx interpretou a Comuna como uma experiência de transformação do aparelho estatal. Bakunin, embora partisse de fundamentos diferentes, também via na experiência parisiense uma demonstração da capacidade de organização popular fora das estruturas tradicionais de autoridade.
          </p>
          <p>
            A partir dessas experiências, o movimento socialista desenvolveu diferentes concepções sobre a relação entre organização, Estado e revolução.
          </p>
          <p>
            A Primeira Internacional reuniu correntes que compartilhavam a crítica ao capitalismo, mas divergiam profundamente sobre os meios de transformação social. A disputa entre Marx e Bakunin revelou que a unidade do movimento operário não significava unidade doutrinária.
          </p>
          <p>
            A Segunda Internacional ampliou a presença do socialismo na política parlamentar e na organização sindical. Entretanto, o crescimento dos partidos socialistas também produziu uma controvérsia sobre a relação entre reformas graduais e ruptura revolucionária.
          </p>
          <p>
            A Primeira Guerra Mundial expôs os limites do internacionalismo socialista. O apoio de importantes partidos aos respectivos governos nacionais demonstrou que a solidariedade internacional dos trabalhadores poderia ser subordinada às prioridades dos Estados nacionais.
          </p>
          <p>
            Foi nesse ambiente que Lenin desenvolveu sua crítica à Segunda Internacional e defendeu uma organização revolucionária capaz de enfrentar a autocracia russa.
          </p>
          <p>
            A concepção de partido de vanguarda representou uma resposta às condições políticas do Império Russo. A organização centralizada, a disciplina e a formação de revolucionários profissionais eram consideradas instrumentos necessários para enfrentar a repressão czarista.
          </p>
          <p>
            Contudo, a transformação dessa concepção em estrutura de poder estatal produziu problemas que não podem ser ignorados.
          </p>
          <p>
            A Revolução de Outubro de 1917 ocorreu em uma sociedade profundamente desorganizada pela guerra, pela crise econômica e pela desintegração da autoridade imperial. Os bolcheviques conquistaram o poder em meio a uma mobilização social significativa, mas a consolidação do novo governo foi acompanhada por conflitos com outras forças políticas e pela restrição progressiva do pluralismo.
          </p>
          <p>
            A dissolução da Assembleia Constituinte, a repressão aos adversários e a centralização do aparelho estatal demonstraram que a experiência soviética se afastava de determinadas expectativas democráticas presentes no socialismo anterior.
          </p>
          <p>
            A guerra civil intensificou esse processo. A militarização da economia, a expansão da polícia política e a concentração das decisões contribuíram para a formação de instituições que sobreviveriam ao conflito.
          </p>
          <p>
            A questão central não é simplesmente determinar se a violência foi consequência da guerra ou resultado de uma escolha ideológica. A investigação histórica exige analisar a interação entre condições excepcionais, decisões políticas, estruturas institucionais e projetos de poder.
          </p>
          <p>
            Rosa Luxemburg identificou precocemente os riscos de uma revolução que restringisse excessivamente a liberdade política. Sua crítica não significava rejeição da Revolução de Outubro, mas uma advertência sobre os perigos de substituir a participação popular pela autoridade de uma direção partidária.
          </p>
          <p>
            Kautsky também questionou a identificação entre ditadura do proletariado e ditadura de uma organização política.
          </p>
          <p>
            Essas críticas demonstram que a controvérsia sobre democracia e revolução não foi uma discussão externa ao marxismo. Ela atravessou o próprio movimento socialista.
          </p>
          <p>
            A Internacional Comunista ampliou a influência do modelo bolchevique. Ao estabelecer critérios de adesão e orientar a reorganização de partidos nacionais, a organização contribuiu para consolidar uma estrutura internacional de direção política.
          </p>
          <p>
            Entretanto, o internacionalismo revolucionário passou a conviver com os interesses estratégicos do Estado soviético. Essa tensão tornou-se especialmente evidente nas mudanças de orientação política da Komintern durante as décadas de 1920 e 1930.
          </p>
          <p>
            A trajetória entre 1871 e 1945 revela, assim, uma transformação profunda: o movimento socialista internacional, originalmente plural em suas formas organizacionais, passou a conviver com um modelo comunista no qual o partido revolucionário assumiu posição central na organização do Estado e da sociedade.
          </p>
          <p>
            Essa transformação não foi inevitável nem ocorreu sem oposição. Foi resultado de conflitos históricos, escolhas políticas e circunstâncias específicas.
          </p>
          <p>
            O estudo desse processo é indispensável para compreender as contradições entre emancipação social, democracia, autoridade revolucionária e concentração do poder.
          </p>
        </div>
      </section>

      {/* SUBSEÇÃO 2: SÍNTESE */}
      <section id="essay-synthese-master" className="scroll-mt-24 space-y-6 bg-[#161619] border border-stone-800 p-6 sm:p-8 rounded-xl shadow-md">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
          <Layers className="w-6 h-6 text-amber-400 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
            SÍNTESE
          </h2>
        </div>

        <p className={`font-serif text-stone-300 leading-relaxed font-semibold italic ${getFontSizeClass('body')}`}>
          O período de 1871 a 1945 pode ser compreendido por cinco grandes transformações:
        </p>

        <div className="space-y-4 pt-1">
          {[
            {
              num: '1',
              title: 'Da experiência comunal à tradição revolucionária',
              desc: 'A Comuna de Paris tornou-se uma referência para o pensamento socialista, especialmente na discussão sobre o Estado e a participação popular.'
            },
            {
              num: '2',
              title: 'Da pluralidade socialista à organização partidária',
              desc: 'As Internacionais reuniram diferentes correntes, mas suas disputas demonstraram as dificuldades de construir uma estratégia política comum.'
            },
            {
              num: '3',
              title: 'Da organização revolucionária à conquista do Estado',
              desc: 'A experiência bolchevique transformou o partido de vanguarda em instrumento central da tomada do poder.'
            },
            {
              num: '4',
              title: 'Da ditadura do proletariado ao partido único',
              desc: 'A consolidação soviética produziu uma estrutura política na qual o Partido Comunista passou a monopolizar progressivamente a direção do Estado.'
            },
            {
              num: '5',
              title: 'Do internacionalismo à coordenação soviética',
              desc: 'A Internacional Comunista articulou partidos de diferentes países, mas sua trajetória foi marcada pela crescente influência dos interesses políticos e estratégicos da União Soviética.'
            }
          ].map((item) => (
            <div key={item.num} className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber-950 text-amber-300 border border-amber-700/60 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {item.num}
                </span>
                <h3 className="font-serif font-bold text-stone-100 text-base sm:text-lg">
                  {item.title}
                </h3>
              </div>
              <p className={`font-serif text-stone-300 pl-10 leading-relaxed ${getFontSizeClass('body')}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSEÇÃO 3: DOSSIÊ ACADÊMICO DE PESQUISA (EXTENSO E INTEGRAL) */}
      <section id="essay-research-dossier-master" className="scroll-mt-24 space-y-8 bg-[#161619] border border-stone-800 p-6 sm:p-8 rounded-xl shadow-md">
        
        {/* Cabecalho Dossiê */}
        <div className="border-b border-stone-800 pb-6 space-y-3">
          <div className="flex items-center gap-3">
            <Search className="w-6 h-6 text-amber-400 shrink-0" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-100 uppercase tracking-wide">
              DOSSIÊ ACADÊMICO DE PESQUISA
            </h2>
          </div>
          <p className="text-amber-400 font-serif italic text-base sm:text-lg pl-9">
            Vanguardas Insurrecionais e Regimes de Partido Único (1871–1945)
          </p>
          <div className="pl-9 space-y-1 text-xs font-mono text-stone-400">
            <p><strong className="text-stone-300">Coleção:</strong> História das Ideologias Políticas</p>
            <p><strong className="text-stone-300">Capítulo:</strong> Nº 06</p>
            <p><strong className="text-stone-300">Eixo de pesquisa:</strong> Comunismo, organização revolucionária, centralização partidária e formação do Estado soviético.</p>
          </div>
        </div>

        {/* 1. PROBLEMA CENTRAL DE PESQUISA */}
        <div className="bg-[#121214] p-6 rounded-lg border border-stone-800 space-y-5">
          <h3 className="font-serif font-bold text-amber-400 text-lg sm:text-xl border-b border-stone-800 pb-2">
            1. PROBLEMA CENTRAL DE PESQUISA
          </h3>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-200 text-base">
              1.1 Formulação do problema
            </h4>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              Como a tradição revolucionária socialista, originalmente caracterizada pela pluralidade de correntes políticas, experiências de autogoverno e diferentes concepções de emancipação dos trabalhadores, contribuiu para a formação de regimes comunistas estruturados em torno de partidos centralizados, especialmente a partir da Revolução Russa de 1917?
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-200 text-base">
              1.2 Contextualização histórica
            </h4>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              Durante o século XIX, o movimento socialista não possuía uma estrutura política única.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A Comuna de Paris, a Primeira Internacional e a Segunda Internacional revelaram diferentes formas de organização e concepções de transformação social.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A Comuna de Paris valorizou a representação popular e a reorganização das instituições políticas. A Primeira Internacional reuniu marxistas, anarquistas, sindicalistas e outras correntes. A Segunda Internacional consolidou partidos socialistas de massas, que disputavam espaço político por meio de eleições, sindicatos e organizações populares.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A Revolução Russa alterou profundamente essa trajetória.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A experiência bolchevique estabeleceu uma relação específica entre partido revolucionário, sovietes e Estado. A organização que havia sido desenvolvida para enfrentar a repressão czarista tornou-se o principal instrumento de direção do novo governo.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A guerra civil intensificou a centralização administrativa e militar. Entretanto, a consolidação do regime de partido único não pode ser explicada exclusivamente pelo conflito armado.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              É necessário investigar a relação entre as concepções políticas anteriores à revolução, as condições excepcionais de 1917–1921 e as decisões institucionais tomadas pelos dirigentes bolcheviques.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-200 text-base">
              1.3 Dimensões do problema
            </h4>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              O problema central pode ser dividido em cinco dimensões:
            </p>
            <ul className="space-y-2 font-serif text-stone-300 list-disc list-inside pl-2">
              <li><strong className="text-amber-300">Dimensão ideológica:</strong> quais concepções de Estado, partido, democracia e revolução estavam presentes nas diferentes correntes socialistas?</li>
              <li><strong className="text-amber-300">Dimensão organizacional:</strong> como o modelo bolchevique de organização se desenvolveu e por que adquiriu influência internacional?</li>
              <li><strong className="text-amber-300">Dimensão institucional:</strong> de que maneira os sovietes, o governo revolucionário e o Partido Comunista se relacionaram durante a formação do Estado soviético?</li>
              <li><strong className="text-amber-300">Dimensão coercitiva:</strong> qual foi o papel da guerra civil, da polícia política e da repressão na consolidação do regime?</li>
              <li><strong className="text-amber-300">Dimensão internacional:</strong> como a experiência soviética influenciou os partidos comunistas e a organização do movimento revolucionário mundial?</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-200 text-base">
              1.4 Justificativa historiográfica
            </h4>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A importância desse problema está na necessidade de evitar duas interpretações simplificadoras.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A primeira considera o regime soviético uma consequência inevitável de toda a tradição marxista. Essa interpretação tende a ignorar a diversidade histórica do socialismo e as divergências existentes entre Marx, Bakunin, Luxemburg, Kautsky e Lenin.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A segunda explica a centralização soviética exclusivamente pelas circunstâncias da guerra civil, como se as instituições autoritárias tivessem sido apenas medidas temporárias impostas por uma situação excepcional.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              Uma investigação consistente deve considerar simultaneamente ideias, condições históricas, decisões políticas, estruturas institucionais e relações de poder.
            </p>
          </div>
        </div>

        {/* 2. HIPÓTESE INTERPRETATIVA */}
        <div className="bg-[#121214] p-6 rounded-lg border border-stone-800 space-y-5">
          <h3 className="font-serif font-bold text-amber-400 text-lg sm:text-xl border-b border-stone-800 pb-2">
            2. HIPÓTESE INTERPRETATIVA
          </h3>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-200 text-base">
              2.1 Hipótese principal
            </h4>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A centralização do poder soviético resultou da interação entre a tradição organizacional bolchevique, a crise do Estado russo, a radicalização revolucionária, a guerra civil e as decisões políticas tomadas durante a consolidação do novo regime.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A concepção de partido centralizado contribuiu para organizar a conquista do poder, mas sua transformação em estrutura dominante do Estado ocorreu em circunstâncias históricas específicas.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A guerra civil acelerou a militarização e o fortalecimento das instituições coercitivas. Entretanto, a dissolução da Assembleia Constituinte, a restrição do pluralismo político e a repressão aos adversários também expressaram decisões políticas que precisam ser examinadas em seus próprios contextos.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif font-bold text-stone-200 text-base">
              2.2 Hipóteses secundárias
            </h4>
            
            <div className="space-y-3 pl-2">
              <div className="bg-stone-900/60 p-3.5 rounded border border-stone-800">
                <strong className="text-amber-300 font-bold block mb-1">
                  Hipótese A — A pluralidade socialista não conduzia necessariamente ao modelo soviético.
                </strong>
                <p className="text-stone-300 text-sm">
                  As experiências do século XIX demonstram a existência de diferentes projetos de emancipação social. O anarquismo, o socialismo parlamentar e outras correntes marxistas apresentavam concepções distintas de Estado e organização política.
                </p>
              </div>

              <div className="bg-stone-900/60 p-3.5 rounded border border-stone-800">
                <strong className="text-amber-300 font-bold block mb-1">
                  Hipótese B — O partido de vanguarda foi desenvolvido em condições históricas específicas.
                </strong>
                <p className="text-stone-300 text-sm">
                  A organização bolchevique surgiu em um ambiente de repressão czarista e clandestinidade. Sua estrutura não deve ser interpretada sem considerar essas condições.
                </p>
              </div>

              <div className="bg-stone-900/60 p-3.5 rounded border border-stone-800">
                <strong className="text-amber-300 font-bold block mb-1">
                  Hipótese C — A conquista do poder e a construção do Estado foram processos diferentes.
                </strong>
                <p className="text-stone-300 text-sm">
                  A capacidade de organizar a insurreição de Outubro não significava que os bolcheviques possuíssem um modelo institucional plenamente definido para todos os problemas que surgiriam após a conquista do poder.
                </p>
              </div>

              <div className="bg-stone-900/60 p-3.5 rounded border border-stone-800">
                <strong className="text-amber-300 font-bold block mb-1">
                  Hipótese D — A guerra civil foi decisiva, mas não suficiente para explicar a centralização.
                </strong>
                <p className="text-stone-300 text-sm">
                  O conflito fortaleceu o aparato militar e coercitivo, mas as escolhas políticas realizadas durante e depois da guerra contribuíram para a permanência do monopólio partidário.
                </p>
              </div>

              <div className="bg-stone-900/60 p-3.5 rounded border border-stone-800">
                <strong className="text-amber-300 font-bold block mb-1">
                  Hipótese E — O internacionalismo comunista tornou-se progressivamente condicionado pela política soviética.
                </strong>
                <p className="text-stone-300 text-sm">
                  A Internacional Comunista nasceu como organização revolucionária internacional, mas sua estrutura e suas orientações foram cada vez mais influenciadas pelas prioridades estratégicas do Estado soviético.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. QUESTÕES DE INVESTIGAÇÃO — DESENVOLVIMENTO ANALÍTICO */}
        <div className="bg-[#121214] p-6 rounded-lg border border-stone-800 space-y-6">
          <h3 className="font-serif font-bold text-amber-400 text-lg sm:text-xl border-b border-stone-800 pb-2">
            3. QUESTÕES DE INVESTIGAÇÃO — DESENVOLVIMENTO ANALÍTICO
          </h3>

          <div className="space-y-6">

            {/* QUESTÃO 01 */}
            <div className="border border-stone-800 p-5 rounded-lg bg-stone-900/40 space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                QUESTÃO 01 — EM QUE MEDIDA A COMUNA DE PARIS INFLUENCIOU A CONCEPÇÃO MARXISTA DE ESTADO?
              </h4>
              <div className="space-y-2 text-stone-300 text-sm font-serif">
                <p><strong className="text-stone-100">Contextualização:</strong> A Comuna de Paris foi uma experiência de governo revolucionário estabelecida em 1871, após a derrota francesa na Guerra Franco-Prussiana. Sua organização política chamou a atenção de Marx porque demonstrava a possibilidade de reorganizar as instituições públicas e substituir determinados elementos do aparelho estatal tradicional. Em <em>A Guerra Civil na França</em>, Marx analisou a Comuna como uma experiência política que apresentava características diferentes do Estado burocrático e militar existente na sociedade capitalista. Posteriormente, Lenin retomou a experiência em <em>O Estado e a Revolução</em>.</p>
                <p><strong className="text-stone-100">Problema historiográfico:</strong> A principal questão consiste em determinar se a Comuna deve ser interpretada como modelo institucional para a tradição marxista ou como uma experiência histórica específica posteriormente apropriada por diferentes correntes revolucionárias. Não se deve presumir que a Comuna possuía uma estrutura semelhante à do Estado soviético. Sua composição era plural e suas instituições estavam relacionadas às condições políticas de Paris em 1871.</p>
                <div>
                  <strong className="text-stone-100 block mb-1">Caminhos de investigação:</strong>
                  <ul className="list-disc list-inside pl-2 space-y-0.5">
                    <li>Examinar a organização política da Comuna;</li>
                    <li>Analisar as medidas administrativas e sociais;</li>
                    <li>Comparar a interpretação de Marx com a de Lenin;</li>
                    <li>Investigar as diferenças entre a Comuna e o sistema soviético;</li>
                    <li>Examinar como anarquistas e marxistas incorporaram sua memória.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-100 block mb-1">Fontes fundamentais:</strong>
                  <p className="italic pl-2">MARX, Karl. A Guerra Civil na França (1871).</p>
                  <p className="italic pl-2">LENIN, Vladimir. O Estado e a Revolução (1917).</p>
                  <p className="italic pl-2">TOMBS, Robert. The Paris Commune 1871 (1999).</p>
                  <p className="italic pl-2">ROSS, Kristin. Communal Luxury (2015).</p>
                </div>
                <p><strong className="text-amber-400/90">Questão complementar:</strong> A interpretação marxista da Comuna preservou suas características históricas ou selecionou determinados aspectos para legitimar concepções posteriores de revolução?</p>
              </div>
            </div>

            {/* QUESTÃO 02 */}
            <div className="border border-stone-800 p-5 rounded-lg bg-stone-900/40 space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                QUESTÃO 02 — QUAIS ERAM AS DIFERENÇAS FUNDAMENTAIS ENTRE MARX E BAKUNIN?
              </h4>
              <div className="space-y-2 text-stone-300 text-sm font-serif">
                <p><strong className="text-stone-100">Contextualização:</strong> Marx e Bakunin representaram duas das principais correntes do movimento revolucionário do século XIX. Ambos criticavam as estruturas sociais e políticas existentes, mas divergiam profundamente sobre o Estado, a autoridade e a organização da transformação social. Marx defendia a necessidade de organização política da classe trabalhadora e atribuía importância à conquista do poder político. Bakunin considerava que a centralização estatal poderia produzir uma nova estrutura de dominação, mesmo quando organizada em nome dos trabalhadores.</p>
                <p><strong className="text-stone-100">Problema historiográfico:</strong> A divergência deve ser investigada para além de conflitos pessoais. O ponto central consiste em compreender duas concepções diferentes de emancipação: uma transformação social que envolve a conquista e a reorganização do poder político; e uma transformação social baseada na autonomia das organizações populares e na rejeição do Estado centralizado.</p>
                <div>
                  <strong className="text-stone-100 block mb-1">Caminhos de investigação:</strong>
                  <ul className="list-disc list-inside pl-2 space-y-0.5">
                    <li>Comparar as concepções de Estado;</li>
                    <li>Investigar a relação entre partido e movimento operário;</li>
                    <li>Analisar o papel dos sindicatos;</li>
                    <li>Examinar a disputa no Congresso de Haia de 1872;</li>
                    <li>Investigar a influência posterior das duas tradições.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-100 block mb-1">Fontes fundamentais:</strong>
                  <p className="italic pl-2">MARX, Karl. Manifesto do Partido Comunista (1848).</p>
                  <p className="italic pl-2">MARX, Karl. A Guerra Civil na França (1871).</p>
                  <p className="italic pl-2">BAKUNIN, Mikhail. Estatismo e Anarquia (1873).</p>
                </div>
                <p><strong className="text-amber-400/90">Problema complementar:</strong> A experiência soviética confirmou as preocupações de Bakunin sobre a possibilidade de uma nova elite política revolucionária ou apresentou condições históricas que não poderiam ser previstas no século XIX?</p>
              </div>
            </div>

            {/* QUESTÃO 03 */}
            <div className="border border-stone-800 p-5 rounded-lg bg-stone-900/40 space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                QUESTÃO 03 — POR QUE A SEGUNDA INTERNACIONAL NÃO CONSEGUIU IMPEDIR A ADESÃO DE IMPORTANTES PARTIDOS SOCIALISTAS À PRIMEIRA GUERRA MUNDIAL?
              </h4>
              <div className="space-y-2 text-stone-300 text-sm font-serif">
                <p><strong className="text-stone-100">Contextualização:</strong> A Segunda Internacional havia desenvolvido uma tradição política contrária às guerras entre potências capitalistas. Entretanto, em 1914, importantes partidos socialistas apoiaram os créditos militares de seus governos. O episódio provocou uma crise no internacionalismo socialista.</p>
                <p><strong className="text-stone-100">Problema historiográfico:</strong> É necessário investigar por que a solidariedade internacional dos trabalhadores não foi suficiente para impedir que partidos socialistas priorizassem interesses nacionais. A questão envolve a relação entre identidade de classe, nacionalismo, parlamentarismo, pressão governamental e estratégia política.</p>
                <div>
                  <strong className="text-stone-100 block mb-1">Caminhos de investigação:</strong>
                  <ul className="list-disc list-inside pl-2 space-y-0.5">
                    <li>Examinar as resoluções anteriores a 1914;</li>
                    <li>Analisar a posição da social-democracia alemã;</li>
                    <li>Investigar a atuação de Jean Jaurès e outros dirigentes;</li>
                    <li>Comparar as posições de Lenin, Luxemburg e Kautsky;</li>
                    <li>Examinar o impacto da guerra sobre a unidade socialista.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-100 block mb-1">Fontes fundamentais:</strong>
                  <p className="italic pl-2">LENIN, Vladimir. A Falência da Segunda Internacional (1915).</p>
                  <p className="italic pl-2">LUXEMBURG, Rosa. A Crise da Social-Democracia (1916).</p>
                  <p className="italic pl-2">HAUPT, Georges. Socialism and the Great War (1972).</p>
                </div>
                <p><strong className="text-amber-400/90">Questão complementar:</strong> A crise de 1914 representou uma falência definitiva do internacionalismo socialista ou uma demonstração dos limites organizacionais da Segunda Internacional?</p>
              </div>
            </div>

            {/* QUESTÃO 04 */}
            <div className="border border-stone-800 p-5 rounded-lg bg-stone-900/40 space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                QUESTÃO 04 — A CONCEPÇÃO LENINISTA DE PARTIDO DE VANGUARDA FOI UMA RESPOSTA ÀS CONDIÇÕES RUSSAS OU POSSUÍA PRETENSÕES UNIVERSAIS?
              </h4>
              <div className="space-y-2 text-stone-300 text-sm font-serif">
                <p><strong className="text-stone-100">Contextualização:</strong> Lenin desenvolveu sua concepção de organização revolucionária em um país marcado pela repressão czarista. A clandestinidade, a perseguição política e a dificuldade de organizar movimentos legais influenciaram sua defesa de uma organização disciplinada e centralizada. Em <em>Que Fazer?</em>, de 1902, Lenin argumentou que a organização revolucionária precisava desenvolver uma atuação política que ultrapassasse as reivindicações econômicas imediatas.</p>
                <p><strong className="text-stone-100">Problema historiográfico:</strong> A questão consiste em determinar se o modelo de organização desenvolvido por Lenin foi uma resposta específica às condições russas ou se deveria ser reproduzido em todos os países. Lars T. Lih propõe uma leitura contextualizada de <em>Que Fazer?</em>, destacando a influência da social-democracia europeia sobre o pensamento de Lenin. Essa interpretação questiona a ideia de que a obra tenha representado uma ruptura completa com as tradições socialistas anteriores.</p>
                <div>
                  <strong className="text-stone-100 block mb-1">Caminhos de investigação:</strong>
                  <ul className="list-disc list-inside pl-2 space-y-0.5">
                    <li>Examinar a estrutura do movimento socialista russo;</li>
                    <li>Analisar as condições de clandestinidade;</li>
                    <li>Comparar o pensamento de Lenin com o Partido Social-Democrata alemão;</li>
                    <li>Investigar a divisão entre bolcheviques e mencheviques;</li>
                    <li>Comparar o partido revolucionário anterior a 1917 com o Partido Comunista após a conquista do poder.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-100 block mb-1">Fontes fundamentais:</strong>
                  <p className="italic pl-2">LENIN, Vladimir. Que Fazer? (1902).</p>
                  <p className="italic pl-2">LENIN, Vladimir. Um Passo em Frente, Dois Passos Atrás (1904).</p>
                  <p className="italic pl-2">LIH, Lars T. Lenin Rediscovered (2006).</p>
                </div>
                <p><strong className="text-amber-400/90">Questão complementar:</strong> A transformação do partido revolucionário em estrutura dirigente do Estado representou uma continuidade da organização anterior ou uma mudança qualitativa de sua função política?</p>
              </div>
            </div>

            {/* QUESTÃO 05 */}
            <div className="border border-stone-800 p-5 rounded-lg bg-stone-900/40 space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                QUESTÃO 05 — QUAL FOI O PAPEL DOS SOVIETES NA REVOLUÇÃO DE OUTUBRO?
              </h4>
              <div className="space-y-2 text-stone-300 text-sm font-serif">
                <p><strong className="text-stone-100">Contextualização:</strong> Os sovietes surgiram durante a Revolução de 1905 e reapareceram com grande força em 1917. Eles eram conselhos representativos de trabalhadores e soldados, constituindo espaços de organização e participação política. Após a queda do czarismo, os sovietes passaram a coexistir com o Governo Provisório. A relação entre essas instituições ficou conhecida como duplo poder.</p>
                <p><strong className="text-stone-100">Problema historiográfico:</strong> A questão central consiste em determinar se os sovietes foram instrumentos autônomos de mobilização popular, instituições progressivamente influenciadas pelos bolcheviques ou estruturas que desempenharam funções diferentes conforme o momento revolucionário. É necessário evitar duas simplificações: considerar os sovietes apenas instrumentos do Partido Bolchevique ou tratá-los como instituições completamente independentes das disputas partidárias.</p>
                <div>
                  <strong className="text-stone-100 block mb-1">Caminhos de investigação:</strong>
                  <ul className="list-disc list-inside pl-2 space-y-0.5">
                    <li>Investigar a origem dos sovietes em 1905;</li>
                    <li>Examinar sua reorganização em fevereiro de 1917;</li>
                    <li>Analisar a composição política dos conselhos;</li>
                    <li>Investigar a crescente influência bolchevique;</li>
                    <li>Examinar o Comitê Militar Revolucionário;</li>
                    <li>Comparar a legitimidade dos sovietes com a Assembleia Constituinte.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-100 block mb-1">Fontes fundamentais:</strong>
                  <p className="italic pl-2">RABINOWITCH, Alexander. The Bolsheviks Come to Power (1976).</p>
                  <p className="italic pl-2">FITZPATRICK, Sheila. The Russian Revolution (1982).</p>
                  <p className="italic pl-2">SMITH, S. A. Russia in Revolution (2017).</p>
                </div>
                <p><strong className="text-amber-400/90">Questão complementar:</strong> Os sovietes preservaram sua autonomia depois da tomada do poder ou foram progressivamente subordinados à estrutura partidária?</p>
              </div>
            </div>

            {/* QUESTÃO 06 */}
            <div className="border border-stone-800 p-5 rounded-lg bg-stone-900/40 space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                QUESTÃO 06 — A DISSOLUÇÃO DA ASSEMBLEIA CONSTITUINTE REPRESENTOU UMA RUPTURA DECISIVA COM O PLURALISMO POLÍTICO?
              </h4>
              <div className="space-y-2 text-stone-300 text-sm font-serif">
                <p><strong className="text-stone-100">Contextualização:</strong> Após a Revolução de Outubro, foram realizadas eleições para a Assembleia Constituinte. Os bolcheviques não obtiveram a maioria, enquanto os socialistas revolucionários conquistaramm uma representação expressiva. Em janeiro de 1918, a Assembleia foi dissolvida depois de sua primeira sessão. A decisão representou um momento decisivo na organização política do novo regime.</p>
                <p><strong className="text-stone-100">Problema historiográfico:</strong> A questão envolve diferentes concepções de legitimidade revolucionária. Os bolcheviques defendiam que os sovietes representavam uma forma superior de poder revolucionário. Seus adversários consideravam que a dissolução da Assembleia eliminava uma instituição representativa eleita nacionalmente. É necessário investigar se a decisão representou uma medida excepcional, uma consequência das disputas revolucionárias ou um passo fundamental na consolidação do monopólio partidário.</p>
                <div>
                  <strong className="text-stone-100 block mb-1">Caminhos de investigação:</strong>
                  <ul className="list-disc list-inside pl-2 space-y-0.5">
                    <li>Examinar os resultados eleitorais;</li>
                    <li>Analisar a composição da Assembleia;</li>
                    <li>Investigar os argumentos apresentados pelos bolcheviques;</li>
                    <li>Comparar a legitimidade eleitoral e a legitimidade soviética;</li>
                    <li>Estudar as consequências institucionais da dissolução.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-100 block mb-1">Fontes fundamentais:</strong>
                  <p className="italic pl-2">LENIN, Vladimir. Textos políticos de 1917–1918.</p>
                  <p className="italic pl-2">LUXEMBURG, Rosa. A Revolução Russa (1918).</p>
                  <p className="italic pl-2">FITZPATRICK, Sheila. The Russian Revolution.</p>
                </div>
                <p><strong className="text-amber-400/90">Questão complementar:</strong> A dissolução da Assembleia foi uma decisão isolada ou inaugurou uma transformação duradoura na relação entre partido, Estado e representação política?</p>
              </div>
            </div>

            {/* QUESTÃO 07 */}
            <div className="border border-stone-800 p-5 rounded-lg bg-stone-900/40 space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                QUESTÃO 07 — ATÉ QUE PONTO A GUERRA CIVIL EXPLICA A FORMAÇÃO DO REGIME DE PARTIDO ÚNICO?
              </h4>
              <div className="space-y-2 text-stone-300 text-sm font-serif">
                <p><strong className="text-stone-100">Contextualização:</strong> Entre 1918 e 1921, a Rússia enfrentou uma guerra civil que envolveu forças antibolcheviques, intervenções estrangeiras, movimentos nacionalistas e revoltas camponesas. O governo bolchevique respondeu com a centralização das estruturas militares, econômicas e administrativas. A Cheka ampliou sua atuação e o Terror Vermelho tornou-se parte da experiência política do período.</p>
                <p><strong className="text-stone-100">Problema historiográfico:</strong> A guerra civil é indispensável para compreender a formação do Estado soviético, mas não pode ser utilizada como explicação automática para todas as medidas adotadas pelo governo. É necessário distinguir: medidas diretamente relacionadas às necessidades militares; decisões destinadas a eliminar adversários políticos; transformações institucionais que permaneceram depois do conflito; medidas econômicas emergenciais; e estruturas de poder que se tornaram permanentes.</p>
                <div>
                  <strong className="text-stone-100 block mb-1">Caminhos de investigação:</strong>
                  <ul className="list-disc list-inside pl-2 space-y-0.5">
                    <li>Examinar a criação da Cheka;</li>
                    <li>Investigar a dissolução da Assembleia Constituinte;</li>
                    <li>Analisar a política do Comunismo de Guerra;</li>
                    <li>Estudar a repressão política;</li>
                    <li>Investigar a revolta de Kronstadt;</li>
                    <li>Comparar o período de guerra civil com a NEP.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-100 block mb-1">Fontes fundamentais:</strong>
                  <p className="italic pl-2">FITZPATRICK, Sheila. The Russian Revolution.</p>
                  <p className="italic pl-2">FIGES, Orlando. A People's Tragedy (1996).</p>
                  <p className="italic pl-2">GETTY, J. Arch; NAUMOV, Oleg V. The Road to Terror (1999).</p>
                  <p className="italic pl-2">SMITH, S. A. Russia in Revolution (2017).</p>
                </div>
                <p><strong className="text-amber-400/90">Questão complementar:</strong> Quais instituições coercitivas poderiam ter sido desmobilizadas após a guerra civil e quais foram preservadas ou ampliadas?</p>
              </div>
            </div>

            {/* QUESTÃO 08 */}
            <div className="border border-stone-800 p-5 rounded-lg bg-stone-900/40 space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                QUESTÃO 08 — COMO ROSA LUXEMBURG E KARL KAUTSKY INTERPRETARAM A EXPERIÊNCIA BOLCHEVIQUE?
              </h4>
              <div className="space-y-2 text-stone-300 text-sm font-serif">
                <p><strong className="text-stone-100">Contextualização:</strong> A Revolução de Outubro provocou uma divisão dentro do próprio movimento marxista. Rosa Luxemburg reconheceu a importância histórica da revolução, mas criticou a restrição das liberdades políticas e os riscos de uma direção excessivamente concentrada. Karl Kautsky também questionou a identificação entre ditadura do proletariado e monopólio político de um partido.</p>
                <p><strong className="text-stone-100">Problema historiográfico:</strong> A questão consiste em compreender como diferentes correntes marxistas interpretavam a relação entre democracia e revolução. Luxemburg e Kautsky não possuíam posições idênticas. Suas críticas devem ser examinadas individualmente, considerando suas concepções de democracia, socialismo e organização política.</p>
                <div>
                  <strong className="text-stone-100 block mb-1">Caminhos de investigação:</strong>
                  <ul className="list-disc list-inside pl-2 space-y-0.5">
                    <li>Comparar os textos de Luxemburg e Kautsky;</li>
                    <li>Examinar suas críticas ao governo bolchevique;</li>
                    <li>Analisar a resposta de Lenin;</li>
                    <li>Investigar a diferença entre ditadura de classe e ditadura partidária;</li>
                    <li>Examinar a recepção dessas críticas pelo movimento comunista internacional.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-100 block mb-1">Fontes fundamentais:</strong>
                  <p className="italic pl-2">LUXEMBURG, Rosa. A Revolução Russa (1918).</p>
                  <p className="italic pl-2">KAUTSKY, Karl. A Ditadura do Proletariado (1918).</p>
                  <p className="italic pl-2">LENIN, Vladimir. A Revolução Proletária e o Renegado Kautsky (1918).</p>
                </div>
                <p><strong className="text-amber-400/90">Questão complementar:</strong> As críticas de Luxemburg e Kautsky podem ser compreendidas como uma defesa de outra forma de socialismo revolucionário?</p>
              </div>
            </div>

            {/* QUESTÃO 09 */}
            <div className="border border-stone-800 p-5 rounded-lg bg-stone-900/40 space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                QUESTÃO 09 — A INTERNACIONAL COMUNISTA PRESERVOU SUA AUTONOMIA OU TORNOU-SE PROGRESSIVAMENTE SUBORDINADA AOS INTERESSES SOVIÉTICOS?
              </h4>
              <div className="space-y-2 text-stone-300 text-sm font-serif">
                <p><strong className="text-stone-100">Contextualização:</strong> Fundada em 1919, a Internacional Comunista pretendia organizar a revolução mundial e coordenar partidos comunistas de diferentes países. Entretanto, sua estrutura foi progressivamente influenciada pela experiência soviética. As 21 Condições de 1920 estabeleceram critérios rigorosos de adesão, enquanto a bolchevização fortaleceu a centralização organizacional. Durante a década de 1930, as mudanças de estratégia da organização passaram a refletir também as necessidades políticas e diplomáticas da União Soviética.</p>
                <p><strong className="text-stone-100">Problema historiográfico:</strong> É necessário investigar como se desenvolveu a relação entre internacionalismo revolucionário e política externa soviética. Não se deve presumir que todos os partidos comunistas possuíam a mesma margem de autonomia, nem que a Internacional controlava de maneira idêntica todas as organizações nacionais. A pesquisa deve considerar diferenças entre países, períodos e dirigentes.</p>
                <div>
                  <strong className="text-stone-100 block mb-1">Caminhos de investigação:</strong>
                  <ul className="list-disc list-inside pl-2 space-y-0.5">
                    <li>Examinar as 21 Condições;</li>
                    <li>Estudar o processo de bolchevização;</li>
                    <li>Comparar a estratégia do Terceiro Período com as Frentes Populares;</li>
                    <li>Investigar as relações entre Moscou e os partidos nacionais;</li>
                    <li>Examinar a atuação da Internacional na Guerra Civil Espanhola;</li>
                    <li>Investigar os expurgos de comunistas estrangeiros;</li>
                    <li>Analizar a dissolução de 1943.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-100 block mb-1">Fontes fundamentais:</strong>
                  <p className="italic pl-2">MCDERMOTT, Kevin; AGNEW, Jeremy. The Comintern (1996).</p>
                  <p className="italic pl-2">PONS, Silvio. The Global Revolution (2014).</p>
                  <p className="italic pl-2">STUDER, Brigitte. The Transnational World of the Cominternians (2015).</p>
                  <p className="italic pl-2">BROUÉ, Pierre. Histoire de l'Internationale communiste (1997).</p>
                </div>
                <p><strong className="text-amber-400/90">Questão complementar:</strong> A Internacional Comunista foi progressivamente transformada em instrumento de política externa soviética ou preservou espaços importantes de iniciativa própria?</p>
              </div>
            </div>

            {/* QUESTÃO 10 */}
            <div className="border border-stone-800 p-5 rounded-lg bg-stone-900/40 space-y-3">
              <h4 className="font-serif font-bold text-amber-300 text-base sm:text-lg">
                QUESTÃO 10 — COMO A ABERTURA DOS ARQUIVOS SOVIÉTICOS MODIFICOU A HISTORIOGRAFIA SOBRE ESSE PERÍODO?
              </h4>
              <div className="space-y-2 text-stone-300 text-sm font-serif">
                <p><strong className="text-stone-100">Contextualização:</strong> Durante a existência da União Soviética, o acesso de pesquisadores estrangeiros a determinados arquivos era limitado. A interpretação oficial da história soviética também estava submetida a restrições políticas e ideológicas. Após o fim da União Soviética, a abertura parcial de arquivos permitiu novas investigações sobre o funcionamento das instituições, as decisões da liderança e os mecanismos de repressão.</p>
                <p><strong className="text-stone-100">Problema historiográfico:</strong> A abertura documental modificou a historiografia, mas não tornou automaticamente todas as interpretações anteriores inválidas. O trabalho histórico continua dependendo da crítica das fontes, da contextualização documental e da comparação entre diferentes evidências. Os arquivos também apresentam limitações: documentos preservados não representam necessariamente toda a realidade histórica, e sua produção estava relacionada às próprias instituições que os criaram.</p>
                <div>
                  <strong className="text-stone-100 block mb-1">Caminhos de investigação:</strong>
                  <ul className="list-disc list-inside pl-2 space-y-0.5">
                    <li>Comparar estudos anteriores e posteriores a 1991;</li>
                    <li>Examinar documentos do Partido Comunista;</li>
                    <li>Investigar arquivos de segurança e repressão;</li>
                    <li>Estudar a correspondência entre dirigentes;</li>
                    <li>Analisar documentos da Internacional Comunista;</li>
                    <li>Comparar arquivos com memórias, testemunhos e imprensa;</li>
                    <li>Investigar como novas evidências alteraram interpretações sobre Lenin e Stalin.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-stone-100 block mb-1">Pesquisadores fundamentais:</strong>
                  <p className="pl-2"><strong className="text-stone-200">SHEILA FITZPATRICK</strong> — história social e transformações da sociedade soviética.</p>
                  <p className="pl-2"><strong className="text-stone-200">J. ARCH GETTY</strong> — instituições políticas e documentação soviética.</p>
                  <p className="pl-2"><strong className="text-stone-200">OLEG KHLEVNIUK</strong> — funcionamento do poder stalinista e arquivos soviéticos.</p>
                  <p className="pl-2"><strong className="text-stone-200">STEPHEN KOTKIN</strong> — Estado soviético, Stalin e história política.</p>
                  <p className="pl-2"><strong className="text-stone-200">ALEXANDER RABINOWITCH</strong> — dinâmica política da Revolução Russa.</p>
                </div>
                <p><strong className="text-amber-400/90">Questão complementar:</strong> A abertura dos arquivos produziu uma ruptura metodológica na historiografia ou aprofundou tendências de pesquisa que já existiam?</p>
              </div>
            </div>

          </div>
        </div>

        {/* 4. METODOLOGIA DE INVESTIGAÇÃO */}
        <div className="bg-[#121214] p-6 rounded-lg border border-stone-800 space-y-5">
          <h3 className="font-serif font-bold text-amber-400 text-lg sm:text-xl border-b border-stone-800 pb-2">
            4. METODOLOGIA DE INVESTIGAÇÃO
          </h3>

          <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
            A pesquisa sobre o comunismo revolucionário exige uma metodologia capaz de combinar história política, história social, história intelectual e análise institucional.
          </p>
          <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
            Não basta estudar os discursos dos dirigentes. É necessário investigar como suas ideias foram transformadas em decisões políticas, estruturas administrativas e práticas de governo.
          </p>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-200 text-base">
              4.1 Análise das fontes primárias
            </h4>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              As fontes primárias devem ser examinadas considerando:
            </p>
            <ul className="list-disc list-inside font-serif text-stone-300 space-y-1 pl-2">
              <li>Quem produziu o documento;</li>
              <li>Em qual contexto foi produzido;</li>
              <li>Qual era seu objetivo;</li>
              <li>Quem era seu destinatário;</li>
              <li>Quais interesses políticos estavam envolvidos;</li>
              <li>Qual era sua relação com as práticas institucionais;</li>
              <li>Quais limitações apresenta como evidência histórica.</li>
            </ul>
            <p className={`font-serif text-stone-300 leading-relaxed pt-1 ${getFontSizeClass('body')}`}>
              Discursos revolucionários, programas partidários e documentos oficiais não devem ser tratados como descrições neutras da realidade. Eles também constituem instrumentos de disputa política.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-200 text-base">
              4.2 Comparação historiográfica
            </h4>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              A pesquisa deve confrontar interpretações de diferentes historiadores.
            </p>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              Por exemplo, a Revolução de Outubro pode ser estudada a partir das interpretações de:
            </p>
            <ul className="list-disc list-inside font-serif text-stone-300 space-y-1 pl-2">
              <li>Alexander Rabinowitch;</li>
              <li>Sheila Fitzpatrick;</li>
              <li>Orlando Figes;</li>
              <li>Richard Pipes;</li>
              <li>S. A. Smith.</li>
            </ul>
            <p className={`font-serif text-stone-300 leading-relaxed pt-1 ${getFontSizeClass('body')}`}>
              O objetivo não é escolher previamente um historiador como autoridade absoluta, mas identificar as diferenças de método, documentação e interpretação.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-200 text-base">
              4.3 Distinção entre teoria e prática
            </h4>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              Um dos principais cuidados metodológicos consiste em não confundir:
            </p>
            <ul className="list-disc list-inside font-serif text-stone-300 space-y-1 pl-2">
              <li>O pensamento de Marx com o Estado soviético;</li>
              <li>A concepção de Lenin em 1902 com todas as instituições posteriores;</li>
              <li>A ditadura do proletariado como conceito teórico com o monopólio político do Partido Comunista;</li>
              <li>O internacionalismo revolucionário com a política externa soviética;</li>
              <li>A experiência da Comuna com a organização do governo bolchevique.</li>
            </ul>
            <p className={`font-serif text-stone-300 leading-relaxed pt-1 ${getFontSizeClass('body')}`}>
              Essas distinções são indispensáveis para evitar anacronismos e generalizações.
            </p>
          </div>
        </div>

        {/* 5. MATRIZ DE PESQUISA: FONTES E AUTORES */}
        <div className="bg-[#121214] p-6 rounded-lg border border-stone-800 space-y-4 overflow-x-auto">
          <h3 className="font-serif font-bold text-amber-400 text-lg sm:text-xl border-b border-stone-800 pb-2">
            5. MATRIZ DE PESQUISA: FONTES E AUTORES
          </h3>

          <table className="w-full text-left font-serif text-sm text-stone-300 border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-stone-700 bg-stone-900/80 text-amber-300 font-bold">
                <th className="p-3 border border-stone-800">Eixo de investigação</th>
                <th className="p-3 border border-stone-800">Fontes primárias</th>
                <th className="p-3 border border-stone-800">Historiadores e pesquisadores</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-800 hover:bg-stone-900/40">
                <td className="p-3 border border-stone-800 font-semibold text-stone-200">Comuna de Paris</td>
                <td className="p-3 border border-stone-800">Marx, <em>A Guerra Civil na França</em></td>
                <td className="p-3 border border-stone-800">Robert Tombs, Kristin Ross, Carolyn Eichner</td>
              </tr>
              <tr className="border-b border-stone-800 hover:bg-stone-900/40">
                <td className="p-3 border border-stone-800 font-semibold text-stone-200">Marxismo e anarquismo</td>
                <td className="p-3 border border-stone-800">Marx, Bakunin, documentos da Primeira Internacional</td>
                <td className="p-3 border border-stone-800">Wolfgang Eckhardt, Georges Haupt</td>
              </tr>
              <tr className="border-b border-stone-800 hover:bg-stone-900/40">
                <td className="p-3 border border-stone-800 font-semibold text-stone-200">Segunda Internacional</td>
                <td className="p-3 border border-stone-800">Resoluções socialistas e textos de Lenin, Luxemburg e Bernstein</td>
                <td className="p-3 border border-stone-800">Georges Haupt, Julius Braunthal</td>
              </tr>
              <tr className="border-b border-stone-800 hover:bg-stone-900/40">
                <td className="p-3 border border-stone-800 font-semibold text-stone-200">Partido de vanguarda</td>
                <td className="p-3 border border-stone-800">Lenin, <em>Que Fazer?</em></td>
                <td className="p-3 border border-stone-800">Lars T. Lih, Robert Service</td>
              </tr>
              <tr className="border-b border-stone-800 hover:bg-stone-900/40">
                <td className="p-3 border border-stone-800 font-semibold text-stone-200">Revolução de Outubro</td>
                <td className="p-3 border border-stone-800">Documentos dos sovietes e do Partido Bolchevique</td>
                <td className="p-3 border border-stone-800">Alexander Rabinowitch, Sheila Fitzpatrick</td>
              </tr>
              <tr className="border-b border-stone-800 hover:bg-stone-900/40">
                <td className="p-3 border border-stone-800 font-semibold text-stone-200">Guerra Civil Russa</td>
                <td className="p-3 border border-stone-800">Documentos governamentais, militares e partidários</td>
                <td className="p-3 border border-stone-800">Orlando Figes, S. A. Smith, E. H. Carr</td>
              </tr>
              <tr className="border-b border-stone-800 hover:bg-stone-900/40">
                <td className="p-3 border border-stone-800 font-semibold text-stone-200">Ditadura do proletariado</td>
                <td className="p-3 border border-stone-800">Marx, Lenin, Luxemburg e Kautsky</td>
                <td className="p-3 border border-stone-800">Leszek Kołakowski, François Furet</td>
              </tr>
              <tr className="border-b border-stone-800 hover:bg-stone-900/40">
                <td className="p-3 border border-stone-800 font-semibold text-stone-200">Internacional Comunista</td>
                <td className="p-3 border border-stone-800">21 Condições, resoluções e correspondência da Komintern</td>
                <td className="p-3 border border-stone-800">Pierre Broué, Silvio Pons, Brigitte Studer</td>
              </tr>
              <tr className="border-b border-stone-800 hover:bg-stone-900/40">
                <td className="p-3 border border-stone-800 font-semibold text-stone-200">Estado soviético</td>
                <td className="p-3 border border-stone-800">Documentação partidária e estatal</td>
                <td className="p-3 border border-stone-800">Oleg Khlevniuk, J. Arch Getty, Stephen Kotkin</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 6. OBJETIVOS DA INVESTIGAÇÃO */}
        <div className="bg-[#121214] p-6 rounded-lg border border-stone-800 space-y-5">
          <h3 className="font-serif font-bold text-amber-400 text-lg sm:text-xl border-b border-stone-800 pb-2">
            6. OBJETIVOS DA INVESTIGAÇÃO
          </h3>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-200 text-base">
              Objetivo geral
            </h4>
            <p className={`font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}>
              Investigar a transformação histórica do movimento socialista internacional entre 1871 e 1945, analisando a formação do partido revolucionário centralizado, a experiência bolchevique de conquista do poder e a consolidação das estruturas políticas do Estado soviético e da Internacional Comunista.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-200 text-base">
              Objetivos específicos
            </h4>
            <ol className="space-y-1.5 font-serif text-stone-300 list-decimal list-inside pl-2">
              <li>Compreender a importância histórica da Comuna de Paris.</li>
              <li>Investigar as divergências entre marxismo e anarquismo.</li>
              <li>Examinar a formação e a crise das Internacionais socialistas.</li>
              <li>Analisar a concepção leninista de organização revolucionária.</li>
              <li>Investigar a dinâmica política e social da Revolução Russa.</li>
              <li>Examinar a transformação dos sovietes e a formação do Estado soviético.</li>
              <li>Analisar as relações entre ditadura do proletariado, democracia e partido único.</li>
              <li>Investigar o papel da guerra civil na centralização política.</li>
              <li>Compreender a formação e a trajetória da Internacional Comunista.</li>
              <li>Avaliar as transformações historiográficas decorrentes da abertura dos arquivos soviéticos.</li>
            </ol>
          </div>
        </div>

        {/* 7. RESULTADOS ESPERADOS */}
        <div className="bg-[#121214] p-6 rounded-lg border border-stone-800 space-y-4">
          <h3 className="font-serif font-bold text-amber-400 text-lg sm:text-xl border-b border-stone-800 pb-2">
            7. RESULTADOS ESPERADOS
          </h3>
          <p className="font-serif text-stone-300 leading-relaxed">
            Ao final da investigação, o pesquisador deverá ser capaz de explicar:
          </p>
          <ul className="space-y-1.5 font-serif text-stone-300 list-disc list-inside pl-2">
            <li>Por que o socialismo do século XIX era politicamente plural;</li>
            <li>Como surgiram as principais divergências sobre Estado e revolução;</li>
            <li>Por que a Revolução Russa alterou a organização do comunismo mundial;</li>
            <li>Como os bolcheviques transformaram uma organização revolucionária em direção estatal;</li>
            <li>Quais foram as consequências da guerra civil para as instituições soviéticas;</li>
            <li>Como a restrição do pluralismo político se desenvolveu;</li>
            <li>Por que existiram críticas marxistas ao modelo bolchevique;</li>
            <li>Como a Internacional Comunista modificou sua estratégia;</li>
            <li>De que maneira os interesses soviéticos influenciaram o comunismo internacional;</li>
            <li>Como a historiografia contemporânea investiga essas transformações.</li>
          </ul>
        </div>

        {/* 8. SÍNTESE INTERPRETATIVA FINAL */}
        <div className="bg-[#121214] p-6 rounded-lg border border-stone-800 space-y-4">
          <h3 className="font-serif font-bold text-amber-400 text-lg sm:text-xl border-b border-stone-800 pb-2">
            8. SÍNTESE INTERPRETATIVA FINAL
          </h3>
          <div className={`font-serif text-stone-300 text-justify leading-relaxed space-y-4 ${getFontSizeClass('body')}`}>
            <p>
              O período de 1871 a 1945 revela uma transformação decisiva na história do socialismo internacional.
            </p>
            <p>
              A experiência da Comuna de Paris, as disputas entre marxistas e anarquistas, o crescimento dos partidos socialistas e a crise provocada pela Primeira Guerra Mundial constituíram antecedentes fundamentais da Revolução Russa.
            </p>
            <p>
              A conquista do poder pelos bolcheviques modificou a relação entre movimento revolucionário, partido e Estado. O partido que havia sido organizado para enfrentar a autocracia czarista tornou-se a principal estrutura de direção do novo regime.
            </p>
            <p>
              A guerra civil intensificou esse processo, mas não elimina a necessidade de investigar as decisões políticas que contribuíram para a formação do sistema de partido único.
            </p>
            <p>
              A experiência soviética também transformou o internacionalismo comunista. A Internacional Comunista procurou organizar a revolução mundial, mas sua trajetória foi progressivamente condicionada pela política do Estado soviético.
            </p>
            <p>
              A questão fundamental que atravessa toda esta investigação é a tensão entre emancipação e autoridade: como uma tradição política que reivindicava a libertação dos trabalhadores desenvolveu instituições nas quais a direção partidária passou a concentrar progressivamente o poder?
            </p>
            <p className="font-semibold text-amber-200/90 pt-1">
              Responder a essa questão exige compreender não apenas as ideias dos revolucionários, mas também suas decisões, as condições históricas em que atuaram e as instituições que ajudaram a construir.
            </p>
          </div>
        </div>

        {/* REFERÊNCIAS FUNDAMENTAIS DO DOSSIÊ */}
        <div className="bg-[#121214] p-6 rounded-lg border border-stone-800 space-y-4">
          <h3 className="font-serif font-bold text-amber-400 text-lg sm:text-xl border-b border-stone-800 pb-2">
            REFERÊNCIAS FUNDAMENTAIS DO DOSSIÊ
          </h3>
          <ul className="space-y-2 font-serif text-stone-300 text-sm leading-relaxed">
            <li>ARENDT, Hannah. <em>The Origins of Totalitarianism</em>. New York: Harcourt, 1951.</li>
            <li>BROUÉ, Pierre. <em>Histoire de l'Internationale communiste, 1919–1943</em>. Paris: Fayard, 1997.</li>
            <li>CARR, E. H. <em>The Bolshevik Revolution, 1917–1923</em>. London: Macmillan, 1950–1953.</li>
            <li>FITZPATRICK, Sheila. <em>The Russian Revolution</em>. Oxford: Oxford University Press, 1982.</li>
            <li>FIGES, Orlando. <em>A People's Tragedy: The Russian Revolution, 1891–1924</em>. London: Jonathan Cape, 1996.</li>
            <li>FURET, François. <em>Le Passé d'une illusion</em>. Paris: Robert Laffont/Calmann-Lévy, 1995.</li>
            <li>GETTY, J. Arch; NAUMOV, Oleg V. <em>The Road to Terror</em>. New Haven: Yale University Press, 1999.</li>
            <li>HAUPT, Georges. <em>Socialism and the Great War</em>. Oxford: Clarendon Press, 1972.</li>
            <li>KHLEVNIUK, Oleg V. <em>Stalin: New Biography of a Dictator</em>. New Haven: Yale University Press, 2015.</li>
            <li>KOŁAKOWSKI, Leszek. <em>Main Currents of Marxism</em>. Oxford: Oxford University Press, 1978.</li>
            <li>LIH, Lars T. <em>Lenin Rediscovered: What Is to Be Done? in Context</em>. Leiden: Brill, 2006.</li>
            <li>MCDERMOTT, Kevin; AGNEW, Jeremy. <em>The Comintern: A History of International Communism from Lenin to Stalin</em>. London: Macmillan, 1996.</li>
            <li>PONS, Silvio. <em>The Global Revolution: A History of International Communism 1917–1991</em>. Oxford: Oxford University Press, 2014.</li>
            <li>RABINOWITCH, Alexander. <em>The Bolsheviks Come to Power</em>. New York: W. W. Norton, 1976.</li>
            <li>ROSS, Kristin. <em>Communal Luxury</em>. London: Verso, 2015.</li>
            <li>SMITH, S. A. <em>Russia in Revolution: An Empire in Crisis, 1890 to 1928</em>. Oxford: Oxford University Press, 2017.</li>
            <li>STUDER, Brigitte. <em>The Transnational World of the Cominternians</em>. London: Palgrave Macmillan, 2015.</li>
            <li>TOMBS, Robert. <em>The Paris Commune 1871</em>. London: Longman, 1999.</li>
          </ul>
        </div>

      </section>

    </article>
  );
};
