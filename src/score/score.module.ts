import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackgroundMetadataModule } from 'src/background-data/background-metadata.module';
import { SelectedEducationVh1Module } from 'src/background-data/education-vh1/selected-education-vh1.module';
import { SelectedEducationVh2Module } from 'src/background-data/education-vh2/selected-education-vh2.module';
import { SelectedEmploymentVh1Module } from 'src/background-data/employment-vh1/selected-employment-vh1.module';
import { SelectedEmploymentVh2Module } from 'src/background-data/employment-vh2/selected-employment-vh2.module';
import { SelectedEstablishedDiagnosesModule } from 'src/background-data/established-diagnoses/selected-established-diagnoses.module';
import { SelectedFamilyConstellationModule } from 'src/background-data/family-constellation/selected-family-constellation.module';
import { SelectedGenderModule } from 'src/background-data/gender/selected-gender.module';
import { SelectedInterpreterRequiredModule } from 'src/background-data/interpreter-required/selected-interpreter-required.module';
import { SelectedOtherInterventionsModule } from 'src/background-data/other-interventions/selected-other-interventions.module';
import { SelectedPreviousInterventionModule } from 'src/background-data/previous-intervention/selected-previous-intervention.module';
import { SelectedProblemAreaModule } from 'src/background-data/problem-area/selected-problem-area.module';
import { SelectedReasonForUpdateModule } from 'src/background-data/reason-for-update/selected-reason-for-update.module';
import { SelectedSchoolUniformModule } from 'src/background-data/school-uniform/selected-school-uniform.module';
import { SelectedTypeOfEffortModule } from 'src/background-data/type-of-effort/selected-type-of-effort.module';
import { SelectedWhoParticipatesModule } from 'src/background-data/who-participates/selected-who-participates.module';
import { ScoreEntity } from './entities/score.entity';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';
import { CloseStatusModule } from 'src/close-status/child/close.status.child.module';
import { ImportantEventsModule } from 'src/important-events/important-events.module';
import { OtherInterventionsStartedModule } from 'src/important-events/otherinterventions-started/otherinterventions-started.module';
import { DuringInterventionModule } from 'src/important-events/during-intervention/during-intervention.module';
import { DuringPastModule } from 'src/important-events/during-past/during-past.module';
import { ChildSchoolModule } from 'src/important-events/child-school/child-school.module';
import { ChangeAccomodationModule } from 'src/important-events/change-accomodation/change-accomodation.module';
import { ChangeEmploymentVh1Module } from 'src/important-events/change-employment-vh1/change-employment-vh1.module';
import { ChangeEmploymentVh2Module } from 'src/important-events/change-employment-vh2/change-employment-vh2.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ScoreEntity]),
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
    OtherInterventionsStartedModule,
    DuringInterventionModule,
    DuringPastModule,
    ChildSchoolModule,
    ChangeAccomodationModule,
    ChangeEmploymentVh1Module,
    ChangeEmploymentVh2Module,
    ImportantEventsModule,
    CloseStatusModule,
  ],
  providers: [ScoreService],
  controllers: [ScoreController],
  exports: [ScoreService],
})
export class ScoreModule {}
