"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundDataService = void 0;
const common_1 = require("@nestjs/common");
const survey_status_1 = require("../core/enums/survey-status");
const follow_up_data_service_1 = require("../follow-up-survey/follow-up-data.service");
const score_service_1 = require("../score/score.service");
const background_metadata_service_1 = require("./background-metadata.service");
const education_vh1_service_1 = require("./education-vh1/education-vh1.service");
const selected_education_vh1_service_1 = require("./education-vh1/selected-education-vh1.service");
const education_vh2_service_1 = require("./education-vh2/education-vh2.service");
const selected_education_vh2_service_1 = require("./education-vh2/selected-education-vh2.service");
const employment_vh1_service_1 = require("./employment-vh1/employment-vh1.service");
const selected_employment_vh1_service_1 = require("./employment-vh1/selected-employment-vh1.service");
const employment_vh2_service_1 = require("./employment-vh2/employment-vh2.service");
const selected_employment_vh2_service_1 = require("./employment-vh2/selected-employment-vh2.service");
const established_diagnoses_service_1 = require("./established-diagnoses/established-diagnoses.service");
const selected_established_diagnoses_service_1 = require("./established-diagnoses/selected-established-diagnoses.service");
const family_constellation_service_1 = require("./family-constellation/family-constellation.service");
const selected_family_constellation_service_1 = require("./family-constellation/selected-family-constellation.service");
const gender_service_1 = require("./gender/gender.service");
const selected_gender_service_1 = require("./gender/selected-gender.service");
const interpreter_required_service_1 = require("./interpreter-required/interpreter-required.service");
const selected_interpreter_required_service_1 = require("./interpreter-required/selected-interpreter-required.service");
const other_interventions_service_1 = require("./other-interventions/other-interventions.service");
const selected_other_interventions_service_1 = require("./other-interventions/selected-other-interventions.service");
const previous_intervention_service_1 = require("./previous-intervention/previous-intervention.service");
const selected_previous_intervention_service_1 = require("./previous-intervention/selected-previous-intervention.service");
const problem_area_service_1 = require("./problem-area/problem-area.service");
const selected_problem_area_service_1 = require("./problem-area/selected-problem-area.service");
const reason_for_update_service_1 = require("./reason-for-update/reason-for-update.service");
const selected_reason_for_update_service_1 = require("./reason-for-update/selected-reason-for-update.service");
const school_uniform_service_1 = require("./school-uniform/school-uniform.service");
const selected_school_uniform_service_1 = require("./school-uniform/selected-school-uniform.service");
const selected_type_of_effort_service_1 = require("./type-of-effort/selected-type-of-effort.service");
const type_of_effort_service_1 = require("./type-of-effort/type-of-effort.service");
const selected_who_participates_service_1 = require("./who-participates/selected-who-participates.service");
const who_participates_service_1 = require("./who-participates/who-participates.service");
const docxtemplater_image_module_free_1 = __importDefault(require("docxtemplater-image-module-free"));
const rand_token_1 = require("rand-token");
const qrcode = __importStar(require("qrcode"));
const dayjs = require("dayjs");
const fs = require("fs");
const PizZip = require("pizzip");
const path_1 = require("path");
const base64_parser_function_1 = require("../core/functions/base64-parser.function");
const close_status_child_service_1 = require("../close-status/child/close.status.child.service");
const generator_const_1 = require("../core/constants/generator.const");
const Docxtemplater = require('docxtemplater');
const destPath = `${__dirname}/survey.docx`;
let BackgroundDataService = class BackgroundDataService {
    constructor(backgroundMetadataService, closeStatusService, scoreService, followUpService, genderService, educationVh1Service, educationVh2Service, employmentVh1Service, employmentVh2Service, establishedDiagnosesService, familyConstellationService, interpreterRequiredService, otherInterventionsService, previousInterventionService, problemAreaService, reasonForUpdateService, schoolUniformService, typeOfEffortService, whoParticipatesService, selectedGenderService, selectedEducationVh1Service, selectedEducationVh2Service, selectedEmploymentVh1Service, selectedEmploymentVh2Service, selectedEstablishedDiagnosesService, selectedFamilyConstellationService, selectedInterpreterRequiredService, selectedOtherInterventionsService, selectedPreviousInterventionService, selectedProblemAreaService, selectedReasonForUpdateService, selectedSchoolUniformService, selectedTypeOfEffortService, selectedWhoParticipatesService) {
        this.backgroundMetadataService = backgroundMetadataService;
        this.closeStatusService = closeStatusService;
        this.scoreService = scoreService;
        this.followUpService = followUpService;
        this.genderService = genderService;
        this.educationVh1Service = educationVh1Service;
        this.educationVh2Service = educationVh2Service;
        this.employmentVh1Service = employmentVh1Service;
        this.employmentVh2Service = employmentVh2Service;
        this.establishedDiagnosesService = establishedDiagnosesService;
        this.familyConstellationService = familyConstellationService;
        this.interpreterRequiredService = interpreterRequiredService;
        this.otherInterventionsService = otherInterventionsService;
        this.previousInterventionService = previousInterventionService;
        this.problemAreaService = problemAreaService;
        this.reasonForUpdateService = reasonForUpdateService;
        this.schoolUniformService = schoolUniformService;
        this.typeOfEffortService = typeOfEffortService;
        this.whoParticipatesService = whoParticipatesService;
        this.selectedGenderService = selectedGenderService;
        this.selectedEducationVh1Service = selectedEducationVh1Service;
        this.selectedEducationVh2Service = selectedEducationVh2Service;
        this.selectedEmploymentVh1Service = selectedEmploymentVh1Service;
        this.selectedEmploymentVh2Service = selectedEmploymentVh2Service;
        this.selectedEstablishedDiagnosesService = selectedEstablishedDiagnosesService;
        this.selectedFamilyConstellationService = selectedFamilyConstellationService;
        this.selectedInterpreterRequiredService = selectedInterpreterRequiredService;
        this.selectedOtherInterventionsService = selectedOtherInterventionsService;
        this.selectedPreviousInterventionService = selectedPreviousInterventionService;
        this.selectedProblemAreaService = selectedProblemAreaService;
        this.selectedReasonForUpdateService = selectedReasonForUpdateService;
        this.selectedSchoolUniformService = selectedSchoolUniformService;
        this.selectedTypeOfEffortService = selectedTypeOfEffortService;
        this.selectedWhoParticipatesService = selectedWhoParticipatesService;
    }
    async basicData() {
        const genderEntities = await this.genderService.find();
        const educationVh1Entities = await this.educationVh1Service.find();
        const educationVh2Entities = await this.educationVh2Service.find();
        const employmentVh1Entities = await this.employmentVh1Service.find();
        const employmentVh2Entities = await this.employmentVh2Service.find();
        const establishedDiagnosesEntities = await this.establishedDiagnosesService.find();
        const familyConstellationEntities = await this.familyConstellationService.find();
        const interpreterRequiredEntities = await this.interpreterRequiredService.find();
        const otherInterventionsEntities = await this.otherInterventionsService.find();
        const previousInterventionEntities = await this.previousInterventionService.find();
        const problemAreaEntities = await this.problemAreaService.find();
        const reasonForUpdateEntities = await this.reasonForUpdateService.find();
        const schoolUniformEntities = await this.schoolUniformService.find();
        const typeOfEffortEntities = await this.typeOfEffortService.find();
        const whoParticipatesEntities = await this.whoParticipatesService.find();
        const importantEventsEntities = [{ id: 1, description: 'Word.Self' }];
        return {
            genderEntities,
            educationVh1Entities,
            educationVh2Entities,
            employmentVh1Entities,
            employmentVh2Entities,
            establishedDiagnosesEntities,
            familyConstellationEntities,
            interpreterRequiredEntities,
            otherInterventionsEntities,
            previousInterventionEntities,
            problemAreaEntities,
            reasonForUpdateEntities,
            schoolUniformEntities,
            typeOfEffortEntities,
            whoParticipatesEntities,
            importantEventsEntities,
        };
    }
    async metadata() {
        return await this.backgroundMetadataService.find();
    }
    async create(payload) {
        try {
            const codeNumber = payload === null || payload === void 0 ? void 0 : payload.codeNumber;
            await this.backgroundMetadataService.create({
                codeNumber,
                date: payload === null || payload === void 0 ? void 0 : payload.date,
                yearOfBirth: payload === null || payload === void 0 ? void 0 : payload.yearOfBirth,
                country: payload === null || payload === void 0 ? void 0 : payload.country,
            });
            await this.selectedGenderService.deleteByCodeNumber(codeNumber);
            await this.selectedEducationVh1Service.deleteByCodeNumber(codeNumber);
            await this.selectedEducationVh2Service.deleteByCodeNumber(codeNumber);
            await this.selectedEmploymentVh1Service.deleteByCodeNumber(codeNumber);
            await this.selectedEmploymentVh2Service.deleteByCodeNumber(codeNumber);
            await this.selectedEstablishedDiagnosesService.deleteByCodeNumber(codeNumber);
            await this.selectedFamilyConstellationService.deleteByCodeNumber(codeNumber);
            await this.selectedInterpreterRequiredService.deleteByCodeNumber(codeNumber);
            await this.selectedOtherInterventionsService.deleteByCodeNumber(codeNumber);
            await this.selectedPreviousInterventionService.deleteByCodeNumber(codeNumber);
            await this.selectedProblemAreaService.deleteByCodeNumber(codeNumber);
            await this.selectedReasonForUpdateService.deleteByCodeNumber(codeNumber);
            await this.selectedSchoolUniformService.deleteByCodeNumber(codeNumber);
            await this.selectedTypeOfEffortService.deleteByCodeNumber(codeNumber);
            await this.selectedWhoParticipatesService.deleteByCodeNumber(codeNumber);
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['gender']) {
                await this.selectedGenderService.create({
                    codeNumber,
                    gender: await this.genderService.findOne({ where: { id: +id } }),
                });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['educationVh1']) {
                await this.selectedEducationVh1Service.create({
                    codeNumber,
                    educationVh1: await this.educationVh1Service.findOne({
                        where: { id: +id },
                    }),
                });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['educationVh2']) {
                await this.selectedEducationVh2Service.create({
                    codeNumber,
                    educationVh2: await this.educationVh2Service.findOne({
                        where: { id: +id },
                    }),
                });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['employmentVh1']) {
                await this.selectedEmploymentVh1Service.create({
                    codeNumber,
                    employmentVh1: await this.employmentVh1Service.findOne({
                        where: { id: +id },
                    }),
                });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['employmentVh2']) {
                await this.selectedEmploymentVh2Service.create({
                    codeNumber,
                    employmentVh2: await this.employmentVh2Service.findOne({
                        where: { id: +id },
                    }),
                });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['establishedDiagnoses']) {
                await this.selectedEstablishedDiagnosesService.create(typeof id === 'number'
                    ? {
                        codeNumber,
                        establishedDiagnoses: await this.establishedDiagnosesService.findOne({
                            where: { id: +id },
                        }),
                    }
                    : {
                        codeNumber,
                        other: id,
                    });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['familyConstellation']) {
                await this.selectedFamilyConstellationService.create(typeof id === 'number'
                    ? {
                        codeNumber,
                        familyConstellation: await this.familyConstellationService.findOne({
                            where: { id: +id },
                        }),
                    }
                    : {
                        codeNumber,
                        other: id,
                    });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['interpreterRequired']) {
                await this.selectedInterpreterRequiredService.create({
                    codeNumber,
                    interpreterRequired: await this.interpreterRequiredService.findOne({
                        where: { id: +id },
                    }),
                });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['otherInterventions']) {
                await this.selectedOtherInterventionsService.create(typeof id === 'number'
                    ? {
                        codeNumber,
                        otherInterventions: await this.otherInterventionsService.findOne({
                            where: { id: +id },
                        }),
                    }
                    : {
                        codeNumber,
                        other: id,
                    });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['previousIntervention']) {
                await this.selectedPreviousInterventionService.create(typeof id === 'number'
                    ? {
                        codeNumber,
                        previousIntervention: await this.previousInterventionService.findOne({
                            where: { id: +id },
                        }),
                    }
                    : {
                        codeNumber,
                        other: id,
                    });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['problemArea']) {
                await await this.selectedProblemAreaService.create(typeof id === 'number'
                    ? {
                        codeNumber,
                        problemArea: await this.problemAreaService.findOne({
                            where: { id: +id },
                        }),
                    }
                    : {
                        codeNumber,
                        other: id,
                    });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['reasonForUpdate']) {
                await this.selectedReasonForUpdateService.create({
                    codeNumber,
                    reasonForUpdate: await this.reasonForUpdateService.findOne({
                        where: { id: +id },
                    }),
                });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['schoolUniform']) {
                await this.selectedSchoolUniformService.create({
                    codeNumber,
                    schoolUniform: await this.schoolUniformService.findOne({
                        where: { id: +id },
                    }),
                });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['typeOfEffort']) {
                await this.selectedTypeOfEffortService.create({
                    codeNumber,
                    typeOfEffort: await this.typeOfEffortService.findOne({
                        where: { id: +id },
                    }),
                });
            }
            for (const id of payload === null || payload === void 0 ? void 0 : payload.formDataByEntityName['whoParticipates']) {
                await this.selectedWhoParticipatesService.create(typeof id === 'number'
                    ? {
                        codeNumber,
                        whoParticipates: await this.whoParticipatesService.findOne({
                            where: { id: +id },
                        }),
                    }
                    : {
                        codeNumber,
                        other: id,
                    });
            }
            return true;
        }
        catch (e) {
            console.log('background data create error: ', e);
            return false;
        }
    }
    async get(codeNumber) {
        const metadata = await this.backgroundMetadataService.findOne({
            where: { codeNumber: codeNumber },
        });
        const selectedGenderEntities = await this.selectedGenderService.find({
            where: { codeNumber },
            relations: ['gender'],
        });
        const selectedEducationVh1Entities = await this.selectedEducationVh1Service.find({
            where: { codeNumber },
            relations: ['educationVh1'],
        });
        const selectedEducationVh2Entities = await this.selectedEducationVh2Service.find({
            where: { codeNumber },
            relations: ['educationVh2'],
        });
        const selectedEmploymentVh1Entities = await this.selectedEmploymentVh1Service.find({
            where: { codeNumber },
            relations: ['employmentVh1'],
        });
        const selectedEmploymentVh2Entities = await this.selectedEmploymentVh2Service.find({
            where: { codeNumber },
            relations: ['employmentVh2'],
        });
        const selectedEstablishedDiagnosesEntities = await this.selectedEstablishedDiagnosesService.find({
            where: { codeNumber },
            relations: ['establishedDiagnoses'],
        });
        const selectedFamilyConstellationEntities = await this.selectedFamilyConstellationService.find({
            where: { codeNumber },
            relations: ['familyConstellation'],
        });
        const selectedInterpreterRequiredEntities = await this.selectedInterpreterRequiredService.find({
            where: { codeNumber },
            relations: ['interpreterRequired'],
        });
        const selectedOtherInterventionsEntities = await this.selectedOtherInterventionsService.find({
            where: { codeNumber },
            relations: ['otherInterventions'],
        });
        const selectedPreviousInterventionEntities = await this.selectedPreviousInterventionService.find({
            where: { codeNumber },
            relations: ['previousIntervention'],
        });
        const selectedProblemAreaEntities = await this.selectedProblemAreaService.find({
            where: { codeNumber },
            relations: ['problemArea'],
        });
        const selectedReasonForUpdateEntities = await this.selectedReasonForUpdateService.find({
            where: { codeNumber },
            relations: ['reasonForUpdate'],
        });
        const selectedSchoolUniformEntities = await this.selectedSchoolUniformService.find({
            where: { codeNumber },
            relations: ['schoolUniform'],
        });
        const selectedTypeOfEffortEntities = await this.selectedTypeOfEffortService.find({
            where: { codeNumber },
            relations: ['typeOfEffort'],
        });
        const selectedWhoParticipatesEntities = await this.selectedWhoParticipatesService.find({
            where: { codeNumber },
            relations: ['whoParticipates'],
        });
        const result = Object.assign(Object.assign({}, metadata), { formDataByEntityName: {
                gender: selectedGenderEntities.map(data => data.gender.id),
                educationVh1: selectedEducationVh1Entities.map(data => data.educationVh1.id),
                educationVh2: selectedEducationVh2Entities.map(data => data.educationVh2.id),
                employmentVh1: selectedEmploymentVh1Entities.map(data => data.employmentVh1.id),
                employmentVh2: selectedEmploymentVh2Entities.map(data => data.employmentVh2.id),
                establishedDiagnoses: selectedEstablishedDiagnosesEntities.map(data => data.other || data.establishedDiagnoses.id),
                familyConstellation: selectedFamilyConstellationEntities.map(data => data.other || data.familyConstellation.id),
                interpreterRequired: selectedInterpreterRequiredEntities.map(data => data.interpreterRequired.id),
                otherInterventions: selectedOtherInterventionsEntities.map(data => data.other || data.otherInterventions.id),
                previousIntervention: selectedPreviousInterventionEntities.map(data => data.other || data.previousIntervention.id),
                problemArea: selectedProblemAreaEntities.map(data => data.other || data.problemArea.id),
                reasonForUpdate: selectedReasonForUpdateEntities.map(data => data.reasonForUpdate.id),
                schoolUniform: selectedSchoolUniformEntities.map(data => data.schoolUniform.id),
                typeOfEffort: selectedTypeOfEffortEntities.map(data => data.typeOfEffort.id),
                whoParticipates: selectedWhoParticipatesEntities.map(data => data.other || data.whoParticipates.id),
            } });
        return result;
    }
    async getCaseList() {
        const closeStatus = await this.closeStatusService.findAll();
        const backgroundMetadata = await this.backgroundMetadataService.findAll();
        const result = await Promise.all(closeStatus.map(async (closeStatusEntity, bgIndex) => {
            const existBackgroundMetadata = backgroundMetadata === null || backgroundMetadata === void 0 ? void 0 : backgroundMetadata.find(item => (item === null || item === void 0 ? void 0 : item.codeNumber) == (closeStatusEntity === null || closeStatusEntity === void 0 ? void 0 : closeStatusEntity.codeNumber));
            let surveyEntity = {
                processor: closeStatusEntity === null || closeStatusEntity === void 0 ? void 0 : closeStatusEntity.processor,
            };
            if (closeStatusEntity === null || closeStatusEntity === void 0 ? void 0 : closeStatusEntity.isAbsent) {
                surveyEntity['codeNumber'] = closeStatusEntity === null || closeStatusEntity === void 0 ? void 0 : closeStatusEntity.codeNumber;
                surveyEntity['status'] = survey_status_1.SurveyStatus.Cancelled;
            }
            else if ((existBackgroundMetadata === null || existBackgroundMetadata === void 0 ? void 0 : existBackgroundMetadata.codeNumber) &&
                dayjs().diff(existBackgroundMetadata === null || existBackgroundMetadata === void 0 ? void 0 : existBackgroundMetadata.date, 'year') <= 1) {
                surveyEntity['codeNumber'] = closeStatusEntity === null || closeStatusEntity === void 0 ? void 0 : closeStatusEntity.codeNumber;
                const scoreEntities = await this.scoreService.find({
                    where: { codeNumber: closeStatusEntity.codeNumber },
                });
                let prevOccasionDate = dayjs();
                const details = await Promise.all([...Array(3)].map(async (_it, arrIndex) => {
                    const entities = scoreEntities.filter(s => s.occasion === arrIndex + 1);
                    const today = dayjs();
                    const date = entities.at(0)
                        ? new Date(entities[0].date)
                        : (arrIndex === 0
                            ? today
                            : arrIndex === 1
                                ? prevOccasionDate.add(6, 'month')
                                : prevOccasionDate.add(12, 'month')).toDate();
                    if (entities.at(0)) {
                        prevOccasionDate = dayjs(entities[0].date);
                    }
                    const isScanLocked = Math.abs(dayjs().diff(date, 'week')) > 0;
                    const statuses = [...Array(3)].map((_it2, personIndex) => {
                        const scoreEntity = entities
                            .filter(entity => entity.person === personIndex + 1)
                            .at(0);
                        const status = (scoreEntity === null || scoreEntity === void 0 ? void 0 : scoreEntity.score15) && (scoreEntity === null || scoreEntity === void 0 ? void 0 : scoreEntity.ors)
                            ? survey_status_1.SurveyStatus.Clear
                            : !isScanLocked
                                ? survey_status_1.SurveyStatus.Coming
                                : survey_status_1.SurveyStatus.Loss;
                        return status;
                    });
                    return { date, statuses };
                }));
                let isAllClear = true;
                let isAllLoss = true;
                let isAllComing = true;
                for (let i = 0; i < details.length; ++i) {
                    for (let j = 0; j < details[i].statuses.length; ++j) {
                        if (details[i].statuses[j] === survey_status_1.SurveyStatus.Clear) {
                            isAllClear = false;
                        }
                        else if (details[i].statuses[j] === survey_status_1.SurveyStatus.Loss) {
                            isAllLoss = false;
                        }
                        else {
                            isAllComing = false;
                        }
                    }
                }
                let nextSurvey = dayjs().format('YYYY-MM-DD');
                let signal = 'BackgroundSurvey';
                if (details[0].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                    .length !== 1 &&
                    details[0].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                        .length !== 2 &&
                    details[0].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                        .length !== 3) {
                    signal = 'BackgroundSurvey';
                    nextSurvey = `${dayjs(details[1].date).format('YYYY-MM-DD')}`;
                }
                if (details[0].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                    .length === 1 ||
                    details[0].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                        .length === 2) {
                    signal = '0MonthSurvey';
                    nextSurvey = `${dayjs(details[1].date).format('YYYY-MM-DD')}`;
                }
                if (details[0].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                    .length === 3 &&
                    !details[1].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                        .length) {
                    signal = '6MonthSurvey';
                    nextSurvey = `${dayjs(details[1].date).format('YYYY-MM-DD')}`;
                }
                if (details[1].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                    .length === 1 ||
                    details[1].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                        .length === 2) {
                    signal = '6MonthSurvey';
                    nextSurvey = `${dayjs(details[1].date).format('YYYY-MM-DD')}`;
                }
                if (details[1].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                    .length === 3 &&
                    !details[2].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                        .length) {
                    signal = '12MonthSurvey';
                    nextSurvey = `${dayjs(details[2].date).format('YYYY-MM-DD')}`;
                }
                if (details[2].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                    .length === 1 ||
                    details[2].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                        .length === 2) {
                    signal = '12MonthSurvey';
                    nextSurvey = `${dayjs(details[2].date).format('YYYY-MM-DD')}`;
                }
                if (details[2].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                    .length === 3) {
                    signal = 'PostSurvey';
                    nextSurvey = `${dayjs(details[2].date).format('YYYY-MM-DD')}`;
                }
                if (details[0].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                    .length === 3 &&
                    details[1].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                        .length === 3 &&
                    details[2].statuses.filter(status => status === survey_status_1.SurveyStatus.Clear)
                        .length === 3) {
                    signal = 'ImportantHappeningsDuring12Months';
                    nextSurvey = `${dayjs(details[2].date).format('YYYY-MM-DD')}`;
                }
                surveyEntity['status'] = !isAllClear
                    ? survey_status_1.SurveyStatus.Clear
                    : !isAllComing
                        ? survey_status_1.SurveyStatus.Coming
                        : survey_status_1.SurveyStatus.Loss;
                surveyEntity['isClosed'] =
                    (closeStatusEntity === null || closeStatusEntity === void 0 ? void 0 : closeStatusEntity.isClosed) === 'true' ? true : false;
                surveyEntity['signal'] = signal;
                surveyEntity['missedFields'] = '';
                surveyEntity['history'] = {
                    zeroMonth: {
                        date: details[0].date,
                        statusInDetail: {
                            child: details[0].statuses[0],
                            careGiver1: details[0].statuses[1],
                            careGiver2: details[0].statuses[2],
                        },
                    },
                    sixMonths: {
                        date: details[1].date,
                        statusInDetail: {
                            child: details[1].statuses[0],
                            careGiver1: details[1].statuses[1],
                            careGiver2: details[1].statuses[2],
                        },
                    },
                    twelveMonths: {
                        date: details[2].date,
                        statusInDetail: {
                            child: details[2].statuses[0],
                            careGiver1: details[2].statuses[1],
                            careGiver2: details[2].statuses[2],
                        },
                    },
                };
                surveyEntity['nextSurvey'] = nextSurvey;
            }
            else if ((existBackgroundMetadata === null || existBackgroundMetadata === void 0 ? void 0 : existBackgroundMetadata.codeNumber) &&
                dayjs().diff(existBackgroundMetadata === null || existBackgroundMetadata === void 0 ? void 0 : existBackgroundMetadata.date, 'year') > 1) {
                let archivedCodeNumber = '';
                if (!(closeStatusEntity === null || closeStatusEntity === void 0 ? void 0 : closeStatusEntity.archivedCodeNumber)) {
                    archivedCodeNumber = `Ark-${(0, rand_token_1.generate)(generator_const_1.codeGeneratorSize, generator_const_1.codeGeneratorChars)}`;
                    await this.closeStatusService.update(closeStatusEntity === null || closeStatusEntity === void 0 ? void 0 : closeStatusEntity.id, Object.assign(Object.assign({}, closeStatusEntity), { archivedCodeNumber }));
                }
                else {
                    archivedCodeNumber = closeStatusEntity === null || closeStatusEntity === void 0 ? void 0 : closeStatusEntity.archivedCodeNumber;
                }
                const scoreEntities = await this.scoreService.find({
                    where: { codeNumber: closeStatusEntity === null || closeStatusEntity === void 0 ? void 0 : closeStatusEntity.codeNumber },
                });
                let prevOccasionDate = dayjs();
                const details = await Promise.all([...Array(3)].map(async (_it, arrIndex) => {
                    const entities = scoreEntities.filter(s => s.occasion === arrIndex + 1);
                    const today = dayjs();
                    const date = entities.at(0)
                        ? new Date(entities[0].date)
                        : (arrIndex === 0
                            ? today
                            : arrIndex === 1
                                ? prevOccasionDate.add(6, 'month')
                                : prevOccasionDate.add(12, 'month')).toDate();
                    if (entities.at(0)) {
                        prevOccasionDate = dayjs(entities[0].date);
                    }
                    const isScanLocked = Math.abs(dayjs().diff(date, 'week')) > 0;
                    const statuses = [...Array(3)].map((_it2, personIndex) => {
                        const scoreEntity = entities
                            .filter(entity => entity.person === personIndex + 1)
                            .at(0);
                        const status = (scoreEntity === null || scoreEntity === void 0 ? void 0 : scoreEntity.score15) && (scoreEntity === null || scoreEntity === void 0 ? void 0 : scoreEntity.ors)
                            ? survey_status_1.SurveyStatus.Clear
                            : !isScanLocked
                                ? survey_status_1.SurveyStatus.Coming
                                : survey_status_1.SurveyStatus.Loss;
                        return status;
                    });
                    return { date, statuses };
                }));
                surveyEntity['codeNumber'] = archivedCodeNumber;
                surveyEntity['status'] = survey_status_1.SurveyStatus.Archived;
                surveyEntity['isClosed'] = true;
                surveyEntity['signal'] = '';
                surveyEntity['missedFields'] = '';
                surveyEntity['history'] = {
                    zeroMonth: {
                        date: details[0].date,
                        statusInDetail: {
                            child: details[0].statuses[0],
                            careGiver1: details[0].statuses[1],
                            careGiver2: details[0].statuses[2],
                        },
                    },
                    sixMonths: {
                        date: details[1].date,
                        statusInDetail: {
                            child: details[1].statuses[0],
                            careGiver1: details[1].statuses[1],
                            careGiver2: details[1].statuses[2],
                        },
                    },
                    twelveMonths: {
                        date: details[2].date,
                        statusInDetail: {
                            child: details[2].statuses[0],
                            careGiver1: details[2].statuses[1],
                            careGiver2: details[2].statuses[2],
                        },
                    },
                };
                surveyEntity['nextSurvey'] = '';
            }
            else {
                surveyEntity['codeNumber'] = closeStatusEntity === null || closeStatusEntity === void 0 ? void 0 : closeStatusEntity.codeNumber;
                surveyEntity['status'] = survey_status_1.SurveyStatus.NoBackgroundData;
            }
            return surveyEntity;
        }));
        return result;
    }
    async downloadDocx(codeNumber, occasion, appDomain, childUri, firstGuardianUri, secondGuardianUri, importantEventsUri) {
        try {
            const occasionNum = occasion <= 3 ? occasion : occasion - 3;
            const templatePath = occasionNum <= 2
                ? (0, path_1.join)(__dirname, '../../', 'src/assets/template/6-month-survey-bof.docx')
                : (0, path_1.join)(__dirname, '../../', 'src/assets/template/12-month-survey-bof.docx');
            const content = fs.readFileSync(templatePath, 'binary');
            const pizZip = new PizZip(content);
            const imageOptions = {
                centered: false,
                getImage(tag) {
                    return (0, base64_parser_function_1.base64Parser)(tag);
                },
                getSize() {
                    return [150, 150];
                },
            };
            const doc = new Docxtemplater(pizZip, {
                paragraphLoop: true,
                linebreaks: true,
                modules: [new docxtemplater_image_module_free_1.default(imageOptions)],
            });
            const qrCodeBase64FirstGuardian = await qrcode.toDataURL(appDomain + '/survey/bof/quiz/' + firstGuardianUri);
            const qrCodeBase64SecondGuardian = await qrcode.toDataURL(appDomain + '/survey/bof/quiz/' + secondGuardianUri);
            const qrCodeBase64ImportantEvents = await qrcode.toDataURL(appDomain + '/survey/bof/important-event/' + importantEventsUri);
            const qrCodeBase64Child = await qrcode.toDataURL(appDomain + '/survey/bof/quiz/' + childUri);
            doc.render({
                qrCodeFirstGuardian: qrCodeBase64FirstGuardian,
                qrCodeSecondGuardian: qrCodeBase64SecondGuardian,
                qrCodeImportantEvents: qrCodeBase64ImportantEvents,
                qrCodeChild: qrCodeBase64Child,
            });
            const buf = doc.getZip().generate({
                type: 'nodebuffer',
                compression: 'DEFLATE',
            });
            fs.writeFileSync(destPath, buf);
            return destPath;
        }
        catch (e) {
            console.error(e);
        }
        return '';
    }
};
BackgroundDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [background_metadata_service_1.BackgroundMetadataService,
        close_status_child_service_1.CloseStatusService,
        score_service_1.ScoreService,
        follow_up_data_service_1.FollowUpDataService,
        gender_service_1.GenderService,
        education_vh1_service_1.EducationVh1Service,
        education_vh2_service_1.EducationVh2Service,
        employment_vh1_service_1.EmploymentVh1Service,
        employment_vh2_service_1.EmploymentVh2Service,
        established_diagnoses_service_1.EstablishedDiagnosesService,
        family_constellation_service_1.FamilyConstellationService,
        interpreter_required_service_1.InterpreterRequiredService,
        other_interventions_service_1.OtherInterventionsService,
        previous_intervention_service_1.PreviousInterventionService,
        problem_area_service_1.ProblemAreaService,
        reason_for_update_service_1.ReasonForUpdateService,
        school_uniform_service_1.SchoolUniformService,
        type_of_effort_service_1.TypeOfEffortService,
        who_participates_service_1.WhoParticipatesService,
        selected_gender_service_1.SelectedGenderService,
        selected_education_vh1_service_1.SelectedEducationVh1Service,
        selected_education_vh2_service_1.SelectedEducationVh2Service,
        selected_employment_vh1_service_1.SelectedEmploymentVh1Service,
        selected_employment_vh2_service_1.SelectedEmploymentVh2Service,
        selected_established_diagnoses_service_1.SelectedEstablishedDiagnosesService,
        selected_family_constellation_service_1.SelectedFamilyConstellationService,
        selected_interpreter_required_service_1.SelectedInterpreterRequiredService,
        selected_other_interventions_service_1.SelectedOtherInterventionsService,
        selected_previous_intervention_service_1.SelectedPreviousInterventionService,
        selected_problem_area_service_1.SelectedProblemAreaService,
        selected_reason_for_update_service_1.SelectedReasonForUpdateService,
        selected_school_uniform_service_1.SelectedSchoolUniformService,
        selected_type_of_effort_service_1.SelectedTypeOfEffortService,
        selected_who_participates_service_1.SelectedWhoParticipatesService])
], BackgroundDataService);
exports.BackgroundDataService = BackgroundDataService;
//# sourceMappingURL=background-data.service.js.map