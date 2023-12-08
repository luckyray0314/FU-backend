import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '../user/user.entity';
import { UserService } from './user.service';
import { SessionAuthGuard } from 'src/auth/guards/session-auth.guard';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { DeleteResult } from 'typeorm';

@ApiTags('User Management')
@Controller('user')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  create(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.create(body);
  }

  @Get('/:id')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  findById(@Param('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Patch('/:id')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  update(@Param('id') id: number, @Body() body: UpdateUserDto): Promise<User> {
    return this.userService.update(id, body);
  }

  @Delete('/:id')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.delete(id);
  }
}
