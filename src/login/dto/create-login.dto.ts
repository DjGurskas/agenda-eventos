import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateLoginDto {
    @ApiProperty()
    id: string;
  
    @ApiProperty()
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    username: string;
  
    @ApiProperty()
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    @IsEmail()
    email: string;
  
    @ApiProperty()
    telephone: number;
  
    @ApiProperty()
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    password: string;
}
