import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  id!: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at?: Date;

  @CreateDateColumn()
  updated_at?: Date;

  constructor() {
    this.id = uuid();
  }
}

export { User };
