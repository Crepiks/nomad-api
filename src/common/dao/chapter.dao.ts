import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BookDao } from './book.dao';

@Entity({ name: 'chapters' })
export class ChapterDao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  name: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;

  @Column({ name: 'book_id', type: 'int', unsigned: true })
  bookId: number;

  @ManyToOne(() => BookDao, (book) => book.chapters)
  @JoinColumn({ name: 'book_id' })
  book?: BookDao;
}
