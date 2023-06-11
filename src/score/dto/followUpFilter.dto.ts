import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsIn, IsObject } from "class-validator";
import { OccasionIndex } from "src/core/models/occasion.modal";

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

  @ApiProperty()
  @IsArray()
  occasions: OccasionIndex[];
}