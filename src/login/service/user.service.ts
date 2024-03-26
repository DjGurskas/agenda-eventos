import { Injectable } from '@nestjs/common';;
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private dataSource: DataSource
  ){}
  private users: User[] = 
  [
      {
        id: 1,
        firstname: 'Roberta',
        lastname: 'Jessica',
        email: 'robertacomvida@gmail.com',
        password: 'roberta12345678910'
      },
      {
        id: 2,
        firstname: 'Jessica',
        lastname: 'Jessica',
        email: 'jessicadoida1@gmail.com',
        password: 'jessica12345678910'
      },
      {
        id: 3,
        firstname: 'Juliana',
        lastname: 'Paes',
        email: 'juju666@gmail.com',
        password: 'jujus12345678910'
      },
    ];

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

   findOne(id: number): Promise<User| null> {
    return this.userRepository.findOneBy({id});
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} login`;
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
