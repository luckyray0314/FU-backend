import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BackgroundDataDto } from './background-data.dto';
import { EducationVh1Service } from './education-vh1/education-vh1.service';
import { EducationVh2Service } from './education-vh2/education-vh2.service';
import { EmploymentVh1Service } from './employment-vh1/employment-vh1.service';
import { EmploymentVh2Service } from './employment-vh2/employment-vh2.service';
import { EstablishedDiagnosesService } from './established-diagnoses/established-diagnoses.service';
import { FamilyConstellationService } from './family-constellation/family-constellation.service';
import { GenderService } from './gender/gender.service';
import { InterpreterRequiredService } from './interpreter-required/interpreter-required.service';
import { OtherInterventionsService } from './other-interventions/other-interventions.service';
import { PreviousInterventionService } from './previous-intervention/previous-intervention.service';
import { ProblemAreaService } from './problem-area/problem-area.service';
import { ReasonForUpdateService } from './reason-for-update/reason-for-update.service';
import { SchoolUniformService } from './school-uniform/school-uniform.service';
import { TypeOfEffortService } from './type-of-effort/type-of-effort.service';
import { WhoParticipatesService } from './who-participates/who-participates.service';

@ApiTags('Background Data Survey Management')
@Controller('background-data')
export class BackgroundDataController {
  constructor(
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
  ) { }

  @Get('/basicData')
  @ApiOkResponse({ type: BackgroundDataDto })
  async basicData(
  ): Promise<BackgroundDataDto> {
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
}
