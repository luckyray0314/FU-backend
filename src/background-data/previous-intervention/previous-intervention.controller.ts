import { Controller } from '@nestjs/common';
import { PreviousInterventionService } from './previous-intervention.service';

@Controller('previous-intervention')
export class PreviousInterventionController {
  constructor(private readonly previousInterventionService: PreviousInterventionService) {}
}
