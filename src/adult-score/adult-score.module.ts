import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedActionAssignmentModule } from 'src/background-adult-data/action-assignment/selected-action-assignment.module';
import { BackgroundAdultMetadataModule } from 'src/background-adult-data/background-adult-metadata.module';
import { SelectedDuringOperationModule } from 'src/background-adult-data/during-operation/selected-during-operation.module';
import { SelectedEducationLevelModule } from 'src/background-adult-data/education-level/selected-education-level.module';
import { SelectedEmploymentModule } from 'src/background-adult-data/employment/selected-employment.module';
import { SelectedEstablishDiagnoseModule } from 'src/background-adult-data/establish-diagnose/selected-establish-diagnose.module';
import { SelectedFamilyConstellationAdultModule } from 'src/background-adult-data/family-constellation/selected-family-constellation.module';
import { SelectedGenderAdultModule } from 'src/background-adult-data/gender/selected-gender.module';
import { SelectedOtherOngoingEffortModule } from 'src/background-adult-data/other-ongoing-effort/selected-other-ongoing-effort.module';
import { SelectedPreviousEffortModule } from 'src/background-adult-data/previous-effort/selected-previous-effort.module';
import { SelectedProblemAreaAdultModule } from 'src/background-adult-data/problem-area/selected-problem-area.module';
import { AdultScoreController } from './adult-score.controller';
import { AdultScoreService } from './adult-score.service';
import { AdultScoreEntity } from './entities/adult-score.entity';
import { CloseStatusAdultModule } from 'src/close-status/adult/close.status.adult.module';
import { ImportantEventsVuxModule } from 'src/important-events-vux/important-events-vux.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdultScoreEntity]),
    SelectedGenderAdultModule,
    SelectedActionAssignmentModule,
    SelectedDuringOperationModule,
    SelectedEducationLevelModule,
    SelectedEmploymentModule,
    SelectedEstablishDiagnoseModule,
    SelectedFamilyConstellationAdultModule,
    SelectedOtherOngoingEffortModule,
    SelectedPreviousEffortModule,
    SelectedProblemAreaAdultModule,
    BackgroundAdultMetadataModule,
    CloseStatusAdultModule,
    ImportantEventsVuxModule,
  ],
  providers: [AdultScoreService],
  controllers: [AdultScoreController],
  exports: [AdultScoreService],
})
export class AdultScoreModule {}
