import { EducationVh1Entity } from './education-vh1/entities/education-vh1.entity';
import { EducationVh2Entity } from './education-vh2/entities/education-vh2.entity';
import { EmploymentVh1Entity } from './employment-vh1/entities/employment-vh1.entity';
import { EmploymentVh2Entity } from './employment-vh2/entities/employment-vh2.entity';
import { EstablishedDiagnosesEntity } from './established-diagnoses/entities/established-diagnoses.entity';
import { FamilyConstellationEntity } from './family-constellation/entities/family-constellation.entity';
import { GenderEntity } from './gender/entities/gender.entity';
import { InterpreterRequiredEntity } from './interpreter-required/entities/interpreter-required.entity';
import { OtherInterventionsEntity } from './other-interventions/entities/other-interventions.entity';
import { PreviousInterventionEntity } from './previous-intervention/entities/previous-intervention.entity';
import { ProblemAreaEntity } from './problem-area/entities/problem-area.entity';
import { ReasonForUpdateEntity } from './reason-for-update/entities/reason-for-update.entity';
import { SchoolUniformEntity } from './school-uniform/entities/school-uniform.entity';
import { TypeOfEffortEntity } from './type-of-effort/entities/type-of-effort.entity';
import { WhoParticipatesEntity } from './who-participates/entities/who-participates.entity';
import { OccasionIndex } from "src/core/models/occasion.modal";
export declare class BackgroundSurveyBasicDataDto {
    genderEntities: GenderEntity[];
    educationVh1Entities: EducationVh1Entity[];
    educationVh2Entities: EducationVh2Entity[];
    employmentVh1Entities: EmploymentVh1Entity[];
    employmentVh2Entities: EmploymentVh2Entity[];
    establishedDiagnosesEntities: EstablishedDiagnosesEntity[];
    familyConstellationEntities: FamilyConstellationEntity[];
    interpreterRequiredEntities: InterpreterRequiredEntity[];
    otherInterventionsEntities: OtherInterventionsEntity[];
    previousInterventionEntities: PreviousInterventionEntity[];
    problemAreaEntities: ProblemAreaEntity[];
    reasonForUpdateEntities: ReasonForUpdateEntity[];
    schoolUniformEntities: SchoolUniformEntity[];
    typeOfEffortEntities: TypeOfEffortEntity[];
    whoParticipatesEntities: WhoParticipatesEntity[];
}
export type FormDataByEntityName = {
    [entityName: string]: (number | string)[];
};
export declare class BackgroundMetadataDto {
    codeNumber: string;
    date: string;
    yearOfBirth: number;
}
export declare class BackgroundDataDto {
    codeNumber: string;
    date: string;
    yearOfBirth: number;
    country: string;
    formDataByEntityName: FormDataByEntityName;
}
export declare class DocxBufferDto {
    codeNumber: string;
    occasion: OccasionIndex | 0;
    appDomain: string;
}
