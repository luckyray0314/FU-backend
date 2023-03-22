import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsObject, IsString } from 'class-validator';
import { FormDataByEntityName } from 'src/background-data/background-data.dto';
import { InterventionPeriodEntity } from './intervention-period/entities/intervention-period.entity';
import { InterventionProgressEntity } from './intervention-progress/entities/intervention-progress.entity';
import { ReasonForTerminationEntity } from './reason-for-termination/entities/reason-for-termination.entity';
import { TimeConsumptionEntity } from './time-consumption/entities/time-consumption.entity';

export class FollowUpSurveyBasicDataDto {
  @ApiProperty()
  interventionPeriodEntities: InterventionPeriodEntity[];

  @ApiProperty()
  interventionProgressEntities: InterventionProgressEntity[];

  @ApiProperty()
  reasonForTerminationEntities: ReasonForTerminationEntity[];

  @ApiProperty()
  timeConsumptionEntities: TimeConsumptionEntity[];
}

export class FollowUpMetadataDto {
  @ApiProperty()
  @IsString()
  codeNumber: string;

  @ApiProperty()
  @IsDateString()
  date: string;
}

export class FollowUpDataDto {
  @ApiProperty()
  @IsString()
  codeNumber: string;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty({ type: () => ({} as FormDataByEntityName) })
  @IsObject()
  formDataByEntityName: FormDataByEntityName;
}