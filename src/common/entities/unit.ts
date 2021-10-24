import { Chapter } from './chapter';

export class Unit {
  id: number;
  name: string;
  updatedAt?: string;
  createdAt: string;
  deletedAt?: string;
  chapterId: number;
  chapter?: Chapter;
}
