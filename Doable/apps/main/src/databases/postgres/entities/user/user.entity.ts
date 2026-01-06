import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractEntity  } from '../abstract.entity';
import { Session } from './session.entity';

@Entity()
export class User extends AbstractEntity  {
  @Column({ unique: true })
  phone: string;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];
}
