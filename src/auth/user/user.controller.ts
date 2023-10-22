import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from '../userDto/user.dto';
import { Request } from 'express';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signIn')
  signInUser(@Body() loginUserDto: LoginUserDto) {
    return this.userService.signInUser(loginUserDto);
  }

  //
  @Post('/signUp')
  signUpUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.signUpUser(createUserDto);
  }
  @Get('/logout')
  LogoutUser(@Req() req: Request) {
    return this.userService.logout(req.user['sub']);
  }
}
