import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserDao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;
}
