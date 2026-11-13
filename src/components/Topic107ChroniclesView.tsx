import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

interface Chronicle {
  id: string;
  num: string;
  title: string;
  fullHeading: string;
  paragraphs: string[];
}

export const Topic107ChroniclesView: React.FC<Props> = ({ getFontSizeClass }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const chronicles: Chronicle[] = [
    {
      id: 'cronica-1',
      num: 'CRÔNICA I',
      title: 'A NAÇÃO QUE VOLTOU DA GUERRA (1918–1919)',
      fullHeading: 'CRÔNICA I — A NAÇÃO QUE VOLTOU DA GUERRA (1918–1919)',
      paragraphs: [
        'Em novembro de 1918, a Primeira Guerra Mundial chegou ao fim para a Itália.',
        'O país estava entre os vencedores, mas a vitória não significava estabilidade. Milhões de homens haviam sido mobilizados, a economia enfrentava dificuldades de reconversão e a sociedade estava profundamente marcada pela experiência militar.',
        'Os soldados retornavam a uma realidade diferente daquela que haviam deixado.',
        'O desemprego, a inflação e as dificuldades de reintegração social alimentavam a insatisfação. Nas cidades industriais, os trabalhadores exigiam melhores condições de vida. Nas áreas rurais, as mobilizações por salários e acesso à terra ganhavam força.',
        'A vitória militar também produziu frustração política.',
        'Setores nacionalistas afirmavam que a Itália havia sido privada dos frutos de seu sacrifício. A expressão vitória mutilada tornou-se um símbolo dessa insatisfação.',
        'O país que havia participado de uma guerra de proporções extraordinárias não conseguia encontrar estabilidade em sua própria vitória.',
        'Em meio à crise, Benito Mussolini procurava construir uma nova organização política.',
        'Em março de 1919, em Milão, reuniu antigos intervencionistas, ex-combatentes e militantes nacionalistas.',
        'Os Fasci Italiani di Combattimento ainda eram uma organização pequena e politicamente heterogênea.',
        'Seu futuro permanecia incerto.'
      ]
    },
    {
      id: 'cronica-2',
      num: 'CRÔNICA II',
      title: 'AS FÁBRICAS OCUPADAS (1919–1920)',
      fullHeading: 'CRÔNICA II — AS FÁBRICAS OCUPADAS (1919–1920)',
      paragraphs: [
        'A Itália do pós-guerra tornou-se palco de uma intensa mobilização popular.',
        'Greves, manifestações e ocupações de fábricas modificaram o cotidiano das cidades industriais.',
        'Os trabalhadores procuravam ampliar sua influência sobre as condições de produção e demonstravam disposição para enfrentar os empresários.',
        'As organizações socialistas e sindicais conquistaram força em diferentes regiões.',
        'O medo de uma revolução socialista tornou-se um elemento importante da política nacional.',
        'Para os proprietários rurais e industriais, a mobilização operária representava uma ameaça à propriedade e à autoridade empresarial.',
        'A sociedade italiana passou a viver uma intensa polarização.',
        'A experiência russa de 1917 influenciava parte dos militantes revolucionários, enquanto setores conservadores utilizavam a possibilidade de uma revolução bolchevique como justificativa para a repressão.',
        'O fascismo começou a encontrar espaço nesse ambiente.',
        'Seus militantes apresentavam-se como defensores da ordem nacional, mas utilizavam métodos que estavam longe de qualquer prática política democrática.'
      ]
    },
    {
      id: 'cronica-3',
      num: 'CRÔNICA III',
      title: 'A VIOLÊNCIA DOS CAMISAS-NEGRAS (1921)',
      fullHeading: 'CRÔNICA III — A VIOLÊNCIA DOS CAMISAS-NEGRAS (1921)',
      paragraphs: [
        'Em diferentes regiões da Itália, grupos armados fascistas passaram a atacar organizações adversárias.',
        'As expedições punitivas atingiam sedes sindicais, jornais, cooperativas e administrações municipais.',
        'Os ataques não eram acontecimentos isolados.',
        'Em diversas localidades, as squadre fascistas organizavam operações destinadas a destruir a presença socialista.',
        'A violência produzia efeitos que ultrapassavam as vítimas imediatas.',
        'Trabalhadores deixavam de participar de reuniões, dirigentes abandonavam suas funções e organizações inteiras perdiam capacidade de funcionamento.',
        'Os proprietários que apoiavam os fascistas viam nas ações dos esquadristas um instrumento de combate ao movimento operário.',
        'As autoridades, em muitos casos, não reagiam com a mesma intensidade utilizada contra as organizações socialistas.',
        'A violência fascista encontrava, assim, condições para se expandir.',
        'O movimento crescia não apenas por sua capacidade de convencer, mas também por sua capacidade de intimidar.'
      ]
    },
    {
      id: 'cronica-4',
      num: 'CRÔNICA IV',
      title: 'A MARCHA SOBRE ROMA (OUTUBRO DE 1922)',
      fullHeading: 'CRÔNICA IV — A MARCHA SOBRE ROMA (OUTUBRO DE 1922)',
      paragraphs: [
        'No final de outubro de 1922, os fascistas decidiram transformar sua força política e paramilitar em poder governamental.',
        'Grupos armados concentraram-se em diferentes regiões e avançaram em direção à capital.',
        'A operação ficou conhecida como Marcha sobre Roma.',
        'Os fascistas não possuíam capacidade militar para derrotar isoladamente todo o exército italiano.',
        'O destino da mobilização dependia da decisão das autoridades do Estado.',
        'O governo de Luigi Facta procurou obter autorização para decretar o estado de sítio.',
        'Entretanto, o rei Vitor Emanuel III recusou-se a assinar o decreto.',
        'A decisão alterou completamente o curso dos acontecimentos.',
        'Mussolini foi convidado a formar um novo governo.',
        'Em 30 de outubro de 1922, tornou-se primeiro-ministro.',
        'A Marcha sobre Roma transformou-se posteriormente no mito fundador do regime.',
        'A propaganda fascista apresentou o acontecimento como uma vitória revolucionária inevitável.',
        'A história, entretanto, revela uma realidade mais complexa: a ameaça de violência foi decisiva, mas a decisão da monarquia abriu o caminho institucional para a chegada de Mussolini ao governo.'
      ]
    },
    {
      id: 'cronica-5',
      num: 'CRÔNICA V',
      title: 'O SEQUESTRO DE MATTEOTTI (1924)',
      fullHeading: 'CRÔNICA V — O SEQUESTRO DE MATTEOTTI (1924)',
      paragraphs: [
        'Em maio de 1924, Giacomo Matteotti denunciou no Parlamento as irregularidades e a violência que haviam marcado as eleições.',
        'Sua atuação representava uma ameaça política ao governo fascista.',
        'Em 10 de junho, foi sequestrado por homens ligados ao ambiente fascista.',
        'O desaparecimento do deputado provocou uma crise nacional.',
        'Seu corpo foi encontrado posteriormente.',
        'O assassinato revelou a dimensão da violência política que acompanhava a consolidação do fascismo.',
        'A oposição parlamentar abandonou a Câmara na tentativa de pressionar o rei a intervir.',
        'Entretanto, a monarquia não afastou Mussolini.',
        'A crise, que poderia ter provocado a queda do governo, acabou sendo utilizada pelo próprio regime para aprofundar a repressão.',
        'Em janeiro de 1925, Mussolini anunciou uma nova etapa da política fascista.',
        'A democracia parlamentar seria progressivamente destruída.'
      ]
    },
    {
      id: 'cronica-6',
      num: 'CRÔNICA VI',
      title: 'O ESTADO FASCISTA (1925–1926)',
      fullHeading: 'CRÔNICA VI — O ESTADO FASCISTA (1925–1926)',
      paragraphs: [
        'A transformação do governo em ditadura ocorreu por meio de uma série de medidas legislativas.',
        'O poder executivo foi fortalecido, a imprensa foi submetida a restrições e os partidos adversários foram eliminados.',
        'As organizações políticas independentes perderam espaço.',
        'A repressão tornou-se parte do funcionamento institucional do Estado.',
        'O fascismo deixava de ser apenas um movimento armado que havia conquistado o governo.',
        'Transformava-se em regime.',
        'A monarquia permanecia, mas a competição política havia sido praticamente eliminada.',
        'A sociedade italiana entrava em uma nova fase de sua história.'
      ]
    },
    {
      id: 'cronica-7',
      num: 'CRÔNICA VII',
      title: 'A NAÇÃO ORGANIZADA EM CORPORAÇÕES (1927)',
      fullHeading: 'CRÔNICA VII — A NAÇÃO ORGANIZADA EM CORPORAÇÕES (1927)',
      paragraphs: [
        'Em abril de 1927, o regime aprovou a Carta del Lavoro.',
        'O documento apresentava o trabalho como dever social e defendia a organização corporativa da economia.',
        'A promessa oficial era superar o conflito entre trabalhadores e empresários.',
        'Entretanto, a organização sindical independente havia sido destruída.',
        'A greve era proibida, e os trabalhadores não possuíam liberdade para organizar entidades capazes de enfrentar o governo e os empregadores.',
        'O corporativismo transformou-se em instrumento de controle político.',
        'A harmonia nacional proclamada pelo regime estava baseada na subordinação dos interesses individuais à autoridade estatal.'
      ]
    },
    {
      id: 'cronica-8',
      num: 'CRÔNICA VIII',
      title: 'O ACORDO COM O VATICANO (1929)',
      fullHeading: 'CRÔNICA VIII — O ACORDO COM O VATICANO (1929)',
      paragraphs: [
        'Em fevereiro de 1929, Mussolini e representantes da Santa Sé assinaram os Pactos de Latrão.',
        'O acordo encerrou a longa Questão Romana.',
        'A Cidade do Vaticano passou a constituir um Estado soberano, e a Igreja Católica obteve reconhecimento institucional e garantias importantes.',
        'O fascismo apresentou o acordo como uma grande realização nacional.',
        'A reconciliação com a Igreja ampliou a legitimidade do regime.',
        'Entretanto, a relação entre fascismo e catolicismo continuou marcada por conflitos.',
        'O Estado fascista desejava controlar a educação e a formação política dos jovens, enquanto a Igreja preservava suas próprias organizações e sua autoridade religiosa.',
        'A conciliação não eliminou a disputa sobre quem deveria formar moralmente os italianos.'
      ]
    },
    {
      id: 'cronica-9',
      num: 'CRÔNICA IX',
      title: 'A CONQUISTA DA ETIÓPIA (1935–1936)',
      fullHeading: 'CRÔNICA IX — A CONQUISTA DA ETIÓPIA (1935–1936)',
      paragraphs: [
        'Em outubro de 1935, tropas italianas invadiram a Etiópia.',
        'O regime apresentou a campanha como uma missão histórica destinada a construir um novo império.',
        'A propaganda fascista exaltava a força militar e a grandeza nacional.',
        'A guerra, entretanto, foi marcada por violência colonial e pelo uso de armas químicas.',
        'Em maio de 1936, Mussolini proclamou a criação do Império Italiano.',
        'A vitória militar foi utilizada para alimentar o culto ao Duce e a ideia de renascimento nacional.',
        'A expansão imperial também aprofundou a dimensão racial do fascismo.',
        'A população africana submetida ao domínio italiano foi tratada segundo uma ordem colonial hierárquica e discriminatória.'
      ]
    },
    {
      id: 'cronica-10',
      num: 'CRÔNICA X',
      title: 'A EXCLUSÃO DOS JUDEUS ITALIANOS (1938)',
      fullHeading: 'CRÔNICA X — A EXCLUSÃO DOS JUDEUS ITALIANOS (1938)',
      paragraphs: [
        'Em 1938, o regime fascista aprovou uma legislação antissemita.',
        'Os judeus italianos passaram a enfrentar restrições no acesso à educação, ao serviço público e a diferentes instituições.',
        'O Estado passou a classificar cidadãos segundo critérios raciais.',
        'A legislação demonstrou a dimensão excludente da comunidade nacional fascista.',
        'O cidadão não era considerado apenas em função de sua relação jurídica com o Estado.',
        'Sua origem racial passou a determinar direitos e possibilidades de participação na sociedade.',
        'A Itália fascista aproximava-se politicamente da Alemanha nazista e aprofundava sua política de exclusão.'
      ]
    },
    {
      id: 'cronica-11',
      num: 'CRÔNICA XI',
      title: 'A GUERRA QUE DESTRUIU O MITO (1940–1943)',
      fullHeading: 'CRÔNICA XI — A GUERRA QUE DESTRUIU O MITO (1940–1943)',
      paragraphs: [
        'Em junho de 1940, Mussolini anunciou a entrada da Itália na Segunda Guerra Mundial.',
        'O regime acreditava que a vitória alemã poderia permitir a expansão territorial italiana.',
        'Entretanto, as forças armadas enfrentavam limitações materiais e organizacionais.',
        'As derrotas militares tornaram-se cada vez mais frequentes.',
        'A guerra provocou escassez, bombardeios, mortes e desorganização econômica.',
        'A imagem de eficiência construída pela propaganda fascista começou a desmoronar.',
        'A autoridade de Mussolini foi progressivamente enfraquecida.',
        'Em julho de 1943, após a invasão aliada da Sicília e uma crise interna do regime, o Grande Conselho do Fascismo aprovou uma moção contrária ao Duce.',
        'O rei afastou Mussolini do governo.',
        'A ditadura que havia dominado a política italiana durante duas décadas entrou em colapso.'
      ]
    },
    {
      id: 'cronica-12',
      num: 'CRÔNICA XII',
      title: 'SALÒ E O FIM DO FASCISMO (1943–1945)',
      fullHeading: 'CRÔNICA XII — SALÒ E O FIM DO FASCISMO (1943–1945)',
      paragraphs: [
        'Após sua libertação pelos alemães, Mussolini foi colocado à frente da República Social Italiana.',
        'O novo regime dependia da Alemanha nazista.',
        'A Itália encontrava-se dividida entre forças alemãs, fascistas republicanos, tropas aliadas e movimentos de resistência.',
        'A guerra civil aprofundou a violência política.',
        'Os partisans desenvolveram ações militares contra a ocupação alemã e os fascistas.',
        'Entre os resistentes havia comunistas, socialistas, católicos, liberais e outros grupos antifascistas.',
        'Em abril de 1945, o regime de Salò entrou em colapso.',
        'Mussolini foi capturado e executado por partisans.',
        'O fascismo italiano havia chegado ao fim como experiência governamental.',
        'Sua trajetória deixava marcas profundas na sociedade italiana e na história política europeia.',
        'A experiência demonstrara que a destruição das instituições democráticas podia ocorrer por meio da combinação entre violência organizada, colaboração das elites, crise institucional e mobilização nacionalista.'
      ]
    }
  ];

  const fullChroniclesText = `CRÔNICAS HISTÓRICAS
FASCISMO ITALIANO: DA CRISE DO PÓS-GUERRA À QUEDA DE MUSSOLINI (1919–1945)

${chronicles.map(c => `${c.fullHeading}\n\n${c.paragraphs.join('\n\n')}`).join('\n\n---\n\n')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullChroniclesText);
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
                COLEÇÃO II — HISTÓRIA DAS IDEOLOGIAS POLÍTICAS
              </span>
              <span className="text-[10px] font-mono text-stone-400">
                CAPÍTULO ACADÊMICO Nº 07
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              CRÔNICAS HISTÓRICAS
            </h1>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              FASCISMO ITALIANO: DA CRISE DO PÓS-GUERRA À QUEDA DE MUSSOLINI (1919–1945)
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar todas as 12 crônicas na íntegra"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Crônicas Copiadas!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Crônicas na Íntegra</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* CHRONICLES LIST */}
      <div className="space-y-6">
        {chronicles.map((c) => (
          <article key={c.id} id={c.id} className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-4 shadow-md">
            <div className="border-b border-stone-800 pb-3 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                {c.num}
              </span>
              <h3 className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}>
                {c.fullHeading}
              </h3>
            </div>

            <div className={`space-y-3 font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
              {c.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
