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
  whoParticipatesSeedData,
  changeAccomodationSeedData,
  changeEmploymentVh1SeedData,
  changeEmploymentVh2SeedData,
  genderAdultSeedData,
  actionAssignmentSeedData,
  duringOperationSeedData,
  educationLevelSeedData,
  employmentSeedData,
  establishDiagnoseSeedData,
  familyConstellationAdultSeedData,
  otherOngoingEffortSeedData,
  previousEffortSeedData,
  problemAreaAdultSeedData,
  changeLiveSeedData,
  changeOverSeedData,
  investigationOutSeedData,
  otherInitiativeSeedData,
} from '../core/constants/seed.constant';

import { ScoreEntity } from 'src/score/entities/score.entity';
import { ChangeAccomodationEntity } from 'src/important-events/change-accomodation/entities/change-accomodation.entity';
import { SelectedChangeAccomodationEntity } from 'src/important-events/change-accomodation/entities/selected-change-accomodation.entity';
import { ChangeEmploymentVh1Entity } from 'src/important-events/change-employment-vh1/entities/change-employment-vh1.entity';
import { SelectedChangeEmploymentVh1Entity } from 'src/important-events/change-employment-vh1/entities/selected-change-employment-vh1.entity';
import { ChangeEmploymentVh2Entity } from 'src/important-events/change-employment-vh2/entities/change-employment-vh2.entity';
import { SelectedChangeEmploymentVh2Entity } from 'src/important-events/change-employment-vh2/entities/selected-change-employment-vh2.entity';
import { BackgroundAdultMetadataEntity } from 'src/background-adult-data/background-adult-metadata.entity';
import { GenderAdultEntity } from 'src/background-adult-data/gender/entities/gender.entity';
import { SelectedGenderAdultEntity } from 'src/background-adult-data/gender/entities/selected-gender.entity';
import { ActionAssignmentEntity } from 'src/background-adult-data/action-assignment/entities/action-assignment.entity';
import { SelectedActionAssignmentEntity } from 'src/background-adult-data/action-assignment/entities/selected-action-assignment.entity';
import { DuringOperationEntity } from 'src/background-adult-data/during-operation/entities/during-operation.entity';
import { SelectedDuringOperationEntity } from 'src/background-adult-data/during-operation/entities/selected-during-operation.entity';
import { EducationLevelEntity } from 'src/background-adult-data/education-level/entities/education-level.entity';
import { SelectedEducationLevelEntity } from 'src/background-adult-data/education-level/entities/selected-education-level.entity';
import { EmploymentEntity } from 'src/background-adult-data/employment/entities/employment.entity';
import { SelectedEmploymentEntity } from 'src/background-adult-data/employment/entities/selected-employment.entity';
import { EstablishDiagnoseEntity } from 'src/background-adult-data/establish-diagnose/entities/establish-diagnose.entity';
import { SelectedEstablishDiagnoseEntity } from 'src/background-adult-data/establish-diagnose/entities/selected-establish-diagnose.entity';
import { FamilyConstellationAdultEntity } from 'src/background-adult-data/family-constellation/entities/family-constellation.entity';
import { SelectedFamilyConstellationAdultEntity } from 'src/background-adult-data/family-constellation/entities/selected-family-constellation.entity';
import { OtherOngoingEffortEntity } from 'src/background-adult-data/other-ongoing-effort/entities/other-ongoing-effort.entity';
import { SelectedOtherOngoingEffortEntity } from 'src/background-adult-data/other-ongoing-effort/entities/selected-other-ongoing-effort.entity';
import { PreviousEffortEntity } from 'src/background-adult-data/previous-effort/entities/previous-effort.entity';
import { SelectedPreviousEffortEntity } from 'src/background-adult-data/previous-effort/entities/selected-previous-effort.entity';
import { ProblemAreaAdultEntity } from 'src/background-adult-data/problem-area/entities/problem-area.entity';
import { SelectedProblemAreaAdultEntity } from 'src/background-adult-data/problem-area/entities/selected-problem-area.entity';
import { AdultScoreEntity } from 'src/adult-score/entities/adult-score.entity';
import { CloseStatusEntity } from 'src/close-status/child/entities/close.status.child.entity';
import { CloseStatusAdultEntity } from 'src/close-status/adult/entities/close.status.adult.entity';
import { ChangeLiveEntity } from 'src/important-events-vux/change-live/entities/change-live.entity';
import { SelectedChangeLiveEntity } from 'src/important-events-vux/change-live/entities/selected-change-live.entity';
import { ChangeOverEntity } from 'src/important-events-vux/change-over/entities/change-over.entity';
import { SelectedChangeOverEntity } from 'src/important-events-vux/change-over/entities/selected-change-over.entity';
import { InvestigationOutEntity } from 'src/important-events-vux/investigation-out/entities/investigation-out.entity';
import { SelectedInvestigationOutEntity } from 'src/important-events-vux/investigation-out/entities/selected-investigation-out.entity';
import { OtherInitiativeEntity } from 'src/important-events-vux/other-initiative/entities/other-initiative.entity';
import { SelectedOtherInitiativeEntity } from 'src/important-events-vux/other-initiative/entities/selected-other-initiative.entity';

import { BackgroundMetadataEntity } from 'src/background-data/background-metadata.entity';
//JSON Files
/* Bof Files */
import backgroundMetadata from 'src/core/constants/json/bof/background_metadata.json';
import closeStatusRealData from 'src/core/constants/json/bof/close-status.json';
import scoreRealData from 'src/core/constants/json/bof/score.json';
import educationVh1RealData from 'src/core/constants/json/bof/selected_education_vh1.json';
import educationVh2RealData from 'src/core/constants/json/bof/selected_education_vh2.json';
import employmentVh1RealData from 'src/core/constants/json/bof/selected_employment_vh1.json';
import employmentVh2RealData from 'src/core/constants/json/bof/selected_employment_vh2.json';
import establishedDiagnosesRealData from 'src/core/constants/json/bof/selected_established_diagnoses.json';
import familyConstellationRealData from 'src/core/constants/json/bof/selected_family_constellation.json';
import genderRealData from 'src/core/constants/json/bof/selected_gender.json';
import interventionPeriodRealData from 'src/core/constants/json/bof/selected_intervention_period.json';
import interventionProgressRealData from 'src/core/constants/json/bof/selected_intervention_progress.json';
import otherInterventionsRealData from 'src/core/constants/json/bof/selected_other_interventions.json';
import previousInterventionRealData from 'src/core/constants/json/bof/selected_previous_intervention.json';
import problemAreaRealData from 'src/core/constants/json/bof/selected_problem_area.json';
import reasonForTerminationRealData from 'src/core/constants/json/bof/selected_reason_for_termination.json';
import reasonForUpdateRealData from 'src/core/constants/json/bof/selected_reason_for_update.json';
import schoolUniformRealData from 'src/core/constants/json/bof/selected_school_uniform.json';
import timeConsumptionRealData from 'src/core/constants/json/bof/selected_time_consumption.json';
import typeOfEffortRealData from 'src/core/constants/json/bof/selected_type_of_effort.json';
import whoParticipatesRealData from 'src/core/constants/json/bof/selected_who_partifipates.json';
/* Vux Files */
import vuxData from 'src/core/constants/json/vux/vux.json';
import dayjs from 'dayjs';
import { SurveyStatus } from 'src/core/enums/survey-status';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(ScoreEntity)
    private readonly scoreRepository: Repository<ScoreEntity>,

    @InjectRepository(CloseStatusEntity)
    private readonly closeStatusRepository: Repository<CloseStatusEntity>,

    @InjectRepository(CloseStatusAdultEntity)
    private readonly closeStatusAdultRepository: Repository<CloseStatusAdultEntity>,

    @InjectRepository(AdultScoreEntity)
    private readonly adultScoreRepository: Repository<AdultScoreEntity>,

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

    @InjectRepository(ChangeAccomodationEntity)
    private readonly changeAccomodationRepository: Repository<ChangeAccomodationEntity>,
    @InjectRepository(SelectedChangeAccomodationEntity)
    private readonly selectedChangeAccomodationRepository: Repository<SelectedChangeAccomodationEntity>,

    @InjectRepository(ChangeEmploymentVh1Entity)
    private readonly changeEmploymentVh1Repository: Repository<ChangeEmploymentVh1Entity>,
    @InjectRepository(SelectedChangeEmploymentVh1Entity)
    private readonly selectedChangeEmploymentsVh1Repository: Repository<SelectedChangeEmploymentVh1Entity>,

    @InjectRepository(ChangeEmploymentVh2Entity)
    private readonly changeEmploymentVh2Repository: Repository<ChangeEmploymentVh2Entity>,
    @InjectRepository(SelectedChangeEmploymentVh2Entity)
    private readonly selectedChangeEmploymentsVh2Repository: Repository<SelectedChangeEmploymentVh2Entity>,

    //Adult data
    @InjectRepository(BackgroundAdultMetadataEntity)
    private readonly backgroundAdultMetadataRepository: Repository<BackgroundAdultMetadataEntity>,

    @InjectRepository(GenderAdultEntity)
    private readonly genderAdultRepository: Repository<GenderAdultEntity>,
    @InjectRepository(SelectedGenderAdultEntity)
    private readonly selectedGenderAdultRepository: Repository<SelectedGenderAdultEntity>,

    @InjectRepository(ActionAssignmentEntity)
    private readonly actionAssignmentRepository: Repository<ActionAssignmentEntity>,
    @InjectRepository(SelectedActionAssignmentEntity)
    private readonly selectedActionAssignmentRepository: Repository<SelectedActionAssignmentEntity>,

    @InjectRepository(DuringOperationEntity)
    private readonly duringOperationRepository: Repository<DuringOperationEntity>,
    @InjectRepository(SelectedDuringOperationEntity)
    private readonly selectedDuringOperationRepository: Repository<SelectedDuringOperationEntity>,

    @InjectRepository(EducationLevelEntity)
    private readonly educationLevelRepository: Repository<EducationLevelEntity>,
    @InjectRepository(SelectedEducationLevelEntity)
    private readonly selectedEducationLevelRepository: Repository<SelectedEducationLevelEntity>,

    @InjectRepository(EmploymentEntity)
    private readonly employmentRepository: Repository<EmploymentEntity>,
    @InjectRepository(SelectedEmploymentEntity)
    private readonly selectedEmploymentRepository: Repository<SelectedEmploymentEntity>,

    @InjectRepository(EstablishDiagnoseEntity)
    private readonly establishDiagnoseRepository: Repository<EstablishDiagnoseEntity>,
    @InjectRepository(SelectedEstablishDiagnoseEntity)
    private readonly selectedEstablishDiagnoseRepository: Repository<SelectedEstablishDiagnoseEntity>,

    @InjectRepository(FamilyConstellationAdultEntity)
    private readonly familyConstellationAdultRepository: Repository<FamilyConstellationAdultEntity>,
    @InjectRepository(SelectedFamilyConstellationAdultEntity)
    private readonly selectedFamilyConstellationAdultRepository: Repository<SelectedFamilyConstellationAdultEntity>,

    @InjectRepository(OtherOngoingEffortEntity)
    private readonly otherOngoingEffortRepository: Repository<OtherOngoingEffortEntity>,
    @InjectRepository(SelectedOtherOngoingEffortEntity)
    private readonly selectedOtherOngoingEffortRepository: Repository<SelectedOtherOngoingEffortEntity>,

    @InjectRepository(PreviousEffortEntity)
    private readonly previousEffortRepository: Repository<PreviousEffortEntity>,
    @InjectRepository(SelectedPreviousEffortEntity)
    private readonly selectedPreviousEffortRepository: Repository<SelectedPreviousEffortEntity>,

    @InjectRepository(ProblemAreaAdultEntity)
    private readonly problemAreaAdultRepository: Repository<ProblemAreaAdultEntity>,
    @InjectRepository(SelectedProblemAreaAdultEntity)
    private readonly selectedProblemAreaAdultRepository: Repository<SelectedProblemAreaAdultEntity>,

    @InjectRepository(ChangeLiveEntity)
    private readonly changeLiveRepository: Repository<ChangeLiveEntity>,
    @InjectRepository(SelectedChangeLiveEntity)
    private readonly selectedChangeLiveRepository: Repository<SelectedChangeLiveEntity>,

    @InjectRepository(ChangeOverEntity)
    private readonly changeOverRepository: Repository<ChangeOverEntity>,
    @InjectRepository(SelectedChangeOverEntity)
    private readonly selectedChangeOverRepository: Repository<SelectedChangeOverEntity>,

    @InjectRepository(InvestigationOutEntity)
    private readonly investigationOutRepository: Repository<InvestigationOutEntity>,
    @InjectRepository(SelectedInvestigationOutEntity)
    private readonly selectedInvestigationOutRepository: Repository<SelectedInvestigationOutEntity>,

    @InjectRepository(OtherInitiativeEntity)
    private readonly otherInitiativeRepository: Repository<OtherInitiativeEntity>,
    @InjectRepository(SelectedOtherInitiativeEntity)
    private readonly selectedOtherInitiativeRepository: Repository<SelectedOtherInitiativeEntity>,
  ) {}

  //Bof
  async seedBofData(): Promise<void> {}
  /* async seedCloseStatusData(): Promise<void> {
    for (let index = 0; index < closeStatusRealData.length; index++) {
      const element = closeStatusRealData[index];
      await this.closeStatusRepository
        .createQueryBuilder('close-status')
        .delete()
        .where('codeNumber = :codeNumber', { codeNumber: element?.codeNumber })
        .execute();
    }
    await this.closeStatusRepository.save(closeStatusRealData);
  }
  async seedBackgroundMetadata(): Promise<void> {
    await this.backgroundMetadataRepository.save(backgroundMetadata);
  }
  async seedScoreData(): Promise<void> {
    await this.scoreRepository.save(scoreRealData);
  }
  async seedEducationVh1s(): Promise<void> {
    await this.educationVh1Repository.save(educationVh1SeedData);
    await Promise.all(
      educationVh1RealData.map(async data => {
        const entity = new SelectedEducationVh1Entity();
        entity.codeNumber = data.codeNumber;
        entity.educationVh1 = await this.educationVh1Repository.findOneBy({
          id: +data.educationVh1Id || 1,
        });
        await this.selectedEducationVh1Repository.save(entity);
      }),
    );
  }
  async seedGenders(): Promise<void> {
    await this.genderRepository.save(genderSeedData);
    await Promise.all(
      genderRealData.map(async data => {
        const entity = new SelectedGenderEntity();
        entity.codeNumber = data.codeNumber;
        entity.gender = await this.genderRepository.findOneBy({
          id: data.genderId || 1,
        });
        await this.selectedGenderRepository.save(entity);
      }),
    );
  }
  async seedEducationVh2s(): Promise<void> {
    await this.educationVh2Repository.save(educationVh2SeedData);
    await Promise.all(
      educationVh2RealData.map(async data => {
        const entity = new SelectedEducationVh2Entity();
        entity.codeNumber = data.codeNumber;
        entity.educationVh2 = await this.educationVh2Repository.findOneBy({
          id: +data.educationVh2Id || 1,
        });
        await this.selectedEducationVh2Repository.save(entity);
      }),
    );
  }
  async seedEmploymentVh1s(): Promise<void> {
    await this.employmentVh1Repository.save(employmentVh1SeedData);
    await Promise.all(
      employmentVh1RealData.map(async data => {
        const entity = new SelectedEmploymentVh1Entity();
        entity.codeNumber = data.codeNumber;
        entity.employmentVh1 = await this.employmentVh1Repository.findOneBy({
          id: +data.employmentVh1Id || 1,
        });
        await this.selectedEmploymentVh1Repository.save(entity);
      }),
    );
  }
  async seedEmploymentVh2s(): Promise<void> {
    await this.employmentVh2Repository.save(employmentVh2SeedData);
    await Promise.all(
      employmentVh2RealData.map(async data => {
        const entity = new SelectedEmploymentVh2Entity();
        entity.codeNumber = data.codeNumber;
        entity.employmentVh2 = await this.employmentVh2Repository.findOneBy({
          id: +data.employmentVh2Id || 1,
        });
        await this.selectedEmploymentVh2Repository.save(entity);
      }),
    );
  }
  async seedEstablishedDiagnosess(): Promise<void> {
    await this.establishedDiagnosesRepository.save(
      establishedDiagnosesSeedData,
    );
    await Promise.all(
      establishedDiagnosesRealData.map(async data => {
        const entity = new SelectedEstablishedDiagnosesEntity();
        entity.codeNumber = data.codeNumber;
        entity.establishedDiagnoses =
          await this.establishedDiagnosesRepository.findOneBy({
            id: +data.establishedDiagnosesId || 1,
          });
        await this.selectedEstablishedDiagnosesRepository.save(entity);
      }),
    );
  }
  async seedFamilyConstellations(): Promise<void> {
    await this.familyConstellationRepository.save(familyConstellationSeedData);
    await Promise.all(
      familyConstellationRealData.map(async data => {
        const entity = new SelectedFamilyConstellationEntity();
        entity.codeNumber = data.codeNumber;
        entity.familyConstellation =
          await this.familyConstellationRepository.findOneBy({
            id: +data.familyConstellationId || 1,
          });
        await this.selectedFamilyConstellationRepository.save(entity);
      }),
    );
  }
  async seedInterpreterRequireds(): Promise<void> {
    await this.interpreterRequiredRepository.save(interpreterRequiredSeedData);
    await Promise.all(
      interpreterRequiredRealData.map(async data => {
        const entity = new SelectedInterpreterRequiredEntity();
        entity.codeNumber = data.codeNumber;
        entity.interpreterRequired =
          await this.interpreterRequiredRepository.findOneBy({
            id: +data.interpreterRequiredId || 1,
          });
        await this.selectedInterpreterRequiredRepository.save(entity);
      }),
    );
  }
  async seedOtherInterventionss(): Promise<void> {
    await this.otherInterventionsRepository.save(otherInterventionsSeedData);
    await Promise.all(
      otherInterventionsRealData.map(async data => {
        const entity = new SelectedOtherInterventionsEntity();
        entity.codeNumber = data.codeNumber;
        entity.otherInterventions =
          await this.otherInterventionsRepository.findOneBy({
            id: +data.otherInterventionsId || 1,
          });
        await this.selectedOtherInterventionsRepository.save(entity);
      }),
    );
  }
  async seedPreviousInterventions(): Promise<void> {
    await this.previousInterventionRepository.save(
      previousInterventionSeedData,
    );
    await Promise.all(
      previousInterventionRealData.map(async data => {
        const entity = new SelectedPreviousInterventionEntity();
        entity.codeNumber = data.codeNumber;
        entity.previousIntervention =
          await this.previousInterventionRepository.findOneBy({
            id: +data.previousInterventionId || 1,
          });
        await this.selectedPreviousInterventionRepository.save(entity);
      }),
    );
  }
  async seedProblemAreas(): Promise<void> {
    await this.problemAreaRepository.save(problemAreaSeedData);
    await Promise.all(
      problemAreaRealData.map(async data => {
        const entity = new SelectedProblemAreaEntity();
        entity.codeNumber = data.codeNumber;
        entity.problemArea = await this.problemAreaRepository.findOneBy({
          id: +data.problemAreaId || 1,
        });
        await this.selectedProblemAreaRepository.save(entity);
      }),
    );
  }
  async seedOtherInterventionsStarted(): Promise<void> {
    await this.otherInterventionsStartedRepository.save(
      otherInterventionsStartedSeedData,
    );
  }
  async seedReasonForUpdates(): Promise<void> {
    await this.reasonForUpdateRepository.save(reasonForUpdateSeedData);
    await Promise.all(
      reasonForUpdateRealData.map(async data => {
        const entity = new SelectedReasonForUpdateEntity();
        entity.codeNumber = data.codeNumber;
        entity.reasonForUpdate = await this.reasonForUpdateRepository.findOneBy(
          { id: +data.reasonForUpdateId || 1 },
        );
        await this.selectedReasonForUpdateRepository.save(entity);
      }),
    );
  }
  async seedSchoolUniforms(): Promise<void> {
    await this.schoolUniformRepository.save(schoolUniformSeedData);
    await Promise.all(
      schoolUniformRealData.map(async data => {
        const entity = new SelectedSchoolUniformEntity();
        entity.codeNumber = data.codeNumber;
        entity.schoolUniform = await this.schoolUniformRepository.findOneBy({
          id: +data.schoolUniformId || 1,
        });
        await this.selectedSchoolUniformRepository.save(entity);
      }),
    );
  }
  async seedTypeOfEfforts(): Promise<void> {
    await this.typeOfEffortRepository.save(typeOfEffortSeedData);
    await Promise.all(
      typeOfEffortRealData.map(async data => {
        const entity = new SelectedTypeOfEffortEntity();
        entity.codeNumber = data.codeNumber;
        entity.typeOfEffort = await this.typeOfEffortRepository.findOneBy({
          id: +data.typeOfEffortId || 1,
        });
        await this.selectedTypeOfEffortRepository.save(entity);
      }),
    );
  }
  async seedWhoParticipatess(): Promise<void> {
    await this.whoParticipatesRepository.save(whoParticipatesSeedData);
    await Promise.all(
      whoParticipatesRealData.map(async data => {
        const entity = new SelectedWhoParticipatesEntity();
        entity.codeNumber = data.codeNumber;
        entity.whoParticipates = await this.whoParticipatesRepository.findOneBy(
          { id: +data.whoParticipatesId || 1 },
        );
        await this.selectedWhoParticipatesRepository.save(entity);
      }),
    );
  } */
  // follow up data
  async seedFollowUpData(): Promise<void> {
    console.log(' Intervention Period...');
    await this.selectedInterventionPeriodRepository.delete({});
    await this.interventionPeriodRepository.delete({});
    await this.interventionPeriodRepository.save(interventionPeriodSeedData);

    console.log(' Intervention Progress...');
    await this.selectedInterventionProgressRepository.delete({});
    await this.interventionProgressRepository.delete({});
    await this.interventionProgressRepository.save(
      interventionProgressSeedData,
    );

    console.log(' Reason For Termination...');
    await this.selectedReasonForTerminationRepository.delete({});
    await this.reasonForTerminationRepository.delete({});
    await this.reasonForTerminationRepository.save(
      reasonForTerminationSeedData,
    );

    console.log(' Time Consumption...');
    await this.selectedTimeConsumptionRepository.delete({});
    await this.timeConsumptionRepository.delete({});
    await this.timeConsumptionRepository.save(timeConsumptionSeedData);
  }
  // Important Events Bof
  async seedImportantEventBof(): Promise<void> {
    console.log(' During Intervention...');
    await this.selectedDuringInterventionRepository.delete({});
    await this.duringInterventionRepository.delete({});
    await this.duringInterventionRepository.save(duringInterventionSeedData);

    console.log(' During Past...');
    await this.selectedDuringPastRepository.delete({});
    await this.duringPastRepository.delete({});
    await this.duringPastRepository.save(duringPastSeedData);

    console.log(' School Repository...');
    await this.selectedChildSchoolRepository.delete({});
    await this.childSchoolRepository.delete({});
    await this.childSchoolRepository.save(childSchoolSeedData);

    console.log(' Change Accomodation...');
    await this.selectedChangeAccomodationRepository.delete({});
    await this.changeAccomodationRepository.delete({});
    await this.changeAccomodationRepository.save(changeAccomodationSeedData);

    console.log(' Change Employment Vh1...');
    await this.selectedChangeEmploymentsVh1Repository.delete({});
    await this.changeEmploymentVh1Repository.delete({});
    await this.changeEmploymentVh1Repository.save(changeEmploymentVh1SeedData);

    console.log(' Change Employment Vh1...');
    await this.selectedChangeEmploymentsVh2Repository.delete({});
    await this.changeEmploymentVh2Repository.delete({});
    await this.changeEmploymentVh2Repository.save(changeEmploymentVh2SeedData);
  }
  //Adult Data
  async seedVuxData(): Promise<void> {
    await this.closeStatusAdultRepository.delete({});
    await this.backgroundAdultMetadataRepository.delete({});
    await this.selectedGenderAdultRepository.delete({});
    await this.selectedProblemAreaAdultRepository.delete({});
    await this.selectedPreviousEffortRepository.delete({});
    await this.selectedOtherOngoingEffortRepository.delete({});
    await this.selectedFamilyConstellationAdultRepository.delete({});
    await this.selectedEducationLevelRepository.delete({});
    await this.selectedEmploymentRepository.delete({});
    await this.selectedDuringOperationRepository.delete({});
    await this.selectedActionAssignmentRepository.delete({});
    await this.selectedEstablishDiagnoseRepository.delete({});
    await this.adultScoreRepository.delete({});

    let isMissingBackgroundData: boolean = false;
    for (let index = 0; index < vuxData.length; index++) {
      const element = vuxData[index];
      console.log(` ${element.CodeNumber}...`);
      console.log('  Close Status...');
      const closeStatus = await this.closeStatusAdultRepository.save({
        codeNumber: element.CodeNumber,
        processor: 'v1admin',
        isClosed: 'false',
      });
      console.log('  Background Metadata...');
      const backgroundData = await this.backgroundAdultMetadataRepository.save({
        codeNumber: element.CodeNumber,
        date: element.Date,
        yearOfBirth: Number(element.YearOfBirth),
        country: element.CountryOfBirth,
      });
      console.log('  Gender...');
      const gender = await this.genderAdultRepository.findOne({
        where: {
          description: element.Gender,
        },
      });
      if (gender?.id) {
        await this.selectedGenderAdultRepository.save({
          codeNumber: element.CodeNumber,
          genderAdult: gender,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Problem Area...');
      let problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea1,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea2,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea3,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea4,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea5,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      problemArea = await this.problemAreaAdultRepository.findOne({
        where: {
          description: element.ProblemArea6,
        },
      });
      if (problemArea?.id) {
        await this.selectedProblemAreaAdultRepository.save({
          codeNumber: element.CodeNumber,
          problemAreaAdult: problemArea,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Previous Effort...');
      let previousEffort = await this.previousEffortRepository.findOne({
        where: {
          description: element.PreviousEffort1,
        },
      });
      if (previousEffort?.id) {
        await this.selectedPreviousEffortRepository.save({
          codeNumber: element.CodeNumber,
          previousEffort,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      previousEffort = await this.previousEffortRepository.findOne({
        where: {
          description: element.PreviousEffort2,
        },
      });
      if (previousEffort?.id) {
        await this.selectedPreviousEffortRepository.save({
          codeNumber: element.CodeNumber,
          previousEffort,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      previousEffort = await this.previousEffortRepository.findOne({
        where: {
          description: element.PreviousEffort3,
        },
      });
      if (previousEffort?.id) {
        await this.selectedPreviousEffortRepository.save({
          codeNumber: element.CodeNumber,
          previousEffort,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      previousEffort = await this.previousEffortRepository.findOne({
        where: {
          description: element.PreviousEffort4,
        },
      });
      if (previousEffort?.id) {
        await this.selectedPreviousEffortRepository.save({
          codeNumber: element.CodeNumber,
          previousEffort,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Other Ongoing Effort...');
      let otherOngoingEffort = await this.otherOngoingEffortRepository.findOne({
        where: {
          description: element.OtherOngoingEffort1,
        },
      });
      if (otherOngoingEffort?.id) {
        await this.selectedOtherOngoingEffortRepository.save({
          codeNumber: element.CodeNumber,
          otherOngoingEffort,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      otherOngoingEffort = await this.otherOngoingEffortRepository.findOne({
        where: {
          description: element.OtherOngoingEffort2,
        },
      });
      if (otherOngoingEffort?.id) {
        await this.selectedOtherOngoingEffortRepository.save({
          codeNumber: element.CodeNumber,
          otherOngoingEffort,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      otherOngoingEffort = await this.otherOngoingEffortRepository.findOne({
        where: {
          description: element.OtherOngoingEffort3,
        },
      });
      if (otherOngoingEffort?.id) {
        await this.selectedOtherOngoingEffortRepository.save({
          codeNumber: element.CodeNumber,
          otherOngoingEffort,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      otherOngoingEffort = await this.otherOngoingEffortRepository.findOne({
        where: {
          description: element.OtherOngoingEffort4,
        },
      });
      if (otherOngoingEffort?.id) {
        await this.selectedOtherOngoingEffortRepository.save({
          codeNumber: element.CodeNumber,
          otherOngoingEffort,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Family Constellation...');
      let familyConstellationAdult =
        await this.familyConstellationAdultRepository.findOne({
          where: {
            description: element.FamilyConstellation,
          },
        });
      if (familyConstellationAdult?.id) {
        await this.selectedFamilyConstellationAdultRepository.save({
          codeNumber: element.CodeNumber,
          familyConstellationAdult,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Education Level...');
      let educationLevel = await this.educationLevelRepository.findOne({
        where: {
          description: element.EducationLevel,
        },
      });
      if (educationLevel?.id) {
        await this.selectedEducationLevelRepository.save({
          codeNumber: element.CodeNumber,
          educationLevel,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Employment...');
      let employment = await this.employmentRepository.findOne({
        where: {
          description: element.Employment,
        },
      });
      if (employment?.id) {
        await this.selectedEmploymentRepository.save({
          codeNumber: element.CodeNumber,
          employment,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  During Operation...');
      let duringOperation = await this.duringOperationRepository.findOne({
        where: {
          description: element.DuringOperation,
        },
      });
      if (duringOperation?.id) {
        await this.selectedDuringOperationRepository.save({
          codeNumber: element.CodeNumber,
          duringOperation,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Action Assignment...');
      let actionAssignment = await this.actionAssignmentRepository.findOne({
        where: {
          description: element.ActionAssignment1,
        },
      });
      if (actionAssignment?.id) {
        await this.selectedActionAssignmentRepository.save({
          codeNumber: element.CodeNumber,
          actionAssignment,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      actionAssignment = await this.actionAssignmentRepository.findOne({
        where: {
          description: element.ActionAssignment2,
        },
      });
      if (actionAssignment?.id) {
        await this.selectedActionAssignmentRepository.save({
          codeNumber: element.CodeNumber,
          actionAssignment,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      actionAssignment = await this.actionAssignmentRepository.findOne({
        where: {
          description: element.ActionAssignment3,
        },
      });
      if (actionAssignment?.id) {
        await this.selectedActionAssignmentRepository.save({
          codeNumber: element.CodeNumber,
          actionAssignment,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  Establish Diagnose...');
      let establishDiagnose = await this.establishDiagnoseRepository.findOne({
        where: {
          description: element.EstablishDiagnose1,
        },
      });
      if (establishDiagnose?.id) {
        await this.selectedEstablishDiagnoseRepository.save({
          codeNumber: element.CodeNumber,
          establishDiagnose,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      establishDiagnose = await this.establishDiagnoseRepository.findOne({
        where: {
          description: element.EstablishDiagnose2,
        },
      });
      if (establishDiagnose?.id) {
        await this.selectedEstablishDiagnoseRepository.save({
          codeNumber: element.CodeNumber,
          establishDiagnose,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      establishDiagnose = await this.establishDiagnoseRepository.findOne({
        where: {
          description: element.EstablishDiagnose3,
        },
      });
      if (establishDiagnose?.id) {
        await this.selectedEstablishDiagnoseRepository.save({
          codeNumber: element.CodeNumber,
          establishDiagnose,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      establishDiagnose = await this.establishDiagnoseRepository.findOne({
        where: {
          description: element.EstablishDiagnose4,
        },
      });
      if (establishDiagnose?.id) {
        await this.selectedEstablishDiagnoseRepository.save({
          codeNumber: element.CodeNumber,
          establishDiagnose,
        });
      } else {
        isMissingBackgroundData = true;
        this.closeStatusAdultRepository.save({
          status: SurveyStatus.Incomplete,
          id: closeStatus.id,
        });
      }
      console.log('  TFS & ORS 0 Month...');
      if (Number(element.TFS0Month) > 0 && Number(element.VAS0Month)) {
        await this.adultScoreRepository.save({
          codeNumber: element.CodeNumber,
          person: 1,
          occasion: 1,
          date: dayjs(backgroundData.date).format('YYYY-MM-DD'),
          score15: Number(element.TFS0Month),
          ors: Number(element.VAS0Month),
        });
      }
      console.log('  TFS & ORS 6 Month...');
      if (Number(element.TFS6Month) > 0 && Number(element.VAS6Month)) {
        await this.adultScoreRepository.save({
          codeNumber: element.CodeNumber,
          person: 1,
          occasion: 2,
          date: dayjs(backgroundData.date).add(6, 'month').format('YYYY-MM-DD'),
          score15: Number(element.TFS6Month),
          ors: Number(element.VAS6Month),
        });
      }
      console.log('  TFS & ORS 12 Month...');
      if (Number(element.TFS12Month) > 0 && Number(element.VAS12Month)) {
        await this.adultScoreRepository.save({
          codeNumber: element.CodeNumber,
          person: 1,
          occasion: 3,
          date: dayjs(backgroundData.date)
            .add(12, 'month')
            .format('YYYY-MM-DD'),
          score15: Number(element.TFS12Month),
          ors: Number(element.VAS12Month),
        });
      }
    }
  }
  //Important Events Vux
  async seedImportantEventVux(): Promise<void> {
    console.log(' Change Over...');
    await this.selectedChangeOverRepository.delete({});
    await this.changeOverRepository.delete({});
    await this.changeOverRepository.save(changeOverSeedData);

    console.log(' Change Live...');
    await this.selectedChangeLiveRepository.delete({});
    await this.changeLiveRepository.delete({});
    await this.changeLiveRepository.save(changeLiveSeedData);

    console.log(' Investigation Out...');
    await this.selectedInvestigationOutRepository.delete({});
    await this.investigationOutRepository.delete({});
    await this.investigationOutRepository.save(investigationOutSeedData);

    console.log(' Other Initiative...');
    await this.selectedOtherInitiativeRepository.delete({});
    await this.otherInitiativeRepository.delete({});
    await this.otherInitiativeRepository.save(otherInitiativeSeedData);
  }
  //Background Data Vux
  async seedBackgroundDataVux(): Promise<void> {
    console.log(' Gender...');
    await this.selectedGenderAdultRepository.delete({});
    await this.genderAdultRepository.delete({});
    await this.genderAdultRepository.save(genderAdultSeedData);

    console.log(' Problem Area...');
    await this.selectedProblemAreaAdultRepository.delete({});
    await this.problemAreaAdultRepository.delete({});
    await this.problemAreaAdultRepository.save(problemAreaAdultSeedData);

    console.log(' Previous Effort...');
    await this.selectedPreviousEffortRepository.delete({});
    await this.previousEffortRepository.delete({});
    await this.previousEffortRepository.save(previousEffortSeedData);

    console.log(' Other Ongoing Effort...');
    await this.selectedOtherOngoingEffortRepository.delete({});
    await this.otherOngoingEffortRepository.delete({});
    await this.otherOngoingEffortRepository.save(otherOngoingEffortSeedData);

    console.log(' Family Constellation Adult...');
    await this.selectedFamilyConstellationAdultRepository.delete({});
    await this.familyConstellationAdultRepository.delete({});
    await this.familyConstellationAdultRepository.save(
      familyConstellationAdultSeedData,
    );

    console.log(' Education Level...');
    await this.selectedEducationLevelRepository.delete({});
    await this.educationLevelRepository.delete({});
    await this.educationLevelRepository.save(educationLevelSeedData);

    console.log(' Employment...');
    await this.selectedEmploymentRepository.delete({});
    await this.employmentRepository.delete({});
    await this.employmentRepository.save(employmentSeedData);

    console.log(' During Operation...');
    await this.selectedDuringOperationRepository.delete({});
    await this.duringOperationRepository.delete({});
    await this.duringOperationRepository.save(duringOperationSeedData);

    console.log(' Action Assignment...');
    await this.selectedActionAssignmentRepository.delete({});
    await this.actionAssignmentRepository.delete({});
    await this.actionAssignmentRepository.save(actionAssignmentSeedData);

    console.log(' Establish Diagnoses...');
    await this.selectedEstablishDiagnoseRepository.delete({});
    await this.establishDiagnoseRepository.delete({});
    await this.establishDiagnoseRepository.save(establishDiagnoseSeedData);
  }
}
