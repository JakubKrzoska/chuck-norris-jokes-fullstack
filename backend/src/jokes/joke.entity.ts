import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Joke {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  text!: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user!: User;
}
