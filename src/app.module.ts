import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BackgroundDataModule } from './background-data/background-data.module';
import { BackgroundMetadataModule } from './background-data/background-metadata.module';
import { EducationVh1Module } from './background-data/education-vh1/education-vh1.module';
import { SelectedEducationVh1Module } from './background-data/education-vh1/selected-education-vh1.module';
import { EducationVh2Module } from './background-data/education-vh2/education-vh2.module';
import { SelectedEducationVh2Module } from './background-data/education-vh2/selected-education-vh2.module';
import { EmploymentVh1Module } from './background-data/employment-vh1/employment-vh1.module';
import { SelectedEmploymentVh1Module } from './background-data/employment-vh1/selected-employment-vh1.module';
import { EmploymentVh2Module } from './background-data/employment-vh2/employment-vh2.module';
import { SelectedEmploymentVh2Module } from './background-data/employment-vh2/selected-employment-vh2.module';
import { EstablishedDiagnosesModule } from './background-data/established-diagnoses/established-diagnoses.module';
import { SelectedEstablishedDiagnosesModule } from './background-data/established-diagnoses/selected-established-diagnoses.module';
import { FamilyConstellationModule } from './background-data/family-constellation/family-constellation.module';
import { SelectedFamilyConstellationModule } from './background-data/family-constellation/selected-family-constellation.module';
import { GenderModule } from './background-data/gender/gender.module';
import { SelectedGenderModule } from './background-data/gender/selected-gender.module';
import { InterpreterRequiredModule } from './background-data/interpreter-required/interpreter-required.module';
import { SelectedInterpreterRequiredModule } from './background-data/interpreter-required/selected-interpreter-required.module';
import { OtherInterventionsModule } from './background-data/other-interventions/other-interventions.module';
import { SelectedOtherInterventionsModule } from './background-data/other-interventions/selected-other-interventions.module';
import { PreviousInterventionModule } from './background-data/previous-intervention/previous-intervention.module';
import { SelectedPreviousInterventionModule } from './background-data/previous-intervention/selected-previous-intervention.module';
import { ProblemAreaModule } from './background-data/problem-area/problem-area.module';
import { SelectedProblemAreaModule } from './background-data/problem-area/selected-problem-area.module';
import { ReasonForUpdateModule } from './background-data/reason-for-update/reason-for-update.module';
import { SelectedReasonForUpdateModule } from './background-data/reason-for-update/selected-reason-for-update.module';
import { SchoolUniformModule } from './background-data/school-uniform/school-uniform.module';
import { SelectedSchoolUniformModule } from './background-data/school-uniform/selected-school-uniform.module';
import { SelectedTypeOfEffortModule } from './background-data/type-of-effort/selected-type-of-effort.module';
import { TypeOfEffortModule } from './background-data/type-of-effort/type-of-effort.module';
import { SelectedWhoParticipatesModule } from './background-data/who-participates/selected-who-participates.module';
import { WhoParticipatesModule } from './background-data/who-participates/who-participates.module';
import { dataSourceOptions } from './data-source';
import { FollowUpDataModule } from './follow-up-survey/follow-up-data.module';
import { FollowUpMetadataModule } from './follow-up-survey/follow-up-metadata.module';
import { InterventionPeriodModule } from './follow-up-survey/intervention-period/intervention-period.module';
import { SelectedInterventionPeriodModule } from './follow-up-survey/intervention-period/selected-intervention-period.module';
import { InterventionProgressModule } from './follow-up-survey/intervention-progress/intervention-progress.module';
import { SelectedInterventionProgressModule } from './follow-up-survey/intervention-progress/selected-intervention-progress.module';
import { ReasonForTerminationModule } from './follow-up-survey/reason-for-termination/reason-for-termination.module';
import { SelectedReasonForTerminationModule } from './follow-up-survey/reason-for-termination/selected-reason-for-termination.module';
import { SelectedTimeConsumptionModule } from './follow-up-survey/time-consumption/selected-time-consumption.module';
import { TimeConsumptionModule } from './follow-up-survey/time-consumption/time-consumption.module';
import { HealthController } from './health.controller';
import { ScoreModule } from './score/score.module';
import { SeedModule } from './seeds/seed.module';
import { UserModule } from './user/user.module';

// Important Events Modules
import { ChildSchoolModule } from './important-events/child-school/child-school.module';
import { SelectedChildSchoolModule } from './important-events/child-school/selected-child-school.module';
import { DuringInterventionModule } from './important-events/during-intervention/during-intervention.module';
import { SelectedDuringInterventionModule } from './important-events/during-intervention/selected-during-intervention.module';
import { DuringPastModule } from './important-events/during-past/during-past.module';
import { SelectedDuringPastModule } from './important-events/during-past/selected-during-past.module';
import { ImportantEventsModule } from './important-events/important-events.module';
import { OtherInterventionsStartedModule } from './important-events/otherinterventions-started/otherinterventions-started.module';
import { SelectedOtherInterventionsStartedModule } from './important-events/otherinterventions-started/selected-otherinterventions-started.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dataSourceOptions, autoLoadEntities: true }),
    TerminusModule,
    SeedModule,
    UserModule,
    AuthModule,

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
    OtherInterventionsStartedModule,
    DuringInterventionModule,
    DuringPastModule,
    ChildSchoolModule,

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
    SelectedOtherInterventionsStartedModule,
    SelectedDuringInterventionModule,
    SelectedDuringPastModule,
    SelectedChildSchoolModule,

    BackgroundMetadataModule,
    BackgroundDataModule,
    ScoreModule,

    InterventionPeriodModule,
    InterventionProgressModule,
    ReasonForTerminationModule,
    TimeConsumptionModule,
    SelectedInterventionPeriodModule,
    SelectedInterventionProgressModule,
    SelectedReasonForTerminationModule,
    SelectedTimeConsumptionModule,

    
    
    ImportantEventsModule,

    FollowUpMetadataModule,
    FollowUpDataModule,
  ],
  controllers: [AppController, HealthController],
  providers: [
    AppService
  ],
})
export class AppModule { }
