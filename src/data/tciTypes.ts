export interface TciTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface TciFigure {
  src: string;
  alt: string;
  caption?: string;
}

export interface TciDiagramBox {
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  emphasis?: boolean;
}

export interface TciDiagramArrow {
  points: [number, number][];
  /** Numbered step badge drawn at `badge.at` (defaults to the arrow midpoint). */
  badge?: { text: string; at?: [number, number] };
  label?: { text: string; x: number; y: number; anchor?: 'start' | 'middle' | 'end' };
  noHead?: boolean;
  dashed?: boolean;
}

export interface TciDiagram {
  width: number;
  height: number;
  boxes: TciDiagramBox[];
  arrows?: TciDiagramArrow[];
  labels?: { text: string; x: number; y: number; anchor?: 'start' | 'middle' | 'end'; bold?: boolean }[];
  caption?: string;
}

export interface TciSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  formulas?: string[];
  table?: TciTable;
  figure?: TciFigure;
  diagram?: TciDiagram;
}

export interface TciChapter {
  id: string;
  kind: 'chapitre' | 'cas';
  level: 1 | 2;
  number: number;
  title: string;
  intro: string;
  sections: TciSection[];
}
