import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BackgroundDataDto, BackgroundMetadataDto, BackgroundSurveyBasicDataDto } from './background-data.dto';
import { BackgroundMetadataService } from './background-metadata.service';
import { EducationVh1Service } from './education-vh1/education-vh1.service';
import { SelectedEducationVh1Service } from './education-vh1/selected-education-vh1.service';
import { EducationVh2Service } from './education-vh2/education-vh2.service';
import { SelectedEducationVh2Service } from './education-vh2/selected-education-vh2.service';
import { EmploymentVh1Service } from './employment-vh1/employment-vh1.service';
import { SelectedEmploymentVh1Service } from './employment-vh1/selected-employment-vh1.service';
import { EmploymentVh2Service } from './employment-vh2/employment-vh2.service';
import { SelectedEmploymentVh2Service } from './employment-vh2/selected-employment-vh2.service';
import { EstablishedDiagnosesService } from './established-diagnoses/established-diagnoses.service';
import { SelectedEstablishedDiagnosesService } from './established-diagnoses/selected-established-diagnoses.service';
import { FamilyConstellationService } from './family-constellation/family-constellation.service';
import { SelectedFamilyConstellationService } from './family-constellation/selected-family-constellation.service';
import { GenderService } from './gender/gender.service';
import { SelectedGenderService } from './gender/selected-gender.service';
import { InterpreterRequiredService } from './interpreter-required/interpreter-required.service';
import { SelectedInterpreterRequiredService } from './interpreter-required/selected-interpreter-required.service';
import { OtherInterventionsService } from './other-interventions/other-interventions.service';
import { SelectedOtherInterventionsService } from './other-interventions/selected-other-interventions.service';
import { PreviousInterventionService } from './previous-intervention/previous-intervention.service';
import { SelectedPreviousInterventionService } from './previous-intervention/selected-previous-intervention.service';
import { ProblemAreaService } from './problem-area/problem-area.service';
import { SelectedProblemAreaService } from './problem-area/selected-problem-area.service';
import { ReasonForUpdateService } from './reason-for-update/reason-for-update.service';
import { SelectedReasonForUpdateService } from './reason-for-update/selected-reason-for-update.service';
import { SchoolUniformService } from './school-uniform/school-uniform.service';
import { SelectedSchoolUniformService } from './school-uniform/selected-school-uniform.service';
import { SelectedTypeOfEffortService } from './type-of-effort/selected-type-of-effort.service';
import { TypeOfEffortService } from './type-of-effort/type-of-effort.service';
import { SelectedWhoParticipatesService } from './who-participates/selected-who-participates.service';
import { WhoParticipatesService } from './who-participates/who-participates.service';

@ApiTags('Background Data Survey Management')
@Controller('background-data')
export class BackgroundDataController {
  constructor(
    public backgroundMetadataService: BackgroundMetadataService,
    public genderService: GenderService,
    public educationVh1Service: EducationVh1Service,
    public educationVh2Service: EducationVh2Service,
    public employmentVh1Service: EmploymentVh1Service,
    public employmentVh2Service: EmploymentVh2Service,
    public establishedDiagnosesService: EstablishedDiagnosesService,
    public familyConstellationService: FamilyConstellationService,
    public interpreterRequiredService: InterpreterRequiredService,
    public otherInterventionsService: OtherInterventionsService,
    public previousInterventionService: PreviousInterventionService,
    public problemAreaService: ProblemAreaService,
    public reasonForUpdateService: ReasonForUpdateService,
    public schoolUniformService: SchoolUniformService,
    public typeOfEffortService: TypeOfEffortService,
    public whoParticipatesService: WhoParticipatesService,

    public selectedGenderService: SelectedGenderService,
    public selectedEducationVh1Service: SelectedEducationVh1Service,
    public selectedEducationVh2Service: SelectedEducationVh2Service,
    public selectedEmploymentVh1Service: SelectedEmploymentVh1Service,
    public selectedEmploymentVh2Service: SelectedEmploymentVh2Service,
    public selectedEstablishedDiagnosesService: SelectedEstablishedDiagnosesService,
    public selectedFamilyConstellationService: SelectedFamilyConstellationService,
    public selectedInterpreterRequiredService: SelectedInterpreterRequiredService,
    public selectedOtherInterventionsService: SelectedOtherInterventionsService,
    public selectedPreviousInterventionService: SelectedPreviousInterventionService,
    public selectedProblemAreaService: SelectedProblemAreaService,
    public selectedReasonForUpdateService: SelectedReasonForUpdateService,
    public selectedSchoolUniformService: SelectedSchoolUniformService,
    public selectedTypeOfEffortService: SelectedTypeOfEffortService,
    public selectedWhoParticipatesService: SelectedWhoParticipatesService
  ) { }

  @Get('/basicData')
  @ApiOkResponse({ type: BackgroundSurveyBasicDataDto })
  async basicData(
  ): Promise<BackgroundSurveyBasicDataDto> {
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
      whoParticipatesEntities
    };
  }

  @Get('/metadata')
  @ApiOkResponse({ type: Array<BackgroundMetadataDto> })
  async metadata(
  ): Promise<BackgroundMetadataDto[]> {
    return await this.backgroundMetadataService.find();
  }

  @Post('create')
  @ApiOkResponse({ type: () => Boolean })
  async create(
    @Body() payload: BackgroundDataDto,
    @Request() req,
  ): Promise<boolean> {
    try {
      const codeNumber = payload.codeNumber;

      this.backgroundMetadataService.create({
        codeNumber,
        date: payload.date,
        yearOfBirth: payload.yearOfBirth
      });

      this.selectedGenderService.deleteByCodeNumber(codeNumber);
      this.selectedEducationVh1Service.deleteByCodeNumber(codeNumber);
      this.selectedEducationVh2Service.deleteByCodeNumber(codeNumber);
      this.selectedEmploymentVh1Service.deleteByCodeNumber(codeNumber);
      this.selectedEmploymentVh2Service.deleteByCodeNumber(codeNumber);
      this.selectedEstablishedDiagnosesService.deleteByCodeNumber(codeNumber);
      this.selectedFamilyConstellationService.deleteByCodeNumber(codeNumber);
      this.selectedInterpreterRequiredService.deleteByCodeNumber(codeNumber);
      this.selectedOtherInterventionsService.deleteByCodeNumber(codeNumber);
      this.selectedPreviousInterventionService.deleteByCodeNumber(codeNumber);
      this.selectedProblemAreaService.deleteByCodeNumber(codeNumber);
      this.selectedReasonForUpdateService.deleteByCodeNumber(codeNumber);
      this.selectedSchoolUniformService.deleteByCodeNumber(codeNumber);
      this.selectedTypeOfEffortService.deleteByCodeNumber(codeNumber);
      this.selectedWhoParticipatesService.deleteByCodeNumber(codeNumber);

      for (const id of payload.formDataByEntityName["gender"]) {
        this.selectedGenderService.create({
          codeNumber,
          gender: await this.genderService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["educationVh1"]) {
        this.selectedEducationVh1Service.create({
          codeNumber,
          educationVh1: await this.educationVh1Service.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["educationVh2"]) {
        this.selectedEducationVh2Service.create({
          codeNumber,
          educationVh2: await this.educationVh2Service.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["employmentVh1"]) {
        this.selectedEmploymentVh1Service.create({
          codeNumber,
          employmentVh1: await this.employmentVh1Service.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["employmentVh2"]) {
        this.selectedEmploymentVh2Service.create({
          codeNumber,
          employmentVh2: await this.employmentVh2Service.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["establishedDiagnoses"]) {
        this.selectedEstablishedDiagnosesService.create(typeof id === "number" ? {
          codeNumber,
          establishedDiagnoses: await this.establishedDiagnosesService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      for (const id of payload.formDataByEntityName["familyConstellation"]) {
        this.selectedFamilyConstellationService.create(typeof id === "number" ? {
          codeNumber,
          familyConstellation: await this.familyConstellationService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      for (const id of payload.formDataByEntityName["interpreterRequired"]) {
        this.selectedInterpreterRequiredService.create({
          codeNumber,
          interpreterRequired: await this.interpreterRequiredService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["otherInterventions"]) {
        this.selectedOtherInterventionsService.create(typeof id === "number" ? {
          codeNumber,
          otherInterventions: await this.otherInterventionsService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      for (const id of payload.formDataByEntityName["previousIntervention"]) {
        this.selectedPreviousInterventionService.create(typeof id === "number" ? {
          codeNumber,
          previousIntervention: await this.previousInterventionService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      for (const id of payload.formDataByEntityName["problemArea"]) {
        await this.selectedProblemAreaService.create(typeof id === "number" ? {
          codeNumber,
          problemArea: await this.problemAreaService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      for (const id of payload.formDataByEntityName["reasonForUpdate"]) {
        this.selectedReasonForUpdateService.create({
          codeNumber,
          reasonForUpdate: await this.reasonForUpdateService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["schoolUniform"]) {
        this.selectedSchoolUniformService.create({
          codeNumber,
          schoolUniform: await this.schoolUniformService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["typeOfEffort"]) {
        this.selectedTypeOfEffortService.create({
          codeNumber,
          typeOfEffort: await this.typeOfEffortService.findOne({ where: { id: +id } })
        });
      }

      for (const id of payload.formDataByEntityName["whoParticipates"]) {
        this.selectedWhoParticipatesService.create(typeof id === "number" ? {
          codeNumber,
          whoParticipates: await this.whoParticipatesService.findOne({ where: { id: +id } })
        } : {
          codeNumber,
          other: id as string
        });
      }

      return true;
    }
    catch (e) {
      console.log("background data create error: ", e);
      return false;
    }
  }

  @Get('/get/:codeNumber')
  @ApiOkResponse({ type: BackgroundDataDto })
  async get(
    @Param('codeNumber') codeNumber: string
  ): Promise<BackgroundDataDto> {
    const metadata = await this.backgroundMetadataService.findOne({ where: { codeNumber: codeNumber } });
    const selectedGenderEntities = await this.selectedGenderService.find({ where: { codeNumber }, relations: ["gender"] });
    const selectedEducationVh1Entities = await this.selectedEducationVh1Service.find({ where: { codeNumber }, relations: ["educationVh1"] });
    const selectedEducationVh2Entities = await this.selectedEducationVh2Service.find({ where: { codeNumber }, relations: ["educationVh2"] });
    const selectedEmploymentVh1Entities = await this.selectedEmploymentVh1Service.find({ where: { codeNumber }, relations: ["employmentVh1"] });
    const selectedEmploymentVh2Entities = await this.selectedEmploymentVh2Service.find({ where: { codeNumber }, relations: ["employmentVh2"] });
    const selectedEstablishedDiagnosesEntities = await this.selectedEstablishedDiagnosesService.find({ where: { codeNumber }, relations: ["establishedDiagnoses"] });
    const selectedFamilyConstellationEntities = await this.selectedFamilyConstellationService.find({ where: { codeNumber }, relations: ["familyConstellation"] });
    const selectedInterpreterRequiredEntities = await this.selectedInterpreterRequiredService.find({ where: { codeNumber }, relations: ["interpreterRequired"] });
    const selectedOtherInterventionsEntities = await this.selectedOtherInterventionsService.find({ where: { codeNumber }, relations: ["otherInterventions"] });
    const selectedPreviousInterventionEntities = await this.selectedPreviousInterventionService.find({ where: { codeNumber }, relations: ["previousIntervention"] });
    const selectedProblemAreaEntities = await this.selectedProblemAreaService.find({ where: { codeNumber }, relations: ["problemArea"] });
    const selectedReasonForUpdateEntities = await this.selectedReasonForUpdateService.find({ where: { codeNumber }, relations: ["reasonForUpdate"] });
    const selectedSchoolUniformEntities = await this.selectedSchoolUniformService.find({ where: { codeNumber }, relations: ["schoolUniform"] });
    const selectedTypeOfEffortEntities = await this.selectedTypeOfEffortService.find({ where: { codeNumber }, relations: ["typeOfEffort"] });
    const selectedWhoParticipatesEntities = await this.selectedWhoParticipatesService.find({ where: { codeNumber }, relations: ["whoParticipates"] });

    const result: BackgroundDataDto = {
      ...metadata,
      formDataByEntityName: {
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
      }
    };

    return result;
  };
}

