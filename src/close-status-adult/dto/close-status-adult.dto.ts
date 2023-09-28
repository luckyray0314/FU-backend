import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CloseStatusAdultDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  codeNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  processor: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  isClosed: string;
}
