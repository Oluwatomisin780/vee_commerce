import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Min, IsNotEmpty } from 'class-validator';
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
  @IsNotEmpty()
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
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
