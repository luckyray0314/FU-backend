import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { OccasionIndex } from "src/core/models/occasion.modal";

export class AdultScoreDto {
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

  @ApiProperty()
  @IsArray()
  score15Answers: number[];

  @ApiProperty()
  @IsArray()
  orsAndSatisfactionScaleAnswers: number[];
}

export class AdultOrsAndScore15WithOccasionDto {
  @ApiProperty()
  @IsNumber()
  ors: number;

  @ApiProperty()
  @IsNumber()
  score15: number;

  @ApiProperty()
  @IsIn([1, 2, 3])
  occasion: OccasionIndex;
}