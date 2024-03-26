import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../entities/user-schema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  exports: [TypeOrmModule],
  controllers: [UserController],
  providers: [
    {provide: 'USER_SERVICE',
    useClass: UserService,
  },
],
})
export class UserModule {}
