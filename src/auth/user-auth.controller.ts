import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignupInput } from 'src/login/dto/user-signup.dto';
import { User } from 'src/login/entities/user.entity';
import { AuthService } from './user-auth.service';
import { LoginInput } from 'src/login/dto/user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUser: SignupInput): Promise<User> {
    return this.authService.register(createUser);
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginInput: LoginInput): Promise<User> {
    return this.authService.login(loginInput.email, loginInput.password);
  }
}