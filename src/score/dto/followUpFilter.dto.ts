import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNumber, IsObject } from "class-validator";

export class FollowUpFilterDto {
  @ApiProperty()
  @IsObject()
  idsByEntityName: {
    [entityName: string]: number[];
  };

  @ApiProperty()
  @IsDateString()
  startDate: string;

  @ApiProperty()
  @IsDateString()
  endDate: string;
}