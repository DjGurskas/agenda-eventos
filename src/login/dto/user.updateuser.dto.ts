import { ApiProperty } from "@nestjs/swagger";

export class updatePutDTO {
  @ApiProperty({ example: 'Aurora', description: 'First Name' })
  readonly firstName: string;

  @ApiProperty({ example: 'Silveira', description: 'Last Name' })
  readonly lastName: string;

  @ApiProperty({ example: '12345@example.com', description: 'Email' })
  readonly email: string;

  @ApiProperty({ example: 'Abcdfg@12345', description: 'Password' })
  password: string;
}
