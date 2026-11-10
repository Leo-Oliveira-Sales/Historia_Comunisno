import React, { useState } from 'react';
import { 
  GitBranch, 
  Clock, 
  Table, 
  Sparkles, 
  Calendar, 
  Search, 
  ChevronRight, 
  Flame, 
  Shield, 
  Crown, 
  BookOpen, 
  Landmark, 
  Layers
} from 'lucide-react';

export interface ChronologyEra {
  id: string;
  period: string;
  title: string;
  color: {
    border: string;
    bg: string;
    badgeBg: string;
    badgeText: string;
    nodeBg: string;
    accent: string;
  };
  icon: any;
  description: string;
  events: {
    year: string;
    event: string;
    highlight?: boolean;
  }[];
}

export const CHRONOLOGY_ERAS: ChronologyEra[] = [
  {
    id: 'era-1',
    period: '1715 – 1788',
    title: 'O Antigo Regime, as Luzes e a Crise do Absolutismo',
    description: 'A contestação filosófica do direito divino, a efervescência das Luzes, a crise fiscal incontrolável e a revolta nobiliárquica nos Parlamentos.',
    color: {
      border: 'border-amber-700/60',
      bg: 'bg-amber-950/20',
      badgeBg: 'bg-amber-900/40',
      badgeText: 'text-amber-300',
      nodeBg: 'bg-amber-500',
      accent: 'text-amber-400'
    },
    icon: Crown,
    events: [
      { year: '1715', event: 'Morte de Luís XIV ("Rei Sol") e início da Regência de Filipe de Orléans' },
      { year: '1748', event: 'Montesquieu publica "O Espírito das Leis", formulando os freios aos poderes' },
      { year: '1751', event: 'Início da publicação monumental da "Encyclopédie" por Diderot e d\'Alembert' },
      { year: '1762', event: 'Jean-Jacques Rousseau publica "Do Contrato Social", afirmando a Soberania Popular', highlight: true },
      { year: '1763', event: 'Voltaire publica o "Tratado sobre a Tolerância" em defesa da razão contra o fanatismo' },
      { year: '1774', event: 'Luís XVI assume o trono da França em meio a dificuldades administrativas' },
      { year: '1775', event: 'Guerra das Farinhas: revoltas populares contra a alta do preço do trigo e do pão' },
      { year: '1776', event: 'Declaração de Independência dos EUA e irrupção do constitucionalismo atlântico' },
      { year: '1778', event: 'França entra na Guerra de Independência Americana ao lado dos colonos rebeldes' },
      { year: '1787', event: 'Assembleia dos Notáveis rejeita as reformas fiscais igualitárias propostas por Calonne' },
      { year: '1788', event: 'Falência iminente do Tesouro régio e solene convocação dos Estados Gerais para 1789', highlight: true }
    ]
  },
  {
    id: 'era-2',
    period: '1789 – 1799',
    title: 'A Ruptura Revolucionária e a Primeira República',
    description: 'A transferência da soberania para a Nação, o fim dos privilégios estamentais, a República jacobina, o Terror de Salvação Pública e o Diretório.',
    color: {
      border: 'border-red-700/60',
      bg: 'bg-red-950/20',
      badgeBg: 'bg-red-900/40',
      badgeText: 'text-red-300',
      nodeBg: 'bg-red-500',
      accent: 'text-red-400'
    },
    icon: Flame,
    events: [
      { year: '1789 (Jun)', event: 'Juramento do Jogo da Péla: deputados do Terceiro Estado proclamam a Assembleia Nacional' },
      { year: '1789 (Jul)', event: 'Tomada da Bastilha em 14 de julho e eclosão da insurreição armada popular', highlight: true },
      { year: '1789 (Ago)', event: 'Abolição do feudalismo (4 de agosto) e Declaração dos Direitos do Homem e do Cidadão (26 de agosto)', highlight: true },
      { year: '1790', event: 'Constituição Civil do Clero: subordinação da Igreja à autoridade civil do Estado' },
      { year: '1791', event: 'Constituição Monárquica e "Declaração dos Direitos da Mulher" por Olympe de Gouges' },
      { year: '1792', event: 'Batalha de Valmy (20 set.) e Proclamação da Primeira República Francesa (21 set.)', highlight: true },
      { year: '1793 (Jan)', event: 'Julgamento e execução de Luís XVI na guilhotina na Praça da Revolução' },
      { year: '1793–1794', event: 'Instauração do Governo Revolucionário do Terror e do Comitê de Salvação Pública (Robespierre)', highlight: true },
      { year: '1794 (Fev)', event: 'Abolição integral da escravidão nas colônias francesas pela Convenção (Decreto de Pluvioso)' },
      { year: '1794 (Jul)', event: 'Reação de 9 Termidor: queda e execução sumária de Robespierre e Saint-Just' },
      { year: '1795', event: 'Constituição do Ano III e estabelecimento do regime liberal censitário do Diretório' },
      { year: '1796', event: 'Conspiração dos Iguais liderada por Gracchus Babeuf em defesa do comunismo agrário' },
      { year: '1799 (Nov)', event: 'Golpe de Estado do 18 Brumário: Napoleão Bonaparte assume como Primeiro-Cônsul', highlight: true }
    ]
  },
  {
    id: 'era-3',
    period: '1799 – 1815',
    title: 'A Era Napoleônica e o Primeiro Império',
    description: 'A centralização burocrática dos prefeitos, o Código Civil burguês, a expansão militar continental e o colapso em Waterloo.',
    color: {
      border: 'border-blue-700/60',
      bg: 'bg-blue-950/20',
      badgeBg: 'bg-blue-900/40',
      badgeText: 'text-blue-300',
      nodeBg: 'bg-blue-500',
      accent: 'text-blue-400'
    },
    icon: Shield,
    events: [
      { year: '1800', event: 'Criação do Banco da França e instituição do corpo de Prefeitos nos Departamentos' },
      { year: '1801', event: 'Assinatura da Concordata entre a República Francesa e o Papa Pio VII' },
      { year: '1804 (Mar)', event: 'Promulgação do Código Civil dos Franceses ("Código Napoleônico")', highlight: true },
      { year: '1804 (Dez)', event: 'Coroação solene de Napoleão I como Imperador dos Franceses na Catedral de Notre-Dame' },
      { year: '1805', event: 'Vitória magistral de Austerlitz ("Batalha dos Três Imperadores") contra Áustria e Rússia' },
      { year: '1806', event: 'Decreto do Bloqueio Continental em Berlim proibindo comércio com a Grã-Bretanha' },
      { year: '1812', event: 'Desastrosa campanha militar na Rússia: colapso e retirada da Grande Armée no inverno' },
      { year: '1814', event: 'Invasão da França pelos Aliados, abdicação de Napoleão e outorga da Carta por Luís XVIII' },
      { year: '1815', event: 'Retorno nos "Cem Dias", derrota definitiva em Waterloo (18 jun.) e Congresso de Viena', highlight: true }
    ]
  },
  {
    id: 'era-4',
    period: '1815 – 1870',
    title: 'Restauração, Revoluções Operárias e Segundo Império',
    description: 'As barricadas de 1830 e 1848, a conquista do sufrágio universal masculino, as revoltas operárias, a remodelação de Haussmann e a derrota em Sedan.',
    color: {
      border: 'border-emerald-700/60',
      bg: 'bg-emerald-950/20',
      badgeBg: 'bg-emerald-900/40',
      badgeText: 'text-emerald-300',
      nodeBg: 'bg-emerald-500',
      accent: 'text-emerald-400'
    },
    icon: Landmark,
    events: [
      { year: '1815–1830', event: 'Restauração Bourbon: monarquia constitucional censitária sob Luís XVIII e Carlos X' },
      { year: '1830 (Jul)', event: 'Revolução dos "Três Dias Gloriosos" em Paris e entronização de Luís Filipe de Orléans', highlight: true },
      { year: '1831', event: 'Primeira Revolta dos Canuts em Lyon ("Viver trabalhando ou morrer combatendo")' },
      { year: '1848 (Fev)', event: 'Revolução de Fevereiro: queda da monarquia e proclamação da Segunda República', highlight: true },
      { year: '1848 (Mar)', event: 'Instituição pioneira do sufrágio universal masculino e criação dos Ateliês Nacionais' },
      { year: '1848 (Abr)', event: 'Abolição definitiva e incondicional da escravidão nas colônias francesas (Victor Schoelcher)', highlight: true },
      { year: '1848 (Jun)', event: 'Jornadas de Junho: insurreição operária em Paris e repressão militar sangrenta de Cavaignac' },
      { year: '1848 (Dez)', event: 'Luís Napoleão Bonaparte é eleito triunfalmente Presidente da República por voto popular' },
      { year: '1851 (Dez)', event: 'Golpe de Estado de 2 de Dezembro dissolvendo a Assembleia Nacional' },
      { year: '1852', event: 'Proclamação solene do Segundo Império sob o imperador Napoleão III' },
      { year: '1853–1870', event: 'Reforma urbana radical de Paris pelo Barão Haussmann: grandes bulevares e saneamento' },
      { year: '1870 (Set)', event: 'Derrota esmagadora em Sedan diante da Prússia, captura de Napoleão III e proclamação da Terceira República', highlight: true }
    ]
  },
  {
    id: 'era-5',
    period: '1871 – 1914',
    title: 'A Comuna de Paris e a República Laica',
    description: 'A insurreição do autogoverno operário de 1871, a escola primária laica de Jules Ferry, a separação da Igreja em 1905 e o Caso Dreyfus.',
    color: {
      border: 'border-purple-700/60',
      bg: 'bg-purple-950/20',
      badgeBg: 'bg-purple-900/40',
      badgeText: 'text-purple-300',
      nodeBg: 'bg-purple-500',
      accent: 'text-purple-400'
    },
    icon: BookOpen,
    events: [
      { year: '1871 (Mar)', event: 'Insurreição popular em Montmartre e proclamação solene da Comuna de Paris (28 mar.)', highlight: true },
      { year: '1871 (Abr)', event: 'Decretos revolucionários: separação Igreja-Estado, teto salarial público e requisição de fábricas' },
      { year: '1871 (Mai)', event: 'Semana Sangrenta (21–28 mai.): exército de Versalhes massacra a Comuna e fuzila defensores no Père-Lachaise', highlight: true },
      { year: '1875', event: 'Aprovação das Leis Constitucionais fundando institucionalmente a Terceira República' },
      { year: '1881–1882', event: 'Leis Jules Ferry: criação da escola pública primária laica, gratuita e obrigatória', highlight: true },
      { year: '1894–1906', event: 'O Caso Dreyfus fratura a França entre nacionalistas antissemitas e defensores dos direitos humanos' },
      { year: '1898', event: 'Émile Zola publica no jornal L\'Aurore o histórico manifesto "J\'accuse...!" em defesa de Dreyfus' },
      { year: '1905 (Dez)', event: 'Promulgação da histórica Lei de Separação entre Igreja e Estado consolidando a laicidade republicana', highlight: true }
    ]
  },
  {
    id: 'era-6',
    period: '1914 – 1944',
    title: 'Guerras Mundiais, Frente Popular, Vichy e Resistência',
    description: 'As trincheiras de 1914-1918, a conquista de férias remuneradas em 1936, a tragédia colaboracionista de 1940 e a Libertação pelo CNR.',
    color: {
      border: 'border-orange-700/60',
      bg: 'bg-orange-950/20',
      badgeBg: 'bg-orange-900/40',
      badgeText: 'text-orange-300',
      nodeBg: 'bg-orange-500',
      accent: 'text-orange-400'
    },
    icon: Flame,
    events: [
      { year: '1914', event: 'Assassinato de Jean Jaurès e eclosão da Primeira Guerra Mundial sob a "Union Sacrée"' },
      { year: '1916', event: 'Batalha de Verdun: o morticínio épico de trincheiras entre exércitos francês e alemão' },
      { year: '1918 (Nov)', event: 'Armistício de Compiègne encerra os combates com a vitória aliada' },
      { year: '1919', event: 'Tratado de Versalhes: restituição formal da Alsácia e Lorena à soberania da França' },
      { year: '1934 (Fev)', event: 'Insurreição violenta das ligas de extrema-direita antiparlamentares diante do Palais Bourbon' },
      { year: '1936 (Jun)', event: 'Vitória da Frente Popular (Léon Blum) e Acordos de Matignon: 40h semanais e férias remuneradas', highlight: true },
      { year: '1939 (Set)', event: 'França declara guerra à Alemanha nazista após a invasão da Polônia' },
      { year: '1940 (Jun)', event: 'Blitzkrieg nazista, colapso da Terceira República e instalação do regime autoritário de Vichy (Pétain)' },
      { year: '1940 (Jun)', event: 'Apelo de 18 de Junho do General De Gaulle na BBC de Londres conclamando à Resistência', highlight: true },
      { year: '1942 (Jul)', event: 'Rafle du Vel\' d\'Hiv: polícia francesa prende mais de 13 mil judeus para deportação a Auschwitz' },
      { year: '1943 (Mai)', event: 'Jean Moulin funda em Paris o Conselho Nacional da Resistência (CNR) unificando 16 movimentos', highlight: true },
      { year: '1944 (Mar)', event: 'Aprovação unânime do Programa do CNR ("Les Jours Heureux") projetando o Estado Social', highlight: true },
      { year: '1944 (Abr)', event: 'Ordenança de Argel concede pela primeira vez o direito de voto e elegibilidade às mulheres francesas', highlight: true },
      { year: '1944 (Ago)', event: 'Desembarque dos Aliados na Normandia e insurreição popular pela Libertação de Paris', highlight: true }
    ]
  },
  {
    id: 'era-7',
    period: '1945 – 1975',
    title: 'Reconstrução, Segurança Social e as Trente Glorieuses',
    description: 'A fundação da Segurança Social paritária, as grandes nacionalizações, o planejamento Monnet, a Quinta República e Maio de 1968.',
    color: {
      border: 'border-cyan-700/60',
      bg: 'bg-cyan-950/20',
      badgeBg: 'bg-cyan-900/40',
      badgeText: 'text-cyan-300',
      nodeBg: 'bg-cyan-500',
      accent: 'text-cyan-400'
    },
    icon: Sparkles,
    events: [
      { year: '1945 (Out)', event: 'Promulgação das ordenanças fundando a Segurança Social (Pierre Laroque e Ambroise Croizat)', highlight: true },
      { year: '1945–1946', event: 'Onda de nacionalizações estruturais: Renault, bancos de depósito, minas e fundação da EDF/GDF' },
      { year: '1946', event: 'Constituição da Quarta República e criação do Comissariado Geral do Plano por Jean Monnet' },
      { year: '1950', event: 'Instituição legal do Salário Mínimo Interprofissional Garantido (SMIG)', highlight: true },
      { year: '1954', event: 'Fim da Guerra da Indochina em Dien Bien Phu e eclosão da insurreição armada na Argélia' },
      { year: '1958', event: 'Crise de Maio em Argel, retorno do general De Gaulle e promulgação da Constituição da Quinta República', highlight: true },
      { year: '1962', event: 'Acordos de Évian encerram a Guerra da Argélia e aprovação da eleição presidencial por voto universal direto' },
      { year: '1968 (Mai)', event: 'Maio de 1968: explosão estudantil, greve geral operária de 9 milhões de trabalhadores e Acordos de Grenelle', highlight: true },
      { year: '1970', event: 'Reforma do salário mínimo com a criação do SMIC, legalmente indexado aos ganhos de produtividade nacional' },
      { year: '1973', event: 'Primeiro choque internacional do petróleo: estagflação e fim das taxas aceleradas de expansão' },
      { year: '1975', event: 'Promulgação da Lei Veil despenalizando o aborto e encerramento convencional das Trente Glorieuses', highlight: true }
    ]
  }
];

export const ChapterChronologyScheme: React.FC = () => {
  const [activeView, setActiveView] = useState<'mindmap' | 'timeline' | 'table'>('mindmap');
  const [selectedEraId, setSelectedEraId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEras = selectedEraId === 'all' 
    ? CHRONOLOGY_ERAS 
    : CHRONOLOGY_ERAS.filter(era => era.id === selectedEraId);

  const totalEvents = CHRONOLOGY_ERAS.reduce((acc, era) => acc + era.events.length, 0);

  return (
    <div className="space-y-6 max-w-full">
      {/* Top Banner & View Switcher */}
      <div className="bg-[#121215] border border-amber-500/40 rounded-xl p-4 sm:p-5 shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                Esquema Cronológico Estruturado · 1715–1975
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-serif font-bold text-stone-100 mt-0.5">
              Mapa Mental e Linha Histórica das 7 Épocas da França Moderna
            </h4>
            <p className="text-xs text-stone-400 font-mono mt-0.5">
              64 marcos históricos organizados analiticamente em 7 eixos estruturais
            </p>
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center gap-1.5 bg-stone-900/90 p-1 rounded-lg border border-stone-800 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setActiveView('mindmap')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all ${
                activeView === 'mindmap' 
                  ? 'bg-amber-600 text-stone-950 shadow-md' 
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Mapa Mental</span>
            </button>
            <button
              onClick={() => setActiveView('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all ${
                activeView === 'timeline' 
                  ? 'bg-amber-600 text-stone-950 shadow-md' 
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Linha do Tempo</span>
            </button>
            <button
              onClick={() => setActiveView('table')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all ${
                activeView === 'table' 
                  ? 'bg-amber-600 text-stone-950 shadow-md' 
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Tabela</span>
            </button>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
          {/* Era Quick Selectors */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
            <button
              onClick={() => setSelectedEraId('all')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono whitespace-nowrap transition-colors ${
                selectedEraId === 'all'
                  ? 'bg-amber-500/20 border border-amber-500/60 text-amber-300 font-bold'
                  : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-200'
              }`}
            >
              Todas as 7 Épocas ({totalEvents})
            </button>
            {CHRONOLOGY_ERAS.map((era, idx) => (
              <button
                key={era.id}
                onClick={() => setSelectedEraId(era.id)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono whitespace-nowrap transition-colors ${
                  selectedEraId === era.id
                    ? `${era.color.bg} border ${era.color.border} ${era.color.accent} font-bold`
                    : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                Época {idx + 1}: {era.period}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[200px] shrink-0">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar marco ou ano..."
              className="w-full bg-stone-900 border border-stone-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-stone-200 font-mono placeholder:text-stone-600 focus:outline-none focus:border-amber-500/60"
            />
          </div>
        </div>
      </div>

      {/* VIEW 1: MAPA MENTAL / ESQUEMA DE BLOCOS ESTRUTURAIS */}
      {activeView === 'mindmap' && (
        <div className="space-y-6">
          {/* Central Hub Node Banner */}
          <div className="text-center py-4 px-6 bg-gradient-to-r from-stone-950 via-amber-950/40 to-stone-950 border border-amber-600/40 rounded-xl relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Layers className="w-4 h-4" />
              <span>NÚCLEO CONCEITUAL DO MAPA MENTAL</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-100">
              França: Da Monarquia Absolutista à República Social (1715–1975)
            </h3>
            <p className="text-xs font-mono text-stone-400 max-w-2xl mx-auto mt-1">
              Sete ciclos dialéticos de disputa entre Soberania Nacional, Cidadania, Direitos Sociais e Autoridade Estatal
            </p>
          </div>

          {/* Grid of the 7 Structured Era Branches */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredEras.map((era, eIdx) => {
              const EraIcon = era.icon;
              const eraEvents = searchQuery
                ? era.events.filter(ev => 
                    ev.year.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    ev.event.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                : era.events;

              if (searchQuery && eraEvents.length === 0) return null;

              return (
                <div 
                  key={era.id} 
                  className={`border ${era.color.border} ${era.color.bg} rounded-xl p-5 shadow-lg flex flex-col justify-between transition-all hover:border-amber-500/50`}
                >
                  <div className="space-y-3">
                    {/* Header of the Branch */}
                    <div className="flex items-start justify-between gap-3 border-b border-stone-800/80 pb-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${era.color.badgeBg} ${era.color.badgeText}`}>
                            {era.period}
                          </span>
                          <span className="text-[11px] font-mono text-stone-400">
                            Eixo {eIdx + 1}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-serif font-bold text-stone-100 leading-tight">
                          {era.title}
                        </h4>
                      </div>
                      <div className={`w-8 h-8 rounded-lg ${era.color.badgeBg} border ${era.color.border} flex items-center justify-center shrink-0`}>
                        <EraIcon className={`w-4 h-4 ${era.color.accent}`} />
                      </div>
                    </div>

                    <p className="text-xs font-serif italic text-stone-300 leading-relaxed">
                      {era.description}
                    </p>

                    {/* Events inside this branch */}
                    <div className="space-y-2 pt-2">
                      {eraEvents.map((ev, evIdx) => (
                        <div 
                          key={evIdx}
                          className={`p-2.5 rounded-lg border text-xs font-mono transition-colors flex items-start gap-2.5 ${
                            ev.highlight 
                              ? 'bg-amber-950/40 border-amber-600/50 text-amber-200' 
                              : 'bg-stone-900/80 border-stone-800 text-stone-300 hover:border-stone-700'
                          }`}
                        >
                          <span className="px-1.5 py-0.5 rounded bg-stone-950 font-bold text-amber-400 text-[11px] shrink-0 border border-stone-800">
                            {ev.year}
                          </span>
                          <span className="font-serif text-justify text-xs leading-relaxed text-stone-200 pt-0.5">
                            {ev.event}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-stone-800/60 flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span>Total nesta época:</span>
                    <span className="font-bold text-stone-200">{eraEvents.length} marcos</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 2: LINHA DO TEMPO VERTICAL CONTÍNUA */}
      {activeView === 'timeline' && (
        <div className="bg-[#141417] border border-stone-800 rounded-xl p-5 sm:p-8 shadow-xl">
          <div className="relative border-l-2 border-amber-600/40 ml-3 sm:ml-5 space-y-8 pl-5 sm:pl-8">
            {filteredEras.map((era, eIdx) => {
              const eraEvents = searchQuery
                ? era.events.filter(ev => 
                    ev.year.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    ev.event.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                : era.events;

              if (searchQuery && eraEvents.length === 0) return null;

              return (
                <div key={era.id} className="space-y-5 relative">
                  {/* Era Milestone Dot and Header */}
                  <div className="absolute -left-[29px] sm:-left-[41px] top-0 w-6 h-6 rounded-full bg-stone-950 border-2 border-amber-500 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>

                  <div className={`p-4 rounded-xl border ${era.color.border} ${era.color.bg}`}>
                    <div className="flex items-center gap-2.5">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${era.color.badgeBg} ${era.color.badgeText}`}>
                        {era.period}
                      </span>
                      <h4 className="text-base sm:text-lg font-serif font-bold text-stone-100">
                        {era.title}
                      </h4>
                    </div>
                    <p className="text-xs font-serif italic text-stone-300 mt-1">
                      {era.description}
                    </p>
                  </div>

                  {/* List of Timeline Nodes */}
                  <div className="space-y-3 pl-2 sm:pl-4">
                    {eraEvents.map((ev, evIdx) => (
                      <div 
                        key={evIdx}
                        className={`p-3 rounded-lg border transition-all flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 ${
                          ev.highlight
                            ? 'bg-amber-950/30 border-amber-600/50 shadow-sm'
                            : 'bg-stone-900/60 border-stone-800/80 hover:border-stone-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span className="font-mono font-bold text-amber-300 text-xs px-2 py-0.5 rounded bg-stone-950 border border-stone-800">
                            {ev.year}
                          </span>
                        </div>
                        <p className="font-serif text-sm text-stone-200 leading-relaxed text-justify">
                          {ev.event}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 3: TABELA ANALÍTICA */}
      {activeView === 'table' && (
        <div className="bg-[#141417] border border-stone-800 rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-900/90 border-b border-stone-800 text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                  <th className="py-3 px-4 w-32 shrink-0">Ano / Período</th>
                  <th className="py-3 px-4 w-48 shrink-0">Época Histórica</th>
                  <th className="py-3 px-4">Acontecimento Histórico e Impacto Institucional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 text-xs">
                {filteredEras.flatMap((era) => {
                  const eraEvents = searchQuery
                    ? era.events.filter(ev => 
                        ev.year.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        ev.event.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                    : era.events;

                  return eraEvents.map((ev, evIdx) => (
                    <tr 
                      key={`${era.id}-${evIdx}`}
                      className={`hover:bg-stone-900/50 transition-colors ${
                        ev.highlight ? 'bg-amber-950/20' : ''
                      }`}
                    >
                      <td className="py-3 px-4 font-mono font-bold text-amber-300 whitespace-nowrap align-top">
                        <span className="px-2 py-0.5 rounded bg-stone-950 border border-stone-800">
                          {ev.year}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-stone-400 align-top whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded text-[10px] ${era.color.badgeBg} ${era.color.badgeText}`}>
                          {era.period}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-serif text-stone-200 text-justify leading-relaxed align-top">
                        {ev.event}
                      </td>
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
