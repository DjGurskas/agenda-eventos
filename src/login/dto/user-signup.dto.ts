import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, MIN_LENGTH, MinLength } from 'class-validator';

export class SignupInput {
    @ApiProperty()
    id: number;
    
    @ApiProperty({example: 'Sara',
    description: 'FirstName',})
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    firstname: string;

    @ApiProperty({example: 'Oliveira', 
    description: 'LastName',})
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    lastname: string;

    @ApiProperty({example: 'abc@example.com',
    description: 'Email',})
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    @IsEmail()
    email: string;
  
    @ApiProperty({example: '123456@abc',
    description: 'Password',})
    @IsNotEmpty({ message: 'O campo não pode estar vazio' })
    @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    password: string;
}
