import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Validate,
  IsOptional,
  IsBoolean,
  IsString,
} from 'class-validator';
import { IsUserAlreadyExist } from '../../user/is-user-already-exist.validator';

export class CreateUserDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsDefined()
  @IsEmail()
  @IsString()
  @Validate(IsUserAlreadyExist)
  readonly email: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @MinLength(8)
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly department: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly address: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly phone: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsBoolean()
  readonly isAdmin: boolean;
}
