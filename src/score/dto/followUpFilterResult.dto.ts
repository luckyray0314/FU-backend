import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class FollowUpFilterResultDto {
  @ApiProperty()
  @IsNumber()
  numOfClients: number;

  @ApiProperty()
  @IsNumber()
  percentage: number;

  @ApiProperty()
  @IsNumber()
  score15: number;

  @ApiProperty()
  @IsNumber()
  ors: number;
}