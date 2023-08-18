import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class AdultScoreFilterDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  codeNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsIn([1, 2, 3])
  person: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsIn([1, 2, 3])
  occasion: number;
}