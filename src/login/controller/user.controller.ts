import {
  Controller,
  Get,
  Param,
  Delete,
  Inject,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { SignupInput } from '../dto/user-signup.dto';
import { User } from '../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: UserService,
  ) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @Post('create-user')
  async ResetPassword(@Body() createUser: SignupInput) {
    console.log(createUser);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: User) {
    console.log(updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() removeUserDto: SignupInput) {
    console.log(removeUserDto);
  }
}
