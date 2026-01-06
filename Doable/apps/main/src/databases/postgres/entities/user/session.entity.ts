import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { User } from './user.entity';

@Entity()
export class Session extends AbstractEntity {
  @ManyToOne(() => User, (user) => user.sessions, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'timestamptz' })
  expireAt: Date;
}
