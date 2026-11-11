import React from 'react';
import { BookOpen, FileText, ShieldCheck } from 'lucide-react';

interface Props {
  getFontSizeClass: (type: 'heading' | 'body' | 'quote') => string;
}

export const Topic112DocumentsView: React.FC<Props> = ({ getFontSizeClass }) => {
  const partes = [
    {
      parte: 'PARTE I — ILUMINISMO E ANTIGO REGIME (1715–1789)',
      docs: [
        {
          num: '01',
          title: 'MONTESQUIEU',
          ano: '1748',
          documento: 'O Espírito das Leis',
          autor: 'Charles-Louis de Secondat, Barão de Montesquieu.',
          natureza: 'Tratado de filosofia política e teoria das instituições.',
          conteudo: 'A obra examina as relações entre leis, formas de governo, instituições e liberdade política. Seu Livro XI, capítulo VI, desenvolve uma análise da constituição inglesa e da distribuição dos poderes.',
          relevancia: 'Tornou-se uma referência fundamental para o constitucionalismo e para a reflexão sobre os mecanismos institucionais de limitação do poder.',
          referencia: "MONTESQUIEU. De l'esprit des lois. Genebra, 1748."
        },
        {
          num: '02',
          title: 'ENCYCLOPÉDIE',
          ano: '1751–1772',
          documento: 'Encyclopédie, ou Dictionnaire raisonné des sciences, des arts et des métiers.',
          autor: 'Denis Diderot e Jean le Rond d\'Alembert.',
          natureza: 'Obra coletiva de divulgação e sistematização do conhecimento.',
          conteudo: 'Reuniu verbetes de filosofia, ciência, artes, técnicas e política, contribuindo para a circulação de conhecimentos e para a crítica de autoridades tradicionais.',
          relevancia: 'Representa uma das principais expressões da cultura intelectual iluminista.',
          referencia: "DIDEROT, Denis; D'ALEMBERT, Jean le Rond (org.). Encyclopédie. Paris, 1751–1772."
        },
        {
          num: '03',
          title: 'ROUSSEAU',
          ano: '1762',
          documento: 'Do Contrato Social.',
          autor: 'Jean-Jacques Rousseau.',
          natureza: 'Tratado de filosofia política.',
          conteudo: 'Discute a legitimidade da autoridade política, a soberania e a vontade geral.',
          relevancia: 'Tornou-se uma referência importante para os debates sobre soberania popular e legitimidade revolucionária.',
          referencia: "ROUSSEAU, Jean-Jacques. Du contrat social. Amsterdã: Marc-Michel Rey, 1762."
        },
        {
          num: '04',
          title: 'VOLTAIRE',
          ano: '1763',
          documento: 'Tratado sobre a Tolerância.',
          autor: 'Voltaire.',
          natureza: 'Intervenção filosófica e político-jurídica.',
          conteudo: 'Escrito no contexto do caso Jean Calas, o tratado critica a intolerância religiosa e os erros judiciais.',
          relevancia: 'Expressa a crítica iluminista ao fanatismo e à perseguição religiosa.',
          referencia: "VOLTAIRE. Traité sur la tolérance. Genebra: Cramer, 1763."
        },
        {
          num: '05',
          title: 'ÉDITOS DE TURGOT',
          ano: '1776',
          documento: 'Éditos relativos à supressão das corveias e à reorganização das corporações.',
          autor: 'Luís XVI e seu ministro das Finanças, Anne Robert Jacques Turgot.',
          natureza: 'Legislação econômica e administrativa.',
          conteudo: 'As reformas procuravam modificar obrigações de trabalho e restrições corporativas.',
          relevancia: 'Demonstram os limites das reformas econômicas dentro de uma monarquia baseada em privilégios e estruturas tradicionais.',
          referencia: "FRANÇA. Édits de février 1776 relatifs aux corvées et aux jurandes et maîtrises."
        },
        {
          num: '06',
          title: 'REMONTRANCES DO PARLAMENTO DE PARIS',
          ano: '1788',
          documento: 'Remontrances do Parlamento de Paris.',
          autor: 'Parlamento de Paris.',
          natureza: 'Manifestação institucional e jurídica.',
          conteudo: 'Os conflitos entre a Coroa e os Parlamentos envolveram o registro de leis, a tributação e a convocação dos Estados Gerais.',
          relevancia: 'Evidenciam a crise constitucional da monarquia.',
          referencia: "PARLEMENT DE PARIS. Remontrances, 1788."
        },
        {
          num: '07',
          title: 'SIEYÈS',
          ano: '1789',
          documento: 'O Que é o Terceiro Estado?',
          autor: 'Emmanuel-Joseph Sieyès.',
          natureza: 'Panfleto político.',
          conteudo: 'Questiona a posição política do Terceiro Estado e reivindica sua participação na representação nacional.',
          relevancia: 'Tornou-se uma das formulações políticas mais influentes na ruptura de 1789.',
          referencia: "SIEYÈS, Emmanuel-Joseph. Qu'est-ce que le Tiers-État? Paris, 1789."
        }
      ]
    },
    {
      parte: 'PARTE II — REVOLUÇÃO FRANCESA (1789–1799)',
      docs: [
        {
          num: '08',
          title: 'DECLARAÇÃO DOS DIREITOS DO HOMEM E DO CIDADÃO',
          ano: '1789 (26 de ago.)',
          documento: 'Declaração dos Direitos do Homem e do Cidadão',
          autor: 'Assembleia Nacional Constituinte.',
          natureza: 'Declaração político-jurídica.',
          conteudo: 'Formula princípios de liberdade, igualdade jurídica, propriedade, segurança, resistência à opressão e soberania nacional.',
          relevancia: 'Um dos documentos fundamentais da história dos direitos e do constitucionalismo moderno.',
          referencia: "FRANÇA. Déclaration des droits de l'homme et du citoyen, 1789."
        },
        {
          num: '09',
          title: 'CONSTITUIÇÃO DE 1791',
          ano: '1791',
          documento: 'Constituição francesa de 3 de setembro de 1791',
          autor: 'Assembleia Nacional Constituinte.',
          natureza: 'Constituição política.',
          conteudo: 'Estabeleceu uma monarquia constitucional, reorganizou as instituições e definiu a estrutura dos poderes.',
          relevancia: 'Representa a primeira tentativa de estabilização constitucional da Revolução.',
          referencia: "FRANÇA. Constitution française du 3 septembre 1791."
        },
        {
          num: '10',
          title: 'DECLARAÇÃO DOS DIREITOS DA MULHER E DA CIDADÃ',
          ano: '1791',
          documento: 'Declaração dos Direitos da Mulher e da Cidadã',
          autor: 'Olympe de Gouges.',
          natureza: 'Manifesto político e reivindicação de direitos.',
          conteudo: 'Reivindica a extensão dos princípios de cidadania e igualdade política às mulheres.',
          relevancia: 'Documento central para a história da participação política feminina e da crítica às limitações da cidadania revolucionária.',
          referencia: "GOUGES, Olympe de. Déclaration des droits de la femme et de la citoyenne, 1791."
        },
        {
          num: '11',
          title: 'CONSTITUIÇÃO DE 1793',
          ano: '1793',
          documento: 'Constituição da República Francesa de 24 de junho de 1793',
          autor: 'Convenção Nacional.',
          natureza: 'Constituição republicana.',
          conteudo: 'Apresentou uma concepção radical de soberania popular e direitos sociais e políticos.',
          relevancia: 'Embora aprovada, não foi efetivamente aplicada em condições normais de governo, devido à conjuntura revolucionária e de guerra.',
          referencia: "FRANÇA. Constitution du 24 juin 1793."
        },
        {
          num: '12',
          title: 'CONSTITUIÇÃO DO ANO III',
          ano: '1795',
          documento: 'Constituição de 5 Fructidor An III',
          autor: 'Convenção Nacional.',
          natureza: 'Constituição republicana.',
          conteudo: 'Organizou o regime do Diretório e estabeleceu um sistema executivo colegiado.',
          relevancia: 'Representa a tentativa de reorganizar a República depois da queda de Robespierre.',
          referencia: "FRANÇA. Constitution du 5 fructidor an III, 1795."
        }
      ]
    },
    {
      parte: 'PARTE III — NAPOLEÃO E A ORDEM JURÍDICA (1799–1815)',
      docs: [
        {
          num: '13',
          title: 'CONSTITUIÇÃO DO ANO VIII',
          ano: '1799',
          documento: 'Constituição do Ano VIII',
          autor: 'Napoleão Bonaparte e comitê redator.',
          natureza: 'Constituição política.',
          conteudo: 'Estabeleceu o Consulado e concentrou poderes significativos no Primeiro Cônsul.',
          relevancia: 'Formalizou a nova organização política posterior ao golpe de 18 de Brumário.',
          referencia: "FRANÇA. Constitution du 22 frimaire an VIII, 1799."
        },
        {
          num: '14',
          title: 'CÓDIGO CIVIL DOS FRANCESES',
          ano: '1804 (21 de mar.)',
          documento: 'Code civil des Français',
          autor: 'Comissão nomeada por Napoleão Bonaparte.',
          natureza: 'Codificação jurídica.',
          conteudo: 'Organizou regras sobre pessoas, propriedade, contratos, casamento, herança e relações civis.',
          relevancia: 'Consolidou transformações jurídicas da Revolução, especialmente a igualdade civil masculina e a proteção da propriedade privada, mas também preservou hierarquias familiares.',
          referencia: "FRANÇA. Code civil des Français, 1804."
        },
        {
          num: '15',
          title: 'TRATADO DE FONTAINEBLEAU',
          ano: '1814',
          documento: 'Tratado de Fontainebleau',
          autor: 'Potências Aliadas e Napoleão Bonaparte.',
          natureza: 'Tratado internacional.',
          conteudo: 'Regulou a abdicação de Napoleão e seu exílio na ilha de Elba.',
          relevancia: 'Documento importante para compreender o encerramento do Primeiro Império.',
          referencia: "Traité de Fontainebleau, 1814."
        }
      ]
    },
    {
      parte: 'PARTE IV — RESTAURAÇÃO E REVOLUÇÕES DO SÉCULO XIX (1815–1871)',
      docs: [
        {
          num: '16',
          title: 'CARTA CONSTITUCIONAL DE 1814',
          ano: '1814',
          documento: 'Carta Constitucional de 1814',
          autor: 'Luís XVIII.',
          natureza: 'Carta constitucional outorgada.',
          conteudo: 'Estabeleceu a organização política da Restauração Bourbon.',
          relevancia: 'Expressa a tentativa de conciliar a monarquia restaurada com algumas transformações institucionais posteriores à Revolução.',
          referencia: "FRANÇA. Charte constitutionnelle, 1814."
        },
        {
          num: '17',
          title: 'DECLARAÇÃO DE DIREITOS E DOCUMENTOS DE 1848',
          ano: '1848',
          documento: 'Decretos do Governo Provisório da Segunda República',
          autor: 'Governo Provisório.',
          natureza: 'Documentação política e legislativa.',
          conteudo: 'Inclui atos da Segunda República, medidas de sufrágio e decisões relativas à abolição da escravidão.',
          relevancia: 'Permite estudar a ampliação da cidadania e as contradições sociais da República.',
          referencia: "FRANÇA. Décrets du Gouvernement provisoire, 1848."
        },
        {
          num: '18',
          title: 'DECRETO DE ABOLIÇÃO DA ESCRAVIDÃO',
          ano: '1848 (27 de abr.)',
          documento: 'Decreto de abolição da escravidão nas colônias',
          autor: 'Governo Provisório (Victor Schoelcher).',
          natureza: 'Ato legislativo.',
          conteudo: 'Aboliu a escravidão nas colônias francesas.',
          relevancia: 'Marco da história da emancipação e da cidadania nas possessões coloniais francesas.',
          referencia: "FRANÇA. Décret d'abolition de l'esclavage, 27 avril 1848."
        },
        {
          num: '19',
          title: 'DOCUMENTOS DA COMUNA DE PARIS',
          ano: '1871',
          documento: 'Journal officiel de la Commune',
          autor: 'Comuna de Paris.',
          natureza: 'Proclamações, decretos, atas e registros administrativos.',
          conteudo: 'Reúne documentos sobre a organização do governo comunal, as medidas políticas e sociais e a administração da cidade.',
          relevancia: 'Fonte indispensável para compreender as propostas e práticas da Comuna.',
          referencia: "COMMUNE DE PARIS. Journal officiel de la Commune, 1871."
        },
        {
          num: '20',
          title: 'A GUERRA CIVIL NA FRANÇA',
          ano: '1871',
          documento: 'La Guerre civile en France',
          autor: 'Karl Marx.',
          natureza: 'Análise política contemporânea.',
          conteudo: 'Interpretação marxiana da Comuna de Paris e da experiência política dos trabalhadores.',
          relevancia: 'Documento fundamental para a recepção da Comuna pelo movimento socialista internacional.',
          referencia: "MARX, Karl. The Civil War in France, 1871."
        }
      ]
    },
    {
      parte: 'PARTE V — GUERRAS MUNDIAIS E CRISE REPUBLICANA (1914–1945)',
      docs: [
        {
          num: '21',
          title: 'TRATADO DE VERSALHES',
          ano: '1919',
          documento: 'Traité de paix entre les Puissances alliées et associées et l\'Allemagne',
          autor: 'Potências Aliadas e Alemanha.',
          natureza: 'Tratado internacional.',
          conteudo: 'Estabeleceu as condições de paz entre as potências aliadas e a Alemanha após a Primeira Guerra Mundial.',
          relevancia: 'Fundamental para compreender a reorganização da Europa depois da guerra.',
          referencia: "TREATY OF VERSAILLES, 1919."
        },
        {
          num: '22',
          title: 'ATOS CONSTITUCIONAIS DE 10 DE JULHO DE 1940',
          ano: '1940',
          documento: 'Atos Constitucionais do Regime de Vichy',
          autor: 'Philippe Pétain.',
          natureza: 'Atos constitucionais.',
          conteudo: 'Transferiram poderes constituintes ao marechal Philippe Pétain, estabelecendo a base institucional do regime de Vichy.',
          relevancia: 'Documento central para compreender o colapso da Terceira República e a formação do regime colaboracionista.',
          referencia: "FRANÇA. Actes constitutionnels du 10 juillet 1940."
        },
        {
          num: '23',
          title: 'ESTATUTO DOS JUDEUS',
          ano: '1940 (3 de out.)',
          documento: 'Loi portant statut des Juifs',
          autor: 'Regime de Vichy.',
          natureza: 'Legislação discriminatória.',
          conteudo: 'Estabeleceu medidas de exclusão dos judeus da sociedade e da administração francesas.',
          relevancia: 'Evidencia a responsabilidade institucional do regime de Vichy na perseguição antissemita.',
          referencia: "FRANÇA. Loi du 3 octobre 1940 portant statut des Juifs."
        },
        {
          num: '24',
          title: 'ORDENANÇA SOBRE O DIREITO DE VOTO DAS MULHERES',
          ano: '1944 (21 de abr.)',
          documento: 'Ordonnance relative à l\'organisation des pouvoirs publics en France',
          autor: 'Comitê Francês de Libertação Nacional (Argel).',
          natureza: 'Ato normativo.',
          conteudo: 'Reconheceu o direito de voto e elegibilidade das mulheres francesas.',
          relevancia: 'Marco fundamental da democratização da cidadania francesa.',
          referencia: "FRANÇA. Ordonnance du 21 avril 1944 relative à l'organisation des pouvoirs publics en France."
        },
        {
          num: '25',
          title: 'PROGRAMA DO CONSELHO NACIONAL DA RESISTÊNCIA',
          ano: '1944 (15 de mar.)',
          documento: 'Programme du Conseil national de la Résistance',
          autor: 'Conselho Nacional da Resistência (CNR).',
          natureza: 'Programa político e social.',
          conteudo: 'Apresentou propostas para a reconstrução democrática, econômica e social da França.',
          relevancia: 'Documento central para compreender as bases políticas do Estado social do pós-guerra.',
          referencia: "CONSEIL NATIONAL DE LA RÉSISTANCE. Programme, 15 mars 1944."
        }
      ]
    },
    {
      parte: 'PARTE VI — RECONSTRUÇÃO E ESTADO SOCIAL (1945–1975)',
      docs: [
        {
          num: '26',
          title: 'ORDENANÇA DE 4 DE OUTUBRO DE 1945',
          ano: '1945 (4 de out.)',
          documento: 'Ordonnance relative à l\'organisation de la Sécurité sociale',
          autor: 'Governo Provisório (Pierre Laroque).',
          natureza: 'Ato legislativo.',
          conteudo: 'Organizou a estrutura institucional da Seguridade Social francesa.',
          relevancia: 'Marco fundamental da construção do sistema moderno de proteção social.',
          referencia: "FRANÇA. Ordonnance du 4 octobre 1945 portant organisation de la Sécurité sociale."
        },
        {
          num: '27',
          title: 'PREÂMBULO DA CONSTITUIÇÃO DE 1946',
          ano: '1946',
          documento: 'Préambule de la Constitution du 27 octobre 1946',
          autor: 'Assembleia Constituinte.',
          natureza: 'Documento constitucional.',
          conteudo: 'Reconheceu direitos sociais e econômicos, incluindo proteção à saúde, segurança material, descanso e condições de existência dignas.',
          relevancia: 'Consolidou a dimensão social do constitucionalismo francês.',
          referencia: "FRANÇA. Préambule de la Constitution du 27 octobre 1946."
        },
        {
          num: '28',
          title: 'LEI DO SMIG',
          ano: '1950 (11 de fev.)',
          documento: 'Loi relative aux conventions collectives et aux salaires',
          autor: 'Parlamento da Quarta República.',
          natureza: 'Legislação trabalhista.',
          conteudo: 'Instituiu o salário mínimo interprofissional garantido (SMIG).',
          relevancia: 'Representa a ampliação da intervenção estatal na proteção da remuneração do trabalho.',
          referencia: "FRANÇA. Loi du 11 février 1950 relative aux conventions collectives et aux procédures de règlement des conflits collectifs du travail."
        },
        {
          num: '29',
          title: 'CONSTITUIÇÃO DA QUINTA REPÚBLICA',
          ano: '1958',
          documento: 'Constitution du 4 octobre 1958',
          autor: 'Charles de Gaulle e Michel Debré.',
          natureza: 'Constituição política.',
          conteudo: 'Estabeleceu a Quinta República e reorganizou a estrutura dos poderes, fortalecendo a Presidência.',
          relevancia: 'Marco institucional da França contemporânea.',
          referencia: "FRANÇA. Constitution du 4 octobre 1958."
        },
        {
          num: '30',
          title: 'ACORDOS DE GRENELLE',
          ano: '1968',
          documento: 'Accords de Grenelle',
          autor: 'Governo francês, sindicatos e patronato.',
          natureza: 'Acordos e negociações trabalhistas.',
          conteudo: 'Reuniram reivindicações e negociações ocorridas durante a crise social de maio de 1968.',
          relevancia: 'Documento importante para estudar salários, condições de trabalho, sindicalismo e relações entre capital e trabalho.',
          referencia: "ACCORDS DE GRENELLE, 1968."
        },
        {
          num: '31',
          title: 'LEI QUE SUBSTITUI O SMIG PELO SMIC',
          ano: '1970 (2 de jan.)',
          documento: 'Loi portant réforme du salaire minimum interprofessionnel garanti',
          autor: 'Parlamento francês.',
          natureza: 'Legislação trabalhista.',
          conteudo: 'Instituiu o salário mínimo interprofissional de crescimento (SMIC), substituindo o SMIG.',
          relevancia: 'Modificou os mecanismos de atualização do salário mínimo.',
          referencia: "FRANÇA. Loi n° 70-7 du 2 janvier 1970 portant réforme du salaire minimum interprofessionnel garanti."
        }
      ]
    }
  ];

  return (
    <article className="bg-[#161619] border border-amber-500/70 p-6 sm:p-9 rounded-xl space-y-9 shadow-2xl max-w-4xl mx-auto w-full box-border overflow-hidden">
      {/* HEADER BANNER */}
      <div className="border-b border-amber-600/40 pb-6 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-mono text-xs font-black tracking-wider uppercase rounded shadow-sm">
            COLEÇÃO II — HISTÓRIA DAS IDEOLOGIAS POLÍTICAS
          </span>
          <span className="px-2.5 py-1 bg-stone-900 text-stone-300 font-mono text-xs font-bold border border-stone-800 rounded">
            ACERVO PRIMÁRIO E ARQUIVÍSTICO Nº 11
          </span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-100 leading-tight">
          FRANÇA: DO ILUMINISMO À FORMAÇÃO DO ESTADO SOCIAL (1715–1975)
        </h1>
        <p className="font-serif italic text-amber-400 text-base sm:text-lg">
          Fontes primárias, documentos jurídicos, manifestos, discursos, tratados e registros históricos
        </p>
        <div className="pt-2 flex items-center gap-4 flex-wrap text-xs font-mono text-stone-400">
          <span className="bg-stone-900 px-3 py-1 rounded border border-stone-800 text-stone-300">
            <strong className="text-amber-400">Eixo documental:</strong> Transformações da soberania, direitos, revoluções, regimes políticos, movimentos sociais, guerras e políticas de proteção social.
          </span>
          <span className="bg-stone-900 px-3 py-1 rounded border border-stone-800 text-stone-300">
            <strong className="text-amber-400">Organização:</strong> Ordem cronológica (31 Documentos)
          </span>
        </div>
      </div>

      <div className="bg-[#121214] p-4 rounded-lg border border-stone-800 text-xs font-serif text-stone-300 italic">
        Nota metodológica: Os documentos estão apresentados por ordem cronológica. As transcrições integrais devem ser obtidas nas edições ou arquivos identificados. As descrições abaixo são apresentações históricas, não transcrições literais.
      </div>

      {/* PARTS & DOCUMENTS */}
      <div className="space-y-10">
        {partes.map((p, pIdx) => (
          <div key={pIdx} className="space-y-5">
            <div className="border-b border-amber-600/40 pb-2">
              <h2 className="font-serif font-bold text-amber-300 text-lg sm:text-xl uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{p.parte}</span>
              </h2>
            </div>

            <div className="space-y-6">
              {p.docs.map((doc) => (
                <article key={doc.num} className="bg-[#121214] p-5 sm:p-6 rounded-xl border border-stone-800 space-y-3.5 shadow-md">
                  <div className="flex items-start justify-between gap-3 flex-wrap border-b border-stone-800 pb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 py-0.5 bg-amber-950 text-amber-300 rounded font-mono text-xs border border-amber-700/60 font-bold">
                          DOC. {doc.num}
                        </span>
                        <span className="px-2 py-0.5 bg-stone-900 text-stone-300 rounded font-mono text-xs border border-stone-800">
                          Ano: {doc.ano}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-stone-100 text-base sm:text-lg pt-1">
                        {doc.title} — {doc.documento}
                      </h3>
                    </div>

                    <span className="text-xs font-mono text-stone-400 bg-stone-900 px-3 py-1 rounded border border-stone-800 shrink-0">
                      Autoridade / Autor: <strong className="text-amber-300">{doc.autor}</strong>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-stone-400">
                    <div className="bg-stone-900/60 p-2.5 rounded border border-stone-800">
                      <strong className="text-amber-400 block mb-0.5">Natureza documental:</strong>
                      <span className="text-stone-300 font-serif">{doc.natureza}</span>
                    </div>
                    <div className="bg-stone-900/60 p-2.5 rounded border border-stone-800">
                      <strong className="text-amber-400 block mb-0.5">Relevância histórica:</strong>
                      <span className="text-stone-300 font-serif">{doc.relevancia}</span>
                    </div>
                  </div>

                  <div className="bg-stone-950/60 p-3.5 rounded-lg border border-stone-800 space-y-1">
                    <strong className="text-amber-400 font-mono text-xs uppercase tracking-wider block">
                      Conteúdo histórico:
                    </strong>
                    <p className={`font-serif text-stone-200 text-justify leading-relaxed ${getFontSizeClass('body')}`}>
                      {doc.conteudo}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-800/80 font-mono text-xs text-stone-400 select-all">
                    <strong className="text-amber-400">Referência:</strong> {doc.referencia}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
