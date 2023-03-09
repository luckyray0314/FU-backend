import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtherInterventionsEntity } from './entities/other-interventions.entity';
import { SelectedOtherInterventionsEntity } from './entities/selected-other-interventions.entity';
import { OtherInterventionsRepository } from './other-interventions.repository';
import { OtherInterventionsService } from './other-interventions.service';
import { SelectedOtherInterventionsRepository } from './selected-other-interventions.repository';
import { SelectedOtherInterventionsService } from './selected-other-interventions.service';

@Module({
  imports: [TypeOrmModule.forFeature([OtherInterventionsEntity, SelectedOtherInterventionsEntity])],
  providers: [OtherInterventionsService, OtherInterventionsRepository, SelectedOtherInterventionsService, SelectedOtherInterventionsRepository],
  exports: [OtherInterventionsService, OtherInterventionsRepository, SelectedOtherInterventionsService, SelectedOtherInterventionsRepository]
})
export class OtherInterventionsModule { }
