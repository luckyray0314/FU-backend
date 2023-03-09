import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ScoreDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  codeNumber: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsIn([1, 2, 3])
  person: number;
  
  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsIn([1, 2, 3])
  occasion: number;

  @ApiProperty()
  @IsNumber()
  score15: number;

  @ApiProperty()
  @IsNumber()
  ors: number;
}