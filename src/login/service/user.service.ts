import { Injectable } from '@nestjs/common';;
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
   private readonly userRepository: Repository<User>
   ) {}
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

  async createUser(user: User): Promise<User> {
    await this.userRepository.save(user);
    return user
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User| null> {
    return await this.userRepository.findOneBy({id});
  }

  async update(id: number, updateUserDto: User) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
