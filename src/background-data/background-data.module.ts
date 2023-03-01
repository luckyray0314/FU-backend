import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackgroundDataController } from './background-data.controller';
import { EducationVh1Repository } from './education-vh1/education-vh1.repository';
import { EducationVh1Service } from './education-vh1/education-vh1.service';
import { EducationVh1Entity } from './education-vh1/entities/education-vh1.entity';
import { EducationVh2Repository } from './education-vh2/education-vh2.repository';
import { EducationVh2Service } from './education-vh2/education-vh2.service';
import { EducationVh2Entity } from './education-vh2/entities/education-vh2.entity';
import { EmploymentVh1Repository } from './employment-vh1/employment-vh1.repository';
import { EmploymentVh1Service } from './employment-vh1/employment-vh1.service';
import { EmploymentVh1Entity } from './employment-vh1/entities/employment-vh1.entity';
import { EmploymentVh2Repository } from './employment-vh2/employment-vh2.repository';
import { EmploymentVh2Service } from './employment-vh2/employment-vh2.service';
import { EmploymentVh2Entity } from './employment-vh2/entities/employment-vh2.entity';
import { EstablishedDiagnosesEntity } from './established-diagnoses/entities/established-diagnoses.entity';
import { EstablishedDiagnosesRepository } from './established-diagnoses/established-diagnoses.repository';
import { EstablishedDiagnosesService } from './established-diagnoses/established-diagnoses.service';
import { FamilyConstellationEntity } from './family-constellation/entities/family-constellation.entity';
import { FamilyConstellationRepository } from './family-constellation/family-constellation.repository';
import { FamilyConstellationService } from './family-constellation/family-constellation.service';
import { GenderEntity } from './gender/entities/gender.entity';
import { GenderRepository } from './gender/gender.repository';
import { GenderService } from './gender/gender.service';
import { InterpreterRequiredEntity } from './interpreter-required/entities/interpreter-required.entity';
import { InterpreterRequiredRepository } from './interpreter-required/interpreter-required.repository';
import { InterpreterRequiredService } from './interpreter-required/interpreter-required.service';
import { OtherInterventionsEntity } from './other-interventions/entities/other-interventions.entity';
import { OtherInterventionsRepository } from './other-interventions/other-interventions.repository';
import { OtherInterventionsService } from './other-interventions/other-interventions.service';
import { PreviousInterventionEntity } from './previous-intervention/entities/previous-intervention.entity';
import { PreviousInterventionRepository } from './previous-intervention/previous-intervention.repository';
import { PreviousInterventionService } from './previous-intervention/previous-intervention.service';
import { ProblemAreaEntity } from './problem-area/entities/problem-area.entity';
import { ProblemAreaRepository } from './problem-area/problem-area.repository';
import { ProblemAreaService } from './problem-area/problem-area.service';
import { ReasonForUpdateEntity } from './reason-for-update/entities/reason-for-update.entity';
import { ReasonForUpdateRepository } from './reason-for-update/reason-for-update.repository';
import { ReasonForUpdateService } from './reason-for-update/reason-for-update.service';
import { SchoolUniformEntity } from './school-uniform/entities/school-uniform.entity';
import { SchoolUniformRepository } from './school-uniform/school-uniform.repository';
import { SchoolUniformService } from './school-uniform/school-uniform.service';
import { TypeOfEffortEntity } from './type-of-effort/entities/type-of-effort.entity';
import { TypeOfEffortRepository } from './type-of-effort/type-of-effort.repository';
import { TypeOfEffortService } from './type-of-effort/type-of-effort.service';
import { WhoParticipatesEntity } from './who-participates/entities/who-participates.entity';
import { WhoParticipatesRepository } from './who-participates/who-participates.repository';
import { WhoParticipatesService } from './who-participates/who-participates.service';

@Module({
  imports: [TypeOrmModule.forFeature([ 
    GenderEntity,
    EducationVh1Entity,
    EducationVh2Entity,
    EmploymentVh1Entity,
    EmploymentVh2Entity,
    EstablishedDiagnosesEntity,
    FamilyConstellationEntity,
    InterpreterRequiredEntity,
    OtherInterventionsEntity,
    PreviousInterventionEntity,
    ProblemAreaEntity,
    ReasonForUpdateEntity,
    SchoolUniformEntity,
    TypeOfEffortEntity,
    WhoParticipatesEntity,
  ])],
  providers: [
    GenderService, GenderRepository,
    EducationVh1Service, EducationVh1Repository,
    EducationVh2Service, EducationVh2Repository,
    EmploymentVh1Service, EmploymentVh1Repository,
    EmploymentVh2Service, EmploymentVh2Repository,
    EstablishedDiagnosesService, EstablishedDiagnosesRepository,
    FamilyConstellationService, FamilyConstellationRepository,
    InterpreterRequiredService, InterpreterRequiredRepository,
    OtherInterventionsService, OtherInterventionsRepository,
    PreviousInterventionService, PreviousInterventionRepository,
    ProblemAreaService, ProblemAreaRepository,
    ReasonForUpdateService, ReasonForUpdateRepository,
    SchoolUniformService, SchoolUniformRepository,
    TypeOfEffortService, TypeOfEffortRepository,
    WhoParticipatesService, WhoParticipatesRepository,
  ],
  controllers: [BackgroundDataController],
})
export class BackgroundDataModule {}
