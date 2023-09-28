import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CloseStatusDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  codeNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNotEmpty()
  processor: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNotEmpty()
  isClosed: string;
}
