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
  ],
  providers: [ScoreService],
  controllers: [ScoreController],
  exports: [ScoreService]
})
export class ScoreModule { }
