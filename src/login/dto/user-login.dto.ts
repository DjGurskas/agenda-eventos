import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, MIN_LENGTH, MinLength } from 'class-validator';

export class User {
    @ApiProperty()
    @IsNumber()
    id: number; 

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
    @MinLength(10, { message: 'A senha deve ter no mínimo 10 caracteres' })
    password: string;
}
