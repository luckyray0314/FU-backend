import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsBooleanString, IsNotEmpty, IsString } from "class-validator";

export class CloseStatusDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  codeNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  processor: string;

  @ApiProperty()
  @IsBoolean()
  @IsBooleanString()
  closeStatus: boolean;
}