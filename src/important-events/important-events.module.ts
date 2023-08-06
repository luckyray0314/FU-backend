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
import { ChangeAccomodationModule } from './change-accomodation/change-accomodation.module';
import { ChangeEmploymentVh1Module } from './change-employment-vh1/change-employment-vh1.module';
import { ChangeEmploymentVh2Module } from './change-employment-vh2/change-employment-vh2.module';
import { SelectedChangeAccomodationModule } from './change-accomodation/selected-change-accomodation.module';
import { SelectedChangeEmploymentVh1Module } from './change-employment-vh1/selected-change-employment-vh1.module';
import { SelectedChangeEmploymentVh2Module } from './change-employment-vh2/selected-change-employment-vh2.module';

@Module({
  imports: [
    OtherInterventionsStartedModule,
    DuringInterventionModule,
    DuringPastModule,
    ChildSchoolModule,
    ChangeAccomodationModule,
    ChangeEmploymentVh1Module,
    ChangeEmploymentVh2Module,
    SelectedOtherInterventionsStartedModule,
    SelectedDuringInterventionModule,
    SelectedDuringPastModule,
    SelectedChildSchoolModule,
    SelectedChangeAccomodationModule,
    SelectedChangeEmploymentVh1Module,
    SelectedChangeEmploymentVh2Module,
  ],
  providers: [ImportantEventsService],
  controllers: [ImportantEventsController],
})
export class ImportantEventsModule { }
