import React from 'react';
import { DossierTopic } from '../types/dossier';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

interface TimelineViewProps {
  topics: DossierTopic[];
  onSelectTopic: (topic: DossierTopic) => void;
}

interface TimelineEra {
  periodKey: string;
  title: string;
  dateRange: string;
  summary: string;
  milestones: string[];
  quote: {
    text: string;
    author: string;
  };
}

const TIMELINE_ERAS: TimelineEra[] = [
  {
    periodKey: '1905-1917',
    title: 'Revolução Russa e Queda da Autocracia Czarista',
    dateRange: '1905 – 1917',
    summary: 'Do Domingo Sangrento de 1905 ao colapso militar na Primeira Guerra Mundial, abdicação de Nicolau II em fevereiro de 1917 e o golpe bolchevique de outubro.',
    milestones: [
      '1905: Domingo Sangrento e criação do primeiro Soviete de São Petersburgo',
      'Fev/1917: Abdicação do Czar Nicolau II; governo provisório de Kerensky',
      'Abr/1917: Retorno de Lenin e publicação das Teses de Abril',
      'Out/1917: Insurreição armada bolchevique e tomada do Palácio de Inverno',
      'Jan/1918: Dissolução forçada da Assembleia Constituinte eleita'
    ],
    quote: {
      text: 'A burguesia foi derrotada, mas não destruída; o poder operário deve esmagar qualquer resistência.',
      author: 'Vladimir Lenin (1918)'
    }
  },
  {
    periodKey: '1917-1924',
    title: 'Governo de Lenin, Guerra Civil e Terror Vermelho',
    dateRange: '1917 – 1924',
    summary: 'A consolidação do unipartidarismo pela força armada: criação da Cheka por Felix Dzerzhinsky, o Terror Vermelho oficializado em 1918, a Revolta de Kronstadt (1921), a rebelião de Tambov e o Tratado de Rapallo com a Alemanha (1922).',
    milestones: [
      'Dez/1917: Criação da Comissão Extraordinária (Cheka) para combate à contrarrevolução',
      'Set/1918: Decreto do Terror Vermelho e fuzilamento massivo de reféns',
      '1920-1921: Revolta camponesa de Tambov reprimida com gás asfixiante e campos',
      'Mar/1921: Esmagamento da revolta dos marinheiros de Kronstadt',
      'Abr/1922: Tratado de Rapallo e início dos acordos militares secretos com a Alemanha'
    ],
    quote: {
      text: 'Não nos preocupamos em provar a culpa do réu; a primeira questão é saber a qual classe ele pertence.',
      author: 'Martin Latsis, Cheka (1918)'
    }
  },
  {
    periodKey: '1924-1953',
    title: 'Governo de Stalin: Coletivização, Gulag, Grande Terror e Pacto com Hitler',
    dateRange: '1924 – 1953',
    summary: 'A era stalinista: o fim da NEP, os planos quinquenais, a coletivização forçada que gerou o Holodomor e a fome no Cazaquistão, a ampliação colossal do sistema Gulag, os Processos de Moscou e a Ordem nº 00447, o Pacto Molotov-Ribbentrop de 1939 e o Massacre de Katyn em 1940.',
    milestones: [
      '1928: Início do 1º Plano Quinquenal e coletivização forçada da terra',
      '1932-1933: Holodomor na Ucrânia e Fome no Cazaquistão (milhões de mortos)',
      '1936-1938: O Grande Terror (Julgamentos de Moscou, Ordem nº 00447 do NKVD)',
      'Ago/1939: Assinatura do Pacto Molotov-Ribbentrop e Protocolo Secreto de partilha',
      'Mar/1940: Massacre de Katyn (execução de 22.000 oficiais poloneses pela NKVD)',
      '1944: Deportação em massa dos povos tártaros, chechenos e inguches'
    ],
    quote: {
      text: 'A morte de um homem é uma tragédia; a morte de milhões é uma estatística.',
      author: 'Atribuído ao vocabulário burocrático stalinista'
    }
  },
  {
    periodKey: '1953-1964',
    title: 'Governos Posteriores a Stalin: Degelo de Kruschev e Crises da Guerra Fria',
    dateRange: '1953 – 1964',
    summary: 'A morte de Stalin e a execução de Beria; o Discurso Secreto de Nikita Kruschev em 1956 denunciando o culto à personalidade; a repressão violenta à Revolução Húngara (1956); a construção do Muro de Berlim (1961) e a Crise dos Mísseis de Cuba (1962).',
    milestones: [
      'Mar/1953: Morte de Stalin e expurgo de Lavrentiy Beria',
      'Fev/1956: XX Congresso do PCUS e o Relatório Secreto de Kruschev sobre os crimes de Stalin',
      'Out/1956: Tanques soviéticos invadem Budapeste para esmagar a Revolução Húngara',
      'Ago/1961: Construção do Muro de Berlim para conter a fuga de cidadãos',
      'Out/1962: Crise dos Mísseis em Cuba leva o mundo à beira da guerra nuclear'
    ],
    quote: {
      text: 'Stalin praticava não a persuasão, mas a imposição de suas ideias por meio do aniquilamento moral e físico.',
      author: 'Nikita Kruschev, Discurso Secreto (1956)'
    }
  },
  {
    periodKey: '1964-1982',
    title: 'Período de Brejnev: A Estagnação (Zastoy), Dissidência e Repressão em Praga',
    dateRange: '1964 – 1982',
    summary: 'A deposição de Kruschev e a posse de Leonid Brejnev. A invasão militar da Tchecoslováquia (1968) sob a Doutrina Brejnev, a perseguição judicial e psiquiátrica aos dissidentes (Soljenítsin, Sakharov) e a invasão do Afeganistão (1979).',
    milestones: [
      'Ago/1968: Operação Danúbio esmaga a Primavera de Praga na Tchecoslováquia',
      '1973: Publicação clandestina no exterior de "O Arquipélago Gulag" de Soljenítsin',
      '1974: Expulsão de Soljenítsin e intensificação da vigilância da KGB sob Andropov',
      '1975: Assinatura dos Acordos de Helsinque e formação do Grupo de Monitoramento Cívico',
      'Dez/1979: Invasão soviética do Afeganistão e início de dez anos de conflito sangrento'
    ],
    quote: {
      text: 'A soberania de cada país socialista não pode se opor aos interesses do socialismo mundial.',
      author: 'Leonid Brejnev (Doutrina da Soberania Limitada, 1968)'
    }
  },
  {
    periodKey: '1985-1991',
    title: 'Era Gorbachev, Chernobyl e Dissolução da União Soviética',
    dateRange: '1985 – 1991',
    summary: 'A tentativa de modernização do regime por Mikhail Gorbachev através da Glasnost (liberdade de imprensa e discussão histórica) e Perestroika. O choque moral do desastre de Chernobyl (1986), a queda do Muro de Berlim em 1989, o golpe frustrado da linha-dura em agosto de 1991 e o Pacto de Belavezha que extinguiu a URSS.',
    milestones: [
      'Mar/1985: Mikhail Gorbachev assume como Secretário-Geral do PCUS',
      'Abr/1986: Explosão do reator 4 da Usina Nuclear de Chernobyl e tentativa inicial de ocultação',
      '1989: Queda das ditaduras comunistas no Leste Europeu (Polônia, Alemanha Oriental, Romênia)',
      'Ago/1991: Golpe de Estado frustrado do Comitê de Emergência (GKChP)',
      'Dez/1991: Pacto de Belavezha e renúncia de Gorbachev; a bandeira vermelha é arriada do Kremlin'
    ],
    quote: {
      text: 'A sociedade estava sufocada pela tenaz do sistema de comando e administração burocrático.',
      author: 'Mikhail Gorbachev (1991)'
    }
  }
];

export const TimelineView: React.FC<TimelineViewProps> = ({ topics, onSelectTopic }) => {
  return (
    <div className="space-y-8">
      {/* Introduction Banner */}
      <div className="bg-[#17171a] border border-stone-800 rounded-xl p-4 sm:p-6 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-500 mb-2">
          <Calendar className="w-4 h-4" />
          <span>CRONOLOGIA HISTÓRICA DOCUMENTADA · 1905 A 1991</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-display font-bold text-stone-100">
          Linha do Tempo dos Governos e Crises da União Soviética
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 font-serif mt-2 max-w-3xl leading-relaxed">
          Navegue pelas seis grandes eras do poder soviético, desde as revoluções do início do século XX até a dissolução em dezembro de 1991. Cada era contém marcos verificados e dossiês acadêmicos associados.
        </p>
      </div>

      {/* Vertical Stepper Timeline */}
      <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-7 before:w-0.5 before:bg-stone-800 before:pointer-events-none">
        {TIMELINE_ERAS.map((era, index) => {
          // Find matching topics for this era
          const eraTopics = topics.filter((t) => {
            if (era.periodKey === 'todos') return false;
            return t.period === era.periodKey;
          });

          return (
            <div key={index} className="relative pl-7 sm:pl-16 space-y-4">
              {/* Timeline Pin Indicator */}
              <div className="absolute left-3.5 sm:left-7 top-1.5 -translate-x-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#141416] border-2 border-amber-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              </div>

              {/* Era Content Card */}
              <div className="bg-[#17171b] border border-stone-800 rounded-xl p-3.5 sm:p-6 lg:p-7 space-y-3.5 sm:space-y-5 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block">
                      {era.dateRange}
                    </span>
                    <h3 className="text-base sm:text-xl font-display font-bold text-stone-100 mt-1">
                      {era.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-stone-400 self-start sm:self-auto bg-stone-900 px-2.5 py-1 rounded border border-stone-800">
                    {eraTopics.length} Dossiês no Acervo
                  </span>
                </div>

                <p className="text-sm font-serif text-stone-300 leading-relaxed">
                  {era.summary}
                </p>

                {/* Milestones list */}
                <div className="bg-[#121215] p-4 rounded-lg border border-stone-800/80 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block">
                    Principais Marcos Históricos Documentados:
                  </span>
                  <ul className="space-y-1.5">
                    {era.milestones.map((m, idx) => (
                      <li key={idx} className="text-xs text-stone-300 font-mono flex items-start gap-2">
                        <span className="text-amber-500 font-bold">›</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pull Quote */}
                <div className="p-3 bg-stone-900/60 border-l-2 border-amber-600 rounded-r text-xs text-stone-300 italic font-serif">
                  "{era.quote.text}" — <span className="font-mono text-[11px] text-stone-400">{era.quote.author}</span>
                </div>

                {/* Associated Dossier Topics Chips */}
                {eraTopics.length > 0 && (
                  <div className="pt-2">
                    <span className="text-[11px] font-mono uppercase text-stone-400 tracking-wider block mb-2">
                      Dossiês Específicos Deste Período:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {eraTopics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => onSelectTopic(topic)}
                          className="text-left p-3 rounded-lg bg-[#141417] hover:bg-stone-800 border border-stone-800 hover:border-amber-500/50 transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <div className="text-[10px] font-mono text-amber-500 font-bold">
                              Nº {topic.categoryNumber} · {topic.category}
                            </div>
                            <div className="text-xs font-semibold text-stone-200 group-hover:text-amber-300">
                              {topic.title}
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-400 transition-colors shrink-0 ml-2" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
