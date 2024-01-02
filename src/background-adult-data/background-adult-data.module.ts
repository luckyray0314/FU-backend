import { Module } from '@nestjs/common';
import { AdultScoreModule } from 'src/adult-score/adult-score.module';
import { FollowUpDataModule } from 'src/follow-up-survey/follow-up-data.module';
import { ActionAssignmentModule } from './action-assignment/action-assignment.module';
import { SelectedActionAssignmentModule } from './action-assignment/selected-action-assignment.module';
import { BackgroundAdultDataController } from './background-adult-data.controller';
import { BackgroundAdultDataService } from './background-adult-data.service';
import { BackgroundAdultMetadataModule } from './background-adult-metadata.module';
import { DuringOperationModule } from './during-operation/during-operation.module';
import { SelectedDuringOperationModule } from './during-operation/selected-during-operation.module';
import { EducationLevelModule } from './education-level/education-level.module';
import { SelectedEducationLevelModule } from './education-level/selected-education-level.module';
import { EmploymentModule } from './employment/employment.module';
import { SelectedEmploymentModule } from './employment/selected-employment.module';
import { EstablishDiagnoseModule } from './establish-diagnose/establish-diagnose.module';
import { SelectedEstablishDiagnoseModule } from './establish-diagnose/selected-establish-diagnose.module';
import { FamilyConstellationAdultModule } from './family-constellation/family-constellation.module';
import { SelectedFamilyConstellationAdultModule } from './family-constellation/selected-family-constellation.module';
import { GenderAdultModule } from './gender/gender.module';
import { SelectedGenderAdultModule } from './gender/selected-gender.module';
import { OtherOngoingEffortModule } from './other-ongoing-effort/other-ongoing-effort.module';
import { SelectedOtherOngoingEffortModule } from './other-ongoing-effort/selected-other-ongoing-effort.module';
import { PreviousEffortModule } from './previous-effort/previous-effort.module';
import { SelectedPreviousEffortModule } from './previous-effort/selected-previous-effort.module';
import { ProblemAreaAdultModule } from './problem-area/problem-area.module';
import { SelectedProblemAreaAdultModule } from './problem-area/selected-problem-area.module';
import { CloseStatusAdultModule } from 'src/close-status/adult/close.status.adult.module';

@Module({
  imports: [
    BackgroundAdultMetadataModule,
    GenderAdultModule,
    ActionAssignmentModule,
    DuringOperationModule,
    EducationLevelModule,
    EmploymentModule,
    EstablishDiagnoseModule,
    FamilyConstellationAdultModule,
    OtherOngoingEffortModule,
    PreviousEffortModule,
    ProblemAreaAdultModule,
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
    AdultScoreModule,
    FollowUpDataModule,
    CloseStatusAdultModule,
  ],
  providers: [BackgroundAdultDataService],
  controllers: [BackgroundAdultDataController],
})
export class BackgroundAdultDataModule {}
