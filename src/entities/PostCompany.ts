import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from './User';
import { v4 as uuid } from 'uuid';

@Entity('PostCompanies')
class PostCompany {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  description: string;

  @Column()
  images: string[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  constructor() {
    this.id = uuid();
  }
}

export { PostCompany };
