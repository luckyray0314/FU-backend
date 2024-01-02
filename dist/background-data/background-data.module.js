"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundDataModule = void 0;
const common_1 = require("@nestjs/common");
const follow_up_data_module_1 = require("../follow-up-survey/follow-up-data.module");
const score_module_1 = require("../score/score.module");
const background_data_controller_1 = require("./background-data.controller");
const background_data_service_1 = require("./background-data.service");
const background_metadata_module_1 = require("./background-metadata.module");
const education_vh1_module_1 = require("./education-vh1/education-vh1.module");
const selected_education_vh1_module_1 = require("./education-vh1/selected-education-vh1.module");
const education_vh2_module_1 = require("./education-vh2/education-vh2.module");
const selected_education_vh2_module_1 = require("./education-vh2/selected-education-vh2.module");
const employment_vh1_module_1 = require("./employment-vh1/employment-vh1.module");
const selected_employment_vh1_module_1 = require("./employment-vh1/selected-employment-vh1.module");
const employment_vh2_module_1 = require("./employment-vh2/employment-vh2.module");
const selected_employment_vh2_module_1 = require("./employment-vh2/selected-employment-vh2.module");
const established_diagnoses_module_1 = require("./established-diagnoses/established-diagnoses.module");
const selected_established_diagnoses_module_1 = require("./established-diagnoses/selected-established-diagnoses.module");
const family_constellation_module_1 = require("./family-constellation/family-constellation.module");
const selected_family_constellation_module_1 = require("./family-constellation/selected-family-constellation.module");
const gender_module_1 = require("./gender/gender.module");
const selected_gender_module_1 = require("./gender/selected-gender.module");
const interpreter_required_module_1 = require("./interpreter-required/interpreter-required.module");
const selected_interpreter_required_module_1 = require("./interpreter-required/selected-interpreter-required.module");
const other_interventions_module_1 = require("./other-interventions/other-interventions.module");
const selected_other_interventions_module_1 = require("./other-interventions/selected-other-interventions.module");
const previous_intervention_module_1 = require("./previous-intervention/previous-intervention.module");
const selected_previous_intervention_module_1 = require("./previous-intervention/selected-previous-intervention.module");
const problem_area_module_1 = require("./problem-area/problem-area.module");
const selected_problem_area_module_1 = require("./problem-area/selected-problem-area.module");
const reason_for_update_module_1 = require("./reason-for-update/reason-for-update.module");
const selected_reason_for_update_module_1 = require("./reason-for-update/selected-reason-for-update.module");
const school_uniform_module_1 = require("./school-uniform/school-uniform.module");
const selected_school_uniform_module_1 = require("./school-uniform/selected-school-uniform.module");
const selected_type_of_effort_module_1 = require("./type-of-effort/selected-type-of-effort.module");
const type_of_effort_module_1 = require("./type-of-effort/type-of-effort.module");
const selected_who_participates_module_1 = require("./who-participates/selected-who-participates.module");
const who_participates_module_1 = require("./who-participates/who-participates.module");
const close_status_child_module_1 = require("../close-status/child/close.status.child.module");
let BackgroundDataModule = class BackgroundDataModule {
};
BackgroundDataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            gender_module_1.GenderModule,
            education_vh1_module_1.EducationVh1Module,
            education_vh2_module_1.EducationVh2Module,
            employment_vh1_module_1.EmploymentVh1Module,
            employment_vh2_module_1.EmploymentVh2Module,
            established_diagnoses_module_1.EstablishedDiagnosesModule,
            family_constellation_module_1.FamilyConstellationModule,
            interpreter_required_module_1.InterpreterRequiredModule,
            other_interventions_module_1.OtherInterventionsModule,
            previous_intervention_module_1.PreviousInterventionModule,
            problem_area_module_1.ProblemAreaModule,
            reason_for_update_module_1.ReasonForUpdateModule,
            school_uniform_module_1.SchoolUniformModule,
            type_of_effort_module_1.TypeOfEffortModule,
            who_participates_module_1.WhoParticipatesModule,
            selected_gender_module_1.SelectedGenderModule,
            selected_education_vh1_module_1.SelectedEducationVh1Module,
            selected_education_vh2_module_1.SelectedEducationVh2Module,
            selected_employment_vh1_module_1.SelectedEmploymentVh1Module,
            selected_employment_vh2_module_1.SelectedEmploymentVh2Module,
            selected_established_diagnoses_module_1.SelectedEstablishedDiagnosesModule,
            selected_family_constellation_module_1.SelectedFamilyConstellationModule,
            selected_interpreter_required_module_1.SelectedInterpreterRequiredModule,
            selected_other_interventions_module_1.SelectedOtherInterventionsModule,
            selected_previous_intervention_module_1.SelectedPreviousInterventionModule,
            selected_problem_area_module_1.SelectedProblemAreaModule,
            selected_reason_for_update_module_1.SelectedReasonForUpdateModule,
            selected_school_uniform_module_1.SelectedSchoolUniformModule,
            selected_type_of_effort_module_1.SelectedTypeOfEffortModule,
            selected_who_participates_module_1.SelectedWhoParticipatesModule,
            background_metadata_module_1.BackgroundMetadataModule,
            close_status_child_module_1.CloseStatusModule,
            score_module_1.ScoreModule,
            follow_up_data_module_1.FollowUpDataModule
        ],
        providers: [background_data_service_1.BackgroundDataService],
        controllers: [background_data_controller_1.BackgroundDataController],
    })
], BackgroundDataModule);
exports.BackgroundDataModule = BackgroundDataModule;
//# sourceMappingURL=background-data.module.js.map