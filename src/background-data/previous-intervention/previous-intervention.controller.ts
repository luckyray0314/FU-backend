import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { PreviousInterventionEntity } from './entities/previous-intervention.entity';
import { PreviousInterventionService } from './previous-intervention.service';

@Crud({
  model: {
    type: PreviousInterventionEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('previous-intervention')
export class PreviousInterventionController {
  constructor(public service: PreviousInterventionService) {}
}
