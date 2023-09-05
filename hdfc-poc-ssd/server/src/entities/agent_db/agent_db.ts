//append_imports_start

import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Column,
} from 'typeorm'; //_splitter_
//append_imports_end
@Entity('agent_db')
export class agent_db {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'username', nullable: false, type: 'text', primary: false })
  username: string;
  @Column({ name: 'password', nullable: false, type: 'text', primary: false })
  password: string;
  @Column({ name: 'agent_code', nullable: false, type: 'text', primary: false })
  agent_code: string;
  @Column({ name: 'device_ids', nullable: true, type: 'jsonb', primary: false })
  device_ids: any;
  @Column({
    name: 'biometric_flag',
    nullable: true,
    type: 'boolean',
    default: false,
    primary: false,
  })
  biometric_flag: boolean;
  @CreateDateColumn({
    name: 'created_at',
    nullable: true,
    precision: 6,
    type: 'timestamp with time zone',
    primary: false,
  })
  created_at: Date;
  @UpdateDateColumn({
    name: 'updated_at',
    nullable: true,
    precision: 6,
    type: 'timestamp with time zone',
    primary: false,
  })
  updated_at: Date;
}
