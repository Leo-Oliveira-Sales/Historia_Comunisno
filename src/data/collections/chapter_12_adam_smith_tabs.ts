export type AdamSmithTabId =
  | 'aba1'
  | 'aba2'
  | 'aba3'
  | 'aba4'
  | 'aba5'
  | 'aba6'
  | 'aba7'
  | 'aba8'
  | 'aba9'
  | 'aba10';

export interface AdamSmithTabSpec {
  id: AdamSmithTabId;
  number: number;
  shortLabel: string;
  title: string;
  subtitle: string;
  anchorId: string;
}

export const ADAM_SMITH_TABS: AdamSmithTabSpec[] = [
  {
    id: 'aba1',
    number: 1,
    shortLabel: '1. Vida e Contexto Histórico',
    title: 'Adam Smith: vida, formação e contexto histórico',
    subtitle: 'trajetória intelectual e Iluminismo Escocês.',
    anchorId: 'smith-aba-1',
  },
  {
    id: 'aba2',
    number: 2,
    shortLabel: '2. Teoria dos Sentimentos Morais',
    title: 'Teoria dos Sentimentos Morais',
    subtitle: 'simpatia, natureza humana, ética e espectador imparcial.',
    anchorId: 'smith-aba-2',
  },
  {
    id: 'aba3',
    number: 3,
    shortLabel: '3. A Riqueza das Nações',
    title: 'A Riqueza das Nações',
    subtitle: 'principais ideias e objetivos da obra.',
    anchorId: 'smith-aba-3',
  },
  {
    id: 'aba4',
    number: 4,
    shortLabel: '4. Divisão do Trabalho',
    title: 'Divisão do trabalho, produtividade e riqueza',
    subtitle: 'especialização, trabalho e desenvolvimento econômico.',
    anchorId: 'smith-aba-4',
  },
  {
    id: 'aba5',
    number: 5,
    shortLabel: '5. Valor, Salários e Lucros',
    title: 'Valor, salários, lucros e propriedade',
    subtitle: 'distribuição da riqueza e relações econômicas.',
    anchorId: 'smith-aba-5',
  },
  {
    id: 'aba6',
    number: 6,
    shortLabel: '6. Mercado e Mão Invisível',
    title: 'Mercado, concorrência e mão invisível',
    subtitle: 'livre-comércio, mercantilismo e limites do mercado.',
    anchorId: 'smith-aba-6',
  },
  {
    id: 'aba7',
    number: 7,
    shortLabel: '7. Papel do Estado na Economia',
    title: 'O papel do Estado na economia',
    subtitle: 'justiça, educação, infraestrutura, tributação e regulação.',
    anchorId: 'smith-aba-7',
  },
  {
    id: 'aba8',
    number: 8,
    shortLabel: '8. Adam Smith × Marx × Engels',
    title: 'Adam Smith × Marx × Engels',
    subtitle: 'capitalismo, trabalho, propriedade privada, exploração, desigualdade e organização econômica.',
    anchorId: 'smith-aba-8',
  },
  {
    id: 'aba9',
    number: 9,
    shortLabel: '9. Iluminismo Escocês',
    title: 'Iluminismo Escocês',
    subtitle: 'contexto intelectual, moral e institucional da Escócia do século XVIII.',
    anchorId: 'smith-aba-9',
  },
  {
    id: 'aba10',
    number: 10,
    shortLabel: '10. Economia Política Clássica',
    title: 'Economia Política Clássica',
    subtitle: 'formação, desdobramentos e legado da tradição clássica.',
    anchorId: 'smith-aba-10',
  },
];
