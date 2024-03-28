import {
  Controller,
  Get,
  Param,
  Delete,
  Inject,
  Post,
  Body,
  Patch,
  Put,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { SignupInput } from '../dto/user-signup.dto';
import { User } from '../entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @Post('create-user')
  async create(@Body() createUser: SignupInput) {
    return await this.userService.createUser(createUser);
  }

  @Put (':id') 
  async updateUser(@Param('id') id: number, @Body() updateUserDto: User) {
    return await this.userService.update(+id, updateUserDto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() UpdateUserDto: User) {
    return await this.userService.update(+id, UpdateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Body() removeUserDto: SignupInput) {
    return await this.userService.remove(+id + removeUserDto.id);
  }
}
