import React, { useState } from 'react';
import { Copy, Check, ScrollText, BookOpen, Info } from 'lucide-react';

interface Topic201ChroniclesViewProps {
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

interface Chronicle201 {
  id: string;
  heading: string;
  paragraphs: string[];
  historicalNote?: {
    label: string;
    text: string;
  };
  referencesLabel: string;
  references: string[];
}

const FULL_TEXT_201_ABA3 = `==========================================================
AS ORIGENS DA PRIMEIRA GUERRA MUNDIAL (1871–1914)
Crônicas Históricas
Coleção III — História das Guerras Mundiais
Monografia nº 01 · Aba 3 Crônicas
==========================================================

CRÔNICA 01 — VERSALHES, 1871: NASCE UM NOVO IMPÉRIO

Em janeiro de 1871, no Palácio de Versalhes, ocorreu uma cerimônia que simbolizou uma das maiores transformações políticas da Europa no século XIX.

Após a derrota francesa na Guerra Franco-Prussiana, os governantes dos Estados alemães proclamaram Guilherme I como imperador alemão.

A escolha de Versalhes possuía significado político. O local era um dos símbolos históricos da monarquia francesa, e a proclamação ocorreu em território francês ocupado pelas forças vencedoras.

A unificação alemã, conduzida sob a liderança política de Otto von Bismarck e a supremacia militar prussiana, criou uma nova potência no centro da Europa.

O novo império reunia capacidade industrial, recursos humanos, organização militar e potencial científico que rapidamente o colocariam entre os principais Estados do continente.

A França, derrotada, teve de ceder a Alsácia e parte da Lorena e pagar indenizações de guerra.

A rivalidade entre os dois países tornou-se um dos elementos centrais da política europeia nas décadas seguintes.

O acontecimento de Versalhes não produziu a Primeira Guerra Mundial diretamente. Contudo, inaugurou uma nova configuração de poder que alterou profundamente as relações entre as potências.

A Europa de 1871 já não era a mesma de 1870.

NOTA HISTÓRICA:
A proclamação ocorreu em 18 de janeiro de 1871. A cerimônia é um marco da unificação alemã, embora o processo de integração política e institucional tenha envolvido etapas anteriores e posteriores.

REFERÊNCIAS:
Christopher Clark, Iron Kingdom: The Rise and Downfall of Prussia.
Margaret MacMillan, The War That Ended Peace.

----------------------------------------------------------

CRÔNICA 02 — BISMARCK E O EQUILÍBRIO IMPOSSÍVEL

Depois da unificação alemã, Otto von Bismarck enfrentava um problema: como administrar uma potência recém-criada em um continente repleto de rivalidades?

A Alemanha estava geograficamente situada entre grandes Estados. A França desejava superar as consequências da derrota de 1870–1871. A Rússia possuía interesses nos Bálcãs. A Áustria-Hungria disputava influência na mesma região.

Bismarck compreendia que uma guerra simultânea contra França e Rússia poderia colocar em risco a segurança do Império Alemão.

Sua política externa procurou impedir o isolamento diplomático alemão e administrar as rivalidades entre as demais potências.

A Liga dos Três Imperadores e os acordos posteriores demonstraram a tentativa de construir uma rede de entendimentos que preservasse a posição alemã.

Mas esse equilíbrio dependia de negociações complexas e de interesses frequentemente incompatíveis.

A rivalidade entre Rússia e Áustria-Hungria nos Bálcãs dificultava a manutenção de uma aproximação estável entre os dois impérios.

Em 1890, Bismarck deixou o governo. A política externa alemã passou por mudanças, e o Tratado de Resseguro com a Rússia não foi renovado.

A saída de Bismarck não determinou o futuro conflito, mas marcou uma transição importante na diplomacia alemã.

O sistema de alianças que ele havia construído era complexo e dependia de uma administração cuidadosa. Sua manutenção exigia mais do que poder militar: exigia habilidade diplomática.

REFERÊNCIAS:
William Mulligan, The Origins of the First World War.
Margaret MacMillan, The War That Ended Peace.

----------------------------------------------------------

CRÔNICA 03 — O MAR COMO CAMPO DE DISPUTA

No final do século XIX, o poder de uma grande potência não dependia apenas de seus exércitos terrestres.

Para o Reino Unido, a marinha era uma instituição essencial à sobrevivência econômica e estratégica do império.

O comércio internacional, as rotas de abastecimento e as comunicações com as colônias dependiam da liberdade de circulação marítima.

A Alemanha, em processo de expansão industrial e diplomática, passou a investir na construção de uma frota de guerra mais poderosa.

Sob a influência de Alfred von Tirpitz, a expansão naval alemã ganhou importância estratégica.

Em 1906, o Reino Unido lançou o HMS Dreadnought, um navio de guerra que revolucionou os padrões tecnológicos da época.

Seu projeto tornou obsoletos muitos dos encouraçados anteriores e inaugurou uma nova etapa da competição naval.

A construção de navios semelhantes pelas demais potências intensificou a disputa por recursos, tecnologia e capacidade militar.

A Alemanha e o Reino Unido passaram a observar cada movimento naval do adversário com crescente preocupação.

A corrida naval não foi a única causa da deterioração das relações anglo-alemãs, mas tornou mais difícil a construção de confiança entre os dois países.

O mar, tradicionalmente associado ao comércio e à projeção imperial britânica, transformou-se também em um espaço de competição estratégica.

REFERÊNCIAS:
Paul Kennedy, The Rise of the Anglo-German Antagonism, 1860–1914.
Nicholas A. Lambert, Planning Armageddon.

----------------------------------------------------------

CRÔNICA 04 — A CRISE DA BÓSNIA, 1908: UM IMPÉRIO E UM NACIONALISMO

Em 1908, a Áustria-Hungria anunciou a anexação formal da Bósnia-Herzegovina, território que administrava desde o Congresso de Berlim de 1878.

A decisão provocou uma crise diplomática.

A Sérvia, que possuía ambições nacionalistas e interesses sobre a população eslava da região, protestou contra a anexação.

A Rússia também se opôs à iniciativa austro-húngara, embora sua capacidade de reação estivesse limitada pelas consequências da derrota na Guerra Russo-Japonesa e pela crise interna de 1905.

A Alemanha apoiou sua aliada austro-húngara.

A crise terminou com o reconhecimento da anexação, mas deixou ressentimentos e aprofundou a rivalidade entre Viena e Belgrado.

Para a liderança austro-húngara, a questão era preservar a integridade de um império multinacional.

Para os nacionalistas sérvios, a expansão austro-húngara representava um obstáculo aos projetos de unificação nacional.

A Bósnia tornou-se, assim, um dos espaços em que projetos imperiais e nacionalistas entraram em choque.

Seis anos depois, Sarajevo, capital da Bósnia-Herzegovina, seria o cenário do assassinato do arquiduque Francisco Ferdinando.

A crise de 1908 não tornou o atentado inevitável, mas ajuda a compreender o ambiente político em que ele ocorreu.

REFERÊNCIAS:
Christopher Clark, The Sleepwalkers.
Mark Cornwall, The Undermining of Austria-Hungary.

----------------------------------------------------------

CRÔNICA 05 — AGADIR, 1911: A DIPLOMACIA DIANTE DOS CANHÕES

Em 1911, uma nova crise no Marrocos colocou Alemanha e França em rota de colisão diplomática.

A França ampliava sua influência sobre o território, enquanto a Alemanha procurava defender seus interesses e questionar a posição francesa.

Em julho, a Alemanha enviou a canhoneira Panther ao porto de Agadir.

A iniciativa foi interpretada como uma demonstração de força e provocou preocupação internacional.

O Reino Unido receou que a presença alemã no Marrocos pudesse alterar o equilíbrio estratégico no Atlântico e no Mediterrâneo.

As negociações evitaram uma guerra, e a crise terminou com um acordo territorial envolvendo concessões francesas à Alemanha na África.

Entretanto, o episódio agravou as desconfianças entre os governos.

A crise de Agadir demonstra que a diplomacia europeia ainda conseguia evitar confrontos diretos, mas também revela como demonstrações militares podiam aumentar o risco de escalada.

A paz foi preservada, mas o relacionamento entre as potências continuou deteriorando-se.

REFERÊNCIAS:
Margaret MacMillan, The War That Ended Peace.
William Mulligan, The Origins of the First World War.

----------------------------------------------------------

CRÔNICA 06 — SARAJEVO, 28 DE JUNHO DE 1914: O ATENTADO

Na manhã de 28 de junho de 1914, o arquiduque Francisco Ferdinando, herdeiro do trono austro-húngaro, visitava Sarajevo acompanhado de sua esposa, Sofia.

A visita ocorria em uma região marcada por tensões políticas e nacionalistas.

Durante o percurso oficial, integrantes de uma rede de jovens nacionalistas bósnios envolvidos na conspiração realizaram tentativas de atentado.

Depois de uma primeira tentativa fracassada, o automóvel do arquiduque tomou um percurso que acabou levando o casal à proximidade de Gavrilo Princip.

Princip disparou contra Francisco Ferdinando e Sofia, que morreram em consequência dos ferimentos.

O atentado provocou uma crise política em Viena.

A liderança austro-húngara passou a considerar uma ação contra a Sérvia, que era vista como um centro de agitação nacionalista contrário aos interesses do império.

O assassinato, entretanto, não explica sozinho a guerra que começaria semanas depois.

Entre o atentado e o conflito generalizado existiu uma sequência de decisões diplomáticas e militares que será examinada na próxima monografia.

Sarajevo foi o estopim. A crise internacional que se seguiu transformou o atentado em uma guerra entre grandes potências.

REFERÊNCIAS:
Christopher Clark, The Sleepwalkers.
T. G. Otte, July Crisis.
Annika Mombauer, The Origins of the First World War: Diplomatic and Military Documents.

----------------------------------------------------------

NOTA FINAL DAS CRÔNICAS

Estas narrativas não pretendem substituir a investigação documental. São reconstruções sintéticas de acontecimentos históricos conhecidos.

A ambientação foi mantida dentro dos limites do que a historiografia permite afirmar. Não foram criados diálogos, pensamentos privados ou cenas fictícias atribuídas aos personagens.`;

const CHRONICLES_201: Chronicle201[] = [
  {
    id: 'cronica-1',
    heading: 'CRÔNICA 01 — VERSALHES, 1871: NASCE UM NOVO IMPÉRIO',
    paragraphs: [
      'Em janeiro de 1871, no Palácio de Versalhes, ocorreu uma cerimônia que simbolizou uma das maiores transformações políticas da Europa no século XIX.',
      'Após a derrota francesa na Guerra Franco-Prussiana, os governantes dos Estados alemães proclamaram Guilherme I como imperador alemão.',
      'A escolha de Versalhes possuía significado político. O local era um dos símbolos históricos da monarquia francesa, e a proclamação ocorreu em território francês ocupado pelas forças vencedoras.',
      'A unificação alemã, conduzida sob a liderança política de Otto von Bismarck e a supremacia militar prussiana, criou uma nova potência no centro da Europa.',
      'O novo império reunia capacidade industrial, recursos humanos, organização militar e potencial científico que rapidamente o colocariam entre os principais Estados do continente.',
      'A França, derrotada, teve de ceder a Alsácia e parte da Lorena e pagar indenizações de guerra.',
      'A rivalidade entre os dois países tornou-se um dos elementos centrais da política europeia nas décadas seguintes.',
      'O acontecimento de Versalhes não produziu a Primeira Guerra Mundial diretamente. Contudo, inaugurou uma nova configuração de poder que alterou profundamente as relações entre as potências.',
      'A Europa de 1871 já não era a mesma de 1870.',
    ],
    historicalNote: {
      label: 'NOTA HISTÓRICA:',
      text: 'A proclamação ocorreu em 18 de janeiro de 1871. A cerimônia é um marco da unificação alemã, embora o processo de integração política e institucional tenha envolvido etapas anteriores e posteriores.',
    },
    referencesLabel: 'REFERÊNCIAS:',
    references: [
      'Christopher Clark, Iron Kingdom: The Rise and Downfall of Prussia.',
      'Margaret MacMillan, The War That Ended Peace.',
    ],
  },
  {
    id: 'cronica-2',
    heading: 'CRÔNICA 02 — BISMARCK E O EQUILÍBRIO IMPOSSÍVEL',
    paragraphs: [
      'Depois da unificação alemã, Otto von Bismarck enfrentava um problema: como administrar uma potência recém-criada em um continente repleto de rivalidades?',
      'A Alemanha estava geograficamente situada entre grandes Estados. A França desejava superar as consequências da derrota de 1870–1871. A Rússia possuía interesses nos Bálcãs. A Áustria-Hungria disputava influência na mesma região.',
      'Bismarck compreendia que uma guerra simultânea contra França e Rússia poderia colocar em risco a segurança do Império Alemão.',
      'Sua política externa procurou impedir o isolamento diplomático alemão e administrar as rivalidades entre as demais potências.',
      'A Liga dos Três Imperadores e os acordos posteriores demonstraram a tentativa de construir uma rede de entendimentos que preservasse a posição alemã.',
      'Mas esse equilíbrio dependia de negociações complexas e de interesses frequentemente incompatíveis.',
      'A rivalidade entre Rússia e Áustria-Hungria nos Bálcãs dificultava a manutenção de uma aproximação estável entre os dois impérios.',
      'Em 1890, Bismarck deixou o governo. A política externa alemã passou por mudanças, e o Tratado de Resseguro com a Rússia não foi renovado.',
      'A saída de Bismarck não determinou o futuro conflito, mas marcou uma transição importante na diplomacia alemã.',
      'O sistema de alianças que ele havia construído era complexo e dependia de uma administração cuidadosa. Sua manutenção exigia mais do que poder militar: exigia habilidade diplomática.',
    ],
    referencesLabel: 'REFERÊNCIAS:',
    references: [
      'William Mulligan, The Origins of the First World War.',
      'Margaret MacMillan, The War That Ended Peace.',
    ],
  },
  {
    id: 'cronica-3',
    heading: 'CRÔNICA 03 — O MAR COMO CAMPO DE DISPUTA',
    paragraphs: [
      'No final do século XIX, o poder de uma grande potência não dependia apenas de seus exércitos terrestres.',
      'Para o Reino Unido, a marinha era uma instituição essencial à sobrevivência econômica e estratégica do império.',
      'O comércio internacional, as rotas de abastecimento e as comunicações com as colônias dependiam da liberdade de circulação marítima.',
      'A Alemanha, em processo de expansão industrial e diplomática, passou a investir na construção de uma frota de guerra mais poderosa.',
      'Sob a influência de Alfred von Tirpitz, a expansão naval alemã ganhou importância estratégica.',
      'Em 1906, o Reino Unido lançou o HMS Dreadnought, um navio de guerra que revolucionou os padrões tecnológicos da época.',
      'Seu projeto tornou obsoletos muitos dos encouraçados anteriores e inaugurou uma nova etapa da competição naval.',
      'A construção de navios semelhantes pelas demais potências intensificou a disputa por recursos, tecnologia e capacidade militar.',
      'A Alemanha e o Reino Unido passaram a observar cada movimento naval do adversário com crescente preocupação.',
      'A corrida naval não foi a única causa da deterioração das relações anglo-alemãs, mas tornou mais difícil a construção de confiança entre os dois países.',
      'O mar, tradicionalmente associado ao comércio e à projeção imperial britânica, transformou-se também em um espaço de competição estratégica.',
    ],
    referencesLabel: 'REFERÊNCIAS:',
    references: [
      'Paul Kennedy, The Rise of the Anglo-German Antagonism, 1860–1914.',
      'Nicholas A. Lambert, Planning Armageddon.',
    ],
  },
  {
    id: 'cronica-4',
    heading: 'CRÔNICA 04 — A CRISE DA BÓSNIA, 1908: UM IMPÉRIO E UM NACIONALISMO',
    paragraphs: [
      'Em 1908, a Áustria-Hungria anunciou a anexação formal da Bósnia-Herzegovina, território que administrava desde o Congresso de Berlim de 1878.',
      'A decisão provocou uma crise diplomática.',
      'A Sérvia, que possuía ambições nacionalistas e interesses sobre a população eslava da região, protestou contra a anexação.',
      'A Rússia também se opôs à iniciativa austro-húngara, embora sua capacidade de reação estivesse limitada pelas consequências da derrota na Guerra Russo-Japonesa e pela crise interna de 1905.',
      'A Alemanha apoiou sua aliada austro-húngara.',
      'A crise terminou com o reconhecimento da anexação, mas deixou ressentimentos e aprofundou a rivalidade entre Viena e Belgrado.',
      'Para a liderança austro-húngara, a questão era preservar a integridade de um império multinacional.',
      'Para os nacionalistas sérvios, a expansão austro-húngara representava um obstáculo aos projetos de unificação nacional.',
      'A Bósnia tornou-se, assim, um dos espaços em que projetos imperiais e nacionalistas entraram em choque.',
      'Seis anos depois, Sarajevo, capital da Bósnia-Herzegovina, seria o cenário do assassinato do arquiduque Francisco Ferdinando.',
      'A crise de 1908 não tornou o atentado inevitável, mas ajuda a compreender o ambiente político em que ele ocorreu.',
    ],
    referencesLabel: 'REFERÊNCIAS:',
    references: [
      'Christopher Clark, The Sleepwalkers.',
      'Mark Cornwall, The Undermining of Austria-Hungary.',
    ],
  },
  {
    id: 'cronica-5',
    heading: 'CRÔNICA 05 — AGADIR, 1911: A DIPLOMACIA DIANTE DOS CANHÕES',
    paragraphs: [
      'Em 1911, uma nova crise no Marrocos colocou Alemanha e França em rota de colisão diplomática.',
      'A França ampliava sua influência sobre o território, enquanto a Alemanha procurava defender seus interesses e questionar a posição francesa.',
      'Em julho, a Alemanha enviou a canhoneira Panther ao porto de Agadir.',
      'A iniciativa foi interpretada como uma demonstração de força e provocou preocupação internacional.',
      'O Reino Unido receou que a presença alemã no Marrocos pudesse alterar o equilíbrio estratégico no Atlântico e no Mediterrâneo.',
      'As negociações evitaram uma guerra, e a crise terminou com um acordo territorial envolvendo concessões francesas à Alemanha na África.',
      'Entretanto, o episódio agravou as desconfianças entre os governos.',
      'A crise de Agadir demonstra que a diplomacia europeia ainda conseguia evitar confrontos diretos, mas também revela como demonstrações militares podiam aumentar o risco de escalada.',
      'A paz foi preservada, mas o relacionamento entre as potências continuou deteriorando-se.',
    ],
    referencesLabel: 'REFERÊNCIAS:',
    references: [
      'Margaret MacMillan, The War That Ended Peace.',
      'William Mulligan, The Origins of the First World War.',
    ],
  },
  {
    id: 'cronica-6',
    heading: 'CRÔNICA 06 — SARAJEVO, 28 DE JUNHO DE 1914: O ATENTADO',
    paragraphs: [
      'Na manhã de 28 de junho de 1914, o arquiduque Francisco Ferdinando, herdeiro do trono austro-húngaro, visitava Sarajevo acompanhado de sua esposa, Sofia.',
      'A visita ocorria em uma região marcada por tensões políticas e nacionalistas.',
      'Durante o percurso oficial, integrantes de uma rede de jovens nacionalistas bósnios envolvidos na conspiração realizaram tentativas de atentado.',
      'Depois de uma primeira tentativa fracassada, o automóvel do arquiduque tomou um percurso que acabou levando o casal à proximidade de Gavrilo Princip.',
      'Princip disparou contra Francisco Ferdinando e Sofia, que morreram em consequência dos ferimentos.',
      'O atentado provocou uma crise política em Viena.',
      'A liderança austro-húngara passou a considerar uma ação contra a Sérvia, que era vista como um centro de agitação nacionalista contrário aos interesses do império.',
      'O assassinato, entretanto, não explica sozinho a guerra que começaria semanas depois.',
      'Entre o atentado e o conflito generalizado existiu uma sequência de decisões diplomáticas e militares que será examinada na próxima monografia.',
      'Sarajevo foi o estopim. A crise internacional que se seguiu transformou o atentado em uma guerra entre grandes potências.',
    ],
    referencesLabel: 'REFERÊNCIAS:',
    references: [
      'Christopher Clark, The Sleepwalkers.',
      'T. G. Otte, July Crisis.',
      'Annika Mombauer, The Origins of the First World War: Diplomatic and Military Documents.',
    ],
  },
];

export const Topic201ChroniclesView: React.FC<Topic201ChroniclesViewProps> = ({
  getFontSizeClass,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(FULL_TEXT_201_ABA3);
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
                Monografia nº 01 · Aba 3 Crônicas
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100 uppercase tracking-tight pt-1">
              AS ORIGENS DA PRIMEIRA GUERRA MUNDIAL (1871–1914)
            </h1>
            <p className="text-amber-400 font-serif italic text-sm sm:text-base">
              Crônicas Históricas
            </p>
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-amber-950/80 hover:bg-amber-900 text-amber-300 text-xs font-mono rounded-lg border border-amber-600/60 flex items-center gap-2 transition-colors shrink-0"
            title="Copiar texto integral da Aba 3 Crônicas"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Texto Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar Aba Crônicas na Íntegra</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* CRÔNICAS 01 A 06 */}
      <div className="space-y-6">
        {CHRONICLES_201.map((chronicle) => (
          <article
            key={chronicle.id}
            id={chronicle.id}
            className="scroll-mt-24 bg-[#161619] border border-stone-800 p-5 sm:p-7 rounded-xl shadow-md space-y-5"
          >
            <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
              <ScrollText className="w-5 h-5 text-amber-400 shrink-0" />
              <h2
                className={`font-serif font-bold text-stone-100 ${getFontSizeClass('heading')}`}
              >
                {chronicle.heading}
              </h2>
            </div>

            <div
              className={`font-serif text-stone-300 text-justify leading-relaxed space-y-4 ${getFontSizeClass('body')}`}
            >
              {chronicle.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {chronicle.historicalNote && (
              <div className="bg-[#121214] border-l-4 border-amber-500 p-4 rounded-r-lg space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                  <Info className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{chronicle.historicalNote.label}</span>
                </div>
                <p
                  className={`font-serif text-stone-200 leading-relaxed ${getFontSizeClass('body')}`}
                >
                  {chronicle.historicalNote.text}
                </p>
              </div>
            )}

            <div className="bg-[#121214] p-4 rounded-lg border border-stone-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                <BookOpen className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{chronicle.referencesLabel}</span>
              </div>
              <ul className="space-y-1 font-mono text-xs text-stone-300">
                {chronicle.references.map((ref, rIdx) => (
                  <li key={rIdx}>{ref}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* NOTA FINAL DAS CRÔNICAS */}
      <section
        id="cronica-nota"
        className="scroll-mt-24 bg-[#161619] border border-amber-600/40 p-5 sm:p-7 rounded-xl shadow-md space-y-3"
      >
        <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
          <ScrollText className="w-5 h-5 text-amber-400 shrink-0" />
          <h2
            className={`font-serif font-bold text-amber-300 uppercase tracking-wide ${getFontSizeClass('heading')}`}
          >
            NOTA FINAL DAS CRÔNICAS
          </h2>
        </div>
        <div
          className={`space-y-3 font-serif text-stone-300 leading-relaxed ${getFontSizeClass('body')}`}
        >
          <p>
            Estas narrativas não pretendem substituir a investigação documental. São reconstruções sintéticas de acontecimentos históricos conhecidos.
          </p>
          <p>
            A ambientação foi mantida dentro dos limites do que a historiografia permite afirmar. Não foram criados diálogos, pensamentos privados ou cenas fictícias atribuídas aos personagens.
          </p>
        </div>
      </section>
    </div>
  );
};
