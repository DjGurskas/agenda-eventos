import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { UpdateUserDto } from '../dto/update-login.dto';
import { User } from '../dto/user-login.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  private users: User[] = 
  [
      {
        id: 1,
        username: 'Roberta',
        email: 'robertacomvida@gmail.com',
        telephone: 51996898001,
        password: 'roberta12345678910'
      },
      {
        id: 2,
        username: 'Jessica',
        email: 'jessicadoida1@gmail.com',
        telephone: 51996898591,
        password: 'jessica12345678910'
      },
      {
        id: 3,
        username: 'Juliana',
        email: 'juju666@gmail.com',
        telephone: 51996888001,
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

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
