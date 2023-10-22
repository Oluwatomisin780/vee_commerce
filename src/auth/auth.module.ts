import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from './strategies/access_token.strategy';
import { RefreshTokenStrategy } from './strategies/refresh_token.strategy';
@Module({
  imports: [PrismaModule, JwtModule.register({})],
  providers: [UserService, AccessTokenStrategy, RefreshTokenStrategy],
  controllers: [UserController],
})
export class AuthModule {}
