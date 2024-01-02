import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsIn, IsInt, IsNumber, IsObject, IsOptional, IsString, Min } from 'class-validator';
import { getNames } from "country-list";
import { OccasionIndex } from "src/core/models/occasion.modal";
import { ActionAssignmentEntity } from './action-assignment/entities/action-assignment.entity';
import { DuringOperationEntity } from './during-operation/entities/during-operation.entity';
import { EducationLevelEntity } from './education-level/entities/education-level.entity';
import { EmploymentEntity } from './employment/entities/employment.entity';
import { EstablishDiagnoseEntity } from './establish-diagnose/entities/establish-diagnose.entity';
import { FamilyConstellationAdultEntity } from './family-constellation/entities/family-constellation.entity';
import { GenderAdultEntity } from './gender/entities/gender.entity';
import { OtherOngoingEffortEntity } from './other-ongoing-effort/entities/other-ongoing-effort.entity';
import { PreviousEffortEntity } from './previous-effort/entities/previous-effort.entity';
import { ProblemAreaAdultEntity } from './problem-area/entities/problem-area.entity';


const countryNames = getNames();

export class BackgroundAdultSurveyBasicDataDto {
  @ApiProperty()
  genderAdultEntities: GenderAdultEntity[];

  @ApiProperty()
  actionAssignmentEntities: ActionAssignmentEntity[];

  @ApiProperty()
  duringOperationEntities: DuringOperationEntity[];

  @ApiProperty()
  educationLevelEntities: EducationLevelEntity[];

  @ApiProperty()
  employmentEntities: EmploymentEntity[];

  @ApiProperty()
  establishDiagnoseEntities: EstablishDiagnoseEntity[];

  @ApiProperty()
  familyConstellationAdultEntities: FamilyConstellationAdultEntity[];

  @ApiProperty()
  otherOngoingEffortEntities: OtherOngoingEffortEntity[];

  @ApiProperty()
  previousEffortEntities: PreviousEffortEntity[];

  @ApiProperty()
  problemAreaAdultEntities: ProblemAreaAdultEntity[];

  @ApiProperty()
  importantEventsEntities: GenderAdultEntity[];
}

export type FormDataByEntityName = {
  [entityName: string]: (number | string)[];
};

export class BackgroundAdultMetadataDto {
  @ApiProperty()
  @IsString()
  codeNumber: string;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @Min(0)
  @IsInt()
  yearOfBirth: number;
}

export class BackgroundAdultDataDto {
  @ApiProperty()
  @IsString()
  codeNumber: string;

  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @Min(0)
  @IsInt()
  yearOfBirth: number;

  @ApiProperty()
  @IsOptional()
  @IsIn(countryNames)
  country: string;

  @ApiProperty({ type: () => ({} as FormDataByEntityName) })
  @IsObject()
  formDataByEntityName: FormDataByEntityName;
}

export class DocxBufferDto {
  @ApiProperty()
  @IsString()
  codeNumber: string;

  @ApiProperty()
  @IsNumber()
  @IsIn([0, 1, 2, 3])
  occasion: OccasionIndex | 0;

  @ApiProperty()
  @IsString()
  appDomain: string;

  @ApiProperty()
  @IsString()
  adultUri: string;

  @ApiProperty()
  @IsString()
  importantEventsUri: string;
}