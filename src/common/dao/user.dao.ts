import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserDao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name', type: 'varchar', length: 255, nullable: true })
  firstName?: string;

  @Column({ name: 'last_name', type: 'varchar', length: 255, nullable: true })
  lastName?: string;

  @Column({ name: 'phone', type: 'varchar', length: 20, unique: true })
  phone: string;

  @Column({ name: 'password', type: 'varchar', length: 255 })
  password: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;
}
