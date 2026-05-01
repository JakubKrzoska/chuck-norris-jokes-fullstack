import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Joke {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  text!: string;

  // This links the joke to a specific user
  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user!: User;
}
