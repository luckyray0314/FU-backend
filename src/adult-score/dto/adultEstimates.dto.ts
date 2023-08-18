import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsNotEmpty, IsObject, IsString } from "class-validator";
import { SurveyStatus } from "src/core/enums/survey-status";

export class AdultEstimatesDto {
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
      };
    },
    sixMonths: {
      date: Date;
      statusInDetail: {
        child: SurveyStatus;
      };
    },
    twelveMonths: {
      date: Date;
      statusInDetail: {
        child: SurveyStatus;
      };
    };
  };

  @ApiProperty()
  @IsDate()
  nextSurvey: string;
};