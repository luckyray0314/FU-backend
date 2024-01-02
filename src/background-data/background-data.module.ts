import { Module } from '@nestjs/common';
import { FollowUpDataModule } from "src/follow-up-survey/follow-up-data.module";
import { ScoreModule } from 'src/score/score.module';
import { BackgroundDataController } from './background-data.controller';
import { BackgroundDataService } from './background-data.service';
import { BackgroundMetadataModule } from './background-metadata.module';
import { EducationVh1Module } from './education-vh1/education-vh1.module';
import { SelectedEducationVh1Module } from './education-vh1/selected-education-vh1.module';
import { EducationVh2Module } from './education-vh2/education-vh2.module';
import { SelectedEducationVh2Module } from './education-vh2/selected-education-vh2.module';
import { EmploymentVh1Module } from './employment-vh1/employment-vh1.module';
import { SelectedEmploymentVh1Module } from './employment-vh1/selected-employment-vh1.module';
import { EmploymentVh2Module } from './employment-vh2/employment-vh2.module';
import { SelectedEmploymentVh2Module } from './employment-vh2/selected-employment-vh2.module';
import { EstablishedDiagnosesModule } from './established-diagnoses/established-diagnoses.module';
import { SelectedEstablishedDiagnosesModule } from './established-diagnoses/selected-established-diagnoses.module';
import { FamilyConstellationModule } from './family-constellation/family-constellation.module';
import { SelectedFamilyConstellationModule } from './family-constellation/selected-family-constellation.module';
import { GenderModule } from './gender/gender.module';
import { SelectedGenderModule } from './gender/selected-gender.module';
import { InterpreterRequiredModule } from './interpreter-required/interpreter-required.module';
import { SelectedInterpreterRequiredModule } from './interpreter-required/selected-interpreter-required.module';
import { OtherInterventionsModule } from './other-interventions/other-interventions.module';
import { SelectedOtherInterventionsModule } from './other-interventions/selected-other-interventions.module';
import { PreviousInterventionModule } from './previous-intervention/previous-intervention.module';
import { SelectedPreviousInterventionModule } from './previous-intervention/selected-previous-intervention.module';
import { ProblemAreaModule } from './problem-area/problem-area.module';
import { SelectedProblemAreaModule } from './problem-area/selected-problem-area.module';
import { ReasonForUpdateModule } from './reason-for-update/reason-for-update.module';
import { SelectedReasonForUpdateModule } from './reason-for-update/selected-reason-for-update.module';
import { SchoolUniformModule } from './school-uniform/school-uniform.module';
import { SelectedSchoolUniformModule } from './school-uniform/selected-school-uniform.module';
import { SelectedTypeOfEffortModule } from './type-of-effort/selected-type-of-effort.module';
import { TypeOfEffortModule } from './type-of-effort/type-of-effort.module';
import { SelectedWhoParticipatesModule } from './who-participates/selected-who-participates.module';
import { WhoParticipatesModule } from './who-participates/who-participates.module';
import { CloseStatusModule } from 'src/close-status/child/close.status.child.module';

@Module({
  imports: [
    GenderModule,
    EducationVh1Module,
    EducationVh2Module,
    EmploymentVh1Module,
    EmploymentVh2Module,
    EstablishedDiagnosesModule,
    FamilyConstellationModule,
    InterpreterRequiredModule,
    OtherInterventionsModule,
    PreviousInterventionModule,
    ProblemAreaModule,
    ReasonForUpdateModule,
    SchoolUniformModule,
    TypeOfEffortModule,
    WhoParticipatesModule,
    SelectedGenderModule,
    SelectedEducationVh1Module,
    SelectedEducationVh2Module,
    SelectedEmploymentVh1Module,
    SelectedEmploymentVh2Module,
    SelectedEstablishedDiagnosesModule,
    SelectedFamilyConstellationModule,
    SelectedInterpreterRequiredModule,
    SelectedOtherInterventionsModule,
    SelectedPreviousInterventionModule,
    SelectedProblemAreaModule,
    SelectedReasonForUpdateModule,
    SelectedSchoolUniformModule,
    SelectedTypeOfEffortModule,
    SelectedWhoParticipatesModule,
    BackgroundMetadataModule,
    CloseStatusModule,
    ScoreModule,
    FollowUpDataModule
  ],
  providers: [BackgroundDataService],
  controllers: [BackgroundDataController],
})
export class BackgroundDataModule { }
