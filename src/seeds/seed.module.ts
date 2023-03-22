import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationVh1Module } from 'src/background-data/education-vh1/education-vh1.module';
import { EducationVh1Repository } from 'src/background-data/education-vh1/education-vh1.repository';
import { EducationVh1Entity } from 'src/background-data/education-vh1/entities/education-vh1.entity';
import { EducationVh2Module } from 'src/background-data/education-vh2/education-vh2.module';
import { EducationVh2Repository } from 'src/background-data/education-vh2/education-vh2.repository';
import { EducationVh2Entity } from 'src/background-data/education-vh2/entities/education-vh2.entity';
import { EmploymentVh1Module } from 'src/background-data/employment-vh1/employment-vh1.module';
import { EmploymentVh1Repository } from 'src/background-data/employment-vh1/employment-vh1.repository';
import { EmploymentVh1Entity } from 'src/background-data/employment-vh1/entities/employment-vh1.entity';
import { EmploymentVh2Module } from 'src/background-data/employment-vh2/employment-vh2.module';
import { EmploymentVh2Repository } from 'src/background-data/employment-vh2/employment-vh2.repository';
import { EmploymentVh2Entity } from 'src/background-data/employment-vh2/entities/employment-vh2.entity';
import { EstablishedDiagnosesEntity } from 'src/background-data/established-diagnoses/entities/established-diagnoses.entity';
import { EstablishedDiagnosesModule } from 'src/background-data/established-diagnoses/established-diagnoses.module';
import { EstablishedDiagnosesRepository } from 'src/background-data/established-diagnoses/established-diagnoses.repository';
import { FamilyConstellationEntity } from 'src/background-data/family-constellation/entities/family-constellation.entity';
import { FamilyConstellationModule } from 'src/background-data/family-constellation/family-constellation.module';
import { FamilyConstellationRepository } from 'src/background-data/family-constellation/family-constellation.repository';
import { GenderEntity } from 'src/background-data/gender/entities/gender.entity';
import { GenderModule } from 'src/background-data/gender/gender.module';
import { GenderRepository } from 'src/background-data/gender/gender.repository';
import { InterpreterRequiredEntity } from 'src/background-data/interpreter-required/entities/interpreter-required.entity';
import { InterpreterRequiredModule } from 'src/background-data/interpreter-required/interpreter-required.module';
import { InterpreterRequiredRepository } from 'src/background-data/interpreter-required/interpreter-required.repository';
import { OtherInterventionsEntity } from 'src/background-data/other-interventions/entities/other-interventions.entity';
import { OtherInterventionsModule } from 'src/background-data/other-interventions/other-interventions.module';
import { OtherInterventionsRepository } from 'src/background-data/other-interventions/other-interventions.repository';
import { PreviousInterventionEntity } from 'src/background-data/previous-intervention/entities/previous-intervention.entity';
import { PreviousInterventionModule } from 'src/background-data/previous-intervention/previous-intervention.module';
import { PreviousInterventionRepository } from 'src/background-data/previous-intervention/previous-intervention.repository';
import { ProblemAreaEntity } from 'src/background-data/problem-area/entities/problem-area.entity';
import { ProblemAreaModule } from 'src/background-data/problem-area/problem-area.module';
import { ProblemAreaRepository } from 'src/background-data/problem-area/problem-area.repository';
import { ReasonForUpdateEntity } from 'src/background-data/reason-for-update/entities/reason-for-update.entity';
import { ReasonForUpdateModule } from 'src/background-data/reason-for-update/reason-for-update.module';
import { ReasonForUpdateRepository } from 'src/background-data/reason-for-update/reason-for-update.repository';
import { SchoolUniformEntity } from 'src/background-data/school-uniform/entities/school-uniform.entity';
import { SchoolUniformModule } from 'src/background-data/school-uniform/school-uniform.module';
import { SchoolUniformRepository } from 'src/background-data/school-uniform/school-uniform.repository';
import { TypeOfEffortEntity } from 'src/background-data/type-of-effort/entities/type-of-effort.entity';
import { TypeOfEffortModule } from 'src/background-data/type-of-effort/type-of-effort.module';
import { TypeOfEffortRepository } from 'src/background-data/type-of-effort/type-of-effort.repository';
import { WhoParticipatesEntity } from 'src/background-data/who-participates/entities/who-participates.entity';
import { WhoParticipatesModule } from 'src/background-data/who-participates/who-participates.module';
import { WhoParticipatesRepository } from 'src/background-data/who-participates/who-participates.repository';
import { InterventionPeriodEntity } from 'src/follow-up-survey/intervention-period/entities/intervention-period.entity';
import { InterventionPeriodModule } from 'src/follow-up-survey/intervention-period/intervention-period.module';
import { InterventionPeriodRepository } from 'src/follow-up-survey/intervention-period/intervention-period.repository';
import { InterventionProgressEntity } from 'src/follow-up-survey/intervention-progress/entities/intervention-progress.entity';
import { InterventionProgressModule } from 'src/follow-up-survey/intervention-progress/intervention-progress.module';
import { InterventionProgressRepository } from 'src/follow-up-survey/intervention-progress/intervention-progress.repository';
import { ReasonForTerminationEntity } from 'src/follow-up-survey/reason-for-termination/entities/reason-for-termination.entity';
import { ReasonForTerminationModule } from 'src/follow-up-survey/reason-for-termination/reason-for-termination.module';
import { ReasonForTerminationRepository } from 'src/follow-up-survey/reason-for-termination/reason-for-termination.repository';
import { TimeConsumptionEntity } from 'src/follow-up-survey/time-consumption/entities/time-consumption.entity';
import { TimeConsumptionModule } from 'src/follow-up-survey/time-consumption/time-consumption.module';
import { TimeConsumptionRepository } from 'src/follow-up-survey/time-consumption/time-consumption.repository';

import { SeedService } from './seed.service';

@Module({
  imports: [
    GenderModule, TypeOrmModule.forFeature([GenderEntity, GenderRepository]),
    EducationVh1Module, TypeOrmModule.forFeature([EducationVh1Entity, EducationVh1Repository]),
    EducationVh2Module, TypeOrmModule.forFeature([EducationVh2Entity, EducationVh2Repository]),
    EmploymentVh1Module, TypeOrmModule.forFeature([EmploymentVh1Entity, EmploymentVh1Repository]),
    EmploymentVh2Module, TypeOrmModule.forFeature([EmploymentVh2Entity, EmploymentVh2Repository]),
    EstablishedDiagnosesModule, TypeOrmModule.forFeature([EstablishedDiagnosesEntity, EstablishedDiagnosesRepository]),
    FamilyConstellationModule, TypeOrmModule.forFeature([FamilyConstellationEntity, FamilyConstellationRepository]),
    InterpreterRequiredModule, TypeOrmModule.forFeature([InterpreterRequiredEntity, InterpreterRequiredRepository]),
    OtherInterventionsModule, TypeOrmModule.forFeature([OtherInterventionsEntity, OtherInterventionsRepository]),
    PreviousInterventionModule, TypeOrmModule.forFeature([PreviousInterventionEntity, PreviousInterventionRepository]),
    ProblemAreaModule, TypeOrmModule.forFeature([ProblemAreaEntity, ProblemAreaRepository]),
    ReasonForUpdateModule, TypeOrmModule.forFeature([ReasonForUpdateEntity, ReasonForUpdateRepository]),
    SchoolUniformModule, TypeOrmModule.forFeature([SchoolUniformEntity, SchoolUniformRepository]),
    TypeOfEffortModule, TypeOrmModule.forFeature([TypeOfEffortEntity, TypeOfEffortRepository]),
    WhoParticipatesModule, TypeOrmModule.forFeature([WhoParticipatesEntity, WhoParticipatesRepository]),
    InterventionPeriodModule, TypeOrmModule.forFeature([InterventionPeriodEntity, InterventionPeriodRepository]),
    InterventionProgressModule, TypeOrmModule.forFeature([InterventionProgressEntity, InterventionProgressRepository]),
    ReasonForTerminationModule, TypeOrmModule.forFeature([ReasonForTerminationEntity, ReasonForTerminationRepository]),
    TimeConsumptionModule, TypeOrmModule.forFeature([TimeConsumptionEntity, TimeConsumptionRepository]),
  ],
  providers: [SeedService],
})
export class SeedModule { }
