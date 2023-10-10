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
import { OtherInterventionsStartedEntity } from 'src/important-events/otherinterventions-started/entities/otherinterventions-started.entity';
import { OtherInterventionsStartedModule } from 'src/important-events/otherinterventions-started/otherinterventions-started.module';
import { OtherInterventionsStartedRepository } from 'src/important-events/otherinterventions-started/otherinterventions-started.repository';
import { DuringInterventionEntity } from 'src/important-events/during-intervention/entities/during-intervention.entity';
import { DuringInterventionModule } from 'src/important-events/during-intervention/during-intervention.module';
import { DuringInterventionRepository } from 'src/important-events/during-intervention/during-intervention.repository';
import { DuringPastEntity } from 'src/important-events/during-past/entities/during-past.entity';
import { DuringPastModule } from 'src/important-events/during-past/during-past.module';
import { DuringPastRepository } from 'src/important-events/during-past/during-past.repository';
import { ChildSchoolEntity } from 'src/important-events/child-school/entities/child-school.entity';
import { ChildSchoolModule } from 'src/important-events/child-school/child-school.module';
import { ChildSchoolRepository } from 'src/important-events/child-school/child-school.repository';
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

import { BackgroundMetadataEntity } from 'src/background-data/background-metadata.entity';
import { BackgroundMetadataModule } from 'src/background-data/background-metadata.module';
import { BackgroundMetadataRepository } from 'src/background-data/background-metadata.repository';
import { SelectedEducationVh1Entity } from 'src/background-data/education-vh1/entities/selected-education-vh1.entity';
import { SelectedEducationVh1Module } from 'src/background-data/education-vh1/selected-education-vh1.module';
import { SelectedEducationVh1Repository } from 'src/background-data/education-vh1/selected-education-vh1.repository';
import { SelectedEducationVh2Entity } from 'src/background-data/education-vh2/entities/selected-education-vh2.entity';
import { SelectedEducationVh2Module } from 'src/background-data/education-vh2/selected-education-vh2.module';
import { SelectedEducationVh2Repository } from 'src/background-data/education-vh2/selected-education-vh2.repository';
import { SelectedEmploymentVh1Entity } from 'src/background-data/employment-vh1/entities/selected-employment-vh1.entity';
import { SelectedEmploymentVh1Module } from 'src/background-data/employment-vh1/selected-employment-vh1.module';
import { SelectedEmploymentVh1Repository } from 'src/background-data/employment-vh1/selected-employment-vh1.repository';
import { SelectedEmploymentVh2Entity } from 'src/background-data/employment-vh2/entities/selected-employment-vh2.entity';
import { SelectedEmploymentVh2Module } from 'src/background-data/employment-vh2/selected-employment-vh2.module';
import { SelectedEmploymentVh2Repository } from 'src/background-data/employment-vh2/selected-employment-vh2.repository';
import { SelectedEstablishedDiagnosesEntity } from 'src/background-data/established-diagnoses/entities/selected-established-diagnoses.entity';
import { SelectedEstablishedDiagnosesModule } from 'src/background-data/established-diagnoses/selected-established-diagnoses.module';
import { SelectedEstablishedDiagnosesRepository } from 'src/background-data/established-diagnoses/selected-established-diagnoses.repository';
import { SelectedFamilyConstellationEntity } from 'src/background-data/family-constellation/entities/selected-family-constellation.entity';
import { SelectedFamilyConstellationModule } from 'src/background-data/family-constellation/selected-family-constellation.module';
import { SelectedFamilyConstellationRepository } from 'src/background-data/family-constellation/selected-family-constellation.repository';
import { SelectedGenderEntity } from 'src/background-data/gender/entities/selected-gender.entity';
import { SelectedGenderModule } from 'src/background-data/gender/selected-gender.module';
import { SelectedGenderRepository } from 'src/background-data/gender/selected-gender.repository';
import { SelectedInterpreterRequiredEntity } from 'src/background-data/interpreter-required/entities/selected-interpreter-required.entity';
import { SelectedInterpreterRequiredModule } from 'src/background-data/interpreter-required/selected-interpreter-required.module';
import { SelectedInterpreterRequiredRepository } from 'src/background-data/interpreter-required/selected-interpreter-required.repository';
import { SelectedOtherInterventionsEntity } from 'src/background-data/other-interventions/entities/selected-other-interventions.entity';
import { SelectedOtherInterventionsModule } from 'src/background-data/other-interventions/selected-other-interventions.module';
import { SelectedOtherInterventionsRepository } from 'src/background-data/other-interventions/selected-other-interventions.repository';
import { SelectedPreviousInterventionEntity } from 'src/background-data/previous-intervention/entities/selected-previous-intervention.entity';
import { SelectedPreviousInterventionModule } from 'src/background-data/previous-intervention/selected-previous-intervention.module';
import { SelectedPreviousInterventionRepository } from 'src/background-data/previous-intervention/selected-previous-intervention.repository';
import { SelectedProblemAreaEntity } from 'src/background-data/problem-area/entities/selected-problem-area.entity';
import { SelectedProblemAreaModule } from 'src/background-data/problem-area/selected-problem-area.module';
import { SelectedProblemAreaRepository } from 'src/background-data/problem-area/selected-problem-area.repository';
import { SelectedOtherInterventionsStartedEntity } from 'src/important-events/otherinterventions-started/entities/selected-otherinterventions-started.entity';
import { SelectedOtherInterventionsStartedModule } from 'src/important-events/otherinterventions-started/selected-otherinterventions-started.module';
import { SelectedOtherInterventionsStartedRepository } from 'src/important-events/otherinterventions-started/selected-otherinterventions-started.repository';
import { SelectedDuringInterventionEntity } from 'src/important-events/during-intervention/entities/selected-during-intervention.entity';
import { SelectedDuringInterventionModule } from 'src/important-events/during-intervention/selected-during-intervention.module';
import { SelectedDuringInterventionRepository } from 'src/important-events/during-intervention/selected-during-intervention.repository';
import { SelectedDuringPastEntity } from 'src/important-events/during-past/entities/selected-during-past.entity';
import { SelectedDuringPastModule } from 'src/important-events/during-past/selected-during-past.module';
import { SelectedDuringPastRepository } from 'src/important-events/during-past/selected-during-past.repository';
import { SelectedChildSchoolEntity } from 'src/important-events/child-school/entities/selected-child-school.entity';
import { SelectedChildSchoolModule } from 'src/important-events/child-school/selected-child-school.module';
import { SelectedChildSchoolRepository } from 'src/important-events/child-school/selected-child-school.repository';
import { SelectedReasonForUpdateEntity } from 'src/background-data/reason-for-update/entities/selected-reason-for-update.entity';
import { SelectedReasonForUpdateModule } from 'src/background-data/reason-for-update/selected-reason-for-update.module';
import { SelectedReasonForUpdateRepository } from 'src/background-data/reason-for-update/selected-reason-for-update.repository';
import { SelectedSchoolUniformEntity } from 'src/background-data/school-uniform/entities/selected-school-uniform.entity';
import { SelectedSchoolUniformModule } from 'src/background-data/school-uniform/selected-school-uniform.module';
import { SelectedSchoolUniformRepository } from 'src/background-data/school-uniform/selected-school-uniform.repository';
import { SelectedTypeOfEffortEntity } from 'src/background-data/type-of-effort/entities/selected-type-of-effort.entity';
import { SelectedTypeOfEffortModule } from 'src/background-data/type-of-effort/selected-type-of-effort.module';
import { SelectedTypeOfEffortRepository } from 'src/background-data/type-of-effort/selected-type-of-effort.repository';
import { SelectedWhoParticipatesEntity } from 'src/background-data/who-participates/entities/selected-who-participates.entity';
import { SelectedWhoParticipatesModule } from 'src/background-data/who-participates/selected-who-participates.module';
import { SelectedWhoParticipatesRepository } from 'src/background-data/who-participates/selected-who-participates.repository';
import { SelectedInterventionPeriodEntity } from 'src/follow-up-survey/intervention-period/entities/selected-intervention-period.entity';
import { SelectedInterventionPeriodModule } from 'src/follow-up-survey/intervention-period/selected-intervention-period.module';
import { SelectedInterventionPeriodRepository } from 'src/follow-up-survey/intervention-period/selected-intervention-period.repository';
import { SelectedInterventionProgressEntity } from 'src/follow-up-survey/intervention-progress/entities/selected-intervention-progress.entity';
import { SelectedInterventionProgressModule } from 'src/follow-up-survey/intervention-progress/selected-intervention-progress.module';
import { SelectedInterventionProgressRepository } from 'src/follow-up-survey/intervention-progress/selected-intervention-progress.repository';
import { SelectedReasonForTerminationEntity } from 'src/follow-up-survey/reason-for-termination/entities/selected-reason-for-termination.entity';
import { SelectedReasonForTerminationModule } from 'src/follow-up-survey/reason-for-termination/selected-reason-for-termination.module';
import { SelectedReasonForTerminationRepository } from 'src/follow-up-survey/reason-for-termination/selected-reason-for-termination.repository';
import { SelectedTimeConsumptionEntity } from 'src/follow-up-survey/time-consumption/entities/selected-time-consumption.entity';
import { SelectedTimeConsumptionModule } from 'src/follow-up-survey/time-consumption/selected-time-consumption.module';
import { SelectedTimeConsumptionRepository } from 'src/follow-up-survey/time-consumption/selected-time-consumption.repository';
import { ScoreEntity } from 'src/score/entities/score.entity';
import { ScoreModule } from 'src/score/score.module';
import { ScoreRepository } from 'src/score/score.repository';
import { SeedService } from './seed.service';
import { ChangeAccomodationModule } from 'src/important-events/change-accomodation/change-accomodation.module';
import { ChangeAccomodationRepository } from 'src/important-events/change-accomodation/change-accomodation.repository';
import { ChangeAccomodationEntity } from 'src/important-events/change-accomodation/entities/change-accomodation.entity';
import { SelectedChangeAccomodationEntity } from 'src/important-events/change-accomodation/entities/selected-change-accomodation.entity';
import { SelectedChangeAccomodationModule } from 'src/important-events/change-accomodation/selected-change-accomodation.module';
import { SelectedChangeAccomodationRepository } from 'src/important-events/change-accomodation/selected-change-accomodation.repository';
import { ChangeEmploymentVh1Module } from 'src/important-events/change-employment-vh1/change-employment-vh1.module';
import { ChangeEmploymentVh1Repository } from 'src/important-events/change-employment-vh1/change-employment-vh1.repository';
import { ChangeEmploymentVh1Entity } from 'src/important-events/change-employment-vh1/entities/change-employment-vh1.entity';
import { SelectedChangeEmploymentVh1Entity } from 'src/important-events/change-employment-vh1/entities/selected-change-employment-vh1.entity';
import { SelectedChangeEmploymentVh1Module } from 'src/important-events/change-employment-vh1/selected-change-employment-vh1.module';
import { SelectedChangeEmploymentVh1Repository } from 'src/important-events/change-employment-vh1/selected-change-employment-vh1.repository';
import { ChangeEmploymentVh2Module } from 'src/important-events/change-employment-vh2/change-employment-vh2.module';
import { ChangeEmploymentVh2Repository } from 'src/important-events/change-employment-vh2/change-employment-vh2.repository';
import { ChangeEmploymentVh2Entity } from 'src/important-events/change-employment-vh2/entities/change-employment-vh2.entity';
import { SelectedChangeEmploymentVh2Entity } from 'src/important-events/change-employment-vh2/entities/selected-change-employment-vh2.entity';
import { SelectedChangeEmploymentVh2Module } from 'src/important-events/change-employment-vh2/selected-change-employment-vh2.module';
import { SelectedChangeEmploymentVh2Repository } from 'src/important-events/change-employment-vh2/selected-change-employment-vh2.repository';
import { ActionAssignmentModule } from 'src/background-adult-data/action-assignment/action-assignment.module';
import { ActionAssignmentRepository } from 'src/background-adult-data/action-assignment/action-assignment.repository';
import { ActionAssignmentEntity } from 'src/background-adult-data/action-assignment/entities/action-assignment.entity';
import { SelectedActionAssignmentEntity } from 'src/background-adult-data/action-assignment/entities/selected-action-assignment.entity';
import { SelectedActionAssignmentModule } from 'src/background-adult-data/action-assignment/selected-action-assignment.module';
import { SelectedActionAssignmentRepository } from 'src/background-adult-data/action-assignment/selected-action-assignment.repository';
import { DuringOperationModule } from 'src/background-adult-data/during-operation/during-operation.module';
import { DuringOperationRepository } from 'src/background-adult-data/during-operation/during-operation.repository';
import { DuringOperationEntity } from 'src/background-adult-data/during-operation/entities/during-operation.entity';
import { SelectedDuringOperationEntity } from 'src/background-adult-data/during-operation/entities/selected-during-operation.entity';
import { SelectedDuringOperationModule } from 'src/background-adult-data/during-operation/selected-during-operation.module';
import { SelectedDuringOperationRepository } from 'src/background-adult-data/during-operation/selected-during-operation.repository';
import { EducationLevelModule } from 'src/background-adult-data/education-level/education-level.module';
import { EducationLevelRepository } from 'src/background-adult-data/education-level/education-level.repository';
import { EducationLevelEntity } from 'src/background-adult-data/education-level/entities/education-level.entity';
import { SelectedEducationLevelEntity } from 'src/background-adult-data/education-level/entities/selected-education-level.entity';
import { SelectedEducationLevelModule } from 'src/background-adult-data/education-level/selected-education-level.module';
import { SelectedEducationLevelRepository } from 'src/background-adult-data/education-level/selected-education-level.repository';
import { EmploymentModule } from 'src/background-adult-data/employment/employment.module';
import { EmploymentRepository } from 'src/background-adult-data/employment/employment.repository';
import { EmploymentEntity } from 'src/background-adult-data/employment/entities/employment.entity';
import { SelectedEmploymentEntity } from 'src/background-adult-data/employment/entities/selected-employment.entity';
import { SelectedEmploymentModule } from 'src/background-adult-data/employment/selected-employment.module';
import { SelectedEmploymentRepository } from 'src/background-adult-data/employment/selected-employment.repository';
import { EstablishDiagnoseEntity } from 'src/background-adult-data/establish-diagnose/entities/establish-diagnose.entity';
import { SelectedEstablishDiagnoseEntity } from 'src/background-adult-data/establish-diagnose/entities/selected-establish-diagnose.entity';
import { EstablishDiagnoseModule } from 'src/background-adult-data/establish-diagnose/establish-diagnose.module';
import { EstablishDiagnoseRepository } from 'src/background-adult-data/establish-diagnose/establish-diagnose.repository';
import { SelectedEstablishDiagnoseModule } from 'src/background-adult-data/establish-diagnose/selected-establish-diagnose.module';
import { SelectedEstablishDiagnoseRepository } from 'src/background-adult-data/establish-diagnose/selected-establish-diagnose.repository';
import { FamilyConstellationAdultEntity } from 'src/background-adult-data/family-constellation/entities/family-constellation.entity';
import { SelectedFamilyConstellationAdultEntity } from 'src/background-adult-data/family-constellation/entities/selected-family-constellation.entity';
import { FamilyConstellationAdultModule } from 'src/background-adult-data/family-constellation/family-constellation.module';
import { FamilyConstellationAdultRepository } from 'src/background-adult-data/family-constellation/family-constellation.repository';
import { SelectedFamilyConstellationAdultModule } from 'src/background-adult-data/family-constellation/selected-family-constellation.module';
import { SelectedFamilyConstellationAdultRepository } from 'src/background-adult-data/family-constellation/selected-family-constellation.repository';
import { GenderAdultEntity } from 'src/background-adult-data/gender/entities/gender.entity';
import { SelectedGenderAdultEntity } from 'src/background-adult-data/gender/entities/selected-gender.entity';
import { GenderAdultModule } from 'src/background-adult-data/gender/gender.module';
import { GenderAdultRepository } from 'src/background-adult-data/gender/gender.repository';
import { SelectedGenderAdultModule } from 'src/background-adult-data/gender/selected-gender.module';
import { SelectedGenderAdultRepository } from 'src/background-adult-data/gender/selected-gender.repository';
import { OtherOngoingEffortEntity } from 'src/background-adult-data/other-ongoing-effort/entities/other-ongoing-effort.entity';
import { SelectedOtherOngoingEffortEntity } from 'src/background-adult-data/other-ongoing-effort/entities/selected-other-ongoing-effort.entity';
import { OtherOngoingEffortModule } from 'src/background-adult-data/other-ongoing-effort/other-ongoing-effort.module';
import { OtherOngoingEffortRepository } from 'src/background-adult-data/other-ongoing-effort/other-ongoing-effort.repository';
import { SelectedOtherOngoingEffortModule } from 'src/background-adult-data/other-ongoing-effort/selected-other-ongoing-effort.module';
import { SelectedOtherOngoingEffortRepository } from 'src/background-adult-data/other-ongoing-effort/selected-other-ongoing-effort.repository';
import { PreviousEffortEntity } from 'src/background-adult-data/previous-effort/entities/previous-effort.entity';
import { SelectedPreviousEffortEntity } from 'src/background-adult-data/previous-effort/entities/selected-previous-effort.entity';
import { PreviousEffortModule } from 'src/background-adult-data/previous-effort/previous-effort.module';
import { PreviousEffortRepository } from 'src/background-adult-data/previous-effort/previous-effort.repository';
import { SelectedPreviousEffortModule } from 'src/background-adult-data/previous-effort/selected-previous-effort.module';
import { SelectedPreviousEffortRepository } from 'src/background-adult-data/previous-effort/selected-previous-effort.repository';
import { ProblemAreaAdultEntity } from 'src/background-adult-data/problem-area/entities/problem-area.entity';
import { SelectedProblemAreaAdultEntity } from 'src/background-adult-data/problem-area/entities/selected-problem-area.entity';
import { ProblemAreaAdultModule } from 'src/background-adult-data/problem-area/problem-area.module';
import { ProblemAreaAdultRepository } from 'src/background-adult-data/problem-area/problem-area.repository';
import { SelectedProblemAreaAdultModule } from 'src/background-adult-data/problem-area/selected-problem-area.module';
import { SelectedProblemAreaAdultRepository } from 'src/background-adult-data/problem-area/selected-problem-area.repository';
import { BackgroundAdultMetadataEntity } from 'src/background-adult-data/background-adult-metadata.entity';
import { BackgroundAdultMetadataModule } from 'src/background-adult-data/background-adult-metadata.module';
import { BackgroundAdultMetadataRepository } from 'src/background-adult-data/background-adult-metadata.repository';
import { AdultScoreRepository } from 'src/adult-score/adult-score.repository';
import { AdultScoreEntity } from 'src/adult-score/entities/adult-score.entity';
import { AdultScoreModule } from 'src/adult-score/adult-score.module';
import { CloseStatusModule } from 'src/close-status/close.status.module';
import { CloseStatusRepository } from 'src/close-status/close.status.repository';
import { CloseStatusEntity } from 'src/close-status/entities/close.status.entity';
import { CloseStatusAdultModule } from 'src/close-status-adult/close.status.adult.module';
import { CloseStatusAdultRepository } from 'src/close-status-adult/close.status.adult.repository';
import { CloseStatusAdultEntity } from 'src/close-status-adult/entities/close.status.adult.entity';
import { ChangeLiveModule } from 'src/important-events-vux/change-live/change-live.module';
import { ChangeLiveRepository } from 'src/important-events-vux/change-live/change-live.repository';
import { ChangeLiveEntity } from 'src/important-events-vux/change-live/entities/change-live.entity';
import { SelectedChangeLiveEntity } from 'src/important-events-vux/change-live/entities/selected-change-live.entity';
import { SelectedChangeLiveModule } from 'src/important-events-vux/change-live/selected-change-live.module';
import { ChangeOverModule } from 'src/important-events-vux/change-over/change-over.module';
import { ChangeOverRepository } from 'src/important-events-vux/change-over/change-over.repository';
import { ChangeOverEntity } from 'src/important-events-vux/change-over/entities/change-over.entity';
import { SelectedChangeOverEntity } from 'src/important-events-vux/change-over/entities/selected-change-over.entity';
import { SelectedChangeOverModule } from 'src/important-events-vux/change-over/selected-change-over.module';
import { InvestigationOutEntity } from 'src/important-events-vux/investigation-out/entities/investigation-out.entity';
import { SelectedInvestigationOutEntity } from 'src/important-events-vux/investigation-out/entities/selected-investigation-out.entity';
import { InvestigationOutModule } from 'src/important-events-vux/investigation-out/investigation-out.module';
import { InvestigationOutRepository } from 'src/important-events-vux/investigation-out/investigation-out.repository';
import { SelectedInvestigationOutModule } from 'src/important-events-vux/investigation-out/selected-investigation-out.module';
import { SelectedInvestigationOutRepository } from 'src/important-events-vux/investigation-out/selected-investigation-out.repository';
import { OtherInitiativeEntity } from 'src/important-events-vux/other-initiative/entities/other-initiative.entity';
import { SelectedOtherInitiativeEntity } from 'src/important-events-vux/other-initiative/entities/selected-other-initiative.entity';
import { OtherInitiativeModule } from 'src/important-events-vux/other-initiative/other-initiative.module';
import { OtherInitiativeRepository } from 'src/important-events-vux/other-initiative/other-initiative.repository';
import { SelectedOtherInitiativeModule } from 'src/important-events-vux/other-initiative/selected-other-initiative.module';
import { SelectedOtherInitiativeRepository } from 'src/important-events-vux/other-initiative/selected-other-initiative.repository';
import { SelectedChangeOverRepository } from 'src/important-events-vux/change-over/selected-change-over.repository';
import { SelectedChangeLiveRepository } from 'src/important-events-vux/change-live/selected-change-live.repository';

@Module({
  imports: [
    //Close Status
    CloseStatusModule, TypeOrmModule.forFeature([CloseStatusEntity, CloseStatusRepository]),

    CloseStatusAdultModule, TypeOrmModule.forFeature([CloseStatusAdultEntity, CloseStatusAdultRepository]),

    BackgroundMetadataModule, TypeOrmModule.forFeature([BackgroundMetadataEntity, BackgroundMetadataRepository]),
    ScoreModule, TypeOrmModule.forFeature([ScoreEntity, ScoreRepository]),

    GenderModule, TypeOrmModule.forFeature([GenderEntity, GenderRepository]),
    SelectedGenderModule, TypeOrmModule.forFeature([SelectedGenderEntity, SelectedGenderRepository]),

    EducationVh1Module, TypeOrmModule.forFeature([EducationVh1Entity, EducationVh1Repository]),
    SelectedEducationVh1Module, TypeOrmModule.forFeature([SelectedEducationVh1Entity, SelectedEducationVh1Repository]),

    EducationVh2Module, TypeOrmModule.forFeature([EducationVh2Entity, EducationVh2Repository]),
    SelectedEducationVh2Module, TypeOrmModule.forFeature([SelectedEducationVh2Entity, SelectedEducationVh2Repository]),

    EmploymentVh1Module, TypeOrmModule.forFeature([EmploymentVh1Entity, EmploymentVh1Repository]),
    SelectedEmploymentVh1Module, TypeOrmModule.forFeature([SelectedEmploymentVh1Entity, SelectedEmploymentVh1Repository]),

    EmploymentVh2Module, TypeOrmModule.forFeature([EmploymentVh2Entity, EmploymentVh2Repository]),
    SelectedEmploymentVh2Module, TypeOrmModule.forFeature([SelectedEmploymentVh2Entity, SelectedEmploymentVh2Repository]),

    EstablishedDiagnosesModule, TypeOrmModule.forFeature([EstablishedDiagnosesEntity, EstablishedDiagnosesRepository]),
    SelectedEstablishedDiagnosesModule, TypeOrmModule.forFeature([SelectedEstablishedDiagnosesEntity, SelectedEstablishedDiagnosesRepository]),

    FamilyConstellationModule, TypeOrmModule.forFeature([FamilyConstellationEntity, FamilyConstellationRepository]),
    SelectedFamilyConstellationModule, TypeOrmModule.forFeature([SelectedFamilyConstellationEntity, SelectedFamilyConstellationRepository]),

    InterpreterRequiredModule, TypeOrmModule.forFeature([InterpreterRequiredEntity, InterpreterRequiredRepository]),
    SelectedInterpreterRequiredModule, TypeOrmModule.forFeature([SelectedInterpreterRequiredEntity, SelectedInterpreterRequiredRepository]),

    OtherInterventionsModule, TypeOrmModule.forFeature([OtherInterventionsEntity, OtherInterventionsRepository]),
    SelectedOtherInterventionsModule, TypeOrmModule.forFeature([SelectedOtherInterventionsEntity, SelectedOtherInterventionsRepository]),

    PreviousInterventionModule, TypeOrmModule.forFeature([PreviousInterventionEntity, PreviousInterventionRepository]),
    SelectedPreviousInterventionModule, TypeOrmModule.forFeature([SelectedPreviousInterventionEntity, SelectedPreviousInterventionRepository]),

    ProblemAreaModule, TypeOrmModule.forFeature([ProblemAreaEntity, ProblemAreaRepository]),
    SelectedProblemAreaModule, TypeOrmModule.forFeature([SelectedProblemAreaEntity, SelectedProblemAreaRepository]),

    OtherInterventionsStartedModule, TypeOrmModule.forFeature([OtherInterventionsStartedEntity, OtherInterventionsStartedRepository]),
    SelectedOtherInterventionsStartedModule, TypeOrmModule.forFeature([SelectedOtherInterventionsStartedEntity, SelectedOtherInterventionsStartedRepository]),

    DuringInterventionModule, TypeOrmModule.forFeature([DuringInterventionEntity, DuringInterventionRepository]),
    SelectedDuringInterventionModule, TypeOrmModule.forFeature([SelectedDuringInterventionEntity, SelectedDuringInterventionRepository]),

    DuringPastModule, TypeOrmModule.forFeature([DuringPastEntity, DuringPastRepository]),
    SelectedDuringPastModule, TypeOrmModule.forFeature([SelectedDuringPastEntity, SelectedDuringPastRepository]),

    ChildSchoolModule, TypeOrmModule.forFeature([ChildSchoolEntity, ChildSchoolRepository]),
    SelectedChildSchoolModule, TypeOrmModule.forFeature([SelectedChildSchoolEntity, SelectedChildSchoolRepository]),

    ReasonForUpdateModule, TypeOrmModule.forFeature([ReasonForUpdateEntity, ReasonForUpdateRepository]),
    SelectedReasonForUpdateModule, TypeOrmModule.forFeature([SelectedReasonForUpdateEntity, SelectedReasonForUpdateRepository]),

    SchoolUniformModule, TypeOrmModule.forFeature([SchoolUniformEntity, SchoolUniformRepository]),
    SelectedSchoolUniformModule, TypeOrmModule.forFeature([SelectedSchoolUniformEntity, SelectedSchoolUniformRepository]),

    TypeOfEffortModule, TypeOrmModule.forFeature([TypeOfEffortEntity, TypeOfEffortRepository]),
    SelectedTypeOfEffortModule, TypeOrmModule.forFeature([SelectedTypeOfEffortEntity, SelectedTypeOfEffortRepository]),

    WhoParticipatesModule, TypeOrmModule.forFeature([WhoParticipatesEntity, WhoParticipatesRepository]),
    SelectedWhoParticipatesModule, TypeOrmModule.forFeature([SelectedWhoParticipatesEntity, SelectedWhoParticipatesRepository]),

    InterventionPeriodModule, TypeOrmModule.forFeature([InterventionPeriodEntity, InterventionPeriodRepository]),
    SelectedInterventionPeriodModule, TypeOrmModule.forFeature([SelectedInterventionPeriodEntity, SelectedInterventionPeriodRepository]),

    InterventionProgressModule, TypeOrmModule.forFeature([InterventionProgressEntity, InterventionProgressRepository]),
    SelectedInterventionProgressModule, TypeOrmModule.forFeature([SelectedInterventionProgressEntity, SelectedInterventionProgressRepository]),

    ReasonForTerminationModule, TypeOrmModule.forFeature([ReasonForTerminationEntity, ReasonForTerminationRepository]),
    SelectedReasonForTerminationModule, TypeOrmModule.forFeature([SelectedReasonForTerminationEntity, SelectedReasonForTerminationRepository]),

    TimeConsumptionModule, TypeOrmModule.forFeature([TimeConsumptionEntity, TimeConsumptionRepository]),
    SelectedTimeConsumptionModule, TypeOrmModule.forFeature([SelectedTimeConsumptionEntity, SelectedTimeConsumptionRepository]),

    ChangeAccomodationModule, TypeOrmModule.forFeature([ChangeAccomodationEntity, ChangeAccomodationRepository]),
    SelectedChangeAccomodationModule, TypeOrmModule.forFeature([SelectedChangeAccomodationEntity, SelectedChangeAccomodationRepository]),

    ChangeEmploymentVh1Module, TypeOrmModule.forFeature([ChangeEmploymentVh1Entity, ChangeEmploymentVh1Repository]),
    SelectedChangeEmploymentVh1Module, TypeOrmModule.forFeature([SelectedChangeEmploymentVh1Entity, SelectedChangeEmploymentVh1Repository]),

    ChangeEmploymentVh2Module, TypeOrmModule.forFeature([ChangeEmploymentVh2Entity, ChangeEmploymentVh2Repository]),
    SelectedChangeEmploymentVh2Module, TypeOrmModule.forFeature([SelectedChangeEmploymentVh2Entity, SelectedChangeEmploymentVh2Repository]),

    ActionAssignmentModule, TypeOrmModule.forFeature([ActionAssignmentEntity, ActionAssignmentRepository]),
    SelectedActionAssignmentModule, TypeOrmModule.forFeature([SelectedActionAssignmentEntity, SelectedActionAssignmentRepository]),

    DuringOperationModule, TypeOrmModule.forFeature([DuringOperationEntity, DuringOperationRepository]),
    SelectedDuringOperationModule, TypeOrmModule.forFeature([SelectedDuringOperationEntity, SelectedDuringOperationRepository]),

    EducationLevelModule, TypeOrmModule.forFeature([EducationLevelEntity, EducationLevelRepository]),
    SelectedEducationLevelModule, TypeOrmModule.forFeature([SelectedEducationLevelEntity, SelectedEducationLevelRepository]),

    EmploymentModule, TypeOrmModule.forFeature([EmploymentEntity, EmploymentRepository]),
    SelectedEmploymentModule, TypeOrmModule.forFeature([SelectedEmploymentEntity, SelectedEmploymentRepository]),

    EstablishDiagnoseModule, TypeOrmModule.forFeature([EstablishDiagnoseEntity, EstablishDiagnoseRepository]),
    SelectedEstablishDiagnoseModule, TypeOrmModule.forFeature([SelectedEstablishDiagnoseEntity, SelectedEstablishDiagnoseRepository]),

    FamilyConstellationAdultModule, TypeOrmModule.forFeature([FamilyConstellationAdultEntity, FamilyConstellationAdultRepository]),
    SelectedFamilyConstellationAdultModule, TypeOrmModule.forFeature([SelectedFamilyConstellationAdultEntity, SelectedFamilyConstellationAdultRepository]),

    GenderAdultModule, TypeOrmModule.forFeature([GenderAdultEntity, GenderAdultRepository]),
    SelectedGenderAdultModule, TypeOrmModule.forFeature([SelectedGenderAdultEntity, SelectedGenderAdultRepository]),

    OtherOngoingEffortModule, TypeOrmModule.forFeature([OtherOngoingEffortEntity, OtherOngoingEffortRepository]),
    SelectedOtherOngoingEffortModule, TypeOrmModule.forFeature([SelectedOtherOngoingEffortEntity, SelectedOtherOngoingEffortRepository]),

    PreviousEffortModule, TypeOrmModule.forFeature([PreviousEffortEntity, PreviousEffortRepository]),
    SelectedPreviousEffortModule, TypeOrmModule.forFeature([SelectedPreviousEffortEntity, SelectedPreviousEffortRepository]),

    ProblemAreaAdultModule, TypeOrmModule.forFeature([ProblemAreaAdultEntity, ProblemAreaAdultRepository]),
    SelectedProblemAreaAdultModule, TypeOrmModule.forFeature([SelectedProblemAreaAdultEntity, SelectedProblemAreaAdultRepository]),

    BackgroundAdultMetadataModule, TypeOrmModule.forFeature([BackgroundAdultMetadataEntity, BackgroundAdultMetadataRepository]),
    AdultScoreModule, TypeOrmModule.forFeature([AdultScoreEntity, AdultScoreRepository]),

    ChangeLiveModule, TypeOrmModule.forFeature([ChangeLiveEntity, ChangeLiveRepository]),
    SelectedChangeLiveModule, TypeOrmModule.forFeature([SelectedChangeLiveEntity, SelectedChangeLiveRepository]),

    ChangeOverModule, TypeOrmModule.forFeature([ChangeOverEntity, ChangeOverRepository]),
    SelectedChangeOverModule, TypeOrmModule.forFeature([SelectedChangeOverEntity, SelectedChangeOverRepository]),

    InvestigationOutModule, TypeOrmModule.forFeature([InvestigationOutEntity, InvestigationOutRepository]),
    SelectedInvestigationOutModule, TypeOrmModule.forFeature([SelectedInvestigationOutEntity, SelectedInvestigationOutRepository]),

    OtherInitiativeModule, TypeOrmModule.forFeature([OtherInitiativeEntity, OtherInitiativeRepository]),
    SelectedOtherInitiativeModule, TypeOrmModule.forFeature([SelectedOtherInitiativeEntity, SelectedOtherInitiativeRepository]),
  ],
  providers: [SeedService],
})
export class SeedModule { }
