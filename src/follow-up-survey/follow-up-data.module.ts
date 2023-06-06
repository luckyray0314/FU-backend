import { Module } from '@nestjs/common';
import { ScoreModule } from 'src/score/score.module';
import { FollowUpDataController } from './follow-up-data.controller';
import { FollowUpDataService } from './follow-up-data.service';
import { FollowUpMetadataModule } from './follow-up-metadata.module';
import { InterventionPeriodModule } from './intervention-period/intervention-period.module';
import { InterventionProgressModule } from './intervention-progress/intervention-progress.module';
import { ReasonForTerminationModule } from './reason-for-termination/reason-for-termination.module';
import { TimeConsumptionModule } from './time-consumption/time-consumption.module';
import { SelectedInterventionPeriodModule } from './intervention-period/selected-intervention-period.module';
import { SelectedInterventionProgressModule } from './intervention-progress/selected-intervention-progress.module';
import { SelectedReasonForTerminationModule } from './reason-for-termination/selected-reason-for-termination.module';
import { SelectedTimeConsumptionModule } from './time-consumption/selected-time-consumption.module';

@Module({
  imports: [
    InterventionPeriodModule,
    InterventionProgressModule,
    ReasonForTerminationModule,
    TimeConsumptionModule,
    SelectedInterventionPeriodModule,
    SelectedInterventionProgressModule,
    SelectedReasonForTerminationModule,
    SelectedTimeConsumptionModule,
    FollowUpMetadataModule,
    ScoreModule
  ],
  providers: [FollowUpDataService],
  controllers: [FollowUpDataController],
  exports: [FollowUpDataService]
})
export class FollowUpDataModule { }
