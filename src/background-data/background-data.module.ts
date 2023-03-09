import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackgroundDataController } from './background-data.controller';
import { BackgroundMetadataEntity } from './background-metadata.entity';
import { BackgroundMetadataRepository } from './background-metadata.repository';
import { BackgroundMetadataService } from './background-metadata.service';
import { EducationVh1Repository } from './education-vh1/education-vh1.repository';
import { EducationVh1Service } from './education-vh1/education-vh1.service';
import { EducationVh1Entity } from './education-vh1/entities/education-vh1.entity';
import { SelectedEducationVh1Entity } from './education-vh1/entities/selected-education-vh1.entity';
import { SelectedEducationVh1Repository } from './education-vh1/selected-education-vh1.repository';
import { SelectedEducationVh1Service } from './education-vh1/selected-education-vh1.service';
import { EducationVh2Repository } from './education-vh2/education-vh2.repository';
import { EducationVh2Service } from './education-vh2/education-vh2.service';
import { EducationVh2Entity } from './education-vh2/entities/education-vh2.entity';
import { SelectedEducationVh2Entity } from './education-vh2/entities/selected-education-vh2.entity';
import { SelectedEducationVh2Repository } from './education-vh2/selected-education-vh2.repository';
import { SelectedEducationVh2Service } from './education-vh2/selected-education-vh2.service';
import { EmploymentVh1Repository } from './employment-vh1/employment-vh1.repository';
import { EmploymentVh1Service } from './employment-vh1/employment-vh1.service';
import { EmploymentVh1Entity } from './employment-vh1/entities/employment-vh1.entity';
import { SelectedEmploymentVh1Entity } from './employment-vh1/entities/selected-employment-vh1.entity';
import { SelectedEmploymentVh1Repository } from './employment-vh1/selected-employment-vh1.repository';
import { SelectedEmploymentVh1Service } from './employment-vh1/selected-employment-vh1.service';
import { EmploymentVh2Repository } from './employment-vh2/employment-vh2.repository';
import { EmploymentVh2Service } from './employment-vh2/employment-vh2.service';
import { EmploymentVh2Entity } from './employment-vh2/entities/employment-vh2.entity';
import { SelectedEmploymentVh2Entity } from './employment-vh2/entities/selected-employment-vh2.entity';
import { SelectedEmploymentVh2Repository } from './employment-vh2/selected-employment-vh2.repository';
import { SelectedEmploymentVh2Service } from './employment-vh2/selected-employment-vh2.service';
import { EstablishedDiagnosesEntity } from './established-diagnoses/entities/established-diagnoses.entity';
import { SelectedEstablishedDiagnosesEntity } from './established-diagnoses/entities/selected-established-diagnoses.entity';
import { EstablishedDiagnosesRepository } from './established-diagnoses/established-diagnoses.repository';
import { EstablishedDiagnosesService } from './established-diagnoses/established-diagnoses.service';
import { SelectedEstablishedDiagnosesRepository } from './established-diagnoses/selected-established-diagnoses.repository';
import { SelectedEstablishedDiagnosesService } from './established-diagnoses/selected-established-diagnoses.service';
import { FamilyConstellationEntity } from './family-constellation/entities/family-constellation.entity';
import { SelectedFamilyConstellationEntity } from './family-constellation/entities/selected-family-constellation.entity';
import { FamilyConstellationRepository } from './family-constellation/family-constellation.repository';
import { FamilyConstellationService } from './family-constellation/family-constellation.service';
import { SelectedFamilyConstellationRepository } from './family-constellation/selected-family-constellation.repository';
import { SelectedFamilyConstellationService } from './family-constellation/selected-family-constellation.service';
import { GenderEntity } from './gender/entities/gender.entity';
import { SelectedGenderEntity } from './gender/entities/selected-gender.entity';
import { GenderRepository } from './gender/gender.repository';
import { GenderService } from './gender/gender.service';
import { SelectedGenderRepository } from './gender/selected-gender.repository';
import { SelectedGenderService } from './gender/selected-gender.service';
import { InterpreterRequiredEntity } from './interpreter-required/entities/interpreter-required.entity';
import { SelectedInterpreterRequiredEntity } from './interpreter-required/entities/selected-interpreter-required.entity';
import { InterpreterRequiredRepository } from './interpreter-required/interpreter-required.repository';
import { InterpreterRequiredService } from './interpreter-required/interpreter-required.service';
import { SelectedInterpreterRequiredRepository } from './interpreter-required/selected-interpreter-required.repository';
import { SelectedInterpreterRequiredService } from './interpreter-required/selected-interpreter-required.service';
import { OtherInterventionsEntity } from './other-interventions/entities/other-interventions.entity';
import { SelectedOtherInterventionsEntity } from './other-interventions/entities/selected-other-interventions.entity';
import { OtherInterventionsRepository } from './other-interventions/other-interventions.repository';
import { OtherInterventionsService } from './other-interventions/other-interventions.service';
import { SelectedOtherInterventionsRepository } from './other-interventions/selected-other-interventions.repository';
import { SelectedOtherInterventionsService } from './other-interventions/selected-other-interventions.service';
import { PreviousInterventionEntity } from './previous-intervention/entities/previous-intervention.entity';
import { SelectedPreviousInterventionEntity } from './previous-intervention/entities/selected-previous-intervention.entity';
import { PreviousInterventionRepository } from './previous-intervention/previous-intervention.repository';
import { PreviousInterventionService } from './previous-intervention/previous-intervention.service';
import { SelectedPreviousInterventionRepository } from './previous-intervention/selected-previous-intervention.repository';
import { SelectedPreviousInterventionService } from './previous-intervention/selected-previous-intervention.service';
import { ProblemAreaEntity } from './problem-area/entities/problem-area.entity';
import { SelectedProblemAreaEntity } from './problem-area/entities/selected-problem-area.entity';
import { ProblemAreaRepository } from './problem-area/problem-area.repository';
import { ProblemAreaService } from './problem-area/problem-area.service';
import { SelectedProblemAreaRepository } from './problem-area/selected-problem-area.repository';
import { SelectedProblemAreaService } from './problem-area/selected-problem-area.service';
import { ReasonForUpdateEntity } from './reason-for-update/entities/reason-for-update.entity';
import { SelectedReasonForUpdateEntity } from './reason-for-update/entities/selected-reason-for-update.entity';
import { ReasonForUpdateRepository } from './reason-for-update/reason-for-update.repository';
import { ReasonForUpdateService } from './reason-for-update/reason-for-update.service';
import { SelectedReasonForUpdateRepository } from './reason-for-update/selected-reason-for-update.repository';
import { SelectedReasonForUpdateService } from './reason-for-update/selected-reason-for-update.service';
import { SchoolUniformEntity } from './school-uniform/entities/school-uniform.entity';
import { SelectedSchoolUniformEntity } from './school-uniform/entities/selected-school-uniform.entity';
import { SchoolUniformRepository } from './school-uniform/school-uniform.repository';
import { SchoolUniformService } from './school-uniform/school-uniform.service';
import { SelectedSchoolUniformRepository } from './school-uniform/selected-school-uniform.repository';
import { SelectedSchoolUniformService } from './school-uniform/selected-school-uniform.service';
import { SelectedTypeOfEffortEntity } from './type-of-effort/entities/selected-type-of-effort.entity';
import { TypeOfEffortEntity } from './type-of-effort/entities/type-of-effort.entity';
import { SelectedTypeOfEffortRepository } from './type-of-effort/selected-type-of-effort.repository';
import { SelectedTypeOfEffortService } from './type-of-effort/selected-type-of-effort.service';
import { TypeOfEffortRepository } from './type-of-effort/type-of-effort.repository';
import { TypeOfEffortService } from './type-of-effort/type-of-effort.service';
import { SelectedWhoParticipatesEntity } from './who-participates/entities/selected-who-participates.entity';
import { WhoParticipatesEntity } from './who-participates/entities/who-participates.entity';
import { SelectedWhoParticipatesRepository } from './who-participates/selected-who-participates.repository';
import { SelectedWhoParticipatesService } from './who-participates/selected-who-participates.service';
import { WhoParticipatesRepository } from './who-participates/who-participates.repository';
import { WhoParticipatesService } from './who-participates/who-participates.service';

@Module({
  imports: [TypeOrmModule.forFeature([ 
    BackgroundMetadataEntity,
    GenderEntity, SelectedGenderEntity,
    EducationVh1Entity, SelectedEducationVh1Entity,
    EducationVh2Entity, SelectedEducationVh2Entity,
    EmploymentVh1Entity, SelectedEmploymentVh1Entity,
    EmploymentVh2Entity, SelectedEmploymentVh2Entity,
    EstablishedDiagnosesEntity, SelectedEstablishedDiagnosesEntity,
    FamilyConstellationEntity, SelectedFamilyConstellationEntity,
    InterpreterRequiredEntity, SelectedInterpreterRequiredEntity,
    OtherInterventionsEntity, SelectedOtherInterventionsEntity,
    PreviousInterventionEntity, SelectedPreviousInterventionEntity,
    ProblemAreaEntity, SelectedProblemAreaEntity,
    ReasonForUpdateEntity, SelectedReasonForUpdateEntity,
    SchoolUniformEntity, SelectedSchoolUniformEntity,
    TypeOfEffortEntity, SelectedTypeOfEffortEntity,
    WhoParticipatesEntity, SelectedWhoParticipatesEntity,
  ])],
  providers: [
    BackgroundMetadataService, BackgroundMetadataRepository,
    GenderService, GenderRepository, SelectedGenderService, SelectedGenderRepository,
    EducationVh1Service, EducationVh1Repository, SelectedEducationVh1Service, SelectedEducationVh1Repository,
    EducationVh2Service, EducationVh2Repository, SelectedEducationVh2Service, SelectedEducationVh2Repository,
    EmploymentVh1Service, EmploymentVh1Repository, SelectedEmploymentVh1Service, SelectedEmploymentVh1Repository,
    EmploymentVh2Service, EmploymentVh2Repository, SelectedEmploymentVh2Service, SelectedEmploymentVh2Repository,
    EstablishedDiagnosesService, EstablishedDiagnosesRepository, SelectedEstablishedDiagnosesService, SelectedEstablishedDiagnosesRepository,
    FamilyConstellationService, FamilyConstellationRepository, SelectedFamilyConstellationService, SelectedFamilyConstellationRepository,
    InterpreterRequiredService, InterpreterRequiredRepository, SelectedInterpreterRequiredService, SelectedInterpreterRequiredRepository,
    OtherInterventionsService, OtherInterventionsRepository, SelectedOtherInterventionsService, SelectedOtherInterventionsRepository,
    PreviousInterventionService, PreviousInterventionRepository, SelectedPreviousInterventionService, SelectedPreviousInterventionRepository,
    ProblemAreaService, ProblemAreaRepository, SelectedProblemAreaService, SelectedProblemAreaRepository,
    ReasonForUpdateService, ReasonForUpdateRepository, SelectedReasonForUpdateService, SelectedReasonForUpdateRepository,
    SchoolUniformService, SchoolUniformRepository, SelectedSchoolUniformService, SelectedSchoolUniformRepository,
    TypeOfEffortService, TypeOfEffortRepository, SelectedTypeOfEffortService, SelectedTypeOfEffortRepository,
    WhoParticipatesService, WhoParticipatesRepository, SelectedWhoParticipatesService, SelectedWhoParticipatesRepository,
  ],
  controllers: [BackgroundDataController],
})
export class BackgroundDataModule {}
