import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AuthUser } from '../user/user.decorator';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { SignUp } from './dto/sign-up.dto';
import { JWTAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SessionAuthGuard } from './guards/session-auth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';

@ApiTags('Auth Management')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(TokenInterceptor)
  @ApiOkResponse({ type: () => User })
  register(@Body() signUp: SignUp): Promise<User> {
    console.log("🚀 ~ file: auth.controller.ts:33 ~ AuthController ~ register ~ signUp", signUp);
    return this.authService.register(signUp);
  }


  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  @ApiOkResponse({ type: () => User })
  async login(@AuthUser() user: User): Promise<User> {
    return user;
  }

  @Get('/me')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  me(@AuthUser() user: User): User {
    return user;
  }
}
