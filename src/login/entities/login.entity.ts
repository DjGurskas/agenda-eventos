import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class Login {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  email: string;

  @Column()
  telephone: number;

  @Column()
  password: string;
}
