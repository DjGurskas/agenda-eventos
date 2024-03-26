import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'Sara', description: 'First Name' })
  readonly firstName: string;

  @ApiProperty({ example: 'Oliveira', description: 'Last Name' })
  readonly lastName: string;

  @ApiProperty({ example: 'Not Available', description: 'Url of User Avatar' })
  readonly avatarUrl: string;
}
