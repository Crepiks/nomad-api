import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ChapterDao } from './chapter.dao';

@Entity({ name: 'books' })
export class BookDao {
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

  @OneToMany(() => ChapterDao, (chapter) => chapter.book)
  chapters?: ChapterDao[];
}
