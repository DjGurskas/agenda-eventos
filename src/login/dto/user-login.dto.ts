import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginInput {
  @IsNotEmpty({ message: 'O campo do email não pode estar vazio' })
  @ApiProperty({ example: 'example@gmail.com', description: 'Email' })
  email: string;

  @ApiProperty({ example: '123456@abc', 
  description: 'Password' })
  password: string;
}
