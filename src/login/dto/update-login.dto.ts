import { PartialType } from '@nestjs/swagger';
import { UserDto } from './user-login.dto';


export class UpdateUserDto extends PartialType(UserDto) {}
