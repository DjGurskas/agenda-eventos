import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ){}

    async findAll(): Promise<User[]> {
        return [];
    }

    async findOneBy(id: number): Promise<User | null> {
        return null
    }

    async createUser(user: User): Promise<User> {
        return user
    }

    async delete(id: number): Promise<void> {
        
    }

    async update(id: number, updateUserDto: any) {
        
    }

    async getUserById(id: number): Promise<User> {
        return null
    }

}