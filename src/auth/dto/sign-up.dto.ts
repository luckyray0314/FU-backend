import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Validate,
} from 'class-validator';
import { IsUserAlreadyExist } from '../../user/is-user-already-exist.validator';

export class SignUp {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsDefined()
  @IsEmail()
  @Validate(IsUserAlreadyExist)
  readonly email: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}
