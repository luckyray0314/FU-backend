import { ApiProperty } from '@nestjs/swagger';

import { IsObject, IsString } from 'class-validator';
import { FormDataByEntityName } from 'src/background-data/background-data.dto';
import { DuringInterventionEntity } from '../important-events/during-intervention/entities/during-intervention.entity';
import { OtherInterventionsStartedEntity } from '../important-events/otherinterventions-started/entities/otherinterventions-started.entity';
import { ChildSchoolEntity } from './child-school/entities/child-school.entity';
import { DuringPastEntity } from './during-past/entities/during-past.entity';
import { ChangeAccomodationEntity } from './change-accomodation/entities/change-accomodation.entity';
import { ChangeEmploymentVh1Entity } from './change-employment-vh1/entities/change-employment-vh1.entity';
import { ChangeEmploymentVh2Entity } from './change-employment-vh2/entities/change-employment-vh2.entity';


export class ImportantEventsBasicDataDto {
  @ApiProperty()
  otherInterventionsStartedEntities: OtherInterventionsStartedEntity[];

  @ApiProperty()
  duringInterventionEntities: DuringInterventionEntity[];

  @ApiProperty()
  duringPastEntities: DuringPastEntity[];

  @ApiProperty()
  childSchoolEntities: ChildSchoolEntity[];

  @ApiProperty()
  changeAccomodationEntities: ChangeAccomodationEntity[];
  
  @ApiProperty()
  changeEmploymentVh1Entities: ChangeEmploymentVh1Entity[];

  @ApiProperty()
  changeEmploymentVh2Entities: ChangeEmploymentVh2Entity[];
}

export class ImportantEventsDataDto {
  @ApiProperty()
  @IsString()
  codeNumber: string;

  @ApiProperty({ type: () => ({} as FormDataByEntityName) })
  @IsObject()
  formDataByEntityName: FormDataByEntityName;
}