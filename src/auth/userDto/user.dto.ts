import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Min } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @ApiProperty()
  firstName: string;
  @IsString()
  @ApiProperty()
  lastName: string;
  @IsEmail()
  @ApiProperty()
  email: string;
  @Min(6, { message: 'password must not be less than 6' })
  @IsString()
  @ApiProperty()
  password: string;
  @IsString()
  @ApiProperty()
  shipAddress: string;
  @IsString()
  @ApiProperty()
  billingAddress: string;
}

export class LoginUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;
  @Min(6, { message: 'password must not be less than 6' })
  @ApiProperty()
  password: string;
}
