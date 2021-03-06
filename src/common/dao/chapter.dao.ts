import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BookDao } from './book.dao';
import { UnitDao } from './unit.dao';

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

  @OneToMany(() => UnitDao, (unit) => unit.chapter)
  units?: UnitDao[];
}
