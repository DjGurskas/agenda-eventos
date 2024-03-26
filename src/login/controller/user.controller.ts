import {
  Controller,
  Get,
  Param,
  Delete,
  Inject,
  HttpException,
  HttpStatus,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../dto/user-login.dto';
import { Any } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: UserService,
  ) {}

  @Get()
  getAllUsers(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.userService.getUserById(+id);
  }

  @Post('create-user')
  async ResetPassword(@Body() createUser: User) {
    console.log(createUser);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    console.log(updateUserDto);
  }

  @Delete(':username')
  remove(@Param('id') id: string, @Body() removeUserDto: any) {
    console.log(removeUserDto);
  }
}
