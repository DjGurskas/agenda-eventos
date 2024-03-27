import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { UserRepository } from '../service/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserSchema } from '../entities/user-schema.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([UserSchema])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
