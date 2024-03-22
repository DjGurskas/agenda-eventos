import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { User } from './entities/User.entity';
import { UpdateUserDto } from './dto/update-login.dto';
import { UserDto } from './dto/user-login.dto';
import { plainToClass } from 'class-transformer';
import { SerializedUser } from './types';

@Injectable()
export class UserService {
    private users: User[] = [
      {
        username: 'Roberta',
        email: 'robertacomvida@gmail.com',
        telephone: 51996898001,
        password: 'roberta123'
      },
      {
        username: 'Jessica',
        email: 'jessicadoida1@gmail.com',
        telephone: 51996898591,
        password: 'jessica123'
      },
      {
        username: 'Juliana',
        email: 'juju666@gmail.com',
        telephone: 51996888001,
        password: 'jujus2123'
      },
    ];

    getUsers() {
      return this.users.map((user) => plainToClass(SerializedUser, user))
    }

    getUserByUsername(username: string) {
      return this.users.find((user) => user.username == username);
    }


  createUser(userDto: UserDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
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