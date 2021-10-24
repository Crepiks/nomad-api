import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
