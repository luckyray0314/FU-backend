import { ApiProperty } from '@nestjs/swagger';

import { IsObject, IsString } from 'class-validator';
import { FormDataByEntityName } from 'src/background-data/background-data.dto';
import { DuringInterventionEntity } from '../important-events/during-intervention/entities/during-intervention.entity';
import { OtherInterventionsStartedEntity } from '../important-events/otherinterventions-started/entities/otherinterventions-started.entity';
import { ChildSchoolEntity } from './child-school/entities/child-school.entity';
import { DuringPastEntity } from './during-past/entities/during-past.entity';


export class ImportantEventsBasicDataDto {
  @ApiProperty()
  otherInterventionsStartedEntities: OtherInterventionsStartedEntity[];

  @ApiProperty()
  duringInterventionEntities: DuringInterventionEntity[];

  @ApiProperty()
  duringPastEntities: DuringPastEntity[];

  @ApiProperty()
  childSchoolEntities: ChildSchoolEntity[];
}

export class ImportantEventsDataDto {
  @ApiProperty()
  @IsString()
  codeNumber: string;

  @ApiProperty({ type: () => ({} as FormDataByEntityName) })
  @IsObject()
  formDataByEntityName: FormDataByEntityName;
}