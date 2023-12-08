import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

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
  @IsOptional()
  @IsBoolean()
  readonly isAdmin: boolean;

  @ApiProperty()
  @IsDefined()
  @IsOptional()
  @IsString()
  readonly password: string;
}
