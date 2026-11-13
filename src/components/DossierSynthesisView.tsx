import React from 'react';
import { DossierTopic } from '../types/dossier';
import { Topic105SynthesisView } from './Topic105SynthesisView';
import { Topic108SynthesisView } from './Topic108SynthesisView';
import { Topic112SynthesisView } from './Topic112SynthesisView';
import { 
  Building2, 
  Users, 
  BookOpen, 
  Quote, 
  GraduationCap, 
  Flame 
} from 'lucide-react';

interface DossierSynthesisViewProps {
  topic: DossierTopic;
  getFontSizeClass: (type?: 'body' | 'heading' | 'quote') => string;
}

export const DossierSynthesisView: React.FC<DossierSynthesisViewProps> = ({
  topic,
  getFontSizeClass,
}) => {
  return (
    <div className="space-y-8 w-full box-border overflow-hidden">
      {/* Header Banner */}
      <div className="bg-[#161619] border border-amber-600/50 p-5 sm:p-7 rounded-2xl shadow-xl space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
            SÍNTESE ESTRUTURAL E QUADRO CONCEITUAL
          </span>
          <span className="text-[10px] font-mono text-stone-400">
            Registro nº {topic.categoryNumber} · {topic.periodLabel}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-stone-100">
          Síntese
        </h2>
        <p className="font-serif italic text-amber-400 text-sm sm:text-base">
          {topic.title} — {topic.tagline}
        </p>
      </div>

      {topic.id === 104 ? (
        <div className="bg-[#161619] border border-stone-800 p-6 sm:p-9 rounded-xl space-y-8 shadow-xl">
          {/* Header */}
          <div className="border-b border-stone-800 pb-5 space-y-2">
            <h3 className="font-serif text-2xl font-bold text-stone-100">SÍNTESE HISTÓRICA E CONCEITUAL</h3>
            <p className="font-serif italic text-amber-400 text-base">Socialismo utópico e anarquismo (1800–1880)</p>
          </div>

          {/* 1. CONTEXTO HISTÓRICO */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
              1. Contexto Histórico
            </h4>
            <p className="font-serif text-stone-300 text-justify leading-relaxed">
              O século XIX foi marcado pela expansão da Revolução Industrial, pelo crescimento das cidades, pela consolidação do capitalismo e pela formação do proletariado industrial.
            </p>
            <p className="font-serif text-stone-300 text-justify leading-relaxed">
              As condições de trabalho e a desigualdade econômica estimularam o desenvolvimento de correntes que questionavam a organização da sociedade. Entre elas, destacaram-se o socialismo utópico e o anarquismo.
            </p>
          </div>

          {/* 2. SOCIALISMO UTÓPICO */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
              2. Socialismo Utópico
            </h4>
            <p className="font-serif text-stone-300 text-justify leading-relaxed">
              O socialismo utópico defendia a reorganização da sociedade por meio da cooperação, da associação e de instituições consideradas mais justas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#121214] p-4.5 rounded-lg border border-stone-800 space-y-2">
                <h5 className="font-serif font-bold text-amber-300 text-base">Henri de Saint-Simon (1760–1825)</h5>
                <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-stone-300">
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Valorização da indústria e da ciência.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Organização racional da produção.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica aos privilégios aristocráticos.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Preocupação com as classes mais pobres.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Administração especializada da sociedade.</li>
                </ul>
              </div>
              <div className="bg-[#121214] p-4.5 rounded-lg border border-stone-800 space-y-2">
                <h5 className="font-serif font-bold text-amber-300 text-base">Charles Fourier (1772–1837)</h5>
                <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-stone-300">
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica à sociedade comercial.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Atração passional.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Organização comunitária.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Projeto dos falanstérios.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica à posição social das mulheres.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Trabalho organizado segundo as inclinações humanas.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. ANARQUISMO */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
              3. Anarquismo
            </h4>
            <p className="font-serif text-stone-300 text-justify leading-relaxed">
              O anarquismo critica a autoridade coercitiva e a concentração do poder estatal. Defende diferentes formas de organização baseadas na autonomia, na associação voluntária e na descentralização.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#121214] p-4.5 rounded-lg border border-stone-800 space-y-2">
                <h5 className="font-serif font-bold text-amber-300 text-base">Pierre-Joseph Proudhon (1809–1865)</h5>
                <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-stone-300">
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica à propriedade capitalista.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Distinção entre posse e propriedade.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Mutualismo.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Federalismo.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Associações de produtores.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Reciprocidade econômica.</li>
                </ul>
              </div>
              <div className="bg-[#121214] p-4.5 rounded-lg border border-stone-800 space-y-2">
                <h5 className="font-serif font-bold text-amber-300 text-base">Mikhail Bakunin (1814–1876)</h5>
                <ul className="space-y-1.5 font-serif text-xs sm:text-sm text-stone-300">
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica ao Estado.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Revolução social.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Coletivismo.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Federalismo.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Autonomia das organizações populares.</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400">•</span> Crítica à formação de novas elites políticas.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. QUADRO COMPARATIVO */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
              4. Quadro Comparativo
            </h4>
            <div className="overflow-x-auto rounded-lg border border-stone-800">
              <table className="w-full text-left font-serif text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-900 border-b border-stone-800 text-amber-300 font-mono text-xs">
                    <th className="p-3 border-r border-stone-800">Autor</th>
                    <th className="p-3 border-r border-stone-800">Principal preocupação</th>
                    <th className="p-3">Proposta central</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800 text-stone-200">
                  <tr className="bg-[#121214] hover:bg-stone-900/50">
                    <td className="p-3 font-bold text-amber-300 border-r border-stone-800">Saint-Simon</td>
                    <td className="p-3 border-r border-stone-800">Organização da sociedade industrial</td>
                    <td className="p-3">Administração racional da produção</td>
                  </tr>
                  <tr className="bg-[#161619] hover:bg-stone-900/50">
                    <td className="p-3 font-bold text-amber-300 border-r border-stone-800">Fourier</td>
                    <td className="p-3 border-r border-stone-800">Relações sociais e trabalho</td>
                    <td className="p-3">Comunidades associativas e falanstérios</td>
                  </tr>
                  <tr className="bg-[#121214] hover:bg-stone-900/50">
                    <td className="p-3 font-bold text-amber-300 border-r border-stone-800">Proudhon</td>
                    <td className="p-3 border-r border-stone-800">Propriedade e concentração econômica</td>
                    <td className="p-3">Mutualismo e federalismo</td>
                  </tr>
                  <tr className="bg-[#161619] hover:bg-stone-900/50">
                    <td className="p-3 font-bold text-amber-300 border-r border-stone-800">Bakunin</td>
                    <td className="p-3 border-r border-stone-800">Estado e autoridade política</td>
                    <td className="p-3">Revolução social e federalismo libertário</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. CONCEITOS FUNDAMENTAIS */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
              5. Conceitos Fundamentais
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { term: 'Socialismo utópico', desc: 'conjunto de propostas socialistas iniciais que buscavam reorganizar a sociedade por meio de projetos associativos e cooperativos.' },
                { term: 'Anarquismo', desc: 'tradição política que questiona a autoridade coercitiva e a concentração estatal, defendendo formas autônomas de organização.' },
                { term: 'Mutualismo', desc: 'sistema de relações econômicas baseado na reciprocidade, no crédito mútuo e na associação entre produtores.' },
                { term: 'Federalismo', desc: 'organização política baseada na autonomia de unidades associadas e na coordenação por pactos.' },
                { term: 'Falanstério', desc: 'comunidade produtiva imaginada por Fourier, que integraria atividades agrícolas, industriais e sociais.' },
                { term: 'Coletivismo', desc: 'concepção segundo a qual os meios de produção devem ser organizados coletivamente.' },
                { term: 'Proletariado', desc: 'classe de trabalhadores que depende predominantemente da venda de sua força de trabalho.' },
                { term: 'Questão social', desc: 'conjunto de problemas relacionados à pobreza, às desigualdades e às condições de vida e trabalho na sociedade industrial.' },
              ].map((c, cIdx) => (
                <div key={cIdx} className="bg-[#121214] p-3.5 rounded-lg border border-stone-800">
                  <strong className="text-amber-300 font-serif font-bold">{c.term}:</strong>{' '}
                  <span className="font-serif text-stone-300 text-xs sm:text-sm">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. DIFERENÇAS ENTRE SOCIALISMO UTÓPICO E ANARQUISMO */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
              6. Diferenças entre Socialismo Utópico e Anarquismo
            </h4>
            <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3 font-serif text-stone-300 text-justify text-xs sm:text-sm leading-relaxed">
              <p>O socialismo utópico inicial concentrou-se na elaboração de modelos de reorganização social.</p>
              <p>O anarquismo desenvolveu uma crítica mais sistemática à autoridade política e à centralização estatal.</p>
              <p className="italic text-amber-200/90 pt-1 border-t border-stone-800/80">
                Essa diferença não é absoluta: os primeiros socialistas também criticaram hierarquias, enquanto os anarquistas também elaboraram projetos econômicos e comunitários.
              </p>
            </div>
          </div>

          {/* 7. MARXISMO E ANARQUISMO */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
              7. Marxismo e Anarquismo
            </h4>
            <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-3 font-serif text-stone-300 text-justify text-xs sm:text-sm leading-relaxed">
              <p>A principal divergência histórica envolveu o papel do Estado e a organização da revolução.</p>
              <p>Marx defendia a organização política dos trabalhadores e a transformação do poder político.</p>
              <p>Bakunin temia que a concentração estatal produzisse uma nova classe dirigente.</p>
              <p className="text-amber-300 font-semibold pt-1 border-t border-stone-800/80">
                A ruptura entre essas correntes tornou-se particularmente importante na Associação Internacional dos Trabalhadores e no Congresso de Haia de 1872.
              </p>
            </div>
          </div>

          {/* 8. CRONOLOGIA ESSENCIAL */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
              8. Cronologia Essencial
            </h4>
            <div className="space-y-2">
              {[
                { year: '1793', event: 'Godwin publica Political Justice' },
                { year: '1808', event: 'Fourier publica Théorie des quatre mouvements' },
                { year: '1816–1818', event: 'Saint-Simon publica L\'Industrie' },
                { year: '1825', event: 'Saint-Simon publica Nouveau Christianisme' },
                { year: '1829', event: 'Fourier publica Le Nouveau Monde industriel et sociétaire' },
                { year: '1840', event: 'Proudhon publica O que é a propriedade?' },
                { year: '1846', event: 'Proudhon publica Filosofia da Miséria' },
                { year: '1848', event: 'Publicação do Manifesto do Partido Comunista' },
                { year: '1864', event: 'Fundação da Associação Internacional dos Trabalhadores' },
                { year: '1871', event: 'Comuna de Paris' },
                { year: '1872', event: 'Congresso de Haia e ruptura entre marxistas e bakuninistas' },
                { year: '1873', event: 'Bakunin publica Estatismo e Anarquia' },
                { year: '1876', event: 'Morte de Bakunin' },
                { year: '1880', event: 'Engels publica Do Socialismo Utópico ao Socialismo Científico' },
              ].map((item, iIdx) => (
                <div key={iIdx} className="bg-[#121214] p-3 rounded-lg border border-stone-800/80 flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-amber-950/80 border border-amber-700/60 font-mono text-xs font-bold text-amber-300 shrink-0">
                    {item.year}
                  </span>
                  <span className="font-serif text-xs sm:text-sm text-stone-200">
                    {item.event}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 9. LEGADO HISTÓRICO */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
              9. Legado Histórico
            </h4>
            <div className="bg-[#121214] p-5 rounded-lg border border-stone-800 space-y-2">
              <p className="font-serif text-xs sm:text-sm text-stone-400 font-mono pb-1">
                As correntes estudadas contribuíram para:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-serif text-xs sm:text-sm text-stone-200">
                {[
                  'desenvolvimento do movimento operário;',
                  'expansão do cooperativismo;',
                  'crítica à exploração econômica;',
                  'debates sobre propriedade;',
                  'defesa da autonomia dos trabalhadores;',
                  'federalismo e descentralização;',
                  'crítica à burocracia e à concentração do poder;',
                  'formação das tradições socialistas e anarquistas posteriores.'
                ].map((leg, lIdx) => (
                  <div key={lIdx} className="flex items-start gap-2 bg-stone-900/60 p-2.5 rounded border border-stone-800">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{leg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 10. IDEIA CENTRAL DO CAPÍTULO */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-200 text-lg uppercase tracking-wide border-l-4 border-amber-500 pl-3">
              10. Ideia Central do Capítulo
            </h4>
            <div className="bg-amber-950/30 border border-amber-600/50 p-6 rounded-xl space-y-3">
              <p className="font-serif text-stone-200 text-justify leading-relaxed text-sm sm:text-base">
                O socialismo utópico e o anarquismo representam diferentes tentativas de responder aos problemas produzidos pela sociedade industrial do século XIX.
              </p>
              <p className="font-serif text-stone-200 text-justify leading-relaxed text-sm sm:text-base">
                Enquanto Saint-Simon e Fourier enfatizaram a reorganização cooperativa da sociedade, Proudhon e Bakunin desenvolveram críticas mais diretas à propriedade e à autoridade estatal.
              </p>
              <div className="border-t border-amber-700/50 pt-3 mt-3">
                <p className="font-serif italic text-amber-300 text-base sm:text-lg font-semibold text-center">
                  "Como construir uma sociedade mais igualitária sem eliminar a liberdade e a autonomia dos indivíduos?"
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : topic.id === 105 ? (
        <Topic105SynthesisView getFontSizeClass={getFontSizeClass} />
      ) : topic.id === 108 ? (
        <Topic108SynthesisView getFontSizeClass={getFontSizeClass} />
      ) : topic.id === 112 ? (
        <Topic112SynthesisView getFontSizeClass={getFontSizeClass} />
      ) : (
        <>
          {/* 1. Contexto Histórico Estrutural */}
          <section id="context-historical" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-3 shadow-md">
            <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
              <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                1
              </span>
              <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                Contexto Histórico Estrutural
              </h3>
            </div>
            <p className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
              {topic.historicalContext}
            </p>
          </section>

          {/* 2. Síntese Executiva do Período */}
          <section id="context-summary" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-3 shadow-md">
            <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
              <span className="w-7 h-7 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                2
              </span>
              <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                Síntese Executiva do Período
              </h3>
            </div>
            <p className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
              {topic.summary}
            </p>
          </section>

          {/* 3. Ementa Temática e Tópicos de Investigação */}
          {topic.mainSubjects && topic.mainSubjects.length > 0 && (
            <section id="context-subjects" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-3 shadow-md">
              <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
                <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
                <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                  Ementa Temática e Tópicos de Investigação
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {topic.mainSubjects.map((sub: string, sIdx: number) => (
                  <div key={sIdx} className="bg-[#121214] p-3 rounded-lg border border-stone-800/80 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span className="font-serif text-xs sm:text-sm text-stone-300">{sub}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. Consenso Historiográfico Consolidado */}
          {topic.academicConsensus && (
            <section id="context-consensus" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-3 shadow-md">
              <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
                <Flame className="w-5 h-5 text-amber-400 shrink-0" />
                <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                  Consenso Historiográfico Consolidado
                </h3>
              </div>
              <p className={`font-serif text-stone-300 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                {topic.academicConsensus}
              </p>
            </section>
          )}

          {/* 5. Atores Centrais e Forças Políticas */}
          {topic.keyActors && topic.keyActors.length > 0 && (
            <section id="context-actors" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-3 shadow-md">
              <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
                <Users className="w-5 h-5 text-amber-400 shrink-0" />
                <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                  Atores Centrais e Forças Políticas
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
                {topic.keyActors.map((actor, aIdx) => (
                  <div key={aIdx} className="bg-[#121214] p-3 rounded-lg border border-stone-800/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500/80 shrink-0" />
                    <span className="font-mono text-xs text-stone-200 truncate">{actor}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. Especialistas e Cátedras de Referência */}
          {topic.historiansInvolved && topic.historiansInvolved.length > 0 && (
            <section id="context-historians" className="scroll-mt-24 bg-[#161619] p-5 sm:p-7 rounded-xl border border-stone-800 space-y-3 shadow-md">
              <div className="flex items-center gap-2.5 border-b border-stone-800 pb-3">
                <GraduationCap className="w-5 h-5 text-amber-400 shrink-0" />
                <h3 className="font-serif font-bold text-stone-100 uppercase tracking-wide text-base sm:text-lg">
                  Especialistas e Cátedras de Referência
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {topic.historiansInvolved.map((hist: string, hIdx: number) => (
                  <span key={hIdx} className="px-3 py-1.5 rounded-lg bg-[#121214] border border-stone-800 text-stone-300 font-mono text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    {hist}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Historical Impact & Emblematic Quote Card */}
          {topic.quote && (
            <div className="bg-[#121214] border border-amber-600/40 p-5 rounded-xl space-y-2.5 shadow-inner">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                CITAÇÃO EMBLEMÁTICA DA CÁTEDRA
              </span>
              <blockquote className="font-serif italic text-stone-200 text-base sm:text-lg leading-relaxed">
                "{topic.quote.text}"
              </blockquote>
              <p className="text-xs font-mono text-stone-400 text-right">
                — <span className="text-amber-300 font-semibold">{topic.quote.author}</span>, {topic.quote.context}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
