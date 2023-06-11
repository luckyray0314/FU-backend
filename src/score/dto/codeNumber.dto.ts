import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CodeNumberDto {
  @ApiProperty()
  @IsString()
  codeNumber: string;
}