import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  Landmark, 
  ShieldCheck, 
  Scale, 
  ScrollText, 
  Sparkles, 
  Search, 
  Filter, 
  Quote, 
  Building2, 
  Award, 
  Layers,
  Copy,
  Check
} from 'lucide-react';

export interface PrimarySourceEntry {
  id: number;
  author: string;
  title: string;
  year: string;
  location: string;
  category: string; // Thematic category
  type: 'Filosofia & Teoria' | 'Declaração de Direitos' | 'Constituição' | 'Legislação & Código' | 'Decreto Social & Trabalho' | 'Tratado & Manifesto';
  context: string;
  keyConcept: string;
  fullCitation: string;
}

export const PRIMARY_SOURCES_DATA: PrimarySourceEntry[] = [
  // Categoria 1: Iluminismo e Razão Crítica
  {
    id: 1,
    author: 'MONTESQUIEU (Charles-Louis de Secondat)',
    title: "De l'esprit des lois",
    year: '1748',
    location: 'Genebra: Barrillot & Fils',
    category: '1. Filosofia das Luzes e Crítica ao Antigo Regime',
    type: 'Filosofia & Teoria',
    context: 'Tratado de filosofia política e sociologia jurídica que analisa a natureza dos governos e formula a doutrina da contenção mútua entre Executivo, Legislativo e Judiciário para conter o despotismo.',
    keyConcept: 'Divisão e equilíbrio tripartite dos poderes; freios institucionais contra a tirania.',
    fullCitation: "MONTESQUIEU. De l'esprit des lois. Genebra: Barrillot & Fils, 1748."
  },
  {
    id: 2,
    author: 'VOLTAIRE (François-Marie Arouet)',
    title: 'Traité sur la tolérance à l\'occasion de la mort de Jean Calas',
    year: '1763',
    location: 'Genebra',
    category: '1. Filosofia das Luzes e Crítica ao Antigo Regime',
    type: 'Filosofia & Teoria',
    context: 'Manifesto filosófico escrito após o erro judiciário do Caso Calas, defendendo a liberdade de consciência, a razão secular e o combate ao fanatismo religioso institucional.',
    keyConcept: 'Tolerância religiosa, primado da razão crítica e defesa dos direitos civis.',
    fullCitation: "VOLTAIRE. Traité sur la tolérance à l'occasion de la mort de Jean Calas. Genebra, 1763."
  },
  {
    id: 3,
    author: 'ROUSSEAU, Jean-Jacques',
    title: 'Du contrat social ou Principes du droit politique',
    year: '1762',
    location: 'Amsterdã: Marc-Michel Rey',
    category: '1. Filosofia das Luzes e Crítica ao Antigo Regime',
    type: 'Filosofia & Teoria',
    context: 'Obra monumental sobre a legitimidade do pacto político, na qual Rousseau formula os conceitos de Vontade Geral e Soberania Popular inalienável e indivisível.',
    keyConcept: 'Vontade Geral, soberania popular inalienável e igualdade do corpo político.',
    fullCitation: "ROUSSEAU, Jean-Jacques. Du contrat social ou Principes du droit politique. Amsterdã: Marc-Michel Rey, 1762."
  },
  {
    id: 4,
    author: "DIDEROT, Denis; D'ALEMBERT, Jean le Rond",
    title: 'Encyclopédie, ou Dictionnaire raisonné des sciences, des arts et des métiers',
    year: '1751–1772',
    location: 'Paris: Briasson, David, Le Breton, Durand (28 vol.)',
    category: '1. Filosofia das Luzes e Crítica ao Antigo Regime',
    type: 'Filosofia & Teoria',
    context: 'O maior empreendimento coletivo de secularização e difusão do saber técnico e científico do Ocidente, questionando dogmas absolutistas e eclesiásticos.',
    keyConcept: 'Organização racional do conhecimento, progresso técnico e secularização intelectual.',
    fullCitation: "DIDEROT, Denis; D'ALEMBERT, Jean le Rond. Encyclopédie, ou Dictionnaire raisonné des sciences, des arts et des métiers. Paris: Briasson, David, Le Breton, Durand, 1751–1772. 28 v."
  },

  // Categoria 2: Revolução Francesa e Constitucionalismo
  {
    id: 5,
    author: 'SIEYÈS, Emmanuel-Joseph (Abade Sieyès)',
    title: 'Qu\'est-ce que le Tiers-État?',
    year: '1789',
    location: 'Paris',
    category: '2. Revolução Francesa, Direitos e soberania (1789–1795)',
    type: 'Tratado & Manifesto',
    context: 'Panfledo revolucionário definitivo que definiu o Terceiro Estado como uma Nação completa, exigindo a substituição da ordem feudal estamental pela soberania cívica unificada.',
    keyConcept: 'A Nação como poder constituinte originário e a negação dos privilégios estamentais.',
    fullCitation: "SIEYÈS, Emmanuel-Joseph. Qu'est-ce que le Tiers-État? Paris, 1789."
  },
  {
    id: 6,
    author: 'ASSEMBLEIA NACIONAL CONSTITUINTE',
    title: 'Déclaration des droits de l\'homme et du citoyen',
    year: '1789',
    location: 'Versalhes (26 de agosto de 1789)',
    category: '2. Revolução Francesa, Direitos e soberania (1789–1795)',
    type: 'Declaração de Direitos',
    context: 'Certidão de nascimento do direito público contemporâneo, proclamando a liberdade, a igualdade jurídica civil, a propriedade sagrada e o pertencimento da soberania à Nação.',
    keyConcept: 'Igualdade perante a lei, liberdade individual, propriedade privada e soberania nacional.',
    fullCitation: "FRANÇA. Déclaration des droits de l'homme et du citoyen. Versalhes: Assembleia Nacional Constituinte, 26 ago. 1789."
  },
  {
    id: 7,
    author: 'GOUGES, Olympe de',
    title: 'Déclaration des droits de la femme et de la citoyenne',
    year: '1791',
    location: 'Paris',
    category: '2. Revolução Francesa, Direitos e soberania (1789–1795)',
    type: 'Declaração de Direitos',
    context: 'Manifesto pioneiro do feminismo cívico denunciando a exclusão das mulheres da cidadania revolucionária e exigindo igualdade política e social plena.',
    keyConcept: 'Universalidade dos direitos cívicos sem distinção de gênero.',
    fullCitation: "GOUGES, Olympe de. Déclaration des droits de la femme et de la citoyenne. Paris, 1791."
  },
  {
    id: 8,
    author: 'REPÚBLICA FRANCESA (Assembleia Constituinte)',
    title: 'Constitution française du 3 septembre 1791',
    year: '1791',
    location: 'Paris: Imprimerie Nationale',
    category: '2. Revolução Francesa, Direitos e soberania (1789–1795)',
    type: 'Constituição',
    context: 'Primeira constituição escrita da França, instituindo a Monarquia Constitucional com separação de poderes, mas estabelecendo o voto censitário excludente.',
    keyConcept: 'Monarquia constitucional e distinção entre cidadãos ativos e passivos.',
    fullCitation: "FRANÇA. Constitution française du 3 septembre 1791. Paris: Imprimerie Nationale, 1791."
  },
  {
    id: 9,
    author: 'REPÚBLICA FRANCESA (Convenção Termidoriana)',
    title: 'Constitution de la République française du 5 Fructidor an III',
    year: '1795',
    location: 'Paris',
    category: '2. Revolução Francesa, Direitos e soberania (1789–1795)',
    type: 'Constituição',
    context: 'Constituição republicana moderada que fundou o regime do Diretório, restaurando o sufrágio censitário e criando o Poder Legislativo bicameral.',
    keyConcept: 'República burguesa proprietária, Poder Executivo colegiado e contenção do igualitarismo.',
    fullCitation: "FRANÇA. Constitution de la République française du 5 Fructidor an III. Paris, 1795."
  },

  // Categoria 3: Codificação Napoleônica e Lutas Sociais do Século XIX
  {
    id: 10,
    author: 'BONAPARTE, Napoléon (Comissão Portalis)',
    title: 'Code civil des Français (Código Napoleônico)',
    year: '1804',
    location: 'Paris: Imprimerie de la République',
    category: '3. Codificação Napoleônica e Lutas Sociais (1804–1871)',
    type: 'Legislação & Código',
    context: 'Sintetizou as conquistas jurídicas da Revolução de 1789, unificando o direito privado francês sob os pilares da igualdade civil masculina e da sacralidade da propriedade.',
    keyConcept: 'Inviolabilidade da propriedade privada, secularização civil e autoridade patriarcal familiar.',
    fullCitation: "BONAPARTE, Napoléon. Code civil des Français. Paris: Imprimerie de la République, 1804."
  },
  {
    id: 11,
    author: 'MARX, Karl (Conselho Geral da AIT)',
    title: 'La Guerre civile en France (Endereço da AIT)',
    year: '1871',
    location: 'Londres: Conselho Geral da Associação Internacional dos Trabalhadores',
    category: '3. Codificação Napoleônica e Lutas Sociais (1804–1871)',
    type: 'Tratado & Manifesto',
    context: 'Análise seminal da Comuna de Paris de 1871, formulando a lição de que o proletariado precisa desmantelar a máquina estatal burocrático-militar burguesa.',
    keyConcept: 'Quebra da máquina estatal burguesa, mandato revogável e a Comuna como forma política da emancipação do trabalho.',
    fullCitation: "MARX, Karl. La Guerre civile en France (Adresse du Conseil Général de l'AIT). Londres, 1871."
  },

  // Categoria 4: Guerras Mundiais e Frente Popular
  {
    id: 12,
    author: 'POTÊNCIAS ALLIADAS E ALEMANHA',
    title: 'Traité de paix de Versailles (Tratado de Versalhes)',
    year: '1919',
    location: 'Versalhes (28 de junho de 1919)',
    category: '4. Ordem Internacional, Entreguerras e Frente Popular (1919–1936)',
    type: 'Tratado & Manifesto',
    context: 'Tratado de paz que encerrou formalmente a Primeira Guerra Mundial, restituindo as províncias da Alsácia e Lorena à soberania da França.',
    keyConcept: 'Restituição da integridade territorial francesa e reparações de guerra.',
    fullCitation: "FRANÇA. Traité de paix entre les Puissances alliées et associées et l'Allemagne (Traité de Versailles). Versalhes, 28 jun. 1919."
  },
  {
    id: 13,
    author: 'BLUM, Léon (Governo da Frente Popular)',
    title: 'L\'exercice du pouvoir: discours et écrits du Front Populaire',
    year: '1936 [1937]',
    location: 'Paris: Gallimard',
    category: '4. Ordem Internacional, Entreguerras e Frente Popular (1919–1936)',
    type: 'Tratado & Manifesto',
    context: 'Coletânea de discursos do primeiro-ministro socialista Léon Blum justificando as reformas dos Acordos de Matignon: semana de 40 horas e férias remuneradas.',
    keyConcept: 'Lazer operário, negociação coletiva obrigatória e regulação pública do trabalho.',
    fullCitation: "BLUM, Léon. L'exercice du pouvoir: discours et écrits du gouvernement de Front Populaire. Paris: Gallimard, 1937 [1936]."
  },

  // Categoria 5: Resistência, Reconstrução e República Social
  {
    id: 14,
    author: 'CONSELHO NACIONAL DA RESISTÊNCIA (CNR)',
    title: 'Les Jours Heureux: Programme du Conseil national de la Résistance',
    year: '1944',
    location: 'Paris (15 de março de 1944)',
    category: '5. Resistência, Reconstrução e República Social (1944–1968)',
    type: 'Tratado & Manifesto',
    context: 'Documento fundador do Estado Social francês aprovado na clandestinidade sob Jean Moulin, unificando gaullistas, comunistas, socialistas e democratas-cristãos.',
    keyConcept: 'Nacionalização dos monopólios, Seguridade Social Universal e eliminação das oligarquias econômicas.',
    fullCitation: "CONSEIL NATIONAL DE LA RÉSISTANCE (CNR). Les Jours Heureux: Programme du Conseil national de la Résistance. Paris, 15 mar. 1944."
  },
  {
    id: 15,
    author: 'GOVERNO PROVISÓRIO DA REPÚBLICA FRANCESA (De Gaulle)',
    title: 'Ordonnance du 21 avril 1944 (Droit de vote des femmes)',
    year: '1944',
    location: 'Argel (21 de abril de 1944)',
    category: '5. Resistência, Reconstrução e República Social (1944–1968)',
    type: 'Decreto Social & Trabalho',
    context: 'Ordenança promulgada no Governo Provisório em Argel encerrando mais de 150 anos de exclusão eleitoral feminina na França.',
    keyConcept: 'Cidadania plena e sufrágio universal irrestrito para as mulheres.',
    fullCitation: "FRANÇA. Ordonnance du 21 avril 1944 portant organisation des pouvoirs publics en France après la Libération (Droit de vote des femmes). Argel, 1944."
  },
  {
    id: 16,
    author: 'GOVERNO PROVISÓRIO (Laroque & Croizat)',
    title: 'Ordonnance n° 45-2250 du 4 octobre 1945 (Sécurité Sociale)',
    year: '1945',
    location: 'Paris: Journal Officiel de la République Française',
    category: '5. Resistência, Reconstrução e República Social (1944–1968)',
    type: 'Decreto Social & Trabalho',
    context: 'Texto fundador da Sécurité Sociale moderna, elaborado por Pierre Laroque e implementado pelo ministro Ambroise Croizat sob o princípio da solidariedade no trabalho.',
    keyConcept: 'Gestão operária paritária, financiamento por contribuição salarial e cobertura universal dos riscos da vida.',
    fullCitation: "FRANÇA. Ordonnance n° 45-2250 du 4 octobre 1945 portant organisation de la sécurité sociale. Paris: Journal Officiel, 1945."
  },
  {
    id: 17,
    author: 'REPÚBLICA FRANCESA (Assembleia Constituinte de 1946)',
    title: 'Constitution de la République française du 27 octobre 1946',
    year: '1946',
    location: 'Paris: Journal Officiel',
    category: '5. Resistência, Reconstrução e República Social (1944–1968)',
    type: 'Constituição',
    context: 'Constituição da Quarta República, cujo célebre Preâmbulo constitucionalizou os direitos sociais, econômicos e de solidariedade do pós-guerra.',
    keyConcept: 'Preâmbulo social, direito à saúde, instrução pública e igualdade de gênero.',
    fullCitation: "FRANÇA. Constitution de la République française du 27 octobre 1946. Paris: Journal Officiel, 1946."
  },
  {
    id: 18,
    author: 'REPÚBLICA FRANCESA (Assembleia Nacional)',
    title: 'Loi n° 50-205 du 11 février 1950 (Instituição do SMIG)',
    year: '1950',
    location: 'Paris: Journal Officiel',
    category: '5. Resistência, Reconstrução e República Social (1944–1968)',
    type: 'Decreto Social & Trabalho',
    context: 'Lei de ordem pública que estabeleceu o Salário Mínimo Interprofissional Garantido (SMIG), garantindo um piso nacional contra a miséria salarial.',
    keyConcept: 'Piso salarial mínimo nacional obrigatório e regulação protetiva do trabalho.',
    fullCitation: "FRANÇA. Loi n° 50-205 du 11 février 1950 relative aux conventions collectives et au règlement des conflits collectifs de travail (Création du SMIG). Paris, 1950."
  },
  {
    id: 19,
    author: 'REPÚBLICA FRANCESA (Charles de Gaulle & Michel Debré)',
    title: 'Constitution de la République française du 4 octobre 1958',
    year: '1958',
    location: 'Paris: Journal Officiel',
    category: '5. Resistência, Reconstrução e República Social (1944–1968)',
    type: 'Constituição',
    context: 'Constituição fundadora da Quinta República, instituindo o regime semipresidencialista com amplos poderes ao chefe de Estado.',
    keyConcept: 'Executivo presidencial forte, racionalização parlamentar e estabilidade governamental.',
    fullCitation: "FRANÇA. Constitution de la République française du 4 octobre 1958. Paris: Journal Officiel, 1958."
  },
  {
    id: 20,
    author: 'PARCEIROS SOCIAIS E GOVERNO (Acordos de Grenelle)',
    title: 'Constat de Grenelle (Relevé de conclusions des négociations)',
    year: '1968',
    location: 'Paris: Ministère des Affaires Sociales (27 de maio de 1968)',
    category: '5. Resistência, Reconstrução e República Social (1944–1968)',
    type: 'Decreto Social & Trabalho',
    context: 'Acordos negociados durante a greve geral de Maio de 1968 entre o governo Pompidou, sindicatos (CGT) e patronato, reajustando o SMIG em 35%.',
    keyConcept: 'Elevação do piso salarial, seções sindicais na empresa e arbitragem de crise social.',
    fullCitation: "FRANÇA. Constat de Grenelle: relevé de conclusions des négociations entre partenaires sociaux et gouvernement. Paris: Ministère des Affaires Sociales, 27 mai 1968."
  }
];

export const ChapterPrimarySourcesScheme: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const categories = Array.from(new Set(PRIMARY_SOURCES_DATA.map(s => s.category)));
  const types = Array.from(new Set(PRIMARY_SOURCES_DATA.map(s => s.type)));

  const filteredSources = PRIMARY_SOURCES_DATA.filter(source => {
    const matchesCategory = selectedCategory === 'all' || source.category === selectedCategory;
    const matchesType = selectedType === 'all' || source.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      source.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      source.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      source.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
      source.keyConcept.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesType && matchesSearch;
  });

  const handleCopyCitation = (source: PrimarySourceEntry) => {
    navigator.clipboard.writeText(source.fullCitation);
    setCopiedId(source.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAllSources = () => {
    const fullText = PRIMARY_SOURCES_DATA.map(s => `${s.id}. ${s.fullCitation}`).join('\n\n');
    navigator.clipboard.writeText(fullText);
    setCopiedId(-1);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="space-y-6 max-w-full">
      {/* Top Banner */}
      <div className="bg-[#121215] border border-amber-500/40 rounded-xl p-4 sm:p-5 shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                Acervo Documental de Fontes Primárias · 1748–1968
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-serif font-bold text-stone-100 mt-0.5">
              20 Fontes Primárias Fundamentais Organizadas por Eixos Temáticos
            </h4>
            <p className="text-xs text-stone-400 font-mono mt-0.5">
              Tratados filosóficos, declarações de direitos, constituições, códigos legais e decretos sociais do modelo francês
            </p>
          </div>

          <button
            onClick={handleCopyAllSources}
            className="px-3.5 py-2 bg-amber-950/80 hover:bg-amber-900 border border-amber-600/60 rounded-lg text-amber-300 font-mono text-xs font-bold flex items-center gap-2 transition-colors shrink-0 self-start sm:self-auto"
          >
            {copiedId === -1 ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>20 Fontes Copiadas!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copiar 20 Fontes em ABNT</span>
              </>
            )}
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-1">
          {/* Category Select Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-thin">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-amber-500/20 border border-amber-500/60 text-amber-300 font-bold'
                  : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-200'
              }`}
            >
              Todas as 5 Categorias (20)
            </button>
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded text-[11px] font-mono whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-500/20 border border-amber-500/60 text-amber-300 font-bold'
                    : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                Eixo {idx + 1}
              </button>
            ))}
          </div>

          {/* Type Filter & Search */}
          <div className="flex items-center gap-2 shrink-0">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-200 font-mono focus:outline-none focus:border-amber-500/60"
            >
              <option value="all">Todos os Tipos de Documento</option>
              {types.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            <div className="relative min-w-[180px]">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar fonte..."
                className="w-full bg-stone-900 border border-stone-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-stone-200 font-mono placeholder:text-stone-600 focus:outline-none focus:border-amber-500/60"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Display: Categorized Document Cards */}
      <div className="space-y-8">
        {categories.map((categoryName) => {
          const categorySources = filteredSources.filter(s => s.category === categoryName);
          if (categorySources.length === 0) return null;

          return (
            <div key={categoryName} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-stone-800 pb-2">
                <span className="px-2.5 py-1 rounded bg-amber-950/80 border border-amber-600/50 text-amber-300 font-mono font-bold text-xs">
                  {categoryName.split('.')[0]}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 uppercase tracking-wide">
                  {categoryName.substring(categoryName.indexOf('.') + 1).trim()}
                </h3>
                <span className="text-xs font-mono text-stone-400 ml-auto">
                  {categorySources.length} documento(s)
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categorySources.map((source) => (
                  <div
                    key={source.id}
                    className="bg-[#141417] border border-stone-800 hover:border-amber-600/50 rounded-xl p-4 sm:p-5 shadow-md flex flex-col justify-between transition-all space-y-4 group"
                  >
                    <div className="space-y-3">
                      {/* Top Badges */}
                      <div className="flex items-start justify-between gap-2 border-b border-stone-800/80 pb-2.5">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-amber-950/90 border border-amber-600/60 text-amber-300 flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                            {source.id}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-[10px] font-mono text-amber-400 font-bold">
                            {source.year}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-amber-950/40 border border-amber-700/40 text-[10px] font-mono text-amber-300">
                            {source.type}
                          </span>
                        </div>

                        <button
                          onClick={() => handleCopyCitation(source)}
                          title="Copiar citação ABNT"
                          className="p-1.5 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-400 hover:text-amber-300 rounded transition-colors"
                        >
                          {copiedId === source.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {/* Document Title & Author */}
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                          {source.author}
                        </span>
                        <h4 className="text-base font-serif font-bold text-stone-100 italic leading-snug group-hover:text-amber-300 transition-colors">
                          {source.title}
                        </h4>
                        <span className="text-[11px] font-mono text-stone-500 block">
                          {source.location}
                        </span>
                      </div>

                      {/* Context & Concept */}
                      <div className="space-y-2 pt-1">
                        <p className="text-xs font-serif text-stone-300 leading-relaxed text-justify">
                          {source.context}
                        </p>
                        <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-700/40 text-[11px] font-mono text-amber-200/90 space-y-1">
                          <span className="font-bold text-amber-400 uppercase tracking-widest text-[10px] block">
                            Conceito-Chave / Princípio Fundacional:
                          </span>
                          <p className="font-serif italic text-stone-200">
                            "{source.keyConcept}"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ABNT Full Citation Box */}
                    <div className="pt-2 border-t border-stone-800/80">
                      <div className="p-2 rounded bg-stone-950 border border-stone-900 text-[10px] font-mono text-stone-400 select-all leading-tight break-words">
                        {source.fullCitation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
