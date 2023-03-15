import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsIn, IsInt, IsObject, IsOptional, IsString, Min } from 'class-validator';
import { EducationVh1Entity } from './education-vh1/entities/education-vh1.entity';
import { EducationVh2Entity } from './education-vh2/entities/education-vh2.entity';
import { EmploymentVh1Entity } from './employment-vh1/entities/employment-vh1.entity';
import { EmploymentVh2Entity } from './employment-vh2/entities/employment-vh2.entity';
import { EstablishedDiagnosesEntity } from './established-diagnoses/entities/established-diagnoses.entity';
import { FamilyConstellationEntity } from './family-constellation/entities/family-constellation.entity';
import { GenderEntity } from './gender/entities/gender.entity';
import { InterpreterRequiredEntity } from './interpreter-required/entities/interpreter-required.entity';
import { OtherInterventionsEntity } from './other-interventions/entities/other-interventions.entity';
import { PreviousInterventionEntity } from './previous-intervention/entities/previous-intervention.entity';
import { ProblemAreaEntity } from './problem-area/entities/problem-area.entity';
import { ReasonForUpdateEntity } from './reason-for-update/entities/reason-for-update.entity';
import { SchoolUniformEntity } from './school-uniform/entities/school-uniform.entity';
import { TypeOfEffortEntity } from './type-of-effort/entities/type-of-effort.entity';
import { WhoParticipatesEntity } from './who-participates/entities/who-participates.entity';
import { getNames } from "country-list";

const countryNames = getNames();

export class BackgroundSurveyBasicDataDto {
  @ApiProperty()
  genderEntities: GenderEntity[];

  @ApiProperty()
  educationVh1Entities: EducationVh1Entity[];

  @ApiProperty()
  educationVh2Entities: EducationVh2Entity[];

  @ApiProperty()
  employmentVh1Entities: EmploymentVh1Entity[];

  @ApiProperty()
  employmentVh2Entities: EmploymentVh2Entity[];

  @ApiProperty()
  establishedDiagnosesEntities: EstablishedDiagnosesEntity[];

  @ApiProperty()
  familyConstellationEntities: FamilyConstellationEntity[];

  @ApiProperty()
  interpreterRequiredEntities: InterpreterRequiredEntity[];

  @ApiProperty()
  otherInterventionsEntities: OtherInterventionsEntity[];

  @ApiProperty()
  previousInterventionEntities: PreviousInterventionEntity[];

  @ApiProperty()
  problemAreaEntities: ProblemAreaEntity[];

  @ApiProperty()
  reasonForUpdateEntities: ReasonForUpdateEntity[];

  @ApiProperty()
  schoolUniformEntities: SchoolUniformEntity[];

  @ApiProperty()
  typeOfEffortEntities: TypeOfEffortEntity[];

  @ApiProperty()
  whoParticipatesEntities: WhoParticipatesEntity[];
}

export type FormDataByEntityName = {
  [entityName: string]: (number | string)[];
};

export class BackgroundMetadataDto {
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

export class BackgroundDataDto {
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