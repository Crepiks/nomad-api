import { Book } from './book';

export class Chapter {
  id: number;
  name: string;
  updatedAt?: string;
  createdAt: string;
  deletedAt?: string;
  bookId: number;
  book?: Book;
}
