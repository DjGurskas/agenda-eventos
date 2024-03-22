import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ResetPassword {
  @IsNotEmpty({ message: 'O campo não pode estar vazio' })
  @ApiProperty()
  email: string;

  @ApiProperty({ required: false })
  password: string;
}
