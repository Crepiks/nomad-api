import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UnitDao } from './unit.dao';

@Entity({ name: 'explanations' })
export class ExplanationDao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'content', type: 'text' })
  content: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;

  @Column({ name: 'unit_id', type: 'int', unsigned: true })
  unitId: number;

  @OneToOne(() => UnitDao, (unit) => unit.explanation)
  @JoinColumn({ name: 'unit_id' })
  unit?: UnitDao;
}
