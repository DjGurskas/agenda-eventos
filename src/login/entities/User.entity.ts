import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Column({ unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  telephone: number;

  @Column()
  password: string;
}
