import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../entities/user-schema.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([UserSchema])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
