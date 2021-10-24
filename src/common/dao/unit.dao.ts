import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ChapterDao } from './chapter.dao';
import { ExplanationDao } from './explanation.dao';

@Entity({ name: 'units' })
export class UnitDao {
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

  @Column({ name: 'chapter_id', type: 'int', unsigned: true })
  chapterId: number;

  @ManyToOne(() => ChapterDao, (chapter) => chapter.units)
  @JoinColumn({ name: 'chapter_id' })
  chapter?: ChapterDao;

  @OneToOne(() => ExplanationDao, (explanation) => explanation.unit)
  explanation?: ExplanationDao;
}
