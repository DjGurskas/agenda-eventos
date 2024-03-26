import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ResetPassword {
  @IsNotEmpty({ message: 'O campo não pode estar vazio' })
  @ApiProperty({ example: 'example@gmail.com', description: 'Email' })
  readonly email: string;

  @ApiProperty({ example: '123456@abc', description: 'Password' })
  readonly password: string;
}
