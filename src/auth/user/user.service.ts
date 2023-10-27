import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';
import { CreateUserDto, LoginUserDto } from '../userDto/user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}
  //signInUser
  async signInUser(loginUserDto: LoginUserDto) {
    //IF EMAIL EXIST
    const checkEmail = await this.prismaService.user.findUnique({
      where: {
        email: loginUserDto.email,
      },
    });
    if (!checkEmail)
      throw new NotFoundException('user with email does nor exist');
    const comparePassword = await bcrypt.compare(
      loginUserDto.password,
      checkEmail.password,
    );
    if (!comparePassword) throw new NotFoundException('Incorrect Password');
    const tokens = await this.getTokens(checkEmail.id, checkEmail.email);
    await this.updateRefreshToken(checkEmail.id, tokens.refreshToken);
    return tokens;
  }

  //signupUser
  async signUpUser({
    firstName,
    lastName,
    shipAddress,
    billingAddress,
    email,
    password,
  }: CreateUserDto): Promise<any> {
    const checkEmail = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (checkEmail)
      throw new BadRequestException('email alredy exist,please login Instead');
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await this.prismaService.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        shipAddress: shipAddress,
        billingAddress: billingAddress,
        email: email,
        password: hashPassword,
      },
    });
    //token
    const tokens = await this.getTokens(newUser.id, newUser.email);
    await this.updateRefreshToken(newUser.id, tokens.refreshToken);
    return tokens;
  }
  async getTokens(userId: number, email: string) {
    const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365;
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'secrets',
          expiresIn: expirationTime,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'secrets',
          expiresIn: expirationTime,
        },
      ),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }
  async updateRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 12);
    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken: hashedRefreshToken,
      },
    });
  }
  logout(userId: number) {
    return this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken: null,
      },
    });
  }
}
