import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EducationVh1Entity } from 'src/background-data/education-vh1/entities/education-vh1.entity';
import { EducationVh2Entity } from 'src/background-data/education-vh2/entities/education-vh2.entity';
import { EmploymentVh1Entity } from 'src/background-data/employment-vh1/entities/employment-vh1.entity';
import { EmploymentVh2Entity } from 'src/background-data/employment-vh2/entities/employment-vh2.entity';
import { EstablishedDiagnosesEntity } from 'src/background-data/established-diagnoses/entities/established-diagnoses.entity';
import { FamilyConstellationEntity } from 'src/background-data/family-constellation/entities/family-constellation.entity';
import { GenderEntity } from 'src/background-data/gender/entities/gender.entity';
import { InterpreterRequiredEntity } from 'src/background-data/interpreter-required/entities/interpreter-required.entity';
import { OtherInterventionsEntity } from 'src/background-data/other-interventions/entities/other-interventions.entity';
import { PreviousInterventionEntity } from 'src/background-data/previous-intervention/entities/previous-intervention.entity';
import { ProblemAreaEntity } from 'src/background-data/problem-area/entities/problem-area.entity';
import { ReasonForUpdateEntity } from 'src/background-data/reason-for-update/entities/reason-for-update.entity';
import { SchoolUniformEntity } from 'src/background-data/school-uniform/entities/school-uniform.entity';
import { TypeOfEffortEntity } from 'src/background-data/type-of-effort/entities/type-of-effort.entity';
import { WhoParticipatesEntity } from 'src/background-data/who-participates/entities/who-participates.entity';
import { InterventionPeriodEntity } from 'src/follow-up-survey/intervention-period/entities/intervention-period.entity';
import { InterventionProgressEntity } from 'src/follow-up-survey/intervention-progress/entities/intervention-progress.entity';
import { ReasonForTerminationEntity } from 'src/follow-up-survey/reason-for-termination/entities/reason-for-termination.entity';
import { TimeConsumptionEntity } from 'src/follow-up-survey/time-consumption/entities/time-consumption.entity';
import { Repository } from 'typeorm';

import {
  genderSeedData,
  educationVh1SeedData,
  educationVh2SeedData,
  employmentVh1SeedData,
  employmentVh2SeedData,
  establishedDiagnosesSeedData,
  familyConstellationSeedData,
  interpreterRequiredSeedData,
  otherInterventionsSeedData,
  previousInterventionSeedData,
  problemAreaSeedData,
  reasonForUpdateSeedData,
  schoolUniformSeedData,
  typeOfEffortSeedData,
  whoParticipatesSeedData,
  interventionPeriodData,
  interventionProgressData,
  reasonForTerminationData,
  timeConsumptionData
} from '../core/constants/seed.constant';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(GenderEntity) private readonly genderRepository: Repository<GenderEntity>,
    @InjectRepository(EducationVh1Entity) private readonly educationVh1Repository: Repository<EducationVh1Entity>,
    @InjectRepository(EducationVh2Entity) private readonly educationVh2Repository: Repository<EducationVh2Entity>,
    @InjectRepository(EmploymentVh1Entity) private readonly employmentVh1Repository: Repository<EmploymentVh1Entity>,
    @InjectRepository(EmploymentVh2Entity) private readonly employmentVh2Repository: Repository<EmploymentVh2Entity>,
    @InjectRepository(EstablishedDiagnosesEntity) private readonly establishedDiagnosesRepository: Repository<EstablishedDiagnosesEntity>,
    @InjectRepository(FamilyConstellationEntity) private readonly familyConstellationRepository: Repository<FamilyConstellationEntity>,
    @InjectRepository(InterpreterRequiredEntity) private readonly interpreterRequiredRepository: Repository<InterpreterRequiredEntity>,
    @InjectRepository(OtherInterventionsEntity) private readonly otherInterventionsRepository: Repository<OtherInterventionsEntity>,
    @InjectRepository(PreviousInterventionEntity) private readonly previousInterventionRepository: Repository<PreviousInterventionEntity>,
    @InjectRepository(ProblemAreaEntity) private readonly problemAreaRepository: Repository<ProblemAreaEntity>,
    @InjectRepository(ReasonForUpdateEntity) private readonly reasonForUpdateRepository: Repository<ReasonForUpdateEntity>,
    @InjectRepository(SchoolUniformEntity) private readonly schoolUniformRepository: Repository<SchoolUniformEntity>,
    @InjectRepository(TypeOfEffortEntity) private readonly typeOfEffortRepository: Repository<TypeOfEffortEntity>,
    @InjectRepository(WhoParticipatesEntity) private readonly whoParticipatesRepository: Repository<WhoParticipatesEntity>,
    @InjectRepository(InterventionPeriodEntity) private readonly interventionPeriodRepository: Repository<InterventionPeriodEntity>,
    @InjectRepository(InterventionProgressEntity) private readonly interventionProgressRepository: Repository<InterventionProgressEntity>,
    @InjectRepository(ReasonForTerminationEntity) private readonly reasonForTerminationRepository: Repository<ReasonForTerminationEntity>,
    @InjectRepository(TimeConsumptionEntity) private readonly timeConsumptionRepository: Repository<TimeConsumptionEntity>,
  ) { }

  async seedGenders(): Promise<void> {
    const numRecords = await this.genderRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.genderRepository.save(genderSeedData);
  }
  async seedEducationVh1s(): Promise<void> {
    const numRecords = await this.educationVh1Repository.count();
    if (numRecords > 0) {
      return;
    }
    this.educationVh1Repository.save(educationVh1SeedData);
  }
  async seedEducationVh2s(): Promise<void> {
    const numRecords = await this.educationVh2Repository.count();
    if (numRecords > 0) {
      return;
    }
    this.educationVh2Repository.save(educationVh2SeedData);
  }
  async seedEmploymentVh1s(): Promise<void> {
    const numRecords = await this.employmentVh1Repository.count();
    if (numRecords > 0) {
      return;
    }
    this.employmentVh1Repository.save(employmentVh1SeedData);
  }
  async seedEmploymentVh2s(): Promise<void> {
    const numRecords = await this.employmentVh2Repository.count();
    if (numRecords > 0) {
      return;
    }
    this.employmentVh2Repository.save(employmentVh2SeedData);
  }
  async seedEstablishedDiagnosess(): Promise<void> {
    const numRecords = await this.establishedDiagnosesRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.establishedDiagnosesRepository.save(establishedDiagnosesSeedData);
  }
  async seedFamilyConstellations(): Promise<void> {
    const numRecords = await this.familyConstellationRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.familyConstellationRepository.save(familyConstellationSeedData);
  }
  async seedInterpreterRequireds(): Promise<void> {
    const numRecords = await this.interpreterRequiredRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.interpreterRequiredRepository.save(interpreterRequiredSeedData);
  }
  async seedOtherInterventionss(): Promise<void> {
    const numRecords = await this.otherInterventionsRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.otherInterventionsRepository.save(otherInterventionsSeedData);
  }
  async seedPreviousInterventions(): Promise<void> {
    const numRecords = await this.previousInterventionRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.previousInterventionRepository.save(previousInterventionSeedData);
  }
  async seedProblemAreas(): Promise<void> {
    const numRecords = await this.problemAreaRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.problemAreaRepository.save(problemAreaSeedData);
  }
  async seedReasonForUpdates(): Promise<void> {
    const numRecords = await this.reasonForUpdateRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.reasonForUpdateRepository.save(reasonForUpdateSeedData);
  }
  async seedSchoolUniforms(): Promise<void> {
    const numRecords = await this.schoolUniformRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.schoolUniformRepository.save(schoolUniformSeedData);
  }
  async seedTypeOfEfforts(): Promise<void> {
    const numRecords = await this.typeOfEffortRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.typeOfEffortRepository.save(typeOfEffortSeedData);
  }
  async seedWhoParticipatess(): Promise<void> {
    const numRecords = await this.whoParticipatesRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.whoParticipatesRepository.save(whoParticipatesSeedData);
  }
  // follow up data
  async seedInterventionPeriods(): Promise<void> {
    const numRecords = await this.interventionPeriodRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.interventionPeriodRepository.save(interventionPeriodData);
  }
  async seedInterventionProgresss(): Promise<void> {
    const numRecords = await this.interventionProgressRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.interventionProgressRepository.save(interventionProgressData);
  }
  async seedReasonForTerminations(): Promise<void> {
    const numRecords = await this.reasonForTerminationRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.reasonForTerminationRepository.save(reasonForTerminationData);
  }
  async seedTimeConsumptions(): Promise<void> {
    const numRecords = await this.timeConsumptionRepository.count();
    if (numRecords > 0) {
      return;
    }
    this.timeConsumptionRepository.save(timeConsumptionData);
  }
}
