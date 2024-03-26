import { PartialType } from '@nestjs/swagger';
import { User } from './user-login.dto';


export class UpdateUserDto extends PartialType(User) {}
