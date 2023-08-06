import { Module } from '@nestjs/common';
import { ChildSchoolModule } from '../important-events/child-school/child-school.module';
import { SelectedChildSchoolModule } from '../important-events/child-school/selected-child-school.module';
import { DuringInterventionModule } from '../important-events/during-intervention/during-intervention.module';
import { SelectedDuringInterventionModule } from '../important-events/during-intervention/selected-during-intervention.module';
import { DuringPastModule } from '../important-events/during-past/during-past.module';
import { SelectedDuringPastModule } from '../important-events/during-past/selected-during-past.module';
import { OtherInterventionsStartedModule } from '../important-events/otherinterventions-started/otherinterventions-started.module';
import { SelectedOtherInterventionsStartedModule } from '../important-events/otherinterventions-started/selected-otherinterventions-started.module';
import { ImportantEventsController } from './important-events.controller';
import { ImportantEventsService } from './important-events.service';

@Module({
  imports: [
    OtherInterventionsStartedModule,
    DuringInterventionModule,
    DuringPastModule,
    ChildSchoolModule,
    SelectedOtherInterventionsStartedModule,
    SelectedDuringInterventionModule,
    SelectedDuringPastModule,
    SelectedChildSchoolModule,
  ],
  providers: [ImportantEventsService],
  controllers: [ImportantEventsController],
})
export class ImportantEventsModule { }
