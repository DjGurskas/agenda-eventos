import { Injectable } from '@nestjs/common';;
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BeforeInsert, BeforeUpdate, Repository } from 'typeorm';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
   private readonly userRepository: Repository<User>
   ) {}
  private users: User[] = 
  [];

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  async createUser(user: User): Promise<User> {
    user.password = await this.hashPassword(user.password) as any
    await this.userRepository.save(user);
    return user

  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User| null> {
    return await this.userRepository.findOneBy({id});
  }

  async findOneByEmail(email: string): Promise<User| null> {
    return await this.userRepository.findOneBy({email});
  }

  async update(id: number, UpdateUserDto: User) {
    return await this.userRepository.update(id, UpdateUserDto);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async hashPassword(password: string): Promise<String> {
    const salt = await bcrypt.genSalt();
    if (!/^\$2[abxy]?\$\d+\$/.test(password)){
      return await bcrypt.hash(password, salt);
    }
  }

  async checkPassword(newPassword: string, password: string): Promise<boolean> {
    return await bcrypt.compare(password, newPassword);
  }
}
