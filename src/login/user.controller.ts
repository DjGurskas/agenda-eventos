import { Controller, Get, Param, Delete, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service'



@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') 
    private readonly userService: UserService,) {}


    @Get('')
  getUsers() {
    return this.userService.getUsers();
  }


 /* @Get('/:username')
  getByUsername(@Param ('username') username: string ) {
    const user = this.userService.getUserByUsername(username);
    if (user) return new SerializedUser;
    else throw new HttpException('Usuário não encontrado',
    HttpStatus.BAD_REQUEST);
  }

  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {}*/

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, UpdateUserDto);
  }*/

  @Delete(':username')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
