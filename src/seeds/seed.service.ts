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
import { OtherInterventionsStartedEntity } from 'src/important-events/otherinterventions-started/entities/otherinterventions-started.entity';
import { DuringInterventionEntity } from 'src/important-events/during-intervention/entities/during-intervention.entity';
import { DuringPastEntity } from 'src/important-events/during-past/entities/during-past.entity';
import { ChildSchoolEntity } from 'src/important-events/child-school/entities/child-school.entity';
import { ReasonForUpdateEntity } from 'src/background-data/reason-for-update/entities/reason-for-update.entity';
import { SchoolUniformEntity } from 'src/background-data/school-uniform/entities/school-uniform.entity';
import { TypeOfEffortEntity } from 'src/background-data/type-of-effort/entities/type-of-effort.entity';
import { WhoParticipatesEntity } from 'src/background-data/who-participates/entities/who-participates.entity';
import { InterventionPeriodEntity } from 'src/follow-up-survey/intervention-period/entities/intervention-period.entity';
import { InterventionProgressEntity } from 'src/follow-up-survey/intervention-progress/entities/intervention-progress.entity';
import { ReasonForTerminationEntity } from 'src/follow-up-survey/reason-for-termination/entities/reason-for-termination.entity';
import { TimeConsumptionEntity } from 'src/follow-up-survey/time-consumption/entities/time-consumption.entity';
import { Repository } from 'typeorm';

import { SelectedEducationVh1Entity } from 'src/background-data/education-vh1/entities/selected-education-vh1.entity';
import { SelectedEducationVh2Entity } from 'src/background-data/education-vh2/entities/selected-education-vh2.entity';
import { SelectedEmploymentVh1Entity } from 'src/background-data/employment-vh1/entities/selected-employment-vh1.entity';
import { SelectedEmploymentVh2Entity } from 'src/background-data/employment-vh2/entities/selected-employment-vh2.entity';
import { SelectedEstablishedDiagnosesEntity } from 'src/background-data/established-diagnoses/entities/selected-established-diagnoses.entity';
import { SelectedFamilyConstellationEntity } from 'src/background-data/family-constellation/entities/selected-family-constellation.entity';
import { SelectedGenderEntity } from 'src/background-data/gender/entities/selected-gender.entity';
import { SelectedInterpreterRequiredEntity } from 'src/background-data/interpreter-required/entities/selected-interpreter-required.entity';
import { SelectedOtherInterventionsEntity } from 'src/background-data/other-interventions/entities/selected-other-interventions.entity';
import { SelectedPreviousInterventionEntity } from 'src/background-data/previous-intervention/entities/selected-previous-intervention.entity';
import { SelectedProblemAreaEntity } from 'src/background-data/problem-area/entities/selected-problem-area.entity';
import { SelectedOtherInterventionsStartedEntity } from 'src/important-events/otherinterventions-started/entities/selected-otherinterventions-started.entity';
import { SelectedDuringInterventionEntity } from 'src/important-events/during-intervention/entities/selected-during-intervention.entity';
import { SelectedDuringPastEntity } from 'src/important-events/during-past/entities/selected-during-past.entity';
import { SelectedChildSchoolEntity } from 'src/important-events/child-school/entities/selected-child-school.entity';
import { SelectedReasonForUpdateEntity } from 'src/background-data/reason-for-update/entities/selected-reason-for-update.entity';
import { SelectedSchoolUniformEntity } from 'src/background-data/school-uniform/entities/selected-school-uniform.entity';
import { SelectedTypeOfEffortEntity } from 'src/background-data/type-of-effort/entities/selected-type-of-effort.entity';
import { SelectedWhoParticipatesEntity } from 'src/background-data/who-participates/entities/selected-who-participates.entity';
import { SelectedInterventionPeriodEntity } from 'src/follow-up-survey/intervention-period/entities/selected-intervention-period.entity';
import { SelectedInterventionProgressEntity } from 'src/follow-up-survey/intervention-progress/entities/selected-intervention-progress.entity';
import { SelectedReasonForTerminationEntity } from 'src/follow-up-survey/reason-for-termination/entities/selected-reason-for-termination.entity';
import { SelectedTimeConsumptionEntity } from 'src/follow-up-survey/time-consumption/entities/selected-time-consumption.entity';
import {
  educationVh1SeedData,
  educationVh2SeedData,
  employmentVh1SeedData,
  employmentVh2SeedData,
  establishedDiagnosesSeedData,
  familyConstellationSeedData,
  genderSeedData,
  interpreterRequiredSeedData,
  interventionPeriodSeedData,
  interventionProgressSeedData,
  otherInterventionsSeedData,
  previousInterventionSeedData,
  problemAreaSeedData,
  otherInterventionsStartedSeedData,
  duringInterventionSeedData,
  duringPastSeedData,
  childSchoolSeedData,
  reasonForTerminationSeedData,
  reasonForUpdateSeedData,
  schoolUniformSeedData,
  timeConsumptionSeedData,
  typeOfEffortSeedData,
  whoParticipatesSeedData
} from '../core/constants/seed.constant';

import { BackgroundMetadataEntity } from 'src/background-data/background-metadata.entity';
import * as backgroundMetadata from "src/core/constants/background_metadata.json";
import * as scoreRealData from "src/core/constants/score.json";
import * as educationVh1RealData from "src/core/constants/selected_education_vh1.json";
import * as educationVh2RealData from "src/core/constants/selected_education_vh2.json";
import * as employmentVh1RealData from "src/core/constants/selected_employment_vh1.json";
import * as employmentVh2RealData from "src/core/constants/selected_employment_vh2.json";
import * as establishedDiagnosesRealData from "src/core/constants/selected_established_diagnoses.json";
import * as familyConstellationRealData from "src/core/constants/selected_family_constellation.json";
import * as genderRealData from "src/core/constants/selected_gender.json";
import * as interpreterRequiredRealData from "src/core/constants/selected_interpreter_required.json";
import * as interventionPeriodRealData from "src/core/constants/selected_intervention_period.json";
import * as interventionProgressRealData from "src/core/constants/selected_intervention_progress.json";
import * as otherInterventionsRealData from "src/core/constants/selected_other_interventions.json";
import * as previousInterventionRealData from "src/core/constants/selected_previous_intervention.json";
import * as problemAreaRealData from "src/core/constants/selected_problem_area.json";
import * as reasonForTerminationRealData from "src/core/constants/selected_reason_for_termination.json";
import * as reasonForUpdateRealData from "src/core/constants/selected_reason_for_update.json";
import * as schoolUniformRealData from "src/core/constants/selected_school_uniform.json";
import * as timeConsumptionRealData from "src/core/constants/selected_time_consumption.json";
import * as typeOfEffortRealData from "src/core/constants/selected_type_of_effort.json";
import * as whoParticipatesRealData from "src/core/constants/selected_who_partifipates.json";
import { ScoreEntity } from 'src/score/entities/score.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(ScoreEntity)
    private readonly scoreRepository: Repository<ScoreEntity>,

    @InjectRepository(BackgroundMetadataEntity)
    private readonly backgroundMetadataRepository: Repository<BackgroundMetadataEntity>,

    @InjectRepository(GenderEntity)
    private readonly genderRepository: Repository<GenderEntity>,
    @InjectRepository(SelectedGenderEntity)
    private readonly selectedGenderRepository: Repository<SelectedGenderEntity>,

    @InjectRepository(EducationVh1Entity)
    private readonly educationVh1Repository: Repository<EducationVh1Entity>,
    @InjectRepository(SelectedEducationVh1Entity)
    private readonly selectedEducationVh1Repository: Repository<SelectedEducationVh1Entity>,

    @InjectRepository(EducationVh2Entity)
    private readonly educationVh2Repository: Repository<EducationVh2Entity>,
    @InjectRepository(SelectedEducationVh2Entity)
    private readonly selectedEducationVh2Repository: Repository<SelectedEducationVh2Entity>,

    @InjectRepository(EmploymentVh1Entity)
    private readonly employmentVh1Repository: Repository<EmploymentVh1Entity>,
    @InjectRepository(SelectedEmploymentVh1Entity)
    private readonly selectedEmploymentVh1Repository: Repository<SelectedEmploymentVh1Entity>,

    @InjectRepository(EmploymentVh2Entity)
    private readonly employmentVh2Repository: Repository<EmploymentVh2Entity>,
    @InjectRepository(SelectedEmploymentVh2Entity)
    private readonly selectedEmploymentVh2Repository: Repository<SelectedEmploymentVh2Entity>,

    @InjectRepository(EstablishedDiagnosesEntity)
    private readonly establishedDiagnosesRepository: Repository<EstablishedDiagnosesEntity>,
    @InjectRepository(SelectedEstablishedDiagnosesEntity)
    private readonly selectedEstablishedDiagnosesRepository: Repository<SelectedEstablishedDiagnosesEntity>,

    @InjectRepository(FamilyConstellationEntity)
    private readonly familyConstellationRepository: Repository<FamilyConstellationEntity>,
    @InjectRepository(SelectedFamilyConstellationEntity)
    private readonly selectedFamilyConstellationRepository: Repository<SelectedFamilyConstellationEntity>,

    @InjectRepository(InterpreterRequiredEntity)
    private readonly interpreterRequiredRepository: Repository<InterpreterRequiredEntity>,
    @InjectRepository(SelectedInterpreterRequiredEntity)
    private readonly selectedInterpreterRequiredRepository: Repository<SelectedInterpreterRequiredEntity>,

    @InjectRepository(OtherInterventionsEntity)
    private readonly otherInterventionsRepository: Repository<OtherInterventionsEntity>,
    @InjectRepository(SelectedOtherInterventionsEntity)
    private readonly selectedOtherInterventionsRepository: Repository<SelectedOtherInterventionsEntity>,

    @InjectRepository(PreviousInterventionEntity)
    private readonly previousInterventionRepository: Repository<PreviousInterventionEntity>,
    @InjectRepository(SelectedPreviousInterventionEntity)
    private readonly selectedPreviousInterventionRepository: Repository<SelectedPreviousInterventionEntity>,

    @InjectRepository(ProblemAreaEntity)
    private readonly problemAreaRepository: Repository<ProblemAreaEntity>,
    @InjectRepository(SelectedProblemAreaEntity)
    private readonly selectedProblemAreaRepository: Repository<SelectedProblemAreaEntity>,

    @InjectRepository(OtherInterventionsStartedEntity)
    private readonly otherInterventionsStartedRepository: Repository<OtherInterventionsStartedEntity>,
    @InjectRepository(SelectedOtherInterventionsStartedEntity)
    private readonly selectedOtherInterventionsStartedRepository: Repository<SelectedOtherInterventionsStartedEntity>,

    @InjectRepository(DuringInterventionEntity)
    private readonly duringInterventionRepository: Repository<DuringInterventionEntity>,
    @InjectRepository(SelectedDuringInterventionEntity)
    private readonly selectedDuringInterventionRepository: Repository<SelectedDuringInterventionEntity>,

    @InjectRepository(DuringPastEntity)
    private readonly duringPastRepository: Repository<DuringPastEntity>,
    @InjectRepository(SelectedDuringPastEntity)
    private readonly selectedDuringPastRepository: Repository<SelectedDuringPastEntity>,

    @InjectRepository(ChildSchoolEntity)
    private readonly childSchoolRepository: Repository<ChildSchoolEntity>,
    @InjectRepository(SelectedChildSchoolEntity)
    private readonly selectedChildSchoolRepository: Repository<SelectedChildSchoolEntity>,

    @InjectRepository(ReasonForUpdateEntity)
    private readonly reasonForUpdateRepository: Repository<ReasonForUpdateEntity>,
    @InjectRepository(SelectedReasonForUpdateEntity)
    private readonly selectedReasonForUpdateRepository: Repository<SelectedReasonForUpdateEntity>,

    @InjectRepository(SchoolUniformEntity)
    private readonly schoolUniformRepository: Repository<SchoolUniformEntity>,
    @InjectRepository(SelectedSchoolUniformEntity)
    private readonly selectedSchoolUniformRepository: Repository<SelectedSchoolUniformEntity>,

    @InjectRepository(TypeOfEffortEntity)
    private readonly typeOfEffortRepository: Repository<TypeOfEffortEntity>,
    @InjectRepository(SelectedTypeOfEffortEntity)
    private readonly selectedTypeOfEffortRepository: Repository<SelectedTypeOfEffortEntity>,

    @InjectRepository(WhoParticipatesEntity)
    private readonly whoParticipatesRepository: Repository<WhoParticipatesEntity>,
    @InjectRepository(SelectedWhoParticipatesEntity)
    private readonly selectedWhoParticipatesRepository: Repository<SelectedWhoParticipatesEntity>,

    @InjectRepository(InterventionPeriodEntity)
    private readonly interventionPeriodRepository: Repository<InterventionPeriodEntity>,
    @InjectRepository(SelectedInterventionPeriodEntity)
    private readonly selectedInterventionPeriodRepository: Repository<SelectedInterventionPeriodEntity>,

    @InjectRepository(InterventionProgressEntity)
    private readonly interventionProgressRepository: Repository<InterventionProgressEntity>,
    @InjectRepository(SelectedInterventionProgressEntity)
    private readonly selectedInterventionProgressRepository: Repository<SelectedInterventionProgressEntity>,

    @InjectRepository(ReasonForTerminationEntity)
    private readonly reasonForTerminationRepository: Repository<ReasonForTerminationEntity>,
    @InjectRepository(SelectedReasonForTerminationEntity)
    private readonly selectedReasonForTerminationRepository: Repository<SelectedReasonForTerminationEntity>,

    @InjectRepository(TimeConsumptionEntity)
    private readonly timeConsumptionRepository: Repository<TimeConsumptionEntity>,
    @InjectRepository(SelectedTimeConsumptionEntity)
    private readonly selectedTimeConsumptionRepository: Repository<SelectedTimeConsumptionEntity>,

  ) { }

  async seedBackgroundMetadata(): Promise<void> {
    const numRecords = await this.backgroundMetadataRepository.count();
    if (numRecords > 0) return;
    await this.backgroundMetadataRepository.save(backgroundMetadata);
  }

  async seedScoreData(): Promise<void> {
    const numRecords = await this.scoreRepository.count();
    if (numRecords > 0) return;
    await this.scoreRepository.save(scoreRealData);
  }

  async seedGenders(): Promise<void> {
    const numRecords = await this.genderRepository.count();
    if (numRecords > 0) return;
    await this.genderRepository.save(genderSeedData);

    const numRecordsOfRealData = await this.selectedGenderRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(genderRealData.map(async (data) => {
      const entity = new SelectedGenderEntity();
      entity.codeNumber = data.codeNumber;
      entity.gender = await this.genderRepository.findOneBy({ id: data.genderId || 1 });
      await this.selectedGenderRepository.save(entity);
    }));
  }
  async seedEducationVh1s(): Promise<void> {
    const numRecords = await this.educationVh1Repository.count();
    if (numRecords > 0) return;
    await this.educationVh1Repository.save(educationVh1SeedData);

    const numRecordsOfRealData = await this.selectedEducationVh1Repository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(educationVh1RealData.map(async (data) => {
      const entity = new SelectedEducationVh1Entity();
      entity.codeNumber = data.codeNumber;
      entity.educationVh1 = await this.educationVh1Repository.findOneBy({ id: +data.educationVh1Id || 1 });
      await this.selectedEducationVh1Repository.save(entity);
    }));
  }
  async seedEducationVh2s(): Promise<void> {
    const numRecords = await this.educationVh2Repository.count();
    if (numRecords > 0) return;
    await this.educationVh2Repository.save(educationVh2SeedData);

    const numRecordsOfRealData = await this.selectedEducationVh2Repository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(educationVh2RealData.map(async (data) => {
      const entity = new SelectedEducationVh2Entity();
      entity.codeNumber = data.codeNumber;
      entity.educationVh2 = await this.educationVh2Repository.findOneBy({ id: +data.educationVh2Id || 1 });
      await this.selectedEducationVh2Repository.save(entity);
    }));
  }
  async seedEmploymentVh1s(): Promise<void> {
    const numRecords = await this.employmentVh1Repository.count();
    if (numRecords > 0) return;
    await this.employmentVh1Repository.save(employmentVh1SeedData);

    const numRecordsOfRealData = await this.selectedEmploymentVh1Repository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(employmentVh1RealData.map(async (data) => {
      const entity = new SelectedEmploymentVh1Entity();
      entity.codeNumber = data.codeNumber;
      entity.employmentVh1 = await this.employmentVh1Repository.findOneBy({ id: +data.employmentVh1Id || 1 });
      await this.selectedEmploymentVh1Repository.save(entity);
    }));
  }
  async seedEmploymentVh2s(): Promise<void> {
    const numRecords = await this.employmentVh2Repository.count();
    if (numRecords > 0) return;
    await this.employmentVh2Repository.save(employmentVh2SeedData);

    const numRecordsOfRealData = await this.selectedEmploymentVh2Repository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(employmentVh2RealData.map(async (data) => {
      const entity = new SelectedEmploymentVh2Entity();
      entity.codeNumber = data.codeNumber;
      entity.employmentVh2 = await this.employmentVh2Repository.findOneBy({ id: +data.employmentVh2Id || 1 });
      await this.selectedEmploymentVh2Repository.save(entity);
    }));
  }
  async seedEstablishedDiagnosess(): Promise<void> {
    const numRecords = await this.establishedDiagnosesRepository.count();
    if (numRecords > 0) return;
    await this.establishedDiagnosesRepository.save(establishedDiagnosesSeedData);

    const numRecordsOfRealData = await this.selectedEstablishedDiagnosesRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(establishedDiagnosesRealData.map(async (data) => {
      const entity = new SelectedEstablishedDiagnosesEntity();
      entity.codeNumber = data.codeNumber;
      entity.establishedDiagnoses = await this.establishedDiagnosesRepository.findOneBy({ id: +data.establishedDiagnosesId || 1 });
      await this.selectedEstablishedDiagnosesRepository.save(entity);
    }));
  }
  async seedFamilyConstellations(): Promise<void> {
    const numRecords = await this.familyConstellationRepository.count();
    if (numRecords > 0) return;
    await this.familyConstellationRepository.save(familyConstellationSeedData);

    const numRecordsOfRealData = await this.selectedFamilyConstellationRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(familyConstellationRealData.map(async (data) => {
      const entity = new SelectedFamilyConstellationEntity();
      entity.codeNumber = data.codeNumber;
      entity.familyConstellation = await this.familyConstellationRepository.findOneBy({ id: +data.familyConstellationId || 1 });
      await this.selectedFamilyConstellationRepository.save(entity);
    }));
  }
  async seedInterpreterRequireds(): Promise<void> {
    const numRecords = await this.interpreterRequiredRepository.count();
    if (numRecords > 0) return;
    await this.interpreterRequiredRepository.save(interpreterRequiredSeedData);

    const numRecordsOfRealData = await this.selectedInterpreterRequiredRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(interpreterRequiredRealData.map(async (data) => {
      const entity = new SelectedInterpreterRequiredEntity();
      entity.codeNumber = data.codeNumber;
      entity.interpreterRequired = await this.interpreterRequiredRepository.findOneBy({ id: +data.interpreterRequiredId || 1 });
      await this.selectedInterpreterRequiredRepository.save(entity);
    }));
  }
  async seedOtherInterventionss(): Promise<void> {
    const numRecords = await this.otherInterventionsRepository.count();
    if (numRecords > 0) return;
    await this.otherInterventionsRepository.save(otherInterventionsSeedData);

    const numRecordsOfRealData = await this.selectedOtherInterventionsRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(otherInterventionsRealData.map(async (data) => {
      const entity = new SelectedOtherInterventionsEntity();
      entity.codeNumber = data.codeNumber;
      entity.otherInterventions = await this.otherInterventionsRepository.findOneBy({ id: +data.otherInterventionsId || 1 });
      await this.selectedOtherInterventionsRepository.save(entity);
    }));
  }
  async seedPreviousInterventions(): Promise<void> {
    const numRecords = await this.previousInterventionRepository.count();
    if (numRecords > 0) return;
    await this.previousInterventionRepository.save(previousInterventionSeedData);

    const numRecordsOfRealData = await this.selectedPreviousInterventionRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(previousInterventionRealData.map(async (data) => {
      const entity = new SelectedPreviousInterventionEntity();
      entity.codeNumber = data.codeNumber;
      entity.previousIntervention = await this.previousInterventionRepository.findOneBy({ id: +data.previousInterventionId || 1 });
      await this.selectedPreviousInterventionRepository.save(entity);
    }));
  }
  async seedProblemAreas(): Promise<void> {
    const numRecords = await this.problemAreaRepository.count();
    if (numRecords > 0) return;
    await this.problemAreaRepository.save(problemAreaSeedData);

    const numRecordsOfRealData = await this.selectedProblemAreaRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(problemAreaRealData.map(async (data) => {
      const entity = new SelectedProblemAreaEntity();
      entity.codeNumber = data.codeNumber;
      entity.problemArea = await this.problemAreaRepository.findOneBy({ id: +data.problemAreaId || 1 });
      await this.selectedProblemAreaRepository.save(entity);
    }));
  }
  async seedOtherInterventionsStarted(): Promise<void> {
    const numRecords = await this.otherInterventionsStartedRepository.count();
    if (numRecords > 0) return;
    await this.otherInterventionsStartedRepository.save(otherInterventionsStartedSeedData);
  }
  async seedReasonForUpdates(): Promise<void> {
    const numRecords = await this.reasonForUpdateRepository.count();
    if (numRecords > 0) return;
    await this.reasonForUpdateRepository.save(reasonForUpdateSeedData);

    const numRecordsOfRealData = await this.selectedReasonForUpdateRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(reasonForUpdateRealData.map(async (data) => {
      const entity = new SelectedReasonForUpdateEntity();
      entity.codeNumber = data.codeNumber;
      entity.reasonForUpdate = await this.reasonForUpdateRepository.findOneBy({ id: +data.reasonForUpdateId || 1 });
      await this.selectedReasonForUpdateRepository.save(entity);
    }));
  }
  async seedSchoolUniforms(): Promise<void> {
    const numRecords = await this.schoolUniformRepository.count();
    if (numRecords > 0) return;
    await this.schoolUniformRepository.save(schoolUniformSeedData);

    const numRecordsOfRealData = await this.selectedSchoolUniformRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(schoolUniformRealData.map(async (data) => {
      const entity = new SelectedSchoolUniformEntity();
      entity.codeNumber = data.codeNumber;
      entity.schoolUniform = await this.schoolUniformRepository.findOneBy({ id: +data.schoolUniformId || 1 });
      await this.selectedSchoolUniformRepository.save(entity);
    }));
  }
  async seedTypeOfEfforts(): Promise<void> {
    const numRecords = await this.typeOfEffortRepository.count();
    if (numRecords > 0) return;
    await this.typeOfEffortRepository.save(typeOfEffortSeedData);

    const numRecordsOfRealData = await this.selectedTypeOfEffortRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(typeOfEffortRealData.map(async (data) => {
      const entity = new SelectedTypeOfEffortEntity();
      entity.codeNumber = data.codeNumber;
      entity.typeOfEffort = await this.typeOfEffortRepository.findOneBy({ id: +data.typeOfEffortId || 1 });
      await this.selectedTypeOfEffortRepository.save(entity);
    }));
  }
  async seedWhoParticipatess(): Promise<void> {
    const numRecords = await this.whoParticipatesRepository.count();
    if (numRecords > 0) return;
    await this.whoParticipatesRepository.save(whoParticipatesSeedData);

    const numRecordsOfRealData = await this.selectedWhoParticipatesRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(whoParticipatesRealData.map(async (data) => {
      const entity = new SelectedWhoParticipatesEntity();
      entity.codeNumber = data.codeNumber;
      entity.whoParticipates = await this.whoParticipatesRepository.findOneBy({ id: +data.whoParticipatesId || 1 });
      await this.selectedWhoParticipatesRepository.save(entity);
    }));
  }
  // follow up data
  async seedInterventionPeriods(): Promise<void> {
    const numRecords = await this.interventionPeriodRepository.count();
    if (numRecords > 0) return;
    await this.interventionPeriodRepository.save(interventionPeriodSeedData);

    const numRecordsOfRealData = await this.selectedInterventionPeriodRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(interventionPeriodRealData.map(async (data) => {
      const entity = new SelectedInterventionPeriodEntity();
      entity.codeNumber = data.codeNumber;
      entity.interventionPeriod = await this.interventionPeriodRepository.findOneBy({ id: +data.interventionPeriodId || 1 });
      await this.selectedInterventionPeriodRepository.save(entity);
    }));
  }
  async seedInterventionProgresss(): Promise<void> {
    const numRecords = await this.interventionProgressRepository.count();
    if (numRecords > 0) return;
    await this.interventionProgressRepository.save(interventionProgressSeedData);

    const numRecordsOfRealData = await this.selectedInterventionProgressRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(interventionProgressRealData.map(async (data) => {
      const entity = new SelectedInterventionProgressEntity();
      entity.codeNumber = data.codeNumber;
      entity.interventionProgress = await this.interventionProgressRepository.findOneBy({ id: +data.interventionProgressId || 1 });
      await this.selectedInterventionProgressRepository.save(entity);
    }));
  }
  async seedReasonForTerminations(): Promise<void> {
    const numRecords = await this.reasonForTerminationRepository.count();
    if (numRecords > 0) return;
    await this.reasonForTerminationRepository.save(reasonForTerminationSeedData);

    const numRecordsOfRealData = await this.selectedReasonForTerminationRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(reasonForTerminationRealData.map(async (data) => {
      const entity = new SelectedReasonForTerminationEntity();
      entity.codeNumber = data.codeNumber;
      entity.reasonForTermination = await this.reasonForTerminationRepository.findOneBy({ id: +data.reasonForTerminationId || 1 });
      await this.selectedReasonForTerminationRepository.save(entity);
    }));
  }
  async seedTimeConsumptions(): Promise<void> {
    const numRecords = await this.timeConsumptionRepository.count();
    if (numRecords > 0) return;
    await this.timeConsumptionRepository.save(timeConsumptionSeedData);

    const numRecordsOfRealData = await this.selectedTimeConsumptionRepository.count();
    if (numRecordsOfRealData > 0) return;
    await Promise.all(timeConsumptionRealData.map(async (data) => {
      const entity = new SelectedTimeConsumptionEntity();
      entity.codeNumber = data.codeNumber;
      entity.timeConsumption = await this.timeConsumptionRepository.findOneBy({ id: +data.timeConsumptionId || 1 });
      await this.selectedTimeConsumptionRepository.save(entity);
    }));
  }

  // Important Events
  async seedDuringIntervention(): Promise<void> {
    const numRecords = await this.duringInterventionRepository.count();
    if (numRecords > 0) return;
    await this.duringInterventionRepository.save(duringInterventionSeedData);
  }
  async seedDuringPast(): Promise<void> {
    console.log("seeding duringpast data")
    const numRecords = await this.duringPastRepository.count();
    if (numRecords > 0) return;
    await this.duringPastRepository.save(duringPastSeedData);
  }
  async seedChildSchool(): Promise<void> {
    console.log("seeding childschool data")
    const numRecords = await this.childSchoolRepository.count();
    if (numRecords > 0) return;
    await this.childSchoolRepository.save(childSchoolSeedData);
  }
}
