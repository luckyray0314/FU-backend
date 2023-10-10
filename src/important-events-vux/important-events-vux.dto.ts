import { ApiProperty } from '@nestjs/swagger';

import { IsObject, IsString } from 'class-validator';
import { FormDataByEntityName } from 'src/background-data/background-data.dto';
import { ChangeLiveEntity } from './change-live/entities/change-live.entity';
import { ChangeOverEntity } from './change-over/entities/change-over.entity';
import { InvestigationOutEntity } from './investigation-out/entities/investigation-out.entity';
import { OtherInitiativeEntity } from './other-initiative/entities/other-initiative.entity';


export class ImportantEventsVuxBasicDataDto {
  @ApiProperty()
  changeLiveEntities: ChangeLiveEntity[];

  @ApiProperty()
  changeOverEntities: ChangeOverEntity[];

  @ApiProperty()
  investigationOutEntities: InvestigationOutEntity[];

  @ApiProperty()
  otherInitiativeEntities: OtherInitiativeEntity[];
}

export class ImportantEventsVuxDataDto {
  @ApiProperty()
  @IsString()
  codeNumber: string;

  @ApiProperty({ type: () => ({} as FormDataByEntityName) })
  @IsObject()
  formDataByEntityName: FormDataByEntityName;
}