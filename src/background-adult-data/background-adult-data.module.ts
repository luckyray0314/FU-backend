import { Module } from '@nestjs/common';
import { FollowUpDataModule } from "src/follow-up-survey/follow-up-data.module";
import { ScoreModule } from 'src/score/score.module';
import { ActionAssignmentModule } from './action-assignment/action-assignment.module';
import { BackgroundAdultDataController } from './background-adult-data.controller';
import { BackgroundAdultDataService } from './background-adult-data.service';
import { DuringOperationModule } from './during-operation/during-operation.module';
import { EducationLevelModule } from './education-level/education-level.module';
import { EmploymentModule } from './employment/employment.module';
import { EstablishDiagnoseModule } from './establish-diagnose/establish-diagnose.module';
import { FamilyConstellationAdultModule } from './family-constellation/family-constellation.module';
import { GenderAdultModule } from './gender/gender.module';
import { OtherOngoingEffortModule } from './other-ongoing-effort/other-ongoing-effort.module';
import { PreviousEffortModule } from './previous-effort/previous-effort.module';
import { ProblemAreaAdultModule } from './problem-area/problem-area.module';

@Module({
  imports: [
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
    ScoreModule,
    FollowUpDataModule
  ],
  providers: [BackgroundAdultDataService],
  controllers: [BackgroundAdultDataController],
})
export class BackgroundAdultDataModule { }
