import { CHAPTER_01 } from './chapters/chapter_01';
import { CHAPTER_02 } from './chapters/chapter_02';
import { CHAPTER_03 } from './chapters/chapter_03';
import { CHAPTER_04 } from './chapters/chapter_04';
import { CHAPTER_05 } from './chapters/chapter_05';
import { CHAPTER_06 } from './chapters/chapter_06';
import { CHAPTER_07 } from './chapters/chapter_07';
import { CHAPTER_08 } from './chapters/chapter_08';
import { CHAPTER_09 } from './chapters/chapter_09';
import { CHAPTER_10 } from './chapters/chapter_10';
import { CHAPTER_11 } from './chapters/chapter_11';
import { CHAPTER_12 } from './chapters/chapter_12';
import { CHAPTER_13 } from './chapters/chapter_13';
import { CHAPTER_14 } from './chapters/chapter_14';
import { CHAPTER_15 } from './chapters/chapter_15';
import { CHAPTER_16 } from './chapters/chapter_16';
import { CHAPTER_17 } from './chapters/chapter_17';
import { CHAPTER_18 } from './chapters/chapter_18';
import { CHAPTER_19 } from './chapters/chapter_19';
import { CHAPTER_20 } from './chapters/chapter_20';
export interface AcademicChapterSection {
  number: string;
  title: string;
  content?: string;
  subsections?: {
    number: string;
    title: string;
    content: string;
  }[];
}

export interface AcademicChapter {
  topicId: number;
  title: string;
  subtitle: string;
  authorCatedra: string;
  introduction: string;
  sections: AcademicChapterSection[];
  conclusion: string;
  bibliographicReferences: string[];
}

export const ACADEMIC_CHAPTERS: Record<number, AcademicChapter> = {
  1: CHAPTER_01,
  2: CHAPTER_02,
  3: CHAPTER_03,
  4: CHAPTER_04,

  5: CHAPTER_05,

  6: CHAPTER_06,

  7: CHAPTER_07,

  8: CHAPTER_08,

  9: CHAPTER_09,

  10: CHAPTER_10,

  11: CHAPTER_11,

  12: CHAPTER_12,
  13: CHAPTER_13,

  14: CHAPTER_14,

  15: CHAPTER_15,

  16: CHAPTER_17,
  17: CHAPTER_18,
  18: CHAPTER_19,
  19: CHAPTER_20
};