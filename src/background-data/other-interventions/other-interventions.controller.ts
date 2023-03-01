import { Controller } from '@nestjs/common';
import { OtherInterventionsService } from './other-interventions.service';

@Controller('other-interventions')
export class OtherInterventionsController {
  constructor(private readonly otherInterventionsService: OtherInterventionsService) {}
}
