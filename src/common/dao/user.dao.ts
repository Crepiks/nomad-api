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

  @Column({ name: 'first_name', nullable: true })
  firstName: string;

  @Column({ name: 'last_name', nullable: true })
  lastName: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'password' })
  password: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
