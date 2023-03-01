import { Module } from '@nestjs/common';
import { PreviousInterventionService } from './previous-intervention.service';
import { PreviousInterventionController } from './previous-intervention.controller';

@Module({
  controllers: [PreviousInterventionController],
  providers: [PreviousInterventionService]
})
export class PreviousInterventionModule {}
