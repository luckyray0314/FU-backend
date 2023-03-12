import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsNotEmpty, IsObject, IsString } from "class-validator";
import { SurveyStatus } from "src/core/enums/survey-status";

export class EstimatesDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  codeNumber: string; // BoF2023-02...

  @ApiProperty()
  @IsEnum(SurveyStatus)
  status: SurveyStatus;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  missedFields: string;

  @ApiProperty()
  @IsObject()
  history: {
    zeroMonth: {
      date: Date;
      statusInDetail: {
        child: SurveyStatus;
        careGiver1: SurveyStatus;
        careGiver2: SurveyStatus;
      };
    },
    sixMonths: {
      date: Date;
      statusInDetail: {
        child: SurveyStatus;
        careGiver1: SurveyStatus;
        careGiver2: SurveyStatus;
      };
    },
    twelveMonths: {
      date: Date;
      statusInDetail: {
        child: SurveyStatus;
        careGiver1: SurveyStatus;
        careGiver2: SurveyStatus;
      };
    };
  };

  @ApiProperty()
  @IsDate()
  nextMeal: Date;
};