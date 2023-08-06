import { Injectable } from '@nestjs/common';
import { ChildSchoolService } from '../important-events/child-school/child-school.service';
import { SelectedChildSchoolService } from '../important-events/child-school/selected-child-school.service';
import { DuringInterventionService } from '../important-events/during-intervention/during-intervention.service';
import { SelectedDuringInterventionService } from '../important-events/during-intervention/selected-during-intervention.service';
import { DuringPastService } from '../important-events/during-past/during-past.service';
import { SelectedDuringPastService } from '../important-events/during-past/selected-during-past.service';
import { OtherInterventionsStartedService } from '../important-events/otherinterventions-started/otherinterventions-started.service';
import { SelectedOtherInterventionsStartedService } from '../important-events/otherinterventions-started/selected-otherinterventions-started.service';
import { ImportantEventsBasicDataDto, ImportantEventsDataDto } from './important-events.dto';

@Injectable()
export class ImportantEventsService {
  constructor(
    public otherInterventionsStartedService: OtherInterventionsStartedService,
    public duringInterventionService: DuringInterventionService,
    public duringPastService: DuringPastService,
    public childSchoolService: ChildSchoolService,

    public selectedOtherInterventionsStartedService: SelectedOtherInterventionsStartedService,
    public selectedDuringInterventionService: SelectedDuringInterventionService,
    public selectedDuringPastService: SelectedDuringPastService,
    public selectedChildSchoolService: SelectedChildSchoolService,
  ) { }

  async basicData(): Promise<ImportantEventsBasicDataDto> {

    const otherInterventionsStartedEntities = await this.otherInterventionsStartedService.find();
    const duringInterventionEntities = await this.duringInterventionService.find();
    const duringPastEntities = await this.duringPastService.find();
    const childSchoolEntities = await this.childSchoolService.find();

    return {
      otherInterventionsStartedEntities,
      duringInterventionEntities,
      duringPastEntities,
      childSchoolEntities
    };
  }

  async get(codeNumber: string): Promise<ImportantEventsDataDto> {
    const selectedOtherInterventionsStartedEntities = await this.selectedOtherInterventionsStartedService.find({ where: { codeNumber }, relations: ["otherInterventionsStarted"] });
    const selectedDuringInterventionEntities = await this.selectedDuringInterventionService.find({ where: { codeNumber }, relations: ["duringIntervention"] });
    const selectedDuringPastEntities = await this.selectedDuringPastService.find({ where: { codeNumber }, relations: ["duringPast"] });
    const selectedChildSchoolEntities = await this.selectedChildSchoolService.find({ where: { codeNumber }, relations: ["childSchool"] });

    const result: ImportantEventsDataDto = {
      codeNumber,
      formDataByEntityName: {
        otherInterventionsStarted: selectedOtherInterventionsStartedEntities.map(data => data.other || data.otherInterventionsStarted.id),
        duringIntervention: selectedDuringInterventionEntities.map(data => data.other || data.duringIntervention.id),
        duringPast: selectedDuringPastEntities.map(data => data.other || data.duringPast.id),
        childSchool: selectedChildSchoolEntities.map(data => data.other || data.childSchool.id),
      }
    };
    return result;
  };
}
