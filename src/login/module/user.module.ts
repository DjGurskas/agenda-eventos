import { Module } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserController } from '../controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '../entities/user-schema.entity';
import { AuthController } from 'src/auth/user-auth.controller';
import { AuthService } from 'src/auth/user-auth.service';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';

config({ path: '.env' });

@Module({
  imports: [
    TypeOrmModule.forFeature([UserSchema]),
  JwtModule.register({ 
     global: true, 
     signOptions: { expiresIn: '90s' },
     secret: process.env.JWT_SECRET,
  })],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService],
  exports: [UserService]
})
export class UserModule {}
