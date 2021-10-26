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
import { UnitDao } from './unit.dao';

@Entity('tasks')
export class TaskDao {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;

  @Column({ name: 'unit_id' })
  unitId: number;

  @ManyToOne(() => UnitDao, (unit) => unit.tasks)
  @JoinColumn({ name: 'unit_id' })
  unit?: UnitDao;
}
