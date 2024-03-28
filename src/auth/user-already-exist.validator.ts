import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { User } from "src/login/entities/user.entity";
import { Repository } from "typeorm";
@ValidatorConstraint({ name: 'isUserAlreadyExist', async: true })
@Injectable()
export class IsUserAlreadyExist implements ValidatorConstraintInterface {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}
    async validate(value: string): Promise<boolean> {
        const user = await this.userRepository.findOneBy({email: value});
        return !user;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return 'User already exists';
    }
}