import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AuthUser } from '../user/user.decorator';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { SignUp } from './dto/sign-up.dto';
import { JWTAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { SessionAuthGuard } from './guards/session-auth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { Login } from './dto/login.dto';
import { CreateUserDto } from 'src/user/dto/user-create.dto';
import { UpdateUserDto } from 'src/user/dto/user-update.dto';
import { UserService } from 'src/user/user.service';

@ApiTags('Auth Management')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(TokenInterceptor)
  @ApiOkResponse({ type: () => User })
  register(@Body() data: CreateUserDto): Promise<User> {
    return this.authService.register(data);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(TokenInterceptor)
  @ApiOkResponse({ type: () => User })
  async login(@Body() login: Login): Promise<User> {
    return this.authService.login(login);
  }

  @ApiBearerAuth()
  @Get('/me')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  me(@AuthUser() user: User): User {
    return user;
  }

  @ApiBearerAuth()
  @Patch('/profile')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  updateProfile(
    @AuthUser() user: User,
    @Body() updateUser: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(user?.id, updateUser);
  }
}
