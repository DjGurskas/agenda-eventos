import * as bcrypt from 'bcrypt';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupInput } from 'src/login/dto/user-signup.dto';
import { User } from 'src/login/entities/user.entity';
import { UserService } from 'src/login/service/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
    ) {}

  async register(signupInput: SignupInput): Promise<User> {
    const user = await this.userService.createUser(signupInput);
    return user;
  }

  async login (email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    const passwordValid = await bcrypt.compare(password, user.password);
    
    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos');
    } if (user && passwordValid) {
      const payload = { sub: user.id };
      return {
        id: user.id,
        email: user.email,
        access_token: await this.jwtService.signAsync(payload)
      }; 
    }
    return null;
  }
}
